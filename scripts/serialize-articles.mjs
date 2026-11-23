/**
 * 記事データの正準シリアライザ。
 *
 * articlesMeta.js / articlesBody-*.js へ書き込む経路は必ずここを通す。
 *
 * ── なぜ必要か ──
 * 過去、文字列位置ベースの部分置換で隣接記事を巻き込み、本文を消す事故が起きた。
 * 「その位置が本当に境界か」を文字列から判断するのは原理的に不安定である。
 *
 * 対して、パース済みのオブジェクトから全体を組み直す方法は、
 * 入力が壊れていなければ出力も壊れない。
 *
 * ここで決定的に重要な区別がある。
 * **スクリプトによる全体再生成は安全だが、モデルによる再生成は危険である。**
 * 同じ「全部書き直す」でも、決定論的なコードがデータを往復させるのと、
 * モデルが 1.8MB を読んで書き戻すのとでは安全性がまったく違う。
 * このファイルは前者を提供し、後者を不要にするために存在する。
 *
 * 形式は split-articles.mjs と完全に一致させる（JSON.stringify(x, null, 2)）。
 * どちらから書いても同じ結果になることが、差分をレビュー可能に保つ条件になる。
 *
 * ── 本文の月別分割（2026-11-23）──
 * 本文は掲載月ごとのファイル `articlesBody-YYYY-MM.js` に分割する。
 * 旧構造では全記事の本文が単一の articlesBody.js（4.3MB）に入っており、
 * 記事を1本開くたびに全本文のチャンクを読み込んでいた。
 *
 * - ブラウザ側: `src/data/loadArticleBody.js` が、その記事の掲載月の
 *   チャンクだけを動的に読み込む。
 * - Node 側（scripts 群）: `articlesBody.js` は月別ファイルを全て import して
 *   結合する集約モジュールとして自動生成する。従来どおり
 *   `import ARTICLES_BODY from "../src/data/articlesBody.js"` で全本文が得られる。
 * - 月の判定は掲載日（meta の `date`、無ければ `newsDate`）の YYYY-MM。
 *   ブラウザ側ローダーも同じ規則（getArticlePublishYmd）で引く。
 */
import { writeFileSync, readdirSync, unlinkSync } from "node:fs";
import { createHash } from "node:crypto";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
export const DATA_DIR = resolve(__dirname, "../src/data");

/** meta 側に置くキー。split-articles.mjs と同一に保つこと */
export const META_KEYS = [
  "id", "type", "category", "title", "excerpt", "date", "newsDate",
  "author", "readTime", "tags", "coverImage", "heroScope", "pinned",
  "weekRoundupPeriod", "lastReviewed", "reviewCadence", "ratings", "rating",
  "status", "reviewCategory",
];

/** body 側に置くキー。split-articles.mjs と同一に保つこと */
export const BODY_KEYS = ["body", "tables", "figures", "charts", "embeds", "videos", "demos", "primarySources"];

/** 記事1件を meta 部と body 部に分ける */
export function splitArticle(article) {
  const meta = {};
  for (const k of META_KEYS) {
    if (article[k] !== undefined) meta[k] = article[k];
  }
  const body = {};
  for (const k of BODY_KEYS) {
    if (article[k] !== undefined) body[k] = article[k];
  }
  return { meta, body };
}

/** 本文チャンクの月キー（YYYY-MM）。掲載日が無ければ出来事の日を使う */
export function bodyMonthOf(meta) {
  const ymd = meta?.date || meta?.newsDate || "";
  const month = String(ymd).slice(0, 7);
  if (!/^\d{4}-\d{2}$/.test(month)) {
    throw new Error(`記事 ${meta?.id ?? "(id不明)"} の掲載日から月を判定できません: date=${meta?.date} newsDate=${meta?.newsDate}`);
  }
  return month;
}

/** 月キー → ファイル名 */
export function bodyChunkFileName(month) {
  return `articlesBody-${month}.js`;
}

/** 月キー → 集約モジュール内の変数名 */
function bodyChunkVar(month) {
  return `BODY_${month.replace("-", "_")}`;
}

export function renderMeta(metaArr) {
  return `/**
 * 記事メタデータ（軽量）
 * ── 自動生成: node scripts/split-articles.mjs ──
 * body, tables, figures, charts, primarySources は含まない
 */
export const ARTICLES_META = ${JSON.stringify(metaArr, null, 2)};
`;
}

/** 1か月ぶんの本文チャンク */
export function renderBodyChunk(month, monthMap) {
  return `/**
 * 記事本文データ（${month} 掲載分）
 * ── 自動生成: node scripts/split-articles.mjs ──
 * id → { body, tables, figures, charts, primarySources }
 */
const ARTICLES_BODY_${month.replace("-", "_")} = ${JSON.stringify(monthMap, null, 2)};

export default ARTICLES_BODY_${month.replace("-", "_")};
`;
}

/**
 * Node 用の集約モジュール（articlesBody.js）。
 * 月別チャンクを全て import して結合し、従来と同じ default export を返す。
 * ブラウザ側はこれを import せず、loadArticleBody.js から月別に読む。
 *
 * 各チャンクの import には内容ハッシュのクエリ（?v=）を付ける。
 * update-article.mjs が書き込み後に `articlesBody.js?t=…` とキャッシュ回避付きで
 * 読み直して検証する際、素の相対 import では Node のモジュールキャッシュに残った
 * 旧チャンクが返り、検証が必ず失敗するためである。内容が変わればクエリも変わり、
 * 読み直しでは新しいチャンクが読まれる。
 */
export function renderBodyIndex(months, chunkHashes = {}) {
  const imports = months
    .map((m) => {
      const q = chunkHashes[m] ? `?v=${chunkHashes[m]}` : "";
      return `import ${bodyChunkVar(m)} from "./${bodyChunkFileName(m)}${q}";`;
    })
    .join("\n");
  const spread = months.map((m) => `  ...${bodyChunkVar(m)},`).join("\n");
  return `/**
 * 記事本文データの集約（Node 用）
 * ── 自動生成: node scripts/split-articles.mjs ──
 * 月別チャンク articlesBody-YYYY-MM.js を全て結合した default export。
 * ブラウザ側はこのファイルを import せず、loadArticleBody.js が
 * 記事の掲載月のチャンクだけを動的に読み込む。
 */
${imports}

const ARTICLES_BODY = {
${spread}
};

export default ARTICLES_BODY;
`;
}

/**
 * 旧互換: 単一ファイル時代の renderBody は集約モジュールの生成に置き換えた。
 * 呼び出し側は writeArticles を使うこと。
 */
export function renderBody() {
  throw new Error("renderBody は廃止されました。writeArticles を使ってください。");
}

/**
 * meta と全月チャンクと集約モジュールを書き出す。
 * 書き込み前に、meta と body の id 集合が食い違っていないかを検査する。
 * 片側だけが欠けた状態は「記事が半分消えた」状態であり、
 * ここで止めないと本文なしの記事が公開まで進んでしまう。
 */
export function writeArticles(metaArr, bodyMap) {
  const metaIds = metaArr.map((a) => a.id);
  const dupes = metaIds.filter((id, i) => metaIds.indexOf(id) !== i);
  if (dupes.length) {
    throw new Error(`meta に重複した id があります: ${[...new Set(dupes)].join(", ")}`);
  }
  const metaSet = new Set(metaIds);
  const orphanBody = Object.keys(bodyMap).filter((id) => !metaSet.has(id));
  if (orphanBody.length) {
    throw new Error(`meta に存在しない本文があります: ${orphanBody.join(", ")}`);
  }
  const missingBody = metaIds.filter((id) => !bodyMap[id]);
  if (missingBody.length) {
    throw new Error(`本文のない記事があります: ${missingBody.join(", ")}`);
  }

  // 掲載月ごとに本文を振り分ける（チャンク内の並びは meta の順序に一致させる）
  const byMonth = new Map();
  for (const meta of metaArr) {
    const month = bodyMonthOf(meta);
    if (!byMonth.has(month)) byMonth.set(month, {});
    byMonth.get(month)[meta.id] = bodyMap[meta.id];
  }
  const months = [...byMonth.keys()].sort();

  const chunkContents = {};
  const chunkHashes = {};
  for (const month of months) {
    chunkContents[month] = renderBodyChunk(month, byMonth.get(month));
    chunkHashes[month] = createHash("sha256").update(chunkContents[month]).digest("hex").slice(0, 12);
  }

  writeFileSync(resolve(DATA_DIR, "articlesMeta.js"), renderMeta(metaArr), "utf-8");
  for (const month of months) {
    writeFileSync(resolve(DATA_DIR, bodyChunkFileName(month)), chunkContents[month], "utf-8");
  }
  writeFileSync(resolve(DATA_DIR, "articlesBody.js"), renderBodyIndex(months, chunkHashes), "utf-8");

  // 記事の掲載月が変わって空になった旧チャンクが残ると、存在しない月の
  // ファイルが import.meta.glob に拾われ続けるため、現行集合に無いものは消す。
  const keep = new Set(months.map(bodyChunkFileName));
  for (const name of readdirSync(DATA_DIR)) {
    if (/^articlesBody-\d{4}-\d{2}\.js$/.test(name) && !keep.has(name)) {
      unlinkSync(resolve(DATA_DIR, name));
    }
  }

  return { meta: metaArr.length, body: Object.keys(bodyMap).length, months };
}
