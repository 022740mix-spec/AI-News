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
    "id": "cursor-composer-2-kimi-2026",
    "type": "news",
    "category": "editor",
    "title": "Cursor Composer 2 の正体 — Kimi K2.5 ベースの独自モデル、API 解析で判明",
    "excerpt": "Cursor の最新コーディングモデル Composer 2 が、中国 Moonshot AI のオープンウェイトモデル Kimi K2.5 をベースに追加学習して構築されたことが判明した。開発者が API トラフィックを解析し、モデル ID が kimi-k2p5 であることを発見。Cursor は「ベースモデルの言及漏れ」を認め、Moonshot AI は公式に支持を表明した。",
    "body": [
      "2026年3月、Cursor が発表した独自コーディングモデル Composer 2 が、Moonshot AI のオープンウェイトモデル Kimi K2.5 をベースに構築されていたことが判明した。開発者が Cursor の API トラフィックを解析したところ、モデル識別子が「kimi-k2p5-rl-0317-s515-fast」であることが確認され、Kimi K2.5 に強化学習（RL）を追加して作られたモデルであることが明らかになった。",
      "Cursor の開発者教育担当 VP Lee Robinson は、Kimi K2.5 ベースであることを認め「ブログ投稿の段階で Kimi ベースであることに言及しなかったのはミスだった」と述べた。Robinson によると、最終モデルの計算コストのうち Kimi K2.5 ベースの事前学習から来る部分は約1/4で、残りの3/4は Cursor 独自のトレーニング（継続事前学習と大規模 RL）に由来する。モデルの提供は Fireworks AI との正規の商用パートナーシップを通じて行われている。",
      "Moonshot AI はこの件に対して公式に支持を表明し「Kimi K2.5 が基盤を提供できたことを誇りに思う」「Cursor の継続事前学習と大規模 RL トレーニングを支持する」とコメントした。オープンウェイトモデルが商用製品の基盤として活用される先行事例として注目される。",
      "Composer 2 のベンチマークスコアは CursorBench 61.3、Terminal-Bench 2.0 で 61.7、SWE-Bench Multilingual で 73.7%。Claude Opus 4.6（CursorBench 58.2）を上回る一方、GPT-5.4（Terminal-Bench 75.1%）には及ばない。前世代の Composer 1.5（CursorBench 44.2）からは約17ポイントの大幅な改善。料金は入力 $0.50 / 出力 $2.50（1M トークンあたり）で、Opus 4.6 と比べて大幅に低コスト。",
      "この件は、AI エディタ企業がオープンウェイトモデルをベースに独自モデルを構築するトレンドの象徴でもある。[Kimi K2.5](?a=kimi-k25-moonshot-2026) 自体が SWE-Bench Verified 76.8% というフロンティア級のコーディング性能を持つため、その上に用途特化の RL を重ねることで、汎用モデルに匹敵するコーディング専用モデルを低コストで構築できることが実証された。透明性の観点では、ベースモデルの出自を明示する重要性も浮き彫りになった。"
    ],
    "newsDate": "2026-03-22",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": ["Cursor", "Composer 2", "Kimi K2.5", "Moonshot AI", "エディタ", "モデル", "オープンウェイト"],
    "heroScope": "none",
    "primarySources": [
      { "title": "Cursor admits its new coding model was built on top of Moonshot AI's Kimi", "site": "TechCrunch", "url": "https://techcrunch.com/2026/03/22/cursor-admits-its-new-coding-model-was-built-on-top-of-moonshot-ais-kimi/" },
      { "title": "Introducing Composer 2", "site": "Cursor", "url": "https://cursor.com/blog/composer-2" },
      { "title": "Composer 2 Technical Report", "site": "Cursor Research", "url": "https://cursor.com/resources/Composer2.pdf" },
      { "title": "Kimi K2.5 Tech Blog", "site": "Moonshot AI", "url": "https://www.kimi.com/blog/kimi-k2-5" }
    ],
    "charts": [{
      "afterParagraph": 3,
      "title": "Composer 2 ベンチマーク比較（公式発表値）",
      "subtitle": "CursorBench は Cursor 独自指標。Terminal-Bench 2.0 は複数社が採用するターミナル操作ベンチマーク",
      "unit": "スコア",
      "maxValue": 80,
      "bars": [
        { "label": "GPT-5.4", "value": 75.1, "color": "#10b981" },
        { "label": "Composer 2", "value": 61.7, "color": "#7c3aed" },
        { "label": "Opus 4.6", "value": 58.0, "color": "#f59e0b" },
        { "label": "Composer 1.5", "value": 47.9, "color": "#94a3b8" }
      ]
    }]
  },
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
      "オープンウェイトで公開されており、Hugging Face からダウンロード可能。エージェント機能ではスウォームモードに対応し、複数エージェントの協調動作でさらに性能が向上する（BrowseComp で78.4%）。中国発のモデルが欧米のフロンティアモデルと肩を並べる状況が鮮明になっている。2026年3月には [Cursor が Kimi K2.5 をベースに独自モデル Composer 2 を構築](?a=cursor-composer-2-kimi-2026)したことが判明し、オープンウェイトモデルの商用活用事例としても注目されている。"
    ],
    "charts": [{
      "afterParagraph": 1,
      "title": "SWE-Bench スコア（公式発表値）",
      "subtitle": "各社が公式に発表したコーディング能力スコアのみ掲載。Kimi K2.5・KAT-Coder は SWE-Bench Verified、Composer 2 は SWE-Bench Multilingual（指標が異なるため直接比較には注意）",
      "unit": "%",
      "maxValue": 85,
      "bars": [
        { "label": "Kimi K2.5", "value": 76.8, "color": "#f59e0b" },
        { "label": "Composer 2", "value": 73.7, "color": "#7c3aed" },
        { "label": "KAT-Coder V2", "value": 73.4, "color": "#14b8a6" }
      ]
    }],
    "newsDate": "2026-01-27",
    "date": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "3分",
    "tags": ["Moonshot AI", "Kimi", "モデル", "オープンウェイト", "MoE", "Cursor"],
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
    "charts": [{
      "afterParagraph": 1,
      "title": "PinchBench スコア（MiniMax 公式発表値）",
      "subtitle": "MiniMax が発表した比較データのみ掲載",
      "unit": "%",
      "maxValue": 95,
      "bars": [
        { "label": "GPT-5.4", "value": 86.4, "color": "#10b981" },
        { "label": "GLM-5", "value": 86.4, "color": "#ef4444" },
        { "label": "M2.7", "value": 86.2, "color": "#ec4899" }
      ]
    }],
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
    "charts": [{
      "afterParagraph": 1,
      "title": "TurboQuant による改善効果",
      "subtitle": "NVIDIA H100 GPU での測定結果",
      "unit": "x",
      "maxValue": 10,
      "bars": [
        { "label": "速度向上", "value": 8, "color": "#3b82f6" },
        { "label": "メモリ削減", "value": 6, "color": "#10b981" },
        { "label": "精度維持", "value": 10, "color": "#6366f1" }
      ]
    }],
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
      "MCP（Model Context Protocol）のリモートサーバー対応により、ローカルに npm パッケージをインストールする必要がなくなった点が大きい。日本の SaaS 企業が公式に MCP リモート版を提供する先行事例として注目される。freee は今後もハッカソンの開催を予定している。MCP を使った開発ワークフローの全体像は [MCP 活用実践ガイド](?a=mcp-practical-guide-2026)を参照。"
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
      "どのレベルでも共通するのは、==最初に全部揃えようとしないこと==。チャットで慣れてからエディタ統合に進み、必要になったら CLI を導入する段階的なアプローチが結局いちばん速い。より詳しい用途別の組み合わせは[用途別おすすめマトリクス](?a=usecase-recommendation-matrix-2026)を参照。"
    ],
    "date": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": ["バイブコーディング", "入門", "ツール比較", "Claude", "Cursor", "Claude Code"],
    "heroScope": "none",
    "primarySources": [
      { "title": "Claude Code Documentation", "site": "Anthropic", "url": "https://code.claude.com/docs/en/overview" },
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
      "選び方の目安: 個人でフル機能なら Claude Code、クラウド並列なら Codex、大規模コンテキストなら Gemini CLI、OSS・マルチモデルなら Aider、企業統制なら Copilot CLI。エディタ側の比較は[AI エディタ横断比較](?a=editor-comparison-2026-march)、料金の詳細は[料金プラン横断比較](?a=pricing-comparison-all-tools-2026-march)、用途別の選び方は[おすすめマトリクス](?a=usecase-recommendation-matrix-2026)を参照。"
    ],
    "date": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": ["CLI", "比較", "Claude Code", "Codex", "Gemini CLI", "Aider", "Copilot"],
    "heroScope": "none",
    "primarySources": [
      { "title": "Claude Code Documentation", "site": "Anthropic", "url": "https://code.claude.com/docs/en/overview" },
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
    "id": "editor-comparison-2026-march",
    "type": "feature",
    "category": "editor",
    "title": "AI エディタ横断比較 — Cursor・Windsurf・VS Code+Copilot（2026年3月版）",
    "excerpt": "AI エディタ三大勢力を、機能・料金・エージェント能力・拡張性の軸で横並びに比較した。Cursor/Windsurf の経営統合後の現状も含め、エディタ選びの判断材料を整理する。",
    "body": [
      "AI 支援付きコードエディタは2026年に入って Cursor・Windsurf・VS Code+Copilot の三択が実質的な標準になった。いずれも VS Code ベース（VS Code 本体 or フォーク）で拡張機能の互換性が高いため、差が出るのは AI 統合の深さ・エージェント機能・料金体系の3点になる。",
      "**Cursor** は Anysphere 社が開発する VS Code フォーク。Composer によるマルチファイル編集、Background Agent によるバックグラウンドタスク実行、Tab 補完の3本柱で構成される。2026年3月の [2.4 リリース](?a=cursor-2-4-subagents)で並列サブエージェント（最大20個同時、クラウド VM 実行）と BugBot（PR 自動レビュー）が追加され、エージェント能力が大幅に強化された。モデルは Sonnet 4.6 / Opus 4.6 を切り替え可能。Pro $20/月、Business $40/月。",
      "**Windsurf** は旧 Codeium が開発した VS Code フォークで、2026年3月に [Anysphere（Cursor 親会社）に買収された](?a=cursor-windsurf-merge)。中核機能の Cascade はタスクを段階的に分解して差分プレビュー付きで実行するフローで、大規模変更の安全性に定評がある。補完速度は Codeium 時代から高速。料金は[2026年3月の改定](?a=windsurf-pricing-overhaul)で Free / Pro $20/月 / Teams / Max $200/月 の4段階になり、Cursor との価格差は消滅した。買収後も単体提供は継続中だが、長期的な Cursor への統合可能性がある。",
      "**VS Code + GitHub Copilot** は Microsoft / GitHub のエコシステム。エディタ本体は無料で、Copilot が AI 層を担う。2026年にエージェントモード（Agent Mode）が導入され、ターミナル操作・ファイル編集を含むマルチステップタスクの自律実行に対応。Copilot Coding Agent は GitHub Issue を割り当てるだけで AI が PR を自動作成する。Individual $10/月、Business $19/月、Enterprise $39/月（IP 補償・監査ログ付き）。拡張機能エコシステムの規模は突出している。",
      "選び方の目安: AI のネイティブ統合を最優先なら Cursor、既存の VS Code 環境を維持しつつ AI を足すなら VS Code + Copilot、Cascade のステップ分解を評価するなら Windsurf。企業で SSO・監査・IP 補償が必要なら Copilot Business/Enterprise が最も導入しやすい（[→ 企業導入チェックリスト](?a=ai-enterprise-legal-checklist-2026)）。Cursor と Windsurf は同一親会社になったため、今後の機能統合の動向にも注意が必要となる。各ツールの[料金詳細はこちら](?a=pricing-comparison-all-tools-2026-march)。"
    ],
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": ["エディタ", "比較", "Cursor", "Windsurf", "VS Code", "Copilot"],
    "heroScope": "none",
    "primarySources": [
      { "title": "Cursor", "site": "Cursor", "url": "https://cursor.com/" },
      { "title": "Windsurf", "site": "Windsurf", "url": "https://windsurf.com/" },
      { "title": "Visual Studio Code", "site": "Microsoft", "url": "https://code.visualstudio.com/" },
      { "title": "GitHub Copilot", "site": "GitHub", "url": "https://github.com/features/copilot" }
    ],
    "tables": [
      {
        "afterParagraph": 4,
        "caption": "AI エディタ横断比較（2026年3月時点）",
        "headers": ["エディタ", "提供元", "ベース", "AI モデル", "月額（個人）", "エージェント機能", "強み"],
        "rows": [
          ["Cursor", "Anysphere", "VS Code フォーク", "Sonnet 4.6 / Opus 4.6", "$20（Pro）", "Background Agent・並列サブエージェント", "AI 統合の深さ・BugBot"],
          ["Windsurf", "Anysphere（旧 Codeium）", "VS Code フォーク", "Sonnet 4.6 / GPT-5.4", "$20（Pro）", "Cascade フロー", "段階的タスク分解・高速補完"],
          ["VS Code + Copilot", "Microsoft / GitHub", "VS Code 本体", "GPT-5.4 / o4-mini", "$10（Individual）", "Agent Mode・Coding Agent", "拡張機能エコシステム・Enterprise 統制"]
        ]
      }
    ]
  },
  {
    "id": "pricing-comparison-all-tools-2026-march",
    "type": "feature",
    "category": "special",
    "title": "AI 開発ツール料金プラン横断比較 — CLI・エディタ・API 全8ツール（2026年3月版）",
    "excerpt": "Claude Code、Cursor、Windsurf、Codex、Gemini CLI、Copilot、Aider、Zed AI の料金体系を一覧で比較。無料枠・Pro・Enterprise まで、公式発表ベースで整理した。",
    "body": [
      "AI 開発ツールの料金体系は2026年に入って改定が相次いでいる。[Windsurf の $15→$20 値上げ](?a=windsurf-pricing-overhaul)（3月19日）、[Gemini CLI の Pro 有料化](?a=gemini-cli-v035)（3月25日）など、無料・低価格路線からの転換が目立つ。ここでは主要8ツールの料金を公式発表ベースで横並びにした。",
      "**CLI ツール**の料金は大きく3パターンに分かれる。Claude Code は Pro $20/月・Max $100〜200/月・API 従量課金の3本立て。Codex は ChatGPT Pro（$200/月）以上のプランに含まれる形で提供され、単体の低価格プランはない。Gemini CLI は Flash モデルなら無料（1日1,000リクエスト）だが、Pro モデルは有料サブスクリプション限定に移行した。Aider はツール自体が OSS 無料で、接続する LLM の API 費用のみがコストとなる。",
      "**エディタ**では Cursor と Windsurf が同額の $20/月（Pro）に揃った。VS Code 本体は無料で、Copilot の Individual $10/月が最安の有料 AI エディタ体験となる。Zed AI はエディタ無料・AI 機能 $15/月だが、自前の API キーを持ち込めば課金なしで AI 機能を使える。",
      "**Enterprise 向け**では GitHub Copilot Enterprise（$39/席）が IP インデムニティ（知的財産補償）・監査ログ・SAML SSO を備え、組織導入のハードルが最も低い。Claude Code は SOC 2 準拠で API 経由のエンタープライズ利用に対応。Cursor Business は $40/席で管理機能付き。企業導入の法的チェックポイントは[こちらの記事](?a=ai-enterprise-legal-checklist-2026)で詳しく整理している。",
      "コスト最適化の考え方: 個人でコストを抑えるなら Aider（API 費用のみ）+ VS Code が最安構成。月 $20 で1ツールに絞るなら、CLI 重視で Claude Code Pro、エディタ重視で Cursor Pro。企業導入で統制を優先するなら Copilot Business/Enterprise が現実的な選択肢となる。"
    ],
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "8分",
    "tags": ["比較", "料金", "Claude Code", "Cursor", "Windsurf", "Codex", "Gemini CLI", "Copilot", "Aider"],
    "heroScope": "none",
    "primarySources": [
      { "title": "Claude Code Documentation", "site": "Anthropic", "url": "https://code.claude.com/docs/en/overview" },
      { "title": "Cursor Pricing", "site": "Cursor", "url": "https://cursor.com/pricing" },
      { "title": "Windsurf Pricing", "site": "Windsurf", "url": "https://windsurf.com/pricing" },
      { "title": "GitHub Copilot Plans", "site": "GitHub", "url": "https://github.com/features/copilot#pricing" },
      { "title": "OpenAI Codex", "site": "OpenAI", "url": "https://openai.com/index/introducing-codex/" },
      { "title": "Gemini CLI", "site": "Google", "url": "https://github.com/google-gemini/gemini-cli" }
    ],
    "tables": [
      {
        "afterParagraph": 1,
        "caption": "CLI ツール料金比較（2026年3月時点・公式発表値）",
        "headers": ["ツール", "無料枠", "個人プラン", "上位プラン", "API 従量課金", "備考"],
        "rows": [
          ["Claude Code", "なし", "Pro $20/月", "Max $100〜200/月", "あり（トークン単価）", "Max は Fast Mode 含む"],
          ["Codex", "なし", "—", "ChatGPT Pro $200/月〜", "あり", "Pro/Team/Enterprise に含まれる"],
          ["Gemini CLI", "Flash: 1日1,000回", "—", "有料サブスク（Pro モデル）", "あり", "3月25日より Pro 有料化"],
          ["Copilot CLI", "無料枠あり（回数制限）", "Individual $10/月", "Enterprise $39/月", "—", "gh copilot 経由"],
          ["Aider", "ツール自体は無料", "—", "—", "接続先 LLM の API 費用", "OSS（Apache 2.0）"]
        ]
      },
      {
        "afterParagraph": 2,
        "caption": "エディタ料金比較（2026年3月時点・公式発表値）",
        "headers": ["エディタ", "無料枠", "個人プラン", "ビジネス", "Enterprise", "備考"],
        "rows": [
          ["Cursor", "Hobby（機能制限）", "Pro $20/月", "Business $40/月", "—", "Background Agent は Pro 以上"],
          ["Windsurf", "Free（制限あり）", "Pro $20/月", "Teams（要問合せ）", "Max $200/月", "3月に $15→$20 に改定"],
          ["VS Code + Copilot", "エディタ無料 + Copilot 無料枠", "Individual $10/月", "Business $19/月", "Enterprise $39/月", "IP 補償は Enterprise のみ"],
          ["Zed AI", "エディタ無料", "AI $15/月", "—", "—", "自前 API キー持込可"]
        ]
      }
    ]
  },
  {
    "id": "usecase-recommendation-matrix-2026",
    "type": "feature",
    "category": "special",
    "title": "用途別おすすめツール — 「何を使えばいいか」に答える（2026年3月版）",
    "excerpt": "Web 開発、データ分析、企業導入、初心者など用途別に最適なツールの組み合わせを整理した。目的と予算に合わせて選べるマトリクス形式。",
    "body": [
      "AI 開発ツールは CLI・エディタ・API の各レイヤーに選択肢があり、全部を試すのは現実的でない。ここでは典型的な用途ごとに「まずこれを使う」という組み合わせを整理した。各ツールの機能比較は[CLI 比較](?a=cli-tools-comparison-2026-march)・[エディタ比較](?a=editor-comparison-2026-march)、料金の詳細は[料金横断比較](?a=pricing-comparison-all-tools-2026-march)を参照。",
      "**Web 開発（フロントエンド + バックエンド）**には Cursor Pro + Claude Code の組み合わせが強い。Cursor の Composer でマルチファイルのリファクタリングを行い、Claude Code で Git 操作・テスト実行・コミットまでを一貫処理する。React / Next.js / Vue 等のフレームワークではコンテキスト理解の深さが効いてくる。予算を抑えるなら VS Code + Copilot Individual（$10/月）でも Agent Mode による自律編集が使える。",
      "**データ分析・機械学習**では Gemini CLI の 200 万トークンコンテキストが大規模データセットの一括分析に向く。ただし Pro モデルは有料化されたため、Flash で足りない場合は API 課金が前提になる。Jupyter Notebook との連携では VS Code + Copilot のインラインサジェスチョンが実用的。Python 環境の構築や依存管理は Claude Code が得意とする領域。",
      "**企業・チーム導入**では GitHub Copilot Business/Enterprise が最も導入障壁が低い。SSO・監査ログ・IP インデムニティが標準で含まれ、GitHub の既存契約に組み込める。AI エディタとしては Cursor Business（$40/席、管理機能付き）も選択肢に入る。CLI 層では Claude Code が SOC 2 準拠で API 経由のエンタープライズ利用に対応している。",
      "**初心者・非エンジニア**はいきなり CLI やエディタに入らず、Claude チャット（claude.ai）や ChatGPT でコード片を試すところから始めるのが現実的。次のステップとして Cursor Hobby（無料）や VS Code + Copilot 無料枠でエディタ内の AI 支援を体験し、慣れてきたら Pro プランへ移行する流れが混乱しにくい（[→ 初心者向け詳細ガイド](?a=vibe-coding-getting-started-2026)）。",
      "**OSS・マルチモデル志向**には Aider が最適。ツール自体は無料で、Claude・GPT・Gemini・ローカルモデルを切り替えて使える。Git 統合が深く、変更の自動コミットとロールバックが標準装備。API キーの管理とコスト管理は利用者の責任になるが、特定ベンダーにロックインされない自由度は他のツールにない強み。"
    ],
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "8分",
    "tags": ["比較", "おすすめ", "用途別", "初心者", "Enterprise"],
    "heroScope": "none",
    "primarySources": [
      { "title": "Claude Code Documentation", "site": "Anthropic", "url": "https://code.claude.com/docs/en/overview" },
      { "title": "Cursor", "site": "Cursor", "url": "https://cursor.com/" },
      { "title": "GitHub Copilot", "site": "GitHub", "url": "https://github.com/features/copilot" },
      { "title": "Gemini CLI", "site": "Google", "url": "https://github.com/google-gemini/gemini-cli" },
      { "title": "Aider", "site": "GitHub", "url": "https://github.com/Aider-AI/aider" }
    ],
    "tables": [
      {
        "afterParagraph": 0,
        "caption": "用途別おすすめツール組み合わせ（2026年3月時点）",
        "headers": ["用途", "エディタ", "CLI / エージェント", "月額目安", "ポイント"],
        "rows": [
          ["Web 開発（本格）", "Cursor Pro", "Claude Code Pro", "$40（両方）", "Composer + 自律エージェントの組み合わせ"],
          ["Web 開発（低コスト）", "VS Code + Copilot Individual", "—", "$10", "Agent Mode で自律編集も可能"],
          ["データ分析・ML", "VS Code + Copilot", "Gemini CLI（大規模コンテキスト）", "$10〜", "200万トークンで大規模データ対応"],
          ["企業・チーム導入", "VS Code + Copilot Business", "Claude Code（API）", "$19/席〜", "SSO・監査ログ・IP 補償"],
          ["初心者・非エンジニア", "Cursor Hobby（無料）", "—", "$0", "まず Claude チャットで対話から開始"],
          ["OSS・マルチモデル", "VS Code / Zed", "Aider", "API 費用のみ", "ベンダーロックインなし"]
        ]
      }
    ]
  },
  {
    "id": "claude-md-design-patterns-2026",
    "type": "feature",
    "category": "cli",
    "title": "CLAUDE.md 設計パターン集 — プロジェクト別の書き方と実例",
    "excerpt": "Claude Code の動作を制御する CLAUDE.md ファイルの設計パターンを、プロジェクト種別ごとに整理した。グローバル設定・プロジェクト設定・チーム共有の三層構造と、実務で効くルールの書き方を解説する。",
    "body": [
      "CLAUDE.md は Claude Code がプロジェクトのルールや慣習を理解するための設定ファイルで、Anthropic の公式ドキュメントに仕様が記載されている。ファイルの配置場所によって適用範囲が変わる三層構造になっている。~/.claude/CLAUDE.md がグローバル設定（全プロジェクト共通）、プロジェクトルートの CLAUDE.md がプロジェクト設定、.claude/CLAUDE.md がプロジェクト固有のユーザー設定となる。",
      "設計の基本原則は「AI が判断に迷う場面を先回りして書く」こと。コーディング規約のうち linter で検出できるものは CLAUDE.md に書かずツール設定に任せ、linter では検出できないアーキテクチャ方針・命名規則・禁止パターンを記述する。例えば「新しいフォルダを作る前に既存構造を確認する」「.env ファイルをコミットしない」といったルールは自動検出が難しく、CLAUDE.md に書く価値がある。",
      "プロジェクト種別ごとのパターンとして、Web アプリ（React / Next.js 等）では src/ 配下の構成ルール・コンポーネント命名・CSS 方針を明記する。CLI ツール開発では引数パーサーの選定方針・エラーハンドリングの基準を書く。モノレポではパッケージ間の依存ルールと変更時の影響範囲を指定する。いずれも「禁止事項」を具体的に書くと AI の判断ブレが減る。",
      "チームでの運用では、プロジェクトルートの CLAUDE.md を Git 管理してチーム全員で共有し、個人設定は .claude/CLAUDE.md（.gitignore に追加）に分離する。レビュー方針やテスト要件など、チーム合意が必要な項目は共有側に置く。個人の作業スタイル（応答言語、デバッグ手法の好み等）は個人側に置く。",
      "注意点として、CLAUDE.md が肥大化するとコンテキストを圧迫する。公式ドキュメントでは簡潔に保つことが推奨されている。ルールが増えてきた場合は、[スキルファイル（.claude/skills/）](?a=agent-skills-skill-md)に分割して段階的に読み込ませる設計が有効。CLAUDE.md は「常に読まれる指示」、スキルファイルは「必要なときだけ読まれる指示」という使い分けになる。[MCP サーバー](?a=mcp-practical-guide-2026)や [Hooks](?a=claude-code-auto-mode) と組み合わせることで、AI の動作をより精密に制御できる。"
    ],
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "8分",
    "tags": ["Claude Code", "CLAUDE.md", "設定", "チーム開発", "実用スキル"],
    "heroScope": "none",
    "primarySources": [
      { "title": "Claude Code Documentation — Memory", "site": "Anthropic", "url": "https://code.claude.com/docs/en/memory" },
      { "title": "Claude Code Overview", "site": "Anthropic", "url": "https://code.claude.com/docs/en/overview" }
    ]
  },
  {
    "id": "mcp-practical-guide-2026",
    "type": "feature",
    "category": "cli",
    "title": "MCP サーバー活用実践ガイド — DB 連携・ブラウザ操作・外部 API の具体例",
    "excerpt": "Model Context Protocol（MCP）を使った Claude Code の外部連携を、DB 操作・ブラウザ自動化・SaaS API の3パターンで解説。ローカル版とリモート版の違い、設定方法、セキュリティ上の注意点を整理した。",
    "body": [
      "MCP（Model Context Protocol）は Anthropic が策定したオープンプロトコルで、AI モデルが外部のツールやデータソースに標準化された方法でアクセスするための仕組み。Claude Code は MCP クライアントとして動作し、MCP サーバーを追加することで機能を拡張できる。設定は .claude/settings.json の mcpServers セクションに記述する。",
      "**DB 連携**では、PostgreSQL や SQLite の MCP サーバーを接続すると、Claude Code がスキーマを読み取り、クエリの生成・実行・結果の解釈までを一貫して行える。マイグレーションファイルの作成やテストデータの投入にも応用できる。==ただし本番 DB への直接接続は避け、開発環境やリードレプリカに限定すべき==。接続文字列を .env から読み込み、MCP サーバーの起動コマンドで参照する構成が安全。",
      "**ブラウザ操作**では、Puppeteer や Playwright ベースの MCP サーバーを使うと、Claude Code からブラウザを操作してスクリーンショット取得・フォーム入力・E2E テストの実行が可能になる。Web アプリの動作確認を AI に任せるワークフローが組める。Chrome 拡張ベースの MCP サーバー（例: claude-in-chrome）も存在し、既に開いているタブのコンテキストを AI に渡せる。",
      "**SaaS API 連携**では、[freee の MCP リモートサーバー](?a=freee-mcp-remote-2026)（会計・人事など約270操作）のように、SaaS 側が公式に MCP サーバーを提供するケースが増えている。リモート版は URL を追加するだけで利用でき、ローカルに npm パッケージをインストールする必要がない。GitHub MCP サーバーを使えば Issue・PR の操作も Claude Code から直接行える。MCP プロトコル自体の技術的な詳細は[MCP サーバー解説記事](?a=mcp-servers-deep-dive)、[v2 ロードマップ](?a=mcp-v2-spec-launch-2026)も参照。",
      "セキュリティ上の注意: MCP サーバーは Claude Code に外部操作の権限を与えるため、信頼できる提供元のサーバーのみを使う。本番環境のクレデンシャルは MCP 設定に直書きせず、環境変数で渡す。Auto mode と MCP を組み合わせる場合は、Hooks で操作の前後にログを記録するガードレールを設けることが Anthropic の公式ドキュメントで推奨されている。"
    ],
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "9分",
    "tags": ["MCP", "Claude Code", "DB連携", "ブラウザ", "実用スキル", "freee"],
    "heroScope": "none",
    "primarySources": [
      { "title": "Model Context Protocol", "site": "Anthropic", "url": "https://modelcontextprotocol.io/" },
      { "title": "Claude Code — MCP", "site": "Anthropic", "url": "https://code.claude.com/docs/en/mcp" },
      { "title": "freee-mcp リモート版", "site": "freee", "url": "https://corp.freee.co.jp/news/20260327freee_mcp.html" }
    ]
  },
  {
    "id": "git-ai-workflow-2026",
    "type": "feature",
    "category": "cli",
    "title": "AI × Git 連携ワークフロー — ブランチ戦略・PR 自動生成・コードレビュー活用",
    "excerpt": "Claude Code・Codex・Copilot を Git ワークフローに組み込む実践パターンを整理。ブランチ戦略、AI による PR 作成、コードレビュー支援、コミットメッセージの自動生成まで、公式機能ベースで解説する。",
    "body": [
      "AI コーディングツールを Git ワークフローに組み込むパターンは大きく4つある。ブランチ作成・コード変更・PR 作成・コードレビューの各フェーズで、どのツールのどの機能を使うかを整理する。",
      "**ブランチ戦略と AI の使い分け**: feature ブランチを切ってから AI にタスクを投げるのが基本。Claude Code は CLAUDE.md に「main ブランチに直接 push しない」と書いておけばルールを守る。Codex はクラウドサンドボックスで動作するため、ローカルのブランチとは独立して作業し、結果を PR として提出する設計。Aider は変更ごとに自動コミットするため、ブランチ上での変更履歴が細かく残る。",
      "**PR 自動生成**: Copilot Coding Agent は GitHub Issue を割り当てるだけで AI がブランチ作成→コード変更→PR 作成まで自律的に実行する。Claude Code では claude -p 'この Issue を修正して PR を作成' のようにヘッドレスモードで CI/CD パイプラインから呼び出せる。Codex も同様に ChatGPT インターフェースからタスクを投げると PR 単位で結果が返る。",
      "**コードレビュー支援**: [Cursor 2.4](?a=cursor-2-4-subagents) の BugBot は PR レベルの自動レビューを行い、バグの早期発見を支援する。GitHub Copilot は PR の要約・レビューコメントの自動生成に対応している。Claude Code の Hooks 機能を使えば、git commit の前後に lint・テスト・セキュリティスキャンを自動実行する仕組みを設定できる。",
      "**コミットメッセージの自動生成**: Claude Code は変更内容を解析してコミットメッセージを自動生成する。Aider も同様の機能を備えている。チームでコミットメッセージの形式を統一するには、[CLAUDE.md にフォーマット](?a=claude-md-design-patterns-2026)（Conventional Commits 等）を指定するのが実用的。複数ツールの併用パターンは[マルチエージェント開発](?a=claude-code-codex-multi-agent-2026)も参照。",
      "実運用の注意点: AI が生成した PR は必ず人間がレビューしてからマージする。AI のコミット履歴は細かくなりがちなので、squash merge を使って PR 単位でまとめるチームが多い。CI で必ずテストを通す・レビュー承認を必須にするといった既存のガードレールは AI 導入後も維持する。"
    ],
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "8分",
    "tags": ["Git", "Claude Code", "Codex", "Copilot", "PR", "コードレビュー", "実用スキル"],
    "heroScope": "none",
    "primarySources": [
      { "title": "Claude Code Documentation", "site": "Anthropic", "url": "https://code.claude.com/docs/en/overview" },
      { "title": "GitHub Copilot Coding Agent", "site": "GitHub", "url": "https://github.com/features/copilot" },
      { "title": "OpenAI Codex", "site": "OpenAI", "url": "https://openai.com/index/introducing-codex/" },
      { "title": "Aider", "site": "GitHub", "url": "https://github.com/Aider-AI/aider" }
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
      "開発者への実務的な影響として、==利用するツールの利用規約・データ取り扱いポリシーを定期的に確認する==ことが今後さらに重要になる。特に企業での利用は、所在国（AI企業タブを参照）やデータの保存先を把握した上でツールを選定すべきだろう。関連記事: [AI と著作権の最新動向](?a=ai-copyright-landscape-2026)、[米国・EU・日本の規制比較](?a=ai-regulation-comparison-us-eu-japan-2026)、[企業導入の法的チェックリスト](?a=ai-enterprise-legal-checklist-2026)。"
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
    "id": "ai-copyright-landscape-2026",
    "type": "feature",
    "category": "regulation",
    "title": "AI と著作権 — 2026年時点の法的状況と開発者が知るべきこと",
    "excerpt": "AI 生成コードの著作権は誰にあるのか、学習データの利用は合法なのか。米国・EU・日本の現状を公式発表と判例ベースで整理し、開発者が実務で取るべき対応をまとめた。",
    "body": [
      "AI 生成物の著作権は2026年時点で各国の法的整理が進行中であり、確定した統一ルールはまだない。ただし、いくつかの重要な判断と方向性が出てきている。開発者がバイブコーディングで AI にコードを書かせる際にも関わる話題であるため、現状を整理する。",
      "**米国**では、米国著作権局（USCO）が2023年に「AI が自律的に生成した作品には著作権が発生しない」という方針を示し、2025年にもこの立場を維持する報告書を発表した。ただし「人間が十分な創造的関与をした場合」は保護対象になりうるとされている。AI ツールで生成したコードをそのまま使う場合と、人間が大幅に編集・選択した場合で扱いが変わる可能性がある。学習データに関しては、New York Times v. OpenAI 訴訟など複数の訴訟が進行中で、フェアユースの適用範囲が争点となっている。",
      "**EU**では AI Act（人工知能法）が2024年に成立し、2026年から段階的に施行されている。汎用 AI モデルの提供者にはトレーニングデータの要約の公開や著作権法の遵守が義務付けられている。EU 著作権指令のテキスト・データマイニング（TDM）例外規定との関係も重要で、権利者がオプトアウト（利用拒否）した著作物の学習利用は認められない方向。",
      "**日本**では、著作権法第30条の4が AI 学習目的の著作物利用を広く認めており、主要国の中では比較的寛容な法制度となっている。ただし文化庁が2024年に公表した「AI と著作権に関する考え方」では、学習段階と生成・利用段階を分けて整理する枠組みが示され、生成物が既存著作物と類似する場合は侵害となりうるとされた。2026年時点で法改正の議論が継続中。",
      "**開発者への実務的な影響**: (1) AI 生成コードをそのまま納品・公開する場合、著作権の帰属が不明確になるリスクがある。重要なコードは人間によるレビューと編集を経ることが望ましい。(2) GitHub Copilot Enterprise の IP インデムニティ（知的財産補償）のように、AI ツール提供者が著作権リスクを引き受けるサービスが出てきている。企業利用ではこうした補償の有無が選定基準になる（[→ 企業導入チェックリスト](?a=ai-enterprise-legal-checklist-2026)）。(3) プロジェクトに利用するツールの利用規約を確認し、生成物の権利帰属条項を把握しておくことが基本となる。各国の規制アプローチの違いは[米国・EU・日本の規制比較](?a=ai-regulation-comparison-us-eu-japan-2026)を参照。"
    ],
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "9分",
    "tags": ["著作権", "規制", "法律", "EU AI Act", "米国", "日本"],
    "heroScope": "none",
    "primarySources": [
      { "title": "Copyright and Artificial Intelligence", "site": "U.S. Copyright Office", "url": "https://www.copyright.gov/ai/" },
      { "title": "EU AI Act", "site": "European Commission", "url": "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" },
      { "title": "AIと著作権に関する考え方について", "site": "文化庁", "url": "https://www.bunka.go.jp/seisaku/bunkashingikai/chosakuken/pdf/94037901_01.pdf" }
    ]
  },
  {
    "id": "ai-regulation-comparison-us-eu-japan-2026",
    "type": "feature",
    "category": "regulation",
    "title": "AI 規制比較 — 米国・EU・日本のアプローチの違い（2026年3月時点）",
    "excerpt": "AI 規制の三大圏域（米国・EU・日本）の規制方針を横並びで比較。リスクベース規制の EU、セクター別の米国、ガイドライン主導の日本。開発者が知るべき実務上の違いを整理した。",
    "body": [
      "AI 規制は国・地域によってアプローチが大きく異なる。2026年3月時点の米国・EU・日本の3圏域の状況を、公式発表と施行済みの法規制に基づいて比較する。",
      "**EU（欧州連合）**は世界で最も体系的な AI 規制を進めている。AI Act（人工知能法）は2024年に成立し、2026年から段階的に施行中。リスクベースの4段階分類（禁止・ハイリスク・限定リスク・最小リスク）を採用し、ハイリスク AI には適合性評価・技術文書の作成・ログ記録が義務付けられる。汎用 AI モデル（GPAI）の提供者には透明性義務があり、「システミックリスク」のある大規模モデルには追加の安全評価が求められる。",
      "**米国**は連邦レベルの包括的な AI 規制法は2026年3月時点で成立していない。バイデン政権が2023年に出した AI に関する大統領令（Executive Order 14110）はトランプ政権発足後の2025年1月に撤回された。代わりにセクター別の規制（金融・医療・雇用・国防など）と州法の組み合わせで対応している。カリフォルニア州の SB 1047（AI 安全法案）は知事の拒否権により2024年に不成立となったが、2025年にも類似法案が提出されている。",
      "**日本**は法律による直接規制ではなく、ガイドライン主導のアプローチを取っている。2024年に経済産業省・総務省が「AI 事業者ガイドライン」を策定し、開発者・提供者・利用者それぞれの責務を整理した。法的拘束力はないが、業界の自主規制の基盤として機能している。著作権法第30条の4が AI 学習を広く許容する点は EU と対照的。広島 AI プロセス（G7 枠組み）を通じた国際調和も推進している。",
      "**開発者への実務的な影響**: EU 向けにサービスを提供する場合、AI Act のコンプライアンス対応（リスク分類、技術文書、透明性表示）が必要になる。米国では州法の動向に注意が必要で、特にカリフォルニア州の動きが業界標準に影響しやすい。日本ではガイドラインに沿った運用が実務上の安全策となる。いずれの国でも、==AI ツールの利用規約とデータ取り扱いポリシーの確認が基本==であることは共通している。著作権の詳細は[AI と著作権の記事](?a=ai-copyright-landscape-2026)、企業導入の具体的なチェック項目は[導入チェックリスト](?a=ai-enterprise-legal-checklist-2026)を参照。"
    ],
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "8分",
    "tags": ["規制", "EU AI Act", "米国", "日本", "比較", "ガイドライン"],
    "heroScope": "none",
    "primarySources": [
      { "title": "EU AI Act", "site": "European Commission", "url": "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" },
      { "title": "AI事業者ガイドライン", "site": "経済産業省・総務省", "url": "https://www.meti.go.jp/press/2024/04/20240419004/20240419004.html" },
      { "title": "Executive Order on AI (revoked)", "site": "White House", "url": "https://www.whitehouse.gov/presidential-actions/2025/01/initial-rescissions-of-harmful-executive-orders-and-actions/" }
    ],
    "tables": [
      {
        "afterParagraph": 3,
        "caption": "AI 規制アプローチ比較（2026年3月時点）",
        "headers": ["項目", "EU", "米国", "日本"],
        "rows": [
          ["規制手法", "包括的な法律（AI Act）", "セクター別規制 + 州法", "ガイドライン主導"],
          ["AI 学習のデータ利用", "オプトアウト権あり（TDM 例外）", "フェアユース判断（訴訟中）", "広く許容（著作権法30条の4）"],
          ["汎用 AI モデルの義務", "透明性義務 + 安全評価", "連邦レベルの義務なし", "ガイドラインで整理"],
          ["ハイリスク AI", "適合性評価義務", "セクター別に個別規制", "自主規制"],
          ["罰則", "最大3,500万ユーロ or 売上7%", "セクター別", "法的拘束力なし（現時点）"],
          ["施行状況", "2026年段階的施行中", "包括法なし", "ガイドライン公表済み"]
        ]
      }
    ]
  },
  {
    "id": "ai-enterprise-legal-checklist-2026",
    "type": "feature",
    "category": "regulation",
    "title": "企業で AI コーディングツールを導入する際の法的チェックリスト",
    "excerpt": "企業が Claude Code・Cursor・Copilot 等の AI 開発ツールを導入する際に確認すべき法的・コンプライアンス上のポイントを整理。利用規約、データ取り扱い、知的財産、情報セキュリティの4観点からチェックリスト形式で解説する。",
    "body": [
      "AI コーディングツールの企業導入が加速する中、法務・情報セキュリティ部門と開発チームの間で「何を確認すべきか」の認識がずれるケースが多い。ここでは各ツールの公式ドキュメントと利用規約に基づいて、確認すべきポイントを4つの観点から整理する。",
      "**1. 利用規約とデータ取り扱い**: AI ツールにコードを入力すると、そのデータがどこに送信され、どう扱われるかを確認する。主要なチェック項目は (a) 入力データがモデルの学習に使用されるか否か、(b) データの保存期間と保存先のリージョン、(c) オプトアウト設定の有無。Claude Code は SOC 2 準拠で、Anthropic の利用規約では API 経由の入力はモデル学習に使用しないと明記している。GitHub Copilot は Business プラン以上でコードがトレーニングに使われない設定が可能。Cursor は Privacy Mode を有効にすることでコードの学習利用を防げる。",
      "**2. 知的財産（IP）**: AI が生成したコードの著作権帰属と、学習データに含まれる他者の著作物への類似リスクの2点を確認する。GitHub Copilot Enterprise は IP インデムニティ（知的財産補償）を提供しており、AI 生成コードに起因する著作権侵害の訴訟リスクを GitHub が引き受ける。他のツールではこの種の補償は2026年3月時点で一般的ではないため、社内規定でカバーする必要がある。",
      "**3. 情報セキュリティ**: (a) 通信の暗号化（TLS）、(b) 認証方式（SSO / SAML 対応）、(c) 監査ログの取得可否、(d) アクセス制御（誰がどのリポジトリで使えるか）の4点を確認する。GitHub Copilot Enterprise は SSO・監査ログ・組織レベルのポリシー管理を備えている。Cursor Business は管理機能付き。Claude Code は API 経由での利用が前提となるため、既存の API ゲートウェイによるアクセス制御と組み合わせる構成が多い。",
      "**4. 社内ルールの整備**: ツールの導入だけでなく、(a) AI 生成コードの人間によるレビュー義務、(b) 機密情報（顧客データ、認証情報等）の AI への入力禁止、(c) AI ツールのバージョン管理と利用範囲の文書化、を社内ルールとして定めることが実務上重要。==特に .env ファイルやクレデンシャルを AI に渡さない==ルールは技術的なガードレール（.cursorignore、.claude/settings.json の ignorePaths）と組み合わせて徹底する。",
      "チェックリストの運用: 上記の項目は導入時に1回確認して終わりではなく、ツールの利用規約やデータポリシーが変更されるたびに再確認が必要。各ツールの公式ドキュメントへのリンクを社内 Wiki 等に集約し、変更通知を追跡する体制を作ることを推奨する。著作権の法的背景は[AI と著作権](?a=ai-copyright-landscape-2026)、各国の規制アプローチの違いは[米国・EU・日本の規制比較](?a=ai-regulation-comparison-us-eu-japan-2026)を参照。"
    ],
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "10分",
    "tags": ["Enterprise", "法律", "セキュリティ", "コンプライアンス", "導入ガイド"],
    "heroScope": "none",
    "primarySources": [
      { "title": "Anthropic Usage Policy", "site": "Anthropic", "url": "https://www.anthropic.com/legal/aup" },
      { "title": "GitHub Copilot Trust Center", "site": "GitHub", "url": "https://github.com/trust-center" },
      { "title": "Cursor Privacy", "site": "Cursor", "url": "https://cursor.com/privacy" }
    ],
    "tables": [
      {
        "afterParagraph": 3,
        "caption": "主要ツールのエンタープライズ対応比較（2026年3月時点・公式情報）",
        "headers": ["項目", "Claude Code", "GitHub Copilot", "Cursor"],
        "rows": [
          ["学習データ利用の制御", "API 経由は不使用（利用規約）", "Business 以上でオプトアウト可", "Privacy Mode で制御"],
          ["IP 補償（インデムニティ）", "なし（2026年3月時点）", "Enterprise プランで提供", "なし（2026年3月時点）"],
          ["SSO / SAML", "API 経由で既存 IdP 利用", "Business 以上で SAML SSO", "Business プランで対応"],
          ["監査ログ", "API ログで対応", "Enterprise で提供", "管理機能で対応"],
          ["セキュリティ認証", "SOC 2 準拠", "SOC 2 準拠", "SOC 2 準拠"]
        ]
      }
    ]
  },
  {
    "id": "monthly-roundup-2026-march",
    "type": "feature",
    "category": "special",
    "title": "【月刊まとめ】2026年3月の AI 開発ツール動向 — エージェント競争激化・M&A加速・規制の転換点",
    "excerpt": "2026年3月の AI 開発ツール界隈を総括。Cursor 2.4 の並列サブエージェント、Claude Code Auto mode、Gemini CLI 無料枠縮小、Cursor による Windsurf 買収、OpenAI の Astral 買収、Anthropic と国防総省の法廷闘争など、主要トピックを1本にまとめた。",
    "body": [
      "2026年3月は AI 開発ツールの競争が一段と激化した月だった。エージェント機能の強化、M&A による業界再編、そして規制・法務面での大きな動きが同時進行した。この月刊まとめでは、当サイトが3月に報じたニュースを中心に月全体の流れを振り返る。",
      "**エージェント機能の競争**: 月末にかけてエージェント機能の強化が相次いだ。**Cursor 2.4** は並列サブエージェント（最大20個同時、クラウド VM 実行）と BugBot（PR 自動レビュー）を導入し、8,000行の Next.js アプリのルーター移行が17分→9分に短縮されたと発表した（[→ 詳細](?a=cursor-2-4-subagents)）。**Claude Code** は Auto mode の対象拡大とクラウド auto-fix を発表し、ユーザー確認なしの連続タスク実行が進化した（[→ 詳細](?a=claude-code-auto-mode)）。**Gemini CLI** は v0.35.0 で Plan Mode とネイティブサンドボックスを追加した一方、Pro モデルを有料化し、無料枠は Flash のみに縮小された（[→ 詳細](?a=gemini-cli-v035)）。",
      "**M&A と業界再編**: 3月は2件の大型買収が業界地図を塗り替えた。**Anysphere（Cursor 親会社）が Windsurf（旧 Codeium）を買収**し、AI エディタ市場の選択肢が減少した（[→ 詳細](?a=cursor-windsurf-merge)）。Windsurf は単体提供を継続するも、Pro 価格を $15→$20 に改定して Cursor と同額に（[→ 詳細](?a=windsurf-pricing-overhaul)）。**OpenAI が Python ツール企業 Astral（uv・Ruff・ty）を買収**し、Codex との統合を発表。月間1.26億ダウンロードの uv を取り込み、Python エコシステム全体を Codex のパイプラインに組み込む戦略を示した（[→ 詳細](?a=openai-acquires-astral-2026)）。",
      "**モデル動向**: 中国勢のフロンティアモデルが存在感を示した月でもあった。**Kimi K2.5**（Moonshot AI）は SWE-Bench 76.8%・HLE 50.2% を記録し、欧米モデルに匹敵する性能を公開した（[→ 詳細](?a=kimi-k25-moonshot-2026)）。**GLM-5**（Zhipu AI）は Huawei チップで学習した点で注目された（[→ 詳細](?a=glm-5-zhipu-2026)）。**M2.7**（MiniMax）は自己進化する学習ループを実装した（[→ 詳細](?a=minimax-m27-2026)）。**Google** は [Gemini 3.1 Flash Live](?a=gemini-31-flash-live-voice-2026)（リアルタイム音声 AI）を発表し、応答遅延 0.5 秒以下を実現した。",
      "**規制・法務**: **Anthropic と米国防総省の法廷闘争**が最大の話題だった。サンフランシスコ連邦地裁が DoD による「サプライチェーンリスク」指定を暫定差止し、「修正第一条違反の報復」と判断（[→ 詳細](?a=anthropic-pentagon-injunction-2026)）。AI 企業の政府との利用条件交渉がどこまで企業側の倫理ポリシーで保護されるかという先例が形成されつつある。OpenAI の [Sora は消費者向け提供が終了](?a=openai-sora-discontinued-2026)した。規制全体の動きは [Q1 規制まとめ](?a=ai-regulation-q1-2026)を参照。",
      "**3月のキーワード**: エージェントの並列実行（Cursor・Claude Code）、MCP の普及加速（freee リモート版、MCP v2 ロードマップ）、中国モデルのフロンティア化（Kimi K2.5・GLM-5・M2.7）、AI ツール企業の M&A（Cursor+Windsurf、OpenAI+Astral）、AI と政府の緊張関係（Anthropic vs DoD）。4月以降は EU AI Act の施行本格化と、買収後の Cursor/Windsurf 統合の進捗が注目点となる。"
    ],
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "12分",
    "tags": ["月刊まとめ", "2026年3月", "エージェント", "M&A", "規制", "Cursor", "Claude Code", "Gemini CLI"],
    "heroScope": "none",
    "primarySources": [
      { "title": "Cursor 2.4 Release", "site": "Cursor", "url": "https://cursor.com/changelog" },
      { "title": "Claude Code Documentation", "site": "Anthropic", "url": "https://code.claude.com/docs/en/overview" },
      { "title": "OpenAI to acquire Astral", "site": "OpenAI", "url": "https://openai.com/index/openai-to-acquire-astral/" }
    ]
  },
  {
    "id": "overview-2026-spring",
    "type": "feature",
    "category": "special",
    "title": "【週刊まとめ】AI開発ツール — 2026年3月23日〜29日",
    "excerpt": "Anthropic が国防総省の「サプライチェーンリスク」指定を連邦地裁で差し止めた一方、OpenAI は Sora の消費者向け提供を終了。ARC-AGI-3 がフロンティアモデルの限界を浮き彫りにした翌日、Google が Gemini 3.1 Pro と MCP v2 を同時に発表。週末は Cursor 2.4 と Claude Code Auto mode が開発者のワークフローを更新し、Mythos 草稿の報道がセキュリティ銘柄を動かした。",
    "weekRoundupPeriod": {
      "start": "2026-03-23",
      "end": "2026-03-29"
    },
    "body": [
      "**3月24日（火）** — Anthropic と国防総省の法廷闘争が山場を迎えた。Rita Lin 判事が国防総省側の「サプライチェーンリスク」指定の根拠を問いただし、AI 企業が政府との契約で倫理ポリシーを主張できるかどうかの先例になりうる審問となった。同じ日、OpenAI の動画生成 AI Sora が消費者向け提供を終了した。著作権・安全性の壁が動画生成 AI の商用化を阻む構図が鮮明になっている（[法廷の詳細](?a=anthropic-pentagon-injunction-2026)、[Sora 提供終了](?a=openai-sora-discontinued-2026)）。",
      "**25日（水）** — ARC Prize Foundation が ARC-AGI-3 を公開した。従来のパターン認識ベンチマークと異なり、エージェントがインタラクティブな環境で適応推論を行う設計。主要フロンティアモデルのスコアは人間基準に対し極めて低く、「LLM はまだ汎用推論に遠い」ことを数字で示した。開発者にとっては、エージェントの能力限界を見極める上で有用な指標となる（[ARC-AGI-3 の詳細](?a=arc-agi-3-launch-2026)）。",
      "**26日（木）** — Google DeepMind が Gemini 3.1 Pro のプレビューを発表し、200万トークンのコンテキストウィンドウを維持しつつ推論精度を改善した。開発者が大規模コードベースを一括で扱えるモデルの選択肢が広がる。同じ木曜に MCP v2 仕様も公開され、OAuth 2.1・Streamable HTTP・JSON-RPC バッチが追加された。エンタープライズ環境での MCP 導入障壁が大きく下がる改定で、OpenAI・Microsoft も正式サポートを表明している。法廷では Lin 判事が Anthropic の暫定差止申請を認め、国防総省の措置は当面執行できなくなった（[Gemini 3.1 Pro](?a=gemini-3-1-pro)、[MCP v2](?a=mcp-v2-spec-launch-2026)、[暫定差止](?a=anthropic-pentagon-injunction-2026)）。",
      "**27日（金）** — Cursor 2.4 が並列サブエージェント（最大20個同時・クラウド VM 実行）と BugBot を導入した。「AI に丸投げ」できるタスクの粒度と並列度が上がり、大規模リファクタリングの所要時間が半減する可能性がある。同じ日に Anthropic は Claude Code の Auto mode 対象を拡大し、クラウド auto-fix も発表。エージェント型開発の自律性がまた一段上がった（[Cursor 2.4](?a=cursor-2-4-subagents)、[Auto mode](?a=claude-code-auto-mode)、[auto-fix](?a=claude-code-autofix-cloud)）。",
      "**週末** — Anthropic の内部コードネーム Mythos（別名 Capybara）の草稿報道が広がり、CrowdStrike や Palo Alto Networks などセキュリティ銘柄が売られた。草稿が示すサイバー能力が材料視された形で、AI 企業の機密管理と情報開示のあり方が改めて問われている（[Mythos リーク](?a=anthropic-mythos-leak)、[市場への影響](?a=anthropic-mythos-cyber-impact-2026)）。"
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
        "url": "https://code.claude.com/docs/en/overview"
      }
    ]
  },
  {
    "id": "overview-2026-week-mar16",
    "type": "feature",
    "category": "special",
    "title": "【週刊まとめ】AI開発ツール — 2026年3月16日〜22日",
    "excerpt": "OpenAI が GPT-5.4 mini/nano をリリースし、低コストモデルの選択肢を広げた。翌々日には Python ツール企業 Astral（uv・Ruff・ty）の買収を発表し、Codex のエコシステム強化に動いた。同じ週に Cursor が Windsurf の買収を完了し、AI エディタ市場は Cursor vs VS Code+Copilot の二極構造に近づいた。",
    "weekRoundupPeriod": {
      "start": "2026-03-16",
      "end": "2026-03-22"
    },
    "body": [
      "**3月17日（火）** — OpenAI が GPT-5.4 mini と nano を同時にリリースした。mini は無料層と Codex での利用を想定した軽量モデルで、nano は API 専用の超低コスト・高速推論モデル。並列エージェントの末端ノードに低コストモデルを配置する設計が現実的になり、エージェント運用のコスト構造が変わりうる（[→ 詳細記事](?a=gpt-54-mini-nano-2026)）。",
      "**18日（水）** — Windsurf（旧 Codeium）のレビューが更新された。Cascade フローによる段階的な差分プレビューが強みだが、Anysphere 傘下に入ったことで長期的なロードマップが不透明になっている。新規ユーザーは Cursor との機能重複と将来の統合可能性を考慮する必要がある（[→ 詳細記事](?a=windsurf)）。",
      "**19日（木）** — OpenAI が Python ツール企業 Astral の買収を発表した。uv（月間1.26億DL のパッケージマネージャ）・Ruff（Rust 製リンター）・ty（型チェッカー）を Codex に統合し、Python 開発の環境構築からコード品質管理までを一気通貫で押さえる戦略。OSS の中立性への懸念も出ている。同日、生成音楽ツール（Suno・Udio・Lyria 等）の権利関係と製品比較を整理した特集も掲載された（[Astral 買収](?a=openai-acquires-astral-2026)、[生成音楽の整理](?a=ai-music-generation-frontier-early-2026)）。",
      "**20日（金）** — Anysphere（Cursor 親会社）が Windsurf の買収完了を発表した。AI エディタ市場の主要プレイヤーが1社に集約され、選択肢は実質 Cursor vs VS Code+Copilot の二極構造に近づいた。Windsurf は単体提供を継続するが、独自の機能追加がどこまで続くかは不透明（[→ 詳細記事](?a=cursor-windsurf-merge)）。",
      "**22日（日）** — OpenAI Codex のエージェント機能をレビューした。クラウドサンドボックスでの並列実行と PR 自動作成のワークフローは、Claude Code のローカル実行とは対照的なアプローチ。o4-mini ベースで動作し、複数タスクを同時に投げられる点がチーム開発に向く（[→ 詳細記事](?a=openai-codex-agent)）。"
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
    "figures": [
      { "src": "articles/diagram-openai-six-layer-rag.svg", "alt": "OpenAI 6層コンテキストの全体像。ユーザーの質問がGPT-5.2データエージェントに入り、左側にLayer 1-3（Table Usage、Human Annotations、Codex Enrichment）、右側にLayer 4-6（Institutional Knowledge、Memory、Runtime Context）が接続。下段で日次パイプラインがEmbeddings APIでベクトル化しRAGで検索する流れ", "caption": "6層コンテキストの全体像 — 各層がエージェントにどう接続するか", "afterParagraph": 3 }
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
    "id": "rag-getting-started-step-by-step-2026",
    "type": "feature",
    "category": "data",
    "title": "RAG をゼロから構築する — ステップバイステップガイド（2026年版）",
    "excerpt": "Retrieval-Augmented Generation（RAG）を初めて構築する開発者向けに、ドキュメント取り込み→ベクトル化→検索→生成の4ステップを公式ドキュメントベースで解説。技術選定の判断軸とよくある落とし穴も整理した。",
    "body": [
      "RAG（Retrieval-Augmented Generation）は、LLM が持たない知識を外部データから検索して補完する仕組み。社内文書検索、ヘルプデスク、ナレッジベースなど、LLM 単体では回答できない領域に適用される。ここでは RAG パイプラインの構築手順を4ステップで整理する。",
      "**Step 1: ドキュメントの取り込みと前処理**。対象ドキュメント（PDF、Markdown、HTML、データベースレコード等）をテキストとして抽出する。PDF は構造化が難しいため、テーブルや画像内テキストの処理が品質に直結する。前処理ではメタデータ（ファイル名、更新日、作成者、アクセス権限）を付与する。チャンキング（テキスト分割）は固定長、段落区切り、セマンティック分割の3パターンがあり、用途に応じて選ぶ。詳細は[チャンキング設計の記事](?a=rag-chunking-ingestion-2026)を参照。",
      "**Step 2: ベクトル化（Embedding）と格納**。チャンクをベクトル（数値配列）に変換し、ベクトルデータベースに格納する。Embedding モデルは OpenAI の text-embedding-3-small/large、Google の Gecko、Cohere の embed-v3 など複数の選択肢がある。ベクトル DB は [pgvector（PostgreSQL 拡張）](?a=ai-backend-postgres-supabase-2026)、Pinecone、Weaviate、Chroma などから選ぶ（[→ ベクトル DB 比較](?a=vector-db-comparison-2026)）。開発段階では Chroma（ローカル・OSS）で始めて、本番で Pinecone や pgvector に移行するパターンが多い。",
      "**Step 3: 検索（Retrieval）**。ユーザーのクエリをベクトル化し、格納済みベクトルとの類似度検索でトップ N 件を取得する。キーワード検索（BM25）とベクトル検索を組み合わせるハイブリッド検索が精度と再現率のバランスで有利とされる。検索結果のリランキング（Cohere Rerank 等）を挟むと上位の関連度がさらに向上する。",
      "**Step 4: 生成（Generation）**。検索で取得したチャンクをプロンプトに含め、LLM に回答を生成させる。プロンプトには「以下の情報のみに基づいて回答してください」の指示を入れ、ハルシネーション（捏造）を抑制する。==引用元を回答に含める設計==にすると、ユーザーが根拠を確認でき信頼性が上がる。引用と評価の設計は[評価・引用の記事](?a=rag-evaluation-citations-2026)を参照。",
      "よくある落とし穴: (1) チャンクが大きすぎて検索精度が落ちる（目安は200〜500トークン）、(2) メタデータフィルタを使わず全文検索に頼る、(3) Embedding モデルのバージョン変更時に全ベクトルの再生成が必要になる、(4) 本番でアクセス権限を考慮しないまま全社ドキュメントをインデックス化する（[→ エンタープライズ RAG の注意点](?a=rag-enterprise-acl-privacy-2026)）。"
    ],
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "10分",
    "tags": ["RAG", "ベクトルDB", "Embedding", "入門", "ステップバイステップ"],
    "heroScope": "none",
    "figures": [
      { "src": "articles/diagram-rag-pipeline-4steps.svg", "alt": "RAGパイプラインの4ステップ図。Step 1: 取り込み・前処理（PDF/HTML/DBからテキスト抽出→チャンキング→メタデータ付与）、Step 2: ベクトル化・格納（Embeddingモデルでベクトル化→ベクトルDBに格納）、Step 3: 検索（類似検索+BM25+リランキング）、Step 4: 生成（検索結果をプロンプトに含めLLMで回答生成→引用付与）", "caption": "RAG パイプラインの4ステップ — ドキュメントが回答になるまでの流れ", "afterParagraph": 0 }
    ],
    "primarySources": [
      { "title": "OpenAI Embeddings Guide", "site": "OpenAI", "url": "https://platform.openai.com/docs/guides/embeddings" },
      { "title": "LangChain RAG Tutorial", "site": "LangChain", "url": "https://python.langchain.com/docs/tutorials/rag/" },
      { "title": "LlamaIndex Getting Started", "site": "LlamaIndex", "url": "https://docs.llamaindex.ai/en/stable/getting_started/" }
    ]
  },
  {
    "id": "vector-db-comparison-2026",
    "type": "feature",
    "category": "data",
    "title": "ベクトルデータベース比較 — pgvector・Pinecone・Weaviate・Chroma・Qdrant（2026年版）",
    "excerpt": "RAG やセマンティック検索の基盤となるベクトル DB を、アーキテクチャ・スケーラビリティ・コスト・運用の軸で比較。既存 PostgreSQL への追加か、専用マネージドか、OSS ローカルか、選定の判断基準を整理した。",
    "body": [
      "ベクトルデータベースは RAG パイプラインの中核コンポーネントで、Embedding ベクトルの格納と類似度検索を担う。2026年時点で主要な選択肢は pgvector（PostgreSQL 拡張）、Pinecone（マネージド）、Weaviate（OSS + マネージド）、Chroma（OSS・ローカル特化）、Qdrant（OSS + マネージド）の5つに大別される。",
      "**pgvector** は PostgreSQL の拡張で、既存の PostgreSQL インフラにベクトル検索を追加できる。SQL でクエリが書けるため学習コストが低く、トランザクション・ACL・バックアップなど PostgreSQL の運用ノウハウがそのまま使える。Supabase は pgvector を標準搭載しており、即座に利用可能（[→ Supabase 周辺の設計](?a=ai-backend-postgres-supabase-2026)）。大規模（数千万ベクトル超）では専用 DB に比べて検索速度が劣る場合がある。",
      "**Pinecone** はフルマネージドのベクトル DB サービス。インフラ管理が不要で、API キーを取得すれば即利用可能。サーバーレスプランは使用量に応じた従量課金で、小規模なら低コスト。メタデータフィルタリングやネームスペースによるマルチテナント分離が標準機能。スケーラビリティが高く、数十億ベクトルにも対応するが、ベンダーロックインとなる点は考慮が必要。",
      "**Weaviate** は Go 製の OSS ベクトル DB で、セルフホストとマネージド（Weaviate Cloud）の両方を提供。ベクトル検索とキーワード検索のハイブリッド検索を標準サポート。GraphQL ベースの API が特徴的で、オブジェクトとしてデータを扱える。モジュール方式で Embedding モデルを内蔵できる。**Qdrant** は Rust 製の OSS で、高速な検索とフィルタリングに強み。REST / gRPC API を提供し、Docker で簡単に起動できる。",
      "**Chroma** は Python ネイティブの OSS ベクトル DB で、ローカル開発に最も手軽。`pip install chromadb` でインストールしてインメモリで動作するため、RAG のプロトタイピングに最適。本番環境向けにはサーバーモード（Docker）も提供されるが、大規模運用の実績は他の選択肢に比べるとまだ浅い。",
      "選定の判断基準: 既存 PostgreSQL を活かすなら pgvector、インフラ管理を避けるなら Pinecone、OSS でハイブリッド検索なら Weaviate または Qdrant、開発・プロトタイプなら Chroma。企業で ACL やテナント分離が必要な場合は Pinecone のネームスペースか pgvector の行レベルセキュリティを活用する。RAG 構築の全体フローは[RAG ステップバイステップ](?a=rag-getting-started-step-by-step-2026)を参照。"
    ],
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "9分",
    "tags": ["ベクトルDB", "RAG", "pgvector", "Pinecone", "Weaviate", "Chroma", "Qdrant", "比較"],
    "heroScope": "none",
    "primarySources": [
      { "title": "pgvector", "site": "GitHub", "url": "https://github.com/pgvector/pgvector" },
      { "title": "Pinecone Documentation", "site": "Pinecone", "url": "https://docs.pinecone.io/" },
      { "title": "Weaviate Documentation", "site": "Weaviate", "url": "https://weaviate.io/developers/weaviate" },
      { "title": "Chroma Documentation", "site": "Chroma", "url": "https://docs.trychroma.com/" },
      { "title": "Qdrant Documentation", "site": "Qdrant", "url": "https://qdrant.tech/documentation/" }
    ],
    "tables": [
      {
        "afterParagraph": 4,
        "caption": "ベクトル DB 比較（2026年3月時点）",
        "headers": ["DB", "種別", "言語", "ハイブリッド検索", "マネージド", "強み"],
        "rows": [
          ["pgvector", "PostgreSQL 拡張", "C", "BM25 は別途", "Supabase 等", "既存 PG インフラ活用"],
          ["Pinecone", "マネージド専用", "—", "対応", "フルマネージド", "スケーラビリティ・手軽さ"],
          ["Weaviate", "OSS + マネージド", "Go", "標準対応", "Weaviate Cloud", "GraphQL API・モジュール"],
          ["Chroma", "OSS", "Python", "限定的", "なし（Docker）", "ローカル開発・プロトタイプ"],
          ["Qdrant", "OSS + マネージド", "Rust", "対応", "Qdrant Cloud", "高速検索・フィルタリング"]
        ]
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
    "newsDate": "2026-03-29",
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
    "newsDate": "2026-03-29",
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
        "url": "https://code.claude.com/docs/en/overview"
      },
      {
        "title": "Anthropic — News & announcements",
        "site": "Anthropic",
        "url": "https://www.anthropic.com/news"
      }
    ]
  },
  {
    "id": "github-copilot-training-data-optin-2026",
    "type": "news",
    "category": "editor",
    "title": "GitHub Copilot、4月24日からインタラクション データをデフォルトで AI 学習に使用 — Free/Pro/Pro+ が対象、オプトアウト可能",
    "excerpt": "GitHub が Copilot の利用規約を改定し、Free・Pro・Pro+ プランのインタラクション データ（入力コード・提案の承諾状況・ナビゲーションパターン等）を2026年4月24日からデフォルトで AI モデルの学習に使用すると発表した。Business・Enterprise プランは対象外。オプトアウトは設定画面から可能だが、デフォルト同意方式に開発者コミュニティから批判が集まっている。",
    "body": [
      "GitHub は2026年3月25日、Copilot の利用規約とプライバシーポリシーを改定し、2026年4月24日以降、Free・Pro・Pro+ プランのユーザーのインタラクション データを AI モデルの学習に使用すると発表した。収集対象は入力コードのスニペット、提案の承諾・拒否状況、ナビゲーションパターン、プライベートリポジトリからのアクティブセッションデータを含む。",
      "対象外となるのは Copilot Business および Copilot Enterprise プランのユーザーで、これらは既存の契約条項によりデータ提供から除外される。学生・教員向けの Copilot も対象外。個人プランのユーザーはオプトアウトが可能で、GitHub の設定画面（/settings/copilot/features）の「プライバシー」セクションにある「Allow GitHub to use my data for AI model training」を無効化することで除外できる。",
      "開発者コミュニティからは強い反発が起きている。GitHub のコミュニティディスカッションに投稿された説明文は172件のダウンロートを受け、コメントの大半が否定的な意見を示している。The Register などは「GitHub が方針を翻した」と報じ、OSS の最大の住処としての GitHub が自動オプトインを採用したことへの懸念が広がっている。GitHub は「モデル改善のために必要なデータ」と説明するが、コードを書いた開発者が自分のデータで自身を代替しうるツールを無償で学習させることへの倫理的問題が指摘されている。"
    ],
    "newsDate": "2026-03-25",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": ["GitHub", "Copilot", "プライバシー", "学習データ", "オプトアウト"],
    "heroScope": "none",
    "primarySources": [
      { "title": "Updates to GitHub Copilot interaction data usage policy", "site": "GitHub Blog", "url": "https://github.blog/news-insights/company-news/updates-to-github-copilot-interaction-data-usage-policy/" },
      { "title": "GitHub: We going to train on your data after all", "site": "The Register", "url": "https://www.theregister.com/2026/03/26/github_ai_training_policy_changes/" },
      { "title": "Updates to our Privacy Statement and Terms of Service: How we use your data", "site": "GitHub Changelog", "url": "https://github.blog/changelog/2026-03-25-updates-to-our-privacy-statement-and-terms-of-service-how-we-use-your-data/" }
    ]
  },
  {
    "id": "google-colab-mcp-server-2026",
    "type": "news",
    "category": "mcp",
    "title": "Google、Colab MCP サーバーを OSS 公開 — AI エージェントが GPU クラウド環境を直接操作可能に",
    "excerpt": "Google が Google Colab に MCP（Model Context Protocol）サーバーを接続するオープンソースプロジェクト「Colab MCP Server」を公開した。Claude Code・Gemini CLI などの MCP 対応エージェントから Colab のノートブックを直接操作し、GPU ランタイムでコードを実行できる。ローカル作業をクラウドに橋渡しするハイブリッドワークフローが実現する。",
    "body": [
      "Google は2026年3月17日、Google Colab の Jupyter ノートブック環境を MCP（Model Context Protocol）経由で AI エージェントから操作できるオープンソースプロジェクト「Colab MCP Server」を公開した。MCP に対応した任意のエージェント（Claude Code・Gemini CLI・カスタム構築のオーケストレーションフレームワークなど）から Colab のノートブックを遠隔制御できる。",
      "Colab MCP Server の主な機能は、ノートブックのセル作成・編集・実行、Python コードの動的生成と可視化、そして Colab が提供する T4/L4 GPU ランタイムへのアクセスだ。エージェントはローカルで指示を受けながら、実際の計算処理を Colab のクラウド環境に委譲するハイブリッドワークフローを構築できる。機械学習モデルのトレーニングや大規模データ処理をローカル GPU なしで AI エージェントに任せられるようになる。",
      "このプロジェクトは MCP エコシステムの拡張において重要な一歩だ。Claude Code や Gemini CLI は既に MCP を通じてローカルファイル・データベース・外部 API と連携できるが、クラウド上の計算リソース（GPU）を直接制御する経路が加わったことで、エージェントの実行環境が大幅に広がる。Google は Colab を「あらゆる AI エージェントのリモートサンドボックス」として位置づける戦略を示している。MCP v2 ロードマップ（OAuth 2.1・Streamable HTTP）との組み合わせにより、エンタープライズでの活用も現実的になってきた。"
    ],
    "newsDate": "2026-03-17",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "3分",
    "tags": ["Google", "Colab", "MCP", "エージェント", "GPU", "オープンソース"],
    "heroScope": "none",
    "primarySources": [
      { "title": "Announcing the Colab MCP Server: Connect Any AI Agent to Google Colab", "site": "Google Developers Blog", "url": "https://developers.googleblog.com/announcing-the-colab-mcp-server-connect-any-ai-agent-to-google-colab/" },
      { "title": "Google Colab Now Has an Open-Source MCP Server", "site": "MarkTechPost", "url": "https://www.marktechpost.com/2026/03/19/google-colab-now-has-an-open-source-mcp-model-context-protocol-server-use-colab-runtimes-with-gpus-from-any-local-ai-agent/" }
    ]
  },
  {
    "id": "eu-ai-act-council-streamline-2026",
    "type": "news",
    "category": "regulation",
    "title": "EU 理事会、AI 規制の一部ルールを簡素化する立場を採択 — 高リスク AI への適用を最大16ヵ月延期",
    "excerpt": "EU 理事会が AI Act の一部ルールを「Omnibus VII」パッケージで簡素化する立場を採択した。高リスク AI システムへのルール適用を最大16ヵ月延期し、SME 向け免除を中規模企業にも拡大。2026年8月2日を目途に透明性・高リスク AI のルールが施行される予定だが、米国の連邦主導によるアプローチとは対照的な状況が続く。",
    "body": [
      "EU 理事会は2026年3月13日、AI Act の特定ルールを簡素化する立場を採択した。「Omnibus VII」と呼ばれる EU の簡素化アジェンダの一部として、高リスク AI システムへの規則適用タイムラインを最大16ヵ月延期する提案が含まれる。欧州委員会は「必要な標準とツールが利用可能になった後に規則を適用する」と説明している。",
      "主な改定内容は3点。第一に、SME（中小企業）向けの規制免除を「小規模中堅企業（SMC）」にも拡大する。第二に、バイアス検出・軽減のための機密個人データの処理を一定条件下で認める。第三に、EU AI Office の権限強化とガバナンスの分断解消を図る。高リスク AI システムの透明性要件と特定の高リスク AI ルールについては2026年8月2日が適用期限となる。",
      "一方、米国は連邦政府主導で州の AI 規制を先制する方向を打ち出している。2025年12月にトランプ大統領が署名した大統領令は、国家競争力の妨げになる州の AI 規制を連邦法で優越する方針を定め、司法長官に AI 訴訟タスクフォースの設置を指示した。欧米の規制アプローチは「厳格な事前規制（EU）vs 競争優先・事後規制（米国）」という対照的な構図が鮮明になっており、グローバルに展開する AI 企業はこの二重基準への対応が求められる。"
    ],
    "newsDate": "2026-03-13",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": ["EU", "AI Act", "規制", "Omnibus VII", "高リスクAI"],
    "heroScope": "none",
    "primarySources": [
      { "title": "Council agrees position to streamline rules on Artificial Intelligence", "site": "Consilium EU", "url": "https://www.consilium.europa.eu/en/press/press-releases/2026/03/13/council-agrees-position-to-streamline-rules-on-artificial-intelligence/" },
      { "title": "Where AI Regulation is Heading in 2026: A Global Outlook", "site": "OneTrust Blog", "url": "https://www.onetrust.com/blog/where-ai-regulation-is-heading-in-2026-a-global-outlook/" }
    ]
  }
];

export const SITE_NAME = "AI-News — AI開発ツール最新情報";
export const SITE_DESCRIPTION = "Claude Code・Cursor・Copilot など AI 開発ツールの最新ニュースと比較をまとめたサイト";

/**
 * newsDate > date の優先順位で YYYY-MM-DD を返す
 */
export function getArticleNewsYmd(article) {
  return article.newsDate ?? article.date ?? "2026-01-01";
}

/**
 * 今日の日付（Asia/Tokyo）を YYYY-MM-DD で返す
 */
export function getSiteTodayYmd() {
  const now = new Date();
  const jst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  return jst.toISOString().slice(0, 10);
}
