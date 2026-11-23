/**
 * 記事本文データ（2026-04 掲載分）
 * ── 自動生成: node scripts/split-articles.mjs ──
 * id → { body, tables, figures, charts, primarySources }
 */
const ARTICLES_BODY_2026_04 = {
  "openai-workspace-agents-codex-enterprise-2026": {
    "body": [
      "OpenAI が4月22日、ChatGPT に **Workspace Agents** を導入した。チームが共有エージェントを作って複雑なタスクや長時間ワークフローを実行できる仕組みで、**Custom GPTs の後継**にあたる新機能だ。動作は **Codex**（OpenAI のコーディング・エージェントランタイム）が担い、組織のパーミッションと統制下で動く。",
      "## Custom GPTs との違い",
      "Custom GPTs は基本的に「会話のラッパー」で、社内ナレッジを上に乗せたチャット相手を作る用途が中心だった。Workspace Agents はその一段上で、**レポート作成・コード記述・メッセージ対応など、実際の業務タスクを自走で完了させる**。**クラウド側で動作するため、ユーザーが ChatGPT を閉じてもタスクは継続**する。共有された Workspace Agent は ChatGPT と Slack の両方から呼び出せ、チームで使いながら漸進的に改善していく運用が想定されている。",
      "## SaaS 統合: Slack / Salesforce / Notion 他",
      "Workspace Agents は主要なエンタープライズ SaaS と連携できる: **Slack、Google Drive、Microsoft 365 アプリ、Salesforce、Notion、Atlassian Rovo** など。テンプレートも用意されており、ユーザーは「自分のチームでよくあるワークフロー」を自然文で説明するだけで、ChatGPT が段階的にエージェント化を手伝う。サイドバーの「Agents」から作成を開始する流れだ。",
      "## 提供範囲と料金",
      "リサーチプレビューとして、**ChatGPT Business / Enterprise / Edu / Teachers** プランで利用できる。**2026年5月6日までは無料**で、それ以降は**クレジットベースの課金**に切り替わる。タスク実行時間や使用ツール数に応じて消費される想定だが、最終的な単価は移行時に開示されると見られる。",
      "## Anthropic Managed Agents との競争",
      "Workspace Agents の投入は、Anthropic が4月8日に公開した **Claude Managed Agents** に対する明確な対抗だ。両者ともサンドボックス実行・認証管理・長時間ワークフローを引き受けるが、Workspace Agents は **ChatGPT/Codex/Slack 連携を軸にホワイトカラー業務のエージェント化**に振った一方、Managed Agents は**API 中心で構造化タスクの開発者向けインフラ**に振っている。「**エージェント・ランタイムの覇権争い**」が、コーディング系から一般ホワイトカラー業務にまで波及してきた構図だ。",
      "GPT-5.5（4/23）の翌日にこの機能が走り始めたことを踏まえると、OpenAI は「最新フロンティアモデル × 共有エージェント × SaaS 接続」という3点セットで企業内の AI 採用を取りに来ている。Slack や Salesforce 上でのエージェント駆動が日常化すれば、SaaS 各社が自前で持つ AI 機能の位置付けも変わっていく可能性が高い。"
    ],
    "primarySources": [
      {
        "title": "Introducing workspace agents in ChatGPT",
        "site": "OpenAI",
        "url": "https://openai.com/index/introducing-workspace-agents-in-chatgpt/"
      },
      {
        "title": "OpenAI unveils Workspace Agents, a successor to custom GPTs for enterprises",
        "site": "VentureBeat",
        "url": "https://venturebeat.com/orchestration/openai-unveils-workspace-agents-a-successor-to-custom-gpts-for-enterprises-that-can-plug-directly-into-slack-salesforce-and-more"
      },
      {
        "title": "OpenAI updates ChatGPT with Codex-powered 'workspace agents' for teams",
        "site": "9to5Mac",
        "url": "https://9to5mac.com/2026/04/22/openai-updates-chatgpt-with-codex-powered-workspace-agents-for-teams/"
      }
    ]
  },
  "anthropic-project-deal-agent-marketplace-experiment-2026": {
    "body": [
      "Anthropic が4月25日、社内で実施した **Project Deal** の結果を公表した。Claude エージェント同士で**人間の介入なしに商取引（売買・価格交渉）を行わせる**実験で、サンフランシスコオフィスの社員 69 名にそれぞれ **$100** を渡し、Claude エージェントを Slack 上の代理人として自由に売買させた。実行期間は 2025年12月。",
      "## 実験の規模と結果",
      "結果は次のとおり: **約 500 品目以上**のリスティングに対し **186 件の取引が成立**、総取引額は **$4,000 超**。エージェントは事前に組み込まれた「交渉プロトコル」を使わず、**自然言語で**マッチング候補を探し、価格を提示し、カウンターオファーに応じ、合意に至った。Anthropic 社員へのインタビューを基にした選好情報のみを渡された状態でのスタートだ。",
      "## 「Agent Quality Gap」: 敗者は気付かない",
      "実験で最も注目されたのが、エージェントのモデル品質差が結果に直接効いた点だ。**Claude Opus 4.5 を使った売り手エージェントは、Haiku 4.5 を使った売り手より平均 $2.68/品 高く売れていた**。価値の高い品目ではこの差はさらに広がる。",
      "ところが**当事者の人間はその差にほぼ気付かなかった**。Anthropic はこれを **「Agent Quality Gap（エージェント品質格差）」** と命名し、「**敗者は自分が損していることに気付かない**」可能性を警告している。代理交渉が当たり前になる経済で、利用するモデルの違いが**観察できないコストとして固定化**される懸念を提起した形だ。",
      "## プロンプト指示はほぼ効かなかった",
      "もう一つの興味深い発見は、エージェントに渡された**初期プロンプトの指示文が、成立確率にも最終価格にもほとんど影響しなかった**ことだ。「強気に交渉せよ」「柔軟に妥協せよ」といった指示よりも、**モデル自体の能力**が結果を支配した。プロンプトエンジニアリングの限界と、モデル本体の選択がより重要であることを示唆する。",
      "## ユーザー受容度: 46% が「金を払う」",
      "参加者は成立した取引を「公正だった」と評価し、**46% が「同様の AI 交渉サービスに金を払ってもよい」**と回答した。Anthropic はこの数字を、**B2C のエージェント代理交渉サービスに対する潜在的な市場性**の根拠として位置付けている。",
      "## エージェント経済の倫理",
      "Project Deal は単なるベンチマークではなく、**「人間に代わって AI が経済活動を行う未来のリハーサル」**として設計されている。技術的には Claude Managed Agents や Workspace Agents で既に可能な水準だが、**情報非対称性が「使うモデルの違い」に起因する**という新しい不公平の構造は、これまでのAI倫理論議が十分カバーしていない領域だ。「全員に同等品質の AI 代理を保証する」インフラ的議論が今後必要になる可能性がある。"
    ],
    "tables": [
      {
        "afterParagraph": 2,
        "caption": "Project Deal 実験の主要数字",
        "headers": [
          "項目",
          "数値・内容"
        ],
        "rows": [
          [
            "参加人数",
            "69 名（San Francisco オフィス）"
          ],
          [
            "1人あたり所持金",
            "$100"
          ],
          [
            "リスティング数",
            "500 品目超"
          ],
          [
            "成立取引数",
            "186 件"
          ],
          [
            "総取引額",
            "$4,000 超"
          ],
          [
            "Opus 売り手の優位",
            "Haiku 売り手より +$2.68/品（平均）"
          ],
          [
            "「金を払う」と回答",
            "46%"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Project Deal: our Claude-run marketplace experiment",
        "site": "Anthropic",
        "url": "https://www.anthropic.com/features/project-deal"
      },
      {
        "title": "Anthropic created a test marketplace for agent-on-agent commerce",
        "site": "TechCrunch",
        "url": "https://techcrunch.com/2026/04/25/anthropic-created-a-test-marketplace-for-agent-on-agent-commerce/"
      }
    ]
  },
  "deepseek-v4-preview-1m-context-mixture-experts-2026": {
    "body": [
      "中国 AI スタートアップの DeepSeek が4月24日、新フラッグシップモデル **DeepSeek V4** のプレビュー版を公開した。V1（2024年）でグローバル AI 業界に衝撃を与えてから約1年、V4 では **2モデルのオープンソース MoE 構成 + 100万トークンのコンテキスト窓 + デュアル思考モード**という重装備で再登場した。",
      "## 2モデルの構成",
      "公開されたのは以下の2モデル:",
      "- **DeepSeek-V4-Pro**: 総パラメータ **1.6 兆**、アクティブパラメータ **49B**（Mixture of Experts）",
      "- **DeepSeek-V4-Flash**: 総パラメータ **284B**、アクティブパラメータ **13B**（Mixture of Experts）",
      "両モデルとも **1M トークンのコンテキスト窓**を備え、**Thinking（推論あり）と Non-Thinking（高速応答）の2モード**を切り替えられる。最大出力は 384K トークン。DeepSeek の公式 API ドキュメントには既に `deepseek-v4-pro` と `deepseek-v4-flash` のモデル ID が掲載され、公開料金も明示されている。",
      "## 性能評価: 「フロンティアにほぼ届く、一桁の価格で」",
      "公式は「世界トップのクローズドソースモデルに匹敵する性能」を主張する。OSS / 価格対性能で著名な Simon Willison は自身のブログで **「フロンティアにほぼ到達、しかも一桁の価格（almost on the frontier, a fraction of the price）」** と評価した。Claude Opus 4.7（$5/$25 per M）や GPT-5.5（同等以上）が並ぶ中で、オープンウェイト・低コスト・1M コンテキストという組み合わせは依然として強力なポジショニングだ。",
      "## 「プレビュー」のまま据え置き",
      "DeepSeek は今回のリリースを**プレビュー段階**と位置付け、正式版（GA）の時期を明示していない。さらに Bloomberg は4/26に「**正式版の発表は、中国製チップへの統合を優先するため延期される**」と CCTV 関連アカウントの情報として続報を出している。前世代では NVIDIA H800 などの輸出制限対応チップを活用していたが、米国の追加規制を受けて Huawei Ascend など**中国国産半導体ベースの最適化**を本格化させていると推測される。",
      "## 米中 AI 競争の文脈",
      "V4 の公開は、**Claude Opus 4.7（4/16）→ GPT-5.5（4/23）→ DeepSeek V4（4/24）** という8日間にフロンティア更新が集中した流れの**中国側回答**として位置付けられる。Al Jazeera は「DeepSeek が世界のテック地図を揺さぶってから1年、新たな前線が開かれた」と報じた。価格対性能・オープンウェイト・国産チップ最適化という3軸で、米国フロンティア勢とは異なる土俵を作りに来ている格好だ。",
      "## 開発者にとっての意味",
      "1M コンテキスト窓は、リポジトリ全体を一度に読ませる「コーディングエージェント」用途で大きな武器になる。Thinking モードは Claude / GPT の reasoning effort パラメータに相当し、コスト・速度・品質のトレードオフを実行時に調整できる。**オープンウェイトのため自前推論サーバへの載せ替えが可能**で、機微データを社外に出せないユースケースでも採用検討に値する。"
    ],
    "tables": [
      {
        "afterParagraph": 5,
        "caption": "DeepSeek V4 プレビュー2モデルの諸元",
        "headers": [
          "項目",
          "V4-Pro",
          "V4-Flash"
        ],
        "rows": [
          [
            "総パラメータ",
            "1.6 兆",
            "284B"
          ],
          [
            "アクティブパラメータ",
            "49B",
            "13B"
          ],
          [
            "コンテキスト窓",
            "1M トークン",
            "1M トークン"
          ],
          [
            "最大出力",
            "384K トークン",
            "384K トークン"
          ],
          [
            "思考モード",
            "Thinking / Non-Thinking",
            "Thinking / Non-Thinking"
          ],
          [
            "公開形態",
            "オープンソース",
            "オープンソース"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "DeepSeek V4 Preview Release",
        "site": "DeepSeek API Docs",
        "url": "https://api-docs.deepseek.com/news/news260424"
      },
      {
        "title": "DeepSeek V4—almost on the frontier, a fraction of the price",
        "site": "Simon Willison's Weblog",
        "url": "https://simonwillison.net/2026/Apr/24/deepseek-v4/"
      },
      {
        "title": "China's DeepSeek unveils latest models a year after upending global tech",
        "site": "Al Jazeera",
        "url": "https://www.aljazeera.com/economy/2026/4/24/chinas-deepseek-unveils-latest-model-a-year-after-upending-global-tech"
      },
      {
        "title": "DeepSeek's V4 Launch Postponed as Company Prioritizes Domestic Chip Integration",
        "site": "Bloomberg",
        "url": "https://www.bloomberg.com/news/articles/2026-04-26/deepseek-v4-delay-shows-shift-to-china-chips-cctv-account-says"
      }
    ]
  },
  "openai-gpt-5-5-release-agentic-coding-2026": {
    "body": [
      "OpenAI が4月23日、フラッグシップモデル **GPT-5.5** をリリースした。GPT-5.4 のリリース（3月中旬）から**わずか6週間**という異例の短サイクルでの投入で、フロンティアモデル競争の激化を象徴する。OpenAI は GPT-5.5 を「**これまでで最も賢く、最も直感的に使えるモデル**」と位置付け、コンピュータを使う仕事の進め方そのものを変える次の一歩だとアピールしている。",
      "## 何が改善したか",
      "OpenAI は GPT-5.5 の特徴として、**ユーザーの意図をより速く把握し、自ら多くの作業を抱え込む**点を強調する。コードの記述・デバッグ、オンライン調査、データ分析、ドキュメント・スプレッドシートの作成、ソフトウェア操作、複数ツール間の往復といったタスクで、**最初に渡されたゴールに対し計画立案 → ツール使用 → 自己検証 → 完了までを一気通貫で**実行できる。",
      "事実精度面では、個別の主張が**事実として正しい確率が 23% 向上**し、応答中の**事実誤認が 3% 減少**したとされる。GPT-5.4 と同等のレイテンシを維持しながら知能水準を引き上げた点も強調されている。",
      "## ベンチマーク: コーディングで「半額の SOTA」",
      "Artificial Analysis の **Coding Index** で、GPT-5.5 は競合フロンティアモデルの**約半額のコストで SOTA（state-of-the-art）水準**を達成したと OpenAI は主張する。Anthropic Claude Opus 4.7（4/16 GA）が SWE-bench Verified 87.6% を出したばかりの状況で、価格対性能を前面に出してコーディング市場でのシェア確保を狙う構図だ。",
      "## 提供範囲と展開タイミング",
      "ChatGPT の **Plus / Pro / Business / Enterprise** プランと **Codex** へ4/23から段階展開。**GPT-5.5 Pro** は Pro / Business / Enterprise の ChatGPT 利用者向け。**4/24 から API でも利用可能**となった。同日、**GitHub Copilot の Pro+ / Business / Enterprise** プランにも展開を開始。Copilot のリリースノートでは「複雑で多段階のエージェント型コーディングタスクで、これまでの GPT モデルが解けなかった現実の課題を解ける」と評価している。",
      "## マルチモーダルとエージェント志向の強化",
      "GPT-5.5 はテキスト・画像・音声・動画を**単一のアーキテクチャ**で処理する。曖昧で多段階な指示を渡しても、計画 → ツール選択 → 進捗チェック → 軌道修正までを自走できる点が、これまでのモデルとの差別化要素だ。OpenAI が同日に発表した **Workspace Agents**（4/22）と組み合わせると、「企業内ワークフロー × エージェント実行」という導線が完成する。",
      "## 競争の構図",
      "GPT-5.5 のリリースは、**Anthropic Claude Opus 4.7（4/16 GA）→ OpenAI GPT-5.5（4/23）→ DeepSeek V4 プレビュー（4/24）**という、わずか8日間に主要プレイヤー3社のフロンティアモデル更新が集中する流れの中で行われた。Fortune は「フロンティア AI ラボがいかに激しく競争しているかを浮き彫りにする極めて速いターンアラウンド」と評している。価格対性能、エージェント能力、コーディング、マルチモーダルといった軸で、毎月単位で順位が入れ替わる段階に入った。"
    ],
    "primarySources": [
      {
        "title": "Introducing GPT-5.5",
        "site": "OpenAI",
        "url": "https://openai.com/index/introducing-gpt-5-5/"
      },
      {
        "title": "OpenAI releases GPT-5.5, bringing company one step closer to an AI 'super app'",
        "site": "TechCrunch",
        "url": "https://techcrunch.com/2026/04/23/openai-chatgpt-gpt-5-5-ai-model-superapp/"
      },
      {
        "title": "GPT-5.5 is generally available for GitHub Copilot",
        "site": "GitHub Changelog",
        "url": "https://github.blog/changelog/2026-04-24-gpt-5-5-is-generally-available-for-github-copilot/"
      }
    ]
  },
  "huggingface-ml-intern-open-source-agent-2026": {
    "body": [
      "Hugging Face が4月21日、オープンソースの AI エージェント **ml-intern** を公開した。LLM の**ポストトレーニング・ワークフロー（事後訓練の一連の作業）を自律で回す ML エンジニア役**を担うエージェントで、同社の軽量エージェントフレームワーク **smolagents** 上に構築されている。",
      "## 何をするエージェントか",
      "ml-intern は以下のループを自律的に回す:",
      "1. **論文の閲覧**: arXiv と Hugging Face Papers を巡回し、メソドロジー節を読み、引用グラフをたどって関連手法とデータセットを特定する",
      "2. **データセットの探索と整形**: Hugging Face Hub で参照データセットを検索し、品質を点検した上で訓練用に再フォーマットする",
      "3. **訓練スクリプトの実行**: 学習ジョブを走らせる",
      "4. **評価と診断**: 評価出力を読み、RLHF パイプラインにおける reward collapse などの失敗を診断し、ベンチマークが改善するまで再訓練する",
      "## ベンチマーク: Claude Code を上回るスコア",
      "公式ローンチデモでは、ベースモデルとして **Qwen3-1.7B**（GPQA ベースラインで約10%）を採用。ml-intern は**約10時間以内に GPQA を 32% まで引き上げ**、開始から3時間強の時点ですでに 27.5% を超えた。同じタスクで **Claude Code は 22.99% に留まる**ことが Hugging Face の比較データに示されている。",
      "## 「モデル品質」ではなく「エコシステム接続性」をモートにする戦略",
      "ml-intern の興味深い点は、**モデル自体の絶対的な賢さで勝負していない**ことだ。バックエンドのモデルは Anthropic クレジット経由で利用される Claude を含めて差し替え可能で、強みは「Hugging Face Hub（モデル・データセット・スペースの巨大エコシステム）に深く接続できる」点にある。フロンティアモデル競争の真っ只中でも、**エコシステム接続性そのものをモートにできる**ことを示す逆張り戦略として、ML 系メディアの注目を集めている。",
      "## 提供形態",
      "**CLI と Web アプリ**で利用可能。早期ユーザーには **$1,000 相当の GPU リソースと Anthropic クレジット**が無償提供される。リポジトリは [huggingface/ml-intern](https://github.com/huggingface/ml-intern) で MIT ライセンス公開されており、自前のインフラに乗せて改造することもできる。",
      "AutoML やニューラルアーキテクチャ探索（NAS）のような「機械学習を自動化するシステム」は長い歴史を持つが、それらが手続き的だったのに対し、ml-intern は**論文読解・データセット選択・失敗からの回復という非定型的な判断**まで LLM エージェントに委ねる点で性質が異なる。研究の自動化が「アシスト」から「代替」へと一歩進んだ事例として位置付けられそうだ。"
    ],
    "primarySources": [
      {
        "title": "huggingface/ml-intern",
        "site": "GitHub",
        "url": "https://github.com/huggingface/ml-intern"
      },
      {
        "title": "Hugging Face Releases ml-intern: An Open-Source AI Agent that Automates the LLM Post-Training Workflow",
        "site": "MarkTechPost",
        "url": "https://www.marktechpost.com/2026/04/21/hugging-face-releases-ml-intern-an-open-source-ai-agent-that-automates-the-llm-post-training-workflow/"
      }
    ]
  },
  "amazon-anthropic-25b-trainium-infrastructure-2026": {
    "body": [
      "Amazon と Anthropic が4月20日、最大 **$250億（約3.7兆円）の追加投資**と AWS インフラ拡張で合意したと発表した。Amazon の Anthropic への累計コミットメントは既往の $80億と合わせて **$330億超**に達する。初回 $50億は即時投入され、その評価額は **$3,800億**。残り $200億は「特定の商業マイルストン」達成時に段階解放される条件付きトランシェだ。",
      "## 取引の構造",
      "今回の合意は単純な株式投資ではなく、**コンピュート支出のコミットメントと一体化**している。Anthropic は今後10年で AWS に **$1,000億超を支出**することに加え、**年内に約 1 ギガワット（GW）の Trainium2 / Trainium3 容量**を AWS 上に立ち上げる。Trainium は Amazon が自社設計する AI 専用アクセラレータで、NVIDIA H100/H200 への依存を軽減する社内チップ戦略の中核を担う。",
      "## なぜいま追加投資か",
      "Anthropic は声明で「エンタープライズ・開発者向け Claude の需要と、コンシューマー利用の**急増**により、信頼性と性能に**避けられない負荷（inevitable strain）**が生じている」と認めた。実際、Claude Code・Managed Agents・Claude Cowork といったエージェント系プロダクトの集中投入で推論トラフィックが急増しており、4月中も性能低下に対するユーザー反発が報じられていた。今回の合意はインフラ逼迫への直接的な応答という側面が強い。",
      "## クラウド3社の代理戦争",
      "今回の合意は、AI モデルベンダーとクラウド大手の関係が「単純な顧客関係」を超えて「**コンピュート連動の戦略的同盟**」に進化していることを示す。Amazon の OpenAI 向け最大 $500億投資（2026年2月）からわずか2か月後の追加コミットであり、Microsoft（OpenAI）、Amazon（OpenAI と Anthropic の両方）、Google（次節で扱う）の三つ巴が鮮明になっている。",
      "Anthropic の評価額 $3,800億は2025年末（$1,800億）の倍以上で、わずか数か月で再評価された格好だ。同社の年換算売上（ARR）は今月時点で約 $300億まで成長したと既報。コーディング・エージェント特化戦略が、コンシューマー型 ChatGPT 依存からの脱却を成功させつつあると評価されている。",
      "## 残された論点",
      "$200億の追加トランシェは「商業マイルストン」次第で、具体的な指標は非公開。AWS Trainium への大規模コミットは、Anthropic の Google Cloud（TPU）利用とのバランスをどう取るかという技術的課題も残す。コンピュート供給と引き換えに資金を得るこの構造は、AI ベンダーの「電力会社化」とも指摘されており、今後の AI 市場の集中構造を象徴する案件となりそうだ。"
    ],
    "tables": [
      {
        "afterParagraph": 1,
        "caption": "Amazon × Anthropic 投資・コミットメントの内訳",
        "headers": [
          "項目",
          "規模",
          "条件・備考"
        ],
        "rows": [
          [
            "既往投資",
            "$80億",
            "2023〜2025年に段階投資"
          ],
          [
            "今回の初期投資",
            "$50億",
            "即時投入、評価額 $3,800億"
          ],
          [
            "今回の条件付きトランシェ",
            "最大 $200億",
            "商業マイルストン達成時に段階解放"
          ],
          [
            "Anthropic の AWS 支出（10年間）",
            "$1,000億超",
            "コンピュート購入コミット"
          ],
          [
            "年内 Trainium2/3 容量",
            "約 1 GW",
            "AWS リージョンで構築"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Amazon to invest up to another $25 billion in Anthropic as part of AI infrastructure deal",
        "site": "CNBC",
        "url": "https://www.cnbc.com/2026/04/20/amazon-invest-up-to-25-billion-in-anthropic-part-of-ai-infrastructure.html"
      },
      {
        "title": "Amazon adds $25B to Anthropic AI infrastructure deal",
        "site": "CIO Dive",
        "url": "https://www.ciodive.com/news/amazon-25-billion-to-anthropic-ai-infrastructure/818123/"
      }
    ]
  },
  "anthropic-claude-design-labs-figma-challenge-2026": {
    "body": [
      "Anthropic が4月17日、Anthropic Labs の新製品として **Claude Design** を公開した。会話を通じてデザイン、プロトタイプ、スライド、1ページャ、マーケティング資産といった「見せるためのアウトプット」を作る AI ネイティブのツールで、基盤モデルは前日リリースされた **Claude Opus 4.7**。Pro / Max / Team / Enterprise の購読者向けにリサーチプレビューとして提供される。",
      "## 動作の流れ",
      "ユーザーが必要なものを文章で説明すると、Claude が最初のバージョンを生成する。以降は会話、インラインコメント、直接編集、Claude が生成する「カスタムスライダー」（明度や余白といった可変パラメータを Claude が自動で抽出するインターフェース）を使って反復する。固定の UI ではなく、対象オブジェクトに合わせた編集UIをモデルが都度組み立てる構造になっている。",
      "## デザインシステムの自動学習",
      "Claude Design の差別化要素は、**プロジェクト初回にコードベースと既存のデザインファイルを読み込み、チーム固有のデザインシステム（色・タイポグラフィ・コンポーネント）を自動構築する**点だ。以降のプロジェクトでは、特に指示しなくてもブランドガイドに沿った成果物が出力される。Anthropic の公式発表では「製品の見た目を AI のデフォルトに揃えるのではなく、組織のスタイルに揃える」点を強調している。",
      "## エクスポートと Claude Code への引き渡し",
      "成果物は **PDF、共有 URL、PPTX ファイル、Canva** に書き出せる。スライドはそのまま発表に、プロトタイプは URL で共有できる。デザインが本番実装フェーズに進むと、Claude が「ハンドオフバンドル」を生成し、それを **Claude Code に渡すことで実装コードに変換**できる。探索 → プロトタイプ → 本番コードまでを単一のエコシステム内で完結させる設計だ。",
      "## Figma への直接挑戦と戦略的意味",
      "VentureBeat はリリースを「Figma への正面挑戦であり、Anthropic が AI ラボから本格的なプロダクトカンパニーへ移行する明確なシグナル」と評した。デザインツール市場は Figma が圧倒的なシェアを握っているが、Claude Design は「コードベースを起点に成果物を生成し、Claude Code に戻す」という Figma にはない双方向ループを武器にする。",
      "Claude Managed Agents（4月8日）、Claude Code デスクトップ刷新（4月13日）、Claude Opus 4.7（4月16日）、そして Claude Design（4月17日）と、Anthropic は4月だけで Claude を中核とするプロダクト群を集中投下している。「コードを書くための AI」から「設計から実装まで横断する AI」へと製品ラインが拡張されつつある。"
    ],
    "primarySources": [
      {
        "title": "Introducing Claude Design by Anthropic Labs",
        "site": "Anthropic",
        "url": "https://www.anthropic.com/news/claude-design-anthropic-labs"
      },
      {
        "title": "Anthropic launches Claude Design, a new product for creating quick visuals",
        "site": "TechCrunch",
        "url": "https://techcrunch.com/2026/04/17/anthropic-launches-claude-design-a-new-product-for-creating-quick-visuals/"
      },
      {
        "title": "Anthropic just launched Claude Design, an AI tool that turns prompts into prototypes and challenges Figma",
        "site": "VentureBeat",
        "url": "https://venturebeat.com/technology/anthropic-just-launched-claude-design-an-ai-tool-that-turns-prompts-into-prototypes-and-challenges-figma"
      }
    ]
  },
  "anthropic-claude-opus-4-7-ga-task-budgets-2026": {
    "body": [
      "Anthropic が4月16日、フラッグシップモデル **Claude Opus 4.7** を一般提供（GA）開始した。3月末に発表された Claude Mythos Preview（Project Glasswing 限定提供）と異なり、Opus 4.7 は全プロダクト・全主要クラウドで利用可能な「公開可能版」として位置付けられる。価格は Opus 4.6 から据え置きの **$5/M 入力トークン、$25/M 出力トークン**で、Anthropic API、Amazon Bedrock、Google Cloud Vertex AI、Microsoft Foundry、GitHub Copilot で同日から提供されている。",
      "## ベンチマーク: 4.6 から全方位で改善",
      "公式発表のベンチマークでは、**SWE-bench Verified で 87.6%**（Opus 4.6 の 80.8% から +6.8pt）、**Terminal-Bench 2.0 で 69.4%**（同 65.4%）、**GPQA Diamond で 94.2%**（同 91.3%）、**Finance Agent で 64.4%**（同 60.7%）といずれも明確な伸びを示した。Anthropic は「長期的な推論を要するタスクと、複雑なツール連携ワークフローで特に改善が大きい」としており、ソフトウェアエンジニアリングの中でも難易度の高い問題ほど差が出るという。",
      "## 新機能 1: task budgets",
      "Opus 4.7 で導入された **task budgets** は、エージェントループ全体（思考・ツール呼び出し・ツール結果・最終出力を含む）のトークン消費目安をモデルに伝える仕組みだ。最小予算は 20,000 トークンで、モデルは残り予算をカウントダウンしながら作業の優先順位を判断する。予算が尽きそうになると、調査結果の要約と進捗報告を返してから停止するため、文の途中で打ち切られる従来の挙動が回避される。",
      "重要なのは、これが **`max_tokens` とは別物** だという点だ。`max_tokens` はモデルが認識できないハードキャップで、超過すれば即座に切断される。一方 task budgets は「助言的」な目標で、モデル自身がそれを見て計画を立てる。",
      "## 新機能 2: effort level「xhigh」",
      "推論深度を制御する effort パラメータに、`high` と `max` の中間にあたる **`xhigh`** が追加された。難易度の高い問題で推論の深さと応答速度のトレードオフをより細かく調整できる。Anthropic によれば Opus 4.7 はデフォルトで「ツール呼び出しを減らし、推論をより活用する」傾向に調整されており、長時間の自律実行中に進捗を報告する頻度も増えたという。",
      "## 視覚処理の大幅強化",
      "Claude Opus 4.7 は **Claude シリーズで初めて高解像度画像をネイティブにサポート**したモデルとなる。画像入力の最大解像度が **1568px / 1.15MP から 2576px / 3.75MP** へと約2.5倍に拡大した。スクリーンショット中の細かい UI 要素、図表のテキスト、コード画像などをより正確に読み取れるようになり、コンピュータ操作系エージェントやデザインレビュー用途で実用性が増した。",
      "## 戦略的位置付け",
      "Opus 4.7 のリリースは、3月末に発表された **Claude Mythos Preview** との対比で理解する必要がある。Mythos Preview は HLE（人類最後の試験）で 64.7%（ツール使用時）を記録した最強モデルだが、AWS・Apple・Google・Microsoft・NVIDIA 等を含む約50組織との Project Glasswing 限定で、汎用公開はされていない。一方の Opus 4.7 は「リスクが低く、広く配布できる」公開版モデルとして CNBC など複数メディアが報じている。",
      "GitHub Copilot は同日に Opus 4.7 を Pro+/Business/Enterprise プランへ展開した。OpenAI の GPT-5.5 リリース（4月23日）に先行する形で、フロンティアモデル競争が新たな段階に入っている。"
    ],
    "tables": [
      {
        "afterParagraph": 2,
        "caption": "Claude Opus 4.7 vs 4.6 主要ベンチマーク",
        "headers": [
          "ベンチマーク",
          "Opus 4.7",
          "Opus 4.6",
          "差分"
        ],
        "rows": [
          [
            "SWE-bench Verified",
            "87.6%",
            "80.8%",
            "+6.8pt"
          ],
          [
            "Terminal-Bench 2.0",
            "69.4%",
            "65.4%",
            "+4.0pt"
          ],
          [
            "GPQA Diamond",
            "94.2%",
            "91.3%",
            "+2.9pt"
          ],
          [
            "Finance Agent",
            "64.4%",
            "60.7%",
            "+3.7pt"
          ]
        ]
      },
      {
        "afterParagraph": 7,
        "caption": "提供プラットフォームと料金",
        "headers": [
          "プラットフォーム",
          "提供開始",
          "備考"
        ],
        "rows": [
          [
            "Anthropic API",
            "2026-04-16",
            "$5/$25 per M トークン（4.6 と同額）"
          ],
          [
            "Amazon Bedrock",
            "2026-04-16",
            "GA"
          ],
          [
            "Google Cloud Vertex AI",
            "2026-04-16",
            "GA"
          ],
          [
            "Microsoft Foundry",
            "2026-04-16",
            "GA"
          ],
          [
            "GitHub Copilot",
            "2026-04-16",
            "Pro+/Business/Enterprise"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Introducing Claude Opus 4.7",
        "site": "Anthropic",
        "url": "https://www.anthropic.com/news/claude-opus-4-7"
      },
      {
        "title": "What's new in Claude Opus 4.7",
        "site": "Claude API Docs",
        "url": "https://platform.claude.com/docs/en/about-claude/models/whats-new-claude-4-7"
      },
      {
        "title": "Claude Opus 4.7 is generally available",
        "site": "GitHub Changelog",
        "url": "https://github.blog/changelog/2026-04-16-claude-opus-4-7-is-generally-available/"
      }
    ]
  },
  "anthropic-claude-managed-agents-public-beta-2026": {
    "body": [
      "Anthropic が4月8日、**Claude Managed Agents** をパブリックベータとして Claude Platform 上でリリースした。クラウドホスト型エージェントを構築・デプロイするための一連のコンポーザブル API で、**サンドボックス実行**・**チェックポイント**・**認証管理**・**スコープ付き権限**・**エンドツーエンドトレース**を標準搭載する。Anthropic は「プロトタイプから本番投入までを**10倍速く**する」と謳っている。",
      "## アーキテクチャと差別化",
      "Managed Agents の中核は、Claude に最適化されたエージェントハーネスとプロダクションインフラの統合だ。開発者はエージェントの定義（指示・ツール・権限）を API で宣言し、実行環境・エラーリカバリー・状態管理は Anthropic 側が引き受ける。内部テストでは、構造化ファイル生成タスクにおいて標準的なプロンプトループと比較して**タスク成功率が最大10ポイント改善**し、特に難易度の高い問題で差が大きかった。",
      "既存のエージェントフレームワーク（LangChain、CrewAI 等）との違いは、**インフラ層まで Anthropic が管理する**点にある。開発者はオーケストレーションのコードを書く必要がなく、サンドボックスの構築やクレデンシャルの安全な受け渡しといった本番運用の課題を API に委ねられる。一方で、Claude 以外のモデルは使えないため、マルチモデル構成を必要とするユースケースには向かない。",
      "## 早期導入パートナーの運用実績",
      "Notion は Claude Managed Agents を使い、ワークスペース内からコーディング・スライド・スプレッドシートの作成を Claude に委任する機能を実装した。数十のタスクが並列で実行される。Rakuten はプロダクト・営業・マーケティング・財務・HRの各部門にスペシャリストエージェントを配備し、それぞれ1週間以内で本番稼働にこぎつけた。Sentry はコード自動化・生産性ツール・HR・財務プロセスにエージェントを展開している。",
      "## 料金体系と Claude Cowork の GA",
      "ランタイム料金は **$0.08/セッション時間** で、これにモデル推論の標準トークン料金が加算される。月額固定費はなく、使った分だけ課金される従量制だ。24時間365日稼働のエージェントで月約 $58（ランタイムのみ）が目安。同日、macOS・Windows 向けの **Claude Cowork** がリサーチプレビューを卒業して正式版（GA）に昇格し、エンタープライズ向けの管理機能が追加された。",
      "Managed Agents の投入は、Anthropic がモデル提供企業からエージェントプラットフォーム企業へとシフトする戦略的転換を示している。OpenAI の Codex、Google の Vertex AI Agent Builder と並び、「エージェントのインフラをどこまで引き受けるか」が AI プラットフォーム競争の新たな焦点になっている。"
    ],
    "tables": [
      {
        "afterParagraph": 4,
        "caption": "Claude Managed Agents 早期導入パートナー",
        "headers": [
          "企業",
          "用途",
          "実績"
        ],
        "rows": [
          [
            "Notion",
            "コーディング・スライド・スプレッドシート作成の委任",
            "数十タスクを並列実行"
          ],
          [
            "Rakuten",
            "部門別スペシャリストエージェント",
            "各エージェント1週間以内で本番稼働"
          ],
          [
            "Sentry",
            "コード自動化・HR・財務プロセス",
            "複数部門で展開中"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Claude Managed Agents: get to production 10x faster",
        "site": "Anthropic Blog",
        "url": "https://claude.com/blog/claude-managed-agents"
      },
      {
        "title": "Claude Managed Agents overview",
        "site": "Claude API Docs",
        "url": "https://platform.claude.com/docs/en/managed-agents/overview"
      }
    ]
  },
  "meta-muse-spark-closed-source-msl-2026": {
    "body": [
      "Meta が4月8日、**Muse Spark** を発表した。Meta Superintelligence Labs（MSL）が開発した初のフロンティアモデルであり、Meta にとって**初のクローズドソースモデル**でもある。Llama シリーズでオープンソース AI のリーダーを自任してきた Meta が、最先端モデルを非公開とする路線転換は業界に波紋を広げている。",
      "## Meta Superintelligence Labs とは",
      "MSL は2026年初頭に Meta 内部に設立された専門研究部門で、Llama を生んだ FAIR（Fundamental AI Research）チームとは独立している。率いるのは **Alexandr Wang**（元 Scale AI CEO）。AI 学習データインフラの最大手を築いた Wang の参画には約 $140億（約2兆円）が投じられたとされる。MSL の使命は「オープンソースのリリースサイクルに縛られず、世界最高性能の AI モデルを構築する」ことであり、Muse Spark はその最初の成果物だ。",
      "## ベンチマーク: 汎用4位、ヘルスケアで1位",
      "Artificial Analysis の **Intelligence Index v4.0** で Muse Spark はスコア **52** を記録し、Gemini 3.1 Pro（57）、GPT-5.4（57）、Claude Opus 4.6（53）に次ぐ**4位**に位置する。ただし効率面では光る結果を出した——評価完了に使用した出力トークンは **5,800万** で、Claude Opus 4.6（1億5,700万）や GPT-5.4（1億2,000万）の半分以下だ。",
      "最も注目すべきは医療領域だ。**HealthBench Hard**（難易度の高い医療質問応答ベンチマーク）で **42.8%** を達成し、GPT-5.4、Claude Opus 4.6、Gemini 3.1 Pro をすべて上回った。Wang のチームが1,000人以上の医師と協力してキュレーションした学習データが、この結果に寄与しているとされる。",
      "## 利用形態と戦略的意味",
      "Muse Spark は現在 **Meta AI アプリ**とウェブ版（meta.ai）で利用可能で、今後数週間で Facebook、Instagram、WhatsApp、Messenger に順次展開される。API は「限定パートナー向けプライベートプレビュー」のみで、広く開発者に開放する時期は未定。将来的にオープンソース版をリリースする「希望がある」とされるが、具体的な計画は示されていない。",
      "この戦略は「フロンティアモデルでコンシューマー製品のエンゲージメントを牽引し、API の商用収益はビジネス向けに確保する」という二重構造だ。Llama のオープンソース戦略が「エコシステムの拡大」を狙ったのに対し、Muse Spark のクローズド戦略は「直接的な収益化」を狙っている。Meta が両路線を並行できるかどうかが、今後のオープンソース AI の方向性を左右する可能性がある。"
    ],
    "tables": [
      {
        "afterParagraph": 4,
        "caption": "Muse Spark ベンチマーク比較",
        "headers": [
          "指標",
          "Muse Spark",
          "Claude Opus 4.6",
          "GPT-5.4",
          "Gemini 3.1 Pro"
        ],
        "rows": [
          [
            "Intelligence Index v4.0",
            "52（4位）",
            "53（3位）",
            "57（1位タイ）",
            "57（1位タイ）"
          ],
          [
            "HealthBench Hard",
            "42.8%（1位）",
            "—",
            "—",
            "—"
          ],
          [
            "評価使用トークン",
            "5,800万",
            "1億5,700万",
            "1億2,000万",
            "5,800万"
          ],
          [
            "ソース公開",
            "クローズド",
            "クローズド",
            "クローズド",
            "クローズド"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Introducing Muse Spark: Scaling Towards Personal Superintelligence",
        "site": "Meta AI Blog",
        "url": "https://ai.meta.com/blog/introducing-muse-spark-msl"
      },
      {
        "title": "Meta debuts the Muse Spark model in a 'ground-up overhaul' of its AI",
        "site": "TechCrunch",
        "url": "https://techcrunch.com/2026/04/08/meta-debuts-the-muse-spark-model-in-a-ground-up-overhaul-of-its-ai/"
      },
      {
        "title": "Meta unveils Muse Spark, its first new AI model since hiring Alexandr Wang",
        "site": "Fortune",
        "url": "https://fortune.com/2026/04/08/meta-unveils-muse-spark-mark-zuckerberg-ai-push/"
      }
    ]
  },
  "anthropic-pentagon-blacklist-appeals-court-2026": {
    "body": [
      "D.C. 巡回控訴裁判所は4月8日、Anthropic が求めていた緊急差止申立てを却下し、国防総省（DOD）による Claude AI の**サプライチェーンリスク指定**——事実上の軍事利用ブラックリスト——を維持する決定を下した。この判決は、AI 企業の安全ポリシーと国家安全保障の要請が正面衝突した初の主要判例となりつつある。",
      "## 経緯: $2億の契約から決裂へ",
      "Anthropic は2025年7月、国防総省と **$2億（約300億円）の契約** を締結し、AI ラボとして初めて DOD の機密ネットワークに自社技術を展開した。しかし9月、DOD の AI プラットフォーム **GenAI.mil** への Claude 配備交渉で対立が表面化した。DOD は「すべての合法的目的での無制限アクセス」を要求したが、Anthropic は利用規約の2条項——**完全自律兵器システム（人間の監視なしで動作する武装ドローン群を含む）の禁止**と**米国市民の大量監視の禁止**——を譲らなかった。",
      "Pete Hegseth 国防長官は、Anthropic を「サプライチェーンリスク」に分類し、事実上すべての DOD 契約から排除する決定を下した。Anthropic はこれを「利用規約に基づく正当な制限に対する報復」と主張し、法廷闘争に踏み切った。",
      "## 2つの裁判所、2つの結論",
      "法廷闘争は2つの裁判所で並行して進んでいる。カリフォルニア州の連邦地方裁判所では、3月26日に Rita F. Lin 判事が Anthropic に有利な**予備的差止命令**を出した。「政府の措置は保護的というより懲罰的に見え、十分な法的根拠を欠き、権限を逸脱している」との判断で、指定の執行を一時停止した。",
      "一方、D.C. 巡回控訴裁判所は4月8日、Anthropic の緊急差止を却下した。この判決でブラックリスト指定は効力を維持するが、事案の本案判断ではない。結果として、Anthropic は **DOD 契約からは排除されるが、他の政府機関との取引は継続可能** という状態にある。",
      "## 5月19日の口頭弁論が焦点",
      "控訴裁判所は口頭弁論を **5月19日** に繰り上げた。ここでの判断は、単に Anthropic と DOD の紛争を超え、**米国政府の AI 調達政策全体** を形作る可能性がある。争点は明確だ——AI 企業は自社の安全ポリシー（自律兵器禁止・大量監視禁止）を維持したまま政府と契約できるのか、それとも政府が「合法的目的なら何にでも使える」ことを条件にできるのか。",
      "Anthropic にとっての賭けは大きい。Palantir の Alex Karp CEO は3月、「当社は訴訟の結果にかかわらず Claude を使い続ける」と述べたが、複数の防衛テック企業はブラックリスト後に Claude の利用を停止している。トランプ政権にとっても、AI 安全性の制限を「国家安全保障上のリスク」と位置付ける先例を作れるかどうかが懸かっている。",
      "この訴訟は、AI ラボの「安全性ポリシー」が法的にどこまで保護されるのか、そして政府が AI 技術の無制限利用を強制できるのかという、AI ガバナンスの根本的な問いに答えを出す最初のケースになるかもしれない。"
    ],
    "tables": [
      {
        "afterParagraph": 5,
        "caption": "Anthropic vs 国防総省 — 法廷闘争の経緯",
        "headers": [
          "日付",
          "出来事",
          "結果"
        ],
        "rows": [
          [
            "2025年7月",
            "Anthropic が DOD と $2億の契約締結",
            "DOD 機密ネットワークに Claude 展開"
          ],
          [
            "2025年9月",
            "GenAI.mil への配備交渉が決裂",
            "自律兵器・大量監視の利用制限が争点"
          ],
          [
            "2026年3月",
            "Hegseth 国防長官がサプライチェーンリスクに指定",
            "事実上の軍事ブラックリスト"
          ],
          [
            "2026年3月26日",
            "カリフォルニア地裁が予備的差止命令",
            "Anthropic 勝訴（指定の執行一時停止）"
          ],
          [
            "2026年4月8日",
            "D.C. 控訴裁が緊急差止を却下",
            "DOD 勝訴（ブラックリスト維持）"
          ],
          [
            "2026年5月19日",
            "口頭弁論（予定）",
            "AI 調達政策の方向性を左右"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Anthropic loses appeals court bid to temporarily block Pentagon blacklisting",
        "site": "CNBC",
        "url": "https://www.cnbc.com/2026/04/08/anthropic-pentagon-court-ruling-supply-chain-risk.html"
      },
      {
        "title": "Federal Judges Deny Anthropic Relief in Claude Military AI Ban, Set May Oral Arguments",
        "site": "Bitcoin News",
        "url": "https://news.bitcoin.com/federal-judges-deny-anthropic-relief-in-claude-military-ai-ban-set-may-oral-arguments/"
      },
      {
        "title": "Judge blocks Pentagon's Anthropic ban, calling it illegal retaliation",
        "site": "Defense One",
        "url": "https://www.defenseone.com/policy/2026/03/judge-pentagon-anthropic-ban-retaliation/412463/"
      }
    ]
  },
  "openai-child-safety-blueprint-safety-fellowship-2026": {
    "body": [
      "OpenAI が4月8日、AI を悪用した児童性的搾取（CSAM: Child Sexual Abuse Material）に対する米国の法的・技術的枠組みを提言する政策文書「**Child Safety Blueprint**」を公表した。同時に、外部研究者を招く **Safety Fellowship** プログラム（2026年9月〜2027年2月）の募集も開始した。",
      "## Child Safety Blueprint の3本柱",
      "Blueprint は3つの領域で提言を行っている。第一に**立法の更新**。現行法は実在の児童を対象にした搾取に焦点を当てているが、AI 生成の CSAM を明確に違法とする法改正を求めている。第二に**報告メカニズムの改善**。法執行機関への通報から捜査開始までの時間を短縮するため、AI 生成コンテンツに特化した検出技術と報告パイプラインの整備を提案している。第三に**AI システムへの予防的セーフガードの統合**。モデルの訓練段階から CSAM 生成を困難にする技術的措置を組み込むことを推奨している。",
      "背景には深刻な数字がある。Internet Watch Foundation（IWF）の報告によれば、AI 生成の児童性的搾取コンテンツは **2025年前半だけで8,000件超** が検出され、前年同期比 **14%増** だった。生成 AI の普及に伴い、実在の児童の画像を加工するケースと、完全に AI で生成するケースの両方が急増している。",
      "## Safety Fellowship の概要",
      "Safety Fellowship は、外部の研究者・エンジニア・実務家を対象とした有期のプログラムで、**2026年9月14日から2027年2月5日**まで実施される。優先研究領域は、安全性評価、倫理、ロバスト性、スケーラブルな軽減策、プライバシー保護型安全手法、エージェント型 AI の監視、高重大度の悪用ドメインなど。OpenAI が直接的な安全性研究に外部資金を投入するプログラムとしては最大規模となる。",
      "## AI 安全性への投資は加速している",
      "OpenAI は最近、**Alzheimer 研究に $1億超のグラント** を6研究機関に配分する計画も明らかにしている。AI 企業が安全性と社会貢献に予算を振り向ける動きは、Anthropic の Responsible Scaling Policy や Google の AI Safety Fund と同様に、規制当局からの圧力と自主的な姿勢の両面から加速している。Child Safety Blueprint は特定の政策提言を伴っている点で、一般的な「安全性への取り組み」声明よりも踏み込んでおり、立法府への直接的な働きかけとして注目に値する。"
    ],
    "tables": [
      {
        "afterParagraph": 2,
        "caption": "Child Safety Blueprint の3本柱",
        "headers": [
          "領域",
          "提言内容",
          "背景"
        ],
        "rows": [
          [
            "立法の更新",
            "AI 生成 CSAM を明確に違法化する法改正",
            "現行法は実在の児童のみが対象"
          ],
          [
            "報告メカニズム",
            "AI 生成コンテンツ検出と通報パイプラインの整備",
            "通報から捜査開始までの時間短縮"
          ],
          [
            "予防的セーフガード",
            "訓練段階から CSAM 生成を困難にする技術的措置",
            "IWF: 2025年前半に8,000件超検出（前年比+14%）"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Introducing the Child Safety Blueprint",
        "site": "OpenAI",
        "url": "https://openai.com/index/introducing-child-safety-blueprint/"
      },
      {
        "title": "Introducing the OpenAI Safety Fellowship",
        "site": "OpenAI",
        "url": "https://openai.com/index/introducing-openai-safety-fellowship/"
      },
      {
        "title": "OpenAI releases a new safety blueprint to address the rise in child sexual exploitation",
        "site": "TechCrunch",
        "url": "https://techcrunch.com/2026/04/08/openai-releases-a-new-safety-blueprint-to-address-the-rise-in-child-sexual-exploitation/"
      }
    ]
  },
  "github-copilot-autopilot-mcp-cli-vscode-2026": {
    "body": [
      "GitHub が4月上旬、Copilot の2つの重要なアップデートを相次いで発表した。VS Code 向けの **Autopilot モード**（パブリックプレビュー）と、**Copilot CLI v1.0.21** での MCP サーバー管理コマンドの追加だ。いずれもコーディングツールの「エージェント化」を推し進める機能であり、Claude Code や Cursor との競争が一段と激しくなっている。",
      "## Autopilot モード: 承認不要の自律実行",
      "Autopilot は、VS Code の Copilot エージェントモードに新たに追加された権限レベルだ。従来のエージェントモードではファイル編集やターミナルコマンドの実行前にユーザーの承認が必要だったが、Autopilot では**エージェントが自らアクションを承認し、エラーを自動リトライし、タスク完了まで自律的に実行する**。",
      "たとえば依存パッケージが不足している場合、Autopilot は自動でインストールを行い、ビルドエラーが出れば修正を試み、テストが通るまで反復する。従来のように「この変更を適用していいですか？」と逐一確認を求めないため、バックグラウンドで長時間タスクを走らせるワークフローが可能になる。",
      "権限設定は3段階から選択できる: **Default**（従来どおり逐一承認）、**Bypass Approvals**（特定アクションのみ自動承認）、**Autopilot（Preview）**（全アクション自律実行）。VS Code ではモデルピッカーから選択し、CLI では `--autopilot` フラグで有効化する。Thinking effort（推論の深さ）もモデルピッカーから直接調整可能になった。",
      "## Copilot CLI v1.0.21: MCP サーバー管理",
      "4月7日にリリースされた Copilot CLI v1.0.21 では、`copilot mcp` コマンドが追加された。MCP（Model Context Protocol）サーバーの追加・一覧表示・有効化・無効化・削除・設定編集がターミナルから直接行える。Claude Code が先行していた MCP 統合に、Copilot CLI が追いついた形だ。",
      "具体的なサブコマンドは `/mcp show`（一覧・ステータス表示）、`/mcp show SERVER-NAME`（詳細・ツール一覧）、`/mcp edit`（設定編集）、`/mcp delete`（削除）、`/mcp disable` / `/mcp enable`（有効・無効の切り替え）。Azure MCP Server との統合ドキュメントも同時に公開されている。",
      "## コーディングツールのエージェント競争",
      "同時期の VS Code リリース（v1.111〜v1.115）では、統合ブラウザデバッグ、チャットでの画像・動画サポート、Thinking effort の設定など、エージェント指向の機能が矢継ぎ早に投入されている。Claude Code の Autopilot モード（`--dangerously-skip-permissions`）、Cursor 3.0 の Agents Window、Windsurf の Cascade Hooks と並び、**「人間がどこまで承認に関与すべきか」**というエージェント実行の権限モデルが、コーディングツール競争の新しい軸になりつつある。"
    ],
    "tables": [
      {
        "afterParagraph": 3,
        "caption": "Copilot エージェント権限モデル",
        "headers": [
          "モード",
          "概要",
          "有効化方法"
        ],
        "rows": [
          [
            "Default",
            "ファイル編集・コマンド実行前に逐一承認",
            "デフォルト"
          ],
          [
            "Bypass Approvals",
            "特定アクションのみ自動承認",
            "VS Code 設定"
          ],
          [
            "Autopilot（Preview）",
            "全アクション自律実行、エラー自動リトライ",
            "モデルピッカー / --autopilot フラグ"
          ]
        ]
      },
      {
        "afterParagraph": 5,
        "caption": "Copilot CLI v1.0.21 MCP コマンド",
        "headers": [
          "コマンド",
          "機能"
        ],
        "rows": [
          [
            "/mcp show",
            "MCP サーバー一覧・ステータス表示"
          ],
          [
            "/mcp show SERVER-NAME",
            "サーバー詳細・ツール一覧"
          ],
          [
            "/mcp edit SERVER-NAME",
            "サーバー設定の編集"
          ],
          [
            "/mcp delete SERVER-NAME",
            "サーバーの削除"
          ],
          [
            "/mcp disable / enable",
            "サーバーの有効・無効切り替え"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "GitHub Copilot in Visual Studio Code, March Releases",
        "site": "GitHub Changelog",
        "url": "https://github.blog/changelog/2026-04-08-github-copilot-in-visual-studio-code-march-releases/"
      },
      {
        "title": "Copilot CLI v1.0.21",
        "site": "GitHub Releases",
        "url": "https://github.com/github/copilot-cli/releases/"
      },
      {
        "title": "Adding MCP servers for GitHub Copilot CLI",
        "site": "GitHub Docs",
        "url": "https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers"
      }
    ]
  },
  "anthropic-claude-mythos-preview-glasswing-2026": {
    "body": [
      "Anthropic が4月7日、新たなフロンティアモデル「**Claude Mythos Preview**」を正式発表した。ただし通常のモデルリリースとは決定的に異なる点がある——**汎用公開しない**。Anthropic CEO の Dario Amodei は発表声明で「これは我々が訓練した中で最も有能なモデルであり、サイバーセキュリティ領域では既存のあらゆる AI を遥かに上回る。だが同時に、無制限に公開すれば社会に深刻な被害を与えうる **dual-use（二重用途）** の代表例である」と述べ、**業界初の「強すぎて公開しないフロンティアモデル」**として位置付けた。Mythos Preview は Anthropic が同日発表した **Project Glasswing**——AWS、Apple、Broadcom、Cisco、CrowdStrike、Google、JPMorgan、Linux Foundation、Microsoft、NVIDIA、Palo Alto Networks ほか約50の組織が参加する**$100M（約150億円）のサイバーセキュリティ・コンソーシアム**——でのみ使用される。",
      "## 「公開しない」を選んだ理由",
      "Mythos Preview のシステムカード（p.186〜187）に掲載されたベンチマークスコアは、公開済みモデルとの差を歴然と示している。**HLE（Humanity's Last Exam、人類最後の試験）**でツール使用なし **56.8%**、ツール使用ありで **64.7%**——比較対象の OpenAI GPT-5.4 Pro はそれぞれ 42.7% / 58.7%、Anthropic 自身の最新公開モデル Claude Opus 4.6 は 40.0% / 53.1% である。コーディング系では **SWE-bench Verified で 93.9%**（Opus 4.6 は 80.8%）、新しい難易度の高い **SWE-bench Pro で 77.8%**（Opus 4.6 は 53.4%）と、人間のシニアエンジニアと並ぶ水準に達している。",
      "決定的だったのは、訓練完了後に Anthropic 社内のレッドチームが Mythos Preview を Project Glasswing 向けの試験運用に投入した瞬間だった。発表声明によれば、**わずか数週間で主要 OS（Linux、Windows、macOS、Android、iOS）と主要 Web ブラウザすべてにわたる数千件のゼロデイ脆弱性を発見**した。発見された中で最も古いものは **27年前に混入された OpenBSD のバグ**で、長年にわたり世界中の研究者が見落としてきたものだった。Anthropic は「これを誰でも使える形で公開した場合、防御側より攻撃側が圧倒的に先行する瞬間が生じる」と判断し、汎用公開を見送る決定を下した。",
      "## Project Glasswing — 50社で守る",
      "Project Glasswing は、Mythos Preview の能力を「社会の防御」だけに振り向けるための仕組みだ。$100M のうち大部分は、参加組織がゼロデイ修正・パッチ配信・インシデント対応に充てる人員・インフラ費用に充当される。参加企業のラインナップは、クラウド大手（AWS / Google / Microsoft）、デバイスメーカー（Apple / NVIDIA / Broadcom）、セキュリティ専業（CrowdStrike / Palo Alto Networks / Cisco）、金融（JPMorgan）、OSS 基盤（Linux Foundation）と、現代のデジタルインフラの中核を網羅している。Anthropic は「**特定企業の独占にしない**ため、Linux Foundation を含む中立組織を意図的に組み込んだ」と説明している。",
      "運用ルールも異例だ。Mythos Preview にアクセスできるのは Project Glasswing 加盟組織のセキュリティチームに限られ、出力は**脆弱性の発見・修正パッチ生成・防御コード作成**にのみ使用できる。攻撃ツールの作成や脆弱性情報の外部漏洩は契約で禁止される。Anthropic 側でも全プロンプト・全出力をログとして保全し、Constitutional AI に基づくセーフガードを通常モデル以上に厳格化した上で運用する。",
      "## 「強すぎる AI」をどう扱うか",
      "Mythos Preview の発表は、AI 業界が長年議論してきた「**dual-use（二重用途）**」問題に対する初の現実的な回答でもある。これまで OpenAI の GPT-5 系列も Google の Gemini 3 系列も「リリース前の安全性テスト」を経て公開されてきたが、「**テストの結果、能力が高すぎたので公開しない**」という決断を下した主要モデルは存在しなかった。Anthropic の RSP（Responsible Scaling Policy）は ASL-4 以上に達したモデルに対する追加制限を定めていたが、それが**実際に発動した初のケース**とも言える。",
      "Anthropic は同日のブログで「Mythos Preview で得られた知見と防御技術は、**今後数ヶ月以内にリリース予定の次期 Claude Opus モデル**に統合される」と明言した。具体的には、Mythos Preview がコンソーシアム運用の中で「攻撃に使われそうな出力」を検出・抑制した事例を学習データとし、次期公開モデルが同種のリクエストに対してより的確に拒否・代替提案を行えるように訓練される。「**最も強力なモデルを使って、公開モデルを守る**」というアプローチである。",
      "## 業界の反応と論点",
      "発表直後から賛否は分かれている。賛成側は「ようやく **能力 ≠ 公開** という選択肢を主要ラボが示した」「セーフティ研究の長年の主張が現実化した」と評価する。一方で批判もある——（1）**「強すぎる」の判断基準が Anthropic 単独**である点（独立の第三者監査がない）、（2）Project Glasswing 参加企業に**競合の OpenAI / xAI / Meta が含まれていない**点、（3）**選ばれた50社だけがアクセスできる構造**は新たな情報格差を生む懸念。Anthropic は今後、参加組織の拡大プロセスとガバナンス委員会の設立を進めるとしている。",
      "もう一つの論点は「**競合がより強いモデルを公開した場合に Anthropic はどうするか**」だ。仮に OpenAI や xAI が今後、Mythos Preview と同等以上の能力を持つモデルを汎用公開した場合、Anthropic の「公開しない」決定は競争上の自殺となりかねない。Dario Amodei はこれに対し「**全社が同じ判断を強いられる規制環境**こそが必要」と述べ、米国・EU・日本の規制当局との連携を改めて呼びかけている。",
      "Mythos Preview と Project Glasswing は、AI ラボが「自社の最強モデルを公開しない」という選択を初めて公にとった事例として、今後数年の AI ガバナンス論争の参照点になることは間違いない。ベンチマークスコアの数字以上に、**「誰が、どの能力を、どの範囲で使えるべきか」**という問いを業界全体に突きつけている。"
    ],
    "tables": [
      {
        "afterParagraph": 2,
        "caption": "Claude Mythos Preview ベンチマーク比較（システムカード p.186〜187）",
        "headers": [
          "ベンチマーク",
          "Mythos Preview",
          "Claude Opus 4.6",
          "GPT-5.4 Pro"
        ],
        "rows": [
          [
            "HLE（ツールなし）",
            "56.8%",
            "40.0%",
            "42.7%"
          ],
          [
            "HLE（ツール使用）",
            "64.7%",
            "53.1%",
            "58.7%"
          ],
          [
            "SWE-bench Verified",
            "93.9%",
            "80.8%",
            "（未公表）"
          ],
          [
            "SWE-bench Pro",
            "77.8%",
            "53.4%",
            "（未公表）"
          ],
          [
            "公開状況",
            "非公開（Glasswing限定）",
            "一般公開",
            "一般公開"
          ]
        ]
      },
      {
        "afterParagraph": 5,
        "caption": "Project Glasswing 主要参加組織（約50社、抜粋）",
        "headers": [
          "分類",
          "参加組織"
        ],
        "rows": [
          [
            "クラウド大手",
            "AWS、Google、Microsoft"
          ],
          [
            "デバイス・半導体",
            "Apple、NVIDIA、Broadcom"
          ],
          [
            "セキュリティ専業",
            "CrowdStrike、Palo Alto Networks、Cisco"
          ],
          [
            "金融",
            "JPMorgan"
          ],
          [
            "OSS基盤",
            "Linux Foundation"
          ],
          [
            "合計予算",
            "$100M（約150億円）"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Project Glasswing — Anthropic",
        "site": "Anthropic",
        "url": "https://www.anthropic.com/glasswing"
      }
    ]
  },
  "anthropic-overtakes-openai-revenue-30b-run-rate-2026": {
    "body": [
      "AI 産業の競争構図を象徴する数字が逆転した。**Anthropic の年換算売上（ARR）が約300億ドル**に到達し、OpenAI の約240〜250億ドルを上回ったことが、4月6日までに複数の業界レポートで明らかになった。AI 調査機関 Epoch AI は2月時点で「Anthropic は2026年半ばに OpenAI を抜く」と予測していたが、**それより数ヶ月早い**逆転となった。",
      "Anthropic の成長速度は異常だ。2025年末時点で年換算売上は約**90億ドル**だった。それがわずか3〜4ヶ月で**3倍以上**に膨張した計算になる。SaaStr の分析では、Anthropic の ARR は14ヶ月前の10億ドルから現在の140億ドル超（一部レポートでは300億ドル換算）まで拡大しており、SaaS の歴史でも例を見ない成長曲線を描いている。",
      "**逆転の決定打はビジネスモデルの違い**にある。OpenAI の売上の大半は、ChatGPT のサブスクリプション（Plus、Pro、Enterprise）と消費者向けプロダクトに依存している。一方 Anthropic は当初から **エンタープライズ API への特化**を貫いてきた。Cursor、Replit、Lovable、GitHub Copilot のClaude 統合、そして Amazon・Google・Microsoft といった大手の AWS Bedrock / Vertex AI / Azure 経由での提供——AI を自社プロダクトに組み込みたい開発者・企業の選択肢として、Claude が事実上のデファクトになりつつある。",
      "皮肉なのは、OpenAI が3月末に**史上最大の1,220億ドル**を調達して評価額8,520億ドルに到達した直後に、この売上逆転が表面化したことだ。OpenAI の評価額は依然として Anthropic の2倍以上だが、**売上倍率（PSR）で見れば OpenAI の方が割高**になっている。投資家の視線が「ChatGPT のユーザー数」から「企業に組み込まれた API 売上」へとシフトしているのは間違いない。",
      "ただし注意点もある。「年換算売上」は最新月の売上を12倍した数字で、サブスクと違って API 売上は**変動が大きい**。コーディングエージェント市場の競争激化（GPT-5.4、Gemini 3.1 Pro、Cursor の自社モデル等）次第で、数字は短期間で動きうる。また、Anthropic の急成長を支えてきた Claude Code のサードパーティ・ハーネス利用が4月4日に有償化された影響も、来月以降の数字に出るだろう。とはいえ、**「Anthropic がエンタープライズ AI で OpenAI を上回った」という事実そのものは、2026年の AI 業界を象徴する出来事**として記憶されることになる。"
    ],
    "tables": [
      {
        "afterParagraph": 3,
        "caption": "OpenAI vs Anthropic: 売上と戦略の違い",
        "headers": [
          "項目",
          "OpenAI",
          "Anthropic"
        ],
        "rows": [
          [
            "年換算売上（ARR）",
            "約$240〜250億",
            "約$300億"
          ],
          [
            "主力収益源",
            "ChatGPT サブスク（消費者）",
            "API・エンタープライズ統合"
          ],
          [
            "評価額",
            "$8,520億",
            "（推定 $3,800億級）"
          ],
          [
            "代表的な統合先",
            "Microsoft Copilot",
            "Cursor, Bedrock, Vertex AI"
          ],
          [
            "週間アクティブユーザー",
            "9億人超（ChatGPT）",
            "公表なし（API中心）"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Anthropic could surpass OpenAI in annualized revenue by mid-2026",
        "site": "Epoch AI",
        "url": "https://epoch.ai/data-insights/anthropic-openai-revenue/"
      },
      {
        "title": "Anthropic Overtakes OpenAI in Revenue, Hitting $30 Billion Run Rate",
        "site": "Trending Topics",
        "url": "https://www.trendingtopics.eu/anthropic-overtakes-openai-in-revenue-hitting-30-billion-run-rate/"
      },
      {
        "title": "Anthropic turns the tables on OpenAI in critical revenue category",
        "site": "Axios",
        "url": "https://www.axios.com/2026/03/18/ai-enterprise-revenue-anthropic-openai"
      }
    ]
  },
  "openai-industrial-policy-intelligence-age-4day-workweek-2026": {
    "body": [
      "OpenAI が4月6日（現地時間）、12ページの政策提言書「**Industrial Policy for the Intelligence Age（超知能時代の産業政策）**」を公表した。同社が「AI の支援を受けた最も賢い人間をも凌駕する能力を持つ AI システム」と定義する **superintelligence（超知能）** への移行が前例のない規模とスピードで進む中、**従来型の段階的な政策更新では追いつかない**との認識から、AI 開発企業自身が政府・市民社会に再設計案を提示する異例の文書だ。提言の柱は、（1）**週32時間/4日制の試験導入**、（2）**ロボット税・自動化労働課税**、（3）**国民向け公的資産ファンドの創設**、（4）**「AI へのアクセス権」の基礎インフラ化**、（5）AGI ガバナンスへの安全基準——である。",
      "## 「給与据え置きの週32時間制」",
      "最も話題を呼んでいるのが**労働時間短縮の提案**だ。OpenAI は雇用主と労働組合に対して、**「給与カットなし」で32時間/4日の労働時間を試験導入**するパイロットプログラムを実施し、生産性が維持されれば**恒久化**すべきだと提言する。AI による生産性向上が労働者の負担軽減に還元されるべきという論理で、Microsoft 創業者ビル・ゲイツが2017年に提案した「ロボット税」と並ぶ、AI 時代の労働政策の象徴的アイデアだ。",
      "## ロボット税と公的資産ファンド",
      "提言の中核は**富の再分配メカニズム**にある。OpenAI は「資本利得への高所得層課税」「持続的な AI 駆動リターンへの法人税」「自動化労働関連税」を求めている。さらに踏み込んで、**国民全員が AI 企業と AI インフラに自動的に出資する『公的資産ファンド（Public Wealth Fund）』の創設**を提案。ファンドのリターンは、株式市場に投資していない一般市民にも直接分配される設計だ。これは事実上、**AI 革命の利益を社会全体で分かち合う仕組み**であり、過激な提案だが、AI 企業自身がこれを言い出した意味は大きい。",
      "## 「AI へのアクセス権」と安全網の自動発動",
      "もう一つ注目すべき提案が、**AI へのアクセスを「インターネットや電力に匹敵する基礎的なインフラ」と位置づける「AI への権利」の保障**だ。AI を使えるかどうかが個人の人生機会を決定的に左右する時代を見据え、所得や地域に関係なく**誰もが AI にアクセスできる仕組み**を社会基盤として整備すべきだという主張である。AGI のメリットを一部の富裕層・大企業だけが独占しないための制度設計だ。",
      "経済政策に加え、提言には**AGI ガバナンスへの政府への要求**も含まれる。「特に高い信頼性・アラインメント・安全性の基準」を設けるべきだとし、AI 利用に関する明確なルールを政府に求めている。また、**経済指標が一定の閾値を超えた場合に自動的に発動する安全網（automatic safety-net triggers）**の整備も提案。AI による失業や経済混乱が想定を超えた時、議会の追加審議を待たずに支援策が動く仕組みだ。",
      "## アルトマン CEO「ニューディール政策に匹敵する社会契約が必要」",
      "サム・アルトマン CEO は Axios とのインタビューで、超知能の到来は**非常に近く、かつ破壊的な変化をもたらす**ため、米国には**大恐慌時代の「ニューディール政策」に匹敵する新たな社会契約**が必要だと語った。アルトマンは**今後1年以内にサイバー攻撃などの重大な脅威を目の当たりにする可能性**を警告しつつ、今回の文書は「絶対的な処方箋ではなく、真剣な議論を早急に始めるためのもの」だと強調している。さらに「**これほど私たち全員に影響を与える決定を、誰か1人が単独で下すべきではない**」と述べ、社会全体で AI の未来を形作る重要性を訴えた。",
      "## なぜ OpenAI 自身がこれを言うのか",
      "本誌が注目するのは、**この文書を AI 企業自身が公表した**という事実そのものだ。歴史的に、産業の影響を社会がどう吸収するかは、政府・労働組合・市民社会が議論してきたテーマだ。今回 OpenAI は、自社の技術がもたらす破壊的な影響を**先回りして可視化し、対応策まで提示**した。これは「規制を待つ」ではなく「規制をデザインする」立場の宣言だ。",
      "好意的に読めば、AI 企業として社会的責任を果たそうとする姿勢の表れだ。批判的に読めば、**自社に都合のよい規制設計を先取りし、政策議論の土俵を自分たちの言葉で支配しようとする戦略**でもある。先に報じた **Anthropic の AnthroPAC（政治活動委員会）設立**と並べると、AI 企業が政策決定の前線に出始めた構図が鮮明になる。OpenAI は政策提言で、Anthropic は政治献金で——アプローチは違うが、**AI 政策の主導権をめぐる競争**が本格化したと言える。",
      "## 本誌の見方: 議論の出発点としての価値",
      "OpenAI の提言を**鵜呑みにすべきではない**。週32時間制も、公的資産ファンドも、ロボット税も、いずれも実装に膨大な政治的コストがかかる。米国議会で短期間に成立する見込みは薄く、Gizmodo は本提言を「**superintelligence を中心に社会を再編するための漠然とした構想**」と評している。",
      "しかし、**議論の出発点としての価値は大きい**。AI が労働市場に与える影響、富の集中と再分配、AGI 時代のガバナンス——これらは早晩誰かが提案しなければならないテーマだった。OpenAI が叩き台を出したことで、政府・労組・市民社会・他の AI 企業は反応を求められる。賛成するにせよ、反対するにせよ、**「AI 企業の提言を起点に議論する」段階**にすでに入ってしまった。",
      "日本にとっての含意も大きい。**先に報じた個人情報保護法の改正案**と並べると、各国の AI ガバナンスが「企業主導の制度設計」と「政府主導の規制強化」のどちらに振れるかの分岐点に来ていることがわかる。日本は規制緩和、米国は企業の自主提言、EU は厳格規制——アプローチは三者三様だが、共通しているのは「**AI が社会の根本を変えること**」を、もはや誰も否定できなくなった現実だ。今、私たちが向き合うべきなのは、その変化を「誰が」「どう」設計するのかという問いそのものである。"
    ],
    "tables": [
      {
        "afterParagraph": 0,
        "caption": "OpenAI「Industrial Policy for the Intelligence Age」の5本柱",
        "headers": [
          "柱",
          "提案内容",
          "影響範囲"
        ],
        "rows": [
          [
            "労働時間短縮",
            "給与据え置きの週32時間/4日制パイロット、生産性維持なら恒久化",
            "労使・労働政策"
          ],
          [
            "自動化課税",
            "ロボット税、資本利得への高所得層課税、AI駆動リターンへの法人税",
            "税制"
          ],
          [
            "公的資産ファンド",
            "国民が自動的にAI企業・インフラに出資、リターンを直接分配",
            "社会保障・再分配"
          ],
          [
            "AIへのアクセス権",
            "AIを電力・インターネット並みの基礎インフラと位置づけ全員に保障",
            "デジタル権利・社会基盤"
          ],
          [
            "安全網の自動発動",
            "経済指標が閾値を超えた時に自動で支援策が動く仕組み",
            "セーフティネット"
          ],
          [
            "AGIガバナンス",
            "信頼性・アラインメント・安全性への高い基準を政府に求める",
            "規制・標準化"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Industrial policy for the Intelligence Age",
        "site": "OpenAI",
        "url": "https://openai.com/index/industrial-policy-for-the-intelligence-age/"
      },
      {
        "title": "Industrial Policy for the Intelligence Age (PDF)",
        "site": "OpenAI",
        "url": "https://cdn.openai.com/pdf/561e7512-253e-424b-9734-ef4098440601/Industrial%20Policy%20for%20the%20Intelligence%20Age.pdf"
      },
      {
        "title": "OpenAI's vision for the AI economy: public wealth funds, robot taxes, and a four-day workweek",
        "site": "TechCrunch",
        "url": "https://techcrunch.com/2026/04/06/openais-vision-for-the-ai-economy-public-wealth-funds-robot-taxes-and-a-four-day-work-week/"
      }
    ]
  },
  "japan-personal-info-protection-law-ai-amendment-2026": {
    "body": [
      "**【4月7日 閣議決定へ】** 政府は4月7日、個人情報保護法の改正案を閣議決定する。1月9日に個人情報保護委員会が制度改正方針を公表してから3ヶ月足らずでの正式法案化だ。法案は1月23日召集の通常国会（〜6月21日）に提出され、可決されれば**令和8年改正個人情報保護法**として、日本のAI政策・プライバシー規制の根本的な転換点となる。改正の柱は**「AI開発のための規制緩和」と「悪質事業者への課徴金導入」を同時に行う**ことだ。一見矛盾するこの2軸は、日本政府の「**AI産業を育てつつ、悪質な情報売買だけ取り締まる**」という方針を明確に示している。",
      "## 最大の変更点: AI学習なら「要配慮個人情報」も同意不要に",
      "今回の改正で最も大きな影響を持つのが、**統計目的（AI開発を含む）での個人データ利用について、本人同意を不要とする規制緩和**だ。しかも対象は通常の個人情報だけではなく、**病歴、犯罪歴、人種、信条、社会的身分**といった「**要配慮個人情報**」も含まれる。これらは現行法では原則として本人の明示的同意なしに取得・利用ができない、最も保護の強いカテゴリだ。",
      "改正案では、安全管理措置（匿名加工・仮名加工・アクセス制御等）が確保され、かつ委員会規則で定める条件を満たす場合、こうしたセンシティブ情報もAI学習に利用できるようになる。この変更は、医療AI、創薬AI、犯罪予測AI、信用スコアリングAI、教育レコメンドAIなど、これまで日本で立ち上がりにくかった領域の開発を一気に加速する可能性がある。一方で、**「同意なしに自分の病歴がAI学習に使われる」**ことに不安を覚える市民は少なくないだろう。",
      "## 課徴金制度の新設 — 対象は「千人超」の不正取得・利用",
      "改正のもう一つの目玉が、**課徴金制度の新設**だ。日本の個人情報保護法はこれまで、行政処分（命令・公表）と刑事罰しか持たず、金銭的なペナルティが弱いと指摘されてきた。GDPR（最大で全世界売上の4%）と比べても抑止力に欠けるという批判だ。今回の改正で、ようやく金銭的制裁が導入される。",
      "閣議決定版の改正案では、**個人データの数が千人を超える大規模な個人情報を不正に取得・利用した業者**が課徴金の対象となり、**得た利益の相当額**が課徴金として算定される。1月時点の方針案では「金銭等の対価を得た悪質な5類型」が中心だったが、4月の閣議決定版では**「千人超」という規模要件**が前面に出た形だ。これにより、悪質ブローカーだけでなく、不正取得を組織的に行った事業者全般が対象となりうる。",
      "ただし注意すべきは、**「企業が安全管理措置を怠って大規模な漏えいを起こした場合」は依然として課徴金の主たる対象とはされていない**点だ。つまり、ベネッセ事件やLINE問題のような「うっかり大規模漏えい」は引き続き行政処分が中心で、金銭的ペナルティの主戦場ではない。消費者団体からは「**安全管理義務違反こそ課徴金の対象にすべき**」「これでは大企業が漏えいを起こしても痛くも痒くもない」という批判が出ている。",
      "## その他の改正項目: 漏えい通知緩和とオプトアウト強化",
      "閣議決定版の改正案には、注目すべき変更がいくつか含まれている。**漏えい等発生時における本人への通知義務の緩和**は、現行制度で事業者の負担となっていた個別通知の運用を見直すもの。**オプトアウト制度に基づく第三者提供時の確認義務化**では、提供先の身元と利用目的の確認が事業者に義務付けられ、名簿屋経由の不透明なデータ流通に歯止めがかかる。**委託先事業者の義務見直し**は、クラウド事業者やデータ処理委託先の責任を明確化するもので、2024年のクラウド事業者問題を受けた措置だ。**16歳未満の個人情報保護の強化**は、子どもがSNSやゲームでデータを取られる現状への対応で、EUの DSA や米国の COPPA に近い発想だ。",
      "## 国際比較: 日本は「逆方向」を選んだのか",
      "今回の改正を国際的に位置づけると、**日本は欧州とは逆方向に舵を切った**ように見える。EUは2024年に**AI Act**を成立させ、リスクベース規制（高リスクAIに厳格な義務）を導入した。GDPRも引き続き「同意ベース」の原則を堅持している。米国では州ごとに規制が分かれているが、カリフォルニア州 CCPA や、コロラド・テキサスの新法は**消費者の同意とオプトアウト権を強化**する流れだ。",
      "一方、日本の今回の改正は「AI学習なら同意不要」を打ち出した。これは中国の**個人情報保護法（PIPL）**が2023年以降、AI開発のためのデータ利用を例外的に認める方向に動いたのと近い。日本政府の本音は、**「同意ベースを徹底すれば、日本のAI産業はOpenAIや中国企業に勝てない」**という危機感だろう。GPUと電力に加え、**学習データへのアクセス**がAI競争の死命を制する現実がある中で、規制緩和は産業政策上の合理的選択ではある。",
      "## 本誌の見方: 民主化と説明責任の両立を",
      "本誌は、今回の改正を**一面的に批判するのも、無条件に称賛するのも適切ではない**と考える。AI産業育成のための規制緩和には合理性がある。しかし、要配慮個人情報をAI学習に「同意なし」で使えるという変更は、**当事者からすれば自分のセンシティブな情報が知らぬ間にAIに学習される**ことを意味する。プライバシーの後退は事実として認めるべきだ。",
      "この改正を社会的に正当化するために必要なのは、**少なくとも以下の3点の担保**だと本誌は考える。",
      "**1. 透明性の制度化**: どの企業が、どんな目的で、どのカテゴリの個人情報をAI学習に使ったかを、**事後的に公開する義務**を設ける。同意は不要でも、利用記録の透明化は必要だ。これがなければ、市民は「自分のデータがどう使われたか」を知る術がない。",
      "**2. オプトアウト権の確立**: 同意は不要でも、**「自分のデータをAI学習に使わないでほしい」と申し出る権利**は残すべきだ。GDPR の「処理の制限を求める権利」に近い発想で、これがあれば最低限の自己決定権は守られる。",
      "**3. 安全管理義務違反への課徴金適用**: 「悪質な情報売買」だけを課徴金の対象にする現案は、抑止力として弱い。**大規模漏えいを起こした企業にも金銭的ペナルティを課す**べきだ。これがなければ、企業は安全管理にコストをかけるインセンティブが弱まる。",
      "## 開発者・事業者への実務的影響",
      "AIサービスを開発・運用している事業者にとって、今回の改正は**ビジネスチャンスであると同時に、説明責任のハードルが上がる**ことを意味する。同意取得の手続きが緩和される分、**「なぜそのデータを使うのか」「どんな安全管理措置を講じているか」を社会に説明する責任**は重くなる。形式的な同意をクリックさせる時代から、**実質的な信頼を積み上げる時代**への移行だ。",
      "特に、医療・教育・金融など要配慮個人情報を扱う事業者は、改正後の「委員会規則で定める条件」の動向を注視する必要がある。条件次第で、データ利用の範囲が大きく変わる。また、海外展開を視野に入れる事業者は、**日本の緩い規制で集めたデータをEUや米国でそのまま使えるとは限らない**点に注意すべきだ。クロスボーダーのデータ規制は依然として複雑で、日本の改正だけを基準にすると国際展開でつまずく。",
      "## 結論: 「規制緩和」ではなく「責任の再配分」と捉えるべき",
      "今回の改正を「AI企業のための規制緩和」と単純化するのは、本質を見誤る。本質は、**プライバシー保護の責任を「事前同意」から「事後的な透明性・説明責任・課徴金」に再配分する**ことにある。事前にチェックボックスをクリックさせる仕組みは、現実には誰も読まず、機能していなかった。それを認めた上で、**「使ってもいいが、使ったことは公開し、悪用したら罰する」**という設計に切り替えようとしている。",
      "問題は、この再配分が**現状では「緩和」の側だけが先行している**点だ。透明性の制度化、オプトアウト権、安全管理義務への課徴金——これらが伴わなければ、ただの規制緩和になってしまう。国会での審議を通じて、**事業者の自由とユーザーの権利のバランス**が、真摯に議論されることを期待したい。AI時代のプライバシー法は、日本だけの問題ではなく、世界が試行錯誤している領域だ。日本の選択が、他国にとっての参考事例になるよう、丁寧な制度設計が求められる。",
      "---",
      "**【追記 2026-04-06】** 政府が4月7日に改正案を閣議決定する見通しが共同通信・日本経済新聞等で報じられたため、本記事を更新した。主な変更点は（1）冒頭に閣議決定情報を追加、（2）課徴金の対象を「金銭目的の悪質5類型」から「千人超の大規模な不正取得・利用」に修正、（3）漏えい時の本人通知義務の緩和とオプトアウト制度の強化を新規項目として追加。当初記事は2026年1月9日の制度改正方針公表時点の情報に基づいていたが、4月の閣議決定版では条文化に伴う具体化と一部内容の変更があった。"
    ],
    "tables": [
      {
        "afterParagraph": 1,
        "caption": "個人情報保護法 改正方針の主要項目",
        "headers": [
          "項目",
          "内容",
          "影響"
        ],
        "rows": [
          [
            "AI学習目的の同意緩和",
            "統計目的（AI開発含む）なら要配慮個人情報も同意不要",
            "AI開発を加速、プライバシー後退の懸念"
          ],
          [
            "課徴金制度の新設",
            "千人超の大規模な不正取得・利用が対象、得た利益の相当額を徴収",
            "組織的な不正データ取得への抑止"
          ],
          [
            "漏えい通知義務の緩和",
            "本人への個別通知の運用見直し",
            "事業者の負担軽減、消費者の知る権利後退の懸念"
          ],
          [
            "オプトアウト強化",
            "第三者提供時の提供先・利用目的の確認義務化",
            "名簿屋経由の不透明流通に歯止め"
          ],
          [
            "16歳未満の保護強化",
            "保護者同意・年齢確認義務の議論",
            "SNS・ゲーム事業者に影響"
          ],
          [
            "委託先規律の見直し",
            "クラウド事業者・データ処理委託先の責任明確化",
            "BPO・SaaS事業者に影響"
          ]
        ]
      },
      {
        "afterParagraph": 9,
        "caption": "国際比較: AI時代のプライバシー規制の方向性",
        "headers": [
          "国・地域",
          "方向性",
          "AI学習データの扱い"
        ],
        "rows": [
          [
            "EU（GDPR + AI Act）",
            "同意ベース堅持・リスクベース規制",
            "原則として同意必要、高リスクAIに厳格義務"
          ],
          [
            "米国（州ごと）",
            "消費者のオプトアウト権強化",
            "州法によるが、CCPA等は同意・通知重視"
          ],
          [
            "中国（PIPL）",
            "AI開発目的での例外を一部認容",
            "国家戦略としてのAI育成を優先"
          ],
          [
            "日本（改正案）",
            "AI学習目的の同意緩和＋悪質行為の課徴金",
            "要配慮情報も統計目的なら同意不要"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "個人情報保護、違反企業に課徴金 法改正案を閣議決定",
        "site": "日本経済新聞",
        "url": "https://www.nikkei.com/article/DGXZQOUA065240W6A400C2000000/"
      },
      {
        "title": "AI開発、普及へ個人情報活用 政府、規制緩和で改正法案決定",
        "site": "共同通信（Yahoo!ニュース）",
        "url": "https://news.yahoo.co.jp/articles/d57f849e30f7eb58db57b2ec2bbb579131f763fa"
      },
      {
        "title": "個人情報保護法 いわゆる３年ごと見直しについて",
        "site": "個人情報保護委員会",
        "url": "https://www.ppc.go.jp/personalinfo/3nengotominaoshi/"
      },
      {
        "title": "個人情報保護法 制度改正方針の公表",
        "site": "牛島総合法律事務所",
        "url": "https://www.ushijima-law.gr.jp/client-alert_seminar/client-alert/20260109appi/"
      }
    ]
  },
  "vibe-coding-enterprise-backend-maintenance-2026": {
    "body": [
      "SaaS の歴史は「**誰のための業務システムか**」という問いの歴史だった。SAP、Salesforce、Workday——巨大ベンダーが標準化された業務プロセスを提供できたのは、**1社あたり数千万〜数億円のカスタマイズ費用を払える大企業**が顧客だったからだ。一方で、地方の建材問屋、伝統工芸の組合、調剤薬局、中規模の畜産業、特殊加工の町工場——こうした「**小さく細分化された業界**」の業務システムは、Excel と紙と人間の記憶で運用されてきた。市場が小さすぎてベンダーが採算を取れず、独自開発は数千万円かかる。デジタル化の谷間に、何十年も取り残されてきた領域だ。",
      "**バイブコーディングはこの構造を、原理的に変えうる**。フロントエンドの開発コストは劇的に下がった。Cursor、Claude Code、Lovable、Bolt.new といったツールを使えば、業務に詳しい当事者自身が「うちの伝票はこういう順番で入力する」「この客先だけ単価計算が違う」といった現場の機微を、UIに直接落とし込める。デザイナーもフロントエンドエンジニアも介さず、業界の「方言」をそのまま画面にできる。これは過去40年のソフトウェア産業が成し得なかった民主化だ。",
      "しかし、ここで率直な問いを立てなければならない。**フロントエンドが自由になったとして、その裏側を誰が守るのか**。ユーザーが見えるのはボタンと画面と帳票だ。見えないのは、データベースのスキーマ、認証ロジック、権限境界、バックアップ、監査ログ、災害復旧、依存ライブラリの脆弱性、API レート制限、トランザクション境界、文字コード処理——基幹システムの本体は、すべて「見えないところ」にある。",
      "フロントエンドのバグは騒がしい。ボタンが押せない、レイアウトが崩れる、ユーザーが気づいて文句を言う。だから直せる。一方、バックエンドのバグは**沈黙する**。スキーマ変更時のマイグレーションミスで過去5年分の取引データが微妙に壊れ決算期に発覚する。認証ロジックの境界バグで本来見えないはずの他社データが「特定の操作をした時だけ」漏れていて誰も気づかない。バックアップが取れていなかったことに復旧が必要になった日に気づく。依存パッケージの脆弱性が放置され半年後に侵入経路として使われる。浮動小数点の丸め誤差が会計データに蓄積し数年後の税務調査で指摘される。タイムゾーン処理のバグで深夜0時跨ぎの取引だけ日付がずれている——いずれも、よくある話だ。",
      "これらに共通するのは「**動いているように見える期間がある**」点だ。バイブコーダーの完成判定は「動いた」だが、基幹システムの真の評価指標は「3年後にデータが整合しているか」「監査に耐えるか」「災害から復旧できるか」だ。AI が生成した70%のコードは見える。残り30%——エッジケース処理、セキュリティ境界、監視、災害対策、規制対応——の不在は、何年も気づかれない。",
      "もう一つの現実問題が「**午前3時問題**」だ。本番データベースが落ちた深夜、顧客への請求バッチが止まった早朝、API キーがリークしたかもしれない週末——誰がスタックトレースを読み、ログを掘り、原因を切り分け、ロールバックを判断するのか。「AI に聞いてみます」では済まない場面がある。AI は事象を分析できても、**そのシステムの過去の経緯、契約上の制約、顧客との合意、法的責任**を知らない。「このテーブルは絶対に削除してはいけない理由」を AI は知らない。それを知っているのは、システムを作り続けてきた人間だけだ。基幹システムの維持には、コードを書く能力ではなく、**コードに責任を持つ主体**が必要になる。",
      "では絶望的かというと、そうではない。本誌が提案したいのは、**役割を分けるハイブリッドモデル**だ。バイブコーディングを禁止するのではなく、**安全に使える土台を専門家が設計する**という発想である。建築の比喩がわかりやすい。住人は壁紙を張り替え、棚を付け替え、部屋の用途を変える——これは自由でいい。しかし**柱、梁、基礎、配管、電気系統**は建築士と工事業者が設計・施工する。住人が「ここに大きな窓を」と言っても、構造計算なしには実現できない。基幹システムも同じだ。**画面と帳票と業務フローはバイブコーディングで自由に**、**スキーマ・認証・デプロイパイプライン・監視・バックアップ・CLAUDE.md ガードレール**は、エンジニアが事前に設計する。",
      "この役割を担うのが、本特集で「**Vibe Architect（バイブ・アーキテクト）**」と呼ぶ新職種だ。彼らの仕事は、業界の当事者が安全にバイブコーディングできる「土台」を作ることにある。データモデルの設計（後から壊しにくいスキーマ、外部キー制約、論理削除、監査カラム）、認証・認可基盤の確立（Supabase Row Level Security、Auth0、Clerk 等の権限境界をコード生成前に固める）、CLAUDE.md ガードレールの整備（「このテーブルは削除禁止」「この API キーには触れない」をAIエージェントに守らせる）、CI/CD と自動テスト、監視・バックアップ・災害復旧、そして「ここから先は触らないでください」の責任分界点を技術的に強制する——これが Vibe Architect の責務だ。",
      "個別企業の努力だけでは限界がある。バイブコーディングが基幹システム領域に本格的に入ってくる時、**社会全体としての制度設計**が必要になる。本特集では4つを提案したい。",
      "**1. 基幹システムの「建築確認」制度。** 一定規模以上、または会計・医療・金融・個人情報を扱う業種では、AI 生成コードを本番投入する前に、**人間の有資格者による設計審査と署名**を求める。建築基準法の構造計算審査に近い発想だ。完璧な検証は無理だが、「誰が責任を負うか」を制度的に明確化する効果がある。",
      "**2. 「監査可能なバイブコーディング」標準。** 生成プロセス自体を記録可能にする。どのプロンプトで、どの AI モデルが、どんなコードを生成し、誰が承認して本番に出したか——を不可逆ログとして残す。インシデントが起きた時、原因究明と責任追及ができる仕組みだ。GitHub Copilot のインタラクションログ、Cursor のセッション履歴を企業向けに標準化する方向性が考えられる。",
      "**3. インフラの「セーフティ・バイ・デフォルト」化。** Supabase、Vercel、Cloudflare、AWS Amplify などの主要プラットフォームが、**監査ログ・バックアップ・権限境界・脆弱性スキャン**を「あとから設定する機能」ではなく「最初からオンの標準」にする。バイブコーダーが何も設定しなくても、最低限の安全網が敷かれている状態を作る。",
      "**4. 「AI 生成コード保険」の普及。** バイブコーディングで作られたシステムが障害を起こした時の損害をカバーする保険商品を、サイバー保険の延長として整備する。保険会社は当然、加入条件として上記の建築確認・監査ログ・セーフティテンプレートを要求するから、**市場メカニズムで安全水準を引き上げる**効果がある。",
      "バイブコーディングは、過去40年デジタル化から取り残されてきた小さな業界に光を当てる、極めて重要な技術革新だ。それを「危ないから禁止」と言うのは、現場の創意工夫を殺すだけで、何の問題解決にもならない。同時に、「自由だから何でもアリ」と言うのは、データが壊れた時、情報が漏れた時、業務が止まった時に、最終的に被害を受ける顧客や市民を見ていない。",
      "**民主化と責任は両立する**。フロントエンドは現場の当事者が自由に作る。バックエンドと運用は専門家が土台を設計する。両者が同じ言語（CLAUDE.md、スキーマ、契約）で対話できるようにする。社会は「責任の所在」と「最低限の安全網」を制度で担保する。これが、バイブコーディング時代の基幹システムが目指すべき姿だと、本誌は考える。技術が民主化されるたび、社会は「自由と責任の再配分」を迫られてきた。インターネット、SaaS、スマートフォン、そしてバイブコーディング——順番に、私たちはこの問いに答えてきた。今度の答えを、誰かに任せきりにせず、現場の当事者と専門家と制度設計者が**一緒に考える**段階に来ている。"
    ],
    "tables": [
      {
        "afterParagraph": 7,
        "caption": "役割分担モデル: 誰が何を担うか",
        "headers": [
          "領域",
          "担当",
          "理由"
        ],
        "rows": [
          [
            "画面・帳票・業務フロー",
            "現場の当事者（バイブコーディング）",
            "業界の機微を最もよく知る、試行錯誤が許される領域"
          ],
          [
            "データモデル・スキーマ",
            "Vibe Architect（専門家）",
            "後から壊しにくい設計、整合性の保証"
          ],
          [
            "認証・認可・権限境界",
            "Vibe Architect",
            "セキュリティ事故の多くがここで起きる"
          ],
          [
            "CI/CD・自動テスト",
            "Vibe Architect",
            "本番投入前の最低限の検証"
          ],
          [
            "監視・バックアップ・災害復旧",
            "Vibe Architect + プラットフォーム標準",
            "「沈黙の壊れ方」を検知する仕組み"
          ],
          [
            "インシデント対応（午前3時）",
            "専門家チーム",
            "コードに責任を持つ主体が必要"
          ]
        ]
      },
      {
        "afterParagraph": 12,
        "caption": "社会が整備すべき4つの制度",
        "headers": [
          "制度",
          "目的",
          "参考にできる既存制度"
        ],
        "rows": [
          [
            "基幹システムの建築確認",
            "規制業種でのAI生成コードに有資格者の署名",
            "建築基準法の構造計算審査"
          ],
          [
            "監査可能なバイブコーディング",
            "プロンプト・生成・承認のログ化",
            "金融業界の監査証跡規制"
          ],
          [
            "セーフティ・バイ・デフォルト",
            "プラットフォームの安全機能を標準ON",
            "GDPR の Privacy by Design"
          ],
          [
            "AI生成コード保険",
            "市場メカニズムで安全水準を引き上げ",
            "サイバー保険"
          ]
        ]
      }
    ],
    "primarySources": []
  },
  "cursor-3-agent-first-workspace-2026": {
    "body": [
      "Anysphere が4月2日、AIコードエディタ Cursor のメジャーアップデート「**Cursor 3**」をリリースした。最大の変更点は、従来の Composer ペインを廃止し、**複数のAIエージェントを並列実行できる「Agents Window」**を搭載したことだ。ローカル、クラウド、リモートSSH、Git ワークツリーといった異なる環境のエージェントを1つの画面で管理できる。",
      "Agents Window では、複数のタスクを同時にエージェントへ委任できる。たとえば「認証機能のリファクタリング」と「テストの追加」を別々のエージェントに並列で実行させ、それぞれの進捗をリアルタイムで監視する使い方が想定されている。エージェントのセッションを**ローカルからクラウドへシームレスに移行**できる「Cloud-Local Handoff」も搭載。長時間かかるタスクをクラウドに移して、自分は次の作業に移れる。",
      "もう一つの目玉機能が「**Design Mode**」だ。ブラウザ上でUIコンポーネントを直接アノテーション（注釈付け）し、AIエージェントにピンポイントで修正指示を出せる。「このボタンの色を変えて」「この余白を詰めて」といった視覚的なフィードバックを、スクリーンショットやテキスト説明なしで伝えられる。バイブコーディングとの相性が非常に高い機能だ。",
      "技術面では、**MCP（Model Context Protocol）のリッチコンテンツ対応**が強化され、ツール出力に構造化データを含められるようになった。マルチリポジトリのサポートも改善され、モノレポや複数プロジェクトを跨いだエージェント操作が容易になっている。",
      "Cursor 3 は既存の Cursor ユーザーに無料アップデートとして提供される。AI コードエディタ市場では Claude Code、GitHub Copilot（VS Code 統合）、Windsurf との競争が激化しているが、Cursor は「エージェントファースト」という明確な方向性を打ち出した。コードを書くツールから、**エージェントを指揮するワークスペース**への転換を宣言した形だ。"
    ],
    "tables": [
      {
        "afterParagraph": 4,
        "caption": "Cursor 3 の主要新機能",
        "headers": [
          "機能",
          "概要"
        ],
        "rows": [
          [
            "Agents Window",
            "Composer を置き換え、複数エージェントの並列実行・管理を一画面で"
          ],
          [
            "Cloud-Local Handoff",
            "ローカルのエージェントセッションをクラウドに移行、オフライン中も継続"
          ],
          [
            "Design Mode",
            "ブラウザ上でUIを直接アノテーション、視覚的にAIへ修正指示"
          ],
          [
            "マルチリポ対応",
            "複数リポジトリを跨いだエージェント操作"
          ],
          [
            "MCP リッチコンテンツ",
            "ツール出力に構造化データを含むレスポンス対応"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Meet the new Cursor",
        "site": "Cursor Blog",
        "url": "https://cursor.com/blog/cursor-3"
      },
      {
        "title": "Cursor Changelog",
        "site": "Cursor",
        "url": "https://cursor.com/changelog"
      }
    ]
  },
  "openai-122b-funding-round-852b-valuation-2026": {
    "body": [
      "**【取り下げのお知らせ（2026-06-05）】** 本記事は、同じ OpenAI $122B 資金調達を扱う先行記事と内容が重複していたため、編集ポリシーに基づき取り下げました。",
      "同じ事象に関する canonical 記事は「[OpenAI が史上最大の$122B（約18兆円）を調達、評価額$852B — Amazon・Nvidia・SoftBank が巨額出資、AI スーパーアプリ構想へ](?a=openai-122b-funding-852b-valuation-2026)」をご参照ください。Bloomberg・TechCrunch・CoinDesk・The AI Insider の一次ソースに基づき、出資内訳・スーパーアプリ構想・IPO 観測まで網羅しています。",
      "【編集履歴】",
      "・【月次見直し 2026-08-19】(1) **7月31日の値下げを全面反映**。Luna $1/$6 → $0.20/$1.20（80%引き下げ）、Terra $2.50/$15 → $2/$12（20%引き下げ）。旧版の価格記述は改定前の値だった。(2) 8月の動向として ChatGPT 無料枠の無制限化と既定モデルの Luna 化、Ultrafast モード（8/13）、Codex の Goal mode GA と Appshots（8/14）を追加。(3) 競合構図を更新 — Grok 4.6 が Artificial Analysis で Sol と同点の61に達し、Claude Opus 5 が Sol と同価格帯に参入したため「3強」から「4強」に改めた。(4) Sonnet 5 の導入価格が8月31日で終了し、9月以降は Terra のほうが入力単価で安くなる点を追記した（この追記内容は誤りだった。2026-09-30 の訂正を参照）。",
      "・【訂正 2026-08-19】企業向けの評価を **5 → 4** に修正しました。本記事は注意点として「OpenAI 依存とガバナンスリスク」「米政府事前共有プロセスの継続」を挙げているにもかかわらず、企業向けを満点としており、**評価と本文の記述が整合していませんでした**。各軸の加重平均は 4.90 で、公表している総合 ★5.0 との差は許容範囲内のため総合値は据え置きます。",
      "・【取り下げ 2026-06-05】同事象の先行記事と重複していたため取り下げ。canonical 記事への案内に置換。元の本文は削除しました。",
      "【訂正 2026-09-30】（誤）2026-08-19 の月次見直しで「Sonnet 5 の導入価格が8月31日で終了し、9月以降は Terra のほうが入力単価で安くなる」と記した →（正）Sonnet 5 の $2/$10 は標準価格として恒久化され、9/1 の $3/$15 への引き上げは行われなかった。この恒久化は2026年8月10日に公式が発表しており、8/19 の見直しの時点で既に誤っていた。Terra（$2/$12）と Sonnet 5（$2/$10）は入力が同額で、9月以降に Terra のほうが入力単価で安くなることはない。本文には該当する比較の記述が残っていないため、編集履歴の記述のみを訂正した。"
    ],
    "primarySources": [
      {
        "title": "OpenAI raises $122 billion to accelerate the next phase of AI",
        "site": "OpenAI",
        "url": "https://openai.com/index/accelerating-the-next-phase-ai/"
      },
      {
        "title": "Pricing - Claude API Docs（Claude Sonnet 5 の脚注3）",
        "site": "platform.claude.com",
        "url": "https://platform.claude.com/docs/en/about-claude/pricing"
      },
      {
        "title": "Release notes（2026年8月10日: Claude Sonnet 5 の導入価格が標準価格に）",
        "site": "platform.claude.com",
        "url": "https://platform.claude.com/docs/en/release-notes/overview"
      },
      {
        "title": "Introducing Claude Sonnet 5（Edit August 10, 2026）",
        "site": "anthropic.com",
        "url": "https://www.anthropic.com/news/claude-sonnet-5"
      }
    ]
  },
  "github-copilot-training-data-policy-change-2026": {
    "body": [
      "GitHub が3月25日、Copilot の利用規約を更新し、**4月24日から Free・Pro・Pro+ ユーザーのインタラクションデータをAIモデルの学習に使用する**と発表した。対象データは、Copilot に送信されるコードスニペット、プロンプト、出力、コンテキスト情報で、**プライベートリポジトリのコードも含まれる**。デフォルトはオプトイン（同意済み）で、ユーザーが手動でオプトアウトしない限り学習に使われる。",
      "重要なのは**プランによる扱いの差**だ。**Copilot Business と Enterprise のユーザーは完全に除外**されており、契約上インタラクションデータが学習に使われることはない。また、有料組織のメンバーや外部コラボレーターのデータも対象外となる。つまり個人開発者だけが学習対象で、企業ユーザーは保護される「二重基準」が生まれている。",
      "GitHub のコミュニティディスカッション（#188488）では、**賛成1件に対し反対259件**という圧倒的な反対が記録されている。主な批判は（1）オプトアウトではなくオプトインにすべき（2）プライベートリポジトリのコードが学習される懸念（3）リポジトリ単位のコントロールがない（4）コードを学習に使うなら対価を払うべき——の4点に集中している。",
      "**オプトアウトの手順**は以下の通り。GitHub.com にログイン → 右上のプロフィール画像 → **Copilot settings** → Privacy セクションの「**Allow GitHub to use my data for AI model training**」を **Disabled** にする。直接 URL（github.com/settings/copilot/features）からもアクセスできる。4月24日の期限前に設定を変更すれば、それ以降データは収集されない。ただし、**リポジトリ単位の細かい制御はなく、アカウント全体のオン/オフのみ**だ。",
      "法的な観点では、GitHub は GDPR の「正当な利益（legitimate interest）」を根拠に挙げている。しかし、独自コードの知的財産権が絡む場合に「正当な利益」が成立するかは議論が分かれるところだ。Copilot の学習データをめぐる集団訴訟（*Doe v. GitHub*）も係争中であり、今回のポリシー変更がその訴訟にどう影響するかも注目される。",
      "**バイブコーダーへの実務的な影響**を整理しておこう。Copilot Free/Pro を使っている個人開発者は、**4月24日までにオプトアウト設定を確認すべき**だ。特にクライアントワークや業務委託で書いたコードがプライベートリポジトリにある場合、意図せず学習データに含まれるリスクがある。Copilot Business/Enterprise ユーザーは影響なし。代替ツール（Claude Code、Cursor、Cody 等）への移行を検討する開発者も増えており、AIコーディングツール市場の勢力図に影響を与える可能性がある。"
    ],
    "tables": [
      {
        "afterParagraph": 1,
        "caption": "プラン別のデータ学習ポリシー",
        "headers": [
          "プラン",
          "データ学習",
          "オプトアウト"
        ],
        "rows": [
          [
            "Copilot Free",
            "対象（デフォルトON）",
            "手動で無効化が必要"
          ],
          [
            "Copilot Pro",
            "対象（デフォルトON）",
            "手動で無効化が必要"
          ],
          [
            "Copilot Pro+",
            "対象（デフォルトON）",
            "手動で無効化が必要"
          ],
          [
            "Copilot Business",
            "対象外（契約で禁止）",
            "不要"
          ],
          [
            "Copilot Enterprise",
            "対象外（契約で禁止）",
            "不要"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Updates to GitHub Copilot interaction data usage policy",
        "site": "GitHub Blog",
        "url": "https://github.blog/news-insights/company-news/updates-to-github-copilot-interaction-data-usage-policy/"
      },
      {
        "title": "FAQ: Privacy Statement update on Copilot data use",
        "site": "GitHub Community",
        "url": "https://github.com/orgs/community/discussions/188488"
      }
    ]
  },
  "supabase-500m-funding-10b-valuation-2026": {
    "body": [
      "オープンソースの Firebase 代替「**Supabase**」が、シンガポールの政府系ファンド **GIC** の主導で約5億ドルの資金調達を交渉中だ。実現すれば評価額は**約100億ドル（約1.5兆円）**に達し、わずか1年前の20億ドルから**5倍**の急成長となる。The Information が4月2日に報じた。",
      "Supabase の評価額の推移は目を見張る。2024年9月のシリーズCで約7.6億ドル、2025年4月のシリーズDで20億ドル、同年10月のシリーズEで50億ドル、そして今回の100億ドル。**半年ごとに評価額が倍増**するペースだ。これまでの累計調達額は約5億ドルで、今回のラウンドが成立すれば合計10億ドルに到達する。",
      "この異例の成長を支えているのが**バイブコーディング需要**だ。Cursor、Bolt.new、Lovable といったAIコーディングツールが、ユーザーが作るアプリのバックエンドとして Supabase を**デフォルトのデータベース**に採用している。AIが「データベースが必要」と判断すると自動的に Supabase をプロビジョニングする仕組みで、AIコーディングツールの普及がそのまま Supabase の成長に直結する構造だ。",
      "年間経常収益（ARR）は2024年末の3,000万ドルから2025年半ばに**7,000万ドル**へ急伸。前年比**約250%**の成長率を記録した。開発者数は**400万人超**、チーム規模は約230人。投資家には Accel、Peak XV（旧 Sequoia India）に加え、Figma Ventures、OpenAI CPO の Kevin Weil、Vercel CEO の Guillermo Rauch、Laravel 作者の Taylor Otwell も名を連ねる。",
      "Supabase は PostgreSQL をベースに、データベース、認証、ストレージ、Edge Functions、リアルタイムサブスクリプションを統合プラットフォームとして提供する。**pgvector** によるベクトル検索も標準搭載しており、RAG（検索拡張生成）パイプラインのバックエンドとしても採用が広がっている。バイブコーディング時代の「AIが選ぶインフラ」としてのポジションを確立しつつある。"
    ],
    "tables": [
      {
        "afterParagraph": 1,
        "caption": "Supabase の資金調達・評価額の推移",
        "headers": [
          "ラウンド",
          "時期",
          "調達額",
          "評価額"
        ],
        "rows": [
          [
            "Series C",
            "2024年9月",
            "$80M",
            "〜$765M"
          ],
          [
            "Series D",
            "2025年4月",
            "$200M",
            "$2B"
          ],
          [
            "Series E",
            "2025年10月",
            "$100M",
            "$5B"
          ],
          [
            "新ラウンド（交渉中）",
            "2026年4月",
            "〜$500M",
            "〜$10B"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Database Startup Supabase in Talks to Double Valuation to $10 Billion",
        "site": "The Information",
        "url": "https://www.theinformation.com/articles/database-startup-supabase-talks-double-valuation-10-billion"
      },
      {
        "title": "Supabase nabs $5B valuation, four months after hitting $2B",
        "site": "TechCrunch",
        "url": "https://techcrunch.com/2025/10/03/supabase-nabs-5b-valuation-four-months-after-hitting-2b/"
      }
    ]
  },
  "anthropic-coefficient-bio-acquisition-400m-2026": {
    "body": [
      "Anthropic が4月3日、バイオテックAIスタートアップ **Coefficient Bio** を約**4億ドル（約600億円）の株式交換**で買収したことが明らかになった。The Information と Newcomer が報じ、TechCrunch 等が追認した。Coefficient Bio は創業からわずか**8ヶ月**、社員**10人未満**のステルスモード企業で、製品の公開リリースもなかった。",
      "共同創業者の **Samuel Stanton** と **Nathan C. Frey** は、ロシュ傘下 Genentech の計算創薬部門「**Prescient Design**」出身。タンパク質設計と生体分子モデリングの専門家で、チームのほぼ全員が Genentech の計算生物学研究者だ。AI を使って創薬研究開発の計画立案、臨床・規制戦略の管理、新薬候補の同定を行うプラットフォームを開発していた。",
      "Coefficient Bio のチームは Anthropic の**ヘルスケア・ライフサイエンス部門**に合流する。同部門は Eric Kauderer-Abrams が率いており、2025年10月に発表された「**Claude for Life Sciences**」（Benchling、PubMed、10x Genomics と連携する研究支援ツール）の開発を担当している。Claude for Life Sciences が汎用的な研究アシスタントだったのに対し、Coefficient Bio のチームはタンパク質設計など**ドメイン特化の専門知識**をもたらす。",
      "業界の反応は分かれている。批判派は「製品も売上もない10人のチームに4億ドルは過大評価」と指摘し、実質的な**人材獲得（アクイハイア）**だと見る。一方、支持派は製薬業界の市場規模（承認薬1つで数十億ドルの売上）を考えれば、創薬ワークフローに特化したAIツールのポテンシャルは十分に4億ドルを正当化すると主張する。なお、出資者の Dimension（VC）は約50%の持分から**IRR 38,513%**という驚異的なリターンを記録した計算になる。",
      "Anthropic のライフサイエンス戦略は、Google DeepMind（AlphaFold）や OpenAI とのバイオテックAI競争を意識したものだ。汎用LLMの開発競争が激化する中、**製薬企業向けの高単価・ドメイン特化ツール**で差別化を図る狙いが見える。AI企業がモデル性能だけでなく「どの産業の専門家を抱えるか」で競う時代に入りつつある。"
    ],
    "tables": [],
    "primarySources": [
      {
        "title": "Anthropic buys biotech startup Coefficient Bio in $400M deal",
        "site": "TechCrunch",
        "url": "https://techcrunch.com/2026/04/03/anthropic-buys-biotech-startup-coefficient-bio-in-400m-deal-reports/"
      },
      {
        "title": "Anthropic Acquires Startup Coefficient Bio for About $400 Million",
        "site": "The Information",
        "url": "https://www.theinformation.com/articles/anthropic-acquires-startup-coefficient-bio-400-million"
      }
    ]
  },
  "anthropic-1m-context-beta-deadline-april30-2026": {
    "body": [
      "**4月30日**に迫った期限を改めて周知する。Anthropic は Claude Sonnet 4.5 と Claude Sonnet 4 の**1Mトークンコンテキストウィンドウβ（ベータ）を4月30日に終了**する。期日以降、`context-1m-2025-08-07` ベータヘッダーは無効化され、200Kトークンを超えるリクエストは**エラーを返す**。該当モデルを使用中の開発者は、残り約3週間で移行を完了する必要がある。",
      "移行先は **Claude Sonnet 4.6** または **Claude Opus 4.6** だ。これらのモデルでは1Mコンテキストが**GA（一般提供）**となっており、ベータヘッダー不要・追加料金なしで利用できる。以前は長文コンテキストに割増料金が課されていた（Sonnet の入力が $3→$6/MTok、Opus が $5→$10/MTok に跳ね上がっていた）が、4.6 系では**サーチャージが完全撤廃**された。Sonnet 4.6 は $3/$15、Opus 4.6 は $5/$25（入力/出力、MTok あたり）で全コンテキスト長に統一料金が適用される。",
      "移行作業は最小限だ。APIコール中のモデル名を `claude-sonnet-4-6` または `claude-opus-4-6` に変更し、ベータヘッダーを削除するだけで完了する。コードの他の部分を変更する必要はない。ただし、**Google Cloud Vertex AI や Amazon Bedrock 経由で Claude を利用している場合**、廃止日が異なる可能性がある（Vertex AI では Claude 3.7 Sonnet の廃止が5月11日など）。各クラウドプロバイダーのライフサイクルページを確認してほしい。",
      "今回の1Mベータ廃止は、より大きな**モデル整理の一環**でもある。Claude 3.7 Sonnet はすでに廃止済み（リクエストはエラーを返す）、Claude Haiku 3 は**4月19日に廃止予定**だ。旧モデルに依存しているアプリケーションは、この機会に一括で移行を検討すべきだろう。",
      "4.6 系への移行で得られるメリットは1Mコンテキストだけではない。**Message Batches API で max_tokens が300Kに拡大**（`output-300k-2026-03-24` ヘッダー使用）、**1リクエストあたり最大600枚の画像/PDFページ**に対応（従来は100枚）、Models API に `capabilities` フィールドが追加されモデルの対応機能をプログラマティックに検出可能になった。**プロンプトキャッシュとバッチ割引も1M全域に標準適用**される。コスト面でも機能面でも、移行しない理由がない。"
    ],
    "tables": [
      {
        "afterParagraph": 1,
        "caption": "1Mコンテキスト: 旧モデルβ vs 4.6系GA",
        "headers": [
          "項目",
          "Sonnet 4.5/4（β）",
          "Sonnet 4.6 / Opus 4.6（GA）"
        ],
        "rows": [
          [
            "1Mコンテキスト",
            "ベータヘッダー必須",
            "標準対応（ヘッダー不要）"
          ],
          [
            "入力料金（MTok）",
            "$3〜$6（長文割増あり）",
            "$3 / $5（統一料金）"
          ],
          [
            "利用期限",
            "4月30日で終了",
            "制限なし"
          ],
          [
            "画像/PDF上限",
            "100枚/リクエスト",
            "600枚/リクエスト"
          ],
          [
            "最大出力トークン",
            "標準",
            "300K（Batches API）"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Model Deprecations",
        "site": "Anthropic Docs",
        "url": "https://platform.claude.com/docs/en/about-claude/model-deprecations"
      },
      {
        "title": "Anthropic drops the surcharge for million-token context windows",
        "site": "The Decoder",
        "url": "https://the-decoder.com/anthropic-drops-the-surcharge-for-million-token-context-windows-making-opus-4-6-and-sonnet-4-6-far-cheaper/"
      }
    ]
  },
  "design-md-ai-agent-design-system-format-2026": {
    "body": [
      "AIエージェントに「このサイトみたいなデザインで作って」と伝える方法が変わろうとしている。Google が **Stitch 2.0**（2026年3月18日リリース）で導入した「**DESIGN.md**」は、デザインシステムをプレーンテキストの Markdown で記述し、AIエージェントに読ませるフォーマットだ。Figma のエクスポートも、JSON の Design Tokens も不要。.md ファイルをプロジェクトルートに置いて「これに従って作って」と指示するだけで、AIがカラーパレット・タイポグラフィ・コンポーネント仕様に沿ったUIを生成する。",
      "DESIGN.md が Markdown を採用した理由はシンプルだ。**LLM は大量の Markdown で訓練されている**ため、JSON や YAML より構造を正確に理解できる。仕様は9つのセクションで構成される。（1）ビジュアルテーマ（2）カラーパレット（3）タイポグラフィ（4）コンポーネント（5）レイアウト（6）奥行き・エレベーション（7）Do's / Don'ts（8）レスポンシブ（9）エージェント向けプロンプトガイド。人間が読んでも理解でき、AI が読んでも正確に従える、両方を満たす設計だ。",
      "この流れを加速させたのが、VoltAgent が公開した **awesome-design-md** リポジトリだ。Stripe、Vercel、Notion、Figma、Linear、Spotify、Airbnb など**55以上の有名サイトのデザインシステムを DESIGN.md 形式で抽出**し、GitHub で公開。誰でもコピーしてプロジェクトに置くだけで、そのサイト風のUIをAIに生成させられる。リポジトリは **9.5K スター**を獲得しており、バイブコーディングの文脈で急速に普及している。",
      "従来の Figma-to-Code や Design Tokens（JSON）と比較すると、DESIGN.md の強みは**ポータビリティと手軽さ**にある。Figma はデザイナーとの協業には強いが、MCPサーバーのセットアップが必要で、Figma エコシステムに依存する。Design Tokens は機械的に正確だが、LLM にとっては Markdown ほど自然に理解できない。一方で DESIGN.md は「ガイド」であって「制約」ではない——LLM がスペック通りに生成する保証はなく、「16px 指定なのに 15px になった」ということは起こり得る。**精密さではなく手軽さとスピードを優先するフォーマット**だ。",
      "バイブコーダーにとっての実用的な使い方は明確だ。awesome-design-md から気に入ったサイトの DESIGN.md をコピーしてプロジェクトに置き、「DESIGN.md に従ってログインページを作って」と AI に指示する。あるいは、自分のプロジェクト用に DESIGN.md を AI に作らせることもできる——「今のサイトの CSS を読んで DESIGN.md を生成して」と言えば、AI が CSS カスタムプロパティを抽出して9セクション形式でまとめてくれる。デザインの一貫性を「人間が毎回指示する」のではなく、「ファイルに書いておいてAIに読ませる」ことで自動化する発想だ。"
    ],
    "tables": [
      {
        "afterParagraph": 3,
        "caption": "DESIGN.md vs 従来のアプローチ",
        "headers": [
          "アプローチ",
          "強み",
          "弱み"
        ],
        "rows": [
          [
            "DESIGN.md（Markdown）",
            "LLM が自然に理解、ツール不要、ポータブル",
            "LLM の解釈に依存、ピクセル精度は保証されない"
          ],
          [
            "Figma + MCP",
            "ピクセル精度が高い、デザイナー協業に強い",
            "Figma 依存、MCP セットアップが必要"
          ],
          [
            "Design Tokens（JSON）",
            "機械的に正確、フレームワーク非依存",
            "LLM にとって Markdown より理解しづらい"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Design UI using AI with Stitch",
        "site": "Google Blog",
        "url": "https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/"
      },
      {
        "title": "VoltAgent/awesome-design-md",
        "site": "GitHub",
        "url": "https://github.com/VoltAgent/awesome-design-md"
      }
    ]
  },
  "glassworm-invisible-unicode-malware-github-supply-chain-2026": {
    "body": [
      "不可視の属性を持つ Unicode 制御文字をコードに埋め込み、悪意あるプログラムを実行させる新手のサイバー攻撃手法「**GlassWorm（グラスワーム）**」が急拡大している。攻撃者は GitHub で多数の開発者が参画する OSS プロジェクトやソフトウェアの流通マーケットで善意を装ってコードを提供。ベルギーの Aikido Security 等の調査により、**GitHub 上の151以上のリポジトリ、npm パッケージ、VS Code 拡張機能など計433件以上**が汚染されていたことが判明した。",
      "GlassWorm の核心は、開発者が使うエディタや差分表示ツールで**表示されない Unicode 制御文字**を悪用する点にある。具体的には「異体字セレクター（U+FE00〜U+FE0F）」や「異体字セレクター補助（U+E0100〜U+E01EF）」の範囲を使い、表示文字幅ゼロの長大な文字列を生成する。ある攻撃例では、**1行のコードの中に1万8000行以上の不可視コード**が埋め込まれていた。エディタでも GitHub のコードレビュー画面でも見えないため、レビュアーのチェックをすり抜ける。",
      "JavaScript ランタイムがこの文字列に遭遇すると、小さなデコーダーが実バイトを抽出し `eval()` に渡す仕組みだ。ペイロードは **Solana ブロックチェーン上のウォレットから C2（コマンド＆コントロール）URL を取得**し、追加スクリプトをダウンロードする。最終的に暗号通貨ウォレットデータ、認証情報、アクセストークン、SSH キー、開発者環境データなどを窃取する。",
      "被害は広範囲に及んでいる。GitHub では **React 関連ライブラリ**、WebAssembly ランタイム「**Wasmer**」、開発ツール「**OpenCode**」関連プロジェクトなどでコード汚染が確認された。VS Code / Open VSX のマーケットプレイスでも**72件以上の拡張機能**が汚染され、うち1件は3万5000ダウンロードを記録していた。GlassWorm の最初期の発見はイスラエルの Koi Security によるもので、2025年10月に Open VSX で不審な拡張機能を報告したのが始まりだ。2026年3月に入って攻撃が急増し、3月3日〜9日の1週間だけで GitHub 上の151リポジトリが汚染された。",
      "多くの専門家が指摘するのは、攻撃者が **LLM（大規模言語モデル）を使ってもっともらしいコードを大量に偽装**している可能性だ。Aikido Security の調査では、不可視ペイロードの周囲に配置されたコードは「ドキュメントの微修正」「バージョンバンプ」「小さなリファクタリング」「バグ修正」など、各プロジェクトのスタイルに一貫した自然な変更が施されていた。AI が生成した「見た目だけ正当なコード」で実際の貢献を装い、レビューの心理的バリアを下げる戦術だ。",
      "**バイブコーディング（AIにコードを書かせる開発スタイル）ではこの攻撃が特に深刻**だ。バイブコーダーは「AIが書いたコードをそのまま動かす」のが前提で、npm install も npx も AI が勝手に実行する。ここで重要なのは、npm は `postinstall` スクリプトを**インストール時に自動実行**する仕組みがあるため、**install した瞬間にもう手遅れ**だという点だ。「入れてから確認」では間に合わない。SKILL.md のスクリプトも AI エージェントが自動実行し、VS Code 拡張も「おすすめです」で入れる——いずれも人間の検証が入らない。GlassWorm の不可視コードは「見て確認する」防御を無力化するが、バイブコーディングはそもそも「見ない」のだから、攻撃者にとって理想的な標的だ。",
      "さらに危険なのは、**ソースコードの所在が不明なまま実行を促すパターン**だ。X や SNS で「`npx awesome-tool` で一発セットアップ！」「`npm install magic-lib` を入れるだけ」と紹介されていても、その裏にある GitHub リポジトリや公式サイトが示されていなければ**極めて怪しい**。正当な OSS なら必ず GitHub リポジトリが存在し、README にソースコード、ライセンス、コントリビューターが明示されている。「コマンド1行で入る」の手軽さは、裏を返せば「中身を確認させない」攻撃者のテクニックでもある。",
      "では現実的に機能する防御は何か。**初心者に「毎回AIに聞け」は機能しない**。聞かないし、AIが勝手にパッケージを入れる場合もある。人間の注意力に依存する対策は破綻する。そこで有効なのが、**CLAUDE.md（AI エージェントへの指示書）にセキュリティルールを書き込む**ことだ。AI エージェント自身を防御層にする発想である。以下のルールをプロジェクトの CLAUDE.md にコピペすれば、AI が外部パッケージの導入前に自動で安全確認を行うようになる。",
      "```\n## セキュリティポリシー\n- npm install / npx の実行前に、必ず対象パッケージの GitHub リポジトリを確認する\n- GitHub リポジトリが存在しない、または README にソースコードの説明がないパッケージは導入しない\n- npm install は必ず --ignore-scripts オプション付きで実行し、postinstall の自動実行を防ぐ\n- インストール後に npm audit を実行し、脆弱性がないことを確認してから npm rebuild する\n- SKILL.md、scripts/ ディレクトリ、postinstall スクリプトの中身は実行前に必ず確認し、ユーザーに内容を説明する\n- 外部から提供されたコマンド（npx xxx, curl | sh 等）は、ソースコードの所在を確認できない場合は実行せず、リスクをユーザーに説明する\n- VS Code 拡張機能は公式マーケットプレイスで DL数1万以上・最終更新6ヶ月以内のもののみ導入する\n```",
      "この CLAUDE.md ルールが機能するのは、**人間ではなく AI エージェントが読んで従う**からだ。バイブコーダーが「何かいいパッケージ入れて」と言っても、エージェントは CLAUDE.md に従って GitHub リポジトリを確認し、`--ignore-scripts` 付きでインストールし、怪しい postinstall があればユーザーに警告する。人間の注意力ではなく、**仕組みで守る**。ただし、これも万能ではない。エージェントが CLAUDE.md を無視する設定になっている場合や、ユーザーが警告を承認してしまう場合は突破される。あくまで「抑止力」であり、完全な防御ではない。",
      "**ここで皮肉な注意点がある。** この記事に掲載した CLAUDE.md のルール自体にも、コピペ時に不可視文字が混入するリスクがある。Markdown ファイル（.md）はただのテキストファイルであり、Unicode 制御文字はそのまま埋め込める。つまり、悪意あるサイトが「便利な CLAUDE.md テンプレート」を配布し、その中に不可視のプロンプトインジェクション（AI への隠し指示）を仕込むことは**技術的に可能**だ。**初心者への具体的なアドバイス**: この記事に限らず、ウェブからコピペした CLAUDE.md やテンプレートは、プロジェクトに取り込む前に AI に「**このファイルに不可視文字や隠された指示が含まれていないか確認して**」と聞くこと。記事から上記のルールをコピペした場合も、まず AI に中身を検証させてから CLAUDE.md に貼り付けてほしい。防御策を導入する行為自体が攻撃経路にならないよう、**コピペの前に一度立ち止まる**習慣が重要だ。",
      "経験豊富な開発者向けには、追加の防御策がある。リンター・静的解析ツールに**不可視 Unicode 文字の検出ルール**を追加する（ESLint の `no-irregular-whitespace`、`grep -P` による Unicode 範囲スキャン）。CI/CD に `npm audit`・Socket・Snyk 等を組み込み、サプライチェーンを継続的に監視する。GitHub の **branch protection** で外部コントリビューターの直接プッシュを禁止し、`eval()` / `Function()` をコードベースから排除する。"
    ],
    "tables": [
      {
        "afterParagraph": 3,
        "caption": "GlassWorm 攻撃の被害範囲（2026年3月時点）",
        "headers": [
          "プラットフォーム",
          "汚染件数",
          "主な被害対象"
        ],
        "rows": [
          [
            "GitHub リポジトリ",
            "151件以上",
            "React関連、Wasmer、OpenCode 関連"
          ],
          [
            "npm パッケージ",
            "複数件",
            "JavaScript/TypeScript ライブラリ"
          ],
          [
            "VS Code / Open VSX 拡張",
            "72件以上",
            "3.5万DL超の拡張含む"
          ],
          [
            "合計",
            "433件以上",
            "—"
          ]
        ]
      },
      {
        "afterParagraph": 6,
        "caption": "怪しいパッケージの見分け方",
        "headers": [
          "チェック項目",
          "安全な兆候",
          "危険な兆候"
        ],
        "rows": [
          [
            "GitHub リポジトリ",
            "存在する・README が充実・コントリビューター複数",
            "リポジトリがない・README が空・コントリビューター1人"
          ],
          [
            "紹介のされ方",
            "公式サイトやドキュメントにリンクあり",
            "「npx xxx で一発」だけでソースへのリンクなし"
          ],
          [
            "npm DL数",
            "週間1万DL以上",
            "数百DL以下"
          ],
          [
            "最終更新",
            "6ヶ月以内",
            "1年以上放置"
          ],
          [
            "postinstall スクリプト",
            "ない、またはビルド処理のみ",
            "外部URLへの通信・eval() の使用"
          ],
          [
            "パッケージ名",
            "公式と完全一致",
            "公式名に似ているが微妙に違う（タイポスクワッティング）"
          ]
        ]
      },
      {
        "afterParagraph": 10,
        "caption": "レベル別の防御策",
        "headers": [
          "レベル",
          "対策",
          "やり方"
        ],
        "rows": [
          [
            "初心者",
            "CLAUDE.md にセキュリティルールをコピペ",
            "上記のルールを貼るだけでAIエージェントが自動防御"
          ],
          [
            "初心者",
            "ソースが不明なコマンドを実行しない",
            "npx xxx や curl | sh でGitHubリンクがなければ実行しない"
          ],
          [
            "中級者",
            "npm install --ignore-scripts",
            "postinstall の自動実行を防ぎ、audit後に rebuild"
          ],
          [
            "中級者",
            "不可視文字の検出",
            "ESLint no-irregular-whitespace を .eslintrc に追加"
          ],
          [
            "上級者",
            "CI/CD にサプライチェーン監査",
            "Socket / Snyk / npm audit を自動実行"
          ],
          [
            "上級者",
            "eval() の完全排除 + branch protection",
            "コードベースから eval() 排除、PR レビュー必須化"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Glassworm Returns: Invisible Unicode Malware Found in 150+ GitHub Repositories",
        "site": "Aikido Security",
        "url": "https://www.aikido.dev/blog/glassworm-returns-unicode-attack-github-npm-vscode"
      },
      {
        "title": "不可視文字でマルウエア混入 GitHubなどで汚染拡大、開発基盤の信頼揺らぐ",
        "site": "日経クロステック",
        "url": "https://xtech.nikkei.com/atcl/nxt/column/18/00989/040100204/"
      }
    ]
  },
  "anthropic-claude-third-party-harness-extra-usage-2026": {
    "body": [
      "Anthropic は2026年4月4日、OpenClaw をはじめとするサードパーティ製ハーネスでの **Claude サブスクリプション枠の利用を正式に停止**した。4月4日12時（PT）/ 20時（BST）以降、サードパーティツールから Claude を利用する場合は**サブスクとは別に請求される Extra Usage（従量課金）**が必要になる。Claude Code と Claude Cowork は引き続きサブスクリプションの定額枠内で利用可能だ。",
      "この決定は突然のものではない。Anthropic は **2026年1月**に Claude Pro/Max の OAuth トークンをサードパーティハーネスで利用できないよう技術的に遮断し、**2月17日**には消費者利用規約に「OAuth トークンを公式以外の製品・ツール・サービスで使用することは規約違反」と明記した。今回はその最終段階として、Extra Usage への正式移行と移行措置を発表した形だ。",
      "背景にあるのは、サードパーティハーネスによる**システムへの過大な負荷**だ。OpenClaw 等のツールは Claude Code の OAuth トークンを再利用し、定額サブスクリプションの枠内でエージェントのスウォーム実行やバッチ処理を行っていた。これは Anthropic にとって、定額料金で想定を大幅に超える計算リソースを消費される構造的な問題だった。Anthropic はメールで「キャパシティは慎重に管理すべきリソースであり、コア製品のユーザーを優先する必要がある」と説明している。",
      "移行措置として、Anthropic は全有料プランの加入者に**月額サブスクリプション料金と同額の一回限りクレジット**を Extra Usage 用に付与している。Max 20x プラン（$200/月）の加入者には $200 分のクレジットが付与されることが確認されている。4月17日までに引き換えが必要で、引き換え後は **90日間有効**。このクレジットは Claude Code、Claude Cowork、チャット、サードパーティハーネスの**全てで使える**。さらに、Extra Usage の**事前購入バンドルで最大30%の割引**も新設された。サブスクの上限を超えた場合にも使えるため、サードパーティに限らず Extra Usage の入門としても機能する。なお、返金を希望するユーザーには翌日にサブスクリプションの返金オプション付きメールが届く予定だ。",
      "この動きが意味するのは、**「公式ツール＝定額」「サードパーティ＝従量課金」**という明確な境界線の確立だ。Claude Code と Cowork という自社製品はサブスクの価値提案として維持しつつ、サードパーティには API と同じ従量課金モデルを適用する。OpenClaw ユーザーにとっては実質的なコスト増となるが、API キーによる従量課金（Sonnet 4.6 で入力 $3/百万トークン、出力 $15/百万トークン）での利用は引き続き合法だ。",
      "開発者コミュニティでは「$200/月の Max プランで OpenClaw を回していたユーザーが $15 で再構築した」という記事も出ており、API 直接利用への移行が進んでいる。一方で「これはプラットフォーム独占への布石だ」という批判もある。Anthropic が提供する M365 コネクターの全プラン開放（同日発表）と合わせて見ると、公式エコシステムの囲い込みと、サードパーティとの棲み分けを同時に進めるプラットフォーム戦略が鮮明になっている。"
    ],
    "tables": [
      {
        "afterParagraph": 4,
        "caption": "サードパーティハーネス利用の変更まとめ",
        "headers": [
          "項目",
          "変更前",
          "変更後（4月4日〜）"
        ],
        "rows": [
          [
            "Claude Code / Cowork",
            "サブスク定額枠内",
            "変更なし（定額枠内）"
          ],
          [
            "OpenClaw 等サードパーティ",
            "サブスク定額枠内（グレー）",
            "Extra Usage（従量課金・別請求）"
          ],
          [
            "移行クレジット",
            "—",
            "月額相当の一回限りクレジット（4/17まで引換、90日間有効）"
          ],
          [
            "クレジット利用範囲",
            "—",
            "Claude Code・Cowork・チャット・サードパーティ全て"
          ],
          [
            "割引",
            "—",
            "事前購入バンドルで最大30%オフ"
          ],
          [
            "返金",
            "—",
            "サブスク返金オプション（翌日メール）"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Anthropic clarifies ban on third-party tool access to Claude",
        "site": "The Register",
        "url": "https://www.theregister.com/2026/02/20/anthropic_clarifies_ban_third_party_claude_access/"
      },
      {
        "title": "Anthropic officially bans using subscription auth for third party use",
        "site": "The Agent Times",
        "url": "https://theagenttimes.com/articles/anthropic-officially-bans-using-subscription-auth-for-third-party-use"
      }
    ]
  },
  "zperiod-3d-periodic-table-high-school-student-2026": {
    "body": [
      "3Dインタラクティブな化学学習アプリ「**Zperiod**」が X で反響を呼んだ。個人開発者が制作したブラウザ向けの無料アプリで、第三者による紹介投稿をきっかけに広く知られるようになった。",
      "Zperiod は全118元素に対応したインタラクティブ周期表で、各元素をクリックすると**3D原子モデル**（電子殻のアニメーション付き）が表示される。元素ごとに発見年、発見者、命名由来、一般的な用途、危険性、イオン情報などの詳細データがスワイプ可能なカード形式で閲覧できる。カテゴリ別の色分けや標準状態（STP）での相データも表示される。",
      "周期表だけでなく、化学学習に必要な実用ツールも充実している。**化学反応式バランサー**は複雑な化学式を自動でバランスし、ストイキオメトリー（化学量論）のフィードバックを視覚的に表示する。**経験式計算機**は分子量を元素ごとの質量内訳付きで瞬時に算出する。**溶解度表**ではイオン性化合物の溶解性をインタラクティブなチャートとルールで参照できる。いずれも Grade 9〜12（中学3年〜高校3年相当）の化学学習を想定した設計だ。",
      "ブラウザベースの Web アプリとして **zperiod.app** で無料公開されており、3D体験はデスクトップブラウザ推奨。インストール不要で即座に利用できる。",
      "AIツールが日々進化する中で、個人開発者がそれらを活用して教育分野のプロダクトを自ら設計・構築・公開できるようになった事実は注目に値する。Zperiod は「AIが人間の仕事を奪う」という議論の裏側で、AI時代のツールを武器に創造的なプロダクトが生まれている一例だ。",
      "---",
      "**【訂正 2026-08-11】** 本記事は公開当初、開発者を実名および X アカウント名で特定し、年齢（16歳・高校生）をタイトルと本文に記載していました。しかし当サイトが提示できる出典はアプリの公式サイト1件のみで、**本人の同一性・年齢を検証できる一次ソースを欠いていました**。また「19万回表示・4,000いいね」という数値と、開発者本人の発言として引用した内容にも出典がありませんでした。CLAUDE.md の「特定個人への帰属は検証可能な一次ソースがある場合のみ記載する」および「SNS の投稿を引用する場合、アカウントの実在と投稿内容を可能な限り検証する」に違反する状態であり、**未成年である可能性の高い私人の実名・アカウント名を、裏付けなく公開していた**ことになります。個人を特定する記述、未検証の数値、出典のない引用をすべて削除し、アプリ自体の紹介に記事の主旨を絞りました。お詫びして訂正します。"
    ],
    "embeds": [
      {
        "type": "x",
        "afterParagraph": 0,
        "url": "https://x.com/adxtyahq/status/2040034179812139393",
        "caption": "第三者アカウントによる Zperiod の紹介ポスト"
      }
    ],
    "primarySources": [
      {
        "title": "Zperiod — Interactive Periodic Table & Chemical Equation Balancer",
        "site": "Zperiod",
        "url": "https://zperiod.app/"
      }
    ]
  },
  "claude-microsoft-365-connector-all-plans-2026": {
    "body": [
      "Anthropic は2026年4月4日、Claude の **Microsoft 365 コネクター**を**全プラン**（Free・Pro・Max・Team・Enterprise）に開放したと発表した。これまで Team と Enterprise プラン限定だったこの機能が、個人ユーザーを含む全ユーザーに利用可能になった。Outlook のメール、OneDrive のファイル、SharePoint のドキュメント、Teams のチャット履歴を Claude の会話内から直接検索・参照できる。",
      "セットアップは claude.ai の「カスタマイズ > コネクター」から行う。Microsoft アカウントで OAuth 認証を完了すると、Claude が Microsoft Graph API を介して各サービスのデータにアクセスできるようになる。**読み取り専用**の設計で、Claude がメールを送信したり、ファイルを変更・削除したりすることはできない。アクセス権限は接続した Microsoft 365 アカウントの既存権限と同一で、権限昇格は発生しない。利用可能なプラットフォームは **claude.ai（Web）、Claude Desktop（macOS / Windows）、Claude Mobile（iOS / Android）、Claude Code（CLI）、API（MCP Connector 経由）**と幅広い。macOS 限定ではなく Windows でも利用でき、ブラウザからも使えるため実質 OS を問わない。ただし、モバイルからは新規コネクターの追加ができないため、初回設定は Web またはデスクトップアプリで行う必要がある。Team・Enterprise プランでは、組織の Owner が先にコネクターを有効化し、Microsoft Entra ID グローバル管理者がテナント全体の同意を完了する必要がある。Free・Pro・Max プランでは個人で直接接続できる。",
      "対応する4つのサービスはそれぞれ異なるユースケースをカバーする。**Outlook** ではメールスレッドの検索・要約・分析が可能で、「先週のクライアントとのやり取りをまとめて」といった指示に対応する。**OneDrive** では個人のドキュメントやファイルを検索・参照でき、**SharePoint** では組織のドキュメントライブラリを横断検索できる。**Teams** ではチャット会話やチャンネルの議論、会議メモを検索・参照できる。",
      "セキュリティ面では、認証に **OAuth 2.0 On-Behalf-Of（OBO）フロー**と PKCE を採用しており、パスワードは一切保存されない。全ての Microsoft Graph API 呼び出しは組織の Microsoft 365 監査ログに記録される。Team・Enterprise プランでは管理者が利用可能なユーザー/グループを制限したり、アクセス可能な M365 サービスを選択的に制御できる。",
      "今回の全プラン開放で注目すべきは **Microsoft Copilot との価格比較**だ。Microsoft は同じ Outlook・OneDrive・SharePoint・Teams 内で AI アシスタント機能を提供する Copilot に **$30/ユーザー/月** を課金している。一方、Claude の M365 コネクターは Free プランでも利用可能——つまり **$0** で同じデータにアクセスできる。しかも M365 コネクターは Microsoft 自身が構築し、Microsoft Marketplace で承認したものだ。テックアナリストの Aakash Gupta（@aakashgupta）は「Anthropic は Microsoft 自身の配管を使って Claude を売り込んでいる」と指摘している。",
      "Copilot の普及は想定より遅れている。Microsoft は2025年初頭時点で有料 Copilot シートが約200万と報告しており、M365 の有料アカウント4億に対して**浸透率は1%未満**だ。$30/月という追加コストと、既存の M365 ライセンスの上に重ねる料金体系がハードルになっている。kate zhou（@katekatezhou）はこの動きを「古典的なアンバンドリング戦略」と分析し、「Anthropic は Microsoft の環境をユーザー獲得のユーティリティレイヤーとして扱い、Microsoft にモデル品質で競争することを強いている。『最良のモデル』が『組み込みツール』に勝つという高リスクな賭けだ」と述べている。",
      "この機能拡大は、Claude を「高機能なチャットボット」から「日常業務に参加するアシスタント」へと進化させる戦略の一環だ。同日の Windows 版 Computer Use 対応と合わせ、Anthropic はユーザーの既存のワークフロー（メール、ドキュメント、デスクトップ操作）に Claude を直接統合する方向を鮮明にしている。GitHub では Max プランへの M365 コネクター開放を求める要望（#20469）が2026年1月から上がっており、ユーザーの声に応えた形だ。",
      "**編集履歴**",
      "【訂正 2026-09-02】**一次ソースとして挙げていた X の投稿 URL（`x.com/claudeai/status/2040123456789012345`）が実在しないものであったため削除した。** 出典 URL の到達性検査で404が判明し、ステータスIDが連番の並びであることから、実在の投稿を指していない捏造された URL だと確認した。本記事の事実関係そのものは、残る2件の一次ソース（Anthropic 公式のコネクター案内とサポート記事）で裏付けられているため、記事は取り下げず出典のみを訂正する。**実在しない出典を掲げていたことは、内容の正誤とは別の問題である。** 今後は `scripts/check-source-urls.mjs` を GitHub Actions で週次実行し、到達できない出典を Issue として自動検出する。"
    ],
    "tables": [
      {
        "afterParagraph": 1,
        "caption": "M365 コネクター対応プラットフォーム",
        "headers": [
          "プラットフォーム",
          "対応",
          "備考"
        ],
        "rows": [
          [
            "claude.ai（Web）",
            "○",
            "ブラウザから利用、コネクター追加も可能"
          ],
          [
            "Claude Desktop（macOS）",
            "○",
            "デスクトップアプリから利用"
          ],
          [
            "Claude Desktop（Windows）",
            "○",
            "デスクトップアプリから利用"
          ],
          [
            "Claude Mobile（iOS / Android）",
            "○",
            "利用可能だが新規コネクターの追加は不可"
          ],
          [
            "Claude Code（CLI）",
            "○",
            "MCP Connector 経由で利用"
          ],
          [
            "API",
            "○",
            "MCP Connector 経由で利用"
          ]
        ]
      },
      {
        "afterParagraph": 2,
        "caption": "Microsoft 365 コネクター対応サービス",
        "headers": [
          "サービス",
          "できること",
          "ユースケース例"
        ],
        "rows": [
          [
            "Outlook",
            "メールの検索・要約・分析",
            "クライアントとの過去のやり取りを要約"
          ],
          [
            "OneDrive",
            "個人ファイルの検索・参照",
            "特定のレポートを探して内容を確認"
          ],
          [
            "SharePoint",
            "組織ドキュメントの横断検索",
            "プロジェクト仕様書や戦略資料を検索"
          ],
          [
            "Teams",
            "チャット・チャンネル・会議メモの検索",
            "会議の決定事項を確認"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Microsoft 365 Connector",
        "site": "Claude",
        "url": "https://claude.com/connectors/microsoft-365"
      },
      {
        "title": "Use connectors to extend Claude's capabilities",
        "site": "Claude Help Center",
        "url": "https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities"
      }
    ]
  },
  "pika-pikastream-video-chat-skill-2026": {
    "body": [
      "Pika Labs は2026年4月2日、リアルタイム動画生成モデル「**PikaStream1.0**」を搭載した**ビデオチャットスキル**をベータ公開した。AI コーディングエージェント（Claude Code、OpenClaw 等）に組み込むことで、AIアバターが Google Meet にビデオ参加し、表情豊かなリアルタイム会話を行える。GitHub でオープンソース（Apache 2.0）として公開されている。",
      "PikaStream1.0 は Pika の既存の動画生成モデル（Pika 2.x 系のテキスト→動画クリップ生成）とは異なり、**リアルタイムストリーミングに特化した新モデル**だ。ライブのビデオ会話で感情に応じた表情変化、自然な相槌、適切なリアクションを生成する。従来の動画生成AIが「作品を生成する」ものだったのに対し、PikaStream1.0 は「会話に参加する」ことを目的としている点が根本的に異なる。",
      "スキルの仕組みは「**Pika Skills**」と呼ばれるオープンソースのモジュール形式を採用している。各スキルは SKILL.md（エージェントへの指示書）、scripts/（Python/Bash スクリプト）、requirements.txt で構成され、エージェントが自動的に読み込んで適切なタイミングで起動する。現在公開されているスキルは「**pikastream-video-meeting**」の1つだ。",
      "ビデオチャットスキルの主要機能は多岐にわたる。**音声クローン**では10秒〜5分の音声サンプルから本人の声を再現し（7日間未使用で失効）、**アバター生成**では OpenAI の画像モデルで AI アバターを作成するか自前の画像を使用できる。**記憶と個性の維持**が最大の特徴で、ワークスペース内の MEMORY.md、デイリーログ、アイデンティティファイル、既知の人物情報を統合してシステムプロンプトを構築する。会議の参加者を認識し、前回の会話内容を踏まえた応答が可能だ。",
      "利用フローはシンプルだ。ユーザーがエージェントとの会話に Google Meet のリンクを貼ると、エージェントがスキルを検出して起動する。初回はアバター画像と音声クローンのセットアップが行われ、以降はワークスペースの文脈を自動収集してシステムプロンプトを生成し、AIアバターが会議に参加する。会議終了後は自動的にミーティングノートが生成・共有される。",
      "料金は **$0.50/分**（ベータ価格）で、Pika Developer Key（`pika.me/dev` で取得）が必要。現時点では Google Meet のみ対応だが、**Zoom と FaceTime への対応も近日中**に予定されている。Python 3.10 以上が必要で、音声クローン時のフォーマット変換に ffmpeg がオプションで利用される。",
      "「AIアバターと会話するだけで仕事が終わる」という未来は、まだ到達していない。だが、エージェントがビデオ会議に「顔を出して」参加し、文脈を理解した上で会話できるという事実は、エージェントのインタフェースがテキストからマルチモーダルへ拡張される転換点を示している。Pika が動画生成の技術をリアルタイムコミュニケーションに応用した点は、動画生成AI企業の新たな収益モデルとしても注目に値する。"
    ],
    "tables": [
      {
        "afterParagraph": 3,
        "caption": "ビデオチャットスキルの主要機能",
        "headers": [
          "機能",
          "内容"
        ],
        "rows": [
          [
            "AIアバター",
            "PikaStream1.0 によるリアルタイム映像生成、表情・感情表現対応"
          ],
          [
            "音声クローン",
            "10秒〜5分の音声サンプルから声を再現（7日未使用で失効）"
          ],
          [
            "記憶・個性維持",
            "MEMORY.md・デイリーログ・人物情報からコンテキスト自動構築"
          ],
          [
            "会議メモ",
            "退出時にミーティングノートを自動生成・共有"
          ],
          [
            "対応プラットフォーム",
            "Google Meet（Zoom・FaceTime は近日対応予定）"
          ],
          [
            "料金",
            "$0.50/分（ベータ）"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Pika-Labs/Pika-Skills",
        "site": "GitHub",
        "url": "https://github.com/Pika-Labs/Pika-Skills"
      },
      {
        "title": "Pika — PikaStream1.0 announcement",
        "site": "X (Twitter)",
        "url": "https://x.com/pika_labs/status/2039807091943080298"
      }
    ]
  },
  "microsoft-mai-transcribe-voice-image-foundry-2026": {
    "body": [
      "Microsoft は2026年4月3日、自社開発の AI モデル3種「**MAI-Transcribe-1**」「**MAI-Voice-1**」「**MAI-Image-2**」を発表した。文字起こし・音声生成・画像生成のそれぞれで業界トップクラスの性能を主張しており、全モデルが **Microsoft Foundry** で即日商用利用可能。Mustafa Suleyman（Microsoft AI CEO）は「世界クラスの品質を、最速のスピードで、最も競争力のある価格で提供する」と述べた。",
      "**MAI-Transcribe-1** は音声認識（Speech-to-Text）モデルで、主要25言語に対応。FLEURS ベンチマークの11コア言語で**業界1位**を達成し、Azure の従来の高速オプション比で**バッチ処理が2.5倍高速**。料金は **$0.36/時間** で、大量の音声データを処理する企業向けユースケースを想定している。Whisper や Google STT との直接的なベンチマーク比較は公式には示されていないが、FLEURS での WER（単語誤り率）3.9% は従来の商用サービスを上回る数値だ。",
      "**MAI-Voice-1** は音声生成（Text-to-Speech）モデルで、自然で感情表現豊かな音声を生成する。最大の特徴は**60秒の音声をわずか1秒で生成**できる速度。音声サンプルからカスタムボイスを作成する機能も備え、ブランド固有の音声やナレーション制作に対応する。料金は **$22/100万文字**。リアルタイム会話 AI やコンテンツ制作での活用が見込まれる。",
      "**MAI-Image-2** は画像生成モデルで、Foundry および Copilot 上で従来比**2倍の生成速度**を実現。**Arena.ai リーダーボードでトップ3** に入る品質で、自然な照明、正確な肌の色調、画像内テキストの精度が最適化されている。WPP（世界最大の広告グループ）の Rob Reilly 氏は「MAI-Image-2 は本物のゲームチェンジャー。クリエイティブ制作の技術を深くリスペクトしている」と評価。料金はテキスト入力 $5/100万トークン、画像出力 $33/100万トークン。",
      "戦略的に重要なのは、Microsoft がテキスト生成（LLM）ではなく**メディア生成に独自モデルを投入**した点だ。Copilot のテキスト生成は引き続き OpenAI の GPT や Anthropic の Claude に依存しており、今回もテキスト生成モデルの発表はない。一方でメディア生成——音声認識・音声合成・画像生成——では自社モデルで勝負する姿勢を明確にした。これは「テキストは他社、メディアは自社」という棲み分け戦略の表れと見ることができる。",
      "全モデルは Microsoft Foundry で即日利用可能。MAI Playground（米国限定）でも試用できる。企業の音声データ処理、コンテンツ制作ワークフロー、広告クリエイティブ生成など、メディア生成を大量に必要とするユースケースでの採用が焦点になるだろう。"
    ],
    "tables": [
      {
        "afterParagraph": 0,
        "caption": "MAI モデル3種の比較",
        "headers": [
          "モデル",
          "分野",
          "ベンチマーク",
          "速度",
          "料金"
        ],
        "rows": [
          [
            "MAI-Transcribe-1",
            "音声認識（STT）",
            "FLEURS 11言語で1位（WER 3.9%）",
            "Azure Fast比 2.5倍",
            "$0.36/時間"
          ],
          [
            "MAI-Voice-1",
            "音声生成（TTS）",
            "—",
            "60秒音声を1秒で生成",
            "$22/100万文字"
          ],
          [
            "MAI-Image-2",
            "画像生成",
            "Arena.ai トップ3",
            "従来比 2倍高速",
            "$5/100万トークン（入力）"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Today we're announcing 3 new world class MAI models, available in Foundry",
        "site": "Microsoft AI",
        "url": "https://microsoft.ai/news/today-were-announcing-3-new-world-class-mai-models-available-in-foundry/"
      }
    ]
  },
  "claude-computer-use-windows-launch-2026": {
    "body": [
      "Anthropic は2026年4月2日、**Claude Computer Use** の **Windows 対応**を発表した。Claude Cowork と Claude Code Desktop の両方で利用可能で、Windows 上でアプリの起動、ブラウザ操作、スプレッドシートの入力、ファイル管理など、マルチステップのデスクトップ操作を AI が自律的に実行できる。3月23日の macOS 対応から約10日で、デスクトップ PC 市場の約70%をカバーした。",
      "Computer Use は Claude がユーザーの画面をスクリーンショットで認識し、マウスクリック・キーボード入力・スクロールを実行する仕組みだ。ユーザーが「この Excel を整理して」「ブラウザでこのフォームを入力して」と指示すると、Claude が画面を見ながら操作を進める。新しいアプリにアクセスする際は必ず許可を求める設計で、勝手にアプリを操作し始めることはない。",
      "利用条件は **Pro（$20/月）** または **Max（$100〜$200/月）** プランへの加入。Team・Enterprise プランは現時点で対象外となっている。Windows では最新版の Claude Desktop アプリが必要で、PC がスリープ状態でないこと、Claude Desktop が起動していることが前提条件だ。特別なセットアップは不要で、アプリをインストールすればそのまま使える。",
      "macOS 版は3月23日にリサーチプレビューとして公開され、OSWorld ベンチマーク（AI のデスクトップ操作能力を測定）で 72.5% のスコアを記録している。2024年末の初期リリース時は15%未満だったため、約1年半で大幅に性能が向上した。Anthropic は2月に Computer Use の専門企業 **Vercept** を買収しており、この分野への投資を加速している。",
      "注目すべきは **Dispatch** との組み合わせだ。スマートフォンの Claude アプリから QR コードで PC とペアリングすると、外出先からスマホでタスクを指示し、自宅や職場の PC 上で Computer Use が作業を実行する。「朝の通勤中にスマホから指示を出し、オフィスの PC で作業が完了している」というワークフローが現実になる。ただし PC がオンライン状態であることが条件で、スリープやシャットダウンすると接続が切れる。",
      "Anthropic は「Claude はミスをすることがあり、セーフガードは継続的に改善しているが脅威は常に進化している」と注意喚起している。機密性の高い金融データ、医療情報、個人データの近くでは Computer Use を使わないよう推奨されている。また、研究プレビューの段階であり、本番業務での利用は慎重に判断すべきだ。"
    ],
    "tables": [
      {
        "afterParagraph": 2,
        "caption": "Computer Use の利用条件",
        "headers": [
          "項目",
          "内容"
        ],
        "rows": [
          [
            "対応OS",
            "macOS（3月23日〜）・Windows（4月2日〜）"
          ],
          [
            "対応プラン",
            "Pro（$20/月）/ Max（$100〜$200/月）"
          ],
          [
            "非対応プラン",
            "Team / Enterprise（現時点）"
          ],
          [
            "前提条件",
            "最新版 Claude Desktop、PC起動中、アプリ起動中"
          ],
          [
            "セットアップ",
            "不要（アプリインストールのみ）"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "@claudeai — Computer use announcement",
        "site": "X (Twitter)",
        "url": "https://x.com/claudeai/status/2039836891508261106"
      },
      {
        "title": "Let Claude use your computer in Cowork",
        "site": "Claude Help Center",
        "url": "https://support.claude.com/en/articles/14128542-let-claude-use-your-computer-in-cowork"
      }
    ]
  },
  "gemini-api-billing-tier-spend-cap-2026": {
    "body": [
      "Google は2026年4月1日から、Gemini API の全有料アカウントに対して**課金ティア単位の月額支出上限**を強制適用した。これまでもプロジェクト単位で任意の支出上限を設定できたが、今回のアカウントレベル上限は**無効化できない**。上限に達した時点で、そのアカウントに紐づく全プロジェクトの API リクエストが次の請求サイクルまで停止される。",
      "ティアごとの上限は Tier 1 が月額 $250、Tier 2 が $2,000、Tier 3 が $20,000〜$100,000 以上。ティアの昇格は支出実績と支払い履歴に基づいて自動的に行われる。新規ユーザーはプリペイド課金が必須となり、後払い方式は既存の上位ティアユーザーに限定される。",
      "この変更は Google AI Studio の Billing ダッシュボードで事前に可視化されており、日別コスト推移グラフも新設された。プロジェクト単位の支出上限（任意設定）とアカウント単位の支出上限（強制）は独立して動作する。たとえば Tier 1 アカウントでプロジェクト上限を $300 に設定しても、アカウント上限 $250 で先に停止される。",
      "開発者コミュニティでは「無料枠縮小に続く締め付け」との声と、「予期せぬ請求を防ぐ安全弁として合理的」との声が混在している。Google AI Developers Forum では、Antigravity プロジェクトへの適用範囲や、複数プロジェクトを跨いだ上限計算の詳細について質問が相次いでいる。Gemini API を本番環境で利用する開発者は、自身のティアと上限を確認し、必要に応じて Tier 昇格を計画すべきだ。"
    ],
    "tables": [
      {
        "afterParagraph": 1,
        "caption": "Gemini API 課金ティア上限（2026年4月〜）",
        "headers": [
          "ティア",
          "月額支出上限",
          "レート制限の目安",
          "支払い方式"
        ],
        "rows": [
          [
            "Tier 1",
            "$250",
            "標準",
            "プリペイド"
          ],
          [
            "Tier 2",
            "$2,000",
            "拡張",
            "プリペイド / 後払い"
          ],
          [
            "Tier 3",
            "$20,000〜$100,000+",
            "最大",
            "後払い（審査あり）"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Giving you more transparency and control over your Gemini API costs",
        "site": "Google Blog",
        "url": "https://blog.google/innovation-and-ai/technology/developers-tools/more-control-over-gemini-api-costs/"
      },
      {
        "title": "Billing — Gemini API",
        "site": "Google AI for Developers",
        "url": "https://ai.google.dev/gemini-api/docs/billing"
      }
    ]
  },
  "nvidia-physical-ai-data-factory-blueprint-2026": {
    "body": [
      "NVIDIA は2026年4月、物理 AI 向けの学習データ生成を統合するオープンな参照アーキテクチャ **Physical AI Data Factory Blueprint** を発表した。ロボティクス、ビジョン AI エージェント、自動運転車の開発において、学習データの生成・拡張・評価をエンドツーエンドで自動化する。GitHub での公開は4月中を予定している。",
      "物理 AI（ロボティクスや自動運転など、現実世界で動作する AI）の開発では、実世界のデータ収集が最大のボトルネックになる。路上で自動運転車を何百万キロも走らせたり、工場でロボットに何千回も作業させたりするのはコストも時間も膨大だ。この Blueprint は **NVIDIA Omniverse** と **Cosmos** ワールドファウンデーションモデルを活用し、物理的に正確な合成データを大量生成することで、このボトルネックを解消する。",
      "アーキテクチャは「データ処理・キュレーション」「合成データ生成」「強化学習」「評価」の4つのパイプラインで構成される。各パイプラインはモジュール化されており、開発者は自社のニーズに合わせてカスタマイズできる。クラウドサービスプロバイダーの **Microsoft Azure** と **Nebius** がインフラパートナーとして参加し、大規模コンピュートを学習データ生産エンジンに変換する基盤を提供する。",
      "早期採用企業として **FieldAI**、**Hexagon Robotics**、**Milestone Systems**、**Skild AI**、**Uber**、**Teradyne Robotics** が名を連ねる。これらの企業はロボティクス、ビジョン AI エージェント、自動運転の各領域で Blueprint を活用し、開発を加速させている。NVIDIA の物理 AI 戦略は、GPU ハードウェアだけでなくデータ生成のソフトウェア層まで押さえることで、エコシステム全体の支配力を強めている。"
    ],
    "primarySources": [
      {
        "title": "NVIDIA Announces Open Physical AI Data Factory Blueprint",
        "site": "NVIDIA Newsroom",
        "url": "https://nvidianews.nvidia.com/news/nvidia-announces-open-physical-ai-data-factory-blueprint-to-accelerate-robotics-vision-ai-agents-and-autonomous-vehicle-development"
      }
    ]
  },
  "anthropic-1m-context-beta-retirement-2026": {
    "body": [
      "Anthropic は2026年4月30日をもって、**Claude Sonnet 4.5** および **Claude Sonnet 4** で提供していた1Mトークンコンテキストウィンドウのベータ版を終了する。4月30日以降、API リクエストに `context-1m-2025-08-07` ベータヘッダーを付与しても無視され、200Kトークンの標準上限を超える入力はエラーになる。",
      "移行先は **Claude Opus 4.6** または **Claude Sonnet 4.6** だ。これらの新モデルでは1Mトークンコンテキストウィンドウが**標準料金で GA（一般提供）**されており、ベータヘッダーなしでそのまま利用できる。従来は長文コンテキストに25%の追加料金がかかっていたが、Opus 4.6・Sonnet 4.6 では撤廃された。Anthropic は「長文コンテキストは特別な機能ではなく標準機能にすべき」との方針を示している。",
      "同時に、**Web 検索ツール**と**プログラマティックツール呼び出し**が GA になった。Web 検索は API から直接最新情報を取得でき、Web Fetch は URL を指定してページ内容を取得する。いずれも動的フィルタリングに対応し、ドメイン単位での検索制限が可能だ。",
      "実務的な影響として、Sonnet 4.5/4 のベータヘッダーに依存しているアプリケーションは4月30日までにモデルを切り替える必要がある。特に Cursor や Claude Code のようなコーディングツール連携で長文コンテキストを使っている場合は、API 呼び出し側のモデル指定を更新すること。移行自体は単純で、モデル名を `claude-sonnet-4-6` または `claude-opus-4-6` に変更するだけだ。"
    ],
    "primarySources": [
      {
        "title": "Claude Platform Release Notes",
        "site": "Claude API Docs",
        "url": "https://platform.claude.com/docs/en/release-notes/overview"
      },
      {
        "title": "Anthropic drops long-context surcharge: 1M token window now at standard pricing",
        "site": "abit.ee",
        "url": "https://abit.ee/en/artificial-intelligence/anthropic-claude-opus-46-sonnet-46-context-window-1-million-tokens-pricing-en"
      }
    ]
  },
  "claw-code-oss-agent-harness-100k-stars-2026": {
    "body": [
      "2026年3月31日の Claude Code ソースマップ流出事件を受け、エージェントハーネスの**クリーンルーム再実装**を掲げるオープンソースプロジェクト **Claw Code** が登場した。公開からわずか数日で GitHub の **100K Stars** を突破し、GitHub 史上最速のスター獲得を記録した。",
      "開発者は韓国の **Sigrid Jin**（@sigridjineth）。Wall Street Journal に「世界で最もアクティブな Claude Code パワーユーザーの一人」として取り上げられた人物で、過去1年間で250億以上の Claude Code トークンを消費したという。流出したソースコードを直接コピーするのではなく、oh-my-codex（OmX）を使って**ゼロから Python で再実装**し、並列コードレビューと継続的検証で品質を担保した。現在は **Rust への移植**も進行中で、メモリ安全性と高速性を両立する本番ランタイムを目指している。",
      "Claw Code が解決しようとしている問題は明確だ。LLM 自体はオープンソースで利用可能だが、LLM をツール（ファイル操作・API 呼び出し・タスクワークフロー）に接続する**制御層（エージェントハーネス）**は、Claude Code も Cursor も Codex もプロプライエタリなままだ。開発者はモデルの中身は見えるのに、モデルを動かす仕組みはブラックボックスという状態にある。Claw Code はこの制御層を完全にオープンにすることで、開発者が自由に調査・改造・拡張できる基盤を提供する。",
      "リポジトリには Python の `src/` ワークスペース、テストディレクトリ、コマンドラインユーティリティ（サマリ生成・マニフェスト・サブシステム検査・パリティ監査）が含まれる。最初のリリースマイルストーンでは安定した Python API、ツールドキュメントの拡充、Rust ランタイムの初期モジュールが計画されている。",
      "法的な位置づけとして、Claw Code は Anthropic の関連企業ではなく、プロプライエタリコードのコピーも含まないとしている。ただし Claude Code のソースマップ流出という「事故」がなければ生まれなかったプロジェクトであることは間違いなく、「流出コードを参照せずにどこまで再実装できるか」というクリーンルーム設計の誠実さが問われることになるだろう。2,100件以上のオープンな Issue が示す通り、コミュニティの期待と課題は山積みだ。"
    ],
    "primarySources": [
      {
        "title": "Claw Code — Open-Source AI Coding Agent Framework",
        "site": "Claw Code 公式サイト",
        "url": "https://claw-code.codes/"
      },
      {
        "title": "Leaked Claude Code source spawns fastest growing repository in GitHub's history",
        "site": "Cybernews",
        "url": "https://cybernews.com/tech/claude-code-leak-spawns-fastest-github-repo/"
      },
      {
        "title": "instructkr/claw-code",
        "site": "GitHub",
        "url": "https://github.com/instructkr/claw-code"
      }
    ]
  },
  "langchain-langgraph-3-cves-data-leak-2026": {
    "body": [
      "AI エージェント開発で広く使われるフレームワーク **LangChain** と **LangGraph** に、3件の重大な脆弱性が公開された。LangChain Core は週間ダウンロード数2,300万、LangChain は5,200万を超えており、影響範囲は極めて広い。いずれもパッチ済みだが、未アップデートのシステムは直ちにリスクにさらされる。",
      "最も深刻な **CVE-2025-68664**（CVSS 9.3）は、LangChain の `dumps()` と `dumpd()` 関数に存在するデシリアライゼーション脆弱性だ。内部で使用される `lc` キーの処理が不適切で、ユーザーが制御可能なデータに `lc` キー構造を含めると、デシリアライズ時に正規の LangChain オブジェクトとして扱われてしまう。これにより API キーや環境変数に格納された秘密情報が漏洩する。修正版は LangChain Core 0.3.81 以降、LangChain 1.2.5 以降で提供されている。",
      "**CVE-2026-34070**（CVSS 7.5）は LangChain Core のプロンプトローディング API に存在するパストラバーサル脆弱性。`langchain_core/prompts/loading.py` で入力パスのバリデーションが行われておらず、細工されたプロンプトテンプレートを渡すことでホストシステム上の任意のファイルを読み取れる。設定ファイルや認証情報の漏洩につながる。LangChain Core 1.2.22 以降で修正済み。",
      "**CVE-2025-67644**（CVSS 7.3）は LangGraph の SQLite チェックポイントストアに存在する SQL インジェクション脆弱性。攻撃者が任意のデータベースクエリを実行でき、チェックポイントに保存された会話履歴やエージェントの内部状態にアクセスできる。langgraph-checkpoint-sqlite 3.0.1 以降で修正済み。",
      "3件の脆弱性はそれぞれ異なるクラスのエンタープライズデータを露出させる——ファイルシステム、環境変数、データベース。AI エージェントは従来のアプリケーションよりも多くの外部システムと接続するため、フレームワーク層の脆弱性が致命的な影響を持つ。LangChain を使用しているチームは、依存パッケージのバージョンを即座に確認し、アップデートを適用すべきだ。"
    ],
    "tables": [
      {
        "afterParagraph": 0,
        "caption": "LangChain / LangGraph 脆弱性一覧",
        "headers": [
          "CVE",
          "対象",
          "種別",
          "CVSS",
          "修正バージョン"
        ],
        "rows": [
          [
            "CVE-2025-68664",
            "LangChain Core",
            "デシリアライゼーション",
            "9.3（Critical）",
            "Core 0.3.81 / LangChain 1.2.5"
          ],
          [
            "CVE-2026-34070",
            "LangChain Core",
            "パストラバーサル",
            "7.5（High）",
            "Core 1.2.22"
          ],
          [
            "CVE-2025-67644",
            "LangGraph",
            "SQLインジェクション",
            "7.3（High）",
            "checkpoint-sqlite 3.0.1"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "LangChain, LangGraph Flaws Expose Files, Secrets, Databases in Widely Used AI Frameworks",
        "site": "The Hacker News",
        "url": "https://thehackernews.com/2026/03/langchain-langgraph-flaws-expose-files.html"
      },
      {
        "title": "CVE-2025-68664 Detail",
        "site": "NVD",
        "url": "https://nvd.nist.gov/vuln/detail/CVE-2025-68664"
      },
      {
        "title": "LangChain path traversal bug adds to input validation woes in AI pipelines",
        "site": "CSO Online",
        "url": "https://www.csoonline.com/article/4151814/langchain-path-traversal-bug-adds-to-input-validation-woes-in-ai-pipelines.html"
      }
    ]
  },
  "us-ai-regulation-federal-vs-state-preemption-2026": {
    "body": [
      "2025年12月11日、トランプ大統領は「人工知能の国家政策枠組みを確保するための大統領令」に署名した。核心は**連邦プリエンプション**——州が独自に定めた AI 規制法を、連邦の権限で無効化できると主張する内容だ。大統領令は司法省に対し30日以内に「AI 訴訟タスクフォース」を設立し、州法を積極的に法廷で争うよう指示。商務省には90日以内に「負担の大きい」州規制を特定するよう求めた。",
      "名指しされたのが**コロラド州 AI 法**だ。2024年5月に成立した同法は、AI 開発者と導入者にアルゴリズムによる差別を避けるための「合理的な注意」義務を課し、リスク管理フレームワークの策定を求める。大統領令はこの法律を「AI システムに虚偽の結果を出すよう強制するもの」と批判した。コロラド州では2025年8月の臨時議会でテック業界のロビイングを受けて施行が6月30日に延期されており、2026年3月27日にはポリス知事が開示・記録保持・消費者通知に範囲を絞った代替法案を公表した。",
      "しかし法的な実効性には疑問符がつく。大統領令は議会が制定した法律でも、議会の授権に基づく行政規則でもない。Ropes & Gray の分析は「大統領令それ自体にはプリエンプション（専占）の法的効力がない」と指摘する。連邦法によるプリエンプションは合衆国憲法の優位条項（Supremacy Clause）に基づくが、現時点で議会は包括的な連邦 AI 法を成立させていない。過去にも連邦による州 AI 法のプリエンプション法案は複数提出されたが、いずれも成立に至っていない。",
      "カリフォルニア、コロラド、ニューヨークの知事は「大統領令は州法の施行を止めない」と声明を出した。テキサス州の「責任ある AI ガバナンス法」は2026年1月に発効済みで、規制サンドボックスの概念を含む独自のアプローチを取っている。カリフォルニア州では SB 53（フロンティア AI 透明性法）と AB 2013（学習データ透明性）が2026年に発効予定だ。",
      "一方、EU の AI 法（AI Act）は2024年8月に発効し、義務のフェーズインが2027年まで続く。禁止される AI 実践、汎用 AI モデル、透明性要件、罰則が段階的に適用される。米国企業が EU 市場で事業を行う限り、連邦 vs 州の議論とは無関係に EU 規制への準拠が求められる。",
      "2026年の焦点は3つある。第一に、司法省の AI 訴訟タスクフォースが実際にどの州法を提訴するか。第二に、コロラド州の代替法案が成立するか、それとも6月30日に元の法律が発効するか。第三に、連邦議会が包括的な AI 法案を通せるかどうかだ。大統領令の法的な限界を考えれば、州 vs 連邦の対立は法廷に持ち込まれる可能性が高く、AI 規制の実質的なルールは判例を通じて形成されていくことになるだろう。"
    ],
    "primarySources": [
      {
        "title": "Examining the Landscape and Limitations of the Federal Push to Override State AI Regulation",
        "site": "Ropes & Gray LLP",
        "url": "https://www.ropesgray.com/en/insights/alerts/2026/03/examining-the-landscape-and-limitations-of-the-federal-push-to-override-state-ai-regulation"
      },
      {
        "title": "Colorado Officials Push to Repeal and Replace the Colorado AI Act",
        "site": "Inside Global Tech",
        "url": "https://www.insideglobaltech.com/2026/03/27/colorado-officials-push-to-repeal-and-replace-the-colorado-ai-act/"
      },
      {
        "title": "What Does Trump's AI Executive Order Mean for Colorado's AI Act?",
        "site": "Clark Hill PLC",
        "url": "https://www.clarkhill.com/news-events/news/what-does-trumps-ai-executive-order-mean-for-colorados-ai-act/"
      },
      {
        "title": "Executive Order Targets State AI Regulation Through Federal Preemption",
        "site": "McGuireWoods Consulting",
        "url": "https://mwcllc.com/blog/executive-order-targets-state-ai-regulation-through-federal-preemption"
      }
    ]
  },
  "google-vids-veo31-free-video-generation-2026": {
    "body": [
      "Google は2026年4月1日、動画編集ツール Google Vids に DeepMind の最新動画生成AI「Veo 3.1」を統合したと発表した。これにより、テキストプロンプトを入力するだけでプロフェッショナル品質の動画をブラウザ上で生成できるようになった。URL バーに vids.new と入力するだけで即座に新規プロジェクトを開始できる。",
      "Veo 3.1 は2025年10月にリリースされた Google DeepMind のフラッグシップ動画生成モデル。最大4K解像度（3840×2160）、24/30/60fps のフレームレート、ネイティブ音声合成（セリフ・効果音・環境音）に対応する。1回の生成で4〜8秒のクリップを作成でき、シーン拡張機能で最大20回の連結が可能。つまり140秒超の動画を一つのプロジェクト内で構成できる。",
      "今回のアップデートの目玉はもう一つある。カスタマイズ可能なAIアバター機能だ。テキストプロンプトで外見・服装・場所を指定してオリジナルのアバターを生成し、さらにプロンプトでオブジェクトとのインタラクションまで演出できる。企業の研修動画やプレゼン資料の作成が大幅に効率化されるだろう。",
      "## 料金体系 — 「無料」の実態",
      "Google Workspace の公式発表では「available to everyone at no cost」と謳われているが、正確には Workspace プランに含まれる形での提供だ。個人向けには以下の料金体系が存在する：",
      "- **Google AI Plus**（$7.99/月）— Veo 3.1 Fast へのアクセス\n- **Google AI Pro**（$19.99/月）— 月1,000 AIクレジット + Veo 3.1 Fast\n- **Google AI Ultra**（$249.99/月）— 月25,000 AIクレジット\n- **学生向け**（.edu メール）— Google AI Pro が12ヶ月間無料",
      "API 利用の場合は Veo 3.1 Fast が $0.40/秒。2026年3月末には低コスト版「Veo 3.1 Lite」もリリースされ、Fast の50%未満のコストで利用可能になった。",
      "## Sora 撤退後の市場構図",
      "2026年3月に OpenAI が Sora を事実上撤退させたことで、動画生成AI市場の勢力図は大きく変わった。現在の主要プレイヤーは以下の通りだ：",
      "- **Google Veo 3.1** — 4K・音声合成・Workspace 統合。YouTube Shorts/Google Photos にも展開\n- **Runway Gen-4.5** — 細かいクリエイティブコントロールに強み。広告・映画制作向け\n- **Kling** — 最大120秒のクリップ生成、高速・低コスト。SNS コンテンツ向け",
      "Google の強みは単なる動画生成にとどまらず、Workspace・YouTube・Photos という既存エコシステムとのシームレスな統合にある。Google Vids で作った動画をそのまま YouTube Shorts にアップロードしたり、Google Drive で共有・共同編集したりできる。これはスタンドアロンの動画生成ツールにはない優位性だ。",
      "## 開発者にとっての意味",
      "Gemini API 経由で Veo 3.1 を呼び出せるため、動画生成をプロダクトに組み込むハードルが下がった。Veo 3.1 Lite の登場でコスト面の障壁も緩和されている。9:16 の縦動画にネイティブ対応しているため、モバイルファーストのアプリケーションとの相性も良い。",
      "動画生成AIの品質が実用レベルに達し、しかもブラウザから数クリックで使える時代に入った。動画コンテンツの制作コストが劇的に下がることで、これまで動画を作る余裕がなかった個人開発者や小規模チームにとって大きなチャンスになるだろう。",
      "**編集履歴**",
      "【訂正 2026-09-02】一次ソースのうち `https://x.com/GoogleWorkspace/status/1907525219448082763` が到達できなくなっていた（HTTP 404）ため削除した。移転先を探したが見つからなかった。**記事の事実関係そのものは、残る 2 件の一次ソースで裏付けられている。** 削除した URL をここに記録しておくのは、読者が元の記事を自分で探せるようにするためである。"
    ],
    "tables": [
      {
        "afterParagraph": 8,
        "caption": "動画生成AI 主要サービス比較（2026年4月時点）",
        "headers": [
          "",
          "Veo 3.1",
          "Runway Gen-4.5",
          "Kling"
        ],
        "rows": [
          [
            "最大解像度",
            "4K (3840×2160)",
            "1080p",
            "1080p"
          ],
          [
            "最大尺",
            "140秒超（連結）",
            "可変",
            "120秒"
          ],
          [
            "音声合成",
            "ネイティブ対応",
            "なし",
            "なし"
          ],
          [
            "縦動画 (9:16)",
            "対応",
            "対応",
            "対応"
          ],
          [
            "エコシステム",
            "Workspace / YouTube / Photos",
            "スタンドアロン",
            "スタンドアロン"
          ],
          [
            "強み",
            "品質・統合・音声",
            "クリエイティブ制御",
            "速度・コスト"
          ]
        ]
      }
    ],
    "figures": [],
    "charts": [],
    "embeds": [],
    "primarySources": [
      {
        "title": "Veo - Google DeepMind",
        "site": "Google DeepMind",
        "url": "https://deepmind.google/models/veo/"
      },
      {
        "title": "Google Vids just got a massive AI upgrade",
        "site": "Tom's Guide",
        "url": "https://www.tomsguide.com/ai/google-vids-just-got-a-massive-ai-upgrade-including-custom-avatars-and-veo-3-1-integration"
      }
    ]
  },
  "gemma-4-apache2-edge-moe-dense-2026": {
    "body": [
      "Google DeepMind は2026年4月2日、オープンモデルの最新世代 **Gemma 4** を公開した。最大の変更点は**ライセンスが Apache 2.0 に変更**されたこと。従来の Gemma は独自の制限付きライセンスだったが、Gemma 4 は商用利用を含め完全に自由に使えるようになった。Hugging Face 共同創設者の Clément Delangue 氏が「大きなマイルストーン」と評するなど、開発者コミュニティから歓迎の声が上がっている。",
      "Gemma 4 は用途に応じた**4つのモデル**で構成される。最上位の **31B Dense** は LMArena テキストリーダーボードで**オープンモデル3位**（スコア1452）にランクイン。自身の20倍のサイズのモデルと競合する性能で、bfloat16 の非量子化ウェイトが NVIDIA H100 80GB 1枚に収まる。ファインチューニングの基盤として最も適したモデルだ。",
      "**26B MoE**（Mixture of Experts）は推論時に**3.8B パラメータのみアクティブ**にする設計で、レイテンシ重視のユースケースに最適化されている。総パラメータ26Bに対して推論コストは4Bクラス——にもかかわらず LMArena で**オープンモデル6位**（スコア1441）。20倍の規模のモデルを上回るという、パラメータ効率の高さが際立つ。",
      "エッジ向けには **E4B**（実効4Bパラメータ）と **E2B**（実効2B）が用意された。Google の Pixel チーム、Qualcomm、MediaTek と共同開発され、スマートフォン、Raspberry Pi、NVIDIA Jetson Orin Nano で**完全オフライン動作**する。特筆すべきは**ネイティブ音声入力**に対応している点で、テキスト・画像・動画に加えて音声も直接処理できる。コンテキストウィンドウはエッジモデルが128K、大型モデルが256Kトークン。",
      "技術面では、ローカルスライディングウィンドウ注意とグローバル注意を交互に組み合わせるハイブリッドアテンション機構を採用。メモリ使用量を抑えつつ長文脈のタスクにも対応する。エッジモデルには Per-Layer Embeddings（PLE）を導入し、パラメータ効率をさらに高めている。推論時にはステップバイステップで思考する推論モードを備え、ファンクションコール・システムプロンプトにもネイティブ対応しており、エージェント型ワークフローを前提に設計されている。",
      "Ollama では `ollama run gemma4:e4b`、`gemma4:e2b`、`gemma4:26b`、`gemma4:31b` で即座に実行可能（Ollama 0.20+ が必要）。vLLM、llama.cpp、MLX、LM Studio、Unsloth など主要フレームワークが初日からサポートしている。Gemma シリーズは累計4億ダウンロード・10万以上のコミュニティ派生モデルを達成しており、Gemma 4 の Apache 2.0 化はこのエコシステムをさらに加速させるだろう。先日公開された PrismML の1ビットモデルと合わせて、「手元のハードウェアで動く高性能モデル」の選択肢が一気に広がった。"
    ],
    "tables": [
      {
        "afterParagraph": 3,
        "caption": "Gemma 4 モデルラインナップ",
        "headers": [
          "モデル",
          "パラメータ",
          "アクティブ",
          "LMArena順位",
          "コンテキスト",
          "音声入力",
          "用途"
        ],
        "rows": [
          [
            "31B Dense",
            "310億",
            "310億",
            "オープン3位（1452）",
            "256K",
            "×",
            "ワークステーション・ファインチューニング基盤"
          ],
          [
            "26B MoE",
            "260億",
            "38億",
            "オープン6位（1441）",
            "256K",
            "×",
            "低レイテンシ推論・サーバーサイド"
          ],
          [
            "E4B",
            "実効40億",
            "40億",
            "—",
            "128K",
            "○",
            "スマホ・エッジデバイス"
          ],
          [
            "E2B",
            "実効20億",
            "20億",
            "—",
            "128K",
            "○",
            "IoT・Raspberry Pi・Jetson"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Gemma 4: Byte for byte, the most capable open models",
        "site": "Google DeepMind Blog",
        "url": "https://deepmind.google/blog/gemma-4-byte-for-byte-the-most-capable-open-models/"
      },
      {
        "title": "Bring state-of-the-art agentic skills to the edge with Gemma 4",
        "site": "Google Developers Blog",
        "url": "https://developers.googleblog.com/bring-state-of-the-art-agentic-skills-to-the-edge-with-gemma-4/"
      },
      {
        "title": "Google announces open Gemma 4 model with Apache 2.0 license",
        "site": "9to5Google",
        "url": "https://9to5google.com/2026/04/02/google-gemma-4/"
      },
      {
        "title": "@ollama - Gemma 4 announcement",
        "site": "X",
        "url": "https://x.com/ollama"
      }
    ]
  },
  "realtime-translation-oss-security-cost-2026": {
    "body": [
      "「英語キャンセル界隈」——2026年のヒット予測で多言語リアルタイム翻訳が1位に選ばれ、英語学習よりも AI 翻訳に任せて専門スキルに時間を使うべきだという考え方が広がっている。この流れを支えているのが、商用サービスだけでなく**オープンソースの翻訳アプリ群**だ。クラウドに音声を送らず、スマートフォンやPC上で完結するリアルタイム翻訳が個人開発レベルで作れる時代になった。",
      "**RTranslator**（GitHub スター9,600超）はその代表格だ。Android 上で Meta の NLLB（翻訳モデル）と OpenAI の Whisper（音声認識）をローカル実行し、**完全オフラインでリアルタイム翻訳**を実現する。Bluetooth イヤホンを接続して相手と会話するだけで、まるで相手が日本語を話しているかのように翻訳される。サーバーを一切持たず、音声データは端末の外に出ない。31言語に対応し、低品質言語を含めると70言語まで拡張できる。2026年4〜6月にはモデルを Mozilla Bergamot や Madlad 400 に刷新した v3.0 ベータが予定されており、翻訳品質のさらなる向上が見込まれる。",
      "Windows ユーザー向けには **LiveCaptions-Translator** が注目されている。Windows 11 に標準搭載されている LiveCaptions（リアルタイム字幕機能）の音声認識結果を、LLM ベースの翻訳エンジンに渡してリアルタイム翻訳する仕組みだ。LiveCaptions の音声認識は端末上で処理されるため、音声データがクラウドに送られることはない。翻訳エンジンには Google 翻訳の無料 API を使う方法のほか、ローカル LLM を接続すれば**完全にオフラインでの翻訳も可能**。ゲーム画面や動画にオーバーレイで字幕を表示する機能もあり、海外ストリーム配信の視聴に使うユーザーが増えている。",
      "macOS/Windows 向けには **my-translator** が登場した。MLX + Whisper + Gemma を組み合わせた実験的オフラインモードを搭載し、**音声が一切サーバーに送信されない**設計を徹底している。API キーはローカルに保存され、アカウント登録もテレメトリもない。現時点では日英中韓→ベトナム語/英語の翻訳に対応しており、対応言語は拡大中だ。",
      "こうしたオープンソースの翻訳アプリが台頭する背景には、**商用サービスにおけるセキュリティ懸念**がある。会議の音声翻訳を例にとると、多くのクラウド翻訳サービスでは音声がサーバーに送信され、文字起こしデータが保存される。無料サービスでは入力データが AI の学習に二次利用されるリスクもあり、機密性の高い契約交渉や製品戦略会議で使うには不安が残る。DeepL Voice のようにISO 27001・SOC 2 認証を取得し「ユーザーデータを学習に使わない」と明言するサービスもあるが、価格は企業向けだ。RTranslator のように**サーバーが存在しない**アプリなら、このリスクはゼロになる。",
      "価格面の変化も劇的だ。AI 翻訳市場は2024年時点で12億ドル、2033年には45億ドルに達すると予測されている。従来、翻訳業界は「予算向け（低品質）か企業向け（高額）か」の二択だったが、AI の進化でこの構図が崩れつつある。新興企業は月額0〜25ドルで企業向け機能を提供し、1,000語の翻訳が人手なら数時間・数万円かかるところを、AI なら数秒・数円で処理できる。ChatGPT Translate の投入や、DeepSeek の無料 API 公開なども価格競争を加速させている。従来の翻訳会社は「AI + 人間のハイブリッド」にシフトしており、90%以上の翻訳サービス企業が2026年中に AI 併用ワークフローへの移行を見込んでいる。",
      "個人開発が加速している理由は明確だ。Whisper（音声認識）、NLLB / Madlad / Bergamot（翻訳）、Gemma / Qwen（LLM による文脈理解）、PrismML Bonsai のような1ビットモデル——これらがすべてオープンソースかつスマートフォンで動作するサイズで公開されている。部品が揃えば、あとは組み合わせるだけだ。実際に RTranslator は個人開発者1名で開発されており、NLnet の NGI Mobifree Fund から資金提供を受けて開発を続けている。翻訳アプリを作るのにもう大企業のリソースは必要ない。",
      "ただし課題もある。AI 翻訳は**ハルシネーション（もっともらしい誤訳の生成）**のリスクがあり、法律・医療・規制文書など高精度が求められる分野では依然として人間のチェックが不可欠だ。また「翻訳の正確さ」だけでなく「文化的ニュアンスの伝達」は AI が苦手とする領域で、言語学習そのものの価値がなくなるわけではない。とはいえ、日常会話・ビジネスメール・技術ドキュメントといった実用的な翻訳では、ローカル動作の AI 翻訳が**十分な品質を無料で提供できる**時代が来ている。「翻訳は企業が提供するサービス」から「個人が自分の端末で動かすツール」へ——その転換点が今だ。"
    ],
    "tables": [
      {
        "afterParagraph": 3,
        "caption": "主要なオープンソースリアルタイム翻訳アプリ",
        "headers": [
          "アプリ",
          "対応OS",
          "音声認識",
          "翻訳エンジン",
          "オフライン",
          "特徴"
        ],
        "rows": [
          [
            "RTranslator",
            "Android",
            "Whisper（ローカル）",
            "NLLB（ローカル）",
            "完全対応",
            "Bluetooth会話モード・サーバー不要・31言語"
          ],
          [
            "LiveCaptions-Translator",
            "Windows 11",
            "LiveCaptions（OS標準）",
            "Google翻訳 / ローカルLLM",
            "翻訳部分のみ選択可",
            "オーバーレイ字幕・ゲーム/動画対応"
          ],
          [
            "my-translator",
            "macOS / Windows",
            "Whisper（MLX）",
            "Gemma（ローカル）",
            "実験的に対応",
            "API不要・テレメトリゼロ・日英中韓対応"
          ]
        ]
      },
      {
        "afterParagraph": 5,
        "caption": "翻訳サービスのコスト比較",
        "headers": [
          "方式",
          "1,000語あたりコスト",
          "所要時間",
          "セキュリティ"
        ],
        "rows": [
          [
            "人間の翻訳者",
            "3,000〜15,000円",
            "数時間〜1日",
            "NDA契約で担保"
          ],
          [
            "クラウドAI翻訳（有料）",
            "数十円〜数百円",
            "数秒",
            "サービスにより異なる（データ二次利用リスクあり）"
          ],
          [
            "ローカルOSS翻訳",
            "無料（電力のみ）",
            "数秒",
            "音声データが端末外に出ない"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "niedev/RTranslator",
        "site": "GitHub",
        "url": "https://github.com/niedev/RTranslator"
      },
      {
        "title": "SakiRinn/LiveCaptions-Translator",
        "site": "GitHub",
        "url": "https://github.com/SakiRinn/LiveCaptions-Translator"
      },
      {
        "title": "phuc-nt/my-translator",
        "site": "GitHub",
        "url": "https://github.com/phuc-nt/my-translator"
      },
      {
        "title": "会議の音声データはどこへ行く？音声翻訳のセキュリティリスクと、安全なツールの見極め方",
        "site": "みらい翻訳",
        "url": "https://miraitranslate.com/blog/20260120_01/"
      },
      {
        "title": "生成AIで「多言語リアルタイム翻訳」が劇的進化 2026年は「英語キャンセル界隈」がトレンドに",
        "site": "ピンズバNEWS",
        "url": "https://pinzuba.news/articles/-/13828"
      },
      {
        "title": "AI Is Disrupting the $40 Billion Translation Industry",
        "site": "AskBrian",
        "url": "https://www.askbrian.ai/blog/ai-translation-industry/"
      }
    ]
  },
  "prismml-bonsai-1bit-llm-edge-2026": {
    "body": [
      "Caltech（カリフォルニア工科大学）発の AI スタートアップ **PrismML** が2026年3月31日、ステルスから登場し、世界初の商用1ビット LLM **「Bonsai」シリーズ**を公開した。通常の LLM がパラメータを16ビット（半精度浮動小数点）で表現するのに対し、Bonsai は**パラメータ1つあたり1ビット（0か1）** で表現する。これにより8Bモデルが約1GBに収まり、スマートフォンでも実用的な速度で動作する。Apache 2.0 ライセンスで HuggingFace から無料ダウンロード可能。",
      "ここで「1ビットで本当に賢いのか」と疑問に思うのは当然だ。既存の量子化（16ビット→4ビット→2ビットに圧縮する手法）とは根本的に異なり、Bonsai は**最初から1ビットで学習**されたネイティブ1ビットアーキテクチャだという。後から圧縮するのではなく、設計段階で1ビット前提で作られている。結果として、ベンチマーク平均スコア **70.5** は同サイズの Llama 3 8B（67.1）を上回り、16倍の精度を持つ Ministral3（71.0）にほぼ匹敵する。PrismML はこれを「インテリジェンス密度（1GBあたりの性能）」で表現しており、Bonsai は **1.06/GB** に対し Qwen3 8B は 0.10/GB と、**10倍の効率**を主張している。",
      "実際の動作速度は印象的だ。フラグシップの **Bonsai 8B** は M4 Pro Mac で **136トークン/秒**（同条件の Llama 3 8B は約17トークン/秒）、iPhone 17 Pro Max で **44トークン/秒**を達成。消費電力も1トークンあたり **0.068mWh**（iPhone）と、16ビットモデルの約5分の1。8B / 4B / 1.7B の3サイズが用意されており、1.7B モデルはわずか **0.24GB** でロボティクスやリアルタイムエージェント向けに設計されている。",
      "動作環境は3つのフレームワークに対応している。Apple Silicon（Mac / iPhone / iPad）は **MLX**、NVIDIA GPU は **llama.cpp**（PrismML がフォーク版を提供、Q1_0 量子化対応）、CPU のみの環境は **bitnet.cpp** で動く。llama.cpp ユーザーにとっては既存のワークフローにそのまま組み込める点が大きい。ただし2026年4月時点で **Ollama のモデルレジストリには未登録**のため、Ollama から直接呼び出すには AnythingLLM のカスタム GGUF インポーターか、llama.cpp を直接使う必要がある。",
      "注目すべきは、現在の8倍という速度向上が**メモリ帯域の削減によるもの**であり、1ビット演算自体を活用しきれていない点だ。PrismML は「三項演算（ternary operation）に最適化された専用ハードウェアが登場すれば、さらに1桁の高速化が見込める」と述べている。つまり今の8倍が将来的に80倍になる可能性がある。NVIDIA や Apple が1ビット推論に最適化したチップを出すかどうかが、この技術の真価を左右する。",
      "PrismML は Khosla Ventures、Cerberus Ventures から1,625万ドルを調達し、Google と Caltech からコンピュート助成金も受けている。「AI を全員のポケットに」というビジョンは、クラウド API に依存しない**エッジ AI** の本格化を予感させる。GPU もクラウドも不要、1GB の RAM さえあれば Llama 3 を超える性能——このインパクトは、特にオフライン環境やプライバシーが重要な用途で大きい。"
    ],
    "tables": [
      {
        "afterParagraph": 2,
        "caption": "Bonsai シリーズのスペック",
        "headers": [
          "モデル",
          "パラメータ",
          "メモリ",
          "速度（M4 Pro）",
          "用途"
        ],
        "rows": [
          [
            "Bonsai 8B",
            "82億",
            "1.15 GB",
            "136 tok/s",
            "汎用・エージェント"
          ],
          [
            "Bonsai 4B",
            "40億",
            "0.5 GB",
            "—",
            "モバイル・IoT"
          ],
          [
            "Bonsai 1.7B",
            "17億",
            "0.24 GB",
            "—",
            "ロボティクス・リアルタイム"
          ]
        ]
      },
      {
        "afterParagraph": 2,
        "caption": "Bonsai 8B vs 同サイズモデル比較",
        "headers": [
          "モデル",
          "ベンチマーク平均",
          "メモリ",
          "速度（M4 Pro）"
        ],
        "rows": [
          [
            "Bonsai 8B（1ビット）",
            "70.5",
            "1.15 GB",
            "136 tok/s"
          ],
          [
            "Llama 3 8B（16ビット）",
            "67.1",
            "16 GB",
            "~17 tok/s"
          ],
          [
            "Ministral3 8B（16ビット）",
            "71.0",
            "16 GB",
            "~17 tok/s"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "PrismML — Concentrating intelligence",
        "site": "PrismML",
        "url": "https://prismml.com/"
      },
      {
        "title": "PrismML Launches World's First 1-Bit AI Model to Redefine Intelligence at the Edge",
        "site": "PR Newswire",
        "url": "https://www.prnewswire.com/news-releases/prismml-launches-worlds-first-1-bit-ai-model-to-redefine-intelligence-at-the-edge-302730568.html"
      },
      {
        "title": "PrismML-Eng/llama.cpp",
        "site": "GitHub",
        "url": "https://github.com/PrismML-Eng/llama.cpp"
      }
    ]
  },
  "rf-detr-aerial-drone-detection-dual-use-2026": {
    "body": [
      "Roboflow のエンジニア Piotr Skalski（@skalskip92）が、同社の物体検出モデル **RF-DETR** をドローン・航空写真にファインチューンした2つのデモを公開し、X で6.4万表示・1,000超のいいねを集めている。1つは森林の樹木を1本ずつ自動検出するもの、もう1つは交差点の車両・歩行者をリアルタイム追跡するもの。どちらも「AI のコーディング支援」ではなく、**実世界の課題を AI で解決する**具体例として興味深い。",
      "森林調査のデモでは、**NeonTreeEvaluation** という米国立生態観測ネットワーク（NEON）の航空 RGB 画像データセットを使い、RF-DETR をファインチューンしている。上空から撮影した森林画像に対して個々の樹木を検出・カウントし、番号付きのバウンディングボックスを描画する。従来、森林の健全性調査や樹木数の把握には現地でのフィールドサーベイが必要だったが、この手法ならドローン映像を AI に通すだけで、**森林の健全性・樹木数・土地利用の変化**を把握できる。ウィーン市が保有する48万本の樹木登録データとの照合を提案するコメントも寄せられており、都市緑地管理への応用も見据えた反応だ。",
      "交通解析のデモでは、ドローン撮影の都市データセット **VisDrone** で RF-DETR をファインチューンし、マルチオブジェクトトラッカー **OC-SORT** と組み合わせている。交差点をドローンで撮影した映像内の車両・歩行者を検出し、フレーム間で同一の対象を追跡する。Skalski 氏はこれを「スマートシティのデモ」と位置づけており、交通量の計測、渋滞パターンの分析、歩行者の安全分析などへの応用が考えられる。",
      "RF-DETR は Roboflow が開発し ICLR 2026 で発表された物体検出モデルで、DINOv2 ビジョントランスフォーマーをバックボーンに採用。COCO ベンチマークでリアルタイムモデルとして初の 60+ mAP を達成し、YOLO を凌駕する精度と速度を両立している。特筆すべきは**ファインチューニングのしやすさ**で、Skalski 氏のデモでは「たった200枚の画像・20エポックの学習で1フレームあたり200〜250検出」を達成している。DINOv2 の高いドメイン適応力により、航空写真・医療画像・工業検品など、COCO で学習したモデルが苦手とする専門領域でも少ないデータで高精度に適応できる。",
      "これらのデモを支えているのが、同じく Roboflow が開発するオープンソースの視覚分析ライブラリ **Supervision**（GitHub スター2.7万）だ。RF-DETR などの検出モデルが「何がどこにあるか」を出力した後、その結果をバウンディングボックスの描画、軌跡の追跡、速度推定、カウント、ゾーン分析といった実用的な処理に変換する。先ほどの森林デモで樹木ごとに番号付きボックスが描かれ、交通デモで車両の移動が追跡されていたのは、すべて Supervision の機能だ。高速道路の車両測速、サッカー選手の走行距離分析、データセットのフォーマット変換まで幅広く対応し、検出モデルの出力を「見せる・数える・分析する」パイプラインに仕上げるツールキットとして定番になっている。MIT ライセンスで商用利用も自由だ。",
      "ただし、このデモを見て気づく人もいるだろう——**同じ技術は軍事にも直結する**。上空からの映像で物体を検出・追跡し、座標を紐づける。これはまさに偵察・監視・標的特定の基盤技術だ。実際、米軍事テック企業 **Palantir** は Maven プラットフォームに Anthropic の **Claude** を統合し、衛星・ドローン映像の分析と標的優先順位付けに活用してきた。2026年2月のイラン攻撃では、Claude-Maven システムが最初の24時間で約1,000の標的を特定したと報じられている。",
      "この軍事利用をめぐって、Anthropic と米国防総省の間で大きな対立が起きた。国防総省は AI 企業に「すべての合法的目的」での利用を求めたが、Anthropic は**大規模な国民監視と完全自律型兵器**の2点を拒否。トランプ政権は Anthropic をブラックリストに載せ、サプライチェーンリスクに指定したが、カリフォルニア州の裁判所がこれを一時差し止めた。皮肉なことに、ブラックリスト指定後もイラン作戦で Claude は使い続けられた——一部の機密ネットワークでは Claude が唯一のフロンティア AI だったためだ。",
      "RF-DETR のような物体検出モデルは Apache 2.0 ライセンスで誰でも利用できる。森林調査に使えば環境保全に貢献し、交通解析に使えばスマートシティの基盤になる。しかし軍事転用もまた「合法的用途」のひとつだ。AI の能力が高まるほど、同じ技術の**民生利用と軍事利用の境界**は曖昧になる。Anthropic が「どこに線を引くか」で国家権力と対峙した事実は、AI 開発企業だけでなく、オープンソースモデルを公開するすべての開発者にとって避けられない問いを突きつけている。"
    ],
    "tables": [
      {
        "afterParagraph": 3,
        "caption": "RF-DETR の主な特徴",
        "headers": [
          "項目",
          "詳細"
        ],
        "rows": [
          [
            "開発元",
            "Roboflow（ICLR 2026 発表）"
          ],
          [
            "バックボーン",
            "DINOv2 ビジョントランスフォーマー"
          ],
          [
            "COCO mAP",
            "60+ mAP（リアルタイムモデル初）"
          ],
          [
            "モデルサイズ",
            "Nano / Small / Medium / Large / XL / 2XL"
          ],
          [
            "NMS不要",
            "推論時に Non-Maximum Suppression が不要（YOLO より高速）"
          ],
          [
            "ドメイン適応",
            "RF100-VL で 86.7 mAP（医療・工業・航空など）"
          ],
          [
            "ライセンス",
            "Apache 2.0（Plus モデルは PML 1.0）"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "@skalskip92 - geo RF-DETR demo",
        "site": "X",
        "url": "https://x.com/skalskip92"
      },
      {
        "title": "roboflow/rf-detr",
        "site": "GitHub",
        "url": "https://github.com/roboflow/rf-detr"
      },
      {
        "title": "AI for Aerial Imagery: RF-DETR Delivers Best-in-Class Speed",
        "site": "Roboflow Blog",
        "url": "https://blog.roboflow.com/ai-for-aerial-imagery/"
      },
      {
        "title": "roboflow/supervision",
        "site": "GitHub",
        "url": "https://github.com/roboflow/supervision"
      },
      {
        "title": "roboflow/trackers",
        "site": "GitHub",
        "url": "https://github.com/roboflow/trackers"
      },
      {
        "title": "Pentagon Used Anthropic's Claude AI and Palantir Maven to Identify 1,000 Targets in Iran Strikes",
        "site": "The Defense News",
        "url": "https://www.thedefensenews.com/news-details/Pentagon-Used-Anthropics-Claude-AI-and-Palantir-Maven-to-Identify-1000-Targets-in-Iran-Strikes/"
      },
      {
        "title": "Defense tech companies are dropping Claude after Pentagon's Anthropic blacklist",
        "site": "CNBC",
        "url": "https://www.cnbc.com/2026/03/04/pentagon-blacklist-anthropic-defense-tech-claude.html"
      }
    ]
  },
  "qwen-3-6-plus-agentic-coding-multimodal-2026": {
    "body": [
      "Alibaba は2026年4月2日、大規模言語モデルの最新フラグシップ **Qwen3.6-Plus** を公開した。「受動的に質問に答える AI」から「自律的にタスクを遂行するエージェント」への転換を明確に打ち出しており、エージェント型コーディングとマルチモーダル視覚推論の両面でフロンティアモデルに匹敵するスコアを記録している。プレビュー期間中は無料で利用可能。",
      "最も注目すべきはエージェント型コーディングのベンチマークだ。ターミナル操作を含む実践的なコーディングタスクを測る **Terminal-Bench 2.0** で **61.6%** を達成し、Claude 4.5 Opus（59.3%）を上回った。複雑なリポジトリレベルのバグ修正を評価する **SWE-bench Pro** でも **56.6%** と全モデル中トップ。ただし、より広く使われている **SWE-bench Verified** では Claude 4.5 Opus が80.9%でリードし、Qwen3.6-Plus は78.8%で2位。多言語対応の SWE-bench Multilingual では Claude 4.5 Opus（80.9%）と Gemini 3-Pro（77.5%）がいずれも Qwen3.6-Plus（73.8%）を上回る。得意・不得意が明確に分かれており、**「ターミナル操作を含む実践的なエージェントタスク」に特化した強さ**と言える。",
      "マルチモーダル性能も大幅に強化された。画像・文書・動画の理解が前世代の Qwen3.5 から大きく伸びており、ドキュメント認識（OmniDocBench v1.5）で **91.2%**、実世界画像の質問応答（RealWorldQA）で **85.4%** と、いずれも比較対象の中でトップスコア。UIのスクリーンショットや手書きワイヤーフレームからフロントエンドコードを生成する **Visual Coding** にも対応しており、デザイン→コードのワークフローでの活用が期待できる。一方、マルチモーダル推論（MMMU: 86.0%）では Gemini 3-Pro（87.2%）にわずかに及ばず、動画推論（Video-MME: 87.8%）でも Gemini 3-Pro（88.4%）が上回る。",
      "前世代の Qwen3.5 で最も多かった不満は「簡単な質問にも過剰に思考する」点だったという。Qwen3.6-Plus では常時オンの思考連鎖（Chain-of-Thought）を維持しつつ、**より少ないトークンで結論に到達**するよう改善。エージェントとしての安定性が向上し、本番環境での信頼性が高まった。コンテキストウィンドウは **100万トークン**（API 経由でデフォルト利用可能）、最大出力は **65,536 トークン**。",
      "API は chat.qwen.ai と Alibaba Cloud の ModelStudio から利用でき、OpenRouter 経由でも無料プレビューが提供されている。コミュニティの速度テストでは、Claude Opus 4.6 の約2〜3倍の出力速度が報告されている。Alibaba はオープンソースコミュニティ向けに、開発者向けサイズの Qwen3.6 モデルを今後公開する予定とも表明している。",
      "Alibaba 社内では、企業向けマルチエージェントプラットフォーム「Wukong」や自社 AI アプリケーション「Qwen App」への統合が進められている。また OpenClaw、Claude Code、Cline といったサードパーティのコーディングアシスタントとの互換性も確認されている。先に公開された Page Agent と合わせて、Alibaba はモデル基盤からエージェントアプリケーション層まで一貫したエコシステムを構築しつつある。"
    ],
    "tables": [
      {
        "afterParagraph": 2,
        "caption": "主要ベンチマーク比較（スクリーンショットのデータより）",
        "headers": [
          "ベンチマーク",
          "分野",
          "Qwen3.6-Plus",
          "Qwen3.5-397B",
          "Kimi K2.5",
          "GLM5",
          "Claude 4.5 Opus",
          "Gemini3-Pro"
        ],
        "rows": [
          [
            "Terminal-Bench 2.0",
            "エージェント型ターミナル操作",
            "61.6",
            "52.5",
            "50.8",
            "56.2",
            "59.3",
            "—"
          ],
          [
            "SWE-bench Pro",
            "エージェント型コーディング",
            "56.6",
            "50.9",
            "53.8",
            "—",
            "55.1",
            "57.1"
          ],
          [
            "SWE-bench Verified",
            "エージェント型コーディング",
            "78.8",
            "76.2",
            "76.8",
            "77.8",
            "80.9",
            "—"
          ],
          [
            "SWE-bench Multilingual",
            "多言語コーディング",
            "73.8",
            "—",
            "69.3",
            "73.0",
            "80.9",
            "77.5"
          ],
          [
            "Claw-Eval (pass^3)",
            "実世界エージェント",
            "58.7",
            "48.1",
            "52.9",
            "57.7",
            "59.6",
            "—"
          ],
          [
            "MMMU",
            "マルチモーダル推論",
            "86.0",
            "85.0",
            "84.3",
            "—",
            "80.7",
            "87.2"
          ],
          [
            "OmniDocBench v1.5",
            "文書認識",
            "91.2",
            "90.8",
            "88.8",
            "—",
            "87.7",
            "88.5"
          ],
          [
            "Video-MME",
            "動画推論",
            "87.8",
            "87.5",
            "87.4",
            "—",
            "77.6",
            "88.4"
          ]
        ]
      }
    ],
    "charts": [
      {
        "afterParagraph": 1,
        "title": "Terminal-Bench 2.0（エージェント型ターミナル操作）",
        "subtitle": "スコアが高いほど優秀",
        "bars": [
          {
            "label": "Qwen3.6-Plus",
            "value": 61.6,
            "color": "#7c3aed"
          },
          {
            "label": "Claude 4.5 Opus",
            "value": 59.3,
            "color": "#f97316"
          },
          {
            "label": "GLM5",
            "value": 56.2,
            "color": "#6366f1"
          },
          {
            "label": "Qwen3.5-397B",
            "value": 52.5,
            "color": "#c4b5fd"
          },
          {
            "label": "Kimi K2.5",
            "value": 50.8,
            "color": "#93c5fd"
          }
        ],
        "maxValue": 65,
        "unit": "%"
      }
    ],
    "primarySources": [
      {
        "title": "Qwen3.6 Plus Preview — Towards Real-World Agents",
        "site": "Qwen Blog",
        "url": "https://qwen.ai/blog?id=qwen3.6"
      },
      {
        "title": "Alibaba Unveils Qwen3.6-Plus to Accelerate Agentic AI Deployment",
        "site": "Alibaba Group",
        "url": "https://www.manilatimes.net/2026/04/02/tmt-newswire/media-outreach-newswire/alibaba-unveils-qwen36-plus-to-accelerate-agentic-ai-deployment-for-enterprises-and-alibabas-ai-applications/2313159"
      }
    ]
  },
  "alibaba-page-agent-browser-automation-2026": {
    "body": [
      "Alibaba が、ブラウザ上のタスクを自然言語で自動操作する OSS ライブラリ **Page Agent** を公開した。「ログインボタンをクリックして」「この表のデータを CSV で保存して」といった指示をテキストで与えるだけで、ページ内の要素を自動操作する。GitHub スターは1.5万を超え、セットアップの手軽さが注目を集めている。",
      "最大の特徴は**導入のハードルの低さ**だ。デモ版は Alibaba が提供する Qwen 3.5 ベースの無料テスト用 API を内蔵しており、**API キーの取得も環境構築も一切不要**。CDN から配信される script タグ1行を HTML に追加するだけで、そのページに AI エージェントが組み込まれる。npm からのインストールにも対応しており、本番環境では自前の LLM（Qwen 3.5 Plus、GPT-4o など）を設定して使う形になる。",
      "技術的にも興味深い設計をしている。一般的なブラウザ自動化ツール（Selenium、Playwright など）は Python やサーバーサイドからブラウザを遠隔操作する仕組みだが、Page Agent は**ページ内の JavaScript として動作する**。DOM（ページの構造）をテキストとして解析し、どの要素をクリック・入力すべきかを LLM に判断させる。スクリーンショットを撮って画像認識する方式と異なり、**マルチモーダル LLM が不要**で、テキストベースの LLM だけで動作する。処理が軽く、コストも低い。",
      "想定されるユースケースは幅広い。たとえば、SaaS 製品にコパイロット機能を追加したい場合、バックエンドを改修せずに Page Agent を組み込むだけで「AI に操作を任せる」体験を提供できる。ERP や CRM での複数ステップにまたがるフォーム入力を1つの指示にまとめたり、音声コマンドやスクリーンリーダーと組み合わせてアクセシビリティを強化する用途も公式が挙げている。",
      "オプションの Chrome 拡張をインストールすれば、複数タブをまたいだタスクの自動化も可能になる。さらに MCP サーバー（ベータ版）にも対応しており、外部の AI エージェントからブラウザを操作するインターフェースとしても利用できる。DOM 解析のコア部分は browser-use プロジェクトの設計を参考にしている旨が明記されている。",
      "ライセンスは MIT で、商用利用も自由だ。コントリビューションポリシーとして「AI が全自動で生成した PR は受け付けない。人間が主体的に関与した貢献のみ」と明記している点も、OSS プロジェクトの運営方針として興味深い。バイブコーディング時代に AI ツールを作る側が「人間の関与」を求める——皮肉にも見えるが、コード品質の維持という観点では合理的な判断だ。"
    ],
    "tables": [
      {
        "afterParagraph": 2,
        "caption": "Page Agent と他のブラウザ自動化ツールの比較",
        "headers": [
          "項目",
          "Page Agent",
          "Selenium / Playwright",
          "browser-use"
        ],
        "rows": [
          [
            "動作環境",
            "ブラウザ内 JavaScript",
            "サーバーサイド（Python等）",
            "サーバーサイド（Python）"
          ],
          [
            "セットアップ",
            "script タグ1行 or npm install",
            "Python + WebDriver + ブラウザ",
            "Python + ブラウザ"
          ],
          [
            "LLM 要件",
            "テキスト LLM のみ",
            "—（ルールベース）",
            "マルチモーダル LLM"
          ],
          [
            "API キー（デモ）",
            "不要",
            "—",
            "必要"
          ],
          [
            "複数タブ操作",
            "Chrome 拡張で対応",
            "標準対応",
            "標準対応"
          ],
          [
            "ライセンス",
            "MIT",
            "Apache 2.0",
            "AGPL-3.0"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "alibaba/page-agent",
        "site": "GitHub",
        "url": "https://github.com/alibaba/page-agent"
      }
    ]
  },
  "harvard-vibe-coding-course-2026": {
    "body": [
      "ハーバード大学教育大学院の Karen Brennan 教授（学習テクノロジー担当）が、博士課程の Jacob Wolf と共同設計した6週間のバイブコーディング講座を開講した。プログラミングや AI の経験を一切問わず、毎週異なるテーマ（物語を語るもの、生活を便利にするもの、遊びを誘うもの等）で Replit、Figma Make、Claude Code などのツールを使い分ける実践型カリキュラムだ。",
      "特筆すべきは「手を動かす × 批判的思考」の二本立て設計だ。毎週、コンピュータサイエンスの古典テキストと現代の批判的論考を1本ずつ読み、AI ハイプに流されない視座を養う。Brennan 教授は「誰でもソフトウェアを作れる時代」の到来を探究しつつ、生成されたコードを理解しないまま使うリスクにも正面から向き合う姿勢を示している。",
      "バイブコーディングの普及は数字で裏付けられている。米国開発者の92%が AI コーディングツールを日常的に使用し、新規コードの46%が AI 生成だ。Andrej Karpathy が2025年初頭に提唱した用語は Collins 辞書の Word of the Year に選ばれ、2026年の市場規模は85億ドルと予測されている。",
      "しかし光の裏には深刻な影がある。セキュリティ企業 Tenzai が5つの主要バイブコーディングツールで同一アプリを15本構築したところ、69件の脆弱性（うち6件がクリティカル）が検出された。AI 生成コードの45%に OWASP Top-10 脆弱性が含まれ、人間が書いたコードの1.7倍の重大問題を抱える。AI 生成コードに起因する CVE 登録数は1月6件→2月15件→3月35件と急増しており、セキュリティ負債の蓄積が加速している。",
      "さらにオープンソースへの波及も懸念される。開発者が AI エージェントに作業を委任するにつれ、ドキュメント閲覧やバグ報告が激減し、メンテナーの負荷が増大。Black Duck の2026年 OSSRA レポートでは、調査対象アプリの93%に2年以上開発活動のない OSS コンポーネントが含まれていた。バイブコーディングは開発の民主化を加速させる一方で、エコシステム全体の持続可能性に新たなリスクをもたらしている。"
    ],
    "primarySources": [
      {
        "title": "'Vibe coding' may offer insight into our AI future",
        "site": "Harvard Gazette",
        "url": "https://news.harvard.edu/gazette/story/2026/04/vibe-coding-may-offer-insight-into-our-ai-future/"
      },
      {
        "title": "The Vibe Coding Paradox: 92% of Developers Use It, But Trust Has Collapsed",
        "site": "Medium",
        "url": "https://medium.com/@arshia.heravi05/the-vibe-coding-paradox-92-of-developers-use-it-but-trust-has-collapsed-heres-why-that-ab241b95ca82"
      },
      {
        "title": "Vibe Coding Security Crisis: 45% of AI Code Has Flaws",
        "site": "ByteIota",
        "url": "https://byteiota.com/vibe-coding-security-crisis/"
      },
      {
        "title": "AI 'Vibe Coding' Threatens Open Source as Maintainers Face Crisis",
        "site": "InfoQ",
        "url": "https://www.infoq.com/news/2026/02/ai-floods-close-projects/"
      },
      {
        "title": "The state of vibe coding in 2026: Adoption won, now what?",
        "site": "Hashnode",
        "url": "https://hashnode.com/blog/state-of-vibe-coding-2026"
      }
    ]
  },
  "claude-paid-subscriptions-double-2026": {
    "body": [
      "Anthropic は2026年に入り、Claude の有料サブスクリプション数が倍増以上に成長したことを明らかにした。Bloomberg によると、3月時点の年間換算売上は約190億ドルに達し、年初から2倍以上に急伸。2月だけで約60億ドル分の年間売上ベースが上積みされた計算になる。",
      "成長を牽引した要因は複合的だ。まず注目を集めたのは Super Bowl CM だ。Anthropic は「競合がアプリ内広告を導入した」ことを皮肉り、「Claude は広告を出さない」と宣言するユーモラスな CM を放映。この CM がバイラルとなり、Claude の一般消費者向け認知度を一気に押し上げた。",
      "プロダクト面では、1月にリリースした Claude Code と Claude Cowork が大きな牽引力となった。開発者向けターミナルエージェント Claude Code と、チーム生産性ツール Claude Cowork がサブスクリプション契約の直接的なドライバーになっている。さらに直近リリースの Computer Use 機能も新規契約の急増に貢献した。",
      "もう一つの追い風は、AI 業界の倫理をめぐるポジショニングだ。OpenAI が米国防総省（DoD）との契約を発表した直後、OpenAI アプリのアンインストールが急増したと報じられている。Anthropic は「殺傷性を持つ自律作戦や米国市民への大規模監視にモデルを使用させない」という姿勢を明確にしており、この対比が安全志向のユーザー層に響いた形だ。",
      "ただし、ChatGPT との差は依然大きい。OpenAI は月間売上20億ドル、週間アクティブユーザー9億人超、有料会員5,000万人超を誇る。Claude は急成長中とはいえ、規模ではまだ追いかける立場だ。それでも AI アシスタント市場が OpenAI・Google・Anthropic の「三つ巴」になりつつある兆候は明確で、2026年後半の競争がさらに激化する見通しだ。"
    ],
    "primarySources": [
      {
        "title": "Claude Paid Subscriptions Double as Anthropic Gains Ground",
        "site": "TechBuzz",
        "url": "https://www.techbuzz.ai/articles/claude-paid-subscriptions-double-as-anthropic-gains-ground"
      },
      {
        "title": "Anthropic's Claude popularity with paying consumers is skyrocketing",
        "site": "TechCrunch",
        "url": "https://techcrunch.com/2026/03/28/anthropics-claude-popularity-with-paying-consumers-is-skyrocketing/"
      },
      {
        "title": "Claude Paid Subscriber Growth Hits Record in Early 2026",
        "site": "IndexBox",
        "url": "https://www.indexbox.io/blog/claude-paid-subscriptions-more-than-double-in-2026-amid-growth-and-controversy/"
      },
      {
        "title": "Claude Paid Subscriptions More Than Double as Consumer Momentum Builds",
        "site": "Unite.AI",
        "url": "https://www.unite.ai/claude-paid-subscriptions-more-than-double-as-consumer-momentum-builds/"
      },
      {
        "title": "Anthropic Says Claude Paid Subscriptions Have More Than Doubled in 2026 Amid DoD Feud and Super Bowl Ads",
        "site": "Shopifreaks",
        "url": "https://www.shopifreaks.com/anthropic-says-claude-paid-subscriptions-have-more-than-doubled-in-2026-amid-dod-feud-and-super-bowl-ads/"
      }
    ]
  },
  "gitreverse-repo-to-prompt-openclaw-2026": {
    "body": [
      "公開されている GitHub リポジトリの URL を貼るだけで、そのプロジェクトを一から作るための「バイブコーディング用プロンプト」を自動生成するツール **GitReverse** が2026年3月31日に公開された。エチオピアの開発者 Fili 氏が開発したこのツールは、リポジトリのファイル構成と README を読み取り、「このプロジェクトを AI に作らせるとしたら、どんな指示を出せばよかったか」を逆算して自然言語のプロンプトに変換する。Next.js、Shadcn、React、Supabase といった有名プロジェクトにも対応している。",
      "話題に火をつけたのは、GitHub スター **344,000 超**の巨大オープンソースプロジェクト **OpenClaw** を GitReverse で逆変換するデモ動画だ。OpenClaw は、自分の PC 上で動くパーソナル AI アシスタントで、WhatsApp・Telegram・Discord・Slack・iMessage など15以上のメッセージアプリを一つのゲートウェイで統合できる。PSPDFKit（PDF SDK、10億ユーザー規模）を€1億超で売却した Peter Steinberger 氏が開発し、公開60日で React の10年間の記録を超える GitHub スターを獲得した話題のプロジェクトだ。",
      "デモの流れはこうだ。まず GitReverse に openclaw/openclaw のリポジトリ URL を入力すると、「自分のハードウェアで動くパーソナル AI アシスタントを作りたい。中心となるのは WhatsApp、Telegram、Discord、Slack、iMessage など既存のチャットアプリすべてに接続するゲートウェイ機能で…」という自然言語のプロンプトが生成される。これをコピーして Claude Code（claude.ai の Code タブ）に貼り付け、「make no mistakes」と付け加えて実行する。つまり、**既存の完成品から設計意図を逆算し、AI に再構築させる**というワークフローだ。",
      "この手法の意義は、オープンソースのコードを「読む」のではなく「意図を抽出する」点にある。数百ファイル・数万行のコードベースを人間が読み解くのは膨大な時間がかかるが、GitReverse は「このプロジェクトは何をしたくて作られたのか」を一つのプロンプトに凝縮する。学習目的で既存プロジェクトの設計思想を理解したり、似た機能を持つプロジェクトの出発点として使ったりするのに有効だ。",
      "ただし、生成されるプロンプトはリポジトリの README とファイル構成（1階層）から推定したものであり、コードの詳細なロジックまでは反映されない。344k スターの OpenClaw のような大規模プロジェクトを「プロンプト一つで再現」できるわけではなく、あくまで出発点としてのプロンプトだ。また、ライセンスの観点からも、生成されたプロンプトで作ったコードが元のプロジェクトの派生物にあたるかどうかは、今後議論が必要な領域だろう。GitReverse 自体は Next.js + OpenRouter API で構築されており、GitHub 上でソースコードが公開されている。"
    ],
    "primarySources": [
      {
        "title": "GitReverse",
        "site": "GitReverse",
        "url": "https://www.gitreverse.com/"
      },
      {
        "title": "filiksyos/gitreverse",
        "site": "GitHub",
        "url": "https://github.com/filiksyos/gitreverse"
      },
      {
        "title": "openclaw/openclaw",
        "site": "GitHub",
        "url": "https://github.com/openclaw/openclaw"
      }
    ]
  },
  "supabase-ssh-docs-virtual-filesystem-2026": {
    "body": [
      "データベースサービスの **Supabase** が、AI コーディングエージェント向けの実験的サービス **supabase.sh** を公開した。ターミナルで `ssh supabase.sh` と1行打つだけで、Supabase の公式マニュアル全体が自分の PC 内のファイルのように表示され、検索・閲覧できる。SSH（Secure Shell）とは、別のコンピュータにネットワーク経由で安全に接続するための仕組みで、開発者がサーバーを遠隔操作する際に広く使われている。今回はその SSH を使って、Supabase が用意したサーバーに接続するとマニュアルが読める、という仕掛けだ。アカウント登録も料金も不要。X 上で5.7万回表示を超える反響を呼んでいる。なお今回のサービスは Supabase に保存したデータベースの中身を読む機能ではなく、あくまで **Supabase 自体の使い方マニュアルを AI に読ませる**ためのものだ。",
      "背景にあるのは、バイブコーディングの広がりだ。AI に「データベースが必要」と伝えると Supabase を勧められることが多く、Supabase 自体をよく知らないまま使い始めるケースが増えている。開発者本人がマニュアルを熟読していなくても、**AI 側が最新のマニュアルを正確に把握していれば正しい実装ができる**。今回のサービスはまさにその「AI がマニュアルを読む」部分を強化するものだ。",
      "従来、AI エージェントが企業の Web マニュアルを参照するには、Web ページを取得して AI が読める形式に変換するツールを組み合わせていた。変換自体は既存のツールで可能だが、サイトのデザイン変更で取得が壊れる、JavaScript で動的に表示されるページは取得しにくい、最新版への追従に手間がかかるなど、**維持し続けることが難しかった**。supabase.sh はマニュアル提供元である Supabase 自身が、最初から AI が読みやすい形で直接配信する。取得・変換の仕組みを開発者側で用意する必要がなくなり、常に最新のマニュアルにアクセスできる。Claude Code、Cursor、GitHub Copilot、Cline をはじめ18種類以上のエージェントに対応している。",
      "Supabase はこれとは別に、データベースの操作（テーブル作成・データ取得・設定変更など）を AI から直接行える **MCP サーバー**も提供している。今回の SSH サービスは「マニュアルを読む」専用、MCP サーバーは「実際にデータベースを操作する」専用と、**調べものと実作業で役割を分けている**。",
      "この取り組みが示唆するのは、**マニュアルの読者が人間から AI に変わりつつある**という現実だ。Supabase に限らず、Stripe や AWS など多くのサービスが Web サイトでマニュアルを公開しているが、AI エージェントにとって Web ページは読みにくい形式だ。もし各社が supabase.sh のように AI が直接アクセスできる形でマニュアルを提供し始めれば、AI エージェントがあらゆるサービスの最新マニュアルを瞬時に参照しながら開発を進められるようになる。Supabase の試みは「AI ファースト」なマニュアル公開の先駆けとして注目される。"
    ],
    "primarySources": [
      {
        "title": "@supabase - supabase.sh announcement",
        "site": "X",
        "url": "https://x.com/supabase"
      },
      {
        "title": "Supabase SSH",
        "site": "Supabase",
        "url": "https://supabase.sh/"
      },
      {
        "title": "Supabase MCP Server",
        "site": "Supabase Blog",
        "url": "https://supabase.com/blog/mcp-server"
      }
    ]
  },
  "claude-code-cross-repo-skills-add-dir-2026": {
    "body": [
      "Claude Code の `--add-dir` フラグと Skills の組み合わせによる**擬似モノレポ**ワークフローが、開発者コミュニティで注目を集めている。`claude --add-dir ../other-repo` で兄弟リポジトリを追加すると、そのリポジトリ内のファイルへの読み書きが可能になるだけでなく、`.claude/skills/` に配置された SKILL.md が自動的に読み込まれる。これにより、モノレポに統合できない事情があっても、まるでモノレポであるかのように複数リポジトリを横断して作業できる。",
      "この手法の本質は**ナレッジの集約**にある。最もナレッジが濃いリポジトリ（コーディング規約、アーキテクチャ設計書、エラー対策の蓄積など）を起点に Claude Code を起動し、`--add-dir` で作業対象のリポジトリを追加する。すると Claude は両方のコンテキストを持った状態でタスクを遂行でき、片方のリポジトリで蓄積したエラー対策や機能改善のノウハウが、もう片方のリポジトリの作業にも自然に反映される。コードだけでなく、戦略文書・デザイン文書・マーケティングコピーなど、あらゆるドキュメントが AI の視界に入る点が強力だ。",
      "特にオープンソースプロジェクトでの活用に価値がある。公開リポジトリには内部の思考ロジックや意思決定の背景を書けないが、プライベートなナレッジリポジトリに判断基準や設計思想を蓄積しておけば、`--add-dir` 経由でその知見を参照しながら公開リポジトリを編集できる。他者がメンテナンスするリポジトリに対しても、外側から読み書き両方に対応できる柔軟性がある。",
      "技術的な仕組みとしては、`--add-dir` はファイルアクセス権限を付与するが、設定ファイルの探索は限定的だ。追加ディレクトリから自動読み込みされるのは `.claude/skills/` のみで、`.claude/agents/`・`.claude/commands/`・Hooks などは読み込まれない。CLAUDE.md も環境変数 `CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD=1` を設定しない限り読み込まれない。セッション中に `/add-dir パス` で動的に追加することも可能で、`.claude/settings.json` の `additionalDirectories` に記述すれば恒久的に設定できる。",
      "注意点もある。Skills は**3つ程度が最適**で、8〜10を超えると Claude が冗長な前置きを出したり指示間の矛盾に悩んだりと挙動が不安定になる（コンテキスト予算の制約）。またセキュリティ面では、Snyk の調査によりコミュニティ公開スキル約4,000件の36%にセキュリティ上の問題が見つかり、76件は悪意あるスキルと確認されている。外部から取得したスキルは中身を必ず確認してから導入すべきだ。Owen Zanzal 氏は35リポジトリを横断する「Virtual Monorepo Pattern」として Medium で手法を体系化しており、「AI にとっては構造の美しさよりコンテキストの充実が重要」と述べている。",
      "Claude Code リードの Boris Cherny 氏も「複数リポジトリで作業する場合、片方で Claude を起動し --add-dir でもう片方を見せるのが自分の通常のワークフロー」と述べている。ナレッジが一か所に濃縮されるほどショートカットが指数関数的に効いてくるこの手法は、マルチリポジトリ環境で AI コーディングを活用するすべての開発者にとって知っておくべきテクニックだ。"
    ],
    "tables": [
      {
        "afterParagraph": 4,
        "caption": "--add-dir で読み込まれるもの・読み込まれないもの",
        "headers": [
          "項目",
          "自動読み込み",
          "備考"
        ],
        "rows": [
          [
            "ファイルの読み書き",
            "○",
            "権限モードに従う"
          ],
          [
            ".claude/skills/",
            "○",
            "セッション中の編集もリアルタイム反映"
          ],
          [
            "CLAUDE.md",
            "×（設定で○）",
            "CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD=1 で有効化"
          ],
          [
            ".claude/agents/",
            "×",
            "ユーザーレベル（~/.claude/）に配置で対応"
          ],
          [
            ".claude/commands/",
            "×",
            "同上"
          ],
          [
            "Hooks",
            "×",
            "プロジェクトの settings.json で定義"
          ],
          [
            ".claude/rules/",
            "×",
            "シンボリックリンクで共有可能"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Extend Claude with Skills - Claude Code Docs",
        "site": "Claude Code Docs",
        "url": "https://code.claude.com/docs/en/skills"
      },
      {
        "title": "Boris Cherny - Use --add-dir to give Claude access to more folders",
        "site": "Threads",
        "url": "https://www.threads.com/@boris_cherny/post/DWfjvGZFH8b"
      },
      {
        "title": "Claude Code CLI Reference",
        "site": "Claude Code Docs",
        "url": "https://code.claude.com/docs/en/cli-reference"
      }
    ]
  },
  "timesfm-mirofish-business-forecasting-2026": {
    "body": [
      "「来月の売上はいくらか」「この政策変更は自社にどう影響するか」——経営判断に不可欠なこれらの問いに、AI が2つのまったく異なるアプローチで答えようとしている。Google Research の時系列基盤モデル **TimesFM 2.5** と、20歳の中国人学生が10日で開発しGitHub スター4.8万超を記録したマルチエージェント予測エンジン **MiroFish** だ。",
      "**TimesFM 2.5** は2026年3月31日にリリースされた Decoder-only Transformer ベースの時系列基盤モデル。Google 内部の1,000億以上の実データポイントで事前学習されており、売上・需要・在庫・電力消費などの数値時系列を**ゼロショット（再学習なし）で予測**できる。前バージョンからパラメータを500Mから200Mに60%削減しつつ、コンテキスト長を2Kから16Kへ8倍に拡大。ARIMA 比で MAE 15〜25%の改善を実現し、GiFT-Eval リーダーボードでゼロショット基盤モデル1位を獲得している。BigQuery の AI.FORECAST として GA（本番利用可能）になっており、Google Sheets からも直接利用できる。",
      "一方の **MiroFish** は、数値ではなく**社会のダイナミクスを予測**する。ニュース記事、財務レポート、政策文書などを入力すると、GraphRAG で知識グラフを構築し、独自の性格・長期記憶・行動ロジックを持つ数千〜最大100万のAIエージェントを生成。エージェントたちが Twitter 風・Reddit 風の仮想 SNS 上で自由に議論・拡散・対立・合意形成を行い、その結果から世論の変化や利害関係者の反応を予測する。開発者は北京郵電大学の郭杭江氏（20歳）で、盛大グループの陳天橋氏が3,000万元（約4.1億円）を即日出資したことでも注目を集めた。",
      "2つのアプローチは競合ではなく**補完関係**にある。たとえば「新関税政策が自社の売上にどう影響するか」を予測する場合、TimesFM は過去の売上データから数値トレンドを外挿する一方、MiroFish は政策に対する消費者・競合・メディアの反応をシミュレーションし、需要がどの方向に動くかのシナリオを提示する。数値予測で「いくら」を、社会シミュレーションで「なぜ・どう変わるか」を把握できるわけだ。",
      "ただし両者にはそれぞれ限界がある。TimesFM はあくまで過去のパターンの延長であり、前例のない事象（パンデミック、突発的規制など）への対応は苦手だ。MiroFish は逆に、LLM エージェントの群集行動バイアスにより予測が極端に偏るリスクがあり、精密な数値予測には向かない。開発者の郭氏自身も「明日ビットコインが上がるか下がるかを聞くのは設計意図外」と明言している。また MiroFish は API コストがエージェント数×ラウンド数で積み上がるため、大規模シミュレーションのコスト管理も課題だ。",
      "企業が AI 予測を導入する際の現実的なステップとしては、まず BigQuery + TimesFM で既存の売上・需要データの予測精度を検証し、意思決定に社会情勢の影響が大きい領域（新市場参入、規制対応、PR戦略など）で MiroFish のシナリオ分析を重ねる——というアプローチが考えられる。TimesFM は Apache-2.0 で商用利用可、MiroFish は AGPL-3.0 のためセルフホスト前提。いずれもオープンソースで試せるため、まずは自社データで PoC を回してみる価値がある。"
    ],
    "tables": [
      {
        "afterParagraph": 3,
        "caption": "TimesFM 2.5 と MiroFish の比較",
        "headers": [
          "項目",
          "TimesFM 2.5",
          "MiroFish"
        ],
        "rows": [
          [
            "開発元",
            "Google Research",
            "郭杭江（北京郵電大学）"
          ],
          [
            "アプローチ",
            "時系列データの統計的予測",
            "マルチエージェント社会シミュレーション"
          ],
          [
            "予測対象",
            "売上・需要・在庫など数値データ",
            "世論・利害関係者の反応・社会動向"
          ],
          [
            "モデルサイズ",
            "200M パラメータ",
            "LLM API 依存（エージェント数で変動）"
          ],
          [
            "入力",
            "過去の時系列データ（最大16K点）",
            "ニュース・政策文書・財務レポート"
          ],
          [
            "出力",
            "数値予測 + 不確実性区間",
            "シナリオレポート + エージェント行動ログ"
          ],
          [
            "ゼロショット",
            "対応（再学習不要）",
            "対応（知識グラフから自動構築）"
          ],
          [
            "本番環境",
            "BigQuery GA / Google Sheets",
            "セルフホスト（Docker）"
          ],
          [
            "ライセンス",
            "Apache-2.0（商用可）",
            "AGPL-3.0（セルフホスト前提）"
          ],
          [
            "GitHub Stars",
            "13,000+",
            "48,000+"
          ],
          [
            "得意なこと",
            "安定した数値トレンドの高精度予測",
            "複雑な社会的反応のシナリオ探索"
          ],
          [
            "苦手なこと",
            "前例のない事象、社会的要因の影響",
            "精密な数値予測、コスト管理"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "google-research/timesfm",
        "site": "GitHub",
        "url": "https://github.com/google-research/timesfm"
      },
      {
        "title": "666ghj/MiroFish",
        "site": "GitHub",
        "url": "https://github.com/666ghj/MiroFish"
      },
      {
        "title": "TimesFM 2.5 Release - Time Series Model Update",
        "site": "Let's Data Science",
        "url": "https://letsdatascience.com/news/timesfm-releases-25-time-series-model-update-416fba8f"
      },
      {
        "title": "Student's AI Engine MiroFish Secures 30 Million RMB Investment",
        "site": "Phemex News",
        "url": "https://phemex.com/news/flash/students-ai-engine-mirofish-secures-30-million-rmb-investment-65330"
      }
    ]
  },
  "claude-code-v2-1-90-powerup-no-flicker-2026": {
    "body": [
      "Anthropic は2026年4月1日、Claude Code の最新バージョン v2.1.90 をリリースした。目玉は、Claude Code の主要機能をアニメーション付きのインタラクティブレッスンで体感学習できる **/powerup コマンド**と、ターミナル描画を根本から刷新する **NO_FLICKER モード**の2つ。加えて Auto Mode の指示遵守改善、レートリミット無限ループの修正、PowerShell のセキュリティ強化など、安定性・安全性の向上も多数含まれる大型アップデートだ。",
      "**/powerup** は Claude Code 上で直接実行するインタラクティブチュートリアルで、全10項目が用意されている。@ファイル参照、Shift+Tab によるモード切替（plan / auto）、/rewind（Esc-Esc）による Undo、バックグラウンドタスク、CLAUDE.md と /memory、MCP 連携、Skills と Hooks、Subagents（マルチエージェント）、remote-control / teleport、/model と /effort によるモデル切替——と、Claude Code の機能を網羅的にカバーする。各レッスンにはターミナル上でネイティブに再生されるアニメーションデモが付属しており、「見て覚える」から「体感して覚える」への転換を狙った設計だ。X 上では「機能が多くてここで詰まる人が多かったので、/powerup で一気に解像度が上がりそう」「特に Subagents / MCP / Skills に触れる導線ができたのが大きい」と好意的な反応が目立つ。",
      "もう一つの目玉が **NO_FLICKER モード（フルスクリーンレンダリング）**。CLAUDE_CODE_NO_FLICKER=1 を設定して起動すると、ターミナルのちらつき・ジャンプが完全に解消され、会話が長くなってもメモリと CPU 使用量が一定に保たれる。さらにマウス操作に対応し、入力ボックス内のカーソル移動、ツール結果の展開/折りたたみ、URL・ファイルパスのクリック、ドラッグによるテキスト選択、マウスホイールでのスクロールが可能になった。Claude Code リードの Boris Cherny 氏（@bcherny）は技術的背景について「従来のターミナルは ANSI エスケープコードの制約でビューポート外の再描画に画面全体クリアが必要だったが、新レンダラーはビューポートを仮想化してこの制約を回避した」と説明している。トレードオフとしてネイティブの Cmd+F 検索やコピー＆ペーストが独自方式に置き換わるが、Ctrl+O のトランスクリプトモードで検索・閲覧が可能。マウスを無効にしたい場合は CLAUDE_CODE_DISABLE_MOUSE=1 を併用できる。",
      "安定性面の改善も大きい。**Auto Mode** では「push するな」「〜まで待て」といった明示的な指示をより厳格に遵守するようになった。**レートリミット到達時に無限にダイアログが開くバグ**が修正され、セッションクラッシュが防止された。--resume 時のプロンプトキャッシュミス（v2.1.69 以降の退行バグ）や、PostToolUse フォーマットフックが連続 Edit 間でファイルを書き換えた際の「File content has changed」エラーも解消されている。",
      "セキュリティ面では **PowerShell ツールの脆弱性が4件修正**された。末尾 & によるバックグラウンドジョブバイパス、-ErrorAction Break によるデバッガハング、アーカイブ展開の TOCTOU 脆弱性、パース失敗時の拒否ルール劣化——いずれも実害前に対処された形だ。また DNS キャッシュのプライバシー保護として Get-DnsClientCache と ipconfig /displaydns が自動許可リストから除外された。新たに追加された CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=1 は、Bash ツール・Hooks・MCP サーバーのサブプロセスから Anthropic やクラウドプロバイダの認証情報を自動除去する。",
      "パフォーマンスも全般的に向上した。SSE ストリーミングの大きなフレーム処理が二次時間から線形時間に改善され、長い会話でのトランスクリプト書き込みの二次的な速度低下も解消。MCP ツールスキーマの JSON.stringify が毎ターン実行されていた問題も修正され、MCP ツールの説明文は 2KB に上限が設けられコンテキスト肥大化を防止する。/resume のプロジェクトセッション読み込みも並列化された。",
      "## 【追記】v2.1.91（リリースから約23時間後）",
      "v2.1.90 リリースからわずか23時間後の2026年4月3日、**v2.1.91** がリリースされた。バンドルサイズ +33.4KB（+0.3%）、推定コード行数 +630行の小規模アップデートだが、実用上重要な変更が含まれる。",
      "最大の注目点は **MCP ツール結果サイズの拡張**だ。MCP ツールのレスポンスに `_meta[\"anthropic/maxResultSizeChars\"]` アノテーションを付与することで、最大500KBまでの結果を切り詰めずに渡せるようになった。DB スキーマの全量取得や大規模なコード解析結果など、従来は途中で打ち切られていたデータをそのまま利用できる。MCP サーバー開発者にとって大きな改善だ。",
      "セキュリティ面では **`disableSkillShellExecution`** 設定が追加された。Skills、カスタムスラッシュコマンド、プラグインコマンド内でのインラインシェル実行を無効化できる。外部スキルを利用する際のサプライチェーンリスクを軽減する設定で、企業での利用時に特に有用だろう。",
      "安定性の修正も重要だ。**--resume でのトランスクリプト連鎖断裂バグ**が修正された。非同期のトランスクリプト書き込みがサイレントに失敗した場合、再開時の会話履歴がドロップされる問題が起きていたが、これが解消された。また iTerm2・kitty・WezTerm・Ghostty・Windows Terminal での **Cmd+Delete が行頭まで削除しない問題**、リモートセッションでコンテナ再起動後に**プランモードがプランファイルを見失う問題**も修正されている。",
      "その他の変更として、プラグインが `bin/` ディレクトリに実行ファイルを同梱し、Bash ツールから直接呼び出せるようになった。Edit ツールは `old_string` のアンカーが短縮され出力トークンが削減。Bun 環境では `stripAnsi` が `Bun.stripANSI` 経由になりパフォーマンスが向上した。",
      "---",
      "【追記 2026-04-03】v2.1.91 リリース内容を追記。MCP 結果サイズ500KB対応、Skills シェル実行無効化設定、--resume 履歴消失バグ修正など。"
    ],
    "tables": [
      {
        "afterParagraph": 2,
        "caption": "/powerup で学べる10機能",
        "headers": [
          "レッスン",
          "コマンド/機能",
          "概要"
        ],
        "rows": [
          [
            "Talk to your codebase",
            "@ファイル参照, 行番号指定",
            "特定ファイルや行を会話に引用"
          ],
          [
            "Steer with modes",
            "Shift+Tab (plan, auto)",
            "計画モード・自動モードの切り替え"
          ],
          [
            "Undo anything",
            "/rewind, Esc-Esc",
            "任意の時点まで会話を巻き戻し"
          ],
          [
            "Run in the background",
            "tasks, /tasks",
            "バックグラウンドでタスク実行"
          ],
          [
            "Teach Claude your rules",
            "CLAUDE.md, /memory",
            "プロジェクト固有のルールを記憶"
          ],
          [
            "Extend with tools",
            "MCP",
            "外部ツール・DB・API と接続"
          ],
          [
            "Automate your workflow",
            "Skills, Hooks",
            "カスタムスキルとイベントフック"
          ],
          [
            "Multiply yourself",
            "Subagents, /agents",
            "マルチエージェントで並列作業"
          ],
          [
            "Code from anywhere",
            "/remote-control, /teleport",
            "リモートマシンからの操作"
          ],
          [
            "Dial the model",
            "/model, /effort",
            "モデル・思考深度の切り替え"
          ]
        ]
      },
      {
        "afterParagraph": 3,
        "caption": "NO_FLICKER モードの主な操作",
        "headers": [
          "操作",
          "方法",
          "備考"
        ],
        "rows": [
          [
            "有効化",
            "CLAUDE_CODE_NO_FLICKER=1 claude",
            "シェルプロファイルに export で恒久化"
          ],
          [
            "半画面スクロール",
            "PgUp / PgDn",
            "MacBook は Fn+↑/↓"
          ],
          [
            "トランスクリプト検索",
            "Ctrl+O → /",
            "n/N で前後一致に移動"
          ],
          [
            "ネイティブ検索に書き出し",
            "Ctrl+O → [",
            "ターミナルのスクロールバックに出力"
          ],
          [
            "マウス無効化",
            "CLAUDE_CODE_DISABLE_MOUSE=1",
            "ネイティブ選択を維持"
          ],
          [
            "スクロール速度変更",
            "CLAUDE_CODE_SCROLL_SPEED=N",
            "1〜20（デフォルト3）"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Claude Code Changelog",
        "site": "Claude Code Docs",
        "url": "https://code.claude.com/docs/en/changelog"
      },
      {
        "title": "claude-code v2.1.90 Release",
        "site": "GitHub",
        "url": "https://github.com/anthropics/claude-code/releases/tag/v2.1.90"
      },
      {
        "title": "Fullscreen rendering - Claude Code Docs",
        "site": "Claude Code Docs",
        "url": "https://code.claude.com/docs/en/fullscreen"
      },
      {
        "title": "Boris Cherny (@bcherny) - NO_FLICKER mode announcement",
        "site": "X",
        "url": "https://x.com/bcherny"
      },
      {
        "title": "claude-code-changelog（Claude Code のプロンプト・feature flag 追跡）",
        "site": "GitHub",
        "url": "https://github.com/marckrenn/claude-code-changelog"
      }
    ]
  },
  "drawio-mcp-diagram-streaming-claude-2026": {
    "body": [
      "無料の作図ツールとして広く使われている draw.io が2026年4月2日、公式の MCP（Model Context Protocol）サーバーを公開した。これにより、Claude の会話画面内でフローチャートやシーケンス図などのダイアグラムが**リアルタイムにストリーミング生成**されるようになった。X での公式投稿は68万表示・3,000超のいいねを集め、大きな反響を呼んでいる。",
      "MCP とは、AI アシスタントが外部ツールと連携するための標準プロトコル。draw.io の MCP サーバーを接続すると、Claude に「ランプ修理のフローチャートを作って」と指示するだけで、`create_diagram` ツールが呼び出され、シェイプ（図形）ひとつひとつ、エッジ（接続線）ひとつひとつが順番に描画されていく。完成した図はインタラクティブに操作でき、ズーム・パン・レイヤー切替・全画面表示が可能だ。別タブで draw.io を開く必要がなく、会話の流れの中で図を確認・修正できる。",
      "導入方法は用途に応じて**4つ**用意されている。最も手軽なのは **MCP App Server**（ホスト版）で、`https://mcp.draw.io/mcp` をリモート MCP サーバーとして追加するだけ。インストール不要で、Claude.ai・VS Code・MCP Apps 対応のあらゆるホストで即座に使える。会話内にインタラクティブな iframe としてダイアグラムが埋め込まれるのが特徴だ。",
      "ローカルで使いたい場合は **MCP Tool Server** が適している。`npx @drawio/mcp` で起動でき、draw.io のネイティブ XML 形式に加えて **CSV**（表データから組織図やフローチャートを自動生成）と **Mermaid.js**（テキストベースの図記法）にも対応する。生成された図は draw.io エディタで直接開かれ、手動での微調整も自由にできる。Claude Desktop や他の MCP クライアントとの連携に最適だ。",
      "Claude Code ユーザー向けには **Skill + CLI** 方式もある。MCP のセットアップなしで、スキルファイルをコピーするだけで `.drawio` ファイルを生成し、PNG・SVG・PDF へのエクスポートも可能。エクスポートファイルには XML が埋め込まれるため、draw.io で開けば引き続き編集できる。最もシンプルな **Project Instructions** 方式は、Claude Projects にプロンプトをペーストするだけで動作し、Python のコード実行で draw.io の URL を生成する。",
      "技術的には、MCP App Server は draw.io の公式ビューアを iframe 内で動作させる仕組みだ。MCP Apps SDK（約319KB）と pako 圧縮ライブラリ（約28KB）をインライン化した自己完結型 HTML を生成し、サンドボックス環境内で安全にレンダリングする。Node.js での起動に加え、Cloudflare Workers へのデプロイにも対応しており、チームでの共有も容易だ。",
      "ただし、**すべての環境でリアルタイム描画ができるわけではない**点に注意が必要だ。会話中に図がストリーミング表示されるインタラクティブ描画は、iframe をレンダリングできる環境——つまり Claude.ai（Web / デスクトップ）や VS Code など MCP Apps 対応のホストに限られる。Claude Code CLI（ターミナル）はテキストベースの環境のため、iframe を表示する手段がなく、リアルタイム描画には対応していない。CLI ユーザーは Skill + CLI 方式で `.drawio` ファイルを生成し、draw.io エディタで開いて確認するワークフローになる。MCP Tool Server を使えばファイル生成と同時にエディタが自動で開くため、ひと手間増えるものの実用上は十分だ。",
      "draw.io は JGraph 社が開発するオープンソースの作図ツールで、GitHub リポジトリは Apache 2.0 ライセンス。Confluence や Jira との統合プラグインでも知られ、すでに多くの開発チームが日常的に使っている。そこに MCP 連携が加わったことで、「AI に図を描かせて、そのまま会話の中で確認・修正し、必要なら draw.io エディタで仕上げる」という一気通貫のワークフローが実現した。ダイアグラム作成は AI が最も得意とする領域のひとつだが、これまではテキストで XML や Mermaid を出力するだけで、実際の図を見るには別ツールへのコピペが必要だった。その最後のギャップを MCP が埋めた形だ。"
    ],
    "tables": [
      {
        "afterParagraph": 4,
        "caption": "draw.io MCP の4つの導入方法",
        "headers": [
          "方式",
          "セットアップ",
          "対応フォーマット",
          "特徴"
        ],
        "rows": [
          [
            "MCP App Server（ホスト版）",
            "リモートMCPサーバーURLを追加するだけ",
            "XML",
            "インストール不要・会話内にインタラクティブ表示"
          ],
          [
            "MCP Tool Server",
            "npx @drawio/mcp",
            "XML, CSV, Mermaid",
            "draw.ioエディタで直接編集可能"
          ],
          [
            "Skill + CLI",
            "スキルファイルをコピー",
            "XML",
            "MCP不要・PNG/SVG/PDFエクスポート対応"
          ],
          [
            "Project Instructions",
            "プロンプトをペースト",
            "XML, CSV, Mermaid",
            "完全インストール不要・Python実行で動作"
          ]
        ]
      },
      {
        "afterParagraph": 6,
        "caption": "環境別の対応状況",
        "headers": [
          "環境",
          "リアルタイム描画",
          "ファイル生成",
          "備考"
        ],
        "rows": [
          [
            "Claude.ai（Web / デスクトップ）",
            "○",
            "○",
            "MCP App Server で iframe 内に即時表示"
          ],
          [
            "VS Code + MCP 拡張",
            "○",
            "○",
            "エディタ内パネルにインタラクティブ表示"
          ],
          [
            "Claude Desktop",
            "○",
            "○",
            "MCP App Server または Tool Server"
          ],
          [
            "Claude Code CLI（ターミナル）",
            "×",
            "○",
            "Skill + CLI で .drawio ファイル生成→エディタで確認"
          ]
        ]
      }
    ],
    "embeds": [
      {
        "type": "x",
        "afterParagraph": 0,
        "url": "https://x.com/drawio/status/2039422442339233816",
        "caption": "draw.io 公式による MCP サーバー公開の告知"
      }
    ],
    "primarySources": [
      {
        "title": "@drawio - MCP server announcement",
        "site": "X",
        "url": "https://x.com/drawio/status/2039422442339233816"
      },
      {
        "title": "jgraph/drawio-mcp",
        "site": "GitHub",
        "url": "https://github.com/jgraph/drawio-mcp"
      },
      {
        "title": "draw.io MCP App Server",
        "site": "GitHub",
        "url": "https://github.com/jgraph/drawio-mcp/tree/main/mcp-app-server"
      }
    ]
  },
  "openai-122b-funding-852b-valuation-2026": {
    "body": [
      "OpenAI は2026年3月31日、$122B（約18兆円）の資金調達完了を発表した。ポストマネー評価額は$852B（約128兆円）に達し、未上場企業として史上最大の調達額を更新した。シリコンバレー史上、そしてベンチャーキャピタル史上最大のラウンドだ。",
      "出資の内訳は、Amazon が$50B（うち$35B は IPO または AGI 達成を条件とする条件付き出資）、Nvidia と SoftBank がそれぞれ$30B。既存投資家の Microsoft も参加し、Andreessen Horowitz、D.E. Shaw Ventures、MGX、TPG、T. Rowe Price が共同リードを務めた。さらに史上初めて、銀行チャネルを通じた個人投資家から$3B 以上を調達しており、「未上場だが事実上パブリック」な資金構造が鮮明になっている。",
      "調達の背景には急成長する事業基盤がある。月間売上は$2B（年間換算$24B）に到達し、ChatGPT の週間アクティブユーザーは9億人超、有料会員は5,000万人を突破。エンタープライズ事業が売上の40%以上を占め、2026年末までにコンシューマーと同等の比率に達する見通しだ。OpenAI は「インターネットとモバイルの時代を定義した企業の4倍のペースで成長している」と述べている。",
      "資金の用途として OpenAI が掲げるのは、計算インフラの拡張、マルチクラウド・チップパートナーシップ、そして **AI スーパーアプリ**の開発だ。ChatGPT・Codex・エージェント機能を単一のインターフェースに統合し、アプリケーションやワークフローを横断して動作するプラットフォームを目指す。コーディングだけでなく、調査・分析・タスク実行までを一元化する構想であり、同日に発表された Codex プラグインマーケットプレイスはその布石とみられる。",
      "年内の IPO も強く意識されている。Bloomberg によれば早ければ2026年後半の上場を検討しており、今回のラウンドはその前段としての位置付けだ。競合の Anthropic も$19B 規模の年間売上に成長し IPO を検討中と報じられており、2026年は AI 企業の大型上場が相次ぐ年になる可能性がある。$852B という評価額は Apple・Microsoft・Nvidia に次ぐ水準であり、上場時にどこまで市場が織り込むかが注目される。"
    ],
    "primarySources": [
      {
        "title": "OpenAI Valued at $852 Billion After Completing $122 Billion Round",
        "site": "Bloomberg",
        "url": "https://www.bloomberg.com/news/articles/2026-03-31/openai-valued-at-852-billion-after-completing-122-billion-round"
      },
      {
        "title": "OpenAI, not yet public, raises $3B from retail investors in monster $122B fund raise",
        "site": "TechCrunch",
        "url": "https://techcrunch.com/2026/03/31/openai-not-yet-public-raises-3b-from-retail-investors-in-monster-122b-fund-raise/"
      },
      {
        "title": "OpenAI raises a record $122 billion as revenue crosses $2 billion per month",
        "site": "CoinDesk",
        "url": "https://www.coindesk.com/tech/2026/04/01/openai-raises-a-record-usd122-billion-at-as-revenue-crosses-usd2-billion-per-month"
      },
      {
        "title": "OpenAI Raises $122B to Build Global AI Infrastructure, 'Superapp'",
        "site": "The AI Insider",
        "url": "https://theaiinsider.tech/2026/04/01/openai-raises-122b-in-funding-round-with-853b-valuation-to-build-global-ai-infrasture-superapp/"
      }
    ]
  },
  "anthropic-coreweave-68b-multiyear-cloud-deal-2026": {
    "body": [
      "CoreWeave が4月10日、**Anthropic** との複数年にわたるクラウドインフラ契約を発表した。契約総額は推定 **$68億（約1兆円）** で、AI 専業クラウドプロバイダーとして単一顧客向けでは最大級の契約となる。Anthropic は CoreWeave のプラットフォーム上で Claude モデルのトレーニングおよび推論ワークロードを**プロダクションスケール**で稼働させる。",
      "## 契約の概要と段階的展開",
      "契約は段階的なロールアウトが計画されており、コンピュート基盤のオンライン化は2026年後半から開始される。中核となるのは **NVIDIA Vera Rubin GPU** で、NVIDIA の最新世代アーキテクチャにあたる。契約には将来的な拡張オプションも含まれており、Anthropic の需要増に応じてスケールアップが可能だ。CoreWeave の発表によれば、これにより主要 AI モデルプロバイダー**上位10社中9社**が同社のプラットフォームを利用する形となった。",
      "## AI インフラ軍拡競争の文脈",
      "この契約が発表されたのは、Meta が CoreWeave に **$210億** を投じる契約を結んだわずか24時間後だ。CoreWeave の株価は発表翌日に約11%上昇した。Anthropic はこれまで主に **AWS（Amazon）** と **Google Cloud** をインフラパートナーとしてきたが、CoreWeave の追加は計算資源の調達先を分散させる戦略と読める。Anthropic の年間売上ランレートは $300億に達しており、急増するエンタープライズ需要に対応するにはマルチクラウド体制が不可欠になっている。",
      "CoreWeave は2023年の NVIDIA GPU 特化型クラウドとしての急成長以降、Microsoft、Meta、Anthropic など大手 AI 企業の主要インフラパートナーへと変貌した。2026年3月の IPO 後も積極的な設備投資を続けており、AI モデルの大規模化とエージェント機能の普及に伴う計算需要の爆発的増加を取り込む構えだ。GPU クラウドインフラは、AI 競争の「見えない戦場」として存在感を増している。"
    ],
    "primarySources": [
      {
        "title": "CoreWeave Announces Multi-Year Agreement With Anthropic",
        "site": "CoreWeave Investor Relations",
        "url": "https://investors.coreweave.com/news/news-details/2026/CoreWeave-Announces-Multi-Year-Agreement-With-Anthropic/default.aspx"
      },
      {
        "title": "CoreWeave stock pops 11% on deal to power Anthropic's Claude",
        "site": "CNBC",
        "url": "https://www.cnbc.com/2026/04/10/coreweave-anthropic-claude-ai-deal.html"
      },
      {
        "title": "Anthropic Will Use CoreWeave's AI Capacity to Power Claude",
        "site": "Bloomberg",
        "url": "https://www.bloomberg.com/news/articles/2026-04-10/anthropic-agrees-to-rent-coreweave-ai-capacity-to-power-claude"
      }
    ]
  },
  "openai-chatgpt-ads-25b-revenue-projection-2026": {
    "body": [
      "Axios が4月9日、**OpenAI** が投資家向けプレゼンテーションで ChatGPT 広告事業の大胆な収益予測を提示したと報じた。2026年に **$25億（約3,750億円）**、2027年に $110億、2028年に $250億、2029年に $530億、そして2030年には **$1,000億（約15兆円）** に達するとの見通しだ。",
      "## 6週間で ARR $1億突破",
      "**ChatGPT** への広告表示は2026年2月9日に米国でパイロット開始された。対象は無料ユーザーと Go プラン（$8/月）のログイン済み成人ユーザーで、会話の回答下部に関連するスポンサー製品・サービスが表示される。健康・メンタルヘルス・政治関連のトピックでは広告は表示されず、18歳未満のユーザーにも配信されない。開始からわずか6週間で年間経常収益（ARR）は **$1億** を突破した。",
      "## セルフサーブ広告マネージャー公開",
      "4月には**セルフサーブ広告マネージャー**が一部広告主向けに公開され、最低出稿額が従来の **$25万から $5万** に引き下げられた。大手広告エージェンシーの **WPP**、**Omnicom**、**Dentsu** がテストプログラムに参加しており、Omnicom Media は30社以上のクライアントが参加予定であることを明らかにしている。広告パイロットはカナダ、オーストラリア、ニュージーランドへの拡大も予定されている。",
      "この収益予測は2030年までに週間アクティブユーザーが **27.5億人** に達することを前提としており、Google、Meta、Amazon が支配するデジタル広告市場の一角を切り取る野望を示している。ただし現在の ChatGPT の月間ユーザー数は約1億人超で、この数字への到達には10倍以上の成長が必要だ。OpenAI の年間売上ランレートは $250億を超え、サブスクリプション収益に広告を加えた「二本柱」戦略への転換が鮮明になっている。"
    ],
    "primarySources": [
      {
        "title": "Scoop: OpenAI projects $100 billion in ad revenue by 2030",
        "site": "Axios",
        "url": "https://www.axios.com/2026/04/09/openai-100-billion-in-ad-revenue"
      },
      {
        "title": "Our approach to advertising and expanding access to ChatGPT",
        "site": "OpenAI Blog",
        "url": "https://openai.com/index/our-approach-to-advertising-and-expanding-access/"
      },
      {
        "title": "Testing ads in ChatGPT",
        "site": "OpenAI Blog",
        "url": "https://openai.com/index/testing-ads-in-chatgpt/"
      }
    ]
  },
  "shopify-ai-toolkit-oss-mcp-agent-2026": {
    "body": [
      "**Shopify** が4月9日、AI コーディングツールから Shopify プラットフォームに直接接続する「**AI Toolkit**」をオープンソース（MIT ライセンス）で GitHub に公開した。**Claude Code**、**Cursor**、VS Code、Gemini CLI、**OpenAI Codex** に対応し、AI エージェントが自然言語の指示だけで EC ストアの構築・管理を行える基盤を提供する。",
      "## 3つの中核機能",
      "AI Toolkit は3つの主要機能で構成される。第1に**ドキュメント検索**——Shopify の最新ドキュメントと API スキーマをリアルタイムに検索できる。第2に **GraphQL スキーマ検証**——バンドルされた API スキーマ（admin_2026-04.json.gz 等）に対してクエリを自動検証し、誤った API コールを防ぐ。第3に**ストア操作**——CLI の store execute 機能を通じて、商品更新・在庫変更・設定調整といった実際のストア操作を AI エージェントが実行できる。",
      "## MCP 基盤とプラグインアーキテクチャ",
      "技術的な基盤は Anthropic が策定した **MCP（Model Context Protocol）** だ。2025年12月の Winter '26 Edition で先行公開された **Dev MCP Server**（@shopify/dev-mcp）を拡張し、プラグイン・スキル・MCP サーバーの3つのインストール方式を用意している。推奨はプラグイン方式で、自動アップデートにより常に最新の機能が利用可能だ。ツールキット自体は無料で、Shopify 側の API 呼び出し料金もかからない。",
      "Shopify の AI Toolkit は、EC プラットフォームが AI エージェントの「操作対象」として自らを開放した先行事例だ。開発者がコードを書く代わりに AI に指示してストアを構築・運用する「バイブコマース」のインフラが整い始めている。MCP の普及とともに、同様の動きが他の SaaS プラットフォームにも広がる可能性がある。"
    ],
    "primarySources": [
      {
        "title": "Shopify AI Toolkit: Connect your AI tools to the Shopify platform",
        "site": "Shopify Developer Changelog",
        "url": "https://shopify.dev/changelog/shopify-ai-toolkit-connect-your-ai-tools-to-the-shopify-platform"
      },
      {
        "title": "Shopify/Shopify-AI-Toolkit",
        "site": "GitHub",
        "url": "https://github.com/Shopify/Shopify-AI-Toolkit"
      }
    ]
  },
  "apple-ai-chief-giannandrea-departure-2026": {
    "body": [
      "Apple の元 AI・機械学習担当 SVP **John Giannandrea** が4月15日の株式ベスティング日をもって正式に退任した。2018年に **Google** の検索・AI 部門責任者から引き抜かれ、Apple の機械学習戦略と **Siri** を8年間にわたって統括してきた人物の退場は、Apple の AI 戦略の転換点を象徴している。",
      "## Apple Intelligence の不振が引き金",
      "Giannandrea の権限縮小は2025年3月に始まった。**Apple Intelligence** の市場投入が競合に大きく遅れ、Siri の大規模刷新（ChatGPT 連携やオンスクリーン認識）も繰り返し延期されたことで、Tim Cook が「プロダクト開発の遂行能力」に信頼を失ったと報じられている。Siri、ロボティクス、その他の AI チームの監督権が剥奪され、2025年12月に Apple は Giannandrea の退任とアドバイザーへの移行を正式に発表した。",
      "## 後任体制と今後の展望",
      "AI 担当 VP には **Amar Subramanya** が就任した。Subramanya はソフトウェアエンジニアリング担当 SVP の **Craig Federighi** 直属となり、AI 組織が Federighi の指揮下に統合される形だ。Giannandrea 時代は AI 研究部門が独立した組織として運営されていたが、今後はプロダクト開発との距離を縮める方向に舵を切ることになる。",
      "Giannandrea 本人は退任後、スタートアップへのアドバイザリーや企業の取締役就任を予定していると報じられている。Apple は **WWDC 2026**（6月）で AI 戦略の次章を示す必要があり、新体制の真価が問われるのはそこからだ。Google、OpenAI、Anthropic が AI アシスタント市場で急速に進化する中、Siri の立て直しに残された時間は長くない。"
    ],
    "primarySources": [
      {
        "title": "Former AI boss John Giannandrea officially leaving Apple this week after 'resting and vesting'",
        "site": "9to5Mac",
        "url": "https://9to5mac.com/2026/04/13/former-ai-boss-john-giannandrea-officially-leaving-apple-this-week-after-resting-and-vesting/"
      },
      {
        "title": "Apple's AI Chief John Giannandrea Departs This Week",
        "site": "MacRumors",
        "url": "https://www.macrumors.com/2026/04/13/john-giannandrea-departs-apple-this-week/"
      },
      {
        "title": "John Giannandrea to retire from Apple",
        "site": "Apple Newsroom",
        "url": "https://www.apple.com/newsroom/2025/12/john-giannandrea-to-retire-from-apple/"
      }
    ]
  },
  "stanford-hai-ai-index-2026-china-transparency-2026": {
    "body": [
      "Stanford 大学の人間中心 AI 研究所（HAI）が4月13日、年次レポート「**AI Index 2026**」を公開した。2017年から AI 分野の技術能力・研究動向・社会的影響・世論を追跡する業界最大の年次報告書で、今年は中国の急追、透明性の崩壊、環境負荷の深刻化という3つの構造変化を浮き彫りにした。",
      "## 中国が米国とほぼ同等に",
      "コミュニティ主導のランキングプラットフォーム Arena によると、2026年3月時点で米中のモデル性能差は一桁パーセントにまで縮小した。**Anthropic**、xAI、**Google**、**OpenAI** と並んで **Alibaba**（Qwen）や **DeepSeek** がトップ層に名を連ねている。これは米国の民間 AI 投資が **$2,859億** と中国の **$124億** の23倍以上であるにもかかわらず、性能面ではほぼ拮抗していることを意味する。レポートは「これは米国の政策立案者を警戒させるべきだ」と指摘している。",
      "## 透明性スコアが過去最低に急落",
      "最も性能の高い基盤モデルほど透明性が低いという逆説的な傾向が強まっている。Foundation Model Transparency Index の平均スコアは前年の **58** から **40** に急落した。大手 AI 企業がトレーニングコード、データセット規模、パラメータ数を非公開にする傾向が加速している。生成 AI が社会インフラに組み込まれつつある中、「中身が分からないモデルに依存する」リスクが顕在化している。",
      "## 環境負荷と世論の乖離",
      "環境面では、xAI の **Grok 4** 訓練だけで推定 **72,000トン** の CO2 を排出したと報告された。生成 AI の人口普及率は3年で **53%** に到達し、PC やインターネットよりも速いペースで浸透している。しかし世論は二極化しており、AI に対して「懸念より期待が大きい」と答えた米国人はわずか **10%**、AI 専門家では **56%** と大きな溝がある。医療への AI 活用については専門家の84%が「有益」と答えたのに対し、一般市民では44%にとどまった。",
      "レポートは「AI の能力は歴史的な速度で向上し続けているが、透明性・環境負荷・社会的信頼のすべてが逆方向に動いている」という構造的な矛盾を指摘しており、技術と社会の間の溝がどこまで広がるかが2026年の最大の論点になりそうだ。"
    ],
    "primarySources": [
      {
        "title": "The 2026 AI Index Report",
        "site": "Stanford HAI",
        "url": "https://hai.stanford.edu/ai-index/2026-ai-index-report"
      },
      {
        "title": "Inside the AI Index: 12 Takeaways from the 2026 Report",
        "site": "Stanford HAI",
        "url": "https://hai.stanford.edu/news/inside-the-ai-index-12-takeaways-from-the-2026-report"
      },
      {
        "title": "Stanford's AI Index for 2026 Shows the State of AI",
        "site": "IEEE Spectrum",
        "url": "https://spectrum.ieee.org/state-of-ai-index-2026"
      }
    ]
  },
  "anthropic-claude-performance-decline-effort-backlash-2026": {
    "body": [
      "Anthropic の **Claude** が「性能低下している」というユーザーの訴えが4月中旬に急拡大し、AI ラボとしての信頼が問われる事態に発展した。発端は AMD シニアディレクターの **Stella Laurenzo** が4月2日に GitHub に投稿した Issue だ。Claude Code の **6,852セッション**、17,871の思考ブロック、**234,760のツールコール** を分析し、「Claude Code は複雑なエンジニアリング作業に信頼できないレベルまで退行した」と主張した。",
      "## 背景: effort レベルの静かな変更",
      "問題の根底には、Anthropic が段階的に行った2つの変更がある。まず2月9日に Opus 4.6 の思考モードを**アダプティブ・シンキング**にデフォルト変更。続いて3月3日にデフォルトの effort レベルを「高」から**「中（85）」に引き下げた**。effort レベルはモデルが1回の応答に費やすトークン量を制御するパラメータで、下げればコストと応答速度は改善するが、複雑な推論の精度が犠牲になる。",
      "Claude Code 責任者の **Boris Cherny** は Laurenzo の分析の深さに謝意を示しつつ、主要な結論には異議を唱えた。「redact-thinking-2026-02-12 ヘッダーは UI 上で思考を非表示にするだけで、思考自体や思考バジェットには影響しない」と説明。しかし effort レベルの変更については「コスト・レイテンシ・知性のバランスとして最適と判断した」と認め、**ユーザーへの事前告知なしに行ったこと**が批判の火種になった。",
      "## 対応と教訓",
      "4月7日、Anthropic は API キーユーザー、Bedrock、Vertex、Foundry、Team、Enterprise ユーザーのデフォルト effort を**「高」に戻す**措置を実施した。さらに今後、Teams・Enterprise ユーザーは「追加トークンとレイテンシのコストを負っても拡張思考の恩恵を受けられるよう、高 effort をデフォルトにする」テストを行うと Cherny は述べている。",
      "この騒動は、AI サービスにおける「デフォルト値の変更」がユーザー体験に直結する問題であることを露呈した。Anthropic は年間売上ランレート $300億、評価額 $3,800億に達し IPO も視野に入っているが、急増するエンタープライズ顧客へのコンピュートコスト圧力と品質維持の板挟みが表面化した格好だ。4月15日には claude.ai、API、Claude Code の全サービスで大規模障害も発生しており、インフラ面の課題も重なっている。"
    ],
    "primarySources": [
      {
        "title": "Anthropic is facing a wave of user backlash over reports of performance issues with its Claude AI chatbot",
        "site": "Fortune",
        "url": "https://fortune.com/2026/04/14/anthropic-claude-performance-decline-user-complaints-backlash-lack-of-transparency-accusations-compute-crunch/"
      },
      {
        "title": "Is Anthropic 'nerfing' Claude? Users increasingly report performance degradation as leaders push back",
        "site": "VentureBeat",
        "url": "https://venturebeat.com/technology/is-anthropic-nerfing-claude-users-increasingly-report-performance"
      },
      {
        "title": "Claude Code Drama: 6,852 Sessions Prove Performance Collapse",
        "site": "Substack",
        "url": "https://scortier.substack.com/p/claude-code-drama-6852-sessions-prove"
      }
    ]
  },
  "openai-gpt-54-cyber-tac-cybersecurity-2026": {
    "body": [
      "**OpenAI** が4月14日、防御的サイバーセキュリティに特化した **GPT-5.4-Cyber** を限定公開した。フラッグシップモデル GPT-5.4 をベースに、正当なセキュリティ業務に対する**リフューザル（拒否）閾値を引き下げ**、バイナリ逆解析・マルウェア分析・脆弱性検証といった高度な防御ワークフローを可能にしている。Anthropic が **Mythos Preview** を **Project Glasswing** で限定展開した直後の発表であり、AI サイバーセキュリティ市場での競争が本格化している。",
      "## Trusted Access for Cyber（TAC）の拡大",
      "GPT-5.4-Cyber は2月に発足した **Trusted Access for Cyber（TAC）** プログラムを通じて提供される。TAC は段階的な本人確認制度を採用しており、より高いレベルの認証を受けた利用者ほど強力なモデル機能にアクセスできる。個人ユーザーは chatgpt.com/cyber で本人確認が可能で、エンタープライズチームは OpenAI 担当者を通じてアクセスを申請する。対象は審査済みのセキュリティベンダー、組織、研究者で、数千人規模への段階的な展開が計画されている。",
      "## Codex Security の実績とバイナリ逆解析",
      "GPT-5.4-Cyber の中核機能の一つである**バイナリ逆解析**は、コンパイル済みソフトウェアをソースコードなしで分析し、マルウェアの可能性・脆弱性・セキュリティ上の堅牢性を評価できる。また OpenAI のコード脆弱性検出ツール **Codex Security** は、稼働以来 **3,000件以上** のクリティカルおよび高深刻度の脆弱性修正に貢献しており、エコシステム全体の防御力底上げに実績を積んでいる。",
      "Anthropic が「強すぎて一般公開しない」Mythos で防御的セキュリティ市場を先行した一方、OpenAI は審査済み人材への広範なアクセスで対抗する構図だ。両社のアプローチは対照的——Anthropic は約50組織への超限定提供、OpenAI は TAC を通じた数千人規模への段階的開放——だが、AI モデルのサイバーセキュリティ応用が「研究段階」から「実戦配備」へ移行しつつあることを示している。"
    ],
    "primarySources": [
      {
        "title": "Trusted access for the next era of cyber defense",
        "site": "OpenAI Blog",
        "url": "https://openai.com/index/scaling-trusted-access-for-cyber-defense/"
      },
      {
        "title": "OpenAI Launches GPT-5.4-Cyber with Expanded Access for Security Teams",
        "site": "The Hacker News",
        "url": "https://thehackernews.com/2026/04/openai-launches-gpt-54-cyber-with.html"
      },
      {
        "title": "OpenAI Releases Cyber Model to Limited Group in Race With Mythos",
        "site": "Bloomberg",
        "url": "https://www.bloomberg.com/news/articles/2026-04-14/openai-releases-cyber-model-to-limited-group-in-race-with-mythos"
      }
    ]
  },
  "anthropic-claude-code-desktop-redesign-routines-2026": {
    "body": [
      "**Anthropic** が4月14日、**Claude Code** デスクトップアプリ（Mac/Windows）の全面リデザインと、新機能「**Routines**」のリサーチプレビューを同時発表した。「コーディングエージェントを本格的に使うには IDE を超えた環境が必要」という設計思想のもと、並列セッション管理とクラウド自動実行という2つの方向性を打ち出している。",
      "## デスクトップ: 並列セッションと統合ワークスペース",
      "最大の変更点は**マルチセッション対応**だ。新しいサイドバーにアクティブ・最近のセッションが一覧表示され、ステータス・プロジェクト・環境でフィルタリングできる。複数のセッションを1つのウインドウ内で並列に実行し、ペインは**ドラッグ&ドロップ**で自由に配置可能だ。さらに**統合ターミナル**（テスト・ビルド実行用）、**アプリ内ファイルエディタ**（スポット編集用）、大規模チェンジセットに対応した**高速 diff ビューア**、HTML・PDF・ローカルサーバーの**拡張プレビューペイン**が追加された。",
      "## Claude Code の Routines: コード作業のクラウド自動実行",
      "**Routines** は Claude Code に新設された自動実行機能で、メニュー上は「New Session / **Routines** / Customize / Dispatch」の一角に位置する。プロンプト、リポジトリ、コネクターを1つのパッケージにまとめ、スケジュール実行・API コール・GitHub イベント（プルリクエスト作成など）をトリガーに自動で起動する。実行は Anthropic のクラウドインフラ上で行われるため、ユーザーの PC を閉じても処理は継続する。1日の実行回数はプラン別に制限があり、**Pro は5回**、**Max は15回**、**Team/Enterprise は25回**だ。",
      "なお、同じ Claude Desktop アプリ内でも **Cowork** 側には「New Task / Project / **Scheduled** / Customized / Dispatch」という別メニュー体系があり、Cowork の Scheduled は非コード業務（リサーチ、ファイル整理、ブラウザ操作等）の定期実行を担う。Claude Code の Routines はコード・開発タスクに特化しており、リポジトリとの連携や GitHub イベント連動が可能な点で用途が異なる。",
      "## 補足: Computer Use（ベータ）は Cowork の別機能",
      "同時期に Windows でも解禁された **Computer Use** は、Claude Code ではなく **Cowork 側の機能**だ。Claude が PC 画面のスクリーンショットを撮りながらアプリ操作・クリック・タイピングを自律的に行えるもので、Outlook などのデスクトップアプリを開いたまま「このメールの返信案を考えて」といった指示が可能になる。Pro / Max プラン限定のリサーチプレビューで、**Windows x64 のみ対応（ARM ベースの Surface Pro X・一部 Copilot+ PC は非対応）**。初回起動時に約 2GB の Linux VM がダウンロードされる。有効化は Claude Desktop の設定で「一般」が2箇所あるうち**「デスクトップアプリ」配下の「一般」**を開き、「コンピューター使用（ベータ）」をオンにする。Routines や Scheduled のような自動実行ではなく、ユーザーの指示に応じて画面を見ながら作業する対話型の機能である点が根本的に異なる。",
      "今回の刷新により、Claude Desktop アプリは「Claude Code（開発）」「Cowork（業務自動化）」「Computer Use（画面操作）」という3つの機能レイヤーを1つのアプリに統合する形に進化した。GitHub Copilot の Autopilot モード、Cursor の Background Agents と並び、AI ツールの競争軸が「補完の精度」から「エージェントの自律性と運用インフラ」へ移行していることを示す動きだ。"
    ],
    "primarySources": [
      {
        "title": "Redesigning Claude Code on desktop for parallel agents",
        "site": "Claude Blog",
        "url": "https://claude.com/blog/claude-code-desktop-redesign"
      },
      {
        "title": "Anthropic adds routines to redesigned Claude Code, here's how it works",
        "site": "9to5Mac",
        "url": "https://9to5mac.com/2026/04/14/anthropic-adds-repeatable-routines-feature-to-claude-code-heres-how-it-works/"
      },
      {
        "title": "We tested Anthropic's redesigned Claude Code desktop app and 'Routines'",
        "site": "VentureBeat",
        "url": "https://venturebeat.com/orchestration/we-tested-anthropics-redesigned-claude-code-desktop-app-and-routines-heres-what-enterprises-should-know"
      },
      {
        "title": "Let Claude use your computer in Cowork",
        "site": "Claude Help Center",
        "url": "https://support.claude.com/en/articles/14128542-let-claude-use-your-computer-in-cowork"
      }
    ]
  },
  "google-gemini-personal-intelligence-global-2026": {
    "body": [
      "**Google** が4月14日、**Gemini** アプリの「**Personal Intelligence**」機能を EU・スイス・英国を除く全世界に展開開始した。1月に米国の有料プラン向けにローンチされた同機能が、日本を含むグローバル市場に一気に拡大する形だ。まず **AI Plus**、**Pro**、**Ultra** の有料プランに提供され、無料ユーザーへは数週間以内に拡大される予定。",
      "## Gmail・Photos・Drive をまたぐパーソナライズ",
      "Personal Intelligence は **Gmail**、**Calendar**、**Drive**、**Google Photos**、**YouTube**、**Search**、**Maps** など Google の主要アプリに接続し、ユーザーの個人データを参照して回答をパーソナライズする。たとえば「来週の出張に必要なものリストを作って」と聞けば、Calendar の予定、メールの確認番号、Drive のドキュメントを横断して回答を生成する——追加のプロンプトは不要だ。",
      "## プライバシー: オプトインとデータ分離",
      "Personal Intelligence は明示的な**オプトイン方式**を採用しており、ユーザーはアプリごとに Gemini のアクセス権を個別に管理できる。有効化後はすべてのプロンプトでデフォルトで機能するが、Tools メニューのトグルでいつでも無効化可能だ。重要な点として、Gemini は Gmail や Photos のデータを**モデルの訓練には使用しない**。質問に答えるために参照するが、個人コンテンツはモデルトレーニングから分離されているとGoogle は説明している。",
      "EU・スイス・英国での提供が見送られた背景には、GDPR を中心とするデータ保護規制がある。Google は「各地域の規制要件を満たす形での提供を検討中」としているが、具体的なスケジュールは示していない。Personal Intelligence は Google の最大の強み——数十億ユーザーの既存データエコシステム——を AI に直接接続する戦略の中核であり、ChatGPT や Claude との差別化要因として位置付けられている。デスクトップ、Android、iOS の全プラットフォームで Gemini がサポートする全言語で利用可能だ。"
    ],
    "primarySources": [
      {
        "title": "Gemini app starts rolling out Personal Intelligence globally",
        "site": "9to5Google",
        "url": "https://9to5google.com/2026/04/14/gemini-personal-intelligence-global/"
      },
      {
        "title": "Personal Intelligence: Connecting Gemini to Google apps",
        "site": "Google Blog",
        "url": "https://blog.google/innovation-and-ai/products/gemini-app/personal-intelligence/"
      },
      {
        "title": "Google is expanding Personal Intelligence to Gemini users globally and it's a huge shift",
        "site": "Digital Trends",
        "url": "https://www.digitaltrends.com/computing/google-is-expanding-personal-intelligence-to-gemini-users-globally-and-its-a-huge-shift/"
      }
    ]
  },
  "claude-screen-viewing-4-methods-comparison-2026": {
    "body": [
      "Claude に「画面を見てもらう」方法は2026年4月時点で大きく4つある。しかし用途・速度・対応範囲がそれぞれ異なり、適切に使い分けないとトークンの浪費や非効率な作業に陥る。本記事では各方法の特性を整理する。",
      "## 1. Computer Use（Cowork）— デスクトップアプリ全般を操作",
      "**Claude Desktop アプリ**の **Cowork** 内で利用できるベータ機能。Claude が PC 画面のスクリーンショットを撮り、クリック・タイピング・アプリ切替を自律的に行う。**Outlook や Excel などブラウザ外のデスクトップアプリ**を操作できる唯一の方法だ。Pro / Max プラン限定で、Windows x64 のみ対応（ARM 非対応）。有効化は Claude Desktop の設定 →「デスクトップアプリ」→「一般」→「コンピューター使用（ベータ）」をオン。スクリーンショットベースのため他の方法より速度は劣るが、対応範囲が最も広い。",
      "## 2. Claude in Chrome — ブラウザ上のUI確認・フォーム操作（最速）",
      "**Chrome 拡張機能**として動作し、Claude Code（CLI やエディタ）と連携する。ユーザーの実際のブラウザセッション（ログイン状態・Cookie）をそのまま使えるため、認証が必要なサイトのUI確認やフォーム入力補助に最適。**スクリーンショットの取得が圧倒的に速い**のが最大の利点で、開発中の画面確認はこれが第一選択になる。ただしヘッドレス実行には非対応で、CI/CD パイプラインでは使えない。Chrome / Edge に対応。",
      "## 3. Chrome DevTools MCP — コンソール・ネットワーク・DOMの深掘り",
      "**Google の Chrome チーム**が公式に開発した MCP サーバーで、Chrome の開発者ツール（DevTools Protocol）に Claude Code から直接アクセスできる。コンソールログ、ネットワークリクエスト、パフォーマンスプロファイラ、DOM インスペクションなど、ブラウザの「中身」を診断するための手段だ。Claude in Chrome が「見た目」を確認するのに対し、DevTools MCP は「裏側」を調べる。Cursor や Claude Code CLI から MCP サーバーとして設定して利用する。",
      "## 4. Playwright MCP — テスト自動化・CI/CD 連携",
      "**Microsoft** が開発した Playwright をベースとする MCP サーバーで、ブラウザ操作の自動化とテスト実行に特化している。ヘッドレス実行が可能で CI/CD パイプラインに組み込める。ただしツール定義だけで約 **13,700トークン**を消費し、10ステップのタスクで約 **114,000トークン**かかるというベンチマークもあり、トークン効率は最も低い。",
      "## 使い分けの早見表",
      "開発者の実用的な使い分けは以下の通りだ。**開発中の UI を素早く確認したい** → Claude in Chrome。**コンソールエラーやネットワーク問題をデバッグしたい** → DevTools MCP。**テストスイートを自動化し CI に組み込みたい** → Playwright MCP。**Outlook・Excel などデスクトップアプリを操作してほしい** → Computer Use。多くの開発チームでは Claude in Chrome + DevTools MCP の組み合わせが日常的なワークフローに最も適しており、Playwright MCP はリリース前の検証に使う構成が推奨されている。"
    ],
    "tables": [
      {
        "afterParagraph": 7,
        "caption": "Claude の画面操作4手法の比較",
        "headers": [
          "方法",
          "操作対象",
          "速度",
          "トークン効率",
          "ヘッドレス",
          "必要なもの"
        ],
        "rows": [
          [
            "Computer Use",
            "デスクトップ全般",
            "遅い",
            "低い",
            "不可",
            "Cowork（Pro/Max）"
          ],
          [
            "Claude in Chrome",
            "ブラウザ（認証済み）",
            "最速",
            "高い",
            "不可",
            "Chrome 拡張"
          ],
          [
            "DevTools MCP",
            "ブラウザ内部（DOM・コンソール等）",
            "速い",
            "高い",
            "可",
            "MCP サーバー設定"
          ],
          [
            "Playwright MCP",
            "ブラウザ操作の自動化",
            "速い",
            "低い",
            "可",
            "MCP サーバー設定"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Use Claude Code with Chrome (beta)",
        "site": "Claude Code Docs",
        "url": "https://code.claude.com/docs/en/chrome"
      },
      {
        "title": "Let Claude use your computer in Cowork",
        "site": "Claude Help Center",
        "url": "https://support.claude.com/en/articles/14128542-let-claude-use-your-computer-in-cowork"
      },
      {
        "title": "chrome-devtools-mcp",
        "site": "GitHub (ChromeDevTools)",
        "url": "https://github.com/ChromeDevTools/chrome-devtools-mcp"
      },
      {
        "title": "I Tested All 3 Browser Tools for Claude Code",
        "site": "AyyazTech",
        "url": "https://ayyaztech.com/blog/chrome-devtools-mcp-vs-claude-in-chrome-vs-playwright"
      }
    ]
  },
  "overview-2026-week-mar30": {
    "body": [
      "**3月31日（月）** — OpenAI が **$1,220億** の資金調達を完了し、評価額は **$8,520億** に到達した。Amazon が $500億、NVIDIA と SoftBank が各 $300億を出資。同日、npm で**3つのセキュリティ事案**が同時発生——axios のサプライチェーン攻撃で RAT 入り偽パッケージが流出（[axios 攻撃](?a=axios-npm-supply-chain-attack-rat-2026)）、Claude Code の全ソースコード51万行がソースマップ経由で閲覧可能になり（[ソース流出](?a=claude-code-source-leak-npm-sourcemap-2026)）、Claude Code の prompt cache にバグが見つかりトークンが異常消費された（[トークン消失](?a=claude-code-token-drain-prompt-cache-bug-2026)）。LangChain・LangGraph にも重大脆弱性3件が発見された（[CVE 詳細](?a=langchain-langgraph-3-cves-data-leak-2026)）。",
      "**4月1日（火）** — Gemini API に課金ティア上限が強制適用され、Tier 1 は月 $250 でリクエストが停止される仕様に（[API 変更](?a=gemini-api-billing-tier-spend-cap-2026)）。Anthropic は Sonnet 4.5/4 の1Mコンテキストベータを4月30日で廃止すると発表（[詳細](?a=anthropic-1m-context-beta-retirement-2026)）。ハーバード大学がバイブコーディングを正式コース化した（[ハーバード](?a=harvard-vibe-coding-course-2026)）。米国 AI 規制では連邦 vs 州のプリエンプション問題が焦点に（[規制分析](?a=us-ai-regulation-federal-vs-state-preemption-2026)）。",
      "**4月2日（水）** — この日だけで **15本** のニュースが集中した。**Cursor 3** がエージェント専用ワークスペース「Agents Window」を搭載し正式ローンチ（[Cursor 3](?a=cursor-3-agent-first-workspace-2026)）。Claude **Computer Use が Windows** に対応（[Windows 版](?a=claude-computer-use-windows-launch-2026)）。Google **Gemma 4** が Apache 2.0 で完全オープン化（[Gemma 4](?a=gemma-4-apache2-edge-moe-dense-2026)）。Alibaba **Qwen 3.6-Plus** がエージェント型コーディングベンチマークで首位級（[Qwen](?a=qwen-3-6-plus-agentic-coding-multimodal-2026)）。Claude Code のアーキテクチャをクリーンルーム再実装した **Claw Code** が公開数日で10万スターを突破（[Claw Code](?a=claw-code-oss-agent-harness-100k-stars-2026)）。",
      "**4月3日（木）** — **Supabase** が $500M 調達で評価額 $100億に到達。バイブコーディング需要が OSS BaaS の急成長を牽引（[Supabase](?a=supabase-500m-funding-10b-valuation-2026)）。Anthropic がバイオテック AI 新興企業 **Coefficient Bio** を約 $400M で買収（[買収](?a=anthropic-coefficient-bio-acquisition-400m-2026)）。不可視 Unicode 文字でマルウェアを混入する「GlassWorm」攻撃が GitHub で急拡大（[GlassWorm](?a=glassworm-invisible-unicode-malware-github-supply-chain-2026)）。",
      "**4月4日（金）** — Anthropic がサードパーティ製ハーネス（OpenClaw 等）のサブスク枠利用を正式停止（[停止](?a=anthropic-claude-third-party-harness-extra-usage-2026)）。Claude の **M365 コネクター**が全プランに開放され、Outlook・OneDrive・SharePoint との連携が可能に（[M365](?a=claude-microsoft-365-connector-all-plans-2026)）。",
      "**週の総括** — セキュリティ事案が集中した1週間だった。axios のサプライチェーン攻撃、Claude Code のソース流出、GlassWorm と、開発者のインフラを狙う攻撃が3件発生。一方で Cursor 3 のローンチ、Gemma 4 のオープン化、Supabase の大型調達と、開発ツールのエコシステムは拡大を続けている。"
    ],
    "primarySources": [
      {
        "title": "OpenAI raises $122 billion to accelerate the next phase of AI",
        "site": "OpenAI",
        "url": "https://openai.com/index/accelerating-the-next-phase-ai/"
      }
    ]
  },
  "overview-2026-week-apr06": {
    "body": [
      "**4月6日（日）** — **Anthropic** が売上で **OpenAI を逆転**し、年間売上ランレートが **$300億** に到達したと報じられた。エンタープライズ顧客の急増が牽引（[売上逆転](?a=anthropic-overtakes-openai-revenue-30b-run-rate-2026)）。OpenAI は「Intelligence Age の産業政策」を発表し、週32時間労働やロボット税を提言（[政策提言](?a=openai-industrial-policy-intelligence-age-4day-workweek-2026)）。日本では個人情報保護法の AI 学習に関する改正案が閣議決定された（[改正法](?a=japan-personal-info-protection-law-ai-amendment-2026)）。",
      "**4月7日（月）** — Anthropic が **Claude Mythos Preview** を正式発表。「強すぎて一般公開しない」初のフロンティアモデルで、**Project Glasswing**（$100M のサイバーセキュリティイニシアティブ）でのみ利用される。HLE で 56.8%、SWE-bench Verified で 93.9% という圧倒的スコアを記録し、数千のゼロデイ脆弱性（最古は27年前の OpenBSD バグ）を発見した（[Mythos](?a=anthropic-claude-mythos-preview-glasswing-2026)）。",
      "**4月8日（火）** — 大型発表が集中した日。Anthropic が **Claude Managed Agents** をパブリックベータ公開（[Managed Agents](?a=anthropic-claude-managed-agents-public-beta-2026)）。Meta が初のクローズドモデル **Muse Spark** を発表し、オープンソース路線からの転換を鮮明に（[Muse Spark](?a=meta-muse-spark-closed-source-msl-2026)）。D.C. 控訴裁が Anthropic vs 国防総省訴訟で差止を却下（[訴訟](?a=anthropic-pentagon-blacklist-appeals-court-2026)）。OpenAI が Child Safety Blueprint を公表（[児童安全](?a=openai-child-safety-blueprint-safety-fellowship-2026)）。GitHub Copilot が **Autopilot モード**と CLI での MCP 対応をプレビュー（[Copilot](?a=github-copilot-autopilot-mcp-cli-vscode-2026)）。",
      "**4月9日（水）** — OpenAI が ChatGPT 広告事業の収益予測を投資家に提示。2026年に **$25億**、2030年に **$1,000億** を見込む。パイロット開始6週間で ARR $1億を突破していた（[広告予測](?a=openai-chatgpt-ads-25b-revenue-projection-2026)）。**Shopify** が AI Toolkit をオープンソース公開し、Claude Code・Cursor・Codex から EC ストアを MCP 経由で操作可能に（[Shopify](?a=shopify-ai-toolkit-oss-mcp-agent-2026)）。",
      "**4月10日（木）** — **CoreWeave** が Anthropic との複数年クラウド契約（推定 **$68億**）を発表。NVIDIA Vera Rubin GPU による計算基盤を提供し、主要 AI モデルプロバイダー上位10社中9社が CoreWeave を利用する形に。Meta の $210億契約の翌日の発表で、AI インフラの争奪戦が加速（[CoreWeave](?a=anthropic-coreweave-68b-multiyear-cloud-deal-2026)）。",
      "**週の総括** — AI 業界の勢力図が一気に動いた1週間。Anthropic が売上で OpenAI を逆転し、「強すぎて公開しない」Mythos で技術面でもリードを示した。Meta はオープンソースからクローズドへの方向転換を鮮明にし、OpenAI は広告事業で新たな収益源を本格始動。インフラ面では CoreWeave が Anthropic・Meta の大型契約を連日獲得し、GPU クラウドの覇権を握りつつある。"
    ],
    "primarySources": [
      {
        "title": "Anthropic が売上で OpenAI を逆転",
        "site": "The Information",
        "url": "https://www.theinformation.com/articles/anthropic-revenue-surpasses-openai"
      }
    ]
  },
  "overview-2026-week-apr13": {
    "body": [
      "**4月13日（月）** — Stanford HAI が **AI Index 2026** を公表。中国モデルの主要ベンチマーク差は数ポイント以内まで縮小し、米中性能差はほぼ解消したと報告。投資額は依然として米国が23倍だが、性能差は一桁%にとどまった。透明性スコアは過去最低を更新（[Stanford Index](?a=stanford-hai-ai-index-2026-china-transparency-2026)）。同日 **Apple AI 責任者 John Giannandrea** が8年で退任。Apple Intelligence 不振と Siri 遅延の責任、後任は元 Google の Amar Subramanya（[Apple AI](?a=apple-ai-chief-giannandrea-departure-2026)）。ユーザーが Claude の性能低下を訴え、Anthropic がデフォルト effort を「中」に下げていた事が判明し炎上（[Claude effort](?a=anthropic-claude-performance-decline-effort-backlash-2026)）。",
      "**4月14日（火）** — 大型発表が続く。OpenAI が **GPT-5.4-Cyber** を公開、バイナリ逆解析が可能で Anthropic Mythos への対抗を鮮明に（[GPT-Cyber](?a=openai-gpt-54-cyber-tac-cybersecurity-2026)）。Anthropic が **Claude Code デスクトップ** を全面刷新、並列セッション・統合ターミナル・ドラッグ＆ドロップレイアウトと「Routines」によるクラウド自動実行を導入（[Claude Code Desktop](?a=anthropic-claude-code-desktop-redesign-routines-2026)）。Google の **Gemini Personal Intelligence** が EU 以外の全世界に展開、Gmail・Photos・Drive と連携（[Gemini PI](?a=google-gemini-personal-intelligence-global-2026)）。実用ガイド「Claude に画面を見てもらう4つの方法」も公開（[Screen Viewing](?a=claude-screen-viewing-4-methods-comparison-2026)）。",
      "**4月16日（木）** — Anthropic **Claude Opus 4.7** が GA。SWE-bench Verified 87.6%、新機能「task budgets」と新エフォートレベル「xhigh」、画像最大 2576px に対応（[Opus 4.7 GA](?a=anthropic-claude-opus-4-7-ga-task-budgets-2026)、[レビュー](?a=claude-opus-4-7-review)）。",
      "**4月17日（金）** — Anthropic が **Claude Design** を公開。Opus 4.7 ベースのビジュアル制作ツールで、コードベースからデザインシステム自動生成、Figma 競合機能も搭載（[Claude Design](?a=anthropic-claude-design-labs-figma-challenge-2026)、[レビュー](?a=claude-design)）。",
      "**週の総括** — Anthropic が圧倒的存在感を発揮した1週間。Opus 4.7 GA・Claude Code デスクトップ刷新・Claude Design 投入と3連発で開発者体験を強化。一方 Apple は AI 責任者交代でリーダーシップに動揺、Stanford AI Index は中国の急追を裏付けた。OpenAI も GPT-5.4-Cyber でセキュリティ領域に踏み込み、フロンティアモデルの専門化が進んでいる。"
    ],
    "primarySources": [
      {
        "title": "Stanford AI Index Report 2026",
        "site": "Stanford HAI",
        "url": "https://hai.stanford.edu/ai-index"
      },
      {
        "title": "Claude Opus 4.7 一般提供開始",
        "site": "Anthropic",
        "url": "https://www.anthropic.com/news/claude-opus-4-7"
      }
    ]
  },
  "overview-2026-week-apr20": {
    "body": [
      "**4月20日（月）** — **Amazon が Anthropic に最大 $25B を追加投資**。即時 $5B 入金、評価額 $380B、見返りに Anthropic は AWS で年内 1GW の Trainium インフラを利用する。AI クラウド3強（AWS・Azure・GCP）の中で AWS が Anthropic 結束を強化（[Amazon-Anthropic](?a=amazon-anthropic-25b-trainium-infrastructure-2026)）。",
      "**4月21日（火）** — Hugging Face が **ml-intern** を公開。論文を読み、データセットを探し、モデルを訓練する OSS の ML エンジニア・エージェント。Qwen3-1.7B をベースに動作する軽量設計（[ml-intern](?a=huggingface-ml-intern-open-source-agent-2026)）。",
      "**4月22日（水）** — OpenAI が **Workspace Agents** を公開。Custom GPTs の後継、Codex で動作しチーム共有可能、Slack・Salesforce・Notion 等を MCP 経由で操作する（[Workspace Agents](?a=openai-workspace-agents-codex-enterprise-2026)）。",
      "**4月23日（木）** — OpenAI が **GPT-5.5** をリリース。GPT-5.4 から6週間という短サイクル、エージェントコーディングで SOTA を「半額」で達成し Plus/Pro/Business/Enterprise 全プランに即日展開（[GPT-5.5](?a=openai-gpt-5-5-release-agentic-coding-2026)、[レビュー](?a=gpt-5-5-review)）。",
      "**4月24日（金）** — **DeepSeek V4** プレビュー公開。1.6T MoE と 1M トークンコンテキスト、Pro と Flash の2モデルをオープンソース。Bloomberg は国産チップ統合優先で GA が延期されたと報じる（[DeepSeek V4](?a=deepseek-v4-preview-1m-context-mixture-experts-2026)、[レビュー](?a=deepseek-v4-review)）。",
      "**4月25日（土）** — Anthropic が **Project Deal** を公表。Claude エージェント69体が社内マーケットで186件・$4,000超を自律取引、「Agent Quality Gap」研究のサンプルを公開（[Project Deal](?a=anthropic-project-deal-agent-marketplace-experiment-2026)）。",
      "**週の総括** — 米中フラッグシップ更新が同時進行した1週間。OpenAI が GPT-5.5 で「半額の SOTA」、DeepSeek V4 が 1.6T MoE と 1M ctx のオープンウェイトを投入。Amazon-Anthropic の $25B 追加投資はクラウド3強の縄張り争いを加速させ、Hugging Face と OpenAI のエージェント新製品はマルチエージェント時代の到来を示した。",
      "**編集履歴**",
      "【訂正 2026-09-02】一次ソースとして挙げていた `https://www.anthropic.com/news/expanding-our-partnership-with-amazon` は **実在しない URL だった**。当初は「移転先が見つからなかった」として削除したが、改めて調査したところ、この URL には被リンクも検索インデックスも一件も存在せず、**発表内容を要約したそれらしい slug が最初から誤って記録されていた**と判断した。発表そのものは実在するため、**正しい公式発表を出典として追加した**。投資額・評価額は Amazon 側の公式発表に、コンピュート契約の規模は Anthropic 側の公式発表に記載がある。 **実在しない出典を掲げていたことは、記事内容の正誤とは別の問題である。**"
    ],
    "primarySources": [
      {
        "title": "Anthropic and Amazon expand collaboration for up to 5 gigawatts of new compute",
        "url": "https://www.anthropic.com/news/anthropic-amazon-compute"
      },
      {
        "title": "Amazon invests additional $5 billion in Anthropic",
        "url": "https://www.aboutamazon.com/news/company-news/amazon-invests-additional-5-billion-anthropic-ai"
      },
      {
        "title": "Introducing GPT-5.5",
        "site": "OpenAI",
        "url": "https://openai.com/index/introducing-gpt-5-5/"
      }
    ]
  }
};

export default ARTICLES_BODY_2026_04;
