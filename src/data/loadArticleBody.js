/**
 * 記事本文の遅延ローダー（ブラウザ側）。
 *
 * 本文は掲載月ごとのチャンク `articlesBody-YYYY-MM.js` に分かれている。
 * 記事を開いたとき、その記事の掲載月のチャンクだけを動的に読み込む。
 * 初期表示では本文チャンクを一切読み込まない。
 *
 * 月の判定は serialize-articles.mjs の bodyMonthOf と同じ規則
 * （掲載日 = date、無ければ newsDate の YYYY-MM）。
 *
 * Node 側（scripts 群）はこのファイルを使わない。articlesBody.js の
 * 集約モジュールから全本文を同期的に読む。
 */
import { ARTICLES_META } from "./articlesMeta.js";
import { getArticlePublishYmd } from "./articleHelpers.js";
import { retryChunk } from "../utils/lazyChunk.js";

const chunkLoaders = import.meta.glob("./articlesBody-*.js");

/** id → 掲載月（YYYY-MM） */
const monthById = new Map();
for (const meta of ARTICLES_META) {
  const ymd = getArticlePublishYmd(meta);
  if (ymd) monthById.set(meta.id, ymd.slice(0, 7));
}

/** 月 → 読み込み Promise（同じ月の2本目以降は再利用する） */
const chunkCache = new Map();

function loadMonthChunk(month) {
  if (!chunkCache.has(month)) {
    const loader = chunkLoaders[`./articlesBody-${month}.js`];
    if (!loader) {
      chunkCache.set(month, Promise.resolve(null));
    } else {
      // デプロイ直後の古い index.html から消えたチャンクを取りに行った場合は
      // retryChunk が1回だけ新しい index.html を取り直す（lazyChunk.js 参照）
      chunkCache.set(month, retryChunk(loader)());
    }
  }
  return chunkCache.get(month);
}

/**
 * 記事 id の本文エントリ { body, tables, figures, charts, embeds, videos,
 * demos, primarySources } を返す。見つからなければ null。
 */
export async function loadArticleBody(id) {
  const month = monthById.get(id);
  if (!month) return null;
  const mod = await loadMonthChunk(month);
  return mod?.default?.[id] ?? null;
}
