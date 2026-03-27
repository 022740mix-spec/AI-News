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
  {
    "id": "overview-2026-spring",
    "type": "feature",
    "category": "special",
    "title": "【2026年3月28日更新】AI開発ツール最新動向 — ARC-AGI-3・Anthropic対ペンタゴン差止・OpenAI Astral買収・GPT-5.4 mini/nano",
    "excerpt": "ARC-AGI-3 公開（フロンティアAI 0.26%）、Anthropic のペンタゴン差止命令取得、OpenAI による Astral（uv・Ruff）買収、GPT-5.4 mini/nano リリース — 3月下旬も各社の動きが加速。",
    "body": [
      "2026年3月、AI開発ツール市場に大きな変動が相次ぎました。モデル層では Google が Gemini 3.1 Pro を発表し、OpenAI は GPT-5.4 で推論・コーディング・エージェント機能を統合し、さらに mini/nano の小型モデルを3月17日にリリース。ツール層ではサブエージェント・並列実行・安全性がキーワードです。",
      "3月25日、**ARC-AGI-3** が公開されました。ビデオゲーム風インタラクティブ環境での適応推論を問う新世代ベンチマークで、GPT-5.4・Claude Opus 4.6・Gemini 3.1 Pro を含むフロンティアモデルは0.26%（人間100%）にとどまりました。静的グリッドパズルの ARC-AGI-2 を超える「本当の推論」評価として注目されています（別稿）。",
      "Google DeepMind は3月26日に Gemini 3.1 Pro をプレビュー公開しました。ARC-AGI-2 スコア77.1%と前世代の倍以上の推論性能を達成し、1Mトークンコンテキストで大規模リポジトリの一括解析に対応します。価格は入力$2/出力$18（100万トークンあたり）で据え置きです。",
      "OpenAI は3月19日に Python 開発ツール会社 **Astral**（uv・Ruff・ty）の買収を発表しました。月間1億2,600万ダウンロードの uv を Codex チームに統合し、依存関係管理・Lint・型チェックを AI コーディングエージェントのネイティブ機能として提供する戦略です（別稿）。",
      "**Anthropic のペンタゴン訴訟**では3月26日、サンフランシスコ連邦地裁が暫定差止命令を発しました。自律兵器・大規模監視への Claude 利用を拒否したことで DoD に「サプライチェーンリスク」指定された Anthropic が、修正第一条違反の報復として司法に訴えた件で、Lin 判事が Anthropic の申請を認容しました（別稿）。",
      "AnthropicはClaude Codeに権限の「Auto mode」（研究プレビュー）を追加し、分類器で手元セッションの自律実行を安全側に寄せました。あわせて3月27日頃、Noah Zweben 氏により auto-fix in the cloud が発表され、Web/モバイルセッションが PR の CI 失敗やレビューコメントをクラウド上でフォローする流れが始まっています（別稿）。",
      "CursorはVersion 2.4で並列サブエージェントを正式導入。クラウドVM上で最大20エージェントが同時稼働し、大規模タスクの処理時間をほぼ半減。Windsurf は3月19日にクレジット制から日次/週次クォータ制へ料金体系を全面改定し、Pro価格が$20に上昇しました。",
      "周辺レイヤーも同時に厚くなっています。MCP でツール配線を共通化し、OpenClaw のように自前ホストのエージェント・ゲートウェイを組む需要、SKILL.md・AGENTS.md・llms.txt など Markdown ベースの「エージェント用ドキュメント」がレビュー対象の第一級市民になりつつあります。言語ランタイム（Python・Node・Bun など）と Astral 買収に代表されるツールチェーン、RAG の永続層としての PostgreSQL / Supabase 周りも別稿で整理しています。速報に加え、用途軸の比較記事（フロンティア三本柱、AI コーディング IDE 群）も随時追加する方針です（別稿【比較】）。"
    ],
    "date": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "15分",
    "tags": [
      "まとめ",
      "2026年3月",
      "Gemini 3.1 Pro",
      "GPT-5.4",
      "サブエージェント"
    ],
    "pinned": true,
    "primarySources": [
      {
        "title": "Gemini 3.1 Pro（モデル概要）",
        "site": "Google DeepMind",
        "url": "https://deepmind.google/models/gemini/pro/"
      },
      {
        "title": "Introducing GPT-5.4",
        "site": "OpenAI",
        "url": "https://openai.com/index/introducing-gpt-5-4/"
      },
      {
        "title": "Cursor 2.4 — Subagents, Skills, and Image Generation",
        "site": "Cursor",
        "url": "https://cursor.com/changelog/2-4"
      },
      {
        "title": "Claude Code — Documentation",
        "site": "Anthropic",
        "url": "https://docs.anthropic.com/en/docs/claude-code/overview"
      }
    ]
  },
  {
    "id": "anthropic-mythos-leak",
    "type": "feature",
    "category": "model",
    "title": "Anthropic「Mythos」草稿漏えい報道 — Opus 超えの新ティア「Capybara」が注目集める",
    "excerpt": "Fortune や DNyuz ほかが報じた未公開アクセス問題。草稿に内部コードネーム「Mythos」「Capybara」が登場し、現行 Opus を上回る試作モデルとの見方が共有された。Anthropic は「ステップチェンジ級」の限定試験を認めつつ、段階的展開と安全側の姿勢を強調。",
    "body": [
      "2026年3月下旬、Fortune や DNyuz など複数メディアが、Anthropic 周辺の未公開コンテンツに対する意図しないアクセスを報じました。報道の焦点のひとつは、社内で「Claude Mythos」と呼ばれ、別の内部名として「Capybara」という語も登場したとされる尚未公開モデルの存在です。いずれも公式の製品名や最終ティア名ではない可能性が高く、あくまでリーク文脈・報道上の呼称として理解する必要があります。",
      "報道の整理では、公開ストレージや配信設定の不備により、本来は限定された利用者向けの素材や草稿が、しばらくの間外部から参照可能な状態になっていた事例があったとされます。Anthropic は状況を確認したうえでアクセス制限を行った旨が伝えられています。クラウド時代の企業にとって、オブジェクトストレージの ACL・署名付き URL・バケットポリシー・CI の公開先など、「公開」の意味を二重三重に確かめる運用が再び教訓として浮上しました。",
      "Anthropic は、能力においてステップチェンジ級の挙動を示すクラスのモデルを、限定された顧客環境で試験していることを認めるコメントを出した、と報じられています。一般提供には時間をかけ、安全評価とガバナンスを踏まえた段階的なアプローチを取るというメッセージも繰り返し紹介されています。フロンティアモデル競争が続く中、「より強いモデルは存在するが、表に出す前の試験段階」という語り口は、投資家・開発者コミュニティ双方の期待を煽りやすい題材です。",
      "漏えいした草稿に含まれるベンチマーク比較や社内スコアについて、報道はソフトウェア工学・学術推論・サイバーセキュリティ関連の領域で現行 Opus 4.6 を上回る数値や記述があったと伝えています。ただしリーク文書上の数字は再現実験や第三者監査がなく信用断定できないため、モデル選定や契約判断の根拠にはせず、正式リリース時の公式ベンチと利用規約に依存するのが実務的です。",
      "草稿の文脈では、高性能モデルの悪用・誤用リスクにも言及があったとする整理があります。強力な推論と長いコンテキストを持つシステムは、合法的な研究支援と、灰色〜違法な用途の両方に転用され得るため、防衛・安全保障・輸出統制といった議論へすばやく接続されやすいのが現状です。各国の規制・政策議論が並走する場面では、事実（公式発表）と憶測（リークの断片）を混同しないことがメディア受け手側の責務でもあります。",
      "競合環境の観点では、OpenAI や Google をはじめトップティア各社が、まだ表に出していないチェックポイントを抱えているとの見立ては以前からあり、今回の報道はその水面下の熱量を可視化したに過ぎない、という冷静な分析も出ています。開発組織にとって重要なのは、自社プロダクトに実際に組み込めるモデル ID・SLA・コンテキスト長・ツール制約であり、噂のコードネームよりドキュメントと契約です。",
      "インシデント対応の観点では、Anthropic がアクセス制限と事実関係の確認を速やかに行ったかどうか、侵害の範囲（どのアセットが何人にどの程度見えたか）が今後の開示で明らかになるかに注目が集まります。大規模 AI 企業はセキュリティ・信頼性・透明性を規制当局と顧客に説明するプレッシャーが高く、類似事案は今後も投資・パートナー DD の質問表に載りやすいでしょう。",
      "本稿は公開報道に基づく要約と文脈整理であり、内部文書の原文検証や Anthropic の正式な製品ロードマップの代替にはなりません。モデル名・性能・提供時期・価格は、必ず Anthropic の公式アナウンス、API ドキュメント、および契約書を優先して確認してください。リーク断片を根拠にした過度な決定（調達・セキュリティ方針の急転換など）は避け、一次情報が揃うまで様子を見るのが無難です。"
    ],
    "date": "2026-03-27",
    "author": "AI News 編集部",
    "readTime": "11分",
    "tags": [
      "Anthropic",
      "Claude",
      "モデル",
      "Mythos",
      "Capybara",
      "セキュリティ",
      "業界動向",
      "リーク"
    ],
    "features": [
      "公開報道ベース",
      "コードネームと製品名の区別",
      "ストレージ設定の教訓",
      "フロンティアモデル競争",
      "コンプライアンス視点"
    ],
    "primarySources": [
      {
        "title": "Anthropic is testing 'Mythos' its 'most powerful AI model ever developed' — after data leak",
        "site": "Fortune",
        "url": "https://fortune.com/2026/03/26/anthropic-says-testing-mythos-powerful-new-ai-model-after-data-leak-reveals-its-existence-step-change-in-capabilities/"
      },
      {
        "title": "Anthropic acknowledges testing new AI model representing ‘step change’ in capabilities, after accidental data leak",
        "site": "DNyuz",
        "url": "https://dnyuz.com/2026/03/27/exclusive-anthropic-acknowledges-testing-new-ai-model-representing-step-change-in-capabilities-after-accidental-data-leak-reveals-its-existence/"
      },
      {
        "title": "Anthropic left details of unreleased AI model, exclusive CEO event, in unsecured database",
        "site": "Fortune",
        "url": "https://fortune.com/2026/03/26/anthropic-leaked-unreleased-model-exclusive-event-security-issues-cybersecurity-unsecured-data-store/"
      }
    ]
  },
  {
    "id": "openai-six-layer-context-data-agent-2026",
    "type": "feature",
    "category": "data",
    "title": "OpenAI 社内データエージェントの「6層コンテキスト」— 表・SQL・RAG・Evals まで",
    "excerpt": "公式エンジニアリング記事（2026-01-29）に基づき、社内向けデータエージェントがテーブル理解と回答品質を支える Layer #1〜#6、日次パイプラインと埋め込み、クエリ時 RAG、Evals API による評価、セキュリティまで日本語で整理。",
    "body": [
      "OpenAI は 2026年1月29日、社内専用の AI データエージェントの設計を公開しました。本稿の主題は、チャット向け File Search などの一般提供機能とは別物である **自社データプラットフォーム向けのカスタムエージェント** です。利用ツールとして Codex・GPT‑5.2・Evals API・Embeddings API が挙げられており、外部開発者向けに提供されている同一スタックで組まれている点が示されています。",
      "動機の背景には規模があります。社内データ利用者は数千人規模、データは数百 PB・データセット数万、似た名前のテーブルが大量に存在するため、「どのテーブルを使うか」の探索だけで分析が止まる、という課題が具体例として紹介されています。正しいテーブルを選んでも、多対多結合・フィルタ誤り・NULL 処理など SQL 由来の失敗モードが静かに結果を壊す、という指摘もあります。",
      "エージェントは GPT‑5.2 を核に、複数ツール・データウェアハウス・メタデータ・MCP（Slack や IDE 内 Codex CLI、社内 ChatGPT の MCP コネクタ等）に接続します。途中結果がゼロ行のときなど、**途中で方針を見直すクローズドループ**が特徴として述べられ、ユーザーへの反復負荷を下げる設計だと説明されています。",
      "高品質な回答には豊かなコンテキストが必要である、という前提のもと、公式記事では **6 つのレイヤー**が定義されています。以下、公式見出しに沿った要約です（詳細は一次情報へ）。",
      "**Layer #1: Table Usage** — カラム型やスキーマメタデータ、テーブル系譜（上流・下流）、過去のクエリ履歴から「よく一緒に結合される組み合わせ」を学習し、SQL 生成の土台にする層です。**Layer #2: Human Annotations** — ドメイン専門家によるテーブル・列の説明、ビジネス上の意図、メタデータだけでは拾えない注意点を蓄える層です。",
      "**Layer #3: Codex Enrichment** — 分析イベントやパイプラインのコードからテーブルが **どう導出されたか** を把握し、粒度・更新頻度・欠落フィールドなどコードにしか現れないニュアンスを取り込む層です。**Layer #4: Institutional Knowledge** — Slack・Google Docs・Notion などに散らばるローンチ情報・インシデント・指標定義を取り込み、権限とメタデータ付きで埋め込み、ランタイムに取得サービス経由で引けるようにする層です。",
      "**Layer #5: Memory** — ユーザー訂正や会話から得たニュアンス（例: 特定の実験ゲート文字列でフィルタする等）を保存し、次回以降の曖昧な文字列マッチより **正しい制約** に寄せる層です。グローバルと個人スコープがあり、手動編集も可能とされています。**Layer #6: Runtime Context** — メタデータが古い・無い場合にウェアハウスへライブクエリしスキーマや実データを直接確認したり、Airflow・Spark などプラットフォーム側システムに触れて文脈を広げる層です。",
      "日次のオフラインパイプラインで利用履歴・注釈・Codex 由来の拡張を正規化し、Embeddings API でベクトル化して保存。**クエリ時には全体を走査せず、RAG で関連コンテキストだけを引く**ことで、数万テーブル規模でもレイテンシを抑える、とまとめられています。",
      "品質維持には **Evals API** が使われます。自然語の質問と、期待結果を与える「ゴールデン SQL」ペアを curated セットとして用意し、生成 SQL と結果を **文字列一致だけでなく** grader に渡して採点する、というテスト／カナリア運用が紹介されています。",
      "セキュリティは既存の権限モデルを **パススルー**で継承し、ユーザーがもともと読めないテーブルはエージェント経由でも読めない、と明示されています。推論過程やクエリ結果へのリンク開示など、検証可能性にも触れています。",
      "**教訓としての 3 点**: (1) ツールを凝縮し冗長な呼び出しを減らす — **Less is More**、(2) 手順を過度に指示せずゴールを伝える — **Guide the Goal, Not the Path**、(3) 意味はスキーマより **生成コード（パイプライン）** に宿る — **Meaning Lives in Code**。本サイトの RAG 取り込み・評価・企業向けガードレールの各記事とも相互参照しやすい題材です。"
    ],
    "date": "2026-01-29",
    "author": "AI News 編集部",
    "readTime": "14分",
    "tags": [
      "OpenAI",
      "RAG",
      "データエージェント",
      "Embeddings",
      "Evals",
      "Codex",
      "社内ツール"
    ],
    "tables": [
      {
        "afterParagraph": 3,
        "caption": "6 層コンテキスト対応表（OpenAI 公式 Engineering 記事の Layer #1〜#6）",
        "headers": [
          "Layer",
          "公式名",
          "役割の要約"
        ],
        "rows": [
          [
            "#1",
            "Table Usage",
            "スキーマ・系譜・過去クエリ推論でテーブル選定と SQL の土台を作る"
          ],
          [
            "#2",
            "Human Annotations",
            "専門家注釈で意図・注意点などスキーマに無い意味を固定する"
          ],
          [
            "#3",
            "Codex Enrichment",
            "コード由来の定義で粒度・鮮度・導出ロジックを補完する"
          ],
          [
            "#4",
            "Institutional Knowledge",
            "Slack/Docs/Notion 等を権限付き取得・埋め込みし組織知を引く"
          ],
          [
            "#5",
            "Memory",
            "訂正・学びを保存し再発を防ぐ（グローバル／個人スコープ）"
          ],
          [
            "#6",
            "Runtime Context",
            "ライブクエリや DWH 外システムで不足・陳腐化を埋める"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Inside OpenAI’s in-house data agent",
        "site": "OpenAI Engineering",
        "url": "https://openai.com/index/inside-our-in-house-data-agent/"
      },
      {
        "title": "Embeddings API — Guides",
        "site": "OpenAI Platform",
        "url": "https://platform.openai.com/docs/guides/embeddings"
      },
      {
        "title": "Evals API — Guides",
        "site": "OpenAI Platform",
        "url": "https://platform.openai.com/docs/guides/evals"
      },
      {
        "title": "Retrieval-augmented generation",
        "site": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Retrieval-augmented_generation"
      },
      {
        "title": "Introducing Codex",
        "site": "OpenAI",
        "url": "https://openai.com/index/introducing-codex/"
      }
    ]
  },
  {
    "id": "rag-chunking-ingestion-2026",
    "type": "feature",
    "category": "data",
    "title": "RAG の取り込み設計 — チャンキング、親子構造、PDF／表／OCR、パイプライン監視",
    "excerpt": "ベクトル化の前段で成果が決まる。固定長だけでなく見出し・段落・構造を利用した分割、親チャンクと子チャンク、表・スキャン PDF・OCR のノイズ、メタデータとリネージ・再処理、障害検知までを実務目線で整理する。",
    "body": [
      "検索品質の上限はしばしば **チャンク境界**で決まります。トークン単位の固定窓だけでは、見出しの途中で切れたり、1 チャンクに無関係な節が混ざったりして、埋め込みの意味が薄まります。Markdown / HTML / AST から **論理ブロック**（見出し〜次見出し手前）で切る、文境界で揃える、オーバーラップを少し足す、といった設計が一般的です。",
      "**親子チャンク（階層チャンキング）** は、検索用に細かい子を持ちつつ、生成時に親の広い文脈を返すパターンです。検索ヒットは子、ユーザーへの引用表示や LLM 入力は親を結合、という二段構成にすると、再現性と文脈の両立がしやすくなります。セマンティックチャンキング（埋め込み類似度で段落をまとめる）はコストとトレードオフです。",
      "PDF はレイヤー構造の有無で難易度が跳ね上がります。テキスト抽出が貧弱なスキャン物は **OCR** 前提となり、ノイズ・改行崩れ・表の列ずれが典型的な失敗要因です。表は HTML／CSV に正規化してからチャンクする、あるいは表単位で別インデックスにする、など **ドキュメント種別ごとのパイプライン**に分けると運用が安定します。",
      "メタデータ（ソース URL、版、著者、権限ラベル、取り込み時刻、パイプライン版）は、後からの **再処理・差分更新・デバッグ**に効きます。ACL は「格納時にフィルタ」か「検索後にフィルタ」かで設計が変わり、後述の企業向け記事とセットで決めるのが無難です。",
      "本番では **監視**も必須です。取り込み件数・失敗キュー・埋め込み API のレイテンシとエラー率、空チャンク率、平均チャンク長、nDCG やヒット率の簡易メトリクスをダッシュボード化し、アラートを張ると長期運用で劣化に気づけます。"
    ],
    "date": "2026-03-10",
    "author": "AI News 編集部",
    "readTime": "10分",
    "tags": [
      "RAG",
      "チャンキング",
      "取り込み",
      "PDF",
      "OCR",
      "パイプライン"
    ],
    "primarySources": [
      {
        "title": "Text splitters — LangChain concepts",
        "site": "LangChain",
        "url": "https://python.langchain.com/docs/concepts/text_splitters/"
      },
      {
        "title": "File search — OpenAI Platform",
        "site": "OpenAI",
        "url": "https://platform.openai.com/docs/guides/tools-file-search"
      },
      {
        "title": "Retrieval-augmented generation",
        "site": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Retrieval-augmented_generation"
      }
    ]
  },
  {
    "id": "rag-evaluation-citations-2026",
    "type": "feature",
    "category": "data",
    "title": "RAG の評価と引用 — ゴールデンセット、自動指標、引用 UI、閾値ルーティング",
    "excerpt": "「それっぽい回答」と「根拠付きで正しい回答」は別問題。ゴールデン Q&A・SQL・ドキュメント_span を用意し、自動採点と人手レビュー、引用チップの UI、confidence で再検索や拒否へルーティングする実務パターンを整理。",
    "body": [
      "RAG の評価は **検索**と**生成**を分けても、結合しても設計します。検索だけならヒット率・nDCG・MRR、生成込みなら正答一致・LLM-as-judge（慎重に：バイアスとコスト）、引用スパンとの一致度、などを組み合わせます。",
      "本番品質には **ゴールデンセット**（代表質問＋期待される根拠 passages または期待 SQL／期待数値）が効きます。OpenAI のデータエージェント記事でも、自然語と「正解 SQL」のペアを eval に載せる手法が紹介されており、RAG でも同様に **根拠チャンク ID のセット**を正解ラベルにできる場合があります。",
      "**引用 UI** はユーザー信頼に直結します。インラインの番号リンク、サイドパネルでの PDF ハイライト、表のセル参照など、プロダクトの体裁に合わせて実装します。引用が空のまま高い確信度で答えるモデル振る舞いは、プロンプトとツール結果の構造（必ず sources を返させる）で抑えます。",
      "**閾値ルーティング** は、検索スコアや自己申告 confidence が低いときに、別インデックスを叩く・クエリを拡張する・ human escalation する・「分からない」と返す、へ振り分けるパターンです。誤答より **拒否**を選ぶドメイン（医療・法務・財務）では特に重要です。",
      "失敗タイプをタグ付け（検索漏れ／チャンク分割ミス／要約の捏造／ACL 越え）しておくと、週次レビューで **どこに投資すべきか**が見えます。"
    ],
    "date": "2026-03-11",
    "author": "AI News 編集部",
    "readTime": "9分",
    "tags": [
      "RAG",
      "評価",
      "引用",
      "ゴールデンセット",
      "品質"
    ],
    "primarySources": [
      {
        "title": "Evals API — Guides",
        "site": "OpenAI Platform",
        "url": "https://platform.openai.com/docs/guides/evals"
      },
      {
        "title": "Ragas documentation",
        "site": "Ragas",
        "url": "https://docs.ragas.io/"
      },
      {
        "title": "Inside OpenAI’s in-house data agent (evals section)",
        "site": "OpenAI",
        "url": "https://openai.com/index/inside-our-in-house-data-agent/"
      }
    ]
  },
  {
    "id": "rag-enterprise-acl-privacy-2026",
    "type": "feature",
    "category": "data",
    "title": "エンタープライズ RAG の ACL・PII・監査 — テナント分離とスナップショット",
    "excerpt": "「社内文書を全部ベクトル化」は最短でコンプライアンス事故を起こす。IdP とのグループ同期、コレクション／行レベル ACL、PII 検出とマスキング、削除権・スナップショット、ログの監査可能性までを整理する。",
    "body": [
      "企業 RAG の第一原則は **権限の単一路径**です。検索インデックスに入れる前に ACL をラベルとして付与するか、検索後にソースシステムで再チェックするかを決め、**昇格バグ**（権限の低いユーザーが高機密チャンクを見る）が起きないようにします。グループメンバーシップは IdP との同期遅延に注意します。",
      "**テナント分離**はインフラレベル（プロジェクト／VPC／キー空間）とアプリレベル（クエリ必須フィルタ）の多層が安全です。マルチテナント SaaS では他テナントのチャンクが混ざると即インシデントになるため、静的テスト（他テナント ID を混ぜた負荷テスト）を推奨します。",
      "**PII** は取り込み時に検出・マスキング・別ストア（トークン化）など方針を分けます。マスキングしすぎると検索に hit しなくなり、しなさすぎるとログ漏えいリスクが残ります。人事・健康情報などカテゴリ別に保持期間と利用目的を揃えると説明がしやすいです。",
      "**削除と再インデックス**（オブジェクト削除、版更新、アクセス剥奪）をどの遅延で保証するか SLA 化します。法的削除要求があるドメインでは、ベクトルストアの物理削除とメタデータの tombstone の両方を追います。",
      "**監査ログ**には「誰が・いつ・どのクエリで・どのドキュメント ID を取得したか」を残し、モデルへの入力ログとは分離して保存期限を設定します。インシデント時のスナップショット（インデックス版・ルール版）が取れると復旧が速くなります。"
    ],
    "date": "2026-03-12",
    "author": "AI News 編集部",
    "readTime": "9分",
    "tags": [
      "RAG",
      "ACL",
      "PII",
      "監査",
      "エンタープライズ",
      "セキュリティ"
    ],
    "primarySources": [
      {
        "title": "OWASP Top 10 for Large Language Model Applications",
        "site": "OWASP",
        "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
      },
      {
        "title": "AI Risk Management Framework (AI RMF 1.0)",
        "site": "NIST",
        "url": "https://www.nist.gov/itl/ai-risk-management-framework"
      },
      {
        "title": "Inside OpenAI’s in-house data agent (agent security)",
        "site": "OpenAI",
        "url": "https://openai.com/index/inside-our-in-house-data-agent/"
      }
    ]
  },
  {
    "id": "ai-dev-stacks-python-js-node-2026",
    "type": "feature",
    "category": "cli",
    "title": "AI 開発と言語ランタイムの周辺 — Python・JavaScript・Node.js・Bun のいま（2026）",
    "excerpt": "エージェントや RAG のサンプルは Python / TypeScript が中心になりがち。uv・Ruff・ty や OpenAI の Astral 買収、Node の LTS 運用、Bun・Deno、ブラウザ側 JS と SSR の分断など、周辺ニュースを実務の選び方に落とし込む。",
    "body": [
      "生成 AI アプリの**参照実装**は依然として **Python**（LLM SDK、評価notebook、データパイプライン）と **JavaScript / TypeScript**（Web UI、サーバーレス、BFF）に二分されがちです。単一リポジトリで両方を持つチームは、**どちらを「信頼の境界」に置くか**（例: 課金・権限検証は TS のみ）を先に決めると混乱が減ります。",
      "Python 側では **uv**（高速な依存解決・仮想環境・ロック）と **Ruff**（Lint / format 一体）の普及が続いています。**OpenAI による Astral 買収**は、Codex が Python リポ全体を扱うときの「標準 toolchain」が揃う、というストーリーです。型は **ty** や mypy / Pyright との住み分けをチームで固定し、CI で何をゲートにするかを README に書いておくと AI エージェントにも説明しやすいです。",
      "**Node.js** は **LTS サイクル**に合わせた本番固定が鉄板です。フレームワーク（Nest / Hono / Fastify 等）は選定理由を「観測性・型安全・デプロイ先」とセットで記録します。**Bun** はランタイム・パッケージマネージャとして速い一方、ネイティブ依存や一部の npm 互換差分はリリースノートを追う運用が必要です。**Deno** はセキュリティデフォルトと URL import 文化が残るため、既存 Node 資産との共存パターンをドキュメント化しておくとよいです。",
      "フロントの **JavaScript（ブラウザ）** はビルドツール（Vite 等）と型（TypeScript）が前提になり、**エージェント向け MCP クライアント**や **WASM 連携**の例も増えています。モノレポ（pnpm / Turborepo）では **共通パッケージのバージョン**を人間が追わないと、AI が古い import を生成し続ける罠があります。",
      "周辺の「ニュースとして追うべき」軸は、(1) ランタイムのメジャー更新とセキュリティ advisory、(2) パッケージレジストリの供給網（typosquat・メンテ状況）、(3) **SBOM と CI のキャッシュ鍵**、の三段です。言語そのものより **ツールチェーンの再現性**が AI 時代には直結します。"
    ],
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "11分",
    "tags": [
      "Python",
      "JavaScript",
      "Node.js",
      "TypeScript",
      "uv",
      "Ruff",
      "Bun",
      "エージェント",
      "ツールチェーン"
    ],
    "tables": [
      {
        "afterParagraph": 1,
        "caption": "用途別の目安（詳細は都度公式ドキュメント）",
        "headers": [
          "層",
          "向きがちな選択",
          "チェック項目"
        ],
        "rows": [
          [
            "データ・評価・バッチ",
            "Python + uv / notebook",
            "再現性、GPU/CPU、依存のロック"
          ],
          [
            "API / BFF / 認可ゲート",
            "Node または TS 系 FW",
            "LTS、JWT/OAuth 実装、レート制限"
          ],
          [
            "フロント",
            "React / 軽量 FW + Vite",
            "バンドル分割、CSP、テレメトリ"
          ],
          [
            "実験・高速スクリプト",
            "Bun / Deno",
            "ネイティブ依存の互換、デプロイ先"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Node.js — Releases",
        "site": "Node.js",
        "url": "https://nodejs.org/en/about/previous-releases"
      },
      {
        "title": "Python.org",
        "site": "Python Software Foundation",
        "url": "https://www.python.org/"
      },
      {
        "title": "uv — Astral docs",
        "site": "Astral",
        "url": "https://docs.astral.sh/uv/"
      },
      {
        "title": "Ruff",
        "site": "Astral",
        "url": "https://docs.astral.sh/ruff/"
      },
      {
        "title": "Bun",
        "site": "Oven",
        "url": "https://bun.sh/docs"
      },
      {
        "title": "Deno — Manual",
        "site": "Deno",
        "url": "https://docs.deno.com/runtime/manual"
      },
      {
        "title": "ECMAScript / TC39",
        "site": "TC39",
        "url": "https://tc39.es/"
      }
    ]
  },
  {
    "id": "ai-backend-postgres-supabase-2026",
    "type": "feature",
    "category": "data",
    "title": "AI アプリのバックエンドと DB — Postgres・pgvector・Supabase 周辺の設計",
    "excerpt": "RAG・チャット・エージェントの永続層は多くの場合がリレーショナル＋ベクトル拡張。Supabase（Postgres＋Auth＋Realtime＋Edge Functions）を軸に、RLS・接続プール・ハイブリッド検索の論点を整理する。",
    "body": [
      "生成 AI プロダクトの**永続化**は、従来の CRUD に加え **会話ログ・ツール呼び出しトレース・ベクトルインデックス・メタデータ**が増えます。単一 DB で押さえるなら **PostgreSQL** が依然として現実的な既定選択で、**pgvector** や全文検索（`tsvector`）と組み合わせた **ハイブリッド検索**（キーワード＋近傍ベクトル）が実務でよく登場します。",
      "**Supabase** はマネージド Postgres を中核に、**Auth（GoTrue 系）**・**Row Level Security** によるテナント分離・**Realtime**・**Edge Functions** を束ねた BaaS です。プロトタイプだけでなく、RAG のメタテーブルと chunk テーブルを同一クラスタに置き、**JWT クレームを RLS ポリシーに流す**パターンがドキュメント化されやすい点が強みです。接続は **プール（PgBouncer / Supavisor）** 経由か直結かで挙動差（ prepared statement・transaction mode）があるため、ORM とセットで確認します。TypeScript 層では **Prisma** と **Drizzle ORM** がよく比較されるため、選定軸は別稿で整理しています。",
      "代替・近傍として **Neon**（ブランチ型 Postgres）や **PlanetScale**（MySQL Vitess 系）なども選ばれますが、**pgvector 前提の記事・サンプル**との親和、GIS 拡張、JSONB による柔軟なメタデータ格納では Postgres 派が厚いです。マルチクラウド要件がある場合は **データ所在地・バックアップ SLA** を契約側で先に固定します。",
      "スキーマ設計では **ドキュメント ID・版・ACL ラベル・取り込み時刻・埋め込みモデル名と次元数**を行メタに持ち、削除・再埋め込みパイプラインと整合させます。エージェントが SQL を直接叩く構成では **読み取り専用ロール**と **許可リスト**でテーブルを縛り、書き込みはアプリ層経由に寄せると事故が減ります。",
      "本稿は製品比較の代替ではありません。**認証・課金・監査**は自社ポリシーと合わせ、Supabase／Postgres の公式セキュリティガイド・SOC 報告の有無を毎回確認してください。"
    ],
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "12分",
    "tags": [
      "PostgreSQL",
      "Supabase",
      "pgvector",
      "RAG",
      "バックエンド",
      "RLS",
      "データ基盤"
    ],
    "primarySources": [
      {
        "title": "Supabase — Documentation",
        "site": "Supabase",
        "url": "https://supabase.com/docs"
      },
      {
        "title": "pgvector",
        "site": "GitHub",
        "url": "https://github.com/pgvector/pgvector"
      },
      {
        "title": "PostgreSQL Documentation",
        "site": "PostgreSQL",
        "url": "https://www.postgresql.org/docs/"
      },
      {
        "title": "Neon — Serverless Postgres",
        "site": "Neon",
        "url": "https://neon.tech/docs"
      },
      {
        "title": "OWASP — LLM Applications",
        "site": "OWASP",
        "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
      }
    ]
  },
  {
    "id": "orm-drizzle-prisma-ai-backend-2026",
    "type": "feature",
    "category": "data",
    "title": "TypeScript バックエンドの ORM — Drizzle と Prisma を AI アプリ開発でどう切るか",
    "excerpt": "スキーマ駆動・マイグレーション・型安全クエリは、エージェントが SQL を組み立てる時代にも土台として残る。Prisma（Client・Schema・Migrate・Accelerate）と Drizzle（SQL に近い API・軽量ランタイム）の役割分け、サーバーレス Postgres・Supabase との相性を整理する。",
    "body": [
      "LLM が **生 SQL** や **クエリビルダ文字列**を吐くデモが増えても、本番の永続層では **スキーマ版管理・接続上限・権限**を人間側でコントロールする必要があります。**ORM** は「エージェントの出力をそのまま評価する」より、**アプリの契約（型・マイグレーション・トランザクション境界）**を固定する用途で引き続き主力です。",
      "**Prisma** は `schema.prisma` 中心のワークフローが明確で、**Prisma Client** の API が学習コストを下げ、**Prisma Migrate** でチーム開発の履歴を揃えやすいのが長所です。**Prisma Accelerate** や Data Proxy 系の接続プール／エッジ経路は、サーバーレス関数のコールドスタートと **接続スパイク**を抑えたいときに検討されます。反面、実行時クエリの細かいチューニングや「SQL にほぼ等価な追従」を求めると、 `$queryRaw` 周りの規律が必要になります。",
      "**Drizzle ORM** は TypeScript 上で **リレーショナル SQL に近い**記述と軽量クライアントを売りにし、**drizzle-kit** でマイグレーションを管理するパターンが一般的です。バンドルサイズや Edge / Worker 志向の構成と相性がよい、とされることが多く、**postgres.js** や **Neon serverless driver** などドライバ選択を明示しやすい点が実務メリットです。チーム全員が SQL に慣れているほど設計の伸びしろが出やすい一方、ガイドラインが無いとスタイルがバラける弱点もあります。",
      "AI プロダクト特有の論点は、(1) **会話ログ・ツールトレース**など巨大 JSON を `jsonb` で持つときのインデックス設計、(2) **pgvector** テーブルを ORM のスキーマに含めるか一部だけ生 SQL に逃がすか、(3) **RLS** が効いた接続ユーザーとアプリ用ロールの分離、の三点です。エージェントに「任意のマイグレーション」を任せる運用は避け、**人間レビュー必須のパイプライン**に固定するのが無難です。",
      "選定の決め手は信仰や炎上ではなく、**チームの SQL 文化・デプロイ形態（長寿命サーバ vs サーバーレス）・観測性**です。新規 PoC なら両方を小さく触り、マイグレーション速度と CI の書き方、ステージングの破壊的変更の扱いを比較するとブレが減ります。最終的なライセンス・クラウド課金・データ所在地は各公式の pricing / DPA を参照してください。"
    ],
    "date": "2026-03-30",
    "author": "AI News 編集部",
    "readTime": "11分",
    "tags": [
      "Prisma",
      "Drizzle",
      "ORM",
      "TypeScript",
      "PostgreSQL",
      "マイグレーション",
      "バックエンド"
    ],
    "tables": [
      {
        "afterParagraph": 1,
        "caption": "ざっくりした対比（案件・バージョンで前後します）",
        "headers": [
          "観点",
          "Prisma 寄りの傾向",
          "Drizzle 寄りの傾向"
        ],
        "rows": [
          [
            "スキーマの中心",
            "`schema.prisma` と生成 Client",
            "TS スキーマ定義 + `drizzle-kit`"
          ],
          [
            "API スタイル",
            "高級なドメイン操作 API",
            "SQL に近いチェーン／リレーショナル API"
          ],
          [
            "接続・サーバーレス",
            "Accelerate / Proxy 文脈が厚い",
            "軽量ドライバ明示・Edge 例が多い"
          ],
          [
            "チーム前提",
            "広い資料・定型パターン",
            "SQL に強いメンバーが効く"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Prisma Documentation",
        "site": "Prisma",
        "url": "https://www.prisma.io/docs"
      },
      {
        "title": "Drizzle ORM — Documentation",
        "site": "Drizzle",
        "url": "https://orm.drizzle.team/docs/overview"
      },
      {
        "title": "drizzle-team/drizzle-orm",
        "site": "GitHub",
        "url": "https://github.com/drizzle-team/drizzle-orm"
      },
      {
        "title": "Supabase + Prisma（接続例の確認用）",
        "site": "Supabase",
        "url": "https://supabase.com/docs/guides/database/prisma"
      }
    ]
  },
  {
    "id": "aqua-voice-review",
    "type": "review",
    "category": "voice",
    "title": "Aqua Voice — Mac/Windows 向けAIディクテーション（フローティングUI）",
    "excerpt": "録音→転写→アクティブなアプリへペーストまでを一体で扱う製品向けディクテーション。公式 FAQ では全アカウント 1,000 語の無料枠、Avalon モデルは Pro で選択可能、iPhone アプリは未対応とされる。",
    "body": [
      "Aqua Voice は Mac / Windows 向けの AI ディクテーションで、小さなフローティング UI から録音し、転写結果をカーソル位置へ流し込むワークフローが中心です。開発者向けの「手をキーボードから離さずに進めたい」場面や、短いメモの口述に向くタイプのプロダクトです。",
      "料金・機能の境界は公式 FAQ が基準です。無料で試せる語数に上限があり、Pro プランでモデル選択や利用上限の扱いが変わる理解でよいでしょう（詳細は一次情報で都度確認）。",
      "注意点として、モバイル iOS 版は FAQ 上「未対応」とされています。Apple シリエコシステムだけで完結させたい場合は別製品との比較が必要です。",
      "精度の評価はドメイン依存です。ベンダーが公表する技術用語向けスコアと、会話全般の WER は別物なので、自チームの音声サンプルで試すのが確実です。"
    ],
    "date": "2026-03-07",
    "author": "AI News 編集部",
    "readTime": "4分",
    "rating": 4,
    "company": "Aqua",
    "pricing": "無料枠あり / Pro は公式サイト参照",
    "model": "Avalon（Pro で選択可・公式 FAQ）",
    "tags": [
      "音声",
      "ディクテーション",
      "Mac",
      "Windows",
      "開発者向け"
    ],
    "features": [
      "フローティングUI",
      "ペースト連携",
      "Avalon",
      "1,000語無料枠（FAQ）"
    ],
    "primarySources": [
      {
        "title": "Aqua Voice — FAQ",
        "site": "Aqua",
        "url": "https://aquavoice.com/faq"
      }
    ]
  },
  {
    "id": "ai-voice-input-tools-landscape-2026",
    "type": "feature",
    "category": "voice",
    "title": "AI 音声入力ツールの俯瞰 — 製品型と API 型、Whisper と gpt-4o-transcribe",
    "excerpt": "OSS の Whisper と OpenAI Speech-to-Text API（whisper-1 / gpt-4o-transcribe 系）は別ライン。コンシューマー製品とクラウド STT API の選び方、レイテンシ・コスト・プライバシーの論点を整理する。",
    "body": [
      "音声入力のスタックは大きく「OS 標準」「サードパーティ製品」「自分で API を叩く」の三層に分けられます。開発者が比較しやすいのは製品単体より、**どこで音声が止まるか**（端末内／ベンダークラウド／自社 VPC）の境界です。",
      "OpenAI のドキュメント上、Speech-to-Text には `whisper-1` と `gpt-4o-transcribe` 系など複数ルートがあり、**OSS Whisper モデルそのものとは名前が似ていても別物**です。ベンチや「Whisper ベース」の記述を読むときは、OSS なのかホスト API なのかを必ず確認してください。",
      "クラウド STT ではレイテンシ表示が「ネットワーク除く」こともあり、実アプリでは端末処理との二段構えや、長尺ファイルの非同期バッチが現実的です。医療・法務などではログ保管と再識別リスクが追加の論点になります。",
      "製品側（Aqua 等）はフローティング UI・ペースト演出・ショートカット統合まで含めた体験勝負、API 側はカスタムパイプラインとの接続勝負、という住み分けが典型です。",
      "下の表は「調査の出発点」用です。契約 SLA・データ居留・モデル ID は都度ベンダー表を正としてください。"
    ],
    "date": "2026-03-14",
    "author": "AI News 編集部",
    "readTime": "11分",
    "tags": [
      "音声",
      "Whisper",
      "STT",
      "API",
      "プライバシー"
    ],
    "tables": [
      {
        "afterParagraph": 3,
        "caption": "コンシューマー／プロダクト寄りの例（抜粋）",
        "headers": [
          "製品",
          "向き",
          "メモ"
        ],
        "rows": [
          [
            "Aqua Voice",
            "デスクトップ口述＋ペースト",
            "FAQ で無料枠・Pro・iOS 未対応を確認"
          ],
          [
            "OS 標準ディクテーション",
            "オフライン志向",
            "プライバシー優先だがモデルは OS 依存"
          ],
          [
            "会議ボット系SaaS",
            "共有リンク議事録",
            "データ保管場所と学習オプトアウトを要確認"
          ]
        ]
      },
      {
        "afterParagraph": 3,
        "caption": "API / デベロッパー向け（抜粋）",
        "headers": [
          "提供元",
          "代表エンドポイント",
          "メモ"
        ],
        "rows": [
          [
            "OpenAI",
            "Speech-to-Text（whisper-1 / gpt-4o-transcribe 系）",
            "公式ガイドでルート差分を確認"
          ],
          [
            "Deepgram",
            "リアルタイム／プリレコーデッド STT",
            "レイテンシ表はネットワーク前提を読む"
          ],
          [
            "AssemblyAI",
            "非同期・チャプター分割等",
            "公式ベンチ条件で％系を確認"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Speech to text — OpenAI Platform",
        "site": "OpenAI",
        "url": "https://platform.openai.com/docs/guides/speech-to-text"
      },
      {
        "title": "openai/whisper（GitHub）",
        "site": "OpenAI",
        "url": "https://github.com/openai/whisper"
      },
      {
        "title": "Aqua Voice — FAQ",
        "site": "Aqua",
        "url": "https://aquavoice.com/faq"
      }
    ]
  },
  {
    "id": "ai-music-generation-frontier-early-2026",
    "type": "feature",
    "category": "voice",
    "title": "生成音楽のフロンティア — Suno・Udio・Lyria・Stable Audio 周辺の整理（2026年初頭）",
    "excerpt": "創作者ツールとライセンス・レーベル動向が高速な領域。評価額やバージョン番号は報道・公式ヘルプを正とし、数値ヒャールには要注意。企業利用では権利表記と学習オプトアウトの有無を別途確認。",
    "body": [
      "生成音楽は、品質よりも**権利と配信パイプライン**の話が速い分野です。スタートアップの評価額報道は桁や通貨の取り違えが起きやすいので、必ず原報を読みます。",
      "Suno はヘルプ上 v5 系の説明があり、2026年時点ではさらに次版が進行している可能性があります。細部はアプリ内と help を正にしてください。",
      "Udio と大手レーベル側の和解・ライセンス型への話は 2025 年末前後の報道が多く、**利用規約と曲の帰属**はプロダクト更新で変わり得ます。",
      "Google 側は Lyria などブランドが複数接続先（消費者アプリ、API、Vertex 等）を持つ構成で、発表時点の The Keyword・開発者ブログを軸に追うのが安全です。",
      "Stable Audio など別系統は「いつ発表された製品か」を公式 post の年と突き合わせ、古い記事の断定をそのまま写さないことが重要です。企業の広告 BGM 用途は別途ポリシー確認が必要です。"
    ],
    "date": "2026-03-19",
    "author": "AI News 編集部",
    "readTime": "9分",
    "tags": [
      "音声",
      "音楽生成",
      "著作権",
      "Suno",
      "Lyria",
      "規制"
    ],
    "primarySources": [
      {
        "title": "Suno — Help / Changelog",
        "site": "Suno",
        "url": "https://help.suno.com/"
      },
      {
        "title": "Lyria — Google The Keyword 例（製品発表の確認用）",
        "site": "Google",
        "url": "https://blog.google/"
      },
      {
        "title": "Reuters — Suno／生成音楽（報道の例・日付は記事ごと確認）",
        "site": "Reuters",
        "url": "https://www.reuters.com/technology/"
      }
    ]
  },
  {
    "id": "ai-image-generators-landscape-early-2026",
    "type": "feature",
    "category": "vision",
    "title": "画像生成AIの地形図（2026年初頭）— GPT Image・MJ・Flux・Imagen から Nano Banana 2 まで",
    "excerpt": "解像度競争に加え、複雑な構図や空間関係へのプロンプト忠実度、用途特化が選択軸の中心になっている。以下は話題モデルの整理用ダイジェスト—版数・価格・利用条件は都度公式を正とすること。",
    "body": [
      "2026年初頭の画像生成は、単純な「きれいさ」より **指示への追従**（空間関係・構図・オブジェクト数）と **用途別の最適化** が際立っています。ベンダーによって版数表記・API 名・消費者アプリ名が一致しないため、契約や本番組み込みでは **リリースノートと pricing を直接確認**してください。",
      "話題のラインアップをざっくり押さえると、**アート・ディレクション寄り**では Midjourney 系、**フォトリアル寄り**では Flux（Black Forest Labs）などの評価が多く出やすい一方、**画像内テキスト**では Ideogram や GPT Image、**ロゴ・ベクター**では Recraft、**クリエイティブクラウド統合と利用条項**では Adobe Firefly、**オンプレ・カスタム**では Stable Diffusion 系列、**エンタープライズ文脈の Imagen** と **Gemini エコシステム上の Nano Banana / Imagen** という住み分けが議論でよく引用されます（いずれも「常に勝つ」ではなく案件依存）。",
      "Google 周りは **Imagen 4**（Cloud / 開発者向けドキュメント側）と、別稿で扱う **Nano Banana 2（Gemini 3.1 Flash Image）** が表裏で混同されやすいです。後者は動画ツール **Flow** の既定「画像」モデルでもあり、**動画生成そのもの**（Veo 等）とは別ラインです。動画の比較は当サイトの動画まとめ稿を参照してください。"
    ],
    "date": "2026-03-01",
    "author": "AI News 編集部",
    "readTime": "12分",
    "tags": [
      "画像生成",
      "OpenAI",
      "Midjourney",
      "Flux",
      "Imagen",
      "比較",
      "2026年"
    ],
    "tables": [
      {
        "afterParagraph": 0,
        "caption": "主要モデル／製品ラインの整理（※版数・提供形態・地域は公式で要確認）",
        "headers": [
          "ライン",
          "よく言及される強み",
          "接入・使い勝手の目安"
        ],
        "rows": [
          [
            "GPT Image 1.5（OpenAI）",
            "画像内テキストの精度、プロンプト追従の評価が高いとされる例が多い",
            "主に ChatGPT 経由（API・製品名は公式で確認）"
          ],
          [
            "Midjourney V8",
            "アート性・美的コントロール、速度・解像度の改善訴求",
            "Midjourney の公式フロー（規約・商用条件を要確認）"
          ],
          [
            "Flux 2（Black Forest Labs）",
            "フォトリアル系の評価、レイテンシと品質のバランス",
            "API・パートナー経由が中心になりやすい"
          ],
          [
            "Ideogram 3.0",
            "画像内文字・タイポグラフィ",
            "Ideogram アプリ／API"
          ],
          [
            "Recraft V4",
            "ロゴ・ブランド寄り、SVG など設計ツール連携の話題",
            "Recraft プロダクト（ベンチ数値は原資料確認）"
          ],
          [
            "Google Imagen 4",
            "エンプラ利用の法務・安全設計の説明と高速版のコスト訴求（公式表記で確認）",
            "Vertex AI / Google Cloud ドキュメント"
          ],
          [
            "Adobe Firefly Image 3",
            "Creative Cloud 統合、著作権補償など利用条項の明文化",
            "Adobe プランに紐づく"
          ],
          [
            "Stable Diffusion 3.5",
            "オープンウェイト、ローカル／自己ホスト・カスタム",
            "Stability AI の配布条件とライセンス表"
          ],
          [
            "Seedream（ByteDance）",
            "5.0 / 4.5 / 4.0 など複数ティアで用途分けするライン",
            "地域・アプリ経路によりアクセス差（利用規約確認）"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "OpenAI — Images / API documentation",
        "site": "OpenAI",
        "url": "https://platform.openai.com/docs/guides/images"
      },
      {
        "title": "Midjourney",
        "site": "Midjourney",
        "url": "https://www.midjourney.com/"
      },
      {
        "title": "Black Forest Labs (Flux)",
        "site": "BFL",
        "url": "https://bfl.ai/"
      },
      {
        "title": "Ideogram",
        "site": "Ideogram",
        "url": "https://ideogram.ai/"
      },
      {
        "title": "Recraft",
        "site": "Recraft",
        "url": "https://www.recraft.ai/"
      },
      {
        "title": "Imagen on Vertex AI — Google Cloud",
        "site": "Google Cloud",
        "url": "https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/imagen"
      },
      {
        "title": "Adobe Firefly",
        "site": "Adobe",
        "url": "https://www.adobe.com/products/firefly.html"
      },
      {
        "title": "Stability AI — Stable Diffusion",
        "site": "Stability AI",
        "url": "https://stability.ai/"
      },
      {
        "title": "Nano Banana 2（当サイト別稿）",
        "site": "AI News 編集部",
        "url": "https://022740mix-spec.github.io/AI-News/?a=google-nano-banana-2-gemini-flash-image-2026"
      }
    ]
  },
  {
    "id": "google-nano-banana-2-gemini-flash-image-2026",
    "type": "feature",
    "category": "vision",
    "title": "Google「Nano Banana 2」— Gemini 3.1 Flash Image と動画ツール Flow との見分け方",
    "excerpt": "2026年2月26日、Google DeepMind が画像生成モデル Nano Banana 2（技術名 Gemini 3.1 Flash Image）を発表。Pro 寄りの品質と Flash 級の速度、最大5キャラクターの一貫性などが売り。Flow の既定モデルでもあるため「動画AI」と混同されやすい点を整理する。",
    "body": [
      "**Nano Banana 2 は画像生成・編集モデル**です。The Keyword の製品名は *Nano Banana 2 (Gemini 3.1 Flash Image)* と明記されており、テキスト→**動画クリップ**を直接出す Veo 系とは別ラインです。",
      "ユーザー目線で紛れやすいのは **Google Flow** です。Flow は動画制作向けプラットフォームですが、公式ブログによれば **既定の「画像」生成モデルが Nano Banana 2** に更新され、Flow 利用者向けは **クレジット 0** で利用できる説明があります。タイムライン用のキービジュアルやボード素材を高速に回す文脈で動画ワークフローに載るため、「動画AIの新モデル」と誤読されやすい、という整理が実務的です。実際のテキスト→動画生成は別途 Veo などを参照してください（当サイトの動画まとめ稿）。",
      "能力面の要点は次のとおりです。**Gemini の世界知識・検索グラウンディング**を活かした被写体表現、**画像内テキストの精密描画と翻訳・ローカライズ**、**最大5キャラクター程度の一貫性**と単一ワークフロー内で最大 **14オブジェクト**までの忠実度維持、**複雑な指示への追従**、**512px から 4K まで**の解像度・アスペクト比の指定、といった Pro 寄りの機能を **Flash 級の速度**で回す、というプロダクト訴求です。",
      "展開面では **Gemini アプリ**（Fast / Thinking / Pro で Nano Banana Pro に置き換え。有料層は Pro を再生成で継続利用可能）、**Google 検索**（AI Mode / Lens など）、**Gemini API・AI Studio・Vertex AI（プレビュー）**、**Flow**、**Google  Ads** などにロールアウトとされています。API のモデル ID・価格は `gemini-3.1-flash-image-preview` の表記で公式 pricing を正としてください。",
      "プロvenance として Google は **SynthID** と **C2PA Content Credentials** の併用を継続すると述べています。生成物の開示・検証ポリシーは組織のガイドラインと合わせて確認が必要です。"
    ],
    "date": "2026-02-26",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": [
      "Google",
      "Gemini",
      "画像生成",
      "Nano Banana",
      "Flow",
      "マルチモーダル",
      "SynthID"
    ],
    "features": [
      "公式ブログ一次ソース",
      "動画モデルとの混同の整理",
      "API・プロダクト展開の参照先"
    ],
    "primarySources": [
      {
        "title": "Nano Banana 2: Combining Pro capabilities with lightning-fast speed",
        "site": "Google The Keyword",
        "url": "https://blog.google/innovation-and-ai/technology/ai/nano-banana-2/"
      },
      {
        "title": "Nano Banana 2: How developers can use the new AI image model",
        "site": "Google The Keyword",
        "url": "https://blog.google/innovation-and-ai/technology/developers-tools/build-with-nano-banana-2/"
      },
      {
        "title": "Image generation with Gemini (Gemini API)",
        "site": "Google AI for Developers",
        "url": "https://ai.google.dev/gemini-api/docs/image-generation"
      },
      {
        "title": "Google launches Nano Banana 2, updating its viral AI image generator",
        "site": "CNBC",
        "url": "https://www.cnbc.com/2026/02/26/google-launches-nano-banana-2-updating-its-viral-ai-image-generator.html"
      },
      {
        "title": "Google launches Nano Banana 2 model with faster image generation",
        "site": "TechCrunch",
        "url": "https://techcrunch.com/2026/02/26/google-launches-nano-banana-2-model-with-faster-image-generation/"
      }
    ]
  },
  {
    "id": "ai-video-generators-landscape-2026",
    "type": "feature",
    "category": "video",
    "title": "動画生成モデルの地形図 — Veo・Runway・Kling などとマルチモデル・パイプライン",
    "excerpt": "テキスト→動画、参照映像、ネイティブ音声、4K／長尺、物理シミュレーション寄りの品質競争が続く。単体ベンダー鎖国より、用途別に複数モデルを束ねる構成が増えている。",
    "body": [
      "2025〜2026 年のトレンドは「1クリックで完結」より、**企画→キーフレーム→動画→音声→後処理**を API でつなぐパイプライン設計に寄っています。",
      "Google の Veo 系、Runway、中国勢の Kling、開放系の Hunyuan／ByteDance 系列など、**アクセス経路（消費者アプリ／API／パートナー）**が異なるため、同じモデル名でも到達点が違います。",
      "選定チェックリストの例: 最大化解像度と尺、商用ライセンス、参照映像の扱い、音声同梱の有無、ウォーターマーク、推論コスト、地域制限、コンテンツポリシー。",
      "速報的な「サービス終了」や価格改定は二次報道だけで確定せず、**公式チャンジログ or pricing** を毎回見に行く運用が安全です。",
      "本サイト別稿ではフロンティア間の料金の軸比較と、Sora 終了報道の整理も参照してください。"
    ],
    "date": "2026-03-08",
    "author": "AI News 編集部",
    "readTime": "8分",
    "tags": [
      "動画生成",
      "Veo",
      "Runway",
      "Kling",
      "パイプライン"
    ],
    "primarySources": [
      {
        "title": "Gemini API — Video / pricing（構成は公式で要確認）",
        "site": "Google AI Developers",
        "url": "https://ai.google.dev/gemini-api/docs/pricing"
      },
      {
        "title": "Runway API — Pricing",
        "site": "Runway",
        "url": "https://docs.dev.runwayml.com/guides/pricing/"
      }
    ]
  },
  {
    "id": "ai-video-deepfake-compliance-2026",
    "type": "feature",
    "category": "video",
    "title": "生成動画とコンプライアンス — ディープフェイク規制・開示・C2PA の実務",
    "excerpt": "生成・編集が容易になるほど、開示義務・本人同意・選挙広告・著名人の類似が論点になる。制作フローにメタデータ署名と人間確認ゲートを組み込む話に整理する。",
    "body": [
      "各国・各州で「疑似実在映像」の定義と禁止対象が異なり、プラットフォームポリシーと二重管理がかかる場面があります。クロスボーダー配信では最悪ケースの規制に寄せた設計が無難です。",
      "C2PA Content Credentials は改ざん検知に近い**出所のくすみ**を残す仕組みで、撮影・編集・生成の各段でプロビナンスを積むイメージです。導入にはワークフローと保存形式の合意が必要です。",
      "社内利用でも「社外配布物だけチェック」では足りず、**個人情報・労務・パートナー契約**側の「AI 生成可否」条項が先に絡むことがあります。",
      "技術だけでは止められないため、**人間の承認ステップ・版管理・監査ログ**をセットで設計します。"
    ],
    "date": "2026-03-08",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": [
      "動画",
      "ディープフェイク",
      "C2PA",
      "ガバナンス",
      "法務"
    ],
    "primarySources": [
      {
        "title": "C2PA — Overview",
        "site": "C2PA",
        "url": "https://c2pa.org/"
      },
      {
        "title": "OWASP — LLM Applications",
        "site": "OWASP",
        "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
      }
    ]
  },
  {
    "id": "openai-sora-discontinued-2026",
    "type": "news",
    "category": "video",
    "title": "報道: OpenAI が Sora の提供終了を表明 — 計算・戦略・ガードレールの文脈",
    "excerpt": "2026年3月頃、AP・NPR・Business Insider などが Sora のアプリ／関連 API 終了を伝えた。最終的な公式文言・日付は openai.com 側の確認を優先する。",
    "body": [
      "本稿は二次報道ベースの整理です。契約・プロダクト判断は OpenAI の公式発表、利用規約、ダッシュボード通知を正としてください。",
      "報道で繰り返される観点は、(1) 大規模推論のコストと経済性、(2) ロボティクスや世界モデル等への投資シフト、(3) 深偽・キャラクター利用をめぐる炎上とモデレーションコスト、などです。いずれも**仮説の列挙**であり単独原因として断定しない方が安全です。",
      "利用者向けメッセージが X などで引用された、とも各紙は伝えていますが、スクリーンショット単体の解釈には注意が必要です。",
      "クリエイター向けには、既存クリップのエクスポートや権利帰属、代替パイプライン（別稿のフロンティア比較）を早めに確認する動きが想定されます。",
      "本サイトでは規模の大きい話題のため速報枠で掲載するが、数値・内部事情の噂は掲げない方針とする。"
    ],
    "date": "2026-03-26",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "OpenAI",
      "Sora",
      "動画生成",
      "速報",
      "規制"
    ],
    "primarySources": [
      {
        "title": "OpenAI pulls the plug on Sora video app (AP)",
        "site": "AP News",
        "url": "https://apnews.com/article/openai-closes-sora-ai-c60de960536923f33edc04b92ddbe1cd"
      },
      {
        "title": "OpenAI pulls the plug on Sora (NPR)",
        "site": "NPR",
        "url": "https://www.npr.org/2026/03/25/g-s1-115055/openai-pulls-the-plug-on-sora-the-viral-ai-video-generator-that-sparked-deepfake-concerns"
      },
      {
        "title": "OpenAI discontinues Sora amid robotics shift (Business Insider)",
        "site": "Business Insider",
        "url": "https://www.businessinsider.com/openai-discontinues-sora-video-app-amid-robotics-shift-compute-limitations-2026-3"
      },
      {
        "title": "OpenAI — News / Product blog（公式確認用）",
        "site": "OpenAI",
        "url": "https://openai.com/news/"
      }
    ]
  },
  {
    "id": "ai-video-frontier-models-march-2026-pricing",
    "type": "feature",
    "category": "video",
    "title": "動画フロンティアの料金の軸 — Veo 3.1・Runway Gen-4.5・Kling など（公式再確認前提）",
    "excerpt": "秒単価・クレジット制・バンドル販売が混在するため「安い／高い」一発比較は誤魔化しやすい。公式 pricing の単位（秒・分・解像度・Fast/Standard）を揃えて読む。",
    "body": [
      "Gemini API 系の動画（Veo）では Google の pricing ページに秒あたり単価と解像度ティアが表形式で出ることが多いです。Standard / Fast の差も読み落とさないでください。",
      "Runway はクレジット／秒の組み合わせで示されるため、**1 クレジットの USD 換算**まで踏み込んで概算します。キャンペーンやパックで実効単価は変動します。",
      "Kling・Pika・CapCut 経由などはプロダクト境界が複雑なので、表では「確認 URL」を主役にし、断定価格は載せすぎません。",
      "Sora に関しては終了報道があり（別稿）、現行の新規採用は計画から外す判断が入り得ます。",
      "**いつでも公式を正にする**前提で、以下の表は2026年3月末時点の調査メモです。"
    ],
    "date": "2026-03-30",
    "author": "AI News 編集部",
    "readTime": "10分",
    "tags": [
      "動画",
      "料金",
      "Veo",
      "Runway",
      "Kling"
    ],
    "tables": [
      {
        "afterParagraph": 4,
        "caption": "各系統の確認入口（価格はページ内で再取得）",
        "headers": [
          "系統",
          "確認先",
          "メモ"
        ],
        "rows": [
          [
            "Google Veo / Gemini API",
            "ai.google.dev pricing",
            "秒×解像度×Standard/Fast"
          ],
          [
            "Runway API gen4.5",
            "docs.dev.runwayml.com pricing",
            "クレジット/秒×クレジット単価"
          ],
          [
            "Kling / 中国勢",
            "各公式・パートナー",
            "地域・決済制限に注意"
          ]
        ]
      },
      {
        "afterParagraph": 4,
        "caption": "比較時のチェック項目",
        "headers": [
          "項目",
          "理由"
        ],
        "rows": [
          [
            "商用ライセンス条項",
            "代理生成品の再配布可否"
          ],
          [
            "音声同梱の課金",
            "音声+映像の合成単価"
          ],
          [
            "参照映像の IP",
            "学習・微調整ポリシー"
          ],
          [
            "ウォーターマーク",
            "強制か任意か"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Gemini API — Pricing",
        "site": "Google AI Developers",
        "url": "https://ai.google.dev/gemini-api/docs/pricing"
      },
      {
        "title": "Runway API — Pricing",
        "site": "Runway",
        "url": "https://docs.dev.runwayml.com/guides/pricing/"
      }
    ]
  },
  {
    "id": "claude-code-auto-mode",
    "type": "review",
    "category": "cli",
    "title": "Claude Code「Auto mode」— 権限プロンプトを減らす分類器モード（auto）",
    "excerpt": "2026-03-24 発表の研究プレビュー。ドキュメント・設定では Auto mode / permission-mode auto。宣材によっては Auto fix と併記。別機能の PR 向け「auto-fix in the cloud」（3/27 発表）は別記事で解説。",
    "body": [
      "ここで扱うのは CLI／デスクトップ上の権限モードです。2026年3月27日に発表された「auto-fix in the cloud」（PR の CI・レビューをクラウドで自動フォロー）は別機能なので混同しないでください。",
      "Anthropic は 2026年3月24日、Claude Code の権限オート承認を研究プレビューとして公表しました。ブログ・Engineering では「Auto mode」、一部宣材では「Auto fix」とオレンジ表記が出ます。実装・設定では `permission-mode auto`（`auto`）です。",
      "`--dangerously-skip-permissions` のように確認をゼロにするのではなく、各ツール実行前に別の分類器が安全性を見ることで、長時間タスクの割り込みプロンプトを減らすのが目的です。Engineering 投稿では、ツール出力側のプロンプトインジェクション疑いの検知と、実行直前のトランスクリプト評価（分類器は Claude Sonnet 4.6）の二層構成として説明されています。",
      "利用条件は公式ドキュメントに従います。例: Claude Team（管理者が Claude Code 設定で有効化）、Sonnet 4.6 / Opus 4.6、CLI では `--enable-auto-mode` を付けたうえで Shift+Tab から `default` → `acceptEdits` → `plan` → `auto` を循環、または `claude --permission-mode auto`。Enterprise / API への展開は「数日」との案内があります。",
      "混同しやすい点: UI の「Auto accept edits」は権限モード `acceptEdits` で、`auto`（Auto mode）とは別物です。",
      "同時期の関連: Claude Code Channels、Bare Mode、Analytics API、および auto-fix in the cloud（PR 自動フォロー）です。"
    ],
    "date": "2026-03-27",
    "author": "AI News 編集部",
    "readTime": "6分",
    "rating": 5,
    "company": "Anthropic",
    "pricing": "Pro $25/月〜 / Auto mode は Team 等（公式）",
    "model": "Opus 4.6 / Sonnet 4.6（分類器は Sonnet 4.6）",
    "tags": [
      "CLI",
      "Anthropic",
      "Auto mode",
      "権限",
      "速報"
    ],
    "features": [
      "研究プレビュー",
      "分類器",
      "二層防御",
      "--enable-auto-mode",
      "Team条件"
    ],
    "primarySources": [
      {
        "title": "Claude Code — Documentation（概要・権限）",
        "site": "Anthropic",
        "url": "https://docs.anthropic.com/en/docs/claude-code/overview"
      },
      {
        "title": "Anthropic — News & announcements",
        "site": "Anthropic",
        "url": "https://www.anthropic.com/news"
      }
    ]
  },
  {
    "id": "mcp-servers-deep-dive",
    "type": "feature",
    "category": "cli",
    "title": "MCP（Model Context Protocol）実務 — サーバ選定、権限、ネットワーク、サプライチェーン",
    "excerpt": "ツール呼び出しを JSON-RPC で標準化する MCP は、IDE・CLI・独自ホストのゲートウェイ間で同じコネクタを再利用できる。stdio / HTTP トランスポート、権限の渡し方、サードパーティ拡張の供給網リスクまでを整理する。",
    "body": [
      "MCP は「LLM がクライアントからツールとリソースにアクセスするためのオープン仕様」です。クライアント（Claude Desktop、Cursor、自前ゲートウェイ等）が MCP サーバに接続し、ファイル読み書き、ブラウザ操作、社内 API 呼び出しなどを統一インタフェースで公開します。",
      "実装ではトランスポートが重要です。**stdio** はローカルプロセス直結でセットアップが簡単だが、クライアントと同じマシンにサーババイナリが必要です。**SSE / Streamable HTTP** はリモート配置に向く一方、認証・TLS・レート制限を自前で設計する必要があります。",
      "運用では「その MCP が触り得るスコープ」を最小化します。広いファイルシステムアクセス・任意 URL 取得・シェル実行を持つサーバは、**サプライチェーン攻撃（悪意あるサーバ・更新）とインジェクション**の両方の面でリスクが大きくなります。社内利用でもロックファイル・署名・許容リストの運用を検討してください。",
      "エージェント製品ごとに MCP の UI（有効化・ログ・再接続）が異なるため、「仕様は同じでも接続パスが違う」と心得、**公式の接続例とセキュリティ注意**を各クライアントのドキュメントで確認するのが安全です。"
    ],
    "date": "2026-03-10",
    "author": "AI News 編集部",
    "readTime": "8分",
    "tags": [
      "MCP",
      "CLI",
      "セキュリティ",
      "ツール",
      "エージェント"
    ],
    "primarySources": [
      {
        "title": "Model Context Protocol — Specification & documentation",
        "site": "modelcontextprotocol.io",
        "url": "https://modelcontextprotocol.io/docs/getting-started/intro"
      },
      {
        "title": "MCP — GitHub (organization)",
        "site": "GitHub",
        "url": "https://github.com/modelcontextprotocol"
      }
    ]
  },
  {
    "id": "agent-skills-skill-md",
    "type": "feature",
    "category": "cli",
    "title": "エージェント・スキルと SKILL.md — Claude / Cursor / Codex をまたぐ再利用単位",
    "excerpt": "フォルダ＋SKILL.md に手順・ドメイン知識・メタデータを束ね、モデルが必要時だけ展開する「スキル」パターンが普及している。YAML フロントマター、段階的開示、.claude/skills や各 IDE の skills ディレクトリの考え方を整理する。",
    "body": [
      "「毎回長いシステムプロンプトを貼る」より、**リポジトリやマシンに同梱したスキル**を読み込ませる方式は、レビュー可能性と再現性の面で有利です。代表例が Anthropic 側で整備されている **Agent Skills** と、そのフォルダ形式における **SKILL.md** です。",
      "典型的には SKILL.md の **YAML フロントマター**（名前・説明・互換性・利用可能ツール等）が「発見用の薄いメタデータ」となり、本文にワークフロー・チェックリスト・禁止事項・サンプルコマンドが書かれます。モデル・実装は **メタデータだけ常時・本文は起動時**といった段階的開示でトークンを抑える設計が取られがちです。",
      "Claude Code では `.claude/skills/` などの配置がドキュメント化され、API / Agent SDK でも Skill ツール経由で読み込む例が示されています。Cursor は changelog 上 Skills をプロダクト機能として扱っており、**同じ「スキル」という語でも実装と検索パスが製品依存**である点に注意が必要です。",
      "チーム運用では、(1) スキル単位のオーナーと改版履歴、(2) 機密・患者安全など高リスク領域の人間ゲート、(3) 外部コピペとの混同防止（名前空間）をルール化すると安全です。**複数エージェント製品を併用する場合**は、フロントマターの互換フィールドやディレクトリ規約を揃えると移行コストが下がります。"
    ],
    "date": "2026-03-12",
    "author": "AI News 編集部",
    "readTime": "9分",
    "tags": [
      "スキル",
      "SKILL.md",
      "Claude",
      "Cursor",
      "エージェント",
      "ドキュメント"
    ],
    "primarySources": [
      {
        "title": "Agent skills overview",
        "site": "Anthropic Docs",
        "url": "https://docs.anthropic.com/en/docs/agents-and-tools/agent-skills/overview"
      },
      {
        "title": "Extend Claude with skills (Claude Code)",
        "site": "Anthropic Docs",
        "url": "https://docs.anthropic.com/en/docs/claude-code/skills"
      },
      {
        "title": "SKILL.md: The Agent Skills Format（コミュニティ解説・仕様まとめ）",
        "site": "mdskills.ai",
        "url": "https://www.mdskills.ai/specs/skill-md",
        "note": "非公式の仕様まとめ。最終的な挙動は各製品の公式ドキュメントを優先。"
      }
    ]
  },
  {
    "id": "markdown-ai-context-agents-llms",
    "type": "feature",
    "category": "cli",
    "title": "Markdown で育てるエージェント文脈 — AGENTS.md・CLAUDE.md・llms.txt・.cursor/rules",
    "excerpt": "リポジトリ直下の短い Markdown／ルールファイルが、LLM への「常時参照コンテキスト」として定位置になっている。Codex の AGENTS.md、Cursor の rules、サイト全体要約の llms.txt など、役割の違いとレビュー文化を整理する。",
    "body": [
      "コーディングエージェント普及に伴い、**Git 管理下のテキストで「どう振る舞うか」を固定する**パターンが一般化しました。代表例は **AGENTS.md**（リポジトリや組織単位のエージェント向け指示）、**CLAUDE.md**（Claude Code のメモリ / プロジェクト文脈）、**`.cursor/rules` や `.mdc` ルール**（Cursor の文脈注入）、**llms.txt**（サイト・プロダクトの LLM 向け要約入口）です。",
      "いずれも「長い README を毎回貼る」より、**エディタ・CLI が自動で取り込む場所に置く**ことでドリフトを減らすのが狙いです。差分レビューがしやすい Plain text / Markdown であることは、エンタープライズの承認フローとも相性が良いです。",
      "落とし穴は、(1) ルール同士の矛盾（古い節が残る）、(2) 機密を誤ってコミット、(3) 「ルールに書いたから安全」という誤認（権限・ネットワーク境界は別問題）です。**定期的なlint・オーナー・有効期限コメント**を入れると運用が安定します。",
      "サイト公開向けの **llms.txt** は、検索クローラではなく LLM が一次情報を辿るための**入口インデックス**として位置づけられています。自社ドキュメントを載せる場合は、正本の URL と要約の境界をはっきりさせ、著作権・利用条件に沿った引用に留めます。"
    ],
    "date": "2026-03-12",
    "author": "AI News 編集部",
    "readTime": "9分",
    "tags": [
      "Markdown",
      "AGENTS.md",
      "llms.txt",
      "Cursor",
      "Claude",
      "ドキュメント"
    ],
    "primarySources": [
      {
        "title": "Introducing AGENTS.md",
        "site": "OpenAI Developers",
        "url": "https://developers.openai.com/codex/guides/agents-md/"
      },
      {
        "title": "llms.txt — the /llms.txt standard",
        "site": "llmstxt.org",
        "url": "https://llmstxt.org/"
      },
      {
        "title": "Rules — Cursor docs",
        "site": "Cursor",
        "url": "https://cursor.com/docs/context/rules"
      },
      {
        "title": "Claude Code memory (CLAUDE.md 等)",
        "site": "Anthropic Docs",
        "url": "https://docs.anthropic.com/en/docs/claude-code/memory"
      }
    ]
  },
  {
    "id": "mico-kubectl-ai",
    "type": "feature",
    "category": "cli",
    "title": "Mico — kubectl 向け OSS の AI アシスト（適用前確認と RBAC を前提に）",
    "excerpt": "自然言語からマニフェストや kubectl サブコマンド候補を出す補助ツール。便利さとのトレードオフはクラスタ破壊系操作の誤実行。dry-run・diff・人間承認を徹底し、本番では監査ログまで含めて設計する。",
    "body": [
      "Kubernetes 運用では `kubectl` の打ち間違い・意図と逆のリソース名・危険な delete がすぐ現場トラブルになります。OSS の **Mico** は、その補助として自然言語からコマンドやマニフェスト案を出すタイプのツールの一例です（名称・機能はリポジトリ README を正としてください）。",
      "**AI が提案した YAML をそのまま apply しない**こと。`kubectl apply --dry-run=server`、`diff`、変更対象namespaceの再確認、承認ゲートを挟む運用が必須です。本番クラスタでは RBAC を最小化し、エージェント用クレデンシャルにクラスタ管理者を渡さないのが鉄則です。",
      "同種ツールとして Google の **kubectl-ai** など別実装もあり、モデルサポート・配布形態（Krew プラグイン等）が異なります。採用時はライセンス・通信先（クラウド LLM へプロンプトが出るか）・ログ保管を DD で確認します。",
      "本稿はツール紹介と注意喚起であり、特定環境での合否判断やセキュリティ監査の代替ではありません。"
    ],
    "date": "2026-03-14",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": [
      "kubectl",
      "Kubernetes",
      "CLI",
      "Mico",
      "運用"
    ],
    "primarySources": [
      {
        "title": "tahtaciburak/mico",
        "site": "GitHub",
        "url": "https://github.com/tahtaciburak/mico"
      },
      {
        "title": "GoogleCloudPlatform/kubectl-ai",
        "site": "GitHub",
        "url": "https://github.com/GoogleCloudPlatform/kubectl-ai"
      }
    ]
  },
  {
    "id": "fish-ai-terminal-shell",
    "type": "feature",
    "category": "cli",
    "title": "Fish シェルと fish-ai — 端末内 LLM 補助と Warp 型クラウド端末の住み分け",
    "excerpt": "Realiserad/fish-ai のように、Fish 上でコマンド補正・自然言語からコマンド・LLM 補完を行うプラグインがある。設定はローカル ini。クラウドホスト型ターミナル（Warp 等）とはデータ境界が異なるので用途で選ぶ。",
    "body": [
      "**fish-ai**（例: Realiserad/fish-ai）は Fish 向けプラグインで、自然言語とシェルコマンドの往復、コマンド修正、fuzzy 補完風の挙動などを LLM で補強する構成です。多くの場合、設定ファイルでプロバイダや API キーを指定し、**端末マシンからベンダ API に直接出る**形になります（詳細は README を確認）。",
      "クラウド上でセッションを完結させるターミナル製品とは対照的に、**fish-ai はローカル環境に閉じたスタック**を好む人向けです。オフライン要件や社内プロキシ、エアギャップなどでは後者が使えない一方、前者は「自分のシェルに足す」だけで試せる利点があります。",
      "どちらの構成でも、**(1) プロンプトに環境変数やパスが混入しないか、(2) 履歴・ログの保存先、(3) サブスクリプションとデータ利用条項**を必ず読みます。シェル補助は実行権限に直結するため、**提案コマンドをそのまま実行しない**習慣づけが重要です。",
      "Fish 以外のシェルでは同種の試み（ラッパー、別プロセスのエージェント）を組み合わせることになり、体験の統一度は下がりがちです。チームで標準シェルを揃えるか、CI では POSIX sh 固定にするかは別途方針が必要です。"
    ],
    "date": "2026-03-14",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": [
      "Fish",
      "ターミナル",
      "CLI",
      "シェル",
      "LLM"
    ],
    "primarySources": [
      {
        "title": "realiserad/fish-ai",
        "site": "GitHub",
        "url": "https://github.com/realiserad/fish-ai"
      },
      {
        "title": "Fish shell — documentation",
        "site": "fishshell.com",
        "url": "https://fishshell.com/docs/current/"
      }
    ]
  },
  {
    "id": "cursor-2-4-subagents",
    "type": "review",
    "category": "editor",
    "title": "Cursor 2.4 リリース — 並列サブエージェントとクラウドVM実行で開発を高速化",
    "excerpt": "最大20個のエージェントを同時並列実行可能に。クラウドVM上での独立実行により、ローカルマシンのリソースを消費せず大規模タスクを処理。BugBotも新登場。",
    "body": [
      "Anysphere社は2026年3月、Cursor 2.4をリリースし、並列サブエージェント機能を正式導入しました。親エージェントがタスクを分解し、複数のサブエージェントがそれぞれ独立したコンテキストで同時に作業を進めます。",
      "サブエージェントはクラウドVM上で実行されるため、ローカルマシンに負荷をかけずに10〜20のエージェントを同時に稼働させることが可能です。テストでは、8,000行のNext.jsアプリのルーター移行がシリアル実行の17分から並列実行で9分に短縮されました。",
      "あわせて「BugBot」も発表されました。PRレベルの自動コードレビューを行い、バグの早期発見を支援します。カスタムプロンプト、ツールアクセス制御、モデル選択などサブエージェントの柔軟なカスタマイズも可能です。"
    ],
    "date": "2026-03-27",
    "author": "AI News 編集部",
    "readTime": "5分",
    "rating": 5,
    "company": "Anysphere",
    "pricing": "$20/月",
    "model": "Sonnet 4.6 / Opus 4.6",
    "tags": [
      "エディタ",
      "Cursor",
      "サブエージェント",
      "速報"
    ],
    "features": [
      "並列サブエージェント",
      "クラウドVM実行",
      "BugBot",
      "カスタムプロンプト",
      "高速化"
    ]
  },
  {
    "id": "gemini-cli-v035",
    "type": "review",
    "category": "cli",
    "title": "Gemini CLI v0.35.0 — サブエージェント強化とPlan Mode追加、無料枠は縮小へ",
    "excerpt": "Google Gemini CLIの最新安定版がリリース。サブエージェントアーキテクチャの大幅強化、セキュリティ向上のサンドボックス機能。一方で3月25日よりPro以上が有料に。",
    "body": [
      "Google DeepMindは2026年3月24日、Gemini CLI v0.35.0をリリースしました。サブエージェントアーキテクチャが大幅に強化され、ローカル実行、ツール分離、マルチレジストリ検出、動的ツールフィルタリング、JITコンテキスト注入に対応しています。",
      "セキュリティ面では統合SandboxManagerが導入され、Linux（bubblewrap/seccomp）、macOS（Seatbelt）、Windowsの各プラットフォームでネイティブなサンドボックス分離を実現。ツール実行の安全性が大きく向上しました。",
      "Plan Modeも新たに追加され、コード変更前にエージェントが計画を提示し、ユーザーの承認を得てから実行する慎重なワークフローが可能になりました。カスタムキーバインドやVimモードの強化など、開発者体験の改善も行われています。",
      "一方、3月25日よりGemini Proモデルは有料サブスクリプション限定となり、無料枠はGemini Flashモデルのみに制限されます。大規模コンテキストを活かした利用には課金が必要になる点に注意が必要です。"
    ],
    "date": "2026-03-27",
    "author": "AI News 編集部",
    "readTime": "5分",
    "rating": 4,
    "company": "Google DeepMind",
    "pricing": "Flash無料 / Pro有料",
    "model": "Gemini 2.5 Pro / Flash",
    "tags": [
      "CLI",
      "Google",
      "アップデート",
      "速報"
    ],
    "features": [
      "サブエージェント強化",
      "Plan Mode",
      "ネイティブサンドボックス",
      "Vimモード",
      "カスタムキーバインド"
    ]
  },
  {
    "id": "copilot-jetbrains-ga",
    "type": "review",
    "category": "cli",
    "title": "GitHub Copilot、JetBrainsで正式GA — Coding Agentの起動速度も50%改善",
    "excerpt": "Agent ModeがVS Code以外にもJetBrains、Eclipse、Xcodeへ展開。セマンティックコード検索の導入で初期化時間が40秒→20秒に短縮。",
    "body": [
      "GitHubは2026年3月、Copilot Coding AgentのJetBrains IDE正式対応（GA）を発表しました。これまでVS Code限定だったAgent Mode、セマンティックコード検索、Issue→PRワークフローがJetBrainsでもフル機能で利用可能になります。",
      "セマンティックコード検索の導入により、ファイルパスを指定しなくても概念的に関連するコードを自動発見できるようになりました。これにより、Coding Agentの初期化時間が従来の約40秒から20秒へと50%短縮されています。",
      "EclipseとXcodeへのAgent Mode展開もパブリックプレビューとして開始され、全Copilotユーザーが利用可能です。さらにセッションログの可視性も向上し、リポジトリクローンやエージェントファイアウォールのステップが確認できるようになりました。"
    ],
    "date": "2026-03-27",
    "author": "AI News 編集部",
    "readTime": "4分",
    "rating": 4,
    "company": "GitHub (Microsoft)",
    "pricing": "$10/月〜",
    "model": "GPT-5.4 / o4-mini",
    "tags": [
      "CLI",
      "GitHub",
      "JetBrains",
      "速報"
    ],
    "features": [
      "JetBrains GA",
      "セマンティック検索",
      "50%高速化",
      "Eclipse/Xcode対応",
      "セッション可視化"
    ]
  },
  {
    "id": "gemini-3-1-pro",
    "type": "feature",
    "category": "special",
    "title": "Gemini 3.1 Pro 発表 — ARC-AGI-2スコア77.1%、推論性能が前世代の倍以上に",
    "excerpt": "Google DeepMindが3月26日にプレビュー公開。1Mトークンコンテキスト、推論ベンチマーク大幅向上。価格は据え置きで開発者・企業向けに順次展開。",
    "body": [
      "Google DeepMindは2026年3月26日、Gemini 3.1 Proをプレビューとして発表しました。ARC-AGI-2スコア77.1%を達成し、前世代Gemini 3 Proの倍以上となる推論性能を実現しています。",
      "1Mトークンのコンテキストウィンドウを持ち、テキスト・画像・音声・動画・PDF・コードリポジトリなど多様なデータソースを横断して処理可能です。複雑なデータ統合や高度な問題解決に最適化されています。",
      "価格は入力$2/出力$18（100万トークンあたり）で、Gemini 3 Proから据え置き。Geminiアプリ（Pro/Ultraプラン）、AI Studio、Vertex AI、Gemini CLI、Android Studio、NotebookLM で利用可能です。JetBrains IDE、Xcode、Eclipseでも GitHub Copilot経由で利用できます。",
      "エージェントワークフローの改善にも注力しており、Gemini Code Assistは個人開発者向けに完全無料化されました。月間18万リクエストまで無料で利用でき、VS CodeとJetBrains IDEに対応しています。"
    ],
    "date": "2026-03-27",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "モデル",
      "Google",
      "速報",
      "推論"
    ],
    "features": [
      "ARC-AGI-2 77.1%",
      "1Mコンテキスト",
      "価格据え置き",
      "マルチモーダル",
      "Code Assist無料化"
    ]
  },
  {
    "id": "gpt-5-4-release",
    "type": "feature",
    "category": "special",
    "title": "GPT-5.4 リリース — 推論・コーディング・エージェントを統合した「ワンモデル」",
    "excerpt": "OpenAIが3月5日にリリースした最新フラグシップモデル。GPT-5.3-Codexのコーディング性能とGPT-5.2の推論力を統合し、25%高速化。",
    "body": [
      "OpenAIは2026年3月5日、GPT-5.4をリリースしました。推論、コーディング、エージェントワークフローを1つのモデルに統合した「ワンモデル」アプローチが特徴です。",
      "GPT-5.3-Codex（2月5日リリース）で達成した業界トップクラスのSWE-Bench Pro・Terminal-Benchスコアを継承しつつ、汎用的な推論タスクでも大幅に性能向上。速度は前世代比25%改善されています。",
      "Codexプラットフォームにはファーストクラスのプラグイン対応、マルチエージェントワークフロー、画像処理の改善、TUIのプロンプトリコール・ファイルウォッチ機能なども追加されました。",
      "なお3月11日付でGPT-5.1モデル（Instant/Thinking/Pro）はChatGPTから廃止されています。GPT-5.4はChatGPT Pro/Team/Enterpriseプランで利用可能です。"
    ],
    "date": "2026-03-27",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "モデル",
      "OpenAI",
      "速報",
      "エージェント"
    ],
    "features": [
      "統合モデル",
      "25%高速化",
      "SWE-Bench Pro",
      "プラグイン対応",
      "マルチエージェント"
    ]
  },
  {
    "id": "windsurf-pricing-overhaul",
    "type": "feature",
    "category": "special",
    "title": "Windsurf、クレジット制を廃止しクォータ制へ全面移行 — Pro価格は$20に",
    "excerpt": "3月19日、Windsurfがクレジットベースの料金体系から日次・週次クォータ制に変更。Pro価格が$15→$20に上昇し、Cursorとの価格差が消滅。",
    "body": [
      "Windsurf（旧Codeium）は2026年3月19日、料金体系を全面的に改定しました。従来のクレジットベースのシステムを廃止し、日次・週次で自動更新されるクォータ制に移行します。",
      "新プランはFree、Pro（$20/月）、Teams、Max（$200/月）の4段階。従来のProは$15/月だったため$5の値上げとなり、Cursorの$20/月と同額になりました。これにより、Windsurfの最大の競争優位だった価格差が消滅しています。",
      "クォータ制では、月間プールではなく日次・週次のレートリミットとして使用量が管理されます。既存の有料ユーザーは現行価格が継続適用され、新体系を試すための無料期間も設けられています。",
      "ユーザーコミュニティからは料金改定に対する批判の声も上がっています。Cursor傘下に入ったことで独自の差別化が難しくなる中、今後の機能面での差別化に注目が集まります。"
    ],
    "date": "2026-03-27",
    "author": "AI News 編集部",
    "readTime": "3分",
    "tags": [
      "エディタ",
      "Windsurf",
      "料金改定",
      "速報"
    ]
  },
  {
    "id": "gemini-cli",
    "type": "review",
    "category": "cli",
    "title": "Gemini CLI レビュー — Googleが放つ200万トークンの超大規模コンテキストCLI",
    "excerpt": "Google DeepMindが開発。Gemini 2.5 Proの200万トークンコンテキストで、大規模リポジトリを丸ごと解析。無料枠も充実。",
    "body": [
      "Google DeepMindがリリースしたGemini CLIは、Gemini 2.5 Proモデルの圧倒的なコンテキストウィンドウ（200万トークン）を武器に、大規模コードベースの一括解析を可能にするCLIツールです。",
      "オープンソースで提供され、Googleアカウントがあれば無料枠（1日1,000リクエスト）で利用開始できます。Google Cloud、Firebase、Vertex AIとのネイティブ統合により、Googleエコシステム内での開発体験が大幅に向上します。",
      "MCP（Model Context Protocol）にも対応しており、サードパーティツールとの連携も可能です。ただし、エージェント機能の成熟度ではClaude CodeやCursorにまだ一歩及ばない印象です。コンテキスト量で勝負する場面では強力な選択肢になるでしょう。"
    ],
    "date": "2026-03-25",
    "author": "AI News 編集部",
    "readTime": "5分",
    "rating": 4,
    "company": "Google DeepMind",
    "pricing": "無料枠あり（API実費）",
    "model": "Gemini 2.5 Pro",
    "tags": [
      "CLI",
      "Google",
      "OSS",
      "新着"
    ],
    "features": [
      "200万トークン",
      "無料枠",
      "OSS",
      "Google Cloud統合",
      "MCP対応"
    ]
  },
  {
    "id": "openai-codex-agent",
    "type": "review",
    "category": "cli",
    "title": "OpenAI Codex — クラウド並列実行のAIコーディングエージェント",
    "excerpt": "OpenAIが満を持してリリースしたコーディングエージェント。クラウドサンドボックスで複数タスクを並列実行し、PRとして提出する新しいワークフロー。",
    "body": [
      "OpenAIのCodexは、ChatGPT上で動作するクラウドベースのAIコーディングエージェントです。開発者がタスクを指示すると、クラウド上のサンドボックス環境でコードの探索・修正・テストを自律的に実行し、結果をPull Requestとして提出します。",
      "最大の特徴は並列実行です。複数のタスクを同時にCodexに投げることができ、それぞれが独立したサンドボックスで実行されます。バグ修正、機能追加、テスト作成などを一度に並行して進められるのは大きな生産性向上につながります。",
      "o4-miniモデルをベースとし、コード理解と生成に最適化されています。ChatGPT Pro/Team/Enterpriseプランで利用可能で、API経由での利用にも対応予定です。ただし、ローカル環境での実行には対応しておらず、オフライン利用はできません。"
    ],
    "date": "2026-03-22",
    "author": "AI News 編集部",
    "readTime": "5分",
    "rating": 4,
    "company": "OpenAI",
    "pricing": "Pro $200/月〜",
    "model": "o4-mini",
    "tags": [
      "CLI",
      "エージェント",
      "クラウド",
      "新着"
    ],
    "features": [
      "クラウド実行",
      "並列タスク",
      "PR自動作成",
      "サンドボックス",
      "ChatGPT統合"
    ]
  },
  {
    "id": "cursor-windsurf-merge",
    "type": "feature",
    "category": "special",
    "title": "Cursor、Windsurf（Codeium）を買収完了 — AIエディタ市場の統合が加速",
    "excerpt": "Anysphere社がCodeium社のWindsurfを買収。Cascadeフロー技術をCursorに統合予定。AIエディタ市場の寡占化が進む。",
    "body": [
      "Anysphere社（Cursor開発元）は2026年3月、Codeium社が開発するAIエディタ「Windsurf」の買収を完了したと発表しました。買収額は非公開ですが、業界では数億ドル規模と推定されています。",
      "この買収により、CursorはWindsurfの独自技術「Cascade」フローを統合する計画です。Cascadeはタスクを段階的に分解して実行する技術で、複雑な変更を安全に進められる点が評価されていました。",
      "一方で、この統合によりAIエディタ市場の選択肢が減少することへの懸念も出ています。Windsurf単体の提供は当面継続されますが、長期的にはCursorへの一本化が予想されます。OSS陣営のZed AI、Void、PearAIへの注目が高まる可能性もあります。"
    ],
    "date": "2026-03-20",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "エディタ",
      "買収",
      "業界動向"
    ]
  },
  {
    "id": "claude-code",
    "type": "review",
    "category": "cli",
    "title": "Claude Code レビュー — 2026年最強のCLIエージェント",
    "excerpt": "claudeコマンド1つでリポジトリ全体を読み込み、バグ修正からテスト実行、コミットまで自律的に行う。Opus 4.6の1Mコンテキストによる「深い推論」が、複雑なリファクタリングを可能にしている。",
    "body": [
      "Anthropic が提供する Claude Code は、2026年現在、最も強力なCLI型AIエージェントです。ターミナルで claude と入力するだけで、プロジェクト全体のコンテキストを理解し、開発タスクを自律的に遂行します。",
      "最大の強みは、Opus 4.6モデルの1Mコンテキストウィンドウによる「深い推論能力」です。単純なコード生成ではなく、アーキテクチャレベルの判断を伴う複雑なリファクタリングにも対応できます。Fast Modeでは同じOpus 4.6モデルのまま出力速度を向上させることも可能です。",
      "MCP（Model Context Protocol）への対応により、外部ツールやデータソースとの連携が容易です。Hooks機能でイベント駆動のカスタムワークフローも構築できます。GitHub、Jira、Slackなどの開発ワークフロー全体をカバーできる点も大きな魅力です。",
      "料金はPro プラン $25/月から。ヘビーユーザーにはMax プラン（$100/月〜）も用意されています。Claude Code SDKによるカスタムエージェント構築にも対応し、SOC2準拠でエンタープライズ利用も万全。Claude Code単体でARR25億ドル規模に成長し、Anthropic全体のARRは190億ドルに達しています。"
    ],
    "date": "2026-03-27",
    "author": "AI News 編集部",
    "readTime": "8分",
    "rating": 5,
    "company": "Anthropic",
    "pricing": "$25/月〜（Pro/Max）",
    "model": "Opus 4.6 (1M)",
    "tags": [
      "CLI",
      "Anthropic",
      "エージェント",
      "おすすめ"
    ],
    "features": [
      "自律的エージェント",
      "1Mコンテキスト",
      "Fast Mode",
      "Hooks",
      "MCP対応",
      "Agent SDK"
    ]
  },
  {
    "id": "cursor-cli",
    "type": "review",
    "category": "cli",
    "title": "Cursor CLI (Composer) レビュー — IDE一体型の最強CLI",
    "excerpt": "IDE一体型でありながら、CLIモード（Composer）が極めて強力。自然言語で伝えるだけで、関連ファイルを自動で見つけ出し、変更案を提示する。",
    "body": [
      "Anysphere社のCursorは、VS Codeフォークとして最も成功したAIエディタですが、そのCLIモード（Composer）も非常に強力です。Windsurf買収によりCascade技術の統合も進行中です。",
      "開発者が「何をしたいか」を自然言語で伝えると、プロジェクト内の関連ファイルを自動で特定し、複数ファイルにまたがる変更案を一括で提示します。VS Codeとのシームレスな同期により、CLI操作の結果がエディタにリアルタイムで反映される点が大きな強みです。",
      "Background Agent機能により、バックグラウンドでの自律的なタスク実行にも対応。Privacy Modeを有効にすることで、コードがモデルの学習に使用されることを防ぐことができ、企業利用にも適しています。月額$20で全機能にアクセスできるコストパフォーマンスも魅力的です。"
    ],
    "date": "2026-03-15",
    "author": "AI News 編集部",
    "readTime": "6分",
    "rating": 5,
    "company": "Anysphere",
    "pricing": "$20/月",
    "model": "Sonnet 4.6",
    "tags": [
      "CLI",
      "IDE統合",
      "おすすめ"
    ],
    "features": [
      "IDE統合",
      "Composer CLI",
      "Background Agent",
      "マルチファイル編集",
      "Privacy Mode"
    ]
  },
  {
    "id": "github-copilot-cli",
    "type": "review",
    "category": "cli",
    "title": "GitHub Copilot CLI — Enterprise最強のセキュリティと統合力",
    "excerpt": "GitHubエコシステムとシームレスに統合。Copilot Coding Agentによる自律的なIssue対応が新たに追加。",
    "body": [
      "GitHub Copilot CLIは、世界最大のコードホスティングプラットフォームであるGitHubとの完全統合が最大の強みです。gh copilot コマンドで、PR作成、Issue管理、コードレビューをAIがサポートします。",
      "2026年3月のアップデートで「Copilot Coding Agent」が正式リリースされ、GitHubのIssueを割り当てるだけでAIが自律的にコードを書き、PRを作成する機能が追加されました。これにより、定型的なバグ修正や機能追加を大幅に自動化できます。",
      "Enterprise向けには、組織レベルでのポリシー管理、監査ログ、IP保護機能が充実。月額$10からと手頃な価格設定も魅力で、個人開発者からエンタープライズまで幅広いユースケースに対応しています。"
    ],
    "date": "2026-03-10",
    "author": "AI News 編集部",
    "readTime": "5分",
    "rating": 4,
    "company": "GitHub (Microsoft)",
    "pricing": "$10/月〜",
    "model": "GPT-5.4 / o4-mini",
    "tags": [
      "CLI",
      "GitHub",
      "Enterprise"
    ],
    "features": [
      "GitHub統合",
      "Coding Agent",
      "Enterprise対応",
      "Issue自動対応",
      "セキュリティスキャン"
    ]
  },
  {
    "id": "aider",
    "type": "review",
    "category": "cli",
    "title": "Aider レビュー — OSSの星、マルチモデル対応CLI",
    "excerpt": "複数ファイルの一括修正に特化したOSSツール。Gitとの親和性が高く、様々なLLMプロバイダーに対応。",
    "body": [
      "Aiderは、オープンソースのAI開発CLIツールとして最も成熟したプロジェクトの1つです。無料で利用でき、API実費のみで最先端のAI開発体験が得られます。",
      "最大の特徴は、マルチモデル対応です。OpenAI、Anthropic、Google、ローカルLLMなど、あらゆるプロバイダーのモデルを自由に切り替えて使用できます。Git統合が非常に優れており、変更ごとに自動コミットを生成する機能も便利です。",
      "ただし、APIキーの管理は自己責任であり、エンタープライズ向けのセキュリティ機能は限定的です。個人開発者やOSSプロジェクトでの利用に最適です。"
    ],
    "date": "2026-03-03",
    "author": "AI News 編集部",
    "readTime": "5分",
    "rating": 4,
    "company": "OSS",
    "pricing": "無料（API実費）",
    "model": "Opus 4.6 / GPT-5.4",
    "tags": [
      "CLI",
      "OSS",
      "無料"
    ],
    "features": [
      "OSS",
      "マルチモデル対応",
      "Git統合",
      "マルチファイル編集",
      "無料"
    ]
  },
  {
    "id": "codebuff",
    "type": "review",
    "category": "cli",
    "title": "CodeBuff — 急成長中の新星CLI",
    "excerpt": "直感的なUIとDiff確認が特徴の新興CLI。スピードと精度のバランスがトップクラス。",
    "body": [
      "CodeBuffは2024年に登場し、急速にシェアを伸ばしている新興CLIツールです。ターミナル上でありながら直感的なUIを提供し、変更前後のDiff表示が非常に見やすいのが特徴です。",
      "Sonnet 4.6をデフォルトモデルとして採用し、スピードと精度のバランスに優れています。月額$20で、VS Code連携機能も含まれています。"
    ],
    "date": "2026-03-02",
    "author": "AI News 編集部",
    "readTime": "4分",
    "rating": 4,
    "company": "CodeBuff",
    "pricing": "$20/月",
    "model": "Sonnet 4.6",
    "tags": [
      "CLI",
      "新興"
    ],
    "features": [
      "直感的UI",
      "Diff表示",
      "マルチファイル",
      "高速",
      "VS Code連携"
    ]
  },
  {
    "id": "amazon-q",
    "type": "review",
    "category": "cli",
    "title": "Amazon Q Developer — AWS特化のAI開発CLI",
    "excerpt": "AWS環境の操作・構築に特化。インフラ構築からコード生成まで、AWSエコシステム内で強力なサポートを提供。",
    "body": [
      "Amazon Q Developerは、AWSが提供するAI開発支援CLIです。AWS環境でのインフラ構築、Lambda関数の生成、CloudFormationテンプレートの作成など、AWSに特化した機能が充実しています。",
      "Nova Pro 2モデルをバックエンドに採用し、AWSの膨大なドキュメントとベストプラクティスを学習済み。月額$19で利用可能です。"
    ],
    "date": "2026-03-01",
    "author": "AI News 編集部",
    "readTime": "4分",
    "rating": 4,
    "company": "AWS",
    "pricing": "$19/月",
    "model": "Nova Pro 2",
    "tags": [
      "CLI",
      "AWS",
      "クラウド"
    ],
    "features": [
      "AWS統合",
      "インフラ構築",
      "セキュリティ",
      "コード生成",
      "デバッグ支援"
    ]
  },
  {
    "id": "cline",
    "type": "review",
    "category": "cli",
    "title": "Cline — ローカル実行可能なOSS CLI",
    "excerpt": "オープンソース。ローカル実行でプライバシーを確保しつつ、様々なLLMと連携可能。",
    "body": [
      "ClineはオープンソースのAI開発CLIで、ローカルでの実行に対応しています。プライバシーを重視する開発者に人気があり、VS Code拡張としても利用可能です。",
      "マルチモデル対応で、クラウドLLMとローカルLLMの両方をサポート。カスタマイズ性が高く、独自のワークフローを構築できます。"
    ],
    "date": "2026-02-28",
    "author": "AI News 編集部",
    "readTime": "4分",
    "rating": 4,
    "company": "OSS",
    "pricing": "無料（API実費）",
    "model": "GPT-5.4 / 各種",
    "tags": [
      "CLI",
      "OSS",
      "プライバシー"
    ],
    "features": [
      "OSS",
      "マルチモデル",
      "VS Code拡張",
      "ローカル実行",
      "カスタマイズ可能"
    ]
  },
  {
    "id": "warp-ai",
    "type": "review",
    "category": "cli",
    "title": "Warp AI — AIを内蔵したモダンターミナル",
    "excerpt": "ターミナル自体にAIが組み込まれた新しいアプローチ。コマンド補完やエラー解析をターミナル内で直接提供。",
    "body": [
      "Warp AIは、ターミナルアプリケーション自体にAIを組み込むという独自のアプローチを取っています。コマンドの自動補完、エラーメッセージの解析、シェルスクリプトの生成をターミナル内で直接行えます。",
      "月額$12からと手頃な価格で、チーム共有機能も充実しています。ただし、コード編集機能は他のCLIツールほど強力ではありません。"
    ],
    "date": "2026-02-27",
    "author": "AI News 編集部",
    "readTime": "3分",
    "rating": 3,
    "company": "Warp",
    "pricing": "$12/月〜",
    "model": "Agent AI",
    "tags": [
      "CLI",
      "ターミナル"
    ],
    "features": [
      "ターミナル統合",
      "コマンド補完",
      "エラー解析",
      "チーム共有",
      "モダンUI"
    ]
  },
  {
    "id": "cursor-editor",
    "type": "review",
    "category": "editor",
    "title": "Cursor レビュー — AIエディタの王者、Windsurf統合で盤石に",
    "excerpt": "VS Code フォークで最も人気のAIエディタ。Windsurf買収によるCascade統合とBackground Agentの追加でさらに進化。",
    "body": [
      "Cursorは、VS Codeをベースに構築された最も人気のAIエディタです。2023年のリリース以来、急速にユーザー数を増やし、2026年現在ではAIエディタ市場のリーダー的存在です。",
      "Windsurf（Codeium）の買収完了により、Cascadeフロー技術の統合が進行中。タスクを段階的に分解して安全に実行する機能が加わることで、大規模リファクタリングでの信頼性がさらに向上する見込みです。",
      "Background Agent機能では、バックグラウンドでの自律的タスク実行に対応。コードレビュー中に別のタスクをAgentに任せるなど、並列ワークフローが可能になりました。Sonnet 4.6とOpus 4.6の両方に対応し、タスクの複雑さに応じてモデルを自動切替する機能も搭載。"
    ],
    "date": "2026-03-26",
    "author": "AI News 編集部",
    "readTime": "7分",
    "rating": 5,
    "company": "Anysphere",
    "pricing": "$20/月",
    "model": "Sonnet 4.6 / Opus 4.6",
    "tags": [
      "エディタ",
      "おすすめ",
      "VS Code"
    ],
    "features": [
      "Tab補完",
      "Composer",
      "Background Agent",
      "Cascade統合予定",
      "VS Code互換"
    ]
  },
  {
    "id": "windsurf",
    "type": "review",
    "category": "editor",
    "title": "Windsurf — Cursor傘下で継続提供、Cascadeフローが光るAIエディタ",
    "excerpt": "Anysphere社に買収されたが、単体提供は継続中。Cascadeフローによる段階的なコード生成が特徴。無料プランも維持。",
    "body": [
      "Windsurf（旧Codeium）は、独自の「Cascade」フローにより、タスクを段階的に分解して実行するAIエディタです。Anysphere社への買収完了後も単体での提供は継続されています。",
      "無料プランでも強力な補完機能が使える点は、個人開発者にとって大きな魅力です。有料プランは月額$15とCursorより安価。ただし、長期的にはCursorへの機能統合が予想されるため、新規導入は要検討です。"
    ],
    "date": "2026-03-18",
    "author": "AI News 編集部",
    "readTime": "5分",
    "rating": 4,
    "company": "Codeium (Anysphere傘下)",
    "pricing": "$15/月",
    "model": "Sonnet 4.6 / GPT-5.4",
    "tags": [
      "エディタ",
      "無料プラン有り",
      "買収"
    ],
    "features": [
      "Cascade",
      "無料プラン有り",
      "高速補完",
      "マルチモデル",
      "VS Code互換"
    ]
  },
  {
    "id": "zed-ai",
    "type": "review",
    "category": "editor",
    "title": "Zed AI — Rust製の超高速AIエディタ",
    "excerpt": "Rust製のネイティブパフォーマンス。リアルタイムコラボレーション機能も内蔵した次世代エディタ。",
    "body": [
      "Zedは、Rust言語で開発された超高速エディタで、2024年にAI機能を統合しました。ネイティブアプリケーションならではの圧倒的なパフォーマンスが最大の魅力です。",
      "リアルタイムコラボレーション機能を内蔵しており、チームでの共同編集にも対応。AI機能は月額$15で利用でき、Sonnet 4.6をバックエンドとして採用しています。Cursor-Windsurf統合の動きを受け、オープンソース代替として注目が急上昇中です。"
    ],
    "date": "2026-03-12",
    "author": "AI News 編集部",
    "readTime": "4分",
    "rating": 4,
    "company": "Zed Industries",
    "pricing": "無料（AI機能は$15/月）",
    "model": "Sonnet 4.6",
    "tags": [
      "エディタ",
      "高速",
      "Rust"
    ],
    "features": [
      "超高速",
      "Rust製",
      "コラボレーション",
      "AIアシスタント",
      "マルチプレイヤー"
    ]
  },
  {
    "id": "vscode",
    "type": "review",
    "category": "editor",
    "title": "VS Code + Copilot — 定番エディタのAI進化",
    "excerpt": "世界で最も使われるエディタ。GitHub Copilotとの統合で強力なAI支援。Coding Agentの追加でさらに進化。",
    "body": [
      "Visual Studio Codeは世界で最も使われるエディタであり、GitHub Copilotとの統合によるAI支援が強力です。2026年にはCopilot Coding Agentが追加され、Issueベースの自律的なタスク実行にも対応しました。",
      "巨大なエコシステムを持ち、拡張機能の豊富さは他のエディタの追随を許しません。エディタ本体は無料で、Copilotは月額$10から利用できます。"
    ],
    "date": "2026-03-08",
    "author": "AI News 編集部",
    "readTime": "4分",
    "rating": 4,
    "company": "Microsoft",
    "pricing": "無料（Copilot $10/月〜）",
    "model": "GPT-5.4 (Copilot)",
    "tags": [
      "エディタ",
      "定番",
      "無料"
    ],
    "features": [
      "Copilot統合",
      "Coding Agent",
      "巨大エコシステム",
      "拡張機能豊富",
      "無料"
    ]
  },
  {
    "id": "void",
    "type": "review",
    "category": "editor",
    "title": "Void — プライバシー重視のOSSエディタ",
    "excerpt": "ローカルLLMとクラウドLLMの両方に対応するオープンソースエディタ。プライバシー重視の開発者に人気。",
    "body": [
      "Voidは、プライバシーを重視する開発者のためのオープンソースAIエディタです。ローカルLLMとクラウドLLMの両方に対応し、コードを外部に送信せずにAI支援を受けることができます。",
      "VS Code互換のインターフェースで、既存のVS Codeユーザーでも違和感なく使い始められます。完全無料で利用可能です。"
    ],
    "date": "2026-03-02",
    "author": "AI News 編集部",
    "readTime": "3分",
    "rating": 4,
    "company": "Void Editor",
    "pricing": "無料（OSS）",
    "model": "マルチモデル",
    "tags": [
      "エディタ",
      "OSS",
      "プライバシー"
    ],
    "features": [
      "OSS",
      "ローカルLLM対応",
      "マルチモデル",
      "プライバシー重視",
      "VS Code互換"
    ]
  },
  {
    "id": "pearai",
    "type": "review",
    "category": "editor",
    "title": "PearAI — コミュニティドリブンのOSSエディタ",
    "excerpt": "VS Codeベースのオープンソースエディタ。AIチャットとインライン編集に特化。",
    "body": [
      "PearAIは、コミュニティドリブンで開発されているVS CodeベースのOSSエディタです。AIチャットとインライン編集に特化しており、シンプルで使いやすいインターフェースが特徴です。",
      "月額$15で利用可能で、Sonnet 4.6をバックエンドに採用しています。急成長中のプロジェクトで、今後の機能拡充にも期待が持てます。"
    ],
    "date": "2026-03-01",
    "author": "AI News 編集部",
    "readTime": "3分",
    "rating": 3,
    "company": "PearAI",
    "pricing": "$15/月",
    "model": "Sonnet 4.6",
    "tags": [
      "エディタ",
      "OSS"
    ],
    "features": [
      "OSS",
      "AIチャット",
      "インライン編集",
      "VS Code互換",
      "コミュニティ"
    ]
  },
  {
    "id": "trae",
    "type": "review",
    "category": "editor",
    "title": "Trae — ByteDance発のAIエディタ、Builder Modeが話題",
    "excerpt": "ByteDance社開発。Builder Modeで自然言語からアプリ全体を生成。無料で利用可能。",
    "body": [
      "Traeは、TikTokの親会社であるByteDanceが開発したAIエディタです。最大の特徴は「Builder Mode」で、自然言語でアプリの仕様を説明するだけで、プロジェクト全体を自動生成します。",
      "完全無料で利用でき、独自モデル（Doubao）とGPT-5.4の両方に対応しています。中国市場で急成長中ですが、日本語対応はまだ限定的です。"
    ],
    "date": "2026-02-28",
    "author": "AI News 編集部",
    "readTime": "3分",
    "rating": 3,
    "company": "ByteDance",
    "pricing": "無料",
    "model": "Doubao / GPT-5.4",
    "tags": [
      "エディタ",
      "無料",
      "中国"
    ],
    "features": [
      "Builder Mode",
      "無料",
      "マルチモデル",
      "アプリ生成",
      "中国語対応"
    ]
  },
  {
    "id": "ai-model-research-resources-by-angle-2026",
    "type": "feature",
    "category": "special",
    "title": "【編集部資料・全公開】AIモデル進化を追うサイト — 切り口別リンク集（時系列・OSS・中国勢・Ollama・ベンチ）",
    "excerpt": "記事執筆や選定の前に使う**調査ハブ**。時系列年表・計算量データベース・実用ベンチ比較・Hugging Face・DeepSeek/Qwen 公式・ローカル（Ollama）まで、目的別に整理。**二次ソースの横並べと一次ソースの確認**をセットで回すためのリストです。",
    "body": [
      "フロンティアモデルの話は、製品名・API の model ID・発表日・ベンチ条件が数日単位で動きます。本稿は「どのサイトをどの目的で開くか」を **切り口別**に並べた **当サイト上のリソース記事**です（GitHub の `docs/AI_MODEL_EVOLUTION_RESOURCES_BY_ANGLE.md` と同内容をベースに、読みやすく再構成しています）。**最終的な事実確認は、各社の公式 changelog・モデルカード・契約書**で行ってください。",
      "使い方の目安です。**いつ何が出たか**は時系列・年表系、**今どれが速い・安い**は Artificial Analysis などの実用比較、**学習計算量や規模**は Epoch、**派生モデルとライセンス**は Hugging Face、**中国勢**は DeepSeek / Qwen / ModelScope など公式系、**手元実行**は Ollama・llama.cpp（※Ollama はモデル本体の製作者ではなく **配布・推論の接着剤**）、**ベンチの意味**は各ベンチ公式と解説記事をセット、という分割が扱いやすいです。",
      "次の **クイックガイド** と **切り口別の表** に URL を集約しました。表内の https は本文と同様にリンク化されます。リンク切れやサービス終了は利用時に各自ご確認ください。",
      "比較記事を書くときの最低限の作法もあわせておきます。**「SOTA」**と書くならベンチ名・評価日・データ分割・モデル版のいずれかを添える。**年表サイト**はストーリー整理には便利ですが、日付の確定は **一次発表**へ上乗せする。Epoch など **CC 系データ**を転載する場合は元ページのライセンス表記に従う。企業利用では中国系モデルやクラウド経路の **データ所在地・規約** も別途確認すると安全です。",
      "最後に **各社公式の確認用入口** を表にまとめました。製品ブログの見出しだけ追うと「ChatGPT の表示名」と「API の model 名」がずれることがあるため、開発ドキュメント側の **model 一覧・廃止予告** も必ず見てください。"
    ],
    "date": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "12分",
    "tags": [
      "調査",
      "リソース",
      "タイムライン",
      "OSS",
      "中国モデル",
      "Ollama",
      "ベンチマーク"
    ],
    "features": [
      "切り口別リンク集",
      "一次・二次の切り分け前提",
      "docs と本記事の双方向"
    ],
    "tables": [
      {
        "afterParagraph": 1,
        "caption": "クイックガイド（やりたいこと → まず開く切り口）",
        "headers": [
          "やりたいこと",
          "主に見る切り口（本記事内の表）"
        ],
        "rows": [
          [
            "時系列・系譜を掴む",
            "表: 時系列・年表"
          ],
          [
            "遅延・価格・品質の横比較",
            "表: 実用比較"
          ],
          [
            "学習規模・計算量で語る",
            "表: 物量・計算量"
          ],
          [
            "オープンウェイト・派生",
            "表: OSS・コミュニティ"
          ],
          [
            "中国勢（API/OSS/国内プロダクト）",
            "表: 中国勢"
          ],
          [
            "ローカル実行・Ollama",
            "表: ローカル・Ollama 周辺"
          ],
          [
            "画像・音声・動画・文書",
            "表: マルチモーダル"
          ],
          [
            "推論・エージェント・ツール",
            "表: 推論・エージェント"
          ],
          [
            "産業全体の数字",
            "表: マクロ統計"
          ],
          [
            "ベンチの定義を読む",
            "表: ベンチマーク作法"
          ],
          [
            "モデル名・日付の確定",
            "表: 各社公式 changelog"
          ]
        ]
      },
      {
        "afterParagraph": 2,
        "caption": "切り口1: 時系列・系譜（ストーリー軸）",
        "headers": [
          "リソース",
          "URL",
          "メモ"
        ],
        "rows": [
          [
            "LifeArchitect.ai — Timeline",
            "https://lifearchitect.ai/timeline/",
            "LLM 中心の長い年表。別ページに大規模モデル表。"
          ],
          [
            "Epoch AI — AI models",
            "https://epoch.ai/data/ai-models/",
            "規模・計算量など。データ利用はライセンス確認。"
          ],
          [
            "SPAITIAL — Models timeline",
            "https://spaitial.space/models/",
            "ビジュアル寄りのタイムライン。"
          ],
          [
            "AI History Project",
            "https://aihistoryproject.org/",
            "イベント年表系。二次整理として。"
          ]
        ]
      },
      {
        "afterParagraph": 2,
        "caption": "切り口2: 実用比較（速さ・価格・品質の並べ方）",
        "headers": [
          "リソース",
          "URL",
          "メモ"
        ],
        "rows": [
          [
            "Artificial Analysis",
            "https://artificialanalysis.ai/",
            "API/フロンティアの実用比較でよく参照される。"
          ],
          [
            "LMSYS Chatbot Arena",
            "https://chat.lmsys.org/",
            "投票ベース。母集団・解釈に注意。"
          ]
        ]
      },
      {
        "afterParagraph": 2,
        "caption": "切り口3: 物量（学習計算量・データ規模）",
        "headers": [
          "リソース",
          "URL",
          "メモ"
        ],
        "rows": [
          [
            "Epoch AI",
            "https://epoch.ai/",
            "インサイト記事（例: コンテキスト長トレンド）も。"
          ],
          [
            "各モデル技術レポート",
            "https://arxiv.org/",
            "パラメータ・トークン・FLOPs は定義ゆれあり。"
          ]
        ]
      },
      {
        "afterParagraph": 2,
        "caption": "切り口4: OSS・コミュニティ・派生モデル",
        "headers": [
          "リソース",
          "URL",
          "メモ"
        ],
        "rows": [
          [
            "Hugging Face — Models",
            "https://huggingface.co/models",
            "权重み・派生の中心。"
          ],
          [
            "Papers with Code",
            "https://paperswithcode.com/",
            "論文・実装・SOTA 対応。"
          ],
          [
            "Meta — Llama ブログ",
            "https://ai.meta.com/blog/",
            "Llama 世代の公式。"
          ],
          [
            "Mistral — News",
            "https://mistral.ai/news/",
            "欧州 OSS ストーリー。"
          ],
          [
            "Qwen — Blog",
            "https://qwenlm.github.io/blog/",
            "Qwen2/2.5/3 系の公式。"
          ]
        ]
      },
      {
        "afterParagraph": 2,
        "caption": "切り口5: 中国勢（API・OSS・国内プロダクト混在）",
        "headers": [
          "リソース",
          "URL",
          "メモ"
        ],
        "rows": [
          [
            "DeepSeek API Docs",
            "https://api-docs.deepseek.com/",
            "価格・ニュース欄。"
          ],
          [
            "Qwen Blog",
            "https://qwenlm.github.io/blog/",
            "多言語・Coder/Math 枝。"
          ],
          [
            "ModelScope",
            "https://modelscope.cn/",
            "国内ホスティング。アクセス環境に注意。"
          ],
          [
            "MoonshotAI — GitHub",
            "https://github.com/MoonshotAI",
            "Kimi 系はリポジトリで追いやすい。"
          ],
          [
            "Z.AI 開発者 docs",
            "https://docs.z.ai/",
            "智谱 GLM 系リリースノート。"
          ],
          [
            "ByteDance Seed Blog",
            "https://seed.bytedance.com/en/blog",
            "Seed / 豆包 系。"
          ]
        ]
      },
      {
        "afterParagraph": 2,
        "caption": "切り口6: ローカル実行・Ollama 周辺（配布と本体は別軸）",
        "headers": [
          "リソース",
          "URL",
          "メモ"
        ],
        "rows": [
          [
            "Ollama — Library",
            "https://ollama.com/library",
            "ランタイム＋パッケージ。API最新版と不一致の場合あり。"
          ],
          [
            "llama.cpp",
            "https://github.com/ggerganov/llama.cpp",
            "ローカル推論の実装のひとつ。"
          ],
          [
            "vLLM",
            "https://github.com/vllm-project/vllm",
            "スループット・サーバ用途。"
          ],
          [
            "LM Studio",
            "https://lmstudio.ai/",
            "GUI でのローカル利用。"
          ],
          [
            "MLX",
            "https://github.com/ml-explore/mlx",
            "Apple Silicon 向け最適化。"
          ]
        ]
      },
      {
        "afterParagraph": 2,
        "caption": "切り口7: マルチモーダル（画像・音声・動画・文書）",
        "headers": [
          "リソース",
          "URL",
          "メモ"
        ],
        "rows": [
          [
            "Gemini API Docs",
            "https://ai.google.dev/gemini-api/docs",
            "入力モダリティはモデルで差。"
          ],
          [
            "OpenAI Platform Docs",
            "https://platform.openai.com/docs",
            "Vision/Audio 等はモデル別。"
          ],
          [
            "Papers with Code — SOTA",
            "https://paperswithcode.com/sota",
            "タスク別指標。"
          ]
        ]
      },
      {
        "afterParagraph": 2,
        "caption": "切り口8: 推論特化・エージェント・ツール",
        "headers": [
          "リソース",
          "URL",
          "メモ"
        ],
        "rows": [
          [
            "OpenAI Cookbook",
            "https://cookbook.openai.com/",
            "関数呼び出し等のパターン。"
          ],
          [
            "Anthropic API Docs",
            "https://docs.anthropic.com/",
            "ツール・プロンプト設計。"
          ],
          [
            "Qwen-Agent",
            "https://github.com/QwenLM/Qwen-Agent",
            "オープン系エージェント例。"
          ]
        ]
      },
      {
        "afterParagraph": 2,
        "caption": "切り口9: 産業・政策（マクロ）",
        "headers": [
          "リソース",
          "URL",
          "メモ"
        ],
        "rows": [
          [
            "Stanford AI Index",
            "https://aiindex.stanford.edu/",
            "年次レポート。個別モデルより俯瞰。"
          ]
        ]
      },
      {
        "afterParagraph": 2,
        "caption": "切り口10: ベンチマークを読むときの作法",
        "headers": [
          "リソース",
          "URL",
          "メモ"
        ],
        "rows": [
          [
            "各ベンチ公式",
            "（タスク名で検索）",
            "MMLU / HumanEval / SWE-bench 等は条件が命。"
          ],
          [
            "Epoch / Artificial Analysis",
            "https://epoch.ai/",
            "上記の表とあわせメソッド説明を読む。"
          ]
        ]
      },
      {
        "afterParagraph": 4,
        "caption": "切り口11: 各社公式 changelog・確認用入口（一次ソース優先）",
        "headers": [
          "組織",
          "参照先（例）"
        ],
        "rows": [
          [
            "OpenAI（モデルリリースノート）",
            "https://help.openai.com/en/articles/9624314-model-release-notes"
          ],
          [
            "OpenAI（ニュース）",
            "https://openai.com/news/"
          ],
          [
            "Anthropic",
            "https://www.anthropic.com/news"
          ],
          [
            "Google Gemini",
            "https://ai.google.dev/gemini-api/docs/changelog"
          ],
          [
            "Meta",
            "https://ai.meta.com/blog/"
          ],
          [
            "Mistral",
            "https://mistral.ai/news/"
          ],
          [
            "DeepSeek",
            "https://api-docs.deepseek.com/"
          ],
          [
            "Alibaba Qwen",
            "https://qwenlm.github.io/blog/"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Epoch AI — Data on AI models",
        "site": "Epoch AI",
        "url": "https://epoch.ai/data/ai-models/"
      },
      {
        "title": "LifeArchitect.ai — Timeline of AI and language models",
        "site": "LifeArchitect.ai",
        "url": "https://lifearchitect.ai/timeline/"
      },
      {
        "title": "Artificial Analysis",
        "site": "Artificial Analysis",
        "url": "https://artificialanalysis.ai/"
      },
      {
        "title": "LMSYS — Chatbot Arena",
        "site": "LMSYS",
        "url": "https://chat.lmsys.org/"
      },
      {
        "title": "Stanford HAI — AI Index",
        "site": "Stanford University",
        "url": "https://aiindex.stanford.edu/"
      },
      {
        "title": "OpenAI Help Center — Model release notes",
        "site": "OpenAI",
        "url": "https://help.openai.com/en/articles/9624314-model-release-notes",
        "note": "記事執筆時点の URL。リダイレクトに注意。"
      }
    ]
  },
  {
    "id": "frontier-triad-power-map-2026",
    "type": "feature",
    "category": "special",
    "title": "Claude・Gemini・OpenAI の力図 — 2026年時点の棲み分けと競争軸（フロンティア三本柱）",
    "excerpt": "モデル性能の数値勝負だけでなく、「どこに差をつけて配るか」で三社の戦略は分岐している。配給経路・開発者楔・クラウドの結びつき・規制ストーリーという四つの軸で整理する。",
    "body": [
      "生成 AI のフロンティアで日常的に比較される三本柱が、OpenAI（GPT 系）、Google（Gemini）、Anthropic（Claude）です。ベンチマークは日々更新されますが、実務では「最高スコアのモデルが1個勝ち」ではなく、配給・価格・ツール・契約・規制耐性のバンドルで選ばれるようになっています。ここでは 2026 年前後の文脈で、各社の力図（どこを主戦場にしているか）を整理します。",
      "OpenAI は「消費者・プロシューマーのデフォルト」獲得に強みがあります。ChatGPT ブランドとプラグイン／エージェント的機能の積み上げ、開発者向けには Codex や API での統一フラグシップという二階建てが明瞭です。マイクロソフトとの連携により企業の Azure 貼り付き契約と相性の良いパッケージが組みやすく、「仕事の入口に最初に置かれる」占有欲を狙う構図です。リスクは、強い注目が集まるぶん規制・著作権・ブランド炎上のメディア音量が一気に跳ねやすい点です。",
      "Google（Gemini）は配給経路の広さが最大の武器です。検索・Android・Workspace・クラウドコンソール・IDE 拡張に至るまで、「すでに利用者がいる表面にモデルを差し込む」戦略が持続的です。Gemini Code Assist の無料枠や Gemini CLI、Vertex 上のエンタープライズ課金といったレイヤー分けで、個人から法人までスライドサイドできます。一方で、部門ごとに SKU とポリシーが増えやすく、担当者が「結局どの経路でどのモデルか」を把握するコストが利用者側に載りがちです。",
      "Anthropic（Claude）は安全保障・エンタープライズ志向のブランドと、長文・コード・エージェント（Claude Code）での楔が前面に出やすい構図です。API と Team／Enterprise の設計、権限モードや分類器など「自律実行と制御」の製品ストーリーが強調され、規制産業や高度なソフトウェア組織との相性を訴求します。AWS Bedrock などマルチクラウド経由の取引も相まって、特定ハイパースケーラーに一本化されない導入形態を選びたい顧客にも寄ります。",
      "競争が同質化しつつある領域は、(1) コーディングエージェント (2) 超大コンテキスト (3) マルチモーダル入力です。差別化はしばしば数点ではなく、信頼（SLA・データ取り扱い・アクセス境界）とワークフロー統合（IDE / CI / MCP）に移っています。",
      "力図を読むための四つの軸として整理すると実務的です。(1) 配給 — 検索・OS・SaaS・販売チャネル、(2) 開発者楔 — CLI・拡張・自作エージェント、(3) クラウド・契約 — 直契約かプラットフォーム経由か、(4) ナラティブ — 安全・速度・コスト・オープンさのどれを前面に出すか。採用チームは四項目それぞれで自社の正味のロックインと出口戦略を確認するとよいです。",
      "マルチモデル運用は「三社から最強だけ取る」より、タスク別にモデルとツールを分け、評価とガバナンスを一元化する方向に進みます。単一ベンダー依存の緩和、規制領域でのデータ所在地、障害時のフェイルオーバー設計が、スコア表より契約レビューで決まる局面が増えています。",
      "本稿は戦略整理と学習用の地図であり、投資判断・調達の唯一の根拠にはしません。料金・提供モデル ID・データポリシーは各社の公式ドキュメントと契約書を優先し、公開ベンチは再現手順が示されているものだけを重み付けしてください。"
    ],
    "date": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "10分",
    "tags": [
      "OpenAI",
      "Google",
      "Gemini",
      "Anthropic",
      "Claude",
      "戦略",
      "競争"
    ],
    "features": [
      "配給経路",
      "開発者楔",
      "クラウド契約",
      "エンタープライズ",
      "マルチモデル"
    ],
    "primarySources": [
      {
        "title": "OpenAI",
        "site": "OpenAI",
        "url": "https://openai.com/"
      },
      {
        "title": "Gemini（Google DeepMind）",
        "site": "Google DeepMind",
        "url": "https://deepmind.google/technologies/gemini/"
      },
      {
        "title": "Anthropic",
        "site": "Anthropic",
        "url": "https://www.anthropic.com/"
      },
      {
        "title": "OpenAI API documentation",
        "site": "OpenAI",
        "url": "https://platform.openai.com/docs/overview"
      },
      {
        "title": "Gemini API documentation",
        "site": "Google AI for Developers",
        "url": "https://ai.google.dev/gemini-api/docs"
      }
    ]
  },
  {
    "id": "apple-google-siri-gemini-2026",
    "type": "feature",
    "category": "voice",
    "title": "Siri×外部 AI — Gemini 中核に加え、ChatGPT・Claude など複数アシスタント統合の報道（2026年3月）",
    "excerpt": "1月の Apple–Google 多年度提携（Gemini）に続き、3月下旬の報道では「Siri を複数のサードパーティ AI に開く Extensions」構想が取り上げられている。Gemini に加え ChatGPT・Claude など利用者が切り替え／併用できる、との整理。いずれも WWDC 前の非公式情報が混じるため公式発表待ち。",
    "body": [
      "2026年1月12日頃、Apple と Google（Alphabet）は、Apple 製品の AI 強化で Gemini 系モデルを活用する複数年期の協力を発表したと、ロイター・CNBC・Ars Technica などが報じました。「より会話的な Siri / Apple Intelligence」の中核の一片を Gemini で補う、という理解が主流です。",
      "2026年3月26〜27日頃には別ルートの報道が相次ぎ、Siri を「Extensions」的に拡張し、複数のサードパーティ AI チャットアプリやサービスと接続する構想が取り上げられています。要約すると、(1) Google Gemini（前述の提携ゾーン）、(2) 既に利用可能な OpenAI ChatGPT 連携を拡張、(3) Anthropic Claude をはじめとする他社アプリ／モデル — のように、利用者が文脈や設定に応じて切り替えられる多プロバイダに近づく、という見立てです。",
      "これは「3社フロンティアを全部まとめて一本化」というより、Siri をハブにして背後の推論エンジンを選択可能にするイメージに近い、と読む報道やコメントがあります。同一画面で三社を無差別に使えるか、デフォルト、課金などの詳細は 2026年6月の WWDC 前後の公式説明まで確定しません。現時点はリーク・業界筋・推測が混ざった記事として扱うのが安全です。",
      "ユーザー関心が集まるのはプライバシーとデータ経路です。プロバイダが増えるほど、「どのクエリがどの企業のサーバに行くか」の説明責任が重くなります。医療・金融・児童・企業 MDM では、OS のプライバシーラベルだけでなく各社のエンタープライズ規約の再確認が必要になります。",
      "産業地図では、Apple が単一モデルに賭けず「配給のハブ」を強化する方向は、DMA 下で代替デジタル助手の取り込みやすさをアピールする戦略とも整合します。Google は Gemini の出荷面、OpenAI は ChatGPT ブランド継続、Anthropic は Claude のリーチ拡大 — それぞれにメリットが読れる一方、収益配分・アクティベーション率・障害時のフォールバックは競合調整の継続課題です。",
      "WWDC 2026 の Keynote / Session が確定情報の起点です。本稿は公開報道のタイムライン整理であり、SDK・プラガブル性・審査ガイドラインの詳細は Apple の開発者向けドキュメントを優先してください。報道の原文は下記「元記事・一次情報」を参照してください。"
    ],
    "primarySources": [
      {
        "title": "Google and Apple enter into multi-year AI deal on Gemini models",
        "site": "Reuters",
        "url": "https://www.reuters.com/business/google-apple-enter-into-multi-year-ai-deal-gemini-models-2026-01-12"
      },
      {
        "title": "Apple says its new AI-powered Siri will use Google’s Gemini language models",
        "site": "Ars Technica",
        "url": "https://arstechnica.com/apple/2026/01/apple-says-its-new-ai-powered-siri-will-use-googles-gemini-language-models/"
      },
      {
        "title": "iOS 27: Apple will reportedly let Claude and other AI chatbot apps integrate with Siri",
        "site": "9to5Mac",
        "url": "https://9to5mac.com/2026/03/26/ios-27-apple-will-reportedly-let-claude-and-other-ai-chatbot-apps-integrate-with-siri/"
      },
      {
        "title": "Apple iOS 27 open Siri to Gemini, Claude & more via extension: How will it work?",
        "site": "Business Standard",
        "url": "https://www.business-standard.com/technology/tech-news/apple-ios-27-open-siri-gemini-claude-more-extension-how-will-it-work-126032700337_1.html"
      }
    ],
    "date": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "9分",
    "tags": [
      "Apple",
      "Siri",
      "Gemini",
      "Google",
      "ChatGPT",
      "Claude",
      "Anthropic",
      "OpenAI",
      "Apple Intelligence"
    ],
    "features": [
      "多年度提携（Gemini）",
      "Extensions 報道",
      "マルチプロバイダ",
      "WWDC 待ち",
      "DMA文脈"
    ]
  },
  {
    "id": "claude-code-autofix-cloud",
    "type": "review",
    "category": "cli",
    "title": "Claude Code「auto-fix in the cloud」— CI 失敗と PR コメントをクラウドで自動対応",
    "excerpt": "2026-03-27、PM の Noah Zweben 氏が発表。Web/モバイルセッションが PR をリモートでフォローし green 化を目指す。GitHub Actions では anthropics/claude-code-action の ci-failure ワークフロー例あり。",
    "body": [
      "2026年3月27日、Claude Code のプロダクトマネージャー Noah Zweben 氏が X（旧 Twitter）で「Claude Code auto-fix — in the cloud」を発表した、と複数メディアが伝えています。要旨は、Web / Mobile の Claude Code セッションがプルリクエストを自動でフォローし、CI の失敗の解析・修正の push、レビューコメントへの対応などを、ローカル PC が閉じた状態でもクラウド側で続行できるようにする、というものです。一次ソースは当該投稿・公式の追随ドキュメントを参照してください。",
      "開発体験としては「PR を出したあと CI が落ちるたびに PC を開き直してログを読む」という往復を減らし、離席中に修正と再実行のサイクルを任せる方向性です。権限モードの Auto mode（`auto`）は手元セッションのツール承認挙動の話であり、名称が似ていても問題ドメインが異なります。",
      "GitHub Actions 連携では `anthropics/claude-code-action` に ci-failure ワークフロー例が追加される予定とされており、CI 失敗時に自動的に Claude Code がエラーログを読んで修正 commit を push する流れが想定されています。企業ユーザーには「開発者が離席中も PR が自律的に前進する」体験を提供する狙いがあります。",
      "現時点ではプレビュー段階であり、利用条件・料金・対応リポジトリ管理ツールの詳細は公式ドキュメントを確認してください。Auto mode（CLI 権限制御）との混同を避けるため、Anthropic は今後ドキュメントで名称を整理する方針です。"
    ],
    "date": "2026-03-27",
    "author": "AI News 編集部",
    "readTime": "5分",
    "rating": 5,
    "company": "Anthropic",
    "pricing": "Pro $25/月〜（公式）",
    "model": "Claude Opus 4.6 / Sonnet 4.6",
    "tags": [
      "CLI",
      "Anthropic",
      "auto-fix",
      "クラウド",
      "CI/CD",
      "速報"
    ],
    "features": [
      "クラウド自動修正",
      "PR フォロー",
      "CI 失敗対応",
      "GitHub Actions 連携"
    ],
    "primarySources": [
      {
        "title": "Claude Code — Documentation",
        "site": "Anthropic",
        "url": "https://docs.anthropic.com/en/docs/claude-code/overview"
      },
      {
        "title": "Anthropic — News & announcements",
        "site": "Anthropic",
        "url": "https://www.anthropic.com/news"
      }
    ]
  },
  {
    "id": "claude-1m-context-ga-2026",
    "type": "news",
    "category": "model",
    "title": "Claude Opus 4.6 / Sonnet 4.6 の 100 万トークンコンテキストが GA — 追加料金なし",
    "excerpt": "2026年3月13日、Anthropic が 1M トークンコンテキストを正式 GA。標準料金（Opus 4.6: $5/$25、Sonnet 4.6: $3/$15 per 1M tokens）が 100 万トークン超でも同レートで適用。Claude Platform・Bedrock・Vertex AI・Azure Foundry で即日利用可。",
    "body": [
      "Anthropic は2026年3月13日、Claude Opus 4.6 と Claude Sonnet 4.6 の 100 万トークンコンテキストウィンドウを正式 GA（一般提供）しました。これまでは 200K トークン超の利用にプレミアム料金が設定されていましたが、今回の変更でその追加課金が撤廃されました。",
      "料金体系は Opus 4.6 が入力 $5・出力 $25、Sonnet 4.6 が入力 $3・出力 $15（いずれも 100 万トークン当たり）で、900K トークンの長大なリクエストも 9K トークンの通常リクエストと同一レートで課金されます。",
      "100 万トークンは約 75 万語、長編小説 10 冊分に相当します。長大なコードリポジトリ全体を一括解析したり、大量のドキュメントを横断検索するユースケースが実用的なコストで実現できるようになります。長文コンテキスト検索ベンチマーク MRCR v2 では Opus 4.6 が 1M トークン時点で 78.3% を記録し、同コンテキスト長のフロンティアモデル最高スコアとなっています。",
      "対応プラットフォームは Claude Platform（claude.com）・Amazon Bedrock・Google Cloud Vertex AI・Microsoft Azure Foundry。200K 超のリクエストも特別なヘッダ不要で自動的に対応します。Claude Code 利用者にとっては大規模リポジトリのワンショット解析が現実的な選択肢となりました。"
    ],
    "date": "2026-03-13",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": [
      "Anthropic",
      "Claude",
      "コンテキスト",
      "1Mトークン",
      "料金改定",
      "速報"
    ],
    "primarySources": [
      {
        "title": "1M context is now generally available for Opus 4.6 and Sonnet 4.6",
        "site": "Anthropic (claude.com)",
        "url": "https://claude.com/blog/1m-context-ga"
      },
      {
        "title": "Claude API Pricing",
        "site": "Anthropic",
        "url": "https://platform.claude.com/docs/en/about-claude/pricing"
      }
    ]
  },
  {
    "id": "claude-memory-import-2026",
    "type": "news",
    "category": "product",
    "title": "Claude がメモリのインポートに対応 — ChatGPT・Gemini・Grok からの移行を簡素化",
    "excerpt": "2026年3月初旬、Anthropic が claude.com/import-memory を公開。ChatGPT・Gemini・Copilot・Grok などから保存済みメモリをコピー＆ペーストで Claude に移行できる。メモリ機能自体は全 Claude ユーザーへ順次展開中。",
    "body": [
      "Anthropic は2026年3月2日前後、Claude のメモリインポートツールを公開しました。`claude.com/import-memory` にアクセスし、提供されるプロンプトを現在利用中の AI アシスタント（ChatGPT・Gemini・Copilot・Grok など）に貼り付けると、そのアシスタントが保存しているユーザーのメモリをテキスト形式で出力します。それを Claude のメモリ設定に貼り付けるだけで移行が完了します。API トークンも、ファイルエクスポートも不要な二ステップの設計です。",
      "メモリ機能本体は Max プランから先行公開され、Pro プランへ順次展開中です。インポートしたメモリは日次合成サイクルで処理されるため、反映まで最大 24 時間かかる場合があります。機能は実験的ステータスです。",
      "競合の動きも速く、Google は2026年3月27日に Gemini 側からも ChatGPT・Claude のチャット履歴とメモリをインポートするツールを公開しました。AI プロバイダー間のデータポータビリティ競争が本格化した形です。Claude 側では ChatGPT から 700,000 ユーザーが移行したとの報告も（中国メディア等の報道ベース、未確認）あり、移行ツールが契約変更の心理的ハードルを下げる効果を持ち始めています。",
      "プライバシー面では、インポートするメモリの内容をユーザー自身が目視確認したうえで貼り付ける設計のため、意図しない情報が Claude に渡るリスクは低いと言えます。ただし、インポート先の Claude メモリはサブスクリプション終了時にどう扱われるか、データ保持ポリシーと合わせて確認することを推奨します。"
    ],
    "date": "2026-03-03",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "Anthropic",
      "Claude",
      "メモリ",
      "データ移行",
      "ChatGPT",
      "Gemini"
    ],
    "primarySources": [
      {
        "title": "Claude Memory Import — claude.com/import-memory",
        "site": "Anthropic",
        "url": "https://claude.com/import-memory"
      },
      {
        "title": "Anthropic Adds Free Memory Feature and Import Tool to Lure ChatGPT Users to Claude",
        "site": "MacRumors",
        "url": "https://www.macrumors.com/2026/03/02/anthropic-memory-import-tool/"
      },
      {
        "title": "Google Gemini Now Imports Chats and Memory from ChatGPT, Claude",
        "site": "WinBuzzer",
        "url": "https://winbuzzer.com/2026/03/27/google-gemini-imports-chats-memory-chatgpt-claude-xcxwbn/"
      }
    ]
  },
  {
    "id": "gemini-31-flash-lite-2026",
    "type": "news",
    "category": "model",
    "title": "Google、Gemini 3.1 Flash-Lite をプレビュー公開 — 2.5× 高速・低コストの大量処理向けモデル",
    "excerpt": "2026年3月4日、Google DeepMind が Demis Hassabis 氏発表で Gemini 3.1 Flash-Lite をプレビュー公開。入力 $0.25/1M・出力 $1.50/1M トークンという超低価格で 2.5 Flash 比 2.5 倍高速な Time-to-First-Token・45% 高い出力速度を実現。",
    "body": [
      "Google DeepMind は2026年3月4日、Demis Hassabis CEO のアナウンスで Gemini 3.1 Flash-Lite をプレビューとして公開しました。Google AI Studio と Vertex AI の Gemini API 経由で開発者が利用できます。",
      "最大の特徴はコストと速度です。入力 $0.25・出力 $1.50（100 万トークン当たり）という価格は Gemini 3.1 Pro の 1/8 以下。Artificial Analysis ベンチマークでは前世代の Gemini 2.5 Flash 比で Time-to-First-Token が 2.5 倍高速化、出力トークン生成速度が 45% 向上しています。品質面でも同ティアモデルを上回る推論・マルチモーダル理解を達成し、Arena.ai リーダーボードで Elo 1432 を記録しています。",
      "コンテキストウィンドウは最大 100 万トークンで、テキスト・画像・音声・動画に対応します。高ボリューム・低レイテンシが求められる本番 API 組み込み、大量のドキュメント一括処理、リアルタイムチャット補助といったユースケースに最適化されています。",
      "Gemini 3 シリーズは Pro（高難度タスク）・Flash（バランス）・Flash-Lite（大量処理・低コスト）の三層構造が明確になり、用途に応じたモデル選択が容易になりました。Claude Code や Cursor の外部モデル枠でも Flash-Lite が選択肢に加わる可能性があります。"
    ],
    "date": "2026-03-04",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "Google",
      "Gemini",
      "Flash-Lite",
      "低コスト",
      "速度",
      "速報"
    ],
    "primarySources": [
      {
        "title": "Gemini 3.1 Flash Lite: Our most cost-effective AI model yet",
        "site": "Google DeepMind",
        "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-flash-lite/"
      },
      {
        "title": "Gemini 3.1 Flash-Lite — Model Card",
        "site": "Google DeepMind",
        "url": "https://deepmind.google/models/model-cards/gemini-3-1-flash-lite/"
      }
    ]
  },
  {
    "id": "arc-agi-3-launch-2026",
    "type": "news",
    "category": "ops",
    "title": "ARC-AGI-3 公開 — インタラクティブ環境でフロンティアAIが0.26%、人間は100%",
    "excerpt": "2026年3月25日、ARC Prize Foundation が ARC-AGI-3 を公開。静的グリッドを廃し、ビデオゲーム風のインタラクティブ環境1,000超で AI エージェントの適応推論を評価。GPT-5.4・Claude・Gemini などのフロンティアモデルは1%未満にとどまり、知能評価の新たな壁が示された。",
    "body": [
      "ARC Prize Foundation は2026年3月25日、ARC-AGI-3 を正式公開しました。François Chollet が2019年に提唱した ARC（Abstraction and Reasoning Corpus）の三世代目にあたり、前世代の静的グリッドパズルとは根本的に異なる設計です。",
      "ARC-AGI-3 の評価環境はビデオゲーム風のインタラクティブ環境150種・1,000レベル超で構成されます。エージェントはゲームの説明・ルール・勝利条件を一切与えられず、視覚的な状態を観察しながら行動を取り、結果を見て「何をすべきか」を自分で発見しなければなりません。記憶・暗記ではなくリアルタイムの適応推論が要求される設計です。",
      "プレビュー評価の結果、フロンティアAIの平均スコアは0.26%にとどまりました。人間のベースラインは100%（目標スコア）です。プレビュー段階での最高スコアはTufa Labs（StochasticGoose名義）が記録した12.58%で、残りの応募は軒並み1%台以下でした。GPT-5.4・Claude Opus 4.6・Gemini 3.1 Pro も同水準です。",
      "ARC Prize 2026 は合計賞金200万ドル超の三トラック制で運営されます。ARC-AGI-3 トラックのほか、従来型の ARC-AGI-2 トラックも並行。マイルストーン締切は6月30日・9月30日で、最終締切は2026年11月2日です。",
      "研究者コミュニティでは「GPT系もClaude系も同じく1%以下というのは、現行のLLMアーキテクチャが適応推論ではなく記憶・パターンマッチングに依拠していることを再確認する結果」との見方が多く出ています。ARC-AGI シリーズは AIの知能測定の方向性を定義してきた存在であり、ARC-AGI-3 の登場によりエージェント評価の基準軸が変わる可能性があります。"
    ],
    "date": "2026-03-25",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": [
      "ベンチマーク",
      "ARC-AGI",
      "評価",
      "エージェント",
      "AGI",
      "速報"
    ],
    "primarySources": [
      {
        "title": "Announcing ARC-AGI-3",
        "site": "ARC Prize",
        "url": "https://arcprize.org/blog/arc-agi-3-launch"
      },
      {
        "title": "ARC-AGI-3 — Interactive Benchmark Overview",
        "site": "ARC Prize",
        "url": "https://arcprize.org/arc-agi/3"
      },
      {
        "title": "GPT-5, Claude, Gemini All Score Below 1% — ARC AGI 3 Just Broke Every Frontier Model",
        "site": "DEV Community",
        "url": "https://dev.to/codepawl/gpt-5-claude-gemini-all-score-below-1-arc-agi-3-just-broke-every-frontier-model-5dbj"
      }
    ]
  },
  {
    "id": "anthropic-pentagon-injunction-2026",
    "type": "news",
    "category": "special",
    "title": "Anthropic、ペンタゴンのサプライチェーン指定差し止めに成功 — 連邦裁判所が暫定差止命令",
    "excerpt": "2026年3月26日、サンフランシスコ連邦地裁の Rita Lin 判事が Anthropic の申請を認め、国防総省（DoD）による「サプライチェーンリスク」指定を暫定差し止め。「修正第一条違反の報復」と判断。Anthropic は自律兵器・大規模監視への利用を拒否したことが発端。",
    "body": [
      "米連邦地裁（サンフランシスコ）の Rita Lin 判事は2026年3月26日、Anthropic の申請を認める暫定差止命令を発しました。国防総省（DoD）が Anthropic を「サプライチェーンリスク」に指定した措置を、命令が有効な限り執行できなくなります。判事は「公の場での批判に対する政府の報復という典型的な修正第一条違反」と明記しました。",
      "経緯は2025年7月まで遡ります。Anthropic はペンタゴンと2億ドルの契約を締結し、DoD の GenAI.mil プラットフォームへの Claude 統合を交渉しました。しかし DoD が「完全自律兵器への使用」と「国内大規模監視」を契約の前提として要求したことで交渉が決裂。Anthropic はこれらが自社の利用ポリシーに違反するとして拒否しました。",
      "これを受けて Pete Hegseth 国防長官は2026年2月末に Anthropic を「サプライチェーンリスク」に指定、続いてトランプ大統領が Truth Social で連邦機関に Anthropic 製品の即時利用停止と6ヵ月の段階廃止を命じました。DoD は3月初旬に Anthropic へ正式通知を送達しました。",
      "3月24日の審問では Lin 判事が DoD 側の弁護士に「その基準はかなり低いようだが」と問い詰め、「Anthropic を骨抜きにしようとしているように見える」と発言しました。判事はその2日後に差止命令を発し、Anthropic の修正第一条に基づく主張を認容しました。",
      "業界への影響は広範です。OpenAI・Google DeepMind の従業員30名超が Anthropic を支持する声明を共同提出し、AI 企業の政府との利用条件交渉がどこまで企業側の倫理ポリシーで保護されるかという先例が形成されつつあります。Anthropic は現段階で企業向けシェアを拡大しており、新規 AI 調達での Claude 採用率が約70%との分析もあります。"
    ],
    "date": "2026-03-26",
    "author": "AI News 編集部",
    "readTime": "8分",
    "tags": [
      "Anthropic",
      "Claude",
      "法律",
      "ペンタゴン",
      "政府",
      "修正第一条",
      "速報"
    ],
    "primarySources": [
      {
        "title": "Anthropic wins preliminary injunction in DOD fight as judge cites 'First Amendment retaliation'",
        "site": "CNBC",
        "url": "https://www.cnbc.com/2026/03/26/anthropic-pentagon-dod-claude-court-ruling.html"
      },
      {
        "title": "Judge blocks Pentagon's effort to 'punish' Anthropic by labeling it a supply chain risk",
        "site": "CNN Business",
        "url": "https://www.cnn.com/2026/03/26/business/anthropic-pentagon-injunction-supply-chain-risk"
      },
      {
        "title": "Anthropic sues the Trump administration after it was designated a supply chain risk",
        "site": "CNN Business",
        "url": "https://www.cnn.com/2026/03/09/tech/anthropic-sues-pentagon"
      }
    ]
  },
  {
    "id": "openai-acquires-astral-2026",
    "type": "news",
    "category": "cli",
    "title": "OpenAI が Astral を買収 — uv・Ruff・ty を Codex に統合、Pythonエコシステムを掌握へ",
    "excerpt": "2026年3月19日、OpenAI が Python 開発ツールの Astral（uv・Ruff・ty）を買収すると発表。月間1億2,600万ダウンロードの uv や業界標準ライターの Ruff が Codex チームに合流。Python 開発ワークフロー全体を AI ネイティブにする戦略。",
    "body": [
      "OpenAI は2026年3月19日、Python 開発ツール会社 Astral の買収を発表しました。Astral は Charlie Marsh 氏が創業し、uv（パッケージ管理・実行環境）・Ruff（リンター・フォーマッター）・ty（型チェッカー）の三ツールで Python エコシステムに深く根を張った企業です。",
      "規模感が際立ちます。uv は2024年2月のリリースからわずか2年で月間1億2,600万ダウンロードを達成し、pip・venv の事実上の後継として急速に普及しました。Ruff はその高速さ（Rust 実装）から大企業・OSS プロジェクトを中心に採用が広がり、フォーマッターと組み合わせて Black・isort・flake8 を一本化するケースが増えています。",
      "買収の目的は Codex との統合です。Codex はユーザーが年初比3倍、利用量が5倍と急成長しており、週間アクティブユーザーは200万を超えます。uv による依存関係の高速解決・Ruff によるコード品質チェック・ty による型整合性確認を Codex のエージェントループに組み込むことで、AI が Python リポジトリをエンドツーエンドで扱える環境を目指します。",
      "オープンソース継続について OpenAI は「既存のコミュニティとともに OSS として開発を続ける」と明言しています。ただし独立した Astral 社としての意思決定ラインがなくなることへの懸念も開発者コミュニティから出ており、Simon Willison 氏など著名エンジニアからは「中立性の維持」を求める声が上がっています。",
      "開発者ツール市場においては、OpenAI が Codex・uv・Ruff・ty を束ねることで、コーディングエージェントから環境構築・品質管理まで一気通貫のパイプラインを提供する体制に近づきます。Anthropic の Claude Code・Google の Gemini CLI など他社のコーディングエージェントとの差別化要素になり得ます。"
    ],
    "date": "2026-03-19",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": [
      "OpenAI",
      "Codex",
      "Python",
      "uv",
      "Ruff",
      "買収",
      "開発ツール",
      "速報"
    ],
    "primarySources": [
      {
        "title": "OpenAI to acquire Astral",
        "site": "OpenAI",
        "url": "https://openai.com/index/openai-to-acquire-astral/"
      },
      {
        "title": "Astral to join OpenAI",
        "site": "Astral",
        "url": "https://astral.sh/blog/openai"
      },
      {
        "title": "Thoughts on OpenAI acquiring Astral and uv/ruff/ty",
        "site": "Simon Willison",
        "url": "https://simonwillison.net/2026/mar/19/openai-acquiring-astral/"
      }
    ]
  },
  {
    "id": "gpt-54-mini-nano-2026",
    "type": "news",
    "category": "model",
    "title": "OpenAI、GPT-5.4 mini と nano をリリース — 無料層でも mini 利用可、nano は $0.20/1M トークン",
    "excerpt": "2026年3月17日、OpenAI が GPT-5.4 mini と GPT-5.4 nano を公開。mini は ChatGPT 無料ユーザーに開放、nano は API 専用で超低コスト（$0.20/1M）のサブエージェント向け。Codex や ChatGPT のコーディング機能も同時に強化。",
    "body": [
      "OpenAI は2026年3月17日、GPT-5.4 mini と GPT-5.4 nano の2モデルを同時リリースしました。いずれも「サブエージェント時代のために設計した」と説明しており、大型の GPT-5.4 では過剰なユースケースや並列実行の部分的担当ノードとしての活用を想定しています。",
      "**GPT-5.4 mini** はコーディング・推論・マルチモーダル理解・ツール利用の全領域で GPT-5 mini を上回り、同時に GPT-5.4 本体に迫る評価スコアを示します。SWE-Bench Pro・OSWorld-Verified でも接近した性能を発揮し、速度は2倍以上高速化しています。ChatGPT の無料ティアに開放されたほか、Codex・API でも利用可能です。",
      "**GPT-5.4 nano** は価格と速度が最優先のモデルで、API 専用提供です。入力$0.20・出力$0.80（100万トークン当たり）という価格は GPT-5.4（$2.50/$12.50）の1/10以下。分類・データ抽出・ランキング・シンプルなサブタスク処理に推奨されています。マルチエージェントアーキテクチャでは、Orchestrator が GPT-5.4 を担い、nano が末端タスクの高速並列処理を担う二層構成が想定されます。",
      "Codex への追加統合も同時発表。GPT-5.4 mini が Codex の標準モデルとして組み込まれ、Codex プラグイン機能・マルチエージェントワークフローが正式に提供されます。Codex の週間アクティブユーザー200万超という背景のもと、小型モデルのコスト優位性とコーディング能力の組み合わせが開発者に訴求される設計です。"
    ],
    "date": "2026-03-17",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": [
      "OpenAI",
      "GPT-5.4",
      "mini",
      "nano",
      "モデル",
      "Codex",
      "速報"
    ],
    "primarySources": [
      {
        "title": "Introducing GPT-5.4 mini and nano",
        "site": "OpenAI",
        "url": "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/"
      },
      {
        "title": "OpenAI's GPT-5.4 mini and nano are built for the subagent era",
        "site": "The New Stack",
        "url": "https://thenewstack.io/gpt-54-nano-mini/"
      }
    ]
  },
  {
    "id": "chatgpt-shopping-revamp-2026",
    "type": "news",
    "category": "product",
    "title": "ChatGPT ショッピング刷新 — Instant Checkout を廃止し商品発見（Product Discovery）へ軸足",
    "excerpt": "2026年3月24日、OpenAI がエージェンティック・コマースを刷新。Instant Checkout は廃止し、ビジュアル商品比較・並列表示に集中。Walmart が「Sparky」アプリを ChatGPT 内に展開し、ロイヤルティプログラム連携も可能に。",
    "body": [
      "OpenAI は2026年3月24日のブログ投稿で、ChatGPT のショッピング体験を全面刷新すると発表しました。当初リリースした「Instant Checkout」（ChatGPT 内で直接購入まで完結）は、Walmart との実験で ChatGPT 内購入のコンバージョン率がサイト誘導比で 3 分の 1 に留まったことを受け廃止。「商品発見（Product Discovery）」に注力する方向へ転換します。",
      "新しいショッピング体験では、商品をビジュアルカードで並べて比較し、価格・レビュー・在庫などのリアルタイム情報を一覧表示します。購入自体は各小売業者のサイトへ誘導するため、OpenAI は Agentic Commerce Protocol（ACP）を通じて小売パートナーと連携しています。Walmart・Etsy・Shopify などが参加しています。",
      "Walmart は「Sparky」ブランドの ChatGPT 内アプリを Web ブラウザ向けに公開し、iOS/Android への展開も近日予定。Walmart アカウントとのリンクやロイヤルティポイントの利用、Walmart 決済が ChatGPT 内から可能です。",
      "AI ショッピングエージェントの課題として浮き彫りになったのは「最後の一マイル（実購入）」の難しさです。ChatGPT の強みが情報収集・比較にあり、購入決断は依然ユーザー主導というパターンが多い実態が見えてきました。OpenAI は今後の課題として決済・配送トラッキング・返品のエージェント対応を挙げています。"
    ],
    "date": "2026-03-24",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": [
      "OpenAI",
      "ChatGPT",
      "ショッピング",
      "Eコマース",
      "Walmart",
      "エージェント"
    ],
    "primarySources": [
      {
        "title": "Powering Product Discovery in ChatGPT",
        "site": "OpenAI",
        "url": "https://openai.com/index/powering-product-discovery-in-chatgpt/"
      },
      {
        "title": "OpenAI revamps shopping experience in ChatGPT after struggling with Instant Checkout",
        "site": "CNBC",
        "url": "https://www.cnbc.com/2026/03/24/openai-revamps-shopping-experience-in-chatgpt-after-struggling-with-instant-checkout.html"
      },
      {
        "title": "Walmart brings Sparky to ChatGPT as OpenAI rethinks Instant Checkout",
        "site": "Retail Dive",
        "url": "https://www.retaildive.com/news/walmart-sparky-chatgpt-instant-checkout/815647/"
      }
    ]
  }
];

export const LAST_UPDATED = "2026-03-31";
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
  vision: { label: "画像", color: "#ea580c" },
  video: { label: "動画", color: "#dc2626" },
  ops: { label: "評価・運用", color: "#475569" },
  product: { label: "プロダクト", color: "#0ea5e9" },
};

/** レビュー記事の星表示（プレーンテキスト） */
export function renderStars(rating) {
  if (rating == null || Number.isNaN(Number(rating))) return "";
  const n = Math.round(Number(rating));
  const filled = Math.min(5, Math.max(0, n));
  return `${"★".repeat(filled)}${"☆".repeat(5 - filled)}`;
}
