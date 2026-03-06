/**
 * AI Tool News 自動収集スクリプト
 *
 * GitHub Actions で定期実行され、各ツールの公開情報を収集して
 * src/data/aiToolsData.js の LAST_UPDATED を更新します。
 *
 * 将来的には各ツールの公式サイト・GitHub・npmからデータを収集し、
 * 記事データを自動更新する予定です。
 *
 * 現在のフェーズ:
 *   Phase 1: LAST_UPDATED の日付を自動更新（実装済み）
 *   Phase 2: GitHubスター数・最新リリースバージョンの自動取得（TODO）
 *   Phase 3: 公式サイトからの料金・モデル情報の取得（TODO）
 */

import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_PATH = join(__dirname, "..", "src", "data", "aiToolsData.js");

// ── Phase 1: 日付更新 ──
function updateLastUpdated() {
  const today = new Date().toISOString().split("T")[0];
  let content = readFileSync(DATA_PATH, "utf-8");

  const oldDate = content.match(/LAST_UPDATED = "(\d{4}-\d{2}-\d{2})"/);
  if (oldDate && oldDate[1] === today) {
    console.log(`[collect] LAST_UPDATED is already ${today}. No update needed.`);
    return false;
  }

  content = content.replace(
    /LAST_UPDATED = "\d{4}-\d{2}-\d{2}"/,
    `LAST_UPDATED = "${today}"`
  );
  writeFileSync(DATA_PATH, content, "utf-8");
  console.log(`[collect] Updated LAST_UPDATED to ${today}`);
  return true;
}

// ── Phase 2: GitHub情報取得（将来実装） ──
async function fetchGitHubStats() {
  const repos = [
    { id: "aider", repo: "Aider-AI/aider" },
    { id: "cline", repo: "cline/cline" },
  ];

  for (const { id, repo } of repos) {
    try {
      const res = await fetch(`https://api.github.com/repos/${repo}`, {
        headers: { "User-Agent": "ai-tool-news-bot" },
      });
      if (res.ok) {
        const data = await res.json();
        console.log(`[collect] ${id}: ${data.stargazers_count} stars, latest: ${data.pushed_at}`);
      }
    } catch (e) {
      console.log(`[collect] Failed to fetch ${id}: ${e.message}`);
    }
  }
}

// ── メイン ──
async function main() {
  console.log("[collect] Starting AI Tool News auto-collection...");

  const updated = updateLastUpdated();
  await fetchGitHubStats();

  console.log(`[collect] Done. Updated: ${updated}`);
}

main().catch(console.error);
