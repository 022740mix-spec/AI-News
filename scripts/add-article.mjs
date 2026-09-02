/**
 * 記事を1件追加する。
 *
 * Usage:
 *   node scripts/add-article.mjs <article.json> [--dry-run]
 *   node scripts/add-article.mjs --stdin        [--dry-run]
 *
 * ── なぜこのスクリプトが必要か ──
 * 記事の追加を自律実行（Routine）に任せるうえでの危険は、
 * モデルが 1.8MB の articlesBody.js を読んで書き戻すことにある。
 * 読み込みが途中で切れれば、そのまま記事が静かに消える。
 *
 * そこで役割を分ける。
 *   モデル  … 記事1件ぶんの JSON を出すだけ。既存データには一切触れない
 *   スクリプト … 既存データをパースし、1件足し、全体を決定論的に書き戻す
 *
 * モデルが扱う対象を「1件ぶんの JSON」に限定すれば、
 * 入力が長すぎることに起因する欠損は原理的に起きえない。
 *
 * 検査に1つでも失敗したらファイルを一切書き換えずに終了する。
 * 「一部だけ書けた」状態を作らないことが、この設計の要点になる。
 */
import { readFileSync } from "node:fs";
import { ARTICLES_META } from "../src/data/articlesMeta.js";
import ARTICLES_BODY from "../src/data/articlesBody.js";
import { splitArticle, writeArticles, META_KEYS, BODY_KEYS } from "./serialize-articles.mjs";

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const useStdin = args.includes("--stdin");
const pathArg = args.find((a) => !a.startsWith("--"));

if (!useStdin && !pathArg) {
  console.error("使い方: node scripts/add-article.mjs <article.json> [--dry-run]");
  console.error("        node scripts/add-article.mjs --stdin [--dry-run]");
  process.exit(2);
}

const raw = useStdin
  ? readFileSync(0, "utf-8")
  : readFileSync(pathArg, "utf-8");

let input;
try {
  input = JSON.parse(raw);
} catch (e) {
  console.error(`❌ JSON として読めません: ${e.message}`);
  process.exit(1);
}

// 1件でも配列でも受ける
const incoming = Array.isArray(input) ? input : [input];
if (incoming.length === 0) {
  console.error("❌ 記事が空です。");
  process.exit(1);
}

const KNOWN_KEYS = new Set([...META_KEYS, ...BODY_KEYS]);
const VALID_TYPES = new Set(["news", "feature", "review", "guide"]);
const YMD = /^\d{4}-\d{2}-\d{2}$/;
const ID_RE = /^[a-z0-9][a-z0-9-]*$/;

const errors = [];
const warnings = [];
const existingIds = new Set(ARTICLES_META.map((a) => a.id));

for (const [i, a] of incoming.entries()) {
  const at = (msg) => errors.push(`[${i + 1}件目: ${a?.id ?? "id不明"}] ${msg}`);
  const warn = (msg) => warnings.push(`[${a?.id ?? "id不明"}] ${msg}`);

  if (!a || typeof a !== "object" || Array.isArray(a)) {
    at("記事はオブジェクトである必要があります。");
    continue;
  }

  // ── id ──
  if (!a.id) at("id がありません。");
  else if (!ID_RE.test(a.id)) at(`id の形式が不正です: ${a.id}（英小文字・数字・ハイフンのみ）`);
  else if (existingIds.has(a.id)) at(`id が既存の記事と重複しています: ${a.id}`);
  else existingIds.add(a.id);

  // ── 必須フィールド ──
  for (const k of ["type", "category", "title", "excerpt", "date", "author", "readTime"]) {
    if (a[k] === undefined || a[k] === "") at(`${k} がありません。`);
  }
  if (a.type && !VALID_TYPES.has(a.type)) {
    at(`type が不正です: ${a.type}（${[...VALID_TYPES].join(" / ")} のいずれか）`);
  }
  if (a.date && !YMD.test(a.date)) at(`date は YYYY-MM-DD 形式で指定してください: ${a.date}`);
  if (a.newsDate && !YMD.test(a.newsDate)) at(`newsDate は YYYY-MM-DD 形式で指定してください: ${a.newsDate}`);
  if (a.lastReviewed && !YMD.test(a.lastReviewed)) at(`lastReviewed は YYYY-MM-DD 形式で指定してください: ${a.lastReviewed}`);
  if (a.type === "news" && !a.newsDate) {
    at("type が news の記事には newsDate が必要です。");
  }

  // ── タグ ──
  if (!Array.isArray(a.tags) || a.tags.length === 0) at("tags が空です。");
  else {
    const dup = a.tags.filter((t, j) => a.tags.indexOf(t) !== j);
    if (dup.length) at(`tags が重複しています: ${[...new Set(dup)].join(", ")}`);
    if (a.tags.some((t) => typeof t !== "string" || !t.trim())) at("tags に空の要素があります。");
  }

  // ── 本文 ──
  if (!Array.isArray(a.body) || a.body.length === 0) at("body が空です。");
  else {
    if (a.body.some((p) => typeof p !== "string")) at("body の要素は文字列である必要があります。");
    // 生 Markdown の混入。review-check.mjs の規則20と同じ観点を
    // 追加の時点で捕まえ、壊れたまま入るのを防ぐ
    a.body.forEach((p, j) => {
      if (typeof p !== "string") return;
      if (/^#\s/.test(p.trim())) at(`body[${j}] に h1 見出しがあります（本文に Markdown 見出しは使わない）。`);
      if (/^```/.test(p.trim())) at(`body[${j}] がコードフェンス単独の段落になっています。`);
      if (/^\|.*\|$/m.test(p.trim()) && p.includes("---")) at(`body[${j}] に Markdown の表があります（tables を使う）。`);
    });
  }

  // ── 一次ソース ──
  if (!Array.isArray(a.primarySources) || a.primarySources.length === 0) {
    warn("primarySources がありません。検証可能性のため原則として付けること。");
  } else {
    a.primarySources.forEach((s, j) => {
      if (!s || typeof s !== "object") { at(`primarySources[${j}] がオブジェクトではありません。`); return; }
      if (!s.title) at(`primarySources[${j}] に title がありません。`);
      if (!s.url) at(`primarySources[${j}] に url がありません。`);
      else if (!/^https?:\/\//.test(s.url)) at(`primarySources[${j}] の url が外部 URL ではありません: ${s.url}`);
    });
  }

  // ── 表示位置を持つ埋め込み ──
  // afterParagraph がないと永久に非表示になる（review-check.mjs 規則19）
  for (const key of ["tables", "figures", "charts", "embeds"]) {
    if (!Array.isArray(a[key])) continue;
    a[key].forEach((item, j) => {
      if (item && typeof item === "object" && item.afterParagraph === undefined) {
        at(`${key}[${j}] に afterParagraph がありません（記事に表示されません）。`);
      }
    });
  }

  // ── 未知のキー ──
  for (const k of Object.keys(a)) {
    if (!KNOWN_KEYS.has(k)) {
      warn(`未知のキー "${k}" は保存されません（META_KEYS / BODY_KEYS のどちらにもありません）。`);
    }
  }
}

if (warnings.length) {
  console.log("⚠️  警告");
  for (const w of warnings) console.log("   " + w);
  console.log("");
}

if (errors.length) {
  console.error(`❌ 検査に失敗したため、ファイルは一切変更していません（${errors.length} 件）`);
  for (const e of errors) console.error("   " + e);
  process.exit(1);
}

// ── 追加 ──
// 配列の順序は表示に影響しない（UI は newsDate でソートする）ため末尾に足す
const metaArr = [...ARTICLES_META];
const bodyMap = { ...ARTICLES_BODY };
for (const a of incoming) {
  const { meta, body } = splitArticle(a);
  metaArr.push(meta);
  bodyMap[meta.id] = body;
}

if (dryRun) {
  console.log(`✅ 検査を通過しました（--dry-run のため書き込みません）`);
  console.log(`   追加予定: ${incoming.length} 件 / 記事 ${ARTICLES_META.length} → ${metaArr.length}`);
  for (const a of incoming) console.log(`   + ${a.id}`);
  process.exit(0);
}

const result = writeArticles(metaArr, bodyMap);

console.log(`✅ ${incoming.length} 件を追加しました。`);
for (const a of incoming) console.log(`   + ${a.id}  ${a.title}`);
console.log(`   記事: ${ARTICLES_META.length} → ${result.meta}`);
console.log("");
console.log("   次を順に実行してください:");
console.log("     node scripts/check-article-manifest.mjs --update");
console.log("     node scripts/review-check.mjs");
console.log("     node scripts/generate-feed.mjs && node scripts/generate-sitemap.mjs");
