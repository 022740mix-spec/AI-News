/**
 * バイブコーディング向け「理想の組み合わせ」と用語集（短文定義）。
 * UI は App.jsx 側。文面のみここで管理。
 */

/** 「バイブコーディングとは」見出し直下用（用語の説明） */
export const VIBE_CODING_DEFINITION =
  "AI との対話を軸にコードを組み立てる開発スタイル。IDE・AI チャット・音声入力などを組み合わせて、素早く試行錯誤しながら形にしていく。厳密な定義があるわけではなく、「雰囲気と勢いで回す」くらいのニュアンスで使われている。";

// ────────────────────────────────────────────
// セットアップガイド（非エンジニア向け）
// ────────────────────────────────────────────

export const VIBE_SETUP_GUIDE = {
  title: "始める前のセットアップ",
  lead: "バイブコーディングを始めるには、PC にいくつかのソフトを入れて、フォルダ構造を理解しておく必要がある。ここでは Windows と Mac それぞれの最短手順と、最初に知っておくべきフォルダの話をまとめた。",
  sections: [
    {
      id: "setup-windows",
      heading: "Windows のセットアップ",
      body: "必要なソフトは3つ: Git、Node.js、エディタ（Cursor または VS Code）。それぞれ公式サイトからインストーラーをダウンロードして実行するだけ。",
      steps: [
        { label: "Git をインストール", detail: "https://git-scm.com/ からダウンロード。インストーラーの選択肢はすべてデフォルトで OK。Git をインストールすると Git Bash も一緒に入る。" },
        { label: "Node.js をインストール", detail: "https://nodejs.org/ から LTS 版をダウンロードして実行。インストール後、ターミナルで確認:", code: "node --version\nnpm --version", codeLang: "bash" },
        { label: "Claude Code をインストール", code: "npm install -g @anthropic-ai/claude-code\nclaude --version", codeLang: "bash" },
        { label: "PowerShell と CMD の違い", detail: "PowerShell は新しい方（青い画面）、CMD は古い方（黒い画面）。バイブコーディングでは Git Bash を使うのがトラブルが少ない。Git をインストールすると Git Bash も入る。" },
      ],
    },
    {
      id: "setup-mac",
      heading: "Mac のセットアップ",
      body: "Homebrew（パッケージ管理ツール）を入れると、あとは brew コマンドで揃う。",
      steps: [
        { label: "Homebrew をインストール", detail: "Mac のパッケージ管理ツール。ターミナルで以下を実行:", code: "/bin/bash -c \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\"", codeLang: "bash" },
        { label: "Git と Node.js をインストール", code: "brew install git node", codeLang: "bash" },
        { label: "Claude Code をインストール", code: "npm install -g @anthropic-ai/claude-code\nclaude --version", codeLang: "bash" },
      ],
    },
    {
      id: "setup-folder",
      heading: "フォルダ構造を理解する",
      body: "バイブコーディングでは「プロジェクト」という単位でフォルダを作る。デスクトップや OneDrive に置かず、専用のフォルダを作る理由がある。",
      steps: [
        { label: "なぜデスクトップに置かないのか", detail: "デスクトップはファイルが散らかりやすく、パスに日本語やスペースが入ると不具合の原因になる。OneDrive は同期がファイル監視と衝突して不具合が起きやすい。C:\\Users\\あなた\\Projects\\ に専用フォルダを作るのが安全。" },
        { label: "推奨フォルダ構成", code: "C:\\Users\\あなた\\\n├── Projects/          ← プロジェクトを置く場所\n│   ├── my-app/        ← プロジェクト1\n│   ├── AI-News/       ← プロジェクト2\n│   └── ...\n├── .claude/           ← Claude Code のグローバル設定（隠しフォルダ）\n├── .cursor/           ← Cursor のグローバル設定（隠しフォルダ）\n└── .config/           ← 各種ツールの設定（隠しフォルダ）", codeLang: "text" },
      ],
    },
    {
      id: "setup-hidden",
      heading: "隠しファイルを表示する（重要）",
      body: "バイブコーディングのツールは . (ドット)で始まるファイルやフォルダをたくさん作る。Windows ではデフォルトで見えないので、必ず表示設定を変えること。",
      steps: [
        { label: "Windows で隠しファイルを表示", detail: "エクスプローラー → 上部メニュー「表示」→「表示」→「隠しファイル」にチェック。または「...」→「オプション」→「表示」タブ →「隠しファイル、隠しフォルダー、および隠しドライブを表示する」を選択。" },
        { label: "Mac で隠しファイルを表示", detail: "Finder を開いた状態で Cmd + Shift + . を押すとトグルで表示/非表示が切り替わる。" },
        { label: "VS Code / Cursor で隠しファイルを表示", code: "// settings.json に追加:\n{\n  \"files.exclude\": {\n    \"**/.claude\": false,\n    \"**/.cursor\": false\n  }\n}", codeLang: "json" },
      ],
    },
    {
      id: "setup-dotfiles",
      heading: "AI が作るフォルダ・ファイルの正体",
      body: "バイブコーディングを始めると、見慣れないフォルダが大量にできる。どれが何で、消していいのかの早見表。",
      steps: [
        { label: "プロジェクト内に生成されるもの", code: "my-app/\n├── node_modules/    ← npm パッケージの実体。巨大だが npm install で復元可能。消して OK\n├── .git/            ← Git の履歴。==消すと変更履歴がすべて消える。消さない==\n├── .claude/         ← Claude Code の設定・メモリ。消すと設定が消える\n├── .cursor/         ← Cursor の設定・ルール。消すとルールが消える\n├── dist/            ← ビルド出力。npm run build で再生成可能。消して OK\n├── package.json     ← プロジェクトの設計図。!!消したら壊れる!!\n└── package-lock.json← 依存の正確なバージョン。消さないのが安全", codeLang: "text" },
        { label: "ユーザーフォルダに生成されるもの", code: "C:\\Users\\あなた\\\n├── .claude/       ← Claude Code グローバル設定。消すと全プロジェクト共通の設定が消える\n├── .cursor/       ← Cursor グローバル設定\n├── .config/       ← 各種ツールの設定置き場（Git, npm 等）\n├── .npm/          ← npm のキャッシュ。消して OK（自動再生成）\n├── .cache/        ← 各種キャッシュ。消して OK\n├── .dotnet/       ← .NET ランタイム。使ってないなら消して OK\n├── .nuget/        ← NuGet パッケージキャッシュ。消して OK\n├── .local/        ← Linux 系ツールの設定。基本触らない\n└── AppData/       ← Windows アプリの設定。基本触らない", codeLang: "text" },
      ],
    },
    {
      id: "setup-vm",
      heading: "仮想化と Docker（Windows の注意点）",
      body: "Claude Code の一部機能（Cowork のサンドボックス等）や Docker は仮想化技術が必要。Windows では追加設定が要る場合がある。",
      steps: [
        { label: "Windows 11 Pro / Enterprise の場合", detail: "設定 → アプリ → オプション機能 → Windows のその他の機能 → Hyper-V にチェック → 再起動。または PowerShell（管理者として実行）で:", code: "Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All", codeLang: "powershell" },
        { label: "!!Windows 11 Home の場合!!", detail: "Home エディションでは Hyper-V が使えない。WSL2（Windows Subsystem for Linux）で代替する。再起動後 Ubuntu が使えるようになり、Docker Desktop も WSL2 バックエンドで動作可能。", code: "wsl --install", codeLang: "powershell" },
        { label: "BIOS で仮想化を有効にする", detail: "多くの PC はデフォルトで仮想化がオフ。確認方法: タスクマネージャー → パフォーマンス → CPU →「仮想化: 有効」と表示されていれば OK。オフの場合: PC 再起動 → 起動時に F2 / Del / F10（メーカーによる）を連打して BIOS に入る → Advanced → CPU Configuration → Intel VT-x または AMD-V を Enabled → 保存して再起動。" },
        { label: "Mac の場合", detail: "Apple Silicon（M1/M2/M3/M4）は仮想化がハードウェアで常時有効。特別な設定は不要で、Docker Desktop をインストールするだけ。" },
      ],
    },
    {
      id: "setup-corporate-ssl",
      heading: "企業 PC で SSL エラーが出るとき（重要）",
      body: "会社支給の PC では、セキュリティソフトが通信を検査（TLS インスペクション）していることがある。このとき Node.js や Claude Code が「SSL certificate verification failed」で動かなくなる。自宅 Wi-Fi でも会社 PC なら同じ問題が起きる。原因は PC の中のセキュリティエージェントが常駐しているため。",
      steps: [
        { label: "なぜ起きるのか", detail: "ブラウザは Windows の証明書ストアを使うので会社の証明書も信頼して成功する。一方 Node.js は独自の証明書リストを使うため、会社の証明書を知らず失敗する。つまり「ブラウザでは開けるのに CLI だけ失敗する」パターン。" },
        { label: "==正しい対処: NODE_USE_SYSTEM_CA=1==", detail: "Node.js に「OS の証明書ストアを使え」と指示する環境変数。Windows キー →「環境変数」で検索 →「ユーザー環境変数」の「新規」→ 変数名: NODE_USE_SYSTEM_CA、値: 1 → OK → ターミナル・エディタを全て再起動。" },
        { label: "設定後の確認方法", detail: "status 404 と表示されれば TLS 接続は成功（404 はページが無いだけで通信は OK）。", code: "node -e \"const https=require('https'); https.get('https://api.anthropic.com/',r=>console.log('status',r.statusCode));\"", codeLang: "bash" },
        { label: "それでもダメなら: NODE_EXTRA_CA_CERTS", detail: "会社の IT 部門から証明書ファイル（.pem）をもらい、ユーザー環境変数に設定する。変数名: NODE_EXTRA_CA_CERTS、値: C:\\path\\to\\company-ca-chain.pem" },
        { label: "!!やってはいけない対処: NODE_TLS_REJECT_UNAUTHORIZED=0!!", detail: "AI に聞くとこれを勧められることがあるが、絶対にやらない。SSL 検証そのものをオフにする設定で、npm install が壊れたり、他の Node.js アプリの通信も検証なしになる。セキュリティ上の重大なリスク。正しくは NODE_USE_SYSTEM_CA=1 を使う。" },
      ],
    },
    {
      id: "setup-corporate-note",
      heading: "会社 PC に開発ツールを入れる前に",
      body: "バイブコーディングのツール（Claude Code、Cursor 等）を会社 PC にインストールする場合、事前に IT 部門や上長に確認すること。ツール利用が許可されているか、データの取り扱いポリシーに抵触しないかを確認するのが前提。個人 PC であれば自由に導入できる。",
      steps: [],
    },
    {
      id: "setup-first-claude-md",
      heading: "最初に書いておく CLAUDE.md",
      body: "プロジェクトを始めたらすぐに CLAUDE.md を作る。これが AI への「仕事の指示書」になる。最初に書いておくとフォルダが散らからない。",
      steps: [
        { label: "最小限の CLAUDE.md テンプレート", code: "# プロジェクト設定\n\n## 基本方針\n- 応答は日本語で行う\n- コード変更後は必ずビルド検証\n- ファイル作成は最小限にする（不要なファイルを増やさない）\n\n## フォルダ構造のルール\n- src/ 配下にソースコードを置く\n- 新しいフォルダを作る前に既存構造を確認する\n- テストは tests/ に、ドキュメントは docs/ に\n\n## 禁止事項\n- .env ファイルをコミットしない\n- node_modules/ をコミットしない\n- 既存ファイルを確認せずに新規作成しない", codeLang: "markdown" },
      ],
    },
  ],
};

/**
 * バイブ開始から本格運用までの段階（本文・検索用）。
 * @type {{ title: string, lead: string, steps: { heading: string, body: string }[], footnote: string }}
 */
export const VIBE_PROGRESSION_PATH = {
  title: "バイブを始める段階（おすすめの道筋）",
  lead: "難易度ランキングではなく、画面とファイルの扱いが育つ順の目安。会社では Copilot 寄り、個人では Cowork 課金、といった分岐も含む。",
  steps: [
    {
      heading: "① AI チャットで対話する（Claude / ChatGPT / Gemini）",
      body: "まずは AI チャットだけで十分。要件や見た目を言葉にして、短いコード片をその場で試す。いきなりリポジトリは開かなくてよい段階。",
    },
    {
      heading: "② 企業なら Copilot 周り",
      body: "GitHub Copilot、Microsoft 365 Copilot、Power Platform など、契約とガバナンスに合わせた足場がある。個人では同じものがそのまま使えないことも多い。",
    },
    {
      heading: "③ 個人：Pro 課金でコード寄りに",
      body: "月額サブスク（目安 約 20 ドル）で、Cowork や Artifacts のようなコードに寄り添った協働 UI に進む。この段階では CLI に飛ばず、チャット+αで触れる範囲を広げるのが現実的。",
    },
    {
      heading: "④ デスクトップアプリでローカル作業",
      body: "Claude Code アプリなど、リポジトリやローカルファイルに足を踏み入れる段階。エディタを主戦場にしなくても、足りなくなったら検討する。",
    },
    {
      heading: "⑤ Cursor ／ VS Code を主戦場に",
      body: "フォルダ単位で触り、エディタ内チャットや Composer、統合ターミナルから CLI を併用するいちばん重い組み合わせ。",
    },
    {
      heading: "⑥ ブラウザ連携（Gemini 等）",
      body: "①〜⑤と並行して足せる補助。画面操作・タブの文脈を AI に渡す系で、コーディング本体とは別軸。",
    },
  ],
  footnote:
    "製品名・提供範囲は変更されやすいので都度公式を優先してください。",
};

/**
 * 組み合わせ決定後の実務（音声・CLI 操作・スキル配置）。公式ドキュメントが正。
 * @type {{ title: string, lead: string, sections: { id: string, heading: string, body: string }[] }}
 */
export const VIBE_CODING_PRACTICAL = {
  title: "実務での道具の扱い（音声・スラッシュ・スキル）",
  lead: "ツールの組み合わせを決めたあとに効く実務の細部。コマンド名・フラグは更新が速いので、必ず公式の現行版で確認すること。",
  sections: [
    {
      id: "vibe-voice-aqua",
      heading: "音声入力で指示を高速化する",
      body: "仕様・コメント・長い指示をキーボードで打ち続けず、口述→整形→チャットへ貼るのが快適。Aqua Voice はその用途でよく名前が上がる例のひとつ（他にも OS 標準音声入力や各 AI アプリのマイクで代用可）。ポイントは「どのウィンドウに貼るか」を毎回決めること。",
    },
    {
      id: "vibe-slash-session",
      heading: "スラッシュコマンドとセッション管理",
      body: "CLI では `/` から始まるスラッシュコマンドで会話の整理やツール操作にアクセスできる（例: /help, /clear）。セッションの続き・再開・名前付けは `--continue` / `--resume` で公式に説明されている。詳細は https://code.claude.com/docs を参照。",
    },
    {
      id: "vibe-skills-layout",
      heading: "スキルファイル（SKILL.md）の置き場所",
      body: "フォルダ＋SKILL.md に手順・禁止事項・ドメイン知識を束ね、モデルが必要なときだけ読む段階的開示の仕組み。Claude 系は .claude/skills やプロジェクト配下に置く。Codex 側は AGENTS.md、Cursor は .cursor/skills が対応する。製品ごとに置き場所が違うので公式を確認。",
    },
    {
      id: "vibe-skills-community",
      heading: "コミュニティのスキル集と注意点",
      body: "GitHub 上に awesome-claude-skills のような有志の一覧リポジトリがある。便利だが出所・ライセンス・中身の信頼性は自分で確認すること。会社利用では「そのままコピー禁止」「セキュリティレビュー必須」などポリシーが上書きする。",
    },
  ],
};

/* VIBE_STACK_NOTE — 削除（冗長な免責注記） */

/** @typedef {{ pattern: string, ide: string, ai: string, voice: string, note: string }} VibeToolComboRow */

/** @type {{ lead: string, columns: [string, string, string, string, string], rows: VibeToolComboRow[] }} */
export const VIBE_TOOL_COMBO_TABLE = {
  lead: "上の道筋と同じく、チャット → Copilot/Cowork → デスクトップアプリ → エディタ＋CLI の流れで並べている。料金・モデル名は各公式の最新情報を確認のこと。",
  columns: ["パターン", "IDE・エディタ", "AI（対話・エージェント）", "音声・入力補助", "ひとこと"],
  rows: [
    {
      pattern: "Claude チャット（第一歩）",
      ide: "Claude 公式アプリ／ブラウザ（claude.ai）",
      ai: "対話。コード片やアーティファクト的なまとまりをその場で試す",
      voice: "アプリ／ブラウザの音声入力・アクアボイス 等",
      note: "バイブ開始のデフォルト候補。ChatGPT・Gemini でも可。",
    },
    {
      pattern: "企業向け Copilot・Power 文脈",
      ide: "VS Code／GitHub／M365／Power Platform など契約に合わせた枠",
      ai: "GitHub Copilot、Copilot Chat、Microsoft 365 Copilot 等",
      voice: "各クライアントの音声・聞き取り機能",
      note: "会社で決まっている足場を優先。個人サブスクだけでは揃わないことがある。",
    },
    {
      pattern: "Claude Pro → Cowork（個人の次の段階）",
      ide: "ブラウザ／アプリ（リポジトリを開かなくてもよい）",
      ai: "**Cowork** でコード寄りのタスク・編集イメージに近づける",
      voice: "同上",
      note: "この段階では CLI に急がないほうが混乱しにくい。課金プランは公式を確認。",
    },
    {
      pattern: "Claude Code デスクトップアプリ",
      ide: "Claude Code（**アプリ**。リポジトリ／ローカル作業）",
      ai: "対話でファイル操作・実行寄りのフロー",
      voice: "（任意）指示はチャットへ貼る運用が中心になりがち",
      note: "CLI 以前に、ローカルとの往復をアプリで慣れる段階。",
    },
    {
      pattern: "Cursor／VS Code 本格運用",
      ide: "Cursor または Visual Studio Code",
      ai: "内蔵 AI・Composer・Copilot 等をフォルダ単位で使う",
      voice: "アクアボイス で仕様・コメント・長文指示",
      note: ".cursor/rules やスコープ宣言で AI のブレを抑えやすくなる。",
    },
    {
      pattern: "ターミナル Claude Code（CLI）",
      ide: "ターミナル（リポジトリ直下に `cd`）",
      ai: "`claude` 対話・`claude -p`・`--permission-mode`・エージェントチーム等",
      voice: "**エディタに貼る**・パイプ・クリップボード経由が中心になりがち",
      note: "本格担当者向け。権限モードとプラン要件は公式 CLI ドキュメントで確認。",
    },
    {
      pattern: "OpenAI Codex 系（任意）",
      ide: "VS Code／Cursor／ターミナル",
      ai: "Codex CLI・IDE 拡張・エージェントモード",
      voice: "（任意）音声",
      note: "サンドボックスと承認フロー前提。ファイル書き込み範囲を理解してから任せる。",
    },
    {
      pattern: "Chrome・Gemini（画面・タブ補助）",
      ide: "Chrome 等ブラウザ",
      ai: "Gemini と**開いている画面／タブ**の文脈を組み合わせる系",
      voice: "ブラウザの音声入力",
      note: "コーディングの別軸の補助。要件が合えば公式を追う価値はある。",
    },
  ],
};

/** Claude Code CLI・公式に沿った起動・モードのメモ（バイブコーディング用） */
/** @type {GlossaryGenre} */
export const VIBE_CLAUDE_CODE = {
  id: "vibe-claude-code",
  title: "Claude Code 日常リファレンス",
  lead: "起動してからの日常操作で大事なところだけ。導入手順は公式 https://docs.anthropic.com/en/docs/claude-code/overview を参照。Claude Code はターミナル（Bash や PowerShell などのコマンド入力画面）で動作する。Bash とは Mac/Linux の標準的なコマンド入力環境のことで、Windows では Git Bash や WSL で使える。",
  terms: [
    // ── 使い方の種類 ──
    { word: "A. デスクトップアプリで使う", section: "使い方の種類", mean: "Claude Code の専用アプリ（Windows / Mac）を起動して使う。独自の画面でファイルツリーやチャットが見える。マウス操作で直感的に使いたい人向け。ターミナルに慣れていない人はここから始めると入りやすい。" },
    { word: "B. Cursor / VS Code のターミナルから使う", section: "使い方の種類", mean: "Cursor や VS Code の統合ターミナル（Ctrl+` で開く）から `claude` コマンドで起動する。エディタの AI（Composer 等）と Claude Code CLI を同時に使える。==最も多い使い方==。", code: "claude", codeLang: "bash" },
    { word: "C. 単体のターミナルから使う", section: "使い方の種類", mean: "Git Bash、PowerShell、Windows Terminal などから直接 `claude` を起動する。エディタを使わず CLI だけで完結させたい場合や、CI/CD（自動化）から呼び出す場合に使う。" },
    { word: "==どの方法でも共通==", section: "使い方の種類", mean: "コマンド（`claude`, `claude -c` 等）、設定ファイル（CLAUDE.md, スキル）、Hooks はすべて共通で動作する。違いは見た目とエディタとの連携のしやすさだけ。" },
    // ── 起動・セッション ──
    {
      word: "起動: `claude`",
      section: "起動・セッション",
      mean: "対話セッションを開始する。まず `cd`（change directory = フォルダ移動コマンド）でプロジェクトのフォルダに移動してから実行する。こうすると Claude がそのフォルダ内のファイル構成を正しく把握できる。`cd ..` で1つ上のフォルダに戻れる。",
      code: "cd C:\\Users\\あなた\\Projects\\my-app\nclaude",
    },
    {
      word: "再開: `claude -c`",
      section: "起動・セッション",
      mean: "直近のセッション（会話の続き）を再開する。ターミナルを一度閉じても、同じフォルダで `claude -c` と打てば前回の会話から続けられる。最もよく使うオプション。",
      code: "claude -c",
    },
    {
      word: "非対話: `claude -p \"指示\"`",
      section: "起動・セッション",
      mean: "1回だけ質問して終了するモード。`|`（パイプ）はコマンドの出力を次のコマンドに渡す記号。例えば `cat spec.md | claude -p \"...\"` は、spec.md ファイルの中身を Claude に読ませて指示を実行させる、という意味。",
      code: "cat spec.md | claude -p \"この仕様に沿ってテストを書いて\"",
    },
    // ── 権限モード ──
    {
      word: "権限: `--permission-mode`",
      section: "権限モード",
      mean: "plan（提案のみ）/ acceptEdits（編集は自動、Bash は確認）/ bypassPermissions（全自動）を選ぶ。Shift+Tab で対話中に切替可能。",
      code: "claude --permission-mode acceptEdits",
    },
    {
      word: "Auto: `--enable-auto-mode`",
      section: "権限モード",
      mean: "リスク分類で安全な操作の確認を減らすモード。Team プラン + Opus/Sonnet 4.6 が条件。auto は「全部スキップ」ではなく「低リスクだけスキップ」。",
      code: "claude --enable-auto-mode",
    },
    {
      word: "!!`--dangerously-skip-permissions`!!",
      section: "権限モード",
      mean: "Claude がファイルを編集したりコマンドを実行する前の確認ダイアログを全てスキップする。==壊れても問題ない練習用の環境（＝サンドボックス: 本番データが入っていない、やり直しがきく隔離された作業場所）以外では絶対に使わないこと==。大事なファイルがあるフォルダで使うと、意図しない削除や上書きが起きるリスクがある。",
      code: "claude --dangerously-skip-permissions",
    },
    // ── セッション内操作 ──
    {
      word: "操作: `/clear`",
      section: "セッション内操作",
      mean: "会話コンテキストをリセットする。話題を変えたいとき、トークンを節約したいときに使う。",
      code: "/clear",
    },
    {
      word: "操作: `/compact`",
      section: "セッション内操作",
      mean: "会話履歴を要約して圧縮する。長い作業で「コンテキストが足りない」と言われたらこれ。",
      code: "/compact",
    },
    {
      word: "操作: `/cost`",
      section: "セッション内操作",
      mean: "現在のセッションで使ったトークン数と料金の概算を表示する。",
      code: "/cost",
    },
    {
      word: "ステータスライン表示",
      section: "セッション内操作",
      mean: "ターミナル下部に現在使用中のモデル名、残りのトークン使用量、セッション時間などを常時表示する機能。Settings で `statusLine` を有効にするか、`/config` から設定できる。使用量の上限が近づいているかを把握するのに便利。",
    },
    {
      word: "操作: `Esc`",
      section: "セッション内操作",
      mean: "実行中の処理をキャンセルする。ファイル編集中でも止められる。暴走したら即 Esc。",
    },
    // ── 実践で知っておくべきこと ──
    {
      word: "==承認プロンプト（Y/n）の意味==",
      section: "実践で知っておくべきこと",
      mean: "Claude がファイルを編集したりコマンドを実行しようとすると「Allow?」や「Y/n」の確認が出る。Y（Yes）で許可、n（No）で拒否。何を変更するのか表示されるので、==必ず内容を確認してから Y を押す==。よくわからないまま Y を連打するとファイルが壊れることがある。",
    },
    {
      word: "==コンテキストが足りなくなったら==",
      section: "実践で知っておくべきこと",
      mean: "長い会話を続けると「コンテキストが上限に近づいています」と警告が出る。Claude の記憶容量（コンテキストウィンドウ）には限りがあり、古い会話内容から忘れていく。対処: `/compact` で会話を要約圧縮するか、`/clear` でリセットして新しい会話を始める。大事な前提は毎回伝え直すのが安全。",
    },
    {
      word: "Claude は全ファイルを最初から読んでいるわけではない",
      section: "実践で知っておくべきこと",
      mean: "Claude Code はプロジェクトのフォルダにいるが、全ファイルを常に把握しているわけではない。必要に応じてファイルを読みに行く仕組み。「このファイルを読んで」と明示的に指示すると確実。大きなプロジェクトでは、関連するファイルを自分から教えてあげると精度が上がる。",
    },
    {
      word: "==Claude の変更を元に戻す方法==",
      section: "実践で知っておくべきこと",
      mean: "Claude がファイルを壊してしまった場合、Git を使って元に戻せる。`git diff` で何が変わったかを確認し、`git checkout ファイル名` で特定のファイルを元に戻す。まだコミット（保存確定）していなければ、すべての変更を `git stash` で一時退避できる。==だから Git を使うことが大事==。",
      code: "git diff\ngit checkout src/App.jsx\ngit stash",
      codeLang: "bash",
    },
    {
      word: "新しいセッションを始めるタイミング",
      section: "実践で知っておくべきこと",
      mean: "話題が大きく変わるとき（例: バグ修正 → 新機能追加）は新しいセッションを始めた方がよい。古い会話の文脈が残っていると、Claude が混乱して的外れな回答をすることがある。同じ話題の続きなら `claude -c` で再開、別の話題なら `claude` で新規開始。",
    },
    {
      word: "==差分（diff）を必ず確認する==",
      section: "実践で知っておくべきこと",
      mean: "Claude がファイルを編集すると、変更前と変更後の差分（diff）が表示される。緑色が追加された行、赤色が削除された行。コミットする前にこの差分を読んで、意図した変更かどうか確認する習慣をつける。わからない部分があれば Claude に「この変更は何をしているの？」と聞けばよい。",
    },
    {
      word: "Plan モードで先に計画を立てる",
      section: "実践で知っておくべきこと",
      mean: "大きな変更をする前に `--permission-mode plan` で起動するか、会話の中で「まず計画を立てて、実行はしないで」と指示する。Claude が何をしようとしているかを先に確認でき、想定外の変更を防げる。",
      code: "claude --permission-mode plan",
      codeLang: "bash",
    },
    {
      word: "`/doctor` で環境を診断",
      section: "実践で知っておくべきこと",
      mean: "Claude Code が正しく動作しているか、設定に問題がないかを診断するコマンド。ツールのバージョン、API 接続、MCP サーバーの状態などを確認できる。何かおかしいときはまずこれを実行する。",
      code: "/doctor",
      codeLang: "text",
    },
    // ── 設定ファイル ──
    {
      word: "設定: `CLAUDE.md`",
      section: "設定ファイル",
      mean: "プロジェクトルートに置く指示書。コーディング規約・禁止事項・プロジェクト情報を書く。Claude が毎回読み込む最重要ファイル。",
      code: "# プロジェクト設定\n\n## 基本方針\n- 応答は日本語で行う\n- コード変更後は必ずビルド検証\n\n## 技術スタック\n- React 19 + Vite\n- vanilla CSS",
      codeLang: "markdown",
    },
    {
      word: "設定: `~/.claude/CLAUDE.md`",
      section: "設定ファイル",
      mean: "ユーザー共通の設定。「日本語で回答」「コミットは明確に」など全プロジェクト共通の好みを書く。",
      code: "# ユーザー共通設定\n\n- 応答は常に日本語\n- 簡潔で実用的な回答を優先\n- 推測ではなくコードに基づいた回答",
      codeLang: "markdown",
    },
    {
      word: "設定: `.claude/settings.local.json`",
      section: "設定ファイル",
      mean: "ローカル環境固有の設定。.gitignore に入れて個人の API キーやパスを管理する。",
    },
    // ── Hooks（自動化） ──
    {
      word: "Hooks とは",
      section: "Hooks（自動化）",
      mean: "ツール実行の前後にシェルコマンドを自動で走らせる仕組み。settings.json の hooks フィールドで定義する。lint 自動実行、通知、ログ記録などに使う。",
    },
    {
      word: "Hook: `PreToolUse`",
      section: "Hooks（自動化）",
      mean: "ツール実行前に走る。例: 特定ファイルの編集を禁止する、Bash コマンドを検証する。exit 2 を返すとツール実行をブロックできる。",
      code: "{\n  \"hooks\": {\n    \"PreToolUse\": [\n      {\n        \"matcher\": \"Bash\",\n        \"command\": \"echo \\\"$CLAUDE_TOOL_INPUT\\\" | check-allowed-commands.sh\"\n      }\n    ]\n  }\n}",
      codeLang: "json",
    },
    {
      word: "Hook: `PostToolUse`",
      section: "Hooks（自動化）",
      mean: "ツール実行後に走る。最もよく使う Hook。保存 → lint → テストの自動化がバイブの速度を上げる。",
      code: "{\n  \"hooks\": {\n    \"PostToolUse\": [\n      {\n        \"matcher\": \"Edit\",\n        \"command\": \"npx eslint --fix $CLAUDE_FILE_PATH\"\n      }\n    ]\n  }\n}",
      codeLang: "json",
    },
    {
      word: "Hook: `Notification`",
      section: "Hooks（自動化）",
      mean: "タスク完了時に走る通知フック。例: 音声で完了を知らせる、Slack に投稿する。",
      code: "{\n  \"hooks\": {\n    \"Notification\": [\n      {\n        \"matcher\": \"\",\n        \"command\": \"say 'タスク完了'\"\n      }\n    ]\n  }\n}",
      codeLang: "json",
    },
    {
      word: "Hook 応用: 自動コンテキスト圧縮",
      section: "Hooks（自動化）",
      mean: "Notification Hook を使って、コンテキスト使用量が高くなったら自動で `/compact` を実行する仕組みを作れる。長時間の作業セッションでコンテキスト切れを防ぐ実用的な設定。",
    },
    // ── MCP（ツール拡張） ──
    {
      word: "MCP: `claude mcp add`",
      section: "MCP（ツール拡張）",
      mean: "外部ツール（MCP サーバー）を追加するコマンド。",
      code: "claude mcp add github -- npx @anthropic-ai/mcp-server-github",
    },
    {
      word: "MCP: `claude mcp list`",
      section: "MCP（ツール拡張）",
      mean: "設定済み MCP サーバーの一覧を表示。接続状態も確認できる。",
      code: "claude mcp list",
    },
    // ── エージェント・チーム ──
    {
      word: "チーム: `--teammate-mode`",
      section: "エージェント・リモート",
      mean: "複数エージェントの協調モードを選ぶ。auto（既定）/ in-process / tmux。タスクを分割して並列で回すときに使う。",
      code: "claude --teammate-mode tmux",
    },
    {
      word: "チーム: `--agent エージェント名`",
      section: "エージェント・リモート",
      mean: "セッションで使うサブエージェントを指定する。claude agents で一覧を確認できる。",
      code: "claude --agent my-agent\nclaude agents",
    },
    {
      word: "リモート操作: `--remote-control`",
      section: "エージェント・リモート",
      mean: "PC のターミナルで起動した Claude Code のセッションを、ブラウザ（claude.ai）やスマホの Claude アプリから遠隔操作できるようにするオプション。起動するとリンクが表示され、そのリンクを開くとブラウザ/アプリ側から同じセッションに指示を出せる。外出先からスマホで自宅 PC の Claude Code を操作するような使い方ができる。",
      code: "claude --remote-control",
    },
    {
      word: "リモートコントロールの条件",
      section: "エージェント・リモート",
      mean: "==PC 側（Claude Code を動かしている方）はオンライン状態が必須==。PC がスリープやシャットダウンすると接続が切れる。スマホ側は Claude アプリ（iOS / Android）または claude.ai のブラウザから操作可能。同じ Anthropic アカウントでログインしている必要がある。",
    },
    {
      word: "リモートコントロールの使いどころ",
      section: "エージェント・リモート",
      mean: "外出中にスマホから自宅 PC の作業を進めたい、別の人にセッションを見せてレビューしてもらいたい、会議中にスマホから軽い修正指示を出したい、など。ターミナルの前にいなくても Claude Code に指示を送り続けられるのがポイント。",
    },
    // ── Cowork との違い ──
    {
      word: "==Cowork（コワーク）とは==",
      section: "Cowork との違い",
      mean: "Anthropic が提供する claude.ai 上のコード協働機能。ブラウザだけでコードの編集・実行ができる。Claude Code（CLI）とは別の製品で、ターミナルやエディタのインストールが不要。Pro プラン以上で利用可能。",
    },
    {
      word: "Cowork と Claude Code CLI の違い",
      section: "Cowork との違い",
      mean: "==Cowork== はブラウザ上で完結する。PC にツールをインストールしなくてもコードを書ける。手軽だが、ローカルファイルに直接アクセスはできない。==Claude Code CLI== は PC のターミナルで動作し、ローカルのファイルを直接編集できる。MCP サーバーやスキルファイルなど高度な拡張も可能。本格的な開発は CLI、手軽に試すなら Cowork。",
    },
    {
      word: "Cowork の Dispatch と --remote-control の違い",
      section: "Cowork との違い",
      mean: "==Dispatch== は Cowork 側の機能で、claude.ai からタスクをクラウドに投げて非同期で処理させる仕組み。結果はブラウザに返ってくる。==--remote-control== は CLI 側の機能で、PC で動いている Claude Code セッションをブラウザ/アプリから操作する仕組み。Dispatch はクラウドで実行、remote-control はあくまで PC 上で実行される。",
    },
    // ── スキル ──
    {
      word: "Skills: `.claude/skills/`",
      section: "スキル",
      mean: "SKILL.md を置くと Claude がタスクに応じて自動で読み込む。プロジェクトの定型作業（デプロイ手順、テスト方針など）を教え込む仕組み。",
      code: "---\nname: deploy\ndescription: 本番デプロイの手順\n---\n\n# デプロイ手順\n\n1. npm run build\n2. npm run deploy",
      codeLang: "markdown",
    },
    // ── 便利なスラッシュコマンド ──
    {
      word: "操作: `/btw`",
      section: "便利なコマンド",
      mean: "作業の本筋を止めずに、ちょっとした追加の指示や補足を伝えるコマンド。「by the way（ところで）」の略。例えば Claude がファイルを編集中に `/btw コミットメッセージは日本語でお願い` と打つと、今の作業を中断せずにルールを追加できる。",
      code: "/btw コミットメッセージは日本語で書いて",
      codeLang: "text",
    },
    {
      word: "操作: `/init`",
      section: "便利なコマンド",
      mean: "プロジェクトのルートに CLAUDE.md を自動生成するコマンド。Claude がプロジェクトの構成を読み取って、適切な設定ファイルを作ってくれる。最初に1回だけ実行すればよい。",
      code: "/init",
      codeLang: "text",
    },
    // ── 便利な連携 ──
    {
      word: "音声連携（VOICEVOX 等）",
      section: "便利な連携",
      mean: "Hooks の Notification を使って、タスク完了時に音声合成ソフト（VOICEVOX、COEIROINK 等）で読み上げさせることができる。長い処理を待っている間に画面を見なくても完了がわかる。設定は settings.json の hooks に音声再生コマンドを追加する。",
    },
    // ── 料金 ──
    {
      word: "料金: Claude Pro（$20/月）",
      section: "料金",
      mean: "個人向けプラン。Claude Code のデスクトップアプリと CLI が利用可能。月のトークン使用量に上限あり（多い日は制限がかかることがある）。",
    },
    {
      word: "料金: Claude Max（$100/月 or $200/月）",
      section: "料金",
      mean: "ヘビーユーザー向け。Pro よりも大幅に多いトークンが使える。1日中 Claude Code を回す開発者や、チームで大量に使う場合に。$100 プランと $200 プランで上限が異なる。",
    },
    {
      word: "料金: API 従量課金",
      section: "料金",
      mean: "API キーを使って従量課金で利用する方法。サブスク上限を気にせず使えるが、モデルごとの単価（Opus: $15/$75、Sonnet: $3/$15 per 1M tokens）がかかる。大規模プロジェクトや CI/CD での自動実行に向く。",
    },
  ],
};

/** @typedef {{ title: string, mean: string, mem?: string }} VibeBasicRule */

/** 基本ルール見出し直下 */
export const VIBE_BASIC_RULES_LEAD =
  "バイブコーディングで最初に押さえておくべき安全習慣。チャットだけの段階では全部を意識しなくてよいが、ファイルを触り始めたら必須になる。";

/** @type {VibeBasicRule[]} */
export const VIBE_BASIC_RULES = [
  {
    title: "作業スコープを毎回決める",
    mean: "開いているフォルダ・編集してよいファイル・触ってはいけない設定を、会話の冒頭で宣言します。",
    mem: "「この repo の src だけ」と決めるだけで誤削除や別プロジェクト混入が減ります。",
  },
  {
    title: "秘密と本番をチャットに載せない",
    mean: "API キー、パスワード、顧客データ、本番 URL のままのログは AI・スクショ・貼り付けに混ぜません。",
    mem: "環境変数・秘密管理ツールを使い、**仮の例**で質問します。",
  },
  {
    title: "コミット前に diff を一言で要約する",
    mean: "AI が直した箇所が「何のための変更か」自分の言葉で説明できなければ、まだコミットしない、と決めると安全です。",
  },
  {
    title: "動作確認の最小ルートを決めてから速く回す",
    mean: "画面を開く手順・押すボタン・期待する表示を、メモしてから試行錯誤すると迷子になりにくいです。",
  },
  {
    title: "依存追加は理由つきで",
    mean: "パッケージを足すたびに「何のためか」を README かコミットメッセージに残すと、あとからメンテする人が助かります。",
  },
  {
    title: "疑わしい提案は一度「なぜ？」と聞く",
    mean: "型を無効化する回避・権限の広い設定・`eval` 系などは、採用前に理由とリスクを AI に言語化させます。",
  },
];

/* VIBE_SITE_READING_GUIDE — 削除（内部向けメタ説明） */

/** @typedef {{ tool: string, company: string, traits: string, since: string }} MediaTaxonomyRow */

/** @typedef {{ id: string, title: string, lead: string, columns: [string, string, string, string], rows: MediaTaxonomyRow[] }} MediaTaxonomySection */

/** メディア生成ガイド（タブ冒頭） */
export const MEDIA_GUIDE_INTRO =
  "**画像・動画・音楽・音声合成**など、生成系ツールの代表例をジャンル別に並べた早見です。IDE や CLI での開発の道筋は **バイブコーディング** タブを参照してください。**著作権・商用利用・顔そっくり規制・料金**は各サービスの現行約款が正です。";

/** メディア／ツール分野の早見（代表例。正式名称・提供条件は各公式を優先） */
/** @type {MediaTaxonomySection[]} */
export const VIBE_MEDIA_TAXONOMY = [
  {
    id: "media-image",
    title: "画像（生成・編集）",
    lead: "広告・サムネ・UI モックなど。**著作権・商用利用・学習データ方針**は各サービスで必ず確認してください。",
    columns: ["ツール／サービス例", "主な提供元", "特徴（ざっくり）", "話題化の目安"],
    rows: [
      {
        tool: "Midjourney",
        company: "Midjourney, Inc.",
        traits: "高品質なスタイル画像。Discord 起点の文化から Web 拡大",
        since: "2022頃〜",
      },
      {
        tool: "Adobe Firefly",
        company: "Adobe",
        traits: "Creative Cloud 連携・企業向け寄りの統合提案",
        since: "2023頃〜",
      },
      {
        tool: "DALL·E 系",
        company: "OpenAI",
        traits: "ChatGPT 経由の画像生成・編集とセットで語られがち",
        since: "2022頃〜",
      },
      {
        tool: "Stable Diffusion エコシステム",
        company: "Stability AI ほか OSS／各社ホスティング",
        traits: "オープンウェイト系。ローカル・自社 GPU・細かいチューニング向き",
        since: "2022頃〜",
      },
      {
        tool: "Ideogram・Flux など",
        company: "Ideogram・Black Forest Labs 等",
        traits: "文字入れ・リアル系など強みの差別化モデル群",
        since: "2023〜2024頃〜",
      },
      {
        tool: "Gemini・「Nano Banana」画像",
        company: "Google",
        traits: "検索・Workspace 連携やアプリ内の画像生成（俗称で話題になることがある）",
        since: "2024〜2025頃〜",
      },
    ],
  },
  {
    id: "media-video",
    title: "動画（生成・編集）",
    lead: "短尺 CM 風クリップから編集補助まで。**長さ・権利・顔そっくり規制**は国・サービスで差があります。",
    columns: ["ツール／サービス例", "主な提供元", "特徴（ざっくり）", "話題化の目安"],
    rows: [
      {
        tool: "Runway",
        company: "Runway AI, Inc.",
        traits: "動画生成・編集の老舗ブランド、製作ワークフロー向け",
        since: "2022頃〜",
      },
      {
        tool: "Pika",
        company: "Pika Labs",
        traits: "短尺生成、SNS 向けデモが話題になりやすい",
        since: "2023頃〜",
      },
      {
        tool: "Kling（可灵）",
        company: "快手（Kuaishou）系",
        traits: "長めの秒数・写実寄りの生成として注目例",
        since: "2024頃〜",
      },
      {
        tool: "Sora",
        company: "OpenAI",
        traits: "高品質長尺寄りの期待、提供形は段階的に拡大",
        since: "2024頃〜",
      },
      {
        tool: "Veo",
        company: "Google",
        traits: "YouTube・Google 製品群との連携文脈",
        since: "2024頃〜",
      },
      {
        tool: "Luma Dream Machine ほか",
        company: "Luma AI 等",
        traits: "3D・動画の横断でプロダクトを拡げる例",
        since: "2024頃〜",
      },
    ],
  },
  {
    id: "media-music",
    title: "音楽（生成）",
    lead: "フル曲イメージのプロトタイプ。**サンプリング・著作権**は用途によっては要検討です。",
    columns: ["ツール／サービス例", "主な提供元", "特徴（ざっくり）", "話題化の目安"],
    rows: [
      {
        tool: "Suno",
        company: "Suno, Inc.",
        traits: "歌声つき曲の生成で認知拡大、SNS 拡散しやすい",
        since: "2023頃〜",
      },
      {
        tool: "Udio",
        company: "Udio Music, Inc.",
        traits: "Suno と並び語られる生成音楽サービス",
        since: "2024頃〜",
      },
      {
        tool: "Stable Audio など",
        company: "Stability AI",
        traits: "Stability ブランドの音響・生成系",
        since: "2023頃〜",
      },
    ],
  },
  {
    id: "media-tts",
    title: "音声合成（TTS）",
    lead: "ナレーション・電話 IVR・キャラボイス。**声の権利・なりすまし規約**に注意します。",
    columns: ["ツール／サービス例", "主な提供元", "特徴（ざっくり）", "話題化の目安"],
    rows: [
      {
        tool: "ElevenLabs",
        company: "ElevenLabs",
        traits: "多言語・感情寄りの高品質 TTS、API 利用も多い",
        since: "2022頃〜",
      },
      {
        tool: "OpenAI TTS",
        company: "OpenAI",
        traits: "API からの読み上げ、他プロダクトとセット利用",
        since: "2023頃〜",
      },
      {
        tool: "Azure Speech・Google Cloud TTS",
        company: "Microsoft・Google",
        traits: "エンタープライズ向けスラッグ、オンプレ／閉域要件と相性",
        since: "〜（クラウド長期カテゴリ）",
      },
    ],
  },
  {
    id: "media-stt",
    title: "音声認識（文字起こし）",
    lead: "会議録・コンテンツ字幕。**個人情報・医療・法務**は閉域オプションや規約確認が定番です。",
    columns: ["ツール／サービス例", "主な提供元", "特徴（ざっくり）", "話題化の目安"],
    rows: [
      {
        tool: "Whisper 系",
        company: "OpenAI（モデル）＋各社実装",
        traits: "オープンウェイトからクラウド API まで実装多様",
        since: "2022頃〜",
      },
      {
        tool: "各クラウド STT",
        company: "AWS・Azure・Google 等",
        traits: "ストリーミング・電話 CX・企業規約とセット",
        since: "〜（長期カテゴリ）",
      },
    ],
  },
  {
    id: "media-editor-ide",
    title: "エディター・IDE（AI 統合）",
    lead: "バイブコーディングの「画面」。**拡張の多さ vs 統合の速さ**のトレードオフがあります。",
    columns: ["ツール／サービス例", "主な提供元", "特徴（ざっくり）", "話題化の目安"],
    rows: [
      {
        tool: "Visual Studio Code",
        company: "Microsoft",
        traits: "拡張エコシステム最大級、Copilot・各社 AI 拡張の器",
        since: "〜（2010 年代〜）",
      },
      {
        tool: "Cursor",
        company: "Anysphere",
        traits: "AI ネイティブ IDE としての一体 UI",
        since: "2023頃〜",
      },
      {
        tool: "Windsurf",
        company: "Codeium / Exafunction",
        traits: "エージェント寄りフローとセットで語られることが多い",
        since: "2024頃〜",
      },
      {
        tool: "Google Antigravity",
        company: "Google",
        traits: "Gemini 前提のエージェント IDE として注目",
        since: "2025頃〜",
      },
      {
        tool: "JetBrains AI / Android Studio",
        company: "JetBrains・Google",
        traits: "JVM・モバイル現場との親和性",
        since: "2023頃〜",
      },
    ],
  },
  {
    id: "media-cli-code",
    title: "CLI・コーディングエージェント",
    lead: "ターミナルで回す「動く下書き」。**権限モードとログ**がバイブの安全弁になります。",
    columns: ["ツール／サービス例", "主な提供元", "特徴（ざっくり）", "話題化の目安"],
    rows: [
      {
        tool: "Claude Code",
        company: "Anthropic",
        traits: "`claude` CLI・IDE 連携・Permission / Agent teams",
        since: "2024頃〜",
      },
      {
        tool: "GitHub Copilot CLI",
        company: "GitHub / Microsoft",
        traits: "gh 拡張・リポジトリ文脈でのシェル補助",
        since: "2023頃〜",
      },
      {
        tool: "OpenAI Codex CLI",
        company: "OpenAI",
        traits: "エージェント的実行・サンドボックス設計が話題中心",
        since: "2025頃〜",
      },
      {
        tool: "Gemini CLI",
        company: "Google",
        traits: "Google クラウド・Workspace 文脈での CLI 利用例",
        since: "2025頃〜",
      },
      {
        tool: "aider ほか OSS エージェント",
        company: "コミュニティ各社",
        traits: "ローカル Git とセットで小刻みに編集委譲",
        since: "2023頃〜",
      },
    ],
  },
];

/** @typedef {{ id: string, title: string, lead: string, terms: { word: string, mean: string, mem?: string }[] }} GlossaryGenre */

/** バイブ向け「落とし穴」— 用語集タブとは別（ガイドのバイブページに表示） */
/** @type {GlossaryGenre} */
export const VIBE_GUIDE_PITFALLS = {
  id: "vibe-pitfalls",
  title: "バイブコーディングでハマりやすいこと",
  lead: "AI がすぐ「動くコード」を出すほど、あとから効いてくる負債があります。勢いで黙認しがちな例です。",
  terms: [
    {
      word: "`any` で型をごまかす（TypeScript）",
      mean: "コンパイルエラーを消すために値を `any` にすると、だれが何を持っているか分からなくなり、静的解析の恩恵がほぼ消えます。積もると原因の分からない不具合の温床です。",
      mem: "一時しのぎなら `unknown` や具体型、型ガードに寄せる・AI に「any を使わず直して」と依頼し直す、が定石です。",
    },
    {
      word: "`@ts-ignore` / `eslint-disable` の貼りっぱなし",
      mean: "警告をコメント一行で黙らせる手法です。「なぜ安全と言えるか」を書かず使うと、本当のバグが隠れ続けます。",
    },
    {
      word: "秘密情報のハードコード",
      mean: "API キー・パスワード・トークンをソースに直書きしたまま共有リポジトリへ上げるパターン。公開・フォークされた時点で漏洩扱いになります。",
      mem: "既に載せてしまったらキーはローテーション（無効化→再発行）が前提です。",
    },
    {
      word: "空の `catch` でエラーを握りつぶす",
      mean: "例外を何もせず飲み込むと、本番で静かに壊れているのに誰も気づけません。ログ・再スロー・ユーザー向けメッセージのいずれかは残すのが最低ラインです。",
    },
    {
      word: "説明を読まないコピペ",
      mean: "AI や記事の断片を、挙動とリスクを確認せず連ねると、古い書き方・不要な依存・ライセンス違反・セキュリティ穴が混ざります。",
    },
    {
      word: "`eval` や安易な `dangerouslySetInnerHTML`",
      mean: "文字列をコードや HTML として実行・挿入する仕組み。外部やユーザー由来の文字が入ると乗っ取り・ XSS の典型経路です。「とりあえず表示」で選ぶと危険度が跳ねます。",
    },
    {
      word: "SQL を文字列で素連結",
      mean: "ユーザー入力をクエリ文に直接くっつける書き方は、SQL インジェクションの定番の入り口です。プレースホルダや ORM のバインドを使います。",
    },
    {
      word: "フロントに強い権限のキーを埋め込む",
      mean: "ブラウザ向けに配布されるコードは原則として読めます。管理者用キーや広すぎるスコープのトークンをクライアントへ置くと、悪用されやすいです。",
    },
    {
      word: "デバッグ出力の放置",
      mean: "`console.log` だらけのまま運用に載せると、ログが汚れるだけでなく想定外の個人情報が紛れ込むこともあります。必要な箇所だけに整理するか、ロガーでレベル分けします。",
    },
    {
      word: "権限のないまま本番データに直結",
      mean: "ローカルから本番 DB や管理 API に楽になるよう繋いだまま固定すると、誤操作・漏洩・レート制限でサービス停止まで起こり得ます。環境分離と RBAC を口約束で終わらせないことが重要です。",
    },
  ],
};

/** @typedef {{ id: string, title: string, emoji: string, forWho: string, summary: string, combo: { role: string, picks: string, tip: string }[] }} VibeStack */

/** @type {VibeStack[]} */
export const VIBE_IDEAL_STACKS = [
  {
    id: "starter-chat",
    title: "まずは Claude チャット",
    emoji: "💬",
    forWho: "プログラム未経験・業務アイデアを形にしたい方",
    summary:
      "**Claude（アプリ／Web）**から入り、コードファイルを持たずに文章・表・短い試作を出す段階。ChatGPT／Gemini でも可ですが、**同じ画面で結果を試す**ところまで一気にやりたいなら Claude が扱いやすいことが多いです。",
    combo: [
      {
        role: "会話",
        picks: "ChatGPT / Claude / Gemini など好みのチャット",
        tip: "「誰向け・何ができれば成功か・ダメな例」を毎回3行で書くと答えが安定しやすいです。",
      },
      {
        role: "メモ",
        picks: "付箋アプリ、Notion、スプレッドシート",
        tip: "AI の回答は必ず自分の言葉で一行要約を添えて戻せるようにしておくと、後から見返せます。",
      },
      {
        role: "次の一歩",
        picks: "うまくいったら GitHub アカウントだけ作っておく",
        tip: "まだ使わなくても「保存の場所」を先に確保しておくと、後でエンジニアに渡しやすいです。",
      },
    ],
  },
  {
    id: "solo-vibe-ide",
    title: "一人で試すバイブコーディング定番",
    emoji: "⌨️",
    forWho: "ブラウザ操作に慣れている・小さな画面やツールを作ってみたい方",
    summary:
      "AI 付きエディタに自然語で指示しつつ、ファイルが実際に保存される体験。Git で巻き戻せるようにすると「試し放題」の安心感が出ます。",
    combo: [
      {
        role: "エディタ（頭脳）",
        picks: "Cursor / VS Code + AI 拡張、または Windsurf など",
        tip: "フォルダ一つを開き、「この中だけ触って」と毎回宣言すると事故が減ります。",
      },
      {
        role: "保管・履歴",
        picks: "GitHub（無料枠で十分なことが多い）",
        tip: "「セーブの履歴が付くクラウド下書き」と思うと分かりやすいです。",
      },
      {
        role: "実行環境",
        picks: "ブラウザだけ / ローカルで Node や Python（必要になったら）",
        tip: "最初は「表示できれば OK」。ホスティングは後回しで大丈夫です。",
      },
    ],
  },
  {
    id: "app-with-data",
    title: "ログインやデータが要るアプリ",
    emoji: "🗄️",
    forWho: "会員登録・予約・一覧表示など「記録が残る」ものを狙う方",
    summary:
      "画面だけでなく「誰のデータか」をサーバー側で覚える必要が出ます。BaaS は設計をかなり省略できるため、バイブコーディングと相性がよく出ます。",
    combo: [
      {
        role: "フロント（見た目）",
        picks: "Next.js / Vite + React など（AI がサンプルを出しやすい構成）",
        tip: "名前は難しくても「ユーザーが触る画面層」だと考えてください。",
      },
      {
        role: "バックエンド兼 DB",
        picks: "Supabase または類似の「DB + 認証 + API がまとまった」サービス",
        tip: "「スプレッドシートを堅牢にしたもの＋権限管理」くらいのイメージで十分です。",
      },
      {
        role: "データの形を決める",
        picks: "Prisma や Drizzle など ORM（任意だがチームだと便利）",
        tip: "表の列設計を固定するツールと理解すると、AI への指示もブレにくくなります。",
      },
    ],
  },
  {
    id: "team-safe",
    title: "チームで本番に近づける",
    emoji: "🛡️",
    forWho: "複数人で触る・顧客データが絡む・あとで監査されたい方",
    summary:
      "バイブコーディングの「勢い」を残しつつ、権限とレビューで火消し口を用意する段階です。役割分担がハッキリすると AI も使い分けしやすいです。",
    combo: [
      {
        role: "コードの玄関",
        picks: "GitHub + Pull Request（PR）必須、CI（自動チェック）",
        tip: "「マージ＝みんなの正式版に取り込む儀式」と覚えると運用が見えます。",
      },
      {
        role: "役割",
        picks: "触ってよい環境（開発）と本番を分離",
        tip: "本番キーはチャットに貼らない、をルール化します。",
      },
      {
        role: "AI の使い道",
        picks: "下書き・テスト作成は AI、最終判断は人間",
        tip: "医療・法務など敏感領域は社内ポリシーとセットで必ず人の目を通します。",
      },
    ],
  },
];

/** @type {GlossaryGenre[]} */
export const GLOSSARY_BY_GENRE = [
  {
    id: "ai-chat",
    title: "AI・チャットまわり",
    lead: "画面の向こう側で何をしているか、イメージしやすい言葉です。",
    terms: [
      {
        word: "LLM（大規模言語モデル）",
        mean: "膨大な文章で学習した予測エンジン。次に来そうな単語を積み上げて文章やコードを書きます。",
        mem: "万能ではなく「それっぽい」を起こし得るので確認が大事、とサイトでも触れています。",
      },
      {
        word: "プロンプト",
        mean: "AI に渡す指示文のこと。依頼書のテンプレに近いです。",
        mem: "目的・条件・ダメな例を書くほど、ブレが減りやすいです。",
      },
      {
        word: "コンテキスト",
        mean: "AI が一度に「思い出せる作業メモリ」。長い会話ほど古い部分が圧縮や捨てに遭います。",
        mem: "大事な前提は毎回短く貼り直すと安定します。",
      },
      {
        word: "トークン",
        mean: "文章を細かく刻んだ単位。課金や長さ制限の目安に使われます。",
        mem: "日本語は英語よりトークンが多めになりがちです。",
      },
      {
        word: "RAG（ラグ）",
        mean: "質問に答える前に、あなたの資料を検索して読み込む仕組み。社内マニュアル型の質問応答でよく聞きます。",
        mem: "「検索＋要約」とざっくり覚えて OK です。パターン分岐は用語集の **RAG・検索拡張のバリエーション** を参照してください。",
      },
      {
        word: "エージェント",
        mean: "AI がツール（検索・ファイル編集・API 呼び出し等）を束ねて複数ステップを進める枠組み。",
        mem: "自動運転度が上がるほど、権限設計も重要になります。",
      },
      {
        word: "MCP",
        mean: "AI クライアントが外部ツールにつなぐための共通配線の規格イメージ。USB-C のような「同じ形差し込み口」に近い比喩です。",
        mem: "中身のツール自体は別メーカー製です。",
      },
      {
        word: "バイブコーディング",
        mean: "厳密な設計より、対話のリズムで試しながらコードを育てるやり方の俗称。勢いと検証のバランスがポイントです。",
        mem: "「動いた」で止めると技術的負債が積み上がります。**ガイド → バイブコーディング** の「ハマりやすいこと」も併せて読むと安心です。",
      },
    ],
  },
  {
    id: "rag-variants",
    title: "RAG・検索拡張のバリエーション",
    lead: "RAG（Retrieval-Augmented Generation）は「質問する前に資料を検索し、見つけた断片を根拠に答える」方式の総称です。**「第◯世代」という呼び方に公式な一本化はなく**、ここでは論文・ブログでよく並べられる **仕組みのレイヤ** で整理します。",
    terms: [
      {
        word: "素朴な RAG（retrieve → read）",
        mean: "クエリをベクトル化し、ドキュメント断片と距離が近いものを取り出してコンテキストに詰め、LLM に答えさせる基本形。実装は単純だが、**表記ゆれ・同義語**で取り逃がすと精度が落ちます。",
      },
      {
        word: "ハイブリッド検索（ベクトル＋キーワード）",
        mean: "意味的近さ（密ベクトル）と **BM25 等のキーワード一致**を併用し、採用候補をマージや再スコアします。日本語の固有名詞・型番検索で効きやすいです。",
      },
      {
        word: "リランキング（再順位付け）",
        mean: "一度ざっくり取った上位 k 件を、**より重い cross-encoder や小型モデル**で並べ替えます。「検索の第2段」として定番です。",
      },
      {
        word: "クエリ拡張・書き換え（HyDE など）",
        mean: "ユーザの一文を、検索しやすい複数クエリや「仮答え」に展開してから検索する系統。**短い質問**や **曖昧な指示**の取りこぼしを減らす狙いがあります（Hypothetical Document Embeddings 等）。",
      },
      {
        word: "Graph RAG",
        mean: "テキスト断片だけでなく **エンティティ関連をグラフ**にし、関係ホップしながら根拠を集める方式。マニュアル・組織図・法務で「だれが何と関係？」が効く場面で語られます。",
      },
      {
        word: "Agentic RAG（エージェント型）",
        mean: "LLM が **検索 API を何度も呼び直す・フィルタを変える・サブクエリに分割する**など、自律的にループする構造。単発 RAG より柔軟だが、**停止条件・コスト・ログ**の設計が重要です。",
      },
      {
        word: "「世代」呼びについて",
        mean: "コミュニティによって「RAG 1.0 / 2.0」「初世代はベクトルだけ」など比喩的な区切りが出ますが、**産業標準のラベルではありません**。比較するときは「どの処理（検索・要約・ループ・グラフ）を足しているか」で読み替えると安全です。",
      },
    ],
  },
  {
    id: "programming-languages",
    title: "言語の種類と得意分野",
    lead: "「どの言語が何のためにあるか」をざっくり掴むと、AI の提案を選びやすくなります。",
    terms: [
      {
        word: "HTML（エイチティーエムエル）",
        mean: "Web ページの骨格と意味づけを書くマークアップ言語。見出し・段落・リンクなど「文書の構造」を表します。",
        mem: "プログラミングというより「仕様書に近い記法」と思うとブレにくいです。",
      },
      {
        word: "CSS（シーエスエス）",
        mean: "見た目・レイアウト・色・フォントなどを指定する言語。HTML とセットで画面のデザインを担います。",
      },
      {
        word: "JavaScript（JS）",
        mean: "ブラウザ上で画面の動きを担当する言語。ボタン反応・アニメ・通信などフロントの主力。Node.js を使うとサーバー側でも動かせます。",
        mem: "Web の「インタラクティブ」を一手に引き受けるイメージです。",
      },
      {
        word: "TypeScript（TS）",
        mean: "JavaScript に「型」を足した言語。書き方は近いですが、仕様のブレやミスを早めに検知しやすく、規模が大きいプロジェクトやチーム開発で好まれます。",
        mem: "最終的には多くの場合 JavaScript に変換（トランスパイル）されて動きます。",
      },
      {
        word: "静的（静的型・静的解析）",
        mean: "**プログラムを実行する前に**型やルールを決めたり検査したりする手当ての総称です。**静的型付け**は TypeScript のように、変数の型をコードに書いてコンパイルやエディタが先に誤りを指しやすくします。**静的解析**は ESLint のように、**動かさずに**ソースを読んで危ない書き方や規約違反を探すことです。",
        mem: "記事で「静的に分かる」は「走らせなくても検査できる」くらいの意味で使われることが多いです。",
      },
      {
        word: "動的（動的型・実行時）",
        mean: "**実行してから**意味が定まる・検査される側のイメージです。**動的型付け**は JavaScript のように、実行時まで型の解釈がゆるく、動かして初めて型まわりの問題に気づくこともあります。**実行時（ランタイム）**は、アプリが実際に動いている時間帯。ログ・クラッシュ・デバッガは多くここを対象にします。",
        mem: "「動的」だけだと文脈で「動的型」なのか「実行時」なのか切り替わるので、前後の文を読むと安全です。",
      },
      {
        word: "Python",
        mean: "読みやすく書きやすい言語。データ分析・機械学習・スクリプト自動化・Web のサーバーなど用途が広く、初心者向け教材や AI 連携例も多いです。",
      },
      {
        word: "Java（ジャバ）",
        mean: "大規模な業務システムや長期運用向けに採用されてきた言語。Android アプリの主流言語の一つでもあります。JVM という実行環境の上で動くのが特徴です。",
        mem: "名前は似ていますが JavaScript とは別物です。",
      },
      {
        word: "C（シー）",
        mean: "歴史が長く、OS や組み込み機器、性能を細かく詰めたい場面で根強い言語。ハードに近いレイヤーを扱えますが、学習・保守の負担は重めになりがちです。",
      },
      {
        word: "C++（シープラプラ）",
        mean: "C を拡張した言語。ゲームエンジンや高性能ライブラリなどで使われます。表現力は高い反面、言語仕様が複雑で育成コストも大きいです。",
      },
    ],
  },
  {
    id: "code-files",
    title: "コード・ファイルの世界",
    lead: "「下書きがフォルダになる」イメージで捉えると怖さが減ります。",
    terms: [
      {
        word: "リポジトリ（リポ）",
        mean: "プロジェクトのフォルダと履歴をまとめた箱。GitHub 上の「その箱」を指すことが多いです。",
      },
      {
        word: "Git",
        mean: "変更履歴を記録する仕組み。「いつの時点にも戻せるタイムマシン」と考えると近いです。",
      },
      {
        word: "コミット",
        mean: "ある時点の変更をひとかたまりとして記録すること。手帳の「本日のログを確定」と同じです。",
      },
      {
        word: "ブランチ",
        mean: "本線から派生した試行用のライン。「実験用ノート」と思うと分かりやすいです。",
        mem: "多くのリポジトリでは、その本線に相当する既定ブランチの名前が `main` です。",
      },
      {
        word: "main（メインブランチ）",
        mean: "リポジトリで「いまの公式な土台」とみなされる本線ブランチに付けられる名前の定番。レビュー済みの変更はここへマージ（取り込み）されていくイメージです。古い資料では同じ役割が `master` と書かれていることもあります。",
        mem: "デフォルトブランチは設定で変えられますが、GitHub 上の緑色の「メインブランチ」が多くの場合 `main` です。",
      },
      {
        word: "Pull Request（PR）",
        mean: "「この変更を本番ラインに取り込みたいです」というレビュー依頼。チームの品質ゲートになります。",
      },
      {
        word: "ビルド",
        mean: "人が読みやすいコードを、動かせる形に変換・束ねる工程。料理で言えば盛り付け前の火入れ工程です。",
      },
      {
        word: "依存関係",
        mean: "自作以外に借りてきた部品（ライブラリ）のこと。バージョンを揃えるのがプロジェクト管理の定番仕事です。",
      },
      {
        word: ".md（Markdown）",
        mean: "見出し・箇条書き・リンクなどを、プレーンテキストで書ける記法。**README.md** がリポジトリの顔になることが多いです。",
      },
      {
        word: ".json（JSON）",
        mean: "JavaScript Object Notation の略。`{ \"key\": \"value\" }` のように、設定や API のやり取りでデータ形を決める定番フォーマットです。カンマ抜けや引用符でエラーになりやすいのでエディタのチェックに頼ると楽です。",
      },
      {
        word: ".js（JavaScript）",
        mean: "Node やブラウザで動かす JavaScript のソースがよくこの拡張子です。素の JS ファイルというニュアンスが強いです。",
      },
      {
        word: ".mjs（ES モジュール）",
        mean: "**Node.js などで「このファイルは ES モジュールとして扱う」と明示したいとき**に使われる拡張子です。`import` / `export` の文脈で README やツールが言及します。",
        mem: "プロジェクトによっては `.js` のまま package.json でモジュール扱いになる場合もあり、ルールはリポジトリごとです。",
      },
      {
        word: ".ts（TypeScript）",
        mean: "型付きで書いた TypeScript のソース。ビルドや `tsc` で多くの場合 `.js` に変換されてから実行されます。",
      },
      {
        word: ".jsx（JSX）",
        mean: "JavaScript 内に **HTML に似たタグ** を書ける拡張構文を含むファイルに使われることが多いです。React など UI ライブラリのコードで典型です。",
        mem: "中身は基本 JavaScript＋糖衣構文だと思うと変換・ビルドの説明が追いやすいです。",
      },
      {
        word: ".svg（SVG）",
        mean: "XML ベースのベクター画像形式。拡大してもにじみにくく、アイコンやロゴ向き。**中身はテキスト**なのでエディタで開けますが、直編集は座標やパスが専門的です。",
      },
      {
        word: ".txt（テキスト）",
        mean: "装飾や構造ルールのないプレーンテキスト。ログのダンプやメモ、ライセンス全文など「ただの文字」を置くときに使われます。",
      },
      {
        word: "`src` フォルダ",
        mean: "ソースコードの本体を置く置き場の定番の名前。`src/components` のようにさらに下に分けることも多いです。",
        mem: "「人が編集する版がここ」と覚えると、ビルド後の `dist` と混同しにくいです。",
      },
      {
        word: "`dist` フォルダ（ビルド成果物）",
        mean: "**ビルド（変換・束ね）のあとに出力される、公開・配布に近いファイル**が入る場所の典型名。`npm run build` の説明に必ず出ます。",
        mem: "中身は自動生成なので、手編集より設定と `src` 側を直すことが多いです。",
      },
      {
        word: "`scripts` フォルダ",
        mean: "ビルド補助・データ生成・デプロイ前処理など、**プロジェクト用の小さなコマンド**をまとめる慣習的な名前。`package.json` の `scripts` から `node scripts/...` を呼ぶ形がよくあります。",
      },
      {
        word: "`node_modules` フォルダ",
        mean: "`npm install` で依存パッケージが展開される場所。容量が大きく、**ほとんどのリポジトリでは Git に上げません**（`.gitignore` で除外）。",
        mem: "おかしいときはいったん消して `npm install` し直す、が定番の切り分けの一つです。",
      },
      {
        word: "README（README.md）",
        mean: "プロジェクトの入り口説明書。**何をするリポジトリか・始め方・注意点**が書かれていることが多いです。拡張子 `.md` で Markdown になるのが普通です。",
      },
      {
        word: "Vite（ヴィート）",
        mean: "フロントエンド向けの**高速な開発サーバーとビルド**を担う道具の一つ。`vite.config.*` に設定があり、`npm run dev` / `npm run build` とセットで README に登場します。",
      },
      {
        word: ".npmrc",
        mean: "**npm の挙動を決める設定ファイル**（レジストリの向き先、インストール時のオプションなど）。プロジェクト直下 or ユーザーホームに置かれます。",
        mem: "チームや CI で再現性を揃えるためにコミットすることもあれば、個人向けはホームのみ、もあります。",
      },
      {
        word: ".gitignore",
        mean: "Git に **追跡させたくないファイル名・フォルダ**を列挙するファイル。`node_modules` や `.env`、ビルド成果物などが定番で載ります。",
      },
      {
        word: "`eslint.config.*`（ESLint 設定）",
        mean: "JavaScript/TypeScript の**静的チェック（リント）**ルールを書く設定ファイルの modern な置き方の一例です。`eslint.config.js` や `.mjs` など拡張子はプロジェクト次第です。",
        mem: "`npm run lint` とセットで README に載ることが多いです。",
      },
      {
        word: "`assets`（静的アセット）",
        mean: "画像・フォント・音声・動画など、**画面を組み立てるときに参照する静的ファイル**をまとめるフォルダ名の定番です。`src/assets` や `public/` と役割が分かれていることもあります（前者はビルドに巻き込む、後者はそのまま配信、など）。",
      },
      {
        word: ".husky",
        mean: "**Git のフック**（`commit` する直前・`push` する直前などに自動で走るスクリプト）を置くためのフォルダで、Husky というツールの慣習名です。Lint やテストを通さないとコミットできない、といったチームルールをかけやすくなります。",
        mem: "初回セットアップで `npm` スクリプトが `.husky` 内にフックを生成することが多いです。",
      },
      {
        word: "git clone",
        mean: "GitHub などにあるリポジトリを、自分の PC にまるごと複製する操作。クローンしたフォルダで開発を始めます。",
      },
      {
        word: "git pull",
        mean: "リモート（共有サーバー側）の最新コミットを、自分のローカルに取り込む操作。作業開始前の「最新化」に使います。",
      },
      {
        word: "git push",
        mean: "自分がローカルで確定したコミットを、リモートに送る操作。チームに共有するときの定番です。",
        mem: "ブランチや権限のルールは組織ごとに決まっていることが多いです。",
      },
    ],
  },
  {
    id: "terminal-cli",
    title: "ターミナル・パッケージ・実行コマンド",
    lead: "Git や開発サーバーを動かす「黒い画面」まわり。用語が多いので、よく出るものだけでも大丈夫です。",
    terms: [
      {
        word: "ターミナル（コンソール）",
        mean: "文字だけでコンピュータに命令を送る画面。エディタや GUI と並ぶ、開発者の道具立てのひとつです。",
      },
      {
        word: "CLI（シーエルアイ）",
        mean: "Command Line Interface の略。マウスで画面を押すのではなく、コマンド文字列で操作する方式の総称です。`npm` や `git` のように、黒い画面から叩く道具は CLI ツールと呼ばれることが多いです。",
        mem: "GUI の対義語として覚えると会話や記事で迷いにくいです。",
      },
      {
        word: "シェル",
        mean: "打った文字列を解釈して OS に伝えるプログラム。Bash・Zsh・PowerShell など種類があります。",
      },
      {
        word: "CMD（コマンドプロンプト）",
        mean: "Windows に標準で付いてきたクラシックな文字界面。`dir` や `cd` など、昔からのコマンド文化の本拠です。バッチファイル（.bat）は主に CMD 向けです。",
        mem: "手順書が `&&` でコマンドを繋いでいると、PowerShell 古い版ではそのままではエラーになることがあります。",
      },
      {
        word: "PowerShell",
        mean: "Microsoft が推す Windows 向けのシェル／スクリプト環境。オブジェクトをパイプで渡せるなど拡張されています。スクリプト拡張子は多くの場合 `.ps1` です。",
        mem: "クロスプラットフォーム版は `pwsh` コマンドで起動することがあります。",
      },
      {
        word: "Bash（バッシュ）",
        mean: "Unix 系 OS でよく使われるシェルの代表。手順書に `bash script.sh` とあるのは「このシェルでスクリプトを実行」と読めば足ります。",
        mem: "Windows では WSL や Git Bash で触ることもあります。",
      },
      {
        word: "npm（エヌピーエム）",
        mean: "Node.js 向けのパッケージマネージャ。部品（ライブラリ）のインストール・更新・削除と、プロジェクトのスクリプト実行の入り口になります。",
      },
      {
        word: "package.json",
        mean: "JavaScript/Node プロジェクトの名簿。使う部品の一覧と、`npm run ○○` が何をするか（scripts）が書かれます。",
      },
      {
        word: "npm install",
        mean: "`package.json` に従って依存パッケージをダウンロードし、`node_modules` に展開するコマンド。`npm i` と略されることもあります。",
      },
      {
        word: "npm run dev",
        mean: "`package.json` の `scripts.dev` に定義されたコマンドを実行する定型句。多くのフロントエンドでは開発用のローカルサーバー起動がここに書かれています（中身はプロジェクトごと）。",
        mem: "`npm run build` や `npm run test` も同じく scripts の名前を変えたものです。",
      },
      {
        word: "npx",
        mean: "npm に付属する仕組みで、ローカルに無い CLI を一時的に取って実行したり、`node_modules` 内のコマンドを直接呼んだりできます。",
      },
      {
        word: "Node.js（ノード）",
        mean: "JavaScript をブラウザ外で動かすための実行環境。`node ファイル.js` でスクリプトを走らせたり、サーバーを立てたりします。",
      },
      {
        word: "pip（ピップ）",
        mean: "Python の標準的なパッケージインストーラ。`pip install パッケージ名` で部品を入れる、と覚えれば十分です。",
      },
      {
        word: "仮想環境（venv など）",
        mean: "Python で「このプロジェクト専用の部品置き場」を隔離する仕組み。グローバル環境を汚さず、バージョンの食い違いを減らせます。",
      },
      {
        word: "requirements.txt（Python）",
        mean: "Python プロジェクトで使うパッケージ一覧を列挙したファイル。`pip install -r requirements.txt` で一括インストールする流れがよく使われます。",
      },
      {
        word: "python コマンド",
        mean: "`python script.py` のようにして Python ファイルを実行します。環境によっては `python3` という名前になっていることもあります。",
      },
      {
        word: "仮想マシン（VM）",
        mean: "1台の物理マシンの上で、まるで別のパソコンのように動く区画。別 OS の動かし用（開発・検証）やクラウドの「コンピュータ借り放題」イメージで使われます。WSL2 も仮想化技術に乗る例です。",
      },
      {
        word: "Docker（ドッカー）",
        mean: "アプリとその実行に必要な周辺を「コンテナ」という単位で包み、どのマシンでも同じ動きを再現しやすくする仕組み。`Dockerfile` でレシピを書き、`docker build` / `docker run` で起動する、と覚えると記事が読みやすいです。",
        mem: "VM が仮想マシン一式なら、コンテナはより軽量な「プロセス用の隔離箱」に近いイメージです。",
      },
      {
        word: "オーケストレーション",
        mean: "複数のプロセスやサーバー・コンテナを「だれがいつ起動し、どう繋ぎ、増やしたり直したりするか」を自動で指揮すること。オーケストレーター（例: Kubernetes）はその指揮役の総称です。",
        mem: "単体の `docker run` より一歩進んで、「本番運用の楽隊」くらいのイメージです。",
      },
    ],
  },
  {
    id: "net-service",
    title: "インターネット・サービス",
    lead: "「どこで動いていて、誰が届けるか」のラベルです。",
    terms: [
      {
        word: "フロントエンド",
        mean: "ユーザーがブラウザやアプリで触れる画面側。見た目と操作性の担当です。",
      },
      {
        word: "DOM（ドム）",
        mean: "Document Object Model の略。ブラウザが HTML を読んだあと、画面上の要素（見出し・ボタンなど）をツリー状に組み立てた「瀬戸際の設計図」。JavaScript は多くの場合このツリーを読んだり書き換えたりして画面を動かします。",
        mem: "「ページのどの部分をどういじるか」の話になると DOM が出てきます。",
      },
      {
        word: "バックエンド",
        mean: "画面の裏側で、データの保存・計算・権限判断をする部分。厨房に近いです。",
      },
      {
        word: "API",
        mean: "プログラム同士が話す窓口。メニュー表にあらかじめ決まった「注文できる品」があります。",
      },
      {
        word: "サーバーレス",
        mean: "サーバー台数を意識せず、使った分だけ伸び縮みする実行形態。小規模試作と相性が良いです。",
      },
      {
        word: "ホスティング",
        mean: "作った Web サイトをインターネット上に公開するレンタルスペース。",
      },
      {
        word: "SSL / TLS（いわゆる SSL 証明書）",
        mean: "ブラウザとサーバの通信を暗号化し、なりすましを確認するための仕組み。かつて「SSL」と呼ばれた流れを今では多く **TLS** と言いますが、ホスティングの画面では「SSL 証明書」という文言が残っていることが多いです。",
        mem: "鍵アイコン付きの **HTTPS** は、この認証と暗号化が有効な接続の目印です。Let's Encrypt 等で無料証明書を取る構成もよく見ます。",
      },
      {
        word: "環境変数",
        mean: "パスワードや秘密の鍵をコードに直接書かずに渡す入れ物。チャットに貼らない運用とセットで覚えます。",
      },
    ],
  },
  {
    id: "data-db",
    title: "データベース・保管",
    lead: "表計算の上位互換〜権限付き倉庫、くらいの距離感で十分です。",
    terms: [
      {
        word: "データベース（DB）",
        mean: "表形式で整理されたデータの置き場。同時編集や検索に強いのが利点です。",
      },
      {
        word: "データレイク（Data lake）",
        mean: "あらゆる形式の生データ（ログ・画像・CSV・JSON など）を、まずは集めて溜めておく大きな貯水池のイメージ。BI や機械学習の前段で、後から整理・変換して活用することが多いです。",
        mem: "DB が「決まった席の倉庫」なら、レイクは「とりあえず全部投げ込む淀み」くらいの距離感です。",
      },
      {
        word: "データウェアハウス（DWH）",
        mean: "分析向けに表形式で整えたデータを集める倉庫。定型レポートやダッシュボードと相性が良く、スキーマ（設計図）が比較的固いのが特徴です。",
        mem: "レイク＝生ものの寄せ集め、倉庫＝調理・盛り付けまで済んだ棚、の対比で覚えると会話が通りやすいです。",
      },
      {
        word: "データレイクハウス（Lakehouse）",
        mean: "レイクの柔軟な保管と、倉庫に近い SQL 分析・トランザクション的な運用を一つのストーリーでつなぐ設計。同じデータを段階的に磨きながら使い回す流れが増えています。",
      },
      {
        word: "オブジェクトストレージ",
        mean: "ファイルをオブジェクト単位で大量に置けるクラウドの容量（S3 や Azure Blob など）。データレイクの実体は、多くの場合この上にフォルダのように載ります。",
      },
      {
        word: "ETL / ELT",
        mean: "Extract（取り出し）・Transform（変換）・Load（載せる）の流れの略。ETL は載せる前に変形、ELT はいったんレイクに載せてから変形します。レイクでは後者を取りやすいことが多いです。",
      },
      {
        word: "インジェスチョン（データ取り込み）",
        mean: "外部システムやファイルからレイク／パイプラインへデータを流し込む工程そのもの。ストリーム連続取り込みと、バッチ（まとめて）取り込みなど型が分かれます。",
      },
      {
        word: "メダリオンアーキテクチャ",
        mean: "Bronze（ほぼ生）→ Silver（整形・欠損除去など）→ Gold（分析用に集約・指標化）のように、レイク内を段階で磨いていく定番パターンの名前です。",
        mem: "色の呼び方はプロダクトによって語彙が少し変わることがあります。",
      },
      {
        word: "スキーマ・オン・リード",
        mean: "取り込み時に表の型を厳密に決めず、読み取る段階で解釈する考え方。レイクの柔軟さの裏で、誰がどう解釈するかのルール設計が後から効いてきます。",
        mem: "対で「スキーマ・オン・ライト」は、DB のように載せる時点で型を固定するイメージです。",
      },
      {
        word: "キュレーション（データ整備）",
        mean: "生データを信頼できる分析用の形に揃える作業の総称。重複除去、マスタ参照、単位揃えなど、人后工程の作業負担がここに集まります。",
      },
      {
        word: "パーティション（分割配置）",
        mean: "日付・リージョンなどでデータをフォルダやファイル群に分け、読む範囲を絞って速くしたりコストを抑えたりする工夫。大規模レイクで頻出の語です。",
      },
      {
        word: "オープンテーブル形式（Delta Lake / Apache Iceberg 等）",
        mean: "オブジェクトストレージ上のファイル群を、追記・スナップショット・整合性のルール付きで扱えるようにする仕組み。レイクハウスで名前を見かけたら「ファイル倉庫に倉庫っぽい作法を足す層」と捉えると足ります。",
      },
      {
        word: "PostgreSQL（ポストグレス）",
        mean: "実績の多いオープンソースのデータベースエンジン。拡張でベクトル検索も載せやすいです。",
      },
      {
        word: "ORM（オーアールエム）",
        mean: "表とプログラムの型を橋渡しする道具。Prisma や Drizzle が代表例です。",
      },
      {
        word: "マイグレーション",
        mean: "表の設計変更を、手順付きで安全に進めるための記録。増改築の設計図変更に近いです。",
      },
      {
        word: "Row Level Security（RLS）",
        mean: "「このユーザーが見てよい行だけ見せる」データ側のルール。SaaS の多様性で重宝されます。",
      },
      {
        word: "ベクトル検索",
        mean: "「似ている意味」を近くに並べて探す検索。写真や文章の類似検索で力を発揮します。",
      },
    ],
  },
  {
    id: "quality-team",
    title: "チーム・品質・安心",
    lead: "スピードと安全の両立に使う語彙です。",
    terms: [
      {
        word: "CI（継続的インテグレーション）",
        mean: "コードが来たら自動でテストやチェックを回す仕組み。受付で異物を弾くゲートです。",
      },
      {
        word: "リント（Lint）",
        mean: "ソースコードを**実行せずに**機械的にチェックし、危ない書き方・バグになりやすいパターン・コーディング規約のズレを指摘すること。ESLint（JavaScript/TypeScript）などが典型で、`npm run lint` と README に並ぶことが多いです。",
        mem: "静的解析のひと種。整形専門は Prettier など別ツールに分かれることもあります。",
      },
      {
        word: "レビュー",
        mean: "他人の目で変更点を読む儀式。バイブコーディングでも「人間の最終確認」が効きます。",
      },
      {
        word: "ステージング",
        mean: "本番そっくりの試し環境。お客様公開前のリハーサル場です。",
      },
      {
        word: "ログ",
        mean: "アプリが残す行動記録。問題が起きたあと原因を辿るランプです。",
      },
      {
        word: "権限・ロール",
        mean: "だれが何をしてよいかの札。AI に広い権限を渡すほど、ルール設計が重要です。",
      },
      {
        word: "コンプライアンス",
        mean: "法令・社内規程・契約に沿うこと。医療機器や個人情報の文脈では特にホットです。",
      },
    ],
  },
];

function mediaTaxonomyRowCount() {
  return VIBE_MEDIA_TAXONOMY.reduce((n, s) => n + s.rows.length, 0);
}

function glossaryTermCount() {
  return GLOSSARY_BY_GENRE.reduce((n, g) => n + g.terms.length, 0);
}

/** バイブコーディングタブのみ（メディア・用語集は別カウント） */
export const VIBE_GUIDE_ITEM_TOTAL =
  1 +
  (1 + VIBE_PROGRESSION_PATH.steps.length) +
  (1 + VIBE_CODING_PRACTICAL.sections.length) +
  VIBE_IDEAL_STACKS.length +
  VIBE_TOOL_COMBO_TABLE.rows.length +
  VIBE_BASIC_RULES.length +
  VIBE_GUIDE_PITFALLS.terms.length +
  VIBE_CLAUDE_CODE.terms.length;

/** メディア生成タブ（イントロ1＋表の行） */
export const MEDIA_GUIDE_ITEM_TOTAL = 1 + mediaTaxonomyRowCount();

/** 用語集タブ */
export const GLOSSARY_GUIDE_ITEM_TOTAL = 1 + glossaryTermCount();

/** @deprecated 互換用。タブ別定数を優先 */
export const GUIDE_ITEM_TOTAL =
  VIBE_GUIDE_ITEM_TOTAL + MEDIA_GUIDE_ITEM_TOTAL + GLOSSARY_GUIDE_ITEM_TOTAL;

/** @param {VibeToolComboRow} row */
function toolRowMatches(row, q) {
  return [row.pattern, row.ide, row.ai, row.voice, row.note]
    .join("\n")
    .toLowerCase()
    .includes(q);
}

/**
 * ガイドタブ内のざっくり検索（タイトル・説明・用語の plane テキストに単純部分一致）。
 * @param {string} searchQuery
 */
export function filterVibeCodingGuide(searchQuery) {
  const total = VIBE_GUIDE_ITEM_TOTAL;
  const q = searchQuery.trim().toLowerCase();
  if (!q) {
    return {
      stacks: VIBE_IDEAL_STACKS,
      toolTable: VIBE_TOOL_COMBO_TABLE,
      basicRules: VIBE_BASIC_RULES,
      claudeCode: VIBE_CLAUDE_CODE,
      pitfalls: VIBE_GUIDE_PITFALLS,
      matchCount: total,
      total,
    };
  }

  const stacks = VIBE_IDEAL_STACKS.filter((s) => {
    const blob = [
      s.title,
      s.forWho,
      s.summary,
      ...s.combo.flatMap((c) => [c.role, c.picks, c.tip]),
    ]
      .join("\n")
      .toLowerCase();
    return blob.includes(q);
  });

  const toolLeadHit = VIBE_TOOL_COMBO_TABLE.lead.toLowerCase().includes(q);
  const colHit = VIBE_TOOL_COMBO_TABLE.columns.some((c) =>
    c.toLowerCase().includes(q),
  );
  const toolRows =
    toolLeadHit || colHit
      ? [...VIBE_TOOL_COMBO_TABLE.rows]
      : VIBE_TOOL_COMBO_TABLE.rows.filter((r) => toolRowMatches(r, q));

  const basicRules = VIBE_BASIC_RULES.filter((r) => {
    const blob = [r.title, r.mean, r.mem ?? ""].join("\n").toLowerCase();
    return blob.includes(q);
  });

  /** @type {GlossaryGenre} */
  let pitfalls;
  const pitGenreBlob = [VIBE_GUIDE_PITFALLS.title, VIBE_GUIDE_PITFALLS.lead]
    .join("\n")
    .toLowerCase();
  if (pitGenreBlob.includes(q)) {
    pitfalls = VIBE_GUIDE_PITFALLS;
  } else {
    const terms = VIBE_GUIDE_PITFALLS.terms.filter((t) => {
      const blob = [t.word, t.mean, t.mem ?? ""].join("\n").toLowerCase();
      return blob.includes(q);
    });
    pitfalls = { ...VIBE_GUIDE_PITFALLS, terms };
  }

  /** @type {GlossaryGenre} */
  let claudeCode;
  const ccBlob = [VIBE_CLAUDE_CODE.title, VIBE_CLAUDE_CODE.lead]
    .join("\n")
    .toLowerCase();
  if (ccBlob.includes(q)) {
    claudeCode = VIBE_CLAUDE_CODE;
  } else {
    const terms = VIBE_CLAUDE_CODE.terms.filter((t) => {
      const blob = [t.word, t.mean, t.mem ?? ""].join("\n").toLowerCase();
      return blob.includes(q);
    });
    claudeCode = { ...VIBE_CLAUDE_CODE, terms };
  }

  const progressionBlob = [
    VIBE_PROGRESSION_PATH.title,
    VIBE_PROGRESSION_PATH.lead,
    VIBE_PROGRESSION_PATH.footnote,
    ...VIBE_PROGRESSION_PATH.steps.flatMap((s) => [s.heading, s.body]),
  ]
    .join("\n")
    .toLowerCase();
  const progressionHit = progressionBlob.includes(q);

  const practicalBlob = [
    VIBE_CODING_PRACTICAL.title,
    VIBE_CODING_PRACTICAL.lead,
    ...VIBE_CODING_PRACTICAL.sections.flatMap((s) => [s.heading, s.body]),
  ]
    .join("\n")
    .toLowerCase();
  const practicalHit = practicalBlob.includes(q);

  const matchCount =
    (progressionHit ? 1 + VIBE_PROGRESSION_PATH.steps.length : 0) +
    (practicalHit ? 1 + VIBE_CODING_PRACTICAL.sections.length : 0) +
    stacks.length +
    toolRows.length +
    basicRules.length +
    claudeCode.terms.length +
    pitfalls.terms.length;

  return {
    stacks,
    toolTable: { ...VIBE_TOOL_COMBO_TABLE, rows: toolRows },
    basicRules,
    claudeCode,
    pitfalls,
    matchCount,
    total,
  };
}

/**
 * メディア生成タブ用検索
 * @param {string} searchQuery
 */
export function filterMediaGuide(searchQuery) {
  const total = MEDIA_GUIDE_ITEM_TOTAL;
  const q = searchQuery.trim().toLowerCase();
  const introPlain = MEDIA_GUIDE_INTRO.replace(/\*\*/g, "").toLowerCase();

  if (!q) {
    return {
      mediaTaxonomy: VIBE_MEDIA_TAXONOMY,
      matchCount: total,
      total,
    };
  }

  const introHit = introPlain.includes(q);

  /** @type {MediaTaxonomySection[]} */
  const mediaTaxonomy = [];
  for (const section of VIBE_MEDIA_TAXONOMY) {
    const head = [section.title, section.lead, ...section.columns]
      .join("\n")
      .toLowerCase();
    if (head.includes(q)) {
      mediaTaxonomy.push(section);
      continue;
    }
    const rows = section.rows.filter((r) =>
      [r.tool, r.company, r.traits, r.since]
        .join("\n")
        .toLowerCase()
        .includes(q),
    );
    if (rows.length) {
      mediaTaxonomy.push({ ...section, rows });
    }
  }

  const rowHits = mediaTaxonomy.reduce((n, s) => n + s.rows.length, 0);
  const matchCount = rowHits + (introHit ? 1 : 0);

  return {
    mediaTaxonomy,
    matchCount,
    total,
  };
}

/**
 * 用語集タブ用検索
 * @param {string} searchQuery
 */
export function filterGlossaryGuide(searchQuery) {
  const total = GLOSSARY_GUIDE_ITEM_TOTAL;
  const q = searchQuery.trim().toLowerCase();
  if (!q) {
    return {
      glossary: GLOSSARY_BY_GENRE,
      matchCount: total,
      total,
    };
  }

  /** @type {GlossaryGenre[]} */
  const glossary = [];
  for (const g of GLOSSARY_BY_GENRE) {
    const genreBlob = [g.title, g.lead].join("\n").toLowerCase();
    if (genreBlob.includes(q)) {
      glossary.push(g);
      continue;
    }
    const terms = g.terms.filter((t) => {
      const blob = [t.word, t.mean, t.mem ?? ""].join("\n").toLowerCase();
      return blob.includes(q);
    });
    if (terms.length) {
      glossary.push({ ...g, terms });
    }
  }

  const introHit = "実用用語集".includes(q) || "ジャンル別".includes(q);
  const matchCount =
    glossary.reduce((n, g) => n + g.terms.length, 0) + (introHit ? 1 : 0);

  return {
    glossary,
    matchCount,
    total,
  };
}

// ────────────────────────────────────────────
// ツール別リファレンス（ツール別タブで使用）
// ────────────────────────────────────────────

/** @type {{ id: string, label: string, ref: GlossaryGenre, practical?: typeof VIBE_CODING_PRACTICAL.sections }[]} */
export const TOOL_REFERENCES = [
  {
    id: "claude-code",
    label: "Claude Code",
    ref: VIBE_CLAUDE_CODE,
    practical: VIBE_CODING_PRACTICAL.sections,
  },
  {
    id: "cursor",
    label: "Cursor",
    ref: {
      id: "ref-cursor",
      title: "Cursor 日常リファレンス",
      lead: "VS Code ベースの AI ネイティブエディタ。コードを書きながら AI に指示を出す操作が中心。公式は https://docs.cursor.com/ を参照。",
      terms: [
        { word: "A. Cursor の AI 機能だけ使う", section: "使い方の種類", mean: "非エンジニアに多い使い方。自分ではコードを書かず、Cursor に内蔵された AI チャット（Composer / Chat パネル / インライン）で日本語の指示を出して全部やってもらう。Agent モード以外にも Normal モードや Ask モードがある。" },
        { word: "B. AI 機能＋自分でもコードを書く", section: "使い方の種類", mean: "エンジニア向け。Tab 補完で AI が次のコードを予測表示し、Cmd+K で選択範囲を AI に修正させながら自分もコードを書く。" },
        { word: "==C. AI 機能＋ターミナルで Claude Code==", section: "使い方の種類", mean: "最も多い組み合わせ。Cursor のエディタ画面で AI チャットを使いつつ、統合ターミナル（Ctrl+` で開く画面）で Claude Code CLI を起動して併用する。Cursor の AI と Claude Code は別々のセッションなので、それぞれに違う指示を出せる。" },
        { word: "Composer: `Cmd+I`（Mac）/ `Ctrl+I`（Win）", section: "AI チャット・エージェント", mean: "Cursor のメインの AI チャット画面。「ログイン機能を追加して」のように日本語で指示すると、AI が複数ファイルをまたいで変更を行う。モードは Agent（自律実行）/ Normal（確認しながら）/ Ask（質問のみ）を切り替えられる。" },
        { word: "Chat パネル: `Cmd+L`（Mac）/ `Ctrl+L`（Win）", section: "AI チャット・エージェント", mean: "コードについて質問・相談するためのサイドパネル。Composer がファイル編集向けなのに対し、Chat は「これ何？」「なぜエラー？」のような質問に向く。" },
        { word: "Background Agent", section: "AI チャット・エージェント", mean: "バックグラウンドでタスクを非同期に実行するエージェント。PR 作成、テスト実行、リファクタリングなどを裏で処理しながら、自分は別の作業ができる。" },
        { word: "Tab 補完（サジェスト）", section: "エディタ補完", mean: "コード入力中に AI が次に書くべきコードを予測して半透明で表示する。Tab で受け入れ、Esc でスキップ。自分でコードを書くエンジニアにとって速度が大幅に上がる機能。" },
        { word: "インライン編集: `Cmd+K`（Mac）/ `Ctrl+K`（Win）", section: "エディタ補完", mean: "エディタ上でコードを選択して Cmd+K → AI に修正指示を出す。「この関数をリファクタして」のような短い修正に向く。" },
        { word: "Cursor + Claude Code の併用方法", section: "Claude Code 併用", mean: "Cursor の統合ターミナル（Ctrl+` で開く）で `claude` と入力して起動する。Cursor の Composer と Claude Code CLI は別々の AI セッションとして動作するため、それぞれに違う指示を出せる。例: Composer に「全体の設計を考えて」→ Claude Code に「このファイルのテストを書いて」。", code: "claude", codeLang: "bash" },
        { word: "設定: `.cursor/rules`", section: "設定", mean: "プロジェクトごとの AI ルールファイル。使用言語、命名規則、禁止パターンなどを書いておくと Cursor の AI の出力が安定する。CLAUDE.md と同じ役割だが、Cursor 専用の設定。", code: "言語: TypeScript\nフレームワーク: React 19\nスタイル: CSS Modules\n\n禁止:\n- any 型の使用\n- console.log の残置", codeLang: "text" },
        { word: "設定: モデル選択", section: "設定", mean: "Settings → Models で AI モデルを選択できる。Claude Opus/Sonnet、GPT-5.4、Gemini など複数モデルを切り替えて使える。Composer と Tab 補完で別のモデルを使うこともできる。" },
        { word: "料金: Hobby（無料）", section: "料金", mean: "月 2,000 回の補完と 50 回のプレミアムリクエスト。個人で試すには十分。" },
        { word: "料金: Pro（$20/月）", section: "料金", mean: "無制限の補完、500 回のプレミアムリクエスト。日常的に使う人向け。" },
        { word: "料金: Business（$40/席/月）", section: "料金", mean: "チーム管理、SSO、管理者ダッシュボード付き。企業利用はこのプラン。" },
        // ── 実践で知っておくべきこと ──
        { word: "==Composer の変更を元に戻す==", section: "実践Tips", mean: "Composer が行った変更が意図と違った場合、各ファイルの変更箇所に「Accept / Reject」ボタンが表示される。Reject を押せばそのファイルの変更が取り消される。全部まとめて戻したい場合は Git で `git stash` する。" },
        { word: "Agent モードの注意点", section: "実践Tips", mean: "Agent モードは便利だが、意図しないファイルを編集したり、不要なパッケージをインストールすることがある。==大事なプロジェクトでは Normal モードで1つずつ確認する方が安全==。Agent は使い捨ての実験プロジェクトで慣れてから本番に使う。" },
        { word: "`.cursorignore` で AI に見せないファイルを指定", section: "実践Tips", mean: "`.gitignore` と同じ書式で、AI に読ませたくないファイルやフォルダを指定する。秘密情報が入ったファイル、巨大なデータファイル、AI に触られたくない設定ファイルなどを除外できる。", code: "# .cursorignore\n.env\n*.log\nnode_modules/\ndist/", codeLang: "text" },
        { word: "Notepads（メモ帳機能）", section: "実践Tips", mean: "Cursor 内にメモを残せる機能。プロジェクトの設計メモ、AI への定型指示、よく使うプロンプトなどを保存しておける。Chat や Composer から `@notepad名` で参照できる。" },
        { word: "コンテキストが足りなくなったら", section: "実践Tips", mean: "長い会話で AI の回答が的外れになってきたら、Composer の「New Chat」で新しいセッションを始める。Cursor は Chat ごとに独立したコンテキストを持つので、話題を変えるときは新規が安全。" },
        { word: "プライバシーモード", section: "実践Tips", mean: "Settings → Privacy で、コードが Cursor のサーバーに送信される範囲を制御できる。企業で機密コードを扱う場合は確認が必要。Privacy Mode を有効にするとコードがトレーニングに使われなくなる。" },
      ],
    },
  },
  {
    id: "codex",
    label: "Codex",
    ref: {
      id: "ref-codex",
      title: "Codex（OpenAI）日常リファレンス",
      lead: "OpenAI が提供するクラウド型 AI コーディングエージェント。ローカルではなくクラウド上の隔離環境（サンドボックス）で実行される点が最大の特徴。公式は https://openai.com/index/introducing-codex/ を参照。",
      terms: [
        { word: "起動: `codex`", section: "基本操作", mean: "ターミナルで対話セッションを開始する。Claude Code と同じようにリポジトリのルートで実行する。ただし、ファイル操作はローカルではなくクラウドのサンドボックス上で行われる。", code: "cd your-project\ncodex", codeLang: "bash" },
        { word: "自動実行: `--full-auto`", section: "基本操作", mean: "確認なしで自動実行するモード。サンドボックス内で動作するためローカルファイルが直接壊れるリスクは低いが、結果のレビューは必須。", code: "codex --full-auto \"テストを書いて全部パスさせて\"", codeLang: "bash" },
        { word: "非対話: `codex -q`（quiet モード）", section: "基本操作", mean: "質問への回答だけ返して終了する。CI やスクリプトからの利用に向く。", code: "codex -q \"このエラーの原因を説明して\"", codeLang: "bash" },
        { word: "設定: `AGENTS.md`", section: "設定", mean: "プロジェクトの文脈を Codex に伝える設定ファイル。CLAUDE.md と同じ役割で、コーディング規約やプロジェクト情報を書く。OpenAI 側の命名。", code: "## プロジェクト概要\nReact + TypeScript のWebアプリ\n\n## ルール\n- テストは Jest で書く\n- コミットメッセージは日本語\n- 型定義は必ず付ける", codeLang: "markdown" },
        { word: "並列タスク実行", section: "クラウド実行", mean: "複数のタスクをクラウド上で同時に走らせられる。例えば「機能Aの実装」と「機能Bのテスト」を並行で依頼できる。結果は PR（Pull Request）単位で返ってくる。" },
        { word: "サンドボックスとは", section: "クラウド実行", mean: "Codex が動く隔離されたクラウド環境。自分の PC のファイルには直接触れず、クラウド上のコピーで作業する。安全だが、ローカルのファイルとの同期は PR 経由で行う必要がある。" },
        { word: "料金: Pro（$20/月）", section: "料金", mean: "ChatGPT Plus と共通。月のタスク数に上限あり。" },
        { word: "料金: API 従量課金", section: "料金", mean: "API 経由で使う場合は GPT モデルの従量課金。大量のタスクを回す場合はこちら。" },
        { word: "==Claude Code との違い==", section: "比較", mean: "Claude Code はローカルで直接ファイルを編集する。Codex はクラウドのサンドボックスで動作する。ローカル操作の即時性なら Claude Code、安全な並列実行なら Codex。" },
        // ── 実践Tips ──
        { word: "PR（Pull Request）のレビュー方法", section: "実践Tips", mean: "Codex がタスクを完了すると PR が作られる。GitHub 上で差分（何が変わったか）を確認し、問題なければマージ（取り込み）する。==必ず差分を確認してからマージすること==。意図しない変更が含まれていることがある。" },
        { word: "サンドボックスの制限", section: "実践Tips", mean: "サンドボックスはインターネットアクセスが制限されている場合がある。外部 API を呼ぶコードのテストは、ローカルで別途行う必要がある。また、実行時間に上限がある。" },
        { word: "ChatGPT との使い分け", section: "実践Tips", mean: "ChatGPT は質問・相談向け（会話型）。Codex はコードの実行・編集向け（タスク型）。「このエラーの意味は？」→ ChatGPT、「このバグを直して PR にして」→ Codex、という使い分けが効率的。" },
        { word: "複数タスクの優先度", section: "実践Tips", mean: "並列で複数タスクを投げる場合、互いに依存しないタスクを選ぶ。例えば「機能 A の実装」と「機能 B のテスト」は OK だが、「機能 A の実装」と「機能 A のテスト」は順番に投げた方が確実。" },
      ],
    },
  },
  {
    id: "copilot",
    label: "VS Code + Copilot",
    ref: {
      id: "ref-copilot",
      title: "VS Code + GitHub Copilot 日常リファレンス",
      lead: "業界で最も普及しているエディタと AI 支援の組み合わせ。既に VS Code を使っている人、企業で Copilot の契約がある人にとって最も導入しやすい選択肢。公式は https://docs.github.com/en/copilot を参照。",
      terms: [
        { word: "インラインサジェスト", section: "基本操作", mean: "コード入力中にリアルタイムで補完候補が半透明で表示される。Tab で受け入れ、Esc でスキップ。Copilot の最も基本的な機能。" },
        { word: "Copilot Chat: `Ctrl+Shift+I`", section: "基本操作", mean: "エディタ上でコードを選択して Ctrl+Shift+I を押すと、サイドパネルで AI に質問・指示ができる。「このコードのバグを見つけて」「このエラーの原因は？」のように使う。" },
        { word: "Agent Mode", section: "基本操作", mean: "Chat パネル内のモードドロップダウンで「Agent」を選択すると、Copilot がファイル編集・ターミナル実行を自律的に行う。VS Code 1.99 以降で利用可能。" },
        { word: "`@workspace`", section: "スコープ指定", mean: "Chat 内でプロジェクト全体を文脈に含める接頭辞。ファイル構成やプロジェクト設定を AI に理解させたいときに使う。", code: "@workspace このプロジェクトの構造を説明して", codeLang: "text" },
        { word: "`@terminal`", section: "スコープ指定", mean: "直近のターミナル出力を文脈に含める。エラーが出たときに「@terminal このエラーを直して」のように使う。", code: "@terminal このエラーの原因と修正方法を教えて", codeLang: "text" },
        { word: "`#file`", section: "スコープ指定", mean: "特定のファイルを文脈に含める。Chat 内で `#file:ファイル名` と書くとそのファイルの内容を AI に渡せる。", code: "#file:src/App.jsx このコンポーネントにダークモードを追加して", codeLang: "text" },
        { word: "CLI: `gh copilot` インストール", section: "CLI", mean: "ターミナルから Copilot を使う GitHub CLI の拡張。まず以下でインストールする。", code: "gh extension install github/gh-copilot", codeLang: "bash" },
        { word: "CLI: `gh copilot explain`", section: "CLI", mean: "コマンドの意味を Copilot に聞く。「このコマンド何？」という疑問をターミナルで即解決できる。", code: "gh copilot explain \"git rebase -i HEAD~3\"", codeLang: "bash" },
        { word: "CLI: `gh copilot suggest`", section: "CLI", mean: "やりたいことを日本語で伝えてコマンドを提案してもらう。", code: "gh copilot suggest \"ポート3000を使っているプロセスを止める\"", codeLang: "bash" },
        { word: "設定: `.github/copilot-instructions.md`", section: "設定", mean: "プロジェクトごとの Copilot への指示ファイル。CLAUDE.md や .cursor/rules と同じ役割。", code: "このプロジェクトは React + TypeScript です。\n- コンポーネントは関数コンポーネントで書く\n- CSS は CSS Modules を使う\n- テストは Vitest で書く", codeLang: "markdown" },
        { word: "料金: 無料枠", section: "料金", mean: "VS Code は無料。Copilot は月 2,000 回の補完と 50 回の Chat が無料で使える（2026年時点）。" },
        { word: "料金: Individual（$10/月）", section: "料金", mean: "個人向け。無制限の補完と Chat。" },
        { word: "料金: Business（$19/席/月）", section: "料金", mean: "組織向け。管理者ダッシュボード、ポリシー管理付き。" },
        { word: "料金: Enterprise（$39/席/月）", section: "料金", mean: "SSO、監査ログ、IP 補償（AI 生成コードの知的財産保護）付き。企業導入の判断材料。" },
        // ── 実践Tips ──
        { word: "Agent Mode の変更を確認する", section: "実践Tips", mean: "Agent Mode でファイルを変更すると、エディタ上に差分が表示される。==Accept / Discard で1つずつ確認する習慣をつける==。特に複数ファイルにまたがる変更は全体を見てからAccept する。" },
        { word: "GitHub.com でも Copilot が使える", section: "実践Tips", mean: "VS Code だけでなく、GitHub.com 上でも Copilot Chat が使える。PR のレビュー中に「このコードを説明して」と聞いたり、Issue から直接コードの提案を受けられる。" },
        { word: "`@workspace` を活用する", section: "実践Tips", mean: "質問するときに `@workspace` をつけるだけで、AI がプロジェクト全体のファイル構成を把握した上で回答する。つけないと開いているファイルだけが文脈になるので、回答の精度が大きく変わる。" },
        { word: "カスタム指示の書き方", section: "実践Tips", mean: "`.github/copilot-instructions.md` に書く内容は、プロジェクトの技術スタック、命名規則、禁止パターンの3つが最低限。多く書きすぎると AI が混乱するので、==1ファイル20行以内==が目安。" },
        { word: "企業での導入判断ポイント", section: "実践Tips", mean: "Business プラン以上で IP 補償（AI 生成コードの著作権リスクを GitHub が負う）がつく。企業法務が気にするポイント。また、組織のポリシーで「Copilot の学習にコードを使わせない」設定ができる。" },
        { word: "Copilot + Claude Code の併用", section: "実践Tips", mean: "VS Code のターミナルから Claude Code CLI を起動すると、Copilot（エディタ内 AI）と Claude Code（ターミナル AI）を同時に使える。Copilot でサジェスト + Claude Code で大きなタスク実行の組み合わせが可能。", code: "claude", codeLang: "bash" },
      ],
    },
  },
];

/**
 * ツール別リファレンスタブ用フィルター
 * @param {string} searchQuery
 * @param {string} toolId - "claude-code" | "cursor" | "codex" | "copilot"
 */
export function filterToolReference(searchQuery, toolId) {
  const entry = TOOL_REFERENCES.find((t) => t.id === toolId);
  if (!entry) return { ref: null, practical: [], matchCount: 0, total: 0 };

  const ref = entry.ref;
  const practical = entry.practical ?? [];
  const total = ref.terms.length + practical.length;
  const q = searchQuery.trim().toLowerCase();

  if (!q) {
    return { ref, practical, matchCount: total, total };
  }

  const filteredTerms = ref.terms.filter((t) => {
    const blob = [t.word, t.mean, t.mem ?? ""].join("\n").toLowerCase();
    return blob.includes(q);
  });

  const filteredPractical = practical.filter((s) => {
    const blob = [s.heading, s.body].join("\n").toLowerCase();
    return blob.includes(q);
  });

  return {
    ref: { ...ref, terms: filteredTerms },
    practical: filteredPractical,
    matchCount: filteredTerms.length + filteredPractical.length,
    total,
  };
}
