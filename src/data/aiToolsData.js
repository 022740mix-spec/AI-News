/**
 * AI開発ツール ブログ記事データ — 互換レイヤー
 *
 * 従来の ARTICLES（メタ+本文）を復元して export する。
 * 実データは articlesMeta.js / articlesBody.js に分割済み。
 * ヘルパー関数・定数は articleHelpers.js に分離し re-export。
 *
 * scripts/review-check.mjs, scripts/generate-feed.mjs など
 * 従来の import パスをそのまま使えるように維持する。
 *
 * ── 記事フィールド定義 ──
 * 必須:
 *   id: string           — kebab-case、一意、内部リンク用
 *   type: "news" | "feature" | "review"
 *   category: "special" | "model" | "cli" | "editor" | "data" | "product" | "media" | "regulation"
 *   title: string         — 見出し
 *   excerpt: string       — 概要（事実のみ、感想・メタ説明禁止）
 *   body: string[]        — 段落配列（3段落以上）
 *   date: "YYYY-MM-DD"    — 公開日。週刊まとめでは公開日を入れる
 *   author: string
 *   readTime: string      — "N分"
 *   tags: string[]        — 既存タグとの統一必須
 *   primarySources: [{ title, url, site?, note? }] — 1件以上必須
 *
 * 任意:
 *   newsDate?: "YYYY-MM-DD"     — ニュース発生日（指定時は getArticleNewsYmd が優先）
 *   coverImage?: { src, alt, caption? }
 *   figures?: [{ src, alt, caption?, afterParagraph }]
 *   tables?: [{ afterParagraph, caption?, headers: string[], rows: string[][] }]
 *   charts?: [{ title, subtitle?, bars, unit?, maxValue? }]
 *   heroScope?: "day" | "week" | "none"  — 省略時は "day"
 *   pinned?: boolean      — 同日に複数記事がある場合のヒーロー優先
 *   weekRoundupPeriod?: { start, end }   — heroScope:"week" のとき推奨
 *   lastReviewed?: "YYYY-MM-DD"          — 比較記事の最終確認日
 *   ratings?: { "AI品質", "使いやすさ", "コスパ", "拡張性", "企業向け" } — 各1-5
 */

import { ARTICLES_META } from "./articlesMeta.js";
import ARTICLES_BODY from "./articlesBody.js";

/** 互換: メタデータ + 本文を結合した完全な記事配列 */
export const ARTICLES = ARTICLES_META.map((meta) => ({
  ...meta,
  ...(ARTICLES_BODY[meta.id] || {}),
}));

// ヘルパー関数・定数を re-export（互換性維持）
export {
  getArticleNewsYmd,
  getSiteTodayYmd,
  SITE_NAME,
  SITE_DESCRIPTION,
  CATEGORIES,
  renderStars,
} from "./articleHelpers.js";
