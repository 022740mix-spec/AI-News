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
  lead: "起動してからの日常操作で大事なところだけ。導入手順は公式 https://code.claude.com/docs/en/overview を参照。Claude Code はターミナル（Bash や PowerShell などのコマンド入力画面）で動作する。Bash とは Mac/Linux の標準的なコマンド入力環境のことで、Windows では Git Bash や WSL で使える。",
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
    {
      word: "操作: `/plan`",
      section: "権限モード",
      mean: "セッション中に Plan Mode に切り替えるコマンド。Claude が計画だけ提示し、ファイル編集やコマンド実行はしない。大きな変更の前に「まず何をするか確認したい」ときに使う。Shift+Tab でも権限モードを切り替えられるが、`/plan` はワンコマンドで Plan に直行できる。",
      code: "/plan",
      codeLang: "text",
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
      word: "操作: `/context`",
      section: "セッション内操作",
      mean: "現在のコンテキスト使用量を可視化する。全体のコンテキストウィンドウに対して何%使っているかがわかる。`/cost` がお金、`/context` が容量。「あとどれくらい会話できるか」を判断するときに使う。",
      code: "/context",
      codeLang: "text",
    },
    {
      word: "操作: `/diff`",
      section: "セッション内操作",
      mean: "Claude がこのセッションで行ったファイル変更の差分をまとめて表示する。個々の編集時にも差分は出るが、`/diff` は全体をまとめて確認したいときに便利。コミット前の最終チェックに使う。",
      code: "/diff",
      codeLang: "text",
    },
    {
      word: "操作: `/copy`",
      section: "セッション内操作",
      mean: "Claude の最新の回答をクリップボードにコピーする。生成されたコードを別のファイルやチャットに貼り付けたいときに、マウスで選択するより確実。",
      code: "/copy",
      codeLang: "text",
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
    {
      word: "操作: `/powerup`",
      section: "セッション内操作",
      mean: "Claude Code の主要機能をアニメーション付きのインタラクティブレッスンで体感学習できるコマンド（v2.1.90 で追加）。@ファイル参照、Shift+Tab モード切替、/rewind、バックグラウンドタスク、CLAUDE.md、MCP、Skills と Hooks、Subagents、remote-control、モデル切替の全10項目。各レッスンにターミナル上で再生されるデモが付属しており、読んで → 試して → 完了マークを付ける形式。機能が多くてどこから始めればよいかわからない人に最適。",
      code: "/powerup",
      codeLang: "text",
    },
    {
      word: "操作: `/rewind`（Esc-Esc）",
      section: "セッション内操作",
      mean: "会話を任意の時点まで巻き戻すコマンド。Claude の変更が意図と違った場合に、ファイル変更ごと元に戻せる。`/rewind` でチェックポイント一覧が表示され、戻りたい地点を選択する。素早く Esc を2回押す（Esc-Esc）でも同じ動作。Git の操作なしで「なかったこと」にできるので、気軽に試行錯誤できる。",
      code: "/rewind",
      codeLang: "text",
    },
    {
      word: "操作: `/model`",
      section: "セッション内操作",
      mean: "セッション中にモデルを切り替えるコマンド。Opus は難しい問題向き、Sonnet は大半の作業に最適、Haiku は簡単な質問に高速で回答。Opus Plan モード（`opus-plan`）を選ぶと設計は Opus、実装は Sonnet に自動分担される。",
      code: "/model",
      codeLang: "text",
    },
    {
      word: "操作: `/effort`",
      section: "セッション内操作",
      mean: "Claude の思考の深さを調整するコマンド。`high` はバグ調査やアーキテクチャ判断など複雑な問題向き、`low` は簡単な編集やフォーマット修正など素早く済ませたい作業向き。デフォルトは通常の深さ。`/fast` でも同等のトグルが可能（同じモデルのまま出力速度を優先）。",
      code: "/effort high",
      codeLang: "text",
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
    // ── マルチリポジトリ ──
    {
      word: "マルチリポ: `--add-dir`",
      section: "マルチリポジトリ",
      mean: "兄弟リポジトリのファイルを読み書きできるようにするオプション。追加したディレクトリの `.claude/skills/` も自動で読み込まれる。複数リポジトリをモノレポのように横断操作できる。セッション中は `/add-dir パス` でも追加可能。",
      code: "claude --add-dir ../backend-api --add-dir ../shared-types",
      codeLang: "bash",
    },
    {
      word: "マルチリポ: ナレッジ集約パターン",
      section: "マルチリポジトリ",
      mean: "最もナレッジが濃いリポジトリ（設計書・規約・エラー対策の蓄積がある方）で Claude Code を起動し、`--add-dir` で作業対象のリポジトリを追加する。こうすると片方で蓄積したノウハウがもう片方の作業に自然に反映される。コードだけでなく戦略文書・デザイン文書なども AI の視界に入る。",
    },
    {
      word: "マルチリポ: 恒久設定",
      section: "マルチリポジトリ",
      mean: "`.claude/settings.json` の `additionalDirectories` に書けば、毎回 `--add-dir` を付けなくて済む。追加ディレクトリの CLAUDE.md も読み込みたい場合は環境変数を設定する。",
      code: "// .claude/settings.json\n{\n  \"additionalDirectories\": [\"../backend-api\", \"../shared-types\"]\n}\n\n// CLAUDE.md も読む場合（~/.zshrc 等に追加）\nexport CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD=1",
      codeLang: "json",
    },
    {
      word: "マルチリポ: OSS + プライベートナレッジ",
      section: "マルチリポジトリ",
      mean: "公開リポジトリには書けない内部の判断基準や設計思想を、プライベートなナレッジリポジトリに蓄積。`--add-dir` で参照しながら公開リポを編集できる。他者がメンテするリポにも外側から読み書き対応可能。",
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
    // ── NO_FLICKER モード ──
    {
      word: "NO_FLICKER モードとは",
      section: "NO_FLICKER モード",
      mean: "ターミナルのちらつき（フリッカー）を根本的に解消する実験的なフルスクリーンレンダリングモード（v2.1.89+）。vim や htop のようにターミナルの代替スクリーンバッファを使い、ビューポートを仮想化して描画する。ちらつき・ジャンプの解消、長い会話でもメモリ/CPU が一定、マウス操作対応が主なメリット。",
      code: "CLAUDE_CODE_NO_FLICKER=1 claude",
      codeLang: "bash",
    },
    {
      word: "NO_FLICKER: マウス操作",
      section: "NO_FLICKER モード",
      mean: "入力ボックス内をクリックしてカーソル移動、ツール結果をクリックして展開/折りたたみ、URL やファイルパスをクリックして開く、ドラッグでテキスト選択（自動でクリップボードにコピー）、マウスホイールでスクロール。コードを選択する際に行番号や UI 要素が含まれなくなる。",
    },
    {
      word: "NO_FLICKER: 検索・ナビゲーション",
      section: "NO_FLICKER モード",
      mean: "ネイティブの Cmd+F / Ctrl+F は使えない。代わりに Ctrl+O でトランスクリプトモードに入り、/ で検索、n/N で前後の一致に移動。[ でターミナルのスクロールバックに書き出し（Cmd+F が使える）、v でデフォルトエディタで会話を開く。PgUp/PgDn で半画面スクロール（MacBook は Fn+↑/↓）。",
    },
    {
      word: "NO_FLICKER: マウスを無効にする",
      section: "NO_FLICKER モード",
      mean: "ちらつき解消と一定メモリの恩恵だけ受けて、ネイティブのテキスト選択を維持したい場合に使う。スクロール速度は CLAUDE_CODE_SCROLL_SPEED（1〜20、デフォルト3）で調整可能。恒久化するにはシェルプロファイル（~/.zshrc 等）に export を追加する。",
      code: "CLAUDE_CODE_NO_FLICKER=1 CLAUDE_CODE_DISABLE_MOUSE=1 claude",
      codeLang: "bash",
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
    {
      word: "操作: `/permissions`",
      section: "便利なコマンド",
      mean: "現在の権限ルール（どのツールが自動許可されているか、どのファイルパスが編集可能か等）を一覧表示・変更するコマンド。`settings.json` を直接編集しなくても、対話的にルールを追加・削除できる。「なぜか毎回確認が出る」ときはこれで許可ルールを確認する。",
      code: "/permissions",
      codeLang: "text",
    },
    {
      word: "操作: `/memory`",
      section: "便利なコマンド",
      mean: "プロジェクトの CLAUDE.md をエディタで開いて編集するコマンド。Claude の記憶（指示書）を素早く更新したいときに使う。`/init` が新規作成、`/memory` が既存の編集。「このルールを追加して」と Claude に頼むより、自分で直接書き換えたいときに便利。",
      code: "/memory",
      codeLang: "text",
    },
    // ── 音声入力 ──
    {
      word: "操作: `/voice`",
      section: "音声入力",
      mean: "プッシュトゥトーク方式の音声入力を有効にするコマンド。Space キーを押している間マイクで音声を録音し、離すと Anthropic サーバーで文字起こしされてプロンプト入力になる。タイピングが面倒な長い指示や、コードを見ながら口頭で修正方針を伝えたいときに便利。v2.1.69 以降で利用可能。",
      code: "/voice",
      codeLang: "text",
    },
    {
      word: "!!`/voice` の制限事項!!",
      section: "音声入力",
      mean: "利用には条件がある。(1) **CLI 専用** — デスクトップアプリやブラウザ版では使えない。(2) **ローカル実行のみ** — SSH 接続やリモート環境では動作しない。(3) **WSL2（Windows 11）のみ対応** — Windows 10 や WSL1 では動かない。Windows の場合はネイティブ版 Claude Code を使う。(4) **claude.ai アカウント必須** — API キー・Bedrock・Vertex AI では利用不可。(5) macOS・Windows はネイティブモジュールで動作し追加インストール不要。Linux では SoX（`rec`）または ALSA utils（`arecord`）がフォールバックとして必要になる場合がある。",
    },
    {
      word: "/voice と音声連携（VOICEVOX 等）の違い",
      section: "音声入力",
      mean: "==`/voice` は入力==: 自分の声で Claude に指示を送る機能。==音声連携は出力==: Claude のタスク完了を音声で知らせる機能（Hooks 経由）。方向が逆なので、両方を組み合わせると「声で指示 → 音声で完了通知」というハンズフリーに近いワークフローが作れる。",
    },
    // ── 便利な連携 ──
    {
      word: "音声連携（VOICEVOX 等）",
      section: "便利な連携",
      mean: "Hooks の Notification を使って、タスク完了時に音声合成ソフト（VOICEVOX、COEIROINK 等）で読み上げさせることができる。長い処理を待っている間に画面を見なくても完了がわかる。設定は settings.json の hooks に音声再生コマンドを追加する。",
    },
    // ── Codex CLI 連携 ──
    {
      word: "Codex CLI 連携とは",
      section: "Codex CLI 連携",
      mean: "OpenAI の公式プラグイン codex-plugin-cc を導入すると、Claude Code セッション内から OpenAI Codex のコードレビューやタスク委任を呼び出せる。Claude（実装）→ Codex（レビュー）の異なる AI モデルによるクロスレビューが実現する。ChatGPT サブスクリプション認証か OpenAI API キーのどちらか一方が必要。",
    },
    {
      word: "Codex CLI セットアップ手順",
      section: "Codex CLI 連携",
      mean: "4ステップで導入できる。(1) Codex CLI をグローバルインストール、(2) ChatGPT アカウントでログイン（ブラウザが開く）、(3) Claude Code でマーケットプレイス追加、(4) プラグインインストール。Team プラン以上なら GPT-5.4 が利用可能。モデルは `~/.codex/config.toml` の `model` キーで変更できる。",
      code: "# ① Codex CLI インストール\nnpm install -g @openai/codex\n\n# ② ChatGPT サブスクリプションでログイン\ncodex login\n\n# ③ マーケットプレイス追加\nclaude plugin marketplace add openai/codex-plugin-cc\n\n# ④ プラグインインストール\nclaude plugin install codex@openai-codex",
      codeLang: "bash",
    },
    {
      word: "Codex 主要コマンド",
      section: "Codex CLI 連携",
      mean: "セッション内で使える主要コマンド。`/codex:setup` で環境確認・認証チェック。`/codex:review` で Codex にコードレビューを依頼。`/codex:adversarial-review` で懐疑的な視点でのレビュー。`/codex:rescue` で Codex にタスクを丸ごと委任。",
      code: "/codex:setup                      # 環境確認\n/codex:review                     # コードレビュー\n/codex:adversarial-review          # 懐疑的レビュー\n/codex:rescue                      # タスク委任",
      codeLang: "bash",
    },
    {
      word: "Review Gate（自動レビューループ）",
      section: "Codex CLI 連携",
      mean: "`/codex:setup --enable-review-gate` で有効化すると、Claude の出力に対して Codex レビューが自動実行される。問題が検出されると Claude が修正するまで処理を継続する自動ループ。==両方のサブスクの使用枠を急速に消費するため、監視下での利用を推奨==。",
      code: "/codex:setup --enable-review-gate",
      codeLang: "bash",
    },
    {
      word: "Codex 連携の料金",
      section: "Codex CLI 連携",
      mean: "ChatGPT サブスクリプション認証（`codex login`）なら追加の従量課金なし。プランの使用枠内で処理される。API キー認証（`OPENAI_API_KEY`）は完全従量制。Claude Code 側と合わせた最安の組み合わせは Anthropic Pro + ChatGPT Plus の月額約40ドル。GPT-5.4 を使うなら Anthropic Pro + ChatGPT Team の月額約45〜50ドルが目安。",
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
    // ── 節約テクニック ──
    {
      word: "==Opus Plan モードで使用量を節約==",
      section: "節約テクニック",
      mean: "Max プラン（$100/月）などで使用量の上限が気になる場合に有効な方法。`/model` コマンドで Opus Plan モードに切り替えると、計画（Plan）フェーズだけ高性能な Opus モデルを使い、実際のコード実装は低コストな Sonnet モデルが担当する。設計の質を保ちながらトークン消費を抑えられる。",
      code: "/model opus-plan",
      codeLang: "text",
    },
    {
      word: "モデルの使い分けで節約する",
      section: "節約テクニック",
      mean: "`/model` コマンドでセッション中にモデルを切り替えられる。複雑な設計判断やバグ調査は Opus、定型的なコード生成やテスト作成は Sonnet と使い分けることで、品質を維持しながら使用量を抑えられる。",
      code: "/model sonnet",
      codeLang: "text",
    },
    {
      word: "使用量の確認: `/cost`",
      section: "節約テクニック",
      mean: "セッション中に `/cost` でこれまでのトークン使用量と概算コストを確認できる。上限に近づいているかの目安になる。Max プランでは1日の使用量に注意が必要。",
      code: "/cost",
      codeLang: "text",
    },
    // ── セキュリティ ──
    {
      word: "==.env を Claude Code に読ませない==",
      section: "セキュリティ",
      mean: "Claude Code は .env ファイルを自動的にメモリに読み込むことが報告されている（Knostic 社調査）。API キーがテストファイルに含まれてコミットされる事故も発生。`.claude/settings.json` の `ignorePaths` に `.env*` を追加して読み込みを防止する。",
      code: "// .claude/settings.json に追加:\n{\n  \"ignorePaths\": [\".env*\", \"*.pem\", \"*credentials*\"]\n}",
      codeLang: "json",
    },
    {
      word: "学習にコードを使わせない設定",
      section: "セキュリティ",
      mean: "Commercial プラン（Team/Enterprise/API）はデフォルトで学習不使用。Consumer（Free/Pro/Max）は claude.ai/settings/data-privacy-controls でオプトアウト可能。テレメトリは環境変数 `DISABLE_TELEMETRY=1` で無効化できる。",
    },
    {
      word: "==--dangerously-skip-permissions を使わない==",
      section: "セキュリティ",
      mean: "全パーミッションをバイパスして完全自律実行するフラグ。ファイル削除・システムコマンドが確認なしで実行される。ホームディレクトリ全削除の事故報告あり。==ホストマシンでは絶対に使わず、コンテナ / VM 内のみで使用==。代わりに Auto Mode（分類器による安全チェック付き）を使う。",
    },
    {
      word: "会話を保存する: `/export`",
      section: "セキュリティ",
      mean: "モデル改善不許可の場合、会話データは30日で削除される。`/export` で会話をファイルに保存。ローカルには `~/.claude/projects/` にセッションデータが保存されている。Hooks の PostSession で自動保存スクリプトも設定可能。",
      code: "/export",
      codeLang: "text",
    },
    {
      word: "外部スキルファイルの精査",
      section: "セキュリティ",
      mean: "GitHub のスキルファイルの13.4%にクリティカルな問題が含まれていた（Snyk 調査）。隠し文字やプロンプトインジェクションが含まれている可能性がある。==採用前に AI にファイル内容を分析させ、丸ごとではなく部分的に採用する==。",
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
  },
  {
    title: "秘密と本番をチャットに載せない",
    mean: "API キー、パスワード、顧客データ、本番 URL のままのログは AI・スクショ・貼り付けに混ぜません。",
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
    },
    {
      word: "`@ts-ignore` / `eslint-disable` の貼りっぱなし",
      mean: "警告をコメント一行で黙らせる手法です。「なぜ安全と言えるか」を書かず使うと、本当のバグが隠れ続けます。",
    },
    {
      word: "秘密情報のハードコード",
      mean: "API キー・パスワード・トークンをソースに直書きしたまま共有リポジトリへ上げるパターン。公開・フォークされた時点で漏洩扱いになります。",
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
        mean: "大量のテキストデータで訓練された言語モデル。入力された文脈から次に来る確率の高いトークンを逐次生成することで、文章やコードを出力する。GPT、Claude、Gemini などが代表的。",
      },
      {
        word: "プロンプト",
        mean: "AI に渡す指示文や質問文のこと。書き方次第で出力の品質が大きく変わるため、目的・条件・出力形式などを明確に書くことが重要とされる。",
      },
      {
        word: "コンテキスト",
        mean: "AI が一度の推論で参照できるテキストの範囲。モデルごとに上限（コンテキストウィンドウ）があり、会話が長くなると古い部分が要約・切り捨てされて精度に影響する。",
      },
      {
        word: "トークン",
        mean: "LLM がテキストを処理する最小単位。単語・サブワード・記号などに分割される。API の料金計算やコンテキスト長の上限はトークン数で管理される。日本語は1文字あたり約1〜3トークンを消費する。",
      },
      {
        word: "RAG（ラグ）",
        mean: "Retrieval-Augmented Generation の略。LLM が回答を生成する前に外部のドキュメントやデータベースを検索し、取得した情報をコンテキストに含めて回答精度を高める手法。社内ナレッジベースの Q&A システムなどで広く使われる。",
      },
      {
        word: "エージェント",
        mean: "AI がツール（検索・ファイル編集・API 呼び出し等）を束ねて複数ステップを進める枠組み。",
      },
      {
        word: "MCP",
        mean: "Model Context Protocol の略。AI クライアントと外部ツール（ファイル操作・API・DB など）を接続するための標準プロトコル。各ツールが同じ仕様でサーバーを実装すれば、どの AI クライアントからでも統一的に呼び出せる。",
      },
      {
        word: "バイブコーディング",
        mean: "厳密な設計より、対話のリズムで試しながらコードを育てるやり方の俗称。勢いと検証のバランスがポイントです。",
      },
      {
        word: "AGI（汎用人工知能）",
        mean: "特定タスクだけでなく、人間と同等以上に幅広い知的作業ができる AI のこと。現在の AI は「特定の質問に答える」「コードを書く」など個別には強いが、あらゆる場面で人間並みに判断できるかという意味ではまだ到達していないとされる。",
      },
      {
        word: "ベンチマーク",
        mean: "AI モデルの性能を定量的に評価するためのテストセット。標準化された問題を複数のモデルに解かせてスコアを比較する。コーディング・推論・視覚理解など測定対象によって種類が分かれており、単一のベンチマークだけでモデルの総合力は判断できない。",
      },
      {
        word: "SWE-Bench",
        mean: "ソフトウェアエンジニアリング（コーディング能力）を測るベンチマーク。実際の GitHub の Issue（バグ報告）を AI に渡して、正しく修正できるかを評価する。Verified 版はより厳密。スコアが高いほどコーディング能力が高い。",
      },
      {
        word: "ARC-AGI",
        mean: "AI が「初めて見る問題」にどれだけ対応できるかを測るベンチマーク。パターン認識のパズルで構成され、暗記や学習データへの依存ではなく適応的な推論力を試す。人間は高スコアだが AI は苦戦することが多い。ARC Prize Foundation が運営。",
      },
      {
        word: "Humanity's Last Exam",
        mean: "人間の専門家が作った非常に難しい問題集で AI の限界を探るベンチマーク。学術的な推論力を測る。スコアが高いほど「人間の専門家レベルに近い推論ができる」ことを示す。",
      },
      {
        word: "MMMU（Massive Multi-discipline Multimodal Understanding）",
        mean: "画像や図表を含む問題で AI の視覚的理解力を測るベンチマーク。テキストだけでなく、グラフの読み取りや図の解釈ができるかを評価する。",
      },
      {
        word: "MoE（Mixture of Experts）",
        mean: "1つの巨大なモデルの中に複数の「専門家」ネットワークを持ち、質問の内容に応じて適切な専門家だけを使う設計。総パラメータは大きいが、実際に動くのは一部だけなので効率的。Kimi K2.5（1兆パラメータ、32Bアクティブ）などが代表例。",
      },
      {
        word: "ファインチューニング（Fine-tuning）",
        mean: "事前学習済みの LLM に対して、特定のタスクやドメインのデータで追加学習させ、性能を特化させるプロセス。モデル全体を再学習する方法と、一部のパラメータだけを効率的に調整する方法（LoRA 等）がある。",
      },
      {
        word: "RLHF（人間フィードバックによる強化学習）",
        mean: "Reinforcement Learning from Human Feedback の略。AI の出力に対して人間が「良い／悪い」を評価し、その評価を報酬シグナルとして使いモデルを改善する手法。ChatGPT や Claude の回答品質向上に使われている中核技術。",
      },
      {
        word: "ハルシネーション（幻覚）",
        mean: "AI がもっともらしいが事実と異なる情報を自信ありげに生成する現象。学習データにない情報を「補完」しようとして起きる。RAG やファクトチェックの仕組みで軽減できるが、完全な排除は難しい。出力の検証が重要。",
      },
      {
        word: "思考連鎖（Chain of Thought / CoT）",
        mean: "AI に「段階的に考えさせる」プロンプト技法、またはモデル内部で推論ステップを明示的に生成する仕組み。複雑な問題を一気に答えるより、途中の推論を書き出すことで正答率が向上する。o1 や Qwen 3.6-Plus の「常時オン思考連鎖」が代表例。",
      },
      {
        word: "マルチモーダル",
        mean: "テキスト・画像・音声・動画など複数の種類（モダリティ）のデータを同時に理解・生成できる AI の能力。たとえば画像を見て質問に答えたり、テキストから画像を生成したりできる。GPT-4o、Gemini、Claude 3.5 などが代表的なマルチモーダルモデル。",
      },
      {
        word: "Whisper",
        mean: "OpenAI が開発したオープンソースの音声認識モデル。100言語以上に対応し、音声をテキストに変換（文字起こし）する。モデルの重みが公開されているため、ローカル環境でも実行可能。リアルタイム翻訳アプリや議事録ツールの基盤として広く使われている。",
      },
    ],
  },
  {
    id: "rag-variants",
    title: "RAG・検索拡張のバリエーション",
    lead: "RAG（Retrieval-Augmented Generation）は「質問する前に資料を検索し、見つけた断片を根拠に答える」方式の総称です。「第◯世代」という呼び方に公式な一本化はなく、ここでは論文・ブログでよく並べられる仕組みのレイヤで整理します。",
    terms: [
      {
        word: "素朴な RAG（retrieve → read）",
        mean: "クエリをベクトル化し、ドキュメント断片と距離が近いものを取り出してコンテキストに詰め、LLM に答えさせる基本形。実装は単純だが、表記ゆれ・同義語で取り逃がすと精度が落ちます。",
      },
      {
        word: "ハイブリッド検索（ベクトル＋キーワード）",
        mean: "意味的近さ（密ベクトル）と BM25 等のキーワード一致を併用し、採用候補をマージや再スコアします。日本語の固有名詞・型番検索で効きやすいです。",
      },
      {
        word: "リランキング（再順位付け）",
        mean: "一度ざっくり取った上位 k 件を、より重い cross-encoder や小型モデルで並べ替えます。「検索の第2段」として定番です。",
      },
      {
        word: "クエリ拡張・書き換え（HyDE など）",
        mean: "ユーザの一文を、検索しやすい複数クエリや「仮答え」に展開してから検索する系統。短い質問や 曖昧な指示の取りこぼしを減らす狙いがあります（Hypothetical Document Embeddings 等）。",
      },
      {
        word: "Graph RAG",
        mean: "テキスト断片だけでなく エンティティ関連をグラフにし、関係ホップしながら根拠を集める方式。マニュアル・組織図・法務で「だれが何と関係？」が効く場面で語られます。",
      },
      {
        word: "Agentic RAG（エージェント型）",
        mean: "LLM が 検索 API を何度も呼び直す・フィルタを変える・サブクエリに分割するなど、自律的にループする構造。単発 RAG より柔軟だが、停止条件・コスト・ログの設計が重要です。",
      },
      {
        word: "「世代」呼びについて",
        mean: "コミュニティによって「RAG 1.0 / 2.0」「初世代はベクトルだけ」など比喩的な区切りが出ますが、産業標準のラベルではありません。比較するときは「どの処理（検索・要約・ループ・グラフ）を足しているか」で読み替えると安全です。",
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
      },
      {
        word: "CSS（シーエスエス）",
        mean: "見た目・レイアウト・色・フォントなどを指定する言語。HTML とセットで画面のデザインを担います。",
      },
      {
        word: "JavaScript（JS）",
        mean: "ブラウザ上で動的な処理を担当する言語。ユーザー操作への応答、DOM 操作、非同期通信（fetch / Ajax）などフロントエンド開発の中核。Node.js を使えばサーバーサイドでも実行できる。",
      },
      {
        word: "TypeScript（TS）",
        mean: "JavaScript に静的型付けを追加した言語。構文は JavaScript とほぼ同じだが、変数や関数の型をコード上で明示できるため、型の不整合やバグをコンパイル時に検出しやすい。大規模プロジェクトやチーム開発で広く採用されている。",
      },
      {
        word: "静的（静的型・静的解析）",
        mean: "プログラムを実行する前に型やルールを検査する仕組みの総称。静的型付けは TypeScript のように、変数や関数の型をコード上で定義し、コンパイル時にエディタやコンパイラが型エラーを検出する。静的解析は ESLint のように、コードを実行せずにソースを解析して潜在的なバグや規約違反を検出する手法。",
      },
      {
        word: "動的（動的型・実行時）",
        mean: "プログラムの実行中に型や値が決まる仕組みの総称。動的型付けは JavaScript や Python のように、変数の型を事前に宣言せず実行時に決定される方式で、柔軟だが型に起因するバグが実行するまで発覚しにくい。実行時（ランタイム）とは、アプリケーションが実際に動作している段階を指し、ログ出力やクラッシュの発生もこの段階で起きる。",
      },
      {
        word: "Python",
        mean: "読みやすく書きやすい言語。データ分析・機械学習・スクリプト自動化・Web のサーバーなど用途が広く、初心者向け教材や AI 連携例も多いです。",
      },
      {
        word: "Java（ジャバ）",
        mean: "大規模な業務システムや長期運用向けに採用されてきた言語。Android アプリの主流言語の一つでもあります。JVM という実行環境の上で動くのが特徴です。",
      },
      {
        word: "C（シー）",
        mean: "歴史が長く、OS や組み込み機器、性能を細かく詰めたい場面で根強い言語。ハードに近いレイヤーを扱えますが、学習・保守の負担は重めになりがちです。",
      },
      {
        word: "C++（シープラプラ）",
        mean: "C を拡張し、オブジェクト指向やテンプレートなどの機能を加えた言語。ゲームエンジン（Unreal Engine）や高性能ライブラリなどで広く使われる。表現力が高い反面、言語仕様が複雑で習得難度も高い。",
      },
      {
        word: "C#（シーシャープ）",
        mean: "Microsoft が開発した言語。.NET フレームワーク上で動き、Windows デスクトップアプリ・Web（ASP.NET）・ゲーム（Unity）で広く使われる。Power Platform / Dynamics 365 のカスタマイズでも登場する。",
      },
      {
        word: "Rust（ラスト）",
        mean: "メモリ安全性と高速性を両立する言語。C/C++ の代替として OS・ブラウザエンジン・CLI ツールで採用が増えている。llama.cpp の一部や Zed エディタ、Warp ターミナルが Rust 製。学習コストは高めだが、バグの出にくさが評価されている。",
      },
      {
        word: "Go（ゴー / Golang）",
        mean: "Google が開発したシンプルで高速な言語。並列処理が得意で、Docker・Kubernetes・Terraform など DevOps ツールの多くが Go 製。シンプルな文法で読みやすいが、ジェネリクスが後発なため古いコードではやや冗長。",
      },
      {
        word: "Swift（スウィフト）",
        mean: "Apple が開発した言語。iOS / macOS アプリ開発の主力。Xcode と組み合わせて使う。Objective-C の後継として設計され、読みやすさと安全性が改善されている。",
      },
      {
        word: "Kotlin（コトリン）",
        mean: "JetBrains が開発し、Google が Android の推奨言語に指定。Java との互換性が高く、より簡潔に書ける。Android アプリ開発で最も使われている。",
      },
      {
        word: "PHP",
        mean: "Web のサーバーサイドで長い歴史を持つ言語。WordPress・Laravel など巨大なエコシステムがある。「古い」と言われがちだが、Laravel は2026年も活発に進化している。",
      },
      {
        word: "Ruby",
        mean: "日本人（まつもとゆきひろ氏）が開発した言語。Ruby on Rails フレームワークで Web 開発に広く使われた。「開発者の幸福」を重視する設計思想が特徴。",
      },
      {
        word: "SQL（エスキューエル）",
        mean: "データベースに問い合わせるための言語。SELECT・INSERT・UPDATE・DELETE の4つが基本操作。プログラミング言語というよりは「データの操作言語」。AI がよく生成するコードの一つ。",
      },
      {
        word: "Markdown（マークダウン）",
        mean: "見出し・箇条書き・リンクなどを簡単な記号で書ける軽量マークアップ言語。README.md、CLAUDE.md、ブログ記事などに使われる。プログラミング言語ではないが、開発者が毎日使う「書式」。",
      },
      {
        word: "Shell / Bash（シェル / バッシュ）",
        mean: "ターミナルで使うコマンドの言語。ファイル操作・プログラム実行・自動化スクリプトに使う。Mac/Linux 標準の Bash、Windows の PowerShell、Git Bash などがある。",
      },
    ],
  },
  {
    id: "code-files",
    title: "コード・ファイルの世界",
    lead: "ソースコード、設定ファイル、パッケージ管理など、開発で日常的に扱うファイルの種類と役割を整理します。",
    terms: [
      {
        word: "リポジトリ（リポ）",
        mean: "ソースコードとその変更履歴を一元管理するための保管単位。Git で管理されたプロジェクトフォルダ全体を指し、GitHub 上ではリモートリポジトリとして公開・共有される。",
      },
      {
        word: "Git",
        mean: "ファイルの変更履歴を記録・管理する分散型バージョン管理システム。コミットごとにスナップショットを保存し、任意の時点への復元やブランチによる並行作業を可能にする。",
      },
      {
        word: "コミット",
        mean: "ファイルの変更内容をひとまとまりとして Git の履歴に記録する操作。各コミットにはメッセージ・作者・タイムスタンプ・一意のハッシュ値が付与され、変更の経緯を追跡できる。",
      },
      {
        word: "ブランチ",
        mean: "Git の履歴から分岐して作る独立した作業ライン。メインの履歴に影響を与えず、機能追加やバグ修正を並行して進められる。作業完了後にマージで本線に統合する。",
      },
      {
        word: "main（メインブランチ）",
        mean: "リポジトリの本線となるデフォルトブランチの標準的な名前。レビュー・テスト済みの変更がここにマージされ、本番リリースの基点になる。古いプロジェクトでは `master` という名前が使われていることもある。",
      },
      {
        word: "Pull Request（PR）",
        mean: "ブランチの変更をメインブランチに統合するためのレビュー依頼。GitHub / GitLab 上で差分を表示し、チームメンバーがレビュー・承認した後にマージする。CI テストの通過を必須にするなど、品質管理のプロセスとして運用される。",
      },
      {
        word: "ビルド",
        mean: "ソースコードをコンパイル・バンドルして、実行可能な形式に変換する工程。TypeScript → JavaScript への変換、モジュールの結合、最適化（圧縮・ツリーシェイキング）などが含まれる。",
      },
      {
        word: "依存関係",
        mean: "プロジェクトが利用する外部ライブラリやパッケージのこと。`package.json` や `requirements.txt` に一覧が記述され、バージョンの整合性管理が運用上の重要な作業になる。",
      },
      {
        word: ".md（Markdown）",
        mean: "見出し・箇条書き・リンクなどをプレーンテキストで表現できる軽量マークアップ記法。README.md としてリポジトリの説明に使われるのが定番。",
      },
      {
        word: ".json（JSON）",
        mean: "JavaScript Object Notation の略。`{ \"key\": \"value\" }` のように、設定や API のやり取りでデータ形を決める定番フォーマットです。カンマ抜けや引用符でエラーになりやすいのでエディタのチェックに頼ると楽です。",
      },
      {
        word: ".js（JavaScript）",
        mean: "JavaScript のソースファイルに使われる標準的な拡張子。ブラウザでも Node.js でも実行できる。TypeScript（.ts）と区別して「型なしの素の JavaScript」を指す文脈で使われることもある。",
      },
      {
        word: ".mjs（ES モジュール）",
        mean: "Node.js で「このファイルは ES モジュールとして扱う」と明示するための拡張子。`import` / `export` 構文を使う場合に、CommonJS（`require`）との区別を明確にする目的で使われる。",
      },
      {
        word: ".ts（TypeScript）",
        mean: "TypeScript のソースファイルに使われる拡張子。`tsc`（TypeScript コンパイラ）やビルドツールで `.js` に変換されてから実行される。",
      },
      {
        word: ".jsx（JSX）",
        mean: "JavaScript の中に HTML に似たタグ構文（JSX）を記述できるファイルの拡張子。React のコンポーネントファイルで標準的に使われる。TypeScript 版は `.tsx`。",
      },
      {
        word: ".svg（SVG）",
        mean: "XML ベースのベクター画像形式。拡大してもにじみにくく、アイコンやロゴ向き。中身はテキストなのでエディタで開けますが、直編集は座標やパスが専門的です。",
      },
      {
        word: ".txt（テキスト）",
        mean: "装飾や構造ルールのないプレーンテキスト。ログのダンプやメモ、ライセンス全文など「ただの文字」を置くときに使われます。",
      },
      {
        word: "`src` フォルダ",
        mean: "ソースコードの本体を格納するディレクトリの慣習的な名前。`src/components`、`src/utils` のようにサブディレクトリで分類するのが一般的。",
      },
      {
        word: "`dist` フォルダ（ビルド成果物）",
        mean: "ビルド後に出力される配布用ファイルが格納されるディレクトリの典型的な名前。`npm run build` で生成され、デプロイ時にはこの中身がサーバーに配置される。",
      },
      {
        word: "`scripts` フォルダ",
        mean: "ビルド補助・データ生成・デプロイ前処理などのユーティリティスクリプトを格納するディレクトリの慣習名。`package.json` の `scripts` セクションから `node scripts/...` で呼び出す構成が多い。",
      },
      {
        word: "`node_modules` フォルダ",
        mean: "`npm install` で依存パッケージが展開される場所。容量が大きく、ほとんどのリポジトリでは Git に上げません（`.gitignore` で除外）。",
      },
      {
        word: "README（README.md）",
        mean: "リポジトリの概要・セットアップ手順・使い方・注意事項などを記述するドキュメントファイル。GitHub ではリポジトリのトップページに自動表示される。拡張子は `.md`（Markdown）が標準。",
      },
      {
        word: "Vite（ヴィート）",
        mean: "フロントエンド向けの高速な開発サーバー兼ビルドツール。ES モジュールのネイティブ読み込みで高速な HMR（ホットモジュールリプレースメント）を実現する。設定は `vite.config.*` に記述し、`npm run dev`（開発）/ `npm run build`（本番ビルド）で使う。",
      },
      {
        word: ".npmrc",
        mean: "npm の挙動を決める設定ファイル（レジストリの向き先、インストール時のオプションなど）。プロジェクト直下 or ユーザーホームに置かれます。",
      },
      {
        word: ".gitignore",
        mean: "Git に 追跡させたくないファイル名・フォルダを列挙するファイル。`node_modules` や `.env`、ビルド成果物などが定番で載ります。",
      },
      {
        word: "`eslint.config.*`（ESLint 設定）",
        mean: "ESLint の設定ファイル。JavaScript / TypeScript の静的解析ルール（コーディング規約、エラー検出）を定義する。Flat Config 形式では `eslint.config.js` や `.mjs` をプロジェクトルートに置く。",
      },
      {
        word: "`assets`（静的アセット）",
        mean: "画像・フォント・音声・動画など、画面を組み立てるときに参照する静的ファイルをまとめるフォルダ名の定番です。`src/assets` や `public/` と役割が分かれていることもあります（前者はビルドに巻き込む、後者はそのまま配信、など）。",
      },
      {
        word: ".husky",
        mean: "Git のフック（`commit` する直前・`push` する直前などに自動で走るスクリプト）を置くためのフォルダで、Husky というツールの慣習名です。Lint やテストを通さないとコミットできない、といったチームルールをかけやすくなります。",
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
        mean: "テキストベースでコンピュータに命令を送るインターフェース。コマンドの入力・実行結果の表示を行う。VS Code やエディタに内蔵されていることも多い。",
      },
      {
        word: "CLI（シーエルアイ）",
        mean: "Command Line Interface の略。GUI（グラフィカルな画面操作）に対して、テキストコマンドで操作する方式の総称。`npm`、`git`、`docker` などターミナルから実行するツールは CLI ツールと呼ばれる。",
      },
      {
        word: "シェル",
        mean: "打った文字列を解釈して OS に伝えるプログラム。Bash・Zsh・PowerShell など種類があります。",
      },
      {
        word: "CMD（コマンドプロンプト）",
        mean: "Windows に標準搭載されている従来型のコマンドラインシェル。`dir`、`cd` などの DOS 系コマンドを使う。バッチファイル（.bat）の実行環境でもある。現在は PowerShell への移行が進んでいる。",
      },
      {
        word: "PowerShell",
        mean: "Microsoft が推す Windows 向けのシェル／スクリプト環境。オブジェクトをパイプで渡せるなど拡張されています。スクリプト拡張子は多くの場合 `.ps1` です。",
      },
      {
        word: "Bash（バッシュ）",
        mean: "Linux / macOS で標準的に使われるシェル。多くの開発ドキュメントやスクリプトが Bash 前提で書かれている。Windows では Git Bash や WSL 経由で利用できる。",
      },
      {
        word: "npm（エヌピーエム）",
        mean: "Node.js 用のパッケージマネージャ。外部ライブラリのインストール・更新・削除と、`package.json` で定義したスクリプトの実行を担う。Node.js をインストールすると付属する。",
      },
      {
        word: "package.json",
        mean: "Node.js プロジェクトの設定ファイル。プロジェクト名、バージョン、依存パッケージの一覧（dependencies）、実行可能なスクリプト（scripts）などが JSON 形式で記述される。",
      },
      {
        word: "npm install",
        mean: "`package.json` に従って依存パッケージをダウンロードし、`node_modules` に展開するコマンド。`npm i` と略されることもあります。",
      },
      {
        word: "npm run dev",
        mean: "`package.json` の `scripts.dev` に定義されたコマンドを実行する定型句。多くのフロントエンドでは開発用のローカルサーバー起動がここに書かれています（中身はプロジェクトごと）。",
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
        mean: "Python の標準パッケージマネージャ。`pip install パッケージ名` で外部ライブラリをインストールする。npm の Python 版にあたる。",
      },
      {
        word: "仮想環境（venv など）",
        mean: "Python でプロジェクトごとに独立したパッケージ環境を作る仕組み。グローバル環境を汚さず、プロジェクト間で異なるバージョンの依存パッケージを共存させられる。`python -m venv .venv` で作成するのが標準的。",
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
        mean: "1台の物理マシン上でソフトウェア的に独立したコンピュータ環境を再現する技術。異なる OS の実行、開発・検証環境の分離、クラウドのインスタンス提供（AWS EC2 等）に使われる。WSL2 も仮想化技術を利用している。",
      },
      {
        word: "Docker（ドッカー）",
        mean: "アプリケーションと実行に必要な依存関係を「コンテナ」という単位でパッケージ化し、どのマシンでも同一の動作を再現するツール。Dockerfile に構成を定義し、`docker build` でイメージ作成、`docker run` でコンテナ起動する。",
      },
      {
        word: "オーケストレーション",
        mean: "複数のコンテナやサービスの起動・停止・スケーリング・障害復旧を自動管理する仕組み。Kubernetes（K8s）が業界標準で、コンテナの配置、負荷分散、ローリングアップデートなどを宣言的に定義・実行する。",
      },
      // ── Git 操作 ──
      {
        word: "git commit（コミット）",
        mean: "ステージングされた変更を Git の履歴に確定・記録する操作。コミットメッセージに変更の目的や理由を記述するのが基本ルール。`git add` でステージ → `git commit` で確定の流れ。",
      },
      {
        word: "git push（プッシュ）",
        mean: "ローカルのコミットを GitHub などのリモートに送る操作。push して初めてチームメンバーに変更が共有される。",
      },
      {
        word: "git pull（プル）",
        mean: "リモートの最新変更をローカルに取り込む操作。作業前に pull して最新状態にするのが基本。",
      },
      {
        word: "git stash（スタッシュ）",
        mean: "作業中の変更を一時的に退避する操作。「まだコミットしたくないけど別の作業をしたい」ときに使う。`git stash pop` で退避した変更を戻す。",
      },
      {
        word: "git revert（リバート）",
        mean: "過去のコミットを「打ち消す新しいコミット」で取り消す操作。履歴を壊さずに変更を元に戻せる安全な方法。",
      },
      {
        word: "git branch（ブランチ）",
        mean: "メインの履歴から分岐して独立した作業場所を作る仕組み。機能追加やバグ修正をメインに影響させずに進められる。",
      },
      {
        word: "git merge（マージ）",
        mean: "分岐したブランチの変更をメインに統合する操作。コンフリクト（衝突）が起きた場合は手動で解決が必要。",
      },
      {
        word: "git rebase（リベース）",
        mean: "ブランチの起点を最新のメインに移し替える操作。履歴がきれいになるが、共有済みのブランチで使うとトラブルの原因になる。",
      },
      {
        word: "コンフリクト（衝突）",
        mean: "2人以上が同じファイルの同じ箇所を変更したとき、Git が自動統合できずに起きる状態。ファイルを開いて「どちらの変更を残すか」を手動で選ぶ必要がある。",
      },
      {
        word: "PR / Pull Request（プルリクエスト）",
        mean: "「このブランチの変更をメインに取り込んでください」という依頼。GitHub 上で差分を見て、レビュー → 承認 → マージの流れで進む。チーム開発の基本単位。",
      },
      {
        word: "Ollama",
        mean: "ローカル環境で LLM を簡単に実行できるオープンソースツール。`ollama run gemma4` のようにコマンド一つでモデルをダウンロード・起動できる。GPU がなくても CPU で動作し、API サーバーとしても使える。プライバシーを保ちたい場合やオフライン環境での利用に適している。",
      },
    ],
  },
  {
    id: "net-service",
    title: "インターネット・サービス",
    lead: "Web アプリケーションの構成要素やインフラ、認証など、サービス運用に関わる用語を整理します。",
    terms: [
      {
        word: "フロントエンド",
        mean: "ユーザーがブラウザやアプリ上で直接操作する画面側の領域。HTML / CSS / JavaScript で構成され、UI の表示・ユーザー操作の処理・バックエンドとの通信を担当する。",
      },
      {
        word: "DOM（ドム）",
        mean: "Document Object Model の略。ブラウザが HTML を解析して構築する、ページ内の要素（見出し・ボタン・段落など）をノードとしたツリー構造のデータ表現。JavaScript はこの DOM ツリーを操作することで画面の表示内容を動的に変更する。",
      },
      {
        word: "バックエンド",
        mean: "ユーザーに見えない裏側の処理を担う部分。データベースへの読み書き、認証・認可、ビジネスロジックの実行、外部 API との連携などを行う。Node.js、Python、Go などで実装される。",
      },
      {
        word: "API",
        mean: "Application Programming Interface の略。プログラム同士がデータをやり取りするための規約。REST API では HTTP リクエスト（GET/POST/PUT/DELETE）でデータの取得・作成・更新・削除を行う。AI サービスも API 経由で呼び出す。",
      },
      {
        word: "サーバーレス",
        mean: "サーバーの管理・スケーリングをクラウド側に任せ、関数単位でコードを実行する形態。リクエストに応じて自動的にスケールし、実行した分だけ課金される。AWS Lambda、Cloudflare Workers などが代表的。",
      },
      {
        word: "ホスティング",
        mean: "Web サイトやアプリケーションをインターネット上に公開するためのサーバー環境を提供するサービス。Vercel、Netlify、AWS、Azure などが代表的で、静的サイトからフルスタックアプリまで対応範囲はサービスにより異なる。",
      },
      {
        word: "SSL / TLS（いわゆる SSL 証明書）",
        mean: "ブラウザとサーバー間の通信を暗号化し、通信相手の正当性を証明書で検証するプロトコル。技術的には SSL の後継が TLS だが、慣習的に「SSL 証明書」「SSL 化」と呼ばれることが多い。HTTPS 通信の基盤となる技術。",
      },
      {
        word: "環境変数",
        mean: "OS やアプリケーションの実行環境に設定する変数。API キーやデータベース接続情報など、コードに直接書くべきでない秘密情報を安全に渡すために使う。.env ファイルやクラウドの設定画面で管理する。",
      },
      {
        word: "GAS（Google Apps Script）",
        mean: "Google のスプレッドシートやフォームなどを自動化するスクリプト環境。JavaScript ベースで、Google Workspace のデータを操作したり、定期実行のタスクを作れる。",
      },
      {
        word: "Vercel（バーセル）",
        mean: "Web アプリを簡単にデプロイ（公開）できるホスティングサービス。Next.js の開発元でもあり、GitHub にコードを push するだけで自動的にサイトが更新される。無料枠あり。",
      },
      {
        word: "Cloudflare（クラウドフレア）",
        mean: "Web サイトの高速化・セキュリティ保護を提供するサービス。CDN（コンテンツ配信ネットワーク）、DDoS 防御、DNS、Workers（サーバーレス実行環境）など幅広い機能を持つ。",
      },
      {
        word: "ノーコード",
        mean: "コードを一切書かずにアプリを構築する手法。GUI でドラッグ&ドロップ、数式、設定だけで完結する。Power Apps Canvas、Bubble、Glide などが代表例。プログラミング経験がなくても業務アプリを作れるのが最大の利点で、企業の業務改善で急速に普及している。",
      },
      {
        word: "ローコード",
        mean: "最小限のコードで開発する手法。GUI による設計が基本だが、必要に応じてスクリプトやカスタムコンポーネントで拡張できる。Power Apps Model-driven、OutSystems、Mendix などが代表例。ノーコードより柔軟で、プロコード（フルコーディング）より速い。",
      },
      {
        word: "Power Platform",
        mean: "Microsoft のローコード／ノーコード開発基盤。Power Apps（アプリ）、Power Automate（自動化）、Power BI（分析）、Power Pages（ポータル）、Copilot Studio（AI エージェント）の5つで構成される。Microsoft 365 と連携してバックエンドに Dataverse を使う。",
      },
      // ── インフラ・クラウド ──
      {
        word: "コンテナ",
        mean: "アプリと実行環境を1つのパッケージにまとめる仕組み。どのマシンでも同じように動く。Docker が代表格。サンドボックス（隔離環境）として AI エージェントの安全な実行にも使われる。",
      },
      {
        word: "CDN（コンテンツ配信ネットワーク）",
        mean: "世界中のサーバーにコンテンツのコピーを配置し、ユーザーに近いサーバーから配信する仕組み。Cloudflare、AWS CloudFront が代表。サイトの表示速度が上がる。",
      },
      {
        word: "DNS（ドメインネームシステム）",
        mean: "Domain Name System の略。「example.com」のようなドメイン名を、サーバーの IP アドレス（例: 203.0.113.1）に変換（名前解決）する仕組み。ブラウザが Web サイトに接続する最初のステップで使われる。",
      },
      {
        word: "CORS（コース）",
        mean: "Cross-Origin Resource Sharing の略。ブラウザが「別のドメインからデータを取得してよいか」を制御するセキュリティの仕組み。API を呼ぶときに「CORS エラー」が出るのは、サーバー側で許可設定がされていないため。",
      },
      {
        word: "Webhook（ウェブフック）",
        mean: "あるサービスでイベントが起きたときに、別のサービスの URL に自動で通知を送る仕組み。「GitHub で PR がマージされたら Slack に通知する」のような連携に使う。",
      },
      {
        word: "JWT（JSON Web Token）",
        mean: "ユーザーのログイン状態を小さなトークン（文字列）で表現する認証の仕組み。Cookie の代わりに API 認証でよく使われる。ヘッダー・ペイロード・署名の3部構成。",
      },
      {
        word: "OAuth（オーオース）",
        mean: "「Google でログイン」「GitHub でログイン」のような、他のサービスのアカウントで認証する仕組み。パスワードを渡さずにアクセス権限だけを委譲する設計。Entra ID の認証もこの仕組みを使っている。",
      },
    ],
  },
  {
    id: "data-db",
    title: "データベース・保管",
    lead: "アプリケーションのデータを永続的に保存・管理するための技術群。SQL やストレージの基本概念を整理します。",
    terms: [
      {
        word: "データベース（DB）",
        mean: "データを構造化して永続的に保存し、検索・更新・削除を効率的に行うためのシステム。リレーショナル DB（PostgreSQL、MySQL）はテーブル形式、NoSQL（MongoDB）はドキュメント形式でデータを管理する。",
      },
      {
        word: "データレイク（Data lake）",
        mean: "あらゆる形式の生データ（ログ・画像・CSV・JSON など）をスキーマを定めずに大量に蓄積するストレージ。BI や機械学習のための前処理・分析基盤として使われる。S3 や Azure Blob Storage 上に構築することが多い。",
      },
      {
        word: "データウェアハウス（DWH）",
        mean: "分析・レポーティングに最適化された構造化データの集約基盤。スキーマ（テーブル設計）が厳密に定義されており、SQL で高速にクエリを実行できる。BigQuery、Snowflake、Redshift が代表的。",
      },
      {
        word: "データレイクハウス（Lakehouse）",
        mean: "データレイクの柔軟な格納とデータウェアハウスの高速な SQL 分析を統合したアーキテクチャ。同一のストレージ上で生データの蓄積と構造化クエリの両方を実現する。Databricks が提唱した概念。",
      },
      {
        word: "オブジェクトストレージ",
        mean: "ファイルをオブジェクト（データ＋メタデータ）単位で格納するクラウドストレージ。AWS S3、Azure Blob Storage が代表的。容量の上限が事実上なく、データレイクの基盤として使われることが多い。",
      },
      {
        word: "ETL / ELT",
        mean: "Extract（抽出）・Transform（変換）・Load（格納）の頭文字。ETL は格納前にデータを変換し、ELT は先にデータレイクへ格納してから変換する。クラウド基盤ではストレージが安価なため ELT が主流になりつつある。",
      },
      {
        word: "インジェスチョン（データ取り込み）",
        mean: "外部システムやファイルからレイク／パイプラインへデータを流し込む工程そのもの。ストリーム連続取り込みと、バッチ（まとめて）取り込みなど型が分かれます。",
      },
      {
        word: "メダリオンアーキテクチャ",
        mean: "データレイクハウス内のデータを段階的に品質向上させる設計パターン。Bronze（生データの取り込み）→ Silver（クレンジング・正規化）→ Gold（集約・指標化された分析用データ）の3層で整理する。Databricks が提唱した構成。",
      },
      {
        word: "スキーマ・オン・リード",
        mean: "取り込み時に表の型を厳密に決めず、読み取る段階で解釈する考え方。レイクの柔軟さの裏で、誰がどう解釈するかのルール設計が後から効いてきます。",
      },
      {
        word: "キュレーション（データ整備）",
        mean: "生データを信頼性のある分析可能な状態に整備する作業の総称。重複除去、マスターデータとの照合、単位統一、欠損値処理などが含まれ、データパイプラインの中で最も人手がかかる工程になりやすい。",
      },
      {
        word: "パーティション（分割配置）",
        mean: "日付・リージョンなどでデータをフォルダやファイル群に分け、読む範囲を絞って速くしたりコストを抑えたりする工夫。大規模レイクで頻出の語です。",
      },
      {
        word: "オープンテーブル形式（Delta Lake / Apache Iceberg 等）",
        mean: "オブジェクトストレージ上のファイル群に、ACID トランザクション・スキーマ管理・タイムトラベル（過去のスナップショット参照）などの機能を付加するテーブル形式。データレイクハウスの中核技術で、Delta Lake や Apache Iceberg が代表的。",
      },
      {
        word: "PostgreSQL（ポストグレス）",
        mean: "高機能なオープンソースのリレーショナルデータベース。拡張性が高く、pgvector によるベクトル検索、PostGIS による地理情報処理など、プラグインで機能を追加できる。Supabase のバックエンドとしても採用されている。",
      },
      {
        word: "ORM（オーアールエム）",
        mean: "Object-Relational Mapping の略。データベースのテーブルとプログラムのオブジェクト（クラスや型）を対応付け、SQL を直接書かずにコードからデータ操作を行える仕組み。Prisma、Drizzle、SQLAlchemy などが代表的。",
      },
      {
        word: "マイグレーション",
        mean: "データベースのスキーマ（テーブル構造）の変更をバージョン管理する仕組み。カラムの追加・削除・型変更などを順序付きのスクリプトとして記録し、適用（up）や巻き戻し（down）を安全に実行できる。",
      },
      {
        word: "Row Level Security（RLS）",
        mean: "データベースのテーブルに対して、ユーザーやロールごとにアクセスできる行を制限するセキュリティ機能。マルチテナント SaaS で「テナント A のデータはテナント B には見えない」といった制御に使われる。PostgreSQL や Dataverse が標準サポート。",
      },
      {
        word: "ベクトル検索",
        mean: "テキストや画像をベクトル（数値の配列）に変換し、ベクトル間の距離や類似度で検索する手法。キーワードの一致ではなく意味的な近さで検索できるため、RAG や類似画像検索に使われる。pgvector、Pinecone、Weaviate などが代表的な実装。",
      },
      {
        word: "Dataverse（データバース）",
        mean: "Microsoft のビジネスデータプラットフォーム。Power Apps・Power Automate・Dynamics 365 の標準バックエンド。テーブル・列・リレーションを GUI で定義し、REST API（OData）で操作する。認証は Entra ID（旧 Azure AD）と統合済み。",
      },
      {
        word: "BaaS（Backend as a Service）",
        mean: "データベース・認証・ファイル保存・API などバックエンドに必要な機能をまとめて提供するクラウドサービス。Supabase、Firebase、Dataverse が代表例。「バックエンドを一から作る」手間を大幅に省ける。",
      },
    ],
  },
  {
    id: "quality-team",
    title: "チーム・品質・安心",
    lead: "開発プロセスの品質管理、チーム運営、セキュリティに関わる用語を整理します。",
    terms: [
      {
        word: "CI（継続的インテグレーション）",
        mean: "コードが変更されるたびに自動でテストやチェックを実行する仕組み。バグや規約違反を早期に検出し、本番環境への混入を防ぐ。GitHub Actions が代表的。",
      },
      {
        word: "リント（Lint）",
        mean: "ソースコードを実行せずに機械的にチェックし、危ない書き方・バグになりやすいパターン・コーディング規約のズレを指摘すること。ESLint（JavaScript/TypeScript）などが典型で、`npm run lint` と README に並ぶことが多いです。",
      },
      {
        word: "レビュー",
        mean: "他の開発者がコードの変更内容を確認し、バグ・設計上の問題・可読性などを指摘するプロセス。GitHub の PR 上でのコードレビューが一般的。AI が生成したコードも人間によるレビューを経ることで品質を担保する。",
      },
      {
        word: "ステージング",
        mean: "本番環境と同等の構成で構築されたテスト用環境。公開前に動作確認やレビューを行うために使う。本番とは別のサーバーで稼働する。",
      },
      {
        word: "ログ",
        mean: "アプリケーションが記録する動作履歴。エラー発生時の原因特定、利用状況の分析、セキュリティ監査に使われる。console.log やサーバーログが代表的。",
      },
      {
        word: "権限・ロール",
        mean: "ユーザーやシステムが実行できる操作の範囲を定義する仕組み。ロール（役割）ごとに権限を設定し、管理者・編集者・閲覧者などを分離する。AI エージェントに広い権限を渡すとセキュリティリスクが増すため、最小権限の原則が重要。",
      },
      {
        word: "コンプライアンス",
        mean: "法令・社内規程・業界基準・契約条件を遵守すること。AI ツールの文脈では、入力データがモデル学習に使われないか（データ保護）、生成コードの著作権は誰にあるか（知的財産）、監査ログが取れるか（説明責任）などが該当する。EU AI Act や個人情報保護法への対応も含まれる。",
      },
      {
        word: "CI/CD（継続的インテグレーション／継続的デリバリー）",
        mean: "コードを変更するたびに自動でテスト実行（CI）し、問題がなければ自動で本番環境にデプロイ（CD）する仕組み。GitHub Actions や GitLab CI が代表的。手動でのテスト忘れやデプロイミスを防ぐ。",
      },
      {
        word: "テスト（ユニットテスト / 結合テスト / E2Eテスト）",
        mean: "コードが正しく動くことを自動で検証する仕組み。ユニットテストは関数単位、結合テストは複数モジュールの連携、E2E（エンドツーエンド）はブラウザ操作を含む全体を検証する。Jest・Vitest・Playwright が代表的。",
      },
      {
        word: "デプロイ",
        mean: "作ったアプリを本番環境（インターネット上）に公開する操作。Vercel なら git push するだけで自動デプロイ、Azure なら CI/CD パイプライン経由が一般的。",
      },
      {
        word: "ロールバック",
        mean: "デプロイした変更を取り消して、前のバージョンに戻す操作。本番で問題が発生したときの「巻き戻し」。Git の revert やホスティングサービスの再デプロイ機能で行う。",
      },
      {
        word: "本番環境 / 開発環境 / ステージング環境",
        mean: "本番環境はユーザーが使う実際のサーバー。開発環境は自分の PC。ステージング環境は本番そっくりのテスト用サーバー。「開発で動いたのに本番で動かない」を防ぐために環境を分ける。",
      },
      {
        word: "コードレビュー",
        mean: "他の人がコードの変更内容を読んで、バグや改善点を指摘するプロセス。GitHub の PR 上でコメントを付けて行うのが一般的。AI ツール（BugBot 等）による自動レビューも増えている。",
      },
      {
        word: "ブレークポイント / デバッグ",
        mean: "デバッグはバグ（不具合）を見つけて直す作業。ブレークポイントはコードの特定行で実行を一時停止させ、変数の中身を確認する仕組み。VS Code のデバッガーで行ごとに動作を追える。",
      },
      {
        word: "リファクタリング",
        mean: "動作は変えずにコードの構造を整理すること。読みやすさ・保守性を上げる。AI ツールが得意とする作業の一つで、「この関数を3つに分割して」のような指示で実行できる。",
      },
      {
        word: "技術的負債（テクニカルデット）",
        mean: "「とりあえず動く」を優先して書いたコードが、後から修正・拡張するときに余計なコストを生むこと。借金のように利子が膨らむ。定期的なリファクタリングで返済する。",
      },
      {
        word: "スクラム / アジャイル",
        mean: "開発の進め方の手法。アジャイルは「小さく作って素早く改善を繰り返す」考え方。スクラムはその具体的なフレームワークで、2週間のスプリント単位で計画→開発→振り返りを回す。",
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
        { word: "Composer モードの違い", section: "AI チャット・エージェント", mean: "Agent（自律実行・最も強力）/ Ask（質問のみ・コード変更なし）/ Plan（計画を見せてから実行）の3モードがある。==大半の作業は Agent モードでよい==。初めてのコードベースで「何をどう変えるか」を確認したいときは Plan を使う。" },
        { word: "YOLO Mode", section: "AI チャット・エージェント", mean: "Agent Mode の確認ダイアログを全てスキップし、ターミナルコマンドの実行やファイル削除も自動で行う設定。Settings > Features > Chat & Composer で有効化。!!壊れてもよい環境以外では使わないこと!!。Claude Code の `--dangerously-skip-permissions` と同等のリスク。" },
        // ── コンテキスト指定（追加） ──
        { word: "`@git` で未コミット変更を参照", section: "コンテキスト指定", mean: "Composer や Chat で `@git` と打つと、現在の未コミット変更（git diff）を AI のコンテキストに含める。「さっきの変更でバグが出た」のようなときに、変更内容を明示的に渡せて便利。" },
        { word: "`@docs` で外部ドキュメントを参照", section: "コンテキスト指定", mean: "Settings で登録した外部ドキュメント（ライブラリの公式ドキュメント等）を AI の文脈に含める。`@docs React` のように使う。最新の API を正しく使いたいときに有効。" },
        { word: "`@definitions` でシンボル定義を参照", section: "コンテキスト指定", mean: "プロジェクト内の型定義・関数宣言の一覧を AI に渡す。「この型に合うように実装して」のような指示で正確な型を使ってもらえる。" },
        // ── Bug Finder ──
        { word: "Bug Finder", section: "デバッグ", mean: "`Cmd+Shift+P`（コマンドパレット）→「bug finder」で起動。git diff を分析して潜在的なバグやロジックエラーを AI が検出する。PR を出す前のセルフレビューに使える。" },
        // ── Rules の種類 ──
        { word: "Rules の3種類", section: "設定", mean: "==Project Rules==（`.cursor/rules`）はプロジェクト固有の AI ルール。==User Rules==（Settings > Rules）は全プロジェクト共通。==.cursorrules==（プロジェクトルート）はレガシー形式で互換性維持用。新規プロジェクトは `.cursor/rules` を使う。Claude Code の `CLAUDE.md`（プロジェクト）と `~/.claude/CLAUDE.md`（共通）に相当する。" },
        // ── CLI コマンド ──
        { word: "CLI: `cursor` コマンド", section: "CLI", mean: "ターミナルから Cursor エディタを起動するコマンド。`cursor .` で現在のフォルダを開く。`cursor ファイル名` で特定のファイルを開く。VS Code の `code` コマンドと同じ感覚で使える。", code: "cursor .                    # 現在のフォルダを開く\ncursor src/App.jsx          # 特定のファイルを開く\ncursor --diff file1 file2   # 2ファイルの差分を表示", codeLang: "bash" },
        // ── / コマンド・@ シンボル・コマンドパレットの違い ──
        { word: "==`/` と `@` と `Cmd+Shift+P` の違い==", section: "3つの操作体系", mean: "Cursor には見た目が似ている3つの操作体系がある。混同しやすいので整理する。`/コマンド名` はカスタムプロンプトの実行。`@シンボル名` はコンテキスト（参照情報）の追加。`Cmd+Shift+P`（コマンドパレット）は IDE 全機能へのアクセス。==役割が全く違うので区別が重要==。" },
        { word: "`/` コマンド = カスタムプロンプト実行", section: "3つの操作体系", mean: "`.cursor/commands/` フォルダにマークダウンファイルを置くと、Composer で `/ファイル名` で呼び出せる。中身は AI への定型指示テンプレート。たとえば `/review` という名前で「変更をレビューしてバグを指摘して」というプロンプトを保存しておけば、毎回同じ指示を打たなくて済む。Claude Code の Skills（`.claude/skills/`）に相当する仕組み。", code: "# .cursor/commands/review.md\nこのファイルの変更点をレビューしてください。\n- バグやロジックエラーの指摘\n- パフォーマンスの問題\n- セキュリティの懸念", codeLang: "markdown" },
        { word: "==Claude Code の `/` とは別物==", section: "3つの操作体系", mean: "Claude Code の `/compact` `/model` `/diff` 等は組み込みのセッション操作コマンド。Cursor の `/` はユーザーが自分で作るプロンプトテンプレート。名前は同じ「スラッシュコマンド」だが仕組みが全く違う。Cursor で Claude Code の `/compact` に相当する操作は「New Chat で新しいセッションを始める」こと。" },
        { word: "`@` シンボル = コンテキスト参照", section: "3つの操作体系", mean: "`@file`、`@folder`、`@web`、`@git`、`@docs` 等。AI に「これも見て」と参照情報を追加する機能。プロンプトの実行ではなく、AI が判断に使う材料を増やす操作。Claude Code では `@ファイル名` で同様のファイル参照ができる。" },
        { word: "コマンドパレット = IDE の全機能", section: "3つの操作体系", mean: "`Cmd+Shift+P`（Mac）/ `Ctrl+Shift+P`（Win）で開く。モデル切替、ルール編集、MCP サーバー管理、Bug Finder など IDE のあらゆる機能にアクセスできる。AI チャットとは無関係の IDE 操作。" },
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
        // ── セキュリティ ──
        { word: ".env を AI に読ませない", section: "セキュリティ", mean: "`.cursorignore` に `.env*` を記述して AI のコンテキストから除外する。.gitignore と同じ書式。", code: "# .cursorignore\n.env\n.env.*\n*.pem\n*credentials*", codeLang: "text" },
        { word: "==Ghost Mode（最も制限的）==", section: "セキュリティ", mean: "Privacy Mode の上位設定。テレメトリ、チャットストレージ、メモリ/インデックス同期をすべて無効化し、全データをオンデバイスに保持する。企業で最も機密性の高いプロジェクトに使う。" },
        { word: "学習にコードを使わせない", section: "セキュリティ", mean: "Privacy Mode を有効にすると、コードがモデルプロバイダーに保存されず、トレーニングにも使用されない。Cursor は OpenAI・Anthropic・Fireworks との間でゼロデータリテンション（ZDR）契約がある。チームメンバーはデフォルトで Privacy Mode が強制有効。" },
        // ── コンテキスト指定 ──
        { word: "`@file` でファイルを指定", section: "コンテキスト指定", mean: "Composer や Chat 内で `@ファイル名` と打つと、そのファイルの内容を AI の文脈に含められる。関連ファイルを明示的に指定すると AI の回答精度が上がる。" },
        { word: "`@folder` でフォルダを指定", section: "コンテキスト指定", mean: "`@フォルダ名` でフォルダ内の全ファイルを文脈に含める。「@src このフォルダの構成を説明して」のように使う。" },
        { word: "`@codebase` でプロジェクト全体", section: "コンテキスト指定", mean: "`@codebase` でプロジェクト全体を文脈に含める。大きな質問（「このアプリの全体構成は？」）のときに使う。ただしトークンを大量に消費する。" },
        { word: "`@web` で最新情報を検索", section: "コンテキスト指定", mean: "`@web` をつけると AI がインターネットを検索して最新情報を元に回答する。ライブラリの最新バージョンや公式ドキュメントの確認に便利。" },
        { word: "画像をドラッグ＆ドロップ", section: "コンテキスト指定", mean: "Composer にスクリーンショットやデザイン画像をドラッグ＆ドロップすると、AI がその画像を見てコードを生成する。「このデザイン通りに作って」のような指示ができる。" },
        // ── デバッグ ──
        { word: "エラーの自動修正提案", section: "デバッグ", mean: "エディタ上のエラー（赤い波線）にカーソルを合わせると「Fix with AI」ボタンが出る。クリックすると Cursor の AI がエラーを分析して修正案を提示する。" },
        { word: "ターミナルエラーの AI 解析", section: "デバッグ", mean: "ターミナルでエラーが出たとき、エラーメッセージの横に「Ask AI」ボタンが表示される。クリックすると Chat が開いてエラーの原因と対処法を教えてくれる。" },
        // ── キーボードショートカット ──
        { word: "よく使うショートカットまとめ", section: "ショートカット", mean: "`Cmd+I`（Composer）/ `Cmd+L`（Chat）/ `Cmd+K`（インライン編集）/ `Ctrl+\\``（ターミナル）/ `Cmd+Shift+P`（コマンドパレット）。この5つを覚えればほぼ全操作ができる。" },
      ],
    },
  },
  {
    id: "codex",
    label: "Codex",
    ref: {
      id: "ref-codex",
      title: "Codex（OpenAI）日常リファレンス",
      lead: "OpenAI が提供する AI コーディングエージェント。デスクトップアプリ・ブラウザ・CLI・IDE 拡張の4形態で提供されている。クラウド上のサンドボックスで安全に実行される点が最大の特徴。バックエンドには GPT-5.x-Codex（コーディング特化モデル）が使われる。公式は https://openai.com/codex/ を参照。",
      terms: [
        // ── 使い方の種類 ──
        { word: "A. デスクトップアプリで使う", section: "使い方の種類", mean: "Codex の専用アプリ（macOS / Windows）を起動して使う。独自の画面でファイルツリーやチャットが見える。マウス操作で感覚的に使いたい人向け。ターミナルに慣れていない人はここから始めるとよい。" },
        { word: "B. ChatGPT の画面から使う（Web）", section: "使い方の種類", mean: "ChatGPT（chatgpt.com）の画面左側に「Codex」メニューがある。ここからタスクを投げてクラウド上で実行させる方法。ブラウザだけで完結する。ChatGPT Plus 以上のプランが必要。" },
        { word: "C. ターミナルから CLI で使う", section: "使い方の種類", mean: "ターミナルで `codex` コマンドを使う方法。Claude Code と同じ感覚で操作できる。オープンソース（GitHub: openai/codex）で公開されており、`npm install -g @openai/codex` でインストールする。" },
        { word: "D. IDE 拡張機能で使う", section: "使い方の種類", mean: "VS Code・Cursor・Windsurf・JetBrains IDE 向けの Codex 拡張機能をインストールして、エディタ内から直接タスクを投げられる。開いているファイルのコンテキストを自動で認識する。" },
        { word: "どの方法でも共通", section: "使い方の種類", mean: "処理はクラウドのサンドボックス上で実行される。ローカルのファイルに直接触れないため安全性が高い。結果は PR（Pull Request）として GitHub に提出される。" },
        // ── 基本操作 ──
        { word: "起動: `codex`（CLI の場合）", section: "基本操作", mean: "ターミナルで対話セッションを開始する。Claude Code と同じようにプロジェクトのフォルダに `cd` で移動してから実行する。ファイル操作はクラウドのサンドボックス上で行われる。", code: "cd C:\\Users\\あなた\\Projects\\my-app\ncodex", codeLang: "bash" },
        { word: "自動実行: `--full-auto`", section: "基本操作", mean: "確認なしで自動実行するモード。サンドボックス（隔離環境）内で動作するためローカルファイルが直接壊れるリスクは低いが、結果のレビューは必須。", code: "codex --full-auto \"テストを書いて全部パスさせて\"", codeLang: "bash" },
        { word: "非対話: `codex -q`（quiet モード）", section: "基本操作", mean: "質問への回答だけ返して終了する。CI（自動化パイプライン）やスクリプトからの利用に向く。", code: "codex -q \"このエラーの原因を説明して\"", codeLang: "bash" },
        { word: "セッション再開", section: "基本操作", mean: "Codex も `codex --continue` で直近のセッションを再開できる。Claude Code の `-c` と同じ機能。", code: "codex --continue", codeLang: "bash" },
        // ── 設定 ──
        { word: "設定: `AGENTS.md`", section: "設定", mean: "プロジェクトの文脈を Codex に伝える設定ファイル。CLAUDE.md と同じ役割で、コーディング規約やプロジェクト情報を書く。OpenAI 側の命名。==これがないと Codex は何もわからない状態で作業を始める==。", code: "## プロジェクト概要\nReact + TypeScript のWebアプリ\n\n## ルール\n- テストは Jest で書く\n- コミットメッセージは日本語\n- 型定義は必ず付ける", codeLang: "markdown" },
        { word: "設定: `codex.json`", section: "設定", mean: "Codex の動作設定ファイル。サンドボックスに入れるツール、環境変数、セットアップコマンドなどを指定する。プロジェクトルートに置く。" },
        { word: "設定: `codex.md`", section: "設定", mean: "AGENTS.md の別名。どちらのファイル名でも Codex は読み込む。チームで名前を統一しておくと混乱が少ない。" },
        // ── クラウド実行 ──
        { word: "サンドボックスとは", section: "クラウド実行", mean: "Codex が動く隔離されたクラウド環境のこと。自分の PC のファイルには直接触れず、クラウド上にプロジェクトのコピーを作って作業する。万が一 Codex が暴走しても PC のファイルは無事。" },
        { word: "並列タスク実行", section: "クラウド実行", mean: "複数のタスクをクラウド上で同時に走らせられる。例えば「機能Aの実装」と「機能Bのテスト」を並行で依頼できる。それぞれが独立した PR として返ってくる。" },
        { word: "タスクの進捗確認", section: "クラウド実行", mean: "投げたタスクの進捗は Codex アプリや ChatGPT の Codex メニューで確認できる。「Working」「Completed」「Failed」のステータスが表示される。完了すると PR のリンクが出る。" },
        { word: "タスクのキャンセル", section: "クラウド実行", mean: "実行中のタスクは Codex アプリまたは ChatGPT の Codex 画面からキャンセルできる。間違ったタスクを投げてしまったときに使う。" },
        // ── PR ワークフロー ──
        { word: "PR（Pull Request）のレビュー方法", section: "PR ワークフロー", mean: "Codex がタスクを完了すると GitHub に PR が作られる。GitHub 上で差分（何が変わったか）を確認し、問題なければマージ（取り込み）する。==必ず差分を確認してからマージすること==。" },
        { word: "PR にコメントでフィードバック", section: "PR ワークフロー", mean: "PR の差分で気になる箇所があれば、GitHub 上でコメントを残すと Codex がそのフィードバックを読んで修正してくれる。「この関数名をもっとわかりやすくして」のように書く。" },
        { word: "PR をマージする手順", section: "PR ワークフロー", mean: "差分を確認 → テストが通っていることを確認 → 「Merge pull request」ボタンを押す → ローカルで `git pull` して最新のコードを取得する。", code: "git pull origin main", codeLang: "bash" },
        // ── 料金 ──
        { word: "料金: Pro（$20/月）", section: "料金", mean: "ChatGPT Plus と共通のプラン。月のタスク数に上限あり。気軽に試す場合はこちら。" },
        { word: "料金: Pro+（$200/月）", section: "料金", mean: "大量にタスクを投げる人向け。Pro より大幅に多いタスク実行回数が使える。" },
        { word: "料金: API 従量課金", section: "料金", mean: "API 経由で使う場合は GPT モデルの従量課金。企業での大量利用やCI/CD 連携に向く。" },
        // ── 比較 ──
        { word: "==Claude Code との違い==", section: "他ツールとの比較", mean: "Claude Code はローカルで直接ファイルを編集する。Codex はクラウドのサンドボックスで動作する。ローカル操作の即時性と柔軟性なら Claude Code、安全な並列実行と PR ワークフローなら Codex。" },
        { word: "Cursor との違い", section: "他ツールとの比較", mean: "Cursor はエディタ内で AI が動作する。Codex はクラウドでコードを書いて PR として返す。Cursor は対話的で細かい指示に向き、Codex はまとまったタスクを丸投げするのに向く。" },
        { word: "Copilot Workspace との違い", section: "他ツールとの比較", mean: "Copilot Workspace は GitHub Issue から直接コードを生成する GitHub の機能。Codex は ChatGPT から使う OpenAI の機能。どちらも PR を作る点は同じだが、入口が違う。" },
        // ── 実践Tips ──
        { word: "サンドボックスの制限を理解する", section: "実践Tips", mean: "インターネットアクセスが制限される場合がある。外部 API を呼ぶコードのテストはローカルで別途行う。実行時間にも上限がある。サンドボックスに入っていないツール（特殊なライブラリ等）は使えない。" },
        { word: "ChatGPT との使い分け", section: "実践Tips", mean: "ChatGPT は質問・相談向け（会話型）。Codex はコードの実行・編集向け（タスク型）。「このエラーの意味は？」→ ChatGPT、「このバグを直して PR にして」→ Codex。デスクトップアプリでは両方がシームレスに使える。" },
        { word: "複数タスクの依存関係に注意", section: "実践Tips", mean: "並列で投げるタスクは互いに依存しないものを選ぶ。「機能 A の実装」と「機能 B のテスト」は OK。「機能 A の実装」と「機能 A のテスト」は A が完了してから B を投げる。" },
        { word: "==失敗したタスクへの対処==", section: "実践Tips", mean: "タスクが Failed になった場合、エラーログを確認できる。原因の多くは指示が曖昧、サンドボックスに必要なツールがない、テストが通らない、の3つ。指示を具体的に書き直して再実行する。" },
        // ── 効果的な使い方 ──
        { word: "タスクの書き方のコツ", section: "効果的な使い方", mean: "「バグを直して」ではなく「src/App.jsx の handleSubmit 関数でフォーム送信時に空文字チェックが抜けているので追加して、テストも書いて」のように具体的に書く。ファイル名・関数名・期待する動作を明示すると精度が上がる。" },
        { word: "段階的にタスクを分割する", section: "効果的な使い方", mean: "大きな機能を1つのタスクで投げるのではなく、「Step 1: データモデルを作成」→「Step 2: API エンドポイントを作成」→「Step 3: フロントを接続」のように分割すると成功率が上がる。" },
        { word: "==Codex が得意なこと==", section: "効果的な使い方", mean: "テスト作成、リファクタリング、ドキュメント生成、定型的な機能追加、コードレビュー、依存関係の更新。明確な仕様があるタスクほど精度が高い。" },
        { word: "==Codex が苦手なこと==", section: "効果的な使い方", mean: "複雑な設計判断、UI/UX のデザイン、外部 API との連携テスト（サンドボックス制限）、曖昧な要件の解釈。これらは人間が設計を決めてから Codex に実装を任せる方がよい。" },
      ],
    },
  },
  {
    id: "gemini-cli",
    label: "Gemini CLI",
    ref: {
      id: "ref-gemini-cli",
      title: "Gemini CLI 日常リファレンス",
      lead: "Google DeepMind が提供する OSS の CLI コーディングツール。200 万トークンのコンテキストウィンドウが最大の特徴。公式は https://github.com/google-gemini/gemini-cli を参照。",
      terms: [
        // ── 使い方の種類 ──
        { word: "A. ターミナルから対話的に使う", section: "使い方の種類", mean: "ターミナルで `gemini` コマンドを実行して対話セッションを開始する。Claude Code と同じ感覚で使える。Google アカウントでログインするだけで無料枠が使える。" },
        { word: "B. Cursor / VS Code のターミナルから使う", section: "使い方の種類", mean: "エディタの統合ターミナルから `gemini` を起動する。Claude Code や Codex と同じプロジェクトフォルダで併用も可能。" },
        // ── 基本操作 ──
        { word: "起動: `gemini`", section: "基本操作", mean: "対話セッションを開始する。初回は Google アカウントでのログインが求められる。プロジェクトのフォルダに移動してから実行する。", code: "cd C:\\Users\\あなた\\Projects\\my-app\ngemini", codeLang: "bash" },
        { word: "インストール", section: "基本操作", mean: "npm でグローバルインストールする。Node.js 18 以上が必要。パッケージ名は公式リポジトリで確認。", code: "npm install -g @anthropic-ai/claude-code  # Claude Code\nnpm install -g gemini-cli                  # Gemini CLI\n# パッケージ名は変更の可能性あり。公式を確認:\n# https://github.com/google-gemini/gemini-cli", codeLang: "bash" },
        { word: "==200 万トークンコンテキスト==", section: "基本操作", mean: "Gemini 2.5 Pro の 200 万トークンのコンテキストウィンドウを活かし、大規模コードベースを一括で読み込める。数百ファイル規模のリポジトリでも全体を把握した上で回答できるのが他の CLI ツールとの最大の違い。" },
        // ── モデル選択 ──
        { word: "モデル: Gemini 2.5 Pro", section: "モデル選択", mean: "高精度モデル。200 万トークンのコンテキストを活かした大規模コードベースの解析や複雑な推論に向く。2026年3月25日より有料サブスクリプション限定。" },
        { word: "モデル: Gemini 2.5 Flash", section: "モデル選択", mean: "高速モデル。無料枠で利用可能。軽い質問やシンプルなタスクに向く。コンテキストは Pro より小さいが、日常的な利用には十分。" },
        // ── 機能 ──
        { word: "Plan Mode", section: "機能", mean: "コード変更前にエージェントが計画を提示し、ユーザーの承認を得てから実行する慎重なワークフロー。v0.35.0 で追加された。Claude Code の Plan Mode と同様の機能。" },
        { word: "サブエージェント", section: "機能", mean: "タスクを分割して複数のサブエージェントに並列実行させる機能。v0.35.0 で大幅に強化された。ローカル実行、ツール分離、動的ツールフィルタリングに対応。" },
        { word: "ネイティブサンドボックス", section: "機能", mean: "Linux（bubblewrap/seccomp）、macOS（Seatbelt）、Windows の各プラットフォームでネイティブなサンドボックス分離を実現。ツール実行の安全性が高い。" },
        { word: "MCP 対応", section: "機能", mean: "Model Context Protocol に対応しており、サードパーティの MCP サーバーを接続して機能を拡張できる。Claude Code と同じ MCP サーバーを共有できる場合もある。" },
        { word: "Vim モード", section: "機能", mean: "ターミナル内で Vim キーバインドが使える。Vim ユーザー向けのカスタマイズ。v0.35.0 で強化された。" },
        // ── スラッシュコマンド ──
        { word: "操作: `/help`", section: "スラッシュコマンド", mean: "利用可能なコマンドの一覧と使い方を表示する。困ったらまずこれ。" },
        { word: "操作: `/clear`（`Ctrl+L`）", section: "スラッシュコマンド", mean: "ターミナル画面をクリアする。Claude Code の `/clear` と同じ。`Ctrl+L` でも同じ操作ができる。" },
        { word: "操作: `/compact`", section: "スラッシュコマンド", mean: "ツール出力（ディレクトリ一覧やファイル読み取り結果）を構造化されたコンパクト形式で表示する。長い出力が見やすくなる。" },
        { word: "操作: `/model`", section: "スラッシュコマンド", mean: "使用するモデルを切り替える。Claude Code の `/model` と同じ役割。Flash（高速・無料枠あり）と Pro（高精度・有料）を切り替えられる。" },
        { word: "操作: `/stats`", section: "スラッシュコマンド", mean: "セッションの統計情報を表示。使用時間、ツール呼び出し回数、パフォーマンスメトリクスが見える。Claude Code の `/cost` + `/context` に相当する。" },
        { word: "操作: `/tools`", section: "スラッシュコマンド", mean: "現在利用可能なツールの一覧を表示。MCP サーバー経由で追加したツールも含まれる。" },
        { word: "操作: `/theme`", section: "スラッシュコマンド", mean: "CLI のビジュアルテーマを変更するダイアログを開く。" },
        { word: "操作: `/save`", section: "スラッシュコマンド", mean: "現在の会話履歴を保存する。タグを付けて後で参照できる。" },
        { word: "操作: `/chat share`", section: "スラッシュコマンド", mean: "現在の会話を Markdown または JSON ファイルにエクスポートする。`/chat share file.md` のように使う。", code: "/chat share conversation.md", codeLang: "text" },
        { word: "操作: `/auth`", section: "スラッシュコマンド", mean: "認証方法を変更するダイアログを開く。Google アカウント認証と API キー認証を切り替えられる。" },
        { word: "操作: `/bug`", section: "スラッシュコマンド", mean: "Gemini CLI の Issue を報告する。`/bug タイトル` と入力するとバグレポートが作成される。" },
        { word: "操作: `/init`", section: "スラッシュコマンド", mean: "現在のディレクトリを分析して GEMINI.md を自動生成する。Claude Code の `/init`（CLAUDE.md 生成）と同じ役割。" },
        { word: "操作: `/memory`", section: "スラッシュコマンド", mean: "GEMINI.md ファイルの管理コマンド。`/memory list` で読み込み中の GEMINI.md 一覧、`/memory reload` で再読み込み。Claude Code の `/memory` と同じ役割。" },
        { word: "操作: `/yolo`", section: "スラッシュコマンド", mean: "全てのツール呼び出しを自動承認するモード。Claude Code の `--dangerously-skip-permissions`、Cursor の YOLO Mode に相当する。!!安全な環境以外では使わないこと!!。" },
        // ── 設定ファイル ──
        { word: "設定: `GEMINI.md`", section: "設定", mean: "プロジェクトルートに置く指示書。Claude Code の `CLAUDE.md`、Cursor の `.cursor/rules` に相当する。`/init` で自動生成、`/memory` で管理できる。階層的に読み込まれ、プロジェクトルートとホームディレクトリの両方が対象。" },
        { word: "設定: `~/.gemini/settings.json`", section: "設定", mean: "Gemini CLI のグローバル設定。テーマ、デフォルトモデル、キーバインドなどを指定する。" },
        { word: "設定: `~/.gemini/keybindings.json`", section: "設定", mean: "キーボードショートカットのカスタマイズファイル。デフォルトのキーバインドを変更・追加できる。" },
        // ── キーボードショートカット ──
        { word: "ショートカットまとめ", section: "ショートカット", mean: "`Ctrl+L`（画面クリア）/ `Esc` 2回（入力クリア or 巻き戻し）/ `Tab+Tab`（UI詳細度の切替）/ `Alt+Z`（アンドゥ）/ `Shift+Alt+Z`（リドゥ）。Esc 2回は Claude Code の `/rewind`（Esc-Esc）と同じ設計。" },
        // ── @ コマンドと ! コマンド ──
        { word: "`@` コマンド = ファイル参照", section: "操作体系", mean: "`@ファイル名` でファイルをコンテキストに追加する。Cursor の `@file` と同じ仕組み。Claude Code でも `@ファイル名` で同様の操作ができる。" },
        { word: "`!` コマンド = シェル実行", section: "操作体系", mean: "`!コマンド` でシェルコマンドを直接実行する。`!git status` のように使う。AI を介さずにターミナル操作したいときに便利。" },
        { word: "==`/` `@` `!` の違い==", section: "操作体系", mean: "`/` は CLI の操作コマンド（/clear, /model 等）。`@` はファイル参照（コンテキスト追加）。`!` はシェル直接実行。3つのプレフィックスで役割が分かれている。Claude Code は `/` のみで統一されているが、Gemini CLI は3種類ある。" },
        // ── Google Cloud 統合 ──
        { word: "Google Cloud 統合", section: "Google Cloud 統合", mean: "Firebase、Vertex AI、Google Cloud のサービスとネイティブに統合されている。Google Cloud を使っている開発者にとっては AI ツールと既存インフラの連携がスムーズ。" },
        { word: "Firebase との連携", section: "Google Cloud 統合", mean: "Firebase プロジェクトの設定やデプロイを Gemini CLI から操作できる。Firebase Hosting、Cloud Functions との統合が想定されている。" },
        // ── 料金 ──
        { word: "料金: 無料枠（Flash）", section: "料金", mean: "Gemini Flash モデルは 1 日 1,000 リクエストまで無料。Google アカウントがあれば利用可能。軽い使い方なら課金不要。" },
        { word: "料金: Pro モデル（有料）", section: "料金", mean: "2026年3月25日より、Gemini Pro モデルは有料サブスクリプション限定になった。大規模コンテキストを活かした本格利用には課金が必要。" },
        { word: "料金: API 従量課金", section: "料金", mean: "Google AI Studio / Vertex AI 経由の API 利用は従量課金。大量利用する場合はこちらが費用対効果が高い場合もある。" },
        // ── 比較 ──
        { word: "==Claude Code との違い==", section: "他ツールとの比較", mean: "Claude Code は 1M トークンコンテキストで MCP・Hooks・Skills など拡張機能が豊富。Gemini CLI は 200 万トークンコンテキストで大規模コードベースの一括読み込みに強い。拡張性の Claude Code、コンテキスト量の Gemini CLI。" },
        { word: "Codex との違い", section: "他ツールとの比較", mean: "Codex はクラウドサンドボックスで動作し PR ワークフローに特化。Gemini CLI はローカルで動作し対話的な作業に向く。" },
        // ── 実践Tips ──
        { word: "大規模リポジトリでの使い方", section: "実践Tips", mean: "200 万トークンのコンテキストを活かして、プロジェクト全体を読み込ませてからアーキテクチャレベルの質問をする。「このプロジェクトの依存関係を分析して」のようなタスクが得意。" },
        { word: "無料枠の使い分け", section: "実践Tips", mean: "Flash（無料）で日常的な質問、Pro（有料）で複雑な推論やコーディングタスク。無料枠がある間は Gemini CLI で軽い作業、重い作業は Claude Code、のような使い分けもできる。" },
        { word: "OSS なのでカスタマイズ可能", section: "実践Tips", mean: "Gemini CLI はオープンソース（Apache 2.0）で公開されている。ソースコードを読んで動作を理解したり、カスタマイズしたりできる。" },
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
        // ── セキュリティ ──
        { word: "==学習にコードを使わせない（重要変更）==", section: "セキュリティ", mean: "2026年4月24日以降、Free/Pro/Pro+ ユーザーのインタラクションデータ（入力・出力・コードスニペット）がデフォルトで AI モデルトレーニングに使用される。==オプトアウトが必須==: /settings/copilot/features で「Allow GitHub to use my data for AI model training」を OFF にする。Business/Enterprise プランはこの変更の対象外。" },
        { word: ".env の保護", section: "セキュリティ", mean: "VS Code の `files.exclude` で .env を非表示にしてもCopilotは読める場合がある。`.gitignore` への追加が最低限必須。Enterprise プランでは組織レベルのポリシーで特定ファイルパターンを除外できる。" },
        { word: "Copilot + Claude Code の併用", section: "実践Tips", mean: "VS Code のターミナルから Claude Code CLI を起動すると、Copilot（エディタ内 AI）と Claude Code（ターミナル AI）を同時に使える。Copilot でサジェスト + Claude Code で大きなタスク実行の組み合わせが可能。", code: "claude", codeLang: "bash" },
        // ── テスト・コードレビュー ──
        { word: "テスト生成", section: "テスト・レビュー", mean: "関数を選択して Chat で「このコードのテストを書いて」と指示すると、テストコードを生成してくれる。テストフレームワーク（Jest, Vitest 等）を `copilot-instructions.md` に指定しておくと的確なテストが出る。" },
        { word: "PR レビューでの Copilot", section: "テスト・レビュー", mean: "GitHub.com 上で PR を開くと、Copilot が自動でコードレビューのコメントを提案する（Business 以上）。セキュリティの問題やバグの可能性を指摘してくれる。" },
        { word: "ドキュメント・コメント生成", section: "テスト・レビュー", mean: "関数の上にカーソルを置いて `/doc` と打つと、AI がその関数の JSDoc/docstring を生成する。既存コードにドキュメントを後付けしたいときに便利。" },
        // ── 便利機能 ──
        { word: "右クリックメニューの AI アクション", section: "便利機能", mean: "エディタ上で右クリック → 「Copilot」メニューから、説明・修正・テスト生成・ドキュメント生成などにワンクリックでアクセスできる。ショートカットを覚えなくても使える。" },
        { word: "インライン Chat: `Ctrl+I`", section: "便利機能", mean: "コードの行の中で直接 AI に指示を出せる。Cmd+K（Cursor）に近い機能。選択範囲を変換したり、コメントからコードを生成したりできる。" },
        { word: "Copilot Workspace（プレビュー）", section: "便利機能", mean: "GitHub Issue から直接 Copilot にコードを書かせる機能（2026年時点プレビュー）。Issue の説明を読み取って、Plan → 実装 → PR まで自動化する。Codex の GitHub 版に近い。" },
      ],
    },
  },
  {
    id: "power-apps",
    label: "Power Apps",
    ref: {
      id: "ref-power-apps",
      title: "Power Apps / Microsoft バックエンド 日常リファレンス",
      lead: "Microsoft のノーコード/ローコード開発基盤。Canvas・Model-driven・Custom Pages・Power Pages・Vibe Coding の5つの開発手法がある。公式は https://learn.microsoft.com/en-us/power-apps/ を参照。",
      terms: [
        // ── 開発手法 ──
        { word: "Canvas Apps（キャンバスアプリ）", section: "開発手法", mean: "空白のキャンバスに UI をドラッグ&ドロップで配置する。ロジックは Power Fx（Excel に似た数式言語）で記述。300以上のコネクタでデータソースに接続可能。最も利用者が多い手法。" },
        { word: "Model-driven Apps（モデル駆動型）", section: "開発手法", mean: "Dataverse のデータモデル（テーブル・列・リレーション）を定義すると UI が自動生成される。「データが先、UIは後」の設計思想。CRM・ERP のような基幹アプリに向く。==Dataverse が必須==。" },
        { word: "Custom Pages（カスタムページ）", section: "開発手法", mean: "Model-driven Apps の中に Canvas ベースのページを埋め込む。PCF（React コンポーネント）も使える。Model-driven の構造化と Canvas の柔軟な UI を組み合わせたい場合に使う。" },
        { word: "Power Pages（パワーページ）", section: "開発手法", mean: "外部ユーザー（顧客・パートナー）向けの Web ポータル。Dataverse のデータを外部に公開するユースケース（サポートポータル、申請フォーム等）に特化。" },
        { word: "Vibe Coding（AI 生成）", section: "開発手法", mean: "vibe.powerapps.com で自然言語からアプリを自動生成。「営業の日報管理アプリを作って」のような指示で、データモデル・UI・ロジックを AI が一括生成する。2026年時点では英語のみ、リージョン限定。プロトタイプ向け。" },
        { word: "==PCF（Power Apps Component Framework）==", section: "開発手法", mean: "React / TypeScript でカスタムコンポーネントを開発し、Model-driven Apps や Canvas Apps に埋め込む仕組み。`pac pcf init --framework React` でプロジェクトを初期化。==フルページの SPA 置き換えには不向き==、コンポーネント単位の設計。Canvas では React 16、Model-driven では React 17 に制限あり。" },
        { word: "==Power Apps Code Apps（新機能）==", section: "開発手法", mean: "React・Vue・Angular でスタンドアロンの SPA を作り、Power Apps SDK 経由で Dataverse と1,500以上のコネクタに直接アクセスする新しい手法。認証は SDK が自動処理。バイブコーディングで作ったフロントエンドを Microsoft バックエンドに接続する最短経路。", code: "# Power Apps Code Apps のセットアップ\nnpm create power-apps-code-app@latest my-app\ncd my-app\nnpm install\nnpm run dev", codeLang: "bash" },
        // ── Dataverse ──
        { word: "Dataverse（データバース）", section: "Dataverse", mean: "Microsoft のビジネスデータプラットフォーム。テーブル・列・リレーションを GUI で定義し、REST API（OData）で操作。Entra ID 認証が標準統合されている。Power Apps / Dynamics 365 の標準バックエンド。" },
        { word: "Dataverse Web API", section: "Dataverse", mean: "Dataverse のデータを REST API（OData v4）で操作する。CRUD、クエリ（$filter, $select, $expand）、関数・アクションの実行が可能。MSAL でトークンを取得してヘッダーに付与する。" },
        { word: "Dataverse のライセンス", section: "Dataverse", mean: "Power Apps Premium（$20/ユーザー/月）が必要。2000人超の組織は Enterprise Premium（$12/ユーザー/月）が利用可能。Per App プラン（$5/月）は2026年1月に廃止済み。デフォルト DB 容量は45GB（2026年4月改定）。" },
        // ── 認証 ──
        { word: "Entra ID（エントラ ID）", section: "認証", mean: "Microsoft の ID プラットフォーム（旧 Azure AD）。M365 E3 以上に含まれる。Power Apps・Dataverse・Azure のすべてで共通の認証基盤。OAuth 2.0 / OpenID Connect に対応。" },
        { word: "MSAL.js（Microsoft Authentication Library）", section: "認証", mean: "React / Next.js から Entra ID 認証を行うためのライブラリ。Authorization Code Flow with PKCE でトークンを取得し、Dataverse API や Azure サービスにアクセスする。", code: "npm install @azure/msal-browser @azure/msal-react", codeLang: "bash" },
        // ── バックエンドの選択肢 ──
        { word: "==Dataverse vs PostgreSQL の判断==", section: "バックエンド選択", mean: "Dataverse: ノーコード/ローコード向け、Power Apps 統合が最強、ライセンス費用が高い。PostgreSQL（Azure DB / Supabase）: 開発者向け、SQL の自由度が高い、Dataverse より安い。E3 の Entra ID 認証だけ借りて PostgreSQL を使う構成がコスト最適な場合が多い。" },
        { word: "Azure Database for PostgreSQL", section: "バックエンド選択", mean: "Microsoft のマネージド PostgreSQL。Entra ID 認証をネイティブサポート（パスワード不要）。Burstable B1ms で月額約$13〜。エンタープライズのコンプライアンス要件に対応。" },
        { word: "Supabase + Entra ID", section: "バックエンド選択", mean: "Supabase Auth に Entra ID を OAuth プロバイダーとして登録し、Microsoft アカウントでログインできるようにする構成。Pro $25/月で PostgreSQL + Auth + Realtime + Edge Functions が使える。Dataverse のライセンスが不要な分コストが下がる。" },
        // ── 実践Tips ──
        { word: "Power Fx", section: "実践Tips", mean: "Power Apps の数式言語。Excel の数式に似ており、非エンジニアでも書ける。Canvas Apps のロジック（ボタン操作、条件分岐、データフィルタ）で使う。" },
        { word: "Power Automate との連携", section: "実践Tips", mean: "Power Automate はワークフロー自動化ツール。SharePoint にファイルがアップロードされたら自動で Dataverse に格納する、Teamsに通知するなど、ノーコードでバックエンド処理を組める。" },
        { word: "SharePoint のデータを AI で使う", section: "実践Tips", mean: "SharePoint の PDF を AI（RAG等）で活用するには、PDF → Markdown / JSON への変換が必要。Azure AI Document Intelligence や Power Automate でフローを組む。元の PDF は SharePoint に残し、AI 用の変換データを別途管理する二重管理が実運用では避けられない。" },
        { word: "==Claude Code と Power Apps の接点==", section: "実践Tips", mean: "Claude Code で React フロントエンドをバイブコーディングで高速に作り、バックエンドに Power Apps Code Apps 経由で Dataverse を使う構成が可能。また、PCF コンポーネントの React コードを Claude Code で生成し、Power Apps に組み込むワークフローも有効。認証まわりの MSAL 設定や Dataverse API の呼び出しコードも Claude Code で生成できる。" },
        { word: "M365 ライセンスと Power Apps の関係", section: "実践Tips", mean: "E3（$39/月）: Entra ID + 標準コネクタのみの Power Apps。E5（$60/月）: E3 + セキュリティ強化。E7（$99/月）: E5 + Copilot + Agent 365。Power Apps Premium（$20/月追加）: Dataverse + プレミアムコネクタ。詳細は M365 E7 記事を参照。" },
      ],
    },
  },
  {
    id: "cross-tool",
    label: "逆引き辞書",
    ref: {
      id: "ref-cross-tool",
      title: "やりたいこと逆引き辞書 — 各ツールでの操作方法",
      lead: "「ファイルを検索したい」「テストを書きたい」など、やりたいことから各ツールの操作方法を引ける辞書。各ツールの方法を改行で区切って表示。",
      terms: [
        // ── ファイル操作 ──
        { word: "ファイルを検索する", section: "ファイル操作", mean: "Claude Code: Read / Glob ツールで自動検索。指示に含めれば自動で探す。\nCursor: `Cmd+P` でファイル名検索、`@file` で AI に指定。\nCodex: タスク指示に含めればサンドボックス内で検索。\nCopilot: `@workspace` で全体検索、`#file` で指定。\nGemini CLI: 指示に含めれば自動で探す。200万トークンなら全ファイル読み込みも可能。" },
        { word: "複数ファイルを同時に編集する", section: "ファイル操作", mean: "Claude Code: 自然言語で指示すれば複数ファイルを自律的に編集。\nCursor: Composer（`Cmd+I`）でマルチファイル編集。Agent モードで自律的に複数ファイルを変更。\nCodex: タスク指示に含めればサンドボックス内で複数ファイルを変更。\nCopilot: Agent Mode で複数ファイル変更。\nGemini CLI: 自然言語で指示すれば複数ファイルを編集。" },
        { word: "変更を元に戻す", section: "ファイル操作", mean: "Claude Code: `git stash` や `git checkout -- ファイル名` で Git 経由で戻す。\nCursor: Composer の Accept / Reject ボタンで個別に取消。Git で `git stash` も可。\nCodex: PR をマージしなければ変更は反映されない。PR を Close する。\nCopilot: Agent Mode の Accept / Discard で個別に取消。\nAider: `/undo` コマンドで直前の変更をロールバック。" },
        // ── テスト ──
        { word: "テストを書く", section: "テスト", mean: "Claude Code: 「このファイルのテストを書いて」と指示。テストフレームワークは CLAUDE.md で指定。\nCursor: Composer で「テストを書いて」と指示。.cursor/rules でフレームワーク指定。\nCodex: 「テストを追加して全部パスさせて」とタスク投入。サンドボックスで実行まで行う。\nCopilot: 関数を選択 → Chat で「テストを書いて」。`/tests` スラッシュコマンドも使える。\nGemini CLI: 「テストを書いて」と指示。" },
        { word: "テストを実行する", section: "テスト", mean: "Claude Code: Bash ツールで `npm test` 等を自動実行。Hooks で commit 前に自動テストも設定可能。\nCursor: 統合ターミナルで手動実行。Agent モードなら自動実行も。\nCodex: サンドボックス内でテスト自動実行。結果は PR に反映。\nCopilot: Agent Mode でターミナルコマンドとして実行。\nGemini CLI: ターミナルで自動実行。" },
        // ── Git 操作 ──
        { word: "コミットする", section: "Git 操作", mean: "Claude Code: 変更内容を自動解析してコミットメッセージを生成・コミット。\nCursor: 統合ターミナルから手動で `git commit`。AI はコミットしない。\nCodex: クラウドで PR を自動作成。コミットは自動。\nCopilot: 統合ターミナルから手動。GitHub 上で Coding Agent が PR 作成。\nAider: 変更ごとに自動コミット（設定で無効化可）。" },
        { word: "PR（Pull Request）を作成する", section: "Git 操作", mean: "Claude Code: `gh pr create` を Bash で実行。指示すれば PR 作成まで自律的に行う。\nCursor: Background Agent で PR 作成可能。\nCodex: タスク完了後に自動で PR 作成（標準ワークフロー）。\nCopilot: Coding Agent が Issue から PR を自動作成。\nGemini CLI: `gh` コマンド経由で PR 作成可能。" },
        // ── 設定 ──
        { word: "プロジェクトルールを設定する", section: "設定", mean: "Claude Code: `CLAUDE.md` をプロジェクトルートに置く。\nCursor: `.cursor/rules` にルールファイルを置く。\nCodex: `AGENTS.md`（または `codex.md`）をプロジェクトルートに置く。\nCopilot: `.github/copilot-instructions.md` を置く。\nGemini CLI: `GEMINI.md` をプロジェクトルートに置く（公式ドキュメントで確認）。" },
        { word: "AI に読ませたくないファイルを除外する", section: "設定", mean: "Claude Code: `.claude/settings.json` の `ignorePaths` で `.env*` を追加。\nCursor: `.cursorignore` に `.env*` を記述（.gitignore と同じ書式）。\nCodex: `codex.json` でサンドボックスに含めないファイルを指定。\nCopilot: VS Code の `files.exclude` 設定と Copilot の設定で制御。\nGemini CLI: 設定ファイルで指定（公式ドキュメント参照）。" },
        // ── セキュリティ ──
        { word: ".env / API キーの漏洩を防ぐ", section: "セキュリティ", mean: "Claude Code: `.claude/settings.json` の `ignorePaths` に `.env*` を追加。Hooks の PreCommit で gitleaks 等を実行。\nCursor: `.cursorignore` に `.env*` を記述。Privacy Mode を有効化。\nCodex: サンドボックスで動作するためローカル .env は含まれにくいが、codex.json で明示的に除外。\nCopilot: VS Code の files.exclude で .env を非表示に。\n共通: `.gitignore` に `.env*` を必ず追加。git-secrets や gitleaks をプレコミットフックに設定。" },
        { word: "コードの学習利用を防ぐ", section: "セキュリティ", mean: "Claude Code: Commercial プラン（Team/Enterprise/API）は学習不使用。Consumer は claude.ai/settings で設定。\nCursor: Privacy Mode（Settings > General）で学習不使用。Ghost Mode で完全無効化。\nCopilot: /settings/copilot/features で「AI model training」を OFF。Business/Enterprise は契約で不使用。==4/24〜 Free/Pro はデフォルト ON なので要確認==。\nGemini CLI: CLI 内にオプトアウト設定なし（2026年3月時点で課題あり）。" },
        { word: "会話履歴を保存する", section: "セキュリティ", mean: "Claude Code: `/export` で会話をファイルに保存。`--continue` / `--resume` でセッション再開。ローカルに `~/.claude/projects/` に保存（最大30日）。Hooks で自動保存も可能。\nCursor: チャット履歴はエディタ内に保持。新規チャットで独立。\nCodex: ChatGPT の画面に履歴が残る。Codex タスク一覧で進捗・結果を確認可能。\nCopilot: VS Code の Chat パネルに履歴。セッション単位で保持。" },
        // ── デバッグ ──
        { word: "エラーの原因を調べる", section: "デバッグ", mean: "Claude Code: エラーメッセージを貼り付けるか、ログファイルを読ませて分析させる。\nCursor: エラーの赤い波線にカーソル → 「Fix with AI」。ターミナルエラーは「Ask AI」ボタン。\nCodex: タスクで「このエラーを修正して」と指示。\nCopilot: `@terminal このエラーの原因は？` で直近のターミナル出力を解析。\nGemini CLI: エラーメッセージを貼り付けて分析させる。" },
        // ── コード理解 ──
        { word: "コードの意味を説明してもらう", section: "コード理解", mean: "Claude Code: 「このファイルを説明して」と指示。1M コンテキストで広範囲を把握。\nCursor: コードを選択 → `Cmd+L` → 「これを説明して」。\nCodex: `-q` モードで質問のみ可能。\nCopilot: コードを選択 → 右クリック → 「Explain」。`@workspace` でプロジェクト全体の説明も。\nGemini CLI: 200 万トークンで大規模コードベースの全体像を説明させるのに強い。" },
        { word: "プロジェクト全体の構造を把握する", section: "コード理解", mean: "Claude Code: 起動時に自動でプロジェクト構造を読み取る。\nCursor: `@codebase このプロジェクトの構造を説明して` で全体把握。\nCopilot: `@workspace` で全体を文脈に含める。\nGemini CLI: 200 万トークンのコンテキストで全ファイルを一括読み込み。大規模プロジェクトでの全体把握に最も強い。" },
        // ── 外部連携 ──
        { word: "外部ツール・API と連携する", section: "外部連携", mean: "Claude Code: MCP サーバーで DB・ブラウザ・SaaS API と連携。Hooks で前後処理。\nCursor: MCP サーバー対応。拡張機能でも連携可能。\nCodex: サンドボックス内での実行に限定。外部 API は制限あり。\nCopilot: VS Code 拡張機能エコシステムで幅広い連携。\nGemini CLI: MCP 対応。Google Cloud サービスとネイティブ統合。" },
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
