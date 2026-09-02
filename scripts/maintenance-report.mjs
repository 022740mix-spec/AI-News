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

// ── 4. 校閲チェックの警告 ──
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
    if (s.passive && !actionable) continue;
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
  lines.push("記事データの編集は自律実行では行いません。対話セッションで対応してください。");
}
console.log(lines.join("\n"));

// 終了コードは常に 0。検知の失敗でワークフロー自体を落とさない
// （落とすと通知が「壊れた CI」として無視されるようになる）。
// 報告の要否は標準出力の末尾マーカーで伝える。
if (process.env.GITHUB_OUTPUT) {
  const { appendFileSync } = await import("node:fs");
  appendFileSync(process.env.GITHUB_OUTPUT, `actionable=${actionable}\n`);
}
