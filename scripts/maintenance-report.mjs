/**
 * 定期メンテナンスの点検結果を1つの Markdown にまとめる。
 *
 * ── 役割分担 ──
 * このスクリプトは「判断が要らない検査」だけを担う。
 * ニュース調査や記事執筆は言語モデルが要るため Routine 側で行う。
 * ここは GitHub Actions の無料枠（公開リポジトリは実行時間無制限）で
 * 毎日走らせる前提で、外部 API も鍵も使わない。
 *
 * ── 出力の設計 ──
 * 「異常なし」を毎日 Issue に出すと通知が無視されるようになる。
 * したがって、報告すべきことがある場合のみ actionable=true を返し、
 * ワークフロー側はそのときだけ Issue を立てる。
 *
 * Usage:
 *   node scripts/maintenance-report.mjs              # Markdown を標準出力へ
 *   node scripts/maintenance-report.mjs --json
 */
import { execFileSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const asJson = process.argv.includes("--json");

const today = new Date().toISOString().slice(0, 10);

/** 子スクリプトを走らせ、終了コードと出力を取る */
function run(script, args = []) {
  try {
    const out = execFileSync("node", [join(__dirname, script), ...args], {
      encoding: "utf-8",
      cwd: rootDir,
      maxBuffer: 32 * 1024 * 1024,
      stdio: ["ignore", "pipe", "pipe"],
    });
    return { code: 0, out };
  } catch (e) {
    return {
      code: e.status ?? 1,
      out: `${e.stdout ?? ""}${e.stderr ?? ""}`,
    };
  }
}

const sections = [];
let actionable = false;

// ── 1. 記事・フィールドの消失 ──
{
  const r = run("check-article-manifest.mjs");
  if (r.code !== 0) {
    actionable = true;
    sections.push({
      level: "error",
      title: "記事またはフィールドが消失している",
      note: "公開を止めるべき状態です。deploy も落ちます。",
      body: r.out.trim(),
    });
  }
}

// ── 2. 期限切れの記述 ──
{
  const r = run("check-expired-content.mjs");
  const hits = r.out.split("\n").filter((l) => /^\s*[-•]/.test(l));
  if (!/期限を過ぎた記述は見つかりませんでした/.test(r.out)) {
    actionable = true;
    sections.push({
      level: "warn",
      title: `期限を過ぎた記述がある${hits.length ? `（${hits.length} 箇所）` : ""}`,
      note: "読者が採用や支出の判断に使う数字が古いままになっています。",
      body: r.out.trim(),
    });
  }
}

// ── 3. 月次見直しの期限超過 ──
{
  const mod = await import(pathToFileURL(join(rootDir, "src/data/articlesMeta.js")).href);
  const meta = mod.ARTICLES_META || [];
  const now = new Date(`${today}T00:00:00Z`);
  const overdue = [];
  for (const a of meta) {
    if (a.reviewCadence !== "monthly") continue;
    if (!a.lastReviewed) {
      overdue.push({ id: a.id, title: a.title, days: null });
      continue;
    }
    const days = Math.floor((now - new Date(`${a.lastReviewed}T00:00:00Z`)) / 86400000);
    if (days > 31) overdue.push({ id: a.id, title: a.title, days, last: a.lastReviewed });
  }
  const total = meta.filter((a) => a.reviewCadence === "monthly").length;
  if (overdue.length) {
    actionable = true;
    overdue.sort((x, y) => (y.days ?? 1e9) - (x.days ?? 1e9));
    sections.push({
      level: "warn",
      title: `月次見直しが期限超過（${overdue.length} / ${total} 本）`,
      note:
        "Footer で「主要な比較記事・料金記事は毎月1回以上見直す」と公言しています。\n" +
        "見直しでは料金・モデル世代・提供条件に加え、**中核機能が世代交代していないか**を必ず確認してください。\n" +
        "確認だけして lastReviewed を進める運用は禁止です。",
      body: overdue
        .map((o) =>
          o.days === null
            ? `- \`${o.id}\` — lastReviewed なし — ${o.title}`
            : `- \`${o.id}\` — ${o.days}日経過（最終 ${o.last}） — ${o.title}`
        )
        .join("\n"),
    });
  }
}

// ── 4. トップのヒーローが古くなっていないか ──
// HomePage は「heroScope が none でない最新記事」をヒーローに選ぶ。
// 新着に一律で heroScope: "none" が付くと候補が尽き、トップだけが
// 何週間も過去で止まる。実際に8月11日以降の18本すべてに none が付き、
// ヒーローが23日間 8月10日の記事のままになっていた。
//
// データとしては正常なので既存のどの検査にも掛からない。読者の画面で
// 何が見えているかを見に行く必要がある。
{
  const mod = await import(pathToFileURL(join(rootDir, "src/data/articlesMeta.js")).href);
  const meta = mod.ARTICLES_META || [];
  const ymd = (a) =>
    a?.newsDate && /^\d{4}-\d{2}-\d{2}$/.test(a.newsDate)
      ? a.newsDate
      : a?.date && /^\d{4}-\d{2}-\d{2}$/.test(a.date)
        ? a.date
        : "";
  const sorted = [...meta].sort((a, b) => ymd(b).localeCompare(ymd(a)));
  const hero = sorted.find((a) => (a.heroScope ?? "day") !== "none");
  const newest = sorted[0];

  if (!hero) {
    actionable = true;
    sections.push({
      level: "error",
      title: "トップに出せる記事が1本もない",
      note: "全記事に heroScope: \"none\" が付いています。トップのヒーローが空になります。",
    });
  } else {
    const gapDays = Math.floor(
      (new Date(`${ymd(newest)}T00:00:00Z`) - new Date(`${ymd(hero)}T00:00:00Z`)) / 86400000
    );
    // 新着が数本 none でも数日は許容する。1週間空いたら異常とみなす。
    if (gapDays > 7) {
      actionable = true;
      const blocked = sorted
        .filter((a) => ymd(a) > ymd(hero) && (a.heroScope ?? "day") === "none")
        .filter((a) => a.status !== "retracted");
      sections.push({
        level: "warn",
        title: `トップのヒーローが ${gapDays} 日ぶん古い`,
        note:
          `最新記事は ${ymd(newest)} ですが、トップに出ているのは ${ymd(hero)} の記事です。\n` +
          `間の記事に \`heroScope: "none"\` が付いてヒーロー候補から外れています。\n` +
          "取り下げ記事以外に none を付ける理由が無ければ、外してください。",
        body: blocked
          .slice(0, 20)
          .map((a) => `- \`${a.id}\` — ${ymd(a)} — ${a.title}`)
          .join("\n"),
      });
    }
  }
}

// ── 5. ガイドの陳腐化 ──
// ガイドは古びても古く見えない。ニュースには日付が付き、レビューには
// 「最終確認日」があるが、ガイドの「Gemini 2.5 Pro の200万トークン」は
// 書かれた時点で正しく、今も文として自然に読める。だから誰も直さない。
// サイト自身（レビューの lastReviewed と現行モデル一覧）を突き合わせ先にする。
{
  const r = run("check-guide-freshness.mjs");

  // 検査そのものが落ちたら、それ自体をエラーとして報告する。
  // 終了コードを見ないと、例外で落ちても件数が 0 件に読めてしまい、
  // 「異常なし」と区別がつかない。検査が静かに無効化される。
  if (r.code !== 0) {
    actionable = true;
    sections.push({
      level: "error",
      title: "ガイド鮮度チェックがエラーで落ちている",
      note: "検査が動いていません。落ちたまま放置すると、ガイドの陳腐化を誰も検知できなくなります。",
      body: r.out.trim().slice(0, 4000),
    });
  }

  const m = r.out.match(/対応が必要: (\d+) 件/);
  const count = r.code === 0 && m ? Number(m[1]) : 0;

  // ガイドの陳腐化はゆっくり進む。毎日 Issue にすると同じ内容が続き、
  // 通知そのものが無視されるようになる。週1回（月曜）だけ通知に載せ、
  // 他の曜日は、別の理由で Issue が立つときにだけ添える。
  const jstDay = new Date(Date.now() + 9 * 3600 * 1000).getUTCDay();
  const notifyToday = jstDay === 1;

  if (count > 0) {
    if (notifyToday) actionable = true;
    sections.push({
      passive: !notifyToday,
      level: "warn",
      title: `ガイドに古い記述の疑いがある（${count} 件）`,
      note:
        "レビューは月次で見直しているのに、同じツールのガイドが置き去りになっていないかを見ています。\n" +
        "**旧世代のモデル名は、説明用の例なら正しい記述です。** 現行の条件として書いているものだけが対象になります。\n" +
        "ガイドの書き換えは編集判断を伴うため、自律実行では行いません。",
      body: r.out.trim().slice(0, 6000),
    });
  }
}

// ── 6. 校閲チェックの警告 ──
{
  const r = run("review-check.mjs");
  const warns = r.out.split("\n").filter((l) => l.startsWith("⚠️"));
  if (r.code !== 0) {
    actionable = true;
    sections.push({
      level: "error",
      title: "校閲チェックがエラーで落ちている",
      body: r.out.trim().slice(0, 4000),
    });
  } else if (warns.length) {
    // 警告は毎日同じものが出るため、それ自体では Issue を立てない。
    // 既に他の理由で報告する場合にのみ添える。
    sections.push({
      level: "info",
      title: `校閲チェックの警告（${warns.length} 件）`,
      body: warns.join("\n"),
      passive: true,
    });
  }
}

// ── 出力 ──
if (asJson) {
  console.log(JSON.stringify({ date: today, actionable, sections }, null, 2));
  process.exit(0);
}

const icon = { error: "🔴", warn: "🟡", info: "ℹ️" };
const lines = [];
lines.push(`## AI News 定期点検 — ${today}`);
lines.push("");
if (!actionable) {
  lines.push("対応が必要な項目はありません。");
} else {
  for (const s of sections) {
    lines.push(`### ${icon[s.level] ?? ""} ${s.title}`);
    lines.push("");
    if (s.note) { lines.push(s.note); lines.push(""); }
    if (s.body) {
      const isList = s.body.trimStart().startsWith("-");
      lines.push(isList ? s.body : "```\n" + s.body + "\n```");
      lines.push("");
    }
  }
  lines.push("---");
  lines.push("");
  lines.push("この Issue は `daily-maintenance.yml` が自動で作成しました。");
  lines.push("訂正は「訂正・取り下げポリシー」に従い、編集履歴に必ず記録してください。黙って直さないこと。");
}
console.log(lines.join("\n"));

// 終了コードは常に 0。検知の失敗でワークフロー自体を落とさない
// （落とすと通知が「壊れた CI」として無視されるようになる）。
// 報告の要否は標準出力の末尾マーカーで伝える。
if (process.env.GITHUB_OUTPUT) {
  const { appendFileSync } = await import("node:fs");
  appendFileSync(process.env.GITHUB_OUTPUT, `actionable=${actionable}\n`);
}
