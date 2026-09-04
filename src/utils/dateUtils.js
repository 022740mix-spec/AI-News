import { getArticleNewsYmd, getArticlePublishYmd } from "../data/articleHelpers.js";

export const MONTHS_EN = [
  "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",
];

export function parseDate(s) {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d).getTime();
}

/**
 * 記事の並び順。
 *
 * 日付順は**掲載日**で並べる。出来事の日で並べると、今日公開した記事が
 * 数日前の記事の下に埋もれ、読者からは何も増えていないように見える。
 *
 * 2026年9月4日にこれが起きた。朝に5本公開したのに、一覧では
 * Anthropic × Salesforce（出来事 8/26）が17位＝2ページ目にあり、
 * **公開初日から読者の目に触れない状態**だった。
 *
 * 出来事の日は各カードに併記するので、どちらの日付も隠していない。
 */
export function compareArticleOrder(a, b, sort) {
  if (sort === "title") return a.title.localeCompare(b.title, "ja");
  const da = parseDate(getArticlePublishYmd(a));
  const db = parseDate(getArticlePublishYmd(b));
  if (da !== db) return sort === "date-asc" ? da - db : db - da;
  // 同じ日に複数公開したときは、出来事の新しいほうを先に見せる
  const na = parseDate(getArticleNewsYmd(a));
  const nb = parseDate(getArticleNewsYmd(b));
  return sort === "date-asc" ? na - nb : nb - na;
}

/** タグ・カテゴリの重なりで関連記事を最大 limit 件 */
export function pickRelatedArticles(current, articles, limit = 3) {
  const others = articles.filter((a) => a.id !== current.id);
  const tagSet = new Set(current.tags ?? []);
  const scored = others.map((a) => {
    let score = 0;
    if (a.category === current.category) score += 3;
    for (const t of a.tags ?? []) {
      if (tagSet.has(t)) score += 2;
    }
    return { a, score };
  });
  scored.sort((x, y) => {
    if (y.score !== x.score) return y.score - x.score;
    return (
      parseDate(getArticleNewsYmd(y.a)) - parseDate(getArticleNewsYmd(x.a))
    );
  });
  const withScore = scored.filter((x) => x.score > 0).map((x) => x.a);
  if (withScore.length >= limit) return withScore.slice(0, limit);
  const picked = new Set(withScore.map((a) => a.id));
  const rest = scored.filter((x) => !picked.has(x.a.id)).map((x) => x.a);
  return [...withScore, ...rest].slice(0, limit);
}

/** ギャラリーサイト風の日付表記 */
export function formatPickDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS_EN[m - 1]} ${d}, ${y}`;
}

/** 週刊まとめの対象7日間（東京・曜日付き） */
export function formatWeekRoundupPeriodJp(startYmd, endYmd) {
  const fmt = (ymd) =>
    new Intl.DateTimeFormat("ja-JP", {
      timeZone: "Asia/Tokyo",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      weekday: "short",
    }).format(new Date(`${ymd}T12:00:00+09:00`));
  return `${fmt(startYmd)}〜${fmt(endYmd)}`;
}
