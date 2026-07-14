export const STORAGE_THEME = "ai-news-theme";
export const STORAGE_ACCENT = "ai-news-accent";
export const STORAGE_LANG = "ai-news-lang";
export const STORAGE_LOCAL_NOTICE = "ai-news-local-notice-dismissed";

export const ACCENT_PRESETS = [
  { id: "blue",   label: "ブルー", en: "Blue",   color: "#3b82f6", cyan: "#22d3ee", season: null },
  { id: "sakura", label: "桜",     en: "Spring", color: "#ec4899", cyan: "#f472b6", season: "spring" },
  { id: "green",  label: "新緑",   en: "Summer", color: "#22c55e", cyan: "#4ade80", season: "summer" },
  { id: "orange", label: "紅葉",   en: "Autumn", color: "#f97316", cyan: "#fb923c", season: "autumn" },
  { id: "purple", label: "冬",     en: "Winter", color: "#8b5cf6", cyan: "#a78bfa", season: "winter" },
];

export const FILTERS = [
  { id: "all", label: "すべて", en: "All" },
  { id: "special", label: "特集", en: "Feature" },
  { id: "model", label: "モデル・API", en: "Models / API" },
  { id: "cli", label: "CLI・エージェント", en: "CLI / Agents" },
  { id: "editor", label: "エディタ", en: "Editors" },
  { id: "data", label: "データ・RAG", en: "Data / RAG" },
  { id: "product", label: "プロダクト", en: "Products" },
  { id: "media", label: "メディア生成", en: "Media Gen" },
  { id: "regulation", label: "社会・規制", en: "Society" },
];

export const SORTS = [
  { id: "date-desc", label: "新着順", en: "Newest" },
  { id: "date-asc", label: "日付（古い順）", en: "Oldest" },
  { id: "title", label: "タイトル A→Z", en: "Title A→Z" },
];

export function getCategoryIcon(cat) {
  const icons = {
    special: "特集",
    model: "AI",
    cli: "CLI",
    editor: "IDE",
    data: "Data",
    product: "SaaS",
    media: "Media",
    regulation: "Gov",
  };
  return icons[cat] ?? "";
}

export const TYPE_FILTERS = [
  { id: "all", label: "すべて", en: "All" },
  { id: "news", label: "速報ニュース", en: "Breaking" },
  { id: "feature", label: "特集・コラム", en: "Features" },
];

export const REVIEW_CATEGORIES = [
  { id: "cli", label: "CLI ツール", description: "ターミナルから AI にコードを書かせる CLI ツール" },
  { id: "editor", label: "エディタ", description: "AI 統合エディタ・IDE" },
  { id: "media", label: "メディア生成", description: "画像・動画・音楽の AI 生成ツール", subCategories: [
    { id: "image", label: "画像生成", description: "AI 画像生成ツール" },
    { id: "video", label: "動画生成", description: "AI 動画生成ツール" },
    { id: "music", label: "音楽生成", description: "AI 音楽生成ツール" },
  ]},
  { id: "product", label: "プロダクト", description: "AIエージェント・AI検索などの製品", subCategories: [
    { id: "agent", label: "AIエージェント", description: "自律的にタスクを遂行する AI エージェント" },
    { id: "search", label: "AI検索", description: "AI 搭載の検索・リサーチツール" },
  ]},
  { id: "other", label: "その他ツール", description: "音声入力・ターミナル等" },
];

export const RATING_EXPLAINER = {
  models: {
    title: "モデル評価の基準",
    axes: [
      ["AI品質（30%）", "ベンチマークスコア、推論力、コード生成精度"],
      ["使いやすさ（25%）", "API の設計、ドキュメント、SDK の充実度"],
      ["コスパ（20%）", "トークン単価、無料枠、サブスクプランの妥当性"],
      ["拡張性（15%）", "ファインチューニング、関数呼び出し、マルチモーダル対応"],
      ["企業向け（10%）", "SLA、データ保護、コンプライアンス認証"],
    ],
  },
  cli: {
    title: "CLI ツール評価の基準",
    axes: [
      ["AI品質（30%）", "コード生成の正確さ、大規模コードベースの理解力"],
      ["使いやすさ（25%）", "インストールの手軽さ、コマンド体系、エラーメッセージ"],
      ["コスパ（20%）", "月額料金、API 従量課金、無料枠の範囲"],
      ["拡張性（15%）", "MCP 対応、Hooks、スキル、外部ツール連携"],
      ["企業向け（10%）", "権限モード、監査ログ、Privacy Mode、SSO"],
    ],
  },
  editor: {
    title: "エディタ評価の基準",
    axes: [
      ["AI品質（30%）", "コード補完の精度、Agent モードの自律性、バグ検出力"],
      ["使いやすさ（25%）", "UI/UX、既存ワークフローとの統合、学習コスト"],
      ["コスパ（20%）", "無料版の機能制限、Pro プランの価格対性能"],
      ["拡張性（15%）", "プラグイン・拡張機能、カスタムルール、MCP 対応"],
      ["企業向け（10%）", "チーム管理、集中設定、Ghost/Privacy Mode"],
    ],
  },
  image: {
    title: "画像生成ツール評価の基準",
    axes: [
      ["AI品質（30%）", "画質、プロンプト忠実度、スタイルの一貫性"],
      ["使いやすさ（25%）", "UI/UX、学習コスト、日本語プロンプト対応"],
      ["コスパ（20%）", "無料枠、サブスク料金、1枚あたりの生成コスト"],
      ["拡張性（15%）", "API 提供、インペインティング、ワークフロー統合"],
      ["企業向け（10%）", "商用ライセンス、コンテンツポリシー、SLA"],
    ],
  },
  video: {
    title: "動画生成ツール評価の基準",
    axes: [
      ["AI品質（30%）", "映像品質、物理シミュレーション、動きの自然さ"],
      ["使いやすさ（25%）", "UI/UX、カメラ制御、編集機能の直感性"],
      ["コスパ（20%）", "クレジット単価、サブスク料金、生成時間あたりのコスト"],
      ["拡張性（15%）", "API 提供、リップシンク、Motion Brush 等の制御機能"],
      ["企業向け（10%）", "商用ライセンス、コンテンツポリシー、解像度オプション"],
    ],
  },
  music: {
    title: "音楽生成ツール評価の基準",
    axes: [
      ["AI品質（30%）", "音質、ジャンル再現度、ボーカルの自然さ"],
      ["使いやすさ（25%）", "プロンプト操作、歌詞入力、生成速度"],
      ["コスパ（20%）", "無料枠、サブスク料金、1曲あたりのコスト"],
      ["拡張性（15%）", "API 提供、DAW 連携、パート別編集"],
      ["企業向け（10%）", "商用ライセンス、著作権の帰属、楽曲の権利関係"],
    ],
  },
  agent: {
    title: "AIエージェント評価の基準",
    axes: [
      ["AI品質（30%）", "タスク完遂率、推論の正確さ、自律性"],
      ["使いやすさ（25%）", "指示の自然さ、UI/UX、セットアップの容易さ"],
      ["コスパ（20%）", "料金プラン、無料枠、タスクあたりのコスト"],
      ["拡張性（15%）", "API 連携、外部ツール統合、カスタマイズ性"],
      ["企業向け（10%）", "セキュリティ、データ保護、チーム管理"],
    ],
  },
  search: {
    title: "AI検索ツール評価の基準",
    axes: [
      ["AI品質（30%）", "回答の正確さ、ソース引用、ハルシネーション抑制"],
      ["使いやすさ（25%）", "UI/UX、検索体験、日本語対応"],
      ["コスパ（20%）", "無料枠の範囲、Pro プランの妥当性"],
      ["拡張性（15%）", "API 提供、ワークフロー統合、カスタムソース"],
      ["企業向け（10%）", "プライバシー、データ保護、チーム利用"],
    ],
  },
  other: {
    title: "ツール評価の基準",
    axes: [
      ["AI品質（30%）", "音声認識精度、レスポンス速度、出力の自然さ"],
      ["使いやすさ（25%）", "セットアップの容易さ、日常的な操作感"],
      ["コスパ（20%）", "料金プランの妥当性、無料枠"],
      ["拡張性（15%）", "API 連携、他ツールとの組み合わせ"],
      ["企業向け（10%）", "セキュリティ、データ保護"],
    ],
  },
};

export const MODEL_COMPARISON = [
  // スコアは各社の公式発表値のみ。null = 公式データなし（チャートに非表示）
  // 最終更新: 2026-07-13（エージェントベンチマーク時代への対応：Terminal-Bench・OSWorld・BrowseComp・GPQA Diamond を追加）
  // ※ 2026年のフロンティア各社は「学術ベンチ」（AIME/MMMU/ARC-AGI）から
  //    「エージェントベンチ」（Terminal-Bench、Agents' Last Exam、BrowseComp、OSWorld）へ移行済み。
  //    特に GPT-5.6・Grok 4.5 は伝統ベンチをスキップし、エージェント特化ベンチのみ発表。
  //    Anthropic は両方公表。中国 OSS は SWE-Pro が主戦場。
  //    ARC-AGI と MMMU は 2026 新モデルでほぼ非公表となったため BENCHMARK_CONFIGS から除外。

  // === Anthropic ===
  { name: "Claude Mythos 5", rating: 5.0, summary: "Anthropic 最強モデル（6/9 限定公開）。Project Glasswing 経由のみアクセス可能、サイバーセキュリティ用途中心。OSWorld-Verified 85%、BrowseComp 88%。$10/$50 per 1M tokens", swe: null, swePro: null, terminalBench: null, osworld: 85, browseComp: 88, gpqa: null, aime: null, hle: null },
  { name: "Claude Fable 5", rating: 5.0, summary: "Anthropic 一般公開フラッグシップ（6/9 GA）。Mythos クラスを一般利用向けに安全化。SWE-Verified 95%（leaderboard 首位）、SWE-Pro 80%、OSWorld-Verified 85%、GPQA Diamond 88.5%、HLE 53%（首位）。$10/$50、7/12まで無料延長", swe: 95, swePro: 80, terminalBench: null, osworld: 85, browseComp: null, gpqa: 88.5, aime: null, hle: 53 },
  { name: "Claude Opus 4.8", rating: 4.5, summary: "Anthropic 前 GA フラッグシップ（5/28 GA）。1Mコンテキスト、Dynamic Workflows で最大1,000並列。SWE-Verified 88.6%、SWE-Pro 69.2%、Terminal-Bench 58.3%、OSWorld 83.4%、HLE with tools 57.9%、USAMO 96.7%。$5/$25", swe: 88.6, swePro: 69.2, terminalBench: 58.3, osworld: 83.4, browseComp: null, gpqa: null, aime: 96, hle: 57.9 },
  { name: "Claude Opus 4.7", rating: 4.0, summary: "Anthropic 前フラッグシップ（4/16 GA）。1Mコンテキスト、task budgets と xhigh effort level、画像最大 2576px。OSWorld 78.0%。$5/$25 per 1M tokens", swe: 87.6, swePro: null, terminalBench: null, osworld: 78.0, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "Claude Opus 4.6", rating: 3.5, summary: "Anthropic 旧世代（2026年Q1）。1Mコンテキスト。OSWorld 72.7%。後継 Fable 5 / Opus 4.7/4.8 に移行推奨。$15/$75", swe: 81, swePro: null, terminalBench: null, osworld: 72.7, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "Claude Sonnet 5", rating: 4.5, summary: "Anthropic 新ミッドレンジ（6/30 GA）。SWE-Verified 82.1%（launch 時に80%突破の初 Sonnet）、SWE-Pro 63.2%、Terminal-Bench 2.1 80.4%、OSWorld 81.2%、GPQA Diamond 96.2%、HLE with tools 57.4%、ARC-AGI-2 84.7%。導入価格 $2/$10（〜8/31）", swe: 82.1, swePro: 63.2, terminalBench: 80.4, osworld: 81.2, browseComp: null, gpqa: 96.2, aime: null, hle: 57.4 },
  { name: "Claude Sonnet 4.6", rating: 3.5, summary: "Anthropic 前世代 Sonnet（2月）。SWE-Verified 79.6%、SWE-Pro 58.1%、Terminal-Bench 67.0%、OSWorld 72.5%。後継 Sonnet 5 に移行推奨。$3/$15", swe: 79.6, swePro: 58.1, terminalBench: 67.0, osworld: 72.5, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "Claude Haiku 4.5", rating: 3.5, summary: "Anthropic 軽量。200Kコンテキスト、最速・低コスト。大量処理やチャット向け。$0.80/$4", swe: null, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },

  // === OpenAI ===
  { name: "GPT-5.6 Sol", rating: 5.0, summary: "OpenAI 最新フラッグシップ（7/9 GA）。1.5M ctx、Ultra mode はサブエージェント活用。SWE-Pro 64.6%、Terminal-Bench 2.1 Ultra 91.9% SOTA / max 88.76%、BrowseComp 92.2%、GPQA Diamond 94.6%、Agents' Last Exam 53.6（Fable 5 を +13.1 で首位）。ARC-AGI-3 で 7.8%（初の有意義な進展）。$5/$30", swe: null, swePro: 64.6, terminalBench: 91.9, osworld: null, browseComp: 92.2, gpqa: 94.6, aime: null, hle: null },
  { name: "GPT-5.6 Terra", rating: 4.5, summary: "OpenAI daily driver（7/9 GA）。1.5M ctx、大量業務向け。SWE-Pro 63.4%、Terminal-Bench 2.1 87.4%、BrowseComp 87.5%。Sol にわずかに及ばないがコストパフォーマンスに優れる。$2.50/$15（GPT-5.5 比半額）。Sonnet 5 と直接競合", swe: null, swePro: 63.4, terminalBench: 87.4, osworld: null, browseComp: 87.5, gpqa: null, aime: null, hle: null },
  { name: "GPT-5.6 Luna", rating: 4.0, summary: "OpenAI 軽量タスク向け（7/9 GA）。1.5M ctx、要約・ドラフト・定型自動化。SWE-Pro 62.7%、Terminal-Bench 2.1 84.7%。軽量にもかかわらず Sol とわずか数ポイント差。$1/$6 でフロンティア最安級、中国 OSS 対抗軸", swe: null, swePro: 62.7, terminalBench: 84.7, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "GPT-5.5", rating: 4.0, summary: "OpenAI 前 GA フラッグシップ（4/23 リリース）。SWE-Pro 58.6%、Terminal-Bench 2.1 83.4%、BrowseComp（Pro）90.1%。「半額の SOTA」を公称。マルチモーダル統合", swe: null, swePro: 58.6, terminalBench: 83.4, osworld: null, browseComp: 90.1, gpqa: null, aime: null, hle: null },
  { name: "GPT-5.5 Instant", rating: 3.5, summary: "OpenAI ChatGPT デフォルト（5/5 切替）。GPT-5.3 Instant 比でハルシネーション 52.5% 減、応答長 30% 短縮。Plus/Pro 向け長期メモリ対応。後継 GPT-5.6 系への置き換えが見込まれる", swe: null, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "GPT-5.4", rating: 3.5, summary: "OpenAI 旧世代（3月）。128Kコンテキスト。OSWorld 75%（Human expert 超え）、BrowseComp Pro 89.3%、Terminal-Bench 57.6%。後継 GPT-5.5/5.6 に移行推奨。$2.50/$10", swe: 75, swePro: null, terminalBench: 57.6, osworld: 75, browseComp: 89.3, gpqa: null, aime: 95, hle: null },
  { name: "GPT-5.4 mini", rating: 3.5, summary: "OpenAI 軽量。128Kコンテキスト、無料層でも利用可能。Codex との連携向け。$0.40/$1.60", swe: null, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "GPT-4o", rating: 3.0, summary: "OpenAI 旧世代。安定性が高く依然として広く利用。$2.50/$10", swe: null, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },

  // === xAI ===
  { name: "Grok 4.5", rating: 4.5, summary: "xAI（SpaceX 傘下）最新フラッグシップ（7/9 GA）。1.5T V9 基盤 + Cursor 訓練データ、Musk「Opus クラス」主張。SWE-Pro 64.7%（GPT-5.5 超え）、Terminal-Bench 2.1 83.3%、SWE Marathon 29.0%（Verified は未発表）。$2/$6 でフロンティア級最安", swe: null, swePro: 64.7, terminalBench: 83.3, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "Grok V9-Medium", rating: 4.0, summary: "xAI 消費者向け（6/16 公開）。1.5T パラメータ（v8-small の3倍）、Cursor 開発者ワークフローデータで訓練。X・SuperGrok で利用可（API は未開放）", swe: null, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "Grok 4 Heavy", rating: 4.5, summary: "xAI 前世代最上位。SuperGrok Heavy 経由。GPQA Diamond 88%、HLE 50%（初の50%超え）、AIME 2025 100%、ARC-AGI-2 15.9%。マルチエージェント推論、256K ctx", swe: null, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: 88, aime: 100, hle: 50 },

  // === Meta MSL（Meta Superintelligence Labs） ===
  { name: "Muse Spark 1.1", rating: 4.0, summary: "Meta 初の有料モデル（7/9 リリース）。$1.25/$4.25 per 1M tokens。Llama 系無料 OSS 路線からの戦略転換、MSL 体制での初主要有料製品。詳細ベンチマーク未公表", swe: null, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },

  // === Google ===
  { name: "Gemini 3.5 Flash", rating: 4.5, summary: "Google 最新（I/O 2026・5/19 GA）。Flash クラスの速度で 3.1 Pro 超え。Terminal-Bench 2.1 76.2%、GDPval-AA 1656 Elo、MCP Atlas 83.6%", swe: null, swePro: null, terminalBench: 76.2, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "Gemini 3.1 Pro", rating: 4.0, summary: "Google フラッグシップ。2Mコンテキストは業界最大。長大なコードベースの一括読み込みに強い。SWE-bench Verified 80.6%。$1.25/$5", swe: 80.6, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "Gemini 3.1 Flash", rating: 3.5, summary: "Google 高速。1Mコンテキスト、極めて低コスト。速度重視の処理に向く。$0.075/$0.30", swe: 78, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "Gemini 2.5 Pro", rating: 3.0, summary: "Google 旧世代。1Mコンテキスト、安定した実績。$1.25/$5", swe: 64, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },

  // === Microsoft MAI（Build 2026 で7モデル投入） ===
  { name: "MAI-Thinking-1", rating: 4.0, summary: "Microsoft 初の自社推論モデル（Build 2026・6/2）。35B active / ~1T total sparse MoE、256K ctx。AIME 2025 で 97.0%、AIME 2026 で 94.5%。SWE-Bench Pro で Opus 4.6 同等。OpenAI データを使わずに訓練", swe: null, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: 97, hle: null },
  { name: "MAI-Code-1-Flash", rating: 4.0, summary: "Microsoft 自社コーディング特化（Build 2026・6/2）。5B、GitHub Copilot 即日展開。SWE-Bench Pro で Claude Haiku 4.5 を +16pt 上回る", swe: null, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },

  // === China ===
  { name: "LongCat-2.0", rating: 4.5, summary: "Meituan（美団）新フラッグシップ（6/30 OSS 公開）。1.6T MoE（アクティブ 33B-56B）、1M ctx、MIT。50,000枚の中国国産 AI ASIC で訓練（NVIDIA GPU 不使用）。SWE-Pro 59.5% で GPT-5.5 超え、Terminal-Bench 2.1 70.8%。米国 API シェア 46% 拡大の牽引役", swe: null, swePro: 59.5, terminalBench: 70.8, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "Qwen 3.7 Max", rating: 4.5, summary: "Alibaba 新フラッグシップ（5/20、Alibaba Cloud Summit 杭州）。1M ctx、Terminal-Bench 2.0 で 69.7、GPQA Diamond 92.4。$2.50/$7.50（Opus 4.7 の約半額）", swe: null, swePro: null, terminalBench: 69.7, osworld: null, browseComp: null, gpqa: 92.4, aime: null, hle: null },
  { name: "Kimi K2.6", rating: 4.5, summary: "Moonshot AI（4/20）。1兆パラメータ、Modified MIT のオープンウェイト。SWE-Verified 80.2%、SWE-Pro 58.6% で GPT-5.4・Opus 4.6・Gemini 3.1 Pro を上回る。最大300サブエージェント並列、12時間連続実行", swe: 80.2, swePro: 58.6, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "Kimi K2.5", rating: 4.0, summary: "Moonshot AI 前世代。1兆パラメータ MoE、256Kコンテキスト。HLE で Opus 超え。オープンウェイト。後継 K2.6 へ移行推奨", swe: 66, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: 50, hle: 32 },
  { name: "DeepSeek V4 Pro", rating: 4.0, summary: "DeepSeek プレビュー（4/24）。1.6T total / 49B active MoE、1M ctx、384K 出力、Thinking/Non-Thinking デュアルモード。5/22 に 75% 永久値下げ（$0.435/$0.87 per M）。国産チップ統合優先で GA 延期", swe: null, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "DeepSeek V4 Flash", rating: 3.5, summary: "DeepSeek プレビュー軽量版（4/24）。284B total / 13B active、1M ctx。オープンウェイト", swe: null, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "DeepSeek R1", rating: 3.5, summary: "DeepSeek 推論特化（前世代）。671B MoE、MIT ライセンス。数学・コーディング。$0.14/$2.19 と破格", swe: 49, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: 79, hle: null },
  { name: "Ernie 5.1", rating: 3.5, summary: "Baidu（5月）。論理推論・数学計算・マルチモーダル生成で大幅改善。エージェント能力最適化と推論コスト低減。中国国内 B2B 中心", swe: null, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "ERNIE 4.5", rating: 3.5, summary: "Baidu 前世代。中国語特化で1億ユーザー基盤。マルチモーダル。後継 Ernie 5.1 推奨", swe: null, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "GLM-5.2", rating: 4.5, summary: "Z.ai（清華大学発 Zhipu AI）新フラッグシップ（6/13）。753B MoE（アクティブ 40B）、1M ctx、MIT。SWE-Pro 62.1% で GPT-5.5 超え・Opus 4.8 に肉薄、Terminal-Bench 2.1 81.0%（オープンウェイト最強）、GPQA Diamond 91.2%、FrontierSWE 74.4%。Hugging Face で MIT 重み公開", swe: null, swePro: 62.1, terminalBench: 81.0, osworld: null, browseComp: null, gpqa: 91.2, aime: null, hle: null },
  { name: "GLM-5", rating: 3.5, summary: "Zhipu AI 前世代。745Bパラメータ MoE、MIT ライセンス。Opus の約1/6のコスト。Huawei チップで学習。$0.80/$2.56。後継 GLM-5.2 推奨", swe: null, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "MiniMax M2.7", rating: 3.5, summary: "MiniMax。自己進化型モデル。SWE-Pro 56.2%で Opus に迫る。OpenClaw 上で自律最適化", swe: null, swePro: 56.2, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "KAT-Coder Pro V2", rating: 3.5, summary: "Kwai/快手。コーディング特化 MoE。SWE-Bench 73.4%。OpenClaw 対応。$0.30/$1.20 と低コスト", swe: 73, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "Qwen 3 (235B)", rating: 4.0, summary: "Alibaba 前世代。235B MoE、Apache 2.0。ハイブリッド思考で推論/即答を切替。119言語対応。8サイズ展開", swe: null, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },

  // === Cursor 独自 ===
  { name: "Composer 2.5", rating: 4.0, summary: "Cursor 独自モデル。Kimi K2.5 ベース＋独自 RL。CursorBench で Opus 4.6 を上回るスコア。Cursor CLI / IDE / Background Agent の中核。Sonic（低レイテンシ）と組合せ", swe: null, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
];

export const BENCHMARK_CONFIGS = [
  // === コーディング（2026年主流） ===
  { key: "swe", label: "SWE-Verified", title: "SWE-Bench Verified（コーディング能力・旧来ベンチ）", desc: "実際の GitHub Issue のバグ修正ができるか。Anthropic 系が伝統的に主流" },
  { key: "swePro", label: "SWE-Pro", title: "SWE-Bench Pro（コーディング能力・contamination-resistant 版）", desc: "汚染耐性を強化した新版。OpenAI・xAI・中国 OSS 各社が主戦場としている" },
  // === エージェント能力（2026年 GPT-5.6 以降の新戦場） ===
  { key: "terminalBench", label: "Terminal-Bench", title: "Terminal-Bench 2.1（CLI エージェント能力）", desc: "コマンドラインでの計画・反復・ツール協調ができるか。GPT-5.6 Sol Ultra 91.9% SOTA" },
  { key: "osworld", label: "OSWorld", title: "OSWorld-Verified（Computer Use 能力）", desc: "デスクトップ環境でマウス・キーボード操作を含むタスクをこなせるか。Anthropic 主戦場" },
  { key: "browseComp", label: "BrowseComp", title: "BrowseComp（Web ブラウジング能力）", desc: "検索・情報照合を含むオンライン調査タスクをこなせるか" },
  // === 学術・推論 ===
  { key: "gpqa", label: "GPQA Diamond", title: "GPQA Diamond（PhD レベル科学問題）", desc: "PhD 専門家が 65% しか解けない科学問題。Sonnet 5 は 96.2% で最高" },
  { key: "hle", label: "HLE", title: "Humanity's Last Exam（学術上限ベンチ）", desc: "専門家が各分野で最難と選んだ問題を集約。Fable 5 が 53% で首位" },
  { key: "aime", label: "AIME", title: "AIME 2024/2025（数学的推論）", desc: "数学オリンピック予選レベル。Grok 4 系が 100% を達成" },
];
