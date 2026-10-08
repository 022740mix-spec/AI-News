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

/**
 * 日付から季節のアクセントを決める。
 *
 * 季節の演出を手で切り替える運用にしていたため、9月に桜が舞い続ける状態が
 * 起きた。誰かが気づいて直すまで季節外れのままになる作りをやめ、日付から
 * 導出する。
 *
 * 区切りは暦ではなく日本での体感に寄せている。9月上旬はまだ残暑であり、
 * 紅葉には早い。逆に紅葉の見頃は10月末から11月なので、秋を長めに取る。
 *
 *   春 3/1〜5/31   … 桜
 *   夏 6/1〜9/15   … 新緑・蛍
 *   秋 9/16〜11/30 … 紅葉
 *   冬 12/1〜2/28  … 雪
 */
export function getSeasonalAccentId(date = new Date()) {
  const m = date.getMonth() + 1;
  const d = date.getDate();
  if (m >= 3 && m <= 5) return "sakura";
  if (m >= 6 && (m < 9 || (m === 9 && d <= 15))) return "green";
  if ((m === 9 && d >= 16) || m === 10 || m === 11) return "orange";
  return "purple";
}

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
  { name: "Claude Mythos 5.1", rating: 5, summary: "Anthropic 最上位の更新版（2026年9月1日）。Fable 5.1 と同じ基盤モデルで、信頼アクセスプログラム経由のみ提供。Fable 5.1 と同じ破壊的変更3件を含む。システムカードの表8.1.A は「Claude Fable 5.1/ Mythos 5.1」を1列にまとめており、SWE-bench Pro 81.2%、Humanity's Last Exam ツールあり65.0%（ツールなし60.9%）はこの共通列の値（max effort・5試行平均）。Mythos 5.1 だけを分けて示した値は Terminal-Bench 4.0 の60.9%（Fable 5.1 は55.8%。差は安全策が介入したタスクによると公式は説明）。TB 4.0 は Terminal-Bench 2.1 と版が違うため列には入れていない。SWE-bench Verified・GPQA Diamond・BrowseComp・OSWorld-Verified は公表されていない。いずれも自社発表値で、独立した検証は確認できていない", swe: null, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "Claude Fable 5", rating: 5, summary: "Anthropic 一般公開フラッグシップ（6/9 GA）。Mythos クラスを一般利用向けに安全化。SWE-Verified 95%（leaderboard 首位）、SWE-Pro 80%、OSWorld-Verified 85%、GPQA Diamond・HLE の値は Anthropic の公式資料に無いため空欄（Mythos 5 は GPQA 94.1%、HLE 59.0%。二つは同一モデルではない）。$10/$50。復活後は週次50%上限があり、採用判断はレビュー記事を参照", swe: 95, swePro: 80, terminalBench: null, osworld: 85, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "Claude Fable 5.1", rating: 5, summary: "Anthropic 一般公開フラッグシップの更新版（2026年9月1日）。Mythos 5.1 と同じ基盤モデルにサイバー・生物の安全策を付けたもの。破壊的変更が3つあり既存コードが 400 で止まりうる。キャッシュ読み取りが $0.25（Fable 5 の75%減）。システムカード（表8.1.A、max effort・5試行平均。Fable 5.1/Mythos 5.1 の共通列）と発表ページの自社発表値: SWE-bench Pro 81.2%、Humanity's Last Exam はツールあり65.0%（ツールなし60.9%）、Terminal-Bench 4.0 55.8%、Terminal-Bench-Science 0.1 52.6%（標準誤差±3.5〜4.5pt）、OSWorld 2.0 77.9%（partial、2026年8月版タスク）、CursorBench 3.2.0 73.4%。HLE ツールありは後の Opus 5.5 の資料では65.6%と再掲されており一致しない（列は Fable 5.1 自身の資料の値）。TB 4.0 は Terminal-Bench 2.1 と版が違い、OSWorld 2.0 は OSWorld-Verified と別物のため列には入れていない。SWE-bench Verified・GPQA Diamond・BrowseComp は公表されていない。いずれも自社発表値で、独立した検証は確認できていない", swe: null, swePro: 81.2, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: 65 },
  { name: "Claude Opus 5", rating: 5, summary: "Anthropic のフラッグシップ（2026年7月24日 GA。Opus 5.5 の公開後は legacy）。effort（low/medium/high ほか）で思考量を選べる。1M コンテキスト、$5/$25。システムカード（表8.1.A、max effort・5試行平均）の自社発表値: SWE-bench Verified 96.0%、SWE-bench Pro 79.2%、BrowseComp 90.8%（ウェブ検索・取得・コード実行あり、コンテキスト圧縮あり。同カードの図の注記では Opus 5 は未公開の effort 設定で実行）、Humanity's Last Exam はツールあり64.7%（ツールなし56.3%）、OSWorld 2.0 70.6%、ARC-AGI-3 30.2%（high）。HLE は後の Fable 5.1・Opus 5.5 の資料では Opus 5 をツールあり63.6% / なし56.6%と再掲しており、値が一致しない（列は Opus 5 自身のシステムカードの値）。OSWorld 2.0 は OSWorld-Verified と別物のため列には入れていない。GPQA Diamond・Terminal-Bench 2.1 は公表されていない。いずれも自社発表値で、独立した検証は確認できていない", swe: 96, swePro: 79.2, terminalBench: null, osworld: null, browseComp: 90.8, gpqa: null, aime: null, hle: 64.7 },
  { name: "Claude Opus 5.5", rating: 5, summary: "Anthropic の Claude 5.5 ファミリー最初のモデル（2026年9月22日公開）。公式ドキュメントが「ほとんどのワークロードではここから始めよ」とする既定モデルで、Opus 5 は legacy へ移った。$4/$20（Opus 5 から単価20%減）、キャッシュ読み取り $0.20。1M コンテキスト、最大出力128K。思考は常時オンで既定 effort は medium。システムカード（表8.1.A、max effort・5試行平均）の自社発表値: SWE-bench Pro 89.9%、Humanity's Last Exam はツールあり67.7%（ツールなし64.4%）、SWE-bench Multilingual 93.9%、FrontierCode v1.1 Main 54.4%、Terminal-Bench 4.0 66.4%（xhigh）、Terminal-Bench-Science 0.1 58.7%、GDPval-AA v2.1 1846 Elo、OSWorld 81.8%（partial。発表ページは OSWorld 2.1、システムカードは OSWorld 2.0 と表記）。TB 4.0 は Terminal-Bench 2.1 と版が違い、OSWorld 2.x は OSWorld-Verified と別物のため列には入れていない。SWE-bench Verified・GPQA Diamond・BrowseComp は公表されていない。いずれも自社発表値で、独立した検証は確認できていない", swe: null, swePro: 89.9, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: 67.7 },
  { name: "Claude Opus 4.8", rating: 4.5, summary: "Anthropic 前 GA フラッグシップ（5/28 GA）。1Mコンテキスト、Dynamic Workflows で最大1,000並列。SWE-Verified 88.6%、SWE-Pro 69.2%、Terminal-Bench 2.1 74.6%、OSWorld 83.4%、HLE with tools 57.9%、USAMO 2026 96.7%（AIME は公式に出していない）。$5/$25", swe: 88.6, swePro: 69.2, terminalBench: 74.6, osworld: 83.4, browseComp: null, gpqa: null, aime: null, hle: 57.9 },
  { name: "Claude Opus 4.7", rating: 4.0, summary: "Anthropic 前フラッグシップ（4/16 GA）。1Mコンテキスト、task budgets と xhigh effort level、画像最大 2576px。OSWorld 78.0%。$5/$25 per 1M tokens", swe: 87.6, swePro: null, terminalBench: null, osworld: 78.0, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "Claude Opus 4.6", rating: 3.5, summary: "Anthropic 旧世代（2026年Q1）。1Mコンテキスト。OSWorld 72.7%。後継 Fable 5 / Opus 4.7/4.8 に移行推奨。$15/$75", swe: 81, swePro: null, terminalBench: null, osworld: 72.7, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "Claude Sonnet 5", rating: 4.5, summary: "Anthropic 新ミッドレンジ（6/30 GA）。SWE-Verified 85.2%、SWE-Pro 63.2%、Terminal-Bench 2.1 80.4%、OSWorld 81.2%、GPQA Diamond 96.2%、HLE with tools 57.4%、ARC-AGI-2 84.7%。標準価格 $3/$15", swe: 85.2, swePro: 63.2, terminalBench: 80.4, osworld: 81.2, browseComp: null, gpqa: 96.2, aime: null, hle: 57.4 },
  { name: "Claude Sonnet 5.5", rating: 4.5, summary: "Anthropic の Claude 5.5 ファミリー2番目のモデル（2026年9月28日公開）。$2/$10、1M コンテキスト、最大出力128K。Sonnet として初めてサイバー安全策とフォールバックを付けて出る。システムカード（表8.1.A、max effort・5試行平均）と発表ページの自社発表値: SWE-bench Pro 81.3%、Humanity's Last Exam はツールあり64.5%（ツールなし56.9%）、SWE-bench Multilingual 90.3%、Terminal-Bench 4.0 70.6%、FrontierCode v1.1 Main 46.2%（max。xhigh では52.1%）、CursorBench 4.0 55.5%、GDPval-AA v2.1 1844 Elo、OSWorld 2.1 80.1%（partial）。TB 4.0 は Terminal-Bench 2.1 と版が違い、OSWorld 2.1 は OSWorld-Verified と別物のため列には入れていない。複雑で判断の持続が要る作業は Opus 5.5 のほうが明確に強いと公式は書く。SWE-bench Verified・GPQA Diamond・BrowseComp は公表されていない。いずれも自社発表値で、独立した検証は確認できていない", swe: null, swePro: 81.3, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: 64.5 },
  { name: "Claude Sonnet 4.6", rating: 3.5, summary: "Anthropic 前世代 Sonnet（2月）。SWE-Verified 79.6%、SWE-Pro 58.1%、Terminal-Bench 67.0%、OSWorld 72.5%。後継 Sonnet 5 に移行推奨。$3/$15", swe: 79.6, swePro: 58.1, terminalBench: 67.0, osworld: 72.5, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "Claude Haiku 5.5", rating: 4.5, summary: "Anthropic の Claude 5.5 ファミリーの軽量モデル（2026年10月7日公開）。Haiku として初めて effort を調整できる。$0.10/$0.50（プロンプト100Kトークンまで。100K超は $0.50/$2.50）、1M コンテキスト、最大出力128K。システムカード（表8.1.A、max effort・5試行平均）と発表ページの自社発表値: SWE-bench Pro 64.8%、Humanity's Last Exam はツールあり57.4%（ツールなし45.9%）、SWE-bench Multilingual 83.7%、FrontierCode 1.1 Main 46.4%（max）、Terminal-Bench 4.0 39.2%、GDPval-AA v2.1 1620 Elo、OSWorld 2.1 72.4%（オフラインのサブセット）。TB 4.0 は Terminal-Bench 2.1 と版が違い、OSWorld 2.1 は OSWorld-Verified と別物のため列には入れていない。複雑なエージェント型コーディングは Sonnet 5.5・Opus 5.5 のほうが適すると公式は書く。SWE-bench Verified・GPQA Diamond・BrowseComp は公表されていない。いずれも自社発表値で、独立した検証は確認できていない", swe: null, swePro: 64.8, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: 57.4 },
  { name: "Claude Haiku 4.5", rating: 3.5, summary: "Anthropic 軽量。200Kコンテキスト、最速・低コスト。大量処理やチャット向け。$0.80/$4", swe: null, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },

  // === OpenAI ===
  { name: "GPT-5.6 Sol", rating: 5.0, summary: "OpenAI 最新フラッグシップ（7/9 GA）。1.5M ctx、Ultra mode はサブエージェント活用。SWE-Pro 64.6%、Terminal-Bench 2.1 Ultra 91.9% SOTA / max 88.76%、BrowseComp 92.2%、GPQA Diamond 94.6%、Agents' Last Exam 53.6（Fable 5 を +13.1 で首位）。ARC-AGI-3 で 7.8%（初の有意義な進展）。$5/$30", swe: null, swePro: 64.6, terminalBench: 91.9, osworld: null, browseComp: 92.2, gpqa: 94.6, aime: null, hle: null },
  { name: "GPT-6 Astra", rating: 5, summary: "OpenAI 最上位モデル（2026年9月3日公開）。Preparedness Framework のサイバーセキュリティ区分で自社初の「Critical」判定。105万トークン ctx、最大出力12.8万、知識カットオフ2026年4月30日。$10/$50（272K トークン超は入力2倍・出力1.5倍）。公式発表の比較表（各 effort の最大値）: BrowseComp 91.5%、GPQA Diamond 96.0%、Humanity's Last Exam（ツールあり）57.2%（Claude Fable 5.1 の65.0% を下回る）。版の違う指標は列に入れていない: Terminal-Bench 4.0 57.9%、OSWorld 2.0（v2026.08.08 offline set、部分点）72.6%、DeepSWE v1.1 74.1%、FrontierMath Tier 4 (v2) 97.6%、ExploitBench 100%（2026年6〜8月の新規脆弱性では39.0%）。ARC-AGI-3 99.9% は Responses API ハーネスで設定を2点変えた値（公式脚注）。いずれも自社発表値で、独立した検証は確認できていない", swe: null, swePro: null, terminalBench: null, osworld: null, browseComp: 91.5, gpqa: 96, aime: null, hle: 57.2 },
  { name: "GPT-6.1 Sol", rating: 4.5, summary: "OpenAI 中位モデルの更新版（2026年9月29日公開、GPT-6 Sol の後継）。公式は「Astra に近い性能を Astra の5分の1の単価で」と説明し、Codex CLI 0.159.1 で同梱カタログの既定モデルになった。105万トークン ctx、最大出力12.8万、知識カットオフ2026年4月30日。$2/$10（キャッシュ入力 $0.10、272K トークン超は入力2倍・出力1.5倍）。公式発表は DeepSWE v1.1（GPT-6 Sol の最高値68.8% を6.4ポイント上回る）、OSWorld 2.0 offline set（max で Astra まで2.1ポイント差）、AutomationBench 1.0.6、GDP.pdf、Terminal-Bench Science 0.1 で示しており、表の列にあたる指標（SWE-Bench、Terminal-Bench 2.1、OSWorld-Verified、GPQA 等）の値は載っていないため列は空欄。いずれも自社発表値で、独立した検証は確認できていない", swe: null, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "GPT-6 Sol", rating: 4.5, summary: "OpenAI 中位モデル（2026年9月22日公開）。GPT-6 Astra と同様の手法で訓練。105万トークン ctx、最大出力12.8万、知識カットオフ2026年4月20日。$2/$10（キャッシュ入力 $0.20）で GPT-5.6 Sol の半額。公式発表値: OSWorld 2.0（v2026.08.08 offline set、部分点）xhigh で60.5%（Claude Opus 5 medium の60.3% とほぼ同じ）、DeepSWE v1.1 max で68.8%、AutomationBench 1.0.6 xhigh で33.2%、Agents' Last Exam max で56.4%。いずれも表の列とは別の指標・版で、表の列にあたる値は公式発表に載っていないため列は空欄。自社発表値で、独立した検証は確認できていない", swe: null, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "GPT-6 Luna", rating: 4, summary: "OpenAI 軽量モデル（2026年9月22日公開）。GPT-6 Astra と同様の手法で訓練。105万トークン ctx、最大出力12.8万、知識カットオフ2026年5月18日で Sol・Astra より新しい。$0.10/$0.50 で GPT-5.6 Luna の半額以下。公式発表値: DeepSWE v1.1 max で66.6%（Claude Opus 5・Fable 5 の medium 相当）、OSWorld 2.0 offline set の max で GPT-5.6 Sol（medium）を約10分の1のコストで上回る。いずれも表の列とは別の指標・版で、表の列にあたる値は公式発表に載っていないため列は空欄。自社発表値で、独立した検証は確認できていない", swe: null, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "GPT-5.6 Terra", rating: 4.5, summary: "OpenAI daily driver（7/9 GA）。1.5M ctx、大量業務向け。SWE-Pro 63.4%、Terminal-Bench 2.1 87.4%、BrowseComp 87.5%。Sol にわずかに及ばないがコストパフォーマンスに優れる。$2/$12（7/31 に20%値下げ）。Sonnet 5 と直接競合", swe: null, swePro: 63.4, terminalBench: 87.4, osworld: null, browseComp: 87.5, gpqa: null, aime: null, hle: null },
  { name: "GPT-5.6 Luna", rating: 4.0, summary: "OpenAI 軽量タスク向け（7/9 GA）。1.5M ctx、要約・ドラフト・定型自動化。SWE-Pro 62.7%、Terminal-Bench 2.1 84.7%。軽量にもかかわらず Sol とわずか数ポイント差。$0.20/$1.20（7/31 に80%値下げ）でフロンティア最安級、中国 OSS 対抗軸。8月より ChatGPT 無料枠の既定モデル", swe: null, swePro: 62.7, terminalBench: 84.7, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "GPT-5.5", rating: 4, summary: "OpenAI 前 GA フラッグシップ（4/23 リリース）。SWE-Pro 58.6%、Terminal-Bench 2.1 83.4%、BrowseComp 84.4%（Pro は 90.1%）。「半額の SOTA」を公称。マルチモーダル統合", swe: null, swePro: 58.6, terminalBench: 83.4, osworld: null, browseComp: 84.4, gpqa: null, aime: null, hle: null },
  { name: "GPT-5.5 Instant", rating: 3.5, summary: "OpenAI ChatGPT デフォルト（5/5 切替）。GPT-5.3 Instant 比でハルシネーション 52.5% 減、応答長 30% 短縮。Plus/Pro 向け長期メモリ対応。後継 GPT-5.6 系への置き換えが見込まれる", swe: null, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "GPT-5.4", rating: 3.5, summary: "OpenAI 旧世代（3月）。128Kコンテキスト。OSWorld 75%（Human expert 超え）、BrowseComp 82.7%（Pro は 89.3%）、Terminal-Bench 2.0 75.1%（2.1 ではない）。後継 GPT-5.5/5.6 に移行推奨。$2.50/$10", swe: null, swePro: null, terminalBench: 75.1, osworld: 75, browseComp: 82.7, gpqa: null, aime: 95, hle: null },
  { name: "GPT-5.4 mini", rating: 3.5, summary: "OpenAI 軽量。128Kコンテキスト、無料層でも利用可能。Codex との連携向け。$0.40/$1.60", swe: null, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "GPT-4o", rating: 3.0, summary: "OpenAI 旧世代。安定性が高く依然として広く利用。$2.50/$10", swe: null, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },

  // === xAI ===
  { name: "Grok 4.5", rating: 4.5, summary: "xAI（SpaceX 傘下）最新フラッグシップ（7/9 GA）。1.5T V9 基盤 + Cursor 訓練データ。SWE-Pro 64.7%（GPT-5.5 超え、Opus 4.7 と同等）、Terminal-Bench 2.1 83.3%、DeepSWE 1.1 53%（GPT-5.5 の 67% に劣る）。Artificial Analysis Intelligence Index は 54 で4位のため、Musk の「Opus クラス」主張は独立検証では裏付けられていない。一方 SWE-Pro の平均出力トークンは Opus 4.8 の約4.2分の1で、$2/$6 と合わせ実効コストは突出して低い", swe: null, swePro: 64.7, terminalBench: 83.3, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "Grok 4.6", rating: 4.5, summary: "xAI フラッグシップ（2026年8月12日公開、後継 Grok 4.7 は9/21）。Grok 4.5 から長時間エージェントと視覚・対話的な制作を強化。500K ctx、$2/$6（キャッシュ入力 $0.50、200K トークン超はリクエスト全体が $4/$12）。xAI 発表値（High）: DeepSWE v1.1 65.9%（4.5 は54%）、CursorBench v3.2 69.9%、FrontierCode v1.1（Extended）61.3%、APEX-Agents 57.5%、APEX-SWE 56.4%、GDPVal-AA v2 1753、AA-Briefcase 1577、Harvey LAB 15.8%、Artificial Analysis Intelligence Index 61（GPT-5.6 Sol Max と同点）、Terminal-Bench v3.0 26%。なお Grok 4.7 の発表では 4.6（High）を DeepSWE v1.1 65.2%、Terminal-Bench 4.0 20.3%、GDPval 1605 としており、4.6 発表時の値と一致しない。表の列（SWE-Bench Verified / Pro、Terminal-Bench 2.1、OSWorld-Verified、BrowseComp、GPQA、AIME、HLE）に当たる公式値は xAI の発表・ドキュメントに無く、TB 3.0 は版が違うため列には入れていない。自社発表値であり、独立した検証は確認できていない", swe: null, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "Grok 4.7", rating: 4.5, summary: "xAI 最新フラッグシップ（2026年9月21日公開）。4.6 より大きな新しいベースモデルで、長時間の強化学習を追加。単価は4.6から据え置き（$2/$6、200K超で$4/$12）、出力2倍速の fast 版は2倍の価格。xAI 発表値（xHigh）: CursorBench 4.0 46.3%（GPT-5.6 Sol 41.7%、Fable 5.1 51.8%）、DeepSWE v1.1 71.0%（この値のみ high effort）、Terminal-Bench 4.0 37.6%（4.6 は20.3%、Fable 5.1 57.9%）、EEBench 64.0%、AA Briefcase v1.1 1,657、Harvey Legal Agent Benchmark 19.6%、HealthBench Professional 56.7%、GDPval 1695 Elo（Fable 5.1 1735、GPT-6 Astra 1542）。第三者の Artificial Analysis は刷新後の指標で Intelligence Index 46（Fable 5.1・GPT-6 Astra は53）としている。Musk氏の述べるパラメータ2.1Tは xAI の公式発表に記載が無い。表の列に当たる公式値は無く、TB 4.0 は版が違うため列には入れていない。自社発表値であり、独立した検証は確認できていない", swe: null, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "Grok V9-Medium", rating: 4.0, summary: "xAI 消費者向け（6/16 公開）。1.5T パラメータ（v8-small の3倍）、Cursor 開発者ワークフローデータで訓練。X・SuperGrok で利用可（API は未開放）", swe: null, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "Grok 4 Heavy", rating: 4.5, summary: "xAI 前世代最上位。SuperGrok Heavy 経由。GPQA Diamond 88%、HLE 50%（初の50%超え）、AIME 2025 100%、ARC-AGI-2 15.9%。マルチエージェント推論、256K ctx", swe: null, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: 88, aime: 100, hle: 50 },

  // === Meta MSL（Meta Superintelligence Labs） ===
  { name: "Muse Spark 1.1", rating: 4, summary: "Meta 初の有料モデル（2026年7月9日公開）。Meta Model API（パブリックプレビュー）で提供、1M ctx、$1.25/$4.25 per 1M tokens。Llama 系無料 OSS 路線からの戦略転換。Meta の評価報告書（Muse Spark 1.1 Evaluation Report、xhigh）の値: Terminal-Bench 2.1 80.0、OSWorld-Verified 80.8、HLE（ツールなし、全2,500問）52.2 / ツールあり 62.1、DeepSWE v1.1 53.3、MCP Atlas 88.1、JobBench 54.7。SWE-Bench Pro 61.5 は Scale AI のリーダーボード（mini-swe-agent ハーネス）から Meta が引用した値。GPQA・BrowseComp は報告書に無い。後継は Muse Spark 1.3。自社発表値であり、独立した検証は確認できていない", swe: null, swePro: null, terminalBench: 80, osworld: 80.8, browseComp: null, gpqa: null, aime: null, hle: 52.2 },
  { name: "Muse Spark 1.3", rating: 4.5, summary: "Meta 最新版（9/2 リリース、xhigh構成が一般提供）。100万トークンコンテキスト。Terminal-Bench 2.1 88.8%、長文脈検索 98.5%。ツール呼び出し-20%・消費トークン-25%。より高性能な max 構成はパートナー限定プレビュー。$0.10/$0.20 per 1M tokens", swe: null, swePro: null, terminalBench: 88.8, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },

  // === Google ===
  { name: "Gemini 3.5 Flash", rating: 4.5, summary: "Google 最新（I/O 2026・5/19 GA）。Flash クラスの速度で 3.1 Pro 超え。Terminal-Bench 2.1 76.2%、GDPval-AA 1656 Elo、MCP Atlas 83.6%", swe: null, swePro: null, terminalBench: 76.2, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "Gemini 3.6 Flash", rating: 4.5, summary: "Google Flash系列（2026年7月21日 GA）。3.5 Flash をベースにトークン効率とコーディング・エージェント計画を改善。1M ctx、出力64K、知識カットオフ2026年3月。公式モデルカードの値: SWE-Bench Pro（Public）58.7%、Terminal-Bench 2.1（Terminus-2）78.0%、OSWorld-Verified 83.0%、DeepSWE v1.1 49%、MLE-Bench 63.9%、GDPVal-AA v2 1421。Google の自社計測値で、独立した検証は確認できていない。後継は 3.7 Flash（8/13）と 3.8 Flash（9/2）", swe: null, swePro: 58.7, terminalBench: 78, osworld: 83, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "Gemini 3.8 Flash", rating: 4.5, summary: "Google Flash系列最新（9/2）。3.7 Flashから6週間での投入で価格据え置き（$0.75/$3.75 per 1M）のままTerminal-Bench 2.1 が 85.8%（3.7 Flash）→ 89.4% に上昇。HLE-Verified は HLE とは別のベンチで 54.9%（表の HLE 列には入れていない）。防御者限定の3.8 Flash Cyberも同時公開", swe: null, swePro: null, terminalBench: 89.4, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "Gemini 3.1 Pro", rating: 4.0, summary: "Google フラッグシップ。2Mコンテキストは業界最大。長大なコードベースの一括読み込みに強い。SWE-bench Verified 80.6%。$1.25/$5", swe: 80.6, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "Gemini 3.1 Flash", rating: 3.5, summary: "Google 高速。1Mコンテキスト、極めて低コスト。速度重視の処理に向く。$0.075/$0.30", swe: null, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "Gemini 2.5 Pro", rating: 3.0, summary: "Google 旧世代。1Mコンテキスト、安定した実績。$1.25/$5", swe: 64, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },

  // === Microsoft MAI（Build 2026 で7モデル投入） ===
  { name: "MAI-Thinking-1", rating: 4.0, summary: "Microsoft 初の自社推論モデル（Build 2026・6/2）。35B active / ~1T total sparse MoE、256K ctx。AIME 2025 で 97.0%、AIME 2026 で 94.5%。SWE-Bench Pro で Opus 4.6 同等。OpenAI データを使わずに訓練", swe: null, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: 97, hle: null },
  { name: "MAI-Code-1-Flash", rating: 4, summary: "Microsoft 自社コーディング特化（Build 2026・6/2）。137B total / 5B active の疎な MoE、256K ctx、テキストのみ。GitHub Copilot（VS Code）で順次提供（モデルカード公開時点で API 提供は無い）。モデルカードの自社計測値（Copilot の本番ハーネスで計測）: SWE-Bench Verified 71.6、SWE-Bench Pro 51.2（Claude Haiku 4.5 は35.2）、SWE-Bench Multilingual 65.5、Terminal Bench 2 54.8、GPQA Diamond 84.6、AIME 2026 92.5、HLE（テキスト）18。Terminal Bench 2 は版の小数点が明記されておらず、AIME 2026 は表の AIME 2024/2025 と年が違い、HLE はテキストのみの区分のため、いずれも列には入れていない。自社発表値であり、独立した検証は確認できていない", swe: 71.6, swePro: 51.2, terminalBench: null, osworld: null, browseComp: null, gpqa: 84.6, aime: null, hle: null },

  // === China ===
  { name: "LongCat-2.0", rating: 4.5, summary: "Meituan（美団）新フラッグシップ（6/30 OSS 公開）。1.6T MoE（アクティブ 33B-56B）、1M ctx、MIT。50,000枚の中国国産 AI ASIC で訓練（NVIDIA GPU 不使用）。SWE-Pro 59.5% で GPT-5.5 超え、Terminal-Bench 2.1 70.8%。米国 API シェア 46% 拡大の牽引役", swe: null, swePro: 59.5, terminalBench: 70.8, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "Qwen 3.7 Max", rating: 4.5, summary: "Alibaba 新フラッグシップ（5/20、Alibaba Cloud Summit 杭州）。1M ctx、Terminal-Bench 2.0 で 69.7、GPQA Diamond 92.4。$2.50/$7.50（Opus 4.7 の約半額）", swe: null, swePro: null, terminalBench: 69.7, osworld: null, browseComp: null, gpqa: 92.4, aime: null, hle: null },
  { name: "Qwen 3.8 Max", rating: 4.5, summary: "Alibaba 新フラッグシップ（2026年8月3日発表）。2.4T MoE（活性化95B）で、Max 級として初めて重みを公開（Hugging Face の Qwen3.8-2.4T-A95B、独自の Qwen3.8-Max License。月間1億ユーザー超の製品での名称表示や、MaaS・AI作業支援事業で年商5,000万ドル超の場合の別途許諾などの条件付き）。API は1M ctx、$2/$6。モデルカードの自社計測値: Terminal-Bench 2.1 86.6（Claude Code ハーネス、avg@10）、GPQA Diamond 92.6、HLE 43.6（ツールなし）、HLE with tools 56.2、DeepSWE 1.1 56.6、IFBench 82.8。SWE-bench Pro 67.7 は Alibaba が問題タスクを修正した版での値のため列には入れていない。独立した検証は確認できていない", swe: null, swePro: null, terminalBench: 86.6, osworld: null, browseComp: null, gpqa: 92.6, aime: null, hle: 43.6 },
  { name: "Qwen 3.8 Flash-Next", rating: 4, summary: "Alibaba の軽量オープンウェイト（2026年8月下旬公開）。Qwen4 で使う予定のアーキテクチャの実験的プレビューで、Gated DeltaNet と Qwen Sparse Attention のハイブリッド。125B MoE（活性化6B）＋N-gram 埋め込み51B、ネイティブ262K ctx（最大1M まで拡張可）、Qwen Community License 1.0。API 版の Qwen3.8-Flash はこれをベースに1M ctx 等を加えたもの。モデルカードの自社計測値: GPQA Diamond 91.7、HLE 35.9（GPT-4o 判定）、DeepSWE 1.1 58.7、LiveCodeBench v6 91.9、OSWorld 2.0 binary 19.4 / partial 52.3。SWE-bench Pro 62.5 は問題タスクを修正した版、OSWorld 2.0 は表の OSWorld-Verified と版が違うため、いずれも列には入れていない。独立した検証は確認できていない", swe: null, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: 91.7, aime: null, hle: 35.9 },
  { name: "Kimi K3", rating: 5.0, summary: "Moonshot AI 現行フラッグシップ（7/16 発表・7/27 重み公開）。2.8T MoE（896 experts / 16 選択、活性化 104B）、1M ctx、テキスト・画像・動画入力。Artificial Analysis Intelligence Index 57 はオープンウェイト最高値。BrowseComp 91.2 と Terminal-Bench 2.1 88.3 は Moonshot 公表値（effort max/xhigh 揃え）。$3/$15、cache-hit は $0.30。ライセンスは MIT ではなく収益規模で条件が付く独自の Kimi K3 License", swe: null, swePro: null, terminalBench: 88.3, osworld: null, browseComp: 91.2, gpqa: null, aime: null, hle: null },
  { name: "Kimi K2.6", rating: 4.5, summary: "Moonshot AI（4/20）。1兆パラメータ、Modified MIT のオープンウェイト。SWE-Verified 80.2%、SWE-Pro 58.6% で GPT-5.4・Opus 4.6・Gemini 3.1 Pro を上回る。最大300サブエージェント並列、12時間連続実行", swe: 80.2, swePro: 58.6, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "Kimi K2.5", rating: 4, summary: "Moonshot AI 前世代。1兆パラメータ MoE、256Kコンテキスト。HLE で Opus 超え。オープンウェイト。後継 K2.6 へ移行推奨", swe: 76.8, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: 96.1, hle: 32 },
  { name: "DeepSeek V4 Pro", rating: 4, summary: "DeepSeek（4/24 プレビュー、8/13 に正式版 DeepSeek-V4-Pro-0813 を公開）。1.6T total / 49B active MoE、1M ctx、MIT。正式版の自社計測値（max effort、DeepSeek Harness minimal）: Terminal-Bench 2.1 87.9、GPQA Diamond 92.4（V4.1 Flash のモデルカードに掲載）、HLE 42.7（テキストのみのサブセット）/ ツールあり 60.0、DeepSWE 62.7、CyberGym 83.3。プレビュー版（V4-Pro-Max）の技術報告の値は SWE-bench Verified 80.6、SWE-bench Pro 55.4、BrowseComp 83.4、GPQA Diamond 90.1、HLE 37.7、Terminal-Bench 2.0 67.9 で、正式版とはチェックポイントが違うため列には入れていない。HLE はテキストのみのサブセットのため列には入れていない。9/10 の発表では V4 Pro 宛を V4.1 Flash へ転送するとしたが、その後の Change Log で9/14以降も V4 Pro の API 提供を続けると改めた。自社発表値であり、独立した検証は確認できていない", swe: null, swePro: null, terminalBench: 87.9, osworld: null, browseComp: null, gpqa: 92.4, aime: null, hle: null },
  { name: "DeepSeek V4 Flash", rating: 3.5, summary: "DeepSeek 軽量版（4/24 プレビュー、7/31 に再ポストトレーニングした DeepSeek-V4-Flash-0731 を公開）。284B total / 13B active、1M ctx、MIT。9/10 に API では提供終了し、deepseek-v4-flash は V4.1 Flash へ転送される。0731 版の自社計測値（max effort、DeepSeek Harness minimal）: Terminal-Bench 2.1 82.7、GPQA Diamond 89.9（V4.1 Flash のモデルカードに掲載）、HLE 37.8（テキストのみのサブセット）/ ツールあり 51.5、DeepSWE 54.4。プレビュー版（V4-Flash-Max）の技術報告の値は SWE-bench Verified 79.0、SWE-bench Pro 52.6、BrowseComp 73.2、GPQA Diamond 88.1、HLE 34.8 で、チェックポイントが違うため列には入れていない。自社発表値であり、独立した検証は確認できていない", swe: null, swePro: null, terminalBench: 82.7, osworld: null, browseComp: null, gpqa: 89.9, aime: null, hle: null },
  { name: "DeepSeek V4.1 Flash", rating: 4, summary: "DeepSeek 新アーキテクチャ第一弾（9/10）。552B MoE（Causal Encoder-Decoder、入力8B・出力16B active）、1M ctx、ネイティブ画像理解、MIT。API のモデル名は deepseek-flash。自社計測値（reasoning_effort=100）: Terminal-Bench 2.1 90.6（DeepSeek Harness minimal。Claude Code ハーネスでは88.0）、GPQA Diamond 90.9、HLE 36.8（テキストのみのサブセットでは39.1）/ ツールあり 63.9、DeepSWE v1.1 74.2、Terminal-Bench 3.0 30.0、Terminal-Bench 4.0 31.2、CyberGym 88.1。9/10 の発表では9/14以降 V4 Pro 宛を V4.1 Flash へ転送するとしたが、その後の Change Log で V4 Pro の提供継続に改めた。自社発表値であり、独立した検証は確認できていない", swe: null, swePro: null, terminalBench: 90.6, osworld: null, browseComp: null, gpqa: 90.9, aime: null, hle: 36.8 },
  { name: "DeepSeek R1", rating: 3.5, summary: "DeepSeek 推論特化（前世代）。671B MoE、MIT ライセンス。数学・コーディング。$0.14/$2.19 と破格", swe: 49, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: 79, hle: null },
  { name: "Ernie 5.1", rating: 3.5, summary: "Baidu（5月）。論理推論・数学計算・マルチモーダル生成で大幅改善。エージェント能力最適化と推論コスト低減。中国国内 B2B 中心", swe: null, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "ERNIE 4.5", rating: 3.5, summary: "Baidu 前世代。中国語特化で1億ユーザー基盤。マルチモーダル。後継 Ernie 5.1 推奨", swe: null, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "GLM-5.2", rating: 4.5, summary: "Z.ai（清華大学発 Zhipu AI）新フラッグシップ（6/13）。753B MoE（アクティブ 40B）、1M ctx、MIT。SWE-Pro 62.1% で GPT-5.5 超え・Opus 4.8 に肉薄、Terminal-Bench 2.1 81.0%（オープンウェイト最強）、GPQA Diamond 91.2%、FrontierSWE 74.4%。Hugging Face で MIT 重み公開", swe: null, swePro: 62.1, terminalBench: 81.0, osworld: null, browseComp: null, gpqa: 91.2, aime: null, hle: null },
  { name: "GLM-5.3", rating: 4.5, summary: "Z.ai 新フラッグシップ（8/14）。GLM-5.2 と同じベースモデルにポストトレーニングのみで強化、744B MoE（アクティブ40B）、1M ctx。重みは Hugging Face で独自の GLM-5.3 License。モデルカードの自社計測値（max effort）: Terminal-Bench 2.1 88.2（Claude Code 2.1.207 ハーネス）、Terminal-Bench 3.0 28.3、DeepSWE v1.1 66.9、CyberGym 84.5、HLE with tools 62.5、Agents' Last Exam（CLI）28.5、GDPval-AA v2 1769（Artificial Analysis による評価）。ツールなしの HLE と GPQA は Z.ai の発表に無い。自社発表値であり、独立した検証は確認できていない（米 CAISI がサイバー能力を別途評価している）", swe: null, swePro: null, terminalBench: 88.2, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "GLM-5.3-Flash", rating: 4, summary: "Z.ai 軽量版（8/26）。新たに学習したベースモデルで、GLM 系初のネイティブマルチモーダル。320B MoE（アクティブ18B）、疎+線形のハイブリッド注意機構、30T トークンの事前学習、1M ctx。Hugging Face で MIT ライセンスの FP8・BF16 重みを公開。公式ブログとモデルカードの図の自社計測値: Terminal-Bench 2.1 84.3（Claude Code 2.1.207 ハーネス）、DeepSWE v1.1 63.4、HLE with tools 55.3、AutomationBench v1.0.6 48.8、GDPval-AA v2 1773、OSWorld 2.0 59.1。OSWorld 2.0 は表の OSWorld-Verified と版が違うため列には入れていない。自社発表値であり、独立した検証は確認できていない", swe: null, swePro: null, terminalBench: 84.3, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "GLM-5", rating: 3.5, summary: "Zhipu AI 前世代。745Bパラメータ MoE、MIT ライセンス。Opus の約1/6のコスト。Huawei チップで学習。$0.80/$2.56。後継 GLM-5.2 推奨", swe: null, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "MiniMax M2.7", rating: 3.5, summary: "MiniMax。自己進化型モデル。SWE-Pro 56.2%で Opus に迫る。OpenClaw 上で自律最適化", swe: null, swePro: 56.2, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "KAT-Coder Pro V2", rating: 3.5, summary: "Kwai/快手。コーディング特化 MoE。SWE-Bench 73.4%。OpenClaw 対応。$0.30/$1.20 と低コスト", swe: 73, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
  { name: "Qwen 3 (235B)", rating: 4.0, summary: "Alibaba 前世代。235B MoE、Apache 2.0。ハイブリッド思考で推論/即答を切替。119言語対応。8サイズ展開", swe: null, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },

  // === Cursor 独自 ===
  { name: "Composer 2.5", rating: 4.0, summary: "Cursor 独自モデル。Kimi K2.5 ベース＋独自 RL。CursorBench で Opus 4.6 を上回るスコア。Cursor CLI / IDE / Background Agent の中核。Sonic（低レイテンシ）と組合せ", swe: null, swePro: null, terminalBench: null, osworld: null, browseComp: null, gpqa: null, aime: null, hle: null },
];

export const BENCHMARK_CONFIGS = [
  // === 現行の主要ベンチ（先頭が既定の表示。新しいモデルほど値が揃っている順に並べる） ===
  { key: "terminalBench", label: "Terminal-Bench", title: "Terminal-Bench 2.1（CLI エージェント能力）", desc: "コマンドラインでの計画・反復・ツール協調ができるか。GPT-5.6 Sol Ultra 91.9% SOTA" },
  { key: "swePro", label: "SWE-Pro", title: "SWE-Bench Pro（コーディング能力・contamination-resistant 版）", desc: "汚染耐性を強化した新版。OpenAI・xAI・中国 OSS 各社が主戦場としている" },
  { key: "osworld", label: "OSWorld", title: "OSWorld-Verified（Computer Use 能力）", desc: "デスクトップ環境でマウス・キーボード操作を含むタスクをこなせるか。Anthropic 主戦場" },
  { key: "browseComp", label: "BrowseComp", title: "BrowseComp（Web ブラウジング能力）", desc: "検索・情報照合を含むオンライン調査タスクをこなせるか" },
  // === 学術・推論 ===
  { key: "gpqa", label: "GPQA Diamond", title: "GPQA Diamond（PhD レベル科学問題）", desc: "PhD 専門家が 65% しか解けない科学問題。Sonnet 5 は 96.2% で最高" },
  { key: "hle", label: "HLE", title: "Humanity's Last Exam（学術上限ベンチ）", desc: "専門家が各分野で最難と選んだ問題を集約。Fable 5 が 53% で首位" },
  { key: "aime", label: "AIME", title: "AIME 2024/2025（数学的推論）", desc: "数学オリンピック予選レベル。Grok 4 系が 100% を達成" },
  // === 旧来ベンチ（参考。新しいモデルの多くは公式に値を出していない。既定の表示にしない） ===
  { key: "swe", label: "SWE-Verified（旧来）", title: "SWE-Bench Verified（旧来ベンチ・参考）", desc: "実際の GitHub Issue のバグ修正ができるか。2026年の新しいモデルは公式に値を出さなくなったものが多い" },
];
