/**
 * 記事データの正準シリアライザ。
 *
 * articlesMeta.js / articlesBody.js へ書き込む経路は必ずここを通す。
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
 */
import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
export const DATA_DIR = resolve(__dirname, "../src/data");

/** meta 側に置くキー。split-articles.mjs と同一に保つこと */
export const META_KEYS = [
  "id", "type", "category", "title", "excerpt", "date", "newsDate",
  "author", "readTime", "tags", "coverImage", "heroScope", "pinned",
  "weekRoundupPeriod", "lastReviewed", "ratings", "rating", "status",
  "reviewCategory",
];

/** body 側に置くキー。split-articles.mjs と同一に保つこと */
export const BODY_KEYS = ["body", "tables", "figures", "charts", "primarySources"];

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

export function renderMeta(metaArr) {
  return `/**
 * 記事メタデータ（軽量）
 * ── 自動生成: node scripts/split-articles.mjs ──
 * body, tables, figures, charts, primarySources は含まない
 */
export const ARTICLES_META = ${JSON.stringify(metaArr, null, 2)};
`;
}

export function renderBody(bodyMap) {
  return `/**
 * 記事本文データ（重量）
 * ── 自動生成: node scripts/split-articles.mjs ──
 * id → { body, tables, figures, charts, primarySources }
 */
const ARTICLES_BODY = ${JSON.stringify(bodyMap, null, 2)};

export default ARTICLES_BODY;
`;
}

/**
 * 両ファイルを書き出す。
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

  writeFileSync(resolve(DATA_DIR, "articlesMeta.js"), renderMeta(metaArr), "utf-8");
  writeFileSync(resolve(DATA_DIR, "articlesBody.js"), renderBody(bodyMap), "utf-8");
  return { meta: metaArr.length, body: Object.keys(bodyMap).length };
}
