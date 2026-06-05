/**
 * ARTICLES から sitemap.xml を public/sitemap.xml に出力する（vite build 前に実行）。
 * GitHub Pages の本番 URL（SITE_URL）を絶対パスで含める。SPA でも検索エンジンが
 * 個別記事 URL（?a=xxx 形式）をクロールできるようにする。
 *
 * 取り下げ記事（status: "retracted"）は除外する。
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  ARTICLES,
  SITE_URL,
  getArticleNewsYmd,
  getSiteTodayYmd,
} from "../src/data/aiToolsData.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "sitemap.xml");

function escapeXml(text) {
  return String(text ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function main() {
  mkdirSync(dirname(OUT), { recursive: true });

  const today = getSiteTodayYmd();
  const baseUrl = SITE_URL.replace(/\/$/, "");

  const liveArticles = ARTICLES.filter((a) => a.status !== "retracted");

  const urls = [
    {
      loc: `${baseUrl}/`,
      lastmod: today,
      changefreq: "daily",
      priority: "1.0",
    },
    ...liveArticles.map((article) => ({
      loc: `${baseUrl}/?a=${encodeURIComponent(article.id)}`,
      lastmod: getArticleNewsYmd(article) || today,
      changefreq: article.type === "review" ? "monthly" : "weekly",
      priority: article.type === "feature" ? "0.9" : article.type === "review" ? "0.7" : "0.8",
    })),
  ];

  const entries = urls
    .map(
      (u) => `  <url>
    <loc>${escapeXml(u.loc)}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;

  writeFileSync(OUT, xml, "utf8");
  console.log("Wrote", OUT.replace(/\\/g, "/"), `(${urls.length} urls, excluded ${ARTICLES.length - liveArticles.length} retracted)`);
}

main();
