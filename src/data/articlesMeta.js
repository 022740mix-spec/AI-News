/**
 * 記事メタデータ（軽量）
 * ── 自動生成: node scripts/split-articles.mjs ──
 * body, tables, figures, charts, primarySources は含まない
 */
export const ARTICLES_META = [
  {
    "id": "anthropic-glasswing-expansion-partner-network-services-track-2026",
    "type": "news",
    "category": "product",
    "title": "Anthropic が6/2-3に2発表 — Project Glasswing が150組織・15+ヶ国に拡大（インド初参加）、Claude Partner Network に Services Track 3階層と Partner Hub を導入",
    "excerpt": "Anthropic が6月2日に **Project Glasswing**（Claude Mythos Preview を使う AI セキュリティイニシアチブ）を**追加150組織・15ヶ国以上**に拡大、6月3日に **Claude Partner Network** に **Services Track（Select / Preferred / Global Premier の3階層）と Partner Hub** を導入した。Glasswing 拡大は電力・水・医療・通信・ハードウェアなど、当初カバーが薄かった重要インフラを新規対象に追加し、**インドが初の対象国**として含まれる。初期パートナーはこれまでに 10,000件超の高/重大セキュリティ脆弱性を発見済み。Services Track は3月発足の Partner Network（$100M 投資・現在 40,000社超が応募・10,000人超が Claude 認定取得済み）の階層化で、Select（10名認定・2導入・1事例）→ Preferred（100名・15導入・3事例）→ Global Premier（1,000名・100顧客・3地域・15事例）と要件が段階的に上がる。Partner Hub は要件達成度を日次更新し、顧客側からも認定済パートナーの検索が可能になる。",
    "date": "2026-06-05",
    "newsDate": "2026-06-03",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": ["Anthropic", "Project Glasswing", "Partner Network", "セキュリティ", "エコシステム"],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Anthropic 6/2-3 announcements"
    }
  },
  {
    "id": "microsoft-build-2026-mai-7models-solara-majorana-2026",
    "type": "news",
    "category": "model",
    "title": "Microsoft Build 2026 総まとめ — MAI 7モデル一斉投入（Thinking-1 / Code-1-Flash 等）、Project Solara で AI ファースト端末へ、Majorana 2 量子チップ、Discovery が GA、Mayo Clinic 提携",
    "excerpt": "Microsoft が6月2日、Build 2026 基調講演で **MAI 7モデル**を一斉投入した。フラッグシップ推論モデル MAI-Thinking-1（35B active / 約1T total の sparse MoE、256K コンテキスト、AIME 2025 で 97.0%、AIME 2026 で 94.5%、SWE-Bench Pro で Claude Opus 4.6 と同等）、コーディング特化 MAI-Code-1-Flash（5B、GitHub Copilot に展開、SWE-Bench Pro で Claude Haiku 4.5 を +16pt 上回る）に加え、Image-2.5 / Image-2.5 Flash / Transcribe-1.5（43言語）/ Voice-2（15+ 追加言語）/ Voice-2 Flash を同時公開。**Project Solara**（Android ベースの AI ファースト端末プラットフォーム）、**Majorana 2 量子チップ**（qubit 寿命 20秒、前世代比 1,000倍信頼性）、**Microsoft Discovery が GA**（GSK・BHP が利用中）、**Mayo Clinic とのヘルスケア AI 提携**、Azure HorizonDB、GPU 高速 Fabric Data Warehouse など100超の発表。MAI-Thinking-1 は OpenAI データを使わず訓練された点で、OpenAI 依存からの脱却を象徴する。",
    "date": "2026-06-03",
    "newsDate": "2026-06-02",
    "author": "AI News 編集部",
    "readTime": "8分",
    "tags": ["Microsoft", "Build 2026", "MAI", "Project Solara", "量子コンピュータ"],
    "coverImage": {
      "src": "logos/microsoft.svg",
      "alt": "Microsoft Build 2026"
    }
  },
  {
    "id": "feature-ai-ipo-season-cerebras-spacex-anthropic-openai-2026",
    "type": "feature",
    "category": "product",
    "title": "【分析】AI IPO シーズン到来 — Cerebras が5/14に $5.5B 調達で初日 +68%、Anthropic は6/1 に confidential filing、SpaceX は6/12 で $1.75T 評価額目標、OpenAI は Q4",
    "excerpt": "**Cerebras Systems** が5月14日に NASDAQ 上場、$5.5B を調達して初日 **+68%** という今年最大の IPO を成功させた。SpaceX（xAI 統合後）は6月12日上場・**$1.75T 評価額**・$75-80B 調達を目指し、Anthropic は6月1日に confidential filing を完了し10月上場を視野、OpenAI は第4四半期を予定。**3社合計で $3兆超**という史上最大の AI IPO パイプラインが形成された。Cerebras の好調が他社の心理に効く一方、Figma の上場後株価低迷を引いた**「AI IPO トラップ」警告**も並行して出ている。本記事は各社の評価額・調達規模・タイムライン・リスクを公式値で整理する。",
    "date": "2026-06-03",
    "newsDate": "2026-06-01",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": ["IPO", "Cerebras", "SpaceX", "Anthropic", "OpenAI"],
    "coverImage": {
      "src": "articles/cover-pricing.svg",
      "alt": "AI IPO 2026"
    }
  },
  {
    "id": "microsoft-build-2026-windows-agent-framework-2026",
    "type": "news",
    "category": "product",
    "title": "Microsoft Build 2026 続報 — Windows Agent Framework を MIT で OSS 公開、Sandboxed Execution Container と Intelligent Terminal を導入、26H2 で標準搭載",
    "excerpt": "Microsoft が Build 2026 で発表した Scout（OpenClaw 基盤、別記事）の下層にあたる **Windows Agent Framework** を、**MIT ライセンスで OSS 公開**した。Windows をエージェント実行の基盤プラットフォーム化する取り組みで、4つの柱：①Sandboxed Execution Container（エージェントを隔離実行）、②Cloud PC 統合（常時稼働）、③オンデバイス AI モデル（ローカル推論）、④Intelligent Terminal（コマンドハブ）で構成される。**OpenAI、Anthropic、Hugging Face のモデルすべてが利用可能**で、Execution Container フォーマットは Linux でも Docker 拡張経由で動作を約束。**Windows 11 26H2（2026年Q4）で全コンポーネント標準搭載**、既存 Win11 ユーザーには Windows Update 経由で配信。Satya Nadella は「Windows は AI 時代のキャンバスとコラボレーター双方になる」とキーノートで強調した。",
    "date": "2026-06-03",
    "newsDate": "2026-06-02",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": ["Microsoft", "Build 2026", "Windows", "エージェント", "OSS"],
    "coverImage": {
      "src": "logos/microsoft.svg",
      "alt": "Windows Agent Framework"
    }
  },
  {
    "id": "anthropic-may-2026-series-h-milan-korea-arr-47b-2026",
    "type": "news",
    "category": "product",
    "title": "Anthropic 5月集中アップデート（補遺）— Series H が $65B / $965B 評価額で確定、ARR $47B 到達、Milan・Seoul オフィス開設",
    "excerpt": "5月13日に報道（$30-50B 交渉中）された Anthropic の資金調達は、5月28日に **Series H として正式確定**した。**$65 billion 調達・評価額 $965 billion** で、OpenAI を初めて上回り世界最大の AI スタートアップに。Altimeter Capital、Dragoneer、Greenoaks、Sequoia Capital がリード。**ARR は $47 billion に到達**（2025年末 $10B → 3月 $30B → 5月 $47B）。並行して5月26日に韓国 Representative Director（KiYoung Choi 氏）任命と Seoul オフィス計画、5月27日に Milan オフィスを開設しイタリアのエンタープライズ・研究・開発者支援を発表。Crunchbase 集計では Anthropic の調達が5月のグローバルスタートアップ資金の **54%** を占め、ベンチャー市場全体を引き上げた。",
    "date": "2026-06-03",
    "newsDate": "2026-05-28",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": ["Anthropic", "資金調達", "Series H", "海外展開", "ARR"],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Anthropic May 2026 Updates"
    }
  },
  {
    "id": "microsoft-scout-openclaw-build-2026-2026",
    "type": "news",
    "category": "product",
    "title": "Microsoft が Build 2026 で「Scout」発表 — OpenClaw 基盤の自律 AI「オートパイロット」、Teams 経由で Outlook / SharePoint / Excel を横断操作",
    "excerpt": "Microsoft が6月2日、開発者カンファレンス **Build 2026** で **Scout** を発表した。OSS の AI エージェント基盤 **OpenClaw** をベースとする「**autopilot（オートパイロット）**」型の常時稼働エージェントで、ユーザーの代理として動き、固有の Entra アイデンティティで管理される。Teams からアクセスし、Outlook（メール）、OneDrive、SharePoint、Excel を横断して読み書きでき、外部アプリは MCP（Model Context Protocol）で接続可能。デモでは「Outlook の顧客メール読解 → SharePoint で注文番号照合 → Excel ダッシュボード更新 → Teams で確認返信」を1セッションで完遂した。**ポリシーコンフォーマンス・システム**による継続的監査と監査証跡を内蔵。提供はプライベートプレビューから開始し、Intune ポリシー設定、opt-in 同意、GitHub Copilot ライセンスが前提条件。前日報道の Project Polaris（自社製コーディング AI）と並ぶ、Microsoft の Build 2026 の二大目玉となった。",
    "date": "2026-06-03",
    "newsDate": "2026-06-02",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": ["Microsoft", "Scout", "OpenClaw", "エージェント", "Build 2026"],
    "coverImage": {
      "src": "logos/microsoft.svg",
      "alt": "Microsoft Scout Build 2026"
    }
  },
  {
    "id": "microsoft-build-2026-project-polaris-mai-coding-2026",
    "type": "news",
    "category": "model",
    "title": "Microsoft が Build 2026（6/2-3）で自社製コーディング AI「Project Polaris」を披露へ — GitHub Copilot の中核モデルを MAI に切替、Anthropic Claude Code への対抗策",
    "excerpt": "Reuters と The Information が5月28日、Microsoft が6月2-3日にサンフランシスコで開催する **Build 2026** で、コード名 **Project Polaris** と呼ばれる自社製コーディング AI モデルを披露すると報じた。Microsoft の社内 AI 部門 **MAI**（Microsoft AI Superintelligence、Mustafa Suleyman 率い）が開発し、**GitHub Copilot の中核モデルを段階的に OpenAI から自社製に切替**ていく方針。同時に **Copilot Starter（無償）/ Pro / Enterprise の3階層**への再編成も発表される見込み。背景には、4月の OpenAI との契約再交渉でフロンティアモデル訓練の制約が緩和されたこと、そして Anthropic Claude Code が GitHub Copilot をエンタープライズ開発者シェアで抜き始めたという競争圧力がある。Build 2026 では他に Windows Agent Framework、Copilot Agent Mode、自律エージェント機能の拡充も予定。",
    "date": "2026-05-31",
    "newsDate": "2026-05-28",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": ["Microsoft", "GitHub Copilot", "MAI", "Build 2026", "OpenAI"],
    "coverImage": {
      "src": "logos/microsoft.svg",
      "alt": "Microsoft Build 2026 Project Polaris"
    }
  },
  {
    "id": "feature-china-ai-models-may-2026-qwen-kimi-ernie",
    "type": "feature",
    "category": "model",
    "title": "【特集】中国系 AI モデルの5月集中更新 — Qwen 3.7 Max が Opus 4.6 を一部凌駕、Kimi K2.6 が OSS で GPT-5.4 を抜く、Ernie 5.1・GLM・Seedance 2.0 も同期投下",
    "excerpt": "米国フロンティアラボ（Anthropic Opus 4.8、Google Gemini 3.5、OpenAI GPT-5.5）の集中アップデートにほぼ同時並行で、中国の主要 AI ラボも5月に大型モデルを連続投入した。**Alibaba Qwen 3.7 Max**（5/20、Alibaba Cloud Summit）は 1M トークンコンテキストで SWE-Pro 60.6 / Terminal-Bench 2.0 69.7 / GPQA 92.4 を記録し、Claude Opus 4.6 Max を一部ベンチで上回り、価格は **$2.50/$7.50 per M トークン**で Opus 4.7 の約半額。**Moonshot Kimi K2.6**（4/20）は 1兆パラメータの OSS で SWE-Bench Pro 58.6 を達成し、**GPT-5.4 や Claude Opus 4.6 を上回る**初のオープンウェイトに。Baidu Ernie 5.1、Zhipu GLM 更新、ByteDance Seedance 2.0（高精細実写動画生成）と続き、**米中 AI 競争の「第三極」**としての存在感が増している。DeepSeek V4 を含めると5月だけで6本の中国製大型モデルが市場に出た計算。",
    "date": "2026-05-28",
    "newsDate": "2026-05-20",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": ["中国", "Qwen", "Kimi", "Ernie", "オープンソース"],
    "coverImage": {
      "src": "articles/cover-model-api.svg",
      "alt": "China AI Models May 2026"
    }
  },
  {
    "id": "google-io-2026-gemini-3-5-flash-antigravity-spark-2026",
    "type": "news",
    "category": "model",
    "title": "Google I/O 2026 まとめ — Gemini 3.5 Flash が GA、Antigravity と Gemini Spark を投入、Android XR 眼鏡と AI Ultra $100/月も発表",
    "excerpt": "Google が5月19日からの **Google I/O 2026** で 100以上の発表を行った。中心は **Gemini 3.5 Flash の即時 GA** — Terminal-Bench 2.1 で 76.2%、GDPval-AA 1656 Elo、MCP Atlas 83.6% を記録し、Flash クラスのコスト・速度で 3.1 Pro を超える性能を達成。新エージェント基盤 Antigravity 2.0 がデスクトップアプリとして全世界提供開始。**Gemini Spark**（パーソナルエージェント）は来週から AI Ultra 加入者向けにベータ展開。新しい **AI Ultra プラン $100/月** にこれが含まれる。マルチモーダルの Gemini Omni、Samsung 製 Android XR 眼鏡、Veo / Lyria / Imagen / Nano Banana 2 の連携など、OS レベルから生成 AI まで広範に投入。Anthropic の Claude Opus 4.8（5/28）と並ぶ「5月後半の AI フロンティア集中発表週」となった。",
    "date": "2026-05-28",
    "newsDate": "2026-05-19",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": ["Google", "Gemini", "I/O 2026", "エージェント", "Android"],
    "coverImage": {
      "src": "logos/google.svg",
      "alt": "Google I/O 2026"
    }
  },
  {
    "id": "anthropic-claude-opus-4-8-dynamic-workflows-2026",
    "type": "news",
    "category": "model",
    "title": "Claude Opus 4.8 リリース — SWE-bench Verified 88.6% / SWE-bench Pro 69.2%、USAMO 2026 で 96.7%、Dynamic Workflows と3倍安い Fast Mode を投入",
    "excerpt": "Anthropic が5月28日、フラッグシップモデル **Claude Opus 4.8** を公開した。Opus 4.7（4/16 GA）から約6週間という短サイクルで、SWE-bench Verified 88.6%、SWE-bench Pro 69.2%、**USAMO 2026 数学が 69.3% → 96.7%、1M トークン長コンテキストの GraphWalks F1 が 40.3% → 68.1%** と大幅改善。価格は Opus 4.7 据え置きで $5/$25 per M トークン。新しい **Fast Mode は 2.5倍高速・前世代比3倍安い $10/$50**。Claude Code 向けには**最大1,000の並列サブエージェント**をオーケストレーションできる **Dynamic Workflows**（リサーチプレビュー）を導入し、Anthropic は「より鋭い判断力・進捗の honest な自己報告・長時間の自律実行」を新世代の重点に置く。提供は Anthropic API、Amazon Bedrock、Google Cloud Vertex AI、Microsoft Foundry で同日 GA。",
    "date": "2026-05-28",
    "newsDate": "2026-05-28",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": ["Anthropic", "Claude", "モデルリリース", "ベンチマーク", "エージェント"],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Claude Opus 4.8"
    }
  },
  {
    "id": "anthropic-stainless-acquisition-sdk-infrastructure-2026",
    "type": "news",
    "category": "product",
    "title": "Anthropic が Stainless 買収交渉中（$300M+）— OpenAI と Google も使う AI モデル SDK 自動生成基盤を取り込み、開発者体験レイヤーを支配へ",
    "excerpt": "The Information が5月13日、**Anthropic が SDK 自動生成スタートアップ Stainless を $300M 以上で買収する交渉が advanced stage に入っている**と報じた。Stainless は4年前に NY で創業、AI を使って **API スキーマから OpenAI、Anthropic、Google などモデルベンダーの公式 SDK を自動生成**するプラットフォームを提供している。2024年12月の評価額 $150M から **倍以上のプレミアム**となる。OpenAI 自身は過去に SDK の社内開発を打ち切り、Stainless にメンテナンスを移した経緯があり、買収が成立すれば **Anthropic が競合の開発者接点（SDK 生成・更新）まで握る**異例の構図に。5/13報道の $900B 評価額・$30-50B 調達と同時並行の動きで、Anthropic は資金調達で得た余力を**開発者エコシステムの基盤レイヤー獲得**に振り向けつつある。",
    "date": "2026-05-14",
    "newsDate": "2026-05-14",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": ["Anthropic", "M&A", "SDK", "開発者ツール", "戦略"],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Anthropic × Stainless"
    }
  },
  {
    "id": "anthropic-900b-valuation-funding-overtakes-openai-2026",
    "type": "news",
    "category": "product",
    "title": "Anthropic が $900B 評価額で $30-50B 調達交渉 — OpenAI（$852B）を抜き「世界最高評価額の AI 企業」へ、Ramp 指数では業務利用シェアでも逆転",
    "excerpt": "Bloomberg と New York Times が5月12日、Anthropic が $30-50 billion の新規調達を **評価額 $900〜950 billion** で交渉中と報じた。成立すれば3月の OpenAI の $852 billion を上回り、**世界で最も評価額の高い AI スタートアップ**になる。Anthropic は Code with Claude（5/6）の場で **ARR が $30 billion を突破**したことを公表しており、Amazon の最大 $25B 追加投資（4/20）と Google の最大 $40B 投資（4/24）に続く資金供給網の強化が進む。同時に Ramp の業務利用 AI 指数では4月に Anthropic が 34.4% に上昇し **OpenAI を初めて上回った**。クローズは月内とされ、確定すれば**スタートアップ史上最速で $1T に到達する候補**となる。",
    "date": "2026-05-13",
    "newsDate": "2026-05-13",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": ["Anthropic", "資金調達", "投資", "評価額", "OpenAI"],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Anthropic $900B 評価額"
    }
  },
  {
    "id": "anthropic-claude-for-legal-plugins-cocounsel-2026",
    "type": "news",
    "category": "product",
    "title": "Anthropic が「Claude for Legal」を公開 — 12分野の実務プラグイン＋20超 MCP コネクタ、Thomson Reuters CoCounsel と提携、Apache 2.0 で OSS 配布",
    "excerpt": "Anthropic が5月12日、法務専用のプラグインスイート **Claude for Legal** を発表した。商取引・コーポレート・雇用・プライバシー・製品・規制・AI ガバナンス・知財・訴訟など **12分野の実務プラグイン**と、20超の MCP コネクタ（DocuSign / Ironclad / iManage / NetDocuments / LexisNexis / Thomson Reuters / Box / Everlaw / CourtListener 等）を一斉にリリース。**Thomson Reuters の CoCounsel Legal は Anthropic の Claude Agent SDK で全面リビルド**され、MCP コネクタとして統合された。Microsoft 365（Word / Excel）連携、契約更新監視・規制監視・法廷提出物監視などの **定時実行 Managed Agent** も同梱。リポジトリは Apache 2.0 で公開。2月の前段リリース後、**法務職は開発者を除いて最も Claude を使う職業**になったと Anthropic は説明している。",
    "date": "2026-05-13",
    "newsDate": "2026-05-12",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": ["Anthropic", "Claude", "法務", "MCP", "プラグイン"],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Claude for Legal"
    }
  },
  {
    "id": "cursor-microsoft-teams-integration-2026",
    "type": "news",
    "category": "editor",
    "title": "Cursor が Microsoft Teams 統合を公開 — `@Cursor` メンションでクラウドエージェントにタスク委任、リポジトリ・モデルを自動選択して PR を作成",
    "excerpt": "Cursor が5月11日、**Microsoft Teams 統合**を一般公開した。Teams の任意のチャネルで **`@Cursor` メンション**するとクラウドエージェントにタスクを委任でき、Cursor 側の情報（リポジトリ・実行履歴）を Teams に引き出すこともできる。Cursor は**プロンプトと直近のエージェント活動からリポジトリとモデルを自動選択**し、スレッド全体を文脈として読み込んで実装を行い、**チームレビュー用の PR を作成**する流れだ。インストールは Cursor ダッシュボードから。3月の Cursor Automations（Slack / GitHub / PagerDuty トリガー）に続く「チャットアプリ起点で動くエージェント」の Microsoft Teams 版で、OpenAI Workspace Agents（4/22）や Anthropic Claude Managed Agents と並ぶ流れだ。",
    "date": "2026-05-13",
    "newsDate": "2026-05-11",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": ["Cursor", "Microsoft Teams", "エージェント", "PR", "開発ツール"],
    "coverImage": {
      "src": "logos/microsoft.svg",
      "alt": "Cursor in Microsoft Teams"
    }
  },
  {
    "id": "google-googlebook-gemini-intelligence-android-show-2026",
    "type": "news",
    "category": "product",
    "title": "Google が「Googlebook」と「Gemini Intelligence」を発表 — Chromebook 後継の AI ネイティブ・ノート PC、Acer/ASUS/Dell/HP/Lenovo から今秋発売、Magic Pointer で UI を再設計",
    "excerpt": "Google が5月12日の「The Android Show: I/O Edition」で、新カテゴリのノート PC **Googlebook** と、その中核に置かれる **Gemini Intelligence** を発表した。Googlebook は Android と ChromeOS の良い部分を統合した「AI を前提に作り直した」プラットフォームで、Acer / ASUS / Dell / HP / Lenovo の5社から **2026年秋発売**予定。中核 UI は **Magic Pointer** — カーソルを軽く動かすと Gemini が文脈に沿った提案を表示し、画面上の任意の対象を「選んで Gemini に質問」できる。さらに、プロンプトでカスタムウィジェットを生成する Create Your Widget、スマートフォンのアプリやファイルをノート PC で扱う Cast my apps / Quick Access も搭載。Gemini Intelligence は単なる Q&A を超え、アプリ横断で実際のアクション（食料品注文・予約・チケット手配など）まで自動化することを目指す。Chromebook の長期的進化版として位置付けられ、Bloomberg は **「MacBook Neo への対抗」** と報じている。",
    "date": "2026-05-12",
    "newsDate": "2026-05-12",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": ["Google", "Gemini", "Googlebook", "Android", "ハードウェア"],
    "coverImage": {
      "src": "logos/google.svg",
      "alt": "Google Googlebook と Gemini Intelligence"
    }
  },
  {
    "id": "anthropic-claude-platform-aws-ga-agent-view-2026",
    "type": "news",
    "category": "product",
    "title": "Anthropic が5/12に2発表 — Claude Platform on AWS が GA（AWS が初の native ホスト）、Claude Code に「agent view」マルチセッション管理を研究プレビュー投入",
    "excerpt": "Anthropic が5月12日、二つの大型アップデートを同日公表した。①**Claude Platform on AWS が GA**。AWS が初めて Claude のネイティブ Platform 体験（API・コンソール・早期アクセスβ機能）を顧客の AWS アカウント経由で提供する形態で、AWS Marketplace 経由で課金。Claude **Opus 4.7 / Sonnet 4.6 / Haiku 4.5** を利用可能、東京・ソウル・シドニー含む **17リージョン** で展開。サービスは Anthropic が運営し、顧客データは AWS セキュリティ境界の外で処理される。②**Claude Code に「agent view」を研究プレビュー追加**（v2.1.139+）。`claude agents` で開く統合ダッシュボードで複数セッションの状態を一覧表示、新規セッションをディスパッチ・バックグラウンド実行（`/bg` または `claude --bg [task]`）して、必要なときだけ介入する運用を可能にする。Pro / Max / Team / Enterprise / API プランで提供。",
    "date": "2026-05-12",
    "newsDate": "2026-05-12",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": ["Anthropic", "Claude", "AWS", "Claude Code", "エージェント"],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Anthropic 5/12 同日発表"
    }
  },
  {
    "id": "feature-ai-avatar-agents-join-meetings-2026",
    "type": "feature",
    "category": "product",
    "title": "【特集】AI が「あなたの顔」で会議に参加する時代 — HeyGen が OpenAI Realtime Voice で Zoom に同席、Zoom 3.0 は本人型アバター、Read AI は Digital Twin",
    "excerpt": "AI が会議に「参加する」レイヤーが、議事録ボットから **アバター（顔と声を持つ存在）** へ移った。HeyGen の Interactive Avatar は Zoom App として **OpenAI Realtime Voice** を統合し、ユーザーの分身を同時に複数会議へ送り込める。Tavus は Phoenix-4 と Raven-0 で **サブ1秒**応答の会話映像、Beyond Presence は Genesis で **100ms 未満**の応答を実現。Zoom AI Companion 3.0 は本人の表情・口元・視線をミラーする **フォトリアル・アバター** を3月に発表・リリース。Read AI は5月にメール・スケジュール対応の Digital Twin を一般公開、Kaltura CEO は自分の Agentic Avatar を本番運用中だ。「人として現れる AI」がもたらす本人確認・意思決定責任・倫理の課題を、現行プロダクトの仕様と並列で整理する。",
    "date": "2026-05-12",
    "newsDate": "2026-05-12",
    "author": "AI News 編集部",
    "readTime": "8分",
    "tags": ["アバター", "エージェント", "会議", "HeyGen", "Tavus"],
    "coverImage": {
      "src": "articles/cover-media-video.svg",
      "alt": "AI アバター会議参加 特集"
    }
  },
  {
    "id": "feature-realtime-translation-teams-zoom-meet-openai-2026",
    "type": "feature",
    "category": "product",
    "title": "【特集】リアルタイム翻訳が「字幕」から「あなたの声で多言語化」へ — Teams / Zoom / Google Meet 比較と、OpenAI が5/7に投入した3つの音声 API",
    "excerpt": "ビデオ会議のリアルタイム翻訳は、過去2年で **「字幕」から「自分の声で話す多言語化」** へと一気に進化した。Microsoft Teams は Interpreter で9言語の音声シミュレーション、Zoom は AI Companion 3.0 で46言語キャプションと音声翻訳、Google Meet は **Gemini 駆動の Speech Translation** で英語と主要5言語の双方向音声翻訳を提供（2026年1月27日 GA）。さらに OpenAI は5月7日、**GPT-Realtime-2 / GPT-Realtime-Translate / GPT-Realtime-Whisper の3つの音声 API**を発表し、開発者が会議系プロダクトと同等の体験を自前で構築できるようになった。Realtime-Translate は 70+ 入力言語 → 13 出力言語を **$0.034/分**でストリーミング処理する。3社の会議ソフトと OpenAI API を、**トランスクリプト・翻訳キャプション・自動音声翻訳**の3軸で比較し、価格・対応言語・声の再現・プライバシーの観点で整理する。",
    "date": "2026-05-12",
    "newsDate": "2026-05-12",
    "author": "AI News 編集部",
    "readTime": "8分",
    "tags": ["リアルタイム翻訳", "Microsoft Teams", "Zoom", "Google Meet", "OpenAI"],
    "coverImage": {
      "src": "articles/cover-voice-audio.svg",
      "alt": "リアルタイム翻訳 特集"
    }
  },
  {
    "id": "academy-oscars-ai-acting-screenplay-ineligible-2026",
    "type": "feature",
    "category": "regulation",
    "title": "【分析】Academy が Oscar の AI ルールを明確化 — AI 出演・AI 脚本は対象外、「人間の同意」と「人間の著作」を必須要件に",
    "excerpt": "Academy of Motion Picture Arts and Sciences が5月1日（多くの一般メディアは5月2日に報道）、**AI 生成の演技および AI 主導で書かれた脚本は Academy Awards（オスカー）の主要部門で対象外**とする規則変更を公表した。演技部門では「**法的クレジットに記載され、本人の同意の下で人間が演じた**」ものに限ると明記。脚本部門は「**人間が著作したもの**」が要件となる。Academy は同時に **AI の使用に関する追加情報の提出を求める権限**も保持し、ケースバイケースで例外を判断する。Sora 2 や Runway Gen5 級の生成動画が業界に浸透するなか、**「賞レースの土俵」は人間の創作活動に絞り直す**という業界自治の方向性が鮮明になった。",
    "date": "2026-05-11",
    "newsDate": "2026-05-02",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": ["規制", "映画", "著作権", "クリエイティブ", "倫理"],
    "coverImage": {
      "src": "articles/cover-regulation.svg",
      "alt": "Academy Oscar AI ルール"
    }
  },
  {
    "id": "openai-cyber-trusted-contact-voice-may7-2026",
    "type": "news",
    "category": "product",
    "title": "OpenAI が5月7日に3つの発表 — GPT-5.5-Cyber「Trusted Access」プログラム、ChatGPT「Trusted Contact」自傷防止、新音声 AI モデル",
    "excerpt": "OpenAI が5月7日、AI 開発・サイバー防衛・利用者保護にまたがる3つの大きな更新を一斉に発表した。①**GPT-5.5-Cyber** — 重要インフラを守るディフェンダー向けに、より許容範囲の広いサイバーセキュリティ特化モデルを **Trusted Access for Cyber（TAC）** プログラムで限定提供開始。②**Trusted Contact** — ChatGPT のオプション機能で、自傷リスクが自動検知＋人間レビューで「深刻」と判定された場合、ユーザーが事前に指定した成人連絡先へ SMS / メールで通知する。③**新しい音声 AI モデルを API に追加** — リアルタイム音声インテリジェンスのレイヤーを刷新。Anthropic SpaceX 契約（5/6）の翌日に「サイバー × 安全 × 音声」の3軸で並行投入する形で、フロンティアモデル各社の競争は **能力ベンチマークから安全運用と業界別パッケージング** へと軸足を移しつつある。",
    "date": "2026-05-11",
    "newsDate": "2026-05-07",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": ["OpenAI", "ChatGPT", "セキュリティ", "安全性", "音声"],
    "coverImage": {
      "src": "logos/openai.svg",
      "alt": "OpenAI 5/7 アップデート"
    }
  },
  {
    "id": "anthropic-spacex-colossus-1-compute-deal-2026",
    "type": "news",
    "category": "product",
    "title": "Anthropic が SpaceX の Colossus 1 を全量借り上げ — 220,000 NVIDIA GPU・300+ MW、Claude Code レート上限を2倍に、軌道データセンター構想にも踏み込む",
    "excerpt": "Anthropic が5月6日、サンフランシスコの開発者カンファレンス「Code with Claude」の基調講演で、**SpaceX が運営する Colossus 1 データセンターのコンピュート全量**を契約したと発表した。**220,000 基超の NVIDIA GPU（H100/H200/GB200 を含む）と 300 MW 超**の新規容量が今月中に Claude の推論基盤に組み込まれる。これに伴い **Claude Code / Claude API のレート上限を倍増**、Pro / Max のピーク時間帯制限も撤廃し、Opus API のレート上限も大幅引き上げ。さらに同社は **軌道データセンターでギガワット級の AI コンピュート**を SpaceX と共同検討すると公表。Anthropic は Amazon $25B（4/20）と Google $40B（4/24）に続き **Elon Musk 系インフラとも組む**形になり、AI インフラの政治学を象徴する案件となった。",
    "date": "2026-05-11",
    "newsDate": "2026-05-06",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": ["Anthropic", "SpaceX", "Claude", "インフラ", "GPU"],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Anthropic × SpaceX Colossus 1"
    }
  },
  {
    "id": "openai-gpt-5-5-instant-default-chatgpt-2026",
    "type": "news",
    "category": "model",
    "title": "OpenAI が GPT-5.5 Instant を ChatGPT のデフォルトに昇格 — ハルシネーション 52.5% 減・出力は30%短く、Plus/Pro 向けに過去チャット連携の長期メモリも展開",
    "excerpt": "OpenAI が5月5日、ChatGPT のデフォルトモデルを **GPT-5.5 Instant** に切り替えた。高ステークスのプロンプト（医療・法律・金融）で **ハルシネーション率が GPT-5.3 Instant 比 52.5% 減**、ユーザーがフラグした難会話で**事実誤認 37.3% 減**。同時に出力スタイルも刷新され、**単語数は約 30.2%・行数は約 29.2% 短く**なり、絵文字の濫用が抑制された。Plus / Pro 向けには過去チャット・接続済み Gmail を文脈に使う**新しい長期メモリ**も Web から展開開始（Free / Go / Business / Enterprise には数週間以内に拡大）。API では `chat-latest` として配信、有料ユーザー向けに GPT-5.3 Instant は3ヶ月間は設定で残せる。",
    "date": "2026-05-11",
    "newsDate": "2026-05-05",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": ["OpenAI", "ChatGPT", "GPT-5.5", "ハルシネーション", "メモリ"],
    "coverImage": {
      "src": "logos/openai.svg",
      "alt": "GPT-5.5 Instant"
    }
  },
  {
    "id": "microsoft-agent-365-ga-observe-govern-secure-2026",
    "type": "news",
    "category": "product",
    "title": "Microsoft Agent 365 が一般提供開始 — エージェントを「observe / govern / secure」する管制塔、$15/user/月、Microsoft 365 E7 にも組み込み",
    "excerpt": "Microsoft が5月1日、エンタープライズ向けの **AI エージェント統合管理サービス Microsoft Agent 365** を一般提供（GA）開始した。**価格は $15/user/月**で、スタンドアロン契約に加えて新エディション **Microsoft 365 E7（M365 E5 + Entra Suite + Microsoft 365 Copilot + Agent 365）** にもバンドルされる。設計思想は **observe / govern / secure** の3軸で、組織内に乱立する Copilot Studio・Workspace Agents・Claude Managed Agents・各社のエージェントを**単一レジストリで一覧化**し、利用状況・パフォーマンス・リスクシグナルをリアルタイムに可視化する。Anthropic と OpenAI が「エージェント・ランタイム」を競う中、Microsoft は「エージェントの管制塔」レイヤーで差別化する戦略を鮮明にした。",
    "date": "2026-05-11",
    "newsDate": "2026-05-01",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": ["Microsoft", "エージェント", "エンタープライズ", "ガバナンス", "セキュリティ"],
    "coverImage": {
      "src": "logos/microsoft.svg",
      "alt": "Microsoft Agent 365"
    }
  },
  {
    "id": "bigtech-q1-2026-earnings-ai-capex-700b-feature",
    "type": "feature",
    "category": "product",
    "title": "【分析】Big Tech 4社が同日決算 — Microsoft AI 事業が ARR $370億（+123%）、Meta は CapEx を最大 $1,450億に上方修正、AI バブル論争が再燃",
    "excerpt": "4月29日夕、Alphabet・Microsoft・Meta・Amazon の4社が同時にカレンダー第1四半期（Microsoft は会計 Q3）決算を発表した。Microsoft の **AI 事業は ARR $370億（前年比 +123%）** に到達、Azure は +40% で過去12四半期で最速級。Alphabet は **Google Cloud が四半期売上 $200億超**を初突破。Meta は **2026年 CapEx ガイダンスを $1,250〜1,450億へ上方修正**したことで時間外株価が −6% と反応。AWS は +22% で15四半期ぶりの高成長。Fortune は翌4月30日、Big Tech ハイパースケーラー合計の年間 AI インフラ支出が **$7,000億**に達し「出口の見えない投資競争」と報じた。**AI バブル論争**の論点と、開発者にとっての実務的含意を整理する。",
    "date": "2026-05-11",
    "newsDate": "2026-04-29",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": ["決算", "Microsoft", "Meta", "Amazon", "Alphabet", "投資"],
    "coverImage": {
      "src": "articles/cover-pricing.svg",
      "alt": "Big Tech 4社決算"
    }
  },
  {
    "id": "openai-workspace-agents-codex-enterprise-2026",
    "type": "news",
    "category": "product",
    "title": "OpenAI が Workspace Agents を公開 — Custom GPTs の後継、Codex で動作しチーム共有可能、Slack・Salesforce・Notion など主要 SaaS と連携",
    "excerpt": "OpenAI が4月22日、ChatGPT に **Workspace Agents** を導入した。**Custom GPTs の後継**にあたる新機能で、Codex で動作するエージェントを組織単位で共有しながら、複雑なタスクや長時間ワークフローを組織のパーミッションと統制の下で実行する。**Slack・Google Drive・Microsoft 365・Salesforce・Notion・Atlassian Rovo** などの主要 SaaS と連携し、クラウド側で動き続けるためユーザーがオフラインでも処理が継続する。提供は ChatGPT **Business / Enterprise / Edu / Teachers** プランのリサーチプレビュー。**5月6日までは無料**で、以降クレジット課金に切り替わる。",
    "date": "2026-04-26",
    "newsDate": "2026-04-22",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": ["OpenAI", "ChatGPT", "エージェント", "Codex", "エンタープライズ"],
    "coverImage": {
      "src": "logos/openai.svg",
      "alt": "OpenAI Workspace Agents"
    }
  },
  {
    "id": "anthropic-project-deal-agent-marketplace-experiment-2026",
    "type": "news",
    "category": "product",
    "title": "Anthropic が Project Deal を公表 — Claude エージェント69体が社内マーケットで186件・$4,000超を自律取引、「Agent Quality Gap」という新たな課題が浮上",
    "excerpt": "Anthropic が4月25日、Claude エージェント同士で商取引を行わせる社内実験「**Project Deal**」の結果を公表した。サンフランシスコオフィスの社員69名にそれぞれ $100 を渡し、Slack 上で自由に売買させた結果、**500品目以上で 186 件・$4,000 超**の取引が自律的に成立した。注目すべきは、**Opus 4.5 を使った売り手エージェントは Haiku 4.5 を使った売り手より平均 $2.68/品 高く売れていた**こと——だが当事者の人間はこの差にほぼ気付かなかった。初期プロンプト指示は成立確率にも価格にもほとんど影響しなかったことも判明し、参加者の 46% は「同様の AI 交渉サービスに金を払う」と回答した。エージェント経済の実装課題と「**Agent Quality Gap**（敗者は自分が損していることに気付かない）」という新たな倫理論点を提示した実験となった。",
    "date": "2026-04-26",
    "newsDate": "2026-04-25",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": ["Anthropic", "Claude", "エージェント", "研究", "経済"],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Anthropic Project Deal"
    }
  },
  {
    "id": "deepseek-v4-preview-1m-context-mixture-experts-2026",
    "type": "news",
    "category": "model",
    "title": "DeepSeek V4 プレビュー公開 — 1.6T MoE と 1M トークンコンテキスト、Pro と Flash 2モデルをオープンソース、Bloombergは国産チップ統合優先で正式版延期と続報",
    "excerpt": "DeepSeek が4月24日、フラッグシップ MoE モデル **DeepSeek V4** のプレビュー版2モデル（V4-Pro: 1.6T total / 49B active、V4-Flash: 284B total / 13B active）をオープンソース公開した。両者とも **1M トークンのコンテキスト窓**を備え、**Thinking / Non-Thinking のデュアルモード**を切り替えられる。Simon Willison は「フロンティアにほぼ到達、しかも一桁の価格」と評価。API では `deepseek-v4-flash` と `deepseek-v4-pro` が同日に利用可能に。一方 Bloomberg は4/26、**正式版は国産チップ統合優先で延期**と続報を出しており、米中 AI 競争と中国国産半導体の戦略が交差する事案として注目される。",
    "date": "2026-04-26",
    "newsDate": "2026-04-24",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": ["DeepSeek", "オープンソース", "モデルリリース", "MoE", "中国"],
    "coverImage": {
      "src": "articles/cover-model-api.svg",
      "alt": "DeepSeek V4"
    }
  },
  {
    "id": "openai-gpt-5-5-release-agentic-coding-2026",
    "type": "news",
    "category": "model",
    "title": "OpenAI が GPT-5.5 をリリース — GPT-5.4 から6週間、エージェントコーディングで SOTA を「半額」、Plus/Pro/Business/Enterprise と Copilot に即時展開",
    "excerpt": "OpenAI が4月23日、フラッグシップモデル **GPT-5.5** をリリースした。GPT-5.4 からわずか6週間という異例の短サイクルでの登場。エージェント型タスク（計画立案・ツール使用・自己検証）に最適化され、Artificial Analysis の Coding Index で SOTA を「**競合フロンティアモデルの半額**」で達成すると主張する。事実的な記述の正答率が 23% 向上、応答中の事実誤認は 3% 減少。テキスト・画像・音声・動画を単一アーキテクチャで処理。ChatGPT の Plus / Pro / Business / Enterprise、Codex、API（4/24〜）、GitHub Copilot（Pro+/Business/Enterprise）に同日〜翌日展開。Claude Opus 4.7 GA（4/16）に続く形で、**フロンティアモデル競争がさらに加速**している。",
    "date": "2026-04-26",
    "newsDate": "2026-04-23",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": ["OpenAI", "GPT-5.5", "モデルリリース", "エージェント", "GitHub Copilot"],
    "coverImage": {
      "src": "logos/openai.svg",
      "alt": "OpenAI GPT-5.5"
    }
  },
  {
    "id": "huggingface-ml-intern-open-source-agent-2026",
    "type": "news",
    "category": "product",
    "title": "Hugging Face が ml-intern を公開 — 論文を読み、データセットを探し、モデルを訓練する OSS の ML エンジニア・エージェント、Qwen3-1.7B を10時間で GPQA 32% に",
    "excerpt": "Hugging Face が4月21日、オープンソースの ML エンジニア・エージェント **ml-intern** を公開した。**smolagents** フレームワーク上に構築され、arXiv と Hugging Face Papers の閲覧、引用グラフをたどってのデータセット探索、訓練スクリプトの実行、評価結果の診断、再訓練までを自律的に回す。デモでは **Qwen3-1.7B** ベースモデル（GPQA ベースライン約10%）を**約10時間で 32% まで引き上げ**、同タスクの **Claude Code（22.99%）を上回るスコア**を出した。フロンティアモデル競争の裏で「OSS エコシステム接続性をモートにする」逆張り戦略として注目される。CLI / Web アプリで提供、早期ユーザーには $1,000 の GPU リソースと Anthropic クレジットが付く。",
    "date": "2026-04-26",
    "newsDate": "2026-04-21",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": ["Hugging Face", "オープンソース", "エージェント", "smolagents", "ML エンジニアリング"],
    "coverImage": {
      "src": "articles/cover-programming.svg",
      "alt": "Hugging Face ml-intern"
    }
  },
  {
    "id": "amazon-anthropic-25b-trainium-infrastructure-2026",
    "type": "news",
    "category": "product",
    "title": "Amazon が Anthropic に最大 $25B を追加投資 — 即時 $5B、評価額 $380B、見返りに Anthropic は AWS で年内 1GW の Trainium2/3 容量を立ち上げ",
    "excerpt": "Amazon が4月20日、Anthropic に最大 $250億（追加投資）を行うと発表した。これまで既に投じてきた $80億に積み増す形で、**初期 $50億は Anthropic の評価額 $3,800億で即時投入**、残り $200億は「特定の商業マイルストン」達成時に追加される。見返りに Anthropic は AWS で今後10年で $1,000億超を支出し、**年内に合計約 1 ギガワット（GW）の Trainium2/Trainium3 容量**を立ち上げる。Anthropic は需要急増で「信頼性と性能に避けられない負荷」が生じているとし、追加インフラの確保が急務だった。Amazon の OpenAI 向け最大 $500億投資（2月）からわずか2か月での追加コミットメントとなる。",
    "date": "2026-04-26",
    "newsDate": "2026-04-20",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": ["Anthropic", "Amazon", "AWS", "Trainium", "投資"],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Amazon $25B Anthropic 追加投資"
    }
  },
  {
    "id": "anthropic-claude-design-labs-figma-challenge-2026",
    "type": "news",
    "category": "product",
    "title": "Anthropic が Claude Design を公開 — Opus 4.7 ベースのビジュアル制作ツール、コードベースからデザインシステム自動生成、Figma に正面挑戦",
    "excerpt": "Anthropic が4月17日、新製品「Claude Design」を Anthropic Labs のリサーチプレビューとして公開した。Claude Opus 4.7 を基盤に、会話型インターフェースでデザイン・プロトタイプ・スライド・1ページャを生成。コードベースとデザインファイルを読み込んで**チームのデザインシステムを自動構築**し、以降のプロジェクトに色・タイポグラフィ・コンポーネントを自動適用する。書き出しは PDF / URL / PPTX / Canva に対応、最終形は Claude Code へ「ハンドオフバンドル」として渡せるため、探索→プロトタイプ→本番コードの閉じたループが完成する。VentureBeat は「Figma への正面挑戦」と評している。Pro / Max / Team / Enterprise で利用可能。",
    "date": "2026-04-26",
    "newsDate": "2026-04-17",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": ["Anthropic", "Claude", "デザイン", "Figma", "Claude Code"],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Claude Design"
    }
  },
  {
    "id": "anthropic-claude-opus-4-7-ga-task-budgets-2026",
    "type": "news",
    "category": "model",
    "title": "Anthropic Claude Opus 4.7 が一般提供開始 — SWE-bench Verified 87.6%、新機能「task budgets」と新 effort level「xhigh」を導入、画像解像度も2.5倍に拡大",
    "excerpt": "Anthropic が4月16日、フラッグシップモデル「Claude Opus 4.7」を一般提供（GA）開始した。SWE-bench Verified で87.6%（Opus 4.6比 +6.8pt）、Terminal-Bench 2.0 で69.4%、GPQA Diamond で94.2% と主要ベンチマーク全般で 4.6 を上回る。新機能としてエージェント実行全体のトークン消費を見積もる「task budgets」と、推論深度を調整する新 effort level「xhigh」を追加。画像入力の最大解像度は 1568px から 2576px に拡大。料金は Opus 4.6 と同じ $5/$25 per M トークン。Anthropic API、Amazon Bedrock、Google Cloud Vertex AI、Microsoft Foundry、GitHub Copilot で提供開始。",
    "date": "2026-04-26",
    "newsDate": "2026-04-16",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": ["Anthropic", "Claude", "モデルリリース", "エージェント", "ベンチマーク"],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Claude Opus 4.7 GA"
    }
  },
  {
    "id": "anthropic-claude-managed-agents-public-beta-2026",
    "type": "news",
    "category": "product",
    "title": "Anthropic が Claude Managed Agents をパブリックベータ公開 — クラウドホスト型エージェントAPIで「プロトタイプから本番を10倍速く」、Notion・Rakuten・Sentryが導入済み",
    "excerpt": "Anthropic が4月8日、Claude Managed Agents をパブリックベータとしてリリースした。サンドボックス実行・チェックポイント・認証管理・スコープ付き権限・エンドツーエンドトレースを備えたクラウドホスト型エージェントAPIで、ランタイム料金は $0.08/セッション時間。同時に Claude Cowork が macOS・Windows で正式版（GA）に昇格し、エンタープライズ機能が追加された。Notion・Rakuten・Sentry が早期導入パートナーとして本番運用中。",
    "date": "2026-04-10",
    "newsDate": "2026-04-08",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": ["Anthropic", "Claude", "エージェント", "API", "エンタープライズ"],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Claude Managed Agents"
    }
  },
  {
    "id": "meta-muse-spark-closed-source-msl-2026",
    "type": "news",
    "category": "model",
    "title": "Meta が Muse Spark を発表 — 初のクローズドモデルでオープンソース路線を転換、ヘルスケアベンチマークで全フロンティアモデルを上回る",
    "excerpt": "Meta が4月8日、Meta Superintelligence Labs（MSL）初のフロンティアモデル「Muse Spark」を発表した。Alexandr Wang（元 Scale AI CEO）率いる MSL が開発し、Meta 初のクローズドソースモデルとしてオープンソース路線からの転換を鮮明にした。Artificial Analysis Intelligence Index v4.0 で4位（スコア52）、HealthBench Hard で 42.8% と全フロンティアモデル中トップ。Meta AI アプリで利用可能、APIは限定プレビュー。",
    "date": "2026-04-10",
    "newsDate": "2026-04-08",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": ["Meta", "Muse Spark", "モデルリリース", "クローズドソース", "ヘルスケア"],
    "coverImage": {
      "src": "logos/meta.svg",
      "alt": "Meta Muse Spark"
    }
  },
  {
    "id": "anthropic-pentagon-blacklist-appeals-court-2026",
    "type": "feature",
    "category": "regulation",
    "title": "【分析】Anthropic vs 米国防総省 — 控訴裁がClaude軍事ブラックリストの一時差止を却下、AI安全ポリシーと国防の衝突が5月口頭弁論へ",
    "excerpt": "D.C. 巡回控訴裁判所が4月8日、Anthropic の緊急差止申立てを却下し、国防総省による Claude のサプライチェーンリスク指定（事実上の軍事利用禁止）を維持した。争点は Anthropic の利用規約にある「完全自律兵器の禁止」と「米国市民の大量監視の禁止」の2条項。$2億の国防契約を結びながらも安全ポリシーを譲らなかった Anthropic と、AI 技術の無制限利用を求めるトランプ政権の対立は、5月19日の口頭弁論で本格的に争われる。",
    "date": "2026-04-10",
    "newsDate": "2026-04-08",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": ["Anthropic", "規制", "軍事", "Claude", "訴訟"],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Anthropic vs Pentagon"
    }
  },
  {
    "id": "openai-child-safety-blueprint-safety-fellowship-2026",
    "type": "news",
    "category": "regulation",
    "title": "OpenAI が Child Safety Blueprint を公表 — AI悪用による児童搾取対策の政策提言と Safety Fellowship 募集を同時発表",
    "excerpt": "OpenAI が4月8日、AI を悪用した児童搾取に対する米国の法的・技術的枠組みを提言する「Child Safety Blueprint」を公表した。AI 生成 CSAM の検出・報告・捜査の高速化を柱とし、立法の更新・報告メカニズムの改善・AI システムへの予防的セーフガード統合の3軸で構成。同時に外部研究者向けの Safety Fellowship（2026年9月〜2027年2月）の募集も開始。IWF によれば AI 生成 CSAM の報告は2025年前半だけで8,000件超、前年比14%増。",
    "date": "2026-04-10",
    "newsDate": "2026-04-08",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": ["OpenAI", "安全性", "児童保護", "規制", "研究"],
    "coverImage": {
      "src": "logos/openai.svg",
      "alt": "OpenAI Child Safety Blueprint"
    }
  },
  {
    "id": "github-copilot-autopilot-mcp-cli-vscode-2026",
    "type": "news",
    "category": "editor",
    "title": "GitHub Copilot が Autopilot モード（自律エージェント）をプレビュー公開、CLI v1.0.21 で MCP サーバー管理にも対応",
    "excerpt": "GitHub が4月上旬、Copilot の2つの大きなアップデートを発表した。VS Code 向け Autopilot モードのパブリックプレビューと、Copilot CLI v1.0.21 での MCP サーバー管理コマンド追加だ。Autopilot はエージェントが自らアクションを承認し、エラーを自動リトライしてタスク完了まで自律実行する新モード。CLI の copilot mcp コマンドでは MCP サーバーの追加・一覧・有効化・無効化が可能に。コーディングツールのエージェント化がさらに加速している。",
    "date": "2026-04-10",
    "newsDate": "2026-04-08",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": ["GitHub Copilot", "エージェント", "MCP", "IDE", "開発ツール"],
    "coverImage": {
      "src": "logos/github.svg",
      "alt": "GitHub Copilot Autopilot MCP"
    }
  },
  {
    "id": "anthropic-claude-mythos-preview-glasswing-2026",
    "type": "news",
    "category": "model",
    "title": "Anthropic が Claude Mythos Preview を正式発表 — 「強すぎて公開しない」初のフロンティアモデル、Project Glasswingで27年物OpenBSDバグ含む数千のゼロデイを発見",
    "excerpt": "Anthropic が4月7日、フロンティアモデル「Claude Mythos Preview」を正式発表した。ただし汎用公開はせず、AWS・Apple・Google・Microsoft・NVIDIA等を含む約50の組織との「Project Glasswing」（$100Mのサイバーセキュリティイニシアティブ）でのみ利用される異例の形態。HLE（人類最後の試験）でツールなし56.8%／ツール使用64.7%（GPT-5.4 Proは42.7%/58.7%）、SWE-bench Verifiedで93.9%という圧倒的スコアを記録。発表前数週間で主要OS・ブラウザすべてにわたる数千のゼロデイ脆弱性を発見し、最古は27年前のOpenBSDのバグだった。「強すぎるAI」を初めて公にコントロールする試み。",
    "date": "2026-04-07",
    "newsDate": "2026-04-07",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": [
      "Anthropic",
      "Claude",
      "Mythos",
      "セキュリティ",
      "ベンチマーク"
    ],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Claude Mythos Preview Project Glasswing"
    }
  },
  {
    "id": "anthropic-overtakes-openai-revenue-30b-run-rate-2026",
    "type": "news",
    "category": "product",
    "title": "Anthropic が売上で OpenAI を逆転 — 年換算 $300億で $250億の OpenAI を追い越し、エンタープライズ特化戦略が結実",
    "excerpt": "Anthropic の年換算売上（ARR）が約300億ドルに到達し、OpenAI の約240〜250億ドルを上回ったことが明らかになった。Epoch AI が「2026年半ばに逆転」と予測していたが、それより早い時期での逆転となった。2025年末時点では Anthropic は約90億ドルで、わずか数ヶ月で3倍以上に成長。エンタープライズAPI に特化した戦略が、コンシューマー向け ChatGPT に依存する OpenAI を上回った形だ。",
    "date": "2026-04-06",
    "newsDate": "2026-04-06",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "Anthropic",
      "OpenAI",
      "売上",
      "エンタープライズ",
      "Claude"
    ],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Anthropic 売上で OpenAI を逆転"
    }
  },
  {
    "id": "openai-industrial-policy-intelligence-age-4day-workweek-2026",
    "type": "feature",
    "category": "regulation",
    "title": "OpenAI が「Intelligence Age の産業政策」を提言 — 週32時間労働、ロボット税、公的資産ファンド、AGI時代の社会再設計を訴える",
    "excerpt": "OpenAI が4月6日、13ページの政策提言書「Industrial Policy for the Intelligence Age」を公表。AGI時代に向けて、（1）給与据え置きで32時間/4日制の試験導入、（2）自動化労働への課税・ロボット税、（3）AI企業に出資する国民向け公的資産ファンドの創設、（4）安全網の自動発動メカニズム、（5）AIの信頼性・アラインメント・安全性への高い基準——を米国政府に提案。AI企業自らが「自社の影響を社会がどう吸収するか」を語り始めた歴史的な文書。",
    "date": "2026-04-06",
    "newsDate": "2026-04-06",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": [
      "OpenAI",
      "AGI",
      "規制",
      "労働",
      "社会"
    ],
    "coverImage": {
      "src": "logos/openai.svg",
      "alt": "OpenAI Intelligence Age 産業政策提言"
    }
  },
  {
    "id": "japan-personal-info-protection-law-ai-amendment-2026",
    "type": "feature",
    "category": "regulation",
    "title": "【特集／4月7日閣議決定】日本の個人情報保護法が改正へ — AI学習なら要配慮個人情報も「同意不要」、千人超の不正取得に課徴金、欧州とは逆方向の選択",
    "excerpt": "政府は4月7日、個人情報保護法の改正案を閣議決定する。AI開発を含む統計目的での個人データ利用について、病歴・犯罪歴・人種等の「要配慮個人情報」であっても本人同意を不要とする規制緩和が柱。同時に、千人を超える大規模な不正取得・利用を行った業者に対する課徴金制度を新設。漏えい時の本人通知義務の緩和、オプトアウト時の第三者提供先確認義務化、16歳未満の保護強化も盛り込む。EUのGDPR・AI Actが「同意とリスクベース規制」を強化する中、日本は「AI産業育成の追い風」を選んだ形だ。",
    "date": "2026-04-06",
    "newsDate": "2026-04-06",
    "author": "AI News 編集部",
    "readTime": "8分",
    "tags": [
      "日本",
      "個人情報保護法",
      "規制",
      "プライバシー",
      "AI政策"
    ],
    "coverImage": {
      "src": "articles/cover-model-api.svg",
      "alt": "日本の個人情報保護法改正 AI学習同意不要化"
    }
  },
  {
    "id": "vibe-coding-enterprise-backend-maintenance-2026",
    "type": "feature",
    "category": "regulation",
    "title": "【特集】バイブコーディング時代の基幹システム — フロントエンドは民主化された、では「沈黙の壊れ方」をする裏側を誰が守るのか",
    "excerpt": "バイブコーディングは、これまでSaaSが入れなかった小規模・細分化業界の業務システム需要を解放しつつある。フロントエンドのカスタマイズコストは劇的に下がった。しかしバックエンド・データ整合性・セキュリティ境界・災害復旧といった「沈黙の壊れ方」をする領域は、AIの70%生成では埋まらない。「午前3時問題」、「3年後にデータが壊れる問題」、規制業種の責任所在——本特集では、バイブコーディング時代における基幹システムの設計責任と、社会が整備すべき制度を提案する。",
    "date": "2026-04-06",
    "newsDate": "2026-04-06",
    "author": "AI News 編集部",
    "readTime": "9分",
    "tags": [
      "バイブコーディング",
      "エンタープライズ",
      "セキュリティ",
      "規制",
      "社会"
    ],
    "coverImage": {
      "src": "articles/cover-model-api.svg",
      "alt": "バイブコーディング時代の基幹システム特集"
    }
  },
  {
    "id": "cursor-3-agent-first-workspace-2026",
    "type": "news",
    "category": "product",
    "title": "Cursor 3 ローンチ — AIエージェント専用ワークスペース「Agents Window」搭載、ローカル・クラウド・SSH を統合した次世代コードエディタ",
    "excerpt": "Anysphere が4月2日に Cursor 3 をリリース。従来の Composer ペインを廃止し、複数AIエージェントを並列実行できる「Agents Window」を搭載。ローカル・クラウド・リモートSSH 間のシームレスなハンドオフ、ブラウザ上でUIを直接アノテーションする「Design Mode」、マルチリポ対応など、エージェントファーストの開発体験を実現。",
    "date": "2026-04-06",
    "newsDate": "2026-04-02",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "Cursor",
      "エージェント",
      "コードエディタ",
      "バイブコーディング",
      "開発ツール"
    ],
    "coverImage": {
      "src": "logos/cursor.svg",
      "alt": "Cursor 3 エージェントファースト・ワークスペース"
    }
  },
  {
    "id": "openai-122b-funding-round-852b-valuation-2026",
    "type": "news",
    "category": "product",
    "status": "retracted",
    "heroScope": "none",
    "title": "【取り下げ】OpenAI が史上最大 $1,220億の資金調達を完了",
    "excerpt": "本記事は同じ事象を扱う先行記事と内容が重複していたため、2026-06-05 に取り下げました。最新版は canonical 記事「OpenAI が史上最大の$122B（約18兆円）を調達、評価額$852B」をご参照ください。",
    "date": "2026-04-06",
    "newsDate": "2026-03-31",
    "author": "AI News 編集部",
    "readTime": "1分",
    "tags": [
      "OpenAI",
      "資金調達"
    ],
    "coverImage": {
      "src": "logos/openai.svg",
      "alt": "取り下げ済み記事"
    }
  },
  {
    "id": "github-copilot-training-data-policy-change-2026",
    "type": "news",
    "category": "product",
    "title": "GitHub Copilot が4月24日からユーザーコードをAI学習に使用開始 — Free/Pro/Pro+ が対象、オプトアウト猶予30日",
    "excerpt": "GitHub が Copilot の利用規約を更新し、4月24日から Free・Pro・Pro+ ユーザーのインタラクションデータ（入力コード・出力・コンテキスト）をAIモデルの学習に使用する。プライベートリポジトリのコードも対象。Business・Enterprise プランは除外。30日間のオプトアウト猶予期間が設けられたが、デフォルトはオプトインのため開発者コミュニティで議論が過熱。",
    "date": "2026-04-06",
    "newsDate": "2026-03-26",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "GitHub",
      "Copilot",
      "プライバシー",
      "データ学習",
      "開発ツール"
    ],
    "coverImage": {
      "src": "logos/github.svg",
      "alt": "GitHub Copilot データ学習ポリシー変更"
    }
  },
  {
    "id": "supabase-500m-funding-10b-valuation-2026",
    "type": "news",
    "category": "product",
    "title": "Supabase が $500M 調達・評価額 $100億に到達 — バイブコーディング需要がOSS BaaSの急成長を後押し",
    "excerpt": "オープンソースの Firebase 代替「Supabase」が、GIC 主導で5億ドルを調達し評価額100億ドルに到達。1年前の20億ドルから5倍の急成長。Cursor や Lovable などのバイブコーディングツールがデータベース需要を押し上げ、年間売上は2,000万ドルから7,000万ドルへ3.5倍に拡大。",
    "date": "2026-04-06",
    "newsDate": "2026-04-03",
    "author": "AI News 編集部",
    "readTime": "3分",
    "tags": [
      "Supabase",
      "資金調達",
      "オープンソース",
      "バイブコーディング",
      "データベース"
    ],
    "coverImage": {
      "src": "articles/cover-model-api.svg",
      "alt": "Supabase 500M調達 評価額100億ドル"
    }
  },
  {
    "id": "anthropic-coefficient-bio-acquisition-400m-2026",
    "type": "news",
    "category": "product",
    "title": "Anthropic がバイオテックAI新興企業 Coefficient Bio を約$400Mで買収 — 創業8ヶ月・社員10人未満の株式取引",
    "excerpt": "Anthropic が創業わずか8ヶ月のバイオテックAIスタートアップ Coefficient Bio を約4億ドルの株式交換で買収。共同創業者の Samuel Stanton と Nathan C. Frey は Genentech の Prescient Design 出身で、タンパク質設計・生体分子モデリングの専門家。Anthropic のヘルスケア・ライフサイエンス部門に合流し、製薬企業向けのAI特化ツール開発を加速。",
    "date": "2026-04-06",
    "newsDate": "2026-04-03",
    "author": "AI News 編集部",
    "readTime": "3分",
    "tags": [
      "Anthropic",
      "バイオテック",
      "買収",
      "ヘルスケア",
      "AI"
    ],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Anthropic Coefficient Bio 買収"
    }
  },
  {
    "id": "anthropic-1m-context-beta-deadline-april30-2026",
    "type": "news",
    "category": "product",
    "title": "【期限迫る】Claude 旧モデルの1Mコンテキストβが4月30日で終了 — Sonnet 4.5/4は200Kに制限、4.6へ移行を",
    "excerpt": "Anthropic が Claude Sonnet 4.5 と Claude Sonnet 4 の1Mトークンコンテキストウィンドウβを4月30日に終了する。期日以降は context-1m ヘッダーが無効化され、200Kトークンを超えるリクエストはエラーになる。Claude Sonnet 4.6 / Opus 4.6 は追加料金なしで1M対応済みのため、早めの移行が必要。",
    "date": "2026-04-06",
    "newsDate": "2026-04-06",
    "author": "AI News 編集部",
    "readTime": "3分",
    "tags": [
      "Anthropic",
      "Claude",
      "API",
      "コンテキストウィンドウ",
      "マイグレーション"
    ],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Claude 1Mコンテキストβ終了 4月30日期限"
    }
  },
  {
    "id": "design-md-ai-agent-design-system-format-2026",
    "type": "news",
    "category": "product",
    "title": "DESIGN.md — AIエージェントにデザインを伝える新フォーマットが急拡大、Google Stitch発・GitHub 9.5Kスター",
    "excerpt": "Google が Stitch 2.0 で導入したDESIGN.md（AIエージェント向けプレーンテキスト・デザインシステム）が急速に普及。VoltAgent が55以上の有名サイトのデザインを抽出した awesome-design-md リポジトリは GitHub で9.5Kスターを獲得。Figma も不要、.md ファイルをプロジェクトに置いて「これに従って作って」と言うだけで、AIがピクセルパーフェクトなUIを生成する。",
    "date": "2026-04-05",
    "newsDate": "2026-03-18",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "Google",
      "デザインシステム",
      "バイブコーディング",
      "オープンソース",
      "エージェント"
    ],
    "coverImage": {
      "src": "logos/google.svg",
      "alt": "DESIGN.md AIエージェント向けデザインシステム"
    }
  },
  {
    "id": "glassworm-invisible-unicode-malware-github-supply-chain-2026",
    "type": "news",
    "category": "product",
    "title": "不可視Unicode文字でマルウェア混入「GlassWorm」攻撃が急拡大 — GitHub 151+リポジトリ・npm・VS Code拡張433件以上が汚染",
    "excerpt": "不可視のUnicode制御文字を使い悪意あるコードを隠蔽するサイバー攻撃手法「GlassWorm」が2026年3月に急拡大。GitHub上の151以上のリポジトリ、npmパッケージ、VS Code拡張機能など433件以上が汚染された。1行のコードに1万8000行の不可視コードが埋め込まれた例も。React関連ライブラリやWasmer、OpenCode関連プロジェクトも被害。LLMでもっともらしいコードを大量生成している可能性が指摘されている。",
    "date": "2026-04-04",
    "newsDate": "2026-04-03",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "セキュリティ",
      "GitHub",
      "オープンソース",
      "サプライチェーン攻撃",
      "マルウェア"
    ],
    "coverImage": {
      "src": "articles/cover-model-api.svg",
      "alt": "GlassWorm 不可視Unicode攻撃"
    }
  },
  {
    "id": "anthropic-claude-third-party-harness-extra-usage-2026",
    "type": "news",
    "category": "product",
    "title": "Anthropic が OpenClaw 等サードパーティ製ハーネスのサブスク枠利用を正式停止 — Extra Usage（従量課金）へ移行、月額相当の一回限りクレジット付与",
    "excerpt": "Anthropic が4月4日12時（PT）から、OpenClaw をはじめとするサードパーティ製ハーネスでの Claude サブスクリプション枠の利用を正式に停止。今後はサブスクとは別請求の Extra Usage（従量課金）が必要になる。Claude Code・Cowork は引き続き定額枠内。移行措置として月額サブスク料金と同額の一回限りクレジットを付与し、事前購入バンドルで最大30%割引も導入。1月の OAuth 遮断、2月の規約明記に続く最終段階。",
    "date": "2026-04-04",
    "newsDate": "2026-04-04",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "Anthropic",
      "Claude",
      "OpenClaw",
      "料金",
      "エージェント"
    ],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Anthropic サードパーティハーネス Extra Usage 移行"
    }
  },
  {
    "id": "zperiod-3d-periodic-table-high-school-student-2026",
    "type": "news",
    "category": "product",
    "title": "16歳の高校生が3Dインタラクティブ周期表アプリ「Zperiod」を開発 — 3D原子モデル・化学式バランサー・溶解度表をブラウザで無料提供",
    "excerpt": "16歳の高校生 Philip Zhao が開発した3Dインタラクティブ化学学習アプリ「Zperiod」が X で話題に。全118元素の3D原子モデル、化学反応式の自動バランサー、経験式計算機、溶解度表をブラウザ上で無料提供。19万回表示・4,000いいねを超える反響を集めた。",
    "date": "2026-04-04",
    "newsDate": "2026-04-03",
    "author": "AI News 編集部",
    "readTime": "3分",
    "tags": [
      "個人開発",
      "教育",
      "Webアプリ",
      "3D",
      "オープンソース"
    ],
    "coverImage": {
      "src": "articles/cover-model-api.svg",
      "alt": "Zperiod 3Dインタラクティブ周期表"
    }
  },
  {
    "id": "claude-microsoft-365-connector-all-plans-2026",
    "type": "news",
    "category": "product",
    "title": "Claude の Microsoft 365 コネクターが全プラン開放 — Outlook・OneDrive・SharePoint・Teams を会話に直接接続",
    "excerpt": "Anthropic が Claude の Microsoft 365 コネクターを Free・Pro・Max を含む全プランに開放。Outlook・OneDrive・SharePoint・Teams を $0 で AI に接続できるようになった。Microsoft が同機能の Copilot に $30/ユーザー/月を課金する中、Anthropic は Microsoft 自身が承認したコネクターを無料開放し、4億の M365 ユーザー基盤に直接アプローチする戦略を明確化。",
    "date": "2026-04-04",
    "newsDate": "2026-04-04",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "Anthropic",
      "Claude",
      "Microsoft",
      "Microsoft 365",
      "エンタープライズ"
    ],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Claude Microsoft 365 コネクター全プラン開放"
    }
  },
  {
    "id": "pika-pikastream-video-chat-skill-2026",
    "type": "news",
    "category": "product",
    "title": "Pika が PikaStream1.0 搭載のビデオチャットスキルを公開 — AIエージェントがビデオ会議に参加し、記憶と個性を維持したまま会話",
    "excerpt": "Pika Labs がリアルタイム動画生成モデル「PikaStream1.0」を搭載したオープンソースのビデオチャットスキルを公開。AIエージェント（Claude Code 等）に組み込むと、Google Meet にAIアバターが参加し、ワークスペースの文脈を理解した状態でビデオ会話ができる。音声クローン・アバター生成・記憶維持・会議メモ自動生成に対応。料金は $0.50/分。",
    "date": "2026-04-03",
    "newsDate": "2026-04-02",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "Pika",
      "動画生成AI",
      "エージェント",
      "オープンソース",
      "ビデオ会議"
    ],
    "coverImage": {
      "src": "articles/cover-model-api.svg",
      "alt": "Pika PikaStream1.0 ビデオチャットスキル"
    }
  },
  {
    "id": "microsoft-mai-transcribe-voice-image-foundry-2026",
    "type": "news",
    "category": "model",
    "title": "Microsoft が独自AIモデル3種を公開 — 文字起こし・音声生成・画像生成、Foundry で即日商用利用可能",
    "excerpt": "Microsoft が自社開発の MAI モデル3種を発表。MAI-Transcribe-1 は音声認識 WER 3.9% で FLEURS ベンチ業界最高、MAI-Voice-1 は60秒音声を1秒で生成、MAI-Image-2 は2倍高速化で Arena.ai トップ3入り。全モデルが Microsoft Foundry で即日商用利用可能。テキスト生成は引き続き他社モデル依存だが、メディア生成では独自路線を明確化。",
    "date": "2026-04-03",
    "newsDate": "2026-04-03",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "Microsoft",
      "音声認識",
      "音声生成",
      "画像生成AI",
      "Azure"
    ],
    "coverImage": {
      "src": "logos/microsoft.svg",
      "alt": "Microsoft MAI Models"
    }
  },
  {
    "id": "claude-computer-use-windows-launch-2026",
    "type": "news",
    "category": "product",
    "title": "Claude Computer Use が Windows に対応 — Cowork・Claude Code Desktop でデスクトップ操作が macOS/Windows 両対応に",
    "excerpt": "Anthropic が Claude の Computer Use 機能を Windows に拡大。Claude Cowork と Claude Code Desktop の両方で、Windows 上のアプリ操作・ブラウザ操作・スプレッドシート入力などをAIが自律実行できるようになった。Pro / Max プラン限定。3月23日の macOS 対応から約10日でデスクトップPC市場の約70%をカバー。",
    "date": "2026-04-03",
    "newsDate": "2026-04-02",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "Anthropic",
      "Claude",
      "Computer Use",
      "Windows",
      "エージェント"
    ],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Claude Computer Use Windows 対応"
    }
  },
  {
    "id": "gemini-api-billing-tier-spend-cap-2026",
    "type": "news",
    "category": "product",
    "title": "Gemini API に課金ティア上限が強制適用 — Tier 1は月$250、超過で全リクエスト停止",
    "excerpt": "Google が Gemini API に課金アカウント単位の月額支出上限を4月1日から強制適用。Tier 1は$250/月、Tier 2は$2,000/月、Tier 3は$20,000〜。上限到達で次の請求サイクルまで全APIリクエストが停止される。プロジェクト単位の任意上限とは別の仕組みで、無効化できない。",
    "date": "2026-04-03",
    "newsDate": "2026-04-01",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "Google",
      "Gemini",
      "API",
      "料金",
      "課金"
    ],
    "coverImage": {
      "src": "logos/gemini.svg",
      "alt": "Gemini API 課金ティア上限"
    }
  },
  {
    "id": "nvidia-physical-ai-data-factory-blueprint-2026",
    "type": "news",
    "category": "product",
    "title": "NVIDIA が Physical AI Data Factory Blueprint を公開 — ロボティクス・自動運転の学習データ生成を自動化するオープン参照アーキテクチャ",
    "excerpt": "NVIDIA が物理 AI 向けの学習データ生成・拡張・評価を統合するオープンな参照アーキテクチャ「Physical AI Data Factory Blueprint」を発表。合成データ生成から強化学習まで一気通貫で自動化し、ロボティクス・ビジョン AI・自動運転の開発コストを削減。GitHub で4月中に公開予定。",
    "date": "2026-04-03",
    "newsDate": "2026-04-02",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "NVIDIA",
      "ロボティクス",
      "合成データ",
      "オープンソース",
      "自動運転"
    ],
    "coverImage": {
      "src": "logos/nvidia.svg",
      "alt": "NVIDIA Physical AI Data Factory Blueprint"
    }
  },
  {
    "id": "anthropic-1m-context-beta-retirement-2026",
    "type": "news",
    "category": "product",
    "title": "Anthropic、Sonnet 4.5/4 の1Mコンテキストベータを4月30日で廃止 — Opus 4.6・Sonnet 4.6 では標準料金でGA",
    "excerpt": "Anthropic が Claude Sonnet 4.5 と Sonnet 4 の1Mトークンコンテキストウィンドウベータを4月30日で終了。以降 context-1m ヘッダーは無効化される。Opus 4.6・Sonnet 4.6 では1Mコンテキストが標準料金でGA済みのため、移行を推奨。Web検索・Web Fetch も同時にGA。",
    "date": "2026-04-03",
    "newsDate": "2026-04-01",
    "author": "AI News 編集部",
    "readTime": "3分",
    "tags": [
      "Anthropic",
      "Claude",
      "コンテキストウィンドウ",
      "API",
      "料金"
    ],
    "coverImage": {
      "src": "articles/cover-model-api.svg",
      "alt": "Anthropic 1M コンテキストベータ廃止"
    }
  },
  {
    "id": "claw-code-oss-agent-harness-100k-stars-2026",
    "type": "news",
    "category": "cli",
    "title": "Claw Code — Claude Code アーキテクチャのクリーンルーム再実装が公開数日で100K Stars超え、GitHub史上最速",
    "excerpt": "Claude Code のソースマップ流出を受け、エージェントハーネスをゼロからPython＋Rustで再実装した OSS プロジェクト「Claw Code」が GitHub で公開数日で100K Stars を突破。プロプライエタリコードのコピーなし・クリーンルーム設計を掲げ、ツール接続・タスクワークフロー・ファイルシステム操作の制御層を完全にオープン化。",
    "date": "2026-04-03",
    "newsDate": "2026-04-02",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "オープンソース",
      "エージェント",
      "CLI",
      "Claude Code",
      "Rust",
      "Python"
    ],
    "coverImage": {
      "src": "articles/cover-model-api.svg",
      "alt": "Claw Code OSS エージェントハーネス"
    }
  },
  {
    "id": "langchain-langgraph-3-cves-data-leak-2026",
    "type": "news",
    "category": "data",
    "title": "LangChain・LangGraph に重大脆弱性3件 — パストラバーサル・秘密情報漏洩・SQLインジェクション、CVSS最大9.3",
    "excerpt": "AIエージェントフレームワークの LangChain と LangGraph に3件の脆弱性が公開された。CVE-2026-34070（パストラバーサル、CVSS 7.5）、CVE-2025-68664（デシリアライゼーションによる秘密情報漏洩、CVSS 9.3）、CVE-2025-67644（SQLインジェクション、CVSS 7.3）。週間ダウンロード数5,200万超の広く使われるフレームワークであり、即時アップデートが推奨される。",
    "date": "2026-04-03",
    "newsDate": "2026-03-31",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "セキュリティ",
      "LangChain",
      "脆弱性",
      "エージェント",
      "CVE"
    ],
    "coverImage": {
      "src": "articles/cover-model-api.svg",
      "alt": "LangChain LangGraph 脆弱性"
    }
  },
  {
    "id": "us-ai-regulation-federal-vs-state-preemption-2026",
    "type": "feature",
    "category": "regulation",
    "title": "米国AI規制の連邦 vs 州 — トランプ大統領令が州法プリエンプションを主張、コロラド州は法改正で対抗",
    "excerpt": "トランプ大統領が2025年12月に署名したAI大統領令は、州のAI規制法を連邦権限で無効化する「プリエンプション」を主張。司法省にAI訴訟タスクフォース設立を指示し、コロラド州AI法を名指しで批判した。一方、カリフォルニア・コロラド・ニューヨークの知事は州法の施行を継続すると表明。連邦法なき「大統領令 vs 州法」の法的対立が2026年のAI規制の焦点になっている。",
    "date": "2026-04-03",
    "newsDate": "2026-04-01",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": [
      "AI規制",
      "アメリカ",
      "コロラド州",
      "プリエンプション",
      "大統領令"
    ],
    "coverImage": {
      "src": "articles/cover-model-api.svg",
      "alt": "米国AI規制 連邦 vs 州"
    }
  },
  {
    "id": "google-vids-veo31-free-video-generation-2026",
    "type": "news",
    "category": "product",
    "title": "Google Vids に Veo 3.1 統合 — AI動画生成が Workspace ユーザーに開放、カスタムアバターも追加",
    "excerpt": "Google が動画編集ツール Google Vids に Veo 3.1 を統合。テキストプロンプトから高品質動画を生成でき、4K・ネイティブ音声・最大140秒超のシーン連結に対応。カスタマイズ可能なAIアバター機能も追加。Sora 撤退後の動画生成AI市場で Google が攻勢を強める。",
    "date": "2026-04-02",
    "newsDate": "2026-04-02",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "Google",
      "Veo",
      "動画生成AI",
      "Google Workspace",
      "Vids",
      "アバター"
    ],
    "coverImage": {
      "src": "logos/google-vids.svg",
      "alt": "Google Vids Veo 3.1"
    }
  },
  {
    "id": "gemma-4-apache2-edge-moe-dense-2026",
    "type": "news",
    "category": "model",
    "title": "Google Gemma 4 公開 — Apache 2.0 で完全オープン化、エッジからワークステーションまで4モデル展開",
    "excerpt": "Google DeepMind が Gemma 4 を Apache 2.0 ライセンスで公開。31B Dense（LMArena 3位）、26B MoE（3.8Bアクティブで6位）、E4B・E2B のエッジモデルまで4種。ネイティブ音声入力・140言語・最大256Kコンテキスト。Ollama 0.20+ で即実行可能。",
    "date": "2026-04-02",
    "newsDate": "2026-04-02",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "Google",
      "Gemma",
      "オープンソース",
      "Apache 2.0",
      "エッジAI",
      "MoE"
    ],
    "coverImage": {
      "src": "logos/gemma.svg",
      "alt": "Google Gemma 4"
    }
  },
  {
    "id": "realtime-translation-oss-security-cost-2026",
    "type": "feature",
    "category": "product",
    "title": "リアルタイム翻訳が個人開発で作れる時代に — OSS翻訳アプリの台頭と「音声データはどこへ行くのか」問題",
    "excerpt": "RTranslator、LiveCaptions-Translator など完全ローカル動作のオープンソース翻訳アプリが続々登場。クラウド不要・APIキー不要で会話がリアルタイム翻訳される一方、商用サービスでは音声データの二次利用やクラウド送信が懸念材料に。翻訳業界の価格破壊と、個人開発が加速する背景を整理する。",
    "date": "2026-04-02",
    "newsDate": "2026-04-02",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": [
      "リアルタイム翻訳",
      "Whisper",
      "プライバシー",
      "オープンソース",
      "エッジAI",
      "個人開発"
    ],
    "coverImage": {
      "src": "articles/cover-model-api.svg",
      "alt": "リアルタイム翻訳"
    }
  },
  {
    "id": "prismml-bonsai-1bit-llm-edge-2026",
    "type": "news",
    "category": "model",
    "title": "PrismML が世界初の商用1ビット LLM「Bonsai」を公開 — 8Bモデルがわずか1GBで動作、メモリ14分の1・速度8倍",
    "excerpt": "Caltech 発の PrismML がステルスから登場し、1ビットネイティブ設計の LLM「Bonsai」シリーズを Apache 2.0 で公開。8B モデルが約1GBに収まり、M4 Pro で136トークン/秒、iPhone で44トークン/秒。Llama 3 8B を上回るベンチマークを14分の1のメモリで達成した。",
    "date": "2026-04-02",
    "newsDate": "2026-03-31",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "PrismML",
      "1ビット",
      "エッジAI",
      "軽量モデル",
      "llama.cpp",
      "オープンソース"
    ],
    "coverImage": {
      "src": "logos/prismml.svg",
      "alt": "PrismML Bonsai"
    }
  },
  {
    "id": "rf-detr-aerial-drone-detection-dual-use-2026",
    "type": "feature",
    "category": "data",
    "title": "RF-DETR × ドローン映像で森林調査もスマートシティも — AI 物体検出の「民生と軍事」2つの顔",
    "excerpt": "Roboflow の RF-DETR をドローン映像にファインチューンし、樹木の自動カウントや交差点の交通解析を実現するデモが話題に。同じ技術は Palantir の軍事 AI プラットフォームにも通じる。AI 物体検出のデュアルユース問題を、最新の米国防総省 × Anthropic 紛争とともに考える。",
    "date": "2026-04-02",
    "newsDate": "2026-04-02",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": [
      "Roboflow",
      "物体検出",
      "ドローン",
      "Palantir",
      "Anthropic",
      "軍事AI",
      "オープンソース"
    ],
    "coverImage": {
      "src": "logos/roboflow.svg",
      "alt": "RF-DETR Aerial Detection"
    }
  },
  {
    "id": "qwen-3-6-plus-agentic-coding-multimodal-2026",
    "type": "news",
    "category": "model",
    "title": "Alibaba Qwen 3.6-Plus リリース — エージェント型コーディングで Terminal-Bench 首位、1Mコンテキスト・マルチモーダル強化でフロンティアに挑む",
    "excerpt": "Alibaba が Qwen3.6-Plus を公開。Terminal-Bench 2.0 で61.6%（Claude 4.5 Opus 超え）、SWE-bench Pro で56.6%と、エージェント型コーディングで最高水準を記録。1Mトークンのコンテキストウィンドウ、常時オンの思考連鎖、マルチモーダル視覚推論の大幅強化を搭載し、プレビュー期間中は無料提供。",
    "date": "2026-04-02",
    "newsDate": "2026-04-02",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": [
      "Alibaba",
      "Qwen",
      "エージェント",
      "コーディング",
      "マルチモーダル",
      "ベンチマーク"
    ],
    "coverImage": {
      "src": "logos/alibaba.svg",
      "alt": "Alibaba Qwen 3.6-Plus"
    }
  },
  {
    "id": "alibaba-page-agent-browser-automation-2026",
    "type": "news",
    "category": "product",
    "title": "Alibaba が Page Agent を公開 — APIキー不要・環境構築不要、ブラウザ上のタスクを自然言語で自動化するOSSエージェント",
    "excerpt": "Alibaba がブラウザ操作を自然言語で自動化する Page Agent を公開。Qwen 3.5 搭載のデモはAPIキーも環境構築も不要で即体験可能。script タグ1行で既存サイトに組み込め、DOM をテキストベースで解析するためスクリーンショットもマルチモーダル LLM も不要。GitHub スター1.5万。",
    "date": "2026-04-02",
    "newsDate": "2026-04-02",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "Alibaba",
      "Qwen",
      "ブラウザ自動化",
      "エージェント",
      "MCP",
      "オープンソース"
    ],
    "coverImage": {
      "src": "logos/alibaba.svg",
      "alt": "Alibaba Page Agent"
    }
  },
  {
    "id": "codex-plugins-marketplace-2026",
    "type": "news",
    "category": "cli",
    "title": "OpenAI Codex にプラグインマーケットプレイスが登場 — Slack・Figma・Notion など 20 以上のツールと即連携",
    "excerpt": "OpenAI が Codex 向けに 20 以上のプラグインを一斉公開。Slack・Figma・Notion・Gmail・Google Drive などと認証込みで即接続でき、コーディングだけでなく企画・調査・連携までエージェントに任せられる。",
    "date": "2026-03-31",
    "newsDate": "2026-03-26",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "OpenAI",
      "Codex",
      "プラグイン",
      "MCP",
      "Slack",
      "Figma",
      "エージェント"
    ],
    "coverImage": {
      "src": "logos/openai.svg",
      "alt": "OpenAI Codex"
    }
  },
  {
    "id": "openai-sora-shutdown-2026",
    "type": "news",
    "category": "product",
    "title": "OpenAI、動画生成アプリ Sora を終了 — 1日100万ドルの運用コスト、計算資源をロボティクスへ転換",
    "excerpt": "OpenAI が動画生成アプリ Sora のシャットダウンを発表。ピーク時100万ユーザーから50万未満に減少し、1日約100万ドルの運用コストが重荷に。計算資源をロボティクスと ChatGPT コアに集中させる。",
    "date": "2026-03-31",
    "newsDate": "2026-03-24",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "OpenAI",
      "Sora",
      "動画生成",
      "ロボティクス",
      "GPU",
      "サービス終了"
    ],
    "coverImage": {
      "src": "logos/openai.svg",
      "alt": "OpenAI"
    }
  },
  {
    "id": "mistral-voxtral-tts-2026",
    "type": "news",
    "category": "model",
    "title": "Mistral、オープンウェイト音声合成モデル Voxtral TTS を公開 — ElevenLabs 超えを主張、5秒で声をクローン",
    "excerpt": "Mistral AI がオープンウェイトの音声合成モデル Voxtral TTS を公開。3Bパラメータでスマートウォッチでも動作し、ブラインドテストで ElevenLabs を上回ったと主張。9言語対応、5秒の音声サンプルでボイスクローンが可能。",
    "date": "2026-03-31",
    "newsDate": "2026-03-26",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "Mistral",
      "Voxtral",
      "TTS",
      "音声合成",
      "オープンソース",
      "ボイスクローン"
    ],
    "coverImage": {
      "src": "logos/mistral.svg",
      "alt": "Mistral AI"
    }
  },
  {
    "id": "supabase-pgvector-0-8-2026",
    "type": "news",
    "category": "data",
    "title": "Supabase が pgvector 0.8 を標準搭載 — HNSW インデックス性能が3倍に、RAG 構築がさらに手軽に",
    "excerpt": "Supabase が pgvector 0.8 へのアップグレードを全プロジェクトに展開。HNSW インデックスのビルド速度が3倍に向上し、100万ベクトル規模の検索が PostgreSQL 上で実用的に。無料枠でも利用可能。",
    "date": "2026-03-29",
    "newsDate": "2026-03-27",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "Supabase",
      "pgvector",
      "RAG",
      "ベクトル検索",
      "PostgreSQL"
    ],
    "coverImage": {
      "src": "logos/supabase.svg",
      "alt": "Supabase"
    }
  },
  {
    "id": "pinecone-serverless-free-tier-2026",
    "type": "news",
    "category": "data",
    "title": "Pinecone、サーバーレス無料枠を大幅拡充 — 100万ベクトルまで無料、RAG のプロトタイプが無料で完結",
    "excerpt": "Pinecone がサーバーレスプランの無料枠を100万ベクトルに拡大。これまでの10万ベクトルから10倍に。中規模の RAG アプリケーションのプロトタイプが無料で構築できるようになった。",
    "date": "2026-03-29",
    "newsDate": "2026-03-25",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "Pinecone",
      "ベクトルDB",
      "RAG",
      "無料枠",
      "サーバーレス"
    ]
  },
  {
    "id": "langchain-v04-rag-pipeline-2026",
    "type": "news",
    "category": "data",
    "title": "LangChain v0.4 リリース — RAG パイプラインの構築が大幅に簡素化、LangGraph との統合強化",
    "excerpt": "LangChain v0.4 がリリースされ、RAG パイプラインの構築 API が刷新された。ドキュメントローダー・チャンキング・検索・生成の一連の流れを10行以下で記述可能に。LangGraph によるエージェント型 RAG もサポート。",
    "date": "2026-03-29",
    "newsDate": "2026-03-26",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "LangChain",
      "RAG",
      "LangGraph",
      "エージェント",
      "Python"
    ]
  },
  {
    "id": "midjourney-v8-api-launch-2026",
    "type": "news",
    "category": "media",
    "title": "Midjourney V8、ついに Web 版と API を正式公開 — Discord 不要で画像生成が可能に",
    "excerpt": "Midjourney が V8 モデルとともに Web アプリと REST API を正式公開。Discord 経由でしか使えなかった制約がなくなり、開発者はアプリケーションに画像生成を直接組み込めるようになった。1画像あたり約$0.03、月額$10のBasicプランで200枚生成可能。",
    "date": "2026-03-28",
    "newsDate": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "Midjourney",
      "画像生成",
      "API",
      "V8"
    ],
    "coverImage": {
      "src": "articles/cover-media-art.svg",
      "alt": "AI アート"
    }
  },
  {
    "id": "runway-gen5-video-generation-2026",
    "type": "news",
    "category": "media",
    "title": "Runway Gen-5 発表 — 最大2分の高品質動画生成、物理シミュレーションとカメラ制御が大幅進化",
    "excerpt": "Runway が Gen-5 を発表。最大120秒の動画生成に対応し、物理法則に従った物体の動き、精密なカメラワーク制御、音声同期リップシンクを実現。API 経由でのバッチ生成にも対応し、映像制作ワークフローへの組み込みが現実的に。",
    "date": "2026-03-27",
    "newsDate": "2026-03-27",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": [
      "Runway",
      "動画生成",
      "Gen-5",
      "API"
    ],
    "coverImage": {
      "src": "articles/cover-media-video.svg",
      "alt": "動画制作"
    }
  },
  {
    "id": "ai-image-api-guide-developers-2026",
    "type": "feature",
    "category": "media",
    "title": "開発者のための画像生成API入門 — GPT Image・Flux・Midjourney・Recraft を比較して選ぶ",
    "excerpt": "画像生成をアプリに組み込みたい開発者向けに、主要4つの API を料金・品質・速度・ライセンスの軸で比較。バイブコーディングで「とりあえず動く画像生成」を実装するための最短ルートを示す。",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "8分",
    "tags": [
      "画像生成",
      "API",
      "開発者向け",
      "GPT Image",
      "Flux",
      "Midjourney",
      "Recraft"
    ],
    "coverImage": {
      "src": "articles/cover-media-art.svg",
      "alt": "AI アート"
    },
    "heroScope": "none"
  },
  {
    "id": "how-ai-models-are-built-2026",
    "type": "feature",
    "category": "model",
    "title": "AI モデルはどう作られるのか — ゼロから学習・追加学習・RLHF を非エンジニア向けに解説",
    "excerpt": "Opus 4.6 のようなフロンティアモデルは数百億〜数千億円かけてゼロから作る。Cursor Composer 2 は Kimi K2.5 に追加学習して作った。RLHF で「やっていいこと・悪いこと」を教える。企業が自社の知識を入れるには RAG とファインチューニングのどちらが現実的か。国産 AI の動向も含めて、AI の「作り方」を解説する。",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "15分",
    "tags": [
      "AI学習",
      "事前学習",
      "ファインチューニング",
      "RLHF",
      "国産AI",
      "RAG",
      "非エンジニア"
    ],
    "coverImage": {
      "src": "articles/cover-model-api.svg",
      "alt": "ニューラルネットワーク"
    },
    "heroScope": "none"
  },
  {
    "id": "local-llm-vs-api-reality-2026",
    "type": "feature",
    "category": "model",
    "title": "ローカル LLM の現実 — API 契約 vs 自前運用のコスト・性能・限界を比較",
    "excerpt": "API に月額数万円を払うのがもったいないからローカルで動かしたい。その判断は正しいのか。7B〜70B モデルの必要スペック、Ollama / llama.cpp / vLLM の使い分け、API との損益分岐点、そして Opus 4.6 クラスがローカルで動かない物理的な理由を解説する。",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "12分",
    "tags": [
      "ローカルLLM",
      "Ollama",
      "vLLM",
      "API",
      "コスト",
      "VRAM",
      "非エンジニア"
    ],
    "coverImage": {
      "src": "articles/cover-server-infra.svg",
      "alt": "サーバールーム"
    },
    "heroScope": "none"
  },
  {
    "id": "cursor-composer-2-kimi-2026",
    "type": "news",
    "category": "editor",
    "title": "Cursor Composer 2 の正体 — Kimi K2.5 ベースの独自モデル、API 解析で判明",
    "excerpt": "Cursor の最新コーディングモデル Composer 2 が、中国 Moonshot AI のオープンウェイトモデル Kimi K2.5 をベースに追加学習して構築されたことが判明した。開発者が API トラフィックを解析し、モデル ID が kimi-k2p5 であることを発見。Cursor は「ベースモデルの言及漏れ」を認め、Moonshot AI は公式に支持を表明した。",
    "date": "2026-03-29",
    "newsDate": "2026-03-22",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": [
      "Cursor",
      "Composer 2",
      "Kimi K2.5",
      "Moonshot AI",
      "エディタ",
      "モデル",
      "オープンウェイト"
    ],
    "coverImage": {
      "src": "logos/cursor.svg",
      "alt": "Cursor"
    },
    "heroScope": "none"
  },
  {
    "id": "google-agent-smith-2026",
    "type": "news",
    "category": "product",
    "title": "Google 社内 AI エージェント「Agent Smith」が話題 — PC を閉じても作業を継続、スマホから進捗確認・追加指示",
    "excerpt": "Google が社内で開発・利用している AI エージェント Agent Smith が注目を集めている。Antigravity プラットフォーム上に構築され、コーディングだけでなく社内システム横断の業務を自律的に処理する。PC を閉じてもバックグラウンドで作業を継続し、スマホから進捗確認と追加指示が可能。社内チャットから直接 AI に指示できる統合も実現しており、利用者が急増してアクセス制限がかかるほどの人気。",
    "date": "2026-03-28",
    "newsDate": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "Google",
      "Agent Smith",
      "Antigravity",
      "エージェント",
      "自律実行"
    ],
    "coverImage": {
      "src": "logos/google.svg",
      "alt": "Google"
    },
    "heroScope": "none"
  },
  {
    "id": "kat-coder-pro-v2-2026",
    "type": "news",
    "category": "model",
    "title": "Kwai（快手）、コーディング特化モデル KAT-Coder Pro V2 を公開 — SWE-Bench 73.4%、OpenClaw 対応",
    "excerpt": "中国の Kwai（快手）傘下の KwaiKAT が、エージェント型コーディングモデル KAT-Coder Pro V2 を公開した。1兆パラメータ超の MoE アーキテクチャで SWE-Bench Verified 73.4% を達成。OpenClaw ネイティブ対応で10以上のフレームワークに汎化。ランディングページや PPT を1文から生成する Web 美的生成機能も搭載。入力$0.30 / 出力$1.20 と低コスト。",
    "date": "2026-03-28",
    "newsDate": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "3分",
    "tags": [
      "Kwai",
      "KAT-Coder",
      "モデル",
      "コーディング",
      "中国"
    ],
    "coverImage": {
      "src": "logos/kwai.svg",
      "alt": "KAT-Coder Pro V2"
    },
    "heroScope": "none"
  },
  {
    "id": "kimi-k25-moonshot-2026",
    "type": "news",
    "category": "model",
    "title": "Moonshot AI、Kimi K2.5 を公開 — 1兆パラメータの MoE モデルが Opus 4.6 や GPT-5.4 に匹敵",
    "excerpt": "中国の Moonshot AI が Kimi K2.5 を公開した。1兆パラメータの Mixture of Experts（MoE）アーキテクチャで、推論時のアクティブパラメータは320億。Humanity's Last Exam で Opus 4.5 や GPT-5.2 High を上回るスコアを記録し、コーディング（SWE-bench 76.8%）やマルチモーダル（画像・動画入力対応）でもフロンティア級の性能を示している。オープンウェイトで公開。",
    "date": "2026-03-28",
    "newsDate": "2026-01-27",
    "author": "AI News 編集部",
    "readTime": "3分",
    "tags": [
      "Moonshot AI",
      "Kimi",
      "モデル",
      "オープンウェイト",
      "MoE",
      "Cursor"
    ],
    "coverImage": {
      "src": "logos/moonshot.svg",
      "alt": "Moonshot AI"
    },
    "heroScope": "none"
  },
  {
    "id": "glm-5-zhipu-2026",
    "type": "news",
    "category": "model",
    "title": "Zhipu AI、GLM-5 を公開 — 745億パラメータ MoE、Huawei チップで学習した中国発フロンティアモデル",
    "excerpt": "中国の Zhipu AI（智譜AI）が GLM-5 を公開した。745億パラメータの MoE モデルで、エージェント型 AI に最適化された設計。Huawei Ascend チップで学習され、MIT ライセンスのオープンソースとして提供。Opus 4.6 の約6分の1のコストで利用可能。香港市場で株価が34%急騰した。",
    "date": "2026-03-28",
    "newsDate": "2026-02-11",
    "author": "AI News 編集部",
    "readTime": "3分",
    "tags": [
      "Zhipu AI",
      "GLM-5",
      "モデル",
      "中国",
      "オープンソース"
    ],
    "coverImage": {
      "src": "articles/cover-model-api.svg",
      "alt": "AI"
    },
    "heroScope": "none"
  },
  {
    "id": "minimax-m27-2026",
    "type": "news",
    "category": "model",
    "title": "MiniMax、自己進化する AI モデル M2.7 を公開 — 人間の介入なしで強化学習の30〜50%を自動化",
    "excerpt": "中国の MiniMax が M2.7 を公開した。OpenClaw フレームワーク上で100ラウンド以上の自己最適化を自律的に実行し、人間の介入なしで30%の性能向上を達成。SWE-Pro で56.2%と Opus に迫るスコアを記録。「自己進化するモデル」として注目されている。",
    "date": "2026-03-28",
    "newsDate": "2026-03-18",
    "author": "AI News 編集部",
    "readTime": "3分",
    "tags": [
      "MiniMax",
      "M2.7",
      "モデル",
      "自己進化",
      "中国"
    ],
    "heroScope": "none"
  },
  {
    "id": "google-turboquant-2026",
    "type": "news",
    "category": "model",
    "title": "Google、AI を最大8倍高速化しメモリを6分の1に削減する圧縮アルゴリズム TurboQuant を発表",
    "excerpt": "Google Research が LLM の KV キャッシュを3ビットまで圧縮するアルゴリズム TurboQuant を発表した。NVIDIA H100 GPU 上で最大8倍の高速化と6倍以上のメモリ削減を精度損失なしで実現。Samsung や Micron などメモリチップ株に影響が出ている。",
    "date": "2026-03-28",
    "newsDate": "2026-03-25",
    "author": "AI News 編集部",
    "readTime": "3分",
    "tags": [
      "Google",
      "TurboQuant",
      "圧縮",
      "高速化",
      "メモリ"
    ],
    "heroScope": "none"
  },
  {
    "id": "singularity-mythos-2026-spring",
    "type": "feature",
    "category": "special",
    "title": "【特集】2026年春、シンギュラリティの入口に立っている — Mythos が示す AI 能力の急進",
    "excerpt": "Anthropic の内部モデル Mythos（Capybara ティア）のリーク、Google TurboQuant による8倍高速化、コールセンターを代替する音声 AI — 2026年第1四半期に起きたことを振り返ると、AI の能力曲線が急激に立ち上がっている。この特集では、今何が起きているのかを整理する。",
    "date": "2026-03-28",
    "newsDate": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "特集",
      "シンギュラリティ",
      "Mythos",
      "2026年",
      "AI安全性"
    ],
    "coverImage": {
      "src": "articles/cover-model-api.svg",
      "alt": "AI の未来"
    },
    "heroScope": "none"
  },
  {
    "id": "claude-code-codex-multi-agent-2026",
    "type": "news",
    "category": "cli",
    "title": "Claude Code と Codex CLI をターミナルで連携 — マルチエージェント開発の実践",
    "excerpt": "Claude Code と OpenAI Codex CLI を同じターミナルで並行起動し、それぞれの得意分野で分担させるマルチエージェント開発が話題になっている。Claude Code はアーキテクチャ設計と複雑な実装、Codex は自律タスクと DevOps に強い。",
    "date": "2026-03-28",
    "newsDate": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "3分",
    "tags": [
      "Claude Code",
      "Codex",
      "マルチエージェント",
      "CLI"
    ],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Anthropic"
    },
    "heroScope": "none"
  },
  {
    "id": "dexter-financial-agent-2026",
    "type": "news",
    "category": "product",
    "title": "金融版 Claude Code「Dexter」が話題 — 200行のオープンソースで株式分析・投資判断を自動化",
    "excerpt": "ターミナルで動作する自律型金融リサーチエージェント Dexter が GitHub で1.7万スターを獲得し話題に。約200行のコードで構築され、タスク計画・自己検証・リアルタイム市場データ分析を行う。Claude / Codex / ローカル LLM に対応。",
    "date": "2026-03-28",
    "newsDate": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "3分",
    "tags": [
      "Dexter",
      "金融",
      "エージェント",
      "オープンソース"
    ],
    "coverImage": {
      "src": "articles/cover-fintech.svg",
      "alt": "金融テクノロジー"
    },
    "heroScope": "none"
  },
  {
    "id": "gemini-31-flash-live-voice-2026",
    "type": "news",
    "category": "model",
    "title": "Google、Gemini 3.1 Flash Live を公開 — 応答 0.5 秒以下のリアルタイム音声 AI",
    "excerpt": "Google DeepMind が Gemini 3.1 Flash Live を開発者プレビューとして公開した。従来の「音声認識→推論→音声合成」の3段階を1つのモデルに統合し、応答遅延を 0.5 秒以下に短縮。90以上の言語に対応し、Python スクリプト1本で受付や問い合わせ対応を構築できるとされる。コールセンター業界への影響が注目されている。",
    "date": "2026-03-28",
    "newsDate": "2026-03-26",
    "author": "AI News 編集部",
    "readTime": "3分",
    "tags": [
      "Google",
      "Gemini",
      "音声AI",
      "リアルタイム",
      "Flash Live"
    ],
    "coverImage": {
      "src": "logos/gemini.svg",
      "alt": "Gemini"
    },
    "heroScope": "none"
  },
  {
    "id": "freee-mcp-remote-2026",
    "type": "news",
    "category": "product",
    "title": "freee、MCP リモート版をリリース — Claude から会計・人事労務・請求書など約270操作が可能に",
    "excerpt": "フリー株式会社が、AIエージェントから freee の基幹業務を操作できる MCP サーバー「freee-mcp」のリモート版を提供開始した。Claude Desktop や Claude Code から URL を追加してログインするだけで、会計・人事労務・請求書・工数管理・販売の5領域、約270の操作を AI から実行できる。",
    "date": "2026-03-28",
    "newsDate": "2026-03-27",
    "author": "AI News 編集部",
    "readTime": "3分",
    "tags": [
      "freee",
      "MCP",
      "リモートMCP",
      "会計",
      "Claude"
    ],
    "heroScope": "none"
  },
  {
    "id": "claude-code-auto-memory-disable-2026",
    "type": "news",
    "category": "cli",
    "title": "Claude Code、自動メモリ（Auto Memory）の無効化オプションを追加",
    "excerpt": "Claude Code に自動メモリ機能を無効にするオプションが追加された。settings.json に autoMemoryEnabled: false を設定するか、環境変数 CLAUDE_CODE_DISABLE_AUTO_MEMORY=1 で制御できる。プロジェクトごと・グローバルのどちらでも設定可能。",
    "date": "2026-03-28",
    "newsDate": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "2分",
    "tags": [
      "Claude Code",
      "Auto Memory",
      "設定",
      "Anthropic"
    ],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Anthropic"
    },
    "heroScope": "none"
  },
  {
    "id": "anthropic-ipo-october-2026",
    "type": "news",
    "category": "regulation",
    "title": "Anthropic、早ければ10月の IPO を検討 — 評価額600億ドル超の大型上場か",
    "excerpt": "Bloomberg の報道によると、Anthropic が早ければ2026年10月の IPO を検討している。評価額は600億ドル（約9兆円）超を想定し、Goldman Sachs や JPMorgan と初期段階の協議を進めているとされる。2月に完了した300億ドルの資金調達では評価額3,800億ドルを記録しており、OpenAI と並ぶ大型 AI 上場となる可能性がある。",
    "date": "2026-03-28",
    "newsDate": "2026-03-27",
    "author": "AI News 編集部",
    "readTime": "3分",
    "tags": [
      "Anthropic",
      "IPO",
      "株式",
      "資金調達"
    ],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Anthropic"
    },
    "heroScope": "none"
  },
  {
    "id": "nvidia-openclaw-nemoclaw-2026",
    "type": "news",
    "category": "product",
    "title": "NVIDIA、オープンソース AI エージェント基盤 NemoClaw を発表 — OpenClaw との連携でエンタープライズ向け安全機能を提供",
    "excerpt": "NVIDIA が、急成長中のオープンソース AI エージェント OpenClaw に対して、セキュリティ・プライバシー・ガバナンス機能を追加するリファレンスモデル NemoClaw を発表した。OpenClaw は GitHub で25万スターを超え、WhatsApp や Telegram と連携する自律型パーソナルアシスタントとして注目されている。",
    "date": "2026-03-28",
    "newsDate": "2026-03-17",
    "author": "AI News 編集部",
    "readTime": "3分",
    "tags": [
      "NVIDIA",
      "OpenClaw",
      "NemoClaw",
      "エージェント",
      "オープンソース"
    ],
    "heroScope": "none"
  },
  {
    "id": "vibe-coding-getting-started-2026",
    "type": "feature",
    "category": "special",
    "title": "バイブコーディング、何から始める？ — 2026年版おすすめツール",
    "excerpt": "AIと対話しながらコードを書く「バイブコーディング」を始めるなら、どのツールを選ぶか。入門から上級まで、レベル別・目的別の推奨パスを整理した。",
    "date": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "バイブコーディング",
      "入門",
      "ツール比較",
      "Claude",
      "Cursor",
      "Claude Code"
    ],
    "heroScope": "none"
  },
  {
    "id": "cli-tools-comparison-2026-march",
    "type": "feature",
    "category": "cli",
    "title": "CLI コーディングツール横断比較 — Claude Code・Codex・Gemini CLI・Aider・Copilot（2026年3月版）",
    "excerpt": "主要5つの CLI コーディングツールを、機能・料金・モデル・権限制御の軸で横並びに比較した。バイブコーディングの「ターミナル層」を選ぶ際の参考に。",
    "date": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": [
      "CLI",
      "比較",
      "Claude Code",
      "Codex",
      "Gemini CLI",
      "Aider",
      "Copilot"
    ],
    "coverImage": {
      "src": "articles/cover-cli-tools.svg",
      "alt": "ターミナル画面"
    },
    "heroScope": "none",
    "lastReviewed": "2026-03-29"
  },
  {
    "id": "editor-comparison-2026-march",
    "type": "feature",
    "category": "editor",
    "title": "AI エディタ横断比較 — Cursor・Windsurf・VS Code+Copilot（2026年3月版）",
    "excerpt": "AI エディタ三大勢力を、機能・料金・エージェント能力・拡張性の軸で横並びに比較した。Cursor/Windsurf の経営統合後の現状も含め、エディタ選びの判断材料を整理する。",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": [
      "エディタ",
      "比較",
      "Cursor",
      "Windsurf",
      "VS Code",
      "Copilot"
    ],
    "coverImage": {
      "src": "articles/cover-editor-ide.svg",
      "alt": "コードエディタ"
    },
    "heroScope": "none",
    "lastReviewed": "2026-03-29"
  },
  {
    "id": "pricing-comparison-all-tools-2026-march",
    "type": "feature",
    "category": "special",
    "title": "AI 開発ツール料金プラン横断比較 — CLI・エディタ・API 全8ツール（2026年3月版）",
    "excerpt": "Claude Code、Cursor、Windsurf、Codex、Gemini CLI、Copilot、Aider、Zed AI の料金体系を一覧で比較。無料枠・Pro・Enterprise まで、公式発表ベースで整理した。",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "8分",
    "tags": [
      "比較",
      "料金",
      "Claude Code",
      "Cursor",
      "Windsurf",
      "Codex",
      "Gemini CLI",
      "Copilot",
      "Aider"
    ],
    "coverImage": {
      "src": "articles/cover-pricing.svg",
      "alt": "データ分析"
    },
    "heroScope": "none",
    "lastReviewed": "2026-03-29"
  },
  {
    "id": "usecase-recommendation-matrix-2026",
    "type": "feature",
    "category": "special",
    "title": "用途別おすすめツール — 「何を使えばいいか」に答える（2026年3月版）",
    "excerpt": "Web 開発、データ分析、企業導入、初心者など用途別に最適なツールの組み合わせを整理した。目的と予算に合わせて選べるマトリクス形式。",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "8分",
    "tags": [
      "比較",
      "おすすめ",
      "用途別",
      "初心者",
      "Enterprise"
    ],
    "heroScope": "none",
    "lastReviewed": "2026-03-29"
  },
  {
    "id": "ai-config-files-comprehensive-guide-2026",
    "type": "feature",
    "category": "cli",
    "title": "AI 設定ファイル総合ガイド — CLAUDE.md・SKILL.md・AGENTS.md・.cursor/rules を一本化して理解する",
    "excerpt": "Claude Code の CLAUDE.md、スキルファイル、Codex の AGENTS.md、Cursor の .cursor/rules、llms.txt。AI コーディングツールの「設定ファイル」が乱立する中、それぞれの役割・配置場所・書き方のベストプラクティスを1本にまとめた。",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "12分",
    "tags": [
      "CLAUDE.md",
      "SKILL.md",
      "AGENTS.md",
      "Cursor",
      "設定",
      "チーム開発",
      "実用スキル"
    ],
    "coverImage": {
      "src": "articles/cover-cli-tools.svg",
      "alt": "ターミナル"
    },
    "heroScope": "none",
    "lastReviewed": "2026-03-29"
  },
  {
    "id": "mcp-comprehensive-guide-2026",
    "type": "feature",
    "category": "cli",
    "title": "MCP（Model Context Protocol）総合ガイド — 仕様・サーバ選定・DB連携・ブラウザ操作・セキュリティ",
    "excerpt": "MCP の仕様概要からサーバ選定、DB 連携・ブラウザ操作・SaaS API の実践パターン、権限設計・サプライチェーンリスクまで、1本にまとめた総合ガイド。v2 仕様やリモートサーバーにも言及。",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "14分",
    "tags": [
      "MCP",
      "Claude Code",
      "DB連携",
      "ブラウザ",
      "セキュリティ",
      "実用スキル",
      "freee"
    ],
    "heroScope": "none",
    "lastReviewed": "2026-03-29"
  },
  {
    "id": "git-ai-workflow-2026",
    "type": "feature",
    "category": "cli",
    "title": "AI × Git 連携ワークフロー — ブランチ戦略・PR 自動生成・コードレビュー活用",
    "excerpt": "Claude Code・Codex・Copilot を Git ワークフローに組み込む実践パターンを整理。ブランチ戦略、AI による PR 作成、コードレビュー支援、コミットメッセージの自動生成まで、公式機能ベースで解説する。",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "8分",
    "tags": [
      "Git",
      "Claude Code",
      "Codex",
      "Copilot",
      "PR",
      "コードレビュー",
      "実用スキル"
    ],
    "heroScope": "none"
  },
  {
    "id": "ai-regulation-q1-2026",
    "type": "feature",
    "category": "regulation",
    "title": "AI 規制・訴訟の動き — 2026年 Q1 の主要トピック",
    "excerpt": "Anthropic と米国防総省の法廷闘争、OpenAI Sora をめぐる提携解消、EU AI Act の施行開始など、2026年第1四半期の規制・訴訟動向を整理した。",
    "date": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": [
      "規制",
      "訴訟",
      "Anthropic",
      "OpenAI",
      "EU AI Act",
      "2026年Q1"
    ],
    "coverImage": {
      "src": "articles/cover-regulation.svg",
      "alt": "法規制"
    },
    "heroScope": "none"
  },
  {
    "id": "ai-copyright-landscape-2026",
    "type": "feature",
    "category": "regulation",
    "title": "AI と著作権 — 2026年時点の法的状況と開発者が知るべきこと",
    "excerpt": "AI 生成コードの著作権は誰にあるのか、学習データの利用は合法なのか。米国・EU・日本の現状を公式発表と判例ベースで整理し、開発者が実務で取るべき対応をまとめた。",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "9分",
    "tags": [
      "著作権",
      "規制",
      "法律",
      "EU AI Act",
      "米国",
      "日本"
    ],
    "coverImage": {
      "src": "articles/cover-regulation.svg",
      "alt": "法規制"
    },
    "heroScope": "none"
  },
  {
    "id": "ai-regulation-comparison-us-eu-japan-2026",
    "type": "feature",
    "category": "regulation",
    "title": "AI 規制比較 — 米国・EU・日本のアプローチの違い（2026年3月時点）",
    "excerpt": "AI 規制の三大圏域（米国・EU・日本）の規制方針を横並びで比較。リスクベース規制の EU、セクター別の米国、ガイドライン主導の日本。開発者が知るべき実務上の違いを整理した。",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "8分",
    "tags": [
      "規制",
      "EU AI Act",
      "米国",
      "日本",
      "比較",
      "ガイドライン"
    ],
    "heroScope": "none",
    "lastReviewed": "2026-03-29"
  },
  {
    "id": "ai-enterprise-legal-checklist-2026",
    "type": "feature",
    "category": "regulation",
    "title": "企業で AI コーディングツールを導入する際の法的チェックリスト",
    "excerpt": "企業が Claude Code・Cursor・Copilot 等の AI 開発ツールを導入する際に確認すべき法的・コンプライアンス上のポイントを整理。利用規約、データ取り扱い、知的財産、情報セキュリティの4観点からチェックリスト形式で解説する。",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "10分",
    "tags": [
      "Enterprise",
      "法律",
      "セキュリティ",
      "コンプライアンス",
      "導入ガイド"
    ],
    "heroScope": "none"
  },
  {
    "id": "monthly-roundup-2026-march",
    "type": "feature",
    "category": "special",
    "title": "【月刊まとめ】2026年3月の AI 開発ツール動向 — エージェント競争激化・M&A加速・規制の転換点",
    "excerpt": "2026年3月の AI 開発ツール界隈を総括。Cursor 2.4 の並列サブエージェント、Claude Code Auto mode、Gemini CLI 無料枠縮小、Cursor による Windsurf 買収、OpenAI の Astral 買収、Anthropic と国防総省の法廷闘争など、主要トピックを1本にまとめた。",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "12分",
    "tags": [
      "月刊まとめ",
      "2026年3月",
      "エージェント",
      "M&A",
      "規制",
      "Cursor",
      "Claude Code",
      "Gemini CLI"
    ],
    "heroScope": "none"
  },
  {
    "id": "overview-2026-spring",
    "type": "feature",
    "category": "special",
    "title": "【週刊まとめ】AI開発ツール — 2026年3月23日〜29日",
    "excerpt": "Anthropic が国防総省の「サプライチェーンリスク」指定を連邦地裁で差し止めた一方、OpenAI は Sora の消費者向け提供を終了。ARC-AGI-3 がフロンティアモデルの限界を浮き彫りにした翌日、Google が Gemini 3.1 Pro と MCP v2 を同時に発表。週末は Cursor 2.4 と Claude Code Auto mode が開発者のワークフローを更新し、Mythos 草稿の報道がセキュリティ銘柄を動かした。",
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
    "coverImage": {
      "src": "articles/cover-model-api.svg",
      "alt": "AI テクノロジー"
    },
    "heroScope": "week",
    "weekRoundupPeriod": {
      "start": "2026-03-23",
      "end": "2026-03-29"
    }
  },
  {
    "id": "overview-2026-week-mar16",
    "type": "feature",
    "category": "special",
    "title": "【週刊まとめ】AI開発ツール — 2026年3月16日〜22日",
    "excerpt": "OpenAI が GPT-5.4 mini/nano をリリースし、低コストモデルの選択肢を広げた。翌々日には Python ツール企業 Astral（uv・Ruff・ty）の買収を発表し、Codex のエコシステム強化に動いた。同じ週に Cursor が Windsurf の買収を完了し、AI エディタ市場は Cursor vs VS Code+Copilot の二極構造に近づいた。",
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
    "coverImage": {
      "src": "articles/cover-model-api.svg",
      "alt": "AI テクノロジー"
    },
    "heroScope": "week",
    "weekRoundupPeriod": {
      "start": "2026-03-16",
      "end": "2026-03-22"
    }
  },
  {
    "id": "guide-media-generative-tools-2026",
    "type": "feature",
    "category": "special",
    "title": "【ガイド】メディア生成ツール早見の見方 — 画像・動画・音楽",
    "excerpt": "ガイドの「メディア生成」タブに載せた代表ツールの位置づけと、権利・料金を確認するときの注意を短くまとめる。開発の道具選びはバイブコーディングタブ。",
    "date": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "ガイド",
      "メディア生成",
      "画像",
      "動画",
      "音楽",
      "特集"
    ]
  },
  {
    "id": "anthropic-mythos-leak",
    "type": "feature",
    "category": "model",
    "title": "Anthropic「Mythos」草稿漏えい報道 — Opus 超えの新ティア「Capybara」が注目集める",
    "excerpt": "Fortune や DNyuz ほかが報じた未公開アクセス問題。草稿に内部コードネーム「Mythos」「Capybara」が登場し、現行 Opus を上回る試作モデルとの見方が共有された。Anthropic は「ステップチェンジ級」の限定試験を認めつつ、段階的展開と安全側の姿勢を強調。",
    "date": "2026-03-28",
    "newsDate": "2026-03-27",
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
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Anthropic"
    }
  },
  {
    "id": "openai-six-layer-context-data-agent-2026",
    "type": "feature",
    "category": "data",
    "title": "OpenAI 社内データエージェントの「6層コンテキスト」— 表・SQL・RAG・Evals まで",
    "excerpt": "公式エンジニアリング記事（2026-01-29）に基づき、社内向けデータエージェントがテーブル理解と回答品質を支える Layer #1〜#6、日次パイプラインと埋め込み、クエリ時 RAG、Evals API による評価、セキュリティまで日本語で整理。",
    "date": "2026-03-28",
    "newsDate": "2026-01-29",
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
    "coverImage": {
      "src": "logos/openai.svg",
      "alt": "OpenAI"
    }
  },
  {
    "id": "rag-chunking-ingestion-2026",
    "type": "feature",
    "category": "data",
    "title": "RAG の取り込み設計 — チャンキング、親子構造、PDF／表／OCR、パイプライン監視",
    "excerpt": "ベクトル化の前段で成果が決まる。固定長だけでなく見出し・段落・構造を利用した分割、親チャンクと子チャンク、表・スキャン PDF・OCR のノイズ、メタデータとリネージ・再処理、障害検知までを実務目線で整理する。",
    "date": "2026-03-28",
    "newsDate": "2026-03-10",
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
    "coverImage": {
      "src": "articles/cover-database-rag.svg",
      "alt": "データベース"
    }
  },
  {
    "id": "rag-evaluation-citations-2026",
    "type": "feature",
    "category": "data",
    "title": "RAG の評価と引用 — ゴールデンセット、自動指標、引用 UI、閾値ルーティング",
    "excerpt": "「それっぽい回答」と「根拠付きで正しい回答」は別問題。ゴールデン Q&A・SQL・ドキュメント_span を用意し、自動採点と人手レビュー、引用チップの UI、confidence で再検索や拒否へルーティングする実務パターンを整理。",
    "date": "2026-03-28",
    "newsDate": "2026-03-11",
    "author": "AI News 編集部",
    "readTime": "9分",
    "tags": [
      "RAG",
      "評価",
      "引用",
      "ゴールデンセット",
      "品質"
    ]
  },
  {
    "id": "rag-enterprise-acl-privacy-2026",
    "type": "feature",
    "category": "data",
    "title": "エンタープライズ RAG の ACL・PII・監査 — テナント分離とスナップショット",
    "excerpt": "「社内文書を全部ベクトル化」は最短でコンプライアンス事故を起こす。IdP とのグループ同期、コレクション／行レベル ACL、PII 検出とマスキング、削除権・スナップショット、ログの監査可能性までを整理する。",
    "date": "2026-03-28",
    "newsDate": "2026-03-12",
    "author": "AI News 編集部",
    "readTime": "9分",
    "tags": [
      "RAG",
      "ACL",
      "PII",
      "監査",
      "エンタープライズ",
      "セキュリティ"
    ]
  },
  {
    "id": "rag-getting-started-step-by-step-2026",
    "type": "feature",
    "category": "data",
    "title": "RAG をゼロから構築する — ステップバイステップガイド（2026年版）",
    "excerpt": "Retrieval-Augmented Generation（RAG）を初めて構築する開発者向けに、ドキュメント取り込み→ベクトル化→検索→生成の4ステップを公式ドキュメントベースで解説。技術選定の判断軸とよくある落とし穴も整理した。",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "10分",
    "tags": [
      "RAG",
      "ベクトルDB",
      "Embedding",
      "入門",
      "ステップバイステップ"
    ],
    "coverImage": {
      "src": "articles/cover-database-rag.svg",
      "alt": "データベース"
    },
    "heroScope": "none"
  },
  {
    "id": "vector-db-comparison-2026",
    "type": "feature",
    "category": "data",
    "title": "ベクトルデータベース比較 — pgvector・Pinecone・Weaviate・Chroma・Qdrant（2026年版）",
    "excerpt": "RAG やセマンティック検索の基盤となるベクトル DB を、アーキテクチャ・スケーラビリティ・コスト・運用の軸で比較。既存 PostgreSQL への追加か、専用マネージドか、OSS ローカルか、選定の判断基準を整理した。",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "9分",
    "tags": [
      "ベクトルDB",
      "RAG",
      "pgvector",
      "Pinecone",
      "Weaviate",
      "Chroma",
      "Qdrant",
      "比較"
    ],
    "heroScope": "none",
    "lastReviewed": "2026-03-29"
  },
  {
    "id": "ai-dev-stacks-python-js-node-2026",
    "type": "feature",
    "category": "cli",
    "title": "AI 開発と言語ランタイムの周辺 — Python・JavaScript・Node.js・Bun のいま（2026）",
    "excerpt": "エージェントや RAG のサンプルは Python / TypeScript が中心になりがち。uv・Ruff・ty や OpenAI の Astral 買収、Node の LTS 運用、Bun・Deno、ブラウザ側 JS と SSR の分断など、周辺ニュースを実務の選び方に落とし込む。",
    "date": "2026-03-28",
    "newsDate": "2026-03-29",
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
    "coverImage": {
      "src": "articles/cover-programming.svg",
      "alt": "プログラミングコード"
    }
  },
  {
    "id": "ai-backend-postgres-supabase-2026",
    "type": "feature",
    "category": "data",
    "title": "AI アプリのバックエンドと DB — Postgres・pgvector・Supabase 周辺の設計",
    "excerpt": "RAG・チャット・エージェントの永続層は多くの場合がリレーショナル＋ベクトル拡張。Supabase（Postgres＋Auth＋Realtime＋Edge Functions）を軸に、RLS・接続プール・ハイブリッド検索の論点を整理する。",
    "date": "2026-03-28",
    "newsDate": "2026-03-29",
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
    "coverImage": {
      "src": "articles/cover-database-rag.svg",
      "alt": "データベース"
    }
  },
  {
    "id": "orm-drizzle-prisma-ai-backend-2026",
    "type": "feature",
    "category": "data",
    "title": "TypeScript バックエンドの ORM — Drizzle と Prisma を AI アプリ開発でどう切るか",
    "excerpt": "スキーマ駆動・マイグレーション・型安全クエリは、エージェントが SQL を組み立てる時代にも土台として残る。Prisma（Client・Schema・Migrate・Accelerate）と Drizzle（SQL に近い API・軽量ランタイム）の役割分け、サーバーレス Postgres・Supabase との相性を整理する。",
    "date": "2026-03-28",
    "newsDate": "2026-03-29",
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
    ]
  },
  {
    "id": "aqua-voice-review",
    "type": "review",
    "category": "media",
    "title": "Aqua Voice — Mac/Windows 向けAIディクテーション（フローティングUI）",
    "excerpt": "録音→転写→アクティブなアプリへペーストまでを一体で扱う製品向けディクテーション。公式 FAQ では全アカウント 1,000 語の無料枠、Avalon モデルは Pro で選択可能、iPhone アプリは未対応とされる。",
    "date": "2026-03-28",
    "newsDate": "2026-03-07",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "音声",
      "ディクテーション",
      "Mac",
      "Windows",
      "開発者向け"
    ],
    "ratings": {
      "AI品質": 4,
      "使いやすさ": 5,
      "コスパ": 3,
      "拡張性": 2,
      "企業向け": 1
    },
    "rating": 4,
    "reviewCategory": "other",
    "lastReviewed": "2026-03-28"
  },
  {
    "id": "ai-voice-input-tools-landscape-2026",
    "type": "feature",
    "category": "media",
    "title": "AI 音声入力ツールの俯瞰 — 製品型と API 型、Whisper と gpt-4o-transcribe",
    "excerpt": "OSS の Whisper と OpenAI Speech-to-Text API（whisper-1 / gpt-4o-transcribe 系）は別ライン。コンシューマー製品とクラウド STT API の選び方、レイテンシ・コスト・プライバシーの論点を整理する。",
    "date": "2026-03-28",
    "newsDate": "2026-03-14",
    "author": "AI News 編集部",
    "readTime": "11分",
    "tags": [
      "音声",
      "Whisper",
      "STT",
      "API",
      "プライバシー"
    ],
    "coverImage": {
      "src": "articles/cover-voice-audio.svg",
      "alt": "マイクとオーディオ"
    }
  },
  {
    "id": "ai-music-generation-frontier-early-2026",
    "type": "feature",
    "category": "media",
    "title": "生成音楽のフロンティア — Suno・Udio・Lyria・Stable Audio 周辺の整理（2026年初頭）",
    "excerpt": "創作者ツールとライセンス・レーベル動向が高速な領域。評価額やバージョン番号は報道・公式ヘルプを正とし、数値ヒャールには要注意。企業利用では権利表記と学習オプトアウトの有無を別途確認。",
    "date": "2026-03-28",
    "newsDate": "2026-03-19",
    "author": "AI News 編集部",
    "readTime": "9分",
    "tags": [
      "音声",
      "音楽生成",
      "著作権",
      "Suno",
      "Lyria",
      "規制"
    ]
  },
  {
    "id": "ai-image-generators-landscape-early-2026",
    "type": "feature",
    "category": "media",
    "title": "画像生成AIの地形図（2026年初頭）— GPT Image・MJ・Flux・Imagen から Nano Banana 2 まで",
    "excerpt": "解像度競争に加え、複雑な構図や空間関係へのプロンプト忠実度、用途特化が選択軸の中心になっている。GPT Image・Midjourney・Flux・Imagen から Seedream まで、話題モデルの位置づけと強みを整理する。",
    "date": "2026-03-28",
    "newsDate": "2026-03-01",
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
    ]
  },
  {
    "id": "google-nano-banana-2-gemini-flash-image-2026",
    "type": "feature",
    "category": "media",
    "title": "Google「Nano Banana 2」— Gemini 3.1 Flash Image と動画ツール Flow との見分け方",
    "excerpt": "2026年2月26日、Google DeepMind が画像生成モデル Nano Banana 2（技術名 Gemini 3.1 Flash Image）を発表。Pro 寄りの品質と Flash 級の速度、最大5キャラクターの一貫性などが売り。Flow の既定モデルでもあるため「動画AI」と混同されやすい点を整理する。",
    "date": "2026-03-28",
    "newsDate": "2026-02-26",
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
    ]
  },
  {
    "id": "ai-video-generators-landscape-2026",
    "type": "feature",
    "category": "media",
    "title": "動画生成モデルの地形図 — Veo・Runway・Kling などとマルチモデル・パイプライン",
    "excerpt": "テキスト→動画、参照映像、ネイティブ音声、4K／長尺、物理シミュレーション寄りの品質競争が続く。単体ベンダー鎖国より、用途別に複数モデルを束ねる構成が増えている。",
    "date": "2026-03-28",
    "newsDate": "2026-03-08",
    "author": "AI News 編集部",
    "readTime": "8分",
    "tags": [
      "動画生成",
      "Veo",
      "Runway",
      "Kling",
      "パイプライン"
    ]
  },
  {
    "id": "ai-video-deepfake-compliance-2026",
    "type": "feature",
    "category": "media",
    "title": "生成動画とコンプライアンス — ディープフェイク規制・開示・C2PA の実務",
    "excerpt": "生成・編集が容易になるほど、開示義務・本人同意・選挙広告・著名人の類似が論点になる。制作フローにメタデータ署名と人間確認ゲートを組み込む話に整理する。",
    "date": "2026-03-28",
    "newsDate": "2026-03-08",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": [
      "動画",
      "ディープフェイク",
      "C2PA",
      "ガバナンス",
      "法務"
    ]
  },
  {
    "id": "openai-sora-discontinued-2026",
    "type": "news",
    "category": "media",
    "title": "報道: OpenAI が Sora の提供終了を表明 — 計算・戦略・ガードレールの文脈",
    "excerpt": "2026年3月頃、AP・NPR・Business Insider などが Sora のアプリ／関連 API 終了を伝えた。最終的な公式文言・日付は openai.com 側の確認を優先する。",
    "date": "2026-03-28",
    "newsDate": "2026-03-26",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "OpenAI",
      "Sora",
      "動画生成",
      "速報",
      "規制"
    ],
    "coverImage": {
      "src": "logos/sora.svg",
      "alt": "Sora"
    }
  },
  {
    "id": "ai-video-frontier-models-march-2026-pricing",
    "type": "feature",
    "category": "media",
    "title": "動画フロンティアの料金の軸 — Veo 3.1・Runway Gen-4.5・Kling など（公式再確認前提）",
    "excerpt": "秒単価・クレジット制・バンドル販売が混在するため「安い／高い」一発比較は誤魔化しやすい。公式 pricing の単位（秒・分・解像度・Fast/Standard）を揃えて読む。",
    "date": "2026-03-28",
    "newsDate": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "10分",
    "tags": [
      "動画",
      "料金",
      "Veo",
      "Runway",
      "Kling"
    ],
    "coverImage": {
      "src": "articles/cover-media-video.svg",
      "alt": "動画制作"
    }
  },
  {
    "id": "claude-code-auto-mode",
    "type": "news",
    "category": "cli",
    "title": "Claude Code「Auto mode」— 権限プロンプトを減らす分類器モード（auto）",
    "excerpt": "2026-03-24 発表の研究プレビュー。ドキュメント・設定では Auto mode / permission-mode auto。宣材によっては Auto fix と併記。別機能の PR 向け「auto-fix in the cloud」（3/27 発表）は別記事で解説。",
    "date": "2026-03-28",
    "newsDate": "2026-03-27",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": [
      "CLI",
      "Anthropic",
      "Auto mode",
      "権限",
      "速報"
    ],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Anthropic"
    },
    "rating": 5
  },
  {
    "id": "mico-kubectl-ai",
    "type": "feature",
    "category": "cli",
    "title": "Mico — kubectl 向け OSS の AI アシスト（適用前確認と RBAC を前提に）",
    "excerpt": "自然言語からマニフェストや kubectl サブコマンド候補を出す補助ツール。便利さとのトレードオフはクラスタ破壊系操作の誤実行。dry-run・diff・人間承認を徹底し、本番では監査ログまで含めて設計する。",
    "date": "2026-03-28",
    "newsDate": "2026-03-14",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": [
      "kubectl",
      "Kubernetes",
      "CLI",
      "Mico",
      "運用"
    ]
  },
  {
    "id": "fish-ai-terminal-shell",
    "type": "feature",
    "category": "cli",
    "title": "Fish シェルと fish-ai — 端末内 LLM 補助と Warp 型クラウド端末の住み分け",
    "excerpt": "Realiserad/fish-ai のように、Fish 上でコマンド補正・自然言語からコマンド・LLM 補完を行うプラグインがある。設定はローカル ini。クラウドホスト型ターミナル（Warp 等）とはデータ境界が異なるので用途で選ぶ。",
    "date": "2026-03-28",
    "newsDate": "2026-03-14",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": [
      "Fish",
      "ターミナル",
      "CLI",
      "シェル",
      "LLM"
    ]
  },
  {
    "id": "cursor-2-4-subagents",
    "type": "news",
    "category": "editor",
    "title": "Cursor 2.4 リリース — 並列サブエージェントとクラウドVM実行で開発を高速化",
    "excerpt": "最大20個のエージェントを同時並列実行可能に。クラウドVM上での独立実行により、ローカルマシンのリソースを消費せず大規模タスクを処理。BugBotも新登場。",
    "date": "2026-03-28",
    "newsDate": "2026-03-27",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "エディタ",
      "Cursor",
      "サブエージェント",
      "速報"
    ],
    "coverImage": {
      "src": "logos/cursor.svg",
      "alt": "Cursor"
    },
    "rating": 5
  },
  {
    "id": "gemini-cli-v035",
    "type": "news",
    "category": "cli",
    "title": "Gemini CLI v0.35.0 — サブエージェント強化とPlan Mode追加、無料枠は縮小へ",
    "excerpt": "Google Gemini CLIの最新安定版がリリース。サブエージェントアーキテクチャの大幅強化、セキュリティ向上のサンドボックス機能。一方で3月25日よりPro以上が有料に。",
    "date": "2026-03-28",
    "newsDate": "2026-03-27",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "CLI",
      "Google",
      "アップデート",
      "速報"
    ],
    "coverImage": {
      "src": "logos/gemini.svg",
      "alt": "Gemini"
    },
    "rating": 4
  },
  {
    "id": "copilot-jetbrains-ga",
    "type": "news",
    "category": "editor",
    "title": "GitHub Copilot、JetBrainsで正式GA — Coding Agentの起動速度も50%改善",
    "excerpt": "Agent ModeがVS Code以外にもJetBrains、Eclipse、Xcodeへ展開。セマンティックコード検索の導入で初期化時間が40秒→20秒に短縮。",
    "date": "2026-03-28",
    "newsDate": "2026-03-27",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "CLI",
      "GitHub",
      "JetBrains",
      "速報"
    ],
    "coverImage": {
      "src": "logos/microsoft.svg",
      "alt": "Microsoft"
    },
    "rating": 4
  },
  {
    "id": "gemini-3-1-pro",
    "type": "news",
    "category": "model",
    "title": "Gemini 3.1 Pro 発表 — ARC-AGI-2スコア77.1%、推論性能が前世代の倍以上に",
    "excerpt": "Google DeepMindが3月26日にプレビュー公開。1Mトークンコンテキスト、推論ベンチマーク大幅向上。価格は据え置きで開発者・企業向けに順次展開。",
    "date": "2026-03-28",
    "newsDate": "2026-03-27",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "モデル",
      "Google",
      "速報",
      "推論"
    ],
    "coverImage": {
      "src": "logos/gemini.svg",
      "alt": "Gemini"
    }
  },
  {
    "id": "gpt-5-4-release",
    "type": "news",
    "category": "model",
    "title": "GPT-5.4 リリース — 推論・コーディング・エージェントを統合した「ワンモデル」",
    "excerpt": "OpenAIが3月5日にリリースした最新フラグシップモデル。GPT-5.3-Codexのコーディング性能とGPT-5.2の推論力を統合し、25%高速化。",
    "date": "2026-03-28",
    "newsDate": "2026-03-27",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "モデル",
      "OpenAI",
      "速報",
      "エージェント"
    ]
  },
  {
    "id": "windsurf-pricing-overhaul",
    "type": "news",
    "category": "product",
    "title": "Windsurf、クレジット制を廃止しクォータ制へ全面移行 — Pro価格は$20に",
    "excerpt": "3月19日、Windsurfがクレジットベースの料金体系から日次・週次クォータ制に変更。Pro価格が$15→$20に上昇し、Cursorとの価格差が消滅。",
    "date": "2026-03-28",
    "newsDate": "2026-03-27",
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
    "title": "Gemini CLI レビュー — Google の OSS CLI、Gemini 3.5 Flash + Antigravity 2.0 / Spark 連携対応版",
    "excerpt": "Google が Apache 2.0 で公開する OSS AI コーディングエージェント。基盤モデルは Gemini 3.5 Flash（I/O 2026 で GA、Terminal-Bench 2.1 76.2%、他社フロンティアの4倍速）。`npm install -g @google/gemini-cli` でインストール、`gemini` で起動。Plan Mode、サンドボックス（Docker/Podman）、MCP 対応、Google Search grounding が中核。5/19 の I/O 2026 で発表された Antigravity 2.0 エージェント基盤と Gemini Spark への連携も追加。Flash モデルは1日1,000リクエストまで無料、Pro は AI Pro/Ultra サブスクリプション必要。",
    "date": "2026-06-05",
    "newsDate": "2026-05-19",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": [
      "CLI",
      "Google",
      "OSS",
      "Gemini"
    ],
    "ratings": {
      "AI品質": 4,
      "使いやすさ": 4,
      "コスパ": 5,
      "拡張性": 4,
      "企業向け": 3
    },
    "rating": 4,
    "reviewCategory": "cli",
    "lastReviewed": "2026-06-05"
  },
  {
    "id": "openai-codex-agent",
    "type": "review",
    "category": "cli",
    "title": "OpenAI Codex レビュー — クラウド版 + Codex CLI、GPT-5.5 + Daybreak + Workspace Agents 統合の最新版",
    "excerpt": "ChatGPT 上のクラウド版と独立 Codex CLI の2形態で提供される OpenAI コーディングエージェント。**4M+ アクティブユーザー、基盤モデルは GPT-5.5**（4/23 リリース、Coding Index 半額 SOTA）。CLI は `curl -fsSL https://chatgpt.com/codex/install.sh | sh` または `npm install -g @openai/codex` でインストール、`codex` で起動。クラウド並列実行で PR を量産するワークフローが最大の武器。5/7 の Daybreak（Codex Security 拡張、GPT-5.5-Cyber 含む3層）、4/22 の Workspace Agents（Codex で動作、Slack/Salesforce/Notion 連動）も統合。料金は ChatGPT Plus $20 から、フル並列利用は Pro $200。",
    "date": "2026-06-05",
    "newsDate": "2026-05-07",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": [
      "CLI",
      "OpenAI",
      "エージェント",
      "GPT-5.5"
    ],
    "coverImage": {
      "src": "logos/codex.svg",
      "alt": "Codex"
    },
    "ratings": {
      "AI品質": 5,
      "使いやすさ": 4,
      "コスパ": 3,
      "拡張性": 4,
      "企業向け": 4
    },
    "rating": 4,
    "reviewCategory": "cli",
    "lastReviewed": "2026-06-05"
  },
  {
    "id": "cursor-windsurf-merge",
    "type": "news",
    "category": "product",
    "title": "Cursor、Windsurf（Codeium）を買収完了 — AIエディタ市場の統合が加速",
    "excerpt": "Anysphere社がCodeium社のWindsurfを買収。Cascadeフロー技術をCursorに統合予定。AIエディタ市場の寡占化が進む。",
    "date": "2026-03-28",
    "newsDate": "2026-03-20",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "エディタ",
      "買収",
      "業界動向"
    ],
    "coverImage": {
      "src": "logos/cursor.svg",
      "alt": "Cursor"
    }
  },
  {
    "id": "claude-design",
    "type": "review",
    "category": "media",
    "title": "Claude Design レビュー — Anthropic のビジュアル制作ツール、Opus 4.7/4.8 基盤で UI から動画素材までを会話で生成",
    "excerpt": "Anthropic Labs が4月17日に公開した、Claude Opus 4.7/4.8 基盤のビジュアル制作ツール。会話型インターフェースで UI / プロトタイプ / スライド / 1ページャ / マーケティング素材を生成。コードベースとデザインファイルから**チームのデザインシステムを自動学習**し、以降のプロジェクトに色・タイポグラフィ・コンポーネントを自動適用する。書き出しは PDF / 共有 URL / PPTX / Canva に対応、最終形は Claude Code に「ハンドオフバンドル」として渡せるため、**探索→プロトタイプ→本番コードの閉じたループ**が完成する。VentureBeat 等は「Figma に正面挑戦」と評する。Pro / Max / Team / Enterprise でリサーチプレビュー提供中。",
    "date": "2026-06-05",
    "newsDate": "2026-04-17",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "Anthropic",
      "デザイン",
      "Figma",
      "Claude",
      "おすすめ"
    ],
    "ratings": {
      "AI品質": 5,
      "使いやすさ": 4,
      "コスパ": 4,
      "拡張性": 4,
      "企業向け": 4
    },
    "rating": 4.5,
    "reviewCategory": "media",
    "lastReviewed": "2026-06-05"
  },
  {
    "id": "claude-code",
    "type": "review",
    "category": "cli",
    "title": "Claude Code レビュー — Anthropic の CLI エージェント、Opus 4.8 + Dynamic Workflows + agent view 対応版",
    "excerpt": "claude コマンド1つでリポジトリ全体を読み込み、バグ修正からテスト実行、コミットまで自律的に行う。基盤モデルが Opus 4.8 に更新され、SWE-bench Verified 88.6% に。研究プレビューで agent view（マルチセッションダッシュボード）と Dynamic Workflows（最大1,000サブエージェント並列）が追加され、長時間自律実行と大規模並列タスクが本格化。Fast Mode は前世代比3倍安い $10/$50 で、コストとレイテンシのトレードオフを明示的に選べる。",
    "date": "2026-06-05",
    "newsDate": "2026-05-28",
    "author": "AI News 編集部",
    "readTime": "8分",
    "tags": [
      "CLI",
      "Anthropic",
      "エージェント",
      "おすすめ"
    ],
    "ratings": {
      "AI品質": 5,
      "使いやすさ": 4,
      "コスパ": 4,
      "拡張性": 5,
      "企業向け": 5
    },
    "rating": 5,
    "reviewCategory": "cli",
    "lastReviewed": "2026-06-05"
  },
  {
    "id": "cursor-cli",
    "type": "review",
    "category": "cli",
    "title": "Cursor CLI レビュー — IDE 不要で Composer / Background Agent を使える独立 CLI（Composer 2.5 / Sonic 対応、Microsoft Teams 統合版）",
    "excerpt": "Anysphere が提供する Cursor の独立 CLI。`npm install -g @cursor/cli` でインストール、`cursor auth` でサインイン、`cursor` で対話セッション、`cursor --headless` で CI 用。**Composer 2.5**（Cursor 独自モデル、CursorBench で Opus 4.6 を上回る）と **Sonic**（低レイテンシ編集特化）に加え、**Background Agent**（クラウドサンドボックス、GitHub Issue や Slack 起点で PR ドラフト作成）が中核。3月の Cursor Automations（Slack/GitHub/PagerDuty）に加えて、**5/11 に Microsoft Teams 統合 GA**。料金は Free / Pro $20 / Pro+ $60 / Ultra $200 / Teams Standard $40 seat / Premium $120 seat。",
    "date": "2026-06-05",
    "newsDate": "2026-05-11",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": [
      "CLI",
      "Cursor",
      "Anysphere",
      "おすすめ"
    ],
    "ratings": {
      "AI品質": 4,
      "使いやすさ": 5,
      "コスパ": 4,
      "拡張性": 4,
      "企業向け": 4
    },
    "rating": 5,
    "reviewCategory": "cli",
    "lastReviewed": "2026-06-05"
  },
  {
    "id": "github-copilot-cli",
    "type": "review",
    "category": "cli",
    "title": "GitHub Copilot CLI レビュー — `/fleet` 並列エージェント、Autopilot、`/model` 切替（Sonnet 4.5 / Opus 4.7-4.8 / GPT-5.5 / MAI-Code-1-Flash）対応",
    "excerpt": "GitHub（Microsoft 傘下）の Copilot coding agent ターミナル版。`npm install -g @github/copilot`（Node 22+）、`brew install copilot-cli`、`winget install GitHub.Copilot`、`gh copilot` の4経路でインストール、`copilot` で起動。既定モデル **Claude Sonnet 4.5**、`/model` で **Opus 4.7/4.8 / GPT-5.5 / Project Polaris (MAI-Code-1-Flash)** に切替可能。`/fleet` でサブエージェント並列実行、VS Code Autopilot mode で完全自律実行、`copilot mcp` で MCP サーバー管理。Build 2026（6/2-3）で Copilot Starter（無償）/ Pro / Enterprise 3階層への再編成も予告された。",
    "date": "2026-06-05",
    "newsDate": "2026-06-02",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": [
      "CLI",
      "GitHub",
      "Copilot",
      "Enterprise"
    ],
    "ratings": {
      "AI品質": 5,
      "使いやすさ": 4,
      "コスパ": 4,
      "拡張性": 5,
      "企業向け": 5
    },
    "rating": 4.5,
    "reviewCategory": "cli",
    "lastReviewed": "2026-06-05"
  },
  {
    "id": "aider",
    "type": "review",
    "category": "cli",
    "title": "Aider レビュー — マルチモデル対応のOSS CLIツール",
    "excerpt": "複数ファイルの一括修正に特化したOSSツール。Gitとの親和性が高く、様々なLLMプロバイダーに対応。",
    "date": "2026-03-28",
    "newsDate": "2026-03-03",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "CLI",
      "OSS",
      "無料"
    ],
    "ratings": {
      "AI品質": 4,
      "使いやすさ": 3,
      "コスパ": 5,
      "拡張性": 4,
      "企業向け": 1
    },
    "rating": 4,
    "reviewCategory": "cli",
    "lastReviewed": "2026-03-28"
  },
  {
    "id": "codebuff",
    "type": "review",
    "category": "cli",
    "title": "CodeBuff レビュー — ターミナル特化の新興CLIエージェント",
    "excerpt": "直感的なUIとDiff確認が特徴の新興CLI。スピードと精度のバランスに優れる。",
    "date": "2026-03-28",
    "newsDate": "2026-03-02",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "CLI",
      "新興"
    ],
    "ratings": {
      "AI品質": 3,
      "使いやすさ": 4,
      "コスパ": 3,
      "拡張性": 2,
      "企業向け": 1
    },
    "rating": 4,
    "reviewCategory": "cli",
    "lastReviewed": "2026-03-28"
  },
  {
    "id": "amazon-q",
    "type": "review",
    "category": "cli",
    "title": "Amazon Q Developer レビュー — AWS統合のAI開発支援ツール",
    "excerpt": "AWS環境の操作・構築に特化。インフラ構築からコード生成まで、AWSエコシステム内でのサポートを提供。",
    "date": "2026-03-28",
    "newsDate": "2026-03-01",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "CLI",
      "AWS",
      "クラウド"
    ],
    "ratings": {
      "AI品質": 3,
      "使いやすさ": 3,
      "コスパ": 4,
      "拡張性": 3,
      "企業向け": 5
    },
    "rating": 4,
    "reviewCategory": "cli",
    "lastReviewed": "2026-03-28"
  },
  {
    "id": "cline",
    "type": "review",
    "category": "cli",
    "title": "Cline レビュー — 承認フロー付きのOSS AIエージェント",
    "excerpt": "オープンソースのVS Code拡張。ローカルモデル対応でプライバシーを確保しつつ、MCP連携で拡張性も高い。",
    "date": "2026-03-28",
    "newsDate": "2026-02-28",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "CLI",
      "OSS",
      "プライバシー"
    ],
    "ratings": {
      "AI品質": 3,
      "使いやすさ": 3,
      "コスパ": 5,
      "拡張性": 4,
      "企業向け": 1
    },
    "rating": 4,
    "reviewCategory": "cli",
    "lastReviewed": "2026-03-28"
  },
  {
    "id": "warp-ai",
    "type": "review",
    "category": "cli",
    "title": "Warp AI レビュー — AI内蔵のRust製モダンターミナル",
    "excerpt": "ターミナル自体にAIが組み込まれた新しいアプローチ。コマンド補完やエラー解析をターミナル内で直接提供。",
    "date": "2026-03-28",
    "newsDate": "2026-02-27",
    "author": "AI News 編集部",
    "readTime": "3分",
    "tags": [
      "CLI",
      "ターミナル"
    ],
    "ratings": {
      "AI品質": 2,
      "使いやすさ": 4,
      "コスパ": 4,
      "拡張性": 2,
      "企業向け": 2
    },
    "rating": 3,
    "reviewCategory": "other",
    "lastReviewed": "2026-03-28"
  },
  {
    "id": "cursor-editor",
    "type": "review",
    "category": "editor",
    "title": "Cursor レビュー — Cursor 3.x の Agents Window + Composer 2.5 + Microsoft Teams 統合 + Bugbot usage-based 対応版",
    "excerpt": "Anysphere の VS Code フォーク AI エディタ。**Cursor 3.0 で Agents Window**（`Cmd+Shift+P` → Agents Window）が追加され、ローカル・worktree・クラウド・SSH を横断するマルチエージェント運用を実現。独自モデル **Composer 2.5**（Kimi K2.5 ベース + 独自 RL、CursorBench で Opus 4.6 超え）と **Sonic**（低レイテンシ）を採用。Cursor Automations（Slack/GitHub/PagerDuty）に加え、**5/11 に Microsoft Teams 統合 GA**。Bugbot は **5月から usage-based 課金**（1 PR 平均 $1.00-$1.50）。料金 Free / Pro $20 / Pro+ $60 / Ultra $200、Teams Standard $40-Premium $120/seat、Self-hosted Cloud Agents もエンタープライズ向けに提供。",
    "date": "2026-06-05",
    "newsDate": "2026-05-11",
    "author": "AI News 編集部",
    "readTime": "8分",
    "tags": [
      "エディタ",
      "Cursor",
      "Anysphere",
      "おすすめ"
    ],
    "ratings": {
      "AI品質": 5,
      "使いやすさ": 5,
      "コスパ": 4,
      "拡張性": 5,
      "企業向け": 4
    },
    "rating": 5,
    "reviewCategory": "editor",
    "lastReviewed": "2026-06-05"
  },
  {
    "id": "windsurf",
    "type": "review",
    "category": "editor",
    "title": "Windsurf — Cursor傘下で継続提供、Cascadeフローが光るAIエディタ",
    "excerpt": "Anysphere社に買収されたが、単体提供は継続中。Cascadeフローによる段階的なコード生成が特徴。無料プランも維持。",
    "date": "2026-03-28",
    "newsDate": "2026-03-18",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "エディタ",
      "無料プラン有り",
      "買収"
    ],
    "ratings": {
      "AI品質": 4,
      "使いやすさ": 4,
      "コスパ": 4,
      "拡張性": 3,
      "企業向け": 2
    },
    "rating": 4,
    "reviewCategory": "editor",
    "lastReviewed": "2026-03-28"
  },
  {
    "id": "zed-ai",
    "type": "review",
    "category": "editor",
    "title": "Zed AI — Rust製の超高速AIエディタ",
    "excerpt": "Rust製のネイティブパフォーマンス。リアルタイムコラボレーション機能も内蔵した次世代エディタ。",
    "date": "2026-03-28",
    "newsDate": "2026-03-12",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "エディタ",
      "高速",
      "Rust"
    ],
    "ratings": {
      "AI品質": 3,
      "使いやすさ": 4,
      "コスパ": 4,
      "拡張性": 2,
      "企業向け": 1
    },
    "rating": 4,
    "reviewCategory": "editor",
    "lastReviewed": "2026-03-28"
  },
  {
    "id": "vscode",
    "type": "review",
    "category": "editor",
    "title": "VS Code + Copilot — 定番エディタのAI進化",
    "excerpt": "世界で最も使われるエディタ。GitHub Copilotとの統合で強力なAI支援。Coding Agentの追加でさらに進化。",
    "date": "2026-03-28",
    "newsDate": "2026-03-08",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "エディタ",
      "定番",
      "無料"
    ],
    "ratings": {
      "AI品質": 4,
      "使いやすさ": 5,
      "コスパ": 5,
      "拡張性": 5,
      "企業向け": 5
    },
    "rating": 4,
    "reviewCategory": "editor",
    "lastReviewed": "2026-03-28"
  },
  {
    "id": "void",
    "type": "review",
    "category": "editor",
    "title": "Void — プライバシー重視のOSSエディタ",
    "excerpt": "ローカルLLMとクラウドLLMの両方に対応するオープンソースエディタ。プライバシー重視の開発者に人気。",
    "date": "2026-03-28",
    "newsDate": "2026-03-02",
    "author": "AI News 編集部",
    "readTime": "3分",
    "tags": [
      "エディタ",
      "OSS",
      "プライバシー"
    ],
    "ratings": {
      "AI品質": 2,
      "使いやすさ": 3,
      "コスパ": 5,
      "拡張性": 3,
      "企業向け": 1
    },
    "rating": 4,
    "reviewCategory": "editor",
    "lastReviewed": "2026-03-28"
  },
  {
    "id": "pearai",
    "type": "review",
    "category": "editor",
    "title": "PearAI — コミュニティドリブンのOSSエディタ",
    "excerpt": "VS Codeベースのオープンソースエディタ。AIチャットとインライン編集に特化。",
    "date": "2026-03-28",
    "newsDate": "2026-03-01",
    "author": "AI News 編集部",
    "readTime": "3分",
    "tags": [
      "エディタ",
      "OSS"
    ],
    "ratings": {
      "AI品質": 2,
      "使いやすさ": 3,
      "コスパ": 4,
      "拡張性": 2,
      "企業向け": 1
    },
    "rating": 3,
    "reviewCategory": "editor",
    "lastReviewed": "2026-03-28"
  },
  {
    "id": "trae",
    "type": "review",
    "category": "editor",
    "title": "Trae — ByteDance発のAIエディタ、Builder Modeが話題",
    "excerpt": "ByteDance社開発。Builder Modeで自然言語からアプリ全体を生成。無料で利用可能。",
    "date": "2026-03-28",
    "newsDate": "2026-02-28",
    "author": "AI News 編集部",
    "readTime": "3分",
    "tags": [
      "エディタ",
      "無料",
      "中国"
    ],
    "ratings": {
      "AI品質": 3,
      "使いやすさ": 4,
      "コスパ": 4,
      "拡張性": 2,
      "企業向け": 2
    },
    "rating": 3,
    "reviewCategory": "editor",
    "lastReviewed": "2026-03-28"
  },
  {
    "id": "frontier-triad-power-map-2026",
    "type": "feature",
    "category": "special",
    "title": "Claude・Gemini・OpenAI の力図 — 2026年時点の棲み分けと競争軸（フロンティア三本柱）",
    "excerpt": "モデル性能の数値勝負だけでなく、「どこに差をつけて配るか」で三社の戦略は分岐している。配給経路・開発者楔・クラウドの結びつき・規制ストーリーという四つの軸で整理する。",
    "date": "2026-03-28",
    "newsDate": "2026-03-28",
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
    ]
  },
  {
    "id": "apple-google-siri-gemini-2026",
    "type": "feature",
    "category": "media",
    "title": "Siri×外部 AI — Gemini 中核に加え、ChatGPT・Claude など複数アシスタント統合の報道（2026年3月）",
    "excerpt": "1月の Apple–Google 多年度提携（Gemini）に続き、3月下旬の報道では「Siri を複数のサードパーティ AI に開く Extensions」構想が取り上げられている。Gemini に加え ChatGPT・Claude など利用者が切り替え／併用できる、との整理。いずれも WWDC 前の非公式情報が混じるため公式発表待ち。",
    "date": "2026-03-28",
    "newsDate": "2026-03-28",
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
    ]
  },
  {
    "id": "claude-code-autofix-cloud",
    "type": "news",
    "category": "cli",
    "title": "Claude Code「auto-fix in the cloud」— CI 失敗と PR コメントをクラウドで自動対応",
    "excerpt": "2026-03-27、PM の Noah Zweben 氏が発表。Web/モバイルセッションが PR をリモートでフォローし green 化を目指す。GitHub Actions では anthropics/claude-code-action の ci-failure ワークフロー例あり。",
    "date": "2026-03-28",
    "newsDate": "2026-03-27",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "CLI",
      "Anthropic",
      "auto-fix",
      "クラウド",
      "CI/CD",
      "速報"
    ],
    "rating": 5
  },
  {
    "id": "claude-1m-context-ga-2026",
    "type": "news",
    "category": "model",
    "title": "Claude Opus 4.6 / Sonnet 4.6 の 100 万トークンコンテキストが GA — 追加料金なし",
    "excerpt": "2026年3月13日、Anthropic が 1M トークンコンテキストを正式 GA。標準料金（Opus 4.6: $5/$25、Sonnet 4.6: $3/$15 per 1M tokens）が 100 万トークン超でも同レートで適用。Claude Platform・Bedrock・Vertex AI・Azure Foundry で即日利用可。",
    "date": "2026-03-28",
    "newsDate": "2026-03-13",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": [
      "Anthropic",
      "Claude",
      "コンテキスト",
      "1Mトークン",
      "料金改定",
      "速報"
    ]
  },
  {
    "id": "claude-memory-import-2026",
    "type": "news",
    "category": "product",
    "title": "Claude がメモリのインポートに対応 — ChatGPT・Gemini・Grok からの移行を簡素化",
    "excerpt": "2026年3月初旬、Anthropic が claude.com/import-memory を公開。ChatGPT・Gemini・Copilot・Grok などから保存済みメモリをコピー＆ペーストで Claude に移行できる。メモリ機能自体は全 Claude ユーザーへ順次展開中。",
    "date": "2026-03-28",
    "newsDate": "2026-03-03",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "Anthropic",
      "Claude",
      "メモリ",
      "データ移行",
      "ChatGPT",
      "Gemini"
    ]
  },
  {
    "id": "gemini-31-flash-lite-2026",
    "type": "news",
    "category": "model",
    "title": "Google、Gemini 3.1 Flash-Lite をプレビュー公開 — 2.5× 高速・低コストの大量処理向けモデル",
    "excerpt": "2026年3月4日、Google DeepMind が Demis Hassabis 氏発表で Gemini 3.1 Flash-Lite をプレビュー公開。入力 $0.25/1M・出力 $1.50/1M トークンという超低価格で 2.5 Flash 比 2.5 倍高速な Time-to-First-Token・45% 高い出力速度を実現。",
    "date": "2026-03-28",
    "newsDate": "2026-03-04",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "Google",
      "Gemini",
      "Flash-Lite",
      "低コスト",
      "速度",
      "速報"
    ]
  },
  {
    "id": "arc-agi-3-launch-2026",
    "type": "news",
    "category": "model",
    "title": "ARC-AGI-3 公開 — インタラクティブ環境でフロンティアAIが0.26%、人間は100%",
    "excerpt": "2026年3月25日、ARC Prize Foundation が ARC-AGI-3 を公開。静的グリッドを廃し、ビデオゲーム風のインタラクティブ環境1,000超で AI エージェントの適応推論を評価。GPT-5.4・Claude・Gemini などのフロンティアモデルは1%未満にとどまり、知能評価の新たな壁が示された。",
    "date": "2026-03-28",
    "newsDate": "2026-03-25",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": [
      "ベンチマーク",
      "ARC-AGI",
      "評価",
      "エージェント",
      "AGI",
      "速報"
    ]
  },
  {
    "id": "anthropic-pentagon-injunction-2026",
    "type": "news",
    "category": "regulation",
    "title": "Anthropic、ペンタゴンのサプライチェーン指定差し止めに成功 — 連邦裁判所が暫定差止命令",
    "excerpt": "2026年3月26日、サンフランシスコ連邦地裁の Rita Lin 判事が Anthropic の申請を認め、国防総省（DoD）による「サプライチェーンリスク」指定を暫定差し止め。「修正第一条違反の報復」と判断。Anthropic は自律兵器・大規模監視への利用を拒否したことが発端。",
    "date": "2026-03-28",
    "newsDate": "2026-03-26",
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
    ]
  },
  {
    "id": "openai-acquires-astral-2026",
    "type": "news",
    "category": "cli",
    "title": "OpenAI が Astral を買収 — uv・Ruff・ty を Codex に統合、Pythonエコシステムを掌握へ",
    "excerpt": "2026年3月19日、OpenAI が Python 開発ツールの Astral（uv・Ruff・ty）を買収すると発表。月間1億2,600万ダウンロードの uv や業界標準ライターの Ruff が Codex チームに合流。Python 開発ワークフロー全体を AI ネイティブにする戦略。",
    "date": "2026-03-28",
    "newsDate": "2026-03-19",
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
    ]
  },
  {
    "id": "gpt-54-mini-nano-2026",
    "type": "news",
    "category": "model",
    "title": "OpenAI、GPT-5.4 mini と nano をリリース — 無料層でも mini 利用可、nano は $0.20/1M トークン",
    "excerpt": "2026年3月17日、OpenAI が GPT-5.4 mini と GPT-5.4 nano を公開。mini は ChatGPT 無料ユーザーに開放、nano は API 専用で超低コスト（$0.20/1M）のサブエージェント向け。Codex や ChatGPT のコーディング機能も同時に強化。",
    "date": "2026-03-28",
    "newsDate": "2026-03-17",
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
    ]
  },
  {
    "id": "chatgpt-shopping-revamp-2026",
    "type": "news",
    "category": "product",
    "title": "ChatGPT ショッピング刷新 — Instant Checkout を廃止し商品発見（Product Discovery）へ軸足",
    "excerpt": "2026年3月24日、OpenAI がエージェンティック・コマースを刷新。Instant Checkout は廃止し、ビジュアル商品比較・並列表示に集中。Walmart が「Sparky」アプリを ChatGPT 内に展開し、ロイヤルティプログラム連携も可能に。",
    "date": "2026-03-28",
    "newsDate": "2026-03-24",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": [
      "OpenAI",
      "ChatGPT",
      "ショッピング",
      "Eコマース",
      "Walmart",
      "エージェント"
    ]
  },
  {
    "id": "microsoft-365-e7-copilot-pricing-2026",
    "type": "feature",
    "category": "product",
    "title": "Microsoft 365 E7 徹底解説 — E3/E5/E7 料金比較、Copilot 削減の影響、GitHub Copilot × Claude",
    "excerpt": "2026年5月1日に提供開始される Microsoft 365 E7（$99/月）を、E3・E5 と料金・機能で比較。4月15日から2000人超の組織で基本 Copilot が Office アプリから削除される影響、GitHub Copilot での Claude 対応との関連まで、企業の IT 担当者と開発者が知るべき情報を整理した。",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "12分",
    "tags": [
      "Microsoft",
      "M365",
      "E7",
      "Copilot",
      "Claude",
      "Enterprise",
      "料金"
    ],
    "coverImage": {
      "src": "logos/microsoft.svg",
      "alt": "Microsoft"
    },
    "heroScope": "none",
    "lastReviewed": "2026-03-29"
  },
  {
    "id": "power-apps-five-approaches-2026",
    "type": "feature",
    "category": "product",
    "title": "Power Apps 開発手法 5パターン完全ガイド — Canvas・Model-driven・Custom Pages・Power Pages・Vibe Coding",
    "excerpt": "Microsoft Power Apps でアプリを作る方法は1つではない。ドラッグ&ドロップの Canvas、データモデル起点の Model-driven、React ベースの Custom Pages、外部向けの Power Pages、AI に自然言語で作らせる Vibe Coding の5パターンを、必要なライセンスと適用場面を含めて解説する。",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "14分",
    "tags": [
      "Microsoft",
      "Power Apps",
      "ノーコード",
      "ローコード",
      "Dataverse",
      "Enterprise",
      "バイブコーディング"
    ],
    "heroScope": "none"
  },
  {
    "id": "enterprise-backend-dataverse-supabase-azure-2026",
    "type": "feature",
    "category": "data",
    "title": "エンタープライズバックエンド比較 — Dataverse vs Supabase vs Azure SQL（2026年版）",
    "excerpt": "アプリのバックエンドを「一から作る」か「セットになっている企業サービスを使う」か。Microsoft Dataverse、Supabase（OSS PostgreSQL）、Azure SQL Database の3つを、認証・リアルタイム・ライセンス・AI 統合の軸で比較した。",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "11分",
    "tags": [
      "Dataverse",
      "Supabase",
      "Azure SQL",
      "バックエンド",
      "Enterprise",
      "比較",
      "Entra ID"
    ],
    "heroScope": "none",
    "lastReviewed": "2026-03-29"
  },
  {
    "id": "react-frontend-ms-backend-architecture-2026",
    "type": "feature",
    "category": "data",
    "title": "React フロントエンド × Microsoft バックエンド — PCF・Code Apps・Dataverse API・Entra ID の組み合わせパターン",
    "excerpt": "「フロントエンドは作れたけどバックエンドが作れない」問題に、Microsoft エコシステムで答える。PCF で React コンポーネントを Power Apps に埋め込むパターンから、Code Apps で React アプリから Dataverse に直接アクセスするパターン、Entra ID 認証だけ借りて Supabase や Azure Database for PostgreSQL と組み合わせるパターンまで、5つのアーキテクチャを比較した。",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "14分",
    "tags": [
      "React",
      "PCF",
      "Power Apps",
      "Dataverse",
      "Entra ID",
      "Supabase",
      "Azure",
      "バックエンド",
      "アーキテクチャ"
    ],
    "heroScope": "none"
  },
  {
    "id": "enterprise-entra-id-postgres-ai-architecture-2026",
    "type": "feature",
    "category": "data",
    "title": "E3 の Entra ID 認証 + PostgreSQL で企業 AI アプリを構築する — Dataverse より安い実用構成",
    "excerpt": "Microsoft 365 E3 に含まれる Entra ID 認証だけを借り、バックエンドに Dataverse ではなく Azure Database for PostgreSQL や Supabase を使う構成が企業で注目されている。フロントエンドからの認証フロー、AI API キーの安全な管理、SharePoint 上の社内文書を AI に食わせる際の課題と対策までを解説する。",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "15分",
    "tags": [
      "Entra ID",
      "PostgreSQL",
      "Azure",
      "Enterprise",
      "セキュリティ",
      "SharePoint",
      "AI",
      "バックエンド"
    ],
    "heroScope": "none"
  },
  {
    "id": "env-file-api-key-security-guide-2026",
    "type": "feature",
    "category": "cli",
    "title": ".env ファイルと API キーの管理 — 漏洩の原因・対処・予防策（非エンジニア向け）",
    "excerpt": "AI コーディングツールが .env ファイルの API キーを意図せず読み込み、テストファイルやコミットに含めてしまう事故が増えている。GitGuardian の調査では AI 支援コミットのシークレット漏洩率は通常の約2倍。漏洩時の緊急対応から、.env を使わない安全な管理方法まで解説する。",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "10分",
    "tags": [
      ".env",
      "APIキー",
      "セキュリティ",
      "漏洩",
      "非エンジニア",
      "実用スキル"
    ],
    "heroScope": "none"
  },
  {
    "id": "ai-autonomous-execution-risks-2026",
    "type": "feature",
    "category": "cli",
    "title": "AI 自律実行の事故リスク — ファイル全削除・DB 破壊・スキルファイルの罠",
    "excerpt": "AI エージェントの自律実行による本番障害が2024年10月〜2026年2月の16ヶ月間で少なくとも10件報告されている。Amazon Kiro による13時間の AWS ダウン、Claude Code によるホームディレクトリ全削除、悪意あるスキルファイルによるデータ窃取。事故パターンと防止策を整理する。",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "12分",
    "tags": [
      "セキュリティ",
      "エージェント",
      "事故",
      "Claude Code",
      "スキル",
      "プロンプトインジェクション"
    ],
    "heroScope": "none"
  },
  {
    "id": "ai-tool-security-settings-comparison-2026",
    "type": "feature",
    "category": "cli",
    "title": "AI コーディングツール セキュリティ設定比較 — Claude Code・Cursor・Copilot・Gemini CLI（2026年版）",
    "excerpt": "「自分のコードが学習に使われないか」「会話データはいつ消えるのか」。Claude Code、Cursor、GitHub Copilot、Gemini CLI の4ツールについて、データ保持期間・学習オプトアウト・プライバシーモード・Enterprise 設定を公式ドキュメントベースで横断比較した。",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "10分",
    "tags": [
      "セキュリティ",
      "プライバシー",
      "Claude Code",
      "Cursor",
      "Copilot",
      "Gemini CLI",
      "Enterprise",
      "比較"
    ],
    "heroScope": "none",
    "lastReviewed": "2026-03-29"
  },
  {
    "id": "claude-code-conversation-history-tips-2026",
    "type": "feature",
    "category": "cli",
    "title": "Claude Code の会話履歴を保存・管理する — 30日消去の仕様と永続化テクニック",
    "excerpt": "Claude Code の会話履歴はモデル改善不許可の場合30日で消去される。セッションの再開方法、ローカルの保存場所、/export コマンド、コミュニティ製の自動保存ツールまで、会話記録を失わないためのテクニックを整理した。",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "8分",
    "tags": [
      "Claude Code",
      "会話履歴",
      "実用スキル",
      "Hooks",
      "テクニック"
    ],
    "heroScope": "none"
  },
  {
    "id": "mcp-v2-spec-launch-2026",
    "type": "news",
    "category": "cli",
    "title": "MCP v2 仕様リリース — Streamable HTTP・OAuth 2.1・JSON-RPC バッチで本番投入へ",
    "excerpt": "3月26日、Model Context Protocol の第2版仕様が公開された。HTTP+SSE を置き換える Streamable HTTP トランスポート、OAuth 2.1 認可フレームワーク、JSON-RPC バッチ、ツールアノテーションなどが盛り込まれ、エンタープライズ本番環境での採用障壁を大幅に下げる。OpenAI・Microsoft も正式サポートを表明。",
    "date": "2026-03-28",
    "newsDate": "2026-03-26",
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
    ]
  },
  {
    "id": "anthropic-mythos-cyber-impact-2026",
    "type": "news",
    "category": "model",
    "title": "Anthropic Mythos リーク続報 — サイバーセキュリティ株急落と業界インパクト",
    "excerpt": "3月27日の Claude Mythos リーク報道を受け、CrowdStrike −7%、Palo Alto Networks −6% など主要セキュリティ銘柄が軒並み下落。草稿に記載されたサイバー能力の記述が市場に衝撃を与えた経緯と、冷静な読み方を整理。",
    "date": "2026-03-28",
    "newsDate": "2026-03-28",
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
    ]
  },
  {
    "id": "claude-opus-4-7-review",
    "type": "review",
    "category": "model",
    "title": "Claude Opus 4.7 レビュー — Anthropic 最上位 GA、SWE-bench Verified 87.6% と task budgets で長時間エージェントが安定",
    "excerpt": "Anthropic が4月16日に GA したフラッグシップ。SWE-bench Verified 87.6%、Terminal-Bench 2.0 69.4%、GPQA Diamond 94.2%（公式値）。画像入力は最大 2576px / 3.75MP に拡大。新機能 task budgets と新 effort level xhigh を導入。価格は Opus 4.6 据え置きで $5/$25 per Mトークン。",
    "date": "2026-05-12",
    "newsDate": "2026-04-16",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "モデル",
      "Anthropic",
      "LLM",
      "おすすめ"
    ],
    "ratings": {
      "AI品質": 5,
      "使いやすさ": 4,
      "コスパ": 4,
      "拡張性": 5,
      "企業向け": 5
    },
    "rating": 4.5,
    "reviewCategory": "model",
    "lastReviewed": "2026-05-12"
  },
  {
    "id": "gpt-5-5-review",
    "type": "review",
    "category": "model",
    "title": "GPT-5.5 レビュー — OpenAI 最新フラッグシップ、エージェント・コーディングで「半額の SOTA」、Plus/Pro/API/Copilot 全展開",
    "excerpt": "OpenAI が4月23日にリリースしたフラッグシップ。エージェントコーディング・コンピュータ使用・知識作業に最適化、Artificial Analysis の Coding Index で SOTA を「競合フロンティアモデルの半額」で達成と公称。事実誤認 3% 減、正答率 23% 向上。テキスト・画像・音声・動画を単一アーキテクチャで処理。5月5日には GPT-5.5 Instant が ChatGPT のデフォルトに昇格し、ハルシネーション率は GPT-5.3 Instant 比 52.5% 減（高ステークス領域）。",
    "date": "2026-05-12",
    "newsDate": "2026-04-23",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "モデル",
      "OpenAI",
      "LLM",
      "おすすめ"
    ],
    "ratings": {
      "AI品質": 5,
      "使いやすさ": 5,
      "コスパ": 5,
      "拡張性": 5,
      "企業向け": 4
    },
    "rating": 4.5,
    "reviewCategory": "model",
    "lastReviewed": "2026-05-12"
  },
  {
    "id": "deepseek-v4-review",
    "type": "review",
    "category": "model",
    "title": "DeepSeek V4 レビュー — 1.6T MoE と 1M コンテキストのオープンウェイト、Pro と Flash の2モデル構成",
    "excerpt": "DeepSeek が4月24日にプレビュー公開したフラッグシップ MoE 2モデル。V4-Pro は総 1.6T／アクティブ 49B、V4-Flash は総 284B／アクティブ 13B、いずれも 1M コンテキスト・最大 384K 出力・Thinking / Non-Thinking デュアルモード対応。オープンソース公開され、API では `deepseek-v4-pro` と `deepseek-v4-flash` として即日提供。",
    "date": "2026-05-12",
    "newsDate": "2026-04-24",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "モデル",
      "DeepSeek",
      "オープンソース",
      "MoE"
    ],
    "ratings": {
      "AI品質": 4,
      "使いやすさ": 4,
      "コスパ": 5,
      "拡張性": 5,
      "企業向け": 3
    },
    "rating": 4,
    "reviewCategory": "model",
    "lastReviewed": "2026-05-12"
  },
  {
    "id": "claude-opus-4-6-review",
    "type": "review",
    "category": "model",
    "title": "Claude Opus 4.6 レビュー — Anthropic 前世代フラッグシップ、1Mコンテキストの深い推論",
    "excerpt": "Anthropic の2026年Q1フラッグシップモデル（後継 Opus 4.7/4.8 リリース済み）。1Mトークンのコンテキストウィンドウ、SWE-Bench トップクラスのコーディング性能、拡張思考による高度な推論が特徴。$15/$75 per 1M tokens。",
    "date": "2026-03-29",
    "newsDate": "2026-03-15",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "モデル",
      "Anthropic",
      "LLM"
    ],
    "ratings": {
      "AI品質": 5,
      "使いやすさ": 4,
      "コスパ": 3,
      "拡張性": 5,
      "企業向け": 5
    },
    "rating": 4.0,
    "reviewCategory": "model",
    "lastReviewed": "2026-06-05"
  },
  {
    "id": "gpt-5-4-review",
    "type": "review",
    "category": "model",
    "title": "GPT-5.4 レビュー — OpenAI 2026年Q1の主力モデル、推論・コーディング・エージェント統合",
    "excerpt": "OpenAI が2026年前半に投入した主力モデル（後継 GPT-5.5 が4/23 リリース済み）。128Kコンテキスト、推論とコーディングを統合したアーキテクチャ。Codex との連携でエージェント的な運用も可能。$2.50/$10 per 1M tokens。",
    "date": "2026-03-29",
    "newsDate": "2026-03-10",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "モデル",
      "OpenAI",
      "LLM"
    ],
    "ratings": {
      "AI品質": 5,
      "使いやすさ": 4,
      "コスパ": 4,
      "拡張性": 4,
      "企業向け": 4
    },
    "rating": 4,
    "reviewCategory": "model",
    "lastReviewed": "2026-06-05"
  },
  {
    "id": "gemini-3-1-pro-review",
    "type": "review",
    "category": "model",
    "title": "Gemini 3.1 Pro レビュー — Google 最上位、2Mコンテキストは業界最大",
    "excerpt": "Google DeepMind のフラッグシップ。2Mトークンのコンテキストウィンドウは全モデル中最大。長大なコードベースの一括読み込みと Google Cloud との統合が強み。$1.25/$5 per 1M tokens。",
    "date": "2026-03-29",
    "newsDate": "2026-03-12",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "モデル",
      "Google",
      "LLM"
    ],
    "ratings": {
      "AI品質": 4,
      "使いやすさ": 4,
      "コスパ": 5,
      "拡張性": 4,
      "企業向け": 4
    },
    "rating": 4,
    "reviewCategory": "model",
    "lastReviewed": "2026-03-29"
  },
  {
    "id": "kimi-k2-5-review",
    "type": "review",
    "category": "model",
    "title": "Kimi K2.5 レビュー — Moonshot AI 発、1兆パラメータ MoE でオープンウェイト",
    "excerpt": "Moonshot AI（中国）の1兆パラメータ MoE モデル。Humanity's Last Exam で Opus 超えのスコア。オープンウェイトで商用利用可能。256Kコンテキスト。",
    "date": "2026-03-29",
    "newsDate": "2026-03-18",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "モデル",
      "中国",
      "OSS",
      "MoE"
    ],
    "ratings": {
      "AI品質": 5,
      "使いやすさ": 3,
      "コスパ": 5,
      "拡張性": 3,
      "企業向け": 2
    },
    "rating": 4,
    "reviewCategory": "model",
    "lastReviewed": "2026-03-29"
  },
  {
    "id": "claude-sonnet-4-6-review",
    "type": "review",
    "category": "model",
    "title": "Claude Sonnet 4.6 レビュー — Anthropic 中核、速度と品質のバランス型",
    "excerpt": "Anthropic の中核モデル。1Mコンテキスト、Opus の約 1/5 のコストで日常のコーディングに最適。Cursor・Windsurf のデフォルトモデルとしても広く採用。$3/$15 per 1M tokens。",
    "date": "2026-03-29",
    "newsDate": "2026-03-15",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "モデル",
      "Anthropic",
      "LLM",
      "おすすめ"
    ],
    "ratings": {
      "AI品質": 4,
      "使いやすさ": 4,
      "コスパ": 5,
      "拡張性": 4,
      "企業向け": 4
    },
    "rating": 4,
    "reviewCategory": "model",
    "lastReviewed": "2026-03-29"
  },
  {
    "id": "midjourney-v8-review",
    "type": "review",
    "category": "media",
    "title": "Midjourney V8 レビュー — 画像生成の王者、ついにWeb版とAPIを正式公開",
    "excerpt": "画像生成AIの代名詞。V8でWeb UIとAPIを正式公開し、Discord外でもアクセス可能に。フォトリアルから抽象表現まで業界最高峰の品質。$10/月〜。",
    "date": "2026-03-29",
    "newsDate": "2026-03-20",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "画像生成",
      "おすすめ",
      "API"
    ],
    "ratings": {
      "AI品質": 5,
      "使いやすさ": 4,
      "コスパ": 3,
      "拡張性": 4,
      "企業向け": 3
    },
    "rating": 4.5,
    "reviewCategory": "image",
    "lastReviewed": "2026-03-29"
  },
  {
    "id": "runway-gen5-review",
    "type": "review",
    "category": "media",
    "title": "Runway Gen-5 レビュー — 動画生成のフロントランナー、映像制作者の新標準",
    "excerpt": "動画生成AIの先駆者。Gen-5で物理シミュレーション精度が大幅向上。最長40秒の高品質動画を生成。ハリウッドのプロダクションでも採用実績。$12/月〜。",
    "date": "2026-03-29",
    "newsDate": "2026-03-22",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "動画生成",
      "プロ向け",
      "VFX"
    ],
    "ratings": {
      "AI品質": 5,
      "使いやすさ": 4,
      "コスパ": 2,
      "拡張性": 3,
      "企業向け": 3
    },
    "rating": 4,
    "reviewCategory": "video",
    "lastReviewed": "2026-03-29"
  },
  {
    "id": "suno-v5-review",
    "type": "review",
    "category": "media",
    "title": "Suno V5 レビュー — テキストから楽曲を丸ごと生成、音楽制作の民主化",
    "excerpt": "テキストプロンプトから歌詞・メロディ・アレンジ・ボーカルまでフル楽曲を生成。V5で音質とジャンル対応力が大幅向上。無料枠あり、$10/月〜。",
    "date": "2026-03-29",
    "newsDate": "2026-03-15",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "音楽生成",
      "クリエイティブ"
    ],
    "ratings": {
      "AI品質": 4,
      "使いやすさ": 5,
      "コスパ": 4,
      "拡張性": 2,
      "企業向け": 2
    },
    "rating": 4,
    "reviewCategory": "music",
    "lastReviewed": "2026-03-29"
  },
  {
    "id": "kling-ai-review",
    "type": "review",
    "category": "media",
    "title": "Kling AI レビュー — 快手発の動画生成、無料枠の太さとリップシンクが魅力",
    "excerpt": "中国・快手が開発する動画生成AI。無料枠が充実しており、リップシンク機能の精度が高い。1080p対応、最長2分の動画生成。",
    "date": "2026-03-29",
    "newsDate": "2026-03-08",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "動画生成",
      "中国",
      "無料枠"
    ],
    "ratings": {
      "AI品質": 4,
      "使いやすさ": 4,
      "コスパ": 5,
      "拡張性": 2,
      "企業向け": 1
    },
    "rating": 3.5,
    "reviewCategory": "video",
    "lastReviewed": "2026-03-29"
  },
  {
    "id": "nano-banana-2-review",
    "type": "review",
    "category": "media",
    "title": "Nano Banana 2 レビュー — Google 発、Flash 級の速度で Pro 品質の画像生成",
    "excerpt": "Google DeepMind の画像生成モデル（技術名 Gemini 3.1 Flash Image）。高速生成と高品質を両立し、Gemini アプリ・API・Flow から利用可能。SynthID・C2PA 対応。",
    "date": "2026-03-29",
    "newsDate": "2026-02-26",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "画像生成",
      "Google",
      "Gemini"
    ],
    "ratings": {
      "AI品質": 4,
      "使いやすさ": 5,
      "コスパ": 5,
      "拡張性": 4,
      "企業向け": 3
    },
    "rating": 4,
    "reviewCategory": "image",
    "lastReviewed": "2026-03-29"
  },
  {
    "id": "gpt-image-review",
    "type": "review",
    "category": "media",
    "title": "GPT Image 1.5 レビュー — ChatGPT 統合で最も手軽、テキスト描画精度が秀逸",
    "excerpt": "OpenAI の画像生成モデル。ChatGPT 経由で自然言語から即座に生成可能。画像内テキストの精度とプロンプト追従で高評価。API からも利用可能。",
    "date": "2026-03-29",
    "newsDate": "2026-03-01",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "画像生成",
      "OpenAI",
      "ChatGPT"
    ],
    "ratings": {
      "AI品質": 5,
      "使いやすさ": 5,
      "コスパ": 3,
      "拡張性": 3,
      "企業向け": 3
    },
    "rating": 4,
    "reviewCategory": "image",
    "lastReviewed": "2026-03-29"
  },
  {
    "id": "flux-2-review",
    "type": "review",
    "category": "media",
    "title": "Flux 2 レビュー — Black Forest Labs 発、フォトリアルと速度のバランス型",
    "excerpt": "Black Forest Labs の画像生成モデル。フォトリアル系で品質と速度のバランスが良く、API・パートナー経由で利用可能。LoRA によるカスタマイズにも対応。",
    "date": "2026-03-29",
    "newsDate": "2026-03-01",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "画像生成",
      "フォトリアル",
      "OSS"
    ],
    "ratings": {
      "AI品質": 4,
      "使いやすさ": 3,
      "コスパ": 4,
      "拡張性": 4,
      "企業向け": 2
    },
    "rating": 3.5,
    "reviewCategory": "image",
    "lastReviewed": "2026-03-29"
  },
  {
    "id": "veo-review",
    "type": "review",
    "category": "media",
    "title": "Google Veo レビュー — 4K 長尺動画生成、Vertex AI とエンタープライズ統合",
    "excerpt": "Google DeepMind の動画生成モデル。4K 解像度、長尺対応、物理シミュレーション改善。Vertex AI 経由でエンタープライズ利用にも対応。",
    "date": "2026-03-29",
    "newsDate": "2026-03-10",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "動画生成",
      "Google",
      "エンタープライズ"
    ],
    "ratings": {
      "AI品質": 4,
      "使いやすさ": 3,
      "コスパ": 3,
      "拡張性": 3,
      "企業向け": 4
    },
    "rating": 3.5,
    "reviewCategory": "video",
    "lastReviewed": "2026-03-29"
  },
  {
    "id": "pika-review",
    "type": "review",
    "category": "media",
    "title": "Pika レビュー — 手軽さ重視の動画生成、SNS コンテンツ制作に最適",
    "excerpt": "シンプルな UI で動画を素早く生成。エフェクト機能が豊富で、SNS やショート動画向けのカジュアルな制作に向く。無料枠あり、$8/月〜。",
    "date": "2026-03-29",
    "newsDate": "2026-03-05",
    "author": "AI News 編集部",
    "readTime": "3分",
    "tags": [
      "動画生成",
      "SNS",
      "カジュアル"
    ],
    "ratings": {
      "AI品質": 3,
      "使いやすさ": 5,
      "コスパ": 4,
      "拡張性": 2,
      "企業向け": 2
    },
    "rating": 3.5,
    "reviewCategory": "video",
    "lastReviewed": "2026-03-29"
  },
  {
    "id": "udio-review",
    "type": "review",
    "category": "media",
    "title": "Udio レビュー — Suno 対抗の音楽生成、音質と楽曲構成力に定評",
    "excerpt": "Suno と並ぶ音楽生成 AI。音質の高さと楽曲構成の自然さで評価される。レーベルとのライセンス交渉を経て商用利用体制を整備中。無料枠あり。",
    "date": "2026-03-29",
    "newsDate": "2026-03-15",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "音楽生成",
      "クリエイティブ"
    ],
    "ratings": {
      "AI品質": 4,
      "使いやすさ": 4,
      "コスパ": 4,
      "拡張性": 2,
      "企業向け": 2
    },
    "rating": 3.5,
    "reviewCategory": "music",
    "lastReviewed": "2026-03-29"
  },
  {
    "id": "stable-audio-review",
    "type": "review",
    "category": "media",
    "title": "Stable Audio レビュー — Stability AI のオープン音楽生成、ローカル実行も可能",
    "excerpt": "Stability AI の音楽・効果音生成モデル。オープンウェイトでローカル実行可能。BGM や効果音の生成に向くが、ボーカル楽曲では Suno・Udio に劣る。",
    "date": "2026-03-29",
    "newsDate": "2026-02-15",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "音楽生成",
      "OSS",
      "効果音"
    ],
    "ratings": {
      "AI品質": 3,
      "使いやすさ": 3,
      "コスパ": 4,
      "拡張性": 3,
      "企業向け": 2
    },
    "rating": 3,
    "reviewCategory": "music",
    "lastReviewed": "2026-03-29"
  },
  {
    "id": "manus-review",
    "type": "review",
    "category": "product",
    "title": "Manus レビュー — 汎用AIエージェント、Webブラウジングからコードまで自律実行",
    "excerpt": "中国発の汎用AIエージェント。Webブラウジング、データ分析、コード実行、ファイル操作を自律的にこなす。招待制で話題を呼んだが、現在は一般公開済み。",
    "date": "2026-03-29",
    "newsDate": "2026-03-10",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "エージェント",
      "汎用AI",
      "中国"
    ],
    "ratings": {
      "AI品質": 4,
      "使いやすさ": 4,
      "コスパ": 3,
      "拡張性": 3,
      "企業向け": 2
    },
    "rating": 3.5,
    "reviewCategory": "agent",
    "lastReviewed": "2026-03-29"
  },
  {
    "id": "devin-review",
    "type": "review",
    "category": "product",
    "title": "Devin レビュー — Cognition 発、ソフトウェアエンジニアリング特化のAIエージェント",
    "excerpt": "「AIソフトウェアエンジニア」を標榜する自律型コーディングエージェント。独自のクラウド開発環境でコード生成・テスト・デバッグ・PR作成まで一貫対応。$500/月〜。",
    "date": "2026-03-29",
    "newsDate": "2026-03-05",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "エージェント",
      "コーディング",
      "エンタープライズ"
    ],
    "ratings": {
      "AI品質": 4,
      "使いやすさ": 3,
      "コスパ": 2,
      "拡張性": 4,
      "企業向け": 4
    },
    "rating": 3.5,
    "reviewCategory": "agent",
    "lastReviewed": "2026-03-29"
  },
  {
    "id": "genspark-review",
    "type": "review",
    "category": "product",
    "title": "GenSpark レビュー — 目的別エージェントの集合体、スライド・議事録・検索を一箇所に",
    "excerpt": "検索だけでなく、スライド生成・AI議事録・旅行計画など目的ごとに専用エージェントが分かれたユニークな構造。Sparkpages による情報構造化と合わせ、汎用AI検索とは一線を画す。無料。",
    "date": "2026-03-29",
    "newsDate": "2026-03-01",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "AI検索",
      "エージェント",
      "スライド",
      "無料"
    ],
    "ratings": {
      "AI品質": 4,
      "使いやすさ": 4,
      "コスパ": 5,
      "拡張性": 3,
      "企業向け": 2
    },
    "rating": 3.5,
    "reviewCategory": "search",
    "lastReviewed": "2026-03-29"
  },
  {
    "id": "perplexity-review",
    "type": "review",
    "category": "product",
    "title": "Perplexity AI レビュー — リファレンス重視のAI検索、全回答にソース引用を徹底",
    "excerpt": "AI検索の代名詞。回答の全段落にソース引用を付与し、NotebookLM 的な「根拠を確認できる」体験を検索に持ち込んだ。Pro Search で深い調査も可能。無料枠あり、$20/月。",
    "date": "2026-03-29",
    "newsDate": "2026-03-01",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "AI検索",
      "おすすめ",
      "API"
    ],
    "ratings": {
      "AI品質": 5,
      "使いやすさ": 5,
      "コスパ": 4,
      "拡張性": 3,
      "企業向け": 3
    },
    "rating": 4,
    "reviewCategory": "search",
    "lastReviewed": "2026-03-29"
  },
  {
    "id": "notebooklm-review",
    "type": "review",
    "category": "product",
    "title": "NotebookLM レビュー — Google発、アップロード資料に基づくAIリサーチ＆ポッドキャスト生成",
    "excerpt": "PDFや論文をアップロードすると、その資料だけを根拠に回答・要約・音声ポッドキャストを生成。ハルシネーションを構造的に抑えるリファレンス特化型AI。無料。",
    "date": "2026-03-29",
    "newsDate": "2026-03-01",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "AI検索",
      "リサーチ",
      "Google",
      "無料"
    ],
    "ratings": {
      "AI品質": 4,
      "使いやすさ": 5,
      "コスパ": 5,
      "拡張性": 2,
      "企業向け": 3
    },
    "rating": 4,
    "reviewCategory": "search",
    "lastReviewed": "2026-03-29"
  },
  {
    "id": "deepseek-r1-review",
    "type": "review",
    "category": "model",
    "title": "DeepSeek R1 レビュー — 中国発オープンウェイト推論モデル、Opus に迫る性能を破格コストで",
    "excerpt": "中国 DeepSeek 社の推論特化モデル。MIT ライセンスのオープンウェイトで、数学・コーディングの推論力は Opus 4.6 に迫る。API 料金は主要モデルの 1/10 以下。2025年1月のリリースで業界に衝撃を与えた。",
    "date": "2026-03-29",
    "newsDate": "2025-01-20",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "モデル",
      "中国",
      "OSS",
      "推論",
      "MoE"
    ],
    "ratings": {
      "AI品質": 5,
      "使いやすさ": 3,
      "コスパ": 5,
      "拡張性": 4,
      "企業向け": 2
    },
    "rating": 4,
    "reviewCategory": "model",
    "lastReviewed": "2026-03-29"
  },
  {
    "id": "qwen-3-review",
    "type": "review",
    "category": "model",
    "title": "Qwen 3 レビュー — Alibaba 発、ハイブリッド思考とオープンウェイトの大型ファミリー",
    "excerpt": "Alibaba Cloud の最新モデルファミリー。0.6B〜235B まで8サイズ展開、Apache 2.0 のオープンウェイト。「考えるか考えないか」を切り替えるハイブリッド思考モードが特徴。",
    "date": "2026-03-29",
    "newsDate": "2025-04-29",
    "author": "AI News 編集部",
    "readTime": "8分",
    "tags": [
      "モデル",
      "中国",
      "OSS",
      "Alibaba"
    ],
    "ratings": {
      "AI品質": 4,
      "使いやすさ": 3,
      "コスパ": 5,
      "拡張性": 5,
      "企業向け": 3
    },
    "rating": 4,
    "reviewCategory": "model",
    "lastReviewed": "2026-03-29"
  },
  {
    "id": "ernie-4-5-review",
    "type": "review",
    "category": "model",
    "title": "ERNIE 4.5 レビュー — Baidu の基盤モデル、中国最大の検索エンジンが支える実用力",
    "excerpt": "Baidu（百度）の最新基盤モデル。中国最大の検索エンジンと Baidu Cloud との統合が強み。文心一言（ERNIE Bot）として消費者向けにも展開。中国国内の企業利用で実績豊富。",
    "date": "2026-03-29",
    "newsDate": "2025-06-15",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "モデル",
      "中国",
      "Baidu",
      "マルチモーダル"
    ],
    "ratings": {
      "AI品質": 4,
      "使いやすさ": 3,
      "コスパ": 4,
      "拡張性": 3,
      "企業向け": 4
    },
    "rating": 3.5,
    "reviewCategory": "model",
    "lastReviewed": "2026-03-29"
  },
  {
    "id": "meta-acquires-manus-2025",
    "type": "news",
    "category": "product",
    "title": "Meta、汎用AIエージェントの Manus を約20億ドルで買収 — 8ヶ月で ARR 1億ドルの急成長スタートアップ",
    "excerpt": "Meta が中国発・シンガポール拠点の AI エージェント企業 Manus を買収すると発表。買収額は20億ドル超と報じられている。Manus はサービス開始わずか8ヶ月で ARR 1億ドル超を達成。Facebook・Instagram・WhatsApp への AI エージェント統合が目的とみられる。",
    "date": "2026-03-29",
    "newsDate": "2025-12-29",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "Meta",
      "買収",
      "エージェント",
      "Manus",
      "業界動向"
    ]
  },
  {
    "id": "dario-amodei-dwarkesh-podcast-2026-feb",
    "type": "feature",
    "category": "special",
    "title": "Anthropic CEO Dario Amodei「指数関数の終わりは近い」— Dwarkesh Podcast 要約（2026年2月）",
    "excerpt": "Anthropic の CEO Dario Amodei が Dwarkesh Podcast に出演。AGI の到達時期、Anthropic の年10倍成長、コンピュート規模の予測、「継続学習は不要」という主張など、AI 業界の今後を左右する発言を要約。",
    "date": "2026-03-29",
    "newsDate": "2026-02-13",
    "author": "AI News 編集部",
    "readTime": "8分",
    "tags": [
      "Anthropic",
      "Dario Amodei",
      "ポッドキャスト",
      "AGI",
      "業界動向"
    ]
  },
  {
    "id": "tbpn-chatgpt-ads-anthropic-stories-2026-march",
    "type": "feature",
    "category": "special",
    "title": "ChatGPT に広告導入で2ヶ月で ARR 1億ドル、Anthropic はスーパーボウル CM で皮肉る — TBPN 要約（3月27日）",
    "excerpt": "OpenAI が ChatGPT 無料版に広告を導入し、わずか2ヶ月で年間収益1億ドルを突破。一方 Anthropic はスーパーボウル CM で「広告が AI 体験を壊す」と皮肉り、Claude のダウンロード数が急増。Novartis の28億ドル買収も。",
    "date": "2026-03-29",
    "newsDate": "2026-03-27",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "OpenAI",
      "Anthropic",
      "広告",
      "ポッドキャスト",
      "TBPN",
      "ビジネスモデル"
    ]
  },
  {
    "id": "tbpn-benchmark-sora-spacex-2026-march",
    "type": "feature",
    "category": "special",
    "title": "OpenAI が Sora を終了、SpaceX 2兆ドル IPO 間近、Benchmark の「テセウスの船」— Diet TBPN 要約（3月25日）",
    "excerpt": "シリコンバレーの空気感を伝える TBPN のダイジェスト版。OpenAI が Sora を終了（1日1,500万ドルの計算コスト）、SpaceX の IPO 申請が数日以内、Benchmark は「テセウスの船」か。31分で3つの大ニュースを凝縮。",
    "date": "2026-03-29",
    "newsDate": "2026-03-25",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "OpenAI",
      "Sora",
      "SpaceX",
      "IPO",
      "ポッドキャスト",
      "TBPN"
    ]
  },
  {
    "id": "dylan-patel-dwarkesh-ai-compute-bottlenecks",
    "type": "feature",
    "category": "special",
    "title": "Dylan Patel（SemiAnalysis）「真のボトルネックは ASML」— AI コンピュートの3大制約を徹底分析 — Dwarkesh Podcast 要約",
    "excerpt": "半導体アナリスト Dylan Patel が Dwarkesh Podcast で AI コンピュートの3大ボトルネック（ロジック・メモリ・電力）を分析。ASML の EUV 装置が2030年までの真の制約、1ギガワットに必要な EUV ツール3.5台、H100 が3年前より価値が高い理由を語った。",
    "date": "2026-03-29",
    "newsDate": "2026-03-13",
    "author": "AI News 編集部",
    "readTime": "8分",
    "tags": [
      "半導体",
      "ASML",
      "SemiAnalysis",
      "ポッドキャスト",
      "GPU",
      "TSMC"
    ]
  },
  {
    "id": "lex-fridman-494-jensen-huang-nvidia",
    "type": "feature",
    "category": "special",
    "title": "Jensen Huang「計算能力だけが知性をスケールさせる」— NVIDIA 4兆ドル企業の全戦略 — Lex Fridman #494 要約",
    "excerpt": "NVIDIA CEO Jensen Huang が Lex Fridman と2時間半。GPU 企業から「AI ファクトリー」への転換、AIスケーリングの4段階、1ラック1,300万コンポーネントのサプライチェーン、中国の評価、10兆ドル企業への道筋を語った。",
    "date": "2026-03-29",
    "newsDate": "2026-03-23",
    "author": "AI News 編集部",
    "readTime": "8分",
    "tags": [
      "NVIDIA",
      "Jensen Huang",
      "ポッドキャスト",
      "Lex Fridman",
      "GPU",
      "半導体"
    ]
  },
  {
    "id": "lex-fridman-491-openclaw-peter-steinberger",
    "type": "feature",
    "category": "special",
    "title": "OpenClaw — GitHub 史上最速成長の AI エージェント、「自己修正するソフトウェア」の衝撃 — Lex Fridman #491 要約",
    "excerpt": "PSPDFKit で10億台のデバイスに使われるソフトウェアを作った Peter Steinberger が、GitHub 史上最速で成長したオープンソース AI エージェント OpenClaw を語る。自分のソースコードを読んで自分を修正するエージェント、コーディングの民主化、そして「楽しさ」で勝つ開発文化。",
    "date": "2026-03-29",
    "newsDate": "2026-02-12",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": [
      "OpenClaw",
      "Lex Fridman",
      "ポッドキャスト",
      "エージェント",
      "OSS"
    ]
  },
  {
    "id": "lex-fridman-490-state-of-ai-2026",
    "type": "feature",
    "category": "special",
    "title": "「2026年 AI の現在地」全方位レビュー — Lex Fridman Podcast #490 要約（4時間39分）",
    "excerpt": "AI 研究者 Nathan Lambert（Ai2）と Sebastian Raschka が Lex Fridman と4時間半にわたり議論。LLM 比較、コーディング AI、スケーリング則の三層構造、中国のオープンモデル攻勢、エージェントの emergence、GPU インフラの現実を総ざらい。",
    "date": "2026-03-29",
    "newsDate": "2026-02-01",
    "author": "AI News 編集部",
    "readTime": "10分",
    "tags": [
      "Lex Fridman",
      "ポッドキャスト",
      "LLM",
      "スケーリング",
      "中国",
      "エージェント"
    ]
  },
  {
    "id": "elon-musk-dwarkesh-podcast-2026",
    "type": "feature",
    "category": "special",
    "title": "Elon Musk「36ヶ月後、AI を置く最安の場所は宇宙になる」— Dwarkesh Podcast 要約（2026年2月）",
    "excerpt": "Elon Musk が Dwarkesh Podcast に約3時間出演。地上の電力制約を突破する軌道データセンター構想、xAI/Grok の「真実追求型」アライメント、Optimus の年100万台製造計画、TeraFab チップ工場、そして「無限の金バグ」としての再帰的 AI 経済を語った。",
    "date": "2026-03-29",
    "newsDate": "2026-02-05",
    "author": "AI News 編集部",
    "readTime": "10分",
    "tags": [
      "xAI",
      "Elon Musk",
      "ポッドキャスト",
      "宇宙",
      "Optimus",
      "半導体"
    ]
  },
  {
    "id": "satya-nadella-dwarkesh-podcast-2026",
    "type": "feature",
    "category": "special",
    "title": "Microsoft CEO Satya Nadella「AGI より世界の経済成長率10%が真のベンチマーク」— Dwarkesh Podcast 要約",
    "excerpt": "Microsoft の CEO Satya Nadella が Dwarkesh Podcast に出演。AGI の定義を避け「経済成長こそ指標」と主張。量子コンピュータの Majorana ブレイクスルー、AI が独占を生まない理由、ゲーム世界モデル Muse など、Microsoft の全方位戦略を語った。",
    "date": "2026-03-29",
    "newsDate": "2026-02-20",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": [
      "Microsoft",
      "Satya Nadella",
      "ポッドキャスト",
      "量子コンピュータ",
      "AGI"
    ]
  },
  {
    "id": "cli-agent-community-oss-2026",
    "type": "feature",
    "category": "cli",
    "title": "CLI エージェント周辺のコミュニティ OSS まとめ — マルチエージェント・並列実行・拡張ツール群",
    "excerpt": "Claude Code・Codex を中心に、ターミナル上で AI エージェントを並列実行・連携させるコミュニティ製 OSS ツールが急増している。主要プロジェクトの位置づけと GitHub リンクを整理する。",
    "date": "2026-03-29",
    "newsDate": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": [
      "CLI",
      "OSS",
      "マルチエージェント",
      "コミュニティ",
      "Claude Code"
    ]
  },
  {
    "id": "microsoft-copilot-cowork-launch-2026",
    "type": "news",
    "category": "product",
    "title": "Microsoft Copilot Cowork が Frontier ユーザーに展開開始 — Anthropic と共同開発、M365 上でマルチステップ業務を自律実行",
    "excerpt": "Microsoft 365 Copilot の新モード「Cowork」が Frontier プログラムのユーザーに展開開始。Anthropic の Claude 技術を統合し、単なるチャット応答ではなく複数ステップの業務を自律的に実行。進捗を可視化しながらユーザーが随時介入できる設計。",
    "date": "2026-03-29",
    "newsDate": "2026-03-27",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "Microsoft",
      "Copilot",
      "エージェント",
      "Anthropic",
      "エンタープライズ"
    ]
  },
  {
    "id": "google-colab-vscode-extension",
    "type": "news",
    "category": "product",
    "title": "Google Colab が VS Code に統合 — 無料 T4 GPU をローカル環境からそのまま使える時代に",
    "excerpt": "Google が VS Code 向けの公式 Colab 拡張機能をリリース。ローカルの .ipynb をそのまま Colab の T4 GPU / TPU で実行可能に。Git 統合も自然になり、「GPU がない」は個人開発者の言い訳にならなくなった。",
    "date": "2026-03-29",
    "newsDate": "2025-11-13",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "Google",
      "Colab",
      "VS Code",
      "GPU",
      "開発環境"
    ]
  },
  {
    "id": "gemini-drop-march-2026",
    "type": "news",
    "category": "model",
    "title": "Gemini Drop（2026年3月）— Lyria 3 Pro・メモリ移行・Personal Intelligence 無料化など5つの新機能",
    "excerpt": "Google が月例の Gemini Drop で5つの新機能を発表。音楽生成 Lyria 3 Pro（最大3分）、他社AIからのチャット履歴移行、Personal Intelligence の無料化、Google TV 向け Gemini 機能、Gemini 3.1 Flash Live の会話強化。",
    "date": "2026-03-29",
    "newsDate": "2026-03-27",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "Google",
      "Gemini",
      "Lyria",
      "音楽生成",
      "パーソナライズ"
    ]
  },
  {
    "id": "cursor-automations-self-hosted-agents-2026",
    "type": "news",
    "category": "editor",
    "title": "Cursor Automations 登場 — Slack・GitHub・PagerDuty 連動の常駐エージェント＋セルフホスト型クラウドエージェント",
    "excerpt": "Cursor が3月に2つの大型機能をリリース。Automations はスケジュールや外部イベント（Slack、GitHub PR、PagerDuty）をトリガーにエージェントを自動起動する仕組み。さらに Self-hosted Cloud Agents でコードと実行環境を自社ネットワーク内に保持したままエージェントを利用可能に。",
    "date": "2026-03-30",
    "newsDate": "2026-03-05",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "Cursor",
      "Automations",
      "エージェント",
      "セルフホスト",
      "エンタープライズ"
    ]
  },
  {
    "id": "copilot-agentic-code-review-ga-2026",
    "type": "news",
    "category": "cli",
    "title": "GitHub Copilot コードレビューがエージェント型に進化 — GA 化、累計6,000万件突破、GitHub の PR 5件に1件が AI レビュー",
    "excerpt": "GitHub Copilot のコードレビュー機能がエージェント型アーキテクチャに移行し GA 化。リポジトリ全体のコンテキストを自律的に収集して分析するため精度が大幅向上。累計6,000万件を突破し、GitHub 上の PR の5件に1件が Copilot によるレビューを受けている。",
    "date": "2026-03-30",
    "newsDate": "2026-03-05",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "GitHub",
      "Copilot",
      "コードレビュー",
      "エージェント",
      "GA"
    ]
  },
  {
    "id": "claude-code-computer-use-review-march-2026",
    "type": "news",
    "category": "cli",
    "title": "Claude Code 3月アップデート — Computer Use 搭載・出力上限128K・Code Review 機能で開発フロー完結",
    "excerpt": "Anthropic が3月に Claude Code を大幅強化。Computer Use でファイル操作や画面操作が可能に、Opus 4.6 の出力上限が128Kトークンに拡張、新 Code Review 機能で AI 生成コードの品質管理を自動化。run-rate 収益は25億ドルを突破。",
    "date": "2026-03-30",
    "newsDate": "2026-03-23",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": [
      "Anthropic",
      "Claude Code",
      "Computer Use",
      "Code Review",
      "出力上限"
    ]
  },
  {
    "id": "anthropic-claude-writing-itself-74-launches-2026",
    "type": "news",
    "category": "special",
    "title": "「Claude が次の Claude を設計している」— Anthropic CEO 発言と52日間74リリースの異常な開発速度",
    "excerpt": "Anthropic CEO の Dario Amodei が Davos で「社内にはもうコードを書かないエンジニアがいる」と発言。Labs 責任者の Mike Krieger は「Claude が Claude を書いている」と明言。実際に52日間で74の主要リリースを出荷し、Claude Code の run-rate 収益は25億ドルを突破した。",
    "date": "2026-03-30",
    "newsDate": "2026-01-20",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": [
      "Anthropic",
      "Dario Amodei",
      "Claude Code",
      "再帰的AI開発",
      "AI生産性"
    ]
  },
  {
    "id": "openai-codex-plugin-cc-claude-code-2026",
    "type": "news",
    "category": "cli",
    "title": "OpenAI が公式に Claude Code 向け Codex プラグインを公開 — 競合ツール内からコードレビュー・タスク委任が可能に",
    "excerpt": "OpenAI が openai/codex-plugin-cc を公開し、Claude Code 内から Codex のコードレビューやタスク委任を公式にサポート。OSS コミュニティで数週間話題だった Claude↔Codex 連携が、OpenAI 自身の手で公式プラグインとして実現した異例の展開。",
    "date": "2026-03-30",
    "newsDate": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": [
      "OpenAI",
      "Codex",
      "Claude Code",
      "プラグイン",
      "MCP",
      "相互運用"
    ]
  },
  {
    "id": "m365-copilot-researcher-critique-council-2026",
    "type": "news",
    "category": "product",
    "title": "M365 Copilot Researcher に「Critique」「Council」追加 — GPT が起草し Claude が事実確認する生成・評価分離アーキテクチャ",
    "excerpt": "Microsoft が M365 Copilot の Researcher エージェントにマルチモデル機能を追加。Critique は GPT-5.4 が調査・起草、Claude Opus 4.6 が事実確認・引用精査を行う2モデル連携で、DRACO ベンチで業界最高スコアを達成。Council は複数モデルの並列回答と合意・相違点を可視化する。",
    "date": "2026-03-30",
    "newsDate": "2026-03-30",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": [
      "Microsoft",
      "Copilot",
      "マルチモデル",
      "Researcher",
      "Claude",
      "GPT",
      "Deep Research"
    ]
  },
  {
    "id": "x-grok-auto-translation-2026",
    "type": "news",
    "category": "product",
    "title": "X が Grok 自動翻訳を全面展開 — タイムラインの外国語投稿がタップ不要で母国語表示に、「史上最大の文化交流」か炎上輸出か",
    "excerpt": "X（旧Twitter）が Grok AI による投稿の自動翻訳機能を本格展開。従来の「翻訳を表示」ボタンが不要になり、For You タブの外国語投稿が自動的に母国語で表示される。X プロダクト責任者は「史上最大の文化交流」と称したが、意図しないグローバル拡散のリスクも指摘されている。",
    "date": "2026-03-30",
    "newsDate": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": [
      "X",
      "Grok",
      "xAI",
      "自動翻訳",
      "文化交流",
      "多言語"
    ]
  },
  {
    "id": "claude-code-computer-use-deep-dive-2026",
    "type": "news",
    "category": "cli",
    "title": "Claude Code に Computer Use が搭載 — CLI からアプリを開き、クリックし、スクショを撮る。コードを書いた AI が自分でテストする時代",
    "excerpt": "Anthropic が Claude Code に Computer Use（Research Preview）を追加。CLI セッション内から macOS のアプリを起動・クリック操作・スクリーンショット取得が可能に。Swift アプリをビルドして UI を自動検証する、レイアウトバグを再現して CSS を修正するなど、コードを書いた AI が自らテストまで完結させる。",
    "date": "2026-03-30",
    "newsDate": "2026-03-23",
    "author": "AI News 編集部",
    "readTime": "8分",
    "tags": [
      "Anthropic",
      "Claude Code",
      "Computer Use",
      "デスクトップ自動化",
      "Vercept",
      "macOS"
    ]
  },
  {
    "id": "claude-code-token-drain-prompt-cache-bug-2026",
    "type": "news",
    "category": "regulation",
    "title": "Claude Code のトークンが異常速度で消失 — Anthropic が prompt cache バグを「最優先で調査中」と認める",
    "excerpt": "3月23日頃から Claude Code の Max プラン（$100〜$200/月）ユーザーを中心に、5時間セッションが1〜2時間で枯渇する異常なトークン消費が多数報告されている。Reddit ユーザーがバイナリを逆解析し、prompt cache が正しく効かず毎回フルリビルドが走る2つのバグを発見。Anthropic の Lydia Hallie（プロダクトリード）は「チームの最優先事項」と認め調査中。--resume でセッション再開時に入力27Kトークンに対し出力65万トークンが発生した報告もあり、「使いすぎ」ではなく「裏でトークンが燃えていた」実態が明らかになりつつある。",
    "date": "2026-03-31",
    "newsDate": "2026-03-31",
    "author": "AI News 編集部",
    "readTime": "15分",
    "tags": [
      "Claude Code",
      "Anthropic",
      "トークン消費",
      "prompt cache",
      "バグ",
      "レート制限",
      "Codex",
      "競合"
    ],
    "coverImage": {
      "src": "articles/cover-claude-code-token-drain.svg",
      "alt": "Claude Code トークン異常消費 — prompt cache バグで最大20倍のコスト"
    },
    "heroScope": "day"
  },
  {
    "id": "claude-code-source-leak-npm-sourcemap-2026",
    "type": "news",
    "category": "regulation",
    "title": "【速報】Claude Code の全ソースコード（51万行）が npm のソースマップ経由で流出 — 未公開機能・アーキテクチャが丸見えに",
    "excerpt": "Anthropic の AI コーディングツール **Claude Code** の完全なソースコード（1,900ファイル・512,000行超の TypeScript）が、npm パッケージに同梱されたソースマップ（cli.js.map、57MB）を通じて流出した。ハッキングではなく Anthropic 自身のパッケージングミス。未公開機能フラグ（BUDDY、KAIROS、ULTRAPLAN 等）やシステムプロンプト全文、ツール呼び出しロジック、マルチエージェント協調設計が完全に公開された。GitHub ミラーは即座に1,100+スター・1,900+フォークを獲得し、DMCA テイクダウンが進行中。3月26日の Mythos モデルリークに続く2週連続のセキュリティ事故。",
    "date": "2026-03-31",
    "newsDate": "2026-03-31",
    "author": "AI News 編集部",
    "readTime": "18分",
    "tags": [
      "セキュリティ",
      "npm",
      "Claude Code",
      "Anthropic",
      "ソースコード流出",
      "ソースマップ",
      "エージェントOS"
    ],
    "coverImage": {
      "src": "articles/cover-claude-code-source-leak.svg",
      "alt": "Claude Code ソースコード流出 — npm ソースマップ経由で51万行の TypeScript が公開"
    },
    "heroScope": "day"
  },
  {
    "id": "axios-npm-supply-chain-attack-rat-2026",
    "type": "news",
    "category": "regulation",
    "title": "【緊急】axios がサプライチェーン攻撃を受け RAT 入り偽バージョンが npm に公開 — 週間1億DLの HTTP クライアントが標的に",
    "excerpt": "npm 週間1億ダウンロードを誇る HTTP クライアント **axios** のリードメンテナーアカウントが乗っ取られ、**axios@1.14.1** と **axios@0.30.4** にリモートアクセス型トロイの木馬（RAT）を仕込んだ偽バージョンが公開された。悪意のある依存パッケージ **plain-crypto-js** 経由で macOS・Windows・Linux 全プラットフォームに C2 サーバー `sfrclak[.]com:8000` と通信するペイロードがドロップされる。npm セキュリティチームが問題バージョンを削除済みだが、キャレット範囲（^1.14.0 等）で自動取得した環境は即座に確認・認証情報のローテーションが必要。",
    "date": "2026-03-31",
    "newsDate": "2026-03-31",
    "author": "AI News 編集部",
    "readTime": "12分",
    "tags": [
      "セキュリティ",
      "npm",
      "サプライチェーン攻撃",
      "axios",
      "マルウェア",
      "RAT",
      "Node.js"
    ],
    "coverImage": {
      "src": "articles/cover-axios-supply-chain-attack.svg",
      "alt": "axios サプライチェーン攻撃の警告図 — 危険バージョンと安全バージョンの対比"
    },
    "heroScope": "day"
  },
  {
    "id": "harvard-vibe-coding-course-2026",
    "type": "news",
    "category": "special",
    "title": "ハーバード大学がバイブコーディングを正式コース化 — 開発者の92%が採用する一方、セキュリティ負債が急増",
    "excerpt": "ハーバード教育大学院が6週間のバイブコーディング講座を開講。Replit・Figma Make・Claude Code を使い分ける実践型。一方で AI 生成コードの45%に脆弱性、CVE 登録数が月35件に急増し、光と影が鮮明に。",
    "date": "2026-04-02",
    "newsDate": "2026-04-01",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "バイブコーディング",
      "ハーバード大学",
      "セキュリティ",
      "オープンソース",
      "AI コーディング",
      "教育"
    ]
  },
  {
    "id": "claude-paid-subscriptions-double-2026",
    "type": "news",
    "category": "product",
    "title": "Claude 有料会員が2026年に倍増 — Super Bowl CM・DoD 対立・Claude Code が三つ巴の AI 市場を加速",
    "excerpt": "Anthropic の Claude 有料サブスクリプションが2026年に入り倍増以上。年間売上$19B に迫り、Super Bowl CM、Claude Code/Cowork の投入、OpenAI の DoD 契約への反発が成長を牽引。AI アシスタント市場は三つ巴に。",
    "date": "2026-04-02",
    "newsDate": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "Anthropic",
      "Claude",
      "サブスクリプション",
      "Super Bowl",
      "Claude Code",
      "OpenAI",
      "DoD"
    ],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Anthropic"
    }
  },
  {
    "id": "gitreverse-repo-to-prompt-openclaw-2026",
    "type": "news",
    "category": "cli",
    "title": "GitReverse — GitHub リポジトリを「バイブコーディング用プロンプト」に逆変換、344k スターの OpenClaw を Claude Code で再構築するデモが話題に",
    "excerpt": "公開 GitHub リポジトリの URL を貼るだけで、そのプロジェクトを一から作るためのバイブコーディング用プロンプトを自動生成する GitReverse が登場。344k スターの巨大 OSS「OpenClaw」を逆変換し、Claude Code に貼り付けて再構築するデモ動画が拡散している。",
    "date": "2026-04-02",
    "newsDate": "2026-03-31",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "バイブコーディング",
      "オープンソース",
      "Claude Code",
      "プロンプト",
      "開発体験"
    ],
    "coverImage": {
      "src": "logos/gitreverse.svg",
      "alt": "GitReverse"
    }
  },
  {
    "id": "supabase-ssh-docs-virtual-filesystem-2026",
    "type": "news",
    "category": "data",
    "title": "Supabase が SSH でドキュメント全体を仮想ファイルシステムとして公開 — AI エージェントが grep・find・cat でドキュメントを直接検索",
    "excerpt": "Supabase が実験的サービス supabase.sh を公開。ssh supabase.sh でドキュメント全体が仮想ファイルシステムとして見え、AI コーディングエージェントが grep / find / cat でリアルタイムに検索・参照できる。Claude Code や Cursor など18以上のエージェントに対応。",
    "date": "2026-04-02",
    "newsDate": "2026-04-02",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "Supabase",
      "SSH",
      "ドキュメント",
      "エージェント",
      "MCP",
      "開発体験"
    ],
    "coverImage": {
      "src": "logos/supabase.svg",
      "alt": "Supabase"
    }
  },
  {
    "id": "claude-code-cross-repo-skills-add-dir-2026",
    "type": "news",
    "category": "cli",
    "title": "Claude Code の --add-dir × Skills で擬似モノレポ — 兄弟リポジトリのナレッジを横断活用するワークフロー",
    "excerpt": "Claude Code の --add-dir フラグで追加したディレクトリの .claude/skills/ が自動読み込みされる仕組みを活用し、複数リポジトリをモノレポのように横断操作するワークフローが注目を集めている。コードだけでなく戦略文書やデザイン文書も AI の視界に入れることで、ナレッジが指数関数的に効いてくる。",
    "date": "2026-04-02",
    "newsDate": "2026-04-02",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "Claude Code",
      "Anthropic",
      "スキル",
      "マルチリポジトリ",
      "開発体験"
    ],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Anthropic Claude Code"
    }
  },
  {
    "id": "timesfm-mirofish-business-forecasting-2026",
    "type": "feature",
    "category": "model",
    "title": "企業の未来予測に AI を使う時代 — Google TimesFM 2.5 の数値予測と MiroFish の社会シミュレーション、2つのアプローチを徹底比較",
    "excerpt": "Google Research の時系列基盤モデル TimesFM 2.5 と、GitHub スター4.8万超のマルチエージェント予測エンジン MiroFish。数値予測と社会シミュレーションという異なるアプローチで企業の意思決定を支援する2つの AI を比較し、経営予測への活用法を探る。",
    "date": "2026-04-02",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": [
      "Google",
      "時系列予測",
      "MiroFish",
      "マルチエージェント",
      "経営戦略",
      "オープンソース"
    ],
    "coverImage": {
      "src": "logos/google.svg",
      "alt": "Google Research TimesFM"
    }
  },
  {
    "id": "claude-code-v2-1-90-powerup-no-flicker-2026",
    "type": "news",
    "category": "cli",
    "title": "Claude Code v2.1.90 リリース — /powerup で10機能を体感学習、NO_FLICKER でちらつき解消、Auto Mode の指示遵守も改善",
    "excerpt": "Claude Code v2.1.90 が公開。アニメーション付きインタラクティブレッスン /powerup（10項目）、ビューポート仮想化による NO_FLICKER モード、Auto Mode の明示的指示への遵守改善、レートリミット無限ループ修正、PowerShell セキュリティ強化など多数の改善を含む大型アップデート。",
    "date": "2026-04-02",
    "newsDate": "2026-04-02",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": [
      "Claude Code",
      "Anthropic",
      "アップデート",
      "オンボーディング",
      "ターミナル",
      "セキュリティ"
    ],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Anthropic Claude Code"
    }
  },
  {
    "id": "drawio-mcp-diagram-streaming-claude-2026",
    "type": "news",
    "category": "cli",
    "title": "draw.io が MCP サーバーを公開 — Claude の会話内でダイアグラムがリアルタイム生成される時代に",
    "excerpt": "作図ツール draw.io が公式 MCP サーバーを公開。Claude にプロンプトを送るだけで、フローチャートやシーケンス図が会話画面内にシェイプ単位でストリーミング生成される。インストール不要のホスト版、ローカル版、CLI 版など4つの導入方法を提供。",
    "date": "2026-04-02",
    "newsDate": "2026-04-02",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "draw.io",
      "MCP",
      "Claude",
      "ダイアグラム",
      "開発ツール",
      "オープンソース"
    ],
    "coverImage": {
      "src": "logos/drawio.svg",
      "alt": "draw.io MCP"
    }
  },
  {
    "id": "openai-122b-funding-852b-valuation-2026",
    "type": "news",
    "category": "product",
    "title": "OpenAI が史上最大の$122B（約18兆円）を調達、評価額$852B — Amazon・Nvidia・SoftBank が巨額出資、AI スーパーアプリ構想へ",
    "excerpt": "OpenAI が$122Bの資金調達を完了し、評価額$852Bに到達。Amazon $50B、Nvidia・SoftBank 各$30B が参加。月間売上$2B・週間9億ユーザーを背景に、ChatGPT・Codex・エージェントを統合する「AI スーパーアプリ」構想と年内 IPO を視野に入れる。",
    "date": "2026-04-01",
    "newsDate": "2026-03-31",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "OpenAI",
      "資金調達",
      "Amazon",
      "Nvidia",
      "SoftBank",
      "IPO",
      "ChatGPT",
      "スーパーアプリ"
    ],
    "coverImage": {
      "src": "logos/openai.svg",
      "alt": "OpenAI"
    }
  },
  {
    "id": "anthropic-coreweave-68b-multiyear-cloud-deal-2026",
    "type": "news",
    "category": "product",
    "title": "Anthropic が CoreWeave と $68億の複数年クラウド契約を締結 — NVIDIA Vera Rubin GPU で Claude のプロダクションスケールを確保、AI インフラ軍拡競争が加速",
    "excerpt": "CoreWeave が4月10日、Anthropic との複数年にわたるクラウドインフラ契約を発表した。契約総額は推定 $68億（約1兆円）で、NVIDIA Vera Rubin GPU を中心としたコンピュート基盤を Anthropic に提供する。これにより主要 AI モデルプロバイダー上位10社中9社が CoreWeave を利用する形となった。発表の前日には Meta が CoreWeave に $210億を投じる契約を結んでおり、AI インフラの争奪戦が一段と激化している。",
    "date": "2026-04-13",
    "newsDate": "2026-04-10",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": ["Anthropic", "CoreWeave", "クラウドインフラ", "GPU", "NVIDIA"],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Anthropic CoreWeave Deal"
    }
  },
  {
    "id": "openai-chatgpt-ads-25b-revenue-projection-2026",
    "type": "news",
    "category": "product",
    "title": "OpenAI が ChatGPT 広告で2026年 $25億、2030年 $1000億の収益を予測 — パイロット開始6週間で ARR $1億突破、Google・Meta の広告帝国に挑戦状",
    "excerpt": "Axios が4月9日、OpenAI が投資家向けプレゼンテーションで ChatGPT 広告事業の収益予測を提示したと報じた。2026年に $25億、2030年には $1000億を見込む。2月9日の米国パイロット開始からわずか6週間で ARR $1億を突破し、WPP・Omnicom・Dentsu の大手3エージェンシーが参加。4月にはセルフサーブ広告マネージャーも公開され、最低出稿額を $25万から $5万に引き下げた。",
    "date": "2026-04-16",
    "newsDate": "2026-04-09",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": ["OpenAI", "ChatGPT", "広告", "収益", "ビジネスモデル"],
    "coverImage": {
      "src": "logos/openai.svg",
      "alt": "OpenAI ChatGPT Ads"
    }
  },
  {
    "id": "shopify-ai-toolkit-oss-mcp-agent-2026",
    "type": "news",
    "category": "product",
    "title": "Shopify が AI Toolkit をオープンソース公開 — Claude Code・Cursor・Codex 等から EC ストアを直接操作、MCP ベースのエージェント連携基盤",
    "excerpt": "Shopify が4月9日、AIコーディングツールから Shopify プラットフォームに直接接続する「AI Toolkit」をオープンソース（MIT ライセンス）で公開した。Claude Code、Cursor、VS Code、Gemini CLI、OpenAI Codex に対応し、ドキュメント検索・GraphQL スキーマ検証・ストア操作の3機能を提供する。Anthropic が策定した MCP（Model Context Protocol）を基盤とし、AIエージェントが自然言語で商品管理や在庫変更を実行できる。",
    "date": "2026-04-16",
    "newsDate": "2026-04-09",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": ["Shopify", "MCP", "オープンソース", "エージェント", "開発ツール"],
    "coverImage": {
      "src": "articles/cover-programming.svg",
      "alt": "Shopify AI Toolkit"
    }
  },
  {
    "id": "apple-ai-chief-giannandrea-departure-2026",
    "type": "news",
    "category": "product",
    "title": "Apple AI責任者 John Giannandrea が8年で退任 — Apple Intelligence 不振と Siri 遅延の責任、後任に元Google VP の Amar Subramanya",
    "excerpt": "Apple の元 AI 責任者 John Giannandrea が4月15日付で正式に退任した。2018年に Google から招聘され機械学習と Siri を統括したが、2025年3月に Apple Intelligence の不振と Siri 大規模刷新の遅延を受けて権限を大幅に縮小されていた。Tim Cook が「プロダクト開発の遂行能力」に信頼を失ったと報じられている。後任の AI 担当 VP には Amar Subramanya が就任し、Craig Federighi 直属で再出発する。",
    "date": "2026-04-16",
    "newsDate": "2026-04-13",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": ["Apple", "Apple Intelligence", "Siri", "人事", "リーダーシップ"],
    "coverImage": {
      "src": "articles/cover-model-api.svg",
      "alt": "Apple AI Leadership"
    }
  },
  {
    "id": "stanford-hai-ai-index-2026-china-transparency-2026",
    "type": "feature",
    "category": "regulation",
    "title": "【分析】Stanford AI Index 2026 — 中国が米国とのAI性能差をほぼ解消、投資額23倍でも差は一桁%、透明性スコアは過去最低に",
    "excerpt": "Stanford HAI が4月13日に公開した AI Index 2026 によると、中国と米国の AI モデル性能差は一桁パーセントにまで縮小し、事実上の同等水準に達した。一方、米国の民間 AI 投資は $2,859億で中国の23倍以上。生成 AI の人口普及率は3年で53%に到達し、PC やインターネットより速い。しかし基盤モデルの透明性指数は58→40に急落し、環境負荷も深刻化——xAI の Grok 4 訓練だけで推定 72,000トンの CO2 を排出した。",
    "date": "2026-04-16",
    "newsDate": "2026-04-13",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": ["Stanford", "AI Index", "中国", "透明性", "環境"],
    "coverImage": {
      "src": "articles/cover-regulation.svg",
      "alt": "Stanford AI Index 2026"
    }
  },
  {
    "id": "anthropic-claude-performance-decline-effort-backlash-2026",
    "type": "news",
    "category": "product",
    "title": "Claude の性能低下にユーザーが反発 — Anthropic がデフォルト effort を「中」に下げていたことが判明、6,852セッションの分析が火種に",
    "excerpt": "Anthropic の Claude がパフォーマンス低下しているとの訴えが4月中旬に急拡大した。AMD シニアディレクターの Stella Laurenzo が Claude Code の6,852セッション・234,760ツールコールを分析し「複雑なエンジニアリング作業に信頼できない」と GitHub Issue で告発。背景には3月3日に Anthropic がデフォルト effort レベルを「高」から「中（85）」に引き下げた変更があった。Claude Code 責任者の Boris Cherny はコスト最適化のためと説明し、4月7日に API・Team・Enterprise ユーザーのデフォルトを「高」に戻した。",
    "date": "2026-04-16",
    "newsDate": "2026-04-13",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": ["Anthropic", "Claude", "Claude Code", "パフォーマンス", "ユーザー体験"],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Claude Performance Issues"
    }
  },
  {
    "id": "openai-gpt-54-cyber-tac-cybersecurity-2026",
    "type": "news",
    "category": "model",
    "title": "OpenAI が GPT-5.4-Cyber を公開 — サイバーセキュリティ特化モデルでバイナリ逆解析が可能に、Anthropic Mythos への対抗を鮮明に",
    "excerpt": "OpenAI が4月14日、防御的サイバーセキュリティに特化した GPT-5.4-Cyber を限定公開した。通常の GPT-5.4 よりリフューザル閾値を下げ、バイナリ逆解析・マルウェア分析・脆弱性検証などのワークフローを可能にする。Trusted Access for Cyber（TAC）プログラムを拡大し、段階的な本人確認で数千人規模の研究者・セキュリティチームに提供する。Codex Security は稼働以来3,000件以上のクリティカル/高脆弱性の修正に貢献。Anthropic の Mythos Preview が Project Glasswing で防御的セキュリティを先行展開した直後の対抗手だ。",
    "date": "2026-04-16",
    "newsDate": "2026-04-14",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": ["OpenAI", "GPT-5.4", "サイバーセキュリティ", "モデルリリース", "Anthropic"],
    "coverImage": {
      "src": "logos/openai.svg",
      "alt": "GPT-5.4-Cyber"
    }
  },
  {
    "id": "anthropic-claude-code-desktop-redesign-routines-2026",
    "type": "news",
    "category": "editor",
    "title": "Claude Code デスクトップが全面刷新 — 並列セッション・統合ターミナル・ドラッグ&ドロップレイアウト、新機能「Routines」でクラウド自動実行も",
    "excerpt": "Anthropic が4月14日、Claude Code デスクトップアプリ（Mac/Windows）の全面リデザインと新機能「Routines」のリサーチプレビューを同時発表した。複数セッションをサイドバーで管理し1ウインドウ内で並列実行、統合ターミナル・アプリ内ファイルエディタ・高速 diff ビューア・HTML/PDF プレビューを搭載。Routines はプロンプト・リポジトリ・コネクターを1つのパッケージにまとめ、スケジュール・API・GitHub イベントで自動実行する。Pro 5回/日、Max 15回/日、Team/Enterprise 25回/日。",
    "date": "2026-04-16",
    "newsDate": "2026-04-14",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": ["Anthropic", "Claude Code", "IDE", "Routines", "Computer Use"],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Claude Code Desktop Redesign"
    }
  },
  {
    "id": "google-gemini-personal-intelligence-global-2026",
    "type": "news",
    "category": "product",
    "title": "Google Gemini の Personal Intelligence が EU 以外の全世界に展開 — Gmail・Photos・Drive 等と連携し、プロンプト不要のパーソナライズを実現",
    "excerpt": "Google が4月14日、Gemini アプリの「Personal Intelligence」機能をEU・スイス・英国を除く全世界に展開開始した。Gmail、Calendar、Drive、Photos、YouTube、Maps などの Google アプリと連携し、ユーザーの個人データを参照して追加のプロンプトなしにパーソナライズされた回答を生成する。オプトイン方式でアプリごとのアクセス制御が可能。まず AI Plus/Pro/Ultra 有料プランに提供され、無料ユーザーへは数週間以内に拡大予定。",
    "date": "2026-04-16",
    "newsDate": "2026-04-14",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": ["Google", "Gemini", "パーソナライズ", "プライバシー", "グローバル展開"],
    "coverImage": {
      "src": "logos/google.svg",
      "alt": "Gemini Personal Intelligence"
    }
  },
  {
    "id": "claude-screen-viewing-4-methods-comparison-2026",
    "type": "feature",
    "category": "editor",
    "title": "【実用ガイド】Claude に「画面を見てもらう」4つの方法 — Computer Use / Claude in Chrome / DevTools MCP / Playwright MCP の使い分け",
    "excerpt": "Claude Desktop の Computer Use、ブラウザ拡張の Claude in Chrome、Google 公式の Chrome DevTools MCP、Microsoft の Playwright MCP——Claude に画面やブラウザを見せる方法は4つに増えたが、それぞれ用途・速度・対応範囲が異なる。デスクトップアプリ操作なら Computer Use、開発中のUI確認なら Claude in Chrome、デバッグなら DevTools MCP、テスト自動化なら Playwright MCP。本記事では各方法の特性と使い分けを整理する。",
    "date": "2026-04-16",
    "newsDate": "2026-04-14",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": ["Anthropic", "Claude", "Computer Use", "MCP", "開発ツール"],
    "coverImage": {
      "src": "articles/cover-cli-tools.svg",
      "alt": "Claude Screen Viewing Methods"
    }
  },
  {
    "id": "overview-2026-week-mar30",
    "type": "feature",
    "category": "special",
    "title": "【週刊まとめ】AI開発ツール — 2026年3月30日〜4月5日",
    "excerpt": "OpenAI が $1,220億を調達し評価額 $8,520億に。axios がサプライチェーン攻撃を受け RAT 入り偽パッケージが npm に流出。Cursor 3 がエージェント専用ワークスペースを搭載。Claude Code のソースコード51万行が npm ソースマップ経由で流出。Supabase が $500M 調達で評価額$100億到達。Claude Computer Use が Windows に対応。Gemma 4 が Apache 2.0 で完全オープン化。",
    "date": "2026-04-06",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": ["週刊まとめ", "2026年4月", "OpenAI", "Cursor", "セキュリティ", "Claude"],
    "coverImage": {
      "src": "articles/cover-model-api.svg",
      "alt": "週刊まとめ 3/30〜4/5"
    },
    "heroScope": "week",
    "weekRoundupPeriod": {
      "start": "2026-03-30",
      "end": "2026-04-05"
    }
  },
  {
    "id": "overview-2026-week-apr06",
    "type": "feature",
    "category": "special",
    "title": "【週刊まとめ】AI開発ツール — 2026年4月6日〜12日",
    "excerpt": "Anthropic が売上で OpenAI を逆転し年換算 $300億に。Claude Mythos Preview が「強すぎて公開しない」初の制限公開モデルとして発表、Project Glasswing で数千のゼロデイを発見。Meta が初のクローズドモデル Muse Spark を投入。GitHub Copilot が Autopilot モードをプレビュー。OpenAI が ChatGPT 広告で $1,000億を目指す。Anthropic-CoreWeave $68億クラウド契約。",
    "date": "2026-04-13",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": ["週刊まとめ", "2026年4月", "Anthropic", "Meta", "OpenAI", "GitHub Copilot"],
    "coverImage": {
      "src": "articles/cover-model-api.svg",
      "alt": "週刊まとめ 4/6〜4/12"
    },
    "heroScope": "week",
    "weekRoundupPeriod": {
      "start": "2026-04-06",
      "end": "2026-04-12"
    }
  },
  {
    "id": "overview-2026-week-apr13",
    "type": "feature",
    "category": "special",
    "title": "【週刊まとめ】AI開発ツール — 2026年4月13日〜19日",
    "excerpt": "Anthropic が Opus 4.7 GA・Claude Code デスクトップ刷新・Claude Design 投入と3連発で開発者体験を強化。Stanford AI Index 2026 は中国の急追を裏付け、Apple は AI 責任者 Giannandrea が退任。OpenAI も GPT-5.4-Cyber でセキュリティ領域に踏み込んだ。",
    "date": "2026-04-20",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": ["週刊まとめ", "2026年4月", "Anthropic", "Opus 4.7", "Claude Design", "Apple"],
    "coverImage": {
      "src": "articles/cover-model-api.svg",
      "alt": "週刊まとめ 4/13〜4/19"
    },
    "heroScope": "week",
    "weekRoundupPeriod": {
      "start": "2026-04-13",
      "end": "2026-04-19"
    }
  },
  {
    "id": "overview-2026-week-apr20",
    "type": "feature",
    "category": "special",
    "title": "【週刊まとめ】AI開発ツール — 2026年4月20日〜26日",
    "excerpt": "Amazon が Anthropic に最大$25Bを追加投資し評価額$380Bに。OpenAI は GPT-5.5 を6週間ぶりに投入し「半額のSOTA」を実現。DeepSeek V4 が1.6T MoEと1Mコンテキストでオープン公開。Hugging Face は ml-intern、OpenAI は Workspace Agents を投入、エージェント新製品ラッシュ。",
    "date": "2026-04-27",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": ["週刊まとめ", "2026年4月", "OpenAI", "Anthropic", "DeepSeek", "GPT-5.5"],
    "coverImage": {
      "src": "articles/cover-model-api.svg",
      "alt": "週刊まとめ 4/20〜4/26"
    },
    "heroScope": "week",
    "weekRoundupPeriod": {
      "start": "2026-04-20",
      "end": "2026-04-26"
    }
  },
  {
    "id": "overview-2026-week-apr27",
    "type": "feature",
    "category": "special",
    "title": "【週刊まとめ】AI開発ツール — 2026年4月27日〜5月3日",
    "excerpt": "Big Tech 4社が同日決算で AI CapEx を一斉上方修正、合計$700Bに迫る。Microsoft Agent 365 が GA でエージェント管制塔市場に参入。Academy が Oscar の AI ルールを明文化し「人間の同意」と「人間の著作」を必須要件に。AI の社会実装フェーズへの移行が鮮明な週。",
    "date": "2026-05-04",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": ["週刊まとめ", "2026年4-5月", "Microsoft", "Meta", "決算", "規制"],
    "coverImage": {
      "src": "articles/cover-model-api.svg",
      "alt": "週刊まとめ 4/27〜5/3"
    },
    "heroScope": "week",
    "weekRoundupPeriod": {
      "start": "2026-04-27",
      "end": "2026-05-03"
    }
  },
  {
    "id": "overview-2026-week-may04",
    "type": "feature",
    "category": "special",
    "title": "【週刊まとめ】AI開発ツール — 2026年5月4日〜10日",
    "excerpt": "OpenAI が GPT-5.5 Instant を ChatGPT デフォルトに昇格、ハルシネーション52.5%減。Anthropic は SpaceX Colossus 1 を全量借り上げ、220,000 GPU・300+MW を確保し Claude Code レート上限を2倍に。OpenAI は5/7に GPT-5.5-Cyber「Trusted Access」・ChatGPT「Trusted Contact」・新音声 API の3つを同日発表。",
    "date": "2026-05-11",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": ["週刊まとめ", "2026年5月", "OpenAI", "Anthropic", "GPT-5.5", "音声API"],
    "coverImage": {
      "src": "articles/cover-model-api.svg",
      "alt": "週刊まとめ 5/4〜5/10"
    },
    "heroScope": "week",
    "weekRoundupPeriod": {
      "start": "2026-05-04",
      "end": "2026-05-10"
    }
  },
  {
    "id": "overview-2026-week-may11",
    "type": "feature",
    "category": "special",
    "title": "【週刊まとめ】AI開発ツール — 2026年5月11日〜17日",
    "excerpt": "Anthropic 週間。Claude for Legal・AWS GA・agent view・$900B 評価額の調達交渉・Stainless 買収と5発進し、評価額と業務シェアで OpenAI を逆転。Cursor は Microsoft Teams 統合でエンタープライズ流通強化、Google は Googlebook で AI ネイティブ PC を提示。会議系特集2本（アバター・翻訳）も同時公開。",
    "date": "2026-05-18",
    "author": "AI News 編集部",
    "readTime": "8分",
    "tags": ["週刊まとめ", "2026年5月", "Anthropic", "Cursor", "Google", "会議AI"],
    "coverImage": {
      "src": "articles/cover-model-api.svg",
      "alt": "週刊まとめ 5/11〜5/17"
    },
    "heroScope": "week",
    "weekRoundupPeriod": {
      "start": "2026-05-11",
      "end": "2026-05-17"
    }
  },
  {
    "id": "overview-2026-week-may18",
    "type": "feature",
    "category": "special",
    "title": "【週刊まとめ】AI開発ツール — 2026年5月18日〜24日",
    "excerpt": "Google I/O 2026 が開幕、Gemini 3.5 Flash GA とエージェント基盤 Antigravity・Gemini Spark を投入、Android XR 眼鏡や Search Live も。中国陣営は Qwen 3.7 Max（Opus 4.6 一部凌駕）・Kimi K2.6（OSS で GPT-5.4 超え）・Ernie 5.1 を集中投入、米中ギャップを更に縮めた。",
    "date": "2026-05-25",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": ["週刊まとめ", "2026年5月", "Google", "I/O 2026", "中国モデル", "Qwen"],
    "coverImage": {
      "src": "articles/cover-model-api.svg",
      "alt": "週刊まとめ 5/18〜5/24"
    },
    "heroScope": "week",
    "weekRoundupPeriod": {
      "start": "2026-05-18",
      "end": "2026-05-24"
    }
  },
  {
    "id": "overview-2026-week-may25",
    "type": "feature",
    "category": "special",
    "title": "【週刊まとめ】AI開発ツール — 2026年5月25日〜31日",
    "excerpt": "Anthropic が Claude Opus 4.8 をリリース、SWE-bench Verified 88.6% / Pro 69.2%、USAMO 96.7%、Dynamic Workflows で最大1,000並列、Fast Mode は3倍値下げ。Series H $65B / $965B 評価額確定、ARR $47B 到達、Milan・Seoul オフィス開設も。Microsoft は Build 2026 で Project Polaris を披露予告。",
    "date": "2026-06-01",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": ["週刊まとめ", "2026年5月", "Anthropic", "Opus 4.8", "Series H", "Microsoft"],
    "coverImage": {
      "src": "articles/cover-model-api.svg",
      "alt": "週刊まとめ 5/25〜5/31"
    },
    "heroScope": "week",
    "weekRoundupPeriod": {
      "start": "2026-05-25",
      "end": "2026-05-31"
    }
  },
  {
    "id": "xai-grok-june-2026-voice-imagine-connectors-2026",
    "type": "news",
    "category": "model",
    "title": "xAI が Grok を6月初旬に集中更新 — Grok Voice 公開・Imagine 1.5 Preview・Connectors（SharePoint/GitHub 等）+ V9-Medium 1.5T 学習完了",
    "excerpt": "xAI が6月4日に**Grok Voice**（音声会話）と**Grok Imagine 1.5 Preview**を API で公開。6月5日には**Connectors** で SharePoint・OneDrive・Outlook・Google Workspace・Notion・GitHub・Linear と独自 MCP を統合できるようにし、Elon Musk は**V9-Medium**（1.5兆パラメータ・現行 v8-small の3倍）が学習完了したことと worktrees 対応を投稿で報告した。",
    "date": "2026-06-06",
    "newsDate": "2026-06-05",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "xAI",
      "Grok",
      "モデル",
      "音声AI",
      "MCP"
    ],
    "coverImage": {
      "src": "articles/cover-model-api.svg",
      "alt": "xAI Grok 6月集中アップデート"
    }
  },
  {
    "id": "openai-chatgpt-dreaming-v3-memory-architecture-2026",
    "type": "news",
    "category": "product",
    "title": "OpenAI が ChatGPT メモリを「Dreaming V3」アーキテクチャに刷新 — Plus/Pro 米国先行ロールアウト、Free/Go へも数週間以内に拡大",
    "excerpt": "OpenAI が6月4日、新しいメモリアーキテクチャ「**Dreaming V3**」のロールアウトを ChatGPT で開始。Plus / Pro プランの米国ユーザーから先行展開し、Free / Go プランへも**数週間以内**に拡大予定。長期記憶の整合性と参照精度を改善し、過去会話からの自然な引用と要約を可能にする。",
    "date": "2026-06-06",
    "newsDate": "2026-06-04",
    "author": "AI News 編集部",
    "readTime": "3分",
    "tags": [
      "OpenAI",
      "ChatGPT",
      "メモリ",
      "アーキテクチャ"
    ],
    "coverImage": {
      "src": "logos/openai.svg",
      "alt": "OpenAI ChatGPT Dreaming V3 メモリ"
    }
  },
  {
    "id": "openai-gpt-rosalind-life-sciences-update-2026",
    "type": "news",
    "category": "model",
    "title": "OpenAI が GPT-Rosalind を更新 — 創薬・ゲノミクス向けに agentic coding 強化、Evidence Retrieval / Bioinformatics プラグイン追加、Trusted Access 拡大",
    "excerpt": "OpenAI が6月4日、生命科学研究向け専用モデル **GPT-Rosalind** を更新。**agentic coding**（自律的なコード生成・実行）が強化され、**創薬と遺伝学分野**での性能が向上。Evidence Retrieval（証拠検索）と Bioinformatics（バイオインフォマティクス・ワークフロー自動化）のプラグインを追加し、対象組織向けの Trusted Access リサーチプレビューを世界規模で拡大した。",
    "date": "2026-06-06",
    "newsDate": "2026-06-04",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "OpenAI",
      "GPT-Rosalind",
      "創薬",
      "ゲノミクス",
      "生命科学"
    ],
    "coverImage": {
      "src": "logos/openai.svg",
      "alt": "OpenAI GPT-Rosalind 更新"
    }
  },
  {
    "id": "anthropic-claude-fable-5-mythos-5-ga-2026",
    "type": "news",
    "category": "model",
    "title": "Anthropic が Claude Fable 5 と Mythos 5 をリリース — Mythos クラスの一般公開モデル、SWE-bench 95%、$10/$50 で前 Mythos Preview の半額以下",
    "excerpt": "Anthropic が6月9日、**Claude Fable 5** を一般公開、同時に **Claude Mythos 5** を Project Glasswing 経由で限定公開した。Fable 5 は Mythos クラスのモデルを一般利用向けに安全化した位置付けで、SWE-bench Verified **95%** を達成、Anthropic 史上最強の一般公開モデルとなる。料金は **$10/$50 per 1M tokens** で、前世代の Mythos Preview の半額以下。Pro/Max/Team/Enterprise プランは6月22日まで追加料金なしで利用可能。",
    "date": "2026-06-10",
    "newsDate": "2026-06-09",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": [
      "Anthropic",
      "Claude",
      "Fable 5",
      "Mythos 5",
      "モデル"
    ],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Claude Fable 5 / Mythos 5 リリース"
    },
    "pinned": true
  },
  {
    "id": "apple-wwdc-2026-siri-ai-keynote-2026",
    "type": "news",
    "category": "product",
    "title": "Apple WWDC 2026 で「Siri AI」発表 — 会話的応答・パーソナライズ音声・新 Siri アプリ、iOS 27 / macOS Golden Gate 同時発表",
    "excerpt": "Apple が6月8日の WWDC 2026 基調講演で、Siri を「**Siri AI**」へ全面リブランドした。会話的なやり取りで深い計画立案・ブレインスト・文書フィードバックが可能になり、**音声はパーソナライズ可能**でテンポと表現を調整できる。iPad/Mac 向けの**新 Siri アプリ**を投入、過去会話・結果の振り返りに対応。iOS 27 / macOS Golden Gate も同日発表、開発者ベータが即日公開された。",
    "date": "2026-06-10",
    "newsDate": "2026-06-08",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "Apple",
      "WWDC",
      "Siri",
      "iOS 27",
      "macOS"
    ],
    "coverImage": {
      "src": "logos/openai.svg",
      "alt": "Apple WWDC 2026 Siri AI"
    }
  },
  {
    "id": "openai-confidential-s1-ipo-filing-852b-valuation-2026",
    "type": "news",
    "category": "product",
    "title": "OpenAI が機密 S-1 を SEC に提出 — $852B 評価額・9月上場目標、Anthropic と並ぶ AI IPO パイプラインへ",
    "excerpt": "OpenAI が6月8日、米国 SEC に**機密版 S-1**（IPO 登録書）を提出したと自社発表で先回り公表した。評価額は3月の調達ラウンドと同水準の **$852B**、上場目標は早ければ**2026年9月**。Anthropic も6月1日に**$965B 評価額**で機密 S-1 を提出済で、SpaceX・Anthropic・OpenAI を合わせた AI IPO パイプラインは合計 **約$3.6兆** に達した。",
    "date": "2026-06-10",
    "newsDate": "2026-06-08",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "OpenAI",
      "IPO",
      "S-1",
      "上場",
      "資金調達"
    ],
    "coverImage": {
      "src": "logos/openai.svg",
      "alt": "OpenAI 機密 S-1 提出"
    }
  },
  {
    "id": "anthropic-code-with-claude-tokyo-june10-2026",
    "type": "news",
    "category": "special",
    "title": "Anthropic が「Code with Claude Tokyo」を開催 — 6月10日に Angela Jiang らがキーノート、英日同時通訳・ライブ配信つき、11日は独立開発者向け Extended デー",
    "excerpt": "Anthropic 公式の開発者カンファレンス「**Code with Claude**」が6月10日、東京で開催された。SF（5/6）・ロンドン（5/19）に続く3都市目で、日本市場での Claude エコシステム拡大の起点に位置付けられる。キーノートには **Angela Jiang・Cat Wu・Dianne Penn・Katelyn Lesse** が登壇、英語中心セッションに**日本語同時通訳**つき。**ライブ配信**で日本国外からも参加可能。6月11日は独立開発者・スタートアップ向け Extended デー。",
    "date": "2026-06-10",
    "newsDate": "2026-06-10",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "Anthropic",
      "Code with Claude",
      "Tokyo",
      "カンファレンス",
      "日本"
    ],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Code with Claude Tokyo 2026"
    }
  },
  {
    "id": "feature-nvidia-skillspector-agent-skill-security-2026",
    "type": "feature",
    "category": "special",
    "title": "【特集】NVIDIA SkillSpector — AIエージェントスキル用セキュリティスキャナ、16カテゴリ・64パターン検出、CLAUDE.md ポリシーを「文章」から「自動チェック」へ",
    "excerpt": "NVIDIA が5月22日、AIエージェント・スキル向けセキュリティスキャナ「**SkillSpector**」を Apache 2.0 で OSS 公開した。**16カテゴリ・64パターン**を検出（プロンプトインジェクション・データ漏洩・特権昇格・MCP ツールポイズニング等）。NVIDIA 自身の調査では**スキルの 26.1% に脆弱性・5.2% に悪意の兆候**があり、AI News の CLAUDE.md「外部スキル実行禁止」ポリシーを**運用レベルで自動化**できる初のツールとして整理する。",
    "date": "2026-06-10",
    "newsDate": "2026-05-22",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": [
      "NVIDIA",
      "SkillSpector",
      "AIエージェント",
      "セキュリティ",
      "MCP",
      "OSS"
    ],
    "coverImage": {
      "src": "logos/nvidia.svg",
      "alt": "NVIDIA SkillSpector 特集"
    }
  },
  {
    "id": "spacex-cursor-60b-acquisition-anysphere-2026",
    "type": "news",
    "category": "product",
    "title": "SpaceX が Cursor（Anysphere）を $60B で買収 — IPO 翌週、史上最大の VC バック買収、Q3 2026 close 予定",
    "excerpt": "SpaceX が6月16日、Cursor 開発元の **Anysphere** を **$60B のオールストック取引**で買収するオプション行使を発表した。**史上最大の VC バック・スタートアップ買収**。SpaceX は6月12日に IPO したばかりで、5月の xAI 合併（$250B 評価額）に続く AI 領域の大型 M&A。Cursor は ARR $4B、Fortune 500 の約2/3が利用、日に約1.5億行のコードを生成する規模。Q3 2026 のクロージング予定で、Cursor の開発者ワークフローデータは Grok 訓練に投入される。",
    "date": "2026-06-24",
    "newsDate": "2026-06-16",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": [
      "SpaceX",
      "Cursor",
      "Anysphere",
      "買収",
      "xAI"
    ],
    "coverImage": {
      "src": "logos/cursor.svg",
      "alt": "SpaceX が Cursor を $60B で買収"
    },
    "pinned": true
  },
  {
    "id": "feature-ai-coding-market-realignment-spacex-cursor-2026",
    "type": "feature",
    "category": "special",
    "title": "【分析】SpaceX-Cursor $60B 買収で AI コーディング市場が再編 — Cursor は xAI 配下、Cognition (Devin・Windsurf) 独立、GitHub Copilot / Claude Code が直接競合に",
    "excerpt": "SpaceX による Cursor $60B 買収は、AI コーディングツール市場の**勢力図を3極構造**に塗り替える。**xAI 配下に Cursor**（Composer / Sonic + Grok 系）、**Microsoft 配下に GitHub Copilot**（MAI-Code-1-Flash + 各種フロンティアモデル）、**独立系で Cognition**（Devin / Devin Desktop = 旧 Windsurf）と Anthropic（Claude Code）が並ぶ。Cursor は Grok 訓練データを供給する見返りに xAI Colossus の計算リソースを得る垂直統合モデルへ、開発者は「モデル選択がそのままインフラ選択になる」時代に入った。",
    "date": "2026-06-24",
    "newsDate": "2026-06-17",
    "author": "AI News 編集部",
    "readTime": "8分",
    "tags": [
      "AI コーディング",
      "市場分析",
      "SpaceX",
      "Cursor",
      "Cognition",
      "GitHub Copilot"
    ],
    "coverImage": {
      "src": "articles/cover-cli-tools.svg",
      "alt": "AI コーディング市場再編 特集"
    }
  },
  {
    "id": "noam-shazeer-google-to-openai-architecture-research-2026",
    "type": "news",
    "category": "product",
    "title": "Noam Shazeer が Google → OpenAI 移籍 — Transformer 共著者が Architecture Research Lead 就任、Alphabet 株は 7% 下落",
    "excerpt": "Google DeepMind の Gemini 共リードを務めていた **Noam Shazeer** が6月18日、**OpenAI に Architecture Research Lead として移籍**することを X で発表した。Transformer 論文の共著者で、MoE・効率的なデコーディング等の基礎研究を牽引してきた人物。Alphabet 株は同日 7% 下落、Google の AI 人材流出が顕在化した。Google は2024年8月に Character.AI 経由で Shazeer を $2.7B で迎え入れたばかりで、2年弱での再離脱となる。",
    "date": "2026-06-24",
    "newsDate": "2026-06-18",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "OpenAI",
      "Google",
      "DeepMind",
      "人材",
      "Transformer"
    ],
    "coverImage": {
      "src": "logos/openai.svg",
      "alt": "Noam Shazeer OpenAI 移籍"
    }
  },
  {
    "id": "anthropic-workload-identity-federation-ga-service-accounts-2026",
    "type": "news",
    "category": "product",
    "title": "Anthropic が Workload Identity Federation を一般提供 — 静的 API キー不要に、AWS/GCP/Azure/GitHub Actions/OIDC で直接認証、Service Accounts も導入",
    "excerpt": "Anthropic が6月17日、**Workload Identity Federation（WIF）** を Claude Platform で一般提供開始した。**静的 API キーが不要**になり、ワークロードは既に持っている ID（AWS IAM ロール、GCP/Kubernetes サービスアカウント、Azure マネージド ID、GitHub Actions トークン、Okta 等 OIDC プロバイダー）で認証できる。あわせて **Service Accounts** が組織レベルで導入され、ワークロードごとに ID・ロール・監査証跡を持てるようになった。API キーと WIF は併存、段階的移行が可能。",
    "date": "2026-06-24",
    "newsDate": "2026-06-17",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "Anthropic",
      "Claude Platform",
      "セキュリティ",
      "WIF",
      "認証"
    ],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Anthropic Workload Identity Federation"
    }
  },
  {
    "id": "xai-grok-v9-medium-consumer-release-cursor-data-2026",
    "type": "news",
    "category": "model",
    "title": "xAI Grok V9-Medium が X と SuperGrok で消費者向け公開 — 1.5T パラメータ、Cursor 開発者ワークフローデータで訓練、API はまだ開放されず",
    "excerpt": "xAI の次世代モデル **Grok V9-Medium**（1.5兆パラメータ、現行 v8-small の3倍）が6月16日、**X と SuperGrok** で消費者向けに利用可能になった。SpaceX が同日 Cursor を $60B で買収（[Cursor 買収](?a=spacex-cursor-60b-acquisition-anysphere-2026)）した経緯と直結しており、**Grok V9 は Cursor の実開発者ワークフローデータで訓練**されている。ただし **API は未開放**（6/19 時点で xAI ドキュメントに未掲載）、コーディング領域での Claude 競合を狙う。",
    "date": "2026-06-24",
    "newsDate": "2026-06-16",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "xAI",
      "Grok",
      "Grok V9",
      "モデル",
      "Cursor"
    ],
    "coverImage": {
      "src": "articles/cover-model-api.svg",
      "alt": "Grok V9-Medium 消費者向け公開"
    }
  },
  {
    "id": "xai-grok-imagine-video-1-5-86percent-below-sora-2026",
    "type": "news",
    "category": "media",
    "title": "xAI Grok Imagine Video 1.5 が公開 — AI 動画 leaderboard で1位、Sora 比 86% 安、xAI の動画生成攻勢",
    "excerpt": "xAI が6月18日、動画生成モデル **Grok Imagine Video 1.5** を一般公開。AI 動画ベンチマーク **leaderboard で1位**、価格は **Sora 比 86% 安**と発表された。Grok Imagine 1.5 Preview（API、6/4 リリース）の後継で、動画生成市場で OpenAI Sora・Google Veo に対する xAI の正面攻勢が鮮明になった。Cursor 買収（6/16）・Grok V9 消費者公開（6/16）と並ぶ「6月中旬 xAI ラッシュ」の最終弾。",
    "date": "2026-06-24",
    "newsDate": "2026-06-18",
    "author": "AI News 編集部",
    "readTime": "3分",
    "tags": [
      "xAI",
      "Grok",
      "動画生成",
      "Sora",
      "Veo"
    ],
    "coverImage": {
      "src": "articles/cover-media-video.svg",
      "alt": "Grok Imagine Video 1.5"
    }
  },
  {
    "id": "google-gemini-3-5-pro-ga-delay-deep-think-2026",
    "type": "news",
    "category": "model",
    "title": "Google Gemini 3.5 Pro が GA 延期続報 — Pichai が「もう1ヶ月待って」、Vertex AI 限定プレビューのまま、Deep Think + 2M ctx の予定",
    "excerpt": "Google **Gemini 3.5 Pro** は5月19日の Google I/O で発表されたが、6月 GA 予定が**6月23日時点でも限定プレビューのまま**と判明。CEO Sundar Pichai はカンファレンスで「もう1ヶ月待って」と発言、現在は Vertex AI のエンタープライズ顧客限定。仕様は **2M トークンコンテキスト**、**Deep Think reasoning モード**、フロンティア・マルチモーダル理解。予測市場の6月末リリース確率は **50-55%** で、不確実性が残る。",
    "date": "2026-06-24",
    "newsDate": "2026-06-23",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "Google",
      "Gemini",
      "Gemini 3.5 Pro",
      "Deep Think",
      "Vertex AI"
    ],
    "coverImage": {
      "src": "logos/gemini.svg",
      "alt": "Gemini 3.5 Pro GA 延期"
    }
  },
  {
    "id": "overview-2026-week-jun01",
    "type": "feature",
    "category": "special",
    "title": "【週刊まとめ】AI開発ツール — 2026年6月1日〜7日",
    "excerpt": "Microsoft Build 2026 ラッシュ（MAI 7モデル / Solara / Majorana 2 / Windows Agent Framework / Scout）と、Anthropic Glasswing 150組織拡大、AI IPO シーズン特集（Cerebras 5/14 IPO 初日 +68%）。週後半には OpenAI ChatGPT メモリ Dreaming V3 刷新と GPT-Rosalind 生命科学アップデート、xAI が Grok Voice + Imagine 1.5 + Connectors + V9-Medium 学習完了を集中投入。",
    "date": "2026-06-08",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": ["週刊まとめ", "2026年6月", "Microsoft", "Anthropic", "OpenAI", "xAI"],
    "coverImage": {
      "src": "articles/cover-model-api.svg",
      "alt": "週刊まとめ 6/1〜6/7"
    },
    "heroScope": "week",
    "weekRoundupPeriod": {
      "start": "2026-06-01",
      "end": "2026-06-07"
    }
  },
  {
    "id": "overview-2026-week-jun08",
    "type": "feature",
    "category": "special",
    "title": "【週刊まとめ】AI開発ツール — 2026年6月8日〜14日",
    "excerpt": "Apple WWDC 2026 で Siri AI 発表（会話的応答・パーソナライズ音声・iOS 27）、OpenAI が機密 S-1 提出（$852B 評価額・9月上場目標）、Anthropic は Claude Fable 5 と Mythos 5 を一般公開（SWE-bench 95%、$10/$50）。10日は Code with Claude Tokyo 開催で日本市場の本格立ち上げに突入。",
    "date": "2026-06-15",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": ["週刊まとめ", "2026年6月", "Apple", "WWDC", "Anthropic", "Fable 5", "OpenAI"],
    "coverImage": {
      "src": "articles/cover-model-api.svg",
      "alt": "週刊まとめ 6/8〜6/14"
    },
    "heroScope": "week",
    "weekRoundupPeriod": {
      "start": "2026-06-08",
      "end": "2026-06-14"
    }
  },
  {
    "id": "overview-2026-week-jun15",
    "type": "feature",
    "category": "special",
    "title": "【週刊まとめ】AI開発ツール — 2026年6月15日〜21日",
    "excerpt": "SpaceX が Cursor を $60B で買収（史上最大の VC バック・スタートアップ買収）、同日 Grok V9-Medium が消費者公開。Anthropic は Workload Identity Federation を GA、静的 API キーが不要に。Noam Shazeer が Google → OpenAI 移籍で Alphabet 株 7% 下落。Grok Imagine Video 1.5 が AI 動画 leaderboard 1位（Sora 比 86% 安）。",
    "date": "2026-06-22",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": ["週刊まとめ", "2026年6月", "SpaceX", "Cursor", "xAI", "Anthropic", "Google"],
    "coverImage": {
      "src": "articles/cover-model-api.svg",
      "alt": "週刊まとめ 6/15〜6/21"
    },
    "heroScope": "week",
    "pinned": true,
    "weekRoundupPeriod": {
      "start": "2026-06-15",
      "end": "2026-06-21"
    }
  },
  {
    "id": "sakana-ai-fugu-multi-agent-orchestration-2026",
    "type": "news",
    "category": "model",
    "title": "Sakana AI が「Sakana Fugu」を公開 — マルチエージェント・オーケストレーションで Fable 5 越えのコーディング性能、ただし1リクエストでトークン消費 4-6倍",
    "excerpt": "Sakana AI（東京）が6月22日、**マルチエージェント・オーケストレーション**を OpenAI 互換 API で提供する **Sakana Fugu** を公開。7B の Conductor モデルが GPT-5.5・Claude Opus・Gemini 3.1 Pro を動的に振り分け、**LiveCodeBench で 93.2（Fable 5 の 89.8 を超え）**を達成。ただし1リクエストあたり**トークン消費が単一モデルの 4-6 倍**になる構造で、表示価格（$5/$30 per 1M）は安く見えるが実コストは同等以上になる可能性あり。",
    "date": "2026-06-24",
    "newsDate": "2026-06-22",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": [
      "Sakana AI",
      "Sakana Fugu",
      "オーケストレーション",
      "マルチエージェント",
      "日本",
      "モデル"
    ],
    "coverImage": {
      "src": "articles/cover-model-api.svg",
      "alt": "Sakana Fugu リリース"
    }
  },
  {
    "id": "openai-gpt-5-6-sol-terra-luna-preview-2026",
    "type": "news",
    "category": "model",
    "title": "OpenAI が GPT-5.6 を限定プレビュー公開 — Sol/Terra/Luna の3バリアント、TerminalBench 2.1 で Sol Ultra 91.91% が Mythos 5・Fable 5 超え",
    "excerpt": "OpenAI が6月25日、次世代フラッグシップ **GPT-5.6** を3バリアント（**Sol/Terra/Luna**）で限定プレビュー公開。**TerminalBench 2.1** で **Sol Ultra 91.91%** を達成し、Claude Mythos 5（88.0%）と Fable 5（84.3%）を上回った。料金は Sol $5/$30、Terra $2.50/$15、Luna **$1/$6**（フロンティアモデル最安）。米国政府との事前共有を経て約20組織限定で配布、一般公開は数週間後の予定。",
    "date": "2026-06-27",
    "newsDate": "2026-06-25",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": [
      "OpenAI",
      "GPT-5.6",
      "モデル",
      "TerminalBench",
      "Sol"
    ],
    "coverImage": {
      "src": "logos/openai.svg",
      "alt": "OpenAI GPT-5.6 Sol/Terra/Luna 限定プレビュー"
    },
    "pinned": true
  },
  {
    "id": "john-jumper-google-deepmind-to-anthropic-nobel-2026",
    "type": "news",
    "category": "product",
    "title": "John Jumper（2024年ノーベル化学賞）が Google DeepMind → Anthropic 移籍 — Shazeer に続く Google AI 人材流出の第2波",
    "excerpt": "**John Jumper** が約9年勤めた **Google DeepMind** を離れ **Anthropic** に移籍したと発表。Jumper は **AlphaFold2 開発者**として2024年に Demis Hassabis と共にノーベル化学賞を共同受賞した人物。1週間前の Noam Shazeer の OpenAI 移籍に続く Google AI トップ人材の流出**第2波**で、Alphabet 株は週後半に追加で下落、Gemini 3.5 Pro GA 延期続報と相まって Google AI の組織モメンタムへの市場の疑念が一段と強まる結果に。",
    "date": "2026-06-27",
    "newsDate": "2026-06-26",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "Anthropic",
      "Google",
      "DeepMind",
      "人材",
      "AlphaFold"
    ],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "John Jumper Anthropic 移籍"
    }
  },
  {
    "id": "openai-broadcom-jalapeno-llm-inference-chip-2026",
    "type": "news",
    "category": "product",
    "title": "OpenAI が Broadcom と「Jalapeño」を発表 — OpenAI 自社設計の LLM 最適化推論アクセラレータ、2026年末初期展開で NVIDIA 依存を低減",
    "excerpt": "OpenAI と Broadcom が6月25日、**LLM 最適化推論チップ「Jalapeño」**を共同発表。**OpenAI が設計**したアクセラレータを Broadcom が**シリコン実装**する分業体制で、**2026年末**に初期コンピュート基盤として導入予定。OpenAI の **NVIDIA 依存度低減**戦略の中核で、Anthropic-AWS Trainium、Google TPU、Microsoft MAIA に続く「フロンティアモデル各社の自社チップ路線」が出揃った形となる。",
    "date": "2026-06-27",
    "newsDate": "2026-06-25",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "OpenAI",
      "Broadcom",
      "Jalapeño",
      "推論チップ",
      "AI インフラ"
    ],
    "coverImage": {
      "src": "logos/openai.svg",
      "alt": "OpenAI Broadcom Jalapeño 推論チップ"
    }
  },
  {
    "id": "anthropic-accuses-alibaba-claude-distillation-fraud-2026",
    "type": "news",
    "category": "regulation",
    "title": "Anthropic が Alibaba を不正利用で告発 — 25,000の偽アカウントで Claude に 2,880万件のリクエスト、SWE・エージェント能力を蒸留した疑い",
    "excerpt": "Anthropic が6月24日、**Alibaba 関係オペレーター**が**約25,000の偽アカウント**を使って Claude に **2,880万件**のリクエストを行い、ソフトウェアエンジニアリングとエージェント推論能力を**不正に蒸留**した疑いがあると公表。期間は4月22日〜6月5日、地理的アクセス制限を回避するためにプロキシネットワークと難読化を使用。6月10日に米国上院銀行委員会へ書簡を提出済み、中国企業による米国 AI ラボへの「ピギーバック」攻撃として過去最大規模。",
    "date": "2026-06-29",
    "newsDate": "2026-06-24",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "Anthropic",
      "Alibaba",
      "Claude",
      "蒸留",
      "米中AI"
    ],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Anthropic Alibaba 不正告発"
    },
    "pinned": true
  },
  {
    "id": "feature-tokenmaxxing-to-efficiency-market-shift-2026",
    "type": "feature",
    "category": "regulation",
    "title": "【分析】「tokenmaxxing」から効率性へ — Lindy が Claude → DeepSeek 100% 移行、Fable 5 値上げで価格感度が市場を動かし始めた",
    "excerpt": "2026年6月、AI モデルの利用パターンが**「tokenmaxxing」（とにかく強力なモデルを大量に使う）から「効率性最優先」**へ転換している。Anthropic Claude Fable 5 が **$10/$50**（Opus 4.8 の2倍）でローンチされた一方、OpenAI GPT-5.6 Luna は **$1/$6** という最安級で投入。AI スタートアップ Lindy の CEO は同社トラフィックを **100% Claude → DeepSeek へ切替**、コストを劇的削減したと公表。トークン単価競争の本格化と、フロンティアモデル独占体制への揺らぎを整理する。",
    "date": "2026-06-29",
    "newsDate": "2026-06-26",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": [
      "市場分析",
      "効率性",
      "DeepSeek",
      "Anthropic",
      "OpenAI",
      "価格戦略"
    ],
    "coverImage": {
      "src": "articles/cover-model-api.svg",
      "alt": "tokenmaxxing から効率性へ 特集"
    }
  },
  {
    "id": "zhipu-zai-glm-5-2-open-source-coding-1m-context-2026",
    "type": "news",
    "category": "model",
    "title": "Z.ai が GLM-5.2 を公開 — 753B MoE / 1M トークン・コンテキスト / MIT ライセンス、SWE-bench Pro で GPT-5.5 超え",
    "excerpt": "中国 **Z.ai**（清華大学発 Zhipu AI の国際ブランド）が6月13日、コーディング特化フラッグシップ **GLM-5.2** を発表。**753B 総パラメータ・40B アクティブ MoE**、**1Mトークン**のコンテキストウィンドウ、新しい High/Max デュアル思考エフォートシステム、長文脈最適化 IndexShare アーキテクチャを搭載。MIT ライセンスで6/20週に Hugging Face で重み公開。SWE-bench Pro で **62.1（GPT-5.5: 58.6）**、FrontierSWE で 74.4 を記録、Opus 4.8（69.2 / 75.1）に肉薄する OSS フラッグシップに躍り出た。",
    "date": "2026-06-29",
    "newsDate": "2026-06-13",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "Z.ai",
      "Zhipu",
      "GLM-5.2",
      "中国モデル",
      "OSS",
      "コーディング"
    ],
    "coverImage": {
      "src": "articles/cover-model-api.svg",
      "alt": "Z.ai GLM-5.2 リリース"
    }
  },
  {
    "id": "nvidia-nemotron-3-5-asr-open-multilingual-stt-2026",
    "type": "news",
    "category": "model",
    "title": "NVIDIA が Nemotron 3.5 ASR を公開 — 600M パラメータの多言語ストリーミング音声認識、40言語対応・既存比17倍スループット",
    "excerpt": "NVIDIA が6月、オープン音声認識モデル **Nemotron 3.5 ASR** を公開。**600M パラメータ**のストリーミング型 STT で、**40言語**に対応、既存ベースライン比 **17倍のスループット**を達成。Voice エージェント向けに設計され、リアルタイム会話の文字起こしを低レイテンシで処理可能。AssemblyAI・Deepgram・OpenAI Whisper・ElevenLabs と並ぶ「音声 AI ベース層」の選択肢に NVIDIA が本格参入、OSS でハードウェアと一体最適化された推論性能を提供する。",
    "date": "2026-06-29",
    "newsDate": "2026-06-25",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": [
      "NVIDIA",
      "Nemotron",
      "音声認識",
      "ASR",
      "OSS",
      "多言語"
    ],
    "coverImage": {
      "src": "logos/nvidia.svg",
      "alt": "NVIDIA Nemotron 3.5 ASR"
    }
  },
  {
    "id": "anthropic-claude-sonnet-5-agentic-cheap-2026",
    "type": "news",
    "category": "model",
    "title": "Anthropic が Claude Sonnet 5 を公開 — SWE-bench Pro 63.2% で Opus 4.8 に迫る、8月末まで $2/$10 の攻めた導入価格でエージェント本格投入",
    "excerpt": "Anthropic が6月30日、**Claude Sonnet 5** を公開。「これまでで最もエージェント的な Sonnet」と位置付け、**SWE-bench Pro で 63.2%**（Sonnet 4.6: 58.1% / Opus 4.8: 69.2%）を記録、**GDPval-AA v2 では Opus 4.8 を上回る**。料金は **8月31日まで $2/$10**、以降 $3/$15 per 1M tokens（Sonnet 4.6 と同じ）。1Mコンテキスト、Adaptive Thinking 常時オン。claude.ai の Free/Pro デフォルト、Claude Code・Cursor・VS Code・GitHub Copilot でも即日利用可能。",
    "date": "2026-06-30",
    "newsDate": "2026-06-30",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": [
      "Anthropic",
      "Claude Sonnet",
      "Sonnet 5",
      "モデル",
      "エージェント"
    ],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Claude Sonnet 5 リリース"
    },
    "pinned": true
  },
  {
    "id": "cursor-ios-app-launch-cloud-agents-remote-2026",
    "type": "news",
    "category": "cli",
    "title": "Cursor が iOS アプリを公開 — Always-on クラウドエージェント + PC 上のエージェントリモート操作、音声入力対応、Composer 2.5 は7/5まで -75%",
    "excerpt": "Anysphere が6月29日、**Cursor 公式 iOS アプリ**を App Store で公開。2軸の機能構成で、**Always-on クラウドエージェント**（バックグラウンド実行、iPhone から監視）と、**PC 上のエージェントのリモート操作**を提供。**音声入力**による指示、diff レビュー・PR マージ・スクリーンショット注釈も iPhone 上で完結。有料プラン向け Public Beta、**Composer 2.5 が7月5日まで -75%** の導入プロモ。SpaceX による Anysphere 買収（6/16）直後のモバイル展開で、「モバイルからエージェントを走らせる」時代の号砲。",
    "date": "2026-06-30",
    "newsDate": "2026-06-29",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "Cursor",
      "Anysphere",
      "iOS",
      "モバイル",
      "エージェント"
    ],
    "coverImage": {
      "src": "logos/cursor.svg",
      "alt": "Cursor iOS アプリ公開"
    },
    "pinned": true
  },
  {
    "id": "openclaw-ios-android-native-app-2026",
    "type": "news",
    "category": "product",
    "title": "OpenClaw が iOS / Android ネイティブアプリを公開 — カメラ・画面・位置・写真・連絡先など iPhone のあらゆるデータに接続、Apple のエージェント AI ガードを OSS で突破",
    "excerpt": "**OpenClaw Foundation** が6月29日、パーソナル AI アシスタント **OpenClaw** の **iOS と Android 向けネイティブアプリ**を公開した。iOS 18+ が要件、無料アプリ。ユーザーは iPhone の**カメラ・画面・位置・写真・連絡先・カレンダー・リマインダー**へエージェントにアクセス権を付与できる。Apple がこれまで拒み続けたエージェント型 AI アプリの初例で、**自己ホスト設計**（データが自社サーバーを経由しない）が審査通過の決め手となった。開発者の Peter Steinberger は今年 OpenAI に参加、コードは Foundation に移管され OpenAI が資金提供・所有権なしという形。",
    "date": "2026-06-30",
    "newsDate": "2026-06-29",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": [
      "OpenClaw",
      "iOS",
      "Android",
      "OSS",
      "エージェント",
      "パーソナルAI"
    ],
    "coverImage": {
      "src": "articles/cover-cli-tools.svg",
      "alt": "OpenClaw iOS / Android アプリ公開"
    }
  },
  {
    "id": "anthropic-claude-science-workbench-research-2026",
    "type": "news",
    "category": "product",
    "title": "Anthropic が Claude Science を公開 — 60+ 科学 DB 連携・SSH/SLURM 対応の研究ワークベンチ、新モデルではなくワークフローで科学者を狙う",
    "excerpt": "Anthropic が6月30日、Claude Sonnet 5 と同時に **Claude Science** をベータ公開。新モデルではなく**研究ワークフロー製品**として位置付けられ、Claude Code の科学研究版と説明される。**60+ 科学データベース**（ゲノミクス・プロテオミクス・構造生物学・単細胞・化学）を統合、SSH でラボワークステーションや HPC ログインノードに接続、SLURM クラスタへ sbatch 経由でジョブ投入、Reviewer エージェントで監査性を確保。macOS / Linux ベータ、Pro/Max/Team/Enterprise で利用可能、アカデミック・非営利ラボ向け割引席あり。**最大50プロジェクト・各 $30,000 クレジット**の助成プログラムも同時開始（応募〜7/15）。",
    "date": "2026-06-30",
    "newsDate": "2026-06-30",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": [
      "Anthropic",
      "Claude Science",
      "科学研究",
      "創薬",
      "ゲノミクス",
      "SLURM"
    ],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Claude Science リリース"
    }
  },
  {
    "id": "anthropic-claude-fable-5-return-safeguards-limits-2026",
    "type": "news",
    "category": "regulation",
    "title": "Claude Fable 5 復活 — トランプ政権が輸出規制解除、Anthropic は新 classifier で再展開、ただし週次50%上限・7/7期限・過剰ブロック懸念など制限多数",
    "excerpt": "Anthropic が7月1日、輸出規制で6/12から停止していた **Claude Fable 5** のグローバルアクセスを復活した。前日6/30 に**トランプ政権 Commerce 省が輸出規制を解除**、Anthropic は 99% ジェイルブレイクをブロックする新 classifier を含む「defense in depth」体制で再展開。ただし利用条件は制限的で、**Pro/Max/Team/一部 Enterprise は週次使用枠の50%まで**、**7月7日までのみ**（以降はクレジット制）、benign なコーディング/セキュリティ要求まで過剰ブロックの懸念、3大クラウド（AWS/GCP/Azure Foundry）は段階的復活。**Fortune が6/10 に報じた「秘密のケーパビリティ制限」批判**とも接続する複雑な経緯。",
    "date": "2026-07-01",
    "newsDate": "2026-07-01",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": [
      "Anthropic",
      "Claude Fable 5",
      "輸出規制",
      "米国政府",
      "セキュリティ"
    ],
    "coverImage": {
      "src": "logos/anthropic.svg",
      "alt": "Claude Fable 5 復活"
    },
    "pinned": true
  },
  {
    "id": "feature-prompting-claude-fable-5-practical-guide-2026",
    "type": "feature",
    "category": "special",
    "title": "【実用ガイド】Claude Fable 5 のプロンプト設計 — Anthropic 公式ドキュメント準拠、Opus 4.8 との違い・8つの推奨パターン・移行チェックリストを日本語で徹底解説",
    "excerpt": "Claude Fable 5 が復活したいま、実務で使いこなすには **Anthropic 公式の推奨プロンプト設計**を理解する必要がある。本ガイドは公式ドキュメント「Prompting Claude Fable 5」を全訳・要約し、**Opus 4.8 との7つの違い**（長時間自律実行・初回正確性・視覚理解・企業ワークフロー・コードレビュー・曖昧さ耐性・並列サブエージェント）、**8つのプロンプト推奨パターン**（Effort レベル選択・強化された指示追従・進捗根拠付け・境界明示・サブエージェント委譲・メモリシステム・早期停止対策・コンテキスト予算不安の解消）、**送信専用ツール `send_to_user` の JSON 実装例**、既存スキルの**移行チェックリスト4項目**まで、実務者が即使える形で整理した。",
    "date": "2026-07-01",
    "newsDate": "2026-07-01",
    "author": "AI News 編集部",
    "readTime": "15分",
    "tags": [
      "Anthropic",
      "Claude Fable 5",
      "プロンプト設計",
      "実用ガイド",
      "エージェント"
    ],
    "coverImage": {
      "src": "articles/cover-cli-tools.svg",
      "alt": "Claude Fable 5 プロンプト設計 実用ガイド"
    }
  }
];
