/**
 * AI Tool News 自動収集スクリプト
 *
 * サイトの「最新の更新」日付は getSiteTodayYmd()（Asia/Tokyo）で表示・フィード更新。
 *
 * 将来的には各ツールの公式サイト・GitHub・npmからデータを収集し、
 * 記事データを自動更新する予定です。
 *
 * 現在のフェーズ:
 *   Phase 1: （廃止）手動 LAST_UPDATED → 実行日ベースに移行済み
 *   Phase 2: GitHubスター数・最新リリースバージョンの自動取得（TODO）
 *   Phase 3: 公式サイトからの料金・モデル情報の取得（TODO）
 */

// ── Phase 1: 日付はフロント・generate-feed が getSiteTodayYmd() で算出 ──
function updateLastUpdated() {
  console.log(
    "[collect] Site date is computed at runtime (Asia/Tokyo). No file patch.",
  );
  return false;
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
