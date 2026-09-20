/**
 * Routine が作った作業ブランチの棚卸し。
 *
 * ── なぜ必要か ──
 * Routine は1日2回走り、一次ソースに到達できなかった記事を
 * `routine/review-YYYY-MM-DD-HHMM` に退避する。退避そのものは正しい判断だが、
 * ブランチは誰も消さない。**放置すると月60本のペースで増える。**
 *
 * 実際、導入から2日で3本あり、そのうち2本は記事が既に main に入っている
 * 「残骸」だった。溜まる原因の大半は未決着の下書きではなく、こちらである。
 *
 * ── 日付で判定しないこと ──
 * 「N日経ったら消す」は2つの理由で誤る。
 *
 * 1. マージ済みの残骸は、**1日目でも消してよい**。日付は関係ない
 * 2. 未決着の下書きは、**14日経っても消してよいとは限らない**。
 *    保留理由の大半は実行環境の egress であって記事の欠陥ではなく、
 *    日によって到達可否が変わる。時間で消すと、検証できるようになった
 *    瞬間に捨てることになる
 *
 * したがって判定は日付ではなく **「ブランチ上の記事 id が全部 main にあるか」**
 * で行う。squash merge では元コミットが main の履歴に残らないため、
 * コミットの到達性ではなく記事の中身で見る必要がある。
 *
 * Usage:
 *   node scripts/check-stale-branches.mjs           # 人が読む形式
 *   node scripts/check-stale-branches.mjs --json    # ワークフロー用
 */
import { execFileSync } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");

/** Routine が作るブランチだけを対象にする。claude/* や main は絶対に触らない */
const PREFIX = "routine/";

/** 再検証の目安。egress は日によって変わるため、一度は自動でやり直す */
/**
 * 決着させた下書き。`closed-drafts.txt` に理由付きで記録する。
 *
 * **公開せずにクローズした下書きは、記事が main に入らない。** そのため
 * 「記事がすべて main にあるか」で判定するこの棚卸しでは、**永久に
 * 「未決着」のまま報告され続ける。**
 *
 * ブランチを消せば止まるが、**エージェントの実行環境からは消せない**
 * （git proxy が ref の削除を拒否する）。ブラウザからの手作業が済むまでの間、
 * 決着済みのものが鳴り続けることになる。
 *
 * CLAUDE.md は「クローズする場合は理由を1行残す」と定めているのに、
 * **その1行を残す場所が無かった。**
 */
function loadClosedDrafts() {
  const f = join(__dirname, "closed-drafts.txt");
  const out = new Map();
  if (!existsSync(f)) return out;
  for (const line of readFileSync(f, "utf-8").split("\n")) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const [name, ...rest] = t.split(/\s{2,}|\t/);
    out.set(name.trim(), rest.join(" ").trim());
  }
  return out;
}
const closedDrafts = loadClosedDrafts();

const RECHECK_DAYS = 7;
/** 決着の期限。公開するかクローズするかを決める */
const DECIDE_DAYS = 14;

function git(args, opts = {}) {
  return execFileSync("git", args, {
    encoding: "utf-8",
    cwd: rootDir,
    maxBuffer: 256 * 1024 * 1024,
    ...opts,
  });
}

function tryGit(args) {
  try {
    return { ok: true, out: git(args) };
  } catch (e) {
    return { ok: false, out: `${e.stdout ?? ""}${e.stderr ?? ""}` };
  }
}

/** 指定 ref の articlesMeta.js から記事 id を取り出す */
function articleIds(ref) {
  const r = tryGit(["show", `${ref}:src/data/articlesMeta.js`]);
  if (!r.ok) return null;
  return new Set([...r.out.matchAll(/"id":\s*"([^"]+)"/g)].map((m) => m[1]));
}

// リモートのブランチを取りに行く。Actions の checkout は既定で
// 既定ブランチしか持ってこないため、ここで明示的に取得する。
// **--prune を付ける。** 付けないと、削除済みのブランチがローカルの
// リモート追跡参照に残り続け、**もう存在しないブランチを毎回報告する。**
// 2026年9月5日、自動削除が済んだ fable-5-1 が翌日も一覧に出ていた。
tryGit(["fetch", "-q", "--prune", "origin", "+refs/heads/*:refs/remotes/origin/*"]);

const mainIds = articleIds("origin/main");
if (!mainIds) {
  console.error("origin/main の articlesMeta.js を読めませんでした。");
  process.exit(1);
}

const branches = git(["for-each-ref", "--format=%(refname:short)", "refs/remotes/origin"])
  .split("\n")
  .map((s) => s.trim())
  .filter((s) => s.startsWith(`origin/${PREFIX}`))
  .map((s) => s.slice("origin/".length));

const today = new Date(
  (process.env.MAINTENANCE_TODAY && /^\d{4}-\d{2}-\d{2}$/.test(process.env.MAINTENANCE_TODAY)
    ? process.env.MAINTENANCE_TODAY
    : new Date().toISOString().slice(0, 10)) + "T00:00:00Z"
);

const merged = [];
const pending = [];
const closed = [];

for (const b of branches) {
  const ids = articleIds(`origin/${b}`);
  if (!ids) continue;
  const extra = [...ids].filter((id) => !mainIds.has(id));
  const last = git(["log", "-1", "--format=%cI", `origin/${b}`]).trim().slice(0, 10);
  const days = Math.floor((today - new Date(`${last}T00:00:00Z`)) / 86400000);

  if (extra.length === 0) {
    merged.push({ branch: b, last, days });
  } else if (closedDrafts.has(b)) {
    // 公開せずに決着させたもの。記事は main に入らないので、
    // 記録が無ければ永久に「未決着」として鳴り続ける
    closed.push({ branch: b, last, days, articles: extra, reason: closedDrafts.get(b) });
  } else {
    pending.push({ branch: b, last, days, articles: extra });
  }
}

merged.sort((a, b) => b.days - a.days);
pending.sort((a, b) => b.days - a.days);
closed.sort((a, b) => b.days - a.days);

const result = {
  recheckDays: RECHECK_DAYS,
  decideDays: DECIDE_DAYS,
  // 記事がすべて main にある = 消してよい。日付は判定に使っていない
  merged,
  // main に無い記事を抱えている = まだ決着していない
  pending,
  // 公開せずに決着済み。ブランチだけが残っている
  closed,
  needsRecheck: pending.filter((p) => p.days >= RECHECK_DAYS && p.days < DECIDE_DAYS),
  needsDecision: pending.filter((p) => p.days >= DECIDE_DAYS),
};

if (process.argv.includes("--json")) {
  console.log(JSON.stringify(result, null, 2));
  process.exit(0);
}

console.log(`Routine ブランチの棚卸し（${branches.length} 本）\n`);

if (merged.length) {
  console.log(`■ 削除してよい（記事はすべて main にある）: ${merged.length} 本`);
  for (const m of merged) console.log(`  - ${m.branch}（最終 ${m.last}）`);
  console.log("");
} else {
  console.log("■ 削除してよいブランチはありません\n");
}

if (closed.length) {
  console.log(`■ 決着済み（公開せずにクローズ。ブランチだけ残っている）: ${closed.length} 本`);
  console.log("  **ブラウザから削除してください。** エージェントの実行環境からは");
  console.log("  ref の削除ができません（git proxy が拒否します）。");
  for (const c of closed) console.log(`  - ${c.branch}\n      理由: ${c.reason}`);
  console.log("");
}

if (pending.length) {
  console.log(`■ 未決着: ${pending.length} 本`);
  for (const p of pending) {
    const mark =
      p.days >= DECIDE_DAYS ? " ← 決着させる" : p.days >= RECHECK_DAYS ? " ← 再検証する" : "";
    console.log(`  - ${p.branch}（${p.days}日経過）${mark}`);
    for (const a of p.articles) console.log(`      ${a}`);
  }
  console.log("");
} else {
  console.log("■ 未決着の下書きはありません\n");
}

console.log(
  `再検証の目安 ${RECHECK_DAYS} 日 / 決着の期限 ${DECIDE_DAYS} 日\n` +
    "未決着を期限で削除しないこと。保留理由の大半は実行環境の egress であり、\n" +
    "記事の欠陥ではない。到達できるようになれば公開できる。"
);
