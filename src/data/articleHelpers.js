/**
 * 記事関連のヘルパー関数・定数
 * body データに依存しないため、互換レイヤー (aiToolsData.js) を経由せず
 * 直接 import できる軽量モジュール。
 */

const NEWS_YMD = /^\d{4}-\d{2}-\d{2}$/;

/**
 * ニュースの「世に出た日」（東京カレンダーで比較）。newsDate があれば優先、なければ date。
 */
export function getArticleNewsYmd(a) {
  if (a?.newsDate && NEWS_YMD.test(String(a.newsDate))) return String(a.newsDate);
  if (a?.date && NEWS_YMD.test(String(a.date))) return String(a.date);
  return "";
}

/**
 * サイト表示・フィード生成の「本日」YYYY-MM-DD（Asia/Tokyo）。
 * 更新のたびに定数を繰り上げず、実行時点の日付を使う。
 */
export function getSiteTodayYmd() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Tokyo",
  }).format(new Date());
}

export const SITE_NAME = "AI News";
export const SITE_DESCRIPTION = "Claude Code・Cursor・Codex・Copilot の最新ニュースとガイドを日本語で";

/** 記事の category キー → 一覧・詳細のバッジ用 */
export const CATEGORIES = {
  special: { label: "特集", color: "#d97706" },
  model: { label: "モデル・API", color: "#2563eb" },
  cli: { label: "CLI・エージェント", color: "#7c3aed" },
  editor: { label: "エディタ", color: "#0891b2" },
  data: { label: "データ・RAG", color: "#059669" },
  product: { label: "プロダクト", color: "#0ea5e9" },
  media: { label: "メディア生成", color: "#db2777" },
  regulation: { label: "社会・規制", color: "#b91c1c" },
};

/** レビュー記事の星表示（プレーンテキスト） */
export function renderStars(rating) {
  if (rating == null || Number.isNaN(Number(rating))) return "";
  const n = Math.round(Number(rating));
  const filled = Math.min(5, Math.max(0, n));
  return `${"★".repeat(filled)}${"☆".repeat(5 - filled)}`;
}
