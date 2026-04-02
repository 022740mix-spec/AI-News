/**
 * AI-News 日次調査クエリ自動生成スクリプト
 *
 * aiCompanies.js のプロダクト名と articlesMeta.js のタグから
 * WebSearch 用の検索クエリリストを生成する。
 *
 * 使い方:
 *   node scripts/generate-research-queries.mjs
 *   node scripts/generate-research-queries.mjs --format=markdown
 *   node scripts/generate-research-queries.mjs --priority=high
 */

import { createRequire } from "module";
import { readFileSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");

// ── aiCompanies.js を読み込み ──
// ESM dynamic import（Windows では pathToFileURL が必要）
const companiesModule = await import(
  pathToFileURL(join(rootDir, "src/data/aiCompanies.js")).href
);
const companies = companiesModule.AI_COMPANIES || companiesModule.default || [];

// ── articlesMeta.js を読み込み ──
const metaModule = await import(
  pathToFileURL(join(rootDir, "src/data/articlesMeta.js")).href
);
const articles = metaModule.ARTICLES_META || metaModule.default || [];

// ── コマンドライン引数 ──
const args = process.argv.slice(2);
const format = args.find((a) => a.startsWith("--format="))?.split("=")[1] || "text";
const priorityFilter = args.find((a) => a.startsWith("--priority="))?.split("=")[1] || "all";

// ── 優先度の高い企業（記事掲載頻度が高い） ──
const tagCounts = {};
for (const article of articles) {
  for (const tag of article.tags || []) {
    tagCounts[tag] = (tagCounts[tag] || 0) + 1;
  }
}

// 企業ごとの記事登場回数を計算
// マッチングには企業名・プロダクト名の「意味のある固有名詞部分」のみ使用
// 汎用語（API, Speech, AI 等）は単独ではマッチさせない
const GENERIC_WORDS = new Set([
  "api", "ai", "speech", "text", "audio", "cloud", "search", "pro",
  "models", "model", "app", "chat", "voice", "code", "sdk", "cli",
  "studio", "lab", "labs", "platform", "engine", "hub", "bot",
  "chatgpt", "マーケットプレイス", "ショッピング", "連携", "報道",
  "ベンチマーク", "コンテスト", "モデル群",
]);

function extractMatchTerms(names) {
  const terms = [];
  for (const raw of names) {
    const clean = raw
      .replace(/（[^）]+）/g, "") // 括弧注釈を除去
      .replace(/ \/ .+$/, "")     // スラッシュ以降を除去
      .replace(/ 等$/, "")        // 「等」を除去
      .trim()
      .toLowerCase();
    // 2語以上の固有名詞はそのまま使う（例: "Claude Code", "GitHub Copilot"）
    if (clean.split(/\s+/).length >= 2 && !GENERIC_WORDS.has(clean.split(/\s+/)[0])) {
      terms.push(clean);
    }
    // 単語ごとにも追加するが、汎用語は除外
    for (const word of clean.split(/\s+/)) {
      if (word.length >= 3 && !GENERIC_WORDS.has(word)) {
        terms.push(word);
      }
    }
  }
  return [...new Set(terms)];
}

const companyArticleCounts = {};
for (const company of companies) {
  const terms = extractMatchTerms([company.name, ...(company.products || [])]);
  let count = 0;
  for (const article of articles) {
    const text = `${article.title} ${article.excerpt} ${(article.tags || []).join(" ")}`.toLowerCase();
    if (terms.some((t) => text.includes(t))) {
      count++;
    }
  }
  companyArticleCounts[company.id] = count;
}

// ── 優先度分類 ──
// Tier 1: 5記事以上 → 毎日チェック
// Tier 2: 2〜4記事 → 毎日チェック（軽め）
// Tier 3: 1記事以下 → 週1チェック
const tier1 = companies.filter((c) => companyArticleCounts[c.id] >= 5);
const tier2 = companies.filter(
  (c) => companyArticleCounts[c.id] >= 2 && companyArticleCounts[c.id] < 5
);
const tier3 = companies.filter((c) => companyArticleCounts[c.id] < 2);

// ── ホットタグ（5記事以上で使われているタグ） ──
const hotTags = Object.entries(tagCounts)
  .filter(([, count]) => count >= 5)
  .sort((a, b) => b[1] - a[1])
  .map(([tag, count]) => ({ tag, count }));

// ── 検索クエリ生成 ──
function generateCompanyQueries(company, tier) {
  const queries = [];
  const name = company.name;
  const products = (company.products || []).slice(0, 5); // 上位5プロダクトに絞る

  // メインクエリ: 企業名 + "announcement" or "release"
  queries.push({
    query: `${name} AI announcement ${new Date().toISOString().slice(0, 7)}`,
    tier,
    type: "company",
    source: name,
  });

  // プロダクト個別クエリ
  for (const product of products) {
    const cleanProduct = product.replace(/ \/ .+$/, "").replace(/ 等$/, "");
    queries.push({
      query: `${cleanProduct} release update ${new Date().toISOString().slice(0, 7)}`,
      tier,
      type: "product",
      source: `${name} → ${cleanProduct}`,
    });
  }

  return queries;
}

function generateTagQueries(hotTags) {
  // タグからテーマ別の検索クエリを生成
  const themeQueries = [];

  // 技術トレンド系
  const techTags = hotTags.filter(({ tag }) =>
    ["MCP", "RAG", "エージェント", "エッジAI", "オープンソース", "ローカルLLM", "マルチモーダル"].includes(tag)
  );
  for (const { tag, count } of techTags) {
    themeQueries.push({
      query: `${tag} AI new tool release 2026`,
      tier: 1,
      type: "theme",
      source: `タグ: ${tag}（${count}記事）`,
    });
  }

  // ビジネス動向系
  const bizTags = hotTags.filter(({ tag }) =>
    ["資金調達", "M&A", "買収", "IPO", "料金改定"].includes(tag)
  );
  for (const { tag } of bizTags) {
    themeQueries.push({
      query: `AI ${tag} news ${new Date().toISOString().slice(0, 7)}`,
      tier: 2,
      type: "business",
      source: `タグ: ${tag}`,
    });
  }

  return themeQueries;
}

// ── 3軸別の調査ソースクエリ ──
// 軸1: 速報（主要プレイヤー） → company/product クエリでカバー
// 軸2: 発掘（新興・OSS）
// 軸3: 分析（社会的インパクト）
function generateFixedQueries() {
  return [
    // ── 軸2: 発掘（新興企業・OSS・個人開発） ──
    {
      query: "GitHub trending repositories machine-learning",
      tier: 1,
      type: "discovery",
      source: "【発掘】GitHub Trending ML",
    },
    {
      query: "GitHub trending repositories deep-learning",
      tier: 1,
      type: "discovery",
      source: "【発掘】GitHub Trending DL",
    },
    {
      query: "Hacker News AI top stories today",
      tier: 1,
      type: "discovery",
      source: "【発掘】Hacker News",
    },
    {
      query: "new AI startup tool launch 2026",
      tier: 1,
      type: "discovery",
      source: "【発掘】新興AIツール",
    },
    {
      query: "open source AI tool developer new release",
      tier: 1,
      type: "discovery",
      source: "【発掘】OSSリリース",
    },
    {
      query: "AI MCP server new tool integration",
      tier: 1,
      type: "discovery",
      source: "【発掘】MCP新ツール",
    },
    {
      query: "AI agent framework open source new",
      tier: 1,
      type: "discovery",
      source: "【発掘】エージェントOSS",
    },
    {
      query: "edge AI on-device model new release lightweight",
      tier: 1,
      type: "discovery",
      source: "【発掘】エッジAI・軽量モデル",
    },

    // ── 軸3: 分析（社会的インパクト・規制・倫理） ──
    {
      query: "AI regulation policy law EU Japan US 2026",
      tier: 1,
      type: "analysis",
      source: "【分析】AI規制動向",
    },
    {
      query: "AI military defense use case ethics 2026",
      tier: 1,
      type: "analysis",
      source: "【分析】AI軍事利用・倫理",
    },
    {
      query: "AI job displacement employment impact study 2026",
      tier: 1,
      type: "analysis",
      source: "【分析】AI×雇用・労働",
    },
    {
      query: "AI privacy data security breach incident 2026",
      tier: 1,
      type: "analysis",
      source: "【分析】AIプライバシー・セキュリティ",
    },
    {
      query: "AI copyright lawsuit intellectual property 2026",
      tier: 1,
      type: "analysis",
      source: "【分析】AI著作権・訴訟",
    },
    {
      query: "AI healthcare medical diagnosis regulation 2026",
      tier: 1,
      type: "analysis",
      source: "【分析】AI×医療",
    },
    {
      query: "AI education school policy impact 2026",
      tier: 1,
      type: "analysis",
      source: "【分析】AI×教育",
    },
    {
      query: "AI energy consumption data center environmental 2026",
      tier: 1,
      type: "analysis",
      source: "【分析】AI×環境・エネルギー",
    },

    // ── 軸1: 速報の補助（モデルリリース全般） ──
    {
      query: "AI model release benchmark new 2026",
      tier: 1,
      type: "breaking",
      source: "【速報】新モデルリリース",
    },
    {
      query: "AI coding tool IDE update release 2026",
      tier: 1,
      type: "breaking",
      source: "【速報】コーディングツール更新",
    },
  ];
}

// ── メイン出力 ──
let allQueries = [];

// Tier 1 企業
for (const company of tier1) {
  allQueries.push(...generateCompanyQueries(company, 1));
}

// Tier 2 企業
for (const company of tier2) {
  allQueries.push(...generateCompanyQueries(company, 2));
}

// Tier 3 企業（週1のみ）
if (priorityFilter === "all" || new Date().getDay() === 1) {
  for (const company of tier3) {
    allQueries.push(...generateCompanyQueries(company, 3));
  }
}

// テーマ別クエリ
allQueries.push(...generateTagQueries(hotTags));

// 固定ソースクエリ
allQueries.push(...generateFixedQueries());

// フィルタリング
if (priorityFilter === "high") {
  allQueries = allQueries.filter((q) => q.tier === 1);
} else if (priorityFilter === "medium") {
  allQueries = allQueries.filter((q) => q.tier <= 2);
}

// ── 出力 ──
if (format === "markdown") {
  console.log(`# AI-News デイリー調査クエリ（${new Date().toISOString().slice(0, 10)}）\n`);
  console.log(`生成クエリ数: ${allQueries.length}件\n`);

  console.log(`## 統計`);
  console.log(`- Tier 1 企業（毎日必須）: ${tier1.length}社 → ${tier1.map((c) => c.name).join(", ")}`);
  console.log(`- Tier 2 企業（毎日軽め）: ${tier2.length}社`);
  console.log(`- Tier 3 企業（週1チェック）: ${tier3.length}社`);
  console.log(`- ホットタグ: ${hotTags.length}件\n`);

  // 3軸別にグルーピング
  const axisOrder = [
    { label: "軸1: 速報（主要プレイヤー）", types: ["company", "product", "breaking"] },
    { label: "軸2: 発掘（新興・OSS・個人開発）", types: ["discovery", "theme"] },
    { label: "軸3: 分析（社会的インパクト）", types: ["analysis", "business"] },
  ];

  for (const axis of axisOrder) {
    const axisQueries = allQueries.filter((q) => axis.types.includes(q.type));
    if (axisQueries.length === 0) continue;
    console.log(`## ${axis.label}（${axisQueries.length}件）\n`);
    for (const q of axisQueries) {
      console.log(`- [T${q.tier}] \`${q.query}\` ← ${q.source}`);
    }
    console.log();
  }

  // 未分類があれば表示
  const classified = new Set(axisOrder.flatMap((a) => a.types));
  const unclassified = allQueries.filter((q) => !classified.has(q.type));
  if (unclassified.length > 0) {
    console.log(`## 未分類（${unclassified.length}件）\n`);
    for (const q of unclassified) {
      console.log(`- [T${q.tier}] \`${q.query}\` ← ${q.source}`);
    }
  }
} else if (format === "json") {
  console.log(JSON.stringify({ date: new Date().toISOString().slice(0, 10), queries: allQueries }, null, 2));
} else {
  // テキスト（簡潔サマリー + クエリ一覧）
  console.log(`=== AI-News デイリー調査クエリ（${new Date().toISOString().slice(0, 10)}） ===`);
  console.log(`Tier 1（毎日必須）: ${tier1.map((c) => c.name).join(", ")}`);
  console.log(`Tier 2（毎日軽め）: ${tier2.map((c) => c.name).join(", ")}`);
  console.log(`Tier 3（週1）: ${tier3.map((c) => c.name).join(", ")}`);
  console.log(`ホットタグ: ${hotTags.map(({ tag, count }) => `${tag}(${count})`).join(", ")}`);
  console.log(`\n合計クエリ数: ${allQueries.length}件`);
  console.log(`---`);
  for (const q of allQueries) {
    console.log(`[T${q.tier}][${q.type}] ${q.query}  ← ${q.source}`);
  }
}
