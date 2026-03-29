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
        word: "MCP（Model Context Protocol）",
        mean: "AI エージェントがファイル・DB・外部ツールと通信するための共通規格。Claude Code や Cursor が使っています。",
        mem: "USB ポートのようなもの。一度つなぎ方を決めると、どのツールとも話せます。",
      },
      {
        word: "エージェント",
        mean: "指示を受けて自分でツールを使い、タスクを完了するまで動き続ける AI の動作モード。",
        mem: "チャットは「質問→返答」。エージェントは「依頼→自分で考えて実行→報告」。",
      },
    ],
  },
];
