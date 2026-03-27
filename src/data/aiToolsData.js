/**
 * AI開発ツール ブログ記事データ
 * 各ツールを記事として構成
 *
 * 任意フィールド（画像は権利クリア済みのものだけ public/ に配置）:
 *   coverImage: { src: "articles/…" | "https://…", alt, caption? }
 *   figures: [{ src, alt, caption?, afterParagraph: 0 始まりの段落索引の直後 }]
 *   tables: [{ afterParagraph, caption?, headers: string[], rows: string[][] }] — 先頭列は行見出し（th）
 *   primarySources: [{ title, url, site?, note? }] — 元報道・公式ドキュメント（2次整理サイトとして必須に近い）
 */

export const ARTICLES = [
  // ── 特集記事 ──
  {
    id: "overview-2026-spring",
    type: "feature",
    category: "special",
    title: "【2026年3月28日更新】AI開発ツール最新動向 — Claude 1M GA・ChatGPTショッピング刷新・Gemini Flash-Lite・メモリ移行競争",
    excerpt: "Claude 1M コンテキスト GA（追加料金なし）、ChatGPT ショッピング Instant Checkout 廃止、Gemini 3.1 Flash-Lite プレビュー、Claude メモリインポート — 3月後半も AI 各社の動きが続く。",
    body: [
      "2026年3月、AI開発ツール市場に大きな変動が相次ぎました。モデル層では Google が Gemini 3.1 Pro を発表し、OpenAI は GPT-5.4 で推論・コーディング・エージェント機能を統合。ツール層ではサブエージェント・並列実行・安全性がキーワードです。あわせて Isara など「大量の AI エージェントを協調させる」スタートアップへの大型資金調達・出資が報じられ、エージェント基盤への投資熱が目立ちました（別稿）。日本では総務省・経産省の「AI事業者ガイドライン」改定案で AI エージェントとフィジカル AI の扱いが強化される方向が報じられ、ガバナンス面でもエージェント時代の設計が話題になっています（別稿）。",
      "Google DeepMind は3月26日に Gemini 3.1 Pro をプレビュー公開しました。ARC-AGI-2 スコア77.1%と前世代の倍以上の推論性能を達成し、1Mトークンコンテキストで大規模リポジトリの一括解析に対応します。価格は入力$2/出力$18（100万トークンあたり）で据え置きです。",
      "OpenAI は3月5日に GPT-5.4 をリリース。GPT-5.3-Codex の業界トップクラスのコーディング性能と GPT-5.2 の推論力を統合した「ワンモデル」アプローチで、エージェントワークフロー全体をカバーします。Codex にはプラグイン機能やマルチエージェントワークフローも追加されました。",
      "AnthropicはClaude Codeに権限の「Auto mode」（研究プレビュー）を追加し、分類器で手元セッションの自律実行を安全側に寄せました。あわせて3月27日頃、Noah Zweben 氏により auto-fix in the cloud が発表され、Web/モバイルセッションが PR の CI 失敗やレビューコメントをクラウド上でフォローする流れが始まっています。「Channels」で Discord/Telegram からエージェントに指示が可能に。",
      "CursorはVersion 2.4で並列サブエージェントを正式導入。クラウドVM上で最大20エージェントが同時稼働し、大規模タスクの処理時間をほぼ半減。あわせて公式ドキュメントでは **Auto＋Composer プール**と**API プール**の二層、自社 **Composer 2**、および Claude・Gemini・GPT 系などフロンティアモデルの併載が整理され、IDE 上でのモデル選定が単体ベンダー比較では足りない局面がはっきりしています（別稿「Cursor のモデル戦略」）。Windsurf は3月19日にクレジット制から日次/週次クォータ制へ料金体系を全面改定し、Pro価格が$20に上昇しました。",
      "Google Gemini CLIはv0.35.0でサブエージェント強化・Plan Mode追加。Copilot Agent ModeはJetBrains正式GA。Gemini Code Assistは個人開発者向けに完全無料化されました。各社の差別化ポイントを理解し、自分のワークフローに最適なツールを選ぶ時代です。",
      "周辺レイヤーも同時に厚くなっています。MCP でツール配線を共通化し、OpenClaw のように自前ホストのエージェント・ゲートウェイを組む需要、Fish などシェルに AI プラグインを足す流れ、kubectl 向け Mico のようなドメイン特化 CLI、さらに SKILL.md・AGENTS.md・llms.txt など Markdown ベースの「エージェント用ドキュメント」がレビュー対象の第一級市民になりつつあります。生成動画では OpenAI が Sora の消費者向けアプリ・API 終了を表明した報道が注目を集め、Veo・Runway・Kling などへの併用パイプラインと、ディープフェイク対応の表記・ガバナンスが引き続き実務テーマです（別稿「Sora 終了」参照）。別稿で、Claude・Gemini・OpenAI のフロンティア三本柱の力図（配給・開発者楔・クラウド・ナラティブ）も整理しています。速報に加え、**用途軸の比較記事**（フロンティア三本柱、AI コーディング IDE 群）も随時追加する方針です（別稿【比較】）。",
    ],
    date: "2026-03-28",
    author: "AI News 編集部",
    readTime: "15分",
    tags: ["まとめ", "2026年3月", "Gemini 3.1 Pro", "GPT-5.4", "サブエージェント"],
    pinned: true,
    primarySources: [
      {
        title: "Gemini 3.1 Pro（モデル概要）",
        site: "Google DeepMind",
        url: "https://deepmind.google/models/gemini/pro/",
      },
      {
        title: "Introducing GPT-5.4",
        site: "OpenAI",
        url: "https://openai.com/index/introducing-gpt-5-4/",
      },
      {
        title: "Cursor 2.4 — Subagents, Skills, and Image Generation",
        site: "Cursor",
        url: "https://cursor.com/changelog/2-4",
      },
      {
        title: "Claude Code — Documentation",
        site: "Anthropic",
        url: "https://docs.anthropic.com/en/docs/claude-code/overview",
      },
    ],
  },
  {
    id: "ai-model-research-resources-by-angle-2026",
    type: "feature",
    category: "special",
    title:
      "【編集部資料・全公開】AIモデル進化を追うサイト — 切り口別リンク集（時系列・OSS・中国勢・Ollama・ベンチ）",
    excerpt:
      "記事執筆や選定の前に使う**調査ハブ**。時系列年表・計算量データベース・実用ベンチ比較・Hugging Face・DeepSeek/Qwen 公式・ローカル（Ollama）まで、目的別に整理。**二次ソースの横並べと一次ソースの確認**をセットで回すためのリストです。",
    body: [
      "フロンティアモデルの話は、製品名・API の model ID・発表日・ベンチ条件が数日単位で動きます。本稿は「どのサイトをどの目的で開くか」を **切り口別**に並べた **当サイト上のリソース記事**です（GitHub の `docs/AI_MODEL_EVOLUTION_RESOURCES_BY_ANGLE.md` と同内容をベースに、読みやすく再構成しています）。**最終的な事実確認は、各社の公式 changelog・モデルカード・契約書**で行ってください。",
      "使い方の目安です。**いつ何が出たか**は時系列・年表系、**今どれが速い・安い**は Artificial Analysis などの実用比較、**学習計算量や規模**は Epoch、**派生モデルとライセンス**は Hugging Face、**中国勢**は DeepSeek / Qwen / ModelScope など公式系、**手元実行**は Ollama・llama.cpp（※Ollama はモデル本体の製作者ではなく **配布・推論の接着剤**）、**ベンチの意味**は各ベンチ公式と解説記事をセット、という分割が扱いやすいです。",
      "次の **クイックガイド** と **切り口別の表** に URL を集約しました。表内の https は本文と同様にリンク化されます。リンク切れやサービス終了は利用時に各自ご確認ください。",
      "比較記事を書くときの最低限の作法もあわせておきます。**「SOTA」**と書くならベンチ名・評価日・データ分割・モデル版のいずれかを添える。**年表サイト**はストーリー整理には便利ですが、日付の確定は **一次発表**へ上乗せする。Epoch など **CC 系データ**を転載する場合は元ページのライセンス表記に従う。企業利用では中国系モデルやクラウド経路の **データ所在地・規約** も別途確認すると安全です。",
      "最後に **各社公式の確認用入口** を表にまとめました。製品ブログの見出しだけ追うと「ChatGPT の表示名」と「API の model 名」がずれることがあるため、開発ドキュメント側の **model 一覧・廃止予告** も必ず見てください。",
    ],
    date: "2026-03-28",
    author: "AI News 編集部",
    readTime: "12分",
    tags: [
      "調査",
      "リソース",
      "タイムライン",
      "OSS",
      "中国モデル",
      "Ollama",
      "ベンチマーク",
    ],
    features: [
      "切り口別リンク集",
      "一次・二次の切り分け前提",
      "docs と本記事の双方向",
    ],
    tables: [
      {
        afterParagraph: 1,
        caption: "クイックガイド（やりたいこと → まず開く切り口）",
        headers: ["やりたいこと", "主に見る切り口（本記事内の表）"],
        rows: [
          ["時系列・系譜を掴む", "表: 時系列・年表"],
          ["遅延・価格・品質の横比較", "表: 実用比較"],
          ["学習規模・計算量で語る", "表: 物量・計算量"],
          ["オープンウェイト・派生", "表: OSS・コミュニティ"],
          ["中国勢（API/OSS/国内プロダクト）", "表: 中国勢"],
          ["ローカル実行・Ollama", "表: ローカル・Ollama 周辺"],
          ["画像・音声・動画・文書", "表: マルチモーダル"],
          ["推論・エージェント・ツール", "表: 推論・エージェント"],
          ["産業全体の数字", "表: マクロ統計"],
          ["ベンチの定義を読む", "表: ベンチマーク作法"],
          ["モデル名・日付の確定", "表: 各社公式 changelog"],
        ],
      },
      {
        afterParagraph: 2,
        caption: "切り口1: 時系列・系譜（ストーリー軸）",
        headers: ["リソース", "URL", "メモ"],
        rows: [
          [
            "LifeArchitect.ai — Timeline",
            "https://lifearchitect.ai/timeline/",
            "LLM 中心の長い年表。別ページに大規模モデル表。",
          ],
          [
            "Epoch AI — AI models",
            "https://epoch.ai/data/ai-models/",
            "規模・計算量など。データ利用はライセンス確認。",
          ],
          [
            "SPAITIAL — Models timeline",
            "https://spaitial.space/models/",
            "ビジュアル寄りのタイムライン。",
          ],
          [
            "AI History Project",
            "https://aihistoryproject.org/",
            "イベント年表系。二次整理として。",
          ],
        ],
      },
      {
        afterParagraph: 2,
        caption: "切り口2: 実用比較（速さ・価格・品質の並べ方）",
        headers: ["リソース", "URL", "メモ"],
        rows: [
          [
            "Artificial Analysis",
            "https://artificialanalysis.ai/",
            "API/フロンティアの実用比較でよく参照される。",
          ],
          [
            "LMSYS Chatbot Arena",
            "https://chat.lmsys.org/",
            "投票ベース。母集団・解釈に注意。",
          ],
        ],
      },
      {
        afterParagraph: 2,
        caption: "切り口3: 物量（学習計算量・データ規模）",
        headers: ["リソース", "URL", "メモ"],
        rows: [
          [
            "Epoch AI",
            "https://epoch.ai/",
            "インサイト記事（例: コンテキスト長トレンド）も。",
          ],
          [
            "各モデル技術レポート",
            "https://arxiv.org/",
            "パラメータ・トークン・FLOPs は定義ゆれあり。",
          ],
        ],
      },
      {
        afterParagraph: 2,
        caption: "切り口4: OSS・コミュニティ・派生モデル",
        headers: ["リソース", "URL", "メモ"],
        rows: [
          ["Hugging Face — Models", "https://huggingface.co/models", "权重み・派生の中心。"],
          ["Papers with Code", "https://paperswithcode.com/", "論文・実装・SOTA 対応。"],
          ["Meta — Llama ブログ", "https://ai.meta.com/blog/", "Llama 世代の公式。"],
          ["Mistral — News", "https://mistral.ai/news/", "欧州 OSS ストーリー。"],
          ["Qwen — Blog", "https://qwenlm.github.io/blog/", "Qwen2/2.5/3 系の公式。"],
        ],
      },
      {
        afterParagraph: 2,
        caption: "切り口5: 中国勢（API・OSS・国内プロダクト混在）",
        headers: ["リソース", "URL", "メモ"],
        rows: [
          ["DeepSeek API Docs", "https://api-docs.deepseek.com/", "価格・ニュース欄。"],
          ["Qwen Blog", "https://qwenlm.github.io/blog/", "多言語・Coder/Math 枝。"],
          ["ModelScope", "https://modelscope.cn/", "国内ホスティング。アクセス環境に注意。"],
          ["MoonshotAI — GitHub", "https://github.com/MoonshotAI", "Kimi 系はリポジトリで追いやすい。"],
          ["Z.AI 開発者 docs", "https://docs.z.ai/", "智谱 GLM 系リリースノート。"],
          ["ByteDance Seed Blog", "https://seed.bytedance.com/en/blog", "Seed / 豆包 系。"],
        ],
      },
      {
        afterParagraph: 2,
        caption: "切り口6: ローカル実行・Ollama 周辺（配布と本体は別軸）",
        headers: ["リソース", "URL", "メモ"],
        rows: [
          ["Ollama — Library", "https://ollama.com/library", "ランタイム＋パッケージ。API最新版と不一致の場合あり。"],
          ["llama.cpp", "https://github.com/ggerganov/llama.cpp", "ローカル推論の実装のひとつ。"],
          ["vLLM", "https://github.com/vllm-project/vllm", "スループット・サーバ用途。"],
          ["LM Studio", "https://lmstudio.ai/", "GUI でのローカル利用。"],
          ["MLX", "https://github.com/ml-explore/mlx", "Apple Silicon 向け最適化。"],
        ],
      },
      {
        afterParagraph: 2,
        caption: "切り口7: マルチモーダル（画像・音声・動画・文書）",
        headers: ["リソース", "URL", "メモ"],
        rows: [
          ["Gemini API Docs", "https://ai.google.dev/gemini-api/docs", "入力モダリティはモデルで差。"],
          ["OpenAI Platform Docs", "https://platform.openai.com/docs", "Vision/Audio 等はモデル別。"],
          ["Papers with Code — SOTA", "https://paperswithcode.com/sota", "タスク別指標。"],
        ],
      },
      {
        afterParagraph: 2,
        caption: "切り口8: 推論特化・エージェント・ツール",
        headers: ["リソース", "URL", "メモ"],
        rows: [
          ["OpenAI Cookbook", "https://cookbook.openai.com/", "関数呼び出し等のパターン。"],
          ["Anthropic API Docs", "https://docs.anthropic.com/", "ツール・プロンプト設計。"],
          ["Qwen-Agent", "https://github.com/QwenLM/Qwen-Agent", "オープン系エージェント例。"],
        ],
      },
      {
        afterParagraph: 2,
        caption: "切り口9: 産業・政策（マクロ）",
        headers: ["リソース", "URL", "メモ"],
        rows: [
          ["Stanford AI Index", "https://aiindex.stanford.edu/", "年次レポート。個別モデルより俯瞰。"],
        ],
      },
      {
        afterParagraph: 2,
        caption: "切り口10: ベンチマークを読むときの作法",
        headers: ["リソース", "URL", "メモ"],
        rows: [
          ["各ベンチ公式", "（タスク名で検索）", "MMLU / HumanEval / SWE-bench 等は条件が命。"],
          ["Epoch / Artificial Analysis", "https://epoch.ai/", "上記の表とあわせメソッド説明を読む。"],
        ],
      },
      {
        afterParagraph: 4,
        caption: "切り口11: 各社公式 changelog・確認用入口（一次ソース優先）",
        headers: ["組織", "参照先（例）"],
        rows: [
          [
            "OpenAI（モデルリリースノート）",
            "https://help.openai.com/en/articles/9624314-model-release-notes",
          ],
          ["OpenAI（ニュース）", "https://openai.com/news/"],
          ["Anthropic", "https://www.anthropic.com/news"],
          ["Google Gemini", "https://ai.google.dev/gemini-api/docs/changelog"],
          ["Meta", "https://ai.meta.com/blog/"],
          ["Mistral", "https://mistral.ai/news/"],
          ["DeepSeek", "https://api-docs.deepseek.com/"],
          ["Alibaba Qwen", "https://qwenlm.github.io/blog/"],
        ],
      },
    ],
    primarySources: [
      {
        title: "Epoch AI — Data on AI models",
        site: "Epoch AI",
        url: "https://epoch.ai/data/ai-models/",
      },
      {
        title: "LifeArchitect.ai — Timeline of AI and language models",
        site: "LifeArchitect.ai",
        url: "https://lifearchitect.ai/timeline/",
      },
      {
        title: "Artificial Analysis",
        site: "Artificial Analysis",
        url: "https://artificialanalysis.ai/",
      },
      {
        title: "LMSYS — Chatbot Arena",
        site: "LMSYS",
        url: "https://chat.lmsys.org/",
      },
      {
        title: "Stanford HAI — AI Index",
        site: "Stanford University",
        url: "https://aiindex.stanford.edu/",
      },
      {
        title: "OpenAI Help Center — Model release notes",
        site: "OpenAI",
        url: "https://help.openai.com/en/articles/9624314-model-release-notes",
        note: "記事執筆時点の URL。リダイレクトに注意。",
      },
    ],
  },
  {
    id: "anthropic-mythos-leak",
    type: "feature",
    category: "model",
    title: "Anthropic「Mythos」草稿漏えい報道 — Opus 超えの新ティア「Capybara」が注目集める",
    excerpt:
      "Fortune や DNyuz ほかが報じた未公開アクセス問題。草稿に内部コードネーム「Mythos」「Capybara」が登場し、現行 Opus を上回る試作モデルとの見方が共有された。Anthropic は「ステップチェンジ級」の限定試験を認めつつ、段階的展開と安全側の姿勢を強調。",
    body: [
      "2026年3月下旬、Fortune や DNyuz など複数メディアが、Anthropic 周辺の未公開コンテンツに対する意図しないアクセスを報じました。報道の焦点のひとつは、社内で「Claude Mythos」と呼ばれ、別の内部名として「Capybara」という語も登場したとされる尚未公開モデルの存在です。いずれも公式の製品名や最終ティア名ではない可能性が高く、あくまでリーク文脈・報道上の呼称として理解する必要があります。",
      "報道の整理では、公開ストレージや配信設定の不備により、本来は限定された利用者向けの素材や草稿が、しばらくの間外部から参照可能な状態になっていた事例があったとされます。Anthropic は状況を確認したうえでアクセス制限を行った旨が伝えられています。クラウド時代の企業にとって、オブジェクトストレージの ACL・署名付き URL・バケットポリシー・CI の公開先など、「公開」の意味を二重三重に確かめる運用が再び教訓として浮上しました。",
      "Anthropic は、能力においてステップチェンジ級の挙動を示すクラスのモデルを、限定された顧客環境で試験していることを認めるコメントを出した、と報じられています。一般提供には時間をかけ、安全評価とガバナンスを踏まえた段階的なアプローチを取るというメッセージも繰り返し紹介されています。フロンティアモデル競争が続く中、「より強いモデルは存在するが、表に出す前の試験段階」という語り口は、投資家・開発者コミュニティ双方の期待を煽りやすい題材です。",
      "漏えいした草稿に含まれるベンチマーク比較や社内スコアについて、報道はソフトウェア工学・学術推論・サイバーセキュリティ関連の領域で現行 Opus 4.6 を上回る数値や記述があったと伝えています。ただしリーク文書上の数字は再現実験や第三者監査がなく信用断定できないため、モデル選定や契約判断の根拠にはせず、正式リリース時の公式ベンチと利用規約に依存するのが実務的です。",
      "草稿の文脈では、高性能モデルの悪用・誤用リスクにも言及があったとする整理があります。強力な推論と長いコンテキストを持つシステムは、合法的な研究支援と、灰色〜違法な用途の両方に転用され得るため、防衛・安全保障・輸出統制といった議論へすばやく接続されやすいのが現状です。各国の規制・政策議論が並走する場面では、事実（公式発表）と憶測（リークの断片）を混同しないことがメディア受け手側の責務でもあります。",
      "競合環境の観点では、OpenAI や Google をはじめトップティア各社が、まだ表に出していないチェックポイントを抱えているとの見立ては以前からあり、今回の報道はその水面下の熱量を可視化したに過ぎない、という冷静な分析も出ています。開発組織にとって重要なのは、自社プロダクトに実際に組み込めるモデル ID・SLA・コンテキスト長・ツール制約であり、噂のコードネームよりドキュメントと契約です。",
      "インシデント対応の観点では、Anthropic がアクセス制限と事実関係の確認を速やかに行ったかどうか、侵害の範囲（どのアセットが何人にどの程度見えたか）が今後の開示で明らかになるかに注目が集まります。大規模 AI 企業はセキュリティ・信頼性・透明性を規制当局と顧客に説明するプレッシャーが高く、類似事案は今後も投資・パートナー DD の質問表に載りやすいでしょう。",
      "本稿は公開報道に基づく要約と文脈整理であり、内部文書の原文検証や Anthropic の正式な製品ロードマップの代替にはなりません。モデル名・性能・提供時期・価格は、必ず Anthropic の公式アナウンス、API ドキュメント、および契約書を優先して確認してください。リーク断片を根拠にした過度な決定（調達・セキュリティ方針の急転換など）は避け、一次情報が揃うまで様子を見るのが無難です。",
    ],
    date: "2026-03-27",
    author: "AI News 編集部",
    readTime: "11分",
    tags: ["Anthropic", "Claude", "モデル", "Mythos", "Capybara", "セキュリティ", "業界動向", "リーク"],
    features: [
      "公開報道ベース",
      "コードネームと製品名の区別",
      "ストレージ設定の教訓",
      "フロンティアモデル競争",
      "コンプライアンス視点",
    ],
    primarySources: [
      {
        title:
          "Anthropic is testing 'Mythos' its 'most powerful AI model ever developed' — after data leak",
        site: "Fortune",
        url: "https://fortune.com/2026/03/26/anthropic-says-testing-mythos-powerful-new-ai-model-after-data-leak-reveals-its-existence-step-change-in-capabilities/",
      },
      {
        title:
          "Anthropic acknowledges testing new AI model representing ‘step change’ in capabilities, after accidental data leak",
        site: "DNyuz",
        url: "https://dnyuz.com/2026/03/27/exclusive-anthropic-acknowledges-testing-new-ai-model-representing-step-change-in-capabilities-after-accidental-data-leak-reveals-its-existence/",
      },
      {
        title:
          "Anthropic left details of unreleased AI model, exclusive CEO event, in unsecured database",
        site: "Fortune",
        url: "https://fortune.com/2026/03/26/anthropic-leaked-unreleased-model-exclusive-event-security-issues-cybersecurity-unsecured-data-store/",
      },
    ],
  },
  {
    id: "frontier-triad-power-map-2026",
    type: "feature",
    category: "special",
    title: "Claude・Gemini・OpenAI の力図 — 2026年時点の棲み分けと競争軸（フロンティア三本柱）",
    excerpt:
      "モデル性能の数値勝負だけでなく、「どこに差をつけて配るか」で三社の戦略は分岐している。配給経路・開発者楔・クラウドの結びつき・規制ストーリーという四つの軸で整理する。",
    body: [
      "生成 AI のフロンティアで日常的に比較される三本柱が、OpenAI（GPT 系）、Google（Gemini）、Anthropic（Claude）です。ベンチマークは日々更新されますが、実務では「最高スコアのモデルが1個勝ち」ではなく、配給・価格・ツール・契約・規制耐性のバンドルで選ばれるようになっています。ここでは 2026 年前後の文脈で、各社の力図（どこを主戦場にしているか）を整理します。",
      "OpenAI は「消費者・プロシューマーのデフォルト」獲得に強みがあります。ChatGPT ブランドとプラグイン／エージェント的機能の積み上げ、開発者向けには Codex や API での統一フラグシップという二階建てが明瞭です。マイクロソフトとの連携により企業の Azure 貼り付き契約と相性の良いパッケージが組みやすく、「仕事の入口に最初に置かれる」占有欲を狙う構図です。リスクは、強い注目が集まるぶん規制・著作権・ブランド炎上のメディア音量が一気に跳ねやすい点です。",
      "Google（Gemini）は配給経路の広さが最大の武器です。検索・Android・Workspace・クラウドコンソール・IDE 拡張に至るまで、「すでに利用者がいる表面にモデルを差し込む」戦略が持続的です。Gemini Code Assist の無料枠や Gemini CLI、Vertex 上のエンタープライズ課金といったレイヤー分けで、個人から法人までスライドサイドできます。一方で、部門ごとに SKU とポリシーが増えやすく、担当者が「結局どの経路でどのモデルか」を把握するコストが利用者側に載りがちです。",
      "Anthropic（Claude）は安全保障・エンタープライズ志向のブランドと、長文・コード・エージェント（Claude Code）での楔が前面に出やすい構図です。API と Team／Enterprise の設計、権限モードや分類器など「自律実行と制御」の製品ストーリーが強調され、規制産業や高度なソフトウェア組織との相性を訴求します。AWS Bedrock などマルチクラウド経由の取引も相まって、特定ハイパースケーラーに一本化されない導入形態を選びたい顧客にも寄ります。",
      "競争が同質化しつつある領域は、(1) コーディングエージェント (2) 超大コンテキスト (3) マルチモーダル入力です。差別化はしばしば数点ではなく、信頼（SLA・データ取り扱い・アクセス境界）とワークフロー統合（IDE / CI / MCP）に移っています。",
      "力図を読むための四つの軸として整理すると実務的です。(1) 配給 — 検索・OS・SaaS・販売チャネル、(2) 開発者楔 — CLI・拡張・自作エージェント、(3) クラウド・契約 — 直契約かプラットフォーム経由か、(4) ナラティブ — 安全・速度・コスト・オープンさのどれを前面に出すか。採用チームは四項目それぞれで自社の正味のロックインと出口戦略を確認するとよいです。",
      "マルチモデル運用は「三社から最強だけ取る」より、タスク別にモデルとツールを分け、評価とガバナンスを一元化する方向に進みます。単一ベンダー依存の緩和、規制領域でのデータ所在地、障害時のフェイルオーバー設計が、スコア表より契約レビューで決まる局面が増えています。",
      "本稿は戦略整理と学習用の地図であり、投資判断・調達の唯一の根拠にはしません。料金・提供モデル ID・データポリシーは各社の公式ドキュメントと契約書を優先し、公開ベンチは再現手順が示されているものだけを重み付けしてください。",
    ],
    date: "2026-03-28",
    author: "AI News 編集部",
    readTime: "10分",
    tags: ["OpenAI", "Google", "Gemini", "Anthropic", "Claude", "戦略", "競争"],
    features: ["配給経路", "開発者楔", "クラウド契約", "エンタープライズ", "マルチモデル"],
    primarySources: [
      { title: "OpenAI", site: "OpenAI", url: "https://openai.com/" },
      {
        title: "Gemini（Google DeepMind）",
        site: "Google DeepMind",
        url: "https://deepmind.google/technologies/gemini/",
      },
      { title: "Anthropic", site: "Anthropic", url: "https://www.anthropic.com/" },
      { title: "OpenAI API documentation", site: "OpenAI", url: "https://platform.openai.com/docs/overview" },
      {
        title: "Gemini API documentation",
        site: "Google AI for Developers",
        url: "https://ai.google.dev/gemini-api/docs",
      },
    ],
  },
  {
    id: "apple-google-siri-gemini-2026",
    type: "feature",
    category: "voice",
    title: "Siri×外部 AI — Gemini 中核に加え、ChatGPT・Claude など複数アシスタント統合の報道（2026年3月）",
    excerpt:
      "1月の Apple–Google 多年度提携（Gemini）に続き、3月下旬の報道では「Siri を複数のサードパーティ AI に開く Extensions」構想が取り上げられている。Gemini に加え ChatGPT・Claude など利用者が切り替え／併用できる、との整理。いずれも WWDC 前の非公式情報が混じるため公式発表待ち。",
    body: [
      "2026年1月12日頃、Apple と Google（Alphabet）は、Apple 製品の AI 強化で Gemini 系モデルを活用する複数年期の協力を発表したと、ロイター・CNBC・Ars Technica などが報じました。「より会話的な Siri / Apple Intelligence」の中核の一片を Gemini で補う、という理解が主流です。",
      "2026年3月26〜27日頃には別ルートの報道が相次ぎ、Siri を「Extensions」的に拡張し、複数のサードパーティ AI チャットアプリやサービスと接続する構想が取り上げられています。要約すると、(1) Google Gemini（前述の提携ゾーン）、(2) 既に利用可能な OpenAI ChatGPT 連携を拡張、(3) Anthropic Claude をはじめとする他社アプリ／モデル — のように、利用者が文脈や設定に応じて切り替えられる多プロバイダに近づく、という見立てです。",
      "これは「3社フロンティアを全部まとめて一本化」というより、Siri をハブにして背後の推論エンジンを選択可能にするイメージに近い、と読む報道やコメントがあります。同一画面で三社を無差別に使えるか、デフォルト、課金などの詳細は 2026年6月の WWDC 前後の公式説明まで確定しません。現時点はリーク・業界筋・推測が混ざった記事として扱うのが安全です。",
      "ユーザー関心が集まるのはプライバシーとデータ経路です。プロバイダが増えるほど、「どのクエリがどの企業のサーバに行くか」の説明責任が重くなります。医療・金融・児童・企業 MDM では、OS のプライバシーラベルだけでなく各社のエンタープライズ規約の再確認が必要になります。",
      "産業地図では、Apple が単一モデルに賭けず「配給のハブ」を強化する方向は、DMA 下で代替デジタル助手の取り込みやすさをアピールする戦略とも整合します。Google は Gemini の出荷面、OpenAI は ChatGPT ブランド継続、Anthropic は Claude のリーチ拡大 — それぞれにメリットが読れる一方、収益配分・アクティベーション率・障害時のフォールバックは競合調整の継続課題です。",
      "WWDC 2026 の Keynote / Session が確定情報の起点です。本稿は公開報道のタイムライン整理であり、SDK・プラガブル性・審査ガイドラインの詳細は Apple の開発者向けドキュメントを優先してください。報道の原文は下記「元記事・一次情報」を参照してください。",
    ],
    primarySources: [
      {
        title: "Google and Apple enter into multi-year AI deal on Gemini models",
        site: "Reuters",
        url: "https://www.reuters.com/business/google-apple-enter-into-multi-year-ai-deal-gemini-models-2026-01-12",
      },
      {
        title: "Apple says its new AI-powered Siri will use Google’s Gemini language models",
        site: "Ars Technica",
        url: "https://arstechnica.com/apple/2026/01/apple-says-its-new-ai-powered-siri-will-use-googles-gemini-language-models/",
      },
      {
        title:
          "iOS 27: Apple will reportedly let Claude and other AI chatbot apps integrate with Siri",
        site: "9to5Mac",
        url: "https://9to5mac.com/2026/03/26/ios-27-apple-will-reportedly-let-claude-and-other-ai-chatbot-apps-integrate-with-siri/",
      },
      {
        title:
          "Apple iOS 27 open Siri to Gemini, Claude & more via extension: How will it work?",
        site: "Business Standard",
        url: "https://www.business-standard.com/technology/tech-news/apple-ios-27-open-siri-gemini-claude-more-extension-how-will-it-work-126032700337_1.html",
      },
    ],
    date: "2026-03-28",
    author: "AI News 編集部",
    readTime: "9分",
    tags: [
      "Apple",
      "Siri",
      "Gemini",
      "Google",
      "ChatGPT",
      "Claude",
      "Anthropic",
      "OpenAI",
      "Apple Intelligence",
    ],
    features: [
      "多年度提携（Gemini）",
      "Extensions 報道",
      "マルチプロバイダ",
      "WWDC 待ち",
      "DMA文脈",
    ],
  },
  // ── 新着ニュース ──
  {
    id: "claude-code-auto-mode",
    type: "review",
    category: "cli",
    title: "Claude Code「Auto mode」— 権限プロンプトを減らす分類器モード（auto）",
    excerpt: "2026-03-24 発表の研究プレビュー。ドキュメント・設定では Auto mode / permission-mode auto。宣材によっては Auto fix と併記。別機能の PR 向け「auto-fix in the cloud」（3/27 発表）は別記事で解説。",
    body: [
      "ここで扱うのは CLI／デスクトップ上の権限モードです。2026年3月27日に発表された「auto-fix in the cloud」（PR の CI・レビューをクラウドで自動フォロー）は別機能なので混同しないでください。",
      "Anthropic は 2026年3月24日、Claude Code の権限オート承認を研究プレビューとして公表しました。ブログ・Engineering では「Auto mode」、一部宣材では「Auto fix」とオレンジ表記が出ます。実装・設定では `permission-mode auto`（`auto`）です。",
      "`--dangerously-skip-permissions` のように確認をゼロにするのではなく、各ツール実行前に別の分類器が安全性を見ることで、長時間タスクの割り込みプロンプトを減らすのが目的です。Engineering 投稿では、ツール出力側のプロンプトインジェクション疑いの検知と、実行直前のトランスクリプト評価（分類器は Claude Sonnet 4.6）の二層構成として説明されています。",
      "利用条件は公式ドキュメントに従います。例: Claude Team（管理者が Claude Code 設定で有効化）、Sonnet 4.6 / Opus 4.6、CLI では `--enable-auto-mode` を付けたうえで Shift+Tab から `default` → `acceptEdits` → `plan` → `auto` を循環、または `claude --permission-mode auto`。Enterprise / API への展開は「数日」との案内があります。",
      "混同しやすい点: UI の「Auto accept edits」は権限モード `acceptEdits` で、`auto`（Auto mode）とは別物です。",
      "同時期の関連: Claude Code Channels、Bare Mode、Analytics API、および auto-fix in the cloud（PR 自動フォロー）です。",
    ],
    date: "2026-03-27",
    author: "AI News 編集部",
    readTime: "6分",
    rating: 5,
    company: "Anthropic",
    pricing: "Pro $25/月〜 / Auto mode は Team 等（公式）",
    model: "Opus 4.6 / Sonnet 4.6（分類器は Sonnet 4.6）",
    tags: ["CLI", "Anthropic", "Auto mode", "権限", "速報"],
    features: ["研究プレビュー", "分類器", "二層防御", "--enable-auto-mode", "Team条件"],
    primarySources: [
      {
        title: "Claude Code — Documentation（概要・権限）",
        site: "Anthropic",
        url: "https://docs.anthropic.com/en/docs/claude-code/overview",
      },
      {
        title: "Anthropic — News & announcements",
        site: "Anthropic",
        url: "https://www.anthropic.com/news",
      },
    ],
  },
  // ── 新着ニュース ──
  {
    id: "claude-code-autofix-cloud",
    type: "review",
    category: "cli",
    title: "Claude Code「auto-fix in the cloud」— CI 失敗と PR コメントをクラウドで自動対応",
    excerpt: "2026-03-27、PM の Noah Zweben 氏が発表。Web/モバイルセッションが PR をリモートでフォローし green 化を目指す。GitHub Actions では anthropics/claude-code-action の ci-failure ワークフロー例あり。",
    body: [
      "2026年3月27日、Claude Code のプロダクトマネージャー Noah Zweben 氏が X（旧 Twitter）で「Claude Code auto-fix — in the cloud」を発表した、と複数メディアが伝えています。要旨は、Web / Mobile の Claude Code セッションがプルリクエストを自動でフォローし、CI の失敗の解析・修正の push、レビューコメントへの対応などを、ローカル PC が閉じた状態でもクラウド側で続行できるようにする、というものです。一次ソースは当該投稿・公式の追随ドキュメントを参照してください。",
      "開発体験としては「PR を出したあと CI が落ちるたびに PC を開き直してログを読む」という往復を減らし、離席中に修正と再実行のサイクルを任せる方向性です。権限モードの Auto mode（`auto`）は手元セッションのツール承認挙動の話であり、名称が似ていても問題ドメインが異なります。",
      "GitHub Actions 連携では `anthropics/claude-code-action` に ci-failure ワークフロー例が追加される予定とされており、CI 失敗時に自動的に Claude Code がエラーログを読んで修正 commit を push する流れが想定されています。企業ユーザーには「開発者が離席中も PR が自律的に前進する」体験を提供する狙いがあります。",
      "現時点ではプレビュー段階であり、利用条件・料金・対応リポジトリ管理ツールの詳細は公式ドキュメントを確認してください。Auto mode（CLI 権限制御）との混同を避けるため、Anthropic は今後ドキュメントで名称を整理する方針です。",
    ],
    date: "2026-03-27",
    author: "AI News 編集部",
    readTime: "5分",
    rating: 5,
    company: "Anthropic",
    pricing: "Pro $25/月〜（公式）",
    model: "Claude Opus 4.6 / Sonnet 4.6",
    tags: ["CLI", "Anthropic", "auto-fix", "クラウド", "CI/CD", "速報"],
    features: ["クラウド自動修正", "PR フォロー", "CI 失敗対応", "GitHub Actions 連携"],
    primarySources: [
      {
        title: "Claude Code — Documentation",
        site: "Anthropic",
        url: "https://docs.anthropic.com/en/docs/claude-code/overview",
      },
      {
        title: "Anthropic — News & announcements",
        site: "Anthropic",
        url: "https://www.anthropic.com/news",
      },
    ],
  },
  {
    id: "claude-1m-context-ga-2026",
    type: "news",
    category: "model",
    title: "Claude Opus 4.6 / Sonnet 4.6 の 100 万トークンコンテキストが GA — 追加料金なし",
    excerpt: "2026年3月13日、Anthropic が 1M トークンコンテキストを正式 GA。標準料金（Opus 4.6: $5/$25、Sonnet 4.6: $3/$15 per 1M tokens）が 100 万トークン超でも同レートで適用。Claude Platform・Bedrock・Vertex AI・Azure Foundry で即日利用可。",
    body: [
      "Anthropic は2026年3月13日、Claude Opus 4.6 と Claude Sonnet 4.6 の 100 万トークンコンテキストウィンドウを正式 GA（一般提供）しました。これまでは 200K トークン超の利用にプレミアム料金が設定されていましたが、今回の変更でその追加課金が撤廃されました。",
      "料金体系は Opus 4.6 が入力 $5・出力 $25、Sonnet 4.6 が入力 $3・出力 $15（いずれも 100 万トークン当たり）で、900K トークンの長大なリクエストも 9K トークンの通常リクエストと同一レートで課金されます。",
      "100 万トークンは約 75 万語、長編小説 10 冊分に相当します。長大なコードリポジトリ全体を一括解析したり、大量のドキュメントを横断検索するユースケースが実用的なコストで実現できるようになります。長文コンテキスト検索ベンチマーク MRCR v2 では Opus 4.6 が 1M トークン時点で 78.3% を記録し、同コンテキスト長のフロンティアモデル最高スコアとなっています。",
      "対応プラットフォームは Claude Platform（claude.com）・Amazon Bedrock・Google Cloud Vertex AI・Microsoft Azure Foundry。200K 超のリクエストも特別なヘッダ不要で自動的に対応します。Claude Code 利用者にとっては大規模リポジトリのワンショット解析が現実的な選択肢となりました。",
    ],
    date: "2026-03-13",
    author: "AI News 編集部",
    readTime: "6分",
    tags: ["Anthropic", "Claude", "コンテキスト", "1Mトークン", "料金改定", "速報"],
    primarySources: [
      {
        title: "1M context is now generally available for Opus 4.6 and Sonnet 4.6",
        site: "Anthropic (claude.com)",
        url: "https://claude.com/blog/1m-context-ga",
      },
      {
        title: "Claude API Pricing",
        site: "Anthropic",
        url: "https://platform.claude.com/docs/en/about-claude/pricing",
      },
    ],
  },
  {
    id: "claude-memory-import-2026",
    type: "news",
    category: "product",
    title: "Claude がメモリのインポートに対応 — ChatGPT・Gemini・Grok からの移行を簡素化",
    excerpt: "2026年3月初旬、Anthropic が claude.com/import-memory を公開。ChatGPT・Gemini・Copilot・Grok などから保存済みメモリをコピー＆ペーストで Claude に移行できる。メモリ機能自体は全 Claude ユーザーへ順次展開中。",
    body: [
      "Anthropic は2026年3月2日前後、Claude のメモリインポートツールを公開しました。`claude.com/import-memory` にアクセスし、提供されるプロンプトを現在利用中の AI アシスタント（ChatGPT・Gemini・Copilot・Grok など）に貼り付けると、そのアシスタントが保存しているユーザーのメモリをテキスト形式で出力します。それを Claude のメモリ設定に貼り付けるだけで移行が完了します。API トークンも、ファイルエクスポートも不要な二ステップの設計です。",
      "メモリ機能本体は Max プランから先行公開され、Pro プランへ順次展開中です。インポートしたメモリは日次合成サイクルで処理されるため、反映まで最大 24 時間かかる場合があります。機能は実験的ステータスです。",
      "競合の動きも速く、Google は2026年3月27日に Gemini 側からも ChatGPT・Claude のチャット履歴とメモリをインポートするツールを公開しました。AI プロバイダー間のデータポータビリティ競争が本格化した形です。Claude 側では ChatGPT から 700,000 ユーザーが移行したとの報告も（中国メディア等の報道ベース、未確認）あり、移行ツールが契約変更の心理的ハードルを下げる効果を持ち始めています。",
      "プライバシー面では、インポートするメモリの内容をユーザー自身が目視確認したうえで貼り付ける設計のため、意図しない情報が Claude に渡るリスクは低いと言えます。ただし、インポート先の Claude メモリはサブスクリプション終了時にどう扱われるか、データ保持ポリシーと合わせて確認することを推奨します。",
    ],
    date: "2026-03-03",
    author: "AI News 編集部",
    readTime: "5分",
    tags: ["Anthropic", "Claude", "メモリ", "データ移行", "ChatGPT", "Gemini"],
    primarySources: [
      {
        title: "Claude Memory Import — claude.com/import-memory",
        site: "Anthropic",
        url: "https://claude.com/import-memory",
      },
      {
        title: "Anthropic Adds Free Memory Feature and Import Tool to Lure ChatGPT Users to Claude",
        site: "MacRumors",
        url: "https://www.macrumors.com/2026/03/02/anthropic-memory-import-tool/",
      },
      {
        title: "Google Gemini Now Imports Chats and Memory from ChatGPT, Claude",
        site: "WinBuzzer",
        url: "https://winbuzzer.com/2026/03/27/google-gemini-imports-chats-memory-chatgpt-claude-xcxwbn/",
      },
    ],
  },
  {
    id: "gemini-31-flash-lite-2026",
    type: "news",
    category: "model",
    title: "Google、Gemini 3.1 Flash-Lite をプレビュー公開 — 2.5× 高速・低コストの大量処理向けモデル",
    excerpt: "2026年3月4日、Google DeepMind が Demis Hassabis 氏発表で Gemini 3.1 Flash-Lite をプレビュー公開。入力 $0.25/1M・出力 $1.50/1M トークンという超低価格で 2.5 Flash 比 2.5 倍高速な Time-to-First-Token・45% 高い出力速度を実現。",
    body: [
      "Google DeepMind は2026年3月4日、Demis Hassabis CEO のアナウンスで Gemini 3.1 Flash-Lite をプレビューとして公開しました。Google AI Studio と Vertex AI の Gemini API 経由で開発者が利用できます。",
      "最大の特徴はコストと速度です。入力 $0.25・出力 $1.50（100 万トークン当たり）という価格は Gemini 3.1 Pro の 1/8 以下。Artificial Analysis ベンチマークでは前世代の Gemini 2.5 Flash 比で Time-to-First-Token が 2.5 倍高速化、出力トークン生成速度が 45% 向上しています。品質面でも同ティアモデルを上回る推論・マルチモーダル理解を達成し、Arena.ai リーダーボードで Elo 1432 を記録しています。",
      "コンテキストウィンドウは最大 100 万トークンで、テキスト・画像・音声・動画に対応します。高ボリューム・低レイテンシが求められる本番 API 組み込み、大量のドキュメント一括処理、リアルタイムチャット補助といったユースケースに最適化されています。",
      "Gemini 3 シリーズは Pro（高難度タスク）・Flash（バランス）・Flash-Lite（大量処理・低コスト）の三層構造が明確になり、用途に応じたモデル選択が容易になりました。Claude Code や Cursor の外部モデル枠でも Flash-Lite が選択肢に加わる可能性があります。",
    ],
    date: "2026-03-04",
    author: "AI News 編集部",
    readTime: "5分",
    tags: ["Google", "Gemini", "Flash-Lite", "低コスト", "速度", "速報"],
    primarySources: [
      {
        title: "Gemini 3.1 Flash Lite: Our most cost-effective AI model yet",
        site: "Google DeepMind",
        url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-flash-lite/",
      },
      {
        title: "Gemini 3.1 Flash-Lite — Model Card",
        site: "Google DeepMind",
        url: "https://deepmind.google/models/model-cards/gemini-3-1-flash-lite/",
      },
    ],
  },
  {
    id: "chatgpt-shopping-revamp-2026",
    type: "news",
    category: "product",
    title: "ChatGPT ショッピング刷新 — Instant Checkout を廃止し商品発見（Product Discovery）へ軸足",
    excerpt: "2026年3月24日、OpenAI がエージェンティック・コマースを刷新。Instant Checkout は廃止し、ビジュアル商品比較・並列表示に集中。Walmart が「Sparky」アプリを ChatGPT 内に展開し、ロイヤルティプログラム連携も可能に。",
    body: [
      "OpenAI は2026年3月24日のブログ投稿で、ChatGPT のショッピング体験を全面刷新すると発表しました。当初リリースした「Instant Checkout」（ChatGPT 内で直接購入まで完結）は、Walmart との実験で ChatGPT 内購入のコンバージョン率がサイト誘導比で 3 分の 1 に留まったことを受け廃止。「商品発見（Product Discovery）」に注力する方向へ転換します。",
      "新しいショッピング体験では、商品をビジュアルカードで並べて比較し、価格・レビュー・在庫などのリアルタイム情報を一覧表示します。購入自体は各小売業者のサイトへ誘導するため、OpenAI は Agentic Commerce Protocol（ACP）を通じて小売パートナーと連携しています。Walmart・Etsy・Shopify などが参加しています。",
      "Walmart は「Sparky」ブランドの ChatGPT 内アプリを Web ブラウザ向けに公開し、iOS/Android への展開も近日予定。Walmart アカウントとのリンクやロイヤルティポイントの利用、Walmart 決済が ChatGPT 内から可能です。",
      "AI ショッピングエージェントの課題として浮き彫りになったのは「最後の一マイル（実購入）」の難しさです。ChatGPT の強みが情報収集・比較にあり、購入決断は依然ユーザー主導というパターンが多い実態が見えてきました。OpenAI は今後の課題として決済・配送トラッキング・返品のエージェント対応を挙げています。",
    ],
    date: "2026-03-24",
    author: "AI News 編集部",
    readTime: "6分",
    tags: ["OpenAI", "ChatGPT", "ショッピング", "Eコマース", "Walmart", "エージェント"],
    primarySources: [
      {
        title: "Powering Product Discovery in ChatGPT",
        site: "OpenAI",
        url: "https://openai.com/index/powering-product-discovery-in-chatgpt/",
      },
      {
        title: "OpenAI revamps shopping experience in ChatGPT after struggling with Instant Checkout",
        site: "CNBC",
        url: "https://www.cnbc.com/2026/03/24/openai-revamps-shopping-experience-in-chatgpt-after-struggling-with-instant-checkout.html",
      },
      {
        title: "Walmart brings Sparky to ChatGPT as OpenAI rethinks Instant Checkout",
        site: "Retail Dive",
        url: "https://www.retaildive.com/news/walmart-sparky-chatgpt-instant-checkout/815647/",
      },
    ],
  },
];

export const LAST_UPDATED = "2026-03-28";
export const SITE_NAME = "AI開発ツール最新情報";
export const SITE_DESCRIPTION = "Claude Code・Cursor・Windsurf・Gemini・GPT などの最新ニュースを日本語でお届け";

/** 記事の category キー → 一覧・詳細のバッジ用 */
export const CATEGORIES = {
  special: { label: "特集", color: "#d97706" },
  model: { label: "モデル・API", color: "#2563eb" },
  cli: { label: "CLI・エージェント", color: "#7c3aed" },
  editor: { label: "エディタ", color: "#0891b2" },
  data: { label: "データ・RAG", color: "#059669" },
  voice: { label: "音声", color: "#db2777" },
  vision: { label: "画像・MM", color: "#ea580c" },
  video: { label: "動画", color: "#dc2626" },
  ops: { label: "評価・運用", color: "#475569" },
  product: { label: "プロダクト", color: "#0ea5e9" },
};

/** レビュー記事の星表示（プレーン文字） */
export function renderStars(rating) {
  if (rating == null || Number.isNaN(Number(rating))) return "";
  const n = Math.round(Number(rating));
  const filled = Math.min(5, Math.max(0, n));
  return `${"★".repeat(filled)}${"☆".repeat(5 - filled)}`;
}
