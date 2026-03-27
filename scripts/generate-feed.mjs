/**
 * ARTICLES から Atom 1.0 フィードを public/feed.xml に出力する（vite build の前に実行）
 * ビルドで dist/ にコピーされる。記事リンクは ?a= 相対（index と同じパスで解決）
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  ARTICLES,
  SITE_NAME,
  SITE_DESCRIPTION,
  LAST_UPDATED,
} from "../src/data/aiToolsData.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "feed.xml");

function escapeXml(text) {
  return String(text ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function atomDateFromYmd(ymd) {
  const [y, m, d] = ymd.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d, 15, 0, 0));
  return dt.toISOString().replace(/\.\d{3}Z$/, "Z");
}

function excerptPlain(excerpt) {
  return String(excerpt ?? "").replace(/\*\*(.+?)\*\*/g, "$1").slice(0, 500);
}

function main() {
  mkdirSync(dirname(OUT), { recursive: true });

  const sorted = [...ARTICLES].sort((a, b) => {
    const [ya, ma, da] = a.date.split("-").map(Number);
    const [yb, mb, db] = b.date.split("-").map(Number);
    return new Date(yb, mb - 1, db) - new Date(ya, ma - 1, da);
  });

  const feedUpdated = atomDateFromYmd(LAST_UPDATED);

  const entries = sorted
    .map((article) => {
      const updated = atomDateFromYmd(article.date);
      const summary = escapeXml(excerptPlain(article.excerpt));
      return `  <entry>
    <title>${escapeXml(article.title)}</title>
    <link rel="alternate" type="text/html" href="?a=${encodeURIComponent(article.id)}"/>
    <id>tag:ai-tool-news.jp,2026:${escapeXml(article.id)}</id>
    <published>${updated}</published>
    <updated>${updated}</updated>
    <summary>${summary}</summary>
  </entry>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${escapeXml(SITE_NAME)}</title>
  <subtitle>${escapeXml(SITE_DESCRIPTION)}</subtitle>
  <link rel="alternate" type="text/html" href="./"/>
  <link rel="self" type="application/atom+xml" href="./feed.xml"/>
  <id>tag:ai-tool-news.jp,2026:feed</id>
  <updated>${feedUpdated}</updated>
  <generator>ai-news-generate-feed</generator>
${entries}
</feed>
`;

  writeFileSync(OUT, xml, "utf8");
  console.log("Wrote", OUT.replace(/\\/g, "/"), `(${sorted.length} entries)`);
}

main();
