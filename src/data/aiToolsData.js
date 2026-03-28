/**
 * AI開発ツール ブログ記事データ
 * 各ツールを記事として構成
 *
 * ── 週刊まとめ（heroScope: "week"）の編集ルール（このサイトの固定方針）──
 * - 公開日: 毎週月曜 09:00（Asia/Tokyo）を原則とする（週明けに「先週」を読む想定）。
 * - 対象期間: 常に 7 日間。直前の「月曜 0:00 〜 日曜 23:59」（東京日付）= ISO と同じく週の境界は月曜始まり。
 *   （米国紙で見る日曜始まり Sun–Sat もあるが、開発者向けニュースでは月曜始まりが一般的になりやすい。）
 * - 記事の date: その週刊記事の公開日（多くは月曜の YYYY-MM-DD）。一覧・フィードの並びとヒーロー表示に使う。
 * - weekRoundupPeriod: { start, end } に対象週の両端を必ず入れ、タイトル・本文・ヒーローと矛盾させない。
 * - 対象週をまたぐトピックは、公開日の属する週か、ニュース発生日の属する週のどちらかに寄せて分割する（「10日分を1週刊に詰めない」）。
 * - 上記の運用・掲載基準は**編集部メモ**であり、読者向けの**概要・本文には書かない**（週の流れと個別記事への導線だけを書く）。
 * - 週刊の文体・接続・推敲チェックは **本リポジトリ**の `.cursor/skills/weekly-news-roundup/SKILL.md` に従う（新規作成・全面推敲のたびに適用）。
 *
 * 任意フィールド（画像は権利クリア済みのものだけ public/ に配置）:
 *   coverImage: { src: "articles/…" | "https://…", alt, caption? }
 *   figures: [{ src, alt, caption?, afterParagraph: 0 始まりの段落索引の直後 }]
 *   tables: [{ afterParagraph, caption?, headers: string[], rows: string[][] }] — 先頭列は行見出し（th）
 *   primarySources: [{ title, url, site?, note? }] — 元報道・公式ドキュメント（2次整理サイトとして必須に近い）
   *   date: YYYY-MM-DD — 通常は**ニュースが世に出た基準日**。週刊まとめ（heroScope:week）では**その週刊の公開日**を入れる（一覧・ヒーロー・フィード用）。
 *   newsDate?: — 省略可。指定時は `getArticleNewsYmd` がこちらを優先（後から記事だけ足すとき date と切り分け可）
 *   pinned?: boolean — 同一ニュース日内で複数記事があるときヒーロー候補の優先。ヒーローは「本日＝東京」と news 日付が一致する記事のみ
 *   heroScope?: "day" | "week" | "none" — ヒーロー帯の意味。省略時は day（単発の「本日のニュース」）。week は期間まとめ用コピー。none は当日一致でもヒーローに出さない
 *   weekRoundupPeriod?: { start: YYYY-MM-DD, end: YYYY-MM-DD } — 週刊まとめの対象7日間（月曜〜日曜想定）。heroScope:week のとき推奨
 */

export const ARTICLES = [
  {
    "id": "google-agent-smith-2026",
    "type": "news",
    "category": "product",
    "title": "Google 社内 AI エージェント「Agent Smith」が話題 — PC を閉じても作業を継続、スマホから進捗確認・追加指示",
    "excerpt": "Google が社内で開発・利用している AI エージェント Agent Smith が注目を集めている。Antigravity プラットフォーム上に構築され、コーディングだけでなく社内システム横断の業務を自律的に処理する。PC を閉じてもバックグラウンドで作業を継続し、スマホから進捗確認と追加指示が可能。社内チャットから直接 AI に指示できる統合も実現しており、利用者が急増してアクセス制限がかかるほどの人気。",
    "body": [
      "Google が社内で利用している AI エージェント Agent Smith の詳細が報じられた。Google の AI 開発プラットフォーム Antigravity 上に構築されたこのツールは、コーディング支援にとどまらず、社内の複数システムにまたがるタスクを自律的に処理する。",
      "最大の特徴は非同期動作。従来のコーディング支援ツールは PC の前にいないと使えないが、Agent Smith は指示を出した後に PC を閉じてもバックグラウンドで作業を継続する。スマホから進捗を確認し、追加の指示を出すことも可能。Claude Code の --remote-control や Cowork の Dispatch に近い概念だが、社内システム全体と統合されている点が異なる。",
      "Google の社内チャットプラットフォームとも統合されており、チャット画面から直接 AI に業務指示を出せる。社内の人事情報や資料検索も AI 経由で行えるとされる。社内での利用者が急増し、Google がアクセス制限をかけるほどの人気となっている。",
      "現時点では Google 社内ツールであり外部提供の予定は明らかにされていないが、Google Cloud の Agentspace（企業向けエージェントプラットフォーム）や Gemini Agent（一般向けの自律タスク実行）との関連が注目される。「PC を閉じても AI が仕事を続ける」という体験は、バイブコーディングの次の段階を示唆している。"
    ],
    "newsDate": "2026-03-28",
    "date": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": ["Google", "Agent Smith", "Antigravity", "エージェント", "自律実行"],
    "heroScope": "none",
    "primarySources": [
      { "title": "Google's Agent Smith AI is blowing up internally", "site": "Digit", "url": "https://www.digit.in/news/general/googles-agent-smith-ai-is-blowing-up-internally-here-is-what-it-can-do.html" },
      { "title": "Google Agentspace enables the agent-driven enterprise", "site": "Google Cloud Blog", "url": "https://cloud.google.com/blog/products/ai-machine-learning/google-agentspace-enables-the-agent-driven-enterprise" }
    ]
  },
  {
    "id": "kat-coder-pro-v2-2026",
    "type": "news",
    "category": "model",
    "title": "Kwai（快手）、コーディング特化モデル KAT-Coder Pro V2 を公開 — SWE-Bench 73.4%、OpenClaw 対応",
    "excerpt": "中国の Kwai（快手）傘下の KwaiKAT が、エージェント型コーディングモデル KAT-Coder Pro V2 を公開した。1兆パラメータ超の MoE アーキテクチャで SWE-Bench Verified 73.4% を達成。OpenClaw ネイティブ対応で10以上のフレームワークに汎化。ランディングページや PPT を1文から生成する Web 美的生成機能も搭載。入力$0.30 / 出力$1.20 と低コスト。",
    "body": [
      "KwaiKAT（Kwai AI のコーディング部門）は KAT-Coder Pro V2 を公開した。Qwen ベースの Mixture of Experts アーキテクチャで、総パラメータ1兆超、推論時のアクティブパラメータは約720億。エージェント型のコーディングに特化して設計されている。",
      "SWE-Bench Verified で73.4%のソルブレートを達成。大規模な本番環境でのソフトウェアエンジニアリングやマルチシステム連携を想定した設計で、OpenClaw にネイティブ対応し10以上のフレームワークで汎化性能を持つ。1文の指示からプロダクション品質のランディングページや PPT を生成する Web 美的生成機能も搭載。",
      "料金は入力$0.30 / 出力$1.20（1Mトークンあたり）と、フロンティアモデルの中では非常に低コスト。OpenRouter や Kwai の StreamLake API から利用可能。コーディング特化モデルとしては Claude Code が使う Opus/Sonnet や Codex が使う GPT と異なるアプローチで、専門特化による効率性を追求している。"
    ],
    "newsDate": "2026-03-28",
    "date": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "3分",
    "tags": ["Kwai", "KAT-Coder", "モデル", "コーディング", "中国"],
    "heroScope": "none",
    "primarySources": [
      { "title": "KAT-Coder Pro V2", "site": "KwaiKAT", "url": "https://kat-coder.org/" },
      { "title": "Introducing KAT-Dev-32B, KAT-Coder", "site": "KwaiPilot", "url": "https://kwaipilot.github.io/KAT-Coder/" }
    ]
  },
  {
    "id": "kimi-k25-moonshot-2026",
    "type": "news",
    "category": "model",
    "title": "Moonshot AI、Kimi K2.5 を公開 — 1兆パラメータの MoE モデルが Opus 4.6 や GPT-5.4 に匹敵",
    "excerpt": "中国の Moonshot AI が Kimi K2.5 を公開した。1兆パラメータの Mixture of Experts（MoE）アーキテクチャで、推論時のアクティブパラメータは320億。Humanity's Last Exam で Opus 4.5 や GPT-5.2 High を上回るスコアを記録し、コーディング（SWE-bench 76.8%）やマルチモーダル（画像・動画入力対応）でもフロンティア級の性能を示している。オープンウェイトで公開。",
    "body": [
      "Moonshot AI は2026年1月27日、大規模言語モデル Kimi K2.5 を公開した。1兆パラメータの Mixture of Experts（MoE）アーキテクチャを採用し、推論時にアクティブになるパラメータは320億。コンテキスト長は256Kトークンに対応する。",
      "ベンチマークでは Humanity's Last Exam で50.2%を記録し、Claude Opus 4.5（32.0%）やGPT-5.2 High（41.7%）を大幅に上回った。コーディングでも SWE-bench Verified で76.8%、マルチモーダルでは MMMU Pro 78.5% と高水準。テキスト・画像・動画の入力に対応する。",
      "オープンウェイトで公開されており、Hugging Face からダウンロード可能。エージェント機能ではスウォームモードに対応し、複数エージェントの協調動作でさらに性能が向上する（BrowseComp で78.4%）。中国発のモデルが欧米のフロンティアモデルと肩を並べる状況が鮮明になっている。"
    ],
    "newsDate": "2026-01-27",
    "date": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "3分",
    "tags": ["Moonshot AI", "Kimi", "モデル", "オープンウェイト", "MoE"],
    "heroScope": "none",
    "primarySources": [
      { "title": "Kimi K2.5 Tech Blog", "site": "Moonshot AI", "url": "https://www.kimi.com/blog/kimi-k2-5" },
      { "title": "moonshotai/Kimi-K2.5", "site": "Hugging Face", "url": "https://huggingface.co/moonshotai/Kimi-K2.5" }
    ]
  },
  {
    "id": "glm-5-zhipu-2026",
    "type": "news",
    "category": "model",
    "title": "Zhipu AI、GLM-5 を公開 — 745億パラメータ MoE、Huawei チップで学習した中国発フロンティアモデル",
    "excerpt": "中国の Zhipu AI（智譜AI）が GLM-5 を公開した。745億パラメータの MoE モデルで、エージェント型 AI に最適化された設計。Huawei Ascend チップで学習され、MIT ライセンスのオープンソースとして提供。Opus 4.6 の約6分の1のコストで利用可能。香港市場で株価が34%急騰した。",
    "body": [
      "Zhipu AI（智譜AI）は2026年2月11日、第5世代大規模言語モデル GLM-5 を公開した。約745億パラメータの MoE アーキテクチャで、推論時のアクティブパラメータは440億。28.5兆トークンで事前学習されている。",
      "GLM-5 はエージェント型 AI に最適化されており、複数ステップの推論やコーディング、創作などで高い性能を示す。特筆すべきは Huawei Ascend チップで学習が行われた点で、NVIDIA GPU に依存しない中国の AI 自律路線を象徴している。",
      "MIT ライセンスのオープンソースとして公開され、OpenRouter 経由で利用可能。入力$0.80 / 出力$2.56（1Mトークンあたり）と、Opus 4.6 の約6分の1のコスト。香港証券取引所に上場している Zhipu の株価は発表後に最大34%上昇した。GLM-5-Turbo も OpenClaw 向けに特化したバージョンとして提供されている。"
    ],
    "newsDate": "2026-02-11",
    "date": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "3分",
    "tags": ["Zhipu AI", "GLM-5", "モデル", "中国", "オープンソース"],
    "heroScope": "none",
    "primarySources": [
      { "title": "Zhipu AI Unveils GLM-5 Model", "site": "Zhipu AI", "url": "https://www.zhipuai.cn/en" },
      { "title": "zai-org/GLM-5", "site": "Hugging Face", "url": "https://huggingface.co/zai-org/GLM-5" }
    ]
  },
  {
    "id": "minimax-m27-2026",
    "type": "news",
    "category": "model",
    "title": "MiniMax、自己進化する AI モデル M2.7 を公開 — 人間の介入なしで強化学習の30〜50%を自動化",
    "excerpt": "中国の MiniMax が M2.7 を公開した。OpenClaw フレームワーク上で100ラウンド以上の自己最適化を自律的に実行し、人間の介入なしで30%の性能向上を達成。SWE-Pro で56.2%と Opus に迫るスコアを記録。「自己進化するモデル」として注目されている。",
    "body": [
      "MiniMax は2026年3月18日、AI モデル M2.7 を公開した。最大の特徴は「自己進化」の仕組みで、OpenClaw のエージェントフレームワーク上で100ラウンド以上の自己最適化を自律的に実行。人間の介入なしで30%の内部評価スコア向上を達成した。",
      "ベンチマークでは SWE-Pro 56.2% と Opus に迫る水準を記録。PinchBench では86.2%で GLM-5 や GPT-5.4（86.4%）とほぼ同等。オフィス業務（GDPval-AA ELO 1495）ではオープンソースモデル中で最高スコア。強化学習の研究ワークフローの30〜50%を自動化できるとされる。",
      "MiniMax によると、M2.7 は従来のモデル開発の「人間がチューニング → 評価 → 改善」のループの一部を AI 自身が回せるようになった初期事例。コストも Opus 4.6 と比較して大幅に低い。自己改善型 AI の実用化が進んでいることを示すモデルとして、業界の注目を集めている。"
    ],
    "newsDate": "2026-03-18",
    "date": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "3分",
    "tags": ["MiniMax", "M2.7", "モデル", "自己進化", "中国"],
    "heroScope": "none",
    "primarySources": [
      { "title": "MiniMax M2.7: Early Echoes of Self-Evolution", "site": "MiniMax", "url": "https://www.minimax.io/news/minimax-m27-en" }
    ]
  },
  {
    "id": "google-turboquant-2026",
    "type": "news",
    "category": "model",
    "title": "Google、AI を最大8倍高速化しメモリを6分の1に削減する圧縮アルゴリズム TurboQuant を発表",
    "excerpt": "Google Research が LLM の KV キャッシュを3ビットまで圧縮するアルゴリズム TurboQuant を発表した。NVIDIA H100 GPU 上で最大8倍の高速化と6倍以上のメモリ削減を精度損失なしで実現。Samsung や Micron などメモリチップ株に影響が出ている。",
    "body": [
      "Google Research は3月25日、LLM の推論を大幅に効率化する圧縮アルゴリズム TurboQuant を発表した。KV キャッシュ（モデルが過去の会話を記憶するためのメモリ領域）を3ビットまで圧縮し、精度を一切損なわずにメモリ使用量を6分の1以下に削減する。",
      "NVIDIA H100 GPU 上のベンチマークでは、32ビットの非圧縮状態と比較して最大8倍の速度向上を記録した。Llama-3.1-8B や Mistral-7B などのオープンソースモデルで検証され、圧縮後も非圧縮モデルと同等のリコールスコアを達成している。追加学習は不要で、既存のモデルにそのまま適用できる点が実用的。",
      "TurboQuant は ICLR 2026 で発表される予定。インターネット上では、ドラマ「シリコンバレー」の圧縮技術になぞらえて「現実の Pied Piper」と話題になっている。AI の運用コストを大幅に下げる可能性があり、メモリチップ需要への影響から Samsung や Micron の株価にも動きが出ている。"
    ],
    "newsDate": "2026-03-25",
    "date": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "3分",
    "tags": ["Google", "TurboQuant", "圧縮", "高速化", "メモリ"],
    "heroScope": "none",
    "primarySources": [
      { "title": "TurboQuant: Redefining AI efficiency with extreme compression", "site": "Google Research", "url": "https://research.google/blog/turboquant-redefining-ai-efficiency-with-extreme-compression/" }
    ]
  },
  {
    "id": "singularity-mythos-2026-spring",
    "type": "feature",
    "category": "special",
    "title": "【特集】2026年春、シンギュラリティの入口に立っている — Mythos が示す AI 能力の急進",
    "excerpt": "Anthropic の内部モデル Mythos（Capybara ティア）のリーク、Google TurboQuant による8倍高速化、コールセンターを代替する音声 AI — 2026年第1四半期に起きたことを振り返ると、AI の能力曲線が急激に立ち上がっている。この特集では、今何が起きているのかを整理する。",
    "body": [
      "2026年3月、Anthropic の内部文書がリークし、Opus を超える新ティア Capybara（コードネーム Mythos）の存在が明らかになった。Fortune の報道によると、Anthropic はこのモデルを「能力のステップチェンジ（段階的ではなく飛躍的な変化）」と位置づけている。コーディング、学術的推論、サイバーセキュリティの各ベンチマークで Opus 4.6 を大幅に上回るスコアが報告されている。",
      "同時に、このモデルがソフトウェアの脆弱性を高速で発見・悪用する能力を持つことが内部文書で警告されており、サイバーセキュリティ株の急落を引き起こした。Anthropic は慎重なロールアウト戦略を採り、少数のアーリーアクセスユーザーから段階的に公開する方針とされる。",
      "AI の能力向上はモデル単体にとどまらない。Google の TurboQuant はメモリを6分の1に圧縮して8倍高速化し、Gemini 3.1 Flash Live は音声応答を0.5秒以下にした。これらを組み合わせると、数か月前には不可能だったことが日常的に可能になる速度で技術が進んでいる。",
      "「シンギュラリティ」という言葉は議論を呼ぶが、2026年春に起きていることを見ると、少なくともソフトウェア開発・カスタマーサポート・金融分析といった知的労働の一部において、AI が人間の能力を超える領域が急速に広がっていることは否定しにくい。開発者にとって重要なのは、この流れの中で何を自動化し、何を人間が判断するかの線引きを意識し続けることだろう。"
    ],
    "newsDate": "2026-03-28",
    "date": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": ["特集", "シンギュラリティ", "Mythos", "2026年", "AI安全性"],
    "heroScope": "none",
    "primarySources": [
      { "title": "Anthropic 'Mythos' AI model representing 'step change in capabilities'", "site": "Fortune", "url": "https://fortune.com/2026/03/26/anthropic-says-testing-mythos-powerful-new-ai-model-after-data-leak-reveals-its-existence-step-change-in-capabilities/" }
    ]
  },
  {
    "id": "claude-code-codex-multi-agent-2026",
    "type": "news",
    "category": "cli",
    "title": "Claude Code と Codex CLI をターミナルで連携 — マルチエージェント開発の実践",
    "excerpt": "Claude Code と OpenAI Codex CLI を同じターミナルで並行起動し、それぞれの得意分野で分担させるマルチエージェント開発が話題になっている。Claude Code はアーキテクチャ設計と複雑な実装、Codex は自律タスクと DevOps に強い。",
    "body": [
      "ターミナルベースの AI コーディングエージェントが成熟し、Claude Code と Codex CLI を組み合わせて使う開発者が増えている。2つのエージェントを同時に走らせるマルチエージェント開発のパターンが X やブログで共有されている。",
      "実践的な使い分けとしては、Claude Code にアーキテクチャ設計・複雑な機能実装・フロントエンド開発を任せ、Codex CLI に自律的なテスト作成・DevOps タスク・コスト重視のバッチ処理を任せる構成が多い。Claude Code は深い推論とコード品質に強く、Codex CLI はトークン効率が約4倍良いとされる。",
      "具体的には、Cursor や VS Code のターミナルを分割して一方で claude、もう一方で codex を起動し、それぞれに異なる指示を出す。また、Claude Code の出力をパイプで Codex に渡す（またはその逆）といったスクリプト連携も試みられている。Telegram や Discord からブリッジして両方のエージェントに指示を出すツール（Claude-to-IM-skill）も公開されている。"
    ],
    "newsDate": "2026-03-28",
    "date": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "3分",
    "tags": ["Claude Code", "Codex", "マルチエージェント", "CLI"],
    "heroScope": "none",
    "primarySources": [
      { "title": "Claude-to-IM-skill (GitHub)", "site": "GitHub", "url": "https://github.com/op7418/Claude-to-IM-skill" }
    ]
  },
  {
    "id": "dexter-financial-agent-2026",
    "type": "news",
    "category": "product",
    "title": "金融版 Claude Code「Dexter」が話題 — 200行のオープンソースで株式分析・投資判断を自動化",
    "excerpt": "ターミナルで動作する自律型金融リサーチエージェント Dexter が GitHub で1.7万スターを獲得し話題に。約200行のコードで構築され、タスク計画・自己検証・リアルタイム市場データ分析を行う。Claude / Codex / ローカル LLM に対応。",
    "body": [
      "開発者の Virat Singh 氏が公開した Dexter は「Claude Code の金融版」と称される自律型リサーチエージェント。ターミナル上で動作し、割安株の発見、詳細な銘柄分析、投資テーゼの構築を自律的に行う。GitHub で1.7万スターを獲得している。",
      "約200行のコードで構築されており、LangChain を使って Claude・GPT・ローカル LLM を切り替えて利用できる。リアルタイムの市場データ、SEC ファイリング（米国の企業開示書類）、財務諸表を分析し、タスクの計画 → 実行 → 自己検証 → 改善のループを自律的に回す。",
      "Dexter は投資判断の「下書き」として位置づけられており、最終的な売買判断は人間が行うことが前提。AI エージェントが特定の専門領域に特化して自律的に動作する事例として、バイブコーディングの応用範囲の広がりを示している。"
    ],
    "newsDate": "2026-03-28",
    "date": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "3分",
    "tags": ["Dexter", "金融", "エージェント", "オープンソース"],
    "heroScope": "none",
    "primarySources": [
      { "title": "dexter - An autonomous agent for deep financial research", "site": "GitHub", "url": "https://github.com/virattt/dexter" }
    ]
  },
  {
    "id": "gemini-31-flash-live-voice-2026",
    "type": "news",
    "category": "model",
    "title": "Google、Gemini 3.1 Flash Live を公開 — 応答 0.5 秒以下のリアルタイム音声 AI",
    "excerpt": "Google DeepMind が Gemini 3.1 Flash Live を開発者プレビューとして公開した。従来の「音声認識→推論→音声合成」の3段階を1つのモデルに統合し、応答遅延を 0.5 秒以下に短縮。90以上の言語に対応し、Python スクリプト1本で受付や問い合わせ対応を構築できるとされる。コールセンター業界への影響が注目されている。",
    "body": [
      "Google DeepMind は3月26日、リアルタイム音声対話モデル Gemini 3.1 Flash Live を開発者プレビューとして公開した。モデル ID は gemini-3.1-flash-live-preview で、Gemini API および Google AI Studio から利用できる。",
      "最大の特徴は、従来の「音声をテキストに変換 → AI が推論 → テキストを音声に変換」という3段階のパイプラインを、ネイティブなオーディオ間処理に統合した点。これにより応答までの遅延が大幅に短縮され、ピッチや話速などの音響的なニュアンスも認識できるようになった。WebSocket による全二重通信で、ユーザーの割り込みにも対応する。",
      "対応言語は90以上で、200以上の国と地域で利用可能。開発者は Gemini Live API を通じてリアルタイム音声エージェントをアプリケーションに組み込める。カスタマーサポートや受付業務の自動化への応用が想定されており、コールセンター業界への影響が指摘されている。"
    ],
    "newsDate": "2026-03-26",
    "date": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "3分",
    "tags": ["Google", "Gemini", "音声AI", "リアルタイム", "Flash Live"],
    "heroScope": "none",
    "primarySources": [
      { "title": "Build real-time conversational agents with Gemini 3.1 Flash Live", "site": "Google Blog", "url": "https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-3-1-flash-live/" },
      { "title": "Gemini 3.1 Flash Live: Google's latest AI audio model", "site": "Google Blog", "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-flash-live/" }
    ]
  },
  {
    "id": "freee-mcp-remote-2026",
    "type": "news",
    "category": "product",
    "title": "freee、MCP リモート版をリリース — Claude から会計・人事労務・請求書など約270操作が可能に",
    "excerpt": "フリー株式会社が、AIエージェントから freee の基幹業務を操作できる MCP サーバー「freee-mcp」のリモート版を提供開始した。Claude Desktop や Claude Code から URL を追加してログインするだけで、会計・人事労務・請求書・工数管理・販売の5領域、約270の操作を AI から実行できる。",
    "body": [
      "フリー株式会社は3月27日、AIエージェントから freee の各種 API を操作できる MCP サーバー「freee-mcp」のリモート版の提供を開始した。3月2日に OSS として公開したローカル版に続く展開で、リモート版ではサーバーを freee 側がホストするため、ローカル環境への設定が不要。",
      "利用方法は Claude Desktop・Claude Code・Claude Cowork・Cursor などの AI ツールに URL（https://mcp.freee.co.jp/mcp）を追加し、freee にログインするだけ。会計・人事労務・請求書・工数管理・販売の5領域にわたる約270の操作が AI から可能になる。",
      "MCP（Model Context Protocol）のリモートサーバー対応により、ローカルに npm パッケージをインストールする必要がなくなった点が大きい。日本の SaaS 企業が公式に MCP リモート版を提供する先行事例として注目される。freee は今後もハッカソンの開催を予定している。"
    ],
    "newsDate": "2026-03-27",
    "date": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "3分",
    "tags": ["freee", "MCP", "リモートMCP", "会計", "Claude"],
    "heroScope": "none",
    "primarySources": [
      { "title": "freee、OSSとして公開した「freee-mcp」のリモート版の提供を開始", "site": "freee", "url": "https://corp.freee.co.jp/news/20260327freee_mcp.html" },
      { "title": "freee-mcp GitHub", "site": "GitHub", "url": "https://github.com/freee/freee-mcp" }
    ]
  },
  {
    "id": "claude-code-auto-memory-disable-2026",
    "type": "news",
    "category": "cli",
    "title": "Claude Code、自動メモリ（Auto Memory）の無効化オプションを追加",
    "excerpt": "Claude Code に自動メモリ機能を無効にするオプションが追加された。settings.json に autoMemoryEnabled: false を設定するか、環境変数 CLAUDE_CODE_DISABLE_AUTO_MEMORY=1 で制御できる。プロジェクトごと・グローバルのどちらでも設定可能。",
    "body": [
      "Claude Code の自動メモリ（Auto Memory）は、セッションを通じてプロジェクト固有の知識を ~/.claude/projects/ 配下に自動記録する機能。デフォルトで有効だが、不要な情報が蓄積されるケースや、メモリの内容をコントロールしたいユーザーから無効化オプションの要望が出ていた。",
      "無効化は3つの方法で可能。プロジェクト単位では .claude/settings.json に { \"autoMemoryEnabled\": false } を追加する。全プロジェクト共通では ~/.claude/settings.json に同じ設定を書く。環境変数 CLAUDE_CODE_DISABLE_AUTO_MEMORY=1 は最優先で適用され、他の設定を上書きする。",
      "セッション内からも /memory コマンドで auto memory のトグルが可能。自動メモリを無効にしても手動でメモリに記録する機能は引き続き使える。v2.1.59 以降で利用可能。"
    ],
    "newsDate": "2026-03-28",
    "date": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "2分",
    "tags": ["Claude Code", "Auto Memory", "設定", "Anthropic"],
    "heroScope": "none",
    "primarySources": [
      { "title": "How Claude remembers your project - Claude Code Docs", "site": "Anthropic", "url": "https://code.claude.com/docs/en/memory" }
    ]
  },
  {
    "id": "anthropic-ipo-october-2026",
    "type": "news",
    "category": "regulation",
    "title": "Anthropic、早ければ10月の IPO を検討 — 評価額600億ドル超の大型上場か",
    "excerpt": "Bloomberg の報道によると、Anthropic が早ければ2026年10月の IPO を検討している。評価額は600億ドル（約9兆円）超を想定し、Goldman Sachs や JPMorgan と初期段階の協議を進めているとされる。2月に完了した300億ドルの資金調達では評価額3,800億ドルを記録しており、OpenAI と並ぶ大型 AI 上場となる可能性がある。",
    "body": [
      "Bloomberg は3月27日、Anthropic が早ければ2026年10月の新規株式公開（IPO）を検討していると報じた。調達額は600億ドル（約9兆円）超を見込み、Goldman Sachs、JPMorgan、Morgan Stanley といった大手金融機関と初期段階の協議を進めているとされる。",
      "Anthropic は2月に300億ドルの大型資金調達を完了し、評価額は約3,800億ドルに達した。推定の年間経常収益（ARR）は2026年初頭時点で約140億ドルとされる。IPO が実現すれば、近年の テック IPO の中でも最大級の規模になる。",
      "一方で、正式な申請はまだ行われておらず、市場環境や規制動向によってスケジュールは変動する可能性がある。OpenAI も2026年中の上場を準備しているとの報道があり、AI 企業の IPO ラッシュが注目されている。"
    ],
    "newsDate": "2026-03-27",
    "date": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "3分",
    "tags": ["Anthropic", "IPO", "株式", "資金調達"],
    "heroScope": "none",
    "primarySources": [
      { "title": "Claude AI Maker Anthropic Considers IPO as Soon as October", "site": "Bloomberg", "url": "https://www.bloomberg.com/news/articles/2026-03-27/claude-ai-maker-anthropic-said-to-weigh-ipo-as-soon-as-october" }
    ]
  },
  {
    "id": "nvidia-openclaw-nemoclaw-2026",
    "type": "news",
    "category": "product",
    "title": "NVIDIA、オープンソース AI エージェント基盤 NemoClaw を発表 — OpenClaw との連携でエンタープライズ向け安全機能を提供",
    "excerpt": "NVIDIA が、急成長中のオープンソース AI エージェント OpenClaw に対して、セキュリティ・プライバシー・ガバナンス機能を追加するリファレンスモデル NemoClaw を発表した。OpenClaw は GitHub で25万スターを超え、WhatsApp や Telegram と連携する自律型パーソナルアシスタントとして注目されている。",
    "body": [
      "NVIDIA は、オープンソースの AI エージェントプラットフォーム OpenClaw に対して、エンタープライズ向けのセキュリティ・プライバシー・ガバナンス機能を追加するリファレンスモデル NemoClaw を発表した。",
      "OpenClaw は2025年末に登場し、WhatsApp・Telegram・Discord と連携する自律型パーソナルアシスタントとして急成長。会話の要約、ミーティングのスケジュール、コード実行、フライト予約などのタスクを自律的に処理する。GitHub では4か月足らずで25万スターを超え、React を抜いて非アグリゲーター系プロジェクトとして最多スターを記録した。",
      "NemoClaw は NVIDIA が OpenClaw のセキュリティと効率性を向上させるために開発したもので、オープンソースとして公開される。NVIDIA はパートナー企業と協力し、自律型でセルフエボリューション（自己進化）するエンタープライズ AI エージェントの開発を目指している。"
    ],
    "newsDate": "2026-03-17",
    "date": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "3分",
    "tags": ["NVIDIA", "OpenClaw", "NemoClaw", "エージェント", "オープンソース"],
    "heroScope": "none",
    "primarySources": [
      { "title": "NVIDIA Ignites the Next Industrial Revolution in Knowledge Work With Open Agent Development Platform", "site": "NVIDIA", "url": "https://nvidianews.nvidia.com/news/ai-agents" },
      { "title": "Nvidia Says OpenClaw Is To Agentic AI What GPT Was To Chattybots", "site": "The Next Platform", "url": "https://www.nextplatform.com/ai/2026/03/17/nvidia-says-openclaw-is-to-agentic-ai-what-gpt-was-to-chattybots/5209428" }
    ]
  },
  {
    "id": "vibe-coding-getting-started-2026",
    "type": "feature",
    "category": "special",
    "title": "バイブコーディング、何から始める？ — 2026年版おすすめツール",
    "excerpt": "AIと対話しながらコードを書く「バイブコーディング」を始めるなら、どのツールを選ぶか。入門から上級まで、レベル別・目的別の推奨パスを整理した。",
    "body": [
      "バイブコーディングとは、AIとの対話を軸にコードを組み立てるスタイルを指す。厳密な定義があるわけではなく、IDE・AI・音声入力などを組み合わせて素早く試行錯誤するニュアンスが近い。2026年時点では選択肢が急増しており、「何から始めればいいのか」が最初のハードルになっている。",
      "==入門（コード経験がほぼない人）==は **Claude** のチャット（claude.ai またはアプリ）から始めるのがブレにくい。セットアップ不要で、対話だけで小さなコード片を試せる。ChatGPT や Gemini でも同じことはできるが、コードの見せ方と再利用のしやすさで Claude が一歩先に出ている。",
      "==初級〜中級（日常的にコードを書く人）==は **Cursor** を推奨する。VS Code ベースなので既存の拡張が使え、Composer による複数ファイル編集や Tab 補完が効率を上げる。企業で既に GitHub Copilot の契約があるなら、VS Code + Copilot がそのまま足場になる。",
      "==上級（CLI で自律的に任せたい人）==は **Claude Code** が現時点で最も柔軟。ファイル操作、Bash 実行、MCP サーバ連携、スキルファイルによるカスタマイズができる。**Codex**（OpenAI）はクラウドサンドボックスでの並列実行が特徴で、用途によって使い分ける。",
      "どのレベルでも共通するのは、==最初に全部揃えようとしないこと==。チャットで慣れてからエディタ統合に進み、必要になったら CLI を導入する段階的なアプローチが結局いちばん速い。"
    ],
    "date": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": ["バイブコーディング", "入門", "ツール比較", "Claude", "Cursor", "Claude Code"],
    "heroScope": "none",
    "primarySources": [
      { "title": "Claude Code Documentation", "site": "Anthropic", "url": "https://docs.anthropic.com/en/docs/claude-code/overview" },
      { "title": "Cursor", "site": "Cursor", "url": "https://cursor.com/" },
      { "title": "GitHub Copilot", "site": "GitHub", "url": "https://github.com/features/copilot" }
    ],
    "tables": [
      {
        "afterParagraph": 3,
        "caption": "レベル別おすすめツール（2026年3月時点）",
        "headers": ["レベル", "おすすめツール", "月額目安", "向いている人"],
        "rows": [
          ["入門", "Claude チャット", "無料〜$20", "コード経験なし、まず AI と対話したい"],
          ["初級", "Cursor（Hobby）", "無料", "エディタで AI 補完を試したい"],
          ["中級", "Cursor Pro / VS Code + Copilot", "$20", "日常的にコードを書く開発者"],
          ["上級", "Claude Code / Codex", "$20〜従量", "CLI で自律エージェントを回したい"],
          ["企業", "GitHub Copilot Business", "$19/席", "SSO・監査ログ・IP 補償が必要"]
        ]
      }
    ]
  },
  {
    "id": "cli-tools-comparison-2026-march",
    "type": "feature",
    "category": "cli",
    "title": "CLI コーディングツール横断比較 — Claude Code・Codex・Gemini CLI・Aider・Copilot（2026年3月版）",
    "excerpt": "主要5つの CLI コーディングツールを、機能・料金・モデル・権限制御の軸で横並びに比較した。バイブコーディングの「ターミナル層」を選ぶ際の参考に。",
    "body": [
      "ターミナルから AI にコードを書かせる CLI ツールは、2026年に入って急速に選択肢が広がった。**Claude Code**（Anthropic）、**Codex**（OpenAI）、**Gemini CLI**（Google）、**Aider**（OSS）、**GitHub Copilot CLI** の5つが主要な候補になる。それぞれ設計思想が異なるため、単純な優劣ではなく用途との相性で選ぶ。",
      "Claude Code はローカルのファイルシステムに直接アクセスし、Bash 実行・MCP サーバ連携・スキルファイルによるカスタマイズが可能。Auto モードを使えば権限確認を減らせるが、==本番リポジトリでは --dangerously-skip-permissions を避ける==。Codex はクラウドサンドボックス上で動作し、複数タスクの並列実行に強い。ローカルファイルへの直接書き込みはない代わりに、PR 単位のワークフローに向く。",
      "Gemini CLI は 200 万トークンのコンテキストが特徴で、大規模コードベースの一括読み込みに向く。ただし無料枠の縮小が進んでおり、本格利用には API 課金が前提になりつつある。Aider は完全 OSS で、Claude・GPT・Gemini・ローカルモデルを切り替えられる柔軟さが強み。Git との統合が深く、変更を自動コミットする設計。",
      "Copilot CLI は GitHub のエコシステムとの統合が最大の特徴。Enterprise プランなら SSO・監査ログ・IP 補償が付き、組織導入のハードルが低い。Agent Mode の進化で自律的なタスク遂行も可能になりつつある。",
      "選び方の目安: 個人でフル機能なら Claude Code、クラウド並列なら Codex、大規模コンテキストなら Gemini CLI、OSS・マルチモデルなら Aider、企業統制なら Copilot CLI。"
    ],
    "date": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": ["CLI", "比較", "Claude Code", "Codex", "Gemini CLI", "Aider", "Copilot"],
    "heroScope": "none",
    "primarySources": [
      { "title": "Claude Code Documentation", "site": "Anthropic", "url": "https://docs.anthropic.com/en/docs/claude-code/overview" },
      { "title": "OpenAI Codex", "site": "OpenAI", "url": "https://openai.com/index/introducing-codex/" },
      { "title": "Gemini CLI", "site": "Google", "url": "https://github.com/google-gemini/gemini-cli" },
      { "title": "Aider", "site": "GitHub", "url": "https://github.com/Aider-AI/aider" },
      { "title": "GitHub Copilot", "site": "GitHub", "url": "https://github.com/features/copilot" }
    ],
    "tables": [
      {
        "afterParagraph": 4,
        "caption": "CLI ツール横断比較（2026年3月時点）",
        "headers": ["ツール", "提供元", "実行環境", "モデル", "月額目安", "特徴"],
        "rows": [
          ["Claude Code", "Anthropic", "ローカル", "Claude Opus/Sonnet", "$20〜従量", "MCP・スキル・Auto mode"],
          ["Codex", "OpenAI", "クラウド", "GPT/Codex系", "$20〜従量", "並列実行・PR連携"],
          ["Gemini CLI", "Google", "ローカル", "Gemini Pro/Flash", "無料枠あり→従量", "200万トークン"],
          ["Aider", "OSS", "ローカル", "任意（マルチ）", "無料（API費用別）", "Git統合・architect"],
          ["Copilot CLI", "GitHub", "ローカル+クラウド", "GPT系", "$10〜$39/席", "Enterprise統制"]
        ]
      }
    ]
  },
  {
    "id": "ai-regulation-q1-2026",
    "type": "feature",
    "category": "regulation",
    "title": "AI 規制・訴訟の動き — 2026年 Q1 の主要トピック",
    "excerpt": "Anthropic と米国防総省の法廷闘争、OpenAI Sora をめぐる提携解消、EU AI Act の施行開始など、2026年第1四半期の規制・訴訟動向を整理した。",
    "body": [
      "2026年第1四半期は、AI 企業と政府・規制当局の関係が大きく動いた。最も注目を集めたのは **Anthropic** と米国防総省をめぐる一連の法廷闘争で、サンフランシスコの連邦地裁が国防総省による「サプライチェーンリスク」指定の執行を差し止める暫定命令を出したと報じられた（[詳細はこちら](?a=anthropic-pentagon-injunction-2026)）。",
      "**OpenAI** の Sora をめぐっては、消費者向け提供の終了と複数の提携解消が相次いで報じられた。動画生成 AI の商用展開が著作権・安全性の壁に直面している構図が浮き彫りになった（[→ 詳細記事](?a=openai-sora-discontinued-2026)）。",
      "EU では AI Act（人工知能法）の段階的施行が始まり、汎用 AI モデルの透明性義務やハイリスク AI システムの適合評価が具体化しつつある。日本国内でも AI 事業者ガイドラインの改訂議論が進んでおり、開発者にとって利用規約の確認がこれまで以上に重要になっている。",
      "3月末には Anthropic の内部コードネーム Mythos（別名 Capybara）の草稿がリークし、サイバーセキュリティ関連株に影響が出たとの報道もあった（[Mythosリーク](?a=anthropic-mythos-leak)、[市場への影響](?a=anthropic-mythos-cyber-impact-2026)）。AI 企業の機密管理と情報開示のあり方が改めて問われている。",
      "開発者への実務的な影響として、==利用するツールの利用規約・データ取り扱いポリシーを定期的に確認する==ことが今後さらに重要になる。特に企業での利用は、所在国（AI企業タブを参照）やデータの保存先を把握した上でツールを選定すべきだろう。"
    ],
    "date": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": ["規制", "訴訟", "Anthropic", "OpenAI", "EU AI Act", "2026年Q1"],
    "heroScope": "none",
    "primarySources": [
      { "title": "EU AI Act", "site": "European Commission", "url": "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" }
    ]
  },
  {
    "id": "overview-2026-spring",
    "type": "feature",
    "category": "special",
    "title": "【週刊まとめ】AI開発ツール — 2026年3月23日〜29日",
    "excerpt": "**ARC Prize Foundation** は水曜に適応推論ベンチ **ARC-AGI-3** を公開した。翌日の木曜には **Google DeepMind** が **Gemini 3.1 Pro** をプレビューし、同じ日に **Model Context Protocol** が v2 の年次ロードマップを示した。裁判ではサンフランシスコの連邦地裁が **Anthropic** の申請を認め、国防総省の措置に暫定差止を出したと報じられた。ほぼ同じ頃、**OpenAI** の Sora 消費者向け終了や提携解消が各紙で伝わった。金曜は **Cursor** 2.4 と **Claude Code**（Auto モード・クラウド auto-fix）の更新が続き、週末にかけ Mythos 草稿の報道が広がってセキュリティ関連株が売られたと報じられた。",
    "weekRoundupPeriod": {
      "start": "2026-03-23",
      "end": "2026-03-29"
    },
    "body": [
      "**3月24日（火）** — サンフランシスコの連邦地裁では Anthropic と国防総省をめぐる審問が開かれたと報じられ、Rita Lin 判事が国防総省側の「サプライチェーンリスク」の基準を問いただすやり取りが伝えられた。ほぼ同じ頃、OpenAI の Sora に関する消費者向け提供終了や提携解消が複数媒体で報じられた（[法廷の詳細](?a=anthropic-pentagon-injunction-2026)、[Sora 提供終了](?a=openai-sora-discontinued-2026)）。",
      "**翌25日（水）** — ARC Prize Foundation が ARC-AGI-3 を公開し、インタラクティブな環境でエージェントの適応推論を測る設計に刷新された。主要フロンティアモデルが人間基準に対し極めて低いスコアにとどまった（[ARC-AGI-3 の詳細](?a=arc-agi-3-launch-2026)）。",
      "**26日（木）** — 製品とインフラの告知が同日に重なった。Google DeepMind が Gemini 3.1 Pro のプレビューを掲げ、Model Context Protocol 側は v2 のロードマップを示した。法廷では Lin 判事が Anthropic の暫定差止申請を認めた（[Gemini 3.1 Pro](?a=gemini-3-1-pro)、[MCP v2](?a=mcp-v2-spec-launch-2026)、[暫定差止](?a=anthropic-pentagon-injunction-2026)）。",
      "**27日（金）** — Cursor が 2.4 で並列サブエージェントを導入し、Anthropic は Claude Code の Auto mode を拡大した。クラウド側での auto-fix も発表された（[Cursor 2.4](?a=cursor-2-4-subagents)、[Auto mode](?a=claude-code-auto-mode)、[auto-fix](?a=claude-code-autofix-cloud)）。",
      "**金曜から週末** — Anthropic の内部コードネーム Mythos（別名 Capybara）の草稿報道が広がった。CrowdStrike や Palo Alto Networks などセキュリティ銘柄が売られ、草稿のサイバー能力記述が材料視された（[Mythos リーク](?a=anthropic-mythos-leak)、[市場への影響](?a=anthropic-mythos-cyber-impact-2026)）。"
    ],
    "date": "2026-03-30",
    "author": "AI News 編集部",
    "readTime": "9分",
    "tags": [
      "週刊まとめ",
      "2026年3月",
      "MCP v2",
      "ARC-AGI-3",
      "Gemini 3.1 Pro",
      "エージェント",
      "Claude"
    ],
    "heroScope": "week",
    "pinned": true,
    "primarySources": [
      {
        "title": "Gemini 3.1 Pro（モデル概要）",
        "site": "Google DeepMind",
        "url": "https://deepmind.google/models/gemini/pro/"
      },
      {
        "title": "Announcing ARC-AGI-3",
        "site": "ARC Prize",
        "url": "https://arcprize.org/blog/arc-agi-3-launch"
      },
      {
        "title": "MCP v2 — The 2026 MCP Roadmap",
        "site": "Model Context Protocol Blog",
        "url": "http://blog.modelcontextprotocol.io/posts/2026-mcp-roadmap/"
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
    "id": "overview-2026-week-mar16",
    "type": "feature",
    "category": "special",
    "title": "【週刊まとめ】AI開発ツール — 2026年3月16日〜22日",
    "excerpt": "**OpenAI** は火曜に **GPT-5.4 mini** と nano を出した。水曜は **Windsurf** のレビュー枠が更新され、木曜に **Astral**（uv・Ruff・ty）の買収公表と生成音楽ツールの整理特集が重なった。金曜には **Cursor** による Windsurf 買収完了が伝わり、日曜には **Codex** エージェントのレビューが掲載された。",
    "weekRoundupPeriod": {
      "start": "2026-03-16",
      "end": "2026-03-22"
    },
    "body": [
      "**3月17日（火）** — **OpenAI** が **GPT-5.4 mini** と GPT-5.4 nano を同時にリリースした。mini は無料層や Codex との接合、nano は API 専用の低コスト・高速モデルとして位置づけられ、並列エージェントの末端役にも触れられた。続く出来事の土台として開発者向けの論点が一気に増えた日でもある。（[→ 詳細記事](?a=gpt-54-mini-nano-2026)）",
      "**翌18日（水）** — **Windsurf**（旧 Codeium）のレビュー枠が更新され、**Cascade** フローを軸にした段階的編集や、Anysphere 傘下での継続提供の文脈がまとめられた。（[→ 詳細記事](?a=windsurf)）",
      "**19日（木）** — 流れが交差した日でもある。OpenAI は Python ツールチェーンの **Astral** 買収を公表し、uv・Ruff・ty を Codex 側に束ねる構図を示した。別枠では生成音楽の権利と製品線（Suno・Udio・Lyria など）の整理が特集として出た。（[Astral買収](?a=openai-acquires-astral-2026)、[生成音楽の整理](?a=ai-music-generation-frontier-early-2026)）",
      "**20日（金）** — **Anysphere（Cursor）** が Codeium / Windsurf の買収を完了したと発表し、Cascade 技術の Cursor への統合を予告する材料が重なった。（[→ 詳細記事](?a=cursor-windsurf-merge)）",
      "**22日（日）** — **OpenAI Codex** をクラウド並列実行のエージェントとしてレビューする記事が載り、PR 提出までのワークフローと o4-mini ベースの説明が整理された。（[→ 詳細記事](?a=openai-codex-agent)）"
    ],
    "date": "2026-03-23",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": [
      "週刊まとめ",
      "2026年3月",
      "OpenAI",
      "Cursor",
      "Windsurf",
      "Python"
    ],
    "heroScope": "week",
    "pinned": true,
    "primarySources": [
      {
        "title": "Introducing GPT-5.4 mini and nano",
        "site": "OpenAI",
        "url": "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/"
      },
      {
        "title": "OpenAI to acquire Astral",
        "site": "OpenAI",
        "url": "https://openai.com/index/openai-to-acquire-astral/"
      },
      {
        "title": "Astral to join OpenAI",
        "site": "Astral",
        "url": "https://astral.sh/blog/openai"
      }
    ]
  },
  {
    "id": "guide-media-generative-tools-2026",
    "type": "feature",
    "category": "special",
    "title": "【ガイド】メディア生成ツール早見の見方 — 画像・動画・音楽",
    "excerpt": "ガイドの「メディア生成」タブに載せた代表ツールの位置づけと、権利・料金を確認するときの注意を短くまとめる。開発の道具選びはバイブコーディングタブ。",
    "body": [
      "このサイトの **ガイド** は、用途ごとにタブを分けている。**バイブコーディング** は IDE・CLI・リポジトリを前提にした組み合わせと運用の話。**メディア生成** は画像・動画・音楽・音声合成など、生成系プロダクトの代表例をジャンル別に並べた早見だ。",
      "**メディア早見の位置づけ** — 表は公開情報ベースのサンプルであり、各社の最新機能・価格・提供地域を代替しない。**料金・利用条件・学習データ方針・商用利用**は、必ず公式の約款とヘルプで確認する。",
      "**権利と運用** — 生成物の著作権・肖像・ソフト利用許諾・社内ルールは案件により重い。外部公開の前に権利整理が後追いになりやすいので、本早見は**ツールを知るための出発点**と捉え、法務・契約・ブランド規程の代替にはしない。",
      "**開き方** — ブラウザではナビの「ガイド」→ **メディア生成** タブ。URL は同一サイト内で `?view=guide&tab=media` でもよい。",
      "段階の道筋、組み合わせ表、音声・スラッシュ・スキル、コードのハマりどころは **バイブコーディング** タブにまとめてある。やりたい作業に合わせてタブを選ぶとよい。"
    ],
    "date": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": ["ガイド", "メディア生成", "画像", "動画", "音楽", "特集"]
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
    "newsDate": "2026-03-27",
    "date": "2026-03-28",
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
    "newsDate": "2026-01-29",
    "date": "2026-03-28",
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
    "newsDate": "2026-03-10",
    "date": "2026-03-28",
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
    "newsDate": "2026-03-11",
    "date": "2026-03-28",
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
    "newsDate": "2026-03-12",
    "date": "2026-03-28",
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
    "newsDate": "2026-03-29",
    "date": "2026-03-28",
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
      "生成 AI プロダクトの永続化は、従来の CRUD に加え会話ログ・ツール呼び出しトレース・ベクトルインデックス・メタデータが増えます。単一 DB で押さえるなら **PostgreSQL** が依然として現実的な既定選択で、**pgvector** や全文検索（`tsvector`）と組み合わせたハイブリッド検索（キーワード＋近傍ベクトル）が実務でよく登場します。",
      "**Supabase** はマネージド Postgres を中核に、Auth（GoTrue 系）・**Row Level Security** によるテナント分離・Realtime・Edge Functions を束ねた BaaS です。プロトタイプだけでなく、RAG のメタテーブルと chunk テーブルを同一クラスタに置き、JWT クレームを RLS ポリシーに流すパターンがドキュメント化されやすい点が強みです。接続はプール（PgBouncer / Supavisor）経由か直結かで挙動差（ prepared statement・transaction mode）があるため、ORM とセットで確認します。TypeScript 層では **Prisma** と **Drizzle ORM** がよく比較されるため、選定軸は別稿で整理しています。",
      "代替・近傍として **Neon**（ブランチ型 Postgres）や **PlanetScale**（MySQL Vitess 系）なども選ばれますが、pgvector 前提の記事・サンプルとの親和、GIS 拡張、JSONB による柔軟なメタデータ格納では Postgres 派が厚いです。マルチクラウド要件がある場合はデータ所在地・バックアップ SLA を契約側で先に固定します。",
      "スキーマ設計ではドキュメント ID・版・ACL ラベル・取り込み時刻・埋め込みモデル名と次元数を行メタに持ち、削除・再埋め込みパイプラインと整合させます。エージェントが SQL を直接叩く構成では **読み取り専用ロール** と許可リストでテーブルを縛り、書き込みはアプリ層経由に寄せると事故が減ります。",
      "本稿は製品比較の代替ではありません。認証・課金・監査は自社ポリシーと合わせ、Supabase／Postgres の公式セキュリティガイド・SOC 報告の有無を毎回確認してください。"
    ],
    "newsDate": "2026-03-29",
    "date": "2026-03-28",
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
      "LLM が生 SQL やクエリビルダ文字列を吐くデモが増えても、本番の永続層ではスキーマ版管理・接続上限・権限を人間側でコントロールする必要があります。**ORM** は「エージェントの出力をそのまま評価する」より、アプリの契約（型・マイグレーション・トランザクション境界）を固定する用途で引き続き主力です。",
      "**Prisma** は `schema.prisma` 中心のワークフローが明確で、Prisma Client の API が学習コストを下げ、Prisma Migrate でチーム開発の履歴を揃えやすいのが長所です。**Prisma Accelerate** や Data Proxy 系の接続プール／エッジ経路は、サーバーレス関数のコールドスタートと接続スパイクを抑えたいときに検討されます。反面、実行時クエリの細かいチューニングや「SQL にほぼ等価な追従」を求めると、 `$queryRaw` 周りの規律が必要になります。",
      "**Drizzle ORM** は TypeScript 上でリレーショナル SQL に近い記述と軽量クライアントを売りにし、drizzle-kit でマイグレーションを管理するパターンが一般的です。バンドルサイズや Edge / Worker 志向の構成と相性がよい、とされることが多く、postgres.js や **Neon serverless driver** などドライバ選択を明示しやすい点が実務メリットです。チーム全員が SQL に慣れているほど設計の伸びしろが出やすい一方、ガイドラインが無いとスタイルがバラける弱点もあります。",
      "AI プロダクト特有の論点は、(1) **会話ログ・ツールトレース**など巨大 JSON を `jsonb` で持つときのインデックス設計、(2) **pgvector** テーブルを ORM のスキーマに含めるか一部だけ生 SQL に逃がすか、(3) **RLS** が効いた接続ユーザーとアプリ用ロールの分離、の三点です。エージェントに「任意のマイグレーション」を任せる運用は避け、**人間レビュー必須のパイプライン**に固定するのが無難です。",
      "選定の決め手は信仰や炎上ではなく、**チームの SQL 文化・デプロイ形態（長寿命サーバ vs サーバーレス）・観測性**です。新規 PoC なら両方を小さく触り、マイグレーション速度と CI の書き方、ステージングの破壊的変更の扱いを比較するとブレが減ります。最終的なライセンス・クラウド課金・データ所在地は各公式の pricing / DPA を参照してください。"
    ],
    "newsDate": "2026-03-30",
    "date": "2026-03-28",
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
    "rating": 3.5,
    "reviewCategory": "other",
    "category": "media",
    "title": "Aqua Voice — Mac/Windows 向けAIディクテーション（フローティングUI）",
    "excerpt": "録音→転写→アクティブなアプリへペーストまでを一体で扱う製品向けディクテーション。公式 FAQ では全アカウント 1,000 語の無料枠、Avalon モデルは Pro で選択可能、iPhone アプリは未対応とされる。",
    "body": [
      "Aqua Voice は Mac / Windows 向けの AI ディクテーションで、小さなフローティング UI から録音し、転写結果をカーソル位置へ流し込むワークフローが中心です。開発者向けの「手をキーボードから離さずに進めたい」場面や、短いメモの口述に向くタイプのプロダクトです。",
      "料金・機能の境界は公式 FAQ が基準です。無料で試せる語数に上限があり、Pro プランでモデル選択や利用上限の扱いが変わる理解でよいでしょう（詳細は一次情報で都度確認）。",
      "注意点として、モバイル iOS 版は FAQ 上「未対応」とされています。Apple シリエコシステムだけで完結させたい場合は別製品との比較が必要です。",
      "精度の評価はドメイン依存です。ベンダーが公表する技術用語向けスコアと、会話全般の WER は別物なので、自チームの音声サンプルで試すのが確実です。"
    ],
    "newsDate": "2026-03-07",
    "date": "2026-03-28",
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
    "category": "media",
    "title": "AI 音声入力ツールの俯瞰 — 製品型と API 型、Whisper と gpt-4o-transcribe",
    "excerpt": "OSS の Whisper と OpenAI Speech-to-Text API（whisper-1 / gpt-4o-transcribe 系）は別ライン。コンシューマー製品とクラウド STT API の選び方、レイテンシ・コスト・プライバシーの論点を整理する。",
    "body": [
      "音声入力のスタックは大きく「OS 標準」「サードパーティ製品」「自分で API を叩く」の三層に分けられます。開発者が比較しやすいのは製品単体より、**どこで音声が止まるか**（端末内／ベンダークラウド／自社 VPC）の境界です。",
      "OpenAI のドキュメント上、Speech-to-Text には `whisper-1` と `gpt-4o-transcribe` 系など複数ルートがあり、**OSS Whisper モデルそのものとは名前が似ていても別物**です。ベンチや「Whisper ベース」の記述を読むときは、OSS なのかホスト API なのかを必ず確認してください。",
      "クラウド STT ではレイテンシ表示が「ネットワーク除く」こともあり、実アプリでは端末処理との二段構えや、長尺ファイルの非同期バッチが現実的です。医療・法務などではログ保管と再識別リスクが追加の論点になります。",
      "製品側（Aqua 等）はフローティング UI・ペースト演出・ショートカット統合まで含めた体験勝負、API 側はカスタムパイプラインとの接続勝負、という住み分けが典型です。",
      "下の表は「調査の出発点」用です。契約 SLA・データ居留・モデル ID は都度ベンダー表を正としてください。"
    ],
    "newsDate": "2026-03-14",
    "date": "2026-03-28",
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
    "category": "media",
    "title": "生成音楽のフロンティア — Suno・Udio・Lyria・Stable Audio 周辺の整理（2026年初頭）",
    "excerpt": "創作者ツールとライセンス・レーベル動向が高速な領域。評価額やバージョン番号は報道・公式ヘルプを正とし、数値ヒャールには要注意。企業利用では権利表記と学習オプトアウトの有無を別途確認。",
    "body": [
      "生成音楽は、品質よりも**権利と配信パイプライン**の話が速い分野です。スタートアップの評価額報道は桁や通貨の取り違えが起きやすいので、必ず原報を読みます。",
      "Suno はヘルプ上 v5 系の説明があり、2026年時点ではさらに次版が進行している可能性があります。細部はアプリ内と help を正にしてください。",
      "Udio と大手レーベル側の和解・ライセンス型への話は 2025 年末前後の報道が多く、**利用規約と曲の帰属**はプロダクト更新で変わり得ます。",
      "Google 側は Lyria などブランドが複数接続先（消費者アプリ、API、Vertex 等）を持つ構成で、発表時点の The Keyword・開発者ブログを軸に追うのが安全です。",
      "Stable Audio など別系統は「いつ発表された製品か」を公式 post の年と突き合わせ、古い記事の断定をそのまま写さないことが重要です。企業の広告 BGM 用途は別途ポリシー確認が必要です。"
    ],
    "newsDate": "2026-03-19",
    "date": "2026-03-28",
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
    "category": "media",
    "title": "画像生成AIの地形図（2026年初頭）— GPT Image・MJ・Flux・Imagen から Nano Banana 2 まで",
    "excerpt": "解像度競争に加え、複雑な構図や空間関係へのプロンプト忠実度、用途特化が選択軸の中心になっている。GPT Image・Midjourney・Flux・Imagen から Seedream まで、話題モデルの位置づけと強みを整理する。",
    "body": [
      "2026年初頭の画像生成は、単純な「きれいさ」より **指示への追従**（空間関係・構図・オブジェクト数）と用途別の最適化が際立っています。ベンダーによって版数表記・API 名・消費者アプリ名が一致しないため、契約や本番組み込みではリリースノートと pricing を直接確認してください。",
      "話題のラインアップをざっくり押さえると、アート・ディレクション寄りでは **Midjourney** 系、フォトリアル寄りでは **Flux**（Black Forest Labs）などの評価が多く出やすい一方、画像内テキストでは **Ideogram** や GPT Image、ロゴ・ベクターでは Recraft、クリエイティブクラウド統合と利用条項では Adobe Firefly、オンプレ・カスタムでは Stable Diffusion 系列、エンタープライズ文脈の Imagen と Gemini エコシステム上の Nano Banana / Imagen という住み分けが議論でよく引用されます（いずれも「常に勝つ」ではなく案件依存）。",
      "Google 周りは **Imagen 4**（Cloud / 開発者向けドキュメント側）と、別稿で扱う **Nano Banana 2**（Gemini 3.1 Flash Image）が表裏で混同されやすいです。後者は動画ツール Flow の既定「画像」モデルでもあり、動画生成そのもの（Veo 等）とは別ラインです。動画の比較は当サイトの動画まとめ稿を参照してください。"
    ],
    "newsDate": "2026-03-01",
    "date": "2026-03-28",
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
        "url": "?a=google-nano-banana-2-gemini-flash-image-2026"
      }
    ]
  },
  {
    "id": "google-nano-banana-2-gemini-flash-image-2026",
    "type": "feature",
    "category": "media",
    "title": "Google「Nano Banana 2」— Gemini 3.1 Flash Image と動画ツール Flow との見分け方",
    "excerpt": "2026年2月26日、Google DeepMind が画像生成モデル Nano Banana 2（技術名 Gemini 3.1 Flash Image）を発表。Pro 寄りの品質と Flash 級の速度、最大5キャラクターの一貫性などが売り。Flow の既定モデルでもあるため「動画AI」と混同されやすい点を整理する。",
    "body": [
      "**Nano Banana 2 は画像生成・編集モデル**です。The Keyword の製品名は *Nano Banana 2 (Gemini 3.1 Flash Image)* と明記されており、テキスト→**動画クリップ**を直接出す Veo 系とは別ラインです。",
      "ユーザー目線で紛れやすいのは **Google Flow** です。Flow は動画制作向けプラットフォームですが、公式ブログによれば既定の「画像」生成モデルが Nano Banana 2 に更新され、Flow 利用者向けはクレジット 0 で利用できる説明があります。タイムライン用のキービジュアルやボード素材を高速に回す文脈で動画ワークフローに載るため、「動画AIの新モデル」と誤読されやすい、という整理が実務的です。実際のテキスト→動画生成は別途 Veo などを参照してください（当サイトの動画まとめ稿）。",
      "能力面の要点は次のとおりです。Gemini の世界知識・検索グラウンディングを活かした被写体表現、画像内テキストの精密描画と翻訳・ローカライズ、**最大5キャラクター程度の一貫性**と単一ワークフロー内で最大14オブジェクトまでの忠実度維持、複雑な指示への追従、512px から 4K までの解像度・アスペクト比の指定、といった Pro 寄りの機能を **Flash 級の速度**で回す、というプロダクト訴求です。",
      "展開面では **Gemini アプリ**（Fast / Thinking / Pro で Nano Banana Pro に置き換え。有料層は Pro を再生成で継続利用可能）、Google 検索（AI Mode / Lens など）、Gemini API・AI Studio・Vertex AI（プレビュー）、Flow、Google Ads などにロールアウトとされています。API のモデル ID・価格は `gemini-3.1-flash-image-preview` の表記で公式 pricing を正としてください。",
      "プロvenance として Google は **SynthID** と C2PA Content Credentials の併用を継続すると述べています。生成物の開示・検証ポリシーは組織のガイドラインと合わせて確認が必要です。"
    ],
    "newsDate": "2026-02-26",
    "date": "2026-03-28",
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
    "category": "media",
    "title": "動画生成モデルの地形図 — Veo・Runway・Kling などとマルチモデル・パイプライン",
    "excerpt": "テキスト→動画、参照映像、ネイティブ音声、4K／長尺、物理シミュレーション寄りの品質競争が続く。単体ベンダー鎖国より、用途別に複数モデルを束ねる構成が増えている。",
    "body": [
      "2025〜2026 年のトレンドは「1クリックで完結」より、**企画→キーフレーム→動画→音声→後処理**を API でつなぐパイプライン設計に寄っています。",
      "Google の Veo 系、Runway、中国勢の Kling、開放系の Hunyuan／ByteDance 系列など、**アクセス経路（消費者アプリ／API／パートナー）**が異なるため、同じモデル名でも到達点が違います。",
      "選定チェックリストの例: 最大化解像度と尺、商用ライセンス、参照映像の扱い、音声同梱の有無、ウォーターマーク、推論コスト、地域制限、コンテンツポリシー。",
      "速報的な「サービス終了」や価格改定は二次報道だけで確定せず、**公式チャンジログ or pricing** を毎回見に行く運用が安全です。",
      "本サイト別稿ではフロンティア間の料金の軸比較と、Sora 終了報道の整理も参照してください。"
    ],
    "newsDate": "2026-03-08",
    "date": "2026-03-28",
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
    "category": "media",
    "title": "生成動画とコンプライアンス — ディープフェイク規制・開示・C2PA の実務",
    "excerpt": "生成・編集が容易になるほど、開示義務・本人同意・選挙広告・著名人の類似が論点になる。制作フローにメタデータ署名と人間確認ゲートを組み込む話に整理する。",
    "body": [
      "各国・各州で「疑似実在映像」の定義と禁止対象が異なり、プラットフォームポリシーと二重管理がかかる場面があります。クロスボーダー配信では最悪ケースの規制に寄せた設計が無難です。",
      "C2PA Content Credentials は改ざん検知に近い**出所のくすみ**を残す仕組みで、撮影・編集・生成の各段でプロビナンスを積むイメージです。導入にはワークフローと保存形式の合意が必要です。",
      "社内利用でも「社外配布物だけチェック」では足りず、**個人情報・労務・パートナー契約**側の「AI 生成可否」条項が先に絡むことがあります。",
      "技術だけでは止められないため、**人間の承認ステップ・版管理・監査ログ**をセットで設計します。"
    ],
    "newsDate": "2026-03-08",
    "date": "2026-03-28",
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
    "category": "media",
    "title": "報道: OpenAI が Sora の提供終了を表明 — 計算・戦略・ガードレールの文脈",
    "excerpt": "2026年3月頃、AP・NPR・Business Insider などが Sora のアプリ／関連 API 終了を伝えた。最終的な公式文言・日付は openai.com 側の確認を優先する。",
    "body": [
      "本稿は二次報道ベースの整理です。契約・プロダクト判断は OpenAI の公式発表、利用規約、ダッシュボード通知を正としてください。",
      "報道で繰り返される観点は、(1) 大規模推論のコストと経済性、(2) ロボティクスや世界モデル等への投資シフト、(3) 深偽・キャラクター利用をめぐる炎上とモデレーションコスト、などです。いずれも**仮説の列挙**であり単独原因として断定しない方が安全です。",
      "利用者向けメッセージが X などで引用された、とも各紙は伝えていますが、スクリーンショット単体の解釈には注意が必要です。",
      "クリエイター向けには、既存クリップのエクスポートや権利帰属、代替パイプライン（別稿のフロンティア比較）を早めに確認する動きが想定されます。",
      "本サイトでは規模の大きい話題のため速報枠で掲載するが、数値・内部事情の噂は掲げない方針とする。"
    ],
    "newsDate": "2026-03-26",
    "date": "2026-03-28",
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
    "category": "media",
    "title": "動画フロンティアの料金の軸 — Veo 3.1・Runway Gen-4.5・Kling など（公式再確認前提）",
    "excerpt": "秒単価・クレジット制・バンドル販売が混在するため「安い／高い」一発比較は誤魔化しやすい。公式 pricing の単位（秒・分・解像度・Fast/Standard）を揃えて読む。",
    "body": [
      "Gemini API 系の動画（Veo）では Google の pricing ページに秒あたり単価と解像度ティアが表形式で出ることが多いです。Standard / Fast の差も読み落とさないでください。",
      "Runway はクレジット／秒の組み合わせで示されるため、**1 クレジットの USD 換算**まで踏み込んで概算します。キャンペーンやパックで実効単価は変動します。",
      "Kling・Pika・CapCut 経由などはプロダクト境界が複雑なので、表では「確認 URL」を主役にし、断定価格は載せすぎません。",
      "Sora に関しては終了報道があり（別稿）、現行の新規採用は計画から外す判断が入り得ます。",
      "**いつでも公式を正にする**前提で、以下の表は2026年3月末時点の調査メモです。"
    ],
    "newsDate": "2026-03-30",
    "date": "2026-03-28",
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
    "type": "news",
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
    "newsDate": "2026-03-27",
    "date": "2026-03-28",
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
    "newsDate": "2026-03-10",
    "date": "2026-03-28",
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
    "newsDate": "2026-03-12",
    "date": "2026-03-28",
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
    "newsDate": "2026-03-12",
    "date": "2026-03-28",
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
    "newsDate": "2026-03-14",
    "date": "2026-03-28",
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
    "newsDate": "2026-03-14",
    "date": "2026-03-28",
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
    "type": "news",
    "category": "editor",
    "title": "Cursor 2.4 リリース — 並列サブエージェントとクラウドVM実行で開発を高速化",
    "excerpt": "最大20個のエージェントを同時並列実行可能に。クラウドVM上での独立実行により、ローカルマシンのリソースを消費せず大規模タスクを処理。BugBotも新登場。",
    "body": [
      "Anysphere社は2026年3月、Cursor 2.4をリリースし、並列サブエージェント機能を正式導入しました。親エージェントがタスクを分解し、複数のサブエージェントがそれぞれ独立したコンテキストで同時に作業を進めます。",
      "サブエージェントはクラウドVM上で実行されるため、ローカルマシンに負荷をかけずに10〜20のエージェントを同時に稼働させることが可能です。テストでは、8,000行のNext.jsアプリのルーター移行がシリアル実行の17分から並列実行で9分に短縮されました。",
      "あわせて「BugBot」も発表されました。PRレベルの自動コードレビューを行い、バグの早期発見を支援します。カスタムプロンプト、ツールアクセス制御、モデル選択などサブエージェントの柔軟なカスタマイズも可能です。"
    ],
    "newsDate": "2026-03-27",
    "date": "2026-03-28",
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
    "type": "news",
    "category": "cli",
    "title": "Gemini CLI v0.35.0 — サブエージェント強化とPlan Mode追加、無料枠は縮小へ",
    "excerpt": "Google Gemini CLIの最新安定版がリリース。サブエージェントアーキテクチャの大幅強化、セキュリティ向上のサンドボックス機能。一方で3月25日よりPro以上が有料に。",
    "body": [
      "Google DeepMindは2026年3月24日、Gemini CLI v0.35.0をリリースしました。サブエージェントアーキテクチャが大幅に強化され、ローカル実行、ツール分離、マルチレジストリ検出、動的ツールフィルタリング、JITコンテキスト注入に対応しています。",
      "セキュリティ面では統合SandboxManagerが導入され、Linux（bubblewrap/seccomp）、macOS（Seatbelt）、Windowsの各プラットフォームでネイティブなサンドボックス分離を実現。ツール実行の安全性が大きく向上しました。",
      "Plan Modeも新たに追加され、コード変更前にエージェントが計画を提示し、ユーザーの承認を得てから実行する慎重なワークフローが可能になりました。カスタムキーバインドやVimモードの強化など、開発者体験の改善も行われています。",
      "一方、3月25日よりGemini Proモデルは有料サブスクリプション限定となり、無料枠はGemini Flashモデルのみに制限されます。大規模コンテキストを活かした利用には課金が必要になる点に注意が必要です。"
    ],
    "newsDate": "2026-03-27",
    "date": "2026-03-28",
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
    "type": "news",
    "category": "editor",
    "title": "GitHub Copilot、JetBrainsで正式GA — Coding Agentの起動速度も50%改善",
    "excerpt": "Agent ModeがVS Code以外にもJetBrains、Eclipse、Xcodeへ展開。セマンティックコード検索の導入で初期化時間が40秒→20秒に短縮。",
    "body": [
      "GitHubは2026年3月、Copilot Coding AgentのJetBrains IDE正式対応（GA）を発表しました。これまでVS Code限定だったAgent Mode、セマンティックコード検索、Issue→PRワークフローがJetBrainsでもフル機能で利用可能になります。",
      "セマンティックコード検索の導入により、ファイルパスを指定しなくても概念的に関連するコードを自動発見できるようになりました。これにより、Coding Agentの初期化時間が従来の約40秒から20秒へと50%短縮されています。",
      "EclipseとXcodeへのAgent Mode展開もパブリックプレビューとして開始され、全Copilotユーザーが利用可能です。さらにセッションログの可視性も向上し、リポジトリクローンやエージェントファイアウォールのステップが確認できるようになりました。"
    ],
    "newsDate": "2026-03-27",
    "date": "2026-03-28",
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
    "type": "news",
    "category": "model",
    "title": "Gemini 3.1 Pro 発表 — ARC-AGI-2スコア77.1%、推論性能が前世代の倍以上に",
    "excerpt": "Google DeepMindが3月26日にプレビュー公開。1Mトークンコンテキスト、推論ベンチマーク大幅向上。価格は据え置きで開発者・企業向けに順次展開。",
    "body": [
      "Google DeepMindは2026年3月26日、Gemini 3.1 Proをプレビューとして発表しました。ARC-AGI-2スコア77.1%を達成し、前世代Gemini 3 Proの倍以上となる推論性能を実現しています。",
      "1Mトークンのコンテキストウィンドウを持ち、テキスト・画像・音声・動画・PDF・コードリポジトリなど多様なデータソースを横断して処理可能です。複雑なデータ統合や高度な問題解決に最適化されています。",
      "価格は入力$2/出力$18（100万トークンあたり）で、Gemini 3 Proから据え置き。Geminiアプリ（Pro/Ultraプラン）、AI Studio、Vertex AI、Gemini CLI、Android Studio、NotebookLM で利用可能です。JetBrains IDE、Xcode、Eclipseでも GitHub Copilot経由で利用できます。",
      "エージェントワークフローの改善にも注力しており、Gemini Code Assistは個人開発者向けに完全無料化されました。月間18万リクエストまで無料で利用でき、VS CodeとJetBrains IDEに対応しています。"
    ],
    "newsDate": "2026-03-27",
    "date": "2026-03-28",
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
    "type": "news",
    "category": "model",
    "title": "GPT-5.4 リリース — 推論・コーディング・エージェントを統合した「ワンモデル」",
    "excerpt": "OpenAIが3月5日にリリースした最新フラグシップモデル。GPT-5.3-Codexのコーディング性能とGPT-5.2の推論力を統合し、25%高速化。",
    "body": [
      "OpenAIは2026年3月5日、GPT-5.4をリリースしました。推論、コーディング、エージェントワークフローを1つのモデルに統合した「ワンモデル」アプローチが特徴です。",
      "GPT-5.3-Codex（2月5日リリース）で達成した業界トップクラスのSWE-Bench Pro・Terminal-Benchスコアを継承しつつ、汎用的な推論タスクでも大幅に性能向上。速度は前世代比25%改善されています。",
      "Codexプラットフォームにはファーストクラスのプラグイン対応、マルチエージェントワークフロー、画像処理の改善、TUIのプロンプトリコール・ファイルウォッチ機能なども追加されました。",
      "なお3月11日付でGPT-5.1モデル（Instant/Thinking/Pro）はChatGPTから廃止されています。GPT-5.4はChatGPT Pro/Team/Enterpriseプランで利用可能です。"
    ],
    "newsDate": "2026-03-27",
    "date": "2026-03-28",
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
    "type": "news",
    "category": "product",
    "title": "Windsurf、クレジット制を廃止しクォータ制へ全面移行 — Pro価格は$20に",
    "excerpt": "3月19日、Windsurfがクレジットベースの料金体系から日次・週次クォータ制に変更。Pro価格が$15→$20に上昇し、Cursorとの価格差が消滅。",
    "body": [
      "Windsurf（旧Codeium）は2026年3月19日、料金体系を全面的に改定しました。従来のクレジットベースのシステムを廃止し、日次・週次で自動更新されるクォータ制に移行します。",
      "新プランはFree、Pro（$20/月）、Teams、Max（$200/月）の4段階。従来のProは$15/月だったため$5の値上げとなり、Cursorの$20/月と同額になりました。これにより、Windsurfの最大の競争優位だった価格差が消滅しています。",
      "クォータ制では、月間プールではなく日次・週次のレートリミットとして使用量が管理されます。既存の有料ユーザーは現行価格が継続適用され、新体系を試すための無料期間も設けられています。",
      "ユーザーコミュニティからは料金改定に対する批判の声も上がっています。Cursor傘下に入ったことで独自の差別化が難しくなる中、今後の機能面での差別化に注目が集まります。"
    ],
    "newsDate": "2026-03-27",
    "date": "2026-03-28",
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
    "rating": 3.5,
    "reviewCategory": "cli",
    "category": "cli",
    "title": "Gemini CLI レビュー — Googleが放つ200万トークンの超大規模コンテキストCLI",
    "excerpt": "Google DeepMindが開発。Gemini 2.5 Proの200万トークンコンテキストで、大規模リポジトリを丸ごと解析。無料枠も充実。",
    "body": [
      "Google DeepMindがリリースしたGemini CLIは、Gemini 2.5 Proモデルの圧倒的なコンテキストウィンドウ（200万トークン）を武器に、大規模コードベースの一括解析を可能にするCLIツールです。",
      "オープンソースで提供され、Googleアカウントがあれば無料枠（1日1,000リクエスト）で利用開始できます。Google Cloud、Firebase、Vertex AIとのネイティブ統合により、Googleエコシステム内での開発体験が大幅に向上します。",
      "MCP（Model Context Protocol）にも対応しており、サードパーティツールとの連携も可能です。ただし、エージェント機能の成熟度ではClaude CodeやCursorにまだ一歩及ばない印象です。コンテキスト量で勝負する場面では強力な選択肢になるでしょう。"
    ],
    "newsDate": "2026-03-25",
    "date": "2026-03-28",
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
    "rating": 4.0,
    "reviewCategory": "cli",
    "category": "cli",
    "title": "OpenAI Codex — クラウド並列実行のAIコーディングエージェント",
    "excerpt": "OpenAIが満を持してリリースしたコーディングエージェント。クラウドサンドボックスで複数タスクを並列実行し、PRとして提出する新しいワークフロー。",
    "body": [
      "OpenAIのCodexは、ChatGPT上で動作するクラウドベースのAIコーディングエージェントです。開発者がタスクを指示すると、クラウド上のサンドボックス環境でコードの探索・修正・テストを自律的に実行し、結果をPull Requestとして提出します。",
      "最大の特徴は並列実行です。複数のタスクを同時にCodexに投げることができ、それぞれが独立したサンドボックスで実行されます。バグ修正、機能追加、テスト作成などを一度に並行して進められるのは大きな生産性向上につながります。",
      "o4-miniモデルをベースとし、コード理解と生成に最適化されています。ChatGPT Pro/Team/Enterpriseプランで利用可能で、API経由での利用にも対応予定です。ただし、ローカル環境での実行には対応しておらず、オフライン利用はできません。"
    ],
    "newsDate": "2026-03-22",
    "date": "2026-03-28",
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
    "type": "news",
    "category": "product",
    "title": "Cursor、Windsurf（Codeium）を買収完了 — AIエディタ市場の統合が加速",
    "excerpt": "Anysphere社がCodeium社のWindsurfを買収。Cascadeフロー技術をCursorに統合予定。AIエディタ市場の寡占化が進む。",
    "body": [
      "Anysphere社（Cursor開発元）は2026年3月、Codeium社が開発するAIエディタ「Windsurf」の買収を完了したと発表しました。買収額は非公開ですが、業界では数億ドル規模と推定されています。",
      "この買収により、CursorはWindsurfの独自技術「Cascade」フローを統合する計画です。Cascadeはタスクを段階的に分解して実行する技術で、複雑な変更を安全に進められる点が評価されていました。",
      "一方で、この統合によりAIエディタ市場の選択肢が減少することへの懸念も出ています。Windsurf単体の提供は当面継続されますが、長期的にはCursorへの一本化が予想されます。OSS陣営のZed AI、Void、PearAIへの注目が高まる可能性もあります。"
    ],
    "newsDate": "2026-03-20",
    "date": "2026-03-28",
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
    "rating": 4.5,
    "reviewCategory": "cli",
    "category": "cli",
    "title": "Claude Code レビュー — Anthropic のCLIエージェント徹底解説",
    "excerpt": "claudeコマンド1つでリポジトリ全体を読み込み、バグ修正からテスト実行、コミットまで自律的に行う。Opus 4.6の1Mコンテキストによる深い推論が、複雑なリファクタリングを可能にしている。",
    "body": [
      "**Claude Code** は **Anthropic** が提供するCLI型AIエージェントで、ターミナルから claude コマンドを実行するだけでプロジェクト全体のコンテキストを取得し、開発タスクを自律的に遂行する。ファイル編集、bashコマンド実行、Git操作、テスト実行までを一貫して処理でき、CLAUDE.md ファイルにプロジェクト固有のルールを記述することでチーム標準のワークフローを維持できる。",
      "主要な機能として、MCP（**Model Context Protocol**）サーバーへの接続による外部ツール・データソース連携、イベント駆動で前処理・後処理を差し込む Hooks、再利用可能なプロンプトテンプレートである Skills がある。Auto mode（研究プレビュー）を有効にするとユーザー確認なしで連続的にタスクを実行し、大規模なリファクタリングやマイグレーション作業を効率化できる。Opus 4.6 モデルの1Mコンテキストウィンドウにより、数百ファイル規模のリポジトリでもアーキテクチャレベルの判断が可能になっている。",
      "料金体系は3種類ある。Pro プラン（月額 $20）は一般的な開発タスクに十分な利用枠を提供し、Max プラン（月額 $100 または $200）はヘビーユーザー向けに拡張された利用枠と Fast Mode を含む。API 経由での利用も可能で、その場合はトークン単位の従量課金となる。Claude Code SDK を使えばカスタムエージェントの構築もでき、SOC 2 準拠によりエンタープライズ環境にも導入しやすい。",
      "コンテキスト理解の深さとエージェント的な自律性は現行CLIツールの中でも高い水準にある。一方で、大量のトークンを消費するためコストが膨らみやすい点、Auto mode がまだ研究プレビュー段階である点には注意が必要となる。チームでの利用では CLAUDE.md による規約共有と Hooks によるガードレールの組み合わせが実用上の鍵になる。"
    ],
    "primarySources": [
      {
        "title": "Claude Code Documentation",
        "site": "Anthropic",
        "url": "https://docs.anthropic.com/en/docs/claude-code/overview"
      }
    ],
    "newsDate": "2026-03-27",
    "date": "2026-03-28",
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
    "rating": 4.0,
    "reviewCategory": "cli",
    "category": "cli",
    "title": "Cursor CLI (Composer) レビュー — IDE一体型のAIコーディング環境",
    "excerpt": "IDE一体型でありながら、CLIモード（Composer）が強力。自然言語で伝えるだけで、関連ファイルを自動で見つけ出し、変更案を提示する。",
    "body": [
      "**Cursor** は **Anysphere** 社が開発する VS Code フォークベースのAIエディタで、Composer と呼ばれるエージェントモードを中核機能として備えている。Composer はプロジェクト全体をインデックスし、自然言語の指示から関連ファイルを自動的に特定して複数ファイルにまたがる変更を一括生成する。Cmd+K によるインライン編集との使い分けにより、小さな修正から大規模リファクタリングまで柔軟に対応できる。",
      "2026年に入り **Background Agent** 機能が追加され、バックグラウンドでの自律的タスク実行が可能になった。開発者がコードレビュー中に別のタスクを Agent に任せるといった並列ワークフローが実現する。モデル選択の自由度も高く、Sonnet 4.6、Opus 4.6、GPT-5.4 など複数モデルから切り替えられる。Windsurf（Codeium）買収により Cascade フロー技術の統合も進行中で、段階的なタスク分解による安全な実行が今後加わる見込みとなっている。",
      "料金プランは3段階構成で、Hobby プランは無料で基本的な補完と限定的な Composer 利用が可能。Pro プラン（月額 $20）では無制限の補完と十分な Agent 利用枠が付与される。Business プラン（月額 $40）は組織管理、SAML SSO、Privacy Mode を含み、コードがモデル学習に使用されないことが保証される。",
      "IDE との統合度の高さが Cursor の大きな利点で、エディタ上のコンテキスト（開いているファイル、ターミナル出力、Git diff）を自動的に活用できる。純粋な CLI ツールと比較するとターミナル単体での運用には向かないが、エディタ中心のワークフローを好む開発者にとっては生産性の向上幅が大きい。"
    ],
    "primarySources": [
      {
        "title": "Cursor",
        "site": "Cursor",
        "url": "https://cursor.com/"
      }
    ],
    "newsDate": "2026-03-15",
    "date": "2026-03-28",
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
    "rating": 3.5,
    "reviewCategory": "cli",
    "category": "cli",
    "title": "GitHub Copilot CLI レビュー — エンタープライズ対応のAI開発支援",
    "excerpt": "GitHubエコシステムとシームレスに統合。Copilot Coding Agentによる自律的なIssue対応が新たに追加。",
    "body": [
      "**GitHub Copilot** は **GitHub**（**Microsoft** 傘下）が提供するAI開発支援サービスで、CLI からは gh copilot コマンドを通じて利用できる。Copilot Chat によるターミナル上での対話型コーディング支援に加え、2026年には Agent mode が正式リリースされ、Issue の割り当てだけでAIが自律的にコードを書いて PR を作成する Copilot Coding Agent が利用可能になった。",
      "機能面では、コード補完、チャットベースの質問応答、PR の要約・レビュー支援、セキュリティ脆弱性スキャンなど幅広い領域をカバーしている。Agent mode では GitHub Actions と連携してCI/CD パイプライン上でのタスク実行にも対応する。VS Code、JetBrains、Neovim など主要エディタへの拡張も提供されており、CLI 単体にとどまらない統合的な開発体験を構成している。",
      "料金は Individual プラン（月額 $10）、Business プラン（月額 $19）、Enterprise プラン（月額 $39）の3段階。Business 以上では組織レベルのポリシー管理と SAML SSO に対応し、Enterprise では監査ログ、IP インデムニティ（知的財産補償）、ファインチューニングモデルが追加される。GitHub の既存契約に組み込める点は、大規模組織での導入障壁を下げている。",
      "GitHub エコシステムとの統合の深さはこのツール固有の強みであり、Issues・PR・Actions・Codespaces との連携は他のCLIツールでは再現しにくい。一方で、GitHub 外のプラットフォーム（GitLab、Bitbucket）での利用は限定的であり、モデル選択の自由度も Copilot が提供する範囲に限られる。GitHub 中心の開発チームにとっては導入効果が高い選択肢となる。"
    ],
    "primarySources": [
      {
        "title": "GitHub Copilot",
        "site": "GitHub",
        "url": "https://github.com/features/copilot"
      }
    ],
    "newsDate": "2026-03-10",
    "date": "2026-03-28",
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
    "rating": 4.0,
    "reviewCategory": "cli",
    "category": "cli",
    "title": "Aider レビュー — マルチモデル対応のOSS CLIツール",
    "excerpt": "複数ファイルの一括修正に特化したOSSツール。Gitとの親和性が高く、様々なLLMプロバイダーに対応。",
    "body": [
      "**Aider** は Paul Gauthier 氏が開発するオープンソースのAIコーディングCLIツールで、Apache 2.0 ライセンスのもと **GitHub** 上で公開されている。ツール自体は無料で利用でき、接続する LLM の API 利用料のみがコストとなる。pip install aider-chat でインストールし、ターミナルからリポジトリ内で aider コマンドを実行するだけで対話的なコーディングセッションが開始される。",
      "対応モデルの幅広さが特徴で、**OpenAI**（GPT-5.4）、**Anthropic**（Claude Opus 4.6 / Sonnet 4.6）、Google（Gemini）、Ollama 経由のローカルモデルなど主要プロバイダーをほぼ網羅している。Architect mode ではアーキテクト役のモデルが変更方針を策定し、エディタ役のモデルが実装するという二段階ワークフローを構成できる。repo-map 機能によりリポジトリ全体の構造をトークン効率よくモデルに伝達し、関連ファイルの特定精度を高めている。",
      "Git との統合が深く、変更ごとに自動コミットを生成し、意味のあるコミットメッセージを付与する。変更が意図と異なる場合は /undo コマンドで即座にロールバックできる。複数ファイルの同時編集にも対応しており、diff 形式と whole-file 形式を編集戦略として選択可能となっている。",
      "エンタープライズ向けの SSO や監査ログといった管理機能は備えていないため、組織での大規模導入には別途ガバナンスの仕組みが必要になる。API キーの管理も利用者自身の責任となる。一方で、モデルに依存しない柔軟性、OSS ならではの透明性、ゼロコスト導入という点は個人開発者や小規模チームにとって大きな利点であり、SWE-bench でも継続的に高いスコアを記録している。"
    ],
    "primarySources": [
      {
        "title": "Aider",
        "site": "GitHub",
        "url": "https://github.com/Aider-AI/aider"
      }
    ],
    "newsDate": "2026-03-03",
    "date": "2026-03-28",
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
    "rating": 3.0,
    "reviewCategory": "cli",
    "category": "cli",
    "title": "CodeBuff レビュー — ターミナル特化の新興CLIエージェント",
    "excerpt": "直感的なUIとDiff確認が特徴の新興CLI。スピードと精度のバランスに優れる。",
    "body": [
      "**CodeBuff** は2024年に登場したターミナル特化型のAIコーディングエージェントで、CLIから直接コードベースを操作する開発者をターゲットにしている。プロジェクトディレクトリ内で codebuff コマンドを実行すると対話セッションが開始され、自然言語の指示に基づいてファイルの作成・編集・削除を自律的に行う。",
      "ターミナル上で変更前後の Diff を視覚的に分かりやすく表示する点が特徴で、変更内容の確認と承認のフローがスムーズに設計されている。モデルの選択肢は複数あり、**Anthropic** の Sonnet 4.6 をデフォルトとしつつ、他のモデルへの切り替えにも対応している。マルチファイル編集やプロジェクト全体のコンテキスト理解にも対応し、小規模な修正から中規模のリファクタリングまで一通りのタスクをカバーする。",
      "料金は月額 $20 のサブスクリプション制で、利用枠内であればモデルの API 費用は含まれている。VS Code との連携機能も提供されており、ターミナルとエディタを行き来する開発スタイルにも対応可能。サービスとしてはアーリーステージにあり、料金体系や機能セットは今後変更される可能性がある。",
      "後発ツールとしてUXの洗練度に注力しており、初回セットアップの手軽さと操作の直感性では好評を得ている。一方で、MCP 対応やプラグインエコシステムといった拡張性の面では **Claude Code** や **Aider** と比較して発展途上にある。ターミナルベースのシンプルなワークフローを好み、セットアップの複雑さを避けたい開発者には適した選択肢となる。"
    ],
    "primarySources": [
      {
        "title": "CodeBuff",
        "site": "CodeBuff",
        "url": "https://codebuff.com/"
      }
    ],
    "newsDate": "2026-03-02",
    "date": "2026-03-28",
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
    "rating": 3.0,
    "reviewCategory": "cli",
    "category": "cli",
    "title": "Amazon Q Developer レビュー — AWS統合のAI開発支援ツール",
    "excerpt": "AWS環境の操作・構築に特化。インフラ構築からコード生成まで、AWSエコシステム内でのサポートを提供。",
    "body": [
      "**Amazon Q Developer** は **AWS** が提供するAI開発支援サービスで、旧 **CodeWhisperer** を発展的に統合して2024年に登場した。CLI（aws q コマンド）、VS Code 拡張、JetBrains プラグインなど複数のインターフェースから利用でき、コード補完、チャットベースの質問応答、コード変換、セキュリティスキャンといった機能を提供する。",
      "AWS サービスとの統合の深さが他のツールにない特徴で、Lambda 関数の生成、CloudFormation / CDK テンプレートの作成、IAM ポリシーの最適化など AWS インフラ関連のタスクに対して高い精度を発揮する。Java アプリケーションのバージョンアップグレード（Java 8 → 17 など）を自動化するコード変換機能も備えており、レガシーコードの近代化ユースケースに対応している。セキュリティスキャン機能は OWASP Top 10 を含む脆弱性パターンを検出し、修正案を提示する。",
      "料金は無料枠（Free Tier）と Pro プラン（月額 $19/ユーザー）の2段階。Free Tier ではコード補完とチャットの基本機能が利用でき、個人開発者であれば十分な水準にある。Pro プランではセキュリティスキャンの上限拡大、コード変換機能、組織レベルの管理機能が追加される。AWS の既存アカウントに紐づけて利用できるため、AWS を既に使っている組織では請求・管理の統合が容易になる。",
      "AWS エコシステム内での開発には大きな強みを持つ一方、AWS 以外のクラウドプラットフォーム（GCP、Azure）やオンプレミス環境での汎用的なコーディング支援としては、専用ツールと比べて優位性が薄れる。AWS を主要インフラとしている開発チームにとっては、インフラ操作とコーディング支援を一体化できる点が実務上の利点となる。"
    ],
    "primarySources": [
      {
        "title": "Amazon Q Developer",
        "site": "AWS",
        "url": "https://aws.amazon.com/q/developer/"
      }
    ],
    "newsDate": "2026-03-01",
    "date": "2026-03-28",
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
    "rating": 3.5,
    "reviewCategory": "cli",
    "category": "cli",
    "title": "Cline レビュー — 承認フロー付きのOSS AIエージェント",
    "excerpt": "オープンソースのVS Code拡張。ローカルモデル対応でプライバシーを確保しつつ、MCP連携で拡張性も高い。",
    "body": [
      "**Cline** はオープンソース（Apache 2.0）のAIコーディングエージェントで、主に **VS Code** 拡張として動作する。ファイルの作成・編集、ターミナルコマンドの実行、ブラウザ操作までを一貫して処理でき、各操作の実行前にユーザーの承認を求める「human-in-the-loop」設計が特徴となっている。GitHub 上で活発に開発が進んでおり、コミュニティ主導で機能拡張が続いている。",
      "モデル選択の自由度が高く、OpenAI、**Anthropic**、Google のクラウドAPIに加え、Ollama や LM Studio 経由のローカルモデルにも対応している。MCP（Model Context Protocol）サーバーへの接続をサポートしており、外部ツールやデータソースとの連携を通じて機能を拡張できる。カスタムインストラクションの設定により、プロジェクト固有のコーディング規約やワークフローをエージェントに伝達することも可能になっている。",
      "ツール自体は無料で、費用は接続する LLM の API 利用料のみとなる。ローカルモデルを使用する場合は完全に無償で運用でき、コードが外部に送信されないためプライバシーを重視する環境にも適する。セルフホスト構成が前提であり、SaaS 型のマネージドサービスは提供されていない。",
      "承認フローによる安全性と、MCP 対応による拡張性のバランスが Cline の強みとなっている。一方で、VS Code 拡張として動作するためエディタ外（純粋なターミナル環境）での利用には向かず、エンタープライズ向けの管理機能（SSO、監査ログ等）も備えていない。OSS コミュニティの活発さを活かしてカスタマイズしながら使いたい開発者に適した選択肢である。"
    ],
    "primarySources": [
      {
        "title": "Cline",
        "site": "GitHub",
        "url": "https://github.com/cline/cline"
      }
    ],
    "newsDate": "2026-02-28",
    "date": "2026-03-28",
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
    "rating": 3.5,
    "reviewCategory": "other",
    "category": "cli",
    "title": "Warp AI レビュー — AI内蔵のRust製モダンターミナル",
    "excerpt": "ターミナル自体にAIが組み込まれた新しいアプローチ。コマンド補完やエラー解析をターミナル内で直接提供。",
    "body": [
      "**Warp** は Rust で開発されたモダンターミナルアプリケーションで、AI機能をネイティブに組み込んでいる点が従来のターミナルエミュレータと異なる。自然言語でやりたいことを記述すると対応するシェルコマンドを生成し、エラーメッセージの解析やシェルスクリプトの作成もターミナル内で直接行える。macOS と Linux に対応しており、Windows 版は開発中となっている。",
      "**Warp Drive** と呼ばれるナレッジ共有機能では、頻繁に使うコマンドやワークフローをチーム内で共有・再利用できる。ターミナル出力がブロック単位で構造化されるため、過去のコマンド結果の参照や共有が容易になっている。Rust によるネイティブ実装のため描画性能が高く、大量の出力を伴うビルドログやログ解析時にも遅延が少ない。",
      "料金は個人利用向けの無料プランに加え、Team プラン（月額 $12/ユーザー）と Enterprise プランが用意されている。無料プランでもAIコマンド生成の基本機能は利用可能で、Team プラン以上で Warp Drive の共有機能や管理機能が追加される。Enterprise プランでは SSO、監査ログ、カスタムデプロイメントに対応する。",
      "ターミナル体験そのものを刷新するアプローチは独自性が高く、コマンドライン操作の頻度が高いインフラエンジニアや DevOps 担当者に適している。一方で、コードの直接編集やリファクタリングといったAIコーディングエージェントとしての機能は他の CLI ツールほど充実しておらず、あくまでターミナル操作の効率化に焦点を絞ったツールとして位置づけられる。"
    ],
    "primarySources": [
      {
        "title": "Warp",
        "site": "Warp",
        "url": "https://www.warp.dev/"
      }
    ],
    "newsDate": "2026-02-27",
    "date": "2026-03-28",
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
    "rating": 4.5,
    "reviewCategory": "editor",
    "category": "editor",
    "title": "Cursor レビュー — AIエディタの王者、Windsurf統合で盤石に",
    "excerpt": "VS Code フォークで最も人気のAIエディタ。Windsurf買収によるCascade統合とBackground Agentの追加でさらに進化。",
    "body": [
      "**Cursor** は **Anysphere** 社が開発する AI ネイティブのコードエディタで、**VS Code** のフォークとして構築されている。VS Code の拡張機能やキーバインドをそのまま引き継げるため、既存ユーザーの移行コストが低い。2023 年の初期リリース以降、AI 支援コーディングの需要拡大とともにユーザー数を伸ばし、2026 年 3 月時点では AI エディタ分野で広く使われている。",
      "主要機能は Composer（マルチファイル編集の対話的生成）、インライン編集（選択範囲を指示で書き換え）、Background Agent（バックグラウンドでの自律タスク実行）、そして Tab 補完の 4 つに大別される。Composer はプロジェクト横断のリファクタリングに、Background Agent はコードレビュー中の並行作業にそれぞれ向く。モデルは Sonnet 4.6 と Opus 4.6 を切り替えて利用でき、タスクの粒度に応じた使い分けが可能になっている。",
      "料金は Hobby（無料・機能制限あり）、Pro（月額 20 ドル）、Business（月額 40 ドル・管理機能付き）の 3 プランで構成される。無料枠でも補完と限定的な Composer 利用が可能だが、Background Agent や高頻度のモデル呼び出しには Pro 以上が必要になる。",
      "2026 年 3 月に Windsurf（旧 Codeium）の買収が完了し、Cascade フロー技術の統合が進行している。買収により Anysphere は AI エディタ市場で複数ブランドを抱える構図となった。Cursor 自体は引き続き単独製品として開発が続けられており、Cascade 由来の段階的タスク分解が今後どの程度取り込まれるかが注目点となる。"
    ],
    "primarySources": [
          {
                "title": "Cursor",
                "site": "Cursor",
                "url": "https://cursor.com/"
          }
    ],
    "newsDate": "2026-03-26",
    "date": "2026-03-28",
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
    "rating": 3.5,
    "reviewCategory": "editor",
    "category": "editor",
    "title": "Windsurf — Cursor傘下で継続提供、Cascadeフローが光るAIエディタ",
    "excerpt": "Anysphere社に買収されたが、単体提供は継続中。Cascadeフローによる段階的なコード生成が特徴。無料プランも維持。",
    "body": [
      "**Windsurf** はもともと **Codeium** というブランド名で AI コード補完サービスを提供していた企業が、エディタ製品としてリブランドしたものである。VS Code フォークをベースとし、コード補完だけでなく対話的なコード生成や編集支援まで一体化した環境を目指して開発された。2026 年 3 月に **Anysphere**（Cursor の親会社）による買収が完了し、現在は同社傘下で運営されている。",
      "中核機能は Cascade と呼ばれるマルチステップフローで、ユーザーの指示をタスク単位に分解し、ファイル読み取り・編集・ターミナル操作などを段階的に実行する。各ステップの差分をプレビューしてから適用する設計のため、大規模な変更でも意図しない書き換えを確認しやすい。補完機能は Codeium 時代から継続しており、反応速度に定評がある。",
      "料金体系は無料枠と Pro プラン（月額 15 ドル前後）の 2 層構成で、無料枠でも補完と限定的な Cascade 利用が可能になっている。バックエンドモデルは Sonnet 4.6 や GPT-5.4 など複数に対応し、プランに応じて利用可能なモデルと回数が変わる。Cursor（Pro 月額 20 ドル）より低価格帯に位置づけられている。",
      "Anysphere 傘下に入ったことで、長期的には Cursor への技術統合が進む可能性がある。現時点では Windsurf は単体製品として提供が継続されているが、ロードマップ上の独自機能追加がどこまで続くかは不透明である。新規に AI エディタを選ぶ場合、Cursor との機能重複と将来の統合計画を考慮したうえで判断する必要がある。"
    ],
    "primarySources": [
          {
                "title": "Windsurf",
                "site": "Windsurf",
                "url": "https://windsurf.com/"
          }
    ],
    "newsDate": "2026-03-18",
    "date": "2026-03-28",
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
    "rating": 3.0,
    "reviewCategory": "editor",
    "category": "editor",
    "title": "Zed AI — Rust製の超高速AIエディタ",
    "excerpt": "Rust製のネイティブパフォーマンス。リアルタイムコラボレーション機能も内蔵した次世代エディタ。",
    "body": [
      "**Zed** は **Zed Industries** が開発する Rust 製のネイティブコードエディタで、起動速度とファイル操作のレスポンスに重点を置いて設計されている。Electron ベースのエディタと異なり、GPU レンダリングを活用した独自の UI フレームワーク上で動作するため、大規模プロジェクトでも描画の遅延が生じにくい。オープンソース（GPL ライセンス）で公開されており、リアルタイムコラボレーション機能も内蔵している。",
      "AI 機能としては、エディタ内蔵のアシスタントパネルとインライン生成の 2 つが用意されている。アシスタントパネルではチャット形式でコードの説明や生成を依頼でき、インライン生成では選択範囲に対して直接書き換え指示を出せる。バックエンドモデルは **Anthropic** の Sonnet 4.6 のほか、OpenAI や Ollama 経由のローカルモデルなど複数に対応しており、設定から切り替えが可能になっている。",
      "エディタ本体は無料で利用でき、AI 機能は月額 15 ドルのサブスクリプションで提供される。自前の API キーを持ち込めば課金なしで AI 機能を使うこともできる。料金面では Cursor の Pro プラン（月額 20 ドル）より低い水準に位置する。",
      "AI 機能はまだ成熟途上にあり、Cursor の Composer や Background Agent に相当するマルチファイル横断の自律編集機能は現時点で備わっていない。エディタとしての速度と安定性は高い評価を得ているものの、AI 支援の深さではフォーク系エディタに及ばない面がある。Rust ベースのパフォーマンスを重視しつつ、AI 機能の拡充を待てるユーザーに向いている。"
    ],
    "primarySources": [
          {
                "title": "Zed",
                "site": "Zed",
                "url": "https://zed.dev/"
          }
    ],
    "newsDate": "2026-03-12",
    "date": "2026-03-28",
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
    "rating": 4.0,
    "reviewCategory": "editor",
    "category": "editor",
    "title": "VS Code + Copilot — 定番エディタのAI進化",
    "excerpt": "世界で最も使われるエディタ。GitHub Copilotとの統合で強力なAI支援。Coding Agentの追加でさらに進化。",
    "body": [
      "**Visual Studio Code** は **Microsoft** が開発するオープンソースのコードエディタで、2015 年のリリース以降、開発者向けエディタとして広く普及している。Electron ベースのクロスプラットフォーム設計と、拡張機能マーケットプレイスによる柔軟なカスタマイズ性が基盤となっている。Cursor や Windsurf など複数の AI エディタが VS Code のフォークとして構築されていることからも、エコシステムの規模がうかがえる。",
      "AI 機能の中核は **GitHub Copilot** との統合にある。コード補完、チャットパネルでの対話的な質問応答、インラインでの編集指示に加え、2026 年にはエージェントモード（Agent Mode）が導入された。エージェントモードではターミナル操作やファイル編集を含む複数ステップのタスクを自律的に実行でき、Copilot Coding Agent として GitHub Issue からの自動作業にも対応している。",
      "エディタ本体は無料で利用できる。Copilot は無料枠（月あたりの利用回数制限あり）、Individual プラン（月額 10 ドル）、Business プラン（月額 19 ドル）の構成となっている。無料枠でも補完とチャットの基本機能は使えるため、導入の敷居は低い。",
      "拡張機能エコシステムの厚みは他のエディタと比較して突出しており、言語サポート、デバッガ、リンターなど開発に必要なツールチェーンの大半が拡張機能として揃っている。一方、AI 支援の統合度では Cursor のような専用設計のエディタに比べると、機能の連携がやや分散的になる傾向がある。既存の開発環境を維持しつつ AI 支援を加えたい場合に適した選択肢である。"
    ],
    "primarySources": [
          {
                "title": "Visual Studio Code",
                "site": "Microsoft",
                "url": "https://code.visualstudio.com/"
          }
    ],
    "newsDate": "2026-03-08",
    "date": "2026-03-28",
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
    "rating": 2.5,
    "reviewCategory": "editor",
    "category": "editor",
    "title": "Void — プライバシー重視のOSSエディタ",
    "excerpt": "ローカルLLMとクラウドLLMの両方に対応するオープンソースエディタ。プライバシー重視の開発者に人気。",
    "body": [
      "**Void** はプライバシーを重視する開発者向けに設計されたオープンソースの AI コードエディタで、**VS Code** のフォークとして構築されている。テレメトリ（利用状況の外部送信）を一切行わない設計方針を掲げており、コードや操作履歴が開発者の環境外に出ないことを前提としている。GitHub 上で開発が進められており、ソースコードは公開されている。",
      "AI 機能はローカル LLM とクラウド LLM の両方に対応している。Ollama や LM Studio などを経由してローカルモデルを接続すれば、ネットワーク通信なしで補完やチャットを利用できる。クラウド側では Anthropic や OpenAI の API キーを設定することで外部モデルも使える構成になっている。",
      "料金は完全無料で、OSS ライセンスのもと配布されている。商用利用の制限もなく、企業内での導入も可能である。ただし、有償サポートやマネージドサービスは現時点で提供されていない。",
      "開発は初期段階にあり、Cursor や Windsurf と比較すると機能の網羅性や安定性には差がある。Composer に相当するマルチファイル編集や自律エージェント機能は未実装で、日常的な開発ツールとして使うにはまだ制約が多い。プライバシー要件が厳しく、ローカル完結の AI 支援を優先するユースケースに限定して検討する段階にある。"
    ],
    "primarySources": [
          {
                "title": "Void",
                "site": "GitHub",
                "url": "https://github.com/voideditor/void"
          }
    ],
    "newsDate": "2026-03-02",
    "date": "2026-03-28",
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
    "rating": 2.5,
    "reviewCategory": "editor",
    "category": "editor",
    "title": "PearAI — コミュニティドリブンのOSSエディタ",
    "excerpt": "VS Codeベースのオープンソースエディタ。AIチャットとインライン編集に特化。",
    "body": [
      "**PearAI** はコミュニティ主導で開発されているオープンソースの AI コードエディタで、**VS Code** のフォークをベースとしている。既存の VS Code 拡張機能やテーマをそのまま利用でき、AI チャットとインライン編集を中心に据えたシンプルな設計を志向している。GitHub 上でソースコードが公開されており、コントリビューションを受け付けている。",
      "AI 機能は対話型チャットパネルとインラインコード生成の 2 つが主軸となっている。チャットパネルではコードの説明や修正案の提示を依頼でき、インライン生成では選択範囲に対する直接的な書き換えが可能になっている。バックエンドには Sonnet 4.6 が採用されており、モデルの切り替えにも対応している。",
      "料金は月額 15 ドルのサブスクリプション制で、無料枠は限定的に用意されている。OSS プロジェクトとしてセルフホスト利用も技術的には可能だが、公式には有料プランの利用が想定されている。",
      "開発は初期段階にあり、Cursor の Composer や Background Agent のようなマルチファイル横断の自律編集機能は備わっていない。フォーク元の VS Code に対する独自の差別化要素はまだ限られており、今後のロードマップ次第で評価が変わり得る。コミュニティ参加型の OSS エディタに関心があるユーザー向けの選択肢である。"
    ],
    "primarySources": [
          {
                "title": "PearAI",
                "site": "PearAI",
                "url": "https://trypear.ai/"
          }
    ],
    "newsDate": "2026-03-01",
    "date": "2026-03-28",
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
    "rating": 3.0,
    "reviewCategory": "editor",
    "category": "editor",
    "title": "Trae — ByteDance発のAIエディタ、Builder Modeが話題",
    "excerpt": "ByteDance社開発。Builder Modeで自然言語からアプリ全体を生成。無料で利用可能。",
    "body": [
      "**Trae** は **ByteDance**（TikTok 親会社）が開発する AI コードエディタで、VS Code ベースの構造を持つ。2025 年に海外市場向けとしてリリースされ、無料で利用できる点を前面に打ち出している。国内版（中国向け）は別ブランドで展開されており、Trae は主に英語圏・日本を含むグローバル版という位置づけになっている。",
      "特徴的な機能は Builder Mode で、自然言語でアプリの仕様を記述するとプロジェクト全体のひな型を自動生成する。通常のチャットやインライン編集にも対応しており、Claude（Sonnet 4.6）や GPT-5.4 など外部モデルを無料枠内で利用できる。独自モデル Doubao もバックエンドの選択肢に含まれている。",
      "料金は無料プランが中心で、Claude や GPT-5.4 を含むモデルへのアクセスが課金なしで提供されている。有料プランの詳細は流動的だが、無料枠の範囲が広いため個人利用では費用が発生しにくい構成になっている。",
      "ByteDance が中国に本拠を置く企業であることから、データの取り扱いや送信先に関する懸念が一部で指摘されている。プライバシーポリシーではコード内容の収集範囲について記載があるが、企業のセキュリティ基準によっては導入判断に影響し得る。機能面では Builder Mode の生成品質が他のエディタとの差別化要素になっており、プロトタイピング用途では検討に値する。"
    ],
    "primarySources": [
          {
                "title": "Trae",
                "site": "Trae",
                "url": "https://trae.ai/"
          }
    ],
    "newsDate": "2026-02-28",
    "date": "2026-03-28",
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
    "newsDate": "2026-03-28",
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
    "category": "media",
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
    "newsDate": "2026-03-28",
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
    "type": "news",
    "category": "cli",
    "title": "Claude Code「auto-fix in the cloud」— CI 失敗と PR コメントをクラウドで自動対応",
    "excerpt": "2026-03-27、PM の Noah Zweben 氏が発表。Web/モバイルセッションが PR をリモートでフォローし green 化を目指す。GitHub Actions では anthropics/claude-code-action の ci-failure ワークフロー例あり。",
    "body": [
      "2026年3月27日、Claude Code のプロダクトマネージャー Noah Zweben 氏が X（旧 Twitter）で「Claude Code auto-fix — in the cloud」を発表した、と複数メディアが伝えています。要旨は、Web / Mobile の Claude Code セッションがプルリクエストを自動でフォローし、CI の失敗の解析・修正の push、レビューコメントへの対応などを、ローカル PC が閉じた状態でもクラウド側で続行できるようにする、というものです。一次ソースは当該投稿・公式の追随ドキュメントを参照してください。",
      "開発体験としては「PR を出したあと CI が落ちるたびに PC を開き直してログを読む」という往復を減らし、離席中に修正と再実行のサイクルを任せる方向性です。権限モードの Auto mode（`auto`）は手元セッションのツール承認挙動の話であり、名称が似ていても問題ドメインが異なります。",
      "GitHub Actions 連携では `anthropics/claude-code-action` に ci-failure ワークフロー例が追加される予定とされており、CI 失敗時に自動的に Claude Code がエラーログを読んで修正 commit を push する流れが想定されています。企業ユーザーには「開発者が離席中も PR が自律的に前進する」体験を提供する狙いがあります。",
      "現時点ではプレビュー段階であり、利用条件・料金・対応リポジトリ管理ツールの詳細は公式ドキュメントを確認してください。Auto mode（CLI 権限制御）との混同を避けるため、Anthropic は今後ドキュメントで名称を整理する方針です。"
    ],
    "newsDate": "2026-03-27",
    "date": "2026-03-28",
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
    "newsDate": "2026-03-13",
    "date": "2026-03-28",
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
    "newsDate": "2026-03-03",
    "date": "2026-03-28",
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
    "newsDate": "2026-03-04",
    "date": "2026-03-28",
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
    "category": "model",
    "title": "ARC-AGI-3 公開 — インタラクティブ環境でフロンティアAIが0.26%、人間は100%",
    "excerpt": "2026年3月25日、ARC Prize Foundation が ARC-AGI-3 を公開。静的グリッドを廃し、ビデオゲーム風のインタラクティブ環境1,000超で AI エージェントの適応推論を評価。GPT-5.4・Claude・Gemini などのフロンティアモデルは1%未満にとどまり、知能評価の新たな壁が示された。",
    "body": [
      "ARC Prize Foundation は2026年3月25日、ARC-AGI-3 を正式公開しました。François Chollet が2019年に提唱した ARC（Abstraction and Reasoning Corpus）の三世代目にあたり、前世代の静的グリッドパズルとは根本的に異なる設計です。",
      "ARC-AGI-3 の評価環境はビデオゲーム風のインタラクティブ環境150種・1,000レベル超で構成されます。エージェントはゲームの説明・ルール・勝利条件を一切与えられず、視覚的な状態を観察しながら行動を取り、結果を見て「何をすべきか」を自分で発見しなければなりません。記憶・暗記ではなくリアルタイムの適応推論が要求される設計です。",
      "プレビュー評価の結果、フロンティアAIの平均スコアは0.26%にとどまりました。人間のベースラインは100%（目標スコア）です。プレビュー段階での最高スコアはTufa Labs（StochasticGoose名義）が記録した12.58%で、残りの応募は軒並み1%台以下でした。GPT-5.4・Claude Opus 4.6・Gemini 3.1 Pro も同水準です。",
      "ARC Prize 2026 は合計賞金200万ドル超の三トラック制で運営されます。ARC-AGI-3 トラックのほか、従来型の ARC-AGI-2 トラックも並行。マイルストーン締切は6月30日・9月30日で、最終締切は2026年11月2日です。",
      "研究者コミュニティでは「GPT系もClaude系も同じく1%以下というのは、現行のLLMアーキテクチャが適応推論ではなく記憶・パターンマッチングに依拠していることを再確認する結果」との見方が多く出ています。ARC-AGI シリーズは AIの知能測定の方向性を定義してきた存在であり、ARC-AGI-3 の登場によりエージェント評価の基準軸が変わる可能性があります。"
    ],
    "newsDate": "2026-03-25",
    "date": "2026-03-28",
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
    "category": "regulation",
    "title": "Anthropic、ペンタゴンのサプライチェーン指定差し止めに成功 — 連邦裁判所が暫定差止命令",
    "excerpt": "2026年3月26日、サンフランシスコ連邦地裁の Rita Lin 判事が Anthropic の申請を認め、国防総省（DoD）による「サプライチェーンリスク」指定を暫定差し止め。「修正第一条違反の報復」と判断。Anthropic は自律兵器・大規模監視への利用を拒否したことが発端。",
    "body": [
      "米連邦地裁（サンフランシスコ）の Rita Lin 判事は2026年3月26日、Anthropic の申請を認める暫定差止命令を発しました。国防総省（DoD）が Anthropic を「サプライチェーンリスク」に指定した措置を、命令が有効な限り執行できなくなります。判事は「公の場での批判に対する政府の報復という典型的な修正第一条違反」と明記しました。",
      "経緯は2025年7月まで遡ります。Anthropic はペンタゴンと2億ドルの契約を締結し、DoD の GenAI.mil プラットフォームへの Claude 統合を交渉しました。しかし DoD が「完全自律兵器への使用」と「国内大規模監視」を契約の前提として要求したことで交渉が決裂。Anthropic はこれらが自社の利用ポリシーに違反するとして拒否しました。",
      "これを受けて Pete Hegseth 国防長官は2026年2月末に Anthropic を「サプライチェーンリスク」に指定、続いてトランプ大統領が Truth Social で連邦機関に Anthropic 製品の即時利用停止と6ヵ月の段階廃止を命じました。DoD は3月初旬に Anthropic へ正式通知を送達しました。",
      "3月24日の審問では Lin 判事が DoD 側の弁護士に「その基準はかなり低いようだが」と問い詰め、「Anthropic を骨抜きにしようとしているように見える」と発言しました。判事はその2日後に差止命令を発し、Anthropic の修正第一条に基づく主張を認容しました。",
      "業界への影響は広範です。OpenAI・Google DeepMind の従業員30名超が Anthropic を支持する声明を共同提出し、AI 企業の政府との利用条件交渉がどこまで企業側の倫理ポリシーで保護されるかという先例が形成されつつあります。Anthropic は現段階で企業向けシェアを拡大しており、新規 AI 調達での Claude 採用率が約70%との分析もあります。"
    ],
    "newsDate": "2026-03-26",
    "date": "2026-03-28",
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
    "newsDate": "2026-03-19",
    "date": "2026-03-28",
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
    "newsDate": "2026-03-17",
    "date": "2026-03-28",
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
    "newsDate": "2026-03-24",
    "date": "2026-03-28",
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
  },
  {
    "id": "mcp-v2-spec-launch-2026",
    "type": "news",
    "category": "cli",
    "title": "MCP v2 仕様リリース — Streamable HTTP・OAuth 2.1・JSON-RPC バッチで本番投入へ",
    "excerpt": "3月26日、Model Context Protocol の第2版仕様が公開された。HTTP+SSE を置き換える Streamable HTTP トランスポート、OAuth 2.1 認可フレームワーク、JSON-RPC バッチ、ツールアノテーションなどが盛り込まれ、エンタープライズ本番環境での採用障壁を大幅に下げる。OpenAI・Microsoft も正式サポートを表明。",
    "body": [
      "2026年3月26日、**Model Context Protocol（MCP）** の第2版仕様がリリースされました。2025年11月の初版公開以降、9,700万インストールを超えるエコシステムに成長した MCP が、本番環境向けの重要課題に対処した形です。",
      "最大の変更点は **Streamable HTTP トランスポート**です。初版の HTTP+SSE 構成を一本化し、双方向のリアルタイム通信を HTTP 上で実現します。プロキシ・ロードバランサとの互換性が向上し、企業ネットワーク内でのデプロイがスムーズになります。",
      "認可面では **OAuth 2.1 ベースのフレームワーク**が標準化されました。リモート MCP サーバーに対し、認可サーバーへのリダイレクト、PKCE 付きフロー、スコープ付きトークンの発行・検証が仕様レベルで定義され、「各サーバーが独自認証を実装する」時代からの脱却を図ります。",
      "パフォーマンス面では **JSON-RPC バッチング**が導入されました。複数のツール呼び出しを 1 リクエストにまとめて送信でき、エージェントが多数のツールを高速に叩くユースケースでのレイテンシとオーバーヘッドを削減します。",
      "**ツールアノテーション**も新設され、ツールの振る舞い（副作用の有無、冪等性、推定コストなど）をリッチメタデータとして記述できるようになりました。エージェントがツール選択をより賢く行うための基盤として機能します。",
      "同日、OpenAI の Sam Altman が MCP への全面的なサポートを表明し、Microsoft も Playwright-MCP サーバーをローンチするなどエコシステムの勢いは加速しています。エンタープライズ向けには SurePath AI が MCP ポリシーコントロールを3月12日に発表しており、ガバナンス層も整備が進んでいます。",
      "開発者向けの実務ポイントとしては、既存の stdio ベースのローカルサーバーは引き続き動作しますが、リモートサーバーを公開する場合は Streamable HTTP + OAuth 2.1 への移行が推奨されます。仕様の詳細は公式ドキュメントとロードマップ記事を正としてください。"
    ],
    "newsDate": "2026-03-26",
    "date": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "9分",
    "tags": [
      "MCP",
      "プロトコル",
      "OAuth",
      "エージェント",
      "OpenAI",
      "Microsoft",
      "エンタープライズ"
    ],
    "features": [
      "Streamable HTTP トランスポート",
      "OAuth 2.1 認可フレームワーク",
      "JSON-RPC バッチング",
      "ツールアノテーション"
    ],
    "primarySources": [
      {
        "title": "The 2026 MCP Roadmap",
        "site": "Model Context Protocol Blog",
        "url": "http://blog.modelcontextprotocol.io/posts/2026-mcp-roadmap/"
      },
      {
        "title": "The open source Model Context Protocol was just updated — here's why it's a big deal",
        "site": "VentureBeat",
        "url": "https://venturebeat.com/ai/the-open-source-model-context-protocol-was-just-updated-heres-why-its-a-big-deal"
      },
      {
        "title": "MCP Specification — Roadmap",
        "site": "Model Context Protocol",
        "url": "https://modelcontextprotocol.io/development/roadmap"
      },
      {
        "title": "Everything your team needs to know about MCP in 2026",
        "site": "WorkOS",
        "url": "https://workos.com/blog/everything-your-team-needs-to-know-about-mcp-in-2026"
      }
    ]
  },
  {
    "id": "anthropic-mythos-cyber-impact-2026",
    "type": "news",
    "category": "model",
    "title": "Anthropic Mythos リーク続報 — サイバーセキュリティ株急落と業界インパクト",
    "excerpt": "3月27日の Claude Mythos リーク報道を受け、CrowdStrike −7%、Palo Alto Networks −6% など主要セキュリティ銘柄が軒並み下落。草稿に記載されたサイバー能力の記述が市場に衝撃を与えた経緯と、冷静な読み方を整理。",
    "body": [
      "Anthropic の「Claude Mythos」に関する内部草稿リークの続報として、3月28日の米国市場でサイバーセキュリティ関連株が大きく下落しました。報道によれば、CrowdStrike が約7%、Palo Alto Networks が約6%、Zscaler が約4.5%、Okta・SentinelOne・Fortinet が各3%前後の下げを記録しています。",
      "市場の反応は、リーク草稿に含まれるとされるサイバーセキュリティ能力に関する記述がトリガーです。報道によると、草稿には Mythos が「脆弱性を発見・悪用する能力において現行のあらゆる AI モデルをはるかに凌駕する」旨の記載があり、「防御側の努力を上回るペースで脆弱性を突くモデルの波が来る」という警告的な文脈も伝えられています。",
      "ただし、これはあくまで**未公開の内部草稿**上の文言であり、第三者による再現検証や独立ベンチマークは存在しません。リーク文書のスコアや能力記述を額面どおりに受け取って投資判断やセキュリティ方針を変更するのは時期尚早です。",
      "Anthropic 側は既報のとおり、能力面でステップチェンジ級のモデルを限定環境で試験中であることを認めつつ、一般提供には安全評価とガバナンスを踏まえた段階的アプローチを取ると繰り返しています。正式な製品ロードマップ、API モデル ID、価格、利用規約は公式発表を待つ必要があります。",
      "セキュリティ業界にとっての本質的な問い — AI が攻撃側・防御側の非対称性をどう変えるか — は Mythos に限らず進行中の論点です。むしろ注目すべきは、今回の株価反応が**リーク草稿の断片**だけで発生した点であり、AI モデル能力に関する情報管理と市場コミュニケーションの課題を浮き彫りにしています。"
    ],
    "newsDate": "2026-03-28",
    "date": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": [
      "Anthropic",
      "Claude",
      "Mythos",
      "サイバーセキュリティ",
      "株式市場",
      "リーク",
      "業界動向"
    ],
    "primarySources": [
      {
        "title": "Cybersecurity stocks plunge as Anthropic's 'Claude Mythos' leak sparks AI fear",
        "site": "Investing.com",
        "url": "https://ca.investing.com/news/stock-market-news/cybersecurity-stocks-plunge-as-anthropics-claude-mythos-leak-sparks-ai-fear-4537128"
      },
      {
        "title": "Anthropic's massive 'Claude Mythos' leak sends software stocks tumbling",
        "site": "CoinDesk",
        "url": "https://www.coindesk.com/markets/2026/03/27/anthropic-s-massive-claude-mythos-leak-reveals-a-new-ai-model-that-could-be-a-cybersecurity-nightmare"
      },
      {
        "title": "Anthropic leak reveals new model 'Claude Mythos' with dramatically higher scores",
        "site": "The Decoder",
        "url": "https://the-decoder.com/anthropic-leak-reveals-new-model-claude-mythos-with-dramatically-higher-scores-on-tests-than-any-previous-model/"
      }
    ]
  }
];

const NEWS_YMD = /^\d{4}-\d{2}-\d{2}$/;

/**
 * ニュースの「世に出た日」（東京カレンダーで比較）。newsDate があれば優先、なければ date。
 */
export function getArticleNewsYmd(a) {
  if (a?.newsDate && NEWS_YMD.test(String(a.newsDate))) return String(a.newsDate);
  if (a?.date && NEWS_YMD.test(String(a.date))) return String(a.date);
  return "";
}

/**
 * サイト表示・フィード生成の「本日」YYYY-MM-DD（Asia/Tokyo）。
 * 更新のたびに定数を繰り上げず、実行時点の日付を使う。
 */
export function getSiteTodayYmd() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Tokyo",
  }).format(new Date());
}

export const SITE_NAME = "AI開発ツール最新情報";
export const SITE_DESCRIPTION = "Claude Code・Cursor・Codex・Copilot の最新ニュースとガイドを日本語で";

/** 記事の category キー → 一覧・詳細のバッジ用 */
export const CATEGORIES = {
  special: { label: "特集", color: "#d97706" },
  model: { label: "モデル・API", color: "#2563eb" },
  cli: { label: "CLI・エージェント", color: "#7c3aed" },
  editor: { label: "エディタ", color: "#0891b2" },
  data: { label: "データ・RAG", color: "#059669" },
  product: { label: "プロダクト", color: "#0ea5e9" },
  media: { label: "メディア生成", color: "#db2777" },
  regulation: { label: "社会・規制", color: "#b91c1c" },
};

/** レビュー記事の星表示（プレーンテキスト） */
export function renderStars(rating) {
  if (rating == null || Number.isNaN(Number(rating))) return "";
  const n = Math.round(Number(rating));
  const filled = Math.min(5, Math.max(0, n));
  return `${"★".repeat(filled)}${"☆".repeat(5 - filled)}`;
}
