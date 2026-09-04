/**
 * 用語集に足すべき語と、使われていない語を出す。
 *
 * ── なぜ専用の検査が要るのか ──
 * 週次の計器（`weekly-metrics.mjs`）にも似た節があるが、あちらは
 * **「ガイド本文のどこかに文字列が出るか」**を見ている。この2つは大きく違う。
 *
 *   2回以上使われたタグ 221件
 *     ガイド本文のどこかに出る … 129
 *     用語集に見出しがある     … 35
 *
 * **94件が「触れられてはいるが、定義は無い」**状態だった。
 * ツール別ページの一文に出てくることと、用語集を引いて説明があることは別である。
 * 読者が「エッジAI って何」と思って用語集を開いたときに何も無ければ、
 * どこかの本文に一度出ていたかどうかは関係がない。
 *
 * CLAUDE.md の規定はこちら側である。
 *
 *   用語集への新用語追加は、記事で2回以上使用された用語に限る
 *
 * ── 語彙をどこから取るか ──
 * 記事本文から日本語の用語を機械的に切り出すのは精度が出ない。
 * 代わりに**タグを使う**。タグはサイト自身が選んだ語彙であり、
 * 命名規則も統廃合の運用もある。**「2回以上使用」はタグの使用回数で数える。**
 *
 * 限界も書いておく。**タグになっていない語は拾えない。** 本文で繰り返し
 * 出てくるのにタグが付いていない概念は、この検査では見えない。
 *
 * ── 固有名詞は対象外 ──
 * 「xAI が用語集に無い」は当たり前で、企業名は用語集に書くものではない。
 * `aiCompanies.js` と照合して落とす。
 *
 * Usage:
 *   node scripts/check-glossary-coverage.mjs
 *   node scripts/check-glossary-coverage.mjs --json
 *   node scripts/check-glossary-coverage.mjs --min=3   # 何回以上を候補にするか
 *
 * 終了コード: 常に 0（Warn のみ）
 */
import { readFileSync, existsSync } from "node:fs";
import { pathToFileURL, fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const args = process.argv.slice(2);
const asJson = args.includes("--json");
const minUses = Number(args.find((a) => a.startsWith("--min="))?.slice(6) ?? 2);

const load = (p) => import(pathToFileURL(join(rootDir, p)).href);
const { ARTICLES_META } = await load("src/data/articlesMeta.js");
const guide = await load("src/data/vibeCodingGuide.js");
const companies = await load("src/data/aiCompanies.js");

/** 用語集の見出し語 */
const headwords = [];
for (const block of guide.GLOSSARY_BY_GENRE ?? []) {
  for (const t of block.terms ?? []) {
    if (t?.word) headwords.push({ word: String(t.word), genre: block.title ?? block.id });
  }
}
const headLower = headwords.map((h) => h.word.toLowerCase());

/** 見出し語は「LLM（大規模言語モデル）」のように括弧付きなので、包含で照合する */
const hasEntry = (tag) => {
  const t = tag.toLowerCase();
  return headLower.some((w) => w.includes(t));
};

/**
 * **見出しに無くても、既存の定義文の中で説明されていることがある。**
 *
 * 例として「コンテキストウィンドウ」は、見出し「コンテキスト」の定義に
 * 「上限（コンテキストウィンドウ）」と書かれている。新規に足すのではなく
 * **見出しに昇格させるか、既存の見出しを言い換える**のが正しい対応になる。
 *
 * 見出しだけを見ていると、この2つを同じ「無い」として扱ってしまう。
 */
const definitions = [];
for (const block of guide.GLOSSARY_BY_GENRE ?? []) {
  for (const t of block.terms ?? []) {
    if (t?.mean) definitions.push({ word: String(t.word), mean: String(t.mean) });
  }
}
const explainedIn = (tag) =>
  definitions.filter((d) => d.mean.includes(tag)).map((d) => d.word);

/** 固有名詞（企業名・製品名・モデル名）は用語集の対象ではない */
const properNouns = new Set();
for (const c of companies.AI_COMPANIES ?? []) {
  if (c.name) properNouns.add(String(c.name).toLowerCase());
  for (const p of c.products ?? []) properNouns.add(String(p).toLowerCase());
}
const META_TAGS = new Set(["週刊まとめ", "分析", "特集", "まとめ"]);

/**
 * 用語集に載せないと判断済みのタグ。
 *
 * **一度だけ人手で分類した結果を記録している。** タグから機械的に候補を出すと
 * 134件のうち大半が対象外（分野の分類、記事の型、固有名詞）だった。
 * 「初出が最近の語だけ」に絞る案も試したが、Android・EU・Sol・DeepMind が
 * 並んで改善しなかった。**タグは用語集の語彙の代理にならない。**
 *
 * このファイルがあることで、以後は**未分類の新しいタグだけ**が候補に出る。
 */
const allowed = new Set();
{
  const f = join(__dirname, "allowed-non-glossary.txt");
  if (existsSync(f)) {
    for (const line of readFileSync(f, "utf-8").split("\n")) {
      const t = line.trim();
      if (!t || t.startsWith("#")) continue;
      allowed.add(t.split(/\s{2,}|\t/)[0].trim());
    }
  }
}

function isProperNoun(tag) {
  const t = tag.toLowerCase();
  if (properNouns.has(t)) return true;
  // 片方向だけ。「固有名詞がタグを含む」は誤判定を生む（weekly-metrics.mjs 参照）
  for (const n of properNouns) if (n.length >= 3 && t.startsWith(n)) return true;
  return /^[A-Za-z][A-Za-z .-]*\s?\d/.test(tag); // GPT-5 / Fable 5 など
}

/** タグの使用回数 */
const uses = new Map();
for (const a of ARTICLES_META) {
  if (a.status === "retracted") continue;
  for (const t of a.tags ?? []) uses.set(t, (uses.get(t) ?? 0) + 1);
}

// 足すべき候補: 2回以上使われ、固有名詞でなく、用語集に見出しが無い
const missing = [...uses]
  .filter(([tag, n]) =>
    n >= minUses && !META_TAGS.has(tag) && !allowed.has(tag) && !isProperNoun(tag) && !hasEntry(tag)
  )
  .map(([tag, n]) => ({ tag, uses: n, explainedIn: explainedIn(tag) }))
  .sort((a, b) => b.uses - a.uses);

// 使われていない見出し語: 統廃合の検討材料（CLAUDE.md の四半期見直し）
const tagSet = new Set([...uses.keys()].map((t) => t.toLowerCase()));
const unusedEntries = headwords
  .filter((h) => {
    const w = h.word.toLowerCase();
    // 見出し語がタグのどれとも重ならない
    return ![...tagSet].some((t) => w.includes(t) || t.includes(w));
  })
  .map((h) => h.word);

const result = {
  headwords: headwords.length,
  taggedTerms: uses.size,
  minUses,
  missing,
  unusedEntries,
};

if (asJson) {
  console.log(JSON.stringify(result, null, 2));
  process.exit(0);
}

console.log(`用語集の網羅チェック（見出し ${headwords.length} 語 / タグ ${uses.size} 種）`);
console.log("");

if (missing.length) {
  console.log(`📝 記事で ${minUses} 回以上使われているのに、用語集に見出しが無い語: ${missing.length} 件`);
  console.log("");
  for (const m of missing.slice(0, 25)) {
    const note = m.explainedIn.length
      ? `  ← 「${m.explainedIn[0]}」の定義文で触れている（見出しへの昇格を検討）`
      : "";
    console.log(`   ${String(m.uses).padStart(3)} 記事  ${m.tag}${note}`);
  }
  if (missing.length > 25) console.log(`   … 他 ${missing.length - 25} 件`);
  console.log("");
  console.log("   **そのまま足さないこと。** CLAUDE.md の追加条件は次のとおり。");
  console.log("     - 既存の見出し語と重複・包含関係がないことを確認する");
  console.log("     - 英語が自然な略語（MCP, RAG, API 等）は英語表記、それ以外は日本語");
  console.log("   用語集は `vibeCodingGuide.js` にあり、**Routine では書き込めません**。");
  console.log("   対話セッションで追加してください。");
  console.log("");
} else {
  console.log(`✅ ${minUses} 回以上使われた語はすべて用語集にあります。`);
  console.log("");
}

if (unusedEntries.length) {
  console.log(`🔍 記事のタグに一度も現れない見出し語: ${unusedEntries.length} 件`);
  console.log("   （用語集は記事の語彙と一致させる必要はないので、これは削除の指示ではない。");
  console.log("    四半期ごとの統廃合を検討するときの材料として出している）");
  console.log("");
  console.log(`   ${unusedEntries.slice(0, 20).join(" / ")}`);
  if (unusedEntries.length > 20) console.log(`   … 他 ${unusedEntries.length - 20} 件`);
  console.log("");
}

console.log("**限界**: タグになっていない語は拾えません。本文で繰り返し出てくるのに");
console.log("タグが付いていない概念は、この検査では見えません。");
