/**
 * ニュースに出たモデルが、ベンチマーク比較表に載っているかを見る。
 *
 * ── なぜ必要か ──
 * 新モデルの発表時にはベンチマークも同時に公開されることが多い。
 * つまり**記事を書いた日が、比較表を更新できる日**である。
 * ところが記事だけ出して表を更新しないと、両者が静かにずれていく。
 *
 * 2026年9月、実際にずれていた。Claude Fable 5.1 / Mythos 5.1 の記事は
 * 9月1日に出ているのに、`MODEL_COMPARISON` には Fable 5 までしか無い。
 * **どの検査にも掛からず、指摘されるまで誰も気づかなかった。**
 *
 * ── 何を出すか ──
 * 候補を出すだけである。採否は判断が要る。
 * 記事本文の言い回し（「Qwen4 の設計を先出し」など）から未発表のモデル名を
 * 拾ってしまうことがあり、**機械的に足すと存在しない行が生まれる。**
 *
 * Usage:
 *   node scripts/check-model-coverage.mjs
 *   node scripts/check-model-coverage.mjs --json
 *   node scripts/check-model-coverage.mjs --days=180
 */
import { pathToFileURL, fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const args = process.argv.slice(2);
const asJson = args.includes("--json");
const days = Number(args.find((a) => a.startsWith("--days="))?.slice(7) ?? 120);

const load = (p) => import(pathToFileURL(join(rootDir, p)).href);
const { MODEL_COMPARISON } = await load("src/constants.js");
const { ARTICLES_META } = await load("src/data/articlesMeta.js");

/** 表記ゆれを吸収する。表は「GPT-5.6 Sol」、記事本文は「GPT 5.6 Sol」など */
const norm = (s) => s.toLowerCase().replace(/[\s\-_.]/g, "");

const known = new Map(MODEL_COMPARISON.map((m) => [norm(m.name), m.name]));

const ymd = (a) => a.date || a.newsDate || "";
const since = new Date(Date.now() - days * 86400000).toISOString().slice(0, 10);
const recent = ARTICLES_META.filter((a) => ymd(a) >= since);

/**
 * モデル名らしい並びを拾う。ベンダー名の列挙は aiCompanies.js ではなく
 * ここに置く。**表に載る粒度（製品ライン）と企業名は別物**だからである。
 */
const FAMILY =
  "Claude (?:Fable|Mythos|Opus|Sonnet|Haiku)|GPT|Gemini|Grok|Qwen|DeepSeek|Kimi|Llama|GLM|Composer|MAI|LongCat|ERNIE|Mistral|Command";
const VARIANT = "Sol|Terra|Luna|Astra|Pro|Flash|Max|Air|mini|Code|Thinking|Instant";
const RE = new RegExp(`\\b(${FAMILY})[ -]?(\\d+(?:\\.\\d+)?)(?:[ -](${VARIANT}))?`, "g");

const found = new Map();
for (const a of recent) {
  const text = `${a.title} ${a.excerpt}`;
  for (const m of text.matchAll(RE)) {
    const name = `${m[1]} ${m[2]}${m[3] ? ` ${m[3]}` : ""}`.replace(/\s+/g, " ").trim();
    const k = norm(name);
    if (!found.has(k)) found.set(k, { name, hits: 0, latest: "", example: "", ids: [] });
    const e = found.get(k);
    e.hits++;
    if (ymd(a) > e.latest) {
      e.latest = ymd(a);
      e.example = a.title;
    }
    if (e.ids.length < 3) e.ids.push(a.id);
  }
}

const missing = [...found.values()]
  .filter((e) => !known.has(norm(e.name)))
  .sort((a, b) => b.latest.localeCompare(a.latest) || b.hits - a.hits);

const result = { days, tableSize: known.size, extracted: found.size, missing };

if (asJson) {
  console.log(JSON.stringify(result, null, 2));
  process.exit(0);
}

console.log(`ベンチマーク比較表 ${known.size} 件 / 直近${days}日の記事から抽出 ${found.size} 種`);
console.log("");

if (!missing.length) {
  console.log("✅ 記事に出たモデルはすべて比較表にあります。");
  process.exit(0);
}

console.log(`表に無いモデルの候補: ${missing.length} 種（新しい順）`);
console.log("");
for (const e of missing) {
  console.log(`  ${e.latest}  ${e.name.padEnd(18)} 記事${String(e.hits).padStart(2)}件`);
  console.log(`             ${e.example.slice(0, 60)}`);
}
console.log("");
console.log("**候補である。そのまま足さないこと。**");
console.log("記事本文の言い回しから未発表のモデル名を拾うことがある（「Qwen4 の設計を先出し」等）。");
console.log("公式のベンチマーク値を確認できたものだけを、次で追加する。");
console.log("");
console.log("  node scripts/upsert-model.mjs <model.json> --dry-run");
console.log("");
console.log("なお比較表の rating は**ベンチマークのみの総合値**であり、");
console.log("レビュー記事の★（料金・提供条件を含む5軸加重平均）とは別の尺度である。混ぜないこと。");
