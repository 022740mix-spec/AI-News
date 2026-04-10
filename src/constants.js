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
  { name: "Claude Opus 4.6", rating: 4.5, summary: "Anthropic 最上位。1Mコンテキスト、高度な推論とコード生成に強い。$15/$75 per 1M tokens", swe: 81, aime: null, arc: 69, hle: null, mmmu: null },
  { name: "Claude Sonnet 4.6", rating: 4.0, summary: "Anthropic 中核。1Mコンテキスト、速度と品質のバランス型。日常のコーディングに最適。$3/$15", swe: 80, aime: null, arc: 58, hle: null, mmmu: 75 },
  { name: "Claude Haiku 4.5", rating: 3.5, summary: "Anthropic 軽量。200Kコンテキスト、最速・低コスト。大量処理やチャット向け。$0.80/$4", swe: null, aime: null, arc: null, hle: null, mmmu: null },
  { name: "GPT-5.4", rating: 4.0, summary: "OpenAI 最新。128Kコンテキスト、推論・コーディング・エージェント統合モデル。$2.50/$10", swe: 75, aime: 95, arc: null, hle: null, mmmu: 84 },
  { name: "GPT-5.4 mini", rating: 3.5, summary: "OpenAI 軽量。128Kコンテキスト、無料層でも利用可能。Codex との連携向け。$0.40/$1.60", swe: null, aime: null, arc: null, hle: null, mmmu: null },
  { name: "GPT-4o", rating: 3.5, summary: "OpenAI 前世代。安定性が高く依然として広く利用されている。$2.50/$10", swe: null, aime: null, arc: null, hle: null, mmmu: 69 },
  { name: "Gemini 3.1 Pro", rating: 4.0, summary: "Google 最上位。2Mコンテキストは業界最大。長大なコードベースの一括読み込みに強い。$1.25/$5", swe: null, aime: null, arc: 77, hle: null, mmmu: 81 },
  { name: "Gemini 3.1 Flash", rating: 3.5, summary: "Google 高速。1Mコンテキスト、極めて低コスト。速度重視の処理に向く。$0.075/$0.30", swe: 78, aime: null, arc: null, hle: null, mmmu: 81 },
  { name: "Gemini 2.5 Pro", rating: 3.5, summary: "Google 前世代。1Mコンテキスト、安定した実績。$1.25/$5", swe: 64, aime: null, arc: null, hle: null, mmmu: 84 },
  { name: "Kimi K2.5", rating: 4.0, summary: "Moonshot AI（中国）。1兆パラメータ MoE、256Kコンテキスト。Humanity's Last Exam で Opus 超え。オープンウェイト。", swe: 66, aime: 50, arc: null, hle: 32, mmmu: null },
  { name: "GLM-5", rating: 3.5, summary: "Zhipu AI（中国）。745Bパラメータ MoE、MIT ライセンス。Opus の約1/6のコスト。Huawei チップで学習。$0.80/$2.56", swe: null, aime: null, arc: null, hle: null, mmmu: null },
  { name: "MiniMax M2.7", rating: 3.5, summary: "MiniMax（中国）。自己進化型モデル。SWE-Pro 56.2%で Opus に迫る。OpenClaw 上で自律最適化。", swe: null, aime: null, arc: null, hle: null, mmmu: null },
  { name: "KAT-Coder Pro V2", rating: 3.5, summary: "Kwai/快手（中国）。コーディング特化 MoE。SWE-Bench 73.4%。OpenClaw 対応。$0.30/$1.20 と低コスト。", swe: 73, aime: null, arc: null, hle: null, mmmu: null },
  { name: "DeepSeek R1", rating: 4.0, summary: "DeepSeek（中国）。671B MoE 推論特化。MIT ライセンス。数学・コーディングで Opus に迫る。$0.14/$2.19 と破格。", swe: 49, aime: 79, arc: null, hle: null, mmmu: null },
  { name: "Qwen 3 (235B)", rating: 4.0, summary: "Alibaba（中国）。235B MoE、Apache 2.0。ハイブリッド思考で推論/即答を切替。119言語対応。8サイズ展開。", swe: null, aime: null, arc: null, hle: null, mmmu: null },
  { name: "ERNIE 4.5", rating: 3.5, summary: "Baidu（中国）。中国最大の検索基盤を活かした知識量。中国語特化で1億ユーザー。マルチモーダル。", swe: null, aime: null, arc: null, hle: null, mmmu: null },
  { name: "Composer 2", rating: 4.0, summary: "Cursor 独自。Kimi K2.5 ベース＋独自 RL。CursorBench で Opus 超え。$0.50/$2.50 と低コスト。", swe: null, aime: null, arc: null, hle: null, mmmu: null },
];

export const BENCHMARK_CONFIGS = [
  { key: "swe", label: "SWE-Bench", title: "SWE-Bench Verified（コーディング能力・公式発表値）", desc: "実際の GitHub Issue のバグ修正ができるか" },
  { key: "aime", label: "AIME", title: "AIME 2024/2025（数学的推論・公式発表値）", desc: "数学オリンピック予選レベルの問題を解けるか" },
  { key: "arc", label: "ARC-AGI", title: "ARC-AGI-2（適応的推論力・公式発表値）", desc: "初めて見るパズル問題に対応できるか" },
  { key: "hle", label: "HLE", title: "Humanity's Last Exam（学術的推論・公式発表値）", desc: "専門家レベルの難問に答えられるか" },
  { key: "mmmu", label: "MMMU", title: "MMMU / MMMU-Pro（視覚的理解力・公式発表値）", desc: "画像やグラフを理解できるか" },
];
