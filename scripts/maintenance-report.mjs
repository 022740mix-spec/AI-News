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

/**
 * 通知の周期を分ける。
 *
 * ── なぜ必要か ──
 * 検知を足すほど、1つの Issue に性質の違うものが混ざる。実際、日次の報告に
 * ガイドの指摘28件が並び、**急ぎのものがその中に埋もれる**状態になっていた。
 *
 * 直し手と急ぎ具合で分ける。
 *
 *   daily   … 放置すると誤情報が公開され続けるもの。Routine が直せるものが多い
 *   weekly  … 編集の材料。月曜にまとめて見る
 *   monthly … 棚卸し。人間の判断が要り、1日2日では動かないもの
 *
 * **検知を増やすことより、周期を分けることのほうが効く。**
 */
const SCOPES = ["daily", "weekly", "monthly"];
const scopeArg = process.argv.find((a) => a.startsWith("--scope="))?.slice(8) ?? "daily";
if (!SCOPES.includes(scopeArg)) {
  console.error(`--scope は ${SCOPES.join(" / ")} のいずれかです。`);
  process.exit(2);
}
const scope = scopeArg;
const inScope = (s) => s === scope;

// 日付に依存する検査（月次見直しの超過、記事が止まっていないか）を
// 実際に鳴らして確かめられるよう、基準日を差し替えられるようにする。
// 検査を書いたが一度も鳴らしたことがない、という状態を作らないため。
const today = /^\d{4}-\d{2}-\d{2}$/.test(process.env.MAINTENANCE_TODAY ?? "")
  ? process.env.MAINTENANCE_TODAY
  : new Date().toISOString().slice(0, 10);

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
if (inScope("daily"))
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
if (inScope("daily"))
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
if (inScope("monthly"))
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
if (inScope("daily"))
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

// ── 4b. 記事が止まっていないか ──
// Routine が 07:00 / 15:00 JST に走る前提で運用しているが、Routine 側の
// 失敗はここからは見えない。実行ステータスが SUCCEEDED でも、記事が1本も
// 出ていないことがある（「インフラ上の異常なく終了した」しか意味しないため）。
//
// 2026年9月3日、Routine はリポジトリへの書き込み権限が無く push だけが拒否
// されたが、ステータスは緑のままで、4本の記事が失われた。ヒーローの鮮度検知
// （項目4）は7日空くまで鳴らないため、その間ずっと気づけない。
//
// したがって「サイトに新しい記事が出ているか」を直接見る。
// 原因は問わない。止まっていることだけを検知する。
if (inScope("daily"))
{
  const mod = await import(pathToFileURL(join(rootDir, "src/data/articlesMeta.js")).href);
  const meta = mod.ARTICLES_META || [];
  const ymd = (a) =>
    a?.newsDate && /^\d{4}-\d{2}-\d{2}$/.test(a.newsDate)
      ? a.newsDate
      : a?.date && /^\d{4}-\d{2}-\d{2}$/.test(a.date)
        ? a.date
        : "";
  const newest = [...meta].map(ymd).filter(Boolean).sort().pop();

  if (newest) {
    const days = Math.floor(
      (new Date(`${today}T00:00:00Z`) - new Date(`${newest}T00:00:00Z`)) / 86400000
    );
    // ニュースの少ない日は本数を減らしてよい運用のため、1日空くのは正常。
    // 3日空いたら、少ない日が続いたのではなく仕組みが止まっている疑いが濃い。
    if (days >= 3) {
      actionable = true;
      sections.push({
        level: "warn",
        title: `新しい記事が ${days} 日出ていない`,
        note:
          `最新記事は ${newest} です。記事作成 Routine（07:00 / 15:00 JST）が\n` +
          "動いていない可能性があります。**実行ステータスが緑でも記事が出ていない\n" +
          "ことがあります**（インフラ上の異常なく終了したことしか意味しないため）。\n\n" +
          "確認する順に並べます。\n\n" +
          "1. Routine にリポジトリが紐付いているか（紐付いていないと clone は通るが push だけ拒否される）\n" +
          "2. Routine の実行記録に、記事を書いたのに push できなかった旨が残っていないか\n" +
          "3. ニュースが本当に少なかっただけか（その場合は対応不要）",
      });
    }
  }
}

// ── 4b-2. 週次の計器が出ているか ──
// 週まとめは2026年3月〜6月に14本出たあと、74日間止まっていた。
// **止まったことに誰も気づかなかった。** 公約はしていなかったが、
// UI には「毎週月曜公開」「毎週の振り返り」と書いてあり、実態と食い違っていた。
//
// 週次を続けると決めた以上、止まったら鳴らす。頻度の約束は、
// 検知が付いていなければ守られない。
if (inScope("weekly"))
{
  const mod = await import(pathToFileURL(join(rootDir, "src/data/articlesMeta.js")).href);
  const meta = mod.ARTICLES_META || [];
  const weeklies = meta.filter((a) => a.heroScope === "week" || a.weekRoundupPeriod);
  const pub = (a) =>
    /^\d{4}-\d{2}-\d{2}$/.test(String(a?.date ?? "")) ? String(a.date) : String(a?.newsDate ?? "");
  const latest = weeklies.map(pub).filter(Boolean).sort().pop();

  if (latest) {
    const days = Math.floor(
      (new Date(`${today}T00:00:00Z`) - new Date(`${latest}T00:00:00Z`)) / 86400000
    );
    // 月曜公開なので、通常は最大7日。8日を超えたら1回飛んでいる
    if (days > 8) {
      actionable = true;
      sections.push({
        level: "warn",
        title: `週次の計器が ${days} 日出ていない`,
        note:
          `最後の週次は ${latest} です。**月曜公開なので、通常は7日以内に次が出ます。**\n\n` +
          "記事作成 Routine の月曜の回が担当します。数字は\n" +
          "`node scripts/weekly-metrics.mjs` で出ます（外部サイトに依存しないため、\n" +
          "調査が egress で詰まる日でも必ず出せます）。\n\n" +
          "**出さないと決めたなら、UI の「毎週月曜公開」「毎週の振り返り」も同時に直してください。**\n" +
          "実態と食い違う文言を残さないこと。",
      });
    }
  }
}

// ── 4b-3. ニュースに出たモデルが比較表に載っているか ──
// 新モデルの発表時にはベンチマークも同時に公開されることが多い。
// **記事を書いた日が、比較表を更新できる日**である。
// ところが記事だけ出して表を更新しないと、両者が静かにずれていく。
//
// 2026年9月、実際にずれていた。Claude Fable 5.1 / Mythos 5.1 の記事は
// 9月1日に出ているのに、MODEL_COMPARISON には Fable 5 までしか無かった。
// どの検査にも掛からず、指摘されるまで誰も気づかなかった。
if (inScope("daily"))
{
  const r = run("check-model-coverage.mjs", ["--json"]);
  if (r.code === 0) {
    let data = null;
    try { data = JSON.parse(r.out); } catch { /* 出力が壊れていれば黙って飛ばす */ }
    // 直近30日に記事が出たものだけを対象にする。古い取りこぼしを毎日蒸し返さない
    const cut = new Date(Date.now() - 30 * 86400000).toISOString().slice(0, 10);
    const fresh = (data?.missing ?? []).filter((m) => m.latest >= cut);
    if (fresh.length) {
      actionable = true;
      sections.push({
        level: "warn",
        title: `比較表に無いモデルが記事に出ている（${fresh.length} 件）`,
        note:
          "新モデルの発表時にはベンチマークも同時に公開されます。**記事を書いた日が、\n" +
          "表を更新できる日**です。\n\n" +
          "**そのまま足さないこと。** 記事本文の言い回しから未発表のモデル名を拾うことが\n" +
          "あります（「Qwen4 の設計を先出し」等）。公式のベンチマーク値を確認できたものだけを\n" +
          "`node scripts/upsert-model.mjs <model.json>` で追加してください。\n\n" +
          "**ベンチマークの版が違う値を同じ列に入れないこと。** 表の terminalBench は\n" +
          "2.0 / 2.1 の値で、4.0 の値を並べると比較にならなくなります。版が違うものは\n" +
          "列を null にして summary に版付きで書きます。",
        body: fresh
          .slice(0, 10)
          .map((m) => `- **${m.name}** — 記事 ${m.hits} 件（最新 ${m.latest}）\n  ${m.example}`)
          .join("\n"),
      });
    }
  }
}

// ── 4c. Routine の作業ブランチの棚卸し ──
// Routine は1日2回走り、一次ソースに到達できなかった記事をブランチに退避する。
// 退避は正しい判断だが、ブランチは誰も消さない。放置すると月60本の
// ペースで増え、開いた PR が並び続けることで通知そのものが無視される。
//
// 導入から2日で3本あり、そのうち2本は記事が既に main に入っている
// 「残骸」だった。溜まる原因の大半は未決着の下書きではなく、こちらである。
//
// 判定は日付ではなく「ブランチ上の記事 id が全部 main にあるか」で行う。
// squash merge では元コミットが main の履歴に残らないため。
if (inScope("daily"))
{
  const r = run("check-stale-branches.mjs", ["--json"]);
  if (r.code !== 0) {
    actionable = true;
    sections.push({
      level: "error",
      title: "ブランチ棚卸しがエラーで落ちている",
      note: "落ちたまま放置すると、作業ブランチが際限なく溜まります。",
      body: r.out.trim().slice(0, 3000),
    });
  } else {
    let data = null;
    try {
      data = JSON.parse(r.out);
    } catch {
      // 出力が壊れている場合は上の code チェックと同様に扱う
      actionable = true;
      sections.push({
        level: "error",
        title: "ブランチ棚卸しの出力を読めない",
        body: r.out.trim().slice(0, 2000),
      });
    }

    if (data) {
      // 残骸は削除するだけなので、それ単体では Issue を立てない。
      // ワークフロー側が自動削除し、他の理由で Issue が立つときだけ添える。
      if (data.merged.length) {
        sections.push({
          passive: true,
          level: "info",
          title: `マージ済みの作業ブランチ（${data.merged.length} 本）`,
          note: "記事はすべて main にあります。ワークフローが自動削除します。",
          body: data.merged.map((m) => `- \`${m.branch}\`（最終 ${m.last}）`).join("\n"),
        });
      }

      // 未決着は「期限で削除」ではなく「期限で決着させる」。
      // 保留理由の大半は実行環境の egress であって記事の欠陥ではなく、
      // 日によって到達可否が変わる。時間で消すと、検証できるように
      // なった瞬間に捨てることになる。
      const recheck = data.needsRecheck ?? [];
      const decide = data.needsDecision ?? [];

      if (decide.length) {
        actionable = true;
        sections.push({
          level: "warn",
          title: `保留中の下書きが決着していない（${decide.length} 本）`,
          note:
            `${data.decideDays} 日を超えました。公開するか、クローズするかを決めてください。\n` +
            "**クローズする場合は理由を1行残してください。** 記録が無いと、同じネタを\n" +
            "来週また調査して、また保留にする、を繰り返します。\n\n" +
            "多くはクローズになるはずで、それで構いません。価値は「出さなかったこと」にあります。",
          body: decide
            .map((p) => `- \`${p.branch}\`（${p.days}日経過）\n${p.articles.map((a) => `  - ${a}`).join("\n")}`)
            .join("\n"),
        });
      }

      if (recheck.length) {
        sections.push({
          passive: true,
          level: "info",
          title: `保留中の下書きの再検証時期（${recheck.length} 本）`,
          note:
            `${data.recheckDays} 日が経過しました。保留理由の大半は実行環境の egress であり、\n` +
            "**記事の欠陥ではありません。** 到達可否は日によって変わるため、裏取りを\n" +
            "やり直すと公開できる場合があります。記事作成 Routine が次回に見直します。",
          body: recheck
            .map((p) => `- \`${p.branch}\`（${p.days}日経過）\n${p.articles.map((a) => `  - ${a}`).join("\n")}`)
            .join("\n"),
        });
      }
    }
  }
}

// ── 4d. 用語集に足すべき語（週次） ──
// CLAUDE.md は「用語集への新用語追加は、記事で2回以上使用された用語に限る」と
// 定めているが、**その候補を出す手段が無かった。**
//
// 週次の計器にも似た節があるが、あちらは「ガイド本文のどこかに文字列が出るか」
// を見ている。2回以上使われたタグ221件のうち、ガイド本文に出るのは129件だが、
// **用語集に見出しがあるのは35件**しかなかった。94件が「触れられてはいるが
// 定義は無い」状態である。ツール別ページの一文に出てくることと、用語集を
// 引いて説明があることは別である。
if (inScope("weekly"))
{
  const r = run("check-glossary-coverage.mjs", ["--json"]);
  if (r.code === 0) {
    let d = null;
    try { d = JSON.parse(r.out); } catch { /* 壊れていれば飛ばす */ }
    if (d?.missing?.length) {
      actionable = true;
      sections.push({
        level: "warn",
        title: `用語集に見出しが無い語（${d.missing.length} 件）`,
        note:
          `記事で ${d.minUses} 回以上使われているのに、用語集（見出し ${d.headwords} 語）に\n` +
          "定義がありません。**読者が意味を調べに来たときに何も無い**状態です。\n\n" +
          "**そのまま足さないこと。** 既存の見出しと重複・包含関係がないかを確認し、\n" +
          "英語が自然な略語（MCP, RAG, API 等）は英語、それ以外は日本語で書きます。\n\n" +
          "用語集に載せないと判断したものは `scripts/allowed-non-glossary.txt` に\n" +
          "**理由を添えて**登録してください。次回から候補に出なくなります。\n\n" +
          "`vibeCodingGuide.js` は **Routine では書き込めません。** 対話セッションで追加します。",
        body: d.missing.slice(0, 20).map((m) => `- ${m.uses} 記事 — **${m.tag}**`).join("\n"),
      });
    }
  }
}

// ── 5. ガイドの陳腐化 ──
// ガイドは古びても古く見えない。ニュースには日付が付き、レビューには
// 「最終確認日」があるが、ガイドの「Gemini 2.5 Pro の200万トークン」は
// 書かれた時点で正しく、今も文として自然に読める。だから誰も直さない。
// サイト自身（レビューの lastReviewed と現行モデル一覧）を突き合わせ先にする。
if (inScope("weekly"))
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
  // 通知そのものが無視されるようになる。**周期の分離（--scope=weekly）が
  // その役割を担うので、ここでの曜日判定は不要になった。**
  if (count > 0) {
    actionable = true;
    sections.push({
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
if (inScope("daily"))
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

// ── 7. 企業台帳の鮮度（月次） ──
// 71社すべてが時間で腐るデータ（従業員数・売上・評価額・株式）を持つのに、
// **更新の経路も鮮度の検査も無かった。** 実例として、台帳は Hugging Face を
// 「未上場・評価額 $4.5B（2023年）」としていたが、記事側では NVIDIA が
// $12.93B で買収したことを報じていた。
//
// 記事の期限切れ検査は料金語の近くにある期限しか拾わないため、台帳の
// 事業イベント（買収のクローズ、施設の稼働）は別の検査で見る。
if (inScope("monthly"))
{
  const r = run("check-company-data.mjs", ["--json"]);
  if (r.code === 0) {
    let d = null;
    try { d = JSON.parse(r.out); } catch { /* 壊れていれば飛ばす */ }
    if (d) {
      const lines = [];
      if (d.overdue?.length) {
        lines.push(`**期日を過ぎた「予定」: ${d.overdue.length} 件**`);
        for (const o of d.overdue.slice(0, 8)) {
          lines.push(`- ${o.name}（${o.where}）「${o.raw}」= ${o.date} → ${Math.abs(o.diff)}日前`);
        }
        lines.push("");
      }
      if (d.upcoming?.length) {
        lines.push(`**90日以内に期日を迎える: ${d.upcoming.length} 件**`);
        for (const o of d.upcoming.slice(0, 8)) {
          lines.push(`- ${o.name}「${o.raw}」= ${o.date}（あと${o.diff}日）`);
        }
        lines.push("");
      }
      if (d.stale?.length) {
        lines.push(`**記述が古い社: ${d.stale.length} / ${d.companies}**`);
        for (const o of d.stale.slice(0, 12)) lines.push(`- ${o.newestYear} — ${o.name}`);
      }
      if (lines.length) {
        actionable = true;
        sections.push({
          level: "warn",
          title: "企業台帳（aiCompanies.js）の鮮度",
          note:
            "**台帳は Routine では直せません**（設計判断を伴うため Read のみ）。\n" +
            "一次ソースを確認したうえで、対話セッションで更新してください。\n\n" +
            "「記述が古い」は、その社の記述に出てくる最も新しい年で判定しています。\n" +
            "年を書く性質でない社（Adobe、Apple 等）は対象外です。",
          body: lines.join("\n"),
        });
      }
    }
  }
}

// ── 8. 月次見直しの対象外レビューの放置（月次） ──
// 月次見直しの対象は12本と決めた。それ自体は方針どおりだが、
// **対象外が43本あり、最も古いものは半年近く放置されている**という事実は
// どこにも見えていなかった。頻度は約束しないが、見えないのとは違う。
if (inScope("monthly"))
{
  const mod = await import(pathToFileURL(join(rootDir, "src/data/articlesMeta.js")).href);
  const meta = mod.ARTICLES_META || [];
  const now = new Date(`${today}T00:00:00Z`);
  const others = meta
    .filter((a) => a.type === "review" && a.reviewCadence !== "monthly")
    .filter((a) => a.status !== "retracted")
    .map((a) => {
      const base = a.lastReviewed || a.date;
      return { id: a.id, title: a.title, last: base,
               days: Math.floor((now - new Date(`${base}T00:00:00Z`)) / 86400000) };
    })
    .filter((a) => a.days >= 120)
    .sort((x, y) => y.days - x.days);

  if (others.length) {
    actionable = true;
    sections.push({
      level: "warn",
      title: `月次対象外のレビューが長く放置されている（${others.length} 本）`,
      note:
        "月次見直しの対象は12本で、それ以外に頻度は約束していません（Footer の記載どおり）。\n" +
        "**約束していないことと、見えていないことは違います。** 120日以上経ったものを出します。\n\n" +
        "対象を増やすなら `reviewCadence: \"monthly\"` を付け、**Footer の文言も同時に直してください。**\n" +
        "取り下げる判断もありえます。放置し続けるのが最も悪い選択です。",
      body: others.slice(0, 15).map((o) => `- ${o.days}日 — \`${o.id}\` — ${o.title}`).join("\n"),
    });
  }
}

// ── 9. 点検そのものが動いているか（日次） ──
// 「異常があるときだけ Issue」の設計は、通知が無視されるのを防ぐために
// 正しいが、**異常が無い状態と点検が止まった状態を区別できない。**
//
// ワークフローは自分が動かなかったことを検知できない。動いていないのだから。
// ここでは心拍ファイルを読み、Routine 側からも同じ検査を走らせることで、
// **独立した2つのスケジューラが互いを見る**形にしている。
if (inScope("daily"))
{
  const r = run("check-maintenance-heartbeat.mjs", ["--json"]);
  try {
    const d = JSON.parse(r.out);
    if (!d.ok) {
      actionable = true;
      sections.push({
        level: "error",
        title: `日次点検の心拍が ${d.days ?? "?"} 日止まっている`,
        note:
          `最終実行は ${d.lastRunJst || "記録なし"} です。\n` +
          "**点検が止まると、記事の消失も期限切れも誰も見ていない状態になります。**\n" +
          "Actions が無効化されていないか（60日間動きが無いと schedule は自動停止します）、\n" +
          "ワークフローが失敗し続けていないかを確認してください。",
      });
    }
  } catch { /* 読めなければ黙って飛ばす。心拍は補助的な検査である */ }
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
