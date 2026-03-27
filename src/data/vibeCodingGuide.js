/**
 * バイブコーディング向け「理想の組み合わせ」と非エンジニア向け用語集。
 * UI は App.jsx 側。文面のみここで管理。
 */

export const VIBE_STACK_NOTE =
  "「バイブコーディング」は厳密な定義より、対話しながら雰囲気で試す開発スタイルのイメージです。次の表は出発点であり、チームの規約・セキュリティは別途確認してください。";

export const VIBE_CODING_PAGE_LEAD =
  "このページでは **道具の組み合わせ** と **進め方のルール**・**ハマりどころ**をまとめています。記事や会話で出る用語の意味は「用語集」タブからどうぞ。";

/** @typedef {{ pattern: string, ide: string, ai: string, voice: string, note: string }} VibeToolComboRow */

/** @type {{ lead: string, columns: [string, string, string, string, string], rows: VibeToolComboRow[] }} */
export const VIBE_TOOL_COMBO_TABLE = {
  lead: "IDE・AI エージェント・音声入力の組み合わせ例です。料金・モデル名・連携方式は各公式の最新情報を確認してください。",
  columns: ["パターン", "IDE・エディタ", "AI（対話・エージェント）", "音声・入力補助", "ひとこと"],
  rows: [
    {
      pattern: "Cursor 主力",
      ide: "Cursor",
      ai: "内蔵モデル（Claude / GPT 等の切替）・Composer・ターミナル連携",
      voice: "アクアボイス 等で仕様・コメント・指示を口述",
      note: "フォルダ単位のスコープとプロジェクトルール（.cursor/rules 等）を揃えると、AI のブレが減りやすいです。",
    },
    {
      pattern: "VS Code ＋ Copilot",
      ide: "Visual Studio Code",
      ai: "GitHub Copilot / Copilot Chat（別ウィンドウで Claude・ChatGPT と併用も可）",
      voice: "アクアボイス で長文プロンプトやコード以外を音声入力",
      note: "普段使いのエディタを変えずに AI を足す王道。拡張と設定ファイルが増えがちなので README を残すと安心です。",
    },
    {
      pattern: "OpenAI Codex 寄り",
      ide: "VS Code / Cursor / ターミナル",
      ai: "Codex CLI・IDE 拡張・ChatGPT / エージェントモード",
      voice: "（任意）アクアボイス",
      note: "サンドボックスや承認フローが絡むことが多いです。**ネットワーク権限・ファイル書き込み範囲**を理解してから「任せ切り」にします。",
    },
    {
      pattern: "Google Antigravity",
      ide: "Google Antigravity（エージェント IDE）",
      ai: "Gemini を軸にしたマルチステップ実行・ツール連携",
      voice: "（任意）アクアボイス",
      note: "エージェントが自律的に動くほど、**だれが・いつ・何を承認するか**を決めておかないと本番データ事故に繋がります。",
    },
    {
      pattern: "チャットのみ（コード前）",
      ide: "ブラウザ",
      ai: "Claude（Web）/ ChatGPT / Gemini など",
      voice: "ブラウザや公式アプリの音声入力",
      note: "要件・画面の言葉・NG 例を固める段階。いきなりリポジトリを開く前に「成功条件」を一文にすると後工程が楽です。",
    },
  ],
};

/** @typedef {{ title: string, mean: string, mem?: string }} VibeBasicRule */

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
    title: "まずはチャットだけ",
    emoji: "💬",
    forWho: "プログラム未経験・業務アイデアを形にしたい方",
    summary:
      "コードファイルを持たず、AI に文章や表、簡単な手順書を出してもらう段階。試作の言葉遣いが固まってからツールに進むと迷子になりにくいです。",
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
        mem: "「検索＋要約」とざっくり覚えて OK です。",
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

/** 検索ヒット：スタック1件＋ツール表1行＋基本ルール1件＋落とし穴1件＋用語1件を各1単位 */
export const GUIDE_ITEM_TOTAL =
  VIBE_IDEAL_STACKS.length +
  VIBE_TOOL_COMBO_TABLE.rows.length +
  VIBE_BASIC_RULES.length +
  VIBE_GUIDE_PITFALLS.terms.length +
  GLOSSARY_BY_GENRE.reduce((n, g) => n + g.terms.length, 0);

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
  const total = GUIDE_ITEM_TOTAL;
  const q = searchQuery.trim().toLowerCase();
  if (!q) {
    return {
      stacks: VIBE_IDEAL_STACKS,
      toolTable: VIBE_TOOL_COMBO_TABLE,
      basicRules: VIBE_BASIC_RULES,
      pitfalls: VIBE_GUIDE_PITFALLS,
      glossary: GLOSSARY_BY_GENRE,
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

  const matchCount =
    stacks.length +
    toolRows.length +
    basicRules.length +
    pitfalls.terms.length +
    glossary.reduce((n, g) => n + g.terms.length, 0);

  return {
    stacks,
    toolTable: { ...VIBE_TOOL_COMBO_TABLE, rows: toolRows },
    basicRules,
    pitfalls,
    glossary,
    matchCount,
    total,
  };
}
