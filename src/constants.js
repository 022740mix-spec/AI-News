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
  // 最終更新: 2026-06-10（Fable 5 / Mythos 5 GA 反映）

  // === Anthropic ===
  { name: "Claude Mythos 5", rating: 5.0, summary: "Anthropic 最強モデル（6/9 限定公開）。Project Glasswing 経由のみアクセス可能、サイバーセキュリティ用途中心。$10/$50 per 1M tokens", swe: null, aime: null, arc: null, hle: null, mmmu: null },
  { name: "Claude Fable 5", rating: 5.0, summary: "Anthropic 一般公開フラッグシップ（6/9 GA）。Mythos クラスを一般利用向けに安全化、SWE-bench Verified 95%、Anthropic 史上最強の一般公開モデル。$10/$50 per 1M tokens、Pro/Max/Team/Enterprise は6/22まで無料", swe: 95, aime: null, arc: null, hle: null, mmmu: null },
  { name: "Claude Opus 4.8", rating: 4.5, summary: "Anthropic 前 GA フラッグシップ（5/28 GA、Fable 5 リリース後）。1Mコンテキスト、Dynamic Workflows で最大1,000並列。USAMO 2026 で 96.7%、GraphWalks F1（1M ctx）68.1%。$5/$25、Fast Mode は前世代比3倍安い $10/$50", swe: 88.6, aime: 96, arc: null, hle: null, mmmu: null },
  { name: "Claude Opus 4.7", rating: 4.0, summary: "Anthropic 前フラッグシップ（4/16 GA）。1Mコンテキスト、task budgets と xhigh effort level、画像最大 2576px。$5/$25 per 1M tokens", swe: 87.6, aime: null, arc: null, hle: null, mmmu: null },
  { name: "Claude Opus 4.6", rating: 3.5, summary: "Anthropic 旧世代（2026年Q1）。1Mコンテキスト。後継 Fable 5 / Opus 4.7/4.8 に移行推奨。$15/$75 per 1M tokens", swe: 81, aime: null, arc: 69, hle: null, mmmu: null },
  { name: "Claude Sonnet 4.6", rating: 4.0, summary: "Anthropic 中核。1Mコンテキスト、速度と品質のバランス型。日常のコーディングに最適。$3/$15", swe: 80, aime: null, arc: 58, hle: null, mmmu: 75 },
  { name: "Claude Haiku 4.5", rating: 3.5, summary: "Anthropic 軽量。200Kコンテキスト、最速・低コスト。大量処理やチャット向け。$0.80/$4", swe: null, aime: null, arc: null, hle: null, mmmu: null },

  // === OpenAI ===
  { name: "GPT-5.5", rating: 4.5, summary: "OpenAI フラッグシップ（4/23 リリース）。エージェント・コーディング・コンピュータ使用に最適化、Artificial Analysis Coding Index で「半額の SOTA」を公称。事実誤認 -3%、事実精度 +23%。マルチモーダル統合", swe: null, aime: null, arc: null, hle: null, mmmu: null },
  { name: "GPT-5.5 Instant", rating: 4.0, summary: "OpenAI ChatGPT 新デフォルト（5/5 切替）。GPT-5.3 Instant 比でハルシネーション 52.5% 減（医療・法律・金融）、応答長 30% 短縮。Plus/Pro 向け長期メモリ対応", swe: null, aime: null, arc: null, hle: null, mmmu: null },
  { name: "GPT-5.4", rating: 4.0, summary: "OpenAI 前世代（3月）。128Kコンテキスト。後継 GPT-5.5 に移行推奨。$2.50/$10", swe: 75, aime: 95, arc: null, hle: null, mmmu: 84 },
  { name: "GPT-5.4 mini", rating: 3.5, summary: "OpenAI 軽量。128Kコンテキスト、無料層でも利用可能。Codex との連携向け。$0.40/$1.60", swe: null, aime: null, arc: null, hle: null, mmmu: null },
  { name: "GPT-4o", rating: 3.5, summary: "OpenAI 旧世代。安定性が高く依然として広く利用。$2.50/$10", swe: null, aime: null, arc: null, hle: null, mmmu: 69 },

  // === Google ===
  { name: "Gemini 3.5 Flash", rating: 4.5, summary: "Google 最新（I/O 2026・5/19 GA）。Flash クラスの速度（他社フロンティアの4倍速）で 3.1 Pro 超え。Terminal-Bench 2.1 76.2%、GDPval-AA 1656 Elo、MCP Atlas 83.6%", swe: null, aime: null, arc: null, hle: null, mmmu: null },
  { name: "Gemini 3.1 Pro", rating: 4.0, summary: "Google フラッグシップ。2Mコンテキストは業界最大。長大なコードベースの一括読み込みに強い。$1.25/$5", swe: null, aime: null, arc: 77, hle: null, mmmu: 81 },
  { name: "Gemini 3.1 Flash", rating: 3.5, summary: "Google 高速。1Mコンテキスト、極めて低コスト。速度重視の処理に向く。$0.075/$0.30", swe: 78, aime: null, arc: null, hle: null, mmmu: 81 },
  { name: "Gemini 2.5 Pro", rating: 3.0, summary: "Google 旧世代。1Mコンテキスト、安定した実績。$1.25/$5", swe: 64, aime: null, arc: null, hle: null, mmmu: 84 },

  // === Microsoft MAI（Build 2026 で7モデル投入） ===
  { name: "MAI-Thinking-1", rating: 4.0, summary: "Microsoft 初の自社推論モデル（Build 2026・6/2）。35B active / ~1T total sparse MoE、256K ctx。AIME 2025 で 97.0%、AIME 2026 で 94.5%。SWE-Bench Pro で Opus 4.6 同等。OpenAI データを使わずに訓練", swe: null, aime: 97, arc: null, hle: null, mmmu: null },
  { name: "MAI-Code-1-Flash", rating: 4.0, summary: "Microsoft 自社コーディング特化（Build 2026・6/2）。5B、GitHub Copilot 即日展開。SWE-Bench Pro で Claude Haiku 4.5 を +16pt 上回る", swe: null, aime: null, arc: null, hle: null, mmmu: null },

  // === China ===
  { name: "Qwen 3.7 Max", rating: 4.5, summary: "Alibaba 新フラッグシップ（5/20、Alibaba Cloud Summit 杭州）。1M ctx、Artificial Analysis Intelligence Index 56.6、Terminal-Bench 2.0 で 69.7、GPQA Diamond 92.4。$2.50/$7.50（Opus 4.7 の約半額）", swe: null, aime: null, arc: null, hle: null, mmmu: null },
  { name: "Kimi K2.6", rating: 4.5, summary: "Moonshot AI（4/20）。1兆パラメータ、Modified MIT のオープンウェイト。SWE-Pro 58.6 で GPT-5.4・Opus 4.6・Gemini 3.1 Pro を上回る。最大300サブエージェント並列、12時間連続実行", swe: 80.2, aime: null, arc: null, hle: null, mmmu: null },
  { name: "Kimi K2.5", rating: 4.0, summary: "Moonshot AI 前世代。1兆パラメータ MoE、256Kコンテキスト。Humanity's Last Exam で Opus 超え。オープンウェイト。後継 K2.6 へ移行推奨", swe: 66, aime: 50, arc: null, hle: 32, mmmu: null },
  { name: "DeepSeek V4 Pro", rating: 4.0, summary: "DeepSeek プレビュー（4/24）。1.6T total / 49B active MoE、1M ctx、384K 出力、Thinking/Non-Thinking デュアルモード。5/22 に 75% 永久値下げ（$0.435/$0.87 per M）。国産チップ統合優先で GA 延期", swe: null, aime: null, arc: null, hle: null, mmmu: null },
  { name: "DeepSeek V4 Flash", rating: 3.5, summary: "DeepSeek プレビュー軽量版（4/24）。284B total / 13B active、1M ctx。オープンウェイト", swe: null, aime: null, arc: null, hle: null, mmmu: null },
  { name: "DeepSeek R1", rating: 3.5, summary: "DeepSeek 推論特化（前世代）。671B MoE、MIT ライセンス。数学・コーディング。$0.14/$2.19 と破格", swe: 49, aime: 79, arc: null, hle: null, mmmu: null },
  { name: "Ernie 5.1", rating: 3.5, summary: "Baidu（5月）。論理推論・数学計算・マルチモーダル生成で大幅改善。エージェント能力最適化と推論コスト低減。中国国内 B2B 中心", swe: null, aime: null, arc: null, hle: null, mmmu: null },
  { name: "ERNIE 4.5", rating: 3.5, summary: "Baidu 前世代。中国語特化で1億ユーザー基盤。マルチモーダル。後継 Ernie 5.1 推奨", swe: null, aime: null, arc: null, hle: null, mmmu: null },
  { name: "GLM-5", rating: 3.5, summary: "Zhipu AI。745Bパラメータ MoE、MIT ライセンス。Opus の約1/6のコスト。Huawei チップで学習。$0.80/$2.56。5月更新版はコード・論理・専門 QA 改善", swe: null, aime: null, arc: null, hle: null, mmmu: null },
  { name: "MiniMax M2.7", rating: 3.5, summary: "MiniMax。自己進化型モデル。SWE-Pro 56.2%で Opus に迫る。OpenClaw 上で自律最適化", swe: null, aime: null, arc: null, hle: null, mmmu: null },
  { name: "KAT-Coder Pro V2", rating: 3.5, summary: "Kwai/快手。コーディング特化 MoE。SWE-Bench 73.4%。OpenClaw 対応。$0.30/$1.20 と低コスト", swe: 73, aime: null, arc: null, hle: null, mmmu: null },
  { name: "Qwen 3 (235B)", rating: 4.0, summary: "Alibaba 前世代。235B MoE、Apache 2.0。ハイブリッド思考で推論/即答を切替。119言語対応。8サイズ展開", swe: null, aime: null, arc: null, hle: null, mmmu: null },

  // === Cursor 独自 ===
  { name: "Composer 2.5", rating: 4.0, summary: "Cursor 独自モデル。Kimi K2.5 ベース＋独自 RL。CursorBench で Opus 4.6 を上回るスコア。Cursor CLI / IDE / Background Agent の中核。Sonic（低レイテンシ）と組合せ", swe: null, aime: null, arc: null, hle: null, mmmu: null },
];

export const BENCHMARK_CONFIGS = [
  { key: "swe", label: "SWE-Bench", title: "SWE-Bench Verified（コーディング能力・公式発表値）", desc: "実際の GitHub Issue のバグ修正ができるか" },
  { key: "aime", label: "AIME", title: "AIME 2024/2025（数学的推論・公式発表値）", desc: "数学オリンピック予選レベルの問題を解けるか" },
  { key: "arc", label: "ARC-AGI", title: "ARC-AGI-2（適応的推論力・公式発表値）", desc: "初めて見るパズル問題に対応できるか" },
  { key: "hle", label: "HLE", title: "Humanity's Last Exam（学術的推論・公式発表値）", desc: "専門家レベルの難問に答えられるか" },
  { key: "mmmu", label: "MMMU", title: "MMMU / MMMU-Pro（視覚的理解力・公式発表値）", desc: "画像やグラフを理解できるか" },
];
