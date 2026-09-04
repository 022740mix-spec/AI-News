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
 * 記事が**サイトに載った日**（掲載日）。date があれば優先、なければ newsDate。
 *
 * ── なぜ2つ要るのか ──
 * `newsDate`（出来事の日）と `date`（掲載日）は 387件中 278件でずれている。
 * レビュー記事では最大433日離れる（モデルの発表日と執筆日）。
 *
 * 「最近のニュース」を出来事の日で並べると、**今日公開した記事が
 * 数日前の記事の下に埋もれて、読者からは何も増えていないように見える。**
 *
 * 2026年9月4日にこれが起きた。朝に5本公開したのに、トップは前日のままで、
 * NVIDIA の Hugging Face 買収（出来事 9/2）は7番目、Anthropic × Salesforce
 * （出来事 8/26）はさらに下だった。RSS でも pubDate が古いため、
 * 購読者のリーダーで新着が下に沈んでいた。
 *
 * **「新着」を出す場所は掲載日で並べる。**「いつ起きたか」は本文と
 * カードの表示で伝える。どちらの日付も隠さない。
 */
export function getArticlePublishYmd(a) {
  if (a?.date && NEWS_YMD.test(String(a.date))) return String(a.date);
  if (a?.newsDate && NEWS_YMD.test(String(a.newsDate))) return String(a.newsDate);
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
export const SITE_URL = "https://022740mix-spec.github.io/AI-News";

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
