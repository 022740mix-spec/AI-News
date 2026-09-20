/**
 * 公開済みの記事を1件だけ更新する。
 *
 * Usage:
 *   node scripts/update-article.mjs <patch.json> [--dry-run]
 *
 * ── なぜ必要か ──
 * CLAUDE.md は記事データの直接編集を禁じ、追加は `add-article.mjs` を通せと定めている。
 * ところが **add-article.mjs は追加しかできない。** 公開済み記事を直す経路が
 * どこにも無く、**方針が唯一の手段を塞いでいた。**
 *
 * 実害が出ている。2026年9月12日、SpaceX による Anysphere 買収の完了を記事にした際、
 * 本文に「cursor-editor と cursor-cli は月次見直しの対象なので次回反映する」と書いた。
 * その反映が行われず、**サイトの記事がサイトの別の記事と食い違ったまま**残った。
 * 直す手段が無かったことが理由の一つである。
 *
 * ── 設計 ──
 * `add-article.mjs` と同じ考え方を取る。**モデルが扱う対象を極小にする。**
 * 全文を書き直させず、**置換する文字列の組だけ**を受け取る。
 *
 *   モデル      … 「この一文を、この一文に」という組を出すだけ
 *   スクリプト  … 既存データをパースし、その1件だけ差し替え、決定論的に書き戻す
 *
 * さらに `upsert-model.mjs` と同じく、**書いたあとに読み直して検査し、
 * 1つでも合わなければ元のバイト列に戻す。** 半分書けた状態を作らない。
 *
 * ── patch.json の形 ──
 * {
 *   "id": "cursor-editor",
 *   "replacements": [
 *     { "find": "置換前の正確な文字列", "replace": "置換後" }
 *   ],
 *   "insertAfter": [                           // 任意。既存段落の直後に段落を挿入する
 *     { "find": "挿入位置の目印になる文字列", "paragraphs": ["新しい段落"] }
 *   ],
 *   "appendToBody": "【追記 2026-09-20】…",   // 任意。body の末尾に段落を足す
 *   "setMeta": { "lastReviewed": "2026-09-20" } // 任意。meta の項目を差し替える
 * }
 *
 * **段落の中に改行を入れないこと。** 本文は `<p>{richArticleText(p)}</p>` で描画され、
 * `richArticleText` は改行を扱わず、CSS にも `white-space: pre-wrap` が無い。
 * **`\n\n` は空白1つに潰れ、段落として表示されない。** 段落を分けたいときは
 * `insertAfter` を使う。
 *
 * **`insertAfter` は `afterParagraph` を自動で補正する。** 段落を挿入すると
 * 以降の添字が1つずつずれ、**表や図が別の場所に移動する。** `review-check.mjs` の
 * 規則19は `afterParagraph` の有無しか見ないため、**ずれても検査を通り抜ける。**
 *
 * **find は、その記事の body 内でちょうど1回だけ出現しなければならない。**
 * 0回なら誤り、2回以上なら意図しない箇所を壊しうるため、どちらも中断する。
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { ARTICLES_META } from "../src/data/articlesMeta.js";
import ARTICLES_BODY from "../src/data/articlesBody.js";
import { writeArticles, DATA_DIR, META_KEYS } from "./serialize-articles.mjs";

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const file = args.find((a) => !a.startsWith("--"));
if (!file) {
  console.error("使い方: node scripts/update-article.mjs <patch.json> [--dry-run]");
  process.exit(1);
}

const patch = JSON.parse(readFileSync(file, "utf-8"));
const fail = (msg) => {
  console.error(`❌ ${msg}`);
  process.exit(1);
};

if (!patch.id) fail("patch.json に id がありません。");
const meta = ARTICLES_META.find((a) => a.id === patch.id);
if (!meta) fail(`記事が見つかりません: ${patch.id}`);
const bodyEntry = ARTICLES_BODY[patch.id];
if (!bodyEntry) fail(`本文が見つかりません: ${patch.id}`);

// ── 置換の検査。適用前に全件が「ちょうど1回」であることを確かめる ──
const reps = patch.replacements ?? [];
for (const r of reps) {
  if (typeof r.find !== "string" || typeof r.replace !== "string") {
    fail("replacements の各要素は find / replace の文字列が必要です。");
  }
  const n = (bodyEntry.body ?? []).filter((p) => p.includes(r.find)).length;
  if (n === 0) fail(`見つかりません: 「${r.find.slice(0, 60)}」`);
  if (n > 1) fail(`${n} 箇所に一致します。意図しない箇所を壊しうるため中断: 「${r.find.slice(0, 60)}」`);
}

// ── 1件だけ組み立てる ──
const newBody = { ...bodyEntry, body: [...(bodyEntry.body ?? [])] };
for (const r of reps) {
  const i = newBody.body.findIndex((p) => p.includes(r.find));
  newBody.body[i] = newBody.body[i].replace(r.find, r.replace);
}

// ── 段落の挿入。afterParagraph の補正を伴う ──
const inserts = patch.insertAfter ?? [];
for (const ins of inserts) {
  if (typeof ins.find !== "string" || !Array.isArray(ins.paragraphs)) {
    fail("insertAfter の各要素は find（文字列）と paragraphs（配列）が必要です。");
  }
  for (const para of ins.paragraphs) {
    if (typeof para !== "string") fail("insertAfter.paragraphs の要素は文字列である必要があります。");
    if (para.includes("\n") && !para.trimStart().startsWith("```")) {
      fail(`段落に改行が含まれています。描画側で空白に潰れます: 「${para.slice(0, 40)}」`);
    }
  }
  const at = newBody.body.findIndex((p) => p.includes(ins.find));
  if (at === -1) fail(`挿入位置が見つかりません: 「${ins.find.slice(0, 60)}」`);
  if (newBody.body.filter((p) => p.includes(ins.find)).length > 1) {
    fail(`挿入位置が複数あります: 「${ins.find.slice(0, 60)}」`);
  }
  newBody.body.splice(at + 1, 0, ...ins.paragraphs);
  // 挿入位置より後ろを指している添字を、挿入した数だけずらす
  const shift = ins.paragraphs.length;
  for (const key of ["tables", "figures", "charts", "embeds"]) {
    if (!Array.isArray(newBody[key])) continue;
    newBody[key] = newBody[key].map((x) =>
      typeof x.afterParagraph === "number" && x.afterParagraph > at
        ? { ...x, afterParagraph: x.afterParagraph + shift }
        : x
    );
  }
}

if (patch.appendToBody) newBody.body.push(patch.appendToBody);

const newMeta = { ...meta };
for (const [k, v] of Object.entries(patch.setMeta ?? {})) {
  if (!META_KEYS.includes(k)) fail(`meta に無いキーです: ${k}`);
  newMeta[k] = v;
}

if (dryRun) {
  console.log(`✅ 検査を通過しました（--dry-run のため書き込みません）`);
  console.log(`   対象: ${patch.id}`);
  for (const r of reps) console.log(`   置換: 「${r.find.slice(0, 50)}」→「${r.replace.slice(0, 50)}」`);
  for (const ins of inserts) console.log(`   挿入: 「${ins.find.slice(0, 40)}」の直後に ${ins.paragraphs.length} 段落`);
  if (patch.appendToBody) console.log(`   追記: 「${patch.appendToBody.slice(0, 60)}」`);
  for (const [k, v] of Object.entries(patch.setMeta ?? {})) console.log(`   meta: ${k} = ${v}`);
  process.exit(0);
}

// ── 書く前に元のバイト列を控える ──
const metaPath = join(DATA_DIR, "articlesMeta.js");
const bodyPath = join(DATA_DIR, "articlesBody.js");
const beforeMetaBytes = readFileSync(metaPath);
const beforeBodyBytes = readFileSync(bodyPath);

const metaArr = ARTICLES_META.map((a) => (a.id === patch.id ? newMeta : a));
const bodyMap = { ...ARTICLES_BODY, [patch.id]: newBody };
writeArticles(metaArr, bodyMap);

// ── 読み直して検査する。合わなければ戻す ──
const restore = (msg) => {
  writeFileSync(metaPath, beforeMetaBytes);
  writeFileSync(bodyPath, beforeBodyBytes);
  console.error(`❌ ${msg}`);
  console.error("   元のバイト列に戻しました。ファイルは変更されていません。");
  process.exit(1);
};

let after;
try {
  const bust = `?t=${Date.now()}`;
  after = {
    meta: (await import(pathToFileURL(metaPath).href + bust)).ARTICLES_META,
    body: (await import(pathToFileURL(bodyPath).href + bust)).default,
  };
} catch (e) {
  restore(`書き込み後に読み込めませんでした: ${e.message}`);
}

if (after.meta.length !== ARTICLES_META.length) {
  restore(`記事数が変わりました（期待 ${ARTICLES_META.length} / 実際 ${after.meta.length}）`);
}
const lost = ARTICLES_META.filter((a) => !after.meta.some((b) => b.id === a.id)).map((a) => a.id);
if (lost.length) restore(`記事が消えました: ${lost.slice(0, 5).join(", ")}`);

// 対象以外が1文字でも変わっていないこと
for (const a of ARTICLES_META) {
  if (a.id === patch.id) continue;
  const b = after.meta.find((x) => x.id === a.id);
  if (JSON.stringify(a) !== JSON.stringify(b)) restore(`別の記事の meta が変わりました: ${a.id}`);
  if (JSON.stringify(ARTICLES_BODY[a.id]) !== JSON.stringify(after.body[a.id])) {
    restore(`別の記事の本文が変わりました: ${a.id}`);
  }
}
// 対象が意図どおりになっていること
const got = after.body[patch.id];
if (JSON.stringify(got) !== JSON.stringify(newBody)) restore(`本文が意図と一致しません: ${patch.id}`);
if (JSON.stringify(after.meta.find((x) => x.id === patch.id)) !== JSON.stringify(newMeta)) {
  restore(`meta が意図と一致しません: ${patch.id}`);
}
for (const r of reps) {
  if (got.body.some((p) => p.includes(r.find))) restore(`置換前の文字列が残っています: 「${r.find.slice(0, 40)}」`);
}

console.log(`✅ 更新しました: ${patch.id}`);
console.log(`   置換 ${reps.length} 件${patch.appendToBody ? " / 追記 1 段落" : ""}`);
console.log("");
console.log("   次を順に実行してください:");
console.log("     node scripts/check-article-manifest.mjs --update");
console.log("     node scripts/review-check.mjs");
console.log("     node scripts/generate-feed.mjs && node scripts/generate-sitemap.mjs");
