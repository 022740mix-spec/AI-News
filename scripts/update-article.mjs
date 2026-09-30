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
 *   "replaceTables": [                         // 任意。既存の表を caption で特定して差し替える
 *     { "matchCaption": "既存の caption の一部", "caption": "…", "headers": [...], "rows": [[...]] }
 *     // caption を持たない表は matchIndex（tables 配列の添字、0 始まり）で指す:
 *     { "matchIndex": 0, "caption": "…", "headers": [...], "rows": [[...]] }
 *   ],
 *   "addTables": [                             // 任意。表を足す。位置は段落の文字列で指定する
 *     { "after": "この段落の直後に置く", "caption": "…", "headers": [...], "rows": [[...]] }
 *   ],
 *   "appendToBody": "【追記 2026-09-20】…",   // 任意。body の末尾に段落を足す（配列も可）
 *   "addPrimarySources": [                     // 任意。出典を足す。url の重複は中断する
 *     { "title": "…", "site": "…", "url": "https://…" }
 *   ],
 *   "removePrimarySources": [                  // 任意。url で1件を特定して出典を外す（存在しない URL の除去など）
 *     { "url": "https://…" }
 *   ],
 *   "updatePrimarySources": [                  // 任意。url で1件を特定し title / site を差し替える
 *     { "url": "https://…", "title": "…" }
 *   ],
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
  // 同じ段落の中に複数回出ると、置換は最初の1回にしか効かず、残りが取り残される。
  const para = (bodyEntry.body ?? []).find((p) => p.includes(r.find));
  if (para.split(r.find).length - 1 > 1) {
    fail(`同じ段落内に複数回出現します。1回しか置換されず取り残しが出るため中断: 「${r.find.slice(0, 60)}」`);
  }
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

// ── 表の差し替え ──
//
// **訂正では、表そのものが古くなることがある。** 追加しかできないと、
// 古い表を残したまま新しい表を足すことになり、読者には矛盾して見える。
// 位置（`afterParagraph`）は既存のものを引き継ぐ。
for (const t of patch.replaceTables ?? []) {
  const hasCaption = typeof t.matchCaption === "string";
  const hasIndex = Number.isInteger(t.matchIndex);
  if (hasCaption === hasIndex) fail("replaceTables の各要素は matchCaption か matchIndex のどちらか一方が必要です。");
  const list = newBody.tables ?? [];
  // caption を持たない表は matchCaption で特定できない。tables 配列の添字（0 始まり）で指す。
  // 添字は表の並びに依存するため、caption があるならそちらを優先して使うこと。
  const label = hasCaption ? `「${t.matchCaption.slice(0, 60)}」` : `添字 ${t.matchIndex}`;
  const hits = hasCaption
    ? list.filter((x) => String(x.caption ?? "").includes(t.matchCaption))
    : (list[t.matchIndex] ? [list[t.matchIndex]] : []);
  if (hits.length === 0) fail(`差し替える表が見つかりません: ${label}`);
  if (hits.length > 1) fail(`差し替える表が複数あります: ${label}`);
  if (t.rows) {
    const headers = t.headers ?? hits[0].headers;
    for (const r of t.rows) {
      if (!Array.isArray(r) || r.length !== headers.length) {
        fail(`行の列数が headers と合いません（期待 ${headers.length}）: ${JSON.stringify(r).slice(0, 60)}`);
      }
    }
  }
  newBody.tables = list.map((x) =>
    x === hits[0]
      ? {
          afterParagraph: x.afterParagraph,
          caption: t.caption ?? x.caption,
          headers: t.headers ?? x.headers,
          rows: t.rows ?? x.rows,
        }
      : x
  );
}

// ── 表の追加 ──
//
// **位置は段落の添字ではなく文字列で指定する。** 添字は挿入や削除でずれるため、
// パッチを書いた時点の番号がそのまま使える保証がない。
// `review-check.mjs` の規則19は `afterParagraph` の**有無**しか見ないので、
// **ずれても検査を通り抜ける。**
for (const t of patch.addTables ?? []) {
  if (typeof t.after !== "string") fail("addTables の各要素は after（位置の目印になる文字列）が必要です。");
  if (!Array.isArray(t.headers) || !Array.isArray(t.rows) || !t.headers.length || !t.rows.length) {
    fail("addTables の各要素は headers と rows（どちらも空でない配列）が必要です。");
  }
  const hits = newBody.body.filter((p) => p.includes(t.after)).length;
  if (hits === 0) fail(`表の位置が見つかりません: 「${t.after.slice(0, 60)}」`);
  if (hits > 1) fail(`表の位置が複数あります: 「${t.after.slice(0, 60)}」`);
  const at = newBody.body.findIndex((p) => p.includes(t.after));
  for (const r of t.rows) {
    if (!Array.isArray(r) || r.length !== t.headers.length) {
      fail(`行の列数が headers と合いません（期待 ${t.headers.length}）: ${JSON.stringify(r).slice(0, 60)}`);
    }
  }
  newBody.tables = [
    ...(newBody.tables ?? []),
    { afterParagraph: at, ...(t.caption ? { caption: t.caption } : {}), headers: t.headers, rows: t.rows },
  ];
}

// ── 本文末尾への追記 ──
//
// **文字列と配列の両方を受ける。** 配列をそのまま push すると body の要素が
// 配列になり、描画側で `[object Array]` 相当の壊れ方をする。**型を検査する。**
const appended = patch.appendToBody === undefined
  ? []
  : Array.isArray(patch.appendToBody)
    ? patch.appendToBody
    : [patch.appendToBody];
for (const para of appended) {
  if (typeof para !== "string") fail("appendToBody は文字列か、文字列の配列である必要があります。");
  if (para.includes("\n") && !para.trimStart().startsWith("```")) {
    fail(`追記する段落に改行が含まれています。描画側で空白に潰れます: 「${para.slice(0, 40)}」`);
  }
  newBody.body.push(para);
}

// ── primarySources の追加 ──
//
// **訂正のたびに出典は増える。** 到達できなかったページに後日到達できた場合、
// 本文だけ直して出典を足せないと、**記事の主張と出典一覧が食い違う。**
// `primarySources` は body 側にあるため `setMeta` では触れない。
const addedSources = patch.addPrimarySources ?? [];
if (addedSources.length) {
  const list = [...(newBody.primarySources ?? [])];
  for (const src of addedSources) {
    if (!src || typeof src.url !== "string" || !/^https?:\/\//.test(src.url)) {
      fail(`addPrimarySources の url が外部 URL ではありません: ${JSON.stringify(src).slice(0, 60)}`);
    }
    if (typeof src.title !== "string" || !src.title) fail("addPrimarySources には title が必要です。");
    if (list.some((x) => x.url === src.url)) fail(`既に載っている出典です: ${src.url}`);
    list.push({ title: src.title, ...(src.site ? { site: src.site } : {}), url: src.url });
  }
  newBody.primarySources = list;
}

// ── primarySources の書き換え ──
//
// **出典の説明は、状況とともに古くなる。** 「PR #1324、未マージ」と書いた出典は、
// マージされた時点で誤りになる。本文だけ直して出典欄を残すと、同じ記事の中で
// 本文と出典が食い違う。url で1件を特定し、title / site だけを差し替える。
// url そのものは変えない（変えるなら削除と追加であり、別の操作である）。
const updatedSources = patch.updatePrimarySources ?? [];
if (updatedSources.length) {
  const list = [...(newBody.primarySources ?? [])];
  for (const src of updatedSources) {
    if (!src || typeof src.url !== "string") fail("updatePrimarySources には url が必要です。");
    const hits = list.filter((x) => x.url === src.url);
    if (hits.length === 0) fail(`書き換える出典が見つかりません: ${src.url}`);
    if (hits.length > 1) fail(`同じ url の出典が複数あります: ${src.url}`);
    if (src.title === undefined && src.site === undefined) fail(`title か site のどちらかが必要です: ${src.url}`);
    const i = list.indexOf(hits[0]);
    list[i] = {
      ...list[i],
      ...(src.title !== undefined ? { title: src.title } : {}),
      ...(src.site !== undefined ? { site: src.site } : {}),
    };
  }
  newBody.primarySources = list;
}

// ── primarySources の削除 ──
//
// **出典が、存在しないものを指していたと分かることがある。** 実際に、存在しない
// npm パッケージの URL が出典欄に載っていた。名前だけ実在しない URL は、読者が
// 名前を拾い、第三者が同名で公開すれば実行される。誤りを記事から消せなければ
// 訂正にならない。url で1件を特定して外す（url が無い/複数なら中断する）。
const removedSources = patch.removePrimarySources ?? [];
if (removedSources.length) {
  let list = [...(newBody.primarySources ?? [])];
  for (const src of removedSources) {
    if (!src || typeof src.url !== "string") fail("removePrimarySources には url が必要です。");
    const hits = list.filter((x) => x.url === src.url);
    if (hits.length === 0) fail(`外す出典が見つかりません: ${src.url}`);
    if (hits.length > 1) fail(`同じ url の出典が複数あります: ${src.url}`);
    list = list.filter((x) => x.url !== src.url);
  }
  if (list.length === 0) fail("removePrimarySources で出典が0件になります。出典は最低1件残してください。");
  newBody.primarySources = list;
}

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
  for (const t of patch.replaceTables ?? []) console.log(`   表の差し替え: ${typeof t.matchCaption === "string" ? `「${t.matchCaption.slice(0, 40)}」` : `添字 ${t.matchIndex}`}`);
  for (const t of patch.addTables ?? []) console.log(`   表: 「${(t.caption || "").slice(0, 36)}」を「${t.after.slice(0, 30)}」の直後へ`);
  for (const para of appended) console.log(`   追記: 「${para.slice(0, 60)}」`);
  for (const src of addedSources) console.log(`   出典の追加: ${src.title} — ${src.url}`);
  for (const src of updatedSources) console.log(`   出典の書き換え: ${src.url} → ${src.title ?? '(title そのまま)'}`);
  for (const src of removedSources) console.log(`   出典の削除: ${src.url}`);
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
// 置換前の文字列が、意図しない場所に残っていないこと。
// ただし、パッチ自身が出す文（置換後の文・挿入した段落・追記）が置換前の文字列を
// 含むのは正当である。【訂正】は「（誤）〜」と旧文を引用するのが役割で、
// 「X」を「X（補足）」に拡張する置換も同じ。これらまで残存扱いにすると、
// 訂正の記録を書けなくなる。本文が意図どおりであることは上で厳密に検査済みなので、
// ここで拾うのは「パッチが出していない段落に旧文が残った」場合だけにする。
const provided = [
  ...reps.map((r) => r.replace),
  ...inserts.flatMap((i) => i.paragraphs),
  ...appended,
];
for (const r of reps) {
  const stray = got.body.filter((p) => p.includes(r.find) && !provided.some((t) => p.includes(t)));
  if (stray.length) restore(`置換前の文字列が残っています: 「${r.find.slice(0, 40)}」`);
}

console.log(`✅ 更新しました: ${patch.id}`);
console.log(`   置換 ${reps.length} 件${patch.appendToBody ? " / 追記 1 段落" : ""}`);
console.log("");
console.log("   次を順に実行してください:");
console.log("     node scripts/check-article-manifest.mjs --update");
console.log("     node scripts/review-check.mjs");
console.log("     node scripts/generate-feed.mjs && node scripts/generate-sitemap.mjs");
