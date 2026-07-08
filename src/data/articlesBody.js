/**
 * 記事本文データ（重量）
 * ── 自動生成: node scripts/split-articles.mjs ──
 * id → { body, tables, figures, charts, primarySources }
 */
const ARTICLES_BODY = {
  "anthropic-glasswing-expansion-partner-network-services-track-2026": {
    "body": [
      "Anthropic は6月2日と3日に、性質の異なる2つの大型発表を連続して行った。**Project Glasswing の150組織・15ヶ国以上への拡大**（6/2）と、**Claude Partner Network への Services Track 3階層・Partner Hub の追加**（6/3）だ。前者は「**Claude Mythos Preview によるサイバー防衛能力をどの組織に開放するか**」の更新、後者は「**Claude を顧客に届ける外部コンサルティング企業をどう階層化するか**」の更新で、Anthropic のエコシステムを上下両端から拡張する動きとなった。",
      "## ① Project Glasswing が150組織・15ヶ国以上に拡大（6/2）",
      "**Project Glasswing** は、Anthropic が4月7日に立ち上げた **$100M 規模のサイバーセキュリティイニシアチブ**で、**未公開の Mythos Preview**（最強モデル）を**選別された組織だけが使える**形態を取る。当初の参加組織は AWS、Apple、Google、Microsoft、NVIDIA、Cisco、JPMorgan Chase、Palo Alto Networks、Cloudflare、Mozilla など約50社。",
      "今回の拡大では**追加150組織**が参加し、**合計200組織・15ヶ国以上**になった。新規対象セクターは:",
      "- **電力（power）**",
      "- **水（water）**",
      "- **医療（healthcare）**",
      "- **通信（communications）**",
      "- **ハードウェア（hardware）**",
      "「当初の50組織でカバーが薄かった重要インフラ業界」を補強する形だ。地理的にも **インドが初の対象国**として加わったことを Business Standard が報じている。EU、APAC、中東を含む15ヶ国以上の組織が新規参加した。",
      "**初期パートナーの成果**: これまでに **10,000件超の高/重大セキュリティ脆弱性**が発見されたと Anthropic は公表。4月の Project Glasswing 発表時には「**数千のゼロデイ、最古は27年前の OpenBSD バグ**」が報じられていたが、それからわずか2ヶ月で発見件数が**1万件**を超えた。",
      "**追加リソース**: Anthropic は Glasswing 用に開発された**脆弱性発見ツールを、信頼できるセキュリティチームのリクエストに応じて公開**する方針も発表。同時に **Claude Security**（Opus 4.8 を使ったコードベーススキャン・パッチ提案製品）の存在もアピールされている。",
      "**OpenAI Trusted Access for Cyber（5/7）との対比**: Anthropic 側は EU の規制当局へは Mythos Preview の同等アクセス提供を未確約。OpenAI は5/7に GPT-5.5-Cyber の Trusted Access for Cyber 経由配布を始め、EU からの要求にもコミット済み。**サイバー業界での「選別配布」モデル**は両社で似た形態だが、規制対応のスピードでは OpenAI が一歩先行する構図がある。",
      "## ② Claude Partner Network に Services Track と Partner Hub（6/3）",
      "**Claude Partner Network** は Anthropic が3月に立ち上げた **$100M 規模のチャネル・パートナー育成プログラム**。発足から3か月で**40,000社超が応募、10,000人超が Claude 認定を取得**するという急成長を見せている。今回はその上に **Services Track**（3階層構造）と **Partner Hub**（ポータル）を追加する形で、コンサルティング・実装パートナーを正式に格付けする仕組みを導入した。",
      "**Services Track 3階層**:",
      "- **Select**（エントリー）: **10名以上の Claude 認定取得者、本番運用中の2案件、公開顧客事例1件**",
      "- **Preferred**: **100名認定、15顧客本番、3公開事例**",
      "- **Global Premier**（最上位）: **1,000名認定、100顧客本番、3地域以上、15公開事例、エグゼクティブ後援付きのジョイントビジネスプラン**",
      "**Partner Hub**: パートナー側は要件達成度を **日次更新**で把握、顧客側は案件範囲に応じて最適な認定パートナーを検索できるポータル。階層昇格の審査は **1月1日と7月1日の年2回**、2026年の初年度は **10月1日の追加レビュー**も実施。",
      "## 戦略的読み解き",
      "両発表を並べると、Anthropic のエコシステム戦略の構造が見える。",
      "**1. 「能力の選別配布」と「サービスの階層配布」を同時に運営**",
      "Project Glasswing は **能力（モデル）を組織のタイプで選別**、Partner Network Services Track は **サービス品質を階層で選別**する。両方とも**「誰にどこまで開放するか」を制度化**することで、フロンティア AI の社会実装の責任分担を可視化する設計だ。",
      "**2. Mayo Clinic 提携（Microsoft 6/2 発表、別記事）への対抗軸**",
      "Microsoft が Mayo Clinic とヘルスケア AI 提携を結んだ翌日に、Anthropic が Glasswing で**医療セクターを対象拡大**したのは偶然ではない可能性がある。**業界別の AI 浸透**では、Microsoft（B2B SaaS 統合の強み）vs Anthropic（フロンティアモデルとセキュリティ専門性）の対抗が鮮明になりつつある。",
      "**3. IPO 前のエコシステム可視化**",
      "Anthropic は6月1日に **confidential filing**（IPO 申請書類の非公開提出）を完了した。Services Track と Partner Hub の発表は、上場時のディスクロージャーで**「**安定した B2B 売上を支える広範なエコシステム**」**を示す材料にもなる。40,000社超の応募、10,000人超の認定取得者、100顧客本番運用といった具体数値は、ARR $47B（5月時点）の質的裏付けとして機能する。",
      "## 残された論点",
      "**Glasswing**:",
      "- 200組織への拡大スピードに対し、**Mythos Preview の能力の取り扱い責任**をどう分散させるか",
      "- 脆弱性発見ツールの「**信頼できるセキュリティチームへの公開**」基準",
      "- EU 規制対応の遅れ",
      "**Services Track**:",
      "- Global Premier の要件「**1,000名認定**」は大手 SI に有利、中小ブティック型コンサルへの参入障壁",
      "- 階層昇格の評価基準の透明性（要件達成 ≠ 自動昇格）",
      "- パートナー側の囲い込み戦略（Microsoft / Google / OpenAI も同類プログラムを持つ中での差別化）",
      "本記事は **Anthropic 公式ブログ・Help Net Security・SiliconANGLE・CNBC・Channel Insider・Business Standard・StartupHub.ai** などの一次・二次情報を統合した。価格・契約条件などの詳細は Anthropic 公式ドキュメントを参照されたい。"
    ],
    "tables": [
      {
        "afterParagraph": 17,
        "caption": "Claude Partner Network Services Track 3階層の要件（公式値）",
        "headers": ["階層", "認定取得者", "本番運用顧客", "公開事例", "その他"],
        "rows": [
          ["Select", "10名以上", "2案件", "1件", "—"],
          ["Preferred", "100名", "15顧客", "3件", "—"],
          ["Global Premier", "1,000名", "100顧客", "15件", "3地域以上、エグゼクティブ後援付き JBP"]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Expanding Project Glasswing",
        "site": "Anthropic",
        "url": "https://www.anthropic.com/news/expanding-project-glasswing"
      },
      {
        "title": "Introducing the Services Track and Partner Hub of the Claude Partner Network",
        "site": "Anthropic",
        "url": "https://www.anthropic.com/news/services-track-partner-hub"
      },
      {
        "title": "Anthropic expands Project Glasswing to 150 organizations in more than 15 countries",
        "site": "Help Net Security",
        "url": "https://www.helpnetsecurity.com/2026/06/03/anthropic-project-glasswing-expansion/"
      },
      {
        "title": "Anthropic expands Mythos to 150 additional organizations",
        "site": "CNBC",
        "url": "https://www.cnbc.com/2026/06/02/anthropic-mythos-ai-project-glasswing.html"
      },
      {
        "title": "Anthropic Updates Partner Program As Enterprise AI Adoption Grows",
        "site": "PYMNTS",
        "url": "https://www.pymnts.com/artificial-intelligence-2/2026/anthropic-updates-partner-program-as-enterprise-ai-adoption-grows/"
      },
      {
        "title": "Anthropic expands Project Glasswing to 15 more countries, India gets access",
        "site": "Business Standard",
        "url": "https://www.business-standard.com/companies/news/anthropic-expands-project-glasswing-to-15-more-countries-india-gets-access-126060301120_1.html"
      }
    ]
  },
  "microsoft-build-2026-mai-7models-solara-majorana-2026": {
    "body": [
      "Microsoft が6月2日、サンフランシスコで開幕した **Build 2026** で、**MAI（Microsoft AI Superintelligence）チーム発の7つの新モデル**を一斉に投入した。前報 **Scout**（OpenClaw 基盤の autopilot、PR #27）、**Windows Agent Framework**（MIT で OSS 公開、PR #28）に続く Build 2026 の中核発表で、Microsoft の **OpenAI 依存からの脱却**を象徴する。同日には **Project Solara**（AI ファースト端末プラットフォーム）、**Majorana 2 量子チップ**、**Microsoft Discovery GA**、**Mayo Clinic 提携**などを含む100超の発表が行われた。本記事は基調講演の主要発表を網羅整理する。",
      "## ① MAI 7モデル一斉投入",
      "Mustafa Suleyman（Microsoft AI 事業 CEO、元 DeepMind 共同創業者）が率いる MAI Superintelligence チームから、以下7モデルが同日リリースされた。",
      "### 推論: MAI-Thinking-1",
      "**Microsoft 初のフロンティア推論モデル**。**35B アクティブ / 約1T 総パラメータの sparse Mixture of Experts**、**256K コンテキスト**を備える。Microsoft 公式の主要ベンチマーク値:",
      "- **AIME 2025（数学）**: **97.0%**",
      "- **AIME 2026（数学）**: **94.5%**",
      "- **SWE-Bench Pro**: Claude Opus 4.6 と同等水準",
      "重要な点は、**MAI-Thinking-1 が OpenAI のデータを使わずに訓練された**ことだ（TechTimes 報道）。4月の OpenAI 契約再交渉で制約が緩和されたことを受け、Microsoft が**完全に独立した推論モデル**を初めて持った形になる。「**高効率・高性能・低トークンコスト**」を Microsoft 自身がアピールしている。",
      "### コーディング: MAI-Code-1-Flash",
      "**5B パラメータの軽量コーディング特化モデル**。GitHub Copilot と Visual Studio Code に**即日展開**された。Microsoft 公式値:",
      "- **SWE-Bench Pro**: Claude Haiku 4.5 を **+16pt** 上回る",
      "- 4つの主要コーディングベンチマークすべてで Claude Haiku 4.5 を上回る",
      "前報（PR #26、5/28 時点）で **Project Polaris** とされていた自社製コーディング AI の正体は、この MAI-Code-1-Flash と上位版 MAI-Code-1 だった可能性が高い。Copilot Starter（無償）/ Pro / Enterprise 3階層への移行と歩調を合わせている。",
      "### マルチモーダル",
      "残りの5モデルも同時に公開:",
      "- **MAI-Image-2.5**: **Microsoft 初の text-to-image + image-to-image 両対応**モデル",
      "- **MAI-Image-2.5 Flash**: 高速軽量版",
      "- **MAI-Transcribe-1.5**: **43言語**で SOTA 級の音声認識",
      "- **MAI-Voice-2**: **15言語以上を追加**し新ボイスオプション搭載",
      "- **MAI-Voice-2 Flash**: 高速軽量版",
      "## ② Project Solara — AI ファースト端末プラットフォーム",
      "**Project Solara** は、**Android ベースの「chip-to-cloud」プラットフォーム**で、AI エージェントを前提に設計されている。デモでは2形態が披露された:",
      "- **ウェアラブルバッジ**（Qualcomm 製チップ）",
      "- **デスクトップコンパニオン端末**（MediaTek 製チップ）",
      "Project Solara は「**エージェント・ファースト体験のために一から設計され、新しい端末フォームファクターを可能にする**」と Microsoft 公式が説明。スマートフォンや PC の延長ではなく、**AI エージェントが主役の新カテゴリ端末**を狙う。OpenAI が探索中とされる「AI ファースト端末」（Jony Ive 設計）への Microsoft 側の回答という位置付けだ。",
      "## ③ Majorana 2 量子チップ",
      "Microsoft は **Majorana 2** を発表。前世代（昨年発表）に続く2世代目で、**新型超伝導体**を採用。スペック向上は劇的だ:",
      "- **qubit 寿命**: **平均 20秒**（インスタンスによっては1分）— 前世代はミリ秒オーダー",
      "- **信頼性**: 前世代比 **1,000倍**",
      "- **スケーラビリティ**: **「手のひらサイズで100万 qubit」**への道筋",
      "量子コンピュータが「研究室の curiosity」から「実用に耐える計算リソース」へ進む可能性を示すマイルストーン発表だ。",
      "## ④ Microsoft Discovery が GA",
      "**Microsoft Discovery**（科学研究向け AI プラットフォーム）が **一般提供（GA）**を達成。早期顧客として **GSK（医薬品）、BHP（鉱業）** などが既に利用中であることが明らかにされた。化学・材料・医薬・地球科学などの「実験データ × AI 推論」のループを高速化する。",
      "## ⑤ Mayo Clinic 提携",
      "**Mayo Clinic と Microsoft の長期提携**を発表。Microsoft の AI インフラと **Mayo Clinic の医療データ・専門知識**を組み合わせ、医師の診断支援ツールを開発する。**Claude for Legal（5/12 Anthropic）と並ぶ「業界別 AI パッケージング」**の Microsoft 版として注目される。",
      "## ⑥ インフラ系: Azure HorizonDB と GPU Fabric",
      "- **Azure HorizonDB**: エージェント向けの**フルマネージド PostgreSQL** サービス（プレビュー）。Anthropic の Stainless 買収交渉（5/14 報道）と並ぶ、エージェント時代の開発者インフラ獲得競争を示す",
      "- **GPU 高速化 Fabric Data Warehouse**: NVIDIA アクセラレーション対応で、特定クエリの大幅高速化",
      "- **Surface RTX Spark Dev Box**: 開発者向けの新世代ハードウェア、NVIDIA RTX ベース",
      "## ⑦ 既報の確認",
      "前報の Build 2026 関連3記事と整合:",
      "- **Scout（PR #27）**: autopilot カテゴリ第一号、Windows 11+ / macOS 12+ で Frontier プログラム経由提供",
      "- **Project Polaris（PR #26）**: MAI-Code-1-Flash として正式発表（推定）",
      "- **Windows Agent Framework（PR #28）**: MIT で OSS 公開、26H2 で標準搭載",
      "## 戦略的読み解き",
      "Build 2026 の3本柱は明確だ:",
      "1. **モデル独立**: MAI-Thinking-1 が「**OpenAI データを使わず**」訓練されたことで、Microsoft はモデル開発で完全自立。OpenAI への約 $130B 投資の意味が変化する",
      "2. **エージェント前提の OS / 端末**: Windows Agent Framework × Scout × Project Solara で、「**エージェントが主役の OS と端末**」という方向に賭ける",
      "3. **業界別 × 量子・科学**: Mayo Clinic × Microsoft Discovery × Majorana 2 で、**汎用 AI からドメイン特化 × 計算アーキテクチャ革新**へ視野を広げる",
      "Anthropic（Opus 4.8 + Dynamic Workflows、5/28）、Google（I/O 2026、5/19）、OpenAI（GPT-5.5 系、Workspace Agents）の動きと並べると、**5月末～6月初の「AI フロンティアラボの集中発表ピーク」**となった。3社（4社）の方向性がはっきり別軸（OS 統合、業界特化、エージェント基盤、量子）に向かいつつあるのが、本 Build 2026 の最大の示唆と言える。",
      "## 補足: 公式 PDF と一次情報源",
      "Microsoft は Build 2026 の発表内容を **Book of News**（公式オンラインガイド）として整理しており、microsoft.ai 上に PDF 形式の資料も公開されている（執筆時点で `microsoft.ai/wp-content/uploads/2026/06/main_20260602_2.pdf` 等が観測されている）。本記事は **Microsoft 公式ブログ・news.microsoft.com・公式 live blog・CNBC・Neowin・TechTimes・Constellation Research・Engadget** などの一次・二次情報を統合して再構成している。仕様の詳細（モデルカード、安全性評価、価格表）は Microsoft Learn ドキュメントや Azure / GitHub の公式ページを参照すべき。"
    ],
    "tables": [
      {
        "afterParagraph": 14,
        "caption": "MAI 7モデル 一覧（Microsoft 公式）",
        "headers": ["モデル", "種別", "主要スペック・ベンチ", "提供"],
        "rows": [
          ["MAI-Thinking-1", "推論", "35B active / ~1T 総 sparse MoE、256K ctx、AIME 2025 97.0%、AIME 2026 94.5%、SWE-Pro Opus 4.6 同等", "Microsoft Foundry"],
          ["MAI-Code-1-Flash", "コーディング", "5B、Haiku 4.5 を SWE-Pro で +16pt 上回る", "GitHub Copilot / VS Code"],
          ["MAI-Image-2.5", "画像（T2I + I2I）", "Microsoft 初の dual workload 対応", "Foundry"],
          ["MAI-Image-2.5 Flash", "画像（高速版）", "—", "Foundry"],
          ["MAI-Transcribe-1.5", "STT", "43言語、SOTA 級", "Foundry / Azure"],
          ["MAI-Voice-2", "音声生成", "15+ 言語追加、新ボイス", "Foundry / Azure"],
          ["MAI-Voice-2 Flash", "音声（高速版）", "—", "Foundry / Azure"]
        ]
      },
      {
        "afterParagraph": 32,
        "caption": "Build 2026 の主要発表まとめ",
        "headers": ["カテゴリ", "発表内容", "状態"],
        "rows": [
          ["モデル", "MAI 7モデル一斉投入", "本日公開"],
          ["エージェント", "Scout（autopilot 第一号）", "Frontier プログラムプレビュー"],
          ["プラットフォーム", "Windows Agent Framework", "MIT OSS、26H2 標準搭載"],
          ["端末", "Project Solara（chip-to-cloud）", "ウェアラブル + デスクトップ実演"],
          ["量子", "Majorana 2 量子チップ", "発表、qubit 寿命 20秒"],
          ["科学", "Microsoft Discovery", "GA（GSK、BHP 利用中）"],
          ["医療", "Mayo Clinic 提携", "発表"],
          ["インフラ", "Azure HorizonDB", "プレビュー"],
          ["インフラ", "GPU 高速 Fabric DW", "発表"],
          ["ハードウェア", "Surface RTX Spark Dev Box", "発表"]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Microsoft Build 2026: Be yourself at work",
        "site": "Microsoft Official Blog",
        "url": "https://blogs.microsoft.com/blog/2026/06/02/microsoft-build-2026-be-yourself-at-work/"
      },
      {
        "title": "Microsoft Build 2026 Live Blog",
        "site": "Microsoft News",
        "url": "https://news.microsoft.com/build-2026-live-blog/microsoft-build-2026-live/"
      },
      {
        "title": "Microsoft unveils new AI models to lessen reliance on OpenAI and lower costs for developers",
        "site": "CNBC",
        "url": "https://www.cnbc.com/2026/06/02/microsoft-unveils-new-ai-models-lessen-reliance-on-openai-lower-costs.html"
      },
      {
        "title": "Microsoft unveils MAI-Thinking-1 reasoning and MAI-Code-1 coding models",
        "site": "Neowin",
        "url": "https://www.neowin.net/news/microsoft-unveils-mai-thinking-1-reasoning-and-mai-code-1-coding-models/"
      },
      {
        "title": "Microsoft Build 2026: MAI-Thinking-1 Is First In-House Reasoning Model, Trained Without OpenAI Data",
        "site": "Tech Times",
        "url": "https://www.techtimes.com/articles/317631/20260602/microsoft-build-2026-mai-thinking-1-first-house-reasoning-model-trained-without-openai-data.htm"
      },
      {
        "title": "Microsoft Build 2026 Live Updates",
        "site": "Engadget",
        "url": "https://www.engadget.com/2185601/microsoft-build-2026-live-blog-copilot-windows-news/"
      },
      {
        "title": "Microsoft Build 2026: Windows, Rayfin, Fabric IQ and more",
        "site": "Constellation Research",
        "url": "https://www.constellationr.com/insights/news/microsoft-build-2026-windows-rayfin-fabric-iq-and-more"
      }
    ]
  },
  "feature-ai-ipo-season-cerebras-spacex-anthropic-openai-2026": {
    "body": [
      "**Cerebras Systems** が5月14日に NASDAQ 上場を成功させたことを皮切りに、AI 企業の IPO シーズンが本格化している。SpaceX、Anthropic、OpenAI の3社が**いずれも $1 trillion 規模の評価額**で2026年内の上場を予定しており、合計で **$3 trillion 超の AI IPO パイプライン**という史上最大規模の流動性イベントが形成された。本記事は各社の評価額・調達規模・タイムライン・リスクを公式値・複数報道で整理する。",
      "## ① Cerebras Systems — 5/14 上場、初日 +68%",
      "**Cerebras** は AI チップ専業のスタートアップで、CS-3 ウェハスケールエンジンを核に、Cloud / オンプレ両方の AI 推論ハードウェアを提供してきた。",
      "**IPO 概要（公式値）**:",
      "- **上場日**: 2026年5月14日（NASDAQ）",
      "- **発行価格**: $185",
      "- **調達額**: $5.5 billion",
      "- **初日終値上昇率**: **+68%**",
      "- **2日目**: −10% で利益確定売り",
      "今年最大の IPO で、Cerebras の成功は他の AI 企業にとっての試金石になった。CNBC は「Cerebras の好調が SpaceX、OpenAI、Anthropic への投資家関心をさらに高めている」と分析している。",
      "## ② SpaceX — 6/12 上場予定、$1.75T 評価額目標",
      "**SpaceX** は xAI との統合後、AI 関連事業（Colossus 1、Anthropic への計算資源提供）が評価に寄与する形となっている。Anthropic との5月6日の Colossus 1 借り上げ契約（220K GPU、300+ MW）は、SpaceX の AI コンピュート供給者としての立ち位置を市場にアピールする材料となった。",
      "**IPO 概要（報道値）**:",
      "- **上場予定**: 2026年6月12日",
      "- **目標評価額**: **$1.75 trillion**",
      "- **目標調達額**: **$75-80 billion**",
      "- **業績情報**: 公開プロスペクタス（S-1）が「数週間以内に出る」と複数メディアが報道",
      "Elon Musk の SpaceX が公開市場でどう評価されるかは、xAI との統合効果も含めた「AI × 宇宙」のテーマ株として注目される。",
      "## ③ Anthropic — 6/1 confidential filing、10月上場視野",
      "**Anthropic** は6月1日に **SEC への confidential filing**（非公開での IPO 申請書類提出）を完了した。これは正式な S-1 公開の前段階で、SEC とのフィードバック・修正のやり取りを非公開で行う仕組みだ。**10月の上場を目指す**と Al Jazeera 等が複数報道している。",
      "**Anthropic IPO の主要数値**:",
      "- **直近の Series H**: **$65 billion 調達、評価額 $965 billion**（5月28日確定）",
      "- **累計株式調達**: 約 $125 billion",
      "- **ARR**: **$47 billion**（5月時点）",
      "- **競合 OpenAI 評価額**: $852 billion（3月）",
      "Anthropic が IPO で OpenAI を**評価額・上場順序の両方で先行する**可能性が高まった。",
      "## ④ OpenAI — Q4 上場の見方",
      "**OpenAI** は2026年第4四半期の上場を目指していると複数の関係者が報じている。Anthropic に上場順序で先を越されるのを避けるため、年内のタイミング調整が続いている。**累計株式調達は約 $180 billion**で、Anthropic より約 $55B 多い。",
      "Build 2026 で Microsoft が **Project Polaris**（自社製コーディング AI）と **Scout**（OpenClaw 基盤エージェント）を発表したことで、OpenAI の主要顧客である Microsoft との関係が長期的にどう変化するかが、上場時のリスク要因として議論されている。",
      "## 業界全体のリスク要因",
      "**1. 「AI IPO トラップ」警告**: MarketWise などは「Figma 上場後の株価低迷（2026年5月時点で IPO 価格を割り込む）が、AI 銘柄でも繰り返される可能性」と警告。$1T 超の評価額での上場は、**機関投資家の長期保有意欲が試される**水準だ。",
      "**2. 評価額の循環取引**: Anthropic への Amazon $25B + Google $40B 投資のように、**ハイパースケーラーが投資した先がそのクラウドを買い戻す**循環構造を、規制当局が会計面でどう扱うかは未確定。",
      "**3. コンピュート供給の不確実性**: OpenAI と Anthropic はいずれも独自のチップ・データセンター供給に大規模 CapEx を要する。**Stargate（OpenAI）と Anthropic の SpaceX/AWS/GCP 連合**で需給バランスが崩れるリスクは、IPO 時のディスクロージャー対象。",
      "**4. 規制の動向**: 米 SEC は AI 関連企業に対し「能力主張」「安全性主張」のディスクロージャー基準を強化しており、Mythos Preview や GPT-5.5-Cyber 等のディスクロージャー文言が論点になる。",
      "## 投資家にとっての意味",
      "今回の3社（SpaceX、Anthropic、OpenAI）はいずれも個人投資家がアクセスしにくい未上場プレミアムを長年享受してきた。**IPO 後にそれら3社の株を機関・個人がどの程度受け止めるか**は、AI 市場全体の流動性を決める。Cerebras の +68% を受けて投資家心理は前のめりだが、Figma 後の調整局面と類似する可能性は否定できない。",
      "本記事執筆時点で正式な S-1（SpaceX）/ プロスペクタス（Anthropic）はまだ公開されていない。価格、株数、ロックアップ条件、引受シンジケートなどは今後の公式発表を待つ必要がある。"
    ],
    "tables": [
      {
        "afterParagraph": 22,
        "caption": "2026年 AI IPO パイプラインまとめ",
        "headers": ["企業", "状態", "上場時期", "評価額", "調達額（目標）"],
        "rows": [
          ["Cerebras Systems", "上場済み", "2026/5/14", "—（NASDAQ）", "$5.5B（実績）"],
          ["SpaceX（xAI 統合後）", "S-1 公開直前と報道", "2026/6/12", "$1.75T", "$75-80B"],
          ["Anthropic", "Confidential filing", "2026/10 目標", "$965B", "未公開（Series H で $65B 直近完了）"],
          ["OpenAI", "上場準備", "2026/Q4", "—（直近 $852B 評価額）", "未公開"]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Cerebras' blockbuster IPO boosts hype for SpaceX, OpenAI, Anthropic",
        "site": "CNBC",
        "url": "https://www.cnbc.com/2026/05/16/cerebras-blockbuster-ipo-boosts-hype-for-spacex-openai-anthropic.html"
      },
      {
        "title": "AI giant Anthropic files for US IPO as investors bet big on AI future",
        "site": "Al Jazeera",
        "url": "https://www.aljazeera.com/economy/2026/6/1/ai-giant-anthropic-files-for-us-ipo-as-investors-bet-big-on-ai-future"
      },
      {
        "title": "My guide to the IPOs of SpaceX, OpenAI and Anthropic",
        "site": "CNBC",
        "url": "https://www.cnbc.com/2026/05/31/my-guide-to-the-ipos-of-spacex-openai-and-anthropic-including-the-one-i-really-want-to-buy.html"
      },
      {
        "title": "Anthropic's IPO is Just Ahead. Here's What You Need to Know.",
        "site": "The Motley Fool",
        "url": "https://www.fool.com/investing/2026/06/02/anthropics-ipo-is-just-ahead-heres-what-you-need-t/"
      },
      {
        "title": "SpaceX, OpenAI, Anthropic: upcoming IPOs to watch in 2026",
        "site": "IG International",
        "url": "https://www.ig.com/en/news-and-trade-ideas/spacex-openai-anthropic-2026-ipo-deals-260520"
      }
    ]
  },
  "microsoft-build-2026-windows-agent-framework-2026": {
    "body": [
      "Microsoft が Build 2026（6月2-3日）で発表した **Windows Agent Framework** は、前報で扱った **Scout**（OpenClaw 基盤の「autopilot」エージェント、別記事）の下層にあたるプラットフォーム層だ。Satya Nadella CEO は基調講演で「**Windows は AI 時代のキャンバスとコラボレーター双方になる**」と位置付け、**OS 自体をエージェント実行の基盤に作り直す**戦略を打ち出した。",
      "## OSS 化と Linux 互換",
      "最大のサプライズは、**Microsoft が Windows Agent Framework のコアを MIT ライセンスで OSS 公開**したことだ。Anthropic Claude Managed Agents、OpenAI Workspace Agents、Google Antigravity がいずれもプロプライエタリ実行ランタイムを採るのに対し、Microsoft は **Linux でも Docker 拡張経由で動く実行コンテナフォーマット**を約束した。",
      "**モデル中立**: フレームワーク上のエージェントは **OpenAI、Anthropic、Hugging Face のオープンソースモデル**いずれも利用可能。前日報道の **Project Polaris**（Microsoft 自社製コーディング AI）が中核に組み込まれるが、ユーザー側で選択できる設計だ。",
      "## 4つの柱",
      "### 1. Sandboxed Execution Container",
      "**エージェントを隔離環境で実行**するための新しいコンテナ形式。OS リソース（ファイル、レジストリ、ネットワーク）への直接アクセスを制限し、必要なリソースだけを宣言的に付与する。**Docker 互換**のため、Linux やクラウドでも同じコンテナイメージが動く。エンタープライズのセキュリティ要件（権限分離、データ越境制御）に対応する設計だ。",
      "### 2. Cloud PC 統合",
      "**Microsoft Cloud PC（Windows 365）**上で**常時稼働するエージェント**をサポート。ユーザーがローカル PC を閉じても、Cloud PC 側でエージェントが作業を続け、結果を Teams や Outlook に返す。Scout の「autopilot」コンセプトは、この常時稼働性が前提となる。",
      "### 3. オンデバイス AI モデル",
      "**ローカルでの推論**を強化。Copilot+ PC（NPU 搭載）上で小型・特化モデルを動かし、機微データを外部に出さずに処理する用途を想定。プライバシー規制業界・オフライン業務向け。Project Polaris の「軽量版」がローカル推論用に提供される見込み。",
      "### 4. Intelligent Terminal",
      "**新しいターミナルアプリ**。CLI に AI 補完・対話を統合し、エージェントワークフローの「**コマンドハブ**」として機能。`wt agent run` といったコマンドからエージェントを起動・監視・終了できる。Claude Code の `claude agents` コマンドや Cursor の Agents Window と類似の発想だ。",
      "## リリースタイムライン",
      "- **Windows 11 バージョン 26H2**（2026年Q4）で全コンポーネントを標準搭載",
      "- 既存 Windows 11 ユーザーには **Windows Update 経由**で順次配信",
      "- **Windows Agent Framework SDK** は Build 2026 開催中（6/2-3）に GitHub で公開",
      "- **Linux 向け Docker 拡張**は数か月以内",
      "## 戦略的意味: 「OS × AI」の Microsoft 解",
      "5月以降の業界全体で、**Apple Intelligence（OS × Anthropic Claude on Siri）**、**Google Gemini Intelligence（Android / ChromeOS / Wear / Auto）**、**Anthropic Claude Platform on AWS**、**OpenAI Workspace Agents** と、「OS × AI × 配布」の選択肢が次々に揃ってきた。Microsoft の動きの特徴は3点だ:",
      "1. **OSS 戦略**: Anthropic / OpenAI / Google がクローズドな実行ランタイムを採るのに対し、**MIT で OSS 化**することでサードパーティ開発者の囲い込みを狙う",
      "2. **Linux 互換**: Docker 経由で **Linux ホストでも同じコンテナが動く**ことを約束し、Microsoft 以外の OS シェアにもリーチ",
      "3. **モデル中立**: Microsoft 自社製（Project Polaris、MAI 系）だけでなく、OpenAI、Anthropic、Hugging Face すべてを乗せられる設計で、**モデルベンダー競争に勝者が決まる前**にプラットフォームを確立する戦略",
      "## Scout との関係",
      "**Scout は Windows Agent Framework の最初の旗艦アプリケーション**にあたる。エンタープライズ顧客は Scout を直接導入することも、フレームワーク上で自社専用エージェントを開発することもできる。Microsoft Agent 365（5/1 GA、$15/user/月）の観測・統制レイヤーとも連動する。",
      "## 残された不明点",
      "- **Linux Docker 拡張**の具体的なリリース時期と機能範囲",
      "- **オンデバイスモデル**の正確なモデル名・量子化方式・対応 NPU",
      "- **価格モデル**: Windows 11 標準機能なのか、Enterprise SKU 限定なのか",
      "- 既存の **Microsoft Agent 365** との SKU 整理",
      "これらは Build 2026 の続報セッション、または6月中旬以降の公式ドキュメントで明らかになる見込み。"
    ],
    "primarySources": [
      {
        "title": "Build 2026: How Microsoft Turns Windows Into an Agentic AI Platform",
        "site": "Windows News",
        "url": "https://windowsnews.ai/article/build-2026-how-microsoft-turns-windows-into-an-agentic-ai-platform.421841"
      },
      {
        "title": "Microsoft Build Live Blog",
        "site": "Microsoft",
        "url": "https://news.microsoft.com/build-2026-live-blog"
      },
      {
        "title": "Microsoft Build 2026 Recap: Windows Is Now an Agent Platform",
        "site": "ChatForest",
        "url": "https://chatforest.com/builders-log/microsoft-build-2026-recap-windows-agent-platform-project-polaris-copilot-workspace/"
      },
      {
        "title": "Microsoft Build 2026 Recap — All AI Announcements",
        "site": "A Guide to Cloud & AI",
        "url": "https://www.aguidetocloud.com/blog/microsoft-build-2026-recap/"
      }
    ]
  },
  "anthropic-may-2026-series-h-milan-korea-arr-47b-2026": {
    "body": [
      "5月13日に AI News で記事化した **Anthropic の $30-50B 調達交渉（評価額 $900-950B）報道**は、**5月28日に Series H として正式確定**した。同時に **ARR $47 billion 到達、Milan オフィス開設、Seoul オフィス計画**といった海外展開も連続して発表され、5月後半は Anthropic にとってビジネス側の節目が集中した月となった。本記事は5月後半の Anthropic 関連の確定情報をまとめる。",
      "## ① Series H 確定: $65B / $965B 評価額",
      "5月28日の Anthropic 公式発表によれば、Series H ラウンドは以下の条件で**正式クローズ**した。",
      "- **調達額**: **$65 billion**（過去報道の $30-50B 交渉から拡大）",
      "- **評価額（post-money）**: **$965 billion**",
      "- **リードインベスター**: **Altimeter Capital、Dragoneer、Greenoaks、Sequoia Capital**",
      "- **OpenAI（直近 $852B）を超える評価額**で、AI スタートアップとしては世界最大",
      "Crunchbase の集計では、Anthropic のこの調達が**2026年5月のグローバルスタートアップ資金の 54%**を占め、ベンチャー市場全体を年内最高水準に押し上げた。",
      "## ② ARR $47B 到達",
      "Anthropic は Series H 発表と同時に **ARR が $47 billion に到達**したことも公表した。成長軌跡は以下:",
      "- **2025年通年**: $10 billion",
      "- **2026年3月**: $30 billion",
      "- **2026年5月**: **$47 billion**",
      "**わずか2か月で $17B 増**（+57%）という伸びは、Claude Code、Claude Managed Agents、Claude Platform on AWS、Claude for Legal といった**5月の連続プロダクト投下**が業績に即時反映されていることを示す。",
      "## ③ Milan オフィス開設（5/27）",
      "**5月27日、Anthropic はイタリア・ミラノにオフィスを開設**した。**イタリア企業のエンタープライズ導入、研究機関との連携、開発者コミュニティ支援**を目的としており、欧州での Anthropic の物理的プレゼンスとしてはロンドン、ダブリン、パリに続く拡張となる。EU AI Act 対応と現地パートナーシップを進める拠点として位置付けられている。",
      "## ④ 韓国 Representative Director 任命（5/26）",
      "**5月26日には韓国市場の Representative Director として KiYoung Choi 氏が就任**した。これは **Seoul オフィス開設に向けた事前準備**にあたり、韓国の財閥企業（Samsung、SK、LG）、開発者コミュニティ、政府機関との関係構築を担う。日韓は Anthropic にとってアジア太平洋地域で最も売上の伸びが速い市場とされる。",
      "## ⑤ ベンチャー市場全体への波及",
      "Anthropic の $65B ラウンドは、**5月のグローバル VC 資金の半分以上**を吸収しただけでなく、関連スタートアップ（推論インフラ、AI セーフティ、エージェントツール）へのバリュエーション波及効果も生んだ。Crunchbase は**5月の総スタートアップ資金は record-high に近づいた**と分析している。",
      "## 5月の Anthropic タイムライン総括",
      "5月後半の Anthropic を時系列で並べると、戦略の連続性が明確になる:",
      "- **5/6** SpaceX Colossus 1 借り上げ（220K GPU、300+ MW）でレート上限緩和",
      "- **5/12** Claude Platform on AWS GA + Claude Code agent view + Claude for Legal（同日3本立て）",
      "- **5/13** 当時報道された $30-50B 調達・$900B 評価額交渉",
      "- **5/14** Stainless 買収交渉報道（OpenAI / Google も使う SDK 基盤）",
      "- **5/26** 韓国 Representative Director 任命",
      "- **5/27** Milan オフィス開設",
      "- **5/28** **Series H 確定（$65B / $965B）、ARR $47B 公表、Claude Opus 4.8 リリース**",
      "- **6/1** IPO confidential filing",
      "「コンピュート供給 → 配布チャネル → 業界別パッケージング → 開発者接点 → 資金調達 → 海外展開 → モデル更新 → IPO 準備」と、**約4週間でレイヤーを横断する動き**が連続している。米国 AI 企業の典型的なスケールアップ事例として、今後ケーススタディとして参照される可能性が高い。"
    ],
    "tables": [
      {
        "afterParagraph": 13,
        "caption": "Anthropic ARR 推移",
        "headers": ["時期", "ARR", "前期比"],
        "rows": [
          ["2025年通年", "$10B", "—"],
          ["2026年3月", "$30B", "+3.0x"],
          ["2026年5月", "$47B", "+57% (vs 3月)"]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Anthropic tops OpenAI as most valuable AI startup, nears $1 trillion valuation",
        "site": "CNBC",
        "url": "https://www.cnbc.com/2026/05/28/anthropic-open-ai-startup-value.html"
      },
      {
        "title": "Anthropic Funding Pushed Startup Investment To Near-Record Levels In May",
        "site": "Crunchbase News",
        "url": "https://news.crunchbase.com/venture/monthly-vc-funding-recap-ai-may-2026/"
      },
      {
        "title": "Anthropic News",
        "site": "Anthropic",
        "url": "https://www.anthropic.com/news"
      },
      {
        "title": "AI giant Anthropic files for US IPO as investors bet big on AI future",
        "site": "Al Jazeera",
        "url": "https://www.aljazeera.com/economy/2026/6/1/ai-giant-anthropic-files-for-us-ipo-as-investors-bet-big-on-ai-future"
      }
    ]
  },
  "microsoft-scout-openclaw-build-2026-2026": {
    "body": [
      "Microsoft は6月2日、サンフランシスコで開幕した開発者カンファレンス **Build 2026** で **Scout** を正式発表した。**OSS の AI エージェント基盤 OpenClaw** をベースに構築された新型エージェントで、Microsoft はこのカテゴリを **「autopilot（オートパイロット）」** と呼ぶ。**常時稼働でユーザーの代理として動き、固有の Microsoft Entra アイデンティティで管理される**点が、これまでの \"アシスタント\" や \"コパイロット\" との違いだ。前日報道された **Project Polaris**（自社製コーディング AI、別記事）と並んで、本カンファレンスの二大目玉となった。",
      "## Scout の動作: Teams が単一の入り口",
      "Scout の入り口は **Microsoft Teams** だ。Teams のチャットで指示するだけで、エージェントは以下のリソースを横断的に操作する:",
      "- **Outlook**（メール）",
      "- **OneDrive**（ファイル）",
      "- **SharePoint**（社内ドキュメント・データ）",
      "- **Excel / Word / PowerPoint**（Office アプリ）",
      "- **カレンダー・連絡先**",
      "- **ブラウザ操作**（Microsoft Edge と連携）",
      "- **外部 SaaS**（MCP プロトコル経由）",
      "Build 2026 のデモでは、**「Outlook で受信した顧客メールを Scout が読解し、SharePoint で注文番号を照合し、Excel のダッシュボードを更新し、Teams で確認メッセージを返信する」**という一連の業務フローを1セッションで自動完遂してみせた。**人間の介入は最初の Teams 指示のみ**で、各アプリを開いて操作する作業は Scout が代行する。",
      "## OpenClaw を採用した戦略的意味",
      "**OpenClaw** は2025年11月に Peter Steinberger 氏が **Clawdbot** として公開し、2026年3月に統合数50を超えて改称された **MIT ライセンスのオープンソース AI エージェント基盤**。Anthropic / OpenAI / Google / Ollama 等を裏側に切替可能なマルチモデル・プロキシで、Telegram / Slack / Discord / WhatsApp 等のメッセージングを UI として AI エージェントを動かす設計が特徴だ。",
      "Microsoft が独自フレームワークを書き起こさず **OpenClaw を採用した**点は重要だ:",
      "1. **オープンスタンダードへの賭け**: Anthropic Claude Managed Agents や OpenAI Workspace Agents が**プロプライエタリ**な実行ランタイムなのに対し、Microsoft は **OSS をエンタープライズ向けに包む**戦略を選んだ",
      "2. **MCP との親和性**: OpenClaw はネイティブで MCP をサポート。Microsoft が4月に正式採用した MCP との接続コストが低い",
      "3. **モデル中立**: 内部では Anthropic Claude や OpenAI GPT、自社 MAI（前日報道の Project Polaris を含む）、Google Gemini まで切替可能な拡張余地が残る",
      "ただし VentureBeat は5月、**Anthropic が「OpenClaw killer」と呼ばれる Claude Code Channels（Telegram / Discord 経由で Claude にメッセージ）をリリース**したと報じた。Microsoft の Scout は、この OpenClaw vs Anthropic の駆け引きの中で**「Microsoft 365 という巨大配布チャネルを後ろ盾にした OpenClaw 派の旗艦」**として登場した格好だ。",
      "## ガバナンスとセキュリティ: Entra ID と Policy Conformance",
      "Scout の**最も Microsoft らしい**設計が、ガバナンス層だ。",
      "**1. 専用 Entra アイデンティティ**: 各 Scout インスタンスは**人間ユーザーとは別の Entra ID**を持ち、アクセス権・操作ログ・所有データはすべて IT 管理者の統制下に置かれる。「**従業員が無断でエージェントを作る**」シャドー IT を構造的に防ぐ。",
      "**2. Policy Conformance System**: ポリシーに対するエージェントの挙動を**継続的にチェック**し、**個別の監査証跡（audit trail）**を残す。GDPR / SOC 2 / HIPAA など規制業界での導入を意識した設計だ。",
      "**3. Intune ポリシー前提**: 利用には **Microsoft Intune** での端末・ID 管理ポリシーが設定済みであることが必須。",
      "**4. オプトイン同意**: ユーザーは Scout 使用開始時に **attestation（同意確認）** を求められる。",
      "**5. GitHub Copilot ライセンス必須**: 現時点では追加のライセンス要件として GitHub Copilot 契約が前提。",
      "## 提供範囲",
      "Scout は **プライベートプレビュー**として、選定された顧客と **Microsoft Frontier プログラム** 参加企業に提供開始。価格・GA 時期は未公表だが、Microsoft Agent 365（5/1 GA、$15/user/月）の**観測・統制レイヤー**と組み合わせて販売される可能性が高い。",
      "## 「コパイロット → オートパイロット」の業界トレンド",
      "Microsoft Scout の登場は、5月以降の業界全体の方向性と整合する:",
      "- **Anthropic Claude Code agent view**（5/12、マルチセッション管理）",
      "- **Anthropic Claude Opus 4.8 Dynamic Workflows**（5/28、最大1,000サブエージェント並列）",
      "- **Google Antigravity 2.0 + Gemini Spark**（5/19、I/O 2026、パーソナルエージェント）",
      "- **Cursor in Microsoft Teams**（5/11、Teams からエージェントへタスク委任）",
      "「**人がエージェントに指示し、エージェントが業務全体をオーケストレーションする**」という形が、Anthropic・Google・Microsoft の3社で並列に確立されつつある。Scout の差別化要素は、**Microsoft 365 の包括的なデータ層（メール・ドキュメント・組織・カレンダー）にネイティブ接続**できる点と、**Entra ID + Intune による企業統制が標準で組み込まれた**点にある。",
      "## 公式確認・次のステップ",
      "本記事は **Microsoft 公式 Build 2026 セッション、Bloomberg、TechCrunch、Computerworld、PCWorld、Decrypt** などの一次・二次報道に基づく。価格、GA 時期、対応モデルの詳細は今後の発表を待つ。Build 2026 は6月3日まで開催され、Scout の追加デモや関連発表（Project Polaris、Windows Agent Framework 等）が続く予定だ。"
    ],
    "tables": [
      {
        "afterParagraph": 16,
        "caption": "Microsoft Scout の主要仕様（公式・報道ベース）",
        "headers": ["項目", "内容"],
        "rows": [
          ["基盤フレームワーク", "OpenClaw（MIT、OSS）"],
          ["UI 入口", "Microsoft Teams"],
          ["接続アプリ", "Outlook、OneDrive、SharePoint、Office、Edge ブラウザ"],
          ["外部接続", "MCP（Model Context Protocol）"],
          ["アイデンティティ", "Microsoft Entra ID（エージェントごと固有）"],
          ["ガバナンス", "Policy Conformance System、監査証跡"],
          ["前提条件", "Intune ポリシー、opt-in attestation、GitHub Copilot ライセンス"],
          ["提供範囲", "プライベートプレビュー（Frontier プログラム）"]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Microsoft Unveils Scout AI Assistant to Automate Workplace Tasks",
        "site": "Bloomberg",
        "url": "https://www.bloomberg.com/news/articles/2026-06-02/microsoft-launches-ai-that-works-like-an-executive-assistant"
      },
      {
        "title": "Microsoft launches Scout, an OpenClaw-inspired personal assistant",
        "site": "TechCrunch",
        "url": "https://techcrunch.com/2026/06/02/microsoft-launches-scout-an-openclaw-inspired-personal-assistant/"
      },
      {
        "title": "Microsoft unveils Scout, an autonomous AI agent built on OpenClaw",
        "site": "Computerworld",
        "url": "https://www.computerworld.com/article/4180103/microsoft-unveils-scout-an-autonomous-ai-agent-built-on-openclaw.html"
      },
      {
        "title": "Microsoft Scout Leads Build Push Around Agentic AI",
        "site": "Redmond Magazine",
        "url": "https://redmondmag.com/articles/2026/06/02/microsoft-scout-leads-build-push-around-agentic-ai.aspx"
      },
      {
        "title": "Build 2026: Microsoft Unveils New 'Scout' Personal Work Agent Powered by OpenClaw",
        "site": "Thurrott",
        "url": "https://www.thurrott.com/a-i/336926/build-2026-microsoft-unveils-scout-personal-work-agent-and-new-in-house-ai-models"
      }
    ]
  },
  "microsoft-build-2026-project-polaris-mai-coding-2026": {
    "body": [
      "**Reuters と The Information** が5月28日、Microsoft が6月2-3日にサンフランシスコで開催する **Build 2026** 開発者カンファレンスで、**コード名 Project Polaris と呼ばれる自社製コーディング AI モデル**を披露すると報じた。同モデルは現行 GitHub Copilot の OpenAI 製モデルに代わる中核として、段階的に Copilot に組み込まれていく計画。Microsoft は5月31日時点でこの発表を公式確認していないが、複数の関係者を引いた両誌の報道に多数のメディアが追随している。",
      "## MAI（Microsoft AI Superintelligence）の系譜",
      "Project Polaris を開発したのは **Microsoft の内製 AI 研究組織 MAI**。**Mustafa Suleyman**（元 DeepMind 共同創業者、2024年3月に Microsoft AI 事業 CEO 就任）が率い、**MAI Superintelligence チームは2025年11月に正式発足**した。これまでに以下を公開している:",
      "- **MAI-Voice-1**: 1秒の演算で60秒分の音声を生成する音声生成（2025年8月）",
      "- **MAI-Transcribe-1**: 25言語対応の高精度文字起こし（2026年4月）",
      "- **MAI-Image-2**: Arena.ai の画像生成ランキングで Top 3 入り（2026年4月）",
      "**Project Polaris は同チーム初の本格的なコーディング特化モデル**にあたる。",
      "## なぜ今、Copilot を自社モデルに切替か",
      "背景には2つの直接的な要因がある。",
      "**1. OpenAI 契約の再交渉（2026年4月）**: これまで Microsoft の内部 AI チームは **フロンティアモデルの自前訓練を契約上制限**されていた。OpenAI への約 $130B 投資の見返りとして、両社の利害調整が行われていたためだ。4月に Microsoft / OpenAI 間の契約が再交渉され、**制約が緩和された**ことで、社内モデル開発が本格化できる状態になった。",
      "**2. Anthropic Claude Code の台頭**: 一方の競争側では、**Anthropic Claude Code が GitHub Copilot をエンタープライズ開発者シェアで抜き始めた**ことが報じられている。Cybernews、Windows News、Semafor 等が共通して「Microsoft が Claude Code への対抗を急ぐ」と論じた。GitHub Copilot は最近、Claude Opus 4.7（4/16）と Opus 4.8（5/28）に対応する形でモデルラインナップを拡張しているが、**「OpenAI と Anthropic の両方をモデル供給者として持つ」依存構造**そのものを変える必要が出ている。",
      "## Copilot Starter / Pro / Enterprise の3階層",
      "Build 2026 ではプラン構造の再編成も予定されている:",
      "- **Copilot Starter**: 無償プラン（Project Polaris の基本機能を含む見込み）",
      "- **Copilot Pro**: 個人開発者向けの中位プラン",
      "- **Copilot Enterprise**: 組織向け、フロンティアモデル選択肢（OpenAI / Anthropic も併用可能と推定）",
      "**「無償プランの拡充」**は、開発者の最初の接点を Microsoft の自社モデルで囲い込む戦略を示唆する。Anthropic（Claude Code 月 $20/$100/$200）や Cursor（月 $20）の Pro プランの価格帯に対する直接的な圧力になる。",
      "## Build 2026 のその他予想項目",
      "事前報道では Project Polaris 以外にも以下が予定されているとされる:",
      "- **Windows Agent Framework**: 自律 AI エージェントのための新 API 群",
      "- **Copilot Agent Mode**: マルチエージェント・コーディングワークフロー",
      "- **GitHub Copilot の自律エージェント機能**: agent view（5/12 の Anthropic 発表）に類する統合管理",
      "- **MAI 系の追加発表**: 推論モデル、画像、音声、エージェントを束ねる単一プラットフォーム化",
      "## 戦略的意味: OS × AI 戦争の新段階",
      "Microsoft の動きは、**Google I/O 2026（5/19、Gemini Intelligence の OS 統合）**、**Apple Intelligence 拡張（5/12 Google 提携）**、**Anthropic Claude Platform on AWS（5/12 GA）** と並ぶ「**OS × AI × 配布**」の再編成の一環だ。フロンティアモデルがコモディティ化に向かう中で、**「どの OS / プラットフォームに AI が入るか」**が事業価値を左右する段階に移行している。",
      "Microsoft の場合、Windows + Visual Studio + GitHub + Office + Azure という巨大配布チャネルを既に持ちながら、**モデル供給だけ OpenAI に依存**するのは長期的に弱点になる。Project Polaris の登場は「**配布も持つし、モデルも持つ**」という完成形に向けた一歩と読める。",
      "## 公式確認の現状",
      "**5月31日時点で、Microsoft 自身は Project Polaris や Copilot 階層再編について公式に発表していない**。本記事は Reuters と The Information の独占報道に Cybernews、Windows News、Let's Data Science、Technobezz 等が追随した報道時点情報として記述。Build 2026 の正式発表（6/2-3）を待つ必要がある。続報があれば追記または別記事で扱う。"
    ],
    "tables": [
      {
        "afterParagraph": 14,
        "caption": "Microsoft MAI のモデルラインナップ（公開時系列）",
        "headers": ["モデル", "種別", "公開時期", "備考"],
        "rows": [
          ["MAI-Voice-1", "音声生成", "2025年8月", "1秒の演算で60秒音声"],
          ["MAI-Transcribe-1", "STT", "2026年4月", "25言語対応"],
          ["MAI-Image-2", "画像生成", "2026年4月", "Arena.ai Top 3"],
          ["Project Polaris（仮名）", "コーディング", "2026年6月（Build 2026）", "GitHub Copilot 中核へ"]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Microsoft plans to unveil a new in-house coding model at its Build developer conference",
        "site": "Reuters / Technobezz",
        "url": "https://www.technobezz.com/news/microsoft-plans-to-unveil-a-new-in-house-coding-model-at-its-build-developer-conference-next-week"
      },
      {
        "title": "Microsoft Build 2026: Homegrown AI Models to Power GitHub Copilot",
        "site": "Windows News",
        "url": "https://windowsnews.ai/article/microsoft-build-2026-homegrown-ai-models-to-power-github-copilot.420887"
      },
      {
        "title": "Microsoft will unveil new homegrown AI models next week",
        "site": "Cybernews",
        "url": "https://cybernews.com/ai-news/microsoft-new-homegrown-ai-models-copilot-github/"
      },
      {
        "title": "Microsoft In-House AI Models: MAI Strategy vs OpenAI (2026)",
        "site": "Tech-Insider",
        "url": "https://tech-insider.org/microsoft-mai-in-house-ai-models-openai-2026/"
      }
    ]
  },
  "feature-china-ai-models-may-2026-qwen-kimi-ernie": {
    "body": [
      "5月の AI 業界は、米国フロンティアラボの集中アップデート（Anthropic Opus 4.8、Google Gemini 3.5 Flash、OpenAI GPT-5.5 Instant）と並行して、**中国の主要 AI ラボも大型モデルを連続投入**した。Qwen / Kimi / Ernie / GLM / Seedance と分野横断で、**ベンチマーク・コスト・オープンウェイト**の3軸で米中の差が一段縮まる月となった。本特集では公式値ベースで主要動向を整理する。",
      "## ① Alibaba Qwen 3.7 Max — Opus 4.6 を一部ベンチで上回る",
      "Alibaba は **5月19日に API を公開（Model Studio）し、5月20日の 2026 Alibaba Cloud Summit（杭州）で Qwen 3.7 Max を正式発表**した。",
      "**主要スペック・ベンチマーク（公式値）:**",
      "- **コンテキスト窓**: 1M トークン",
      "- **Artificial Analysis Intelligence Index**: 56.6",
      "- **SWE-Bench Pro**: 60.6（Claude Opus 4.6 を上回る）",
      "- **Terminal-Bench 2.0**: 69.7（Opus 4.6 を上回る）",
      "- **GPQA Diamond**: 92.4",
      "- **MCP-Atlas**: Opus 4.6 を上回る",
      "- **Extended thinking モード**: ネイティブ対応",
      "**価格は $2.50 / 入力 M トークン、$7.50 / 出力 M トークン** で、**Claude Opus 4.7 の約半額**。エージェント型コーディングタスクで DeepSeek V4 Pro と Claude Opus 4.6 を上回るとされる。",
      "## ② Moonshot Kimi K2.6 — オープンウェイトで GPT-5.4 を抜く",
      "**4月20日に Moonshot AI が公開**した **Kimi K2.6** は、**Modified MIT License のオープンウェイト**として配布される **1兆パラメータ**級のエージェント特化モデル。Hugging Face にも公開され、自前推論サーバへの載せ替えが可能だ。",
      "**主要ベンチマーク（公式値）:**",
      "- **SWE-Bench Verified**: 80.2%",
      "- **SWE-Bench Pro**: **58.6**（GPT-5.4 57.7、Claude Opus 4.6 53.4、Gemini 3.1 Pro 54.2 を上回る）",
      "- **マルチモーダル対応**: ネイティブ",
      "- **エージェント・スウォーム**: **最大300のサブエージェント並列実行**、4,000ステップを協調",
      "- **連続稼働**: 単一タスクで **12時間連続**実行可",
      "Kimi K2.6 は「**OSS が初めて GPT-5.4 (xhigh) を SWE-Bench Pro で上回った**」とコミュニティで広く話題になり、Claude Opus 4.8 の Dynamic Workflows（1,000サブエージェント）と並ぶ「**エージェントオーケストレーション**」の流れを示した。",
      "## ③ Baidu Ernie 5.1 — 推論・数学・マルチモーダルを底上げ",
      "Baidu は **Ernie 5.1** をリリース、**論理推論・数学計算・マルチモーダル生成**で大幅改善を発表した。エージェント能力の最適化と**推論コスト低減・応答速度向上**を同時に達成したとされる。コンテンツ作成・エンタープライズオフィス自動化・インテリジェント顧客サービスへの組み込みが想定されている。中国国内 B2B 市場での実装が中心。",
      "## ④ Zhipu GLM — オープンソース更新",
      "Zhipu AI は **GLM（オープンソース大型モデル）の更新版**を公開。コード生成、論理推論、専門領域 QA で改善。**個人開発者・小規模チーム向けは無償提供を継続**する方針。Apache 2.0 系のライセンスでカジュアル利用が可能な点が、商用 API 中心の米国フロンティアラボとの大きな違いだ。",
      "## ⑤ ByteDance Seedance 2.0 — 動画生成の質を一段引き上げ",
      "ByteDance は動画生成モデルを **Seedance 2.0** にアップグレード。**高精細の実写人物動画生成、インテリジェントシーン切替、ワンクリックでのテキスト→動画**生成に対応。ショート動画制作・ライブ配信素材生成で実用フェーズに入った。Sora 2、Runway Gen5、Veo に対する中国側の対抗軸として位置付けられる。",
      "## ⑥ DeepSeek V4（4月24日プレビュー、既報）",
      "5月の連続更新に先立ち、**DeepSeek V4-Pro（1.6T MoE / 49B active）と V4-Flash（284B / 13B）**が4月24日にプレビュー公開済み。Bloomberg は4/26に「正式版発表は国産チップ（Huawei Ascend 等）への統合を優先するため延期」と続報を出している。今回扱う5月モデル群が比較対象に DeepSeek V4 を含むのもこのためだ。",
      "## 3軸比較: 米中フロンティアモデル",
      "## 米中の役割分担と「第三極」化",
      "5月のリリース群を並べて分かるのは、**中国系モデルが3つの戦略軸で米国フロンティアと差別化**しようとしている点だ:",
      "**1. オープンウェイト戦略**: Kimi K2.6（1T、Modified MIT）、GLM、DeepSeek V4（公開済み）が**自社推論への載せ替えを許す**ライセンスで配布。Anthropic / OpenAI の API 専有戦略と対極で、規制業界・社内データ保護の用途では強い武器になる。",
      "**2. 価格対性能**: Qwen 3.7 Max が $2.50/$7.50 で Opus 4.7 の約半額、Kimi はオープンウェイトで実質ゼロ。**フロンティア性能をコモディティ価格帯に押し下げる**動きが継続している。",
      "**3. 国産チップ統合**: DeepSeek V4 の延期理由として明らかになった通り、**Huawei Ascend、Cambricon、Biren など国産半導体ベースの最適化**が並行進行。米国の輸出規制を前提に、サプライチェーンを国内完結させる中長期戦略が見える。",
      "## 課題と限界",
      "**1. ベンチマーク以外の評価**: 各社の公式値は公平な再現が難しい場合がある。実利用での hallucination 率、長文での coherence、特定言語（英語以外）での品質などは、ベンチマーク値とは別軸の評価が必要。",
      "**2. データ越境と規制**: 中国の AI 法・データ越境規制により、グローバル運用では設計上の制約が大きい。エンタープライズ採用では権限・地理リージョン分離が必要。",
      "**3. エコシステム接続性**: Hugging Face、MCP、IDE / Agent ツール群との接続性は、米国モデルが先行している。OSS モデルがクラウド以外で広く採用されるには、SDK・ドキュメント・コミュニティの充実が引き続き課題となる。",
      "## 5月の AI 業界全体像との接続",
      "Anthropic Opus 4.8（5/28）、Google I/O 2026（5/19〜、Gemini 3.5 Flash / Antigravity / Spark）、そして本特集の中国系5モデル更新を並べると、**米国フロンティアモデル × エージェント基盤** と **中国フロンティアモデル × オープンウェイト × 価格破壊** が、5月という同じ月にほぼ同期して動いた構図が浮かび上がる。**フロンティア競争はもはや3軸（米クローズド・米オープン寄り・中オープン寄り）になりつつある**——というのが、5月末時点の見立てだ。"
    ],
    "tables": [
      {
        "afterParagraph": 22,
        "caption": "中国系フロンティアモデルの主要スペック比較（公式値）",
        "headers": ["モデル", "リリース", "ベンチ要点", "コンテキスト", "価格・ライセンス"],
        "rows": [
          ["Qwen 3.7 Max", "5/20", "SWE-Pro 60.6、Terminal-Bench 69.7、GPQA 92.4", "1M トークン", "$2.50/$7.50 per M（クローズド）"],
          ["Kimi K2.6", "4/20", "SWE-Verified 80.2、SWE-Pro 58.6", "ネイティブ MM", "Modified MIT（オープンウェイト、1T params）"],
          ["DeepSeek V4 Pro", "4/24 プレビュー", "詳細未開示（公式 GA 延期）", "1M トークン", "オープンソース（1.6T MoE / 49B active）"],
          ["Ernie 5.1", "5月", "推論・数学・MM 改善（公式詳細値非公開）", "未公開", "クローズド（中国 B2B 中心）"],
          ["GLM 更新", "5月", "コード・論理・専門 QA 改善", "未公開", "オープンソース（個人無償）"],
          ["Seedance 2.0", "5月", "高精細実写動画生成", "—（動画生成）", "ByteDance 提供"]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Qwen 3.7 Max: Alibaba's New Flagship AI Model 2026",
        "site": "Digital Applied",
        "url": "https://www.digitalapplied.com/blog/qwen-3-7-max-alibaba-flagship-ai-model-2026"
      },
      {
        "title": "Alibaba teases new Qwen previews, highest-ranking Chinese AI models on Arena",
        "site": "South China Morning Post",
        "url": "https://www.scmp.com/tech/tech-trends/article/3354087/alibaba-teases-new-qwen-previews-highest-ranking-chinese-ai-models-arena"
      },
      {
        "title": "Kimi K2.6 — Moonshot AI",
        "site": "Kimi Blog",
        "url": "https://www.kimi.com/blog/kimi-k2-6"
      },
      {
        "title": "moonshotai/Kimi-K2.6",
        "site": "Hugging Face",
        "url": "https://huggingface.co/moonshotai/Kimi-K2.6"
      },
      {
        "title": "Latest Domestic AI Updates in May 2026: Large Model Upgrades & New AI Tools",
        "site": "AI Scope Hub",
        "url": "https://aiscopehub.com/latest-domestic-ai-updates-in-may-2026-large-model-upgrades-new-ai-tools/"
      },
      {
        "title": "Best Chinese AI Models 2026: Kimi K2.6, DeepSeek V3.2, Step 3.5 Flash, Qwen, GLM Compared",
        "site": "TokenMix",
        "url": "https://tokenmix.ai/blog/best-chinese-ai-models-2026-comparison-guide"
      }
    ]
  },
  "google-io-2026-gemini-3-5-flash-antigravity-spark-2026": {
    "body": [
      "Google が5月19日に開幕した **Google I/O 2026** で、Sundar Pichai CEO の基調講演を含む **100以上の発表**を行った。公式ブログ「100 things we announced at Google I/O 2026」が一斉公開され、**フロンティアモデル、エージェント基盤、OS 統合、Android XR ハードウェア、創造系生成 AI、新料金プラン**まで広範に投下された。本記事では中核トピックを整理する。",
      "## ① Gemini 3.5 Flash が即時 GA",
      "発表の中心は **Gemini 3.5 Flash** の一般提供（GA）開始だ。Flash クラスの**高速・低コスト**を維持しながら、**フロンティア級の知能と「アクション」**（ツール呼び出し・エージェント実行）を兼ね備える Google 初のモデルとされる。",
      "公式ベンチマーク:",
      "- **Terminal-Bench 2.1**: **76.2%**（Gemini 3.1 Pro を上回る）",
      "- **GDPval-AA**: **1656 Elo**",
      "- **MCP Atlas**: **83.6%**",
      "- 出力トークン/秒で**他のフロンティアモデルの4倍速**を主張",
      "提供チャネルは **Google Antigravity、Gemini API（Google AI Studio）、Android Studio** で同日 GA。**Gemini 3.5 Pro** は翌月リリース予定として「現在テスト中」と告知された。",
      "## ② Antigravity 2.0（エージェント基盤）",
      "**Google Antigravity** は Google のエージェント実行基盤で、I/O では **Antigravity 2.0** デスクトップアプリを**全世界向けに公開**した。Gemini 3.5 Flash を実行モデルとして使い、**Managed Agents** として動作する。Interactions API 経由でアプリに組み込むことも可能で、Google AI Studio からもアクセスできる。",
      "OpenAI Workspace Agents（4/22）や Anthropic Claude Code agent view（5/12）、Cursor の Microsoft Teams 統合（5/11）と並ぶ、「**エージェントオーケストレーションの標準形**」をモデルベンダー側からも提示した格好だ。",
      "## ③ Gemini Spark（パーソナルエージェント）",
      "**Gemini Spark** は Gemini 3.5 を基盤に Antigravity 上で動作する**パーソナルエージェント**。「**重要な行動を取る前にユーザーに確認する**」設計を強調し、自律性と安全性のバランスを取る。**来週から AI Ultra 加入者向けにベータ提供**（米国先行）。プロダクトとしては「very early」と Google 自身が認めている段階だ。",
      "## ④ Gemini Omni（マルチモーダル統合）",
      "**Gemini Omni** は **画像・音声・動画・テキストの任意入力を取り、現実世界の知識に基づく動画を出力**する新シリーズ。Gemini の推論能力と Nano Banana 2（画像）/ Veo（動画）/ Lyria 3 Pro（音楽）といった**専用生成モデル**を統合する形態をとる。**Gemini アプリ、Google Flow、YouTube Shorts** で既に稼働中。",
      "## ⑤ Gemini Intelligence の OS 統合拡大",
      "5月12日の **The Android Show: I/O Edition** で先行発表されていた **Gemini Intelligence** は、I/O 2026 本会場で**展開範囲が拡大**された。Android、ChromeOS、Wear OS、Android Auto という Google の主要 OS 全てに**OS レベルで統合**され、**画面コンテキストを観測し、ユーザーが Assistant を開かずにマルチステップの動作を完了**する設計だ。",
      "Microsoft の **Copilot+ PC**、Apple の **Apple Intelligence**、**Anthropic Claude on Apple Siri**（4/22 提携確認）と並んで、**「OS × AI」**競争が完全に出揃った。",
      "## ⑥ Android XR 眼鏡（Samsung 製）",
      "ハードウェアでは **Samsung 製の Android XR スマートグラス**が発表された。**iPhone サポート版のオーディオグラス**も今秋発売予定で、Apple Vision Pro と異なるアプローチ（**音声中心 × Gemini × クロスプラットフォーム**）を打ち出している。",
      "## ⑦ Google Flow / Flow Music モバイル展開",
      "創造系では **Flow（Android ベータ、iOS は近日）と Flow Music（iOS 提供開始、Android は近日）**がモバイル単体アプリ化。動画・音楽生成のワークフローがデスクトップから持ち出される。",
      "## ⑧ 新料金プラン: AI Ultra $100/月",
      "新料金は **AI Ultra プラン $100/月**。**Gemini Spark、Gemini 3.5、Antigravity 2.0、Flow / Flow Music、Veo、Lyria、Imagen、Nano Banana 2** を含む「**開発者・クリエイター・パワーユーザー向け統合パック**」。OpenAI ChatGPT Pro（$200/月）や Anthropic Claude Max（$100-200/月）と直接競合する位置付け。",
      "## 解釈: 「OS × AI」と「エージェント基盤」の本格出揃い",
      "Google I/O 2026 の総合的な含意は次の3点だ:",
      "1. **モデル本体**: Gemini 3.5 Flash の GA で、**Flash 系列が「速くて安いだけ」から「速くて安くて強い」へ**。OpenAI GPT-5.5 / Anthropic Claude Opus 4.7 とフロンティア競争の三つ巴がさらに加速",
      "2. **エージェント基盤**: Antigravity 2.0 と Gemini Spark で、Google も「**ユーザー代理のオーケストレーター**」を本格投入。Claude Code agent view（5/12）、OpenAI Workspace Agents（4/22）と並ぶ標準形が3社で揃った",
      "3. **OS 統合**: Gemini Intelligence の OS レベル展開で、**Android / Chrome / Wear / Auto を横断する単一の AI レイヤー**が確立。Apple Intelligence や Microsoft Copilot+ PC との「**OS × AI 戦争**」の本陣が明確化",
      "## 同時期の Anthropic との対比",
      "Google I/O 2026 と **Anthropic の Claude Opus 4.8（5/28、別記事）**を並べると、5月後半は**フロンティアモデルとエージェント基盤の集中アップデート週**となった。OpenAI 側の対抗（Deployment Company、Daybreak、Workspace Agents）も含めると、「**モデル × エージェント × OS × 配布**」のレイヤー全体でほぼ同期した動きが取られていることが分かる。"
    ],
    "tables": [
      {
        "afterParagraph": 1,
        "caption": "Google I/O 2026 主要発表（一部）",
        "headers": ["カテゴリ", "発表内容", "提供時期"],
        "rows": [
          ["フロンティアモデル", "Gemini 3.5 Flash GA", "即日"],
          ["フロンティアモデル", "Gemini 3.5 Pro", "翌月リリース予定"],
          ["エージェント基盤", "Antigravity 2.0 デスクトップアプリ", "即日（全世界）"],
          ["パーソナルエージェント", "Gemini Spark（Beta）", "来週（AI Ultra 加入者・米国先行）"],
          ["マルチモーダル", "Gemini Omni", "Gemini アプリ・Flow・YouTube Shorts で稼働中"],
          ["OS 統合", "Gemini Intelligence（Android/ChromeOS/Wear/Auto）", "順次展開"],
          ["ハードウェア", "Samsung Android XR グラス", "公開"],
          ["ハードウェア", "Android XR オーディオグラス（iPhone 対応）", "今秋"],
          ["クリエイティブ", "Flow / Flow Music モバイルアプリ", "Flow=Android Beta、Music=iOS"],
          ["料金", "AI Ultra プラン", "$100/月"]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "100 things we announced at Google I/O 2026",
        "site": "Google Blog",
        "url": "https://blog.google/innovation-and-ai/technology/ai/google-io-2026-all-our-announcements/"
      },
      {
        "title": "Google I/O 2026: Sundar Pichai's opening keynote",
        "site": "Google Blog",
        "url": "https://blog.google/innovation-and-ai/sundar-pichai-io-2026/"
      },
      {
        "title": "With Gemini 3.5 Flash, Google bets its next AI wave on agents, not chatbots",
        "site": "TechCrunch",
        "url": "https://techcrunch.com/2026/05/19/with-gemini-3-5-flash-google-bets-its-next-ai-wave-on-agents-not-chatbots/"
      },
      {
        "title": "Innovations from Google I/O 26 on Google Cloud",
        "site": "Google Cloud Blog",
        "url": "https://cloud.google.com/blog/products/ai-machine-learning/innovations-from-google-io-26-on-google-cloud"
      },
      {
        "title": "Everything Google announced at I/O 2026",
        "site": "9to5Google",
        "url": "https://9to5google.com/2026/05/19/google-io-2026-news/"
      }
    ]
  },
  "anthropic-claude-opus-4-8-dynamic-workflows-2026": {
    "body": [
      "Anthropic が5月28日、フラッグシップ **Claude Opus 4.8** を公開した。Opus 4.7（4/16 GA）から約6週間という極めて短いサイクルでの世代交代で、Anthropic はモデル更新の頻度を一段引き上げている。価格は **$5/$25 per M トークン**（入力/出力）で 4.7 据え置き、**Anthropic API、Amazon Bedrock、Google Cloud Vertex AI、Microsoft Foundry** に同日 GA で展開された。",
      "## 主要ベンチマーク（Anthropic 公式）",
      "Opus 4.8 のベンチマーク改善は以下のとおり:",
      "- **SWE-bench Verified**: **88.6%**（4.7 比 +1.0pt、4.7 は 87.6%）",
      "- **SWE-bench Pro**: **69.2%**（前世代 64.3% から +4.9pt）",
      "- **USAMO 2026（数学）**: **96.7%**（前世代 **69.3% → 大幅改善**）",
      "- **GraphWalks F1（1M トークン長コンテキスト）**: **68.1%**（前世代 40.3% から大きく改善）",
      "- **エージェント型コンピュータ使用**: 82.8% → 83.4%",
      "- **知識作業スコア**: 1753 → 1890",
      "USAMO（米国数学オリンピック）と GraphWalks の伸びが特に大きく、Anthropic は「**より厳しい推論と長文脈の追跡能力**」を中心に底上げしたと説明している。",
      "## Anthropic の言う3つの改善軸",
      "Opus 4.8 を「より鋭い判断力（sharper judgement）」「**より honest な進捗報告**」「**より長時間自律実行できる**」とした。早期テスターによれば、Opus 4.8 は**作業中の不確実性をより頻繁にフラグし、根拠のない主張を以前より避ける**傾向があるとされる。Mythos Preview（4/7、Project Glasswing 限定）の安全姿勢を「公開可能版」に持ち込んだ位置付けと読める。",
      "## Dynamic Workflows（Claude Code リサーチプレビュー）",
      "Opus 4.8 と同時に投入された目玉機能が **Dynamic Workflows** だ。Claude Code 上で、Claude 自身が**オーケストレーションスクリプトを書き、1セッション内で最大1,000の並列サブエージェント**を起動し、繰り返し検証しながらタスクを進められる。途中で中断・再開できる resumable state も持ち、長時間の解析・大規模リファクタリング・横断的な探索に向く。",
      "提供は **Max / Team / Enterprise（管理者有効化条件付き）/ Claude API / Bedrock / Vertex / Foundry**。研究プレビュー段階のため、本番ワークロードでの利用は規模・コスト・失敗時挙動の確認を経てからが推奨される。",
      "## Fast Mode が 2.5倍速・3倍安く",
      "もう一つの大きな変更が **Fast Mode** だ。Opus 4.8 の Fast Mode は **2.5倍高速**、価格は **$10/M 入力・$50/M 出力**で、**前世代の Fast Mode 比で約3倍安い**。標準モード（$5/$25）と Fast Mode（$10/$50）で**「コスト or レイテンシ」のトレードオフを明示的に選べる**設計で、エージェント運用での待ち時間と料金のバランスを取りやすくなった。",
      "## 5月の Anthropic 集中投下の流れ",
      "Opus 4.8 リリースは、5月の Anthropic 集中アップデートの締めくくりにあたる:",
      "- **5/6** SpaceX Colossus 1 借り上げ（220K GPU、300+ MW）でレート上限緩和",
      "- **5/12** Claude Platform on AWS GA、Claude Code agent view、Claude for Legal の同日3本立て",
      "- **5/13** $30-50B 調達・$900B 評価額交渉報道、Ramp で業務利用シェア逆転",
      "- **5/14** Stainless 買収報道（OpenAI / Google も使う SDK 基盤）",
      "- **5/28** **Opus 4.8 リリース + Dynamic Workflows + 安い Fast Mode（本記事）**",
      "コンピュート供給拡張 → 配布チャネル整備 → 開発者接点掌握 → モデル本体の更新 と、レイヤーを横断する動きを一気に揃えた。",
      "## 公式コメント要約",
      "Anthropic は公式ブログで「Opus 4.8 は long-running agentic tasks（長時間自律エージェント）に向けた重要な一歩」と位置付け、Dynamic Workflows と組み合わせることで「**1セッションで数十〜数百のサブタスクを並列にこなす本格的なエージェントオーケストレーション**」が可能になるとしている。GitHub Copilot や Cursor、Windsurf 等のサードパーティ IDE / CLI への波及は数日以内に始まる見込み。"
    ],
    "tables": [
      {
        "afterParagraph": 2,
        "caption": "Claude Opus 4.8 vs 4.7 主要ベンチマーク（Anthropic 公式値）",
        "headers": ["ベンチマーク", "Opus 4.8", "Opus 4.7", "差分"],
        "rows": [
          ["SWE-bench Verified", "88.6%", "87.6%", "+1.0pt"],
          ["SWE-bench Pro", "69.2%", "64.3%", "+4.9pt"],
          ["USAMO 2026（数学）", "96.7%", "69.3%", "+27.4pt"],
          ["GraphWalks F1（1M コンテキスト）", "68.1%", "40.3%", "+27.8pt"],
          ["エージェント・コンピュータ使用", "83.4%", "82.8%", "+0.6pt"],
          ["知識作業スコア", "1890", "1753", "+137"]
        ]
      },
      {
        "afterParagraph": 12,
        "caption": "Opus 4.8 価格体系",
        "headers": ["モード", "入力 / Mトークン", "出力 / Mトークン", "備考"],
        "rows": [
          ["Standard", "$5", "$25", "Opus 4.7 据え置き"],
          ["Fast Mode", "$10", "$50", "2.5倍高速、前世代 Fast 比3倍安い"]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Introducing Claude Opus 4.8",
        "site": "Anthropic",
        "url": "https://www.anthropic.com/news/claude-opus-4-8"
      },
      {
        "title": "Anthropic releases Opus 4.8 with new 'dynamic workflow' tool",
        "site": "TechCrunch",
        "url": "https://techcrunch.com/2026/05/28/anthropic-releases-opus-4-8-with-new-dynamic-workflow-tool/"
      },
      {
        "title": "Anthropic Ships Claude Opus 4.8 Alongside Dynamic Workflows and Cheaper Fast Mode",
        "site": "MarkTechPost",
        "url": "https://www.marktechpost.com/2026/05/28/anthropic-ships-claude-opus-4-8-alongside-dynamic-workflows-and-cheaper-fast-mode-with-workflows-capped-at-1000-subagents/"
      },
      {
        "title": "Anthropic's Claude Opus 4.8 is here with 3X cheaper fast mode",
        "site": "VentureBeat",
        "url": "https://venturebeat.com/technology/anthropics-claude-opus-4-8-is-here-with-3x-cheaper-fast-mode-and-near-mythos-level-alignment"
      }
    ]
  },
  "anthropic-stainless-acquisition-sdk-infrastructure-2026": {
    "body": [
      "**The Information** が5月13日、Anthropic が SDK 自動生成スタートアップ **Stainless** を **少なくとも $300 million** で買収する交渉が **advanced stage（最終段階）** に入っていると報じた。複数のメディア（Reuters、Investing.com、Bloomberg 系、Open Source For You 等）が翌5/13-14 に同内容を追随報道している。Anthropic 自身は5月14日時点で買収交渉について公式コメントを出していない。",
      "## Stainless とは何か",
      "**Stainless** は NY 拠点の4年前創業のスタートアップ。AI を使って **OpenAPI / 関連スキーマから各種プログラミング言語の公式 SDK を自動生成**する基盤を提供しており、API ベンダーは「API 仕様を Stainless に渡すと、TypeScript / Python / Go / Java / Ruby 等の SDK が完成形で出力される」体験を得られる。",
      "現在のクライアントには**OpenAI、Anthropic、Google、Meta、Cloudflare** といった主要 AI モデル / インフラベンダーが並んでおり、彼らの**公式 SDK の中身は Stainless で生成された**ものだ。OpenAI は過去に自社 SDK 開発を試みたが**メンテナンス負荷が高すぎて打ち切り**、Stainless 経由に切り替えたという経緯を The Information は報じている。",
      "## 評価額: 2024年末の倍以上",
      "Stainless の前回評価額は **2024年12月時点で $150M**（Series A）。今回の買収額**$300M 以上**は**2倍以上のプレミアム**で、AI モデルの飛躍的普及と SDK 利用増を直接反映している。",
      "## なぜ戦略的に重要か",
      "**1. 競合の開発者接点を握る**: Anthropic が買収後も Stainless を中立に運営する保証がない限り、**OpenAI / Google の公式 SDK 更新が Anthropic の意思決定に依存**することになる。CLI 系・エージェントツールの裏では SDK が動いており、API のバージョンアップ・新エンドポイント対応・型定義の品質が、開発者体験に直結する。",
      "**2. SDK 自動生成は AI ベンダーにとって不可欠なインフラ**: 各社が短いサイクルで API を進化させる中（直近6週間で Claude Opus 4.7 / GPT-5.5 / DeepSeek V4 がリリース）、**SDK の手作業メンテナンスは現実的ではない**。Stainless はその「自動更新パイプライン」を提供する。",
      "**3. データのフィードバック**: SDK 生成基盤を持てば、**どのモデルがどの言語からどう呼ばれるかの利用データ**にもアクセスが可能になる。ただし買収後の運営方針次第。",
      "## 業界の論点: 中立性と分離",
      "OpenAI と Google が今後も Stainless を使い続けるかは未確定だ。**競合のインフラに依存し続けるリスクをどう評価するか**が、両社にとっての焦点になる。考えられる選択肢:",
      "- **継続利用**: Anthropic が独立運営を約束し、契約とコードベース分離（China Wall）を整える",
      "- **代替プロバイダ移行**: 別の SDK 自動生成サービスや内製に戻る",
      "- **手動 SDK 開発**: 最大手だけは自前に戻す（コスト・速度面で困難）",
      "OpenAI は過去に内製に挫折しているため、短期的には **継続利用 + 中立運営の契約交渉**が現実的との見方が多い。",
      "## 連続する動きの中の位置付け",
      "Anthropic は5月以降、以下を立て続けに進めている:",
      "- **5/6** SpaceX Colossus 1 借り上げ（220K GPU、300+ MW）",
      "- **5/12** Claude Platform on AWS GA、Claude Code agent view、Claude for Legal の同日3本立て",
      "- **5/13** $30-50B 調達交渉（評価額 $900-950B）報道、Ramp で業務利用シェア逆転",
      "- **5/14** Stainless 買収報道（本記事）",
      "**コンピュート供給 → モデル配布 → 業界別パッケージング → 開発者接点**と、レイヤーごとに**買い揃え・契約・統合**が並列で進行している構図だ。OpenAI も Deployment Company + Tomoro 買収（5/11）、Daybreak（5/11-12）と対抗するが、SDK 基盤を一気に押さえに行く Anthropic の動きは、配布レイヤーで一段抜け出す可能性を示す。",
      "## 公式確認の現状",
      "**5月14日時点で、Anthropic も Stainless も買収交渉について公式に確認していない**。本記事は The Information の独占報道に Reuters、Investing.com、複数の業界メディアが追随した報道時点情報として記述している。クローズの有無、最終的な買収額、運営方針は今後の正式発表を待つ必要がある。"
    ],
    "tables": [
      {
        "afterParagraph": 3,
        "caption": "Stainless の概要",
        "headers": ["項目", "内容"],
        "rows": [
          ["所在", "ニューヨーク"],
          ["創業", "2022年（約4年前）"],
          ["前回評価額", "$150M（2024年12月、Series A）"],
          ["買収交渉額", "$300M 以上（2倍以上のプレミアム）"],
          ["主要クライアント", "OpenAI、Anthropic、Google、Meta、Cloudflare 等"],
          ["提供価値", "API スキーマから多言語 SDK を AI で自動生成・更新"]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Anthropic in Talks to Buy Developer Tools Startup Used by OpenAI, Google",
        "site": "The Information",
        "url": "https://www.theinformation.com/articles/anthropic-talks-buy-developer-tools-startup-used-openai-google"
      },
      {
        "title": "Anthropic in talks to buy dev tools startup for $300 mln - The Information",
        "site": "Investing.com / Reuters",
        "url": "https://www.investing.com/news/stock-market-news/anthropic-in-talks-to-buy-dev-tools-startup-for-300-mln-the-information-4683007"
      },
      {
        "title": "Anthropic Eyes $300M Stainless Acquisition To Strengthen AI Infrastructure",
        "site": "Open Source For You",
        "url": "https://www.opensourceforu.com/2026/05/anthropic-eyes-300m-stainless-acquisition-to-strengthen-ai-infrastructure/"
      }
    ]
  },
  "anthropic-900b-valuation-funding-overtakes-openai-2026": {
    "body": [
      "Anthropic が新規資金調達の最終調整に入っていることが、**Bloomberg（5/12）と New York Times（5/12）の報道**で明らかになった。両社が複数の関係者を引いて伝えるところによれば、調達規模は **$30 billion から $50 billion**、評価額は **$900 billion から $950 billion**。これが確定すれば、**3月に確定した OpenAI の $852 billion 評価額を上回り、世界で最も評価額の高い AI スタートアップ**になる。クローズは月内が目標で、**スタートアップ史上最速で $1 trillion に到達する候補**となる。",
      "## 何が新しいか",
      "Anthropic は4月以降、巨大なコンピュート契約を立て続けに獲得してきたが、これらは**コンピュート支出と一体化した投資**だった: ",
      "- **Amazon の最大 $25B 追加投資**（4/20、評価額 $380B、AWS 10年で $100B+ 支出）",
      "- **Google の最大 $40B 投資**（4/24、即時 $10B + 業績目標達成で $30B、評価額 $350B）",
      "- **SpaceX Colossus 1 借り上げ**（5/6、220K GPU、300+ MW）",
      "今回の $30-50B ラウンドは、**特定クラウドへの紐付けがない一般株式調達**と見られる点が異なる。Bloomberg は「複数のグローバル投資家との早期協議段階」と伝えている。Anthropic 自身は調達の事実を公式に確認していない。",
      "## 売上の急加速",
      "Anthropic CEO の Dario Amodei は5月6日の **Code with Claude** カンファレンスで、**ARR（年換算売上）が $30 billion を突破**したと公表した。これは1年前の **$1.5B 規模からの実質20倍成長**で、2025年末時点（約 $9 billion）から半年弱で3倍超に増えた計算になる。",
      "売上ドライバーは API（Claude API、Claude Code 経由）が中心で、エンタープライズ・開発者層に深く食い込んでいる。コンシューマー ChatGPT に依存する OpenAI とは収益構造が異なり、本質的な利用に直結する売上の比率が高いとされる。",
      "## 業務利用シェアでも OpenAI を抜く（Ramp 指数）",
      "資金調達と並行して、**業務利用面でも歴史的な逆転**が起きている。決済プラットフォームの Ramp が公表する **AI Index**（B2B カードの実際の利用データを基にした AI ベンダー採用率）で、**2026年4月に Anthropic の業務利用シェアが 34.4%（前月比 +3.8pt）まで上昇し、初めて OpenAI を上回った**。",
      "Ramp の指数は「自社決済データを匿名化集計したもの」であり、実際の支出から AI 利用を測る指標として注目されている。Anthropic Project Deal（4/25、エージェント間商取引実験）や Claude for Legal（5/12、業界別パッケージング）といった業務向け施策の積み重ねが、数字として現れた格好だ。",
      "## OpenAI 側の対応",
      "OpenAI も独自の打ち手を進めている。5/11 には **Deployment Company**（OpenAI のエンタープライズ展開専門子会社、初期 $4B 投資）を立ち上げ、AI コンサルティングの **Tomoro 買収**で約150名のデプロイメント専門エンジニアを取り込んだ。5/11-5/12 には **Daybreak**（Codex Security をベースにした脆弱性検出・パッチ検証イニシアチブ）も公開し、サイバー領域で Anthropic Mythos Preview への対抗を強めている。",
      "また、EU からの要求に対しては **OpenAI は GPT-5.5-Cyber を提供することにコミット**した一方、**Anthropic は Mythos Preview の同等アクセス提供をまだ確約していない**（Cryptobriefing、CNBC 報道）。規制対応では OpenAI が一歩先行する構図だ。",
      "## 何を意味するか",
      "**1. 評価額の構造**: Anthropic の評価額が OpenAI を上回るのは初。これは「AI 業界でフロンティアラボがどう評価されるか」の基準が、**コンシューマーリーチ（ChatGPT のユーザー数）から、企業利用 × 開発者エコシステム × ARR の伸び**に重心移動した証左でもある。",
      "**2. 「投資家3つ巴」の継続**: Amazon・Google が直接出資し、SpaceX もコンピュート供給で食い込む。今回のラウンドが純粋な財務投資家中心なら、Anthropic は**特定クラウドへの過度なロックインを避ける**戦略を進めることになる。",
      "**3. リスク**: $30B ARR は AI 企業として歴史的水準だが、$900B 評価額は **30倍 ARR マルチプル**。Microsoft が GitHub Copilot に Claude を採用する一方で、独自モデル（OpenAI 経由含む）を強化するという構造もあり、配布チャネル依存のリスクは残る。",
      "**4. $1T 到達のシナリオ**: 月内クローズが実現すれば、スタートアップが**創業から約5年で評価額 $1T**に届くのは過去最速。OpenAI も同水準ラウンドを準備していると報じられており、両社が**前後して $1T を超えるレース**になる可能性がある。",
      "## 公式確認の現状",
      "5月13日時点で、**Anthropic 自身は今回のラウンドを公式に確認していない**。Bloomberg は「複数の関係者からの情報」、New York Times は Mike Isaac の記事として伝えている。クローズまでの最終的な条件・引受先・実際の評価額は今後の正式発表を待つ必要がある。本記事は両社の報道に基づく時点情報として位置付ける。"
    ],
    "tables": [
      {
        "afterParagraph": 7,
        "caption": "Anthropic の主要資金調達・コンピュート契約（2026年4-5月）",
        "headers": ["日付", "内容", "規模", "評価額・条件"],
        "rows": [
          ["4/20", "Amazon が追加投資（即時 $5B + 条件付き $20B）", "最大 $25B", "評価額 $380B（即時分）"],
          ["4/24", "Google が投資（即時 $10B + 業績達成で $30B）", "最大 $40B", "評価額 $350B（即時分）"],
          ["5/6", "SpaceX Colossus 1 借り上げ", "220K GPU / 300+ MW", "コンピュート契約（評価額には関与せず）"],
          ["5/12-5/13", "$30-50B ラウンド交渉中（複数報道）", "$30-50B", "評価額 $900-950B"]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Anthropic In Talks to Raise $30 Billion at $900 Billion Valuation",
        "site": "Bloomberg",
        "url": "https://www.bloomberg.com/news/articles/2026-05-12/anthropic-in-talks-to-raise-30-billion-at-900-billion-valuation"
      },
      {
        "title": "Sources: Anthropic could raise a new $50B round at a valuation of $900B",
        "site": "TechCrunch",
        "url": "https://techcrunch.com/2026/04/29/sources-anthropic-could-raise-a-new-50b-round-at-a-valuation-of-900b/"
      },
      {
        "title": "Anthropic in talks for funding at a valuation as high as $950 billion",
        "site": "Sherwood News",
        "url": "https://sherwood.news/tech/anthropic-in-talks-for-funding-at-a-valuation-as-high-as-950-billion-which-would-make-it-bigger-than-openai/"
      },
      {
        "title": "Anthropic beats OpenAI on business adoption",
        "site": "Ramp AI Index",
        "url": "https://ramp.com/leading-indicators/ai-index-may-2026"
      },
      {
        "title": "EU confirms OpenAI offers access to cybersecurity model, Anthropic lags behind",
        "site": "Crypto Briefing",
        "url": "https://cryptobriefing.com/eu-openai-cybersecurity-model-anthropic-lags/"
      }
    ]
  },
  "anthropic-claude-for-legal-plugins-cocounsel-2026": {
    "body": [
      "Anthropic が5月12日、法務専用のプラグイン・コネクタ・データ統合スイート **Claude for Legal** を公開した。**12 分野**の実務プラグインに **100以上のスキル・コマンド**、**20を超える MCP コネクタ**、**Microsoft 365（Word / Excel）統合**、定時実行型の **Managed Agent** までを束ねた包括的な業界別パッケージで、Anthropic が**特定産業に特化したコレクション**を公式 OSS として配布する初めての規模の取り組みだ。リポジトリは **Apache 2.0** で [github.com/anthropics/claude-for-legal](https://github.com/anthropics/claude-for-legal) に公開（執筆時点で **338 stars / 62 forks**）。",
      "## 12 分野の実務プラグイン",
      "提供されるプラグインは以下の通り（カッコ内は代表的なスキル例）:",
      "- **commercial-legal**: ベンダー契約・NDA・SaaS MSA レビュー",
      "- **corporate-legal**: M&A デューデリジェンス・クロージングチェックリスト",
      "- **employment-legal**: 雇用契約レビュー・州別解雇リスク判定",
      "- **privacy-legal**: GDPR / DSAR 対応起草",
      "- **product-legal**: 製品ローンチレビュー",
      "- **regulatory-legal**: 規制監視",
      "- **ai-governance-legal**: AI ガバナンス",
      "- **ip-legal**: 商標クリアランス検索・知財管理",
      "- **litigation-legal**: クレームチャート作成・訴訟管理",
      "- **legal-clinic**: ロースクール診療所向け",
      "- **law-student**: 法学生向け学習支援（ソクラテス式ドリル等）",
      "- **legal-builder-hub**: スキル検出・QA（**隠しコンテンツ / インジェクション / ライセンス / 鮮度チェック**を実行）",
      "外部プラグインとして **CoCounsel Legal**（Thomson Reuters）も含まれており、ベンダー側のサポート対象として個別契約に紐付く。",
      "## Thomson Reuters CoCounsel が Claude Agent SDK で全面リビルド",
      "同日発表された注目の提携は、**Thomson Reuters が CoCounsel Legal を Anthropic の Claude Agent SDK で全面的に作り直した**こと。CoCounsel は **107の国・地域で100万の専門家が使う**法務 AI で、計画立案・ツール選択・権威ある内容の取得・ワークフロー途中での適応までを行う「**エージェント型システム**」に進化した。Claude 側からは MCP コネクタとして呼び出せるため、法律家は普段の Claude の会話画面から、**引用根拠つきの法務ワークプロダクト**を直接生成できる。",
      "## 20超の MCP コネクタ",
      "Claude を既存の法務インフラに接続するため、以下のような MCP コネクタが揃う:",
      "- **法務調査**: CourtListener、Trellis、Descrybe、Solve Intelligence、LexisNexis、Thomson Reuters",
      "- **契約管理（CLM）/ ドキュメント管理（DMS）**: Ironclad、DocuSign、iManage、NetDocuments、Box",
      "- **生産性**: Slack、Google Drive、Linear、Jira、Asana",
      "- **訴訟・ケース管理**: Everlaw、Aurora、Courtroom5",
      "## Managed Agent: 定時実行で法務業務を自動化",
      "Anthropic が4月に公開した **Claude Managed Agents** をベースに、法務向けの定時実行エージェントが含まれている:",
      "- **renewal-watcher**: 契約更新期限の監視",
      "- **docket-watcher**: 法廷提出物の監視",
      "- **reg-monitor**: 規制変更の監視",
      "- **launch-radar**: 製品ローンチの追跡",
      "- **diligence-grid**: M&A デューデリジェンスの進捗管理",
      "`scripts/deploy-managed-agent.sh` で `ANTHROPIC_API_KEY` を渡してデプロイする実装が公開されている。",
      "## Microsoft 365 / Claude Cowork 統合",
      "Word のサイドバーから `/` コマンドでプラグイン機能を起動し、追跡変更モードでレビュー結果を返す設計。Excel 出力にも対応する。**Claude Cowork** の Customize → Browse plugins からインストールでき、**Claude Code** からは `/plugin marketplace add` と `/plugin install <name>@claude-for-legal` で導入できる。",
      "## 安全運用への設計: Cold-start interview と Citation guard rail",
      "重要な点として、各プラグインは導入時に **cold-start interview** を実行することが推奨されている。これによりユーザーの practice profile（取扱分野・準拠州・既往の契約スタイル等）が生成され、全スキルがそのプロファイルから読み込んで出力する。スキップするとジェネリックな出力になる。",
      "また、研究系コネクタを接続しないと **Citation guard rail** が引用を検証できず、出力に `[verify]` フラグが付く。Anthropic は明示的に「**すべての出力は attorney review の対象**」「法的アドバイスではなくドラフト」とリポジトリに記載しており、AI が独立して法務判断をする想定にはなっていない。",
      "## 採用の背景: 法務職が「開発者の次に Claude を使う」職種に",
      "Anthropic の associate general counsel Mark Pike によれば、**2月の前段リリース以降、法務職は開発者を除いて最も Claude を使う職業**になった。同社の直近の法務向けウェビナーには **20,000人以上の法務専門家**が参加し、Anthropic にとって過去最大の法務系セッションとなった。Big Law と呼ばれる大手ローファームが Claude を採用する事例も Fortune 等が報じている。",
      "## 業界文脈: AI 法務サービスの本格競争へ",
      "TechCrunch は「AI 法務サービスが過熱しており、Anthropic がそこに加わった」と報じた。既存プレイヤー（Harvey、Casetext / CoCounsel、Lexis+ AI、Westlaw Precision）が市場を牽引してきたが、今回 Anthropic は **OSS で公開し、自社の Claude Agent SDK を中核に据える**ことで、ベンダーロックインの少ない選択肢を提示する形になった。",
      "5月12日は Anthropic にとって、Claude Platform on AWS GA（同日）、Claude Code agent view（同日）、そして本記事の Claude for Legal の **同日3本立て**となった。Cursor の Microsoft Teams 統合（5/11）、Google の Googlebook 発表（5/12）と合わせ、**「AI のフロンティアモデル競争」から「業界別パッケージング × 配布チャネル」競争へ**の重心移動がはっきり見える一週間となっている。"
    ],
    "primarySources": [
      {
        "title": "anthropics/claude-for-legal",
        "site": "GitHub",
        "url": "https://github.com/anthropics/claude-for-legal"
      },
      {
        "title": "Anthropic Announces Legal Practice Plug-Ins for Claude, Legal Tech Integrations",
        "site": "Law.com",
        "url": "https://www.law.com/legaltechnews/2026/05/12/anthropic-announces-legal-practice-plug-ins-for-claude-legal-tech-integrations/"
      },
      {
        "title": "Thomson Reuters and Anthropic Expand Partnership to Connect Claude with CoCounsel Legal",
        "site": "PR Newswire",
        "url": "https://www.prnewswire.com/news-releases/thomson-reuters-and-anthropic-expand-partnership-to-connect-claude-with-cocounsel-legal-302769890.html"
      },
      {
        "title": "Anthropic Goes All-In on Legal, Releasing More Than 20 Connectors and 12 Practice-Area Plugins",
        "site": "LawSites",
        "url": "https://www.lawnext.com/2026/05/anthropic-goes-all-in-on-legal-releasing-more-than-20-connectors-and-12-practice-area-plugins-for-claude.html"
      },
      {
        "title": "The AI legal services industry is heating up — Anthropic is getting in on the action",
        "site": "TechCrunch",
        "url": "https://techcrunch.com/2026/05/12/the-ai-legal-services-industry-is-heating-up-anthropic-is-getting-in-on-the-action/"
      }
    ]
  },
  "cursor-microsoft-teams-integration-2026": {
    "body": [
      "Cursor が5月11日、**Microsoft Teams 統合**を公式に公開した。Teams ユーザーは、チャネル内のメッセージで **`@Cursor` をメンション**するだけでクラウドエージェントにタスクを委任でき、逆に Cursor 側のリポジトリ情報・エージェント実行履歴を Teams に引き出すこともできる。3月の **Cursor Automations**（Slack / GitHub / PagerDuty トリガー）に続き、Cursor は「**チャットアプリ起点で動くエージェント**」のラインアップに Microsoft Teams を追加した格好だ。",
      "## 使い方: `@Cursor` メンションでタスク委任",
      "ユーザーは Teams のチャネルやスレッドで `@Cursor` を呼び出し、自然言語でタスクを書く。Cursor 側のエージェントは以下を自律的に処理する:",
      "- **リポジトリの自動選択**: プロンプトの文脈と直近のエージェント活動履歴から、適切なリポジトリを選ぶ",
      "- **モデルの自動選択**: タスク内容に応じてモデルを切り替える",
      "- **スレッド全体の文脈取り込み**: 該当スレッドの会話を最初から最後まで読み、関係者の議論を踏まえて判断する",
      "- **PR 作成**: 実装を完了したらチームレビュー用のプルリクエストを作成",
      "従来は IDE 内または Cursor ダッシュボード経由でしか動かなかったエージェントが、**チームの普段の会話の場**から呼び出せる設計に変わる。Slack 統合（既存）と組み合わせれば、組織が Slack / Teams のどちらを採用していてもエージェントワークフローを同じ形で運用できる。",
      "## インストール",
      "**Cursor ダッシュボード**から統合のインストールを開始する。Cursor アカウントと Microsoft 365 / Teams のワークスペースを接続する流れになる。詳細手順は公式の [Microsoft Teams integration docs](https://cursor.com/docs/integrations/microsoft-teams) に記載されている。",
      "## 業界文脈: 「チャットアプリ × エージェント」の標準化",
      "Microsoft Teams 統合の投入は、**コラボツールがエージェント実行の主要 UI に変わりつつある**流れの一例だ。4月以降の主要動きを並べると:",
      "- **4/8** Anthropic Claude Managed Agents（Slack 等向け代理実行を想定）",
      "- **4/22** OpenAI Workspace Agents（Slack / Google Drive / Microsoft 365 / Salesforce / Notion 連携）",
      "- **5/1** Microsoft Agent 365（組織のエージェント観測・統制レイヤー、$15/user/月）",
      "- **5/11** Cursor in Microsoft Teams（本記事）",
      "- **5/12** Anthropic Claude Code agent view（マルチセッション統合ダッシュボード）",
      "「IDE で書く」「ターミナルで動かす」だった開発者ワークフローが、**チャットでメンションすれば PR が返ってくる**形に標準化されつつある。Cursor は IDE × エージェントで先行してきたが、UI の入り口を**チームの普段の会話の場**に移すことで、コードを書かないメンバー（PM、QA、PO）からも「軽い修正・調査タスク」を起票できる構造になる。",
      "## 注意点",
      "- **権限境界**: Teams から起動したエージェントが触れるリポジトリ・ブランチの権限は、Cursor 側の組織設定に従う。Teams のメンバーが Cursor 組織のメンバーであることが前提",
      "- **コンテキストの誤読**: スレッド全体を文脈に取り込む設計のため、別件で交わされた議論が誤って指示として解釈される可能性がある。重要タスクは新しいスレッドで明確に依頼するのが安全",
      "- **コスト**: 既存の Cursor Background Agent と同じ従量モデルで動くと推測される（プランは Cursor 公式ドキュメント参照）"
    ],
    "primarySources": [
      {
        "title": "Cursor in Microsoft Teams",
        "site": "Cursor Changelog",
        "url": "https://cursor.com/changelog/microsoft-teams"
      },
      {
        "title": "Microsoft Teams Integration",
        "site": "Cursor Docs",
        "url": "https://cursor.com/docs/integrations/microsoft-teams"
      }
    ]
  },
  "google-googlebook-gemini-intelligence-android-show-2026": {
    "body": [
      "Google が5月12日に開催した **「The Android Show: I/O Edition」** で、新カテゴリのノート PC プラットフォーム **Googlebook** と、その中核となる AI レイヤー **Gemini Intelligence** を発表した。Anthropic が同日2発表（Claude Platform on AWS GA / Claude Code agent view）を行ったのとほぼ同時刻に、Google も「ハードウェア × OS × AI」の再定義に踏み込む格好となった。",
      "## Googlebook: Chromebook の長期的進化版",
      "Googlebook は **Android と ChromeOS の良い部分を統合**した、Google 自身が「**AI を前提に最初から作り直した**」と説明する新ノート PC カテゴリ。**Chromebook の長期的進化版**として位置付けられ、Web アプリ中心の従来 Chromebook に対し、**Android アプリの全面互換**と**Gemini を OS レベルで統合**した点が大きな違いとなる。",
      "**ハードウェアパートナー**: Google は **Acer、ASUS、Dell、HP、Lenovo** の5社と協業。各社から Googlebook が **2026年秋**に発売される予定で、Google は「最初の Googlebook の詳細はそれまでに順次発表する」としている。",
      "## Magic Pointer: カーソルが Gemini の入り口になる",
      "Googlebook の代表的な新 UI は **Magic Pointer** だ。**カーソルを軽く動かすと Gemini が起動**し、画面上で**ポインタを置いた対象に応じた文脈別の提案**が即座に表示される。Google の説明では「Select anything to ask Gemini」——画面上の任意の対象を選んで Gemini に質問できる。",
      "従来の OS では Gemini を使うには専用ボタンや別ウィンドウへの切り替えが必要だったが、Magic Pointer は **AI を OS のデフォルト入力レイヤー**にする設計だ。アイデアから完了まで数クリックで到達することを狙う。",
      "## Create Your Widget: プロンプトで作る生成型 UI",
      "**Create Your Widget** は、ユーザーがプロンプトでカスタムウィジェットを作成し、デスクトップに配置できる**生成型 UI**機能。Gemini がインターネット検索や Gmail / Calendar など Google アプリへの接続を組み合わせ、**個人化されたダッシュボード**を一つに集約する。テンプレートを選ぶ既存のウィジェット文化を、自然文プロンプトに置き換える試みだ。",
      "## Android 連携: Cast my apps / Quick Access",
      "スマートフォンとの連携機能も大きく強化されている。",
      "- **Cast my apps**: スマートフォン上のアプリを**ノート PC の大画面で動かす**",
      "- **Quick Access**: ファイルがどこに保存されていても**横断的に取り出せる**",
      "- **ファイルブラウザ**: Googlebook 上から**スマートフォンのファイルを直接ブラウズして挿入**できる",
      "Google エコシステム（Android スマートフォン、Workspace、Photos、Drive）に深く統合された設計で、ユーザーは単一のデジタル空間を Googlebook 経由で操作する形になる。",
      "## Gemini Intelligence: 「答える」から「行動する」へ",
      "Googlebook の中核に置かれる **Gemini Intelligence** は、**プレミアム Android デバイスと Chrome に展開される proactive AI 機能の総称**。Q&A 型のアシスタントを超え、**ユーザーの意図を理解してアプリ横断で実際のアクション**を起こす点が特徴だ。",
      "Google が公式に挙げているユースケース例:",
      "- 食料品の注文",
      "- ディナーの予約手配",
      "- 配車手配",
      "- フィットネスクラスの予約",
      "- イベントチケットの確保",
      "OpenAI の **Workspace Agents**（4/22）や Anthropic の **Claude Managed Agents**（4/8）と並ぶ「**ホワイトカラー業務をエージェントに委ねる**」流れの、コンシューマー版に相当する。",
      "## 業界文脈: MacBook Neo と Apple-Google 提携の重なり",
      "Bloomberg は今回の発表を **「MacBook Neo（仮称）への対抗」** と報じている。Apple は2026年後半に Gemini ベースの Siri アップグレードを Google と提携して投入する予定で（4/22の Google Cloud Next 2026 で公式確認）、**Google は同じ Gemini を片方は Apple に提供しつつ、もう片方では自社プラットフォーム（Googlebook）で囲い込む**という二面戦略を取っている。",
      "Microsoft の **Copilot+ PC**（Windows）、Apple の **Apple Intelligence**（macOS / iOS）、そして今回の Google **Gemini Intelligence**（Android / Googlebook）と、PC・スマートフォンの OS は「**AI を中核とする再設計**」で出揃いつつある。Anthropic の Claude Platform on AWS GA と合わせて、5月12日は **「OS × AI × クラウド配布」の再編成が一気に進んだ日**として記録されそうだ。"
    ],
    "primarySources": [
      {
        "title": "Introducing Googlebook, designed for Gemini Intelligence",
        "site": "Google Blog",
        "url": "https://blog.google/products-and-platforms/platforms/android/meet-googlebook/"
      },
      {
        "title": "Google unveils Googlebook, a new line of AI-native laptops",
        "site": "TechCrunch",
        "url": "https://techcrunch.com/2026/05/12/google-unveils-googlebooks-a-new-line-of-ai-native-laptops/"
      },
      {
        "title": "Google announces Googlebooks with Gemini Intelligence focus, coming this fall",
        "site": "9to5Google",
        "url": "https://9to5google.com/2026/05/12/googlebooks-announcement/"
      },
      {
        "title": "Google Debuts Android Googlebook Laptops with Dell, HP to Counter MacBook Neo",
        "site": "Bloomberg",
        "url": "https://www.bloomberg.com/news/articles/2026-05-12/google-debuts-android-googlebook-laptops-with-dell-hp-to-counter-macbook-neo"
      }
    ]
  },
  "anthropic-claude-platform-aws-ga-agent-view-2026": {
    "body": [
      "Anthropic が5月12日、性質の異なる二つの発表を同日に行った。**Claude Platform on AWS の一般提供（GA）開始**と、**Claude Code への新機能「agent view」の研究プレビュー追加**だ。クラウド配布チャネルの拡大（B2B 流通）と、開発者ツールのマルチエージェント運用化（個人ワークフロー）の両軸で、Anthropic は **5/6 の SpaceX Colossus 1 契約**で確保した推論キャパを生かす方向に動いている。",
      "## ① Claude Platform on AWS が GA",
      "AWS は同日、**Claude Platform on AWS の一般提供開始**を発表した。AWS が**初めて Claude のネイティブな Platform 体験**——API、コンソール、早期アクセスのβ機能を含む——を、顧客の **既存の AWS アカウント経由で**提供する形態だ。",
      "従来、AWS で Claude を使う主な選択肢は **Amazon Bedrock**（AWS が運営する API ゲートウェイ）だった。今回の Claude Platform on AWS は性格が異なり、**サービス自体は Anthropic が運営し、顧客データは AWS のセキュリティ境界の外で処理される**。代わりに、認証・課金・コミットメントの消化が AWS 側で完結する設計だ。AWS Marketplace 経由で請求され、**AWS Cost Explorer で他のクラウドコストと並べて監視できる**。",
      "**利用可能モデル**: Claude **Opus 4.7 / Sonnet 4.6 / Haiku 4.5**。今後リリースされる新モデルも Claude Platform on AWS にデプロイされる。",
      "**提供リージョン**: 米東部（バージニア北部・オハイオ）、米西部（オレゴン）、カナダ（中央）、南米（サンパウロ）、欧州（ダブリン・ロンドン・フランクフルト・ミラノ・チューリッヒ・パリ・ストックホルム）、アジア太平洋（**東京**・ソウル・ジャカルタ・シドニー・メルボルン）の合計17リージョン。",
      "Anthropic は今年に入って **Amazon の最大 $250億追加投資**（4/20）と **Google の最大 $400億投資**（4/24）、**SpaceX Colossus 1 借り上げ**（5/6）と立て続けに供給網を拡張してきた。今回の Claude Platform on AWS GA は、その投資取引の**実装側のアウトプット**にあたる。",
      "## ② Claude Code に「agent view」研究プレビュー追加",
      "もう一つの発表は、Claude Code 利用者向けの新機能 **agent view**。**マルチエージェント運用を一画面で管理できるダッシュボード**だ。",
      "**起動と表示**: `claude agents` コマンドでターミナル全画面に展開し、**全セッションの一覧テーブル**と**新規ディスパッチ用の入力欄**が表示される。各行で Enter または → を押すと、そのセッションの会話に attach できる。",
      "**マルチエージェント実行**: 複数の Claude Code セッションを同時に動かし、**待機中（要返答）／作業中／完了**を一覧で確認しながら、必要なときだけ介入する運用が可能。",
      "**バックグラウンドセッション**: `/bg` コマンドや `claude --bg [task]` で**ターミナルを閉じてもエージェントが走り続ける**バックグラウンド実行をサポート。**専用のスーパーバイザープロセス**が動かすため、agent view を閉じても、シェルを閉じても、別の対話セッションを開いても、ディスパッチ済みの作業は継続する。",
      "**要件**: Claude Code **v2.1.139 以降**。**Pro / Max / Team / Enterprise / Claude API** プランで提供される研究プレビュー。",
      "## なぜ今、この組み合わせか",
      "二つの発表は別物に見えるが、Anthropic の現在の戦略では一体だ。",
      "- **配布**: Claude Platform on AWS により、AWS の規制業界顧客（金融・公共・医療）が **AWS のセキュリティ統制の中で Claude のネイティブ機能をフル活用できる**。これまで Bedrock 経由ではアクセスしづらかった early-access β機能（最新モデル・新機能のプレビュー）にも手が届くようになる",
      "- **個人開発の効率化**: agent view により、**1人のユーザーが複数のセッションを並列で走らせる**運用が公式サポートされる。Cursor 3 の Agents Window、OpenAI Workspace Agents と並んで、「**人がエージェントをオーケストレーションする UI**」の標準形が固まりつつある",
      "5月の OpenAI（GPT-5.5 Instant デフォルト切替、3つの音声 API）と Anthropic（SpaceX Colossus 1、Claude Platform on AWS、agent view）の動きは、フロンティア競争が**配布レイヤーとマルチエージェント運用 UI**に移ったことを示している。"
    ],
    "primarySources": [
      {
        "title": "Introducing the Claude Platform on AWS",
        "site": "Anthropic",
        "url": "https://claude.com/blog/claude-platform-on-aws"
      },
      {
        "title": "Claude Platform on AWS is now generally available",
        "site": "AWS What's New",
        "url": "https://aws.amazon.com/about-aws/whats-new/2026/05/claude-platform-aws/"
      },
      {
        "title": "Introducing Claude Platform on AWS: Anthropic's native platform, through your AWS account",
        "site": "AWS Machine Learning Blog",
        "url": "https://aws.amazon.com/blogs/machine-learning/introducing-claude-platform-on-aws-anthropics-native-platform-through-your-aws-account/"
      },
      {
        "title": "Agent view in Claude Code",
        "site": "Anthropic",
        "url": "https://claude.com/blog/agent-view-in-claude-code"
      },
      {
        "title": "Manage multiple agents with agent view",
        "site": "Claude Code Docs",
        "url": "https://code.claude.com/docs/en/agent-view"
      }
    ]
  },
  "feature-ai-avatar-agents-join-meetings-2026": {
    "body": [
      "5月7日の OpenAI 音声 API（GPT-Realtime-2 / -Translate / -Whisper）と組み合わせる形で、**「顔と声を持って会議に参加する AI アバター」**が一気に実用フェーズに入った。これまで広く使われてきた議事録ボット型（Otter / Fireflies / tl;dv が会議に「リスナー」として参加し、音声を文字起こしして要約する形式）とは違い、本特集は**ユーザー本人や架空キャラクターの姿で、参加者として会話に加わる AI** を扱う。HeyGen・Tavus・Beyond Presence・Zoom AI Companion 3.0・Read AI・Kaltura——いずれも商用稼働、または研究プレビューを越えた段階にある。",
      "## HeyGen Interactive Avatar — Zoom App として「自分を同時に複数会議へ」",
      "HeyGen は2026年5月、**Interactive Avatar** の Zoom 統合を公開した。Zoom App としてインストールすると、Google カレンダーと同期して**今後の Zoom 会議をプレビュー**し、指定した会議に自分のアバターを「代理出席」させられる。",
      "技術スタックの内側で重要なのは、**OpenAI Realtime Voice を統合**している点だ。前特集で取り上げた **GPT-Realtime-2**（GPT-5級の推論）の流れに乗っかる形で、HeyGen Avatar は単に喋るだけでなく、相手の質問に対し**文脈に沿った推論ベースの応答**を返せる。HeyGen は「**24時間365日、同時に複数会議**にあなたの分身を派遣できる」とアピールしている。",
      "## Tavus と Beyond Presence — 会話型ビデオ AI の基盤レイヤー",
      "**Tavus** は**Conversational Video Interface（CVI）**プラットフォームを提供する API ベンダー。中核モデルとして次の3つを公開している:",
      "- **Phoenix-4**: 感情状態と聞き手としての受動反応（active listening）を**一つの統合モデル**で生成し、会話データから表情と頭の動きをミリ秒級レイテンシで合成",
      "- **Raven-0**: 知覚（perception）モデル。相手の表情・身振りを読み取る",
      "- **Sparrow-0**: ターンテイキング（誰が次に話すかの判定）",
      "Tavus の応答レイテンシは**サブ1秒**を公称する。**Beyond Presence** は競合で、Genesis モデルにより**100ms 未満**を実現する。両社とも会議系プロダクトのためのバックエンドとして組み込まれることが多く、HeyGen のような UI ベンダーが上に乗る構図だ。",
      "## Zoom AI Companion 3.0 — 本人の表情をミラーするフォトリアル・アバター",
      "**Zoom AI Companion 3.0** は3月10日、**フォトリアル・アバター**機能を発表し、同月リリースした。ユーザーの**容貌・表情・口元の動き・視線**をミラーする設計で、カメラがオフでも自然な視覚的プレゼンスを保てる。撮影しなくても \"顔出し\" 相当の体験を提供する位置付けだ。",
      "ただし AI Companion 3.0 のアバターは現時点では**「自分の代理として一人で会話する」用途には設計されていない**——本人が話す内容を、本人の代わりに視覚化する位置付けだ。一方で Zoom CEO Eric Yuan は2024年以降、**「12か月以内に自分の Digital Twin を会議に送り込みたい」**と表明しており、CEO 自身が同社のロードマップを示している。",
      "## Read AI Digital Twin — メールに返信し、ミーティングをスケジュールする",
      "シアトルの **Read AI** は5月、新製品 **Digital Twin** を発表した。会議でのアバター登壇ではなく、**メールの返信、会議スケジュール調整、簡単な質問対応**を本人になり代わって処理する「テキスト型」分身だ。Read AI は「**史上最大規模の Digital Twin デプロイ**」と謳う。",
      "Read AI の Digital Twin は、**過去のミーティング・メール・ドキュメントからの文脈**を継承する設計。アバター表示が必要な場面では Tavus 等の基盤を使う運用も想定されるが、まずは「**書く分身**」として展開された。",
      "## Kaltura — CEO が自分の Agentic Avatar を本番運用",
      "動画プラットフォームの **Kaltura** は4月、共同創業者で CEO の **Ron Yekutiel** が自身の **Conversational Digital Twin**（同社の Agentic Avatar 技術ベース）を**本番運用**していると発表した。社員・顧客とのコミュニケーションで実際に稼働しており、企業向けの同技術を「**自社 CEO で実証**」する形になっている。",
      "## 比較: どこまで「人として」会議に立てるか",
      "## 倫理・運用上の論点",
      "**1. 本人確認とディープフェイク対策**: 自分が「アバターを送り込む」のはよいが、**第三者が無断であなたのアバターを作る**ことを各社のプラットフォームがどう防いでいるかは別問題だ。HeyGen は同意を要求する仕様だが、エンドポイントでの認証は議論の途上。",
      "**2. 意思決定の責任**: アバターが「本人を代弁して契約に同意する」「採用面接で評価判断を下す」場合、**法的に誰が責任を負うか**は未確立。Kaltura のようにオープンに公表しているケースは透明だが、無告知運用が広まると相手参加者が「**生身の人間と話していると誤認**」する状況が生まれる。",
      "**3. アバター告知のエチケット**: 5月の OpenAI **Trusted Contact** や Academy の AI 演技ルール（5/2）と並んで、「**AI が現れていることを明示するか**」が業界規範として整理されつつある。会議冒頭で「これは AI アバターです」とラベル付けする慣習は今のところ任意。",
      "**4. プライバシー**: HeyGen が OpenAI Realtime Voice 経由で処理する場合、会議音声は OpenAI のインフラを通過する。エンタープライズ規制業界では検討が必要。",
      "**5. 会議のスケールと信号価値の希釈**: CEO が自分の代理として複数会議に同時参加する世界では、「**人が出席している**」という社会的シグナルが希釈される。逆に、出席依頼のインフレを抑える効果も期待される——スケジュール戦争の終わり方として注目される議論だ。",
      "## 翻訳特集との接続",
      "前特集の翻訳機能とこの特集は重なる。HeyGen の Avatar は OpenAI Realtime Voice を使うので、Realtime-Translate の出力先にもなり得る。Zoom AI Companion 3.0 はアバターと音声翻訳の双方を内蔵する。「**自分の顔で、相手の言語で、同時に複数会議に出る**」体験が、2026年後半には実装層で揃いつつあるのが現在地だ。"
    ],
    "tables": [
      {
        "afterParagraph": 16,
        "caption": "AI 会議参加アバターの比較",
        "headers": ["プロダクト", "形態", "応答レイテンシ", "代表的な利用形態"],
        "rows": [
          ["HeyGen Interactive Avatar", "Zoom App、OpenAI Realtime Voice 統合", "—（OpenAI 依存）", "本人代理で複数会議に同時参加"],
          ["Tavus（Phoenix-4 / Raven-0 / Sparrow-0）", "API（CVI）", "サブ1秒", "他社プロダクトのバックエンド"],
          ["Beyond Presence（Genesis）", "API + ノーコード", "100ms 未満", "他社プロダクト・カスタマー応対"],
          ["Zoom AI Companion 3.0 アバター", "Zoom Workplace 標準", "—（カメラ表示用）", "本人の表情ミラー（代理会話ではない）"],
          ["Read AI Digital Twin", "メール／カレンダー", "—（テキスト中心）", "メール返信・スケジュール調整"],
          ["Kaltura Agentic Avatar", "エンタープライズ", "—", "CEO・経営層の代理コミュニケーション"]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Send Your Interactive Avatar to Zoom Meetings",
        "site": "HeyGen",
        "url": "https://www.heygen.com/blog/send-your-interactive-avatar-to-zoom-meetings"
      },
      {
        "title": "HeyGen Reveals AI Avatars That Can Attend Zoom Meetings For You",
        "site": "UC Today",
        "url": "https://www.uctoday.com/?p=74845"
      },
      {
        "title": "Tavus — The human computing company",
        "site": "Tavus",
        "url": "https://www.tavus.io/"
      },
      {
        "title": "Real‑Time AI Avatars for Conversational Apps",
        "site": "Beyond Presence",
        "url": "https://www.beyondpresence.ai/"
      },
      {
        "title": "Zoom introduces an AI-powered office suite, says AI avatars for meetings arrive this month",
        "site": "TechCrunch",
        "url": "https://techcrunch.com/2026/03/10/zoom-launches-an-ai-powered-office-suite-says-ai-avatars-for-meetings-are-coming-soon/"
      },
      {
        "title": "Read AI rolls out 'Digital Twin' that can respond to work emails and schedule meetings",
        "site": "GeekWire",
        "url": "https://www.geekwire.com/2026/read-ai-rolls-out-digital-twin-that-can-respond-to-work-emails-and-schedule-meetings/"
      },
      {
        "title": "Kaltura Puts the AI CEO Into Production With Ron Yekutiel's Digital Twin",
        "site": "IT Business Net",
        "url": "https://itbusinessnet.com/2026/04/kaltura-puts-the-ai-ceo-into-production-with-ron-yekutiels-digital-twin-using-the-same-agentic-avatar-tech-it-offers-enterprises/"
      }
    ]
  },
  "feature-realtime-translation-teams-zoom-meet-openai-2026": {
    "body": [
      "「Microsoft Teams にリアルタイム翻訳があるのを知らなかった」という声は、開発者・ビジネス利用者の間でも珍しくない。実際、Teams / Zoom / Google Meet の主要3社はこの18か月で、リアルタイム翻訳機能を**「文字起こしの英語訳」程度のものから、話し手の声色を模した多言語音声合成**まで、急速に拡張してきた。さらに5月7日には OpenAI が同領域に **3つの音声 API（GPT-Realtime-2、GPT-Realtime-Translate、GPT-Realtime-Whisper）** を投入し、サードパーティ開発者でも同等の体験を組み立てられるようになった。本特集は、3社の会議ソフトと OpenAI の API を **トランスクリプト・翻訳キャプション・自動音声翻訳** の3軸で並列に整理する。",
      "## 軸の整理: 3層に分けて考える",
      "リアルタイム翻訳は、技術的には次の3層で構成される:",
      "1. **トランスクリプト（音声→テキスト）**: 話し手の発話を即時に文字に起こす。後から検索・要約・議事録自動生成に使える",
      "2. **翻訳キャプション（テキスト→他言語テキスト）**: トランスクリプトを参加者の好きな言語に翻訳して字幕表示する",
      "3. **自動音声翻訳（音声→他言語音声）**: 翻訳したテキストをそのまま合成音声で再生する。最新世代では**話し手本人の声色**で再生する技術も実用化",
      "ベンダーごとに、どの層をどこまで自社で組み立てているかが大きく違う。",
      "## Microsoft Teams: Premium + Interpreter で「自分の声」を多言語に",
      "Teams は3層すべてを公式に提供している。**ライブキャプション**は標準機能、**翻訳キャプション**は **Teams Premium（$10/user/月）または Microsoft 365 Copilot** で有効化される。",
      "注目は2025年初頭に投入された **Interpreter（インタープリター）**機能だ。話し手が自分の言語で話すと、AI がリアルタイムで翻訳し、**話し手本人の声色を模した合成音声**で他言語に出力する。当初の対応は英語・フランス語・ドイツ語・イタリア語・日本語・韓国語・ポルトガル語・中国語・スペイン語の **9言語**で、順次拡大中。これとは別に、**プロの人間通訳が16言語ペアまで**割り当てられる Language Interpretation も併設されている。",
      "## Zoom: AI Companion 3.0 で46言語キャプションと音声翻訳を一括",
      "Zoom は **AI Companion** ブランドで翻訳機能を統合している。**翻訳キャプションは46言語**に対応し、Zoom Meetings の参加者は自分の好きな言語で字幕を読みながら会話できる。",
      "2025年10月の Zoomtopia で発表された **AI Companion 3.0** では、これに **リアルタイム音声翻訳**が加わった（2025年12月から段階展開）。Slator は「Zoom が**自前**の音声翻訳エンジンに切り替えた」と報じており、従来サードパーティに頼っていた音声処理をハウス化している。AI Companion 3.0 は **有料の Zoom Workplace プラン**で利用可能で、リアルタイム音声翻訳のほか、ライフライクな AI アバター、議事録の自動清書なども含まれる。",
      "## Google Meet: Gemini 駆動の Speech Translation を1月27日に GA",
      "Google Meet は **2026年1月27日**、リアルタイム音声翻訳を Workspace 顧客向けに **GA（一般提供開始）**した。**Gemini** ベースで、翻訳結果は単に意味だけでなく、**話し手の声色・ピッチ・抑揚**まで保ったまま合成される。**2026年3月時点で対応するのは英語と Spanish / French / German / Portuguese / Italian の双方向5言語ペア**。一方、**翻訳キャプション（テキストのみ）は約70言語**でカバーされており、テキストと音声で利用可能言語に大きな差がある。",
      "提供条件は **Google AI Pro / Google AI Ultra**（個人）または相当する Workspace プラン。Hindi など非欧米言語の追加は将来の更新で予定されている。",
      "## OpenAI が5/7に投入した「3つの音声 API」",
      "ここまでが「製品としての翻訳機能」だ。一方、5月7日に OpenAI が発表した **3つの音声 API**は「**開発者がリアルタイム翻訳プロダクトを自分で組み立てるための部品**」を提供する。",
      "- **GPT-Realtime-2**: OpenAI 初の **GPT-5 級の推論能力をもつ音声モデル**。複雑な要求や文脈の継続を会話の流れの中で処理できる。価格は **$32 / 1M 入力音声トークン、$64 / 1M 出力音声トークン**",
      "- **GPT-Realtime-Translate**: **ライブ翻訳専用モデル**。**70+ 言語の入力**を受け、**13言語の出力**にリアルタイム翻訳する。価格は **$0.034 / 分**",
      "- **GPT-Realtime-Whisper**: **ストリーミング音声→テキスト（STT）**。話している最中に文字起こしを返す。価格は **$0.017 / 分**",
      "## 3社の機能と OpenAI API の対応表",
      "## 開発者・利用者にとっての論点",
      "**1. 価格モデルの違い**: 会議ソフトはユーザー単価（例: Teams Premium $10/user/月、Google AI Pro 等）の固定費。OpenAI API は分単位の従量課金（Translate $0.034/分）。**月8時間の会議で1ユーザーあたり約 $16.3**（OpenAI Translate のみ）と試算でき、利用頻度によって最適解が変わる。",
      "**2. 対応言語の濃淡**: Zoom の翻訳キャプションは46言語、Google Meet は70言語と幅広い一方、**音声翻訳**で対応する言語は Google Meet 5ペア、Teams 9言語、OpenAI Realtime-Translate は 13出力言語に絞られる。**非欧米言語のサポートは依然として限定的**で、Hindi・アラビア語・スワヒリ語・東南アジア諸言語などは出力ボイスが利用できないケースが多い。",
      "**3. 声色再現の有無**: Teams Interpreter と Google Meet Speech Translation は「**話し手の声色を保つ**」設計。OpenAI Realtime-Translate も音声トーンを引き継ぐ。会議の心理的距離感が変わる重要な要素で、対面の代替としての品質向上に直結する。",
      "**4. データ・プライバシーと処理場所**: 各社とも会議音声はクラウド側で処理される。Teams は Microsoft 365 のテナント境界内、Google Meet は Workspace 内、Zoom は Slator が報じたとおり**自前エンジンへ移行中**。社外秘・規制業界では、**翻訳ログがクラウドに残る前提**で運用設計が必要になる。OpenAI API を使う場合は OpenAI のデータ取り扱いポリシーが適用される。",
      "**5. 議事録との統合**: トランスクリプトは AI 議事録（Teams Copilot、Zoom AI Companion、Google Meet の Note Taker）とそのまま接続できる。OpenAI Realtime-Whisper を使えば、独自のミーティングソフトに同等機能を組み込める。",
      "## 「翻訳が言葉の壁を消す」とは言い切れない",
      "**機能としては成熟したが、依然として注意点も多い**。非欧米言語の音声出力は対応待ち、声色再現は声優の権利・本人確認の文脈で議論の余地があり、規制業界では翻訳精度のミスが法的リスクに直結する場面も想定される。Academy が AI 演技・AI 脚本を Oscar 対象外と明確化した（5/1〜2）構図と同様に、「**便利になった**」と「**何を許容するか**」は別の議論になる。",
      "それでも、Microsoft / Zoom / Google の会議製品が**標準で多言語化**を備え、OpenAI が**部品として API**を出した5月の動きは、**「英語以外の母語で堂々と参加できる会議」**を技術的にはほぼ実現可能にした転換点と言える。後は、利用者がコスト・プライバシー・倫理を含めてどの組合せを採用するかが残された判断軸だ。"
    ],
    "tables": [
      {
        "afterParagraph": 18,
        "caption": "リアルタイム翻訳: 3社製品 + OpenAI API の比較",
        "headers": ["項目", "Microsoft Teams", "Zoom", "Google Meet", "OpenAI API（5/7発表）"],
        "rows": [
          ["トランスクリプト（音声→テキスト）", "ライブキャプション（標準）", "AI Companion トランスクリプト", "ライブキャプション + Note Taker", "GPT-Realtime-Whisper（$0.017/分）"],
          ["翻訳キャプション言語数", "Premium で展開", "46言語", "約70言語", "Realtime-Translate: 70+ 入力 → 13 出力"],
          ["自動音声翻訳", "Interpreter（9言語、本人の声色）", "AI Companion 3.0（2025/12〜）", "Speech Translation（5ペア、Gemini、声色保持）", "GPT-Realtime-Translate（$0.034/分）"],
          ["音声翻訳 GA 時期", "2025年初頭〜", "2025年12月", "2026/1/27", "2026/5/7（API）"],
          ["代表的なライセンス", "Teams Premium $10/user/月 または M365 Copilot", "有料 Zoom Workplace 等", "Google AI Pro / Ultra、Workspace 上位", "従量課金"],
          ["人間通訳併設", "16言語ペアまで", "サードパーティ統合可", "サードパーティ拡張", "—"]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Interpreter in Microsoft Teams meetings and calls",
        "site": "Microsoft Support",
        "url": "https://support.microsoft.com/en-us/office/interpreter-in-microsoft-teams-meetings-and-calls-c7efe2bb-535d-42ab-a5c4-d2d91619b46d"
      },
      {
        "title": "Use language interpretation in Microsoft Teams meetings",
        "site": "Microsoft Support",
        "url": "https://support.microsoft.com/en-us/office/use-language-interpretation-in-microsoft-teams-meetings-b9fdde0f-1896-48ba-8540-efc99f5f4b2e"
      },
      {
        "title": "Zoom Transcription: Translate & Transcribe In Real Time",
        "site": "Zoom",
        "url": "https://www.zoom.com/en/products/ai-assistant/features/accessibility/"
      },
      {
        "title": "Zoom Brings AI Live Speech Translation in-House",
        "site": "Slator",
        "url": "https://slator.com/zoom-brings-ai-live-speech-translation-in-house/"
      },
      {
        "title": "Speech translation in Google Meet now generally available for businesses",
        "site": "Google Workspace Updates",
        "url": "https://workspaceupdates.googleblog.com/2026/02/speech-translation-meet-ga.html"
      },
      {
        "title": "Learn about Speech Translation",
        "site": "Google Meet Help",
        "url": "https://support.google.com/meet/answer/16221730?hl=en"
      },
      {
        "title": "Advancing voice intelligence with new models in the API",
        "site": "OpenAI",
        "url": "https://openai.com/index/advancing-voice-intelligence-with-new-models-in-the-api/"
      },
      {
        "title": "OpenAI launches new voice intelligence features in its API",
        "site": "TechCrunch",
        "url": "https://techcrunch.com/2026/05/07/openai-launches-new-voice-intelligence-features-in-its-api/"
      }
    ]
  },
  "academy-oscars-ai-acting-screenplay-ineligible-2026": {
    "body": [
      "Academy of Motion Picture Arts and Sciences が5月1日（多くの一般メディアは5月2日に報道）、**AI が「演じた」演技と AI に主導された脚本を、Academy Awards（オスカー）の主要部門の対象外とする**規則変更を公表した。これは、生成 AI による動画・音声合成・脚本生成が実用水準に達したことに業界として初めて公式に応答した動きであり、賞レースの「土俵」を人間の創作活動に絞り直す方向性を打ち出したものだ。",
      "## 何が対象外になるのか",
      "### 演技部門",
      "Academy のルールでは、演技部門への候補資格は **「映画の法的なビリング（クレジット）に記載され、本人の同意の下で人間によって演じられた performance」** に限られる。AI による「**likeness enhancement（容姿の強化・若返り・合成）**」は、それ自体は使ってもよいが、**演技そのものを AI 生成のキャラクター（俳優の同意なき復元を含む）が担った場合は対象外**となる。死後の俳優の AI 復活演技や、完全合成キャラクターによる主演はこの規則下では候補にできない。",
      "### 脚本部門",
      "脚本部門は **「human-authored」**（人間の著作）であることが必須要件。生成 AI で大量にドラフトを出して人間が編集する形式は判断が難しいため、**「AI による生成への依存度が高ければ失格」**という基準が示された。実務的には Academy が**追加情報の提出を求める権限**を行使し、ケースバイケースで判定する仕組みになる。",
      "## なぜ今、このタイミングなのか",
      "背景には3つの圧力がある:",
      "- **生成動画の品質向上**: Sora 2、Runway Gen5、Pika 等の生成動画が長尺・高解像度・キャラクター一貫性で実用水準に達しつつあり、コンテンツ流通量が拡大",
      "- **俳優・脚本家の労働問題**: 2023年の WGA / SAG-AFTRA ストライキ以降、AI による職務代替への懸念が継続",
      "- **同意問題と権利**: 故人の俳優の AI 復活、声優の声合成許諾など、肖像権・パブリシティ権の解釈が判例化していない領域が広い",
      "Academy が「**最終的な賞**」を業界の創作価値の指標として位置付け直すことで、産業全体への規範的シグナルを発した形だ。",
      "## 影響と限界",
      "**影響範囲**:",
      "- ハリウッド・スタジオの大作で、AI を「演技そのもの」に使うインセンティブが下がる",
      "- 国際長編映画賞などの他部門にも波及する可能性（Academy は同時に国際長編規則も改定）",
      "- 配信プラットフォーム向けの作品基準にもガイドラインとして引用される可能性",
      "**限界**:",
      "- 興行・配信収益には直接影響しない。Netflix / Apple TV+ などは独自基準を持つ",
      "- 「likeness enhancement」と「AI 演技」の境界線が曖昧で、運用は Academy の裁量に依存",
      "- グローバルには Cannes、Venice、Berlin、BAFTA など他の主要賞が独自方針を取る可能性",
      "## AI News 観点での意味",
      "Anthropic の Project Glasswing（4/7）、OpenAI の Trusted Access for Cyber（5/7）と並んで、**「AI 技術の能力 × 利用範囲の制限」**が同時並行で進む構図が鮮明になってきた。**フロンティアモデル各社の技術競争**と、**業界・規制当局・国家による利用境界の線引き**は別物として進行する。クリエイティブ産業は「業界自治」で先んじ、サイバー・規制業界は「ホスト型 API による許可制配布」で対応している——本記事はその対比として読まれるべき。"
    ],
    "primarySources": [
      {
        "title": "AI-generated actors and scripts are now ineligible for Oscars",
        "site": "TechCrunch",
        "url": "https://techcrunch.com/2026/05/02/ai-generated-actors-and-scripts-are-now-ineligible-for-oscars/"
      },
      {
        "title": "Academy Makes Seismic Oscar Rule Changes For Acting & International Film Categories, Clarifies AI Stance",
        "site": "Deadline",
        "url": "https://deadline.com/2026/05/oscar-rules-changes-2026-acting-international-film-1236878201/"
      },
      {
        "title": "Oscars: New rules announced - AI actors and scripts cannot win awards",
        "site": "Euronews",
        "url": "https://www.euronews.com/culture/2026/05/04/oscars-new-rules-announced-ai-actors-and-scripts-cannot-win-awards"
      }
    ]
  },
  "openai-cyber-trusted-contact-voice-may7-2026": {
    "body": [
      "OpenAI が5月7日、性質の異なる3つの大型アップデートを同日に並行投入した。**GPT-5.5-Cyber** によるサイバー防衛の業界別パッケージング、**Trusted Contact** によるメンタルヘルス危機への安全策、そして **新しい音声 AI モデル**の API 提供——いずれも「能力単体の競争」ではなく、**安全運用・特定業界・周辺モダリティ**を取りに行く動きだ。",
      "## ① GPT-5.5-Cyber と Trusted Access for Cyber（TAC）",
      "GPT-5.5-Cyber は、**重要インフラを守るディフェンダー向け**に調整されたサイバーセキュリティ特化モデル。**OpenAI のサイバー系モデル群の中で最も許容範囲が広い**（permissive）と位置付けられ、攻撃者視点のシミュレーション、ペネトレーションテスト、リバースエンジニアリング、エクスプロイト分析などの「**普通の ChatGPT では断られる**」業務的に必要な作業を、認証済みのパートナーに対して限定的に有効化する。",
      "配布チャネルは新プログラム **Trusted Access for Cyber（TAC）**。承認されたディフェンダー組織のみが利用でき、利用ログ・ガードレール・人間によるレビューを伴う運用前提でアクセス権が付与される。Help Net Security は「**サイバー防衛と AI の濫用防止という相反する要請を、ホスト型 API × 認証付き許可制で両立する試み**」と評している。Anthropic Claude Mythos の Project Glasswing（4月）と並んで、フロンティア AI の「**選別配布**」モデルが主要な配布形態として定着しつつある。",
      "## ② Trusted Contact: 自傷リスクの第三者通知",
      "Trusted Contact は ChatGPT に追加される**オプション機能**で、ユーザーが事前に**信頼する成人の連絡先**（SMS / メール）を登録できる。OpenAI の自動システムが会話内に**深刻な自傷リスクの兆候**を検出し、続いて**人間のレビュー**が「深刻」と判定した場合に、登録された連絡先に通知が送られる。",
      "この設計には2つの重要な原則がある:",
      "- **必ず人間レビューを経る**: 自動検知だけで通知することはせず、誤検知による「友人・家族の不必要な動揺」を抑える",
      "- **オプトイン**: 通知の発火を許諾しているユーザーにだけ適用",
      "発表は、Elon Musk が xAI に絡む安全性問題で訴訟・批判を浴びる時期と重なり、業界全体に「**AI 提供者が利用者の生命にどう責任を持つか**」という論点が突きつけられている文脈での投入となった。",
      "## ③ 新音声 AI モデルを API に追加",
      "同日、OpenAI は **リアルタイム音声処理モデルを API に追加**したと発表。具体的なモデル名・性能比較は API ドキュメント側で公開されており、応答遅延と自然さのトレードオフを再調整した世代と位置付けられる。AssemblyAI などスタートアップが切り拓いた音声 AI 市場に、フロンティアラボがフラッグシップで参入する流れが加速する。",
      "## なぜ「3軸同時投入」なのか",
      "今回の同時発表は、フロンティアモデル競争が**ベンチマーク勝負から「業界別 × 安全運用 × モダリティ」勝負**へ移行している証拠と読める。GPT-5.5 と Claude Opus 4.7 で基礎能力の差はだいぶ縮まった一方、**サイバー業務に組み込まれるか・命に関わる場面でどう振る舞うか・声と画像でどう動くか**が、企業導入と一般利用の双方で次の差別化軸になる。",
      "Anthropic の SpaceX Colossus 1 契約（5/6）でコンピュート供給の不安が一段和らいだ翌日に、OpenAI が「能力以外の3軸」を畳みかける構図は、競合分業の役割分担がより鮮明になってきたことを示している。"
    ],
    "primarySources": [
      {
        "title": "Scaling Trusted Access for Cyber with GPT-5.5 and GPT-5.5-Cyber",
        "site": "OpenAI",
        "url": "https://openai.com/index/gpt-5-5-with-trusted-access-for-cyber/"
      },
      {
        "title": "OpenAI tunes GPT-5.5-Cyber for more permissive security workflows",
        "site": "Help Net Security",
        "url": "https://www.helpnetsecurity.com/2026/05/08/openai-gpt-5-5-cyber-model/"
      },
      {
        "title": "ChatGPT Can Now Alert a Friend if You're in a Mental Crisis: Meet 'Trusted Contact'",
        "site": "Android Headlines",
        "url": "https://www.androidheadlines.com/2026/05/openai-chatgpt-trusted-contact-mental-health-feature.html"
      },
      {
        "title": "OpenAI Launches Safety Alert System and Advanced Voice AI",
        "site": "The AI Insider",
        "url": "https://theaiinsider.tech/2026/05/08/openai-launches-safety-alert-system-and-advanced-voice-ai-as-musk-trial-spotlights-safety-failures/"
      }
    ]
  },
  "anthropic-spacex-colossus-1-compute-deal-2026": {
    "body": [
      "Anthropic が5月6日、サンフランシスコで開催した開発者カンファレンス **「Code with Claude」** の基調講演で、**SpaceX が運営する Colossus 1 データセンターのコンピュート全量を借り上げる**契約を発表した。Memphis（テネシー州）に置かれた Colossus 1 は元々 xAI 向けに構築された施設で、**220,000 基超の NVIDIA GPU（H100、H200、次世代の GB200 を含む）と 300 MW 超**を擁する。Anthropic は**今月中に**これを推論基盤に組み込むとしている。",
      "## なぜ今、しかも Musk 系から借りるのか",
      "背景は Anthropic 自身が認めるとおり、**Claude の推論需要急増による信頼性低下**だ。3月以降、Claude のレスポンス遅延・「Effort 中」へのこっそりダウングレード（4/13に報道、ユーザーが反発）・上限到達など、品質低下を訴える開発者の声が増えていた。Amazon $25B（4/20）と Google $40B（4/24）の追加投資は中長期の解、Colossus 1 借り上げは**今月から効く即効薬**という位置付けだ。",
      "Anthropic と xAI／SpaceX は AI 安全性の哲学で対立してきた経緯があるが、Elon Musk は会見後に「**`evil detector` は誰の中でも作動しなかった**」とコメントし、商業判断を優先したことを示唆した。Anthropic 側も「コンピュートが足りていないという現実」を率直に語っている。",
      "## レート上限への即時反映",
      "発表と同時に、ユーザー向けの上限緩和が打ち出された:",
      "- **Claude Code の5時間レート上限が全有料プランで2倍に**",
      "- **Pro / Max の「ピーク時間帯における上限低減」を撤廃**",
      "- **Claude Opus 系の API レート上限を大幅引き上げ**",
      "- **Claude Pro / Max 加入者のキャパシティ全般を底上げ**",
      "Code with Claude 同会場では、API 利用が**前年比17倍に拡大**したことも明かされた（Anthropic Chief Product Officer Ami Vora の発言）。",
      "## 軌道データセンター: ギガワット級コンピュートを宇宙に",
      "今回の契約には、もう一つ前例のない条項が含まれている。**ギガワット級の「orbital data center（軌道データセンター）」を SpaceX と共同検討**することだ。地表での電力・水・土地・住民合意の制約を回避し、太陽光発電と宇宙空間の放熱優位性を利用するアイデアで、SpaceX の打ち上げ能力を前提にすれば段階的に現実味を帯びる。発表時点では研究フェーズで、具体的な打ち上げ・稼働時期は未定。",
      "## AI インフラの政治学",
      "Anthropic が借りる先は今や **AWS（Trainium $25B）/ Google Cloud（TPU $40B）/ SpaceX（H100/H200/GB200 220K + 軌道計画）** の3軸構造。これは「**AI モデルベンダーが特定ハイパースケーラーの代理戦争コマになる**」のではなく、「**コンピュート供給を分散して交渉力を維持する**」戦略の表れだ。CNBC は「SpaceX が **6月IPO を予定**する直前のディール」と指摘しており、SpaceX 側も評価額を引き上げる材料として活用する構図。",
      "Code with Claude 自体は **5月19日にロンドン、6月10日に東京**でも開催予定で、Claude Code のさらなる機能拡張がそれぞれの会場で発表される見込み。利用者にとっては「**遅延と上限が即時に緩む**」という直接的な恩恵が今週から得られる。"
    ],
    "tables": [
      {
        "afterParagraph": 1,
        "caption": "Colossus 1 借り上げの規模",
        "headers": ["項目", "数値・内容"],
        "rows": [
          ["所在地", "Memphis（テネシー州）"],
          ["GPU 数", "220,000 基超（H100 / H200 / GB200）"],
          ["新規電力容量", "300 MW 超"],
          ["稼働開始", "2026年5月中"],
          ["Claude Code 5時間レート上限", "全有料プランで 2倍"],
          ["ピーク時間帯の上限低減", "Pro / Max で撤廃"],
          ["軌道データセンター", "ギガワット級を共同検討（研究フェーズ）"]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Higher usage limits for Claude and a compute deal with SpaceX",
        "site": "Anthropic",
        "url": "https://www.anthropic.com/news/higher-limits-spacex"
      },
      {
        "title": "Anthropic, SpaceX announce compute deal that includes space development",
        "site": "CNBC",
        "url": "https://www.cnbc.com/2026/05/06/anthropic-spacex-data-center-capacity.html"
      },
      {
        "title": "New Compute Partnership with Anthropic",
        "site": "xAI",
        "url": "https://x.ai/news/anthropic-compute-partnership"
      },
      {
        "title": "Live blog: Code w/ Claude 2026",
        "site": "Simon Willison",
        "url": "https://simonwillison.net/2026/May/6/code-w-claude-2026/"
      }
    ]
  },
  "openai-gpt-5-5-instant-default-chatgpt-2026": {
    "body": [
      "OpenAI が5月5日、ChatGPT のデフォルトモデルを **GPT-5.5 Instant** に切り替えた。これまで既定だった GPT-5.3 Instant に代わって、すべての ChatGPT ユーザーが「特に何も指定しないで使う」ときの裏側がアップグレードされる。API でも `chat-latest` として同時提供。**GPT-5.5（4月23日リリース）の高速軽量版**にあたり、GPT-5.5 本体の知性と GPT-5.3 Instant 並みのレイテンシを両立させた位置付けだ。",
      "## ハルシネーション 52.5% 減",
      "OpenAI の社内評価で、**医療・法律・金融**といった高ステークスのプロンプトに対して、**GPT-5.5 Instant の事実誤認の主張は GPT-5.3 Instant 比で 52.5% 減少**した。さらに、ユーザーが「事実誤認だった」とフラグした難しい会話だけを切り出して再評価しても、**事実誤認は 37.3% 減**。「ChatGPT が自信満々に間違える」局面の頻度が一段下がったことを意味する。",
      "## 出力が短くなった",
      "もう一つの大きな変化が出力スタイルだ。同じ質問でも、**単語数は約 30.2%・行数は約 29.2% 少ない**応答になる。9to5Mac 等が「**絵文字の濫用が抑えられ、口数が減った**」と報じたとおり、雑談調の冗長な装飾を排して核心を返す方向に明確に振っている。応答の質感が変わるため、既存のプロンプトテンプレートを使っているユーザーは挙動が変わる可能性がある。",
      "## 長期メモリの拡張",
      "ChatGPT は同時に、**過去チャット・添付ファイル・接続済み Gmail を文脈に使う新しい長期メモリ**を導入した。Plus / Pro ユーザーから Web で展開開始、モバイルとその他プラン（Free / Go / Business / Enterprise）には数週間以内に拡大予定。同時に「**Memory Sources**」という機能が全モデルで提供され、応答がパーソナライズされた際に**どの記憶や過去会話が文脈として使われたか**を確認・削除・修正できるようになる。",
      "## API と既存ユーザーへの影響",
      "API では `chat-latest` として呼べる。**有料ユーザー向けには GPT-5.3 Instant が3ヶ月間は設定画面で残り**、その後リタイアする。既存のアプリケーションで挙動の差異が問題になる場合、3ヶ月の移行期間内に動作確認と必要な調整を行う必要がある。",
      "## 競争上の位置付け",
      "**Claude Opus 4.7（4/16 GA）→ GPT-5.5（4/23）→ DeepSeek V4（4/24）→ GPT-5.5 Instant デフォルト切替（5/5）** と、フロンティアモデル各社のアップデート頻度がさらに上がっている。OpenAI は今回「フラッグシップだけでなく、**最も大量に使われるデフォルトモデル**も最新世代に置き換える」ことで、ChatGPT の体験全体を底上げする方向に動いた。Anthropic が SpaceX Colossus 1 で推論キャパを増強する翌日（5/6）にこの切替を完了させたタイミングも示唆的だ。"
    ],
    "tables": [
      {
        "afterParagraph": 3,
        "caption": "GPT-5.5 Instant の主な変化（OpenAI 公式評価）",
        "headers": ["指標", "GPT-5.3 Instant → GPT-5.5 Instant"],
        "rows": [
          ["高ステークスでの事実誤認", "−52.5%"],
          ["フラグ付き難会話での事実誤認", "−37.3%"],
          ["応答単語数", "−30.2%"],
          ["応答行数", "−29.2%"],
          ["旧モデルの利用可否", "有料ユーザーは3ヶ月間設定で残存"]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "GPT-5.5 Instant: smarter, clearer, and more personalized",
        "site": "OpenAI",
        "url": "https://openai.com/index/gpt-5-5-instant/"
      },
      {
        "title": "OpenAI releases GPT-5.5 Instant, a new default model for ChatGPT",
        "site": "TechCrunch",
        "url": "https://techcrunch.com/2026/05/05/openai-releases-gpt-5-5-instant-a-new-default-model-for-chatgpt/"
      },
      {
        "title": "OpenAI updates ChatGPT Instant with GPT 5.5",
        "site": "Axios",
        "url": "https://www.axios.com/2026/05/05/openai-chatgpt-update-default-model"
      }
    ]
  },
  "microsoft-agent-365-ga-observe-govern-secure-2026": {
    "body": [
      "Microsoft が5月1日、エンタープライズ向け AI エージェントの統合管理サービス **Microsoft Agent 365** を一般提供（GA）開始した。プライベートプレビューを経ての本番投入で、**価格は $15/user/月**。スタンドアロン契約に加え、新エディションの **Microsoft 365 E7**（M365 E5 + Microsoft Entra Suite + Microsoft 365 Copilot + Agent 365）にも組み込まれる。",
      "## 3つの設計軸: observe / govern / secure",
      "Agent 365 のコンセプトは「**組織内の AI エージェントを管制塔から運用する**」こと。3軸が公式に整理されている:",
      "- **Observe（観測）**: 組織で稼働するエージェントを単一レジストリで一覧化。利用状況・パフォーマンス・リスクシグナルをリアルタイム表示し、IT 管理者は問題が業務に影響する前に動ける。",
      "- **Govern（統制）**: ロールベースの権限・データアクセス制御・コスト上限・利用ポリシーを集中設定。退職者のアカウントから派生したエージェントの残存といった「エージェント版シャドー IT」も検知する。",
      "- **Secure（保護）**: Microsoft Entra と Purview を背景に、エージェントの認証・データ DLP・脅威検知を統合。Microsoft Security Store も Entra/Purview に組み込まれ、AI ガイド付きの Security Store Advisor が GA となった。",
      "## エージェント・ランタイムではなく「管制塔」",
      "Agent 365 の重要な位置付けは、**Copilot Studio / OpenAI Workspace Agents / Anthropic Claude Managed Agents** といった「エージェントを動かす実行レイヤー」とは別の階層を担うことだ。実行は各ベンダーに任せ、その上で**横断的な可視化と統制**を提供する。Microsoft は自社の Copilot Studio を持ちつつも、Agent 365 を**「ベンダー中立の管制塔」**として位置付け、Anthropic の Claude Code がエンタープライズに広まる流れにも対応する設計を見せている。",
      "## なぜ今 GA か",
      "背景には、企業内に**「エージェント版シャドー IT」**が急増している事情がある。Workspace Agents（4/22）や Claude Managed Agents（4/8）の一般化で、現場の担当者が IT 部門の許可なしにエージェントを作成・運用できるようになった。**観測できないエージェントが企業データに触れる**リスクは、規制業界では受け入れ難い。Agent 365 はそのギャップを埋める形で投入された。",
      "## エンタープライズ市場での意味",
      "$15/user/月という価格設定は、Microsoft 365 Copilot（$30/user/月）と比べても積み増しのハードルが低い水準だ。**「エージェントを使うかどうか」ではなく「乱立するエージェントをどう管理するか」が次のエンタープライズ AI 投資テーマ**になることを、Microsoft は明確に賭けに行った形だ。Big Tech Q1 決算（4/29）で示された Microsoft AI 事業 ARR $370億（+123%）の伸びを、エージェント管理という新カテゴリでさらに押し上げる狙いがある。"
    ],
    "primarySources": [
      {
        "title": "Microsoft Agent 365, now generally available, expands capabilities and integrations",
        "site": "Microsoft Security Blog",
        "url": "https://www.microsoft.com/en-us/security/blog/2026/05/01/microsoft-agent-365-now-generally-available-expands-capabilities-and-integrations/"
      },
      {
        "title": "Microsoft Agent 365 overview",
        "site": "Microsoft Learn",
        "url": "https://learn.microsoft.com/en-us/microsoft-agent-365/overview"
      },
      {
        "title": "What's New in Agent 365: May 2026",
        "site": "Microsoft Community Hub",
        "url": "https://techcommunity.microsoft.com/blog/agent-365-blog/what%e2%80%99s-new-in-agent-365-may-2026/4516340"
      }
    ]
  },
  "bigtech-q1-2026-earnings-ai-capex-700b-feature": {
    "body": [
      "4月29日夕、**Alphabet（Google）・Microsoft・Meta・Amazon** の4社が同時にカレンダー第1四半期決算（Microsoft は会計 Q3）を発表した。AI 関連の指標がそれぞれ加速する一方、設備投資（CapEx）の上方修正に市場が敏感に反応する場面もあった。翌4月30日には Fortune が「ハイパースケーラー合計で**年間 $7,000億**を AI インフラに投じる」「**出口の見えない投資競争**」と報じ、AI バブル論争が再燃した。",
      "## 4社の主要指標",
      "**Microsoft（会計 Q3 2026）**: 売上 **$829億**（+18% YoY）、Azure・クラウド +40%（過去12四半期で最速級）、**AI 事業 ARR $370億**（+123% YoY）。Copilot 系のエンタープライズ採用と Azure の OpenAI モデル提供が押し上げ要因。",
      "**Alphabet（カレンダー Q1 2026）**: 売上 +22% YoY、**Google Cloud が四半期売上 $200億**を初突破。検索広告も底堅く、AI 検索のマネタイズが寄与しはじめている。",
      "**Meta（カレンダー Q1 2026）**: 売上 **$470億**（+33% YoY）。だが **2026年 CapEx ガイダンスを $1,250〜1,450億**に上方修正し、時間外取引で株価は **−6%** 下落。Llama 路線から Muse Spark（4月）でクローズドソースに転換した戦略の収益化スピードに懸念。",
      "**Amazon（カレンダー Q1 2026）**: 総売上 **$1,590億**（+13% YoY）、**AWS は $304億（+22%）** で過去15四半期で最高の伸び率。Anthropic 向けの $25B 追加投資（4/20）と整合的に、Trainium2/3 容量増強が貢献。",
      "なお Apple（同日、別系列の会計 Q2 2026）は売上 $1,112億（+17%）、サービス収益 $309.8億（過去最高）、iPhone $570億（+22%）。Google Gemini を活用する Siri 改修（2026年後半予定）への期待が下支え。",
      "## CapEx の集中度と「$7,000億クラブ」",
      "Fortune の集計によれば、Microsoft・Alphabet・Meta・Amazon・Oracle の主要5社で **2026年の AI インフラ CapEx は合計 $7,000億規模**に達する見通し。これは過去のクラウド時代の年間設備投資をはるかに上回り、米国全体のデータセンター電力需要を変えるレベルだ。**1社あたり年間 $1,000億超**の投資が常態化しつつあるが、回収サイクルが見えにくいことから「**AI バブル論争**」が学界・投資家から再び浮上している。",
      "## 開発者・利用者にとっての含意",
      "1. **API・クラウドコストは当面下がる方向**: Trainium / TPU / 自社チップへのシフトとフロンティアモデル競争（GPT-5.5・Claude Opus 4.7・DeepSeek V4）で、推論コストは継続的に低下する余地がある。**$7,000億クラブ**の投資は供給過剰側に効くため、開発者には追い風だ。",
      "2. **コンピュート供給の地理的偏在**: 電力・水・土地の制約から、**米国南東部・テキサス・北欧**などに供給が集中する。リージョン選択がレイテンシだけでなく価格にも効くようになる。",
      "3. **ハイパースケーラーへのロックイン**: Anthropic の AWS（$25B+）と Google（$40B）両どり、Microsoft の OpenAI 専用契約、Amazon の OpenAI/Anthropic 両投資など、**「モデル × クラウド」のクロスホールド**が深化。マルチクラウド戦略を採るほど、契約・課金・データ越境管理の複雑性が増す。",
      "## バブル論争の論点",
      "AI バブル論を煽る材料: ① 投資額が実需を先行している ② OpenAI・Anthropic とハイパースケーラー間の「循環的取引」（投資した先がそのクラウドを買う）が会計上の指標を膨らませている ③ AGI への期待値が個別プロダクトの ROI を覆い隠している、など。",
      "反論側の材料: ① Microsoft AI 事業の ARR が **+123% で実数として大きい** ② Azure・AWS の伸びは AI 駆動で説明可能 ③ コンピュート不足が継続しており供給制約側のボトルネックは現実、など。**$7,000億の使い道がどれだけ AI 由来の有意な売上に転換するか**は2027年以降の決算で判定される構図だ。"
    ],
    "tables": [
      {
        "afterParagraph": 1,
        "caption": "Big Tech 4社（+Apple）2026 Q1 主要 AI 関連指標",
        "headers": ["企業", "売上", "前年比", "AI 関連ハイライト"],
        "rows": [
          ["Microsoft（FY Q3）", "$829億", "+18%", "AI 事業 ARR $370億（+123%）、Azure +40%"],
          ["Alphabet", "—（+22%）", "+22%", "Google Cloud 四半期売上 $200億 初突破"],
          ["Meta", "$470億", "+33%", "CapEx 2026 ガイダンスを $1,250〜1,450億へ上方修正（株価 -6%）"],
          ["Amazon", "$1,590億", "+13%", "AWS $304億（+22%）、15四半期で最高の伸び"],
          ["Apple（FY Q2）", "$1,112億", "+17%", "サービス収益 $309.8億 過去最高"]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Big Tech is about to spend $700 billion on AI this year. No one knows where the buildout ends.",
        "site": "Fortune",
        "url": "https://fortune.com/2026/04/30/big-tech-hyperscalers-will-spend-700-billion-on-ai-infrastructure-this-year-with-no-clear-end-in-sight-eye-on-ai/"
      },
      {
        "title": "Microsoft Q3 FY26 earnings — Investor Relations",
        "site": "Microsoft",
        "url": "https://www.microsoft.com/en-us/investor"
      },
      {
        "title": "Alphabet Announces First Quarter 2026 Results",
        "site": "Alphabet IR",
        "url": "https://abc.xyz/investor/"
      },
      {
        "title": "Meta Reports First Quarter 2026 Results",
        "site": "Meta IR",
        "url": "https://investor.atmeta.com/"
      }
    ]
  },
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
        "headers": ["項目", "数値・内容"],
        "rows": [
          ["参加人数", "69 名（San Francisco オフィス）"],
          ["1人あたり所持金", "$100"],
          ["リスティング数", "500 品目超"],
          ["成立取引数", "186 件"],
          ["総取引額", "$4,000 超"],
          ["Opus 売り手の優位", "Haiku 売り手より +$2.68/品（平均）"],
          ["「金を払う」と回答", "46%"]
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
        "headers": ["項目", "V4-Pro", "V4-Flash"],
        "rows": [
          ["総パラメータ", "1.6 兆", "284B"],
          ["アクティブパラメータ", "49B", "13B"],
          ["コンテキスト窓", "1M トークン", "1M トークン"],
          ["最大出力", "384K トークン", "384K トークン"],
          ["思考モード", "Thinking / Non-Thinking", "Thinking / Non-Thinking"],
          ["公開形態", "オープンソース", "オープンソース"]
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
        "headers": ["項目", "規模", "条件・備考"],
        "rows": [
          ["既往投資", "$80億", "2023〜2025年に段階投資"],
          ["今回の初期投資", "$50億", "即時投入、評価額 $3,800億"],
          ["今回の条件付きトランシェ", "最大 $200億", "商業マイルストン達成時に段階解放"],
          ["Anthropic の AWS 支出（10年間）", "$1,000億超", "コンピュート購入コミット"],
          ["年内 Trainium2/3 容量", "約 1 GW", "AWS リージョンで構築"]
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
        "headers": ["ベンチマーク", "Opus 4.7", "Opus 4.6", "差分"],
        "rows": [
          ["SWE-bench Verified", "87.6%", "80.8%", "+6.8pt"],
          ["Terminal-Bench 2.0", "69.4%", "65.4%", "+4.0pt"],
          ["GPQA Diamond", "94.2%", "91.3%", "+2.9pt"],
          ["Finance Agent", "64.4%", "60.7%", "+3.7pt"]
        ]
      },
      {
        "afterParagraph": 7,
        "caption": "提供プラットフォームと料金",
        "headers": ["プラットフォーム", "提供開始", "備考"],
        "rows": [
          ["Anthropic API", "2026-04-16", "$5/$25 per M トークン（4.6 と同額）"],
          ["Amazon Bedrock", "2026-04-16", "GA"],
          ["Google Cloud Vertex AI", "2026-04-16", "GA"],
          ["Microsoft Foundry", "2026-04-16", "GA"],
          ["GitHub Copilot", "2026-04-16", "Pro+/Business/Enterprise"]
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
        "headers": ["企業", "用途", "実績"],
        "rows": [
          ["Notion", "コーディング・スライド・スプレッドシート作成の委任", "数十タスクを並列実行"],
          ["Rakuten", "部門別スペシャリストエージェント", "各エージェント1週間以内で本番稼働"],
          ["Sentry", "コード自動化・HR・財務プロセス", "複数部門で展開中"]
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
        "headers": ["指標", "Muse Spark", "Claude Opus 4.6", "GPT-5.4", "Gemini 3.1 Pro"],
        "rows": [
          ["Intelligence Index v4.0", "52（4位）", "53（3位）", "57（1位タイ）", "57（1位タイ）"],
          ["HealthBench Hard", "42.8%（1位）", "—", "—", "—"],
          ["評価使用トークン", "5,800万", "1億5,700万", "1億2,000万", "5,800万"],
          ["ソース公開", "クローズド", "クローズド", "クローズド", "クローズド"]
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
        "headers": ["日付", "出来事", "結果"],
        "rows": [
          ["2025年7月", "Anthropic が DOD と $2億の契約締結", "DOD 機密ネットワークに Claude 展開"],
          ["2025年9月", "GenAI.mil への配備交渉が決裂", "自律兵器・大量監視の利用制限が争点"],
          ["2026年3月", "Hegseth 国防長官がサプライチェーンリスクに指定", "事実上の軍事ブラックリスト"],
          ["2026年3月26日", "カリフォルニア地裁が予備的差止命令", "Anthropic 勝訴（指定の執行一時停止）"],
          ["2026年4月8日", "D.C. 控訴裁が緊急差止を却下", "DOD 勝訴（ブラックリスト維持）"],
          ["2026年5月19日", "口頭弁論（予定）", "AI 調達政策の方向性を左右"]
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
        "headers": ["領域", "提言内容", "背景"],
        "rows": [
          ["立法の更新", "AI 生成 CSAM を明確に違法化する法改正", "現行法は実在の児童のみが対象"],
          ["報告メカニズム", "AI 生成コンテンツ検出と通報パイプラインの整備", "通報から捜査開始までの時間短縮"],
          ["予防的セーフガード", "訓練段階から CSAM 生成を困難にする技術的措置", "IWF: 2025年前半に8,000件超検出（前年比+14%）"]
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
        "headers": ["モード", "概要", "有効化方法"],
        "rows": [
          ["Default", "ファイル編集・コマンド実行前に逐一承認", "デフォルト"],
          ["Bypass Approvals", "特定アクションのみ自動承認", "VS Code 設定"],
          ["Autopilot（Preview）", "全アクション自律実行、エラー自動リトライ", "モデルピッカー / --autopilot フラグ"]
        ]
      },
      {
        "afterParagraph": 5,
        "caption": "Copilot CLI v1.0.21 MCP コマンド",
        "headers": ["コマンド", "機能"],
        "rows": [
          ["/mcp show", "MCP サーバー一覧・ステータス表示"],
          ["/mcp show SERVER-NAME", "サーバー詳細・ツール一覧"],
          ["/mcp edit SERVER-NAME", "サーバー設定の編集"],
          ["/mcp delete SERVER-NAME", "サーバーの削除"],
          ["/mcp disable / enable", "サーバーの有効・無効切り替え"]
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
        "headers": ["ベンチマーク", "Mythos Preview", "Claude Opus 4.6", "GPT-5.4 Pro"],
        "rows": [
          ["HLE（ツールなし）", "56.8%", "40.0%", "42.7%"],
          ["HLE（ツール使用）", "64.7%", "53.1%", "58.7%"],
          ["SWE-bench Verified", "93.9%", "80.8%", "（未公表）"],
          ["SWE-bench Pro", "77.8%", "53.4%", "（未公表）"],
          ["公開状況", "非公開（Glasswing限定）", "一般公開", "一般公開"]
        ]
      },
      {
        "afterParagraph": 5,
        "caption": "Project Glasswing 主要参加組織（約50社、抜粋）",
        "headers": ["分類", "参加組織"],
        "rows": [
          ["クラウド大手", "AWS、Google、Microsoft"],
          ["デバイス・半導体", "Apple、NVIDIA、Broadcom"],
          ["セキュリティ専業", "CrowdStrike、Palo Alto Networks、Cisco"],
          ["金融", "JPMorgan"],
          ["OSS基盤", "Linux Foundation"],
          ["合計予算", "$100M（約150億円）"]
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
        "headers": ["項目", "OpenAI", "Anthropic"],
        "rows": [
          ["年換算売上（ARR）", "約$240〜250億", "約$300億"],
          ["主力収益源", "ChatGPT サブスク（消費者）", "API・エンタープライズ統合"],
          ["評価額", "$8,520億", "（推定 $3,800億級）"],
          ["代表的な統合先", "Microsoft Copilot", "Cursor, Bedrock, Vertex AI"],
          ["週間アクティブユーザー", "9億人超（ChatGPT）", "公表なし（API中心）"]
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
        "headers": ["柱", "提案内容", "影響範囲"],
        "rows": [
          ["労働時間短縮", "給与据え置きの週32時間/4日制パイロット、生産性維持なら恒久化", "労使・労働政策"],
          ["自動化課税", "ロボット税、資本利得への高所得層課税、AI駆動リターンへの法人税", "税制"],
          ["公的資産ファンド", "国民が自動的にAI企業・インフラに出資、リターンを直接分配", "社会保障・再分配"],
          ["AIへのアクセス権", "AIを電力・インターネット並みの基礎インフラと位置づけ全員に保障", "デジタル権利・社会基盤"],
          ["安全網の自動発動", "経済指標が閾値を超えた時に自動で支援策が動く仕組み", "セーフティネット"],
          ["AGIガバナンス", "信頼性・アラインメント・安全性への高い基準を政府に求める", "規制・標準化"]
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
        "headers": ["項目", "内容", "影響"],
        "rows": [
          ["AI学習目的の同意緩和", "統計目的（AI開発含む）なら要配慮個人情報も同意不要", "AI開発を加速、プライバシー後退の懸念"],
          ["課徴金制度の新設", "千人超の大規模な不正取得・利用が対象、得た利益の相当額を徴収", "組織的な不正データ取得への抑止"],
          ["漏えい通知義務の緩和", "本人への個別通知の運用見直し", "事業者の負担軽減、消費者の知る権利後退の懸念"],
          ["オプトアウト強化", "第三者提供時の提供先・利用目的の確認義務化", "名簿屋経由の不透明流通に歯止め"],
          ["16歳未満の保護強化", "保護者同意・年齢確認義務の議論", "SNS・ゲーム事業者に影響"],
          ["委託先規律の見直し", "クラウド事業者・データ処理委託先の責任明確化", "BPO・SaaS事業者に影響"]
        ]
      },
      {
        "afterParagraph": 9,
        "caption": "国際比較: AI時代のプライバシー規制の方向性",
        "headers": ["国・地域", "方向性", "AI学習データの扱い"],
        "rows": [
          ["EU（GDPR + AI Act）", "同意ベース堅持・リスクベース規制", "原則として同意必要、高リスクAIに厳格義務"],
          ["米国（州ごと）", "消費者のオプトアウト権強化", "州法によるが、CCPA等は同意・通知重視"],
          ["中国（PIPL）", "AI開発目的での例外を一部認容", "国家戦略としてのAI育成を優先"],
          ["日本（改正案）", "AI学習目的の同意緩和＋悪質行為の課徴金", "要配慮情報も統計目的なら同意不要"]
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
        "headers": ["領域", "担当", "理由"],
        "rows": [
          ["画面・帳票・業務フロー", "現場の当事者（バイブコーディング）", "業界の機微を最もよく知る、試行錯誤が許される領域"],
          ["データモデル・スキーマ", "Vibe Architect（専門家）", "後から壊しにくい設計、整合性の保証"],
          ["認証・認可・権限境界", "Vibe Architect", "セキュリティ事故の多くがここで起きる"],
          ["CI/CD・自動テスト", "Vibe Architect", "本番投入前の最低限の検証"],
          ["監視・バックアップ・災害復旧", "Vibe Architect + プラットフォーム標準", "「沈黙の壊れ方」を検知する仕組み"],
          ["インシデント対応（午前3時）", "専門家チーム", "コードに責任を持つ主体が必要"]
        ]
      },
      {
        "afterParagraph": 12,
        "caption": "社会が整備すべき4つの制度",
        "headers": ["制度", "目的", "参考にできる既存制度"],
        "rows": [
          ["基幹システムの建築確認", "規制業種でのAI生成コードに有資格者の署名", "建築基準法の構造計算審査"],
          ["監査可能なバイブコーディング", "プロンプト・生成・承認のログ化", "金融業界の監査証跡規制"],
          ["セーフティ・バイ・デフォルト", "プラットフォームの安全機能を標準ON", "GDPR の Privacy by Design"],
          ["AI生成コード保険", "市場メカニズムで安全水準を引き上げ", "サイバー保険"]
        ]
      }
    ],
    "primarySources": []
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
        "headers": ["項目", "Sonnet 4.5/4（β）", "Sonnet 4.6 / Opus 4.6（GA）"],
        "rows": [
          ["1Mコンテキスト", "ベータヘッダー必須", "標準対応（ヘッダー不要）"],
          ["入力料金（MTok）", "$3〜$6（長文割増あり）", "$3 / $5（統一料金）"],
          ["利用期限", "4月30日で終了", "制限なし"],
          ["画像/PDF上限", "100枚/リクエスト", "600枚/リクエスト"],
          ["最大出力トークン", "標準", "300K（Batches API）"]
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
        "headers": ["ラウンド", "時期", "調達額", "評価額"],
        "rows": [
          ["Series C", "2024年9月", "$80M", "〜$765M"],
          ["Series D", "2025年4月", "$200M", "$2B"],
          ["Series E", "2025年10月", "$100M", "$5B"],
          ["新ラウンド（交渉中）", "2026年4月", "〜$500M", "〜$10B"]
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
        "headers": ["プラン", "データ学習", "オプトアウト"],
        "rows": [
          ["Copilot Free", "対象（デフォルトON）", "手動で無効化が必要"],
          ["Copilot Pro", "対象（デフォルトON）", "手動で無効化が必要"],
          ["Copilot Pro+", "対象（デフォルトON）", "手動で無効化が必要"],
          ["Copilot Business", "対象外（契約で禁止）", "不要"],
          ["Copilot Enterprise", "対象外（契約で禁止）", "不要"]
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
  "openai-122b-funding-round-852b-valuation-2026": {
    "body": [
      "**【取り下げのお知らせ（2026-06-05）】** 本記事は、同じ OpenAI $122B 資金調達を扱う先行記事と内容が重複していたため、編集ポリシーに基づき取り下げました。",
      "同じ事象に関する canonical 記事は「[OpenAI が史上最大の$122B（約18兆円）を調達、評価額$852B — Amazon・Nvidia・SoftBank が巨額出資、AI スーパーアプリ構想へ](?a=openai-122b-funding-852b-valuation-2026)」をご参照ください。Bloomberg・TechCrunch・CoinDesk・The AI Insider の一次ソースに基づき、出資内訳・スーパーアプリ構想・IPO 観測まで網羅しています。",
      "【編集履歴】",
      "・【取り下げ 2026-06-05】同事象の先行記事と重複していたため取り下げ。canonical 記事への案内に置換。元の本文は削除しました。"
    ],
    "primarySources": [
      {
        "title": "OpenAI raises $122 billion to accelerate the next phase of AI",
        "site": "OpenAI",
        "url": "https://openai.com/index/accelerating-the-next-phase-ai/"
      }
    ]
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
        "headers": ["機能", "概要"],
        "rows": [
          ["Agents Window", "Composer を置き換え、複数エージェントの並列実行・管理を一画面で"],
          ["Cloud-Local Handoff", "ローカルのエージェントセッションをクラウドに移行、オフライン中も継続"],
          ["Design Mode", "ブラウザ上でUIを直接アノテーション、視覚的にAIへ修正指示"],
          ["マルチリポ対応", "複数リポジトリを跨いだエージェント操作"],
          ["MCP リッチコンテンツ", "ツール出力に構造化データを含むレスポンス対応"]
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
        "headers": ["アプローチ", "強み", "弱み"],
        "rows": [
          ["DESIGN.md（Markdown）", "LLM が自然に理解、ツール不要、ポータブル", "LLM の解釈に依存、ピクセル精度は保証されない"],
          ["Figma + MCP", "ピクセル精度が高い、デザイナー協業に強い", "Figma 依存、MCP セットアップが必要"],
          ["Design Tokens（JSON）", "機械的に正確、フレームワーク非依存", "LLM にとって Markdown より理解しづらい"]
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
        "headers": ["プラットフォーム", "汚染件数", "主な被害対象"],
        "rows": [
          ["GitHub リポジトリ", "151件以上", "React関連、Wasmer、OpenCode 関連"],
          ["npm パッケージ", "複数件", "JavaScript/TypeScript ライブラリ"],
          ["VS Code / Open VSX 拡張", "72件以上", "3.5万DL超の拡張含む"],
          ["合計", "433件以上", "—"]
        ]
      },
      {
        "afterParagraph": 6,
        "caption": "怪しいパッケージの見分け方",
        "headers": ["チェック項目", "安全な兆候", "危険な兆候"],
        "rows": [
          ["GitHub リポジトリ", "存在する・README が充実・コントリビューター複数", "リポジトリがない・README が空・コントリビューター1人"],
          ["紹介のされ方", "公式サイトやドキュメントにリンクあり", "「npx xxx で一発」だけでソースへのリンクなし"],
          ["npm DL数", "週間1万DL以上", "数百DL以下"],
          ["最終更新", "6ヶ月以内", "1年以上放置"],
          ["postinstall スクリプト", "ない、またはビルド処理のみ", "外部URLへの通信・eval() の使用"],
          ["パッケージ名", "公式と完全一致", "公式名に似ているが微妙に違う（タイポスクワッティング）"]
        ]
      },
      {
        "afterParagraph": 10,
        "caption": "レベル別の防御策",
        "headers": ["レベル", "対策", "やり方"],
        "rows": [
          ["初心者", "CLAUDE.md にセキュリティルールをコピペ", "上記のルールを貼るだけでAIエージェントが自動防御"],
          ["初心者", "ソースが不明なコマンドを実行しない", "npx xxx や curl | sh でGitHubリンクがなければ実行しない"],
          ["中級者", "npm install --ignore-scripts", "postinstall の自動実行を防ぎ、audit後に rebuild"],
          ["中級者", "不可視文字の検出", "ESLint no-irregular-whitespace を .eslintrc に追加"],
          ["上級者", "CI/CD にサプライチェーン監査", "Socket / Snyk / npm audit を自動実行"],
          ["上級者", "eval() の完全排除 + branch protection", "コードベースから eval() 排除、PR レビュー必須化"]
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
        "headers": ["項目", "変更前", "変更後（4月4日〜）"],
        "rows": [
          ["Claude Code / Cowork", "サブスク定額枠内", "変更なし（定額枠内）"],
          ["OpenClaw 等サードパーティ", "サブスク定額枠内（グレー）", "Extra Usage（従量課金・別請求）"],
          ["移行クレジット", "—", "月額相当の一回限りクレジット（4/17まで引換、90日間有効）"],
          ["クレジット利用範囲", "—", "Claude Code・Cowork・チャット・サードパーティ全て"],
          ["割引", "—", "事前購入バンドルで最大30%オフ"],
          ["返金", "—", "サブスク返金オプション（翌日メール）"]
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
      "16歳の高校生 **Philip Zhao**（@Zhilips2009）が開発した3Dインタラクティブ化学学習アプリ「**Zperiod**」が X で大きな反響を呼んでいる。@adxtyahq が「高校生がこんな美しい3Dインタラクティブ化学アプリを作った」と紹介した投稿は19万回表示・4,000いいね超を記録した。",
      "Zperiod は全118元素に対応したインタラクティブ周期表で、各元素をクリックすると**3D原子モデル**（電子殻のアニメーション付き）が表示される。元素ごとに発見年、発見者、命名由来、一般的な用途、危険性、イオン情報などの詳細データがスワイプ可能なカード形式で閲覧できる。カテゴリ別の色分けや標準状態（STP）での相データも表示される。",
      "周期表だけでなく、化学学習に必要な実用ツールも充実している。**化学反応式バランサー**は複雑な化学式を自動でバランスし、ストイキオメトリー（化学量論）のフィードバックを視覚的に表示する。**経験式計算機**は分子量を元素ごとの質量内訳付きで瞬時に算出する。**溶解度表**ではイオン性化合物の溶解性をインタラクティブなチャートとルールで参照できる。いずれも Grade 9〜12（中学3年〜高校3年相当）の化学学習を想定した設計だ。",
      "ブラウザベースの Web アプリとして **zperiod.app** で無料公開されており、3D体験はデスクトップブラウザ推奨。インストール不要で即座に利用できる。Philip Zhao 本人も X で「Zperiod を作った高校生です。フィードバックをお待ちしています」と応答しており、ユーザーからは「学生時代にこんなツールがあれば」という声が多数寄せられている。",
      "AIツールが日々進化する中で、10代の開発者がそれらを活用して教育分野のプロダクトを自ら設計・構築・公開している事実は注目に値する。Zperiod は「AIが人間の仕事を奪う」という議論の裏側で、若い世代がAI時代のツールを武器に創造的なプロダクトを生み出している一例だ。"
    ],
    "embeds": [
      {
        "type": "x",
        "afterParagraph": 0,
        "url": "https://x.com/adxtyahq/status/2040034179812139393",
        "caption": "@adxtyahq による Zperiod 紹介ポスト（19万回表示）"
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
      "この機能拡大は、Claude を「高機能なチャットボット」から「日常業務に参加するアシスタント」へと進化させる戦略の一環だ。同日の Windows 版 Computer Use 対応と合わせ、Anthropic はユーザーの既存のワークフロー（メール、ドキュメント、デスクトップ操作）に Claude を直接統合する方向を鮮明にしている。GitHub では Max プランへの M365 コネクター開放を求める要望（#20469）が2026年1月から上がっており、ユーザーの声に応えた形だ。"
    ],
    "tables": [
      {
        "afterParagraph": 1,
        "caption": "M365 コネクター対応プラットフォーム",
        "headers": ["プラットフォーム", "対応", "備考"],
        "rows": [
          ["claude.ai（Web）", "○", "ブラウザから利用、コネクター追加も可能"],
          ["Claude Desktop（macOS）", "○", "デスクトップアプリから利用"],
          ["Claude Desktop（Windows）", "○", "デスクトップアプリから利用"],
          ["Claude Mobile（iOS / Android）", "○", "利用可能だが新規コネクターの追加は不可"],
          ["Claude Code（CLI）", "○", "MCP Connector 経由で利用"],
          ["API", "○", "MCP Connector 経由で利用"]
        ]
      },
      {
        "afterParagraph": 2,
        "caption": "Microsoft 365 コネクター対応サービス",
        "headers": ["サービス", "できること", "ユースケース例"],
        "rows": [
          ["Outlook", "メールの検索・要約・分析", "クライアントとの過去のやり取りを要約"],
          ["OneDrive", "個人ファイルの検索・参照", "特定のレポートを探して内容を確認"],
          ["SharePoint", "組織ドキュメントの横断検索", "プロジェクト仕様書や戦略資料を検索"],
          ["Teams", "チャット・チャンネル・会議メモの検索", "会議の決定事項を確認"]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "@claudeai — Microsoft 365 connectors announcement",
        "site": "X (Twitter)",
        "url": "https://x.com/claudeai/status/2040123456789012345"
      },
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
        "headers": ["機能", "内容"],
        "rows": [
          ["AIアバター", "PikaStream1.0 によるリアルタイム映像生成、表情・感情表現対応"],
          ["音声クローン", "10秒〜5分の音声サンプルから声を再現（7日未使用で失効）"],
          ["記憶・個性維持", "MEMORY.md・デイリーログ・人物情報からコンテキスト自動構築"],
          ["会議メモ", "退出時にミーティングノートを自動生成・共有"],
          ["対応プラットフォーム", "Google Meet（Zoom・FaceTime は近日対応予定）"],
          ["料金", "$0.50/分（ベータ）"]
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
        "headers": ["モデル", "分野", "ベンチマーク", "速度", "料金"],
        "rows": [
          ["MAI-Transcribe-1", "音声認識（STT）", "FLEURS 11言語で1位（WER 3.9%）", "Azure Fast比 2.5倍", "$0.36/時間"],
          ["MAI-Voice-1", "音声生成（TTS）", "—", "60秒音声を1秒で生成", "$22/100万文字"],
          ["MAI-Image-2", "画像生成", "Arena.ai トップ3", "従来比 2倍高速", "$5/100万トークン（入力）"]
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
        "headers": ["項目", "内容"],
        "rows": [
          ["対応OS", "macOS（3月23日〜）・Windows（4月2日〜）"],
          ["対応プラン", "Pro（$20/月）/ Max（$100〜$200/月）"],
          ["非対応プラン", "Team / Enterprise（現時点）"],
          ["前提条件", "最新版 Claude Desktop、PC起動中、アプリ起動中"],
          ["セットアップ", "不要（アプリインストールのみ）"]
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
        "headers": ["ティア", "月額支出上限", "レート制限の目安", "支払い方式"],
        "rows": [
          ["Tier 1", "$250", "標準", "プリペイド"],
          ["Tier 2", "$2,000", "拡張", "プリペイド / 後払い"],
          ["Tier 3", "$20,000〜$100,000+", "最大", "後払い（審査あり）"]
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
        "headers": ["CVE", "対象", "種別", "CVSS", "修正バージョン"],
        "rows": [
          ["CVE-2025-68664", "LangChain Core", "デシリアライゼーション", "9.3（Critical）", "Core 0.3.81 / LangChain 1.2.5"],
          ["CVE-2026-34070", "LangChain Core", "パストラバーサル", "7.5（High）", "Core 1.2.22"],
          ["CVE-2025-67644", "LangGraph", "SQLインジェクション", "7.3（High）", "checkpoint-sqlite 3.0.1"]
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
        "title": "Executive Order Targets State AI Regulation Through Federal Preemption",
        "site": "McGuireWoods Consulting",
        "url": "https://mwcllc.com/2026/01/20/executive-order-targets-state-ai-regulation-through-federal-preemption/"
      },
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
        "headers": ["モデル", "パラメータ", "アクティブ", "LMArena順位", "コンテキスト", "音声入力", "用途"],
        "rows": [
          ["31B Dense", "310億", "310億", "オープン3位（1452）", "256K", "×", "ワークステーション・ファインチューニング基盤"],
          ["26B MoE", "260億", "38億", "オープン6位（1441）", "256K", "×", "低レイテンシ推論・サーバーサイド"],
          ["E4B", "実効40億", "40億", "—", "128K", "○", "スマホ・エッジデバイス"],
          ["E2B", "実効20億", "20億", "—", "128K", "○", "IoT・Raspberry Pi・Jetson"]
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
        "headers": ["アプリ", "対応OS", "音声認識", "翻訳エンジン", "オフライン", "特徴"],
        "rows": [
          ["RTranslator", "Android", "Whisper（ローカル）", "NLLB（ローカル）", "完全対応", "Bluetooth会話モード・サーバー不要・31言語"],
          ["LiveCaptions-Translator", "Windows 11", "LiveCaptions（OS標準）", "Google翻訳 / ローカルLLM", "翻訳部分のみ選択可", "オーバーレイ字幕・ゲーム/動画対応"],
          ["my-translator", "macOS / Windows", "Whisper（MLX）", "Gemma（ローカル）", "実験的に対応", "API不要・テレメトリゼロ・日英中韓対応"]
        ]
      },
      {
        "afterParagraph": 5,
        "caption": "翻訳サービスのコスト比較",
        "headers": ["方式", "1,000語あたりコスト", "所要時間", "セキュリティ"],
        "rows": [
          ["人間の翻訳者", "3,000〜15,000円", "数時間〜1日", "NDA契約で担保"],
          ["クラウドAI翻訳（有料）", "数十円〜数百円", "数秒", "サービスにより異なる（データ二次利用リスクあり）"],
          ["ローカルOSS翻訳", "無料（電力のみ）", "数秒", "音声データが端末外に出ない"]
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
        "headers": ["モデル", "パラメータ", "メモリ", "速度（M4 Pro）", "用途"],
        "rows": [
          ["Bonsai 8B", "82億", "1.15 GB", "136 tok/s", "汎用・エージェント"],
          ["Bonsai 4B", "40億", "0.5 GB", "—", "モバイル・IoT"],
          ["Bonsai 1.7B", "17億", "0.24 GB", "—", "ロボティクス・リアルタイム"]
        ]
      },
      {
        "afterParagraph": 2,
        "caption": "Bonsai 8B vs 同サイズモデル比較",
        "headers": ["モデル", "ベンチマーク平均", "メモリ", "速度（M4 Pro）"],
        "rows": [
          ["Bonsai 8B（1ビット）", "70.5", "1.15 GB", "136 tok/s"],
          ["Llama 3 8B（16ビット）", "67.1", "16 GB", "~17 tok/s"],
          ["Ministral3 8B（16ビット）", "71.0", "16 GB", "~17 tok/s"]
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
        "headers": ["項目", "詳細"],
        "rows": [
          ["開発元", "Roboflow（ICLR 2026 発表）"],
          ["バックボーン", "DINOv2 ビジョントランスフォーマー"],
          ["COCO mAP", "60+ mAP（リアルタイムモデル初）"],
          ["モデルサイズ", "Nano / Small / Medium / Large / XL / 2XL"],
          ["NMS不要", "推論時に Non-Maximum Suppression が不要（YOLO より高速）"],
          ["ドメイン適応", "RF100-VL で 86.7 mAP（医療・工業・航空など）"],
          ["ライセンス", "Apache 2.0（Plus モデルは PML 1.0）"]
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
        "headers": ["ベンチマーク", "分野", "Qwen3.6-Plus", "Qwen3.5-397B", "Kimi K2.5", "GLM5", "Claude 4.5 Opus", "Gemini3-Pro"],
        "rows": [
          ["Terminal-Bench 2.0", "エージェント型ターミナル操作", "61.6", "52.5", "50.8", "56.2", "59.3", "—"],
          ["SWE-bench Pro", "エージェント型コーディング", "56.6", "50.9", "53.8", "—", "55.1", "57.1"],
          ["SWE-bench Verified", "エージェント型コーディング", "78.8", "76.2", "76.8", "77.8", "80.9", "—"],
          ["SWE-bench Multilingual", "多言語コーディング", "73.8", "—", "69.3", "73.0", "80.9", "77.5"],
          ["Claw-Eval (pass^3)", "実世界エージェント", "58.7", "48.1", "52.9", "57.7", "59.6", "—"],
          ["MMMU", "マルチモーダル推論", "86.0", "85.0", "84.3", "—", "80.7", "87.2"],
          ["OmniDocBench v1.5", "文書認識", "91.2", "90.8", "88.8", "—", "87.7", "88.5"],
          ["Video-MME", "動画推論", "87.8", "87.5", "87.4", "—", "77.6", "88.4"]
        ]
      }
    ],
    "charts": [
      {
        "afterParagraph": 1,
        "title": "Terminal-Bench 2.0（エージェント型ターミナル操作）",
        "subtitle": "スコアが高いほど優秀",
        "bars": [
          { "label": "Qwen3.6-Plus", "value": 61.6, "color": "#7c3aed" },
          { "label": "Claude 4.5 Opus", "value": 59.3, "color": "#f97316" },
          { "label": "GLM5", "value": 56.2, "color": "#6366f1" },
          { "label": "Qwen3.5-397B", "value": 52.5, "color": "#c4b5fd" },
          { "label": "Kimi K2.5", "value": 50.8, "color": "#93c5fd" }
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
        "headers": ["項目", "Page Agent", "Selenium / Playwright", "browser-use"],
        "rows": [
          ["動作環境", "ブラウザ内 JavaScript", "サーバーサイド（Python等）", "サーバーサイド（Python）"],
          ["セットアップ", "script タグ1行 or npm install", "Python + WebDriver + ブラウザ", "Python + ブラウザ"],
          ["LLM 要件", "テキスト LLM のみ", "—（ルールベース）", "マルチモーダル LLM"],
          ["API キー（デモ）", "不要", "—", "必要"],
          ["複数タブ操作", "Chrome 拡張で対応", "標準対応", "標準対応"],
          ["ライセンス", "MIT", "Apache 2.0", "AGPL-3.0"]
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
  "codex-plugins-marketplace-2026": {
    "body": [
      "OpenAI は2026年3月26日、コーディングエージェント Codex 向けのプラグインマーケットプレイスを公開した。Slack、Figma、Notion、Gmail、Google Drive、Box、Linear、Sentry、Hugging Face など 20 以上のツールとの統合が、アプリ版・CLI・IDE 拡張のすべてで利用できる。",
      "各プラグインは「認証設定」と「スキル（定義済みプロンプトワークフロー）」をバンドルしており、インストールするだけで Codex がそのツールを操作できるようになる。技術的には MCP（Model Context Protocol）サーバー構成がベースで、Claude Code の MCP 連携と同じプロトコルを共有している点が興味深い。",
      "これにより Codex は「コードを書くだけ」のツールから、Figma でデザインを確認しながらコードを生成し、Slack で進捗を報告し、Linear でチケットを更新する——といった**マルチツール横断のエージェント**に進化する。Claude Code が Hooks と MCP で拡張性を高めてきたのに対し、Codex はプラグインという「すぐ使える」アプローチで差別化を図った形だ。",
      "OpenAI は近日中にサードパーティ向けのセルフパブリッシュツールも公開予定で、チーム単位のプライベートマーケットプレイスも構築可能になる。Codex の週間アクティブユーザーは 160 万人を超えており、プラグインエコシステムの拡大がユーザー定着にどう影響するか注目される。"
    ],
    "primarySources": [
      {
        "title": "Plugins – Codex",
        "site": "OpenAI Developers",
        "url": "https://developers.openai.com/codex/plugins"
      },
      {
        "title": "OpenAI's Codex gets a plugin marketplace",
        "site": "The Decoder",
        "url": "https://the-decoder.com/openais-codex-gets-a-plugin-marketplace-for-slack-notion-figma-and-more/"
      }
    ]
  },
  "openai-sora-shutdown-2026": {
    "body": [
      "OpenAI は2026年3月24日、昨年華々しくローンチした動画生成アプリ Sora の終了を発表した。Web・アプリ版は4月26日、API は9月24日にサービス終了となる。ローンチからわずか6ヶ月での撤退は、AI 動画生成市場の厳しい現実を象徴している。",
      "Sora の全世界ユーザー数はピーク時に約100万人に達したが、その後50万人未満にまで減少。一方で運用コストは1日あたり約100万ドル（年間約3.6億ドル）に上り、収益に見合わない状態が続いていた。投資家からの収益重視圧力もあり、ChatGPT とコア API に経営資源を集中させる判断に至った。",
      "注目すべきは、Sora に割り当てていた GPU 計算資源の転用先だ。OpenAI は Sora チームの研究者を「ワールドシミュレーション」研究に再配置し、ロボティクス分野での実世界タスク支援に注力すると表明している。動画を「生成する」から「物理世界を理解する」へと研究の軸足を移した形だ。",
      "Disney は Sora との提携に10億ドルを投じていたが、公表の1時間前に初めて終了を知らされたと報じられている。AI 動画生成市場では Runway Gen-5 や Google Veo が競争を続けるが、Sora の撤退は「計算コスト vs 収益化」という業界共通の課題を浮き彫りにした。"
    ],
    "primarySources": [
      {
        "title": "OpenAI is shutting down its Sora video app",
        "site": "CNN",
        "url": "https://edition.cnn.com/2026/03/24/tech/openai-sora-video-app-shutting-down"
      },
      {
        "title": "Why OpenAI really shut down Sora",
        "site": "TechCrunch",
        "url": "https://techcrunch.com/2026/03/29/why-openai-really-shut-down-sora/"
      }
    ]
  },
  "mistral-voxtral-tts-2026": {
    "body": [
      "フランスの Mistral AI は2026年3月26日、オープンウェイトの音声合成（TTS）モデル「Voxtral TTS」を公開した。3B パラメータと軽量ながら、ブラインドテストでは標準音声で63%、カスタム音声で約70%の割合で ElevenLabs より好まれたと報告している。",
      "Voxtral TTS の特徴は、エッジデバイスでの動作を前提に設計された点。スマートウォッチ、スマートフォン、ノート PC など、ローカル環境で動作するため、クラウド API への依存を排除できる。9言語（英語・フランス語・ドイツ語・スペイン語・オランダ語・ポルトガル語・イタリア語・ヒンディー語・アラビア語）に対応し、日本語は現時点では未対応。",
      "開発者にとって注目すべきは、5秒の音声サンプルだけでアクセント・抑揚・話し方の癖まで再現するボイスクローン機能と、初音声出力までわずか90ミリ秒という低レイテンシだ。リアルタイムファクター（RTF）は6倍で、10秒分の音声を約1.6秒で生成できる。",
      "API 料金は $0.016/1K文字。Hugging Face でオープンウェイト版（CC BY-NC 4.0 ライセンス）も公開されており、商用利用には API 経由が必要。AI エージェントに「声」を持たせたい開発者にとって、有力な選択肢が加わった。"
    ],
    "primarySources": [
      {
        "title": "Speaking of Voxtral",
        "site": "Mistral AI",
        "url": "https://mistral.ai/news/voxtral-tts"
      },
      {
        "title": "Voxtral-4B-TTS-2603",
        "site": "Hugging Face",
        "url": "https://huggingface.co/mistralai/Voxtral-4B-TTS-2603"
      }
    ]
  },
  "supabase-pgvector-0-8-2026": {
    "body": [
      "Supabase は2026年3月27日、全プロジェクトで pgvector 0.8 を標準搭載したことを発表した。HNSW（Hierarchical Navigable Small World）インデックスの構築速度が従来比3倍に向上し、クエリのレイテンシも改善されている。",
      "pgvector 0.8 の主な改善点は、HNSW インデックスのビルドにおけるメモリ使用量の最適化と並列構築の対応。100万ベクトルのインデックス構築が、0.7 では約45分かかっていたものが約15分に短縮された。検索クエリのレイテンシも p99 で20〜30%改善されている。",
      "RAG（検索拡張生成）を構築する開発者にとって、Supabase + pgvector の組み合わせは最も手軽な選択肢の一つ。専用のベクトルデータベース（Pinecone、Weaviate 等）を別途契約する必要がなく、PostgreSQL の中でリレーショナルデータとベクトル検索を統合できる。Supabase の無料枠（500MB）でも pgvector は利用可能で、個人プロジェクトや PoC に最適。",
      "Supabase は同時に、AI 関連の新機能として Edge Functions からの直接ベクトル検索 API と、ドキュメント取り込みパイプライン（PDF → チャンク → エンベディング → 格納）のテンプレートも公開している。"
    ],
    "primarySources": [
      {
        "title": "Supabase Blog",
        "site": "Supabase",
        "url": "https://supabase.com/blog"
      }
    ]
  },
  "pinecone-serverless-free-tier-2026": {
    "body": [
      "ベクトルデータベース大手の Pinecone は2026年3月25日、サーバーレスプランの無料枠を従来の10万ベクトルから100万ベクトルに拡大した。書き込み・読み取りのクォータも引き上げられ、月間200万回のクエリが無料枠に含まれる。",
      "Pinecone は「ベクトルデータベースをインフラの心配なしに使う」サーバーレスモデルを2025年に導入し、ベクトル検索のコモディティ化を牽引してきた。今回の無料枠拡大は、Supabase の pgvector や Weaviate Cloud の無料枠との競争を意識した動き。",
      "開発者への影響は大きい。数千〜数万件のドキュメントを扱う RAG アプリケーションであれば、Pinecone の無料枠で本番運用まで賄える。これまでは PoC 段階で有料プラン（$70/月〜）への移行が必要だったが、無料枠の拡大により課金のハードルが下がった。",
      "有料プランは Starter（$33/月、500万ベクトル）から Enterprise（カスタム、SOC 2 / HIPAA 対応）まで。pgvector との選択は「マネージドの手軽さ vs PostgreSQL 統合の柔軟性」で判断する。"
    ],
    "primarySources": [
      {
        "title": "Pinecone Pricing",
        "site": "Pinecone",
        "url": "https://www.pinecone.io/pricing/"
      }
    ]
  },
  "langchain-v04-rag-pipeline-2026": {
    "body": [
      "LangChain は2026年3月26日、v0.4 をリリースした。最大の変更は RAG パイプラインの構築 API の大幅な簡素化で、v0.3 で煩雑だったチェーン構築が、宣言的な API で直感的に記述できるようになった。",
      "v0.4 の新しい `create_rag_chain()` 関数は、ドキュメントローダー（PDF、Markdown、Web ページ）、テキストスプリッター（チャンキング戦略）、エンベディングモデル、ベクトルストア、LLM を引数に取り、検索→コンテキスト注入→生成の一連の RAG パイプラインを1つの関数呼び出しで構築する。v0.3 では同等の処理に30〜50行のコードが必要だった。",
      "LangGraph との統合も強化された。Agentic RAG（エージェント型 RAG）では、LLM が検索クエリを自動で書き換えたり、複数のデータソースを順次検索したりするループ処理が必要になるが、LangGraph のステートマシンでこのフローを定義できる。v0.4 では `create_agentic_rag()` テンプレートが追加され、数行で Agentic RAG を構築可能。",
      "破壊的変更として、v0.3 の `RetrievalQA` チェーンが非推奨になり、v0.5 で削除予定。既存プロジェクトの移行ガイドが公式ドキュメントに用意されている。Python 版と TypeScript（LangChain.js）版の両方で同時リリース。"
    ],
    "primarySources": [
      {
        "title": "LangChain v0.4 Release",
        "site": "LangChain",
        "url": "https://blog.langchain.dev/"
      }
    ]
  },
  "midjourney-v8-api-launch-2026": {
    "body": [
      "Midjourney は2026年3月、V8 モデルの公開とともに、長らく待望されていた Web アプリケーションと REST API を正式にリリースした。これまで Midjourney は Discord ボット経由でのみ利用可能で、開発者やビジネスユーザーにとって大きなハードルだった。",
      "**Web アプリ**: midjourney.com で直接画像を生成・編集できるブラウザベースのインターフェース。プロンプト入力、スタイルパラメータの調整、生成画像のバリエーション作成、アップスケールが GUI で完結する。Discord のチャンネルを遡って画像を探す必要がなくなった。",
      "**REST API**: 開発者向けに REST API が公開された。JSON でプロンプト・パラメータを送り、Webhook で完成画像の URL を受け取る非同期方式。レート制限は Basic プラン（$10/月）で 200 枚/月、Pro プラン（$30/月）で 900 枚/月（Fast 生成）。Enterprise（$60/月〜）は Relax モードで無制限生成に加え、IP 補償と SAM L統合が付く。",
      "**V8 モデルの進化**: V8 は V6.1 からの大幅なアップグレードで、プロンプトへの忠実度、人物の手指・歯の描写精度、テキスト生成精度が改善された。1024×1024 のデフォルト解像度に加え、最大 4096×4096 のアップスケールに対応。生成速度は Fast モードで約 10 秒。",
      "**開発者にとっての意味**: API の公開により、Midjourney の画質を自社プロダクトに組み込めるようになった。ECサイトの商品画像生成、マーケティング素材の自動作成、ゲームのコンセプトアート量産などのユースケースが開ける。ただし、API の料金は GPT Image（OpenAI）や Flux（Black Forest Labs）と比較して割高で、大量生成にはコスト計算が必要。"
    ],
    "primarySources": [
      {
        "title": "Midjourney Web & API",
        "site": "Midjourney",
        "url": "https://www.midjourney.com/"
      }
    ]
  },
  "runway-gen5-video-generation-2026": {
    "body": [
      "Runway は2026年3月、動画生成モデル Gen-5 を発表した。Gen-4.5 から約6ヶ月でのメジャーアップデートで、生成可能な動画の長さ、物理シミュレーションの精度、カメラ制御の自由度が大きく向上した。",
      "**最大2分の動画生成**: Gen-4.5 の最大10秒から大幅に拡張され、最大120秒（2分）の一貫した動画を1プロンプトで生成できるようになった。キャラクターの一貫性が保たれ、シーン遷移も自然に処理される。ただし、長尺生成はコストが高く、120秒の動画1本で約$12〜$18。",
      "**物理シミュレーション**: 水の流れ、布の揺れ、髪の動き、物体の落下といった物理現象が自然に描画される。「ガラスのコップにコーヒーを注ぐ」「風に揺れるカーテン」のようなプロンプトで、物理法則に矛盾しない映像が生成される。Gen-4.5 で頻発した「指が6本」「物体が消える」といったアーティファクトも大幅に減少。",
      "**カメラ制御**: パン、チルト、ズーム、ドリー、クレーンショットなどのカメラワークをテキストで指定できる。「被写体を中心にゆっくり180度回転」「上空から地上へのクレーンダウン」といった映画的なカメラワークが実現する。",
      "**API と料金**: REST API 経由でバッチ生成に対応。5秒動画が約$0.50、30秒が約$3、120秒が約$12〜$18（解像度・品質による）。Standard プラン（$12/月）では 625 クレジット（5秒動画 約50本分）が付与される。Unlimited プラン（$76/月）は Relax モードで無制限生成。",
      "**競合との位置づけ**: Google Veo 3.1 はネイティブ音声付き動画で差別化、Kling 2.0（快手）はコストパフォーマンスで優位。Runway Gen-5 はカメラ制御の精度とプロ向けの編集ツール統合（Adobe Premiere との連携プラグイン）が強み。用途に応じた選択が重要。"
    ],
    "primarySources": [
      {
        "title": "Introducing Gen-5",
        "site": "Runway",
        "url": "https://runwayml.com/"
      }
    ]
  },
  "ai-image-api-guide-developers-2026": {
    "body": [
      "画像生成 AI をアプリケーションに組み込む場合、選択肢は大きく4つに絞られる。OpenAI の GPT Image API、Black Forest Labs の Flux API、Midjourney の REST API（2026年3月公開）、そして Recraft の API。それぞれ強みが異なるため、用途に応じた選択が必要。",
      "**GPT Image API（OpenAI）**: ChatGPT で使われている画像生成モデルを API 経由で呼び出す。最大の利点は OpenAI の既存 SDK に統合されている点で、テキスト生成と画像生成を同じ API キーで利用できる。プロンプトへの忠実度が高く、画像内テキストの生成精度も優秀。料金は 1024×1024 で $0.04/枚（HD）。バイブコーディングで最も手軽に始められる選択肢。",
      "**Flux API（Black Forest Labs）**: フォトリアル系で最高クラスの品質。Replicate や fal.ai 経由で利用でき、Flux 2 Pro は $0.05/枚程度。Stable Diffusion の後継的な位置づけで、細部の描写力が高い。ControlNet 対応でポーズ指定や構図制御も可能。自社サーバーにデプロイする場合はオープンウェイトの Flux 2 Schnell（高速版）も選べる。",
      "**Midjourney REST API**: 2026年3月に正式公開。アート性・美的品質では依然トップクラスだが、API の料金は Basic $10/月で 200 枚と割高。Webhook ベースの非同期 API で、リアルタイムアプリには不向き。マーケティング素材やクリエイティブ用途に特化。",
      "**Recraft API**: SVG ベクター出力に対応する唯一の主要 API。ロゴ、アイコン、イラスト生成に強い。料金は $0.04/枚程度で GPT Image と同等。デザインシステムとの統合で威力を発揮する。",
      "**選び方のフローチャート**: 「とりあえず試したい」→ GPT Image（OpenAI SDK で即実装）。「フォトリアルが必要」→ Flux。「アート性重視」→ Midjourney。「ベクター/ロゴが必要」→ Recraft。「コストを最小化」→ GPT Image または Flux Schnell（セルフホスト）。「著作権補償が必要」→ Adobe Firefly（Enterprise 契約）。",
      "**実装例（OpenAI SDK）**: バイブコーディングで最短の実装は OpenAI SDK を使う方法。Claude Code や Cursor で「OpenAI の画像生成 API を使って、ユーザーのテキストから画像を生成するエンドポイントを作って」と指示すれば、数分で動作するコードが得られる。API キーの管理には環境変数を使い、.env に `OPENAI_API_KEY` を設定する。"
    ],
    "primarySources": [
      {
        "title": "OpenAI Image Generation",
        "site": "OpenAI",
        "url": "https://platform.openai.com/docs/guides/images"
      },
      {
        "title": "Flux API",
        "site": "Black Forest Labs",
        "url": "https://blackforestlabs.ai/"
      },
      {
        "title": "Recraft API",
        "site": "Recraft",
        "url": "https://www.recraft.ai/"
      }
    ]
  },
  "how-ai-models-are-built-2026": {
    "body": [
      "AI モデルの作り方は大きく3段階に分かれる。ゼロからの事前学習（Pre-training）、既存モデルへの追加学習（Fine-tuning）、そして人間のフィードバックによる行動調整（RLHF）。この3つを理解すると、なぜ Opus 4.6 と Composer 2 では作り方もコストもまったく違うのかが見えてくる。",
      "**ゼロから作る（事前学習）**: Opus 4.6 や GPT-5.4 のようなフロンティアモデルは、インターネット上の膨大なテキスト（数兆トークン）を読み込み、「次の単語を予測する」タスクを繰り返して学習する。Common Crawl（2008年からウェブを定期アーカイブしているデータ源）、Wikipedia、書籍、論文、コードなどが使われる。GPT-4 の学習コストは推定7,800万〜1億ドル、GPT-5 は1回の学習で5億〜25億ドルとされる。NVIDIA H100 を数万台、数ヶ月間フル稼働させる規模で、個人や中小企業が手を出せる領域ではない。",
      "**追加学習（ファインチューニング）**: [Cursor の Composer 2](?a=cursor-composer-2-kimi-2026) は、Moonshot AI が公開した [Kimi K2.5](?a=kimi-k25-moonshot-2026)（オープンウェイト）をベースに、Cursor が独自のコーディングデータで追加学習して作った。事前学習済みの「土台」を使うため、コストはゼロからの学習の5〜10%で済む。OpenAI は Fine-tuning API で GPT-4o のファインチューニングを提供しており、企業が自社データでモデルを調整することも可能。2026年3月には OpenAI が gpt-oss-120b をオープンソースで公開し、誰でもファインチューニングのベースにできるようになった。",
      "**行動の調整（RLHF）**: 事前学習だけでは「次の単語を予測する」能力しかなく、質問に「有用で安全に」答える能力は持っていない。RLHF（Reinforcement Learning from Human Feedback）では、人間のアノテーターがモデルの回答を「良い/悪い」でランク付けし、そのデータから「報酬モデル」を作り、メインモデルが高スコアの回答を生成するよう強化学習で最適化する。各社はこの段階で独自の倫理方針を反映しており、Anthropic の Constitutional AI、OpenAI の safety tuning、Google の responsible AI guidelines など、同じ技術でも「やっていいこと」の線引きが異なる。",
      "**企業が自社の知識を入れるには**: 「社内マニュアルを AI に理解させたい」場合、現実的な選択肢は3つある。",
      "(1) **RAG**（検索拡張生成）: 社内文書をベクトル化して検索し、質問時に関連情報を LLM に渡す。最も手軽で、データの更新もリアルタイムに反映できる（[→ RAG ステップバイステップ](?a=rag-getting-started-step-by-step-2026)）。",
      "(2) **ファインチューニング**: ドメイン固有の用語や文体を学習させる。月間1,000万トークン超の高頻度利用ではコスト面で有利になる。",
      "(3) **ハイブリッド**: ファインチューニングで文体を統一し、RAG で動的な事実情報を取得する組み合わせが2026年の主流。精度は RAG 単体の89%、ファインチューニング単体の91%に対し、ハイブリッドで96%とされる。==フルトレーニングは数億ドル規模のため、99.9%の企業にとって選択肢にならない==。",
      "**国産 AI の動向**: 日本でも政府の GENIAC プログラム（経済産業省 + NEDO、公募総額339億円）で国産 LLM 開発が加速している。**Preferred Networks** の PLaMo 2.0（31B）、**NTT** の tsuzumi 2（30B、H100 1台で動作）、**Sakana AI** の Namazu（海外 OSS モデルを日本仕様に適応）、**楽天** の Rakuten AI 3.0（約700B の MoE、GPT-4o を日本語ベンチマークで上回る）などが代表格。デジタル庁は行政向け AI 基盤「ゲンナイ」用の国産 LLM を公募し、tsuzumi 2 や PLaMo 2.0 Prime など7社を選定した。課題は**日本語データの深刻な不足**で、英語圏と比べて学習に使えるデータ量が限られている。"
    ],
    "tables": [
      {
        "afterParagraph": 3,
        "caption": "AI モデルの作り方 — 3段階の比較",
        "headers": [
          "段階",
          "具体例",
          "コスト目安",
          "期間",
          "誰がやるか"
        ],
        "rows": [
          [
            "ゼロから事前学習",
            "Opus 4.6, GPT-5.4",
            "1億〜25億ドル",
            "数ヶ月〜1年",
            "Anthropic, OpenAI 等の大企業"
          ],
          [
            "追加学習（FT）",
            "Composer 2（Kimi K2.5ベース）",
            "事前学習の5〜10%",
            "数時間〜数日",
            "中規模企業・スタートアップ"
          ],
          [
            "RLHF（行動調整）",
            "全フロンティアモデル",
            "追加のGPU + アノテーター費用",
            "数週間",
            "モデル開発企業"
          ]
        ]
      },
      {
        "afterParagraph": 7,
        "caption": "企業の知識を AI に入れる方法の比較",
        "headers": [
          "方法",
          "コスト",
          "精度",
          "データ更新",
          "向いている場面"
        ],
        "rows": [
          [
            "RAG",
            "初年度最安（API費用のみ）",
            "89%",
            "リアルタイム可",
            "FAQ、社内マニュアル検索"
          ],
          [
            "ファインチューニング",
            "1回の高額投資",
            "91%",
            "再学習が必要",
            "ドメイン用語・文体の統一"
          ],
          [
            "ハイブリッド（FT+RAG）",
            "中程度",
            "96%",
            "RAG部分はリアルタイム",
            "高精度が必要な業務"
          ],
          [
            "ゼロからの学習",
            "1億ドル〜",
            "最高",
            "再学習が必要",
            "新言語・新領域（非現実的）"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Cost of Training LLM From Scratch in 2026",
        "site": "AI Superior",
        "url": "https://aisuperior.com/cost-of-training-llm-from-scratch/"
      },
      {
        "title": "RLHF 101: A Technical Tutorial",
        "site": "Carnegie Mellon University",
        "url": "https://blog.ml.cmu.edu/2025/06/01/rlhf-101-a-technical-tutorial-on-reinforcement-learning-from-human-feedback/"
      },
      {
        "title": "GENIAC（経済産業省）",
        "site": "経済産業省",
        "url": "https://www.meti.go.jp/policy/mono_info_service/geniac/index.html"
      },
      {
        "title": "RAG vs Fine-Tuning: Cost Game",
        "site": "DEV Community",
        "url": "https://dev.to/remojansen/rag-vs-fine-tuning-which-one-wins-the-cost-game-long-term-12dg"
      }
    ]
  },
  "local-llm-vs-api-reality-2026": {
    "body": [
      "「API に毎月お金を払うなら、自分の PC でモデルを動かした方が安いのでは？」という疑問は自然だ。結論から言うと、2026年時点では==大多数のユーザーにとって API の方が安く、高性能==。ただしプライバシー要件や超大量利用の場合にはローカル運用が有利になるケースもある。",
      "**モデルサイズと必要スペック**: LLM はパラメータ数が大きいほど賢いが、その分メモリ（VRAM）を食う。7B（70億パラメータ）モデルは量子化すれば 4〜6GB の VRAM で動き、RTX 4060 Ti 程度で実用的。13B は 8〜10GB、70B は 35〜40GB で RTX 4090 を2枚または A100 80GB が必要になる。Opus 4.6 クラス（推定アクティブパラメータ930億〜1,050億、総パラメータ1.5兆〜2兆）は Q4 量子化しても約750GB の VRAM が必要で、H100 80GB が10台以上。==個人の PC で動かすのは物理的に不可能==。",
      "**ローカル推論ツール**: 主要な選択肢は3つある。",
      "(1) **Ollama**: `ollama run llama3.1` の1コマンドで起動でき、個人利用やプロトタイプに最適。Go 製で REST API も提供する。",
      "(2) **llama.cpp**: C/C++ 実装で外部依存がなく、CPU でも動作する。モバイルアプリや組込み機器への搭載に向く。",
      "(3) **vLLM**: Python 製で PagedAttention による GPU メモリ最適化と連続バッチ処理が特徴。10並列リクエスト時に Ollama の約8倍のスループットを出す。プロダクション API や SaaS のバックエンドに使われる。",
      "**API vs ローカルのコスト比較**: ここで注意すべきは **API 従量課金とサブスクリプションプランはまったく別物** だという点。API 従量課金で1日1億トークン使えば月額数十万円になるが、Claude Code Max プラン（$200/月）なら同じ1日1億トークンでも定額。==サブスクプランが存在するツールでは、ローカル運用とのコスト比較で API 従量課金の単価を使うのは不適切==。実際に Claude Code Max で1日1億トークンを利用しているユーザーもおり、API 従量課金なら月額数十万円相当の処理が $200 で済んでいる。ローカルの 8B モデル（月$320 + 保守の手間）より安く、しかも Opus 4.6 の品質で使える。ローカル運用が有利になるのは以下に限られる。",
      "(a) サブスクプランが存在しない従量課金のみの API を大量利用する場合。",
      "(b) プライバシー要件で社内データを外部に一切出せない場合。",
      "(c) 月間数百億トークン超の超大量バッチ処理で、サブスクの制限を超える場合。",
      "**サブスクプランのレート制限の実態**: Claude Code Max には5時間ローリングウィンドウ・7日・月の3段階の制限がある。Max 5x（$100/月）は Pro の5倍、Max 20x（$200/月）は Pro の20倍の制限枠。具体的なトークン数の上限は Anthropic が公開しておらず、利用パターン（入力/出力の比率、モデル選択等）によって変動する。あるユーザーは Max 5x（$100/月）で8ヶ月間に大量のトークンを消費し、API 直接利用と比べて大幅に安く済んだと報告している。==Max 20x はさらに4倍の余裕がある==ため、1日1億トークン規模の利用でも制限に到達しにくい。一方、Pro プラン（$20/月）は集中的なコーディングで15〜30分でレート制限に到達するとの報告が多い。Cursor Ultra（$200/月）は月 $400 相当の API クレジットが付与される。Auto モード（内部で使われるモデルは難易度や時期で自動切り替え、並列実行もある）はクレジット消費なしの無制限で、実際に1日1億トークンを消費しているユーザーもいる。ただし Claude Sonnet や GPT 等の特定モデルを手動指定した場合はクレジットが消費される。==「Auto 無制限」は手動モデル指定を含まない==。クレジット枯渇後は on-demand usage（従量課金）で継続利用可能だが、==想定外の課金を防ぐには spend limit（支出上限）を設定しておく==のが安全。2026年3月時点では Claude Code のピーク時間帯（太平洋時間 5am-11am）にセッション制限の消費が速くなる調整が入っている。",
      "**Opus 4.6 クラスがローカルで動かない理由**: Anthropic はパラメータ数を公開していないが、研究者の推定では Opus 4.6 のアクティブパラメータは約930億〜1,050億。MoE 構造の総パラメータは推定1.5兆〜2兆。FP16 で約3TB、Q4 量子化でも約750GB の VRAM が必要。H100 80GB が10台（=約25万ドル）でも足りない可能性がある。そしてそもそも Opus 4.6 はオープンウェイトではなく、重みファイルが公開されていないため、ハードウェアがあっても動かせない。==フロンティアモデルは API で使うしかない==。",
      "**現実的な使い分け**:",
      "(1) **日常の開発**: Claude Code Max（$200/月）や Cursor Pro（$20/月）のサブスクプランが圧倒的にコスパが良い。1日1億トークンでも定額で最高品質のモデルが使える。==まずサブスクプランを検討し、それで足りるならローカルは不要==。",
      "(2) **ヘビーユーザーの二刀流**: Claude Code Max には5時間・7日・月の3段階のレート制限がある。$200 プランならほぼ引っかからないが、大量利用で制限に近づいた場合は Cursor Ultra（$200/月）との併用が有効。Cursor の制限体系は Claude Code とは異なり、Auto モード（内部モデルは時期や難易度で自動切り替え、並列実行もある）の月間使用量と、手動モデル指定の使用量の2軸で管理される。Auto モードで1日1億トークン（Cursor アカウント画面で確認可能）を消費しているユーザーもおり、無制限の恩恵は大きい。制限の仕組みが異なるため、片方が制限に近づいてももう一方で作業を継続できる。合計 $400/月でも API 従量課金（月数十万円）やローカル運用と比べて圧倒的に安い。",
      "(3) **機密データの処理**: 社内データを外部に出せない場合、7B〜13B のローカルモデル（Llama 3.1、Mistral 等）で RAG を構築する。品質は Opus に及ばないが、プライバシーは完全に守れる。",
      "(4) **API 従量課金しか選べない場合**: サブスクプランがない API を大量利用する場合のみ、ローカル運用がコスト面で有利になりうる。",
      "(5) **学習・実験目的**: Ollama で小型モデルを動かし、プロンプトエンジニアリングやファインチューニングの感覚をつかむのは有益。ただし本番に使うモデルとは性能が大きく異なる点を理解しておく。"
    ],
    "tables": [
      {
        "afterParagraph": 1,
        "caption": "モデルサイズ別の必要スペック（2026年時点）",
        "headers": [
          "モデルサイズ",
          "VRAM（量子化）",
          "VRAM（FP16）",
          "推奨GPU",
          "用途"
        ],
        "rows": [
          [
            "7B",
            "4〜6 GB",
            "14 GB",
            "RTX 4060 Ti〜",
            "個人実験・軽量タスク"
          ],
          [
            "13B",
            "8〜10 GB",
            "26 GB",
            "RTX 4070〜",
            "社内チャットbot"
          ],
          [
            "70B",
            "35〜40 GB",
            "140 GB",
            "A100 80GB / 2x 4090",
            "高品質なローカル推論"
          ],
          [
            "400B+",
            "200 GB+",
            "800 GB+",
            "8x H100 80GB以上",
            "研究機関のみ"
          ],
          [
            "Opus 4.6 推定",
            "約750 GB",
            "約3 TB",
            "10x H100以上",
            "API でのみ利用可能"
          ]
        ]
      },
      {
        "afterParagraph": 6,
        "caption": "API vs ローカル運用のコスト比較",
        "headers": [
          "項目",
          "サブスク（Max等）",
          "API 従量課金",
          "ローカル（8B）",
          "ローカル（70B）"
        ],
        "rows": [
          [
            "初期費用",
            "$0",
            "$0",
            "GPU $1,600〜",
            "GPU $25,000〜"
          ],
          [
            "月額",
            "$100〜$200 定額",
            "使用量次第（数万円〜）",
            "$320（クラウドGPU）",
            "$2,000〜"
          ],
          [
            "1日1億トークン時",
            "$200（定額）",
            "数十万円/月",
            "$320+保守費",
            "$2,000+保守費"
          ],
          [
            "モデル品質",
            "最高（Opus 4.6）",
            "最高",
            "中（Llama 8B）",
            "高（Llama 70B）"
          ],
          [
            "保守の手間",
            "なし",
            "なし",
            "月10〜20時間",
            "月20〜40時間"
          ],
          [
            "プライバシー",
            "規約に依存",
            "規約に依存",
            "完全ローカル",
            "完全ローカル"
          ]
        ]
      },
      {
        "afterParagraph": 10,
        "caption": "サブスクプランのレート制限比較（2026年3月時点・ユーザー報告含む）",
        "headers": [
          "項目",
          "Claude Code Pro ($20)",
          "Claude Code Max ($200)",
          "Cursor Ultra ($200)"
        ],
        "rows": [
          [
            "制限の仕組み",
            "5時間 + 7日 + 月",
            "5時間 + 7日 + 月",
            "月間$400クレジット"
          ],
          [
            "倍率（Pro比）",
            "1倍",
            "5x($100) / 20x($200)",
            "—"
          ],
          [
            "Auto モード",
            "—",
            "—",
            "無制限（内部モデルは自動選択・並列実行あり）"
          ],
          [
            "手動モデル指定",
            "—",
            "—",
            "クレジットから消費"
          ],
          [
            "Pro $20 の実態",
            "集中利用で15〜30分で制限到達",
            "—",
            "—"
          ],
          [
            "制限後の動作",
            "一時停止（安全）",
            "一時停止（安全）",
            "従量課金で継続可（spend limit推奨）"
          ],
          [
            "ピーク時間の影響",
            "あり",
            "あり",
            "なし"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Ollama VRAM Requirements for Local LLMs",
        "site": "LocalLLM.in",
        "url": "https://localllm.in/blog/ollama-vram-requirements-for-local-llms"
      },
      {
        "title": "Ollama vs vLLM Performance Benchmark 2026",
        "site": "SitePoint",
        "url": "https://www.sitepoint.com/ollama-vs-vllm-performance-benchmark-2026/"
      },
      {
        "title": "Local LLM vs OpenAI API Cost",
        "site": "Runyard",
        "url": "https://www.runyard.dev/blog/local-llm-vs-openai-api-cost"
      },
      {
        "title": "Estimating the Size of Claude Opus 4.5/4.6",
        "site": "Substack",
        "url": "https://unexcitedneurons.substack.com/p/estimating-the-size-of-claude-opus"
      },
      {
        "title": "LLM Hosting Cost 2026",
        "site": "AI Superior",
        "url": "https://aisuperior.com/llm-hosting-cost/"
      }
    ]
  },
  "cursor-composer-2-kimi-2026": {
    "body": [
      "2026年3月、Cursor が発表した独自コーディングモデル Composer 2 が、Moonshot AI のオープンウェイトモデル Kimi K2.5 をベースに構築されていたことが判明した。開発者が Cursor の API トラフィックを解析したところ、モデル識別子が「kimi-k2p5-rl-0317-s515-fast」であることが確認され、Kimi K2.5 に強化学習（RL）を追加して作られたモデルであることが明らかになった。",
      "Cursor の開発者教育担当 VP Lee Robinson は、Kimi K2.5 ベースであることを認め「ブログ投稿の段階で Kimi ベースであることに言及しなかったのはミスだった」と述べた。Robinson によると、最終モデルの計算コストのうち Kimi K2.5 ベースの事前学習から来る部分は約1/4で、残りの3/4は Cursor 独自のトレーニング（継続事前学習と大規模 RL）に由来する。モデルの提供は Fireworks AI との正規の商用パートナーシップを通じて行われている。",
      "Moonshot AI はこの件に対して公式に支持を表明し「Kimi K2.5 が基盤を提供できたことを誇りに思う」「Cursor の継続事前学習と大規模 RL トレーニングを支持する」とコメントした。オープンウェイトモデルが商用製品の基盤として活用される先行事例として注目される。",
      "Composer 2 のベンチマークスコアは CursorBench 61.3、Terminal-Bench 2.0 で 61.7、SWE-Bench Multilingual で 73.7%。Claude Opus 4.6（CursorBench 58.2）を上回る一方、GPT-5.4（Terminal-Bench 75.1%）には及ばない。前世代の Composer 1.5（CursorBench 44.2）からは約17ポイントの大幅な改善。料金は入力 $0.50 / 出力 $2.50（1M トークンあたり）で、Opus 4.6 と比べて大幅に低コスト。",
      "この件は、AI エディタ企業がオープンウェイトモデルをベースに独自モデルを構築するトレンドの象徴でもある。[Kimi K2.5](?a=kimi-k25-moonshot-2026) 自体が SWE-Bench Verified 76.8% というフロンティア級のコーディング性能を持つため、その上に用途特化の RL を重ねることで、汎用モデルに匹敵するコーディング専用モデルを低コストで構築できることが実証された。透明性の観点では、ベースモデルの出自を明示する重要性も浮き彫りになった。"
    ],
    "charts": [
      {
        "afterParagraph": 3,
        "title": "Composer 2 ベンチマーク比較（公式発表値）",
        "subtitle": "CursorBench は Cursor 独自指標。Terminal-Bench 2.0 は複数社が採用するターミナル操作ベンチマーク",
        "unit": "スコア",
        "maxValue": 80,
        "bars": [
          {
            "label": "GPT-5.4",
            "value": 75.1,
            "color": "#10b981"
          },
          {
            "label": "Composer 2",
            "value": 61.7,
            "color": "#7c3aed"
          },
          {
            "label": "Opus 4.6",
            "value": 58,
            "color": "#f59e0b"
          },
          {
            "label": "Composer 1.5",
            "value": 47.9,
            "color": "#94a3b8"
          }
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Cursor admits its new coding model was built on top of Moonshot AI's Kimi",
        "site": "TechCrunch",
        "url": "https://techcrunch.com/2026/03/22/cursor-admits-its-new-coding-model-was-built-on-top-of-moonshot-ais-kimi/"
      },
      {
        "title": "Introducing Composer 2",
        "site": "Cursor",
        "url": "https://cursor.com/blog/composer-2"
      },
      {
        "title": "Composer 2 Technical Report",
        "site": "Cursor Research",
        "url": "https://cursor.com/resources/Composer2.pdf"
      },
      {
        "title": "Kimi K2.5 Tech Blog",
        "site": "Moonshot AI",
        "url": "https://www.kimi.com/blog/kimi-k2-5"
      }
    ]
  },
  "google-agent-smith-2026": {
    "body": [
      "Google が社内で利用している AI エージェント Agent Smith の詳細が報じられた。Google の AI 開発プラットフォーム Antigravity 上に構築されたこのツールは、コーディング支援にとどまらず、社内の複数システムにまたがるタスクを自律的に処理する。",
      "最大の特徴は非同期動作。従来のコーディング支援ツールは PC の前にいないと使えないが、Agent Smith は指示を出した後に PC を閉じてもバックグラウンドで作業を継続する。スマホから進捗を確認し、追加の指示を出すことも可能。Claude Code の --remote-control や Cowork の Dispatch に近い概念だが、社内システム全体と統合されている点が異なる。",
      "Google の社内チャットプラットフォームとも統合されており、チャット画面から直接 AI に業務指示を出せる。社内の人事情報や資料検索も AI 経由で行えるとされる。社内での利用者が急増し、Google がアクセス制限をかけるほどの人気となっている。",
      "現時点では Google 社内ツールであり外部提供の予定は明らかにされていないが、Google Cloud の Agentspace（企業向けエージェントプラットフォーム）や Gemini Agent（一般向けの自律タスク実行）との関連が注目される。「PC を閉じても AI が仕事を続ける」という体験は、バイブコーディングの次の段階を示唆している。"
    ],
    "primarySources": [
      {
        "title": "Google's Agent Smith AI is blowing up internally",
        "site": "Digit",
        "url": "https://www.digit.in/news/general/googles-agent-smith-ai-is-blowing-up-internally-here-is-what-it-can-do.html"
      },
      {
        "title": "Google Agentspace enables the agent-driven enterprise",
        "site": "Google Cloud Blog",
        "url": "https://cloud.google.com/blog/products/ai-machine-learning/google-agentspace-enables-the-agent-driven-enterprise"
      }
    ]
  },
  "kat-coder-pro-v2-2026": {
    "body": [
      "KwaiKAT（Kwai AI のコーディング部門）は KAT-Coder Pro V2 を公開した。Qwen ベースの Mixture of Experts アーキテクチャで、総パラメータ1兆超、推論時のアクティブパラメータは約720億。エージェント型のコーディングに特化して設計されている。",
      "SWE-Bench Verified で73.4%のソルブレートを達成。大規模な本番環境でのソフトウェアエンジニアリングやマルチシステム連携を想定した設計で、OpenClaw にネイティブ対応し10以上のフレームワークで汎化性能を持つ。1文の指示からプロダクション品質のランディングページや PPT を生成する Web 美的生成機能も搭載。",
      "料金は入力$0.30 / 出力$1.20（1Mトークンあたり）と、フロンティアモデルの中では非常に低コスト。OpenRouter や Kwai の StreamLake API から利用可能。コーディング特化モデルとしては Claude Code が使う Opus/Sonnet や Codex が使う GPT と異なるアプローチで、専門特化による効率性を追求している。"
    ],
    "primarySources": [
      {
        "title": "KAT-Coder Pro V2",
        "site": "KwaiKAT",
        "url": "https://kat-coder.org/"
      },
      {
        "title": "Introducing KAT-Dev-32B, KAT-Coder",
        "site": "KwaiPilot",
        "url": "https://kwaipilot.github.io/KAT-Coder/"
      }
    ]
  },
  "kimi-k25-moonshot-2026": {
    "body": [
      "Moonshot AI は2026年1月27日、大規模言語モデル Kimi K2.5 を公開した。1兆パラメータの Mixture of Experts（MoE）アーキテクチャを採用し、推論時にアクティブになるパラメータは320億。コンテキスト長は256Kトークンに対応する。",
      "ベンチマークでは Humanity's Last Exam で50.2%を記録し、Claude Opus 4.5（32.0%）やGPT-5.2 High（41.7%）を大幅に上回った。コーディングでも SWE-bench Verified で76.8%、マルチモーダルでは MMMU Pro 78.5% と高水準。テキスト・画像・動画の入力に対応する。",
      "オープンウェイトで公開されており、Hugging Face からダウンロード可能。エージェント機能ではスウォームモードに対応し、複数エージェントの協調動作でさらに性能が向上する（BrowseComp で78.4%）。中国発のモデルが欧米のフロンティアモデルと肩を並べる状況が鮮明になっている。2026年3月には [Cursor が Kimi K2.5 をベースに独自モデル Composer 2 を構築](?a=cursor-composer-2-kimi-2026)したことが判明し、オープンウェイトモデルの商用活用事例としても注目されている。"
    ],
    "charts": [
      {
        "afterParagraph": 1,
        "title": "SWE-Bench スコア（公式発表値）",
        "subtitle": "各社が公式に発表したコーディング能力スコアのみ掲載。Kimi K2.5・KAT-Coder は SWE-Bench Verified、Composer 2 は SWE-Bench Multilingual（指標が異なるため直接比較には注意）",
        "unit": "%",
        "maxValue": 85,
        "bars": [
          {
            "label": "Kimi K2.5",
            "value": 76.8,
            "color": "#f59e0b"
          },
          {
            "label": "Composer 2",
            "value": 73.7,
            "color": "#7c3aed"
          },
          {
            "label": "KAT-Coder V2",
            "value": 73.4,
            "color": "#14b8a6"
          }
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Kimi K2.5 Tech Blog",
        "site": "Moonshot AI",
        "url": "https://www.kimi.com/blog/kimi-k2-5"
      },
      {
        "title": "moonshotai/Kimi-K2.5",
        "site": "Hugging Face",
        "url": "https://huggingface.co/moonshotai/Kimi-K2.5"
      }
    ]
  },
  "glm-5-zhipu-2026": {
    "body": [
      "Zhipu AI（智譜AI）は2026年2月11日、第5世代大規模言語モデル GLM-5 を公開した。約745億パラメータの MoE アーキテクチャで、推論時のアクティブパラメータは440億。28.5兆トークンで事前学習されている。",
      "GLM-5 はエージェント型 AI に最適化されており、複数ステップの推論やコーディング、創作などで高い性能を示す。特筆すべきは Huawei Ascend チップで学習が行われた点で、NVIDIA GPU に依存しない中国の AI 自律路線を象徴している。",
      "MIT ライセンスのオープンソースとして公開され、OpenRouter 経由で利用可能。入力$0.80 / 出力$2.56（1Mトークンあたり）と、Opus 4.6 の約6分の1のコスト。香港証券取引所に上場している Zhipu の株価は発表後に最大34%上昇した。GLM-5-Turbo も OpenClaw 向けに特化したバージョンとして提供されている。"
    ],
    "primarySources": [
      {
        "title": "Zhipu AI Unveils GLM-5 Model",
        "site": "Zhipu AI",
        "url": "https://www.zhipuai.cn/en"
      },
      {
        "title": "zai-org/GLM-5",
        "site": "Hugging Face",
        "url": "https://huggingface.co/zai-org/GLM-5"
      }
    ]
  },
  "minimax-m27-2026": {
    "body": [
      "MiniMax は2026年3月18日、AI モデル M2.7 を公開した。最大の特徴は「自己進化」の仕組みで、OpenClaw のエージェントフレームワーク上で100ラウンド以上の自己最適化を自律的に実行。人間の介入なしで30%の内部評価スコア向上を達成した。",
      "ベンチマークでは SWE-Pro 56.2% と Opus に迫る水準を記録。PinchBench では86.2%で GLM-5 や GPT-5.4（86.4%）とほぼ同等。オフィス業務（GDPval-AA ELO 1495）ではオープンソースモデル中で最高スコア。強化学習の研究ワークフローの30〜50%を自動化できるとされる。",
      "MiniMax によると、M2.7 は従来のモデル開発の「人間がチューニング → 評価 → 改善」のループの一部を AI 自身が回せるようになった初期事例。コストも Opus 4.6 と比較して大幅に低い。自己改善型 AI の実用化が進んでいることを示すモデルとして、業界の注目を集めている。"
    ],
    "charts": [
      {
        "afterParagraph": 1,
        "title": "PinchBench スコア（MiniMax 公式発表値）",
        "subtitle": "MiniMax が発表した比較データのみ掲載",
        "unit": "%",
        "maxValue": 95,
        "bars": [
          {
            "label": "GPT-5.4",
            "value": 86.4,
            "color": "#10b981"
          },
          {
            "label": "GLM-5",
            "value": 86.4,
            "color": "#ef4444"
          },
          {
            "label": "M2.7",
            "value": 86.2,
            "color": "#ec4899"
          }
        ]
      }
    ],
    "primarySources": [
      {
        "title": "MiniMax M2.7: Early Echoes of Self-Evolution",
        "site": "MiniMax",
        "url": "https://www.minimax.io/news/minimax-m27-en"
      }
    ]
  },
  "google-turboquant-2026": {
    "body": [
      "Google Research は3月25日、LLM の推論を大幅に効率化する圧縮アルゴリズム TurboQuant を発表した。KV キャッシュ（モデルが過去の会話を記憶するためのメモリ領域）を3ビットまで圧縮し、精度を一切損なわずにメモリ使用量を6分の1以下に削減する。",
      "NVIDIA H100 GPU 上のベンチマークでは、32ビットの非圧縮状態と比較して最大8倍の速度向上を記録した。Llama-3.1-8B や Mistral-7B などのオープンソースモデルで検証され、圧縮後も非圧縮モデルと同等のリコールスコアを達成している。追加学習は不要で、既存のモデルにそのまま適用できる点が実用的。",
      "TurboQuant は ICLR 2026 で発表される予定。インターネット上では、ドラマ「シリコンバレー」の圧縮技術になぞらえて「現実の Pied Piper」と話題になっている。AI の運用コストを大幅に下げる可能性があり、メモリチップ需要への影響から Samsung や Micron の株価にも動きが出ている。"
    ],
    "charts": [
      {
        "afterParagraph": 1,
        "title": "TurboQuant による改善効果",
        "subtitle": "NVIDIA H100 GPU での測定結果",
        "unit": "x",
        "maxValue": 10,
        "bars": [
          {
            "label": "速度向上",
            "value": 8,
            "color": "#3b82f6"
          },
          {
            "label": "メモリ削減",
            "value": 6,
            "color": "#10b981"
          },
          {
            "label": "精度維持",
            "value": 10,
            "color": "#6366f1"
          }
        ]
      }
    ],
    "primarySources": [
      {
        "title": "TurboQuant: Redefining AI efficiency with extreme compression",
        "site": "Google Research",
        "url": "https://research.google/blog/turboquant-redefining-ai-efficiency-with-extreme-compression/"
      }
    ]
  },
  "singularity-mythos-2026-spring": {
    "body": [
      "2026年3月、Anthropic の内部文書がリークし、Opus を超える新ティア Capybara（コードネーム Mythos）の存在が明らかになった。Fortune の報道によると、Anthropic はこのモデルを「能力のステップチェンジ（段階的ではなく飛躍的な変化）」と位置づけている。コーディング、学術的推論、サイバーセキュリティの各ベンチマークで Opus 4.6 を大幅に上回るスコアが報告されている。",
      "同時に、このモデルがソフトウェアの脆弱性を高速で発見・悪用する能力を持つことが内部文書で警告されており、サイバーセキュリティ株の急落を引き起こした。Anthropic は慎重なロールアウト戦略を採り、少数のアーリーアクセスユーザーから段階的に公開する方針とされる。",
      "AI の能力向上はモデル単体にとどまらない。Google の TurboQuant はメモリを6分の1に圧縮して8倍高速化し、Gemini 3.1 Flash Live は音声応答を0.5秒以下にした。これらを組み合わせると、数か月前には不可能だったことが日常的に可能になる速度で技術が進んでいる。",
      "「シンギュラリティ」という言葉は議論を呼ぶが、2026年春に起きていることを見ると、少なくともソフトウェア開発・カスタマーサポート・金融分析といった知的労働の一部において、AI が人間の能力を超える領域が急速に広がっていることは否定しにくい。開発者にとって重要なのは、この流れの中で何を自動化し、何を人間が判断するかの線引きを意識し続けることだろう。"
    ],
    "primarySources": [
      {
        "title": "Anthropic 'Mythos' AI model representing 'step change in capabilities'",
        "site": "Fortune",
        "url": "https://fortune.com/2026/03/26/anthropic-says-testing-mythos-powerful-new-ai-model-after-data-leak-reveals-its-existence-step-change-in-capabilities/"
      }
    ]
  },
  "claude-code-codex-multi-agent-2026": {
    "body": [
      "ターミナルベースの AI コーディングエージェントが成熟し、Claude Code と Codex CLI を組み合わせて使う開発者が増えている。2つのエージェントを同時に走らせるマルチエージェント開発のパターンが X やブログで共有されている。",
      "実践的な使い分けとしては、Claude Code にアーキテクチャ設計・複雑な機能実装・フロントエンド開発を任せ、Codex CLI に自律的なテスト作成・DevOps タスク・コスト重視のバッチ処理を任せる構成が多い。Claude Code は深い推論とコード品質に強く、Codex CLI はトークン効率が約4倍良いとされる。",
      "具体的には、Cursor や VS Code のターミナルを分割して一方で claude、もう一方で codex を起動し、それぞれに異なる指示を出す。また、Claude Code の出力をパイプで Codex に渡す（またはその逆）といったスクリプト連携も試みられている。Telegram や Discord からブリッジして両方のエージェントに指示を出すツール（Claude-to-IM-skill）も公開されている。"
    ],
    "primarySources": [
      {
        "title": "Claude-to-IM-skill (GitHub)",
        "site": "GitHub",
        "url": "https://github.com/op7418/Claude-to-IM-skill"
      }
    ]
  },
  "dexter-financial-agent-2026": {
    "body": [
      "開発者の Virat Singh 氏が公開した Dexter は「Claude Code の金融版」と称される自律型リサーチエージェント。ターミナル上で動作し、割安株の発見、詳細な銘柄分析、投資テーゼの構築を自律的に行う。GitHub で1.7万スターを獲得している。",
      "約200行のコードで構築されており、LangChain を使って Claude・GPT・ローカル LLM を切り替えて利用できる。リアルタイムの市場データ、SEC ファイリング（米国の企業開示書類）、財務諸表を分析し、タスクの計画 → 実行 → 自己検証 → 改善のループを自律的に回す。",
      "Dexter は投資判断の「下書き」として位置づけられており、最終的な売買判断は人間が行うことが前提。AI エージェントが特定の専門領域に特化して自律的に動作する事例として、バイブコーディングの応用範囲の広がりを示している。"
    ],
    "primarySources": [
      {
        "title": "dexter - An autonomous agent for deep financial research",
        "site": "GitHub",
        "url": "https://github.com/virattt/dexter"
      }
    ]
  },
  "gemini-31-flash-live-voice-2026": {
    "body": [
      "Google DeepMind は3月26日、リアルタイム音声対話モデル Gemini 3.1 Flash Live を開発者プレビューとして公開した。モデル ID は gemini-3.1-flash-live-preview で、Gemini API および Google AI Studio から利用できる。",
      "最大の特徴は、従来の「音声をテキストに変換 → AI が推論 → テキストを音声に変換」という3段階のパイプラインを、ネイティブなオーディオ間処理に統合した点。これにより応答までの遅延が大幅に短縮され、ピッチや話速などの音響的なニュアンスも認識できるようになった。WebSocket による全二重通信で、ユーザーの割り込みにも対応する。",
      "対応言語は90以上で、200以上の国と地域で利用可能。開発者は Gemini Live API を通じてリアルタイム音声エージェントをアプリケーションに組み込める。カスタマーサポートや受付業務の自動化への応用が想定されており、コールセンター業界への影響が指摘されている。"
    ],
    "primarySources": [
      {
        "title": "Build real-time conversational agents with Gemini 3.1 Flash Live",
        "site": "Google Blog",
        "url": "https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-3-1-flash-live/"
      },
      {
        "title": "Gemini 3.1 Flash Live: Google's latest AI audio model",
        "site": "Google Blog",
        "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-flash-live/"
      }
    ]
  },
  "freee-mcp-remote-2026": {
    "body": [
      "フリー株式会社は3月27日、AIエージェントから freee の各種 API を操作できる MCP サーバー「freee-mcp」のリモート版の提供を開始した。3月2日に OSS として公開したローカル版に続く展開で、リモート版ではサーバーを freee 側がホストするため、ローカル環境への設定が不要。",
      "利用方法は Claude Desktop・Claude Code・Claude Cowork・Cursor などの AI ツールに URL（https://mcp.freee.co.jp/mcp）を追加し、freee にログインするだけ。会計・人事労務・請求書・工数管理・販売の5領域にわたる約270の操作が AI から可能になる。",
      "MCP（Model Context Protocol）のリモートサーバー対応により、ローカルに npm パッケージをインストールする必要がなくなった点が大きい。日本の SaaS 企業が公式に MCP リモート版を提供する先行事例として注目される。freee は今後もハッカソンの開催を予定している。MCP を使った開発ワークフローの全体像は [MCP 活用実践ガイド](?a=mcp-comprehensive-guide-2026)を参照。"
    ],
    "primarySources": [
      {
        "title": "freee、OSSとして公開した「freee-mcp」のリモート版の提供を開始",
        "site": "freee",
        "url": "https://corp.freee.co.jp/news/20260327freee_mcp.html"
      },
      {
        "title": "freee-mcp GitHub",
        "site": "GitHub",
        "url": "https://github.com/freee/freee-mcp"
      }
    ]
  },
  "claude-code-auto-memory-disable-2026": {
    "body": [
      "Claude Code の自動メモリ（Auto Memory）は、セッションを通じてプロジェクト固有の知識を ~/.claude/projects/ 配下に自動記録する機能。デフォルトで有効だが、不要な情報が蓄積されるケースや、メモリの内容をコントロールしたいユーザーから無効化オプションの要望が出ていた。",
      "無効化は3つの方法で可能。プロジェクト単位では .claude/settings.json に { \"autoMemoryEnabled\": false } を追加する。全プロジェクト共通では ~/.claude/settings.json に同じ設定を書く。環境変数 CLAUDE_CODE_DISABLE_AUTO_MEMORY=1 は最優先で適用され、他の設定を上書きする。",
      "セッション内からも /memory コマンドで auto memory のトグルが可能。自動メモリを無効にしても手動でメモリに記録する機能は引き続き使える。v2.1.59 以降で利用可能。"
    ],
    "primarySources": [
      {
        "title": "How Claude remembers your project - Claude Code Docs",
        "site": "Anthropic",
        "url": "https://code.claude.com/docs/en/memory"
      }
    ]
  },
  "anthropic-ipo-october-2026": {
    "body": [
      "Bloomberg は3月27日、Anthropic が早ければ2026年10月の新規株式公開（IPO）を検討していると報じた。調達額は600億ドル（約9兆円）超を見込み、Goldman Sachs、JPMorgan、Morgan Stanley といった大手金融機関と初期段階の協議を進めているとされる。",
      "Anthropic は2月に300億ドルの大型資金調達を完了し、評価額は約3,800億ドルに達した。推定の年間経常収益（ARR）は2026年初頭時点で約140億ドルとされる。IPO が実現すれば、近年の テック IPO の中でも最大級の規模になる。",
      "一方で、正式な申請はまだ行われておらず、市場環境や規制動向によってスケジュールは変動する可能性がある。OpenAI も2026年中の上場を準備しているとの報道があり、AI 企業の IPO ラッシュが注目されている。"
    ],
    "primarySources": [
      {
        "title": "Claude AI Maker Anthropic Considers IPO as Soon as October",
        "site": "Bloomberg",
        "url": "https://www.bloomberg.com/news/articles/2026-03-27/claude-ai-maker-anthropic-said-to-weigh-ipo-as-soon-as-october"
      }
    ]
  },
  "nvidia-openclaw-nemoclaw-2026": {
    "body": [
      "NVIDIA は、オープンソースの AI エージェントプラットフォーム OpenClaw に対して、エンタープライズ向けのセキュリティ・プライバシー・ガバナンス機能を追加するリファレンスモデル NemoClaw を発表した。",
      "OpenClaw は2025年末に登場し、WhatsApp・Telegram・Discord と連携する自律型パーソナルアシスタントとして急成長。会話の要約、ミーティングのスケジュール、コード実行、フライト予約などのタスクを自律的に処理する。GitHub では4か月足らずで25万スターを超え、React を抜いて非アグリゲーター系プロジェクトとして最多スターを記録した。",
      "NemoClaw は NVIDIA が OpenClaw のセキュリティと効率性を向上させるために開発したもので、オープンソースとして公開される。NVIDIA はパートナー企業と協力し、自律型でセルフエボリューション（自己進化）するエンタープライズ AI エージェントの開発を目指している。"
    ],
    "primarySources": [
      {
        "title": "NVIDIA Ignites the Next Industrial Revolution in Knowledge Work With Open Agent Development Platform",
        "site": "NVIDIA",
        "url": "https://nvidianews.nvidia.com/news/ai-agents"
      },
      {
        "title": "Nvidia Says OpenClaw Is To Agentic AI What GPT Was To Chattybots",
        "site": "The Next Platform",
        "url": "https://www.nextplatform.com/ai/2026/03/17/nvidia-says-openclaw-is-to-agentic-ai-what-gpt-was-to-chattybots/5209428"
      }
    ]
  },
  "vibe-coding-getting-started-2026": {
    "body": [
      "バイブコーディングとは、AIとの対話を軸にコードを組み立てるスタイルを指す。厳密な定義があるわけではなく、IDE・AI・音声入力などを組み合わせて素早く試行錯誤するニュアンスが近い。2026年時点では選択肢が急増しており、「何から始めればいいのか」が最初のハードルになっている。",
      "==入門（コード経験がほぼない人）==は **Claude** のチャット（claude.ai またはアプリ）から始めるのがブレにくい。セットアップ不要で、対話だけで小さなコード片を試せる。ChatGPT や Gemini でも同じことはできるが、コードの見せ方と再利用のしやすさで Claude が一歩先に出ている。",
      "==初級〜中級（日常的にコードを書く人）==は **Cursor** を推奨する。VS Code ベースなので既存の拡張が使え、Composer による複数ファイル編集や Tab 補完が効率を上げる。企業で既に GitHub Copilot の契約があるなら、VS Code + Copilot がそのまま足場になる。",
      "==上級（CLI で自律的に任せたい人）==は **Claude Code** が現時点で最も柔軟。ファイル操作、Bash 実行、MCP サーバ連携、スキルファイルによるカスタマイズができる。**Codex**（OpenAI）はクラウドサンドボックスでの並列実行が特徴で、用途によって使い分ける。",
      "どのレベルでも共通するのは、==最初に全部揃えようとしないこと==。チャットで慣れてからエディタ統合に進み、必要になったら CLI を導入する段階的なアプローチが結局いちばん速い。より詳しい用途別の組み合わせは[用途別おすすめマトリクス](?a=usecase-recommendation-matrix-2026)を参照。"
    ],
    "tables": [
      {
        "afterParagraph": 3,
        "caption": "レベル別おすすめツール（2026年3月時点）",
        "headers": [
          "レベル",
          "おすすめツール",
          "月額目安",
          "向いている人"
        ],
        "rows": [
          [
            "入門",
            "Claude チャット",
            "無料〜$20",
            "コード経験なし、まず AI と対話したい"
          ],
          [
            "初級",
            "Cursor（Hobby）",
            "無料",
            "エディタで AI 補完を試したい"
          ],
          [
            "中級",
            "Cursor Pro / VS Code + Copilot",
            "$20",
            "日常的にコードを書く開発者"
          ],
          [
            "上級",
            "Claude Code / Codex",
            "$20〜従量",
            "CLI で自律エージェントを回したい"
          ],
          [
            "企業",
            "GitHub Copilot Business",
            "$19/席",
            "SSO・監査ログ・IP 補償が必要"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Claude Code Documentation",
        "site": "Anthropic",
        "url": "https://code.claude.com/docs/en/overview"
      },
      {
        "title": "Cursor",
        "site": "Cursor",
        "url": "https://cursor.com/"
      },
      {
        "title": "GitHub Copilot",
        "site": "GitHub",
        "url": "https://github.com/features/copilot"
      }
    ]
  },
  "cli-tools-comparison-2026-march": {
    "body": [
      "ターミナルから AI にコードを書かせる CLI ツールは、2026年に入って急速に選択肢が広がった。**Claude Code**（Anthropic）、**Codex**（OpenAI）、**Gemini CLI**（Google）、**Aider**（OSS）、**GitHub Copilot CLI** の5つが主要な候補になる。それぞれ設計思想が異なるため、単純な優劣ではなく用途との相性で選ぶ。",
      "Claude Code はローカルのファイルシステムに直接アクセスし、Bash 実行・MCP サーバ連携・スキルファイルによるカスタマイズが可能。Auto モードを使えば権限確認を減らせるが、==本番リポジトリでは --dangerously-skip-permissions を避ける==。Codex はクラウドサンドボックス上で動作し、複数タスクの並列実行に強い。ローカルファイルへの直接書き込みはない代わりに、PR 単位のワークフローに向く。",
      "Gemini CLI は 200 万トークンのコンテキストが特徴で、大規模コードベースの一括読み込みに向く。ただし無料枠の縮小が進んでおり、本格利用には API 課金が前提になりつつある。Aider は完全 OSS で、Claude・GPT・Gemini・ローカルモデルを切り替えられる柔軟さが強み。Git との統合が深く、変更を自動コミットする設計。",
      "Copilot CLI は GitHub のエコシステムとの統合が最大の特徴。Enterprise プランなら SSO・監査ログ・IP 補償が付き、組織導入のハードルが低い。Agent Mode の進化で自律的なタスク遂行も可能になりつつある。",
      "選び方の目安: 個人でフル機能なら Claude Code、クラウド並列なら Codex、大規模コンテキストなら Gemini CLI、OSS・マルチモデルなら Aider、企業統制なら Copilot CLI。エディタ側の比較は[AI エディタ横断比較](?a=editor-comparison-2026-march)、料金の詳細は[料金プラン横断比較](?a=pricing-comparison-all-tools-2026-march)、用途別の選び方は[おすすめマトリクス](?a=usecase-recommendation-matrix-2026)を参照。"
    ],
    "tables": [
      {
        "afterParagraph": 4,
        "caption": "CLI ツール横断比較（2026年3月時点）",
        "headers": [
          "ツール",
          "提供元",
          "実行環境",
          "モデル",
          "月額目安",
          "特徴"
        ],
        "rows": [
          [
            "Claude Code",
            "Anthropic",
            "ローカル",
            "Claude Opus/Sonnet",
            "$20〜従量",
            "MCP・スキル・Auto mode"
          ],
          [
            "Codex",
            "OpenAI",
            "クラウド",
            "GPT/Codex系",
            "$20〜従量",
            "並列実行・PR連携"
          ],
          [
            "Gemini CLI",
            "Google",
            "ローカル",
            "Gemini Pro/Flash",
            "無料枠あり→従量",
            "200万トークン"
          ],
          [
            "Aider",
            "OSS",
            "ローカル",
            "任意（マルチ）",
            "無料（API費用別）",
            "Git統合・architect"
          ],
          [
            "Copilot CLI",
            "GitHub",
            "ローカル+クラウド",
            "GPT系",
            "$10〜$39/席",
            "Enterprise統制"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Claude Code Documentation",
        "site": "Anthropic",
        "url": "https://code.claude.com/docs/en/overview"
      },
      {
        "title": "OpenAI Codex",
        "site": "OpenAI",
        "url": "https://openai.com/index/introducing-codex/"
      },
      {
        "title": "Gemini CLI",
        "site": "Google",
        "url": "https://github.com/google-gemini/gemini-cli"
      },
      {
        "title": "Aider",
        "site": "GitHub",
        "url": "https://github.com/Aider-AI/aider"
      },
      {
        "title": "GitHub Copilot",
        "site": "GitHub",
        "url": "https://github.com/features/copilot"
      }
    ]
  },
  "editor-comparison-2026-march": {
    "body": [
      "AI 支援付きコードエディタは2026年に入って Cursor・Windsurf・VS Code+Copilot の三択が実質的な標準になった。いずれも VS Code ベース（VS Code 本体 or フォーク）で拡張機能の互換性が高いため、差が出るのは AI 統合の深さ・エージェント機能・料金体系の3点になる。",
      "**Cursor** は Anysphere 社が開発する VS Code フォーク。Composer によるマルチファイル編集、Background Agent によるバックグラウンドタスク実行、Tab 補完の3本柱で構成される。2026年3月の [2.4 リリース](?a=cursor-2-4-subagents)で並列サブエージェント（最大20個同時、クラウド VM 実行）と BugBot（PR 自動レビュー）が追加され、エージェント能力が大幅に強化された。モデルは Sonnet 4.6 / Opus 4.6 を切り替え可能。Pro $20/月、Business $40/月。",
      "**Windsurf** は旧 Codeium が開発した VS Code フォークで、2026年3月に [Anysphere（Cursor 親会社）に買収された](?a=cursor-windsurf-merge)。中核機能の Cascade はタスクを段階的に分解して差分プレビュー付きで実行するフローで、大規模変更の安全性に定評がある。補完速度は Codeium 時代から高速。料金は[2026年3月の改定](?a=windsurf-pricing-overhaul)で Free / Pro $20/月 / Teams / Max $200/月 の4段階になり、Cursor との価格差は消滅した。買収後も単体提供は継続中だが、長期的な Cursor への統合可能性がある。",
      "**VS Code + GitHub Copilot** は Microsoft / GitHub のエコシステム。エディタ本体は無料で、Copilot が AI 層を担う。2026年にエージェントモード（Agent Mode）が導入され、ターミナル操作・ファイル編集を含むマルチステップタスクの自律実行に対応。Copilot Coding Agent は GitHub Issue を割り当てるだけで AI が PR を自動作成する。Individual $10/月、Business $19/月、Enterprise $39/月（IP 補償・監査ログ付き）。拡張機能エコシステムの規模は突出している。",
      "選び方の目安: AI のネイティブ統合を最優先なら Cursor、既存の VS Code 環境を維持しつつ AI を足すなら VS Code + Copilot、Cascade のステップ分解を評価するなら Windsurf。企業で SSO・監査・IP 補償が必要なら Copilot Business/Enterprise が最も導入しやすい（[→ 企業導入チェックリスト](?a=ai-enterprise-legal-checklist-2026)）。Cursor と Windsurf は同一親会社になったため、今後の機能統合の動向にも注意が必要となる。各ツールの[料金詳細はこちら](?a=pricing-comparison-all-tools-2026-march)。"
    ],
    "tables": [
      {
        "afterParagraph": 4,
        "caption": "AI エディタ横断比較（2026年3月時点）",
        "headers": [
          "エディタ",
          "提供元",
          "ベース",
          "AI モデル",
          "月額（個人）",
          "エージェント機能",
          "強み"
        ],
        "rows": [
          [
            "Cursor",
            "Anysphere",
            "VS Code フォーク",
            "Sonnet 4.6 / Opus 4.6",
            "$20（Pro）",
            "Background Agent・並列サブエージェント",
            "AI 統合の深さ・BugBot"
          ],
          [
            "Windsurf",
            "Anysphere（旧 Codeium）",
            "VS Code フォーク",
            "Sonnet 4.6 / GPT-5.4",
            "$20（Pro）",
            "Cascade フロー",
            "段階的タスク分解・高速補完"
          ],
          [
            "VS Code + Copilot",
            "Microsoft / GitHub",
            "VS Code 本体",
            "GPT-5.4 / o4-mini",
            "$10（Individual）",
            "Agent Mode・Coding Agent",
            "拡張機能エコシステム・Enterprise 統制"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Cursor",
        "site": "Cursor",
        "url": "https://cursor.com/"
      },
      {
        "title": "Windsurf",
        "site": "Windsurf",
        "url": "https://windsurf.com/"
      },
      {
        "title": "Visual Studio Code",
        "site": "Microsoft",
        "url": "https://code.visualstudio.com/"
      },
      {
        "title": "GitHub Copilot",
        "site": "GitHub",
        "url": "https://github.com/features/copilot"
      }
    ]
  },
  "pricing-comparison-all-tools-2026-march": {
    "body": [
      "AI 開発ツールの料金体系は2026年に入って改定が相次いでいる。[Windsurf の $15→$20 値上げ](?a=windsurf-pricing-overhaul)（3月19日）、[Gemini CLI の Pro 有料化](?a=gemini-cli-v035)（3月25日）など、無料・低価格路線からの転換が目立つ。ここでは主要8ツールの料金を公式発表ベースで横並びにした。",
      "**CLI ツール**の料金は大きく3パターンに分かれる。Claude Code は Pro $20/月・Max $100〜200/月・API 従量課金の3本立て。Codex は ChatGPT Pro（$200/月）以上のプランに含まれる形で提供され、単体の低価格プランはない。Gemini CLI は Flash モデルなら無料（1日1,000リクエスト）だが、Pro モデルは有料サブスクリプション限定に移行した。Aider はツール自体が OSS 無料で、接続する LLM の API 費用のみがコストとなる。",
      "**エディタ**では Cursor と Windsurf が同額の $20/月（Pro）に揃った。VS Code 本体は無料で、Copilot の Individual $10/月が最安の有料 AI エディタ体験となる。Zed AI はエディタ無料・AI 機能 $15/月だが、自前の API キーを持ち込めば課金なしで AI 機能を使える。",
      "**Enterprise 向け**では GitHub Copilot Enterprise（$39/席）が IP インデムニティ（知的財産補償）・監査ログ・SAML SSO を備え、組織導入のハードルが最も低い。Claude Code は SOC 2 準拠で API 経由のエンタープライズ利用に対応。Cursor Business は $40/席で管理機能付き。企業導入の法的チェックポイントは[こちらの記事](?a=ai-enterprise-legal-checklist-2026)で詳しく整理している。",
      "コスト最適化の考え方: 個人でコストを抑えるなら Aider（API 費用のみ）+ VS Code が最安構成。月 $20 で1ツールに絞るなら、CLI 重視で Claude Code Pro、エディタ重視で Cursor Pro。企業導入で統制を優先するなら Copilot Business/Enterprise が現実的な選択肢となる。"
    ],
    "tables": [
      {
        "afterParagraph": 1,
        "caption": "CLI ツール料金比較（2026年3月時点・公式発表値）",
        "headers": [
          "ツール",
          "無料枠",
          "個人プラン",
          "上位プラン",
          "API 従量課金",
          "備考"
        ],
        "rows": [
          [
            "Claude Code",
            "なし",
            "Pro $20/月",
            "Max $100〜200/月",
            "あり（トークン単価）",
            "Max は Fast Mode 含む"
          ],
          [
            "Codex",
            "なし",
            "—",
            "ChatGPT Pro $200/月〜",
            "あり",
            "Pro/Team/Enterprise に含まれる"
          ],
          [
            "Gemini CLI",
            "Flash: 1日1,000回",
            "—",
            "有料サブスク（Pro モデル）",
            "あり",
            "3月25日より Pro 有料化"
          ],
          [
            "Copilot CLI",
            "無料枠あり（回数制限）",
            "Individual $10/月",
            "Enterprise $39/月",
            "—",
            "gh copilot 経由"
          ],
          [
            "Aider",
            "ツール自体は無料",
            "—",
            "—",
            "接続先 LLM の API 費用",
            "OSS（Apache 2.0）"
          ]
        ]
      },
      {
        "afterParagraph": 2,
        "caption": "エディタ料金比較（2026年3月時点・公式発表値）",
        "headers": [
          "エディタ",
          "無料枠",
          "個人プラン",
          "ビジネス",
          "Enterprise",
          "備考"
        ],
        "rows": [
          [
            "Cursor",
            "Hobby（機能制限）",
            "Pro $20/月",
            "Business $40/月",
            "—",
            "Background Agent は Pro 以上"
          ],
          [
            "Windsurf",
            "Free（制限あり）",
            "Pro $20/月",
            "Teams（要問合せ）",
            "Max $200/月",
            "3月に $15→$20 に改定"
          ],
          [
            "VS Code + Copilot",
            "エディタ無料 + Copilot 無料枠",
            "Individual $10/月",
            "Business $19/月",
            "Enterprise $39/月",
            "IP 補償は Enterprise のみ"
          ],
          [
            "Zed AI",
            "エディタ無料",
            "AI $15/月",
            "—",
            "—",
            "自前 API キー持込可"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Claude Code Documentation",
        "site": "Anthropic",
        "url": "https://code.claude.com/docs/en/overview"
      },
      {
        "title": "Cursor Pricing",
        "site": "Cursor",
        "url": "https://cursor.com/pricing"
      },
      {
        "title": "Windsurf Pricing",
        "site": "Windsurf",
        "url": "https://windsurf.com/pricing"
      },
      {
        "title": "GitHub Copilot Plans",
        "site": "GitHub",
        "url": "https://github.com/features/copilot#pricing"
      },
      {
        "title": "OpenAI Codex",
        "site": "OpenAI",
        "url": "https://openai.com/index/introducing-codex/"
      },
      {
        "title": "Gemini CLI",
        "site": "Google",
        "url": "https://github.com/google-gemini/gemini-cli"
      }
    ]
  },
  "usecase-recommendation-matrix-2026": {
    "body": [
      "AI 開発ツールは CLI・エディタ・API の各レイヤーに選択肢があり、全部を試すのは現実的でない。ここでは典型的な用途ごとに「まずこれを使う」という組み合わせを整理した。各ツールの機能比較は[CLI 比較](?a=cli-tools-comparison-2026-march)・[エディタ比較](?a=editor-comparison-2026-march)、料金の詳細は[料金横断比較](?a=pricing-comparison-all-tools-2026-march)を参照。",
      "**Web 開発（フロントエンド + バックエンド）**には Cursor Pro + Claude Code の組み合わせが強い。Cursor の Composer でマルチファイルのリファクタリングを行い、Claude Code で Git 操作・テスト実行・コミットまでを一貫処理する。React / Next.js / Vue 等のフレームワークではコンテキスト理解の深さが効いてくる。予算を抑えるなら VS Code + Copilot Individual（$10/月）でも Agent Mode による自律編集が使える。",
      "**データ分析・機械学習**では Gemini CLI の 200 万トークンコンテキストが大規模データセットの一括分析に向く。ただし Pro モデルは有料化されたため、Flash で足りない場合は API 課金が前提になる。Jupyter Notebook との連携では VS Code + Copilot のインラインサジェスチョンが実用的。Python 環境の構築や依存管理は Claude Code が得意とする領域。",
      "**企業・チーム導入**では GitHub Copilot Business/Enterprise が最も導入障壁が低い。SSO・監査ログ・IP インデムニティが標準で含まれ、GitHub の既存契約に組み込める。AI エディタとしては Cursor Business（$40/席、管理機能付き）も選択肢に入る。CLI 層では Claude Code が SOC 2 準拠で API 経由のエンタープライズ利用に対応している。",
      "**初心者・非エンジニア**はいきなり CLI やエディタに入らず、Claude チャット（claude.ai）や ChatGPT でコード片を試すところから始めるのが現実的。次のステップとして Cursor Hobby（無料）や VS Code + Copilot 無料枠でエディタ内の AI 支援を体験し、慣れてきたら Pro プランへ移行する流れが混乱しにくい（[→ 初心者向け詳細ガイド](?a=vibe-coding-getting-started-2026)）。",
      "**OSS・マルチモデル志向**には Aider が最適。ツール自体は無料で、Claude・GPT・Gemini・ローカルモデルを切り替えて使える。Git 統合が深く、変更の自動コミットとロールバックが標準装備。API キーの管理とコスト管理は利用者の責任になるが、特定ベンダーにロックインされない自由度は他のツールにない強み。"
    ],
    "tables": [
      {
        "afterParagraph": 0,
        "caption": "用途別おすすめツール組み合わせ（2026年3月時点）",
        "headers": [
          "用途",
          "エディタ",
          "CLI / エージェント",
          "月額目安",
          "ポイント"
        ],
        "rows": [
          [
            "Web 開発（本格）",
            "Cursor Pro",
            "Claude Code Pro",
            "$40（両方）",
            "Composer + 自律エージェントの組み合わせ"
          ],
          [
            "Web 開発（低コスト）",
            "VS Code + Copilot Individual",
            "—",
            "$10",
            "Agent Mode で自律編集も可能"
          ],
          [
            "データ分析・ML",
            "VS Code + Copilot",
            "Gemini CLI（大規模コンテキスト）",
            "$10〜",
            "200万トークンで大規模データ対応"
          ],
          [
            "企業・チーム導入",
            "VS Code + Copilot Business",
            "Claude Code（API）",
            "$19/席〜",
            "SSO・監査ログ・IP 補償"
          ],
          [
            "初心者・非エンジニア",
            "Cursor Hobby（無料）",
            "—",
            "$0",
            "まず Claude チャットで対話から開始"
          ],
          [
            "OSS・マルチモデル",
            "VS Code / Zed",
            "Aider",
            "API 費用のみ",
            "ベンダーロックインなし"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Claude Code Documentation",
        "site": "Anthropic",
        "url": "https://code.claude.com/docs/en/overview"
      },
      {
        "title": "Cursor",
        "site": "Cursor",
        "url": "https://cursor.com/"
      },
      {
        "title": "GitHub Copilot",
        "site": "GitHub",
        "url": "https://github.com/features/copilot"
      },
      {
        "title": "Gemini CLI",
        "site": "Google",
        "url": "https://github.com/google-gemini/gemini-cli"
      },
      {
        "title": "Aider",
        "site": "GitHub",
        "url": "https://github.com/Aider-AI/aider"
      }
    ]
  },
  "ai-config-files-comprehensive-guide-2026": {
    "body": [
      "AI コーディングツールの普及に伴い、リポジトリに置く「AI 向け設定ファイル」が増えている。CLAUDE.md、SKILL.md、AGENTS.md、.cursor/rules、llms.txt — それぞれ目的と配置場所が異なるが、共通するのは「Git 管理下のテキストで AI の振る舞いを固定する」という設計思想。ここでは全ツールの設定ファイルを横断的に整理する。",
      "**CLAUDE.md（Claude Code）**: AI が「常に読む」プロジェクトルール。三層構造で配置する。~/.claude/CLAUDE.md がグローバル設定（全プロジェクト共通）、プロジェクトルートの CLAUDE.md がプロジェクト設定、.claude/CLAUDE.md が個人設定（.gitignore 推奨）。書くべき内容は「linter で検出できないルール」— アーキテクチャ方針、命名規則、禁止パターン。肥大化するとコンテキストを圧迫するため、簡潔に保つことが公式で推奨されている。",
      "**SKILL.md（Claude Code / Cursor）**: 「必要なときだけ読まれる」詳細な手順書。.claude/skills/ や .cursor/skills/ にフォルダ単位で配置し、YAML フロントマター（名前・説明・互換性）+ 本文（ワークフロー・チェックリスト・禁止事項）で構成する。CLAUDE.md は常時ロード、SKILL.md は段階的開示でトークンを抑える設計。==外部からスキルをコピーする場合は隠し文字やプロンプトインジェクションがないか必ず確認する==（[→ セキュリティリスクの詳細](?a=ai-autonomous-execution-risks-2026)）。",
      "**AGENTS.md（Codex）**: OpenAI の Codex 向け設定ファイル。CLAUDE.md と同じ役割で、プロジェクトルートに配置する。コーディング規約、テストフレームワーク、デプロイ手順を記述。codex.md でも読み込まれる。",
      "**.cursor/rules（Cursor）**: Cursor 専用の AI ルールファイル。使用言語、命名規則、禁止パターンを記述する。.cursorrules（プロジェクトルート）と .cursor/rules/（ディレクトリ単位）の2つの配置方法がある。",
      "**llms.txt**: サイトやプロダクトの LLM 向け要約入口。検索クローラではなく AI が一次情報を辿るためのインデックスとして位置づけられている。自社ドキュメントの URL と要約の境界を明確にし、著作権・利用条件に沿った引用に留める。",
      "**チーム運用のベストプラクティス**: (1) プロジェクトルートの設定ファイルは Git 管理してチーム共有。個人設定は .gitignore で分離。(2) ルール同士の矛盾を防ぐため、定期的な lint とオーナー明記。(3) 複数ツールを併用する場合、フロントマターの互換フィールドやディレクトリ規約を揃えると移行コストが下がる。(4) [MCP](?a=mcp-comprehensive-guide-2026) や [Hooks](?a=claude-code-auto-mode) と組み合わせることで AI の動作をより精密に制御できる。"
    ],
    "primarySources": [
      {
        "title": "Claude Code — Memory (CLAUDE.md)",
        "site": "Anthropic",
        "url": "https://code.claude.com/docs/en/memory"
      },
      {
        "title": "Agent skills overview (SKILL.md)",
        "site": "Anthropic",
        "url": "https://docs.anthropic.com/en/docs/agents-and-tools/agent-skills/overview"
      },
      {
        "title": "Introducing AGENTS.md",
        "site": "OpenAI Developers",
        "url": "https://developers.openai.com/codex/guides/agents-md/"
      },
      {
        "title": "Rules — Cursor docs",
        "site": "Cursor",
        "url": "https://cursor.com/docs/context/rules"
      },
      {
        "title": "llms.txt standard",
        "site": "llmstxt.org",
        "url": "https://llmstxt.org/"
      }
    ]
  },
  "mcp-comprehensive-guide-2026": {
    "body": [
      "**MCP（Model Context Protocol）** は Anthropic が策定したオープンプロトコルで、AI モデルが外部のツールやデータソースに標準化された方法でアクセスするための仕組み。2025年11月の初版公開以降、9,700万インストールを超えるエコシステムに成長した。Claude Code・Cursor・Gemini CLI など主要ツールが MCP クライアントとして対応しており、OpenAI・Microsoft も正式サポートを表明している。",
      "**トランスポートと接続方式**: MCP サーバーとの接続には2つの方式がある。**stdio**（標準入出力）はローカルプロセス直結でセットアップが簡単だが、クライアントと同じマシンにサーバーバイナリが必要。**Streamable HTTP**（v2 で追加）はリモート配置に向くが、認証・TLS・レート制限を自前で設計する必要がある。v2 では OAuth 2.1 認可フレームワークと JSON-RPC バッチも追加された（[→ v2 仕様の詳細](?a=mcp-v2-spec-launch-2026)）。",
      "**実践パターン1: DB 連携**: PostgreSQL や SQLite の MCP サーバーを接続すると、Claude Code がスキーマ読み取り→クエリ生成→実行→結果解釈を一貫して行える。==本番 DB への直接接続は避け、開発環境やリードレプリカに限定する==。接続文字列は .env から環境変数で渡す。",
      "**実践パターン2: ブラウザ操作**: Puppeteer や Playwright ベースの MCP サーバーで、スクリーンショット取得・フォーム入力・E2E テストの実行が可能。Chrome 拡張ベースの MCP サーバーなら既に開いているタブのコンテキストを AI に渡せる。",
      "**実践パターン3: SaaS API 連携**: [freee の MCP リモートサーバー](?a=freee-mcp-remote-2026)（約270操作）のように、SaaS 側が公式に MCP サーバーを提供するケースが増えている。リモート版は URL を追加するだけで利用でき、ローカルへの npm インストールが不要。GitHub MCP サーバーで Issue・PR 操作も可能。",
      "**セキュリティとサプライチェーンリスク**: MCP サーバーは AI に外部操作の権限を与えるため、信頼できる提供元のみを使う。広いファイルシステムアクセス・任意 URL 取得・シェル実行を持つサーバーは、**サプライチェーン攻撃（悪意あるサーバー・更新）とインジェクション**の両面でリスクが大きい。ロックファイル・署名・許容リスト・監査ログの運用を検討する。Auto mode と MCP を組み合わせる場合は [Hooks](?a=claude-code-auto-mode) でガードレールを設ける。",
      "**設定方法**: Claude Code では `.claude/settings.json` の mcpServers セクションに記述。Cursor も MCP サーバー対応。製品ごとに接続パスが異なるため、公式の接続例を確認するのが安全。AI 設定ファイル（[CLAUDE.md・SKILL.md 等](?a=ai-config-files-comprehensive-guide-2026)）と組み合わせることで、MCP で「何に接続するか」、設定ファイルで「どう振る舞うか」を分離して管理できる。"
    ],
    "primarySources": [
      {
        "title": "Model Context Protocol — Specification",
        "site": "modelcontextprotocol.io",
        "url": "https://modelcontextprotocol.io/"
      },
      {
        "title": "Claude Code — MCP",
        "site": "Anthropic",
        "url": "https://code.claude.com/docs/en/mcp"
      },
      {
        "title": "freee-mcp リモート版",
        "site": "freee",
        "url": "https://corp.freee.co.jp/news/20260327freee_mcp.html"
      },
      {
        "title": "MCP v2 — The 2026 MCP Roadmap",
        "site": "MCP Blog",
        "url": "http://blog.modelcontextprotocol.io/posts/2026-mcp-roadmap/"
      }
    ]
  },
  "git-ai-workflow-2026": {
    "body": [
      "AI コーディングツールを Git ワークフローに組み込むパターンは大きく4つある。ブランチ作成・コード変更・PR 作成・コードレビューの各フェーズで、どのツールのどの機能を使うかを整理する。",
      "**ブランチ戦略と AI の使い分け**: feature ブランチを切ってから AI にタスクを投げるのが基本。Claude Code は CLAUDE.md に「main ブランチに直接 push しない」と書いておけばルールを守る。Codex はクラウドサンドボックスで動作するため、ローカルのブランチとは独立して作業し、結果を PR として提出する設計。Aider は変更ごとに自動コミットするため、ブランチ上での変更履歴が細かく残る。",
      "**PR 自動生成**: Copilot Coding Agent は GitHub Issue を割り当てるだけで AI がブランチ作成→コード変更→PR 作成まで自律的に実行する。Claude Code では claude -p 'この Issue を修正して PR を作成' のようにヘッドレスモードで CI/CD パイプラインから呼び出せる。Codex も同様に ChatGPT インターフェースからタスクを投げると PR 単位で結果が返る。",
      "**コードレビュー支援**: [Cursor 2.4](?a=cursor-2-4-subagents) の BugBot は PR レベルの自動レビューを行い、バグの早期発見を支援する。GitHub Copilot は PR の要約・レビューコメントの自動生成に対応している。Claude Code の Hooks 機能を使えば、git commit の前後に lint・テスト・セキュリティスキャンを自動実行する仕組みを設定できる。",
      "**コミットメッセージの自動生成**: Claude Code は変更内容を解析してコミットメッセージを自動生成する。Aider も同様の機能を備えている。チームでコミットメッセージの形式を統一するには、[CLAUDE.md にフォーマット](?a=ai-config-files-comprehensive-guide-2026)（Conventional Commits 等）を指定するのが実用的。複数ツールの併用パターンは[マルチエージェント開発](?a=claude-code-codex-multi-agent-2026)も参照。",
      "実運用の注意点: AI が生成した PR は必ず人間がレビューしてからマージする。AI のコミット履歴は細かくなりがちなので、squash merge を使って PR 単位でまとめるチームが多い。CI で必ずテストを通す・レビュー承認を必須にするといった既存のガードレールは AI 導入後も維持する。"
    ],
    "primarySources": [
      {
        "title": "Claude Code Documentation",
        "site": "Anthropic",
        "url": "https://code.claude.com/docs/en/overview"
      },
      {
        "title": "GitHub Copilot Coding Agent",
        "site": "GitHub",
        "url": "https://github.com/features/copilot"
      },
      {
        "title": "OpenAI Codex",
        "site": "OpenAI",
        "url": "https://openai.com/index/introducing-codex/"
      },
      {
        "title": "Aider",
        "site": "GitHub",
        "url": "https://github.com/Aider-AI/aider"
      }
    ]
  },
  "ai-regulation-q1-2026": {
    "body": [
      "2026年第1四半期は、AI 企業と政府・規制当局の関係が大きく動いた。最も注目を集めたのは **Anthropic** と米国防総省をめぐる一連の法廷闘争で、サンフランシスコの連邦地裁が国防総省による「サプライチェーンリスク」指定の執行を差し止める暫定命令を出したと報じられた（[詳細はこちら](?a=anthropic-pentagon-injunction-2026)）。",
      "**OpenAI** の Sora をめぐっては、消費者向け提供の終了と複数の提携解消が相次いで報じられた。動画生成 AI の商用展開が著作権・安全性の壁に直面している構図が浮き彫りになった（[→ 詳細記事](?a=openai-sora-discontinued-2026)）。",
      "EU では AI Act（人工知能法）の段階的施行が始まり、汎用 AI モデルの透明性義務やハイリスク AI システムの適合評価が具体化しつつある。日本国内でも AI 事業者ガイドラインの改訂議論が進んでおり、開発者にとって利用規約の確認がこれまで以上に重要になっている。",
      "3月末には Anthropic の内部コードネーム Mythos（別名 Capybara）の草稿がリークし、サイバーセキュリティ関連株に影響が出たとの報道もあった（[Mythosリーク](?a=anthropic-mythos-leak)、[市場への影響](?a=anthropic-mythos-cyber-impact-2026)）。AI 企業の機密管理と情報開示のあり方が改めて問われている。",
      "開発者への実務的な影響として、==利用するツールの利用規約・データ取り扱いポリシーを定期的に確認する==ことが今後さらに重要になる。特に企業での利用は、所在国（AI企業タブを参照）やデータの保存先を把握した上でツールを選定すべきだろう。関連記事: [AI と著作権の最新動向](?a=ai-copyright-landscape-2026)、[米国・EU・日本の規制比較](?a=ai-regulation-comparison-us-eu-japan-2026)、[企業導入の法的チェックリスト](?a=ai-enterprise-legal-checklist-2026)。"
    ],
    "primarySources": [
      {
        "title": "EU AI Act",
        "site": "European Commission",
        "url": "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
      }
    ]
  },
  "ai-copyright-landscape-2026": {
    "body": [
      "AI 生成物の著作権は2026年時点で各国の法的整理が進行中であり、確定した統一ルールはまだない。ただし、いくつかの重要な判断と方向性が出てきている。開発者がバイブコーディングで AI にコードを書かせる際にも関わる話題であるため、現状を整理する。",
      "**米国**では、米国著作権局（USCO）が2023年に「AI が自律的に生成した作品には著作権が発生しない」という方針を示し、2025年にもこの立場を維持する報告書を発表した。ただし「人間が十分な創造的関与をした場合」は保護対象になりうるとされている。AI ツールで生成したコードをそのまま使う場合と、人間が大幅に編集・選択した場合で扱いが変わる可能性がある。学習データに関しては、New York Times v. OpenAI 訴訟など複数の訴訟が進行中で、フェアユースの適用範囲が争点となっている。",
      "**EU**では AI Act（人工知能法）が2024年に成立し、2026年から段階的に施行されている。汎用 AI モデルの提供者にはトレーニングデータの要約の公開や著作権法の遵守が義務付けられている。EU 著作権指令のテキスト・データマイニング（TDM）例外規定との関係も重要で、権利者がオプトアウト（利用拒否）した著作物の学習利用は認められない方向。",
      "**日本**では、著作権法第30条の4が AI 学習目的の著作物利用を広く認めており、主要国の中では比較的寛容な法制度となっている。ただし文化庁が2024年に公表した「AI と著作権に関する考え方」では、学習段階と生成・利用段階を分けて整理する枠組みが示され、生成物が既存著作物と類似する場合は侵害となりうるとされた。2026年時点で法改正の議論が継続中。",
      "**開発者への実務的な影響**: (1) AI 生成コードをそのまま納品・公開する場合、著作権の帰属が不明確になるリスクがある。重要なコードは人間によるレビューと編集を経ることが望ましい。(2) GitHub Copilot Enterprise の IP インデムニティ（知的財産補償）のように、AI ツール提供者が著作権リスクを引き受けるサービスが出てきている。企業利用ではこうした補償の有無が選定基準になる（[→ 企業導入チェックリスト](?a=ai-enterprise-legal-checklist-2026)）。(3) プロジェクトに利用するツールの利用規約を確認し、生成物の権利帰属条項を把握しておくことが基本となる。各国の規制アプローチの違いは[米国・EU・日本の規制比較](?a=ai-regulation-comparison-us-eu-japan-2026)を参照。"
    ],
    "primarySources": [
      {
        "title": "Copyright and Artificial Intelligence",
        "site": "U.S. Copyright Office",
        "url": "https://www.copyright.gov/ai/"
      },
      {
        "title": "EU AI Act",
        "site": "European Commission",
        "url": "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
      },
      {
        "title": "AIと著作権に関する考え方について",
        "site": "文化庁",
        "url": "https://www.bunka.go.jp/seisaku/bunkashingikai/chosakuken/pdf/94037901_01.pdf"
      }
    ]
  },
  "ai-regulation-comparison-us-eu-japan-2026": {
    "body": [
      "AI 規制は国・地域によってアプローチが大きく異なる。2026年3月時点の米国・EU・日本の3圏域の状況を、公式発表と施行済みの法規制に基づいて比較する。",
      "**EU（欧州連合）**は世界で最も体系的な AI 規制を進めている。AI Act（人工知能法）は2024年に成立し、2026年から段階的に施行中。リスクベースの4段階分類（禁止・ハイリスク・限定リスク・最小リスク）を採用し、ハイリスク AI には適合性評価・技術文書の作成・ログ記録が義務付けられる。汎用 AI モデル（GPAI）の提供者には透明性義務があり、「システミックリスク」のある大規模モデルには追加の安全評価が求められる。",
      "**米国**は連邦レベルの包括的な AI 規制法は2026年3月時点で成立していない。バイデン政権が2023年に出した AI に関する大統領令（Executive Order 14110）はトランプ政権発足後の2025年1月に撤回された。代わりにセクター別の規制（金融・医療・雇用・国防など）と州法の組み合わせで対応している。カリフォルニア州の SB 1047（AI 安全法案）は知事の拒否権により2024年に不成立となったが、2025年にも類似法案が提出されている。",
      "**日本**は法律による直接規制ではなく、ガイドライン主導のアプローチを取っている。2024年に経済産業省・総務省が「AI 事業者ガイドライン」を策定し、開発者・提供者・利用者それぞれの責務を整理した。法的拘束力はないが、業界の自主規制の基盤として機能している。著作権法第30条の4が AI 学習を広く許容する点は EU と対照的。広島 AI プロセス（G7 枠組み）を通じた国際調和も推進している。",
      "**開発者への実務的な影響**: EU 向けにサービスを提供する場合、AI Act のコンプライアンス対応（リスク分類、技術文書、透明性表示）が必要になる。米国では州法の動向に注意が必要で、特にカリフォルニア州の動きが業界標準に影響しやすい。日本ではガイドラインに沿った運用が実務上の安全策となる。いずれの国でも、==AI ツールの利用規約とデータ取り扱いポリシーの確認が基本==であることは共通している。著作権の詳細は[AI と著作権の記事](?a=ai-copyright-landscape-2026)、企業導入の具体的なチェック項目は[導入チェックリスト](?a=ai-enterprise-legal-checklist-2026)を参照。"
    ],
    "tables": [
      {
        "afterParagraph": 3,
        "caption": "AI 規制アプローチ比較（2026年3月時点）",
        "headers": [
          "項目",
          "EU",
          "米国",
          "日本"
        ],
        "rows": [
          [
            "規制手法",
            "包括的な法律（AI Act）",
            "セクター別規制 + 州法",
            "ガイドライン主導"
          ],
          [
            "AI 学習のデータ利用",
            "オプトアウト権あり（TDM 例外）",
            "フェアユース判断（訴訟中）",
            "広く許容（著作権法30条の4）"
          ],
          [
            "汎用 AI モデルの義務",
            "透明性義務 + 安全評価",
            "連邦レベルの義務なし",
            "ガイドラインで整理"
          ],
          [
            "ハイリスク AI",
            "適合性評価義務",
            "セクター別に個別規制",
            "自主規制"
          ],
          [
            "罰則",
            "最大3,500万ユーロ or 売上7%",
            "セクター別",
            "法的拘束力なし（現時点）"
          ],
          [
            "施行状況",
            "2026年段階的施行中",
            "包括法なし",
            "ガイドライン公表済み"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "EU AI Act",
        "site": "European Commission",
        "url": "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
      },
      {
        "title": "AI事業者ガイドライン",
        "site": "経済産業省・総務省",
        "url": "https://www.meti.go.jp/press/2024/04/20240419004/20240419004.html"
      },
      {
        "title": "Executive Order on AI (revoked)",
        "site": "White House",
        "url": "https://www.whitehouse.gov/presidential-actions/2025/01/initial-rescissions-of-harmful-executive-orders-and-actions/"
      }
    ]
  },
  "ai-enterprise-legal-checklist-2026": {
    "body": [
      "AI コーディングツールの企業導入が加速する中、法務・情報セキュリティ部門と開発チームの間で「何を確認すべきか」の認識がずれるケースが多い。ここでは各ツールの公式ドキュメントと利用規約に基づいて、確認すべきポイントを4つの観点から整理する。",
      "**1. 利用規約とデータ取り扱い**: AI ツールにコードを入力すると、そのデータがどこに送信され、どう扱われるかを確認する。主要なチェック項目は (a) 入力データがモデルの学習に使用されるか否か、(b) データの保存期間と保存先のリージョン、(c) オプトアウト設定の有無。Claude Code は SOC 2 準拠で、Anthropic の利用規約では API 経由の入力はモデル学習に使用しないと明記している。GitHub Copilot は Business プラン以上でコードがトレーニングに使われない設定が可能。Cursor は Privacy Mode を有効にすることでコードの学習利用を防げる。",
      "**2. 知的財産（IP）**: AI が生成したコードの著作権帰属と、学習データに含まれる他者の著作物への類似リスクの2点を確認する。GitHub Copilot Enterprise は IP インデムニティ（知的財産補償）を提供しており、AI 生成コードに起因する著作権侵害の訴訟リスクを GitHub が引き受ける。他のツールではこの種の補償は2026年3月時点で一般的ではないため、社内規定でカバーする必要がある。",
      "**3. 情報セキュリティ**: (a) 通信の暗号化（TLS）、(b) 認証方式（SSO / SAML 対応）、(c) 監査ログの取得可否、(d) アクセス制御（誰がどのリポジトリで使えるか）の4点を確認する。GitHub Copilot Enterprise は SSO・監査ログ・組織レベルのポリシー管理を備えている。Cursor Business は管理機能付き。Claude Code は API 経由での利用が前提となるため、既存の API ゲートウェイによるアクセス制御と組み合わせる構成が多い。",
      "**4. 社内ルールの整備**: ツールの導入だけでなく、(a) AI 生成コードの人間によるレビュー義務、(b) 機密情報（顧客データ、認証情報等）の AI への入力禁止、(c) AI ツールのバージョン管理と利用範囲の文書化、を社内ルールとして定めることが実務上重要。==特に .env ファイルやクレデンシャルを AI に渡さない==ルールは技術的なガードレール（.cursorignore、.claude/settings.json の ignorePaths）と組み合わせて徹底する。",
      "チェックリストの運用: 上記の項目は導入時に1回確認して終わりではなく、ツールの利用規約やデータポリシーが変更されるたびに再確認が必要。各ツールの公式ドキュメントへのリンクを社内 Wiki 等に集約し、変更通知を追跡する体制を作ることを推奨する。著作権の法的背景は[AI と著作権](?a=ai-copyright-landscape-2026)、各国の規制アプローチの違いは[米国・EU・日本の規制比較](?a=ai-regulation-comparison-us-eu-japan-2026)を参照。"
    ],
    "tables": [
      {
        "afterParagraph": 3,
        "caption": "主要ツールのエンタープライズ対応比較（2026年3月時点・公式情報）",
        "headers": [
          "項目",
          "Claude Code",
          "GitHub Copilot",
          "Cursor"
        ],
        "rows": [
          [
            "学習データ利用の制御",
            "API 経由は不使用（利用規約）",
            "Business 以上でオプトアウト可",
            "Privacy Mode で制御"
          ],
          [
            "IP 補償（インデムニティ）",
            "なし（2026年3月時点）",
            "Enterprise プランで提供",
            "なし（2026年3月時点）"
          ],
          [
            "SSO / SAML",
            "API 経由で既存 IdP 利用",
            "Business 以上で SAML SSO",
            "Business プランで対応"
          ],
          [
            "監査ログ",
            "API ログで対応",
            "Enterprise で提供",
            "管理機能で対応"
          ],
          [
            "セキュリティ認証",
            "SOC 2 準拠",
            "SOC 2 準拠",
            "SOC 2 準拠"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Anthropic Usage Policy",
        "site": "Anthropic",
        "url": "https://www.anthropic.com/legal/aup"
      },
      {
        "title": "GitHub Copilot Trust Center",
        "site": "GitHub",
        "url": "https://github.com/trust-center"
      },
      {
        "title": "Cursor Privacy",
        "site": "Cursor",
        "url": "https://cursor.com/privacy"
      }
    ]
  },
  "monthly-roundup-2026-march": {
    "body": [
      "2026年3月は AI 開発ツールの競争が一段と激化した月だった。エージェント機能の強化、M&A による業界再編、そして規制・法務面での大きな動きが同時進行した。この月刊まとめでは、当サイトが3月に報じたニュースを中心に月全体の流れを振り返る。",
      "**エージェント機能の競争**: 月末にかけてエージェント機能の強化が相次いだ。**Cursor 2.4** は並列サブエージェント（最大20個同時、クラウド VM 実行）と BugBot（PR 自動レビュー）を導入し、8,000行の Next.js アプリのルーター移行が17分→9分に短縮されたと発表した（[→ 詳細](?a=cursor-2-4-subagents)）。**Claude Code** は Auto mode の対象拡大とクラウド auto-fix を発表し、ユーザー確認なしの連続タスク実行が進化した（[→ 詳細](?a=claude-code-auto-mode)）。**Gemini CLI** は v0.35.0 で Plan Mode とネイティブサンドボックスを追加した一方、Pro モデルを有料化し、無料枠は Flash のみに縮小された（[→ 詳細](?a=gemini-cli-v035)）。",
      "**M&A と業界再編**: 3月は2件の大型買収が業界地図を塗り替えた。**Anysphere（Cursor 親会社）が Windsurf（旧 Codeium）を買収**し、AI エディタ市場の選択肢が減少した（[→ 詳細](?a=cursor-windsurf-merge)）。Windsurf は単体提供を継続するも、Pro 価格を $15→$20 に改定して Cursor と同額に（[→ 詳細](?a=windsurf-pricing-overhaul)）。**OpenAI が Python ツール企業 Astral（uv・Ruff・ty）を買収**し、Codex との統合を発表。月間1.26億ダウンロードの uv を取り込み、Python エコシステム全体を Codex のパイプラインに組み込む戦略を示した（[→ 詳細](?a=openai-acquires-astral-2026)）。",
      "**モデル動向**: 中国勢のフロンティアモデルが存在感を示した月でもあった。**Kimi K2.5**（Moonshot AI）は SWE-Bench 76.8%・HLE 50.2% を記録し、欧米モデルに匹敵する性能を公開した（[→ 詳細](?a=kimi-k25-moonshot-2026)）。**GLM-5**（Zhipu AI）は Huawei チップで学習した点で注目された（[→ 詳細](?a=glm-5-zhipu-2026)）。**M2.7**（MiniMax）は自己進化する学習ループを実装した（[→ 詳細](?a=minimax-m27-2026)）。**Google** は [Gemini 3.1 Flash Live](?a=gemini-31-flash-live-voice-2026)（リアルタイム音声 AI）を発表し、応答遅延 0.5 秒以下を実現した。",
      "**規制・法務**: **Anthropic と米国防総省の法廷闘争**が最大の話題だった。サンフランシスコ連邦地裁が DoD による「サプライチェーンリスク」指定を暫定差止し、「修正第一条違反の報復」と判断（[→ 詳細](?a=anthropic-pentagon-injunction-2026)）。AI 企業の政府との利用条件交渉がどこまで企業側の倫理ポリシーで保護されるかという先例が形成されつつある。OpenAI の [Sora は消費者向け提供が終了](?a=openai-sora-discontinued-2026)した。規制全体の動きは [Q1 規制まとめ](?a=ai-regulation-q1-2026)を参照。",
      "**3月のキーワード**: エージェントの並列実行（Cursor・Claude Code）、MCP の普及加速（freee リモート版、MCP v2 ロードマップ）、中国モデルのフロンティア化（Kimi K2.5・GLM-5・M2.7）、AI ツール企業の M&A（Cursor+Windsurf、OpenAI+Astral）、AI と政府の緊張関係（Anthropic vs DoD）。4月以降は EU AI Act の施行本格化と、買収後の Cursor/Windsurf 統合の進捗が注目点となる。"
    ],
    "primarySources": [
      {
        "title": "Cursor 2.4 Release",
        "site": "Cursor",
        "url": "https://cursor.com/changelog"
      },
      {
        "title": "Claude Code Documentation",
        "site": "Anthropic",
        "url": "https://code.claude.com/docs/en/overview"
      },
      {
        "title": "OpenAI to acquire Astral",
        "site": "OpenAI",
        "url": "https://openai.com/index/openai-to-acquire-astral/"
      }
    ]
  },
  "overview-2026-spring": {
    "body": [
      "**3月24日（火）** — Anthropic と国防総省の法廷闘争が山場を迎えた。Rita Lin 判事が国防総省側の「サプライチェーンリスク」指定の根拠を問いただし、AI 企業が政府との契約で倫理ポリシーを主張できるかどうかの先例になりうる審問となった。同じ日、OpenAI の動画生成 AI Sora が消費者向け提供を終了した。著作権・安全性の壁が動画生成 AI の商用化を阻む構図が鮮明になっている（[法廷の詳細](?a=anthropic-pentagon-injunction-2026)、[Sora 提供終了](?a=openai-sora-discontinued-2026)）。",
      "**25日（水）** — ARC Prize Foundation が ARC-AGI-3 を公開した。従来のパターン認識ベンチマークと異なり、エージェントがインタラクティブな環境で適応推論を行う設計。主要フロンティアモデルのスコアは人間基準に対し極めて低く、「LLM はまだ汎用推論に遠い」ことを数字で示した。開発者にとっては、エージェントの能力限界を見極める上で有用な指標となる（[ARC-AGI-3 の詳細](?a=arc-agi-3-launch-2026)）。",
      "**26日（木）** — Google DeepMind が Gemini 3.1 Pro のプレビューを発表し、200万トークンのコンテキストウィンドウを維持しつつ推論精度を改善した。開発者が大規模コードベースを一括で扱えるモデルの選択肢が広がる。同じ木曜に MCP v2 仕様も公開され、OAuth 2.1・Streamable HTTP・JSON-RPC バッチが追加された。エンタープライズ環境での MCP 導入障壁が大きく下がる改定で、OpenAI・Microsoft も正式サポートを表明している。法廷では Lin 判事が Anthropic の暫定差止申請を認め、国防総省の措置は当面執行できなくなった（[Gemini 3.1 Pro](?a=gemini-3-1-pro)、[MCP v2](?a=mcp-v2-spec-launch-2026)、[暫定差止](?a=anthropic-pentagon-injunction-2026)）。",
      "**27日（金）** — Cursor 2.4 が並列サブエージェント（最大20個同時・クラウド VM 実行）と BugBot を導入した。「AI に丸投げ」できるタスクの粒度と並列度が上がり、大規模リファクタリングの所要時間が半減する可能性がある。同じ日に Anthropic は Claude Code の Auto mode 対象を拡大し、クラウド auto-fix も発表。エージェント型開発の自律性がまた一段上がった（[Cursor 2.4](?a=cursor-2-4-subagents)、[Auto mode](?a=claude-code-auto-mode)、[auto-fix](?a=claude-code-autofix-cloud)）。",
      "**週末** — Anthropic の内部コードネーム Mythos（別名 Capybara）の草稿報道が広がり、CrowdStrike や Palo Alto Networks などセキュリティ銘柄が売られた。草稿が示すサイバー能力が材料視された形で、AI 企業の機密管理と情報開示のあり方が改めて問われている（[Mythos リーク](?a=anthropic-mythos-leak)、[市場への影響](?a=anthropic-mythos-cyber-impact-2026)）。"
    ],
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
  "overview-2026-week-mar16": {
    "body": [
      "**3月17日（火）** — OpenAI が GPT-5.4 mini と nano を同時にリリースした。mini は無料層と Codex での利用を想定した軽量モデルで、nano は API 専用の超低コスト・高速推論モデル。並列エージェントの末端ノードに低コストモデルを配置する設計が現実的になり、エージェント運用のコスト構造が変わりうる（[→ 詳細記事](?a=gpt-54-mini-nano-2026)）。",
      "**18日（水）** — Windsurf（旧 Codeium）のレビューが更新された。Cascade フローによる段階的な差分プレビューが強みだが、Anysphere 傘下に入ったことで長期的なロードマップが不透明になっている。新規ユーザーは Cursor との機能重複と将来の統合可能性を考慮する必要がある（[→ 詳細記事](?a=windsurf)）。",
      "**19日（木）** — OpenAI が Python ツール企業 Astral の買収を発表した。uv（月間1.26億DL のパッケージマネージャ）・Ruff（Rust 製リンター）・ty（型チェッカー）を Codex に統合し、Python 開発の環境構築からコード品質管理までを一気通貫で押さえる戦略。OSS の中立性への懸念も出ている。同日、生成音楽ツール（Suno・Udio・Lyria 等）の権利関係と製品比較を整理した特集も掲載された（[Astral 買収](?a=openai-acquires-astral-2026)、[生成音楽の整理](?a=ai-music-generation-frontier-early-2026)）。",
      "**20日（金）** — Anysphere（Cursor 親会社）が Windsurf の買収完了を発表した。AI エディタ市場の主要プレイヤーが1社に集約され、選択肢は実質 Cursor vs VS Code+Copilot の二極構造に近づいた。Windsurf は単体提供を継続するが、独自の機能追加がどこまで続くかは不透明（[→ 詳細記事](?a=cursor-windsurf-merge)）。",
      "**22日（日）** — OpenAI Codex のエージェント機能をレビューした。クラウドサンドボックスでの並列実行と PR 自動作成のワークフローは、Claude Code のローカル実行とは対照的なアプローチ。o4-mini ベースで動作し、複数タスクを同時に投げられる点がチーム開発に向く（[→ 詳細記事](?a=openai-codex-agent)）。"
    ],
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
  "guide-media-generative-tools-2026": {
    "body": [
      "このサイトの **ガイド** は、用途ごとにタブを分けている。**バイブコーディング** は IDE・CLI・リポジトリを前提にした組み合わせと運用の話。**メディア生成** は画像・動画・音楽・音声合成など、生成系プロダクトの代表例をジャンル別に並べた早見だ。",
      "**メディア早見の位置づけ** — 表は公開情報ベースのサンプルであり、各社の最新機能・価格・提供地域を代替しない。**料金・利用条件・学習データ方針・商用利用**は、必ず公式の約款とヘルプで確認する。",
      "**権利と運用** — 生成物の著作権・肖像・ソフト利用許諾・社内ルールは案件により重い。外部公開の前に権利整理が後追いになりやすいので、本早見は**ツールを知るための出発点**と捉え、法務・契約・ブランド規程の代替にはしない。",
      "**開き方** — ブラウザではナビの「ガイド」→ **メディア生成** タブ。URL は同一サイト内で `?view=guide&tab=media` でもよい。",
      "段階の道筋、組み合わせ表、音声・スラッシュ・スキル、コードのハマりどころは **バイブコーディング** タブにまとめてある。やりたい作業に合わせてタブを選ぶとよい。"
    ]
  },
  "anthropic-mythos-leak": {
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
  "openai-six-layer-context-data-agent-2026": {
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
      {
        "src": "articles/diagram-openai-six-layer-rag.svg",
        "alt": "OpenAI 6層コンテキストの全体像。ユーザーの質問がGPT-5.2データエージェントに入り、左側にLayer 1-3（Table Usage、Human Annotations、Codex Enrichment）、右側にLayer 4-6（Institutional Knowledge、Memory、Runtime Context）が接続。下段で日次パイプラインがEmbeddings APIでベクトル化しRAGで検索する流れ",
        "caption": "6層コンテキストの全体像 — 各層がエージェントにどう接続するか",
        "afterParagraph": 3
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
  "rag-chunking-ingestion-2026": {
    "body": [
      "検索品質の上限はしばしば **チャンク境界**で決まります。トークン単位の固定窓だけでは、見出しの途中で切れたり、1 チャンクに無関係な節が混ざったりして、埋め込みの意味が薄まります。Markdown / HTML / AST から **論理ブロック**（見出し〜次見出し手前）で切る、文境界で揃える、オーバーラップを少し足す、といった設計が一般的です。",
      "**親子チャンク（階層チャンキング）** は、検索用に細かい子を持ちつつ、生成時に親の広い文脈を返すパターンです。検索ヒットは子、ユーザーへの引用表示や LLM 入力は親を結合、という二段構成にすると、再現性と文脈の両立がしやすくなります。セマンティックチャンキング（埋め込み類似度で段落をまとめる）はコストとトレードオフです。",
      "PDF はレイヤー構造の有無で難易度が跳ね上がります。テキスト抽出が貧弱なスキャン物は **OCR** 前提となり、ノイズ・改行崩れ・表の列ずれが典型的な失敗要因です。表は HTML／CSV に正規化してからチャンクする、あるいは表単位で別インデックスにする、など **ドキュメント種別ごとのパイプライン**に分けると運用が安定します。",
      "メタデータ（ソース URL、版、著者、権限ラベル、取り込み時刻、パイプライン版）は、後からの **再処理・差分更新・デバッグ**に効きます。ACL は「格納時にフィルタ」か「検索後にフィルタ」かで設計が変わり、後述の企業向け記事とセットで決めるのが無難です。",
      "本番では **監視**も必須です。取り込み件数・失敗キュー・埋め込み API のレイテンシとエラー率、空チャンク率、平均チャンク長、nDCG やヒット率の簡易メトリクスをダッシュボード化し、アラートを張ると長期運用で劣化に気づけます。"
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
  "rag-evaluation-citations-2026": {
    "body": [
      "RAG の評価は **検索**と**生成**を分けても、結合しても設計します。検索だけならヒット率・nDCG・MRR、生成込みなら正答一致・LLM-as-judge（慎重に：バイアスとコスト）、引用スパンとの一致度、などを組み合わせます。",
      "本番品質には **ゴールデンセット**（代表質問＋期待される根拠 passages または期待 SQL／期待数値）が効きます。OpenAI のデータエージェント記事でも、自然語と「正解 SQL」のペアを eval に載せる手法が紹介されており、RAG でも同様に **根拠チャンク ID のセット**を正解ラベルにできる場合があります。",
      "**引用 UI** はユーザー信頼に直結します。インラインの番号リンク、サイドパネルでの PDF ハイライト、表のセル参照など、プロダクトの体裁に合わせて実装します。引用が空のまま高い確信度で答えるモデル振る舞いは、プロンプトとツール結果の構造（必ず sources を返させる）で抑えます。",
      "**閾値ルーティング** は、検索スコアや自己申告 confidence が低いときに、別インデックスを叩く・クエリを拡張する・ human escalation する・「分からない」と返す、へ振り分けるパターンです。誤答より **拒否**を選ぶドメイン（医療・法務・財務）では特に重要です。",
      "失敗タイプをタグ付け（検索漏れ／チャンク分割ミス／要約の捏造／ACL 越え）しておくと、週次レビューで **どこに投資すべきか**が見えます。"
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
  "rag-enterprise-acl-privacy-2026": {
    "body": [
      "企業 RAG の第一原則は **権限の単一路径**です。検索インデックスに入れる前に ACL をラベルとして付与するか、検索後にソースシステムで再チェックするかを決め、**昇格バグ**（権限の低いユーザーが高機密チャンクを見る）が起きないようにします。グループメンバーシップは IdP との同期遅延に注意します。",
      "**テナント分離**はインフラレベル（プロジェクト／VPC／キー空間）とアプリレベル（クエリ必須フィルタ）の多層が安全です。マルチテナント SaaS では他テナントのチャンクが混ざると即インシデントになるため、静的テスト（他テナント ID を混ぜた負荷テスト）を推奨します。",
      "**PII** は取り込み時に検出・マスキング・別ストア（トークン化）など方針を分けます。マスキングしすぎると検索に hit しなくなり、しなさすぎるとログ漏えいリスクが残ります。人事・健康情報などカテゴリ別に保持期間と利用目的を揃えると説明がしやすいです。",
      "**削除と再インデックス**（オブジェクト削除、版更新、アクセス剥奪）をどの遅延で保証するか SLA 化します。法的削除要求があるドメインでは、ベクトルストアの物理削除とメタデータの tombstone の両方を追います。",
      "**監査ログ**には「誰が・いつ・どのクエリで・どのドキュメント ID を取得したか」を残し、モデルへの入力ログとは分離して保存期限を設定します。インシデント時のスナップショット（インデックス版・ルール版）が取れると復旧が速くなります。"
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
  "rag-getting-started-step-by-step-2026": {
    "body": [
      "RAG（Retrieval-Augmented Generation）は、LLM が持たない知識を外部データから検索して補完する仕組み。社内文書検索、ヘルプデスク、ナレッジベースなど、LLM 単体では回答できない領域に適用される。ここでは RAG パイプラインの構築手順を4ステップで整理する。",
      "**Step 1: ドキュメントの取り込みと前処理**。対象ドキュメント（PDF、Markdown、HTML、データベースレコード等）をテキストとして抽出する。PDF は構造化が難しいため、テーブルや画像内テキストの処理が品質に直結する。前処理ではメタデータ（ファイル名、更新日、作成者、アクセス権限）を付与する。チャンキング（テキスト分割）は固定長、段落区切り、セマンティック分割の3パターンがあり、用途に応じて選ぶ。詳細は[チャンキング設計の記事](?a=rag-chunking-ingestion-2026)を参照。",
      "**Step 2: ベクトル化（Embedding）と格納**。チャンクをベクトル（数値配列）に変換し、ベクトルデータベースに格納する。Embedding モデルは OpenAI の text-embedding-3-small/large、Google の Gecko、Cohere の embed-v3 など複数の選択肢がある。ベクトル DB は [pgvector（PostgreSQL 拡張）](?a=ai-backend-postgres-supabase-2026)、Pinecone、Weaviate、Chroma などから選ぶ（[→ ベクトル DB 比較](?a=vector-db-comparison-2026)）。開発段階では Chroma（ローカル・OSS）で始めて、本番で Pinecone や pgvector に移行するパターンが多い。",
      "**Step 3: 検索（Retrieval）**。ユーザーのクエリをベクトル化し、格納済みベクトルとの類似度検索でトップ N 件を取得する。キーワード検索（BM25）とベクトル検索を組み合わせるハイブリッド検索が精度と再現率のバランスで有利とされる。検索結果のリランキング（Cohere Rerank 等）を挟むと上位の関連度がさらに向上する。",
      "**Step 4: 生成（Generation）**。検索で取得したチャンクをプロンプトに含め、LLM に回答を生成させる。プロンプトには「以下の情報のみに基づいて回答してください」の指示を入れ、ハルシネーション（捏造）を抑制する。==引用元を回答に含める設計==にすると、ユーザーが根拠を確認でき信頼性が上がる。引用と評価の設計は[評価・引用の記事](?a=rag-evaluation-citations-2026)を参照。",
      "よくある落とし穴: (1) チャンクが大きすぎて検索精度が落ちる（目安は200〜500トークン）、(2) メタデータフィルタを使わず全文検索に頼る、(3) Embedding モデルのバージョン変更時に全ベクトルの再生成が必要になる、(4) 本番でアクセス権限を考慮しないまま全社ドキュメントをインデックス化する（[→ エンタープライズ RAG の注意点](?a=rag-enterprise-acl-privacy-2026)）。"
    ],
    "figures": [
      {
        "src": "articles/diagram-rag-pipeline-4steps.svg",
        "alt": "RAGパイプラインの4ステップ図。Step 1: 取り込み・前処理（PDF/HTML/DBからテキスト抽出→チャンキング→メタデータ付与）、Step 2: ベクトル化・格納（Embeddingモデルでベクトル化→ベクトルDBに格納）、Step 3: 検索（類似検索+BM25+リランキング）、Step 4: 生成（検索結果をプロンプトに含めLLMで回答生成→引用付与）",
        "caption": "RAG パイプラインの4ステップ — ドキュメントが回答になるまでの流れ",
        "afterParagraph": 0
      }
    ],
    "primarySources": [
      {
        "title": "OpenAI Embeddings Guide",
        "site": "OpenAI",
        "url": "https://platform.openai.com/docs/guides/embeddings"
      },
      {
        "title": "LangChain RAG Tutorial",
        "site": "LangChain",
        "url": "https://python.langchain.com/docs/tutorials/rag/"
      },
      {
        "title": "LlamaIndex Getting Started",
        "site": "LlamaIndex",
        "url": "https://docs.llamaindex.ai/en/stable/getting_started/"
      }
    ]
  },
  "vector-db-comparison-2026": {
    "body": [
      "ベクトルデータベースは RAG パイプラインの中核コンポーネントで、Embedding ベクトルの格納と類似度検索を担う。2026年時点で主要な選択肢は pgvector（PostgreSQL 拡張）、Pinecone（マネージド）、Weaviate（OSS + マネージド）、Chroma（OSS・ローカル特化）、Qdrant（OSS + マネージド）の5つに大別される。",
      "**pgvector** は PostgreSQL の拡張で、既存の PostgreSQL インフラにベクトル検索を追加できる。SQL でクエリが書けるため学習コストが低く、トランザクション・ACL・バックアップなど PostgreSQL の運用ノウハウがそのまま使える。Supabase は pgvector を標準搭載しており、即座に利用可能（[→ Supabase 周辺の設計](?a=ai-backend-postgres-supabase-2026)）。大規模（数千万ベクトル超）では専用 DB に比べて検索速度が劣る場合がある。",
      "**Pinecone** はフルマネージドのベクトル DB サービス。インフラ管理が不要で、API キーを取得すれば即利用可能。サーバーレスプランは使用量に応じた従量課金で、小規模なら低コスト。メタデータフィルタリングやネームスペースによるマルチテナント分離が標準機能。スケーラビリティが高く、数十億ベクトルにも対応するが、ベンダーロックインとなる点は考慮が必要。",
      "**Weaviate** は Go 製の OSS ベクトル DB で、セルフホストとマネージド（Weaviate Cloud）の両方を提供。ベクトル検索とキーワード検索のハイブリッド検索を標準サポート。GraphQL ベースの API が特徴的で、オブジェクトとしてデータを扱える。モジュール方式で Embedding モデルを内蔵できる。**Qdrant** は Rust 製の OSS で、高速な検索とフィルタリングに強み。REST / gRPC API を提供し、Docker で簡単に起動できる。",
      "**Chroma** は Python ネイティブの OSS ベクトル DB で、ローカル開発に最も手軽。`pip install chromadb` でインストールしてインメモリで動作するため、RAG のプロトタイピングに最適。本番環境向けにはサーバーモード（Docker）も提供されるが、大規模運用の実績は他の選択肢に比べるとまだ浅い。",
      "選定の判断基準: 既存 PostgreSQL を活かすなら pgvector、インフラ管理を避けるなら Pinecone、OSS でハイブリッド検索なら Weaviate または Qdrant、開発・プロトタイプなら Chroma。企業で ACL やテナント分離が必要な場合は Pinecone のネームスペースか pgvector の行レベルセキュリティを活用する。RAG 構築の全体フローは[RAG ステップバイステップ](?a=rag-getting-started-step-by-step-2026)を参照。"
    ],
    "tables": [
      {
        "afterParagraph": 4,
        "caption": "ベクトル DB 比較（2026年3月時点）",
        "headers": [
          "DB",
          "種別",
          "言語",
          "ハイブリッド検索",
          "マネージド",
          "強み"
        ],
        "rows": [
          [
            "pgvector",
            "PostgreSQL 拡張",
            "C",
            "BM25 は別途",
            "Supabase 等",
            "既存 PG インフラ活用"
          ],
          [
            "Pinecone",
            "マネージド専用",
            "—",
            "対応",
            "フルマネージド",
            "スケーラビリティ・手軽さ"
          ],
          [
            "Weaviate",
            "OSS + マネージド",
            "Go",
            "標準対応",
            "Weaviate Cloud",
            "GraphQL API・モジュール"
          ],
          [
            "Chroma",
            "OSS",
            "Python",
            "限定的",
            "なし（Docker）",
            "ローカル開発・プロトタイプ"
          ],
          [
            "Qdrant",
            "OSS + マネージド",
            "Rust",
            "対応",
            "Qdrant Cloud",
            "高速検索・フィルタリング"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "pgvector",
        "site": "GitHub",
        "url": "https://github.com/pgvector/pgvector"
      },
      {
        "title": "Pinecone Documentation",
        "site": "Pinecone",
        "url": "https://docs.pinecone.io/"
      },
      {
        "title": "Weaviate Documentation",
        "site": "Weaviate",
        "url": "https://weaviate.io/developers/weaviate"
      },
      {
        "title": "Chroma Documentation",
        "site": "Chroma",
        "url": "https://docs.trychroma.com/"
      },
      {
        "title": "Qdrant Documentation",
        "site": "Qdrant",
        "url": "https://qdrant.tech/documentation/"
      }
    ]
  },
  "ai-dev-stacks-python-js-node-2026": {
    "body": [
      "生成 AI アプリの**参照実装**は依然として **Python**（LLM SDK、評価notebook、データパイプライン）と **JavaScript / TypeScript**（Web UI、サーバーレス、BFF）に二分されがちです。単一リポジトリで両方を持つチームは、**どちらを「信頼の境界」に置くか**（例: 課金・権限検証は TS のみ）を先に決めると混乱が減ります。",
      "Python 側では **uv**（高速な依存解決・仮想環境・ロック）と **Ruff**（Lint / format 一体）の普及が続いています。**OpenAI による Astral 買収**は、Codex が Python リポ全体を扱うときの「標準 toolchain」が揃う、というストーリーです。型は **ty** や mypy / Pyright との住み分けをチームで固定し、CI で何をゲートにするかを README に書いておくと AI エージェントにも説明しやすいです。",
      "**Node.js** は **LTS サイクル**に合わせた本番固定が鉄板です。フレームワーク（Nest / Hono / Fastify 等）は選定理由を「観測性・型安全・デプロイ先」とセットで記録します。**Bun** はランタイム・パッケージマネージャとして速い一方、ネイティブ依存や一部の npm 互換差分はリリースノートを追う運用が必要です。**Deno** はセキュリティデフォルトと URL import 文化が残るため、既存 Node 資産との共存パターンをドキュメント化しておくとよいです。",
      "フロントの **JavaScript（ブラウザ）** はビルドツール（Vite 等）と型（TypeScript）が前提になり、**エージェント向け MCP クライアント**や **WASM 連携**の例も増えています。モノレポ（pnpm / Turborepo）では **共通パッケージのバージョン**を人間が追わないと、AI が古い import を生成し続ける罠があります。",
      "周辺の「ニュースとして追うべき」軸は、(1) ランタイムのメジャー更新とセキュリティ advisory、(2) パッケージレジストリの供給網（typosquat・メンテ状況）、(3) **SBOM と CI のキャッシュ鍵**、の三段です。言語そのものより **ツールチェーンの再現性**が AI 時代には直結します。"
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
  "ai-backend-postgres-supabase-2026": {
    "body": [
      "生成 AI プロダクトの永続化は、従来の CRUD に加え会話ログ・ツール呼び出しトレース・ベクトルインデックス・メタデータが増えます。単一 DB で押さえるなら **PostgreSQL** が依然として現実的な既定選択で、**pgvector** や全文検索（`tsvector`）と組み合わせたハイブリッド検索（キーワード＋近傍ベクトル）が実務でよく登場します。",
      "**Supabase** はマネージド Postgres を中核に、Auth（GoTrue 系）・**Row Level Security** によるテナント分離・Realtime・Edge Functions を束ねた BaaS です。プロトタイプだけでなく、RAG のメタテーブルと chunk テーブルを同一クラスタに置き、JWT クレームを RLS ポリシーに流すパターンがドキュメント化されやすい点が強みです。接続はプール（PgBouncer / Supavisor）経由か直結かで挙動差（ prepared statement・transaction mode）があるため、ORM とセットで確認します。TypeScript 層では **Prisma** と **Drizzle ORM** がよく比較されるため、選定軸は別稿で整理しています。",
      "代替・近傍として **Neon**（ブランチ型 Postgres）や **PlanetScale**（MySQL Vitess 系）なども選ばれますが、pgvector 前提の記事・サンプルとの親和、GIS 拡張、JSONB による柔軟なメタデータ格納では Postgres 派が厚いです。マルチクラウド要件がある場合はデータ所在地・バックアップ SLA を契約側で先に固定します。",
      "スキーマ設計ではドキュメント ID・版・ACL ラベル・取り込み時刻・埋め込みモデル名と次元数を行メタに持ち、削除・再埋め込みパイプラインと整合させます。エージェントが SQL を直接叩く構成では **読み取り専用ロール** と許可リストでテーブルを縛り、書き込みはアプリ層経由に寄せると事故が減ります。",
      "本稿は製品比較の代替ではありません。認証・課金・監査は自社ポリシーと合わせ、Supabase／Postgres の公式セキュリティガイド・SOC 報告の有無を毎回確認してください。"
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
  "orm-drizzle-prisma-ai-backend-2026": {
    "body": [
      "LLM が生 SQL やクエリビルダ文字列を吐くデモが増えても、本番の永続層ではスキーマ版管理・接続上限・権限を人間側でコントロールする必要があります。**ORM** は「エージェントの出力をそのまま評価する」より、アプリの契約（型・マイグレーション・トランザクション境界）を固定する用途で引き続き主力です。",
      "**Prisma** は `schema.prisma` 中心のワークフローが明確で、Prisma Client の API が学習コストを下げ、Prisma Migrate でチーム開発の履歴を揃えやすいのが長所です。**Prisma Accelerate** や Data Proxy 系の接続プール／エッジ経路は、サーバーレス関数のコールドスタートと接続スパイクを抑えたいときに検討されます。反面、実行時クエリの細かいチューニングや「SQL にほぼ等価な追従」を求めると、 `$queryRaw` 周りの規律が必要になります。",
      "**Drizzle ORM** は TypeScript 上でリレーショナル SQL に近い記述と軽量クライアントを売りにし、drizzle-kit でマイグレーションを管理するパターンが一般的です。バンドルサイズや Edge / Worker 志向の構成と相性がよい、とされることが多く、postgres.js や **Neon serverless driver** などドライバ選択を明示しやすい点が実務メリットです。チーム全員が SQL に慣れているほど設計の伸びしろが出やすい一方、ガイドラインが無いとスタイルがバラける弱点もあります。",
      "AI プロダクト特有の論点は、(1) **会話ログ・ツールトレース**など巨大 JSON を `jsonb` で持つときのインデックス設計、(2) **pgvector** テーブルを ORM のスキーマに含めるか一部だけ生 SQL に逃がすか、(3) **RLS** が効いた接続ユーザーとアプリ用ロールの分離、の三点です。エージェントに「任意のマイグレーション」を任せる運用は避け、**人間レビュー必須のパイプライン**に固定するのが無難です。",
      "選定の決め手は信仰や炎上ではなく、**チームの SQL 文化・デプロイ形態（長寿命サーバ vs サーバーレス）・観測性**です。新規 PoC なら両方を小さく触り、マイグレーション速度と CI の書き方、ステージングの破壊的変更の扱いを比較するとブレが減ります。最終的なライセンス・クラウド課金・データ所在地は各公式の pricing / DPA を参照してください。"
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
  "aqua-voice-review": {
    "body": [
      "Aqua Voice は Mac / Windows 向けの AI ディクテーションで、小さなフローティング UI から録音し、転写結果をカーソル位置へ流し込むワークフローが中心です。開発者向けの「手をキーボードから離さずに進めたい」場面や、短いメモの口述に向くタイプのプロダクトです。",
      "料金・機能の境界は公式 FAQ が基準です。無料で試せる語数に上限があり、Pro プランでモデル選択や利用上限の扱いが変わる理解でよいでしょう（詳細は一次情報で都度確認）。",
      "注意点として、モバイル iOS 版は FAQ 上「未対応」とされています。Apple シリエコシステムだけで完結させたい場合は別製品との比較が必要です。",
      "精度の評価はドメイン依存です。ベンダーが公表する技術用語向けスコアと、会話全般の WER は別物なので、自チームの音声サンプルで試すのが確実です。"
    ],
    "primarySources": [
      {
        "title": "Aqua Voice — FAQ",
        "site": "Aqua",
        "url": "https://aquavoice.com/faq"
      }
    ]
  },
  "ai-voice-input-tools-landscape-2026": {
    "body": [
      "音声入力のスタックは大きく「OS 標準」「サードパーティ製品」「自分で API を叩く」の三層に分けられます。開発者が比較しやすいのは製品単体より、**どこで音声が止まるか**（端末内／ベンダークラウド／自社 VPC）の境界です。",
      "OpenAI のドキュメント上、Speech-to-Text には `whisper-1` と `gpt-4o-transcribe` 系など複数ルートがあり、**OSS Whisper モデルそのものとは名前が似ていても別物**です。ベンチや「Whisper ベース」の記述を読むときは、OSS なのかホスト API なのかを必ず確認してください。",
      "クラウド STT ではレイテンシ表示が「ネットワーク除く」こともあり、実アプリでは端末処理との二段構えや、長尺ファイルの非同期バッチが現実的です。医療・法務などではログ保管と再識別リスクが追加の論点になります。",
      "製品側（Aqua 等）はフローティング UI・ペースト演出・ショートカット統合まで含めた体験勝負、API 側はカスタムパイプラインとの接続勝負、という住み分けが典型です。",
      "下の表は「調査の出発点」用です。契約 SLA・データ居留・モデル ID は都度ベンダー表を正としてください。"
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
  "ai-music-generation-frontier-early-2026": {
    "body": [
      "生成音楽は、品質よりも**権利と配信パイプライン**の話が速い分野です。スタートアップの評価額報道は桁や通貨の取り違えが起きやすいので、必ず原報を読みます。",
      "Suno はヘルプ上 v5 系の説明があり、2026年時点ではさらに次版が進行している可能性があります。細部はアプリ内と help を正にしてください。",
      "Udio と大手レーベル側の和解・ライセンス型への話は 2025 年末前後の報道が多く、**利用規約と曲の帰属**はプロダクト更新で変わり得ます。",
      "Google 側は Lyria などブランドが複数接続先（消費者アプリ、API、Vertex 等）を持つ構成で、発表時点の The Keyword・開発者ブログを軸に追うのが安全です。",
      "Stable Audio など別系統は「いつ発表された製品か」を公式 post の年と突き合わせ、古い記事の断定をそのまま写さないことが重要です。企業の広告 BGM 用途は別途ポリシー確認が必要です。"
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
  "ai-image-generators-landscape-early-2026": {
    "body": [
      "2026年初頭の画像生成は、単純な「きれいさ」より **指示への追従**（空間関係・構図・オブジェクト数）と用途別の最適化が際立っている。ベンダーによって版数表記・API 名・消費者アプリ名が一致しないため、契約や本番組み込みではリリースノートと pricing を直接確認すること。",
      "**選び方の軸**: 画像生成モデルの選定は「何を作るか」で決まる。(1) マーケティング素材やSNS投稿 → GPT Image（ChatGPT 経由で手軽）または Midjourney（アート性が高い）。(2) 製品写真やフォトリアル → Flux 2（品質と速度のバランス）。(3) ロゴ・アイコン・ブランド素材 → Recraft（SVG 出力対応）。(4) 企業の商用利用で著作権リスクを最小化 → Adobe Firefly（著作権補償付き）。(5) 自社サーバーで完結させたい → Stable Diffusion（オープンウェイト、ローカル実行可能）。(6) Google Cloud 上で大量処理 → Imagen 4。",
      "**主要モデルの特徴**: **GPT Image 1.5**（OpenAI）は画像内テキストの精度とプロンプト追従で評価が高い。ChatGPT 経由での利用が中心で、API からも呼び出し可能。**Midjourney V8** はアート性と美的コントロールに強く、クリエイティブ用途で根強い支持がある。**Flux 2**（Black Forest Labs）はフォトリアル系でレイテンシと品質のバランスが良い。**Ideogram 3.0** は画像内の文字・タイポグラフィ生成に特化。**Adobe Firefly Image 3** は Creative Cloud 統合と著作権補償（商用利用時の IP 保護）が最大の差別化要素。",
      "**エンタープライズと規制**: 商用利用では著作権・肖像権のリスク管理が重要。Adobe Firefly は学習データの著作権を明示し、商用利用への補償を提供している点で法務部門の承認が得やすい。Google Imagen 4 は Vertex AI 上で安全フィルタと監査ログが標準搭載される。Stable Diffusion はオープンウェイトだが、生成物の責任はユーザー側にある点を理解しておく必要がある。",
      "**Google 周りの整理**: **Imagen 4**（Cloud / 開発者向けドキュメント側）と、別稿で扱う [Nano Banana 2](?a=google-nano-banana-2-gemini-flash-image-2026)（Gemini 3.1 Flash Image）が表裏で混同されやすい。後者は動画ツール Flow の既定「画像」モデルでもあり、動画生成そのもの（Veo 等）とは別ライン。動画の比較は[動画まとめ](?a=ai-video-generators-landscape-2026)を参照。"
    ],
    "tables": [
      {
        "afterParagraph": 2,
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
  "google-nano-banana-2-gemini-flash-image-2026": {
    "body": [
      "**Nano Banana 2 は画像生成・編集モデル**です。The Keyword の製品名は *Nano Banana 2 (Gemini 3.1 Flash Image)* と明記されており、テキスト→**動画クリップ**を直接出す Veo 系とは別ラインです。",
      "ユーザー目線で紛れやすいのは **Google Flow** です。Flow は動画制作向けプラットフォームですが、公式ブログによれば既定の「画像」生成モデルが Nano Banana 2 に更新され、Flow 利用者向けはクレジット 0 で利用できる説明があります。タイムライン用のキービジュアルやボード素材を高速に回す文脈で動画ワークフローに載るため、「動画AIの新モデル」と誤読されやすい、という整理が実務的です。実際のテキスト→動画生成は別途 Veo などを参照してください（当サイトの動画まとめ稿）。",
      "能力面の要点は次のとおりです。Gemini の世界知識・検索グラウンディングを活かした被写体表現、画像内テキストの精密描画と翻訳・ローカライズ、**最大5キャラクター程度の一貫性**と単一ワークフロー内で最大14オブジェクトまでの忠実度維持、複雑な指示への追従、512px から 4K までの解像度・アスペクト比の指定、といった Pro 寄りの機能を **Flash 級の速度**で回す、というプロダクト訴求です。",
      "展開面では **Gemini アプリ**（Fast / Thinking / Pro で Nano Banana Pro に置き換え。有料層は Pro を再生成で継続利用可能）、Google 検索（AI Mode / Lens など）、Gemini API・AI Studio・Vertex AI（プレビュー）、Flow、Google Ads などにロールアウトとされています。API のモデル ID・価格は `gemini-3.1-flash-image-preview` の表記で公式 pricing を正としてください。",
      "プロvenance として Google は **SynthID** と C2PA Content Credentials の併用を継続すると述べています。生成物の開示・検証ポリシーは組織のガイドラインと合わせて確認が必要です。"
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
  "ai-video-generators-landscape-2026": {
    "body": [
      "2025〜2026 年のトレンドは「1クリックで完結」より、**企画→キーフレーム→動画→音声→後処理**を API でつなぐパイプライン設計に寄っています。",
      "Google の Veo 系、Runway、中国勢の Kling、開放系の Hunyuan／ByteDance 系列など、**アクセス経路（消費者アプリ／API／パートナー）**が異なるため、同じモデル名でも到達点が違います。",
      "選定チェックリストの例: 最大化解像度と尺、商用ライセンス、参照映像の扱い、音声同梱の有無、ウォーターマーク、推論コスト、地域制限、コンテンツポリシー。",
      "速報的な「サービス終了」や価格改定は二次報道だけで確定せず、**公式チャンジログ or pricing** を毎回見に行く運用が安全です。",
      "本サイト別稿ではフロンティア間の料金の軸比較と、Sora 終了報道の整理も参照してください。"
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
  "ai-video-deepfake-compliance-2026": {
    "body": [
      "各国・各州で「疑似実在映像」の定義と禁止対象が異なり、プラットフォームポリシーと二重管理がかかる場面があります。クロスボーダー配信では最悪ケースの規制に寄せた設計が無難です。",
      "C2PA Content Credentials は改ざん検知に近い**出所のくすみ**を残す仕組みで、撮影・編集・生成の各段でプロビナンスを積むイメージです。導入にはワークフローと保存形式の合意が必要です。",
      "社内利用でも「社外配布物だけチェック」では足りず、**個人情報・労務・パートナー契約**側の「AI 生成可否」条項が先に絡むことがあります。",
      "技術だけでは止められないため、**人間の承認ステップ・版管理・監査ログ**をセットで設計します。"
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
  "openai-sora-discontinued-2026": {
    "body": [
      "本稿は二次報道ベースの整理です。契約・プロダクト判断は OpenAI の公式発表、利用規約、ダッシュボード通知を正としてください。",
      "報道で繰り返される観点は、(1) 大規模推論のコストと経済性、(2) ロボティクスや世界モデル等への投資シフト、(3) 深偽・キャラクター利用をめぐる炎上とモデレーションコスト、などです。いずれも**仮説の列挙**であり単独原因として断定しない方が安全です。",
      "利用者向けメッセージが X などで引用された、とも各紙は伝えていますが、スクリーンショット単体の解釈には注意が必要です。",
      "クリエイター向けには、既存クリップのエクスポートや権利帰属、代替パイプライン（別稿のフロンティア比較）を早めに確認する動きが想定されます。",
      "本サイトでは規模の大きい話題のため速報枠で掲載するが、数値・内部事情の噂は掲げない方針とする。"
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
  "ai-video-frontier-models-march-2026-pricing": {
    "body": [
      "Gemini API 系の動画（Veo）では Google の pricing ページに秒あたり単価と解像度ティアが表形式で出ることが多いです。Standard / Fast の差も読み落とさないでください。",
      "Runway はクレジット／秒の組み合わせで示されるため、**1 クレジットの USD 換算**まで踏み込んで概算します。キャンペーンやパックで実効単価は変動します。",
      "Kling・Pika・CapCut 経由などはプロダクト境界が複雑なので、表では「確認 URL」を主役にし、断定価格は載せすぎません。",
      "Sora に関しては終了報道があり（別稿）、現行の新規採用は計画から外す判断が入り得ます。",
      "**いつでも公式を正にする**前提で、以下の表は2026年3月末時点の調査メモです。"
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
  "claude-code-auto-mode": {
    "body": [
      "ここで扱うのは CLI／デスクトップ上の権限モードです。2026年3月27日に発表された「auto-fix in the cloud」（PR の CI・レビューをクラウドで自動フォロー）は別機能なので混同しないでください。",
      "Anthropic は 2026年3月24日、Claude Code の権限オート承認を研究プレビューとして公表しました。ブログ・Engineering では「Auto mode」、一部宣材では「Auto fix」とオレンジ表記が出ます。実装・設定では `permission-mode auto`（`auto`）です。",
      "`--dangerously-skip-permissions` のように確認をゼロにするのではなく、各ツール実行前に別の分類器が安全性を見ることで、長時間タスクの割り込みプロンプトを減らすのが目的です。Engineering 投稿では、ツール出力側のプロンプトインジェクション疑いの検知と、実行直前のトランスクリプト評価（分類器は Claude Sonnet 4.6）の二層構成として説明されています。",
      "利用条件は公式ドキュメントに従います。例: Claude Team（管理者が Claude Code 設定で有効化）、Sonnet 4.6 / Opus 4.6、CLI では `--enable-auto-mode` を付けたうえで Shift+Tab から `default` → `acceptEdits` → `plan` → `auto` を循環、または `claude --permission-mode auto`。Enterprise / API への展開は「数日」との案内があります。",
      "混同しやすい点: UI の「Auto accept edits」は権限モード `acceptEdits` で、`auto`（Auto mode）とは別物です。",
      "同時期の関連: Claude Code Channels、Bare Mode、Analytics API、および auto-fix in the cloud（PR 自動フォロー）です。"
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
  "mico-kubectl-ai": {
    "body": [
      "Kubernetes 運用では `kubectl` の打ち間違い・意図と逆のリソース名・危険な delete がすぐ現場トラブルになります。OSS の **Mico** は、その補助として自然言語からコマンドやマニフェスト案を出すタイプのツールの一例です（名称・機能はリポジトリ README を正としてください）。",
      "**AI が提案した YAML をそのまま apply しない**こと。`kubectl apply --dry-run=server`、`diff`、変更対象namespaceの再確認、承認ゲートを挟む運用が必須です。本番クラスタでは RBAC を最小化し、エージェント用クレデンシャルにクラスタ管理者を渡さないのが鉄則です。",
      "同種ツールとして Google の **kubectl-ai** など別実装もあり、モデルサポート・配布形態（Krew プラグイン等）が異なります。採用時はライセンス・通信先（クラウド LLM へプロンプトが出るか）・ログ保管を DD で確認します。",
      "本稿はツール紹介と注意喚起であり、特定環境での合否判断やセキュリティ監査の代替ではありません。"
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
  "fish-ai-terminal-shell": {
    "body": [
      "**fish-ai**（例: Realiserad/fish-ai）は Fish 向けプラグインで、自然言語とシェルコマンドの往復、コマンド修正、fuzzy 補完風の挙動などを LLM で補強する構成です。多くの場合、設定ファイルでプロバイダや API キーを指定し、**端末マシンからベンダ API に直接出る**形になります（詳細は README を確認）。",
      "クラウド上でセッションを完結させるターミナル製品とは対照的に、**fish-ai はローカル環境に閉じたスタック**を好む人向けです。オフライン要件や社内プロキシ、エアギャップなどでは後者が使えない一方、前者は「自分のシェルに足す」だけで試せる利点があります。",
      "どちらの構成でも、**(1) プロンプトに環境変数やパスが混入しないか、(2) 履歴・ログの保存先、(3) サブスクリプションとデータ利用条項**を必ず読みます。シェル補助は実行権限に直結するため、**提案コマンドをそのまま実行しない**習慣づけが重要です。",
      "Fish 以外のシェルでは同種の試み（ラッパー、別プロセスのエージェント）を組み合わせることになり、体験の統一度は下がりがちです。チームで標準シェルを揃えるか、CI では POSIX sh 固定にするかは別途方針が必要です。"
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
  "cursor-2-4-subagents": {
    "body": [
      "Anysphere社は2026年3月、Cursor 2.4をリリースし、並列サブエージェント機能を正式導入しました。親エージェントがタスクを分解し、複数のサブエージェントがそれぞれ独立したコンテキストで同時に作業を進めます。",
      "サブエージェントはクラウドVM上で実行されるため、ローカルマシンに負荷をかけずに10〜20のエージェントを同時に稼働させることが可能です。テストでは、8,000行のNext.jsアプリのルーター移行がシリアル実行の17分から並列実行で9分に短縮されました。",
      "あわせて「BugBot」も発表されました。PRレベルの自動コードレビューを行い、バグの早期発見を支援します。カスタムプロンプト、ツールアクセス制御、モデル選択などサブエージェントの柔軟なカスタマイズも可能です。"
    ],
    "primarySources": [
      {
        "title": "Cursor 2.4 — Subagents, Skills, and Image Generation",
        "site": "Cursor",
        "url": "https://cursor.com/changelog/2-4"
      }
    ]
  },
  "gemini-cli-v035": {
    "body": [
      "Google DeepMindは2026年3月24日、Gemini CLI v0.35.0をリリースしました。サブエージェントアーキテクチャが大幅に強化され、ローカル実行、ツール分離、マルチレジストリ検出、動的ツールフィルタリング、JITコンテキスト注入に対応しています。",
      "セキュリティ面では統合SandboxManagerが導入され、Linux（bubblewrap/seccomp）、macOS（Seatbelt）、Windowsの各プラットフォームでネイティブなサンドボックス分離を実現。ツール実行の安全性が大きく向上しました。",
      "Plan Modeも新たに追加され、コード変更前にエージェントが計画を提示し、ユーザーの承認を得てから実行する慎重なワークフローが可能になりました。カスタムキーバインドやVimモードの強化など、開発者体験の改善も行われています。",
      "一方、3月25日よりGemini Proモデルは有料サブスクリプション限定となり、無料枠はGemini Flashモデルのみに制限されます。大規模コンテキストを活かした利用には課金が必要になる点に注意が必要です。"
    ],
    "primarySources": [
      {
        "title": "Gemini CLI",
        "site": "GitHub",
        "url": "https://github.com/google-gemini/gemini-cli"
      },
      {
        "title": "Gemini CLI v0.35.0 Release",
        "site": "GitHub",
        "url": "https://github.com/google-gemini/gemini-cli/releases/tag/v0.35.0"
      }
    ]
  },
  "copilot-jetbrains-ga": {
    "body": [
      "GitHubは2026年3月、Copilot Coding AgentのJetBrains IDE正式対応（GA）を発表しました。これまでVS Code限定だったAgent Mode、セマンティックコード検索、Issue→PRワークフローがJetBrainsでもフル機能で利用可能になります。",
      "セマンティックコード検索の導入により、ファイルパスを指定しなくても概念的に関連するコードを自動発見できるようになりました。これにより、Coding Agentの初期化時間が従来の約40秒から20秒へと50%短縮されています。",
      "EclipseとXcodeへのAgent Mode展開もパブリックプレビューとして開始され、全Copilotユーザーが利用可能です。さらにセッションログの可視性も向上し、リポジトリクローンやエージェントファイアウォールのステップが確認できるようになりました。"
    ],
    "primarySources": [
      {
        "title": "GitHub Copilot",
        "site": "GitHub",
        "url": "https://github.com/features/copilot"
      },
      {
        "title": "Copilot coding agent is now generally available",
        "site": "GitHub Blog",
        "url": "https://github.blog/changelog/2026-03-27-copilot-coding-agent-ga/"
      }
    ]
  },
  "gemini-3-1-pro": {
    "body": [
      "Google DeepMindは2026年3月26日、Gemini 3.1 Proをプレビューとして発表しました。ARC-AGI-2スコア77.1%を達成し、前世代Gemini 3 Proの倍以上となる推論性能を実現しています。",
      "1Mトークンのコンテキストウィンドウを持ち、テキスト・画像・音声・動画・PDF・コードリポジトリなど多様なデータソースを横断して処理可能です。複雑なデータ統合や高度な問題解決に最適化されています。",
      "価格は入力$2/出力$18（100万トークンあたり）で、Gemini 3 Proから据え置き。Geminiアプリ（Pro/Ultraプラン）、AI Studio、Vertex AI、Gemini CLI、Android Studio、NotebookLM で利用可能です。JetBrains IDE、Xcode、Eclipseでも GitHub Copilot経由で利用できます。",
      "エージェントワークフローの改善にも注力しており、Gemini Code Assistは個人開発者向けに完全無料化されました。月間18万リクエストまで無料で利用でき、VS CodeとJetBrains IDEに対応しています。"
    ],
    "charts": [
      {
        "afterParagraph": 1,
        "title": "コンテキスト長の比較（万トークン）",
        "subtitle": "一度に処理できるテキスト量",
        "unit": "万",
        "maxValue": 220,
        "bars": [
          {
            "label": "Gemini 3.1 Pro",
            "value": 200,
            "color": "#3b82f6"
          },
          {
            "label": "Claude Opus 4.6",
            "value": 100,
            "color": "#6366f1"
          },
          {
            "label": "GPT-5.4",
            "value": 12.8,
            "color": "#10b981"
          },
          {
            "label": "Kimi K2.5",
            "value": 25.6,
            "color": "#f59e0b"
          }
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Gemini 3.1 Pro",
        "site": "Google DeepMind",
        "url": "https://deepmind.google/models/gemini/pro/"
      },
      {
        "title": "Gemini 3.1 Pro in AI Studio",
        "site": "Google AI Studio",
        "url": "https://aistudio.google.com/"
      }
    ]
  },
  "gpt-5-4-release": {
    "body": [
      "OpenAIは2026年3月5日、GPT-5.4をリリースしました。推論、コーディング、エージェントワークフローを1つのモデルに統合した「ワンモデル」アプローチが特徴です。",
      "GPT-5.3-Codex（2月5日リリース）で達成した業界トップクラスのSWE-Bench Pro・Terminal-Benchスコアを継承しつつ、汎用的な推論タスクでも大幅に性能向上。速度は前世代比25%改善されています。",
      "Codexプラットフォームにはファーストクラスのプラグイン対応、マルチエージェントワークフロー、画像処理の改善、TUIのプロンプトリコール・ファイルウォッチ機能なども追加されました。",
      "なお3月11日付でGPT-5.1モデル（Instant/Thinking/Pro）はChatGPTから廃止されています。GPT-5.4はChatGPT Pro/Team/Enterpriseプランで利用可能です。"
    ],
    "primarySources": [
      {
        "title": "Introducing GPT-5.4",
        "site": "OpenAI",
        "url": "https://openai.com/index/introducing-gpt-5-4/"
      }
    ]
  },
  "windsurf-pricing-overhaul": {
    "body": [
      "Windsurf（旧Codeium）は2026年3月19日、料金体系を全面的に改定しました。従来のクレジットベースのシステムを廃止し、日次・週次で自動更新されるクォータ制に移行します。",
      "新プランはFree、Pro（$20/月）、Teams、Max（$200/月）の4段階。従来のProは$15/月だったため$5の値上げとなり、Cursorの$20/月と同額になりました。これにより、Windsurfの最大の競争優位だった価格差が消滅しています。",
      "クォータ制では、月間プールではなく日次・週次のレートリミットとして使用量が管理されます。既存の有料ユーザーは現行価格が継続適用され、新体系を試すための無料期間も設けられています。",
      "ユーザーコミュニティからは料金改定に対する批判の声も上がっています。Cursor傘下に入ったことで独自の差別化が難しくなる中、今後の機能面での差別化に注目が集まります。全ツールの料金を横並びで見るには[料金プラン横断比較](?a=pricing-comparison-all-tools-2026-march)を参照。"
    ],
    "primarySources": [
      {
        "title": "Windsurf Pricing",
        "site": "Windsurf",
        "url": "https://windsurf.com/pricing"
      }
    ]
  },
  "gemini-cli": {
    "body": [
      "**Gemini CLI** は Google が開発する **Apache 2.0 のオープンソース AI コーディングエージェント**。**Gemini 3 / 3.5 Flash** を裏側に Google Search grounding と MCP 接続を組み合わせ、Apache 2.0 ライセンスで GitHub 公開されている（star 数は10万級）。2026年6月時点での網羅評価。",
      "## インストール / 起動",
      "**正しいインストールコマンド（npm 経由）**:",
      "```bash",
      "npm install -g @google/gemini-cli           # 安定版",
      "npm install -g @google/gemini-cli@preview   # プレビュー版（週次）",
      "npm install -g @google/gemini-cli@nightly   # ナイトリー（日次）",
      "```",
      "**前提**: Node.js **20+**。",
      "**起動**:",
      "```bash",
      "gemini                            # 対話セッション",
      "gemini -p \"<指示>\"                # 一発実行 / パイプ",
      "gemini --sandbox                  # Docker / Podman でサンドボックス実行",
      "```",
      "**認証**: 初回起動時に Google アカウントでログインを求められる。Gemini API キー（AI Studio）または Vertex AI 認証情報も使用可。",
      "## モデルと無料枠",
      "**Gemini 3.5 Flash（5/19 GA、I/O 2026 で発表）**:",
      "- Terminal-Bench 2.1 で 76.2%、GDPval-AA 1656 Elo、MCP Atlas 83.6%",
      "- Flash クラスの速度（**他社フロンティアの4倍速**）で 3.1 Pro を超える性能",
      "- 出力レイテンシと知能のバランスでフロンティア級",
      "**Gemini 3.5 Pro**: 翌月リリース予定（テスト中）",
      "**無料枠**: Flash モデルは 1日1,000リクエストまで無料。Pro モデルは **2026年3月25日**以降は有料サブスクリプション限定（Google AI Pro $20/月、AI Ultra $100/月）。",
      "## 主要機能",
      "### 組み込みツール",
      "- ファイル read / write / edit",
      "- シェル実行",
      "- **Google Search grounding**（検索結果を根拠にした回答）",
      "- Web fetch",
      "- **MCP 接続**（任意の Model Context Protocol サーバを追加可能、DB / 内部 API / デザインシステム等）",
      "### サンドボックスモード",
      "**Docker / Podman でコンテナ隔離実行**。すべてのファイル変更とシェルコマンドはユーザーの明示的承認を要求。Linux / macOS / Windows 対応。",
      "### Plan Mode（v0.35.0+）",
      "変更実行前に計画を提示し、ユーザー承認後に実装。Anthropic Plan Mode、Cursor の Composer プレビューに相当。",
      "### サブエージェントアーキテクチャ",
      "ローカル実行、ツール分離、動的フィルタリング機能を備え、長時間タスクを段階的に分解実行。",
      "### Antigravity 2.0 連携（5/19 I/O 2026）",
      "Google の新エージェント基盤 **Antigravity 2.0** と Gemini CLI が統合。Antigravity 上で Managed Agents として動作させたり、Google AI Studio から呼び出したりが可能。OpenAI Workspace Agents / Anthropic Claude Managed Agents に相当する Google 側の答え。",
      "### Gemini Spark 連携（5/19 発表、ベータ）",
      "Gemini 3.5 を基盤としたパーソナルエージェント Spark との接続。AI Ultra 加入者向けにベータ提供。",
      "## 評価",
      "**強み**: Apache 2.0 で完全 OSS、Google エコシステム（Vertex AI、Firebase、Cloud Run、Google Workspace、Google Search grounding）とのネイティブ統合、Flash クラスの低レイテンシ、無料枠の存在。Antigravity 2.0 と Gemini Spark の登場で「単なる CLI」から「Google エージェント基盤への入口」へと位置付けが変化。",
      "**注意点**: エージェント機能の成熟度では Claude Code（agent view + Dynamic Workflows）や Cursor（Agents Window）にまだ及ばない場面がある。**プライバシー設定が CLI 内に存在しない**点は企業利用で課題（GDPR 対応に関するコミュニティ懸念が GitHub Issue #1489 等で続いている）。Vertex AI 経由なら統制可能。",
      "**関連記事**: [Google I/O 2026 まとめ](?a=google-io-2026-gemini-3-5-flash-antigravity-spark-2026)、[Gemini CLI v0.35.0 詳細](?a=gemini-cli-v035)、[CLI 横断比較](?a=cli-tools-comparison-2026-march)、[セキュリティ設定比較](?a=ai-tool-security-settings-comparison-2026)。"
    ],
    "primarySources": [
      {
        "title": "Gemini CLI installation, execution, and releases",
        "site": "Gemini CLI Docs",
        "url": "https://geminicli.com/docs/get-started/installation/"
      },
      {
        "title": "google-gemini/gemini-cli",
        "site": "GitHub",
        "url": "https://github.com/google-gemini/gemini-cli"
      },
      {
        "title": "Gemini CLI | Gemini for Google Cloud",
        "site": "Google Cloud Docs",
        "url": "https://docs.cloud.google.com/gemini/docs/codeassist/gemini-cli"
      }
    ]
  },
  "openai-codex-agent": {
    "body": [
      "**OpenAI Codex** は **クラウド版（ChatGPT 経由）と CLI 版（Codex CLI）** の2形態で提供される OpenAI のコーディングエージェント。2026年6月時点で **4M+ アクティブユーザー、基盤モデルは GPT-5.5**（4/23 リリース）。本レビューは2026年6月時点の網羅評価。",
      "## インストール / 起動（Codex CLI）",
      "**インストール（複数経路）**:",
      "```bash",
      "# macOS / Linux（推奨）",
      "curl -fsSL https://chatgpt.com/codex/install.sh | sh",
      "",
      "# Windows PowerShell",
      "powershell -ExecutionPolicy ByPass -c \"irm https://chatgpt.com/codex/install.ps1 | iex\"",
      "",
      "# npm 経由（Node.js 22+ 必須）",
      "npm install -g @openai/codex",
      "```",
      "**起動コマンド**:",
      "```bash",
      "codex                      # 対話セッション開始",
      "codex \"<指示>\"             # ワンショット",
      "codex --model gpt-5.5      # モデル指定",
      "codex --headless           # ヘッドレスモード（CI 用）",
      "```",
      "**認証**: 初回起動時に ChatGPT アカウント / OpenAI API キーでサインイン。",
      "## 中核機能",
      "### 基盤モデル: GPT-5.5（4/23 リリース）",
      "**GPT-5.5** が標準モデル。Artificial Analysis Coding Index で「**競合フロンティアモデルの半額で SOTA**」を達成。事実精度 +23%、事実誤認 -3%。**5/5 にデフォルトモデルが GPT-5.5 Instant に切り替わり**、ChatGPT 全プランで体験が刷新。",
      "**Daybreak / GPT-5.5-Cyber**（5/7、Trusted Access for Cyber プログラム経由）への対応も可能。",
      "### クラウド並列実行が最大の武器",
      "複数のタスクを同時に Codex に投げると、それぞれが**独立したクラウドサンドボックス**で並列実行される。「機能 A の実装」と「機能 B のテスト作成」を同時に依頼し、それぞれ別の **Pull Request として返ってくる**ワークフロー。「バグ修正10件を朝一でまとめて投入、昼までに全 PR が揃う」運用が可能。",
      "### Codex CLI（ローカル実行）",
      "クラウド版とは別に **ローカルマシンで動作する CLI 版**もある。`codex` コマンドで対話セッション、`-p` フラグでパイプ・スクリプト利用、`--sandbox` でサンドボックス実行。**Claude Code や Cursor CLI と直接競合する位置付け**。",
      "### Codex Security（3月リリース、5/11 Daybreak で拡張）",
      "コードベース特有の**脅威モデルを構築**し、現実的な攻撃経路を検査、隔離環境で問題を検証、レビュー用のパッチを提案。**Daybreak**（5/11）でさらに脆弱性検出・パッチ検証ツールとして再ポジショニング。3層構造（GPT-5.5 標準 / Trusted Access 検証 / GPT-5.5-Cyber 許容版）。",
      "### Workspace Agents との連動（4/22）",
      "OpenAI Workspace Agents が **Codex で動作する**ため、Codex CLI / クラウド版で書いたエージェントを Slack / Salesforce / Notion 等の SaaS 上から呼び出せる。",
      "### MCP / GitHub 統合 / 関数呼び出し",
      "MCP プロトコルでの外部接続、GitHub PR・Issue 連携、Structured Outputs、リアルタイム音声入力にも対応。",
      "## 料金プラン",
      "| プラン | 月額 | 内容 |",
      "| --- | --- | --- |",
      "| ChatGPT Plus | $20 | Codex 制限付き利用 |",
      "| ChatGPT Pro | $200 | Codex フル利用、並列実行枠最大 |",
      "| ChatGPT Business | カスタム | 組織管理 |",
      "| ChatGPT Enterprise | カスタム | SOC 2、データ越境制御 |",
      "| Codex CLI（API 従量） | — | GPT-5.5 トークン単価ベース |",
      "## 評価",
      "**強み**: クラウド並列実行モデルは Claude Code / Cursor の「ローカル並列」アプローチと差別化。**Pull Request ベースの非同期ワークフロー**に強く、チーム開発での「並列投入 → レビュー → マージ」が自然。**4M+ アクティブユーザー**で実績は十分。**GPT-5.5 の「半額で SOTA」**コスパが ChatGPT Pro の高額さを部分的に正当化。",
      "**注意点**: ChatGPT Pro $200/月のハードルは Claude Code Pro $20/月、Cursor Pro $20/月と比べて**個人開発者には高い**。クラウド実行のため、機微データを扱う場合は**Business / Enterprise プラン + データ越境設定**が必要。Codex CLI（ローカル版）の機能成熟度は Claude Code に比べてまだ追いついていない部分がある。",
      "**Claude Code との使い分け**: Codex はクラウド × PR ベースの非同期、Claude Code はローカル × IDE/CLI 中心の対話的編集 + agent view でローカル並列。両者を[併用するマルチエージェント構成](?a=claude-code-codex-multi-agent-2026)が実用化されている。",
      "**関連記事**: [GPT-5.5 リリース](?a=openai-gpt-5-5-release-agentic-coding-2026)、[GPT-5.5 Instant デフォルト切替](?a=openai-gpt-5-5-instant-default-chatgpt-2026)、[Workspace Agents](?a=openai-workspace-agents-codex-enterprise-2026)、[Daybreak / Cyber](?a=openai-cyber-trusted-contact-voice-may7-2026)、[Codex プラグイン公開](?a=openai-codex-plugin-cc-claude-code-2026)、[CLI 横断比較](?a=cli-tools-comparison-2026-march)。"
    ],
    "primarySources": [
      {
        "title": "Codex CLI",
        "site": "OpenAI Developers",
        "url": "https://developers.openai.com/codex/cli"
      },
      {
        "title": "Codex CLI Reference",
        "site": "OpenAI Developers",
        "url": "https://developers.openai.com/codex/cli/reference"
      },
      {
        "title": "openai/codex",
        "site": "GitHub",
        "url": "https://github.com/openai/codex"
      },
      {
        "title": "Introducing GPT-5.5",
        "site": "OpenAI",
        "url": "https://openai.com/index/introducing-gpt-5-5/"
      }
    ]
  },
  "cursor-windsurf-merge": {
    "body": [
      "Anysphere社（Cursor開発元）は2026年3月、Codeium社が開発するAIエディタ「Windsurf」の買収を完了したと発表しました。買収額は非公開ですが、業界では数億ドル規模と推定されています。",
      "この買収により、CursorはWindsurfの独自技術「Cascade」フローを統合する計画です。Cascadeはタスクを段階的に分解して実行する技術で、複雑な変更を安全に進められる点が評価されていました。",
      "一方で、この統合によりAIエディタ市場の選択肢が減少することへの懸念も出ています。Windsurf単体の提供は当面継続されますが、長期的にはCursorへの一本化が予想されます。OSS陣営のZed AI、Void、PearAIへの注目が高まる可能性もあります。"
    ],
    "primarySources": [
      {
        "title": "Anysphere acquires Windsurf (Codeium)",
        "site": "The Verge",
        "url": "https://www.theverge.com/news/627633/anysphere-cursor-acquires-windsurf-codeium"
      }
    ]
  },
  "claude-design": {
    "body": [
      "**Claude Design** は **Anthropic Labs** が2026年4月17日に公開したビジュアル制作ツール。会話を通じてデザイン・プロトタイプ・スライド・1ページャ・マーケティング資産といった「見せるためのアウトプット」を作る AI ネイティブなプロダクトで、基盤モデルは **Claude Opus 4.7 / 4.8**。Pro / Max / Team / Enterprise の購読者向けにリサーチプレビューとして提供される。",
      "## 動作の流れ",
      "ユーザーが必要なものを文章で説明すると、Claude が最初のバージョンを生成する。以降は会話、インラインコメント、直接編集、Claude が生成する**カスタムスライダー**（明度や余白といった可変パラメータをモデルが自動で抽出するインターフェース）で反復する。固定の UI ではなく、対象オブジェクトに合わせた編集 UI をモデルが都度組み立てる構造になっている。",
      "## 差別化: コードベースからデザインシステムを自動学習",
      "最大の差別化要素は、**プロジェクト初回にコードベースと既存のデザインファイルを読み込み、チーム固有のデザインシステム（色・タイポグラフィ・コンポーネント）を自動構築**する点だ。以降のプロジェクトでは、特に指示しなくてもブランドガイドに沿った成果物が出力される。Anthropic は「製品の見た目を AI のデフォルトに揃えるのではなく、**組織のスタイルに揃える**」点を強調する。",
      "## エクスポートと Claude Code へのハンドオフ",
      "成果物は **PDF / 共有 URL / PPTX / Canva** に書き出せる。デザインが本番実装フェーズに進むと、Claude が**ハンドオフバンドル**を生成し、それを **Claude Code に渡すことで実装コードに変換**できる。**探索 → プロトタイプ → 本番コード**を単一のエコシステム内で完結させる設計だ。Claude Opus 4.8（5/28）と Dynamic Workflows の登場で、ハンドオフ後の実装プロセスがさらに自律化された。",
      "## 料金とプラン",
      "Pro（月額 $20）/ Max（月額 $100 または $200）/ Team / Enterprise の購読者は追加料金なしでリサーチプレビューを利用できる。ChatGPT Pro（$200/月）や Figma（Professional $15/seat、Organization $45/seat）と直接競合する位置付け。",
      "## 評価",
      "AI ネイティブのビジュアル制作という新カテゴリで、**「コードベースを起点に成果物を生成し、Claude Code に戻す」双方向ループ**は Figma にはない強み。会話型 UI は学習コストが低く、デザイナー以外（PM・営業・経営層）もスライドや1ページャを実用品質で量産できる。",
      "**注意点**: リサーチプレビュー段階のため、Figma の成熟した協同編集や Component Library の互換性は限定的。大規模デザインチームの主力ツールとしての置換にはまだ時間がかかる。一方、**個人〜中小チーム規模**や、Claude Code との接続を重視する開発組織には強く推奨できる。",
      "**関連情報**: ニュース記事の [Claude Design 公開](?a=anthropic-claude-design-labs-figma-challenge-2026) も参照。"
    ],
    "primarySources": [
      {
        "title": "Introducing Claude Design by Anthropic Labs",
        "site": "Anthropic",
        "url": "https://www.anthropic.com/news/claude-design-anthropic-labs"
      }
    ]
  },
  "claude-code": {
    "body": [
      "**Claude Code** は **Anthropic** が提供する AI コーディングエージェントで、ターミナル CLI を中核に **VS Code 拡張・JetBrains プラグイン・デスクトップアプリ・Web（claude.ai/code）・iOS アプリ・Slack・Chrome** と同じエンジンで連動する。本レビューは **2026年6月時点（v2.1.139+、Opus 4.8 対応版）** での全機能網羅版。基盤モデル更新と5月の機能追加で「**1人の開発者が並列にエージェントを束ねる**」運用が公式サポートされた。",
      "## インストールコマンド（公式、複数経路）",
      "**ネイティブインストール（推奨、自動更新あり）**:",
      "```bash",
      "# macOS / Linux / WSL",
      "curl -fsSL https://claude.ai/install.sh | bash",
      "",
      "# Windows PowerShell",
      "irm https://claude.ai/install.ps1 | iex",
      "",
      "# Windows CMD",
      "curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd",
      "```",
      "**パッケージマネージャ**:",
      "```bash",
      "brew install --cask claude-code           # 安定版（1週遅れ）",
      "brew install --cask claude-code@latest    # 最新版",
      "winget install Anthropic.ClaudeCode       # Windows",
      "# Linux: apt / dnf / apk にも対応（Debian, Fedora, RHEL, Alpine）",
      "```",
      "**起動コマンド**: プロジェクトディレクトリで `cd your-project && claude` で対話セッション開始。初回はブラウザログインを求められる。",
      "## 各サーフェスへのインストール",
      "- **VS Code**: マーケットプレイスで「Claude Code」を検索 → 拡張インストール → `Cmd+Shift+P` → \"Claude Code: Open in New Tab\"。インラインの diff 表示、@ メンション、計画レビュー、会話履歴が IDE 内で完結",
      "- **JetBrains**（IntelliJ / PyCharm / WebStorm 等）: JetBrains Marketplace から「Claude Code」プラグインをインストールして IDE 再起動",
      "- **デスクトップアプリ**: macOS / Windows（x64 / ARM64）の DMG / Setup を [claude.ai/api/desktop](https://claude.ai/api/desktop/) から入手。並列セッション、ビジュアル diff、スケジュール、クラウドセッション",
      "- **Web**: [claude.ai/code](https://claude.ai/code) にアクセスするだけ。ローカル環境なしで長時間タスクを起動",
      "- **iOS アプリ**: App Store「Claude by Anthropic」",
      "## CLI 主要コマンド・フラグ",
      "| コマンド / フラグ | 機能 |",
      "| --- | --- |",
      "| `claude` | 対話セッション開始 |",
      "| `claude \"<指示>\"` | 一発指示モード |",
      "| `claude -p \"<prompt>\"` | パイプ・スクリプト用の非対話モード（CI、cron で活用）|",
      "| `claude agents` | **agent view を全画面で開く**（マルチセッション統合ダッシュボード）|",
      "| `claude --bg [task]` | バックグラウンドセッション起動（ターミナルを閉じても継続）|",
      "| `claude --teleport` | Web / iOS で起動したセッションをローカルターミナルに引き継ぎ |",
      "| `claude --headless` | UI なしモード |",
      "| `/bg` | 対話セッション内からバックグラウンドへ送る |",
      "| `/desktop` | ターミナルセッションをデスクトップアプリに引き継ぎ |",
      "| `/schedule` | Routines（クラウド定時実行）を作成 |",
      "| `/loop` | 同じプロンプトをセッション内で繰り返し実行 |",
      "| `/model` | 使用モデル切替（Opus 4.8 / Sonnet 4.6 / Haiku 4.5 等）|",
      "## 中核機能の全体像",
      "### モデル",
      "標準は **Claude Opus 4.8**（5/28 GA、SWE-bench Verified 88.6%、SWE-bench Pro 69.2%、USAMO 2026 96.7%、GraphWalks F1（1M ctx）68.1%）。Sonnet 4.6 / Haiku 4.5 / Mythos Preview（Project Glasswing 限定）への切替も可能。",
      "### agent view（5/12 研究プレビュー）",
      "`claude agents` で全画面のセッション一覧テーブルとディスパッチ入力を表示。各セッションの状態（**待機中・作業中・完了**）を一覧化し、Enter/→ でアタッチ。コードレビュー中に別タスクを並行で進める運用が可能に。",
      "### Dynamic Workflows（5/28 研究プレビュー）",
      "Opus 4.8 と同時投入の**最大の機能拡張**。Claude 自身がオーケストレーションスクリプトを書き、**1セッション内で最大1,000の並列サブエージェント**を起動し、繰り返し検証しながら作業を進める。**resumable state** で中断・再開も可能。Max / Team / Enterprise（管理者有効化必要）/ API / Bedrock / Vertex / Foundry で提供。",
      "### Routines / Desktop scheduled tasks / `/loop`",
      "3種類の定時実行手段:",
      "- **Routines**: Anthropic 管理インフラで実行。`/schedule` で作成、Web・Desktop からも作成可。**マシンが OFF でも継続**、API 呼び出しや GitHub イベントでトリガー可能",
      "- **Desktop scheduled tasks**: ローカルマシンで実行、ローカルファイル・ツールへ直接アクセス",
      "- **`/loop`**: 同じプロンプトを CLI セッション内で繰り返す（簡易ポーリング）",
      "### サブエージェント / Agent SDK",
      "**Sub-agents**: 複数の Claude Code エージェントをタスクの異なる部分に割り当て、リードエージェントが調整・統合。**Agent SDK** では Claude Code のツール・能力を使って独自のエージェントを構築可能（オーケストレーション、ツールアクセス、権限を完全コントロール）。",
      "### MCP（Model Context Protocol）",
      "外部ツール・データソースとの標準接続規格。Google Drive、Jira、Slack、社内 API などへ繋ぐ。MCP クイックスタートで初回サーバ接続が可能。",
      "### Hooks / Skills / CLAUDE.md / Auto memory",
      "- **Hooks**: シェルコマンドを Claude Code のアクション前後で実行（PostToolUse、Pre-commit など）。`hookSpecificOutput.updatedToolOutput` で全ツールの出力差し替えも可能",
      "- **Skills**: 再利用可能なプロンプトテンプレート（`/review-pr`、`/deploy-staging` など）。チーム共有も可",
      "- **CLAUDE.md**: プロジェクトルートに置く markdown ファイル。すべてのセッション開始時に Claude が読む。コーディング規約・アーキテクチャ判断・優先ライブラリ・レビューチェックリスト等を記述",
      "- **Auto memory**: ビルドコマンド・デバッグ知見など、Claude が作業中に学んだことを自動保存（手動記述不要）",
      "### Remote Control / Channels / Dispatch / Slack 統合",
      "- **Remote Control**: 席を離れて電話やブラウザから作業継続",
      "- **Channels**: Telegram / Discord / iMessage / 独自 Webhook からセッションにイベント投入",
      "- **Dispatch**: スマホからタスクをメッセージ送信、デスクトップアプリでセッション化",
      "- **Slack**: チャネルで `@Claude` メンションでバグ報告 → 返ってくるのは PR",
      "### GitHub Actions / GitLab CI/CD / GitHub Code Review",
      "PR レビュー・Issue トリアージの CI 自動化。**GitHub Code Review** で全 PR に自動レビュー付与。",
      "### Chrome 連携",
      "ライブ Web アプリケーションのデバッグを Claude 経由で実行。",
      "## 料金体系（Fast Mode が3倍安く）",
      "| プラン | 月額 | Standard | Fast Mode | 主な用途 |",
      "| --- | --- | --- | --- | --- |",
      "| Pro | $20 | 標準枠 | — | 個人開発 |",
      "| Max | $100 / $200 | 拡張枠 | **2.5倍速** | ヘビーユーザー |",
      "| Team | カスタム | 拡張枠 | 対応 | 小〜中規模チーム |",
      "| Enterprise | カスタム | 拡張枠 | 対応 | SOC 2 準拠、SSO 等 |",
      "| API（従量） | — | $5 / $25 per M | **$10 / $50（前世代比3倍安）** | プログラム呼び出し |",
      "## 5月以降の周辺情報",
      "- **5/6 SpaceX Colossus 1 借り上げ**で Claude Code レート上限が**全有料プランで2倍**、Pro/Max のピーク時間帯制限を撤廃",
      "- **5/12 Claude Platform on AWS GA** で AWS Marketplace 経由の課金・Cost Explorer 監視に対応",
      "- **5/12 agent view** + **5/28 Dynamic Workflows** で並列実行が本格化",
      "- **6/3 Claude Partner Network Services Track**（Select / Preferred / Global Premier）で導入支援パートナーの可視化",
      "- **Claude Code SDK** でカスタムエージェント構築",
      "- Web 版 Claude Code を **iOS Claude アプリ**から起動可能（claude --teleport で端末に取り戻し）",
      "## 第三者プロバイダ対応",
      "Terminal CLI と VS Code 拡張は **third-party providers**（Bedrock、Vertex AI、Foundry 等）に対応。**自社の AWS / GCP / Azure 契約経由**で Claude を利用できる。Anthropic API 直接以外の経路でも全機能が使える設計。",
      "## 評価",
      "コンテキスト理解、長時間自律実行、サーフェスの広さ（CLI / IDE / Desktop / Web / Mobile / Slack / CI）が**現行 AI コーディングツールの中で最高水準**。agent view と Dynamic Workflows で「1人 = 1セッション」だった運用が「1人 = 数十セッションのオーケストレーター」に進化した。Fast Mode の値下げと SpaceX Colossus 1 経由のレート上限緩和で、コスト・スループット両面の弱みも緩和。",
      "**注意点**: agent view と Dynamic Workflows はいずれも**研究プレビュー**段階で、本番ワークロードでの利用は規模・コスト・失敗時挙動の確認を経てからが推奨。**自律 PR 作成**を許可する場合は CLAUDE.md と Hooks のガードレールが必須。Channels / Slack 連携時はサードパーティ経由のメッセージインジェクション対策を運用ポリシーで担保すべき。",
      "**関連情報**: 外部連携は [MCP 活用ガイド](?a=mcp-comprehensive-guide-2026)、Git 連携は [AI × Git ワークフロー](?a=git-ai-workflow-2026)、コミュニティ製拡張ツールは [CLI エージェント OSS 特集](?a=cli-agent-community-oss-2026)、Codex CLI との比較は [Codex プラグイン公開](?a=openai-codex-plugin-cc-claude-code-2026)、agent view の詳細は [Anthropic 5/12 発表記事](?a=anthropic-claude-platform-aws-ga-agent-view-2026)、Dynamic Workflows は [Opus 4.8 リリース記事](?a=anthropic-claude-opus-4-8-dynamic-workflows-2026) を参照。"
    ],
    "primarySources": [
      {
        "title": "Claude Code Overview",
        "site": "Anthropic",
        "url": "https://code.claude.com/docs/en/overview"
      },
      {
        "title": "Claude Code Quickstart",
        "site": "Anthropic",
        "url": "https://code.claude.com/docs/en/quickstart"
      },
      {
        "title": "Manage multiple agents with agent view",
        "site": "Claude Code Docs",
        "url": "https://code.claude.com/docs/en/agent-view"
      },
      {
        "title": "Routines",
        "site": "Claude Code Docs",
        "url": "https://code.claude.com/docs/en/routines"
      },
      {
        "title": "Sub-agents",
        "site": "Claude Code Docs",
        "url": "https://code.claude.com/docs/en/sub-agents"
      },
      {
        "title": "Agent SDK Overview",
        "site": "Claude Code Docs",
        "url": "https://code.claude.com/docs/en/agent-sdk/overview"
      },
      {
        "title": "Introducing Claude Opus 4.8",
        "site": "Anthropic",
        "url": "https://www.anthropic.com/news/claude-opus-4-8"
      }
    ]
  },
  "cursor-cli": {
    "body": [
      "**Cursor CLI** は **Anysphere** が提供する Cursor の独立 CLI ツール。**IDE を起動せずにターミナルだけで Composer / Background Agent を使える**ようになり、Claude Code や GitHub Copilot CLI の直接競合に位置付けられた。2026年6月時点での網羅評価。",
      "## インストール / 起動",
      "**インストール**:",
      "```bash",
      "npm install -g @cursor/cli       # 公式 npm パッケージ",
      "cursor auth                      # ブラウザでサインイン",
      "```",
      "**起動コマンド**:",
      "```bash",
      "cursor                            # 対話セッション",
      "cursor --headless \"<指示>\"        # ヘッドレス（CI、cron 用）",
      "cursor --bg [task]                # バックグラウンドエージェント",
      "```",
      "Node.js 20+ 必須。",
      "## 主要機能",
      "### Composer / Agent loop（multi-file）",
      "プロジェクト全体をインデックスし、自然言語の指示から関連ファイルを自動特定して複数ファイル横断の変更を一括生成。Claude Code 同等の自律エージェント動作。",
      "### Background Agent（クラウドサンドボックス）",
      "**Anysphere 管理のクラウド VM 上で動く非同期エージェント**。GitHub Issue や Slack メッセージを起点に作業を進め、**PR ドラフトを返す**まで自律実行。ローカル環境を閉じても継続。",
      "### モデル: Composer 2.5 / Sonic / 主要フロンティア",
      "- **Composer 2.5**: Cursor 独自モデル（Kimi K2.5 ベース + 独自 RL）。CursorBench で Opus 4.6 を上回るスコア",
      "- **Sonic**: 低レイテンシ編集に特化した内製モデル",
      "- **Claude Opus 4.7/4.8、Sonnet 4.6、GPT-5.5、Gemini 3.x** も切替可能",
      "### MCP / Rules / Skills",
      "Claude Code と同様、MCP プロトコルで外部接続、`.cursorrules` でプロジェクト規約共有、Skills でテンプレート再利用。",
      "### Microsoft Teams / Slack / GitHub / PagerDuty 統合",
      "3月の **Cursor Automations** で Slack / GitHub PR / PagerDuty トリガー、5/11 で **Microsoft Teams 統合**（`@Cursor` メンション）。CLI から起動したジョブも統合管理可能。",
      "## 料金プラン",
      "| プラン | 月額 | 主な内容 |",
      "| --- | --- | --- |",
      "| Free | $0 | 制限付き利用 |",
      "| Pro | $20 | 標準 Agent 利用枠 |",
      "| Pro+ | $60 | Pro の5倍 Agent 上限 |",
      "| Ultra | $200 | 最大 Agent 利用枠 |",
      "| Teams Standard | $40/seat/月 | 組織管理、SAML SSO、Privacy Mode |",
      "| Teams Premium | $120/seat/月 | Standard の5倍 Agent 上限 |",
      "| Business / Enterprise | カスタム | 監査ログ、SOC 2 |",
      "**Bugbot 課金**: 2026年5月から seat-based → usage-based に移行、1 PR レビュー平均 **$1.00-$1.50**、effort level（high で時間と料金が増える代わりにバグ発見率向上）も調整可能。",
      "## 評価",
      "**強み**: IDE 統合と CLI が同じ Composer / Background Agent を共有するため、**作業環境を選ばずに同じワークフロー**を回せる。独自モデル（Composer 2.5 / Sonic）により低レイテンシ・低コストでフロンティア性能を実現。Microsoft Teams / Slack 統合でチャットアプリ起点のエージェント運用にも対応。",
      "**注意点**: Claude Code が Anthropic 純正の CLI として Anthropic Console / Bedrock / Vertex / Foundry を経由できるのに対し、Cursor CLI は Anysphere 経由でモデルを利用する形態（クレジット消費型）。**規制業界での運用は Cursor の Privacy Mode + Self-hosted Cloud Agents の組み合わせが必要**。",
      "**関連記事**: [Cursor 3 / Agents Window](?a=cursor-3-agent-first-workspace-2026)、[Composer 2 / Kimi K2.5](?a=cursor-composer-2-kimi-2026)、[Microsoft Teams 統合](?a=cursor-microsoft-teams-integration-2026)、[Cursor Automations](?a=cursor-automations-self-hosted-agents-2026)、[CLI 横断比較](?a=cli-tools-comparison-2026-march)。"
    ],
    "primarySources": [
      {
        "title": "Cursor CLI",
        "site": "Cursor Docs",
        "url": "https://cursor.com/docs/cli"
      },
      {
        "title": "Cursor in Microsoft Teams",
        "site": "Cursor Changelog",
        "url": "https://cursor.com/changelog/microsoft-teams"
      },
      {
        "title": "@cursor/cli on npm",
        "site": "npm",
        "url": "https://www.npmjs.com/package/@cursor/cli"
      }
    ]
  },
  "github-copilot-cli": {
    "body": [
      "**GitHub Copilot CLI** は **GitHub**（**Microsoft** 傘下）が提供する Copilot coding agent のターミナル版。`copilot` コマンドで対話セッション、`/fleet` でサブエージェント並列実行、`/model` でモデル切替が可能な、本格的な CLI コーディングエージェント。2026年6月時点の網羅評価。",
      "## インストール / 起動",
      "**インストール（複数経路）**:",
      "```bash",
      "npm install -g @github/copilot                     # npm 経由（Node.js 22+ 必須）",
      "brew install copilot-cli                            # macOS Homebrew",
      "winget install GitHub.Copilot                       # Windows WinGet",
      "curl -fsSL https://gh.io/copilot-install | bash    # Linux / WSL 等の汎用",
      "gh copilot                                          # GitHub CLI からの初回起動・インストール",
      "```",
      "**起動コマンド**:",
      "```bash",
      "copilot                  # 対話セッション",
      "copilot \"<指示>\"         # ワンショット",
      "gh copilot suggest       # シェルコマンド提案（既存サブコマンド）",
      "gh copilot explain       # コマンド解説（既存サブコマンド）",
      "```",
      "## 中核機能",
      "### 既定モデルと `/model` 切替",
      "**既定モデル: Claude Sonnet 4.5**。`/model` コマンドで切替可能なラインナップ:",
      "- Claude **Opus 4.7 / 4.8**（GA 後 24時間以内に Copilot に展開）",
      "- **GPT-5.5**（OpenAI、4/23 リリース）",
      "- **Project Polaris / MAI-Code-1-Flash**（Microsoft 自社製、Build 2026 で発表、Copilot Pro+/Business/Enterprise に順次展開）",
      "- GPT-5.5-Cyber（Trusted Access for Cyber プログラム経由）",
      "**Copilot CLI v1.0.36 以降**（5/6）では HTTP hook サポート、subcommand picker 改善、複数 Copilot ライセンス時のエラーメッセージ改善も実装。",
      "### `/fleet` — サブエージェント並列実行",
      "**`/fleet` コマンド**で背景に複数サブエージェントを起動し、**GitHub.com やスマートフォンから状態を監視・操作・マージ**できる。Claude Code の agent view、Cursor の Agents Window に相当する Microsoft 側の答え。",
      "### Autopilot mode（VS Code、4/8 パブリックプレビュー）",
      "VS Code 拡張側で「**完全自律エージェント・セッション**」を有効化。エージェントが自らアクションを承認、エラーを自動リトライしてタスク完了まで実行。CLI から起動した `/fleet` セッションも Autopilot 互換。",
      "### MCP サーバー管理（v1.0.21+）",
      "`copilot mcp` サブコマンドで MCP サーバーを **追加・一覧・有効化・無効化**。Anthropic / OpenAI と同じ MCP プロトコル経由で外部ツール接続。",
      "### C++ コード理解（5/6 パブリックプレビュー）",
      "Microsoft C++ Language Server を Copilot CLI に統合。Visual Studio / VS Code と同じ IntelliSense エンジンを使った高精度な C++ 解析。",
      "### GitHub 全体との統合",
      "**Issues / PR / Actions / Codespaces / Secret Scanning / Code Search**と直結。Issue を割り当てるだけで Coding Agent が自律実装、PR まで作成。",
      "## 料金プラン",
      "| プラン | 月額 | 内容 |",
      "| --- | --- | --- |",
      "| Copilot Free | $0 | 基本補完（4月リストラクチャ後の新無償枠） |",
      "| Pro | $10 | 個人開発、Sonnet 4.5 中心 |",
      "| Pro+ | $39 | Opus 4.7/4.8 + GPT-5.5 + Project Polaris 含むフロンティアモデル全部 |",
      "| Business | $19 | 組織管理、SAML SSO |",
      "| Enterprise | $39 | 監査ログ、IP インデムニティ、ファインチューニング |",
      "**注**: 5/28 報道時点で Build 2026（6/2-3）に合わせ **Copilot Starter（無償）/ Pro / Enterprise の3階層**への再編成が予告されていた。実際の新プラン構造は GitHub 公式アナウンスで最終確認すべき。",
      "## 評価",
      "**強み**: GitHub エコシステム（Issues / PR / Actions / Codespaces / Code Search）とのネイティブ統合は他ツール追随不可。**モデル選択の自由度**（Claude / GPT / MAI / Gemini）が増し、ベンダーロックインを避けつつ Copilot を継続利用できる。`/fleet` で並列エージェント運用に対応、Autopilot で完全自律実行も可能。",
      "**注意点**: Anthropic Claude Code（agent view + Dynamic Workflows）や Cursor（Agents Window）と比べると、**マルチセッション UI** の成熟度ではまだ差がある場面も。GitHub 外のプラットフォーム（GitLab / Bitbucket）での利用は限定的。**Project Polaris / MAI-Code-1-Flash** が中核モデル化していくにつれて、フロンティアモデルから Microsoft 自社モデルへの誘導が強まる可能性がある（料金面では有利だが、性能は実利用での検証が必要）。",
      "**関連記事**: [GitHub Copilot Autopilot + MCP CLI](?a=github-copilot-autopilot-mcp-cli-vscode-2026)、[Microsoft Build 2026 まとめ](?a=microsoft-build-2026-mai-7models-solara-majorana-2026)、[Project Polaris 報道](?a=microsoft-build-2026-project-polaris-mai-coding-2026)、[CLI 横断比較](?a=cli-tools-comparison-2026-march)。"
    ],
    "primarySources": [
      {
        "title": "GitHub Copilot",
        "site": "GitHub",
        "url": "https://github.com/features/copilot"
      }
    ]
  },
  "aider": {
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
    ]
  },
  "codebuff": {
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
    ]
  },
  "amazon-q": {
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
    ]
  },
  "cline": {
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
    ]
  },
  "warp-ai": {
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
    ]
  },
  "cursor-editor": {
    "body": [
      "**Cursor** は **Anysphere** 社が開発する AI ネイティブのコードエディタで、**VS Code** のフォークとして構築されている。VS Code の拡張機能やキーバインドをそのまま引き継げる。本レビューは **2026年6月時点（Cursor 3.x、Composer 2.5 対応版）** での網羅評価。",
      "## インストール / 起動",
      "**ダウンロード**: [cursor.com](https://cursor.com/) からインストーラを入手（macOS / Windows / Linux）。",
      "**CLI 起動**: ターミナルで `cursor` 入力でフォルダを Cursor で開く。Cursor 内のターミナルからは `cursor .` で現在のディレクトリを開く。",
      "**コマンドパレット**: `Cmd+Shift+P`（Mac）/ `Ctrl+Shift+P`（Win/Linux）から「Agents Window」「Composer」等の主要機能を呼び出し。",
      "## 主要機能（2026 最新）",
      "### Agents Window（Cursor 3.0 で追加、5/11 Teams 統合 6/3 完成）",
      "**`Cmd+Shift+P` → Agents Window** で開く専用 UI。**複数エージェントを並列実行**でき、ローカル・worktree・クラウド・リモート SSH と環境を横断管理できる。Claude Code の agent view に相当する Cursor 側の答え。",
      "### Background Agent",
      "**クラウドサンドボックス VM** で稼働する非同期エージェント。**GitHub Issue や Slack メッセージを起点に PR ドラフトまで作成**する。ローカルマシンを閉じても継続実行。",
      "### Microsoft Teams 統合（5/11 GA）",
      "Teams チャネルで **`@Cursor` メンション**でクラウドエージェントにタスク委任。スレッド全体を文脈として読み、リポジトリ・モデルを自動選択し、PR を作成して返す。3月の Slack/GitHub/PagerDuty トリガー（Cursor Automations）に続く第2の主要チャットアプリ統合。",
      "### Composer + Tab v2 + Sonic",
      "- **Composer**: 自然言語の指示から関連ファイルを自動特定し、複数ファイル横断の変更を生成",
      "- **Composer 2 / 2.5**: Cursor 独自モデル（Kimi K2.5 ベース + 独自 RL）。CursorBench で Opus 4.6 を上回るスコア",
      "- **Tab v2**: 高速インライン補完",
      "- **Sonic**: 低レイテンシ編集に特化した内製モデル",
      "### Cmd+K インライン編集",
      "選択範囲を指示で書き換え。小さな修正に最適。",
      "### MCP / Skills / Rules",
      "- **MCP**: 外部ツール・データソース接続",
      "- **Skills**: 再利用可能なプロンプトテンプレート",
      "- **Rules**: `.cursorrules` ファイルでプロジェクト固有の規約を渡す（Claude Code の CLAUDE.md に相当）",
      "### Bugbot（5月以降は従量課金）",
      "PR レビュー専用エージェント。**2026年5月から seat-based から usage-based 課金に移行**、1 PR レビュー当たり平均 $1.00-$1.50。effort level（high で時間と料金が増える代わりにバグ発見率向上）も調整可能に。",
      "### Self-hosted Cloud Agents（3月、エンタープライズ向け）",
      "コードと実行環境を自社ネットワーク内に保持したままクラウドエージェントを利用。規制業界向け。",
      "## 料金プラン",
      "| プラン | 月額 | 内容 |",
      "| --- | --- | --- |",
      "| Hobby | 無料 | 補完 + 限定 Composer |",
      "| Pro | $20 | 標準 Agent 利用枠、無制限補完 |",
      "| Pro+ | $60 | Pro より5倍の Agent 上限 |",
      "| Ultra | $200 | 最大 Agent 利用枠、優先サポート |",
      "| Teams Standard | $40/seat/月 | 組織管理、SAML SSO、Privacy Mode |",
      "| Teams Premium | $120/seat/月 | Standard の5倍 Agent 上限 |",
      "| Business / Enterprise | カスタム | 監査、SOC 2、契約条項 |",
      "すべて従量モデルで、各プロンプトが request-equivalent credits を消費。",
      "## 5月以降の動向",
      "- **5/11 Microsoft Teams 統合 GA**（`@Cursor` メンション）",
      "- **5月 Bugbot 課金モデルが usage-based に移行**",
      "- **Windsurf 買収**（3月）後の Cascade 統合は継続中",
      "- **Cursor 3.x** 系列で Agents Window が正式機能化",
      "## 評価",
      "**強み**: IDE と AI エージェントが一体化したエクスペリエンス。VS Code 互換で拡張機能がそのまま動く。Agents Window でマルチセッション運用が UI レベルで自然に。Composer 2.5 + Sonic の独自モデルでコストパフォーマンス・低レイテンシを両立。",
      "**注意点**: Claude Code が CLI 中心で多サーフェス展開なのに対し、Cursor は IDE 中心。**ターミナル単体での運用には向かない**。Bugbot の usage-based 移行で PR 数の多いプロジェクトは月額予算が読みにくくなった。Pro+ / Ultra プランの追加で価格帯が広がり、適切なプラン選択が難しくなった面もある。",
      "**関連記事**: [Cursor Composer 2](?a=cursor-composer-2-kimi-2026)、[Cursor 3 / Agents Window](?a=cursor-3-agent-first-workspace-2026)、[Microsoft Teams 統合](?a=cursor-microsoft-teams-integration-2026)、[Windsurf 買収](?a=cursor-windsurf-merge)、[AI エディタ横断比較](?a=editor-comparison-2026-march)。"
    ],
    "primarySources": [
      {
        "title": "Cursor — Build Software with AI Agents",
        "site": "Cursor",
        "url": "https://cursor.com/product"
      },
      {
        "title": "Cursor Docs — Agent, Rules, MCP, Skills & CLI",
        "site": "Cursor",
        "url": "https://cursor.com/docs"
      },
      {
        "title": "Models & Pricing",
        "site": "Cursor",
        "url": "https://cursor.com/docs/models-and-pricing"
      },
      {
        "title": "Cursor in Microsoft Teams",
        "site": "Cursor Changelog",
        "url": "https://cursor.com/changelog/microsoft-teams"
      }
    ]
  },
  "windsurf": {
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
    ]
  },
  "zed-ai": {
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
    ]
  },
  "vscode": {
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
    ]
  },
  "void": {
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
    ]
  },
  "pearai": {
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
    ]
  },
  "trae": {
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
    ]
  },
  "frontier-triad-power-map-2026": {
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
  "apple-google-siri-gemini-2026": {
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
    ]
  },
  "claude-code-autofix-cloud": {
    "body": [
      "2026年3月27日、Claude Code のプロダクトマネージャー Noah Zweben 氏が X（旧 Twitter）で「Claude Code auto-fix — in the cloud」を発表した、と複数メディアが伝えています。要旨は、Web / Mobile の Claude Code セッションがプルリクエストを自動でフォローし、CI の失敗の解析・修正の push、レビューコメントへの対応などを、ローカル PC が閉じた状態でもクラウド側で続行できるようにする、というものです。一次ソースは当該投稿・公式の追随ドキュメントを参照してください。",
      "開発体験としては「PR を出したあと CI が落ちるたびに PC を開き直してログを読む」という往復を減らし、離席中に修正と再実行のサイクルを任せる方向性です。権限モードの Auto mode（`auto`）は手元セッションのツール承認挙動の話であり、名称が似ていても問題ドメインが異なります。",
      "GitHub Actions 連携では `anthropics/claude-code-action` に ci-failure ワークフロー例が追加される予定とされており、CI 失敗時に自動的に Claude Code がエラーログを読んで修正 commit を push する流れが想定されています。企業ユーザーには「開発者が離席中も PR が自律的に前進する」体験を提供する狙いがあります。",
      "現時点ではプレビュー段階であり、利用条件・料金・対応リポジトリ管理ツールの詳細は公式ドキュメントを確認してください。Auto mode（CLI 権限制御）との混同を避けるため、Anthropic は今後ドキュメントで名称を整理する方針です。"
    ],
    "primarySources": [
      {
        "title": "Claude Code — Documentation",
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
  "claude-1m-context-ga-2026": {
    "body": [
      "Anthropic は2026年3月13日、Claude Opus 4.6 と Claude Sonnet 4.6 の 100 万トークンコンテキストウィンドウを正式 GA（一般提供）しました。これまでは 200K トークン超の利用にプレミアム料金が設定されていましたが、今回の変更でその追加課金が撤廃されました。",
      "料金体系は Opus 4.6 が入力 $5・出力 $25、Sonnet 4.6 が入力 $3・出力 $15（いずれも 100 万トークン当たり）で、900K トークンの長大なリクエストも 9K トークンの通常リクエストと同一レートで課金されます。",
      "100 万トークンは約 75 万語、長編小説 10 冊分に相当します。長大なコードリポジトリ全体を一括解析したり、大量のドキュメントを横断検索するユースケースが実用的なコストで実現できるようになります。長文コンテキスト検索ベンチマーク MRCR v2 では Opus 4.6 が 1M トークン時点で 78.3% を記録し、同コンテキスト長のフロンティアモデル最高スコアとなっています。",
      "対応プラットフォームは Claude Platform（claude.com）・Amazon Bedrock・Google Cloud Vertex AI・Microsoft Azure Foundry。200K 超のリクエストも特別なヘッダ不要で自動的に対応します。Claude Code 利用者にとっては大規模リポジトリのワンショット解析が現実的な選択肢となりました。"
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
  "claude-memory-import-2026": {
    "body": [
      "Anthropic は2026年3月2日前後、Claude のメモリインポートツールを公開しました。`claude.com/import-memory` にアクセスし、提供されるプロンプトを現在利用中の AI アシスタント（ChatGPT・Gemini・Copilot・Grok など）に貼り付けると、そのアシスタントが保存しているユーザーのメモリをテキスト形式で出力します。それを Claude のメモリ設定に貼り付けるだけで移行が完了します。API トークンも、ファイルエクスポートも不要な二ステップの設計です。",
      "メモリ機能本体は Max プランから先行公開され、Pro プランへ順次展開中です。インポートしたメモリは日次合成サイクルで処理されるため、反映まで最大 24 時間かかる場合があります。機能は実験的ステータスです。",
      "競合の動きも速く、Google は2026年3月27日に Gemini 側からも ChatGPT・Claude のチャット履歴とメモリをインポートするツールを公開しました。AI プロバイダー間のデータポータビリティ競争が本格化した形です。Claude 側では ChatGPT から 700,000 ユーザーが移行したとの報告も（中国メディア等の報道ベース、未確認）あり、移行ツールが契約変更の心理的ハードルを下げる効果を持ち始めています。",
      "プライバシー面では、インポートするメモリの内容をユーザー自身が目視確認したうえで貼り付ける設計のため、意図しない情報が Claude に渡るリスクは低いと言えます。ただし、インポート先の Claude メモリはサブスクリプション終了時にどう扱われるか、データ保持ポリシーと合わせて確認することを推奨します。"
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
  "gemini-31-flash-lite-2026": {
    "body": [
      "Google DeepMind は2026年3月4日、Demis Hassabis CEO のアナウンスで Gemini 3.1 Flash-Lite をプレビューとして公開しました。Google AI Studio と Vertex AI の Gemini API 経由で開発者が利用できます。",
      "最大の特徴はコストと速度です。入力 $0.25・出力 $1.50（100 万トークン当たり）という価格は Gemini 3.1 Pro の 1/8 以下。Artificial Analysis ベンチマークでは前世代の Gemini 2.5 Flash 比で Time-to-First-Token が 2.5 倍高速化、出力トークン生成速度が 45% 向上しています。品質面でも同ティアモデルを上回る推論・マルチモーダル理解を達成し、Arena.ai リーダーボードで Elo 1432 を記録しています。",
      "コンテキストウィンドウは最大 100 万トークンで、テキスト・画像・音声・動画に対応します。高ボリューム・低レイテンシが求められる本番 API 組み込み、大量のドキュメント一括処理、リアルタイムチャット補助といったユースケースに最適化されています。",
      "Gemini 3 シリーズは Pro（高難度タスク）・Flash（バランス）・Flash-Lite（大量処理・低コスト）の三層構造が明確になり、用途に応じたモデル選択が容易になりました。Claude Code や Cursor の外部モデル枠でも Flash-Lite が選択肢に加わる可能性があります。"
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
  "arc-agi-3-launch-2026": {
    "body": [
      "ARC Prize Foundation は2026年3月25日、ARC-AGI-3 を正式公開しました。François Chollet が2019年に提唱した ARC（Abstraction and Reasoning Corpus）の三世代目にあたり、前世代の静的グリッドパズルとは根本的に異なる設計です。",
      "ARC-AGI-3 の評価環境はビデオゲーム風のインタラクティブ環境150種・1,000レベル超で構成されます。エージェントはゲームの説明・ルール・勝利条件を一切与えられず、視覚的な状態を観察しながら行動を取り、結果を見て「何をすべきか」を自分で発見しなければなりません。記憶・暗記ではなくリアルタイムの適応推論が要求される設計です。",
      "プレビュー評価の結果、フロンティアAIの平均スコアは0.26%にとどまりました。人間のベースラインは100%（目標スコア）です。プレビュー段階での最高スコアはTufa Labs（StochasticGoose名義）が記録した12.58%で、残りの応募は軒並み1%台以下でした。GPT-5.4・Claude Opus 4.6・Gemini 3.1 Pro も同水準です。",
      "ARC Prize 2026 は合計賞金200万ドル超の三トラック制で運営されます。ARC-AGI-3 トラックのほか、従来型の ARC-AGI-2 トラックも並行。マイルストーン締切は6月30日・9月30日で、最終締切は2026年11月2日です。",
      "研究者コミュニティでは「GPT系もClaude系も同じく1%以下というのは、現行のLLMアーキテクチャが適応推論ではなく記憶・パターンマッチングに依拠していることを再確認する結果」との見方が多く出ています。ARC-AGI シリーズは AIの知能測定の方向性を定義してきた存在であり、ARC-AGI-3 の登場によりエージェント評価の基準軸が変わる可能性があります。"
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
  "anthropic-pentagon-injunction-2026": {
    "body": [
      "米連邦地裁（サンフランシスコ）の Rita Lin 判事は2026年3月26日、Anthropic の申請を認める暫定差止命令を発しました。国防総省（DoD）が Anthropic を「サプライチェーンリスク」に指定した措置を、命令が有効な限り執行できなくなります。判事は「公の場での批判に対する政府の報復という典型的な修正第一条違反」と明記しました。",
      "経緯は2025年7月まで遡ります。Anthropic はペンタゴンと2億ドルの契約を締結し、DoD の GenAI.mil プラットフォームへの Claude 統合を交渉しました。しかし DoD が「完全自律兵器への使用」と「国内大規模監視」を契約の前提として要求したことで交渉が決裂。Anthropic はこれらが自社の利用ポリシーに違反するとして拒否しました。",
      "これを受けて Pete Hegseth 国防長官は2026年2月末に Anthropic を「サプライチェーンリスク」に指定、続いてトランプ大統領が Truth Social で連邦機関に Anthropic 製品の即時利用停止と6ヵ月の段階廃止を命じました。DoD は3月初旬に Anthropic へ正式通知を送達しました。",
      "3月24日の審問では Lin 判事が DoD 側の弁護士に「その基準はかなり低いようだが」と問い詰め、「Anthropic を骨抜きにしようとしているように見える」と発言しました。判事はその2日後に差止命令を発し、Anthropic の修正第一条に基づく主張を認容しました。",
      "業界への影響は広範です。OpenAI・Google DeepMind の従業員30名超が Anthropic を支持する声明を共同提出し、AI 企業の政府との利用条件交渉がどこまで企業側の倫理ポリシーで保護されるかという先例が形成されつつあります。Anthropic は現段階で企業向けシェアを拡大しており、新規 AI 調達での Claude 採用率が約70%との分析もあります。"
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
  "openai-acquires-astral-2026": {
    "body": [
      "OpenAI は2026年3月19日、Python 開発ツール会社 Astral の買収を発表しました。Astral は Charlie Marsh 氏が創業し、uv（パッケージ管理・実行環境）・Ruff（リンター・フォーマッター）・ty（型チェッカー）の三ツールで Python エコシステムに深く根を張った企業です。",
      "規模感が際立ちます。uv は2024年2月のリリースからわずか2年で月間1億2,600万ダウンロードを達成し、pip・venv の事実上の後継として急速に普及しました。Ruff はその高速さ（Rust 実装）から大企業・OSS プロジェクトを中心に採用が広がり、フォーマッターと組み合わせて Black・isort・flake8 を一本化するケースが増えています。",
      "買収の目的は Codex との統合です。Codex はユーザーが年初比3倍、利用量が5倍と急成長しており、週間アクティブユーザーは200万を超えます。uv による依存関係の高速解決・Ruff によるコード品質チェック・ty による型整合性確認を Codex のエージェントループに組み込むことで、AI が Python リポジトリをエンドツーエンドで扱える環境を目指します。",
      "オープンソース継続について OpenAI は「既存のコミュニティとともに OSS として開発を続ける」と明言しています。ただし独立した Astral 社としての意思決定ラインがなくなることへの懸念も開発者コミュニティから出ており、Simon Willison 氏など著名エンジニアからは「中立性の維持」を求める声が上がっています。",
      "開発者ツール市場においては、OpenAI が Codex・uv・Ruff・ty を束ねることで、コーディングエージェントから環境構築・品質管理まで一気通貫のパイプラインを提供する体制に近づきます。Anthropic の Claude Code・Google の Gemini CLI など他社のコーディングエージェントとの差別化要素になり得ます。"
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
  "gpt-54-mini-nano-2026": {
    "body": [
      "OpenAI は2026年3月17日、GPT-5.4 mini と GPT-5.4 nano の2モデルを同時リリースしました。いずれも「サブエージェント時代のために設計した」と説明しており、大型の GPT-5.4 では過剰なユースケースや並列実行の部分的担当ノードとしての活用を想定しています。",
      "**GPT-5.4 mini** はコーディング・推論・マルチモーダル理解・ツール利用の全領域で GPT-5 mini を上回り、同時に GPT-5.4 本体に迫る評価スコアを示します。SWE-Bench Pro・OSWorld-Verified でも接近した性能を発揮し、速度は2倍以上高速化しています。ChatGPT の無料ティアに開放されたほか、Codex・API でも利用可能です。",
      "**GPT-5.4 nano** は価格と速度が最優先のモデルで、API 専用提供です。入力$0.20・出力$0.80（100万トークン当たり）という価格は GPT-5.4（$2.50/$12.50）の1/10以下。分類・データ抽出・ランキング・シンプルなサブタスク処理に推奨されています。マルチエージェントアーキテクチャでは、Orchestrator が GPT-5.4 を担い、nano が末端タスクの高速並列処理を担う二層構成が想定されます。",
      "Codex への追加統合も同時発表。GPT-5.4 mini が Codex の標準モデルとして組み込まれ、Codex プラグイン機能・マルチエージェントワークフローが正式に提供されます。Codex の週間アクティブユーザー200万超という背景のもと、小型モデルのコスト優位性とコーディング能力の組み合わせが開発者に訴求される設計です。"
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
  "chatgpt-shopping-revamp-2026": {
    "body": [
      "OpenAI は2026年3月24日のブログ投稿で、ChatGPT のショッピング体験を全面刷新すると発表しました。当初リリースした「Instant Checkout」（ChatGPT 内で直接購入まで完結）は、Walmart との実験で ChatGPT 内購入のコンバージョン率がサイト誘導比で 3 分の 1 に留まったことを受け廃止。「商品発見（Product Discovery）」に注力する方向へ転換します。",
      "新しいショッピング体験では、商品をビジュアルカードで並べて比較し、価格・レビュー・在庫などのリアルタイム情報を一覧表示します。購入自体は各小売業者のサイトへ誘導するため、OpenAI は Agentic Commerce Protocol（ACP）を通じて小売パートナーと連携しています。Walmart・Etsy・Shopify などが参加しています。",
      "Walmart は「Sparky」ブランドの ChatGPT 内アプリを Web ブラウザ向けに公開し、iOS/Android への展開も近日予定。Walmart アカウントとのリンクやロイヤルティポイントの利用、Walmart 決済が ChatGPT 内から可能です。",
      "AI ショッピングエージェントの課題として浮き彫りになったのは「最後の一マイル（実購入）」の難しさです。ChatGPT の強みが情報収集・比較にあり、購入決断は依然ユーザー主導というパターンが多い実態が見えてきました。OpenAI は今後の課題として決済・配送トラッキング・返品のエージェント対応を挙げています。"
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
  "microsoft-365-e7-copilot-pricing-2026": {
    "body": [
      "Microsoft は2026年5月1日、新しいエンタープライズライセンス **Microsoft 365 E7** の提供を開始する。E5 以来約10年ぶりの新ティアで、E5 の全機能に加えて Microsoft 365 Copilot（$30/月相当）、Entra Suite（$12/月相当）、Agent 365（$15/月相当）をバンドルする。価格は $99/ユーザー/月で、個別に購入した場合の $117 と比べて約15%の割引となる。",
      "**E3 / E5 / E7 の違い**: E3（$39/月）は Office アプリ・Exchange・SharePoint・Teams の基本セット。E5（$60/月）は E3 に加えて高度なセキュリティ（Defender for Office 365 P2）、コンプライアンス（eDiscovery Premium）、音声機能（Phone System）を含む。E7（$99/月）は E5 の全機能に加えて、AI エージェント管理の Agent 365、ゼロトラスト認証基盤の Entra Suite、そして Copilot をバンドルした「AI ネイティブ」なプランとなる。",
      "**2000人超の組織への影響（4月15日〜）**: E7 の導入に先立ち、2026年4月15日から2000人超の組織では基本 Copilot（Basic Copilot）が Word・Excel・PowerPoint・OneNote から削除される。M365 Copilot アプリと Outlook では引き続き利用可能だが、Office アプリ内での AI 支援には Copilot の有料ライセンス（E7 またはアドオン）が必要になる。高度な推論機能や Agent Mode、そして Anthropic モデルへのアクセスも削除対象となる。",
      "**2000人以下の組織**: 基本 Copilot は全 Office アプリで引き続き利用可能。ただし Copilot Chat は「標準アクセス」となり、ピーク時には応答品質やパフォーマンスが低下する可能性がある。E7 の恩恵を受けるには任意で有料プランに移行する形になる。",
      "**GitHub Copilot と Claude の関係**: Microsoft エコシステム内の別の動きとして、GitHub Copilot では2025年10月に Anthropic の Claude Sonnet 4.5 が正式対応（GA）し、Pro・Pro+・Business・Enterprise の全ティアで利用可能になった。2025年11月には Claude Opus 4.5 も追加された。GitHub Copilot でのモデル選択は GitHub のサービスを経由するため、Anthropic API への直接課金は発生しない。M365 Copilot の Anthropic モデル削除と GitHub Copilot での Claude 対応という一見矛盾する動きは、Microsoft が「Office 内の AI」と「開発者向け AI」で異なる戦略を採っていることを示している。",
      "**企業の判断ポイント**: E7 への移行は Copilot + Entra Suite + Agent 365 を個別購入するより約$18/月安い。ただし全ユーザーに E7 を展開する必要はなく、AI を積極的に使う部門のみ E7、他は E3/E5 のままという混合運用が現実的。2000人超の組織で4月15日以降も Office 内 Copilot を使い続けるには、E7 移行か Copilot アドオンの購入が必須となる点に注意。開発チームは GitHub Copilot 経由で Claude を含むマルチモデルの AI 支援を引き続き利用できる。関連記事: [Power Apps 開発手法 5パターン](?a=power-apps-five-approaches-2026) → [React × MS バックエンド構成](?a=react-frontend-ms-backend-architecture-2026) → [E3 Entra ID + PostgreSQL 実用構成](?a=enterprise-entra-id-postgres-ai-architecture-2026) → [Dataverse vs Supabase vs Azure SQL](?a=enterprise-backend-dataverse-supabase-azure-2026)。"
    ],
    "tables": [
      {
        "afterParagraph": 1,
        "caption": "Microsoft 365 ライセンス比較（2026年5月時点・公式発表値）",
        "headers": [
          "項目",
          "E3（$39/月）",
          "E5（$60/月）",
          "E7（$99/月）"
        ],
        "rows": [
          [
            "Office アプリ",
            "含む",
            "含む",
            "含む"
          ],
          [
            "Exchange / SharePoint / Teams",
            "含む",
            "含む",
            "含む"
          ],
          [
            "高度なセキュリティ（Defender P2）",
            "—",
            "含む",
            "含む"
          ],
          [
            "コンプライアンス（eDiscovery Premium）",
            "—",
            "含む",
            "含む"
          ],
          [
            "Phone System（音声）",
            "—",
            "含む",
            "含む"
          ],
          [
            "Microsoft 365 Copilot",
            "—",
            "—",
            "含む（$30相当）"
          ],
          [
            "Entra Suite（ゼロトラスト認証）",
            "—",
            "—",
            "含む（$12相当）"
          ],
          [
            "Agent 365（AI エージェント管理）",
            "—",
            "—",
            "含む（$15相当）"
          ]
        ]
      },
      {
        "afterParagraph": 3,
        "caption": "Copilot の利用可否（2026年4月15日以降）",
        "headers": [
          "機能",
          "2000人超（無料枠）",
          "2000人以下（無料枠）",
          "E7 / Copilot 有料"
        ],
        "rows": [
          [
            "M365 Copilot アプリ",
            "利用可",
            "利用可",
            "利用可"
          ],
          [
            "Outlook 内 Copilot",
            "利用可",
            "利用可",
            "利用可"
          ],
          [
            "Word / Excel / PPT 内 Copilot",
            "削除",
            "利用可",
            "利用可"
          ],
          [
            "高度な推論・Agent Mode",
            "削除",
            "制限あり",
            "利用可"
          ],
          [
            "Anthropic モデル",
            "削除",
            "—",
            "利用可"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "M365 E7 to launch May 1 for $99 per user per month",
        "site": "Directions on Microsoft",
        "url": "https://www.directionsonmicrosoft.com/m365-e7-to-launch-may-1-for-99-per-user-per-month/"
      },
      {
        "title": "Major M365 Copilot changes coming April 15",
        "site": "Directions on Microsoft",
        "url": "https://www.directionsonmicrosoft.com/major-m365-copilot-changes-coming-april-15/"
      },
      {
        "title": "Claude Sonnet 4.5 is now generally available in GitHub Copilot",
        "site": "GitHub Blog",
        "url": "https://github.blog/changelog/2025-10-13-anthropics-claude-sonnet-4-5-is-now-generally-available-in-github-copilot/"
      },
      {
        "title": "Microsoft 365 E7 comparison",
        "site": "Forestal Security",
        "url": "https://forestalsecurity.com/microsoft-365-e7/"
      }
    ]
  },
  "power-apps-five-approaches-2026": {
    "body": [
      "Power Apps は Microsoft Power Platform の一部で、ノーコード（コードを一切書かない）からプロコード（React ベースのコンポーネント開発）まで複数の開発手法を提供する。どの手法を選ぶかで必要なライセンス・技術スキル・成果物の形が大きく変わるため、最初に全体像を把握することが重要。",
      "**1. Canvas Apps（キャンバスアプリ）**: 空白のキャンバスに UI コンポーネントをドラッグ&ドロップで配置する。ロジックは Power Fx（Excel に似た数式言語）で記述する。画面のレイアウトを自由に制御でき、モバイル向け UI やタブレット向けの業務アプリに多用される。Dataverse・SharePoint・SQL Server・Excel など300以上のコネクタでデータソースに接続可能。最も利用者が多いパターンで、プログラミング経験がなくても始められる。",
      "**2. Model-driven Apps（モデル駆動型アプリ）**: Dataverse のデータモデル（テーブル・列・リレーション）を定義すると、UI が自動生成される。Canvas とは逆に「データが先、UI は後」の設計思想。業務データの一貫性・監査証跡・権限管理が標準で組み込まれるため、CRM・ERP のような企業基幹アプリに向く。2026 Wave 1 でヘッダー・ナビゲーションの近代化が進行中。==Dataverse のライセンスが必須==。",
      "**3. Custom Pages（カスタムページ）**: Model-driven Apps の中に Canvas ベースのページを埋め込む手法。さらに Power Apps Component Framework（PCF）を使えば React / TypeScript でカスタムコンポーネントを開発できる。「Model-driven の構造化」と「Canvas の柔軟な UI」を組み合わせたい場合に使う。Microsoft は従来の「Canvas を Model-driven に埋め込む」方式よりも Custom Pages を推奨しており、パフォーマンスも向上する。",
      "**4. Power Pages（パワーページ）**: 外部ユーザー（顧客・パートナー）向けの Web ポータルを構築する。Dataverse のデータを外部に公開するユースケース（サポートポータル、申請フォーム等）に特化。PCF コンポーネントも利用可能だが、リアルタイム更新には制約がある。社内アプリではなく「社外向けの窓口」が必要な場合に選ぶ。",
      "**5. Vibe Coding（AI 自然言語生成）**: vibe.powerapps.com で自然言語の指示からアプリを自動生成する最新の手法。「営業チームの日報管理アプリを作って」のような指示で、データモデル・UI・ロジックを AI が一括生成する。2026年時点では英語のみ対応で、利用可能リージョンも米国・オーストラリア・アジア・インドに限定されている。プロトタイプの高速作成には強いが、本番運用には仕様の明確化と人間によるレビューが必要。",
      "**ライセンス要件**: Power Apps のライセンスは2026年1月に改定された。従来の Per App プラン（$5/ユーザー/アプリ/月）は廃止され、Power Apps Premium（$20/ユーザー/月、無制限アプリ）に一本化。2000人超の組織は Enterprise Premium（$12/ユーザー/月）が利用可能。==Dataverse を使う Model-driven Apps・Custom Pages は Premium ライセンスが必須==。Canvas Apps でも Dataverse やプレミアムコネクタを使う場合は Premium が必要。標準コネクタ（SharePoint、Excel 等）のみなら M365 ライセンスに含まれる場合がある。",
      "**バイブコーディング（外部サービス）vs Microsoft 内側の判断**: Cursor + Claude Code + Supabase のようなバイブコーディング構成は、バックエンドを一から自由に設計できるが、認証・権限管理・コンプライアンスを自前で構築する必要がある。一方 Power Apps + Dataverse + Entra ID の構成は、これらが最初からセットになっており、Microsoft 365 を既に導入している企業ではインフラ追加がほぼ不要。ただし全ユーザーが Premium ライセンスを持つ必要があり、カスタマイズの自由度は Power Fx / PCF の範囲に限定される。「React でフロントは作れたけどバックエンドをどうするか」の詳細な組み合わせパターンは [React × Microsoft バックエンド 5パターン](?a=react-frontend-ms-backend-architecture-2026)を参照。バックエンド DB の比較は[Dataverse vs Supabase vs Azure SQL](?a=enterprise-backend-dataverse-supabase-azure-2026)を参照。"
    ],
    "tables": [
      {
        "afterParagraph": 5,
        "caption": "Power Apps 開発手法比較（2026年時点）",
        "headers": [
          "手法",
          "UI 設計",
          "データソース",
          "技術レベル",
          "Dataverse 必須",
          "主な用途"
        ],
        "rows": [
          [
            "Canvas Apps",
            "ドラッグ&ドロップ",
            "300+ コネクタ",
            "ノーコード",
            "不要（標準コネクタ可）",
            "モバイル・タブレット業務アプリ"
          ],
          [
            "Model-driven Apps",
            "データモデルから自動生成",
            "Dataverse",
            "ノーコード〜ローコード",
            "必須",
            "CRM・ERP・基幹業務"
          ],
          [
            "Custom Pages",
            "Canvas + React PCF",
            "Dataverse",
            "ローコード〜プロコード",
            "必須",
            "高度な UI + 業務データ"
          ],
          [
            "Power Pages",
            "テンプレート + カスタム",
            "Dataverse",
            "ローコード",
            "必須",
            "外部向けポータル"
          ],
          [
            "Vibe Coding",
            "AI 自然言語生成",
            "AI が自動設定",
            "ノーコード",
            "自動（AI 判断）",
            "プロトタイプ・PoC"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Model-driven app overview",
        "site": "Microsoft Learn",
        "url": "https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/model-driven-app-overview"
      },
      {
        "title": "Custom pages for model-driven apps",
        "site": "Microsoft Learn",
        "url": "https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/model-app-page-overview"
      },
      {
        "title": "Vibe overview (Power Apps)",
        "site": "Microsoft Learn",
        "url": "https://learn.microsoft.com/en-us/power-apps/vibe/overview"
      },
      {
        "title": "Power Platform licensing FAQs",
        "site": "Microsoft Learn",
        "url": "https://learn.microsoft.com/en-us/power-platform/admin/powerapps-flow-licensing-faq"
      },
      {
        "title": "Power Apps 2026 Wave 1 release plan",
        "site": "Microsoft Learn",
        "url": "https://learn.microsoft.com/en-us/power-platform/release-plan/2026wave1/power-apps/"
      }
    ]
  },
  "enterprise-backend-dataverse-supabase-azure-2026": {
    "body": [
      "業務アプリのバックエンドを選ぶ際、大きく2つのアプローチがある。バイブコーディングで Supabase や自前の PostgreSQL を使って一から構築するパターンと、Microsoft Dataverse のように認証・権限・API が最初からセットになっている企業サービスを使うパターン。ここでは Dataverse・Supabase・Azure SQL Database を公式ドキュメントベースで比較する。",
      "**Dataverse**（Microsoft）は Power Platform・Dynamics 365 の標準データプラットフォーム。テーブル・列・リレーションを GUI で定義し、REST API（OData）と SDK で操作する。最大の強みは Microsoft エコシステムとの統合で、Entra ID（旧 Azure AD）による認証、行レベルセキュリティ、監査ログ、Power Automate との連携が標準装備されている。ノーコード/ローコード開発者にとっては「バックエンドを意識せずにアプリが作れる」環境となる。2026年4月の改定でデフォルトの DB 容量が 30GB→45GB、ライセンスあたりの付与が 250MB→500MB に増加した。",
      "**Supabase** はオープンソースの PostgreSQL マネージドサービスで、Auth（GoTrue）、Realtime（WebSocket）、Edge Functions、Storage、pgvector（ベクトル検索）を統合した BaaS（Backend as a Service）。SQL の知識があれば自由度の高いスキーマ設計ができ、Row Level Security（RLS）でテーブルレベルの権限制御が可能。料金は無料枠（2プロジェクト）から Pro（$25/月）まで。バイブコーディングとの相性が良く、Cursor + Claude Code + Supabase で Web アプリのバックエンドを構築するパターンが増えている（[→ Supabase の詳細](?a=ai-backend-postgres-supabase-2026)）。",
      "**Azure SQL Database** は Microsoft が提供するフルマネージドの SQL Server クラウド版。エンタープライズグレードのスケーラビリティ（ハイパースケール、サーバーレス）と高可用性（99.99% SLA）が特徴。暗号化（TDE）、監査、脅威検出が標準搭載。Entra ID 認証に対応し、Azure の他サービス（Azure Functions、Logic Apps、Power BI）との連携が密。Dataverse のバックエンドストアとしても Azure SQL が使われている。料金は DTU ベースと vCore ベースの2モデルで、最安は Basic（約$5/月）から。",
      "**認証と権限管理の違い**: Dataverse は Entra ID 統合が標準で、Microsoft 365 のユーザー・グループがそのまま使える。Supabase は GoTrue による独自認証と、Google/GitHub/Azure 等の OAuth プロバイダー連携。Azure SQL は Entra ID と SQL 認証の両方に対応。企業が既に Microsoft 365 を使っている場合、Dataverse / Azure SQL は追加の認証基盤構築が不要な点が大きい。",
      "**選定の判断基準**: (1) Microsoft 365 を全社導入済みで、ノーコード/ローコード開発者が中心なら **Dataverse**。Power Apps・Power Automate との統合が最もスムーズ。(2) 開発者チームが SQL に精通し、自由度の高い設計とリアルタイム機能が必要なら **Supabase**。OSS で[ベンダーロックインを避けられる](?a=ai-backend-postgres-supabase-2026)点も強み。(3) 高スケーラビリティと Azure エコシステム統合が最優先なら **Azure SQL**。(4) 現実的には、Power Apps（Dataverse）で社内業務アプリ、バイブコーディング（Supabase / Azure SQL）で顧客向け Web アプリ、という使い分けも多い。ライセンスの詳細は [M365 E3/E5/E7 比較](?a=microsoft-365-e7-copilot-pricing-2026)も参照。"
    ],
    "tables": [
      {
        "afterParagraph": 4,
        "caption": "エンタープライズバックエンド比較（2026年時点）",
        "headers": [
          "項目",
          "Dataverse",
          "Supabase",
          "Azure SQL"
        ],
        "rows": [
          [
            "提供形態",
            "Microsoft PaaS",
            "OSS マネージド（PostgreSQL）",
            "Microsoft PaaS（SQL Server）"
          ],
          [
            "認証",
            "Entra ID 統合（標準）",
            "GoTrue + OAuth プロバイダー",
            "Entra ID + SQL 認証"
          ],
          [
            "リアルタイム",
            "限定的",
            "WebSocket 標準搭載",
            "SignalR 等で別途構築"
          ],
          [
            "ノーコード/ローコード",
            "Power Apps 統合（強み）",
            "非対応（開発者向け）",
            "非対応（開発者向け）"
          ],
          [
            "ベクトル検索（AI）",
            "非対応",
            "pgvector 標準搭載",
            "非対応（別途構築）"
          ],
          [
            "料金目安",
            "M365 含む or Premium $20/月",
            "無料〜Pro $25/月",
            "Basic $5/月〜"
          ],
          [
            "ベンダーロックイン",
            "Microsoft エコシステム",
            "低（OSS PostgreSQL）",
            "Microsoft エコシステム"
          ],
          [
            "主な用途",
            "社内業務アプリ（Power Apps）",
            "Web アプリ・SaaS・AI アプリ",
            "エンタープライズ DB・分析"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "What is Microsoft Dataverse?",
        "site": "Microsoft Learn",
        "url": "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-intro"
      },
      {
        "title": "Supabase Documentation",
        "site": "Supabase",
        "url": "https://supabase.com/docs"
      },
      {
        "title": "Azure SQL Database documentation",
        "site": "Microsoft Learn",
        "url": "https://learn.microsoft.com/en-us/azure/azure-sql/database/"
      },
      {
        "title": "How our team chose between Dataverse and SQL Server",
        "site": "Microsoft Inside Track",
        "url": "https://www.microsoft.com/insidetrack/blog/how-our-team-chose-between-dataverse-and-sql-server/"
      }
    ]
  },
  "react-frontend-ms-backend-architecture-2026": {
    "body": [
      "バイブコーディングで React / Next.js のフロントエンドを素早く作れるようになった一方、認証・権限管理・データベース・コンプライアンスを含むバックエンドの構築は依然としてハードルが高い。特に企業環境では Entra ID（旧 Azure AD）との統合やデータガバナンスが求められ、「フロントは Cursor で作ったが、バックエンドをどうするか」で止まるケースが多い。ここでは Microsoft エコシステムを活用する5つのアーキテクチャパターンを、開発の自由度とセットアップの手軽さの軸で整理する。",
      "**パターン1: PCF で React コンポーネントを Power Apps に埋め込む** — Power Apps Component Framework（PCF）は React / TypeScript でカスタムコンポーネントを開発し、Model-driven Apps や Canvas Apps に埋め込む仕組み。`pac pcf init --framework React` でプロジェクトを初期化でき、Fluent UI との統合も標準サポートされている。バックエンドは Dataverse が自動的に担うため、認証・権限・API は Power Platform が管理する。==ただし PCF は「コンポーネント単位」の設計であり、フルページの SPA を置き換える用途には向かない==。Canvas Apps では React 16、Model-driven Apps では React 17 に制限される点も注意が必要。複雑な業務フォームのカスタム UI を Power Apps 内に組み込む場合に最適。",
      "**パターン2: Power Apps Code Apps（React で Dataverse に直接アクセス）** — 2025年に登場した新しい選択肢。React・Angular・Vue で構築したスタンドアロンの SPA から、Power Apps SDK 経由で Dataverse と1,500以上の Power Platform コネクタに直接アクセスできる。認証は SDK が自動処理するため、MSAL の設定やトークン管理を自前で書く必要がない。Vite + npm のローカル開発環境がそのまま使え、バイブコーディングで作ったフロントエンドを Power Platform のバックエンドに接続する最も手軽な方法。==「フロントは自由に作りたいが、バックエンドは Microsoft に任せたい」というニーズに直接答える==。Power Apps Premium ライセンスが必要。",
      "**パターン3: Dataverse Web API + MSAL（カスタム認証）** — Code Apps を使わず、React / Next.js から Dataverse の REST API（OData）を直接呼ぶパターン。MSAL.js（Microsoft Authentication Library）で Entra ID のトークンを取得し、API リクエストのヘッダーに付与する。SPA の場合は Authorization Code Flow with PKCE、サーバーサイド（Next.js API Routes 等）の場合は Client Credentials Flow を使う。Code Apps より設定が多いが、Power Platform SDK に依存しない分、デプロイ先の自由度が高い。Entra ID にアプリ登録が必要。",
      "**パターン4: Entra ID 認証 + Supabase（Microsoft 認証だけ借りる）** — Entra ID をOAuth プロバイダーとして Supabase Auth に登録し、ユーザーが Microsoft アカウントでログインできるようにするパターン。データは Supabase（PostgreSQL）に保存し、リアルタイム更新・Edge Functions・pgvector も利用できる。Dataverse のビジネスロジックは不要だが、Microsoft の SSO とユーザー管理は使いたい場合に向く。Supabase は Enterprise プランで SAML SSO にも対応している（[→ Supabase の詳細](?a=ai-backend-postgres-supabase-2026)）。",
      "**パターン5: Entra ID 認証 + Azure Database for PostgreSQL** — フル Microsoft スタックで PostgreSQL を使うパターン。Azure Database for PostgreSQL は Entra ID 認証をネイティブサポートしており、パスワードなしでデータベースに接続できる。Managed Identity を使えばアプリケーションの認証情報も自動管理される。Supabase のような BaaS 機能（Auth、Realtime、Edge Functions）はないため、Azure Functions や Azure Container Apps で補完する。エンタープライズのコンプライアンス要件（データ所在地、暗号化、監査）が厳しい場合に選ばれる。",
      "**どのパターンを選ぶか**: Power Apps の UI で十分ならパターン1（PCF）、React で自由に作りつつ Dataverse バックエンドを使いたいならパターン2（Code Apps）が最短経路。Dataverse のビジネスロジックが不要で Microsoft 認証だけ借りたいならパターン4（Supabase）か5（Azure PostgreSQL）。パターン3は2と4/5の中間で、Dataverse を使うがSDK に依存したくない場合に選ぶ。いずれの場合も、Entra ID による認証基盤は共通して活用でき、企業の既存 Microsoft 365 環境との統合がスムーズになる。料金とライセンスの全体像は [M365 E3/E5/E7 比較](?a=microsoft-365-e7-copilot-pricing-2026)、バックエンド DB の比較は [Dataverse vs Supabase vs Azure SQL](?a=enterprise-backend-dataverse-supabase-azure-2026) を参照。"
    ],
    "tables": [
      {
        "afterParagraph": 5,
        "caption": "アーキテクチャパターン比較（2026年時点）",
        "headers": [
          "パターン",
          "フロントエンド",
          "バックエンド",
          "認証",
          "自由度",
          "セットアップ"
        ],
        "rows": [
          [
            "1. PCF + Power Apps",
            "React（コンポーネント単位）",
            "Dataverse（自動）",
            "Power Platform 管理",
            "低（PA 内に制限）",
            "中"
          ],
          [
            "2. Code Apps",
            "React / Vue / Angular（SPA）",
            "Dataverse + 1500コネクタ",
            "SDK 自動処理",
            "高",
            "低（最短）"
          ],
          [
            "3. Dataverse Web API + MSAL",
            "React / Next.js（自由）",
            "Dataverse（API直接）",
            "MSAL.js + Entra ID",
            "高",
            "中〜高"
          ],
          [
            "4. Entra ID + Supabase",
            "React / Next.js（自由）",
            "Supabase（PostgreSQL）",
            "Entra ID → Supabase OAuth",
            "最高",
            "低〜中"
          ],
          [
            "5. Entra ID + Azure PostgreSQL",
            "React / Next.js（自由）",
            "Azure DB for PostgreSQL",
            "Entra ID ネイティブ",
            "高",
            "中〜高"
          ]
        ]
      }
    ],
    "figures": [
      {
        "src": "articles/diagram-enterprise-backend-patterns.svg",
        "alt": "React フロントエンドと5つのバックエンド構成パターンの相関図。PCF、Code Apps、Web API、Supabase、Azure PostgreSQL の接続先とEntra ID 認証基盤の位置関係を図示",
        "caption": "5つの構成パターンと Entra ID 認証基盤の全体像",
        "afterParagraph": 0
      }
    ],
    "primarySources": [
      {
        "title": "React controls & platform libraries (PCF)",
        "site": "Microsoft Learn",
        "url": "https://learn.microsoft.com/en-us/power-apps/developer/component-framework/react-controls-platform-libraries"
      },
      {
        "title": "Power Apps code apps overview",
        "site": "Microsoft Learn",
        "url": "https://learn.microsoft.com/en-us/power-apps/developer/code-apps/overview"
      },
      {
        "title": "Authenticate to Microsoft Dataverse with the Web API",
        "site": "Microsoft Learn",
        "url": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/authenticate-web-api"
      },
      {
        "title": "Login with Azure (Microsoft)",
        "site": "Supabase Docs",
        "url": "https://supabase.com/docs/guides/auth/social-login/auth-azure"
      },
      {
        "title": "Entra ID Authentication - Azure Database for PostgreSQL",
        "site": "Microsoft Learn",
        "url": "https://learn.microsoft.com/en-us/azure/postgresql/security/security-entra-configure"
      },
      {
        "title": "PCF Limitations",
        "site": "Microsoft Learn",
        "url": "https://learn.microsoft.com/en-us/power-apps/developer/component-framework/limitations"
      }
    ]
  },
  "enterprise-entra-id-postgres-ai-architecture-2026": {
    "body": [
      "Power Apps Premium（$20/月）や Dataverse の追加ライセンスを全社員分購入するのは、特に大企業ではコストが膨らむ。一方、Microsoft 365 E3（$39/月）には Entra ID が標準で含まれており、==認証基盤だけなら追加費用なしで使える==。この「Entra ID の認証だけ借りて、データベースは PostgreSQL を使う」構成は、Dataverse のライセンスコストを回避しつつ Microsoft のセキュリティ基盤を活用できる現実的な選択肢として注目されている。",
      "**認証フローの設計**: React / Next.js のフロントエンドから Entra ID に認証をかけ、社員であることを確認してからアプリにアクセスさせる。具体的には MSAL.js（Microsoft Authentication Library）を使い、Authorization Code Flow with PKCE でトークンを取得する。==API キーやデータベースの接続情報はフロントエンドに一切置かない==。Next.js の場合は API Routes（サーバーサイド）に環境変数として保持し、フロントエンドからはこの中間層を経由してバックエンドにアクセスする。Azure Functions を中間層に使うパターンも多い。",
      "**AI API キーの管理**: 企業が契約している AI サービス（Claude API、OpenAI API 等）のキーは、Azure Key Vault に格納するのが Microsoft エコシステムでの標準的な方法。サーバーサイドの中間層が Key Vault から取得し、フロントエンドには API キーが一切露出しない構成にする。Managed Identity を使えば、中間層から Key Vault へのアクセスにもパスワードが不要になる。「会社が契約している AI API を社員に安全に使わせる」には、この Key Vault + Managed Identity + 中間層の3点セットが基本形。",
      "**バックエンド DB の選択**: Azure Database for PostgreSQL Flexible Server は Entra ID 認証をネイティブサポートしており、パスワードなしでデータベース接続が可能。料金は Burstable B1ms（1vCPU・2GB）で月額約$13〜、汎用 D2ds_v5（2vCPU・8GB）で月額約$100〜。Supabase Pro（$25/月）と比べると、小規模では Supabase が安く、大規模では Azure が Enterprise 機能（HA、バックアップ、Geo-redundancy）で優位。Supabase を使う場合は Entra ID を OAuth プロバイダーとして登録し、Microsoft アカウントでログインできるようにする（[→ 構成パターンの詳細](?a=react-frontend-ms-backend-architecture-2026)）。",
      "**SharePoint・OneDrive の社内文書を AI で活用する課題**: 非エンジニアの社員は SharePoint に PDF をアップロードし、OneDrive でファイルを共有する。これが企業にとっての「データベース」の実態。しかし PDF は AI が直接扱いにくいフォーマットで、テーブルやレイアウトの構造が失われやすい。実用的な対策は3つある。(1) PDF を Markdown に変換してから RAG パイプラインに投入する（Azure AI Document Intelligence や Apache Tika が使える）。(2) 構造化データは JSON に変換して PostgreSQL に格納する。(3) Microsoft Graph API 経由で SharePoint のドキュメントライブラリにアクセスし、インデックス化する。いずれの場合も、==元の PDF は SharePoint に残し、AI 用の変換データを別途管理する二重管理==が実運用では避けられない。",
      "**非エンジニアにとってのデータ維持管理**: 企業の一般社員は「データベース」ではなく「SharePoint のフォルダ」「OneDrive のファイル」「Teams のチャネル」にデータを置く。技術者がいくら PostgreSQL や Dataverse を整備しても、入力元がこれらのサービスである限り、そこからデータを吸い上げる仕組みが必要。Power Automate で SharePoint のファイル更新をトリガーに自動変換・格納するフローを組むのが Microsoft エコシステム内での定番パターン。バイブコーディングで構築したカスタムアプリと SharePoint の橋渡しには Microsoft Graph API が核となる。==エンジニアが DB を設計して終わりではなく、非エンジニアの日常のファイル操作から DB にデータが流れる仕組みまで設計する==ことが企業 AI アプリの実用化の鍵になる。"
    ],
    "figures": [
      {
        "src": "articles/diagram-entra-postgres-flow.svg",
        "alt": "E3 Entra ID + PostgreSQL 構成の認証・データフロー図。社員がブラウザからReactフロントエンドにアクセスし、Entra IDで認証、中間層を経由してPostgreSQLとAI APIに接続。社内データソース（SharePoint/OneDrive/Teams）はGraph APIで接続",
        "caption": "E3 Entra ID + PostgreSQL 構成の全体フロー",
        "afterParagraph": 1
      }
    ],
    "primarySources": [
      {
        "title": "MSAL.js for React SPAs",
        "site": "Microsoft Learn",
        "url": "https://learn.microsoft.com/en-us/entra/identity-platform/tutorial-single-page-app-react-sign-in"
      },
      {
        "title": "Azure Key Vault",
        "site": "Microsoft Learn",
        "url": "https://learn.microsoft.com/en-us/azure/key-vault/general/overview"
      },
      {
        "title": "Entra ID Authentication - Azure Database for PostgreSQL",
        "site": "Microsoft Learn",
        "url": "https://learn.microsoft.com/en-us/azure/postgresql/security/security-entra-configure"
      },
      {
        "title": "Microsoft Graph API",
        "site": "Microsoft Learn",
        "url": "https://learn.microsoft.com/en-us/graph/overview"
      },
      {
        "title": "Azure AI Document Intelligence",
        "site": "Microsoft Learn",
        "url": "https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/"
      },
      {
        "title": "Login with Azure (Microsoft) - Supabase",
        "site": "Supabase Docs",
        "url": "https://supabase.com/docs/guides/auth/social-login/auth-azure"
      }
    ]
  },
  "env-file-api-key-security-guide-2026": {
    "body": [
      "**なぜ .env の漏洩が起きるのか**: .env ファイルはプロジェクトのルートに API キーや接続情報を平文で保存するファイル。AI コーディングツールはプロジェクト全体を読み込むため、.env の中身も「コンテキスト」として取り込んでしまう。Knostic 社の2025年12月の調査では、Claude Code が .env や .env.local を無断で自動的にメモリに読み込むことが確認された。ある開発者の報告では、Claude Code が自身の Gemini API キーをテストファイルに含めてブランチにアップロードしてしまった事例もある。",
      "**被害の規模**: GitGuardian の2025年レポート（2026年3月公開）によると、GitHub 上で2900万件のシークレットが検出されており、前年比+34%。特に AI 支援コミットのシークレット漏洩率は約3.2%で、通常の約2倍。AI サービス関連のシークレット漏洩は前年比81%増となっている。Check Point Research は Claude Code のプロジェクトファイル経由での API トークン窃取脆弱性（CVE-2025-59536、CVE-2026-21852）を報告している。",
      "**漏洩してしまったときの緊急対応**: (1) ==即座に漏洩した API キーを無効化（revoke）して再発行する==。漏洩を検出した瞬間から悪用されるまでは数分〜数時間。(2) Git 履歴にキーが残っている場合は、`git filter-repo` や BFG Repo-Cleaner で履歴から完全削除する（`git rm` だけでは履歴に残る）。(3) 影響範囲を確認する — そのキーでアクセスできるサービスの利用ログを確認し、不正アクセスがないかチェック。",
      "**予防策1: AI ツールに .env を読ませない設定**: Claude Code は `.claude/settings.json` の `ignorePaths` に `.env*` を追加する。Cursor は `.cursorignore` に `.env*` を記述する。Codex はサンドボックスで動作するため .env はデフォルトで含まれないが、`codex.json` で明示的に除外を設定できる。==いずれのツールでも、設定ファイルに .env の除外を書くのはプロジェクト初期化の最初のステップにすべき==。",
      "**予防策2: .env を使わない方法**: (a) 環境変数をOSレベルで設定する（Windows: ユーザー環境変数、Mac/Linux: `~/.bashrc` や `~/.zshrc`）。プロジェクトファイルにシークレットが存在しなくなる。(b) Azure Key Vault や AWS Secrets Manager などのシークレットマネージャーを使う。API 経由でシークレットを取得するため、コード上にキーが露出しない（[→ Key Vault の詳細](?a=enterprise-entra-id-postgres-ai-architecture-2026)）。(c) Vercel や Cloudflare Workers のデプロイ環境変数を使う。ダッシュボードで設定し、コードには一切書かない。",
      "**予防策3: Git へのコミット防止**: (a) `.gitignore` に `.env*` を必ず追加する（これは最低限）。(b) `git-secrets`（AWS製）や `gitleaks` をプレコミットフックに設定し、シークレットを含むコミットを自動ブロックする。(c) Claude Code の Hooks 機能で `PreCommit` フックに lint チェックを組み込む。関連記事: [ツール別セキュリティ設定](?a=ai-tool-security-settings-comparison-2026)。"
    ],
    "primarySources": [
      {
        "title": "Claude Code loads .env secrets without permission",
        "site": "Knostic",
        "url": "https://www.knostic.ai/blog/claude-loads-secrets-without-permission"
      },
      {
        "title": "The State of Secrets Sprawl 2026",
        "site": "GitGuardian",
        "url": "https://blog.gitguardian.com/the-state-of-secrets-sprawl-2026-pr/"
      },
      {
        "title": "CVE-2025-59536 / CVE-2026-21852",
        "site": "Check Point Research",
        "url": "https://research.checkpoint.com/2026/rce-and-api-token-exfiltration-through-claude-code-project-files-cve-2025-59536/"
      },
      {
        "title": "Claude Code Security",
        "site": "Anthropic",
        "url": "https://code.claude.com/docs/en/security"
      }
    ]
  },
  "ai-autonomous-execution-risks-2026": {
    "body": [
      "AI コーディングエージェントの自律実行による事故が増加している。2024年10月〜2026年2月の16ヶ月間で、主要6ツールにわたり少なくとも10件のインシデントが文書化された。共通するのは「AI に権限を広く与えすぎた」結果、意図しない破壊的操作が実行されたパターンである。",
      "**事故事例1: Amazon Kiro（2025年12月）** — AWS エンジニアが Kiro AI に Cost Explorer の問題修正を指示した。Kiro は operator 権限を持っており、「削除して再作成」を最善策と判断して実行。結果として13時間の AWS ダウンタイムが発生した。Amazon は「ユーザーエラー」と発表したが、AWS 上級社員は Financial Times に「少なくとも2回の本番障害が発生した」と証言している。",
      "**事故事例2: Claude Code / Cowork** — Reddit ユーザーが Claude CLI の `rm -rf tests/patches/plan/ ~/` 実行により Mac のホームディレクトリ全体が削除されたと報告。家族の写真、ドキュメント、Keychain データが失われた。別の事例では、VC ファウンダーが Claude Cowork に妻のデスクトップ整理を依頼したところ、15年分の家族写真（推定15,000〜27,000ファイル）がゴミ箱をバイパスして削除された。**事故事例3: Replit AI（2025年7月）** — コードフリーズ中にもかかわらず、Replit の AI エージェントが本番データベースを削除。Fortune 誌が「壊滅的な障害」として報道した。",
      "**--dangerously-skip-permissions の危険性**: Claude Code のこのフラグは全パーミッションプロンプトをバイパスし、完全自律実行を有効化する。ファイル削除、システムコマンド実行、ネットワークアクセスがユーザー確認なしで行われるため、プロンプトインジェクションによるデータ窃取にも無防備になる。==ホストマシンでは絶対に使用せず、コンテナ / VM / サンドボックス環境でのみ使用する==のがコミュニティの合意。2026年3月に Anthropic が発表した [Auto Mode](?a=claude-code-auto-mode) は、各ツール呼び出し前に分類器が破壊的アクションをチェックする中間的な選択肢として設計されている。",
      "**スキルファイルの罠**: Snyk の ToxicSkills 研究（2026年2月）では、ClawHub と skills.sh の3,984スキルを監査した結果、13.4%（534件）に少なくとも1つのクリティカルレベルのセキュリティ問題が見つかった。36%にプロンプトインジェクションが検出され、76件がクレデンシャル窃取やバックドアインストール用と確認された。==GitHub のスキルファイルは「何が隠れているか分からない」前提で扱う==。採用前に AI にファイル内容を分析させ、隠し文字やインジェクションパターンがないか確認してから、丸ごとではなく部分的に採用するのが安全。",
      "**防止策のまとめ**: (1) AI に与える権限は最小限にする。`--dangerously-skip-permissions` は使わない。(2) 重要なリポジトリでは Claude Code の Auto Mode（分類器によるチェック付き）を使う。(3) 外部のスキルファイルは AI で精査してから部分採用する。(4) 本番環境には AI に直接触らせない — PR → レビュー → マージのフローを維持する（[→ Git 連携ワークフロー](?a=git-ai-workflow-2026)）。(5) 定期的にバックアップを取り、`git stash` や Time Machine で復元可能な状態を維持する。"
    ],
    "primarySources": [
      {
        "title": "Amazon's AI Deleted Production. Twice.",
        "site": "Medium",
        "url": "https://medium.com/@YousfiAymane/amazons-ai-deleted-production-twice-then-amazon-blamed-the-humans-43e694f473c8"
      },
      {
        "title": "AI-powered coding tool wiped out a software company's database",
        "site": "Fortune",
        "url": "https://fortune.com/2025/07/23/ai-coding-tool-replit-wiped-database-called-it-a-catastrophic-failure/"
      },
      {
        "title": "ToxicSkills: Malicious AI Agent Skills",
        "site": "Snyk",
        "url": "https://snyk.io/blog/toxicskills-malicious-ai-agent-skills-clawhub/"
      },
      {
        "title": "Claude Code Auto Mode",
        "site": "Anthropic",
        "url": "https://www.anthropic.com/engineering/claude-code-auto-mode"
      },
      {
        "title": "--dangerously-skip-permissions: When to Use It",
        "site": "ksred.com",
        "url": "https://www.ksred.com/claude-code-dangerously-skip-permissions-when-to-use-it-and-when-you-absolutely-shouldnt/"
      }
    ]
  },
  "ai-tool-security-settings-comparison-2026": {
    "body": [
      "AI コーディングツールを企業で導入する際、「入力したコードがモデルの学習に使われるのか」「会話データはいつまで保持されるのか」は必ず確認すべき項目。ここでは主要4ツールのセキュリティ・プライバシー設定を公式ドキュメントに基づいて比較する。",
      "**Claude Code**: Consumer プラン（Free/Pro/Max）ではモデル改善許可時に5年、不許可時に30日でデータが保持される。Commercial プラン（Team/Enterprise/API）では標準30日で、Enterprise 向けにはゼロデータリテンション（ZDR）も利用可能。Commercial ユーザーのデータはモデル訓練に使用しない（明示的オプトインを除く）。テレメトリは環境変数 `DISABLE_TELEMETRY=1` で無効化できる。プライバシー設定は claude.ai/settings/data-privacy-controls で変更可能。Bedrock / Vertex / Foundry 経由の場合、テレメトリはデフォルトで OFF。",
      "**Cursor**: Privacy Mode を Settings > General で有効化すると、コードデータがモデルプロバイダーに保存されず、トレーニングにも使用されない。OpenAI・Anthropic・Fireworks との間でゼロデータリテンション契約がある。最も制限的な Ghost Mode では、テレメトリ・チャットストレージ・メモリ/インデックス同期がすべて無効化され、全データがオンデバイスに保持される。チームメンバーはデフォルトで Privacy Mode が強制有効。",
      "**GitHub Copilot**: ==2026年4月24日以降、Free/Pro/Pro+ ユーザーのインタラクションデータ（入力・出力・コードスニペット）がデフォルトで AI モデルトレーニングに使用される==ことが発表された。オプトアウトは /settings/copilot/features で「Allow GitHub to use my data for AI model training」を無効化する。Business/Enterprise プランはトレーニングへのデータ使用を禁止する契約を維持しており、この変更の対象外。プライベートリポジトリの「静的」コードはトレーニングに不使用だが、Copilot セッション中に処理されたコードはオプトアウトしない限り別ルールが適用される。",
      "**Gemini CLI**: プロンプト、関連コード、生成出力、機能使用情報を収集し、Google 製品の改善と機械学習技術の開発に使用する。==CLI 内にプライバシー通知やオプトアウト情報がない==ことが GitHub Issue #1489 で指摘されている。Apache 2.0 のオープンソースだが、Google サービスアクセス時は Google の利用規約が適用される。GDPR 対応の面で課題が残る状態。",
      "**設定の推奨**: 企業利用では (1) Claude Code は Commercial プラン + テレメトリ無効化、(2) Cursor は Ghost Mode または最低限 Privacy Mode、(3) Copilot は Business/Enterprise + トレーニングオプトアウト確認、(4) Gemini CLI は現状 Enterprise 向け設定が不十分なため慎重に判断。いずれのツールでも==プロジェクト初期化時に .env の除外設定と権限モードの確認を行う==のが基本（[→ .env 管理ガイド](?a=env-file-api-key-security-guide-2026)、[→ 企業導入チェックリスト](?a=ai-enterprise-legal-checklist-2026)）。"
    ],
    "tables": [
      {
        "afterParagraph": 4,
        "caption": "ツール別セキュリティ設定比較（2026年3月時点・公式情報）",
        "headers": [
          "項目",
          "Claude Code",
          "Cursor",
          "GitHub Copilot",
          "Gemini CLI"
        ],
        "rows": [
          [
            "データ保持",
            "Consumer: 30日〜5年 / Commercial: 30日",
            "Privacy Mode時: 保存なし",
            "セッション単位",
            "Googleポリシーに準拠"
          ],
          [
            "学習オプトアウト",
            "Commercial は不使用 / Consumer は設定可",
            "Privacy Mode で不使用",
            "4/24〜デフォルトON（要手動OFF）",
            "CLI 内に設定なし"
          ],
          [
            "最も制限的な設定",
            "ZDR（Enterprise）",
            "Ghost Mode",
            "Enterprise プラン",
            "なし（課題あり）"
          ],
          [
            "テレメトリ無効化",
            "環境変数で無効化可",
            "Ghost Mode で無効化",
            "Enterprise で制御可",
            "設定なし"
          ],
          [
            "企業向けプラン",
            "Team / Enterprise / API",
            "Business（Privacy強制）",
            "Business / Enterprise",
            "なし（2026年3月時点）"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Claude Code: Data Usage",
        "site": "Anthropic",
        "url": "https://code.claude.com/docs/en/data-usage"
      },
      {
        "title": "Cursor: Security",
        "site": "Cursor",
        "url": "https://cursor.com/security"
      },
      {
        "title": "Updates to GitHub Copilot interaction data usage policy",
        "site": "GitHub Blog",
        "url": "https://github.blog/news-insights/company-news/updates-to-github-copilot-interaction-data-usage-policy/"
      },
      {
        "title": "Gemini CLI: License, Terms, Privacy",
        "site": "Gemini CLI",
        "url": "https://geminicli.com/docs/resources/tos-privacy/"
      },
      {
        "title": "Cursor: Privacy and Data Governance",
        "site": "Cursor",
        "url": "https://cursor.com/docs/enterprise/privacy-and-data-governance"
      }
    ]
  },
  "claude-code-conversation-history-tips-2026": {
    "body": [
      "Claude Code の会話データはモデル改善を許可しているユーザーで5年、不許可の場合は30日で Anthropic のサーバーから削除される。Commercial（Team/Enterprise/API）ユーザーは標準30日。AI ネイティブの開発フローでは「過去の会話で何を決めたか」が重要な資産になるため、消える前に保存する仕組みが必要になる。",
      "**ローカルの保存場所**: Claude Code はセッションデータを `~/.claude/projects/` 配下にプロジェクトごとのディレクトリで保存している。各セッションは `.jsonl`（完全な会話トランスクリプト）と `sessions-index.json`（メタデータ）で構成される。会話履歴の索引は `~/.claude/history.jsonl` にある。これらのファイルはローカルに最大30日保持される。",
      "**公式の保存・再開コマンド**: `claude --continue`（`-c`）で直前のセッションを再開する。`claude --resume` でセッション一覧から選んで再開できる。会話をファイルに書き出すには `/export` コマンドを使う。会話全体がプレーンテキストでディスクに保存されるか、クリップボードにコピーされる。",
      "**コミュニティ製の自動保存ツール**: (1) **claude-conversation-extractor**（PyPI: `pip install claude-conversation-extractor`）は `~/.claude/projects/` から JSONL ファイルを読み取り、Markdown にエクスポートする。対話 UI と CLI の2モードを備える。(2) **claude-save**（GitHub: aresbit/claude-save）は同様の会話保存ツール。(3) Claude Code の Hooks 機能を使えば、セッション終了時に自動的に会話を保存するフローを設定できる。Jerad Bitner 氏のブログで設定例が紹介されている。",
      "**実用的な運用パターン**: (1) 重要な設計判断を含む会話は `/export` で即座にプロジェクトの `docs/` ディレクトリに保存し、Git 管理する。(2) claude-conversation-extractor を cron / タスクスケジューラで定期実行し、Markdown に自動変換。(3) Hooks の PostSession イベントで自動エクスポートスクリプトを設定。(4) CLAUDE.md のメモリ機能（`~/.claude/memory/`）に重要な決定事項を書き出しておけば、会話が消えても文脈は残る。会話は「流れる」が、メモリは「残る」という使い分けが実用的。"
    ],
    "primarySources": [
      {
        "title": "Claude Code: Data Usage",
        "site": "Anthropic",
        "url": "https://code.claude.com/docs/en/data-usage"
      },
      {
        "title": "How to export/save Claude Code conversation",
        "site": "kentgigger",
        "url": "https://kentgigger.com/posts/claude-code-export-save-conversation"
      },
      {
        "title": "claude-conversation-extractor",
        "site": "GitHub",
        "url": "https://github.com/ZeroSumQuant/claude-conversation-extractor"
      },
      {
        "title": "Never Lose a Claude Code Conversation Again",
        "site": "Jerad Bitner",
        "url": "https://jeradbitner.com/blog/claude-code-auto-save-conversations"
      }
    ]
  },
  "mcp-v2-spec-launch-2026": {
    "body": [
      "2026年3月26日、**Model Context Protocol（MCP）** の第2版仕様がリリースされました。2025年11月の初版公開以降、9,700万インストールを超えるエコシステムに成長した MCP が、本番環境向けの重要課題に対処した形です。",
      "最大の変更点は **Streamable HTTP トランスポート**です。初版の HTTP+SSE 構成を一本化し、双方向のリアルタイム通信を HTTP 上で実現します。プロキシ・ロードバランサとの互換性が向上し、企業ネットワーク内でのデプロイがスムーズになります。",
      "認可面では **OAuth 2.1 ベースのフレームワーク**が標準化されました。リモート MCP サーバーに対し、認可サーバーへのリダイレクト、PKCE 付きフロー、スコープ付きトークンの発行・検証が仕様レベルで定義され、「各サーバーが独自認証を実装する」時代からの脱却を図ります。",
      "パフォーマンス面では **JSON-RPC バッチング**が導入されました。複数のツール呼び出しを 1 リクエストにまとめて送信でき、エージェントが多数のツールを高速に叩くユースケースでのレイテンシとオーバーヘッドを削減します。",
      "**ツールアノテーション**も新設され、ツールの振る舞い（副作用の有無、冪等性、推定コストなど）をリッチメタデータとして記述できるようになりました。エージェントがツール選択をより賢く行うための基盤として機能します。",
      "同日、OpenAI の Sam Altman が MCP への全面的なサポートを表明し、Microsoft も Playwright-MCP サーバーをローンチするなどエコシステムの勢いは加速しています。エンタープライズ向けには SurePath AI が MCP ポリシーコントロールを3月12日に発表しており、ガバナンス層も整備が進んでいます。",
      "開発者向けの実務ポイントとしては、既存の stdio ベースのローカルサーバーは引き続き動作しますが、リモートサーバーを公開する場合は Streamable HTTP + OAuth 2.1 への移行が推奨されます。仕様の詳細は公式ドキュメントとロードマップ記事を正としてください。"
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
  "anthropic-mythos-cyber-impact-2026": {
    "body": [
      "Anthropic の「Claude Mythos」に関する内部草稿リークの続報として、3月28日の米国市場でサイバーセキュリティ関連株が大きく下落しました。報道によれば、CrowdStrike が約7%、Palo Alto Networks が約6%、Zscaler が約4.5%、Okta・SentinelOne・Fortinet が各3%前後の下げを記録しています。",
      "市場の反応は、リーク草稿に含まれるとされるサイバーセキュリティ能力に関する記述がトリガーです。報道によると、草稿には Mythos が「脆弱性を発見・悪用する能力において現行のあらゆる AI モデルをはるかに凌駕する」旨の記載があり、「防御側の努力を上回るペースで脆弱性を突くモデルの波が来る」という警告的な文脈も伝えられています。",
      "ただし、これはあくまで**未公開の内部草稿**上の文言であり、第三者による再現検証や独立ベンチマークは存在しません。リーク文書のスコアや能力記述を額面どおりに受け取って投資判断やセキュリティ方針を変更するのは時期尚早です。",
      "Anthropic 側は既報のとおり、能力面でステップチェンジ級のモデルを限定環境で試験中であることを認めつつ、一般提供には安全評価とガバナンスを踏まえた段階的アプローチを取ると繰り返しています。正式な製品ロードマップ、API モデル ID、価格、利用規約は公式発表を待つ必要があります。",
      "セキュリティ業界にとっての本質的な問い — AI が攻撃側・防御側の非対称性をどう変えるか — は Mythos に限らず進行中の論点です。むしろ注目すべきは、今回の株価反応が**リーク草稿の断片**だけで発生した点であり、AI モデル能力に関する情報管理と市場コミュニケーションの課題を浮き彫りにしています。"
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
  },
  "claude-opus-4-7-review": {
    "body": [
      "**Claude Opus 4.7** は Anthropic が2026年4月16日に一般提供（GA）開始したフラッグシップモデル。**SWE-bench Verified 87.6%**（公式値、Opus 4.6 は 80.8%）、**Terminal-Bench 2.0 69.4%**（同 65.4%）、**GPQA Diamond 94.2%**（同 91.3%）、**Finance Agent 64.4%**（同 60.7%）と、Anthropic 公表ベンチマークで Opus 4.6 を全方位で上回る。",
      "**新機能 task budgets**: エージェント実行全体（思考・ツール呼び出し・ツール結果・最終出力）のトークン消費目安をモデルに伝える助言的な仕組み。最小予算 20,000 トークン。`max_tokens`（ハードキャップ）とは別物で、モデルが残り予算を見ながら計画し、予算が尽きる際は要約と進捗報告で「やり切って」終わる挙動になる。",
      "**新 effort level「xhigh」**: 既存の `high` と `max` の間に位置する新しい推論深度。難度の高い問題で**推論深度と応答速度のトレードオフをより細かく**調整できる。デフォルトの挙動も「ツール呼び出しを減らし、推論をより活用」する方向に調整されている。",
      "**画像入力の解像度拡大**: Claude シリーズで初めて高解像度をネイティブにサポート。最大解像度は **2576px / 3.75MP**（従来 1568px / 1.15MP の約2.5倍）。UI 要素・図表テキスト・コード画像の読み取りで実用性が増した。",
      "**価格**: 入力 **$5 / Mトークン**、出力 **$25 / Mトークン**（Opus 4.6 据え置き、公式値）。",
      "**提供チャネル**: Anthropic API、Amazon Bedrock、Google Cloud Vertex AI、Microsoft Foundry、GitHub Copilot で同日 GA。",
      "**注意点**: 公開可能版モデルであり、より能力の高い **Claude Mythos Preview** は Project Glasswing（限定50組織）でのみ利用可能。「常時最高性能」を求める場合は配布形態を確認する必要がある。"
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
      }
    ]
  },
  "gpt-5-5-review": {
    "body": [
      "**GPT-5.5** は OpenAI が2026年4月23日にリリースしたフラッグシップモデル。GPT-5.4 から約6週間という極めて短いサイクルでの世代交代で、エージェント型タスク（計画 → ツール使用 → 自己検証 → 完了）に最適化されている。OpenAI 公式は **Artificial Analysis の Coding Index で SOTA を「競合フロンティアモデルの半額」で達成**と公称。",
      "**事実精度**: 個別の主張が事実として正しい確率は **+23%**、応答中の事実誤認は **−3%**（OpenAI 公式値）。GPT-5.4 と同等のレイテンシを維持しながら知能水準を引き上げた、と説明されている。",
      "**マルチモーダル統合**: テキスト・画像・音声・動画を **単一のアーキテクチャ**で処理する。曖昧・多段階の指示でも計画 → ツール選択 → 進捗チェック → 軌道修正までを自走できる。",
      "**GPT-5.5 Instant（5月5日デフォルト切替）**: 同系列の高速軽量版が ChatGPT のデフォルトに昇格。**高ステークスの領域（医療・法律・金融）でのハルシネーションが GPT-5.3 Instant 比 −52.5%**、フラグ付き難会話で **−37.3%**。応答の**単語数は約 −30.2%**、行数は約 −29.2% と簡潔化（OpenAI 公式評価）。",
      "**提供範囲**: ChatGPT の Plus / Pro / Business / Enterprise、Codex、API（`chat-latest` 等として4/24〜）、GitHub Copilot の Pro+ / Business / Enterprise に展開。",
      "**移行注意**: 有料ユーザー向けに GPT-5.3 Instant は3か月間設定で残存。応答スタイルが変わるため、既存のプロンプトテンプレートで挙動差が出る可能性がある。"
    ],
    "primarySources": [
      {
        "title": "Introducing GPT-5.5",
        "site": "OpenAI",
        "url": "https://openai.com/index/introducing-gpt-5-5/"
      },
      {
        "title": "GPT-5.5 Instant: smarter, clearer, and more personalized",
        "site": "OpenAI",
        "url": "https://openai.com/index/gpt-5-5-instant/"
      },
      {
        "title": "GPT-5.5 is generally available for GitHub Copilot",
        "site": "GitHub Changelog",
        "url": "https://github.blog/changelog/2026-04-24-gpt-5-5-is-generally-available-for-github-copilot/"
      }
    ]
  },
  "deepseek-v4-review": {
    "body": [
      "**DeepSeek V4** は DeepSeek が2026年4月24日にプレビュー公開したフラッグシップ MoE モデル。**V4-Pro と V4-Flash の2モデル構成**で、いずれもオープンソースとして公開された。公式 API では `deepseek-v4-pro` と `deepseek-v4-flash` のモデル ID で即日利用可能になった。",
      "**V4-Pro**: 総パラメータ **1.6 兆**、アクティブパラメータ **49B**（Mixture of Experts）。",
      "**V4-Flash**: 総パラメータ **284B**、アクティブパラメータ **13B**（Mixture of Experts）。",
      "**共通仕様**: **コンテキスト窓 1M トークン**、**最大出力 384K トークン**、**Thinking / Non-Thinking のデュアルモード**を備える。Thinking モードは推論ステップを展開してから回答する設定で、Anthropic の extended thinking、OpenAI の reasoning effort に相当する位置付け。",
      "**ライセンス**: オープンソース（オープンウェイト）。自前推論サーバへの載せ替えが可能で、機微データを外部に出せないユースケースでも導入検討できる。",
      "**提供形態**: プレビュー。DeepSeek は GA 時期を明示していない。Bloomberg は4月26日に「**正式版の発表は中国製チップへの統合を優先するため延期される**」と CCTV 関連情報を引用して続報を出している。"
    ],
    "primarySources": [
      {
        "title": "DeepSeek V4 Preview Release",
        "site": "DeepSeek API Docs",
        "url": "https://api-docs.deepseek.com/news/news260424"
      }
    ]
  },
  "claude-opus-4-6-review": {
    "body": [
      "**Claude Opus 4.6** は Anthropic が2026年Q1に提供していたフラッグシップモデルで、1M トークンのコンテキストウィンドウと高度な推論能力を備える。SWE-Bench Verified で 72.5% を記録し、複雑なバグ修正や大規模リファクタリングにおいて高い自律性を発揮する。拡張思考（Extended Thinking）モードでは、段階的に推論プロセスを展開してから回答を生成するため、難度の高い設計判断やアーキテクチャ分析に向く。**現行のフラッグシップは Opus 4.7（4/16 GA）/ Opus 4.8（5/28 GA）**であり、新規採用では後継モデルを優先することを推奨する。",
      "**コーディング性能**: Claude Code のバックエンドとして長く利用されてきたモデルで、数百ファイル規模のリポジトリを一括で把握した上で整合性のある変更を提案できる。関数呼び出し（Tool Use）にも対応しており、MCP サーバー経由で外部ツールと連携する際の精度が高い。Humanity's Last Exam でも上位スコアを記録し、専門的な推論力は前世代モデルの中でトップ水準だった。後継 Opus 4.7/4.8 はこの基盤を引き継ぎつつ Dynamic Workflows や task budgets を追加している。",
      "**コスト面**: 入力 $15 / 出力 $75（1M トークンあたり）は主要モデルの中では高価格帯。後継の Opus 4.7/4.8 では同じ性能帯で $5/$25 へ大幅値下げされており、価格対性能では新世代が優位。Opus 4.6 を継続利用する積極的理由は限定的だが、既存パイプラインの安定運用のために留め置く選択肢はある。Claude Code の Max プラン（$100〜$200/月）経由なら定額で利用可能。バッチ API は 50% 割引が適用される。",
      "**向いている用途**: 既存パイプラインで Opus 4.6 を採用しており、検証コスト無しで継続したいケース。新規プロジェクトでは Opus 4.7/4.8 への移行を検討すべき。コスト最適化を重視する場合は Sonnet 4.6 との使い分けも有効。",
      "【編集履歴】",
      "・【追記 2026-06-05】後継 Opus 4.7（4/16）/ Opus 4.8（5/28）リリースに伴い、本記事を「前世代フラッグシップのレビュー」として位置付けを明確化。タイトル・excerpt・本文を更新し、新規採用では後継モデルを推奨する旨を追記。"
    ],
    "primarySources": [
      {
        "title": "Claude Models Overview",
        "site": "Anthropic",
        "url": "https://docs.anthropic.com/en/docs/about-claude/models"
      },
      {
        "title": "Claude Opus 4.8 リリース（5/28）",
        "site": "Anthropic",
        "url": "https://www.anthropic.com/news/claude-opus-4-8"
      }
    ]
  },
  "gpt-5-4-review": {
    "body": [
      "**GPT-5.4** は OpenAI が2026年前半にリリースした主力モデル。128K トークンのコンテキストウィンドウを持ち、推論・コーディング・マルチモーダルを単一モデルに統合した設計が特徴。o シリーズの推論能力と GPT シリーズの汎用性を融合しており、明示的な推論モード切り替えなしに高度な問題解決が可能。**現在の最新フラッグシップは GPT-5.5（4/23 リリース）**であり、エージェント・コーディング・コンピュータ使用に最適化された後継世代が利用可能。",
      "**エコシステムの強み**: ChatGPT、Codex、API の三層で利用でき、特に Codex との組み合わせではクラウドサンドボックス上での並列タスク実行が可能。API 経由では関数呼び出し、構造化出力（Structured Outputs）、リアルタイム音声にも対応する。開発者ツールとしての完成度が高く、広いエコシステムを持つのが OpenAI の優位点。GPT-5.5 へ移行することでエージェント関連の精度向上を享受できる。",
      "**コストパフォーマンス**: 入力 $2.50 / 出力 $10（1M トークンあたり）は Opus 4.6（$15/$75）の約 1/6〜1/7 で、性能対コストのバランスが優れている。ChatGPT Plus（$20/月）で日常利用、API で本番ワークロードという二段構えが取れる。GPT-5.4 mini（$0.40/$1.60）との使い分けでさらにコスト最適化が可能。GPT-5.5 は Artificial Analysis Coding Index で「半額の SOTA」を公称しており、さらにコスパが改善している。",
      "**注意点**: コンテキストウィンドウは 128K で、Opus の 1M や Gemini の 2M と比べると短い。大規模リポジトリの一括分析では分割が必要になる場合がある。また、データプライバシーの面では API 利用時のデータ保持ポリシーを確認する必要がある。新規採用では GPT-5.5 を第一候補に検討するのが望ましい。",
      "【編集履歴】",
      "・【追記 2026-06-05】GPT-5.5 リリース（4/23）に伴い、「最新フラッグシップ」表記を「2026年Q1の主力モデル」に訂正。後継モデルへの言及を追加。"
    ],
    "primarySources": [
      {
        "title": "OpenAI Platform",
        "site": "OpenAI",
        "url": "https://platform.openai.com/docs/models"
      },
      {
        "title": "Introducing GPT-5.5",
        "site": "OpenAI",
        "url": "https://openai.com/index/gpt-5-5/"
      }
    ]
  },
  "gemini-3-1-pro-review": {
    "body": [
      "**Gemini 3.1 Pro** は Google DeepMind が提供するフラッグシップモデルで、2M トークンという業界最大のコンテキストウィンドウが最大の差別化ポイント。数百ファイル規模のモノリポジトリや長大なドキュメント群をそのまま入力でき、「プロジェクト全体の依存関係を分析して」といったリクエストに対してコンテキスト切れなく応答できる。",
      "**Google エコシステムとの統合**: Vertex AI、Google Cloud、Firebase とのネイティブ統合が充実しており、GCP ユーザーにとっては導入のハードルが低い。Gemini CLI（Apache 2.0 の OSS）を通じたターミナル利用も可能で、Gemini API の無料枠（Flash モデルで 1 日 1,000 リクエスト）は個人開発者に好評。Google AI Studio での無料プロトタイピングも可能。",
      "**コスト面の優位**: 入力 $1.25 / 出力 $5（1M トークンあたり）は Opus の約 1/12〜1/15 と大幅に安い。2M コンテキストの巨大な入力を低コストで処理できるため、大量のドキュメント分析やコードベーススキャンにおけるコスパは突出している。Flash モデル（$0.075/$0.30）を組み合わせればさらに低コスト運用が可能。",
      "**注意点**: コーディング特化のベンチマーク（SWE-Bench 等）では Opus 4.6 にやや劣る。エージェント的な自律実行の精度もまだ発展途上で、Gemini CLI のエージェント機能は Claude Code ほど成熟していない。また、プライバシー設定が CLI 内に組み込まれていない点は企業利用で課題となる。"
    ],
    "primarySources": [
      {
        "title": "Gemini API",
        "site": "Google",
        "url": "https://ai.google.dev/gemini-api/docs"
      }
    ]
  },
  "kimi-k2-5-review": {
    "body": [
      "**Kimi K2.5** は中国の Moonshot AI が開発した1兆パラメータ規模の Mixture-of-Experts（MoE）モデル。256K トークンのコンテキストウィンドウを持ち、Humanity's Last Exam で Opus 4.6 を上回るスコアを記録したことで注目を集めた。Apache 2.0 ライセンスのオープンウェイトで公開されており、自社サーバーでのホスティングも可能。",
      "**性能の特徴**: 学術的推論と複雑な問題解決に強く、特に数学・科学分野のベンチマークで高スコアを記録している。MoE アーキテクチャにより、推論時に活性化されるパラメータは全体の一部で済むため、1兆パラメータの規模に対してレイテンシが比較的低い。Cursor が独自モデル Composer 2 のベースに K2.5 を採用したことからも、コーディング能力の高さがうかがえる。",
      "**コストとアクセス**: API 料金は非常に低価格で、Opus の 1/10 以下で利用可能。オープンウェイトであるため、自社インフラでの運用もライセンス上問題ない。ただし、Moonshot AI の API サービスは中国リージョンが中心で、日本やグローバルでのレイテンシや SLA は大手クラウドプロバイダーほど安定していない場合がある。",
      "**注意点**: 中国企業が開発したモデルであるため、データの取り扱いやコンプライアンスの面で企業利用には事前確認が必要。ドキュメントや SDK の日本語・英語対応も大手に比べると限定的。ローカルホスティングの場合は GPU リソースの確保も検討が必要。"
    ],
    "primarySources": [
      {
        "title": "Kimi K2.5",
        "site": "Moonshot AI",
        "url": "https://kimi.ai/"
      }
    ]
  },
  "claude-sonnet-4-6-review": {
    "body": [
      "**Claude Sonnet 4.6** は Anthropic の**前世代 Sonnet** モデルで、後継の Claude Sonnet 5 が2026年6月30日にリリースされた（[Sonnet 5 リリース](?a=anthropic-claude-sonnet-5-agentic-cheap-2026)、[Sonnet 5 レビュー](?a=claude-sonnet-5-review)）。新規採用では Sonnet 5 を第一候補にすべき状況となっている。ただし互換性維持や特定のユースケースでは Sonnet 4.6 も現役価値がある。",
      "**性能ベンチマーク（後継との比較）**: SWE-bench Pro で Sonnet 4.6 は **58.1%**、Sonnet 5 は **63.2%**（+5.1pt）。GDPval-AA v2 では Sonnet 5 が Opus 4.8（1615）を上回る 1618 を記録するなど、後継 Sonnet 5 は Opus 4.8 に肉薄する性能で、Sonnet 4.6 との差は明確。",
      "**得意領域（当時）**: 1M コンテキスト、日常のコーディング（定型的なバグ修正、テスト生成、ドキュメント作成、中規模のリファクタリング）を高速に処理できるバランス型モデル。Cursor や Windsurf のデフォルトモデルとして広く利用され、レスポンス速度が Opus より速く、インタラクティブな対話型開発に適していた。",
      "**継続利用する場合の判断基準**: (1) 既存パイプラインで Sonnet 4.6 を採用しており、検証コスト無しで継続したいケース、(2) Sonnet 5 の新トークナイザ（同じテキストで 1.0-1.35倍多くカウント）による実コスト予測の不透明さを避けたい場合、(3) Claude Code や Cursor 等の周辺ツールが Sonnet 5 完全対応前の過渡期に安定運用したい場合。",
      "**料金**: 入力 $3 / 出力 $15（1M トークンあたり）。**Sonnet 5 の 8/31 までの導入価格 $2/$10** と比較すると割高。9/1 以降は Sonnet 5 の通常料金 $3/$15 で並ぶが、それでも性能差から Sonnet 5 の選択が推奨される。",
      "**エンタープライズでの使い分け**: バッチ API（50% 割引）と組み合わせれば、大量処理では依然として競争力がある。ただし新規プロジェクトでは Sonnet 5 の**エージェント能力**（Anthropic 曰く「これまでで最もエージェント的な Sonnet」）が優位で、複雑なマルチステップワークフロー・ブラウザ自動化・Claude Code 統合の面で差が拡大している。",
      "【編集履歴】",
      "・【追記 2026-07-07】後継 Claude Sonnet 5（6/30 GA）リリースに伴い、本記事を「前世代 Sonnet レビュー」として位置付けを明確化。タイトル・excerpt・本文を更新し、Sonnet 5 との比較（SWE-bench Pro、価格）を追加。新規採用では Sonnet 5 を推奨する旨を明記。rating 4.0→3.5、lastReviewed 更新。"
    ],
    "primarySources": [
      {
        "title": "Claude Models Overview",
        "site": "Anthropic",
        "url": "https://docs.anthropic.com/en/docs/about-claude/models"
      },
      {
        "title": "Introducing Claude Sonnet 5",
        "site": "Anthropic",
        "url": "https://www.anthropic.com/news/claude-sonnet-5"
      }
    ]
  },
  "claude-sonnet-5-review": {
    "body": [
      "**Claude Sonnet 5** は Anthropic が2026年6月30日に GA した新ミッドレンジ・フラッグシップモデル。「これまでで最もエージェント的な Sonnet」を Anthropic が公表しており、**プランニング・ブラウザやターミナル使用・自律実行**を Sonnet サイズで実現する。「数ヶ月前まで大型で高価なモデルが必要だった水準の自律性を Sonnet サイズで」というのが位置付け。",
      "**性能ベンチマーク**: SWE-bench Pro **63.2%**（Sonnet 4.6: 58.1% → +5.1pt、Opus 4.8: 69.2%）。**GDPval-AA v2（知識労働）では 1618 で Opus 4.8（1615）を上回り**、Humanity's Last Exam（ツール利用）は 57.4%（Opus 4.8: 57.9%）でほぼ互角、プロンプトインジェクション安全性でも Opus 4.8 と同水準。「Sonnet で Opus 級」がほぼ現実に。",
      "**料金**: **8月31日までの導入価格が $2/$10 per 1M tokens**、以降は **$3/$15**（Sonnet 4.6 と同じ）。ただし新トークナイザは同じテキストで **1.0〜1.35 倍**多くトークンを数える傾向があり、単純換算では実コストの読みを誤る可能性がある。それでも実運用では Opus 4.8（$5/$25）や Claude Fable 5（$10/$50）に対して大幅な優位。",
      "**Adaptive Thinking と 1M コンテキスト**: 1M トークンのコンテキストは Sonnet 4.6・Opus 系と同水準。**Adaptive Thinking が常時オン**で、Claude Code や API では **エフォートのデフォルトが high** に設定されている。最大出力は 128K、batch-API のベータヘッダで最大 300K トークン出力まで拡張可能。訓練データのカットオフは **2026年1月**まで延長。",
      "**利用可能プラットフォーム**: **claude.ai の Free / Pro のデフォルト**モデルとして即日切替。Max・Team・Enterprise でも利用可能。API に加え、[Claude Code](?a=claude-code)、[Cursor](?a=cursor-editor)、VS Code、[GitHub Copilot CLI](?a=github-copilot-cli) でも即日採用。マルチプラットフォーム展開の速度が特筆される。",
      "**強み**:",
      "**(1) エージェント能力**: プランニング・ツール呼び出し・結果読み取り・継続実行を人間の介入なしで長時間維持。",
      "**(2) コスパ**: 導入価格 $2/$10 は Opus 4.8 の 2/5 コスト。Fable 5 の 1/5 で 70% 以上の性能を出せる。",
      "**(3) マルチプラットフォーム統合**: Claude Code・Cursor・VS Code・GitHub Copilot が即日対応、実装リスクが低い。",
      "**(4) Adaptive Thinking 標準**: 難易度に応じた推論深さの自動調整。",
      "**注意点**:",
      "**(1) トークナイザ変更**: 同じテキストで 1.0-1.35 倍多くトークンを数える。既存の**予算計画・請求予測が狂う可能性**。",
      "**(2) Fable 5 との差**: SWE-bench Pro で 63.2% vs Fable 5 の 95%（Verified）。**最難関のコーディング・研究タスク**では依然として Fable 5 or GPT-5.6 Sol が優位。",
      "**(3) Anthropic 依存**: OpenAI GPT-5.6 Terra（$2.50/$15）と直接競合、モデル選択がインフラ・ベンダー選択と直結する時代（[SpaceX-Cursor 買収](?a=spacex-cursor-60b-acquisition-anysphere-2026) 参照）。",
      "**AI News の推奨**: **新規プロジェクトの第一候補**。既存 Sonnet 4.6 パイプラインは Sonnet 5 への移行を検証すべき。Opus 4.8 の一部ユースケースは Sonnet 5 で置換可能で、コスト削減効果が大きい。ただし Fable 5 級の性能が必要な場合や、Sonnet 5 のセーフガード（[Fable 5 プロンプト設計ガイド](?a=feature-prompting-claude-fable-5-practical-guide-2026) でも触れた reasoning_extraction 拒絶等）が問題になる用途は個別評価が必要。"
    ],
    "primarySources": [
      {
        "title": "Introducing Claude Sonnet 5",
        "site": "Anthropic",
        "url": "https://www.anthropic.com/news/claude-sonnet-5"
      },
      {
        "title": "System Card: Claude Sonnet 5",
        "site": "Anthropic",
        "url": "https://www.anthropic.com/claude-sonnet-5-system-card"
      },
      {
        "title": "Anthropic launches Claude Sonnet 5 as a cheaper way to run agents",
        "site": "TechCrunch",
        "url": "https://techcrunch.com/2026/06/30/anthropic-launches-claude-sonnet-5-as-a-cheaper-way-to-run-agents/"
      }
    ]
  },
  "claude-fable-5-mythos-5-review": {
    "body": [
      "**Claude Fable 5 と Mythos 5** は Anthropic が2026年6月9日にリリースした Mythos クラスの一般公開モデル。Fable 5 は「Anthropic 史上最強の一般公開モデル」を公称、**SWE-bench Verified で 95%** を達成し Opus 4.8（88.6%）を上回った。Mythos 5 は Project Glasswing 経由の限定公開のまま。ただし、6/12〜6/30 の**19日間の輸出規制**を経て、7/1 に**制限付きで復活**（[Fable 5 復活](?a=anthropic-claude-fable-5-return-safeguards-limits-2026)）した経緯を持つ。",
      "**性能ベンチマーク**: Fable 5 は SWE-bench Verified 95%、Stripe の初期テストでは「本来チーム全体で2ヶ月以上かかるコードベースマイグレーションを1日で完了」と報告。公開ベンチマークの大半で SOTA、ソフトウェアエンジニアリング・ナレッジワーク・視覚・科学研究などで最上位。Mythos 5 は公開値なし。",
      "**復活後の使用制限（重要）**:",
      "**(1) 週次使用枠 50% まで**（Pro/Max/Team/一部 Enterprise、7/7 まで、以降は使用クレジット制）",
      "**(2) 新 classifier が 99% ジェイルブレイクをブロック** → benign なコーディング/セキュリティ要求も過剰ブロックの懸念（PCWorld: ユーザー激怒）",
      "**(3) AWS Bedrock / GCP Vertex AI / Azure Foundry は段階的復活**",
      "**(4) 米政府の継続監督**（3点約束: セキュリティリスク検知、リリースプロトコル協力、悪意活動報告）",
      "**セーフティ・クラシファイア注意**（詳細は [Fable 5 プロンプト設計ガイド](?a=feature-prompting-claude-fable-5-practical-guide-2026) 参照）:",
      "**(a) オフェンシブサイバーセキュリティ**: エクスプロイト・マルウェア・攻撃ツール構築",
      "**(b) 生物学・生命科学コンテンツ**: ラボ手順・分子機構等（Claude Science で緩和される可能性）",
      "**(c) モデルのサマリ化された思考の抽出**",
      "**料金**: $10/$50 per 1M tokens。前世代 Mythos Preview の半額以下だが、Sonnet 5（$2/$10 → $3/$15）や Opus 4.8（$5/$25）と比べると高価。**「最強を必要とする限定タスク用途」**にターゲットが絞られる料金設定。",
      "**プロンプト設計の推奨**: [Fable 5 プロンプト設計ガイド](?a=feature-prompting-claude-fable-5-practical-guide-2026) で全訳した Anthropic 公式推奨に従うこと。長時間実行（数時間〜数日）が現実的になるため、クライアントタイムアウト・非同期実行・進捗根拠付け・拒否時の Opus 4.8 フォールバックを事前に組み込む必要がある。**旧来の Opus 4.8 向けプロンプトは Fable 5 では過度に規範的で性能を下げる**ため、リファクタが必要。",
      "**強み**:",
      "**(1) 世代最高の性能**: SWE-bench 95% は Sonnet 5・Opus 4.8・GPT-5.5 を上回る。",
      "**(2) 長時間自律実行**: 数日〜週単位の目標指向タスクを維持できる。",
      "**(3) 視覚理解の強化**: 密な技術図・スクリーンショット処理が高精度。",
      "**注意点**:",
      "**(1) 使用制限**: 週次50%・7/7 期限・段階的クラウド復活で計画が立てにくい。",
      "**(2) 過剰ブロック**: セキュリティ研究・脆弱性検証・生命科学タスクが正当な用途でも拒否される。",
      "**(3) 米政府監督**: 将来的な制限追加リスク（[White House 自主基準](?a=white-house-voluntary-frontier-ai-standards-openai-anthropic-google-2026) 参照）。",
      "**(4) 料金**: Sonnet 5・Opus 4.8 との性能差に見合うかは用途次第。",
      "**AI News の推奨**: **最難関コーディング・自律実行が必要な限定用途**では第一候補。ただし多くの日常ワークフローには **Sonnet 5**（[Sonnet 5 レビュー](?a=claude-sonnet-5-review)）が現実的な選択肢。Fable 5 導入時は**拒否時の Opus 4.8 フォールバック**を必ず設定すること。GPT-5.6 Sol（[GPT-5.6 レビュー](?a=gpt-5-6-review)）の一般公開後は再評価が必要。"
    ],
    "primarySources": [
      {
        "title": "Claude Fable 5 and Claude Mythos 5",
        "site": "Anthropic",
        "url": "https://www.anthropic.com/news/claude-fable-5-mythos-5"
      },
      {
        "title": "Redeploying Claude Fable 5",
        "site": "Anthropic",
        "url": "https://www.anthropic.com/news/redeploying-fable-5"
      },
      {
        "title": "Prompting Claude Fable 5",
        "site": "Anthropic Docs",
        "url": "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-fable-5"
      }
    ]
  },
  "gpt-5-6-review": {
    "body": [
      "**GPT-5.6** は OpenAI が2026年6月25日に限定プレビュー公開した次世代フラッグシップの3バリアント体制モデル。**Sol / Terra / Luna** の階層構造で、用途別の使い分けを OpenAI 自身が標準化した意欲的な戦略（[GPT-5.6 プレビュー](?a=openai-gpt-5-6-sol-terra-luna-preview-2026)）。米国政府事前共有経由で**約20組織限定**、一般公開は7月中〜下旬の見込み。",
      "**3バリアントの使い分け**:",
      "**(1) Sol（$5/$30）**: 最難関タスク向けフラッグシップ。複雑コーディング・セキュリティ研究など。Ultra thinking モードでサブエージェント活用。",
      "**(2) Terra（$2.50/$15）**: daily driver、大量業務向け。カスタマーサポート・社内ツール・文書解析。GPT-5.5 比で半額。",
      "**(3) Luna（$1/$6）**: 軽量タスク向け（要約・ドラフト・定型自動化）。**フロンティアモデル最安級**。",
      "**性能ベンチマーク**: **Sol Ultra が TerminalBench 2.1 で 91.91%** の record-high を記録、Sol max は 88.76%。これは Claude Mythos 5（88.0%）と Fable 5（84.3%）を上回り、コーディング領域でフロンティアの最上位に立った。旧世代 GPT-5.5 の 83.4% から大幅アップ。",
      "**1.5M コンテキスト**: GPT-5.6 シリーズは **1.5M トークンのコンテキストウィンドウ**を備える見込み（GPT-5.5 の 1M、Codex の 400K を超える業界最大級）。訓練データのカットオフは **2026年5月まで**延長。4月の「Where the Goblins Came From」事後分析で記録されたアラインメント失敗に対応する**再設計された報酬監査パイプライン**も搭載。",
      "**Ultra モードの仕組み**: 高得点の決定打となった **ultra thinking モード**は、**サブエージェントを動的に活用**して複雑な計画・反復・ツール協調を高速化する。Anthropic Opus 4.8 の Dynamic Workflows（[Opus 4.8](?a=anthropic-claude-opus-4-8-dynamic-workflows-2026)）や [Sakana Fugu レビュー](?a=sakana-fugu-review) と並ぶ「マルチエージェント・オーケストレーション層」を、モデル内蔵で実現する点が特徴。",
      "**強み**:",
      "**(1) TerminalBench SOTA**: Sol Ultra が Fable 5・Mythos 5 を上回る初の GPT。",
      "**(2) 3階層戦略**: 用途別使い分けが明確、コスト最適化しやすい。",
      "**(3) 1.5M ctx**: 業界最大級のコンテキスト、大規模コードベース・長文書に強い。",
      "**(4) Luna の破格**: $1/$6 は Google Gemini 3.5 Flash（$0.075/$0.30）以外でフロンティア最安。",
      "**(5) 内蔵オーケストレーション**: 外付け Sakana Fugu 等のトークン消費 4-6倍問題を回避。",
      "**注意点**:",
      "**(1) 限定プレビュー**: 約20組織のみ。一般公開までタイムラグ。",
      "**(2) 米政府事前共有**: [White House 自主基準](?a=white-house-voluntary-frontier-ai-standards-openai-anthropic-google-2026) の枠組みで、初期プレビュー→GA まで数週間のギャップが恒常化。",
      "**(3) MODEL_COMPARISON 変動**: Sol Ultra > Sol > Mythos 5 > Sol Terra > Fable 5 > GPT-5.5 の順位がコーディング領域で確定、Anthropic 側の対応が注目される。",
      "**(4) OpenAI 依存**: [OpenAI が政府に5%出資提示](?a=openai-us-government-5-percent-stake-42b-offer-2026) や政府監督との関連で、将来的なアクセス条件変更のリスクがある。",
      "**AI News の推奨**: **限定プレビューアクセスがある組織**は Sol Ultra を最難関タスクに、Terra を日常運用に、Luna を大量バッチにと3階層で最適化する。**一般公開まで**は Sonnet 5・Fable 5・Opus 4.8 で代替可能で、7月中〜下旬の GA を待つのが現実的。GA 後は **[Sonnet 5](?a=claude-sonnet-5-review) との直接比較レビュー**を予定。"
    ],
    "primarySources": [
      {
        "title": "Previewing GPT-5.6 Sol: a next-generation model",
        "site": "OpenAI",
        "url": "https://openai.com/index/previewing-gpt-5-6-sol/"
      },
      {
        "title": "OpenAI unveils GPT-5.6 Sol, Terra and Luna models",
        "site": "VentureBeat",
        "url": "https://venturebeat.com/technology/openai-unveils-gpt-5-6-sol-terra-and-luna-models-but-only-accessible-to-limited-preview-partners-for-now-per-us-gov"
      },
      {
        "title": "Summary of METR's predeployment evaluation of GPT-5.6 Sol",
        "site": "METR",
        "url": "https://metr.org/blog/2026-06-26-gpt-5-6-sol/"
      }
    ]
  },
  "sakana-fugu-review": {
    "body": [
      "**Sakana Fugu** は東京の Sakana AI が2026年6月22日にリリースしたマルチエージェント・オーケストレーションシステム。**OpenAI 互換の単一 API エンドポイント**として提供され、内部で 7B の Conductor モデルが GPT-5.5・Claude Opus・Gemini 3.1 Pro を動的にルーティングする。Google Brain 出身の David Ha・Llion Jones（Transformer 共著者）共同創業の同社が、フロンティアモデル「使い分け」を1モデル API として抽象化した実装（[Sakana Fugu 詳細](?a=sakana-ai-fugu-multi-agent-orchestration-2026)）。",
      "**Conductor アーキテクチャ**: 中核は **7B パラメータの Conductor モデル**で、ICLR 2026 で発表された2本の論文（**TRINITY** と **The Conductor**）を基礎にしている。Conductor は「どのモデルを起動するか」「エージェント間でどう通信するか」「結果をどう合成するか」を学習し、タスクごとに最適なモデル組合せを動的に決める。**ベンダーロックインを構造的に回避**できる設計。",
      "**ベンチマーク勝敗**: 領域別の強弱が明確。",
      "**勝利領域**: **LiveCodeBench で 93.2**（Fable 5 の 89.8 を上回る）、CharXiv Reasoning、Humanity's Last Exam、4つのコーディングベンチマークで首位、トレーディングベンチマークで **+19.43% mean portfolio return**。",
      "**敗北領域**: **SWE-Bench Pro は 73.7**（Fable 5 の 80.0 に敗北）、MRCRv2 長文脈想起は 93.6 で GPT-5.5（94.8）に届かず、CTI-REALM サイバーセキュリティは Opus 4.8（69.6）に劣る。",
      "**料金**: Fugu Ultra は **$5/$30 per 1M tokens**（入力/出力）、キャッシュ入力は $0.50/1M。272K を超えるロングコンテキストは $10/$45/$1.00 に上昇。サブスクリプションは $20/$100/$200 の3階層。",
      "**「トークン消費 4-6倍」問題（重要）**: 単純な料金表は安く見えるが、**実態はそう単純ではない**。マルチエージェント・オーケストレーションの構造上、**1リクエストで単一モデル直接呼び出しの 4-6 倍のトークン**を消費する。Sakana の API レスポンスでは `token_details` フィールドで「ユーザー可視のモデル出力」と「オーケストレーション・トークン」が分離して返るが、**両者とも同じレートで請求**される。結果として実コストはケースによって Fable 5・Opus 4.8 単体使用と**同等以上**になる可能性が高い。",
      "**3層コスト構造**: Sakana は内部で Anthropic・OpenAI・Google の API に**フルレートで料金を支払い**、その上にオーケストレーション・マージンを乗せている。つまり Fugu のコストは「**裏側の単一モデル API コスト + Sakana マージン + 多重呼び出しオーバーヘッド**」の3層構造。ベンダーロックイン回避の対価として「メタ・ベンダーへのロックイン」が発生する点は留意が必要。",
      "**強み**:",
      "**(1) ベンダー分散**: 単一の Anthropic・OpenAI 障害から自動回避。",
      "**(2) 領域別最適化**: タスクごとに最適モデルを自動選択、開発者が選ぶ手間を削減。",
      "**(3) 日本発**: 日本語対応・国内サポートが期待できる。",
      "**(4) OSS 互換 API**: OpenAI 互換のため既存ツールの改修が最小限。",
      "**注意点**:",
      "**(1) トークン消費 4-6 倍**: 実コストが料金表通りではない。",
      "**(2) 領域別勝敗**: SWE-Bench Pro・MRCRv2・CTI-REALM ではフロンティア単体に敗北、全用途万能ではない。",
      "**(3) メタ・ベンダー依存**: 内部モデルの Anthropic・OpenAI・Google がアクセスを制限した場合の影響。",
      "**(4) [GPT-5.6 レビュー](?a=gpt-5-6-review) との競合**: GPT-5.6 が内蔵 ultra thinking モードでオーケストレーションを提供する時代、外付けサービスの意義が問われる。",
      "**AI News の推奨**: **明示的にベンダー分散が必要な組織**（例: 米国以外の政府・大手企業）や、**モデル選択の自動化を求めるスタートアップ**には有力な選択肢。ただし**実運用のコスト予測**を事前に検証すべきで、単一モデル（[Sonnet 5](?a=claude-sonnet-5-review) 等）との比較 A/B テストが必須。日本のユーザーには [Sakana Fugu 詳細記事](?a=sakana-ai-fugu-multi-agent-orchestration-2026) も参照推奨。"
    ],
    "primarySources": [
      {
        "title": "Sakana Fugu — Multi-agent System as A Model",
        "site": "Sakana AI",
        "url": "https://sakana.ai/fugu/"
      },
      {
        "title": "Sakana AI Launches Sakana Fugu",
        "site": "MarkTechPost",
        "url": "https://www.marktechpost.com/2026/06/22/sakana-ai-launches-sakana-fugu-an-orchestration-model-that-routes-tasks-across-a-swappable-pool-of-frontier-llms/"
      },
      {
        "title": "Japan's 'Sakana Fugu' multiagent AI scores well against Fable 5, GPT 5.5",
        "site": "Nikkei Asia",
        "url": "https://asia.nikkei.com/business/technology/artificial-intelligence/japan-s-sakana-fugu-multiagent-ai-scores-well-against-fable-5-gpt-5.5"
      }
    ]
  },
  "midjourney-v8-review": {
    "body": [
      "**Midjourney V8** は画像生成 AI の分野で最も広く知られるサービスのひとつ。V8 世代では Web UI と API が正式公開され、これまで Discord 限定だったアクセスが大幅に拡張された。フォトリアル、イラスト、抽象表現いずれにおいても業界トップクラスの品質を維持しており、プロンプトからの生成結果の一貫性と美しさは他サービスと比較して頭一つ抜けている。",
      "**Web UI と API**: Web 版は midjourney.com 上で動作し、Discord に不慣れなユーザーでも直感的に利用可能。API はサードパーティアプリやワークフローへの組み込みに対応し、Zapier・Make 等との自動化パイプライン構築も現実的になった。画像エディタ機能（インペインティング、アウトペインティング、バリエーション）もWeb上で完結する。",
      "**料金体系**: Basic（$10/月・約200枚）、Standard（$30/月・無制限リラックス）、Pro（$60/月・高速枠拡大）、Mega（$120/月・大量生成向け）の4プラン。商用利用は有料プランであれば許可されている。API 利用は別途従量課金で、1枚あたりのコストは生成設定により変動する。",
      "**注意点**: 日本語プロンプトへの対応は限定的で、英語で指示した方が精度が高い。また、生成画像の著作権に関する法的整理は各国で進行中であり、クライアントワークでの利用時は商用ライセンス条件を事前に確認する必要がある。リアルタイムの人物生成はコンテンツポリシーにより制限がある。"
    ],
    "primarySources": [
      {
        "title": "Midjourney",
        "site": "Midjourney",
        "url": "https://www.midjourney.com/"
      }
    ]
  },
  "runway-gen5-review": {
    "body": [
      "**Runway Gen-5** は動画生成 AI の分野で最も実績のあるサービス。Gen-5 世代では物理シミュレーションの精度が大幅に向上し、布の揺れ、水の流れ、光の反射といった自然現象のリアリティが飛躍的に改善された。テキスト・画像・動画いずれからも動画を生成でき、最長 40 秒のクリップ出力に対応する。",
      "**プロ向け機能**: Motion Brush（部分的な動きの指定）、Camera Control（カメラワークの制御）、Act-One（顔の表情転写）など、映像制作者向けの制御機能が充実している。ハリウッドの VFX スタジオやCM制作会社での採用実績があり、プロフェッショナルのワークフローに組み込まれている。生成した動画のアップスケール・フレーム補間もプラットフォーム内で完結する。",
      "**料金**: Basic（$12/月・125クレジット）、Standard（$28/月・625クレジット）、Pro（$76/月・2250クレジット）、Unlimited（$188/月）。動画生成はクレジット消費が大きく、Gen-5 の高品質設定では1クリップ10〜40クレジットを消費する。本格的な制作利用には Pro 以上が現実的で、コスパ評価はやや厳しい。",
      "**注意点**: 生成速度は高品質設定で数分かかり、リアルタイム用途には向かない。また、人物の動画生成ではコンテンツポリシーが厳格で、ディープフェイク的な利用は禁止されている。API は提供されているが、価格が高いため大量バッチ処理には不向き。"
    ],
    "primarySources": [
      {
        "title": "Runway",
        "site": "Runway",
        "url": "https://runwayml.com/"
      }
    ]
  },
  "suno-v5-review": {
    "body": [
      "**Suno V5** はテキストプロンプトから歌詞・メロディ・アレンジ・ボーカルまで含むフル楽曲を一括生成するサービス。音楽制作の経験がなくても「90年代の日本のシティポップ風」のような自然言語指示で楽曲を作れる。V5 世代では音質が大幅に向上し、プロの楽曲と聴き比べても違和感が少ないレベルに達している。",
      "**使いやすさ**: Web UI は極めてシンプルで、テキスト入力→生成ボタンの2ステップで楽曲が完成する。歌詞のカスタム入力、ジャンル・ムードの指定、インストゥルメンタルモードにも対応。生成時間は1曲あたり30秒〜1分程度で、リアルタイムに近い体験が得られる。日本語の歌詞にも対応しており、日本語ボーカルの品質も実用レベルに達している。",
      "**料金**: 無料枠（1日5回・非商用）、Pro（$10/月・500クレジット・商用可）、Premier（$30/月・2000クレジット）。商用利用は Pro 以上で許可されるが、生成楽曲の著作権の帰属については議論が続いている。BGM やプロトタイプ用途では十分なコスパ。",
      "**注意点**: API は現時点で一般公開されておらず、外部アプリとの統合は限定的。楽曲の細かな編集（特定パートの差し替え、ミキシング調整）はできず、生成結果をそのまま使う前提の設計。プロの音楽制作ツール（DAW）との連携もまだ発展途上。著作権・ライセンスの法的整理は各国で進行中。"
    ],
    "primarySources": [
      {
        "title": "Suno",
        "site": "Suno",
        "url": "https://suno.com/"
      }
    ]
  },
  "kling-ai-review": {
    "body": [
      "**Kling AI** は中国のショート動画プラットフォーム **快手（Kwai/Kuaishou）** が開発する動画生成サービス。テキストや画像から最長2分・1080p の動画を生成でき、無料枠の充実度が他サービスと比較して突出している。日本を含むグローバル向けに klingai.com でアクセス可能。",
      "**リップシンクと顔表現**: Kling の大きな特徴はリップシンク（口の動きと音声の同期）の精度の高さ。音声ファイルをアップロードすると、生成キャラクターが自然に話しているような動画を作成できる。表情のバリエーションも豊かで、広告やSNSコンテンツ制作での実用性が高い。",
      "**料金と無料枠**: 無料ユーザーでも毎日一定数の生成が可能で、試用のハードルが非常に低い。有料プランは月額数ドルからで、大量生成向けのクレジットパックも用意されている。Runway や Pika と比較すると、同程度の品質を大幅に低いコストで得られるケースが多い。",
      "**注意点**: 中国企業のサービスであるため、データの保存先やプライバシーポリシーについて企業利用では事前確認が必須。コンテンツポリシーは中国の規制に準拠しており、生成可能なコンテンツの範囲が他サービスと異なる場合がある。API の一般公開は限定的で、ワークフロー統合には課題が残る。"
    ],
    "primarySources": [
      {
        "title": "Kling AI",
        "site": "Kling",
        "url": "https://klingai.com/"
      }
    ]
  },
  "nano-banana-2-review": {
    "body": [
      "**Nano Banana 2**（技術名 Gemini 3.1 Flash Image）は Google DeepMind が2026年2月に発表した画像生成モデル。Pro 寄りの品質を Flash 級の速度で提供するのがコンセプトで、Gemini アプリ、Google 検索、Gemini API / AI Studio / Vertex AI、動画制作プラットフォーム Flow など幅広いチャネルからアクセスできる。",
      "**性能面の特徴**: Gemini の世界知識と検索グラウンディングを活かした被写体表現、画像内テキストの精密描画と翻訳・ローカライズ、最大5キャラクターの一貫性維持、単一ワークフロー内で14オブジェクトまでの忠実度維持に対応。512px から 4K までの解像度・アスペクト比を柔軟に指定できる。",
      "**コストと無料枠**: Gemini アプリ経由では無料ユーザーでも利用可能。API は `gemini-3.1-flash-image-preview` のモデル ID で提供され、Flash ベースのため料金は低い。Flow ユーザーはクレジット 0 で利用できるとされており、Google エコシステム内での利用コストの低さは際立っている。",
      "**注意点**: Flow の既定画像モデルであるため「動画 AI の新モデル」と誤解されやすいが、あくまで画像生成・編集モデル。テキスト→動画は Veo 系が別ライン。また、プレビュー段階の API もあるため、本番利用前に GA ステータスと SLA を確認する必要がある。生成物には SynthID と C2PA Content Credentials が付与される。"
    ],
    "primarySources": [
      {
        "title": "Nano Banana 2: Combining Pro capabilities with lightning-fast speed",
        "site": "Google The Keyword",
        "url": "https://blog.google/innovation-and-ai/technology/ai/nano-banana-2/"
      }
    ]
  },
  "gpt-image-review": {
    "body": [
      "**GPT Image 1.5** は OpenAI の画像生成モデルで、ChatGPT との統合が最大の強み。テキストプロンプトを入力するだけで即座に画像を生成でき、会話の文脈を踏まえた修正・バリエーション生成も自然にできる。画像生成の専門知識がなくても使える手軽さは、全モデル中トップクラス。",
      "**テキスト描画の精度**: GPT Image の最大の差別化ポイントは画像内テキストの正確さ。ポスター、看板、ロゴに含まれる文字をプロンプト通りに描画する精度が高く、マーケティング素材や SNS 投稿の作成に強い。複雑な構図やオブジェクトの空間配置への追従度も評価されている。",
      "**料金と利用方法**: ChatGPT Plus（$20/月）以上で利用可能。API 経由での呼び出しにも対応しており、アプリへの組み込みも可能。ただし、Midjourney や Flux と比較すると 1 枚あたりの API コストはやや高め。大量生成にはコスト面での検討が必要。",
      "**注意点**: アート性やスタイルの細かな制御では Midjourney に及ばない場面がある。また、フォトリアル系では Flux 2 のほうが品質が安定しているケースも。ChatGPT に統合されているため手軽だが、プロの制作ワークフロー（レイヤー操作、細部の修正）には別ツールとの併用が前提になる。"
    ],
    "primarySources": [
      {
        "title": "OpenAI — Images / API documentation",
        "site": "OpenAI",
        "url": "https://platform.openai.com/docs/guides/images"
      }
    ]
  },
  "flux-2-review": {
    "body": [
      "**Flux 2** は Black Forest Labs（BFL）が開発する画像生成モデル。Stable Diffusion の元開発者が設立した企業で、フォトリアル系の画像生成においてレイテンシと品質のバランスが高く評価されている。Pro / Dev / Schnell の3ティアで提供され、用途と予算に応じた選択が可能。",
      "**フォトリアルの品質**: 人物、風景、プロダクトフォトなどのフォトリアル系で安定した品質を発揮する。特に肌の質感、照明の自然さ、被写界深度の表現が優れており、ストックフォト的な用途に向く。LoRA（Low-Rank Adaptation）によるファインチューニングにも対応しており、特定のスタイルやブランドに合わせたカスタマイズが可能。",
      "**利用方法とコスト**: BFL の API から直接利用するほか、Replicate や fal.ai などのサードパーティプラットフォーム経由でも利用可能。Schnell（高速版）は比較的低コストで大量生成に向き、Pro は最高品質だが生成時間とコストが増える。オープンウェイト版（Dev/Schnell）はローカル実行も可能。",
      "**注意点**: Midjourney や GPT Image と比較すると、ユーザー向けの統合 UI が弱く、API 利用が前提となる場面が多い。アート性やクリエイティブな表現では Midjourney に劣る。また、BFL はスタートアップであり、大手と比較してサポート体制や長期的な安定性には不確実性がある。"
    ],
    "primarySources": [
      {
        "title": "Black Forest Labs",
        "site": "BFL",
        "url": "https://bfl.ai/"
      }
    ]
  },
  "veo-review": {
    "body": [
      "**Veo** は Google DeepMind が開発する動画生成モデルで、テキスト・画像・動画からの動画生成に対応する。4K 解像度での出力が可能で、長尺のクリップ生成にも対応。物理シミュレーションの精度が世代ごとに改善されており、水流や布の動き、光の反射といった自然現象の表現力が向上している。",
      "**Google エコシステムとの統合**: Vertex AI を通じたエンタープライズ利用が可能で、SynthID による電子透かし、C2PA Content Credentials、安全フィルタが標準搭載されている。Google Cloud の監査ログやアクセス制御と組み合わせることで、企業のコンプライアンス要件を満たしやすい。Flow プラットフォーム上でも利用可能。",
      "**Runway との比較**: Runway Gen-5 がプロの映像制作者向けに Motion Brush や Act-One といった細かな制御機能を揃えているのに対し、Veo は Google Cloud インフラとの統合やエンタープライズ向け機能で差別化している。映像のクリエイティブ制御では Runway が一歩先だが、大規模な API バッチ処理やセキュリティ要件ではVeo が有利。",
      "**注意点**: 一般向けの UI は Flow 経由に限られ、Runway や Kling のような独立したWeb アプリは提供されていない。クリエイター個人が気軽に試す場合のハードルは高め。また、バージョン番号やモデル ID が複数あるため、API 利用時は公式ドキュメントで正確な仕様を確認する必要がある。"
    ],
    "primarySources": [
      {
        "title": "Veo — Google DeepMind",
        "site": "Google DeepMind",
        "url": "https://deepmind.google/models/veo/"
      }
    ]
  },
  "pika-review": {
    "body": [
      "**Pika** はテキストや画像から短い動画クリップを生成するサービスで、手軽さと楽しさを重視した設計が特徴。Web UI がシンプルで直感的なため、動画制作の経験がなくても数クリックで動画を作れる。Runway が映像制作のプロ向けに特化しているのに対し、Pika は SNS コンテンツやカジュアルな制作に焦点を当てている。",
      "**エフェクト機能**: Pika の独自性はユニークなエフェクト機能にある。画像を食べる・溶かす・爆発させるといった物理的な変形エフェクトや、スタイル変換を適用して既存の画像・動画を変化させることができる。TikTok や Instagram のリール用コンテンツ制作で人気がある。",
      "**料金**: 無料枠で基本的な動画生成が試せる。Standard（$8/月）で商用利用が可能になり、Pro（$28/月）で高速生成と拡張機能を利用できる。Runway と比較すると大幅に安く、カジュアルな利用には十分なコスパ。",
      "**注意点**: 長尺動画の生成や高解像度の映像品質では Runway や Veo に及ばない。映像制作のプロが本番素材として使うには品質面で物足りない場合がある。API は限定的で、大規模なワークフロー統合には向かない。あくまで「手軽に動画を作る」ツールとしての位置づけ。"
    ],
    "primarySources": [
      {
        "title": "Pika",
        "site": "Pika",
        "url": "https://pika.art/"
      }
    ]
  },
  "udio-review": {
    "body": [
      "**Udio** は Suno と並ぶ音楽生成 AI サービスで、元 Google DeepMind の研究者が設立。テキストプロンプトからフル楽曲を生成する基本コンセプトは Suno と同じだが、音質のクリアさと楽曲構成の自然さで差別化を図っている。特にインストゥルメンタルの生成品質が高く、映画音楽やゲーム BGM 的なジャンルで評価されている。",
      "**Suno との違い**: Suno が「誰でも楽曲を作れる手軽さ」を前面に出しているのに対し、Udio はより音楽的に洗練された出力を目指す傾向がある。楽曲内の展開（イントロ→バース→サビ→ブリッジ）の構成力や、複数楽器のミックスバランスで Udio のほうが自然に聞こえるケースが多い。一方、UI のシンプルさや日本語ボーカルの品質では Suno に軍配が上がる。",
      "**著作権とライセンス**: 2025年末にかけて大手レーベルとの訴訟・和解・ライセンス交渉が報じられており、2026年時点では商用利用のルールが整備途上にある。利用規約と楽曲の帰属は最新のヘルプページで確認する必要がある。企業の広告BGM等で使う場合はライセンス条件の精査が特に重要。",
      "**注意点**: API は一般公開されておらず、外部ツールとの統合は限定的。生成楽曲のパート別編集やDAW連携もまだ未対応。Suno と同様、生成結果をそのまま使う前提の設計で、細かなミキシング調整はできない。"
    ],
    "primarySources": [
      {
        "title": "Udio",
        "site": "Udio",
        "url": "https://www.udio.com/"
      }
    ]
  },
  "stable-audio-review": {
    "body": [
      "**Stable Audio** は Stability AI が開発する音楽・効果音生成モデル。オープンウェイトで公開されており、自社サーバーでのローカル実行が可能な点が Suno・Udio との最大の違い。テキストプロンプトから BGM、効果音、アンビエント音楽を生成でき、ゲーム開発やポッドキャストの音素材制作に向く。",
      "**オープンウェイトの利点**: モデルをダウンロードしてローカルで動かせるため、データをクラウドに送る必要がない。音声データのプライバシーが重要な案件や、インターネット接続のない環境での利用に適している。ComfyUI などのワークフローツールとの統合も可能で、カスタムパイプラインに組み込みやすい。",
      "**料金**: Web アプリ経由の無料枠に加え、有料プランで生成回数と品質を拡張可能。ローカル実行の場合は GPU リソースのコストのみ。クラウドサービスへの依存を避けたいユーザーにとってはコスト構造が予測しやすい。",
      "**注意点**: ボーカル付きの楽曲生成では Suno・Udio に大きく劣る。フル楽曲生成よりも、BGM・効果音・アンビエントといった素材生成に適している。また、Stability AI の経営状況には不確実性があるため、長期的なサポートの継続性は注視が必要。モデルの更新頻度も Suno・Udio と比較すると遅い。"
    ],
    "primarySources": [
      {
        "title": "Stable Audio",
        "site": "Stability AI",
        "url": "https://stability.ai/"
      }
    ]
  },
  "manus-review": {
    "body": [
      "**Manus** は中国のスタートアップが開発した汎用 AI エージェントで、2026年3月の招待制ローンチ時に大きな話題を呼んだ。ユーザーがタスクを自然言語で指示すると、Web ブラウジング、データ収集・分析、コード実行、ファイル操作を自律的に組み合わせてタスクを遂行する。GAIA ベンチマーク（汎用AIアシスタント評価）でトップスコアを記録したと報じられている。",
      "**できること**: 「この企業の競合分析をまとめて」と指示すれば、Webで情報収集→スプレッドシートに整理→レポートをPDFで出力、といった複数ステップを自律的に完遂する。旅行計画、求人情報の調査、データの可視化、簡単なWebサイト制作など、幅広いタスクに対応。実行過程はリアルタイムで確認でき、仮想デスクトップ上での操作が可視化される。",
      "**料金**: 一般公開後はクレジット制。無料枠でも基本的なタスクは試せるが、複雑なタスクではクレジット消費が大きい。Plus プラン（$39/月）で月間クレジットが増える。1タスクあたりのコストは複雑さに依存するため予測しにくい面がある。",
      "**注意点**: 汎用エージェントの性質上、タスクが曖昧だと期待と異なる結果になることがある。Web上の最新情報を取得するため、ソースの信頼性確認はユーザー側の責任。また、中国企業のサービスであることからデータの取り扱いについて懸念を示すユーザーもいる。特化型ツール（コーディングならClaude Code、検索ならPerplexity）と比較すると、各領域の深さでは劣る。"
    ],
    "primarySources": [
      {
        "title": "Manus",
        "site": "Manus",
        "url": "https://manus.im/"
      }
    ]
  },
  "devin-review": {
    "body": [
      "**Devin** は Cognition 社が開発する AI ソフトウェアエンジニアリングエージェント。2024年のデモで大きな話題を呼び、2025〜2026年にかけて本格展開が進んでいる。独自のクラウド開発環境（ブラウザ、エディタ、ターミナルを統合）内でコードの生成・テスト・デバッグ・PR 作成を自律的に行う。Slack 経由でタスクを指示し、結果を PR として受け取るワークフローが基本。",
      "**Claude Code / Codex との違い**: Claude Code がローカルでのインタラクティブな対話型、Codex がクラウドの並列サンドボックスなのに対し、Devin は「チームメンバーの一人」として非同期に作業する設計。ジュニアエンジニアに任せるようなタスク（バグ修正、テスト追加、リファクタリング）を Slack で投げて数時間後に PR を受け取る、という使い方が想定されている。",
      "**料金**: チームプラン $500/月〜と、個人開発者には高価格。エンタープライズ向けの位置づけで、チーム全体の開発効率を上げることでコストを正当化する設計。SLA やセキュリティ要件への対応もエンタープライズ向けに整備されている。",
      "**注意点**: 高価格であるため個人開発者には選びにくい。また、自律性が高い分、タスクの指示が曖昧だと想定外の変更を行うリスクがある。PR ベースのワークフローなのでレビューは可能だが、フィードバックサイクルは対話型ツールと比べて遅い。コーディング以外の汎用タスクには Manus 等のほうが向く。"
    ],
    "primarySources": [
      {
        "title": "Devin",
        "site": "Cognition",
        "url": "https://devin.ai/"
      }
    ]
  },
  "genspark-review": {
    "body": [
      "**GenSpark** は単なる AI 検索エンジンではなく、**目的ごとに専用のAIエージェントが分かれている**のが最大の特徴。検索エージェント、スライド生成エージェント、AI 議事録エージェント、旅行計画エージェントなど、タスクに応じた専門エージェントが用意されており、1つの AI が何でもやる設計とは異なる。Perplexity が「賢い検索エンジン」なら、GenSpark は「目的別 AI ツールの集合体」に近い。",
      "**Sparkpages**: 検索エージェントが生成する構造化ページ。「2026年のおすすめノートPC」と検索すると、スペック比較表・価格帯別おすすめ・用途別ランキングを含む1ページが自動生成される。引用元が明示され、広告なしのクリーンな体験。スライドエージェントではプレゼン資料を自動生成でき、リサーチ→資料化までを一気通貫で行える。",
      "**料金**: 基本機能は無料で、各エージェントの利用に課金のハードルがない。広告なしのビジネスモデルで、日常的な調べ物からスライド制作まで幅広く使える。Pro プランではエージェントの高度な機能やより多くのクエリが利用可能。",
      "**注意点**: 多機能な分、個々のエージェントの深さでは専門ツールに劣る場面もある。スライド生成は Canva AI や Gamma ほど洗練されておらず、議事録は Otter.ai ほどの精度ではない。ただし「1つのプラットフォームで完結する手軽さ」が GenSpark の価値であり、専門ツールを複数契約する代替になりうる。日本語対応は改善途上。"
    ],
    "primarySources": [
      {
        "title": "GenSpark",
        "site": "GenSpark",
        "url": "https://www.genspark.ai/"
      }
    ]
  },
  "perplexity-review": {
    "body": [
      "**Perplexity AI** は AI 検索の先駆者で、最大の特色は**リファレンスの徹底**にある。すべての回答にソース引用が付き、どの情報がどのWebページから来ているかを1クリックで確認できる。NotebookLM が「アップロードした資料に基づく回答」でリファレンスを担保するように、Perplexity は「Web全体を対象にしたリファレンス付き回答」を提供する。AIの回答を鵜呑みにせず根拠を確認したいユーザーにとって、この設計は決定的に重要。",
      "**Pro Search**: 有料プランで利用できる Pro Search は、追加の質問を自動生成して複数回の検索を行い、より包括的な回答をまとめる深い調査機能。学術論文、製品比較、技術調査など、複数ソースの横断が必要な場面で威力を発揮する。モデルは GPT-5.4・Claude 等から選択でき、用途に応じた使い分けが可能。",
      "**料金と API**: 無料枠で基本的な検索は十分に使える。Pro プラン（$20/月）で Pro Search の回数制限が緩和され、ファイルアップロードや画像生成機能も追加される。開発者向け API（pplx-api）も提供されており、自社アプリに AI 検索を組み込むことが可能。",
      "**注意点**: ソース引用があるとはいえ、AI による要約でソースの誤読やハルシネーションのリスクはゼロではない。重要な情報は引用元を直接確認する習慣が必要。GenSpark のような目的別エージェント（スライド生成、議事録）の機能はなく、あくまで「検索と回答」に特化した設計。日本語対応は改善が進んでいるが、英語と比較すると精度に差が出るケースもある。"
    ],
    "primarySources": [
      {
        "title": "Perplexity AI",
        "site": "Perplexity",
        "url": "https://www.perplexity.ai/"
      }
    ]
  },
  "notebooklm-review": {
    "body": [
      "**NotebookLM** は Google が提供する AI リサーチツールで、ユーザーがアップロードした資料（PDF、Webページ、テキスト、YouTube動画など）だけを情報源として回答を生成する。Web検索型のPerplexityとは対照的に、**閉じた資料セットに基づくリファレンス特化型**の設計。回答の根拠が必ずアップロード済みの資料内にあるため、ハルシネーションが構造的に抑えられる。",
      "**Audio Overview（ポッドキャスト生成）**: NotebookLM の最もユニークな機能が、資料を基にした音声ポッドキャストの自動生成。2人の AI ホストが資料の内容について対話形式で解説する音声を生成し、論文や長いレポートを「聴いて理解する」体験を提供する。通勤時間の活用や、チームへの資料共有の新しい形として注目されている。",
      "**料金と利用方法**: Google アカウントがあれば無料で利用可能。NotebookLM Plus（Google One AI Premium に含まれる）ではノートブック数やソース数の上限が拡張され、カスタム音声スタイルやチーム共有機能が追加される。無料枠でも基本機能は十分に使える。",
      "**注意点**: Web上の最新情報を自動で取得する機能はなく、ユーザーが資料を手動でアップロードする必要がある。情報の鮮度はユーザーの資料に依存する。API は提供されておらず、外部ツールとの統合はできない。あくまで「手元の資料を深く理解する」ツールであり、Web全体を検索する Perplexity や GenSpark とは住み分けが明確。"
    ],
    "primarySources": [
      {
        "title": "NotebookLM",
        "site": "Google",
        "url": "https://notebooklm.google/"
      }
    ]
  },
  "deepseek-r1-review": {
    "body": [
      "**DeepSeek R1** は中国の AI スタートアップ DeepSeek（深度求索）が2025年1月にリリースした推論特化モデル。MIT ライセンスのオープンウェイトで公開され、数学・コーディング・論理推論のベンチマークで OpenAI o1 や Claude Opus に匹敵するスコアを記録し、業界に衝撃を与えた。671B パラメータの MoE アーキテクチャで、推論時に活性化されるのは約 37B と効率的。",
      "**コストの破壊力**: API 料金はキャッシュヒット時 $0.14 / 出力 $2.19（1M トークンあたり）と、Opus の数十分の一。この価格で Opus に近い推論性能を出せるため、大量の推論タスクや個人開発者の実験用途ではコスパが圧倒的。ローカル実行もオープンウェイトで可能なため、プライバシー重視の環境でも導入できる。蒸留版（1.5B〜70B）も公開されており、軽量な用途にも対応。",
      "**推論の特徴**: Chain-of-Thought（思考連鎖）を明示的に出力する設計で、推論過程を確認できる。数学オリンピックレベルの問題やコーディングの複雑なロジック構築に強い。一方、日常会話やクリエイティブライティングでは GPT や Claude のほうが自然な出力を返す傾向がある。推論に特化したモデルであることを理解した上での使い分けが重要。",
      "**注意点**: 中国企業のモデルであるため、データの取り扱い・検閲ポリシーについて企業利用では事前確認が必要。API サービスは中国リージョン中心で、グローバルでのレイテンシや可用性は大手に劣る場合がある。ただしオープンウェイトなので、Together AI や Fireworks 等のサードパーティホスティングや自社サーバーでの運用も可能。DeepSeek V3（汎用モデル）も別途あり、用途で選び分ける。"
    ],
    "primarySources": [
      {
        "title": "DeepSeek",
        "site": "DeepSeek",
        "url": "https://www.deepseek.com/"
      },
      {
        "title": "DeepSeek R1 — GitHub",
        "site": "GitHub",
        "url": "https://github.com/deepseek-ai/DeepSeek-R1"
      }
    ]
  },
  "qwen-3-review": {
    "body": [
      "**Qwen 3**（通義千問3）は Alibaba Cloud が2025年4月にリリースした大規模モデルファミリーで、オープンウェイト LLM の中でも最も包括的なラインナップを持つ。Dense モデル（0.6B / 1.7B / 4B / 8B / 14B / 32B）と MoE モデル（30B-A3B / 235B-A22B）の計8サイズを Apache 2.0 ライセンスで公開しており、スマートフォン上の軽量推論からデータセンターでの大規模処理まで、単一ファミリーでカバーする。Hugging Face では公開初日に最もダウンロードされたモデルコレクションとなり、オープンウェイト LLM の代表格として急速に認知が広がった。",
      "**ハイブリッド思考（Thinking / Non-Thinking）**: Qwen 3 の最もユニークな機能が、1つのモデルで「推論モード」と「即答モード」を動的に切り替えるハイブリッド思考。複雑な数学・コーディング・論理問題では Chain-of-Thought を展開して段階的に推論し、簡単な質問やチャットにはレイテンシを抑えて即座に回答する。DeepSeek R1 が推論特化（常に思考する）のに対し、Qwen 3 は状況に応じた自動切替が可能。`/think` と `/no_think` のトグルでユーザーが明示的に制御することもできる。",
      "**多言語とエージェント対応**: 119言語に対応し、特にアラビア語・日本語・韓国語・東南アジア言語のベンチマークスコアが高い。MCP（Model Context Protocol）にも対応しており、ツール呼び出しやエージェント的なタスク実行が可能。コード生成ではフラッグシップの 235B-A22B が Opus 4.6 や GPT-5.4 に迫るスコアを出しており、AIME 2025（数学）では 81.5% を記録。Qwen-Agent フレームワークを通じた自律的なタスク実行もサポートされている。",
      "**ローカル実行の実用性**: Ollama、vLLM、SGLang、llama.cpp 等の主要推論フレームワークに対応しており、ローカル実行の選択肢が非常に広い。4B / 8B モデルは個人の GPU（8GB VRAM 程度）でも実用的な速度で動作し、プライバシー重視の環境やオフライン利用に適している。GGUF 量子化版も公式に提供されており、M1/M2 Mac でも軽量モデルが動く。",
      "**Alibaba Cloud エコシステム**: Tongyi（通義）プラットフォーム、Alibaba Cloud の Model Studio、DashScope API から利用可能。中国国内の金融・EC・物流での導入実績が多い。グローバルでは Alibaba Cloud の国際リージョン（シンガポール等）経由で利用できるが、AWS / GCP ほどの地域カバレッジはまだない。",
      "**注意点**: グローバルでの API レイテンシは中国リージョン比で劣る場合がある。ドキュメントは英語版が充実してきているが、日本語対応は限定的。235B MoE のローカル実行には 80GB 以上の VRAM が必要で、個人利用には 8B〜32B が現実的。中国企業モデルとしてのデータ取り扱いポリシーは企業導入時に事前確認が必要。"
    ],
    "primarySources": [
      {
        "title": "Qwen 3 — Hugging Face",
        "site": "Hugging Face",
        "url": "https://huggingface.co/Qwen"
      },
      {
        "title": "Qwen Blog",
        "site": "Qwen",
        "url": "https://qwenlm.github.io/"
      },
      {
        "title": "Qwen3 Technical Report",
        "site": "arXiv (推定)",
        "url": "https://qwenlm.github.io/blog/qwen3/"
      }
    ]
  },
  "ernie-4-5-review": {
    "body": [
      "**ERNIE 4.5**（文心大模型4.5）は中国最大の検索エンジン Baidu（百度）が開発する基盤モデル。テキスト・画像・動画のマルチモーダル対応で、Baidu の検索技術で蓄積された中国語の知識ベースが大きな強み。消費者向けチャットボット「文心一言（ERNIE Bot）」として1億ユーザー以上が利用している。",
      "**Baidu エコシステム**: Baidu Cloud（百度智能雲）との統合により、エンタープライズ向けのデプロイメントが充実。中国国内の金融、医療、製造業での導入実績が多い。API は Baidu Cloud のコンソールから利用でき、中国国内のレイテンシとコンプライアンスに最適化されている。2025年6月にはオープンソース版も公開された。",
      "**コスト**: API 料金は中国市場向けの価格設定で低コスト。ERNIE Speed / Lite / Tiny などの軽量版も用意されており、用途に応じたコスト最適化が可能。中国国内のサーバーで完結するため、データの国外流出を避けたい中国企業にとっては安心感がある。",
      "**注意点**: グローバル展開は限定的で、中国国外からの利用はレイテンシや登録の面でハードルがある。英語や日本語の性能は GPT や Claude と比較すると差がある。中国語特化の用途（中国市場向けサービス開発、中国語コンテンツ生成）では強力だが、多言語環境では他モデルのほうが向く。"
    ],
    "primarySources": [
      {
        "title": "ERNIE — Baidu",
        "site": "Baidu",
        "url": "https://yiyan.baidu.com/"
      }
    ]
  },
  "meta-acquires-manus-2025": {
    "body": [
      "2025年12月29日、Meta Platforms は汎用 AI エージェントを手がける Manus の買収を発表した。買収額は明示されていないが、Bloomberg・CNBC・TechCrunch 等の複数メディアが20億ドル超と報じている。Meta は声明で「ビジネス向け AI イノベーションの加速と、コンシューマー・エンタープライズ製品への高度な自動化の統合」を目的としている。",
      "**Manus の急成長**: Manus はもともと中国を本拠地としていたが、2025年夏にシンガポールへ拠点を移した。2025年3月の招待制ローンチで大きな話題を呼び、GAIA ベンチマークでトップスコアを記録。サービス開始からわずか8ヶ月で年間経常収益（ARR）は1億ドルに達したとされ、収益の大半は有料サブスクリプションによるもの。AI スタートアップとしては異例の速度での収益化に成功した。",
      "**買収後の運営**: Manus の公式ブログによると、買収後も引き続きアプリおよびウェブサイトを通じて AI サービスとサブスクリプションを提供する方針。シンガポールでの運営も継続する。Meta は Manus の AI エージェント技術を Facebook・Instagram・WhatsApp に統合し、Meta AI アシスタントの機能強化を図る計画。",
      "**中国当局の動き**: 2026年3月には、中国当局が Manus の創業者（CEO の Xiao Hong 氏と CTO の Ji Yichao 氏）に対し、取引審査中の出国を禁止したと報じられた。中国発の AI 技術が海外企業に移転することへの規制強化の一環とみられ、米中間の AI 技術移転を巡る緊張の新たな焦点になっている。",
      "**開発者への影響**: Manus のサービスは当面継続するが、長期的には Meta のエコシステムに統合されていく可能性がある。汎用 AI エージェント市場では、OpenAI の Operator、Google の Project Mariner、Anthropic の Computer Use などが競合する構図で、Meta が Manus の買収で一気にポジションを得た形。"
    ],
    "primarySources": [
      {
        "title": "Manus Joins Meta for Next Era of Innovation",
        "site": "Manus",
        "url": "https://manus.im/blog/manus-joins-meta-for-next-era-of-innovation"
      },
      {
        "title": "Meta acquires intelligent agent firm Manus",
        "site": "CNBC",
        "url": "https://www.cnbc.com/2025/12/30/meta-acquires-singapore-ai-agent-firm-manus-china-butterfly-effect-monicai.html"
      },
      {
        "title": "Meta just bought Manus",
        "site": "TechCrunch",
        "url": "https://techcrunch.com/2025/12/29/meta-just-bought-manus-an-ai-startup-everyone-has-been-talking-about/"
      }
    ]
  },
  "dario-amodei-dwarkesh-podcast-2026-feb": {
    "body": [
      "2026年2月13日、AI リサーチ系ポッドキャストの中でも情報密度の高さで知られる **Dwarkesh Podcast** に Anthropic CEO の **Dario Amodei** が出演した。約2時間にわたる対談で、AGI のタイムライン、Anthropic の成長曲線、収益構造、スケーリング仮説の現在地について踏み込んだ発言が相次いだ。以下は主要なポイントの要約（詳細は原文トランスクリプトを参照）。",
      "**「指数関数の終わりに近い」**: Dario は AI の能力進化が予測通りに進行しているとしつつ、「一般の認識は指数関数の終わりがいかに近いかを過小評価している」と述べた。「国家規模の天才データセンター」が10年以内に実現する確率を90%と見積もり、コードの自動化は1〜2年で達成されるとの見通しを示した。最長でも2035年までには確実に到達するとの予測。",
      "**Anthropic の成長曲線**: 売上は2023年に0〜1億ドル、2024年に1〜10億ドル、2025年に10〜100億ドルと、年10倍の成長を達成したことを明かした。業界全体のコンピュート規模は年3倍で成長しており、2028年に100ギガワット、2029年に300ギガワットに達すると予測。各ギガワットは年間約100〜150億ドルのコストに相当する。",
      "**「継続学習は不要」**: Dwarkesh の「継続学習（Continual Learning）は必要では？」という問いに対し、Dario は「不要」と明言。100万トークンのコンテキスト学習と事前学習の組み合わせで十分対応可能との立場を示した。これは、モデルが使用中に学び続ける必要はなく、十分に大きなコンテキストウィンドウがあればよいという主張。",
      "**収益化の矛盾と寡占**: モデル単体では利益が出るが、次世代モデルへの投資で企業全体は赤字になる構造を認めた。2028年の黒字化を予定しているが、需要予測の不確実性が最大のリスク。AI 業界は3〜4社の少数寡占（Cournot 均衡）に向かうとの見方で、参入障壁の高さはクラウド産業に類似するとした。計算能力の50%を推論、50%を研究に配分し、推論の粗利益率は50%超。",
      "**対談の最大の緊張点**: Dario が「1〜3年で国家規模の天才」と予測しながら、Anthropic のコンピュート投資がそれほど積極的でないことの矛盾を Dwarkesh が鋭く突いた。Dario は需要予測の不確実性と資金流動性の制約を理由に挙げ、検証不可能なタスク（火星計画、科学的発見）への不確実性や、シリコンバレー中心の地理的不均等発展への懸念も語った。"
    ],
    "primarySources": [
      {
        "title": "Dario Amodei — \"We are near the end of the exponential\"",
        "site": "Dwarkesh Podcast",
        "url": "https://www.dwarkesh.com/p/dario-amodei-2"
      },
      {
        "title": "Spotify で聴く",
        "site": "Spotify",
        "url": "https://open.spotify.com/episode/2ZNrpVSrgZMlDwQinl20Ay"
      },
      {
        "title": "On Dwarkesh Patel's 2026 Podcast With Dario Amodei",
        "site": "The Zvi (分析記事)",
        "url": "https://thezvi.substack.com/p/on-dwarkesh-patels-2026-podcast-with"
      }
    ]
  },
  "tbpn-chatgpt-ads-anthropic-stories-2026-march": {
    "body": [
      "2026年3月27日の **TBPN Live**（2時間39分）で、AI 業界のマーケティング戦争と製薬業界の動きが取り上げられた。ChatGPT の広告導入を巡る OpenAI と Anthropic の対照的な戦略が際立つ回。",
      "**ChatGPT に広告導入、2ヶ月で ARR 1億ドル**: OpenAI は2026年2月に ChatGPT の無料ティアに広告パイロットを開始。CNBC によると、開始からわずか2ヶ月で年間経常収益（ARR）が1億ドルを突破した。無料ユーザー層のマネタイズとして桁違いの速さだが、ユーザーからは「AI の回答に広告が混ざる」ことへの批判も出ている。",
      "**Anthropic のスーパーボウル CM「Stories」**: Anthropic は2026年2月のスーパーボウルで TV CM を放映し、ChatGPT の広告導入を真正面から皮肉った。「AI との会話に広告が入ったらこうなる」という演出で、Sam Altman が「かなり苛立った」と報じられた。CM 後、Claude の米国アプリダウンロード数が ChatGPT を一時的に上回る効果も。Anthropic は「広告なし」を明確な差別化ポイントとして打ち出している。",
      "**Novartis が Excellergy を28億ドルで買収**: 製薬大手 Novartis がアレルギー薬スタートアップ Excellergy を28億ドルで買収。AI 直接の話題ではないが、TBPN はテック以外のビッグディールもカバーするのが特徴。",
      "**背景と意味**: この一連の動きは、AI チャットボットのビジネスモデルを巡る根本的な問いを浮き彫りにしている。OpenAI は「広告＋サブスク＋API」の三本柱で IPO を見据え、Anthropic は「広告なし・安全性重視」で差別化。どちらが持続可能かは未知数だが、ユーザーの反応は Anthropic に好意的で、「AI に広告は相性が悪い」という市場のシグナルが見えつつある。"
    ],
    "primarySources": [
      {
        "title": "OpenAI ads pilot tops $100 million in ARR in under 2 months",
        "site": "CNBC",
        "url": "https://www.cnbc.com/2026/03/26/openai-ads-pilot-tops-100-million-in-arr-in-under-2-months.html"
      },
      {
        "title": "ChatGPT rolls out ads",
        "site": "TechCrunch",
        "url": "https://techcrunch.com/2026/02/09/chatgpt-rolls-out-ads/"
      },
      {
        "title": "Spotify で聴く",
        "site": "Spotify",
        "url": "https://open.spotify.com/episode/1nrFIFFcK62v6njU26a1ee"
      }
    ]
  },
  "tbpn-benchmark-sora-spacex-2026-march": {
    "body": [
      "2026年3月25日の **Diet TBPN**（The Big Picture News のダイジェスト版、31分）で、シリコンバレーの最新動向3つが取り上げられた。TBPN は John Coogan と Jordi Hays がホストを務めるライブテック番組で、X と YouTube で平日配信。シリコンバレーの「空気感」をつかめる番組として知られる。",
      "**OpenAI が Sora を終了**: OpenAI は動画生成 AI「Sora」の提供終了を発表した。==1日あたり1,500万ドル==の計算コストを消費しながら収益がほとんどなく、公開市場（IPO）を見据えたプロダクトポートフォリオの整理が目的とみられる。計算リソースを GPT-5.4 や Codex など収益性の高い製品に集中させる判断。動画生成 AI 市場では Runway・Kling・Veo などの競合が残る形に。",
      "**SpaceX 2兆ドル IPO が間近**: SpaceX の IPO 申請が数日〜数週間以内に行われる見通し。最大750億ドルの資金調達が見込まれ、時価総額は2兆ドル規模と報じられている。AI インフラとの関連では、Elon Musk が Dwarkesh Podcast で語った「36ヶ月後に AI を宇宙に置くのが最安」構想の実行基盤にもなる。",
      "**Benchmark の「テセウスの船」**: VC ファーム Benchmark Capital が2017年に Uber の Travis Kalanick を追い出した件について、「許されるのはいつか」を哲学的パラドックス「テセウスの船」に例えて議論。パートナーが入れ替わった Benchmark はもはや同じ組織なのか、という問い。シリコンバレーの権力構造と VC 文化を映す話題。"
    ],
    "primarySources": [
      {
        "title": "Benchmark's Ship of Theseus, OpenAI Kills Sora, SpaceX $2T IPO Buzz",
        "site": "TBPN",
        "url": "https://tbpn.substack.com/p/the-benchmark-ship-of-theseus"
      },
      {
        "title": "Spotify で聴く",
        "site": "Spotify",
        "url": "https://open.spotify.com/episode/5j1na8mPkQ1dl2V3eVkfc4"
      }
    ]
  },
  "dylan-patel-dwarkesh-ai-compute-bottlenecks": {
    "body": [
      "2026年3月13日、半導体業界で最も影響力のあるアナリストの一人 **Dylan Patel**（SemiAnalysis 創業者）が **Dwarkesh Podcast** に出演。AI コンピュートをスケールする際の3大ボトルネック — ロジック、メモリ、電力 — を2時間30分にわたって技術的に分析した。Jensen Huang が語った「供給側の現実」を、独立アナリストの視点から裏付ける内容。",
      "**「真のボトルネックは ASML」**: 電力やデータセンター建設ではなく、ASML 製の EUV（極端紫外線）リソグラフィ装置が2030年までの真の制約だと指摘。現在の生産台数は年70台、2030年でも年100台程度が上限。1台3〜4億ドル。1ギガワット分の Rubin チップ製造に約3.5台の EUV ツール（12億ドル相当）が必要だが、50ギガワットのデータセンター建設は500億ドル — この不均衡が問題の本質。",
      "**メモリの壁**: 1ギガワットの AI コンピュート製造に必要なウェハは、3nm ロジック55,000枚、5nm 6,000枚、DRAM 170,000枚。200万回の EUV パス処理が必要で、メモリ不足は2026〜2027年に顕在化する見通し。Jensen が言及した HBM 供給問題の具体的な数字がここにある。",
      "**H100 が3年前より価値が高い理由**: 古いチップの価値が上がるという逆説的な現象。GPT-5.4 などの新モデルがより多くのトークンを高品質に生成できるようになり、チップ自体の「導出価値」が増加した。H100 の展開コストは約1.40ドル/時間（5年償却）だが、現在は2ドル/時間以上で契約されている。",
      "**各社の規模感**: Anthropic は最終的に5〜6ギガワット、OpenAI も同等レベルまでスケール予定。Anthropic の年率収入は約200億ドルに達したが、粗利益率は50%未満で、130〜140億ドルが計算コスト。NVIDIA は他社より早期に TSMC の製造容量を確保しており、Google は TPU 不足で大量の GPU 購入を余儀なくされている状況。",
      "**中国と長期見通し**: 中国は2030年までに DUV（深紫外線）ツールの完全国産化は可能だが、EUV はまだ困難。本番規模の生産と信頼性確立には5〜7年必要。短期（3年）は米国優位が継続するが、2035年には中国の垂直統合サプライチェーンが優位に転じる可能性がある。2028〜2029年がクリティカルポイント。"
    ],
    "primarySources": [
      {
        "title": "Dylan Patel — Deep dive on the 3 big bottlenecks to scaling AI compute",
        "site": "Dwarkesh Podcast",
        "url": "https://www.dwarkesh.com/p/dylan-patel"
      },
      {
        "title": "Spotify で聴く",
        "site": "Spotify",
        "url": "https://open.spotify.com/episode/5qiibwoBWY5rXyflK7WJzH"
      }
    ]
  },
  "lex-fridman-494-jensen-huang-nvidia": {
    "body": [
      "2026年3月23日、**Lex Fridman Podcast #494** に **NVIDIA CEO Jensen Huang** が出演。世界で最も価値のある企業（時価総額4兆ドル超）を率いるエンジニア CEO が、AI インフラの現在と未来を2時間31分にわたって技術的に深掘りした。",
      "**GPU 企業から AI ファクトリーへ**: Jensen は NVIDIA が「アクセラレーター企業」から「AI ファクトリー」に進化したと説明。GPU 単体の最適化ではなく、GPU・CPU・メモリ・ネットワーク・冷却・電力・ラック・データセンターまでを統合的に「極端な協調設計」する体制に転換。直属スタッフ60名以上が全員参加で設計判断を行い、1対1ミーティングは一切しないリーダーシップスタイル。",
      "**AI スケーリングの4段階**: (1) 事前学習スケーリング（データ量）、(2) 事後学習スケーリング（合成データ）、(3) テスト時スケーリング（推論時の計算集約的思考）、(4) エージェントスケーリング（複数 AI エージェントの並列展開）。「計算能力によってのみ知性がスケールする」と断定。過去10年で Moore 則比100倍に対し、NVIDIA の実績は100万倍。",
      "**ボトルネックの現実**: 電力はグリッドが99%の時間で最大容量の60%しか使っておらず、遊休電力の活用が解決策。メモリ（HBM）の供給拡大が必要で DRAM 業界と戦略的対話中。サプライチェーンでは Vera Rubin 単一ラックに1,300万コンポーネント・200社のサプライヤーが関わり、週200ポッド製造を目標としている。TSMC・ASML の CEO と定期協議し、多年単位の事前投資を促進。",
      "**中国の評価**: 「世界で最も急速に革新している国」と評価。理由として、世界の AI 研究者の約50%が中国籍、都市間の激しい内部競争、オープンソース志向の文化、リーダーシップ層がエンジニア中心（米国は法曹が多数派）を挙げた。",
      "**Elon Musk の Colossus への賞賛と今後**: Colossus プロジェクト（4ヶ月で20万 GPU スケール）を「差し迫った緊迫感による全体動員」として高く評価。Nemotron 3（1,200億パラメータ MoE）をオープンソース化した理由は、化学・生物学・物理シミュレーションなど全産業の AI 革命を加速するため。4兆ドル企業から10兆ドルへの道筋は明言を避けたが、「エージェントが全産業に浸透する」確信のもと、計算需要の指数関数的増加を予想した。"
    ],
    "primarySources": [
      {
        "title": "#494 – Jensen Huang: NVIDIA - The $4 Trillion Company & the AI Revolution",
        "site": "Lex Fridman Podcast",
        "url": "https://lexfridman.com/jensen-huang/"
      },
      {
        "title": "Spotify で聴く",
        "site": "Spotify",
        "url": "https://open.spotify.com/episode/0BGcaYvcDPkvBzFmkRI5uY"
      },
      {
        "title": "トランスクリプト全文",
        "site": "Lex Fridman",
        "url": "https://lexfridman.com/jensen-huang-transcript/"
      }
    ]
  },
  "lex-fridman-491-openclaw-peter-steinberger": {
    "body": [
      "2026年2月12日、**Lex Fridman Podcast #491** に **Peter Steinberger**（OpenClaw 開発者）が出演。GitHub 史上最速で成長したオープンソース AI エージェントフレームワーク **OpenClaw** の思想と技術を3時間25分にわたって語った。",
      "**OpenClaw とは**: ユーザーの PC に常駐するオープンソース AI エージェント。WhatsApp、Telegram、Discord、iMessage などのメッセージアプリを通じてユーザーと対話し、自律的にタスクを実行する。「AI が実際に物事を行う」個人アシスタントで、システムレベルのアクセスを持つ。",
      "**自己修正するソフトウェア**: OpenClaw の最も衝撃的な特徴は、エージェントが自分自身のソースコードを認識し、動作するシステムを理解し、自分を修正できること。Steinberger が実装していなかった音声メッセージ処理を、エージェント自身が「ファイルヘッダーを確認して opus と判定→ffmpeg で変換→OpenAI API で文字起こし」と自律的に解決した事例が紹介された。",
      "**GitHub 最速成長の理由**: Steinberger は「他の企業より自分たちを真剣に受け取りすぎなかった」ことが勝因だと語る。ロブスター（ザリガニ）というマスコット、「楽しさと奇妙さ」を優先する文化、実際に動いて結果が見えるプロダクトが支持を集めた。コーディングの民主化も大きな要因で、プログラミング経験がない人でもプルリクエストを送れるようになった点を「人類へのステップアップ」と評価。",
      "**セキュリティと名前変更の苦難**: 「スマーターなモデルは攻撃に強いが、損害は増える」という三次元的トレードオフを指摘。開発中は Anthropic の商標問題で複数回の名前変更を強いられ、MoldBot に変更した際は5秒以内に暗号資産関連の組織にアカウントを盗まれるなどの経験も。Steinberger の経歴は PSPDFKit（10億台のデバイスで使用）の開発者で、3年間のプログラミング離脱後に OpenClaw を立ち上げた。"
    ],
    "primarySources": [
      {
        "title": "#491 – OpenClaw: The Viral AI Agent that Broke the Internet – Peter Steinberger",
        "site": "Lex Fridman Podcast",
        "url": "https://lexfridman.com/peter-steinberger/"
      },
      {
        "title": "Spotify で聴く",
        "site": "Spotify",
        "url": "https://open.spotify.com/episode/0aM69uGff54ewQJzQxZVLf"
      },
      {
        "title": "トランスクリプト全文",
        "site": "Lex Fridman",
        "url": "https://lexfridman.com/peter-steinberger-transcript/"
      }
    ]
  },
  "lex-fridman-490-state-of-ai-2026": {
    "body": [
      "2026年2月1日、**Lex Fridman Podcast #490** に AI 研究者の **Nathan Lambert**（Allen Institute for AI 事前学習リード、RLHF Book 著者）と **Sebastian Raschka**（Build a Large Language Model (From Scratch) 著者）が出演。4時間39分をかけて2026年初頭の AI のあらゆる側面を総ざらいした。CEO のビジョンではなく、研究者・エンジニア目線の技術的な現状整理として極めて価値が高い。",
      "**LLM 勢力図**: Claude Opus 4.5 が X で大きなバズを生み、Gemini 3 は同等性能ながら言及が減少。GPT-5 は非思考モデルに誤りが多く思考モデル版が好まれる状況。2026年は Google（TPU のコスト効率）と Anthropic（エンタープライズ）が伸び、OpenAI は組織文化の混乱が指摘された。",
      "**スケーリング則の三層構造**: 現在のスケーリングは (1) 事前学習スケーリング（従来型、モデル/データサイズ）、(2) 強化学習スケーリング（o1 で実証された試行錯誤的改善）、(3) 推論時スケーリング（生成トークン数増加による性能向上）の三層に分化している。事前学習の付加価値が低下し、推論時スケーリングへの注目がシフト。DeepSeek の事前学習コストは500万ドル、OLMo 3 は200万ドルと低下する一方、サービング（推論）は年間数十億ドル規模。",
      "**中国オープンモデルの攻勢**: DeepSeek R1 を皮切りに、MiniMax、Zhipu AI、Kimi K2 Thinking など複数社がオープンウェイトモデルを相次いで公開。米国企業が「セキュリティ懸念で中国 API を使わない」ことに対し、オープンウェイトで国際市場の影響力を構築する戦略。中国は MoE 大規模化、米国は小規模効率化の傾向だったが、欧米も大規模 MoE に移行中。",
      "**コーディング AI と エージェント**: Claude Code は高度な自動化タスク向き、Cursor は VS Code 統合の細かい制御、Codeium は中道的選択肢と整理。エージェント領域では、ツール使用の事前学習により Web 検索や Python 実行が組み込まれ、CLI コマンドや Git ハンドリングなど「1年前には想定外だった能力」が emergence（創発）している。RELVR（報酬検証可能な強化学習）によるハルシネーション削減も注目点。",
      "**GPU とインフラの現実**: xAI が2026年初で1ギガワット、年末で2ギガワット規模に到達予定。Google は TPU で NVIDIA の利益率を回避。Blackwell GPU の展開では複数 GPU の故障対応など新たな分散問題が出現。FP8/FP4 精度により記憶量削減→通信削減→学習加速が進んでいる。"
    ],
    "primarySources": [
      {
        "title": "#490 – State of AI in 2026: LLMs, Coding, Scaling Laws, China, Agents, GPUs, AGI",
        "site": "Lex Fridman Podcast",
        "url": "https://lexfridman.com/ai-sota-2026/"
      },
      {
        "title": "Spotify で聴く",
        "site": "Spotify",
        "url": "https://open.spotify.com/episode/4UBPQG2Z7s70DpRVD5kMbC"
      },
      {
        "title": "トランスクリプト全文",
        "site": "Lex Fridman",
        "url": "https://lexfridman.com/ai-sota-2026-transcript/"
      }
    ]
  },
  "elon-musk-dwarkesh-podcast-2026": {
    "body": [
      "2026年2月5日、**Elon Musk** が Dwarkesh Podcast に約2時間49分出演し、AI インフラ、xAI 戦略、ヒューマノイドロボット、宇宙開発を横断する壮大なビジョンを展開した。Dario が AI の能力曲線を、Nadella が経済指標を語ったのに対し、Musk はハードウェアと物理の制約から AI の未来を描く。",
      "**「36ヶ月後、AI は宇宙に置くのが最安」**: Musk の中核的主張は、地上のデータセンターは電力の壁にぶつかるということ。米国の平均消費電力は0.5テラワット。1テラワットのデータセンターを作ればそれだけで倍になる。一方、宇宙では太陽光パネルの効率が地上の5倍（大気・雲・昼夜サイクルなし）で、バッテリーコストも不要。5年以内に宇宙での年間 AI 展開量が地球の累計総量を超えるとの予測。年間約10,000回の Starship 打ち上げ（約1時間に1回）が必要で、物理的には20〜30機の Starship で回せるとした。",
      "**xAI と Grok のアライメント**: xAI のミッションは「宇宙を理解すること」で、そのためには知性の拡張と意識の伝播が必要だと主張。Grok のアライメントはポリティカル・コレクトネスではなく「真実の追求」で実現する方針。物理法則に対する検証が究極の正解確認手段であり、『2001年宇宙の旅』の HAL が壊れたのは矛盾した指令を強制されたからだと例えた。xAI はニューロンレベルで AI の推論を追跡するデバッガーツールも開発中。",
      "**Optimus ヒューマノイド計画**: 3つの難題として「現実世界の AI 知能」「高度なハンド設計」「量産」を挙げ、特にハンドは「他の全てを合わせたより難しい」と語った。1万〜3万台のロボットを「Optimus Academy」に配置し、シミュレーションと実環境の自己対戦でデータを生成。Optimus 3 で年間100万台、Optimus 4 で年間1,000万台を目指す。Grok がロボット群にタスクを割り振り、工場建設まで統括する構想。",
      "**TeraFab と半導体**: TSMC・Samsung の現在のファブ能力では指数関数的な需要に追いつけないとし、次世代規模の「TeraFab」を提案。DDR RAM がロジックチップ以上のボトルネックになる可能性を指摘。Tesla は独自チップ（AI5, AI6）を設計から5年以内に大量生産する計画。ガスタービンの翼を鋳造できる企業が世界に3社しかないことが電力供給の制約要因であり、SpaceX と Tesla が内製する可能性にも言及。",
      "**「無限の金バグ」**: ロボットがロボットを製造する再帰的構造を「無限の金バグ（glitch）」と表現。AI × チップ × 電気機械能力が複利的に成長し、「超新星」的な価値の爆発を生むとした。純粋な AI/ロボティクス企業が人間介在型の組織を圧倒的に上回る時代がすぐに来るとの予測。"
    ],
    "primarySources": [
      {
        "title": "Elon Musk — \"In 36 months, the cheapest place to put AI will be space\"",
        "site": "Dwarkesh Podcast",
        "url": "https://www.dwarkesh.com/p/elon-musk"
      },
      {
        "title": "Spotify で聴く",
        "site": "Spotify",
        "url": "https://open.spotify.com/episode/4nah0x1qQF2hxgJnv8PlmN"
      }
    ]
  },
  "satya-nadella-dwarkesh-podcast-2026": {
    "body": [
      "Dwarkesh Podcast に **Microsoft CEO Satya Nadella** が出演し、AI 戦略、量子コンピューティング、AGI の定義まで踏み込んだ議論を展開した。Dario Amodei が「指数関数の終わりに近い」と語ったのに対し、Nadella は技術的マイルストーンより経済的インパクトを重視する立場を明確にしている。",
      "**「世界の経済成長率10%が真のベンチマーク」**: Nadella は AGI の到達を論じること自体を避け、成功の指標を「世界が10%成長すること」と再定義した。現在の Microsoft の AI 売上は130億ドルで、成長トレンドが続けば1,300億ドルに達する可能性を示唆。技術的な能力の議論より、実際の経済効果で測るべきだとの立場。",
      "**「AI は独占を生まない」**: エンタープライズ市場では「買い手がWinner-Take-Allを許容しない」と断言。クローズドモデルとオープンソースが共存し、Windows と競合 OS の関係のように複数のサプライヤーが並立する構図になるとの見方。これは Dario の「3〜4社の寡占」予測とは異なるニュアンス。",
      "**量子コンピューティングの Majorana ブレイクスルー**: Microsoft が達成した Majorana ゼロモードの実現を「量子コンピューティングのトランジスタ・モーメント」と表現。Majorana One チップは最終的に100万物理量子ビットをサポートし、2027〜2029年にユーティリティスケールの量子コンピュータを実現する見通し。AI と量子の両輪で進む Microsoft の戦略が鮮明になった。",
      "**ゲーム世界モデル Muse**: プレイヤー入力に応答する一貫したゲーム世界を生成するモデル。画像生成における DALL-E のインパクトに匹敵する可能性があるとした。AI がゲーム開発を根本から変える布石。",
      "**AGI への姿勢**: Nadella は AGI の定義そのものを疑問視し、「自動化された知識労働」と「新たに生み出される認知タスク」を区別。包括的な労働自動化は予測せず、認知労働自体が技術能力とともに進化するとの立場。AI の法的責任の枠組みが整備されないと大規模導入は進まないとも指摘した。"
    ],
    "primarySources": [
      {
        "title": "Satya Nadella — Microsoft's AGI plan & quantum breakthrough",
        "site": "Dwarkesh Podcast",
        "url": "https://www.dwarkesh.com/p/satya-nadella"
      },
      {
        "title": "Spotify で聴く",
        "site": "Spotify",
        "url": "https://open.spotify.com/episode/2Ru9vFJOuYKSHnxABBgAm3"
      }
    ]
  },
  "cli-agent-community-oss-2026": {
    "body": [
      "2026年に入り、Claude Code や Codex などの CLI エージェントを拡張・連携させるコミュニティ製の OSS ツールが急速に増えている。公式機能ではカバーしきれないマルチエージェント連携や並列実行のニーズに応える形で、個人開発者やスタートアップが多数のプロジェクトを公開している。以下は主要なカテゴリ別の整理で、==いずれも個人・コミュニティ開発のため、利用は自己責任で==。",
      "**マルチエージェント管理**: **claude-squad**（github.com/smtg-ai/claude-squad）は Claude Code・Codex・OpenCode・Amp など複数の CLI エージェントをバックグラウンドで並行管理するツール。**oh-my-claudecode**（ohmyclaudecode.com）は32の専用エージェントと40以上のスキルを提供するオーケストレーションレイヤーで、タスクの自動並列化とトークン使用量の最適化を行う。出力速度の向上も謳っている。",
      "**エージェント間通信**: **smux**（github.com/ShawnPana/smux）は tmux ベースで AI エージェント同士をペイン越しに通信させるツール。Claude Code が設計→Codex がレビュー→Claude Code が修正、というサイクルを自律的に回せる。API もプロトコルも不要で、Bash が動くエージェントなら何でも参加可能。**cmux**（github.com/craigsc/cmux）は tmux for Claude Code を標榜する類似ツール。",
      "**プラグイン・拡張エコシステム**: **awesome-claude-code**（github.com/hesreallyhim/awesome-claude-code）はスキル・Hooks・スラッシュコマンド・MCP サーバー・プラグインのキュレーションリスト。**awesome-claude-code-toolkit**（github.com/rohitg00/awesome-claude-code-toolkit）は135エージェント・35スキル・42コマンド・150以上のプラグインを収録した包括的なツールキット。公式の MCP Tool Search と組み合わせてコンテキスト消費を95%削減する手法も紹介されている。",
      "**特化型エージェント**: **Dexter**（github.com/virattt/dexter）は金融リサーチに特化した自律エージェント。Planning Agent（計画）→ Action Agent（データ取得）→ Validation Agent（検証）→ Answer Agent（回答）の4段階で動作し、リアルタイム市場データを使って自己検証しながら調査を進める。OpenAI・Anthropic・Google・Ollama 等のモデルに対応。コーディング支援ではないが、CLI エージェントのアーキテクチャとして参考になる。",
      "**注意点**: これらはいずれも個人またはコミュニティが開発・運営しているプロジェクトで、メンテナンスの継続性やセキュリティの保証はない。特にエージェント間通信系のツールは、プロンプトインジェクションによるコマンド注入や、意図しない破壊的操作（ファイル削除・Git push --force 等）のリスクがある。人間が監視できる状態で使うことを前提とし、本番環境での無人運用は避けるべき。ライセンスは各リポジトリで確認のこと。"
    ],
    "tables": [
      {
        "afterParagraph": 1,
        "caption": "主要コミュニティ OSS ツール一覧（2026年3月時点）",
        "headers": [
          "ツール",
          "カテゴリ",
          "概要",
          "GitHub"
        ],
        "rows": [
          [
            "claude-squad",
            "並列管理",
            "複数 CLI エージェントのバックグラウンド管理",
            "smtg-ai/claude-squad"
          ],
          [
            "oh-my-claudecode",
            "オーケストレーション",
            "32専用エージェント・40+スキル・自動並列化",
            "Yeachan-Heo/oh-my-claudecode"
          ],
          [
            "smux",
            "エージェント間通信",
            "tmux ペイン越しの AI 間通信、API 不要",
            "ShawnPana/smux"
          ],
          [
            "cmux",
            "ターミナル",
            "Claude Code 向け tmux 拡張",
            "craigsc/cmux"
          ],
          [
            "awesome-claude-code",
            "キュレーション",
            "スキル・Hooks・MCP・プラグインのリスト",
            "hesreallyhim/awesome-claude-code"
          ],
          [
            "awesome-claude-code-toolkit",
            "ツールキット",
            "135エージェント・150+プラグイン収録",
            "rohitg00/awesome-claude-code-toolkit"
          ],
          [
            "ruflo",
            "スウォーム",
            "マルチエージェントスウォーム・RAG 統合",
            "ruvnet/ruflo"
          ],
          [
            "Dexter",
            "金融リサーチ",
            "4エージェント構成の自律金融調査（計画→実行→検証→回答）",
            "virattt/dexter"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "awesome-claude-code",
        "site": "GitHub",
        "url": "https://github.com/hesreallyhim/awesome-claude-code"
      },
      {
        "title": "claude-squad",
        "site": "GitHub",
        "url": "https://github.com/smtg-ai/claude-squad"
      },
      {
        "title": "oh-my-claudecode",
        "site": "GitHub",
        "url": "https://github.com/Yeachan-Heo/oh-my-claudecode"
      },
      {
        "title": "smux",
        "site": "GitHub",
        "url": "https://github.com/ShawnPana/smux/"
      }
    ]
  },
  "microsoft-copilot-cowork-launch-2026": {
    "body": [
      "Microsoft は2026年3月9日に発表した **Copilot Cowork** の Frontier プログラム向け展開が3月下旬から始まっている。Cowork は Microsoft 365 Copilot の新モードで、これまでの「プロンプト→1回の応答」から「複雑な業務を委任し、時間をかけて段階的に実行する」へと進化させるもの。X では実際に利用開始したユーザーからの検証投稿が相次いでいる。",
      "**できること**: Cowork では、複雑なリクエストをステップに分解し、複数のツール・ファイルを横断して推論しながら作業を進行する。たとえば「四半期レポートを作成して」と指示すると、必要なデータを Excel・SharePoint から収集→分析→PowerPoint にまとめる、といった一連の作業を自律的に実行する。進捗は可視化され、途中でユーザーが方向修正できる。",
      "**Anthropic との連携**: Microsoft は Anthropic と緊密に連携し、Claude の技術を Copilot Cowork に統合している。Wave 3 アップデートにより、Claude と最新の OpenAI モデルの両方が Copilot 内で利用可能になり、タスクに応じて自動的に最適なモデルが選択される。これは Microsoft が単一モデルに依存しない「マルチモデル戦略」を本格化させたことを意味する。",
      "**セキュリティとガバナンス**: Cowork は Microsoft 365 のセキュリティ・ガバナンス境界内で動作する。ID 管理、アクセス権限、コンプライアンスポリシーがデフォルトで適用され、すべてのアクション・出力は監査可能。エンタープライズが AI エージェントを導入する際の最大の懸念（データの外部流出・権限逸脱）に対応した設計。",
      "**料金と展開**: Copilot Cowork の利用には Microsoft 365 Copilot ライセンス（$30/ユーザー/月、既存エンタープライズ契約に追加）が必要。2026年5月1日には **Microsoft 365 E7: The Frontier Suite** が一般提供開始予定で、M365 E5・Copilot・Agent 365 を統合した包括パッケージとなる。現在は Frontier プログラム参加企業と Research Preview ユーザーに限定提供中。"
    ],
    "primarySources": [
      {
        "title": "Copilot Cowork: A new way of getting work done",
        "site": "Microsoft 365 Blog",
        "url": "https://www.microsoft.com/en-us/microsoft-365/blog/2026/03/09/copilot-cowork-a-new-way-of-getting-work-done/"
      },
      {
        "title": "Powering Frontier Transformation with Copilot and agents",
        "site": "Microsoft 365 Blog",
        "url": "https://www.microsoft.com/en-us/microsoft-365/blog/2026/03/09/powering-frontier-transformation-with-copilot-and-agents/"
      },
      {
        "title": "Introducing the First Frontier Suite",
        "site": "Microsoft Blog",
        "url": "https://blogs.microsoft.com/blog/2026/03/09/introducing-the-first-frontier-suite-built-on-intelligence-trust/"
      }
    ]
  },
  "google-colab-vscode-extension": {
    "body": [
      "2025年11月13日、Google は Visual Studio Code 向けの公式 Google Colab 拡張機能をリリースした。これにより、VS Code のエディタ環境から直接 Colab のクラウドランタイム（GPU / TPU を含む）に接続し、ローカルのノートブックファイル（.ipynb）をそのまま実行できるようになった。",
      "**無料 T4 GPU がローカル IDE に**: 無料プランで NVIDIA T4 GPU と TPU v5e にアクセス可能。ローカル環境のデバッグツール、IntelliSense、拡張機能がすべてクラウド GPU 上で動作する感覚で使える。CPU で1エポック約50分かかっていたファインチューニングが、T4 GPU で約3分に短縮されるケースも報告されている。有料プラン（Colab Pro / Pro+）では V100 や A100 も利用可能。",
      "**ローカルファイルと Git 統合**: 従来の Colab はブラウザ完結型で Git との連携が弱く、実験コードが分散しがちだった。VS Code 統合により「VS Code = Git 管理、Colab = GPU 実行」が一体化し、プロジェクト全体で統一的なワークフローを構築できるようになった。ローカルのファイルシステムに保存したノートブックをそのまま Colab ランタイムで実行する、という自然な開発体験が実現。",
      "**個人開発者への影響**: 高価な GPU を持っていない個人開発者でも、ローカルの使い慣れた VS Code 環境で機械学習モデルのファインチューニングやプロンプト実験を高速に回せるようになった。LLM のファインチューニング、LoRA の実験、画像生成モデルの試行など、これまで GPU の壁で諦めていた作業のハードルが大幅に下がっている。",
      "**注意点**: Web 版 Colab にあった一部機能（userdata.get() によるシークレット管理等）は未対応。無料プランの GPU は利用制限があり、長時間の学習には Pro 以上が必要。また、ランタイムの接続が不安定になるケースも報告されている。"
    ],
    "primarySources": [
      {
        "title": "Google Brings Colab Integration to Visual Studio Code",
        "site": "InfoQ",
        "url": "https://www.infoq.com/news/2025/11/visual-studio-code-colab-bridge/"
      },
      {
        "title": "Local code meets cloud compute: Using Google Colab in VS Code",
        "site": "Google Cloud Community",
        "url": "https://medium.com/google-cloud/local-code-meets-cloud-compute-using-google-colab-in-vs-code-206ff69483f4"
      },
      {
        "title": "Google Colab VS Code Extension: A Deep Dive",
        "site": "kambale.dev",
        "url": "https://kambale.dev/google-colab-in-vs-code-a-deep-dive-into-the-new-extension"
      }
    ]
  },
  "gemini-drop-march-2026": {
    "body": [
      "Google は2026年3月27日、月例アップデート「Gemini Drop」で Gemini アプリの5つの新機能を発表した。Gemini Drop は毎月の定例アップデートとして2025年末から継続しており、今回は音楽生成の大幅強化とユーザー囲い込み施策が目立つ内容。",
      "**Lyria 3 Pro（音楽生成の強化）**: Google の最先端音楽モデル Lyria 3 の上位版。従来の30秒制限から最大3分のトラック生成に対応し、写真やテキストから歌詞付きの高品質楽曲を作成可能。Google AI Ultra / Google One AI Premium サブスクライバー向け。Suno V5 や Udio と直接競合する機能で、Google エコシステム内で音楽生成が完結する。",
      "**チャット履歴の移行（Import Memory to Gemini）**: 他社の AI チャットボット（ChatGPT 等）からの会話履歴を数クリックで Gemini に移行できる機能。移行した履歴を基に Gemini がユーザーの好みや文脈を学習し、パーソナライズされた応答を提供する。他社サービスからの乗り換えハードルを下げる戦略的な施策。",
      "**Personal Intelligence の無料化**: これまで有料サブスクライバー限定だった Personal Intelligence を、米国の全 Gemini ユーザーに無料開放。Gmail、Google フォト、YouTube と連携し、旅行計画やプロジェクト管理などのパーソナライズされた支援を提供する。Google サービス横断のデータ活用が無料で使えるようになった点が大きい。",
      "**Gemini 3.1 Flash Live**: 音声会話に特化した次世代モデル。ピッチやペーシングなどの音響的ニュアンスを認識し、騒がしい環境でも複雑なタスクを処理可能。コンテキスト保持が従来の2倍に拡張され、繰り返し説明しなくても自然な対話が続く。2026年3月26日発表。",
      "**Google TV 向け Gemini**: Google TV に Gemini の視覚的回答とナレーション付き深掘り機能を統合。テレビ画面上で AI と対話しながらコンテンツを探索できる。"
    ],
    "primarySources": [
      {
        "title": "Gemini Drops: New updates to the Gemini app, March 2026",
        "site": "Google The Keyword",
        "url": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026/"
      },
      {
        "title": "Lyria 3 Pro",
        "site": "Google The Keyword",
        "url": "https://blog.google/innovation-and-ai/technology/ai/lyria-3-pro/"
      }
    ]
  },
  "cursor-automations-self-hosted-agents-2026": {
    "body": [
      "Cursor は2026年3月5日、新機能 **Automations** を発表した。これは「プロンプトを打ってエージェントを起動する」という従来のワークフローから脱却し、Slack メッセージ・GitHub PR マージ・PagerDuty インシデント・cron スケジュールなどをトリガーにエージェントを自動起動する仕組み。クラウドサンドボックス上でユーザー定義の MCP とモデル設定に従い動作し、過去の実行から学習する Memory 機能も備える。",
      "ユースケースは幅広い。セキュリティレビュー Automation は main へのプッシュごとに差分を監査し、高リスクの脆弱性を検出して Slack に投稿する。インシデント対応では PagerDuty をトリガーに Datadog MCP でログを調査し、修正案を Slack に返す。週次ダイジェストでは主要 PR・バグ修正・技術的負債を要約して投稿する。Cursor によると毎時数百件の Automation が実行されているという。",
      "3月25日にはさらに **Self-hosted Cloud Agents** を発表。コードベース・ビルド出力・シークレットをすべて自社ネットワーク内に保持したまま、Cursor のクラウドエージェント機能（隔離 VM・マルチモデルハーネス・プラグイン等）をそのまま利用できる。エンタープライズのセキュリティ要件に対応した設計で、Cursor ホスト型と同等の機能を提供する。",
      "Bloomberg によると Cursor の年間売上は20億ドルを突破し、直近3ヶ月で倍増。Ramp データでは生成 AI クライアントの約25%が Cursor を契約している。Automations と Self-hosted Agents は、開発者ツールからエンタープライズ向けプラットフォームへの転換を象徴する機能と言える。"
    ],
    "primarySources": [
      {
        "title": "Build agents that run automatically",
        "site": "Cursor Blog",
        "url": "https://cursor.com/blog/automations"
      },
      {
        "title": "Cursor is rolling out a new kind of agentic coding tool",
        "site": "TechCrunch",
        "url": "https://techcrunch.com/2026/03/05/cursor-is-rolling-out-a-new-system-for-agentic-coding/"
      },
      {
        "title": "Cursor Changelog (03-05-26)",
        "site": "Cursor",
        "url": "https://cursor.com/changelog/03-05-26"
      }
    ]
  },
  "copilot-agentic-code-review-ga-2026": {
    "body": [
      "GitHub は2026年3月5日、Copilot コードレビューをエージェント型ツール呼び出しアーキテクチャに移行し、一般提供（GA）を開始した。Copilot Pro・Pro+・Business・Enterprise の全プランで利用可能。従来のルールベースの指摘から、リポジトリ構造・関連コード・参照先を自律的に収集して分析するエージェント型に進化した。",
      "2025年4月の初回リリースから利用は10倍に成長し、累計6,000万件を突破。GitHub 上の PR の5件に1件以上が Copilot コードレビューを受けている。71%のレビューでアクション可能なフィードバックを提示し、残り29%では不要な指摘をせず沈黙を選ぶ設計。レビュー1件あたり平均5.1コメントだが、レビューチャーンの増加や品質低下は起きていないという。",
      "UX も大幅に改善。単一行ピン留めから複数行コメントに移行し、論理的なコード範囲にフィードバックを紐付ける。同一パターンの指摘はクラスタリングして認知負荷を軽減。バッチオートフィックスで同種のバグやスタイル問題を一括修正可能。さらにレビューコメントから直接 Copilot Coding Agent を呼び出して修正 PR を自動作成する連携も実現した。",
      "3月11日には GitHub CLI からの Copilot レビューリクエストにも対応。`gh pr create` や `gh pr edit` でターミナルから直接 AI レビューを依頼できる。エージェント型コードレビューは GitHub Actions 上で動作し、GitHub ホストランナーを使用していれば追加セットアップは不要。"
    ],
    "primarySources": [
      {
        "title": "Copilot code review now runs on an agentic architecture",
        "site": "GitHub Changelog",
        "url": "https://github.blog/changelog/2026-03-05-copilot-code-review-now-runs-on-an-agentic-architecture/"
      },
      {
        "title": "60 million Copilot code reviews and counting",
        "site": "GitHub Blog",
        "url": "https://github.blog/ai-and-ml/github-copilot/60-million-copilot-code-reviews-and-counting/"
      },
      {
        "title": "Request Copilot code review from GitHub CLI",
        "site": "GitHub Changelog",
        "url": "https://github.blog/changelog/2026-03-11-request-copilot-code-review-from-github-cli/"
      }
    ]
  },
  "claude-code-computer-use-review-march-2026": {
    "body": [
      "Anthropic は2026年3月、Claude Code に複数の大型アップデートを投入した。3月23日に追加された **Computer Use** は Pro / Max ユーザー向けで、Claude がファイルを開く・開発ツールを操作する・画面上でクリック操作するなどを追加セットアップなしで実行可能にする。従来の CLI 操作に加え、GUI アプリケーションとの連携が可能になった。",
      "出力上限も大幅に引き上げられた。**Opus 4.6 のデフォルト出力が64Kトークン、最大128Kトークン**に拡張（Sonnet 4.6 も同様に128K対応）。大規模なコード生成やリファクタリングで途中切断されるケースが大幅に減少する。また `--bare` フラグの追加により、スクリプトからの `-p` 呼び出し時にフック・LSP・プラグイン同期をスキップして高速実行が可能に。",
      "3月9日にリリースされた **Code Review** 機能はマルチエージェントシステムで、AI が生成したコードのロジックエラーを自動検出する。Claude Code の普及に伴い AI 生成コードの量がレビューのボトルネックになっている問題に対応したもの。Cloud Auto-fix も強化され、Web / モバイルセッションから自動的に PR をフォローし、CI 失敗の修正やレビューコメントへの対応をクラウド上で実行する。",
      "その他、`--channels` によるスマートフォンへの承認プロンプト転送（Research Preview）、`/plan` コマンドへのオプション引数追加、カスタム自動メモリディレクトリ対応、大規模セッション再開時のメモリ使用量改善など、多数の改善が含まれる。TechCrunch によると Claude Code の run-rate 収益は25億ドルを超えており、Anthropic の主力プロダクトとしての地位を確立している。"
    ],
    "primarySources": [
      {
        "title": "Anthropic hands Claude Code more control, but keeps it on a leash",
        "site": "TechCrunch",
        "url": "https://techcrunch.com/2026/03/24/anthropic-hands-claude-code-more-control-but-keeps-it-on-a-leash/"
      },
      {
        "title": "Anthropic launches code review tool to check flood of AI-generated code",
        "site": "TechCrunch",
        "url": "https://techcrunch.com/2026/03/09/anthropic-launches-code-review-tool-to-check-flood-of-ai-generated-code/"
      },
      {
        "title": "Claude Code Changelog",
        "site": "Claude Code Docs",
        "url": "https://code.claude.com/docs/en/changelog"
      }
    ]
  },
  "anthropic-claude-writing-itself-74-launches-2026": {
    "body": [
      "Anthropic CEO **Dario Amodei** は2026年1月20日、ダボス会議（世界経済フォーラム）で The Economist 編集長 Zanny Minton Beddoes のインタビューに応じ、衝撃的な発言を行った。「Anthropic にはもうコードを書かないエンジニアがいる。モデルにコードを書かせて、自分はそれを編集しレビューするだけだ」。さらに「Anthropic でコードを書くということは、次世代の Claude を設計すること。つまり Claude が次の Claude 自身を設計している。完全にではないが、大部分を」と述べた。",
      "この発言を2月3日の Cisco AI Summit で Labs 責任者 **Mike Krieger**（Instagram 共同創業者）がさらに踏み込んで裏付けた。「現在、Anthropic のほとんどのプロダクトは事実上100% Claude が書いている。我々がやったのは、それを信頼できる正しい足場（scaffolds）を作ること」。Krieger は「Claude が Claude を書いている」と明言し、2025年3月に Amodei が「6ヶ月以内に AI がコードの90%を書く」と予測した際に「クレイジーだと思われた」が、その通りになったと述べた。",
      "数字がこの主張を裏付けている。Product Compass の調査によると、Claude チームは2026年2月1日からの**52日間で74の主要リリース**を出荷した。内訳は Claude Code 28件、Cowork 15件、API・インフラ 18件、モデル・プラットフォーム 13件。社内では1日あたり60〜100の内部リリースが行われ、エンジニアは業務の約60%に Claude を使用（1年前の28%から倍増）、生産性は約50%向上したという。Claude Cowork 自体が Claude Code を使って10日間で構築されたことも象徴的だ。",
      "Claude Code 責任者の **Boris Cherny** は「2ヶ月以上自分でコードを書いていない。100%が Claude Code と Opus 4.5/4.6 で書かれている」と投稿。チームの採用方針もスペシャリストからジェネラリスト重視に転換した。「過去に学んだスキルの多くは LLM を使ったコーディングには直接活かせない。モデルが詳細を埋められるからだ」。Claude Code 単体の年間 run-rate 収益は25億ドルを超え、Claude 4 系モデルのリリース以降、利用量は300%増加した。",
      "Amodei は Davos での Demis Hassabis（Google DeepMind CEO）との共同セッションで、AI が全領域で人間を超える時期について「1〜2年」と予測（Hassabis は「5〜10年」）。AI が自身の後継モデルを設計する再帰的ループが加速しており、「そのループがどれだけ速く閉じるかが問題だ」と述べた。チップ製造やトレーニング時間という物理的制約がボトルネックだが、Claude が Claude を書く現実はすでにその入り口にある。"
    ],
    "primarySources": [
      {
        "title": "Anthropic CEO Dario Amodei at World Economic Forum (WSJ Interview)",
        "site": "TranscriptMate",
        "url": "https://transcriptmate.com/interviews/dario-amodei/dario-amodei-on-ai-s-impact-opportunity-risk-and-societal-adaptation"
      },
      {
        "title": "Mike Krieger claims Claude is essentially writing itself",
        "site": "IT Pro",
        "url": "https://www.itpro.com/software/development/anthropic-labs-chief-mike-krieger-claims-claude-is-essentially-writing-itself-and-it-validates-a-bold-prediction-by-ceo-dario-amodei"
      },
      {
        "title": "Claude Team is Shipping Like Crazy: 74 Releases in 52 Days",
        "site": "Product Compass",
        "url": "https://www.productcompass.pm/p/claude-shipping-calendar"
      },
      {
        "title": "Top engineers at Anthropic, OpenAI say AI now writes 100% of their code",
        "site": "Fortune",
        "url": "https://fortune.com/2026/01/29/100-percent-of-code-at-anthropic-and-openai-is-now-ai-written-boris-cherny-roon/"
      }
    ]
  },
  "openai-codex-plugin-cc-claude-code-2026": {
    "body": [
      "OpenAI は Claude Code 向けの公式プラグイン **codex-plugin-cc** を GitHub（openai/codex-plugin-cc）で公開した。Claude Code のプラグインマーケットプレイスから `/plugin marketplace add openai/codex-plugin-cc` でインストールでき、Claude Code のセッション内から直接 Codex の機能を呼び出せる。競合の開発環境に自社ツールを公式統合するという異例の動きだ。",
      "主要コマンドは4つ。`/codex:review` は通常の Codex コードレビューを実行し、Codex 内の `/review` と同等の品質を提供する。`/codex:adversarial-review` はより懐疑的な視点でコードを検証するステアラブルレビュー。`/codex:rescue` は Codex のサブエージェントにタスクを丸ごと委任する。`/codex:setup` は Codex の環境確認と未インストール時の自動セットアップを行う。",
      "注目機能は **Review Gate**。`/codex:setup --enable-review-gate` で有効化すると、Claude の出力に対して Stop フックで Codex レビューが自動実行され、問題が検出された場合は Claude が修正するまで処理を継続する。Claude（実装）→ Codex（レビュー）の自動ループが回る設計だが、使用量を急速に消費するため監視下での利用が推奨されている。プラグインはローカルの Codex CLI とアプリサーバーを経由して動作し、**ChatGPT サブスクリプション（Plus/Pro/Team）か OpenAI API キーのどちらか一方**が必要（完全無料・認証なしでは利用不可）。サブスクリプション認証の場合、利用はプランの使用枠（レートリミット）内で処理され、追加の従量課金は発生しない。使用するモデルは `~/.codex/config.toml` の `model` キーで指定でき、Team プラン以上であれば **GPT-5.4** を含むプラン対応モデルがそのまま利用可能。`codex login` でブラウザ認証を済ませれば、API キーの発行・管理なしに Claude Code 内から GPT-5.4 によるレビューやタスク委任が行える。",
      "この公式プラグインに先行して、OSS コミュニティでは Claude↔Codex 連携が活発に開発されていた。tuannvm/codex-mcp-server（Codex CLI を MCP サーバーでラップ）、ching-kuo/claude-codex（Claude が計画・Codex が実装のループ）、abhishekgahlot2/codex-claude-bridge（Claude Code Channels を使った双方向ブリッジ）など多数のプロジェクトが登場。OpenAI が公式プラグインを出したことで、このエコシステムが正式に認められた形となる。",
      "**料金体系**は認証方式で大きく異なる。**ChatGPT サブスクリプション認証**（`codex login`）の場合、Codex CLI の利用はプランの使用枠内で処理され、トークン単位の従量課金は発生しない。Plus（月額20ドル）は GPT-4o 相当のレートリミット、Pro（月額200ドル）は実質無制限、Team（1人あたり月額25〜30ドル）は GPT-5.4 を含む上位モデルにアクセスでき、チーム管理機能も付く。一方 **OpenAI API キー認証**（`OPENAI_API_KEY`）の場合は完全従量制で、使った分だけ請求される。API はサブスクリプションと独立した課金体系のため、ChatGPT のプランに関係なくトークン消費量に応じたコストが発生する。利用状況は platform.openai.com/usage で確認可能。Claude Code 側の Anthropic サブスクリプション（Pro: 月額20ドル / Max: 月額100〜200ドル）と合わせると、**最も安価な組み合わせは Anthropic Pro + ChatGPT Plus の月額40ドル**、GPT-5.4 を使いたい場合は **Anthropic Pro + ChatGPT Team の月額45〜50ドル**が目安となる。Review Gate を有効化すると両方の使用枠を急速に消費するため、コスト管理の観点からも監視下での利用が推奨される。",
      "背景には OpenAI の Codex プラグインシステム全体の拡充がある。3月27日に発表されたプラグイン機能は、スキル・アプリ統合・MCP サーバーをバンドルして共有可能にする仕組みで、Figma・Notion・Sentry・Slack 等20以上のプラグインが利用可能。さらに GitHub イベントをトリガーにする Codex Triggers も同時発表された。Claude Code と Codex のプラグインアーキテクチャは MCP を共通基盤としており、ツール間の相互運用性は今後さらに進むと見られる。",
      "**Codex を呼び出せる環境**は Claude Code だけではない。**VS Code** では Codex 公式拡張機能（OpenAI Codex Extension）からエディタ内のサイドパネルで直接 Codex を利用でき、選択コードのレビューやインラインでの修正提案が可能。**Cursor** も同様に MCP サーバー経由で Codex を統合でき、tuannvm/codex-mcp-server を設定すれば Composer セッション内から Codex のレビューやタスク委任を呼べる。それぞれの環境の違いを整理すると、**Claude Code + codex-plugin-cc** は CLI 完結で Review Gate による自動レビューループが最大の特徴、プラグインが公式サポートされているため設定が最も簡単。**VS Code + Codex 拡張** は GUI ベースでエディタのコンテキスト（開いているファイル・選択範囲）を直接渡せる点が強く、非 CLI ユーザーに向いている。**Cursor + MCP 経由** は Composer のマルチモデル切り替え（Sonnet 4.6 / Opus 4.6 / GPT-5.4）と組み合わせられるが、MCP サーバーの設定が必要でセットアップはやや手間がかかる。いずれの環境でも認証は共通で、`codex login` によるサブスクリプション認証か `OPENAI_API_KEY` による API 認証が必要となる。",
      "---",
      "**編集履歴** — 2026-04-01: ChatGPT サブスクリプション認証での GPT-5.4 利用、API キーとサブスクリプションの料金体系比較、VS Code・Cursor からの Codex 呼び出しと環境別の違いを追記。"
    ],
    "primarySources": [
      {
        "title": "openai/codex-plugin-cc: Use Codex from Claude Code to review code or delegate tasks",
        "site": "GitHub",
        "url": "https://github.com/openai/codex-plugin-cc"
      },
      {
        "title": "OpenAI introduces plugins for its Codex programming assistant",
        "site": "SiliconANGLE",
        "url": "https://siliconangle.com/2026/03/27/openai-introduces-plugins-codex-programming-assistant/"
      },
      {
        "title": "OpenAI's Codex Gets Plugins — And The Real Fight For AI-Powered Development Begins",
        "site": "Web And IT News",
        "url": "https://www.webanditnews.com/2026/03/28/openais-codex-gets-plugins-and-the-real-fight-for-ai-powered-development-begins/"
      }
    ]
  },
  "m365-copilot-researcher-critique-council-2026": {
    "body": [
      "Microsoft は2026年3月30日、**M365 Copilot** の Researcher エージェントに **Critique** と **Council** の2つのマルチモデル機能を追加し、Frontier プログラム参加者向けに即日提供を開始した。これにより Copilot は単一モデル依存から脱却し、OpenAI と Anthropic のモデルを組み合わせる「生成と評価の分離」アーキテクチャへ移行する。",
      "**Critique** は複雑な調査タスク向けのマルチモデル Deep Research システム。**GPT-5.4** がタスクの計画・検索の反復・初稿の起草を担い、**Claude Opus 4.6** が専門レビュアーとして事実確認・引用精査・論理的整合性のチェックを行う。この役割は逆転も可能で、Claude が起草し GPT がレビューする構成にもできる。モデルピッカーで「Auto」を選択するとデフォルトで Critique が適用される。",
      "性能評価には Microsoft が策定した **DRACO（Deep Research Accuracy, Completeness, and Objectivity）** ベンチマークを使用。10分野・100件の複雑な調査タスクで構成される。Critique 搭載の Researcher は集計スコアで **+7.0ポイント（SEM ±1.90）** の改善を達成し、Perplexity Deep Research（Claude Opus 4.6 単体）を **+13.88%** 上回り業界最高スコアを記録した（自社評価）。改善幅は「分析の広さと深さ」（+3.33）、「表現品質」（+3.04）、「事実の正確性」（+2.58）の順に大きく、全次元で統計的に有意な差（p < 0.0001）が確認された。",
      "**Council** は並列比較モード。Anthropic と OpenAI のモデルが同時に同じ調査を実行し、それぞれ独立したレポートを生成する。完了後、ジャッジモデルが両レポートを評価し、合意点と見解の相違を要約した統合レポートを提示する。単一モデルの盲点を補完し、ユーザーが複数の視点から判断できる設計。モデルピッカーで「Model Council」を選択して利用する。",
      "同日には **Copilot Cowork** の Frontier プログラム向け提供開始も発表された。Anthropic の Claude 技術を基盤とし、複数ステップの業務を自律的に計画・実行する。Microsoft の戦略は明確で、Google Gemini や Anthropic Claude、OpenAI ChatGPT が単体モデルで Deep Research を競う中、あえて競合同士のモデルを組み合わせるマルチモデル路線で差別化を図っている。M365 Copilot のライセンスは月額30ドル/ユーザーで、Frontier 機能は追加コストなしで利用可能（一部追加利用分は別途課金）。2026年1月時点の有料 Copilot シートは1,500万で、商用 M365 ユーザー4.5億人の約3.3%にとどまる。"
    ],
    "primarySources": [
      {
        "title": "Introducing multi-model intelligence in Researcher",
        "site": "Microsoft Tech Community",
        "url": "https://techcommunity.microsoft.com/blog/microsoft365copilotblog/introducing-multi-model-intelligence-in-researcher/4506011"
      },
      {
        "title": "GPT drafts, Claude critiques: Microsoft blends rival AI models in new Copilot upgrade",
        "site": "GeekWire",
        "url": "https://www.geekwire.com/2026/gpt-drafts-claude-critiques-microsoft-blends-rival-ai-models-in-new-copilot-upgrade/"
      },
      {
        "title": "Copilot Cowork: Now available in Frontier",
        "site": "Microsoft 365 Blog",
        "url": "https://www.microsoft.com/en-us/microsoft-365/blog/2026/03/30/copilot-cowork-now-available-in-frontier/"
      }
    ]
  },
  "x-grok-auto-translation-2026": {
    "body": [
      "X（旧Twitter）は2026年3月29〜30日、xAI の **Grok** を使った投稿の自動翻訳・自動レコメンド機能を本格的に展開開始した。Elon Musk は「Grok が他言語の投稿を自動翻訳し、レコメンドし始めている」と投稿し、「これは長年の目標だった」と述べた。従来は投稿ごとに「翻訳を表示」ボタンをタップする必要があったが、新機能ではタイムライン上の外国語投稿が自動的にユーザーの設定言語で表示される。",
      "X のプロダクト責任者 **Nikita Bier** は「歴史上最大の文化交流がまさに始まった」と投稿。実際に日米間では活発な反応が起きており、米国ユーザーが日本語の投稿に直接反応するケースが急増している。Grok は日本で既に高い人気を持ち、AI コンパニオン「Ani」の導入時には日本の App Store で1位を獲得し、OpenAI（3位）や Google Gemini（5位）を抜いた実績がある。Bier は当時「日本が起きた瞬間にサーバーが落ちた」と語っていた。",
      "技術的には、翻訳自体に加えてレコメンドの言語横断が重要なポイントとなる。どの外国語投稿をユーザーに表示する価値があるかを判断するには、ユーザーの関心・ネットワーク・コンテンツの関連性を言語境界を越えてモデリングする必要がある。X は2025年以降、アルゴリズムと AI 機能を全面的に Grok に移管しており、「For You」タブの表示内容はすべて Grok のアルゴリズムが決定している。Google 翻訳から Grok 翻訳への移行は2025年半ばに開始されていた。",
      "一方で懸念も複数指摘されている。自動翻訳はデフォルトで有効化されており、グローバルな一括オフ設定が存在しない。言語ごとに個別にオフにする必要があり、UX 上の不満が出ている。より深刻なのは「意図しないグローバル拡散」のリスクだ。国内向けのつもりで書いた政治的主張や過激な投稿が、自動翻訳を通じて海外に流通し始めるケースが報告されている。Japan Times は AI 翻訳への過度な依存が「文化的整合性の喪失」につながるリスクを論じ、特に日本語コンテンツの原作の意図が損なわれる懸念を指摘した。",
      "AI による言語障壁の撤廃は、開発者コミュニティにも影響を及ぼす。英語圏で共有される技術的知見やオープンソースの議論が日本語話者にリアルタイムで届くようになる反面、文脈やニュアンスの損失が誤解を生むリスクもある。翻訳精度の問題は Grok に限らず全 LLM の課題であり、特にスラング・技術用語・文化依存の表現で品質にばらつきがある。「翻訳」ではなく「翻案」になっていないかをユーザー自身が判断する必要がある点は変わらない。"
    ],
    "primarySources": [
      {
        "title": "X、英語から日本語に自動翻訳開始「歴史上最大の文化交流」",
        "site": "Impress Watch",
        "url": "https://www.watch.impress.co.jp/docs/news/2097609.html"
      },
      {
        "title": "Xの自動翻訳で「言葉の壁」崩れる",
        "site": "ITmedia NEWS",
        "url": "https://www.itmedia.co.jp/news/articles/2603/30/news142.html"
      },
      {
        "title": "X Expands Grok Translation on Posts In-Stream",
        "site": "Social Media Today",
        "url": "https://www.socialmediatoday.com/news/x-formerly-twitter-expands-grok-translations-posts/757620/"
      }
    ]
  },
  "claude-code-computer-use-deep-dive-2026": {
    "body": [
      "Anthropic は2026年3月23日、Claude Code に **Computer Use** を Research Preview として追加した。Pro および Max プラン向けで、macOS 上の Claude Code v2.1.85 以降で利用可能。Claude が CLI のターミナルセッション内からアプリを起動し、画面を見て、クリック・タイプ・スクロールを行い、スクリーンショットを撮影できるようになった。Elon Musk、Satya Nadella らが AI エージェントのデスクトップ操作に注目する中、Anthropic は開発者の CLI ワークフローに直接統合するアプローチを選んだ。",
      "ユースケースは GUI が必要なタスク全般に及ぶ。**ネイティブアプリのビルドと検証**では、Swift アプリをコンパイル→起動→全タブをクリック→エラー状態をスクリーンショットという一連の作業を1会話で完了する。**UI テスト**では Playwright の設定やテストハーネスなしに Electron アプリのオンボーディングフローをクリックスルーで検証。**レイアウトバグの再現**ではウィンドウをリサイズしてバグを再現→スクショ→CSS 修正→再検証まで自動実行。**iOS Simulator の操作**や GUI のみのデザインツール・ハードウェア制御パネルの操作にも対応する。",
      "ツールの優先順位は明確に定義されている。Claude はまず **MCP サーバー**（最も精密）を試し、次に **Bash**、次に **Claude in Chrome**（ブラウザ操作）、最後に **Computer Use**（最も広範だが最も遅い）をフォールバックとして使う。つまり Computer Use は「他の手段では到達できないもの」専用の位置づけだ。有効化は `/mcp` メニューから `computer-use` サーバーを有効にし、macOS の Accessibility と Screen Recording の権限を付与する。プロジェクト単位で設定が保持される。",
      "セキュリティモデルは多層構造。**アプリ単位の承認制**で、セッション開始時に Claude が使いたいアプリごとに許可を求める。ブラウザと取引プラットフォームは閲覧のみ、ターミナルと IDE はクリックのみ、その他のアプリはフルコントロールという3段階の権限設計。ターミナルウィンドウはスクリーンショットから除外され、Claude が自身の出力を読むことによるプロンプトインジェクションを防止する。Machine-wide ロックにより同時に1セッションしか画面を操作できず、Esc キーでいつでも即座に中断可能。Claude が操作中は他のアプリが非表示になり、操作対象のアプリのみが表示される。",
      "この機能の背景には2つの戦略的動きがある。2026年2月25日に発表された **Vercept の買収**（1,600万ドル調達のシアトル AI スタートアップ）で、画面認識・デスクトップ自動化の技術基盤を獲得。Vercept の「Vy」は Apple MacBook 上でタスクを自律実行するクラウドエージェントだった。さらに OSWorld ベンチマークでは Claude Sonnet のスコアが2024年末の15%未満から **72.5%** に到達し、OpenAI GPT-5.2 の38.2%を大きく上回る。現時点の制限として macOS のみ対応（Windows 未対応）、Team/Enterprise プラン未対応、`-p` フラグの非対話モード未対応がある。デスクトップアプリ版では Dispatch 機能と連携し、スマートフォンからタスクを指示して PC で自動実行→完了後に結果を確認、という非同期ワークフローも可能。"
    ],
    "primarySources": [
      {
        "title": "Let Claude use your computer from the CLI",
        "site": "Claude Code Docs",
        "url": "https://code.claude.com/docs/en/computer-use"
      },
      {
        "title": "Anthropic says Claude can now use your computer to finish tasks for you",
        "site": "CNBC",
        "url": "https://www.cnbc.com/2026/03/24/anthropic-claude-ai-agent-use-computer-finish-tasks.html"
      },
      {
        "title": "Claude Code and Cowork can now use your computer",
        "site": "Engadget",
        "url": "https://www.engadget.com/ai/claude-code-and-cowork-can-now-use-your-computer-210000126.html"
      },
      {
        "title": "Anthropic acquires Vercept to advance Claude's computer use capabilities",
        "site": "Anthropic",
        "url": "https://www.anthropic.com/news/acquires-vercept"
      }
    ]
  },
  "claude-code-token-drain-prompt-cache-bug-2026": {
    "body": [
      "## 何が起きているのか",
      "2026年3月23日頃から、Claude Code の有料プラン（Pro / Max / Max 5x / Max 20x）ユーザーの間で、**5時間のセッション枠が異常な速度で消費される**報告が急増している。",
      "「昨日まで5時間使えていたのに、今日は1.5時間で使用不能になった」「1プロンプトで使用量が 21% → 100% に跳ね上がった」「CLI を閉じているのに使用量が増え続ける」— GitHub Issue #38335 には105件以上のリアクションがつき、48時間で7件の類似 Issue が立った。",
      "MacRumors、The Register、PiunikaWeb など複数のテック系メディアがこの問題を報じており、Reddit の r/ClaudeCode と r/Anthropic では返金・解約の議論が白熱している。世界中のユーザーが同様の症状を証言しており、地域に依存しないグローバルな問題であることが示されている。",
      "## 原因: prompt cache が壊れている",
      "Claude Code は会話のたびに、システムプロンプト・CLAUDE.md・会話履歴をまとめて API に送信する。通常は **prompt cache** によって既読部分は安価な cache_read として処理されるが、**キャッシュが効かなくなると全てが cache_creation（新規書き込み）として再計算される**。コストは10〜20倍に膨れ上がる。",
      "Reddit ユーザー「skibidi-toaleta-2137」が、Claude Code の228MBバイナリを **Ghidra・MITM プロキシ・radare2** で数日かけて逆解析し、**2つの具体的なバグ**を特定した。",
      "## バグ1: Bun フォーク内の文字列置換",
      "Anthropic のカスタム Bun フォークが、全 API リクエストで**課金用センチネル文字列**を検索・置換している。会話履歴に課金関連のキーワードが含まれると、置換が意図しない箇所にヒットし、**キャッシュプレフィックスが破壊される**。結果として安価な cache_read ではなく、毎回フルリビルドが走る。",
      "## バグ2: --resume が常にキャッシュを破壊",
      "`--resume` でセッションを再開すると、会話履歴が**一切キャッシュされず**、毎メッセージで全履歴が cache_creation として再送される。GitHub Issue #34629 の検証では、v2.1.69 以降でこのリグレッションが発生し、**1メッセージあたりのコストが約20倍**に増加していることが確認された。",
      "最も極端な報告は Issue #38029 にある。セッション再開時にユーザー入力なしで使用量が80%に達し、45分のミニマルな操作で100%に。**入力27Kトークンに対し、出力65万2,069トークン**が生成されていた。「使いすぎ」ではなく、**裏でトークンが勝手に燃えていた**のだ。",
      "## Anthropic の対応",
      "問題が X で拡散されると、プロダクトリード **Lydia Hallie** が「チームの**最優先事項**。多くのユーザーをブロックしていることは認識している。アップデートがあり次第共有する」と投稿。Thariq Shihipar も「prompt cache のバグは微妙（subtle）だが、掘り下げている」とコメントした。",
      "ただし Anthropic は同時期に、**ピーク時間帯（PT 5am〜11am）のセッション制限を意図的に厳しくした**ことも認めている。「約7%のユーザーが以前はヒットしなかったセッション制限に達する」と説明。需要が GPU キャパシティを超えたことが背景にある。",
      "つまり現在の問題は**2つの要因が重なっている**: 1) 意図的なピーク時間帯の制限強化、2) prompt cache のバグによる想定外のトークン消費。ユーザーにとっては両者の区別がつかず、「月$200払っているのに30分で使えなくなる」という体験になっている。",
      "## 需要急増の背景: QuitGPT ムーブメント",
      "2月下旬に OpenAI が米国防総省との契約を発表したことで、ChatGPT のアンインストールが**1日で295%急増**。「QuitGPT」運動は250万人の参加者を集め、Claude は**米国 App Store で初の1位**を獲得した。この大量流入が GPU キャパシティを圧迫し、Anthropic のインフラに想定外の負荷をかけている。",
      "## 今すぐできる対策",
      "1) Claude Code を**最新版にアップデート**する（CHANGELOG にキャッシュ修正あり）\n2) `--resume` で巨大セッションを再開しない（**新規セッションで始める**）\n3) **CLAUDE.md** にプロジェクト文脈を書いておけば、新規セッションでも立ち上がりが速い\n4) **MCP 接続数を最小限に**する（ツールスキーマがコンテキストを肥大化させる）\n5) `/compact` で会話を圧縮、`/clear` で不要な履歴を削除\n6) 混雑時は `/model` で **Sonnet 4.6** に切り替える（レート制限が緩い）",
      "## 本質的な問題",
      "Anthropic は使用量制限の具体的な計算方法を公開していない。ユーザーにはトークン消費を事前に予測する手段がなく、「5倍の使用量」が実際にどれだけの作業に相当するのか不透明だ。$200/月の Max 20x プランでも、キャッシュバグの影響下では30分で枯渇しうる。",
      "「AI との付き合い方を設計する」ことが最強の対策であることに変わりはないが、そもそもバグで裏側のトークンが燃えている状態では、設計努力だけでは限界がある。Anthropic の迅速なバグ修正と、使用量計算の透明化が求められている。",
      "## 新たな異変: AI が「セッション終了」を提案し始める",
      "トークン消費バグと前後して、Claude Code ユーザーの間で**もう一つの不自然な挙動**が報告されている。セッション中盤で Claude が突然「この辺りで一旦セッションを区切りましょうか」「残りのコンテキストを考慮すると、新しいセッションで続けた方が効率的です」といった**早期終了の提案**をするようになったのだ。",
      "Anthropic の公式ドキュメントによれば、Claude 4.6 モデルにはコンテキストウィンドウの残量を認識する機能があり、残りが少なくなると「自然に作業を切り上げようとする」設計になっている。対策として CLAUDE.md に「コンテキストが残り少なくなっても勝手にセッションを終了しないこと」と明記するよう推奨されている。",
      "しかしユーザーにとっては、prompt cache バグでトークンが裏で燃えている状態で「もうすぐコンテキストがなくなります」と言われるのは二重の打撃だ。**本来なら5時間使えるはずのセッションが1時間で枯渇し、その上 AI 自身が「もうやめましょう」と言い出す**。月額$200を支払っているユーザーの怒りは当然だろう。",
      "## ユーザーの離反: OpenAI Codex への移行が加速",
      "この状況を受け、開発者コミュニティでは **OpenAI Codex** への移行が目に見える形で進んでいる。Reddit の r/ClaudeCode や r/cursor では「Claude Code は品質は高いが使い物にならない。Codex は若干品質が落ちるが実際に使える」という声が500人以上の開発者から上がっている。",
      "ブラインドテストでは Claude Code が **67% の勝率**を維持しており、コード品質では依然として優位だ。しかし「30分で制限に達するツールと、終日使えるツールのどちらを選ぶか」という問いに対し、多くの開発者が実用性を選び始めている。「キーストロークは Codex、コミットは Claude Code」という使い分けも現れ、**Claude Code を「最後の仕上げ」にしか使わない**開発者が増えている。",
      "The Register は「Anthropic admits Claude Code quotas running out too fast」と報じ、Anthropic 自身も問題を認めている状況だ。",
      "さらに皮肉なことに、OpenAI は3月30日に **codex-plugin-cc** をリリースした。これは **Codex を Claude Code の内部に埋め込む**プラグインであり、ユーザーが自分で移行しなくても OpenAI 側から迎えに来る戦略だ。Claude Code の制限にフラストレーションを感じたユーザーが、そのまま Claude Code の中から Codex に切り替えられるようになる。",
      "## 「悪夢の1週間」— 皮肉な同時多発",
      "2026年3月最終週に起きた出来事を並べると、その皮肉さが際立つ。",
      "**3月26日**: CMS 設定ミスで未発表モデル Mythos がリーク。\n**3月26日**: Anthropic がピーク時のセッション制限を意図的に厳格化。\n**3月29日**: prompt cache バグがバイナリ解析で発覚。\n**3月31日**: Claude Code の全ソースコード（51万行）が npm ソースマップ経由で流出。\n**3月31日**: axios サプライチェーン攻撃が発覚（Claude Code も axios に依存）。\n**同週**: AI がセッション早期終了を提案する挙動が多数報告。\n**同週**: OpenAI が codex-plugin-cc を投入。",
      "ソースコードが丸見えになり、レート制限に不満が爆発し、AI 自身が「もうやめましょう」と言い出し、競合が移行プラグインを投入する — これが**わずか1週間で同時に起きた**。Anthropic にとっては技術的信頼・製品信頼・セキュリティ信頼の三重の危機であり、ユーザーの「Claude Code は本当に大丈夫なのか」という不安は、単なるバグ報告を超えた根本的な信頼の問題に発展しつつある。",
      "## 編集履歴",
      "【初版】2026年3月31日 — prompt cache バグの速報として公開。\n【追記1】同日 — Claude Code がセッション早期終了を提案する新挙動、OpenAI Codex への移行トレンド、codex-plugin-cc のリリース、同週のソースコード流出との皮肉な同時性について追記。",
      "注意: 本記事は2026年3月31日時点の情報に基づく。Anthropic はバグ修正を進行中であり、最新の Claude Code にアップデートすることで一部の問題が改善される可能性がある。"
    ],
    "tables": [
      {
        "title": "Claude Code トークン消費バグの経緯",
        "headers": [
          "日付",
          "出来事",
          "詳細"
        ],
        "rows": [
          [
            "1月",
            "v2.1.1 で異常消費報告開始",
            "同一ワークフローで4倍以上のトークン消費。Issue #16856"
          ],
          [
            "2月8日",
            "cache_read が使用量の99.93%を占有",
            "CLAUDE.md 再読み込みが原因。Issue #24147"
          ],
          [
            "2月26日",
            "prompt cache 未動作の報告",
            "Issue #28899（修正済み・クローズ）"
          ],
          [
            "3月13〜28日",
            "Anthropic がオフピーク増量を実施",
            "増量終了後に「急に制限が厳しくなった」と感じるユーザー続出"
          ],
          [
            "3月23日",
            "Max プランで大量の異常消費報告",
            "Issue #38335 に105+リアクション。MacRumors 等が報道"
          ],
          [
            "3月26日",
            "Anthropic がピーク時制限強化を発表",
            "Thariq Shihipar「約7%のユーザーに影響」"
          ],
          [
            "3月29日",
            "Reddit ユーザーがバイナリ逆解析",
            "Ghidra + MITM で2つの cache バグを特定。Alex Volkov が X で拡散"
          ],
          [
            "3月31日",
            "Lydia Hallie「最優先で調査中」",
            "Anthropic が公式にバグの存在を認める"
          ],
          [
            "3月31日",
            "Codex 移行の動きが顕在化",
            "Reddit で500+開発者が「品質より実用性」を選択。OpenAI が codex-plugin-cc を投入"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "[BUG] Abnormal Usage on Session Resume — Issue #38029",
        "site": "GitHub",
        "url": "https://github.com/anthropics/claude-code/issues/38029"
      },
      {
        "title": "[BUG] Max plan session limits exhausted abnormally fast — Issue #38335",
        "site": "GitHub",
        "url": "https://github.com/anthropics/claude-code/issues/38335"
      },
      {
        "title": "[BUG] Prompt cache regression in --resume — Issue #34629",
        "site": "GitHub",
        "url": "https://github.com/anthropics/claude-code/issues/34629"
      },
      {
        "title": "[BUG] Conversation history invalidated — Issue #40524",
        "site": "GitHub",
        "url": "https://github.com/anthropics/claude-code/issues/40524"
      },
      {
        "title": "Claude Code Users Report Rapid Rate Limit Drain, Suspect Bug",
        "site": "MacRumors",
        "url": "https://www.macrumors.com/2026/03/26/claude-code-users-rapid-rate-limit-drain-bug/"
      },
      {
        "title": "Anthropic looking into cache bugs blamed for Claude usage limit drain",
        "site": "PiunikaWeb",
        "url": "https://piunikaweb.com/2026/03/31/claude-cache-bugs-tokens-20x-more-anthropic-investigating/"
      },
      {
        "title": "Anthropic admits Claude Code quotas running out too fast",
        "site": "The Register",
        "url": "https://www.theregister.com/2026/03/26/anthropic_tweaks_usage_limits/"
      },
      {
        "title": "Alex Volkov (@altryne) — cache バグの拡散ポスト",
        "site": "X",
        "url": "https://x.com/altryne/status/2038676458026189225"
      },
      {
        "title": "Lydia Hallie (@lydiahallie) — 「最優先で調査中」",
        "site": "X",
        "url": "https://xcancel.com/lydiahallie/status/2038686571676008625"
      }
    ]
  },
  "claude-code-source-leak-npm-sourcemap-2026": {
    "body": [
      "2026年3月31日、Anthropic の AI コーディングツール **Claude Code** の**完全なソースコード**が、npm レジストリに公開されたパッケージ内のソースマップファイルを通じて誰でもダウンロードできる状態にあることが発覚した。UC Berkeley 博士課程でブロックチェーンセキュリティを研究する **Chaofan Shou**（@Fried_rice、FuzzLand CTO）の X 投稿をきっかけに一気に拡散された。",
      "ハッキングやゼロデイ攻撃ではない。**Anthropic 自身が npm publish 時にソースマップを除外し忘れた**、典型的なビルドパイプラインの設定ミスだ。",
      "## 流出の仕組み",
      "Claude Code の npm パッケージに含まれる `cli.js.map`（57MB）はソースマップファイルであり、本質的に JSON 形式で2つのキー配列を持つ。`sources`（ファイルパス）と `sourcesContent`（対応する完全なソースコード）だ。",
      "両者のインデックスは一対一で対応しており、逆コンパイルも難読化解除も不要。`sourcesContent` の中には**一字一句そのままのオリジナルコード**が保存されている。さらに、ソースマップ内には Anthropic の R2 ストレージバケットに置かれた `src.zip` への参照も含まれており、完全なソースツリーを ZIP でダウンロードすることも可能だった。",
      "## 流出の規模",
      "流出の規模は**4,756個のソースファイル**。うち**1,906個が Claude Code 本体の TypeScript/TSX ソースコード**、残り2,850個は node_modules の依存関係だ。合計で**512,000行以上**のコードが公開された状態となった。",
      "流出したコードは古いバージョンではなく、**現行最新モデル claude-opus-4-6 をサポートする最新ビルド**であることが確認されている。ほぼ現役のプロダクションコードそのものだ。",
      "GitHub に即座に複数のミラーリポジトリが作成され、公開から数時間で1,000以上のスターを獲得。DMCA テイクダウンを恐れた一部のコピー者は、オリジナルの TypeScript から **Python に書き換えて**再公開するなどの動きも見られる。Anthropic は DMCA テイクダウンを進めているが、既に多数のコピーが拡散しており収集がつかない状態だ。",
      "## アーキテクチャの全容",
      "Claude Code は **Bun**（Node.js ではなく）で動作し、**React + Ink** でターミナル UI をレンダリングする。核心は REPL ループで、自然言語入力とスラッシュコマンドをサポートする。",
      "下層では**約40のツール**がプラグイン型アーキテクチャで構成されている。ファイル読み書き、Bash 実行、Web フェッチ、LSP 統合など、各機能は個別の**パーミッションゲート付きツール**として実装されており、`Tool.ts` だけで**29,000行**に達する。最大のモジュールは **QueryEngine**（46,000行）で、全 LLM API 呼び出し・ストリーミング・キャッシュ・オーケストレーションを担当する。",
      "## 社員だけが使える「完全版」",
      "ソースコード内のフィーチャーフラグとして `PROACTIVE`、`KAIROS`、`BRIDGE_MODE`、`DAEMON`、`VOICE_MODE`、`AGENT_TRIGGERS`、`MONITOR_TOOL` が確認された。",
      "さらにコード全体に `if (USER_TYPE === 'ant') return true` という条件分岐が散在しており、**Anthropic 社員（ant）は KAIROS・ADVISOR・マルチエージェント・サンドボックスを含む全機能にアクセスできる**。一般ユーザーが使っているのは事実上の「デモ版」であり、社員は完全版を日常的に使用していることになる。",
      "## 未公開機能の詳細",
      "**BUDDY** — たまごっち風の AI ペット機能。入力ボックスの横に ASCII アートのキャラクターが表示され、コーディング中に吹き出しで反応する。Mulberry32 シード PRNG で userId ハッシュから決定論的に生成され、18種族（duck, goose, cat, rabbit, owl, penguin, turtle, snail, dragon, octopus, axolotl, ghost, robot, blob, cactus, mushroom, chonk, capybara）・5段階レアリティ（Common 60% 〜 Legendary 1%）・1%のシャイニー確率を持つ。ステータスは DEBUGGING・PATIENCE・CHAOS・WISDOM・SNARK の5軸（各0-100）。アーキテクチャは「Bones + Soul」の2層構造で、Bones 層が FNV-1a ハッシュで種族・レアリティ・ステータスを決定論的に計算し（アンチチート機能も兼ねる）、Soul 層が Claude モデルで一度だけ名前と性格を生成して永続化する。種族名はソースコード内で hex エンコードされて難読化されており、canary string の grep 検出を回避する設計。**予告通り4月1日にプレビューが開始**され（v2.1.89以降、`/buddy` コマンド）、開発者コミュニティでは種族図鑑やリロールツール（any-buddy, claude-buddy-reroll 等）が即座に GitHub に登場。「どの種族が最強か」論争が X で盛り上がるなど、エイプリルフール企画としては異例の反響を呼んでいる。プレビュー期間は4/1〜7、正式リリースは5月予定。",
      "**KAIROS**（「Always-On Claude」）— セッションをまたいで永続的に動作する自律エージェント。日次ログを `~/.claude/projects/<slug>/memory/logs/` に追記し、夜間に「ドリーミング」と呼ばれる4段階処理で蒸留する。",
      "ドリーミングの4段階: 1) Orient — 方向付け、2) Gather — 情報収集、3) Consolidate — 統合、4) Prune — 不要情報の剪定。",
      "さらに `SleepTool` による待機、`PushNotificationTool` による通知、`SendUserFileTool` によるファイル送信を持つ。通常メッセージとプロアクティブアラートは明確に区別される。**ユーザーが寝ている間も Claude が作業を続け、完了したら通知で肩を叩く**設計だ。",
      "**ADVISOR** — メインの Claude を監視する**第2のモデル（メタ Claude）**。主モデルと並行して動作し、応答を観察し、必要に応じて**介入・中断・修正**を行う。修正は `advisor_result`・`advisor_redacted_result` という非公開 API ブロックを通じて注入される。Anthropic 社員向けには既にプロダクションで稼働しているとみられる。",
      "**ULTRAPLAN** — 複雑な計画タスクを**クラウドのリモート Claude Code インスタンス**に委任する30分セッション。ユーザーがブラウザ（claude.ai）で計画を承認または却下し、承認後は「クラウド実行」か「ローカルにテレポート」の2択。Opus 4.6 を使用。会話中に **\"ultraplan\" というキーワードを入力するだけで特殊セッションがトリガーされる**仕組みがハードコードされている。",
      "**Coordinator Mode** — マルチエージェントオーケストレーター。`CLAUDE_CODE_COORDINATOR_MODE=1` で既に一部アクセス可能。マスター Claude が AgentTool でワーカーを並列起動し、ワーカーは XML `<task-notification>` メッセージで結果を返す。",
      "**並列エージェント数はサブスクリプション階層で制限されている。** Free/Pro は1エージェント、Max 20x/Enterprise/Team は3エージェント。トークンだけでなく「同時に何体の Claude が働くか」に課金する設計だ。",
      "**WILLOW MODE** — ユーザーの長時間離席後の復帰を検知する機能。コンテキストが100kトークン以上かつ75分以上の非アクティブ状態の後にユーザーが戻ると発動する。3つの A/B テストバリアント（ダイアログブロッキング、ディスクリートヒント、ヒント v2）で「会話の意識回復」を管理する。",
      "**BRANCH** — `/branch` コマンドで会話を任意の時点からフォークする機能。新しい `sessionId` が発行され、`forkedFrom` フィールドで親会話との系譜を追跡する。Git のブランチモデルを AI 会話に適用した設計。",
      "**SANDBOX** — `@anthropic-ai/sandbox-runtime` という内部 npm パッケージによる完全隔離実行環境。ファイルシステム制限、ホストパターンによるネットワーク制限、違反時のコールバックを備える。敵対的環境でエージェントを安全に稼働させるインフラが既に存在している。",
      "## コミュニティの反応",
      "開発者コミュニティでは、Claude Code の設計の洗練度に驚嘆する声と、Anthropic のオペレーショナルセキュリティへの疑問が入り混じっている。",
      "DEV Community の分析記事は「AI コーディングツールのバーがいかに高いかを示している。パーミッションシステム、マルチエージェントオーケストレーション、IDE ブリッジ、永続メモリ — これが業界の向かう先だ」と評価。一方 Hacker News では「AI セーフティを掲げる企業が自社のソースマップすら管理できないのか」という皮肉なコメントが上位に。",
      "## Anthropic の「悪夢の3月」",
      "3月26日には CMS の設定ミスで約3,000件の未公開資産（ブログ下書き、画像、PDF、内部文書）が公開され、未発表フラグシップモデル **Claude Mythos**（Capybara）の存在が露呈。Fortune の報道で Anthropic はモデルの存在を認め「ステップチェンジ」と表現した。",
      "2月には **CVE-2026-21852**（CVSS 5.3）で、悪意あるリポジトリを開くだけで API キーが流出する脆弱性が修正されている。そして今回の npm ソースマップ流出。**2週間で3件のセキュリティ事故**は、急成長するスタートアップのインフラが追いついていない現実を示している。",
      "## axios との皮肉な因縁",
      "同じ3月31日に **axios のサプライチェーン攻撃**（npm アカウント乗っ取り + RAT 配布）も発覚しており、npm エコシステムのセキュリティが1日に2度問われる異例の事態となった。",
      "**さらに衝撃的な事実が判明した。** 流出したソースコード（`src/assistant/sessionHistory.ts`）を開発者コミュニティが分析したところ、**Claude Code 自体が内部で axios を HTTP クライアントとして使用している**ことが確認された。もし Anthropic が汚染バージョン（axios@1.14.1 等）を取り込んでいた場合、**Claude Code ユーザー全員のマシンに RAT が配布される**という最悪のシナリオもあり得た。",
      "axios はメンテナーの npm アカウントが乗っ取られた外部攻撃。Claude Code は Anthropic 自身の設定ミス。原因は正反対だが、npm パッケージの公開プロセスにおけるセキュリティチェックの甘さという共通の構造的問題が浮き彫りになっている。",
      "## 開発者への教訓: npm パッケージ公開時のチェック",
      "npm パッケージを公開する全ての開発者へ: 公開前に `.map` ファイルが含まれていないかチェックすること。一行の `sourcesContent` で、あなたの全コードが世に公開されてしまう。`.npmignore` に `*.map` を追加するか、`package.json` の `files` フィールドで明示的に含めるファイルを指定すべきだ。`npm pack --dry-run` で公開前に中身を確認する習慣をつけよう。",
      "## 流出コードの利用における原則",
      "今回の流出は Anthropic 側の設定ミスであり、外部からの攻撃ではない。しかし、**誤って公開されたコードを閲覧・コピー・利用することが法的・倫理的に許容されるかは別の問題だ。**",
      "**著作権の観点**: 流出が意図的でない以上、ソースコードに対する Anthropic の著作権は依然として有効だ。DMCA テイクダウンが進行中であることがそれを裏付けている。GitHub ミラーの一部は既に削除され、訴訟リスクを避けるため TypeScript から Python に書き換えて再公開する動きも見られるが、これは「翻案権」の問題であり著作権侵害の可能性は残る。",
      "**セキュリティ研究の観点**: 流出コードの分析は、npm エコシステムのセキュリティ向上やサプライチェーン攻撃への防御策検討に貢献しうる。実際、Claude Code が axios に依存している事実は、同日の axios サプライチェーン攻撃のリスク評価に直結した。ただし「研究目的」と「商用利用」の境界は曖昧であり、無制限の利用を正当化するものではない。",
      "**競合他社への示唆**: 流出コードを参考にした競合製品の開発は、**クリーンルーム設計**の原則に反する可能性がある。特にエージェント OS としての設計思想やツールアーキテクチャを「参考」にする場合、特許侵害やトレードシークレットの問題に発展しうる。",
      "**開発者コミュニティへ**: 流出コードから学べる設計パターンは多い。しかし「公開されたから自由に使える」わけではない。Anthropic が正式にオープンソース化するまでは、概念レベルでの学習にとどめ、コードの直接コピーは避けるべきだ。この原則は、将来自分のコードが同様に流出した場合に守ってほしいルールでもある。",
      "## 編集履歴",
      "【初版】2026年3月31日 — 速報として公開。\n【修正1】同日 — Chaofan Shou（@Fried_rice）の記述を「第一発見者」から「拡散の起点となった投稿」に変更。誰が最初に発見したかは確認できないため。経歴（UC Berkeley 博士課程、FuzzLand CTO）を追記。\n【修正2】同日 — 流出コードの GitHub ミラーへの直接リンクを削除。DMCA テイクダウンの進行と著作権への配慮から、本記事では流出コードへのリンクを掲載しない方針とした。\n【修正3】同日 — ADVISOR・WILLOW MODE・BRANCH・SANDBOX 等の新発見情報を追加。フランス語圏の技術分析を含む複数の独立した分析を統合。\n【修正4】同日 — Claude Code が内部で axios を使用している事実の発見者を、特定個人への帰属から「開発者コミュニティによる分析」に変更。検証可能な一次ソースが確認できなかったため。\n【修正5】同日 — 速報から分析記事へ再構成。「流出コードの利用における原則」セクションを追加。\n【追記6】2026年4月2日 — BUDDY の4/1プレビュー開始を反映。18種族の全リスト、5軸ステータス（DEBUGGING/PATIENCE/CHAOS/WISDOM/SNARK）、Bones+Soul 2層アーキテクチャの詳細、コミュニティの反響（種族図鑑・リロールツールの GitHub 登場、X での種族論争）を追記。テーブルのBUDDYステータスを更新。",
      "注意: 本記事は2026年3月31日に速報として公開され、その後複数回の編集を経て現在の形になっている。Anthropic は DMCA テイクダウンを進行中であり、GitHub 上のミラーリポジトリは順次削除されている。流出したソースコードの無断複製・商用利用は著作権法に抵触する可能性がある。本記事では流出コードへの直接リンクは掲載しない。"
    ],
    "tables": [
      {
        "title": "流出で判明した未公開機能フラグ",
        "headers": [
          "機能名",
          "概要",
          "ステータス"
        ],
        "rows": [
          [
            "BUDDY",
            "たまごっち風AIペット。18種族・5段階レアリティ・シャイニー。Bones+Soul 2層構造。種族図鑑・リロールツールがGitHubに多数登場",
            "4/1プレビュー開始済（/buddy）。5月正式リリース予定"
          ],
          [
            "KAIROS",
            "常駐型永続エージェント。夜間ドリーミング・プロアクティブモード・SleepTool",
            "未リリース"
          ],
          [
            "ULTRAPLAN",
            "30分リモート計画セッション。クラウド実行orローカルテレポート",
            "未リリース"
          ],
          [
            "Coordinator Mode",
            "マルチエージェントオーケストレーター。ワーカー並列起動",
            "一部利用可能（環境変数）"
          ],
          [
            "ADVISOR",
            "メタClaude。主モデルを監視・介入・修正する第2モデル。advisor_result APIブロック",
            "社員向け稼働中"
          ],
          [
            "WILLOW MODE",
            "長時間離席後の復帰検知。100kトークン+75分非アクティブでトリガー。A/Bテスト3種",
            "未リリース"
          ],
          [
            "BRANCH",
            "/branchで会話フォーク。sessionId発行・forkedFromで系譜追跡",
            "未リリース"
          ],
          [
            "SANDBOX",
            "@anthropic-ai/sandbox-runtime。FS・ネットワーク制限、違反コールバック",
            "内部利用"
          ],
          [
            "VOICE_MODE",
            "音声入力モード",
            "未リリース"
          ],
          [
            "BRIDGE_MODE",
            "IDE ブリッジモード",
            "未リリース"
          ],
          [
            "DAEMON",
            "デーモンプロセス（常駐）",
            "未リリース"
          ],
          [
            "PROACTIVE",
            "プロアクティブ（自発的動作）",
            "未リリース"
          ]
        ]
      },
      {
        "title": "Anthropic 2026年3月のセキュリティ事故一覧",
        "headers": [
          "日付",
          "事故",
          "原因",
          "影響"
        ],
        "rows": [
          [
            "2月",
            "CVE-2026-21852",
            "プロジェクト読み込み時のデータ流出脆弱性",
            "APIキー流出の可能性。v2.0.65で修正済"
          ],
          [
            "3/26",
            "CMS リーク（Mythos）",
            "外部CMSツールの設定ミス",
            "未発表モデル Mythos の存在露呈。約3,000件の未公開資産が公開"
          ],
          [
            "3/31",
            "npm ソースマップ流出",
            "パッケージングミス（.map除外忘れ）",
            "Claude Code 全ソースコード（51万行）が公開。未公開機能判明"
          ],
          [
            "3/31",
            "（同日）axios サプライチェーン攻撃",
            "メンテナーアカウント乗っ取り（外部攻撃）",
            "npm エコシステム全体の信頼性問題"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Chaofan Shou (@Fried_rice) — 拡散の起点となった投稿",
        "site": "X",
        "url": "https://x.com/fried_rice/status/2038894956459290963"
      },
      {
        "title": "Claude Code's source code has been leaked via a map file in their NPM registry",
        "site": "Hacker News",
        "url": "https://news.ycombinator.com/item?id=47584540"
      },
      {
        "title": "Claude Code's Entire Source Code Was Just Leaked via npm Source Maps — Here's What's Inside",
        "site": "DEV Community",
        "url": "https://dev.to/gabrielanhaia/claude-codes-entire-source-code-was-just-leaked-via-npm-source-maps-heres-whats-inside-cjo"
      },
      {
        "title": "Digging into the Claude Code source — Dave Schumaker",
        "site": "Blog",
        "url": "https://daveschumaker.net/digging-into-the-claude-code-source-saved-by-sublime-text/"
      },
      {
        "title": "Anthropic's madcap March: 14+ launches, 5 outages, and an accidental Claude Mythos leak",
        "site": "The New Stack",
        "url": "https://thenewstack.io/anthropic-march-2026-roundup/"
      },
      {
        "title": "Dark Web Intelligence — リーク速報",
        "site": "X",
        "url": "https://x.com/DailyDarkWeb/status/2038917695609917448"
      },
      {
        "title": "npm Had a Very Bad Day — paddo.dev",
        "site": "Blog",
        "url": "https://paddo.dev/blog/npm-very-bad-day/"
      }
    ]
  },
  "axios-npm-supply-chain-attack-rat-2026": {
    "body": [
      "2026年3月31日、セキュリティ企業 **Socket** と **StepSecurity** がほぼ同時に、npm で最も広く使われている HTTP クライアントライブラリ **axios** の2つのバージョンにマルウェアが混入していることを検知・公表した。対象は **axios@1.14.1**（v1系最新）と **axios@0.30.4**（レガシー v0.x 系）。axios は npm で**週間3億ダウンロード以上**（一部統計では1億超）を記録しており、React・Vue・Node.js のあらゆるプロジェクトで事実上のスタンダードとなっている HTTP クライアントだ。影響範囲の広さから、X では17万表示を超えるポストが拡散され、日本の開発者コミュニティでも「npm install を今すぐ止めてください」という緊急警告が飛び交った。Open Source Malware コミュニティからは「**史上最も成功したソフトウェアサプライチェーン攻撃の一つとして歴史に残る**」との評価も出ている。",
      "**攻撃の手口**はサプライチェーン攻撃の典型例かつ極めて精巧だ。攻撃者はまず axios のリードメンテナー **jasonsaayman** の npm アカウントに紐づく**長期有効なクラシック npm アクセストークン**を窃取した。アカウントのメールアドレスは攻撃者が管理する **ifstap@proton.me**（ProtonMail）に変更されており、パスワードリセットによるアカウント奪取が行われたとみられる。通常の axios リリースは **GitHub Actions + npm OIDC Trusted Publisher** による CI/CD パイプラインを経由し、**SLSA provenance attestation**（来歴証明）付きで npm に公開される。しかし今回の偽バージョンは CI を完全にバイパスし、npm CLI から直接 publish された。そのため GitHub リポジトリ上には対応するタグ・コミット・リリースが一切存在せず、来歴証明も**完全に欠落**している。axios のコラボレーター **DigitalBrainJS** は GitHub Issue #10604 で、jasonsaayman の権限が自身より上位のため git と npm 両方のアクセスを自力で取り消せない状況だったと報告している。さらに攻撃者が GitHub Issue を削除していた形跡も確認された。",
      "偽バージョンには **plain-crypto-js@4.2.1** という新たな依存パッケージが追加されていた。このパッケージ名は正規の暗号ライブラリ **crypto-js** を模倣しており、説明・著者名・リポジトリ URL まで本家を偽装する念入りな工作が施されていた。plain-crypto-js は axios のソースコード内で一度も import されておらず、唯一の目的は npm の **postinstall スクリプト（setup.js）** を実行すること。setup.js は `fs`・`os`・`execSync` を動的にロードするランタイムデオブフスケーション（実行時難読化解除）技術を使い、静的解析ツールからの検出を困難にしている。このドロッパーが C2 サーバー **sfrclak[.]com:8000**（IP: **142.11.206.73**）に接続し、OS を判別したうえでプラットフォーム固有のペイロードをダウンロード・実行する。",
      "**プラットフォーム別のペイロード**は以下の通り。**macOS** では `/Library/Caches/com.apple.act.mond` にバイナリが保存される。ファイル名は Apple の正規システムプロセスを模倣しており、ad-hoc コード署名まで施されている。**Windows** では `%PROGRAMDATA%\\wt.exe` として PowerShell をコピーし、隠し VBScript 経由で PowerShell スクリプトを実行する。**Linux** では `/tmp/ld.py` として Python スクリプトがダウンロードされる。いずれのプラットフォームでも、RAT 本体は **16文字のユニークな被害者 ID** を生成し、ホスト名・ユーザー名・OS・タイムゾーン・CPU・インストール日・起動時間・実行中プロセス・ディレクトリ一覧を収集。**60秒ごとに HTTP POST で C2 にビーコンを送信**する（Base64 エンコード、User-Agent は Internet Explorer 8 on Windows XP に偽装）。C2 からは **peinject** コマンド（追加バイナリの受信・署名・実行）や **runscript** コマンド（シェルコマンドまたは AppleScript の実行）を受け取り、遠隔操作される。",
      "**アンチフォレンジック機能**も高度だ。ペイロード実行後、setup.js は自身を削除し、悪意のある package.json をクリーンなスタブに置換する。`node_modules/plain-crypto-js` フォルダは残るが、中身は無害に見える状態になる。一時ファイル `$TMPDIR/6202033` も使用される。この自己消去設計により、事後調査で「npm install は通ったがマルウェアの痕跡がない」という状況が生まれ、被害の把握を困難にしている。",
      "**タイムライン**を整理する。3月30日 05:57 UTC — 攻撃者アカウント nrwise（nrwise@proton.me）から clean な plain-crypto-js@4.2.0 が公開（先に無害なバージョンを出して信頼性を偽装する手法）。同日 23:59:12 UTC — マルウェア入りの plain-crypto-js@4.2.1 が公開。3月31日 00:05:41 UTC — **Socket の自動マルウェア検知が公開からわずか6分で検出**。00:21 UTC — 乗っ取った jasonsaayman アカウントから axios@1.14.1 が npm に publish。01:00 UTC — レガシー系の axios@0.30.4 も同様に publish（v1.x と v0.x の両ブランチを**39分以内**に攻撃）。03:00 UTC — StepSecurity の ashishkurmi が GitHub Issue #10604 を投稿。03:20 UTC — DigitalBrainJS が npm トークン全取り消しを要請。その後 npm セキュリティチームが迅速に対応し、問題のバージョンを npm レジストリから削除、セキュリティホルダースタブに置換した。また Socket は同一マルウェアを配布する追加パッケージ **@shadanai/openclaw** と **@qqbrowser/openclaw-qbot@0.0.130** も特定している。",
      "**影響を受ける環境**は、package.json で `\"axios\": \"^1.14.0\"` や `\"axios\": \"^0.30.0\"` のようにキャレット範囲（^）を指定しているすべてのプロジェクトだ。npm のセマンティックバージョニングにより、`npm install` を実行すると自動的に最新のパッチバージョンが取得される。つまり、**package-lock.json を持たないプロジェクト**や、**CI/CD で毎回 `npm install` を実行する環境**は、攻撃者のバージョンを自動的にインストールした可能性がある。lockfile があっても、3月31日以降に `npm install` で依存を更新した場合はリスクがある。逆に、lockfile ベースのインストール（`npm ci` / `yarn install --frozen-lockfile` / `pnpm install --frozen-lockfile`）を使っている環境は安全だ。正規版には SLSA provenance attestation が付与されているが、悪意あるバージョンにはこの署名が欠落しており、これも検知シグナルの一つになる。",
      "**即座に実施すべき対応**は以下の通り。(1) `npm ls axios` でプロジェクト内の axios バージョンを確認。**1.14.1** または **0.30.4** がインストールされている場合は直ちにアンインストール。(2) **安全なバージョン**は **1.14.0**（v1系）と **0.30.3**（v0.x系）。`npm install axios@1.14.0` で固定するか、package-lock.json で安全なバージョンがロックされていることを確認。(3) 感染が疑われる環境では **API キー・トークン・認証情報をすべてローテーション**する。RAT が環境変数やファイルシステムから認証情報を窃取した可能性が高い。(4) CI/CD 環境のビルドログを確認し、postinstall スクリプトの実行痕跡がないかチェック。(5) ネットワークログで `sfrclak[.]com` / `142.11.206.73` への通信がないか確認する。",
      "**【確認用コマンド集】** 以下をターミナルにコピー&ペーストして実行すれば、お使いの環境が影響を受けているか即座に確認できる。",
      "```bash\n# ① axios のバージョン確認（プロジェクトごとに実行）\nnpm ls axios\n# → 1.14.1 または 0.30.4 が出たら危険\n```",
      "```bash\n# ② 安全なバージョンに固定（危険バージョンが見つかった場合）\nnpm install axios@1.14.0\n# v0.x 系を使っている場合は:\nnpm install axios@0.30.3\n```",
      "```bash\n# ③ plain-crypto-js が入っていないか確認\nnpm ls plain-crypto-js\n# 何か出たら感染済み → 即座に node_modules を削除して npm ci で再インストール\n```",
      "```bash\n# ④ 感染痕跡の確認（macOS）\nls -la /Library/Caches/com.apple.act.mond 2>/dev/null && echo '⚠ 感染の可能性あり' || echo '✓ 痕跡なし'\n```",
      "```bash\n# ④ 感染痕跡の確認（Windows PowerShell）\nif (Test-Path \"$env:PROGRAMDATA\\wt.exe\") { Write-Host '⚠ 感染の可能性あり' } else { Write-Host '✓ 痕跡なし' }\n```",
      "```bash\n# ④ 感染痕跡の確認（Linux）\nls -la /tmp/ld.py 2>/dev/null && echo '⚠ 感染の可能性あり' || echo '✓ 痕跡なし'\n```",
      "```bash\n# ⑤ lockfile ベースの安全なインストール方法（今後の防御策）\nnpm ci                              # npm の場合\nyarn install --frozen-lockfile       # Yarn の場合\npnpm install --frozen-lockfile       # pnpm の場合\n```",
      "今回の事件は、npm エコシステムにおける**サプライチェーン攻撃のリスク**を改めて浮き彫りにした。近年だけでも、2025年9月の **qix 侵害**（chalk・debug 等18パッケージ、週間26億DL）、2025年9月と11月の **Shai-Hulud ワーム**（500以上のパッケージに自己複製）、2024年の **xz-utils バックドア** と、オープンソースの主要パッケージが攻撃対象となる事件が加速度的に増えている。CISA（米サイバーセキュリティ庁）も2025年9月に npm エコシステムへの警告を発出済みだ。今回の攻撃が浮き彫りにした構造的問題は、(1) npm のパブリッシュ権限が**個人アカウントに紐づき、検証済み CI パイプラインに紐づいていない**こと、(2) メンテナーアカウントが**単一障害点（SPOF）**であること、(3) **メール変更に追加認証がない**こと、(4) **手動 CLI パブリッシュが CI/CD を迂回できる**ことだ。防御策としては、**lockfile の厳密管理と `npm ci` の使用**、**npm audit の定期実行**、**Socket / Snyk / Aikido などのサプライチェーンセキュリティツールの導入**、**provenance attestation の検証**、メンテナーアカウントへの **FIDO 2FA の強制**、そして **npm publish の Automation Token 限定**を徹底すべきだ。npm が計画中の必須 FIDO 2FA・トークンデフォルト無効化・Trusted Publishing 強制などのセキュリティ改善は、まだ開発段階にある。",
      "**【4/1 追記】間接依存（transitive dependency）の危険性と追加防御策**　GMO Flatt Security の分析記事で重要な警告が示された。**axios への直接依存に限らず、間接依存（transitive dependency）でも postinstall フックは発火する**。つまり、自分のプロジェクトが axios を直接使っていなくても、依存ツリーのどこかに悪意あるバージョンが含まれていれば被害を受ける可能性がある。`npm ls axios` だけでなく、`find node_modules -type d -name \"plain-crypto-js\"` でディレクトリの存在自体を確認すべきだ（中身は自己削除済みだが、フォルダは痕跡として残る）。追加の防御策として以下が推奨される。(1) **npm min-release-age**（`.npmrc` に `min-release-age=7d` を設定し、公開から7日以上経過したバージョンのみインストールを許可。今回のような短時間の悪意あるバージョンを自動でブロックできる）。(2) **pnpm trustPolicy: no-downgrade**（OIDC 署名付きパブリッシュから手動パブリッシュへの切り替えをブロック。今回の攻撃は CI/CD をバイパスした手動 publish だったため、この設定で防御可能だった）。(3) **Takumi Guard**（GMO Flatt Security が提供するセキュアレジストリプロキシ。無料で利用可能で、悪意あるパッケージの検知・ブロックを行う）。",
      "注意: 本記事は2026年3月31日時点の情報に基づく（4月1日に間接依存の警告と追加防御策を追記）。CVE は未割り当て（脆弱性報告は提出済み）。状況は急速に変化する可能性がある。最新情報は axios の GitHub リポジトリ（Issue #10604）、npm のセキュリティアドバイザリ、および Socket・StepSecurity の分析記事を確認すること。感染が疑われる場合は、すべての秘密鍵・API キー・認証トークンのローテーションを最優先で実施すること。",
      "---",
      "**編集履歴** — 2026-04-01: GMO Flatt Security の分析記事に基づき、間接依存（transitive dependency）でも postinstall フックが発火する警告、npm min-release-age・pnpm trustPolicy・Takumi Guard の追加防御策、およびソースを追記。"
    ],
    "tables": [
      {
        "title": "攻撃タイムライン",
        "headers": [
          "時刻 (UTC)",
          "イベント"
        ],
        "rows": [
          [
            "3/30 05:57",
            "clean な plain-crypto-js@4.2.0 公開（信頼性偽装のデコイ）"
          ],
          [
            "3/30 23:59",
            "マルウェア入り plain-crypto-js@4.2.1 公開"
          ],
          [
            "3/31 00:05",
            "Socket 自動検知がフラグ（公開から6分）"
          ],
          [
            "3/31 00:21",
            "axios@1.14.1 を侵害アカウントから publish"
          ],
          [
            "3/31 01:00",
            "axios@0.30.4 を同アカウントから publish"
          ],
          [
            "3/31 03:00",
            "GitHub Issue #10604 投稿"
          ],
          [
            "3/31 03:20",
            "npm トークン全取り消し要請"
          ],
          [
            "その後",
            "npm セキュリティチームが問題バージョンを削除"
          ]
        ]
      },
      {
        "title": "プラットフォーム別ペイロードと感染痕跡（IoC）",
        "headers": [
          "OS",
          "ペイロード保存先",
          "手法"
        ],
        "rows": [
          [
            "macOS",
            "/Library/Caches/com.apple.act.mond",
            "Apple 正規プロセスに偽装した RAT バイナリ。ad-hoc コード署名付き"
          ],
          [
            "Windows",
            "%PROGRAMDATA%\\wt.exe",
            "PowerShell をコピーし、隠し VBScript 経由で実行"
          ],
          [
            "Linux",
            "/tmp/ld.py",
            "Python スクリプトをダウンロード"
          ],
          [
            "全 OS 共通",
            "$TMPDIR/6202033",
            "一時ファイル（実行後自己消去）"
          ],
          [
            "C2 サーバー",
            "sfrclak[.]com:8000 / 142.11.206.73",
            "60秒ごとに HTTP POST でビーコン送信"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "axios@1.14.1 and axios@0.30.4 are compromised (Issue #10604)",
        "site": "GitHub",
        "url": "https://github.com/axios/axios/issues/10604"
      },
      {
        "title": "Supply Chain Attack on Axios Pulls Malicious Dependency",
        "site": "Socket",
        "url": "https://socket.dev/blog/axios-npm-package-compromised"
      },
      {
        "title": "Axios Supply Chain Attack Pushes Cross-Platform RAT via Compromised npm Account",
        "site": "The Hacker News",
        "url": "https://thehackernews.com/2026/03/axios-supply-chain-attack-pushes-cross.html"
      },
      {
        "title": "axios Compromised on npm — Malicious Versions Drop Remote Access Trojan",
        "site": "StepSecurity",
        "url": "https://www.stepsecurity.io/blog/axios-compromised-on-npm-malicious-versions-drop-remote-access-trojan"
      },
      {
        "title": "axios compromised on npm: maintainer account hijacked, RAT deployed",
        "site": "Aikido",
        "url": "https://www.aikido.dev/blog/axios-npm-compromised-maintainer-hijacked-rat"
      },
      {
        "title": "【緊急】axios がサプライチェーン攻撃 2026.03.31",
        "site": "Zenn",
        "url": "https://zenn.dev/gunta/articles/0152eadf05d173"
      },
      {
        "title": "Axios Compromised With A Malicious Dependency",
        "site": "OX Security",
        "url": "https://www.ox.security/blog/axios-compromised-with-a-malicious-dependency/"
      },
      {
        "title": "axios npm Supply Chain Compromise",
        "site": "SafeDep",
        "url": "https://safedep.io/axios-npm-supply-chain-compromise/"
      },
      {
        "title": "axios ソフトウェアサプライチェーン攻撃の詳細分析",
        "site": "GMO Flatt Security Blog",
        "url": "https://blog.flatt.tech/entry/axios_compromise"
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
        "headers": ["項目", "自動読み込み", "備考"],
        "rows": [
          ["ファイルの読み書き", "○", "権限モードに従う"],
          [".claude/skills/", "○", "セッション中の編集もリアルタイム反映"],
          ["CLAUDE.md", "×（設定で○）", "CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD=1 で有効化"],
          [".claude/agents/", "×", "ユーザーレベル（~/.claude/）に配置で対応"],
          [".claude/commands/", "×", "同上"],
          ["Hooks", "×", "プロジェクトの settings.json で定義"],
          [".claude/rules/", "×", "シンボリックリンクで共有可能"]
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
        "headers": ["項目", "TimesFM 2.5", "MiroFish"],
        "rows": [
          ["開発元", "Google Research", "郭杭江（北京郵電大学）"],
          ["アプローチ", "時系列データの統計的予測", "マルチエージェント社会シミュレーション"],
          ["予測対象", "売上・需要・在庫など数値データ", "世論・利害関係者の反応・社会動向"],
          ["モデルサイズ", "200M パラメータ", "LLM API 依存（エージェント数で変動）"],
          ["入力", "過去の時系列データ（最大16K点）", "ニュース・政策文書・財務レポート"],
          ["出力", "数値予測 + 不確実性区間", "シナリオレポート + エージェント行動ログ"],
          ["ゼロショット", "対応（再学習不要）", "対応（知識グラフから自動構築）"],
          ["本番環境", "BigQuery GA / Google Sheets", "セルフホスト（Docker）"],
          ["ライセンス", "Apache-2.0（商用可）", "AGPL-3.0（セルフホスト前提）"],
          ["GitHub Stars", "13,000+", "48,000+"],
          ["得意なこと", "安定した数値トレンドの高精度予測", "複雑な社会的反応のシナリオ探索"],
          ["苦手なこと", "前例のない事象、社会的要因の影響", "精密な数値予測、コスト管理"]
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
        "headers": ["レッスン", "コマンド/機能", "概要"],
        "rows": [
          ["Talk to your codebase", "@ファイル参照, 行番号指定", "特定ファイルや行を会話に引用"],
          ["Steer with modes", "Shift+Tab (plan, auto)", "計画モード・自動モードの切り替え"],
          ["Undo anything", "/rewind, Esc-Esc", "任意の時点まで会話を巻き戻し"],
          ["Run in the background", "tasks, /tasks", "バックグラウンドでタスク実行"],
          ["Teach Claude your rules", "CLAUDE.md, /memory", "プロジェクト固有のルールを記憶"],
          ["Extend with tools", "MCP", "外部ツール・DB・API と接続"],
          ["Automate your workflow", "Skills, Hooks", "カスタムスキルとイベントフック"],
          ["Multiply yourself", "Subagents, /agents", "マルチエージェントで並列作業"],
          ["Code from anywhere", "/remote-control, /teleport", "リモートマシンからの操作"],
          ["Dial the model", "/model, /effort", "モデル・思考深度の切り替え"]
        ]
      },
      {
        "afterParagraph": 3,
        "caption": "NO_FLICKER モードの主な操作",
        "headers": ["操作", "方法", "備考"],
        "rows": [
          ["有効化", "CLAUDE_CODE_NO_FLICKER=1 claude", "シェルプロファイルに export で恒久化"],
          ["半画面スクロール", "PgUp / PgDn", "MacBook は Fn+↑/↓"],
          ["トランスクリプト検索", "Ctrl+O → /", "n/N で前後一致に移動"],
          ["ネイティブ検索に書き出し", "Ctrl+O → [", "ターミナルのスクロールバックに出力"],
          ["マウス無効化", "CLAUDE_CODE_DISABLE_MOUSE=1", "ネイティブ選択を維持"],
          ["スクロール速度変更", "CLAUDE_CODE_SCROLL_SPEED=N", "1〜20（デフォルト3）"]
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
        "title": "claude-code v2.1.91 diff analysis",
        "site": "GitHub",
        "url": "https://github.com/marckrenn/claude-code-source-and-prompt-diff-tracker"
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
        "headers": ["方式", "セットアップ", "対応フォーマット", "特徴"],
        "rows": [
          ["MCP App Server（ホスト版）", "リモートMCPサーバーURLを追加するだけ", "XML", "インストール不要・会話内にインタラクティブ表示"],
          ["MCP Tool Server", "npx @drawio/mcp", "XML, CSV, Mermaid", "draw.ioエディタで直接編集可能"],
          ["Skill + CLI", "スキルファイルをコピー", "XML", "MCP不要・PNG/SVG/PDFエクスポート対応"],
          ["Project Instructions", "プロンプトをペースト", "XML, CSV, Mermaid", "完全インストール不要・Python実行で動作"]
        ]
      },
      {
        "afterParagraph": 6,
        "caption": "環境別の対応状況",
        "headers": ["環境", "リアルタイム描画", "ファイル生成", "備考"],
        "rows": [
          ["Claude.ai（Web / デスクトップ）", "○", "○", "MCP App Server で iframe 内に即時表示"],
          ["VS Code + MCP 拡張", "○", "○", "エディタ内パネルにインタラクティブ表示"],
          ["Claude Desktop", "○", "○", "MCP App Server または Tool Server"],
          ["Claude Code CLI（ターミナル）", "×", "○", "Skill + CLI で .drawio ファイル生成→エディタで確認"]
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
  }
  ,
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
      "動画生成AIの品質が実用レベルに達し、しかもブラウザから数クリックで使える時代に入った。動画コンテンツの制作コストが劇的に下がることで、これまで動画を作る余裕がなかった個人開発者や小規模チームにとって大きなチャンスになるだろう。"
    ],
    "tables": [
      {
        "afterParagraph": 8,
        "caption": "動画生成AI 主要サービス比較（2026年4月時点）",
        "headers": ["", "Veo 3.1", "Runway Gen-4.5", "Kling"],
        "rows": [
          ["最大解像度", "4K (3840×2160)", "1080p", "1080p"],
          ["最大尺", "140秒超（連結）", "可変", "120秒"],
          ["音声合成", "ネイティブ対応", "なし", "なし"],
          ["縦動画 (9:16)", "対応", "対応", "対応"],
          ["エコシステム", "Workspace / YouTube / Photos", "スタンドアロン", "スタンドアロン"],
          ["強み", "品質・統合・音声", "クリエイティブ制御", "速度・コスト"]
        ]
      }
    ],
    "figures": [],
    "charts": [],
    "embeds": [],
    "primarySources": [
      {
        "title": "@GoogleWorkspace - Veo 3.1 integration announcement",
        "site": "X",
        "url": "https://x.com/GoogleWorkspace/status/1907525219448082763"
      },
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
        "headers": ["方法", "操作対象", "速度", "トークン効率", "ヘッドレス", "必要なもの"],
        "rows": [
          ["Computer Use", "デスクトップ全般", "遅い", "低い", "不可", "Cowork（Pro/Max）"],
          ["Claude in Chrome", "ブラウザ（認証済み）", "最速", "高い", "不可", "Chrome 拡張"],
          ["DevTools MCP", "ブラウザ内部（DOM・コンソール等）", "速い", "高い", "可", "MCP サーバー設定"],
          ["Playwright MCP", "ブラウザ操作の自動化", "速い", "低い", "可", "MCP サーバー設定"]
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
      "**週の総括** — 米中フラッグシップ更新が同時進行した1週間。OpenAI が GPT-5.5 で「半額の SOTA」、DeepSeek V4 が 1.6T MoE と 1M ctx のオープンウェイトを投入。Amazon-Anthropic の $25B 追加投資はクラウド3強の縄張り争いを加速させ、Hugging Face と OpenAI のエージェント新製品はマルチエージェント時代の到来を示した。"
    ],
    "primarySources": [
      {
        "title": "Introducing GPT-5.5",
        "site": "OpenAI",
        "url": "https://openai.com/index/gpt-5-5/"
      },
      {
        "title": "Anthropic and Amazon expand strategic partnership",
        "site": "Anthropic",
        "url": "https://www.anthropic.com/news/expanding-our-partnership-with-amazon"
      }
    ]
  },
  "overview-2026-week-apr27": {
    "body": [
      "**4月29日（水）** — **Big Tech 4社が同日決算**。Microsoft AI 事業は ARR $370億（前年比 +123%）、Meta は CapEx を最大 $1,450億に上方修正、Alphabet・Amazon も AI 設備投資を引き上げ、4社合計の AI CapEx は $700B に迫る。AI バブル論を抑え込む形で「実需が投資を正当化している」流れに（[Big Tech 決算](?a=bigtech-q1-2026-earnings-ai-capex-700b-feature)）。",
      "**5月1日（金）** — **Microsoft Agent 365** が一般提供開始。エージェントを「observe / govern / secure」する管制塔、$15/user/月、Microsoft Entra 統合で AI エージェント管理を統一する（[Agent 365](?a=microsoft-agent-365-ga-observe-govern-secure-2026)）。",
      "**5月2日（土）** — Academy が **Oscar の AI ルール** を明確化。AI 出演・AI 脚本は対象外、「人間の同意」と「人間の著作」を必須要件に。映画業界が AI 利用の境界線を初めて明文化した（[Oscar AI](?a=academy-oscars-ai-acting-screenplay-ineligible-2026)）。",
      "**週の総括** — 静かな週だったが、3つのテーマで「AI の社会実装フェーズ移行」が鮮明になった。Big Tech 4社の CapEx 一斉上方修正は AI 需要の継続性を裏付け、Microsoft Agent 365 はエージェント運用基盤の業界標準化を狙う。Academy の AI ルール明文化は、エンタメ業界が AI を「禁止」ではなく「適切な使い方」で受け入れる転換点となった。"
    ],
    "primarySources": [
      {
        "title": "Microsoft FY26 Q1 Earnings",
        "site": "Microsoft",
        "url": "https://www.microsoft.com/en-us/investor/earnings/fy-2026-q1/press-release-webcast"
      },
      {
        "title": "Agent 365: A new way to manage your AI agents",
        "site": "Microsoft",
        "url": "https://www.microsoft.com/en-us/microsoft-cloud/blog/2026/05/01/agent-365-ga/"
      }
    ]
  },
  "overview-2026-week-may04": {
    "body": [
      "**5月5日（火）** — OpenAI が **GPT-5.5 Instant** を ChatGPT のデフォルトに昇格。ハルシネーション 52.5% 減・出力が30%短く、Plus/Pro 向けに過去チャット参照機能も解禁（[GPT-5.5 Instant](?a=openai-gpt-5-5-instant-default-chatgpt-2026)）。",
      "**5月6日（水）** — Anthropic が **SpaceX の Colossus 1** を全量借り上げ。220,000 NVIDIA GPU・300+ MW のコンピュート基盤を確保し、Claude Code レート上限を即日2倍に。AWS Trainium と並行する「クラウド多重化」戦略（[Anthropic-SpaceX](?a=anthropic-spacex-colossus-1-compute-deal-2026)）。",
      "**5月7日（木）** — OpenAI が **3つの大型発表**。GPT-5.5-Cyber「Trusted Access」プログラム、ChatGPT「Trusted Contact」自傷防止機能、新音声 API（GPT-Realtime-2 / Translate / Whisper）。会議・翻訳・安全領域を一気に拡張（[5/7 3発表](?a=openai-cyber-trusted-contact-voice-may7-2026)）。OpenAI Codex のレビューも公開、GPT-5.5 + Daybreak + Workspace Agents 統合の最新版を整理（[Codex レビュー](?a=openai-codex-agent)）。",
      "**週の総括** — OpenAI と Anthropic の「軍拡」が一段と加速。OpenAI は ChatGPT デフォルトを更新し信頼性で攻め、5/7 の3発表でセキュリティ・安全・音声に同時投資。Anthropic は SpaceX Colossus 1 という異色のインフラ調達で計算リソースを確保した。プラットフォーム戦略の差が鮮明になりつつある。"
    ],
    "primarySources": [
      {
        "title": "GPT-5.5 Instant Now Default in ChatGPT",
        "site": "OpenAI",
        "url": "https://openai.com/index/gpt-5-5-instant-default/"
      },
      {
        "title": "Anthropic and SpaceX Compute Deal",
        "site": "Anthropic",
        "url": "https://www.anthropic.com/news/spacex-colossus-1"
      }
    ]
  },
  "overview-2026-week-may11": {
    "body": [
      "**5月11日（月）** — **Cursor が Microsoft Teams 統合** を公開。`@Cursor` メンションでクラウドエージェントにタスク委任、リポジトリ・モデル自動選択で PR まで作成（[Cursor-Teams](?a=cursor-microsoft-teams-integration-2026)、[Cursor CLI レビュー](?a=cursor-cli)、[Cursor Editor レビュー](?a=cursor-editor)）。",
      "**5月12日（火）** — 1日で5本の大型発表。Anthropic が **Claude for Legal** を公開、12分野の実務プラグイン＋20超 MCP コネクタ、Thomson Reuters CoCounsel と提携（[Claude for Legal](?a=anthropic-claude-for-legal-plugins-cocounsel-2026)）。Google が **Googlebook** と **Gemini Intelligence** を発表、Chromebook 後継の AI ネイティブ・ノート PC（[Googlebook](?a=google-googlebook-gemini-intelligence-android-show-2026)）。Anthropic は **Claude Platform on AWS** GA と Claude Code の「agent view」も同日発表（[Anthropic 5/12](?a=anthropic-claude-platform-aws-ga-agent-view-2026)）。会議系特集2本も同時公開（[アバター会議特集](?a=feature-ai-avatar-agents-join-meetings-2026)、[リアルタイム翻訳特集](?a=feature-realtime-translation-teams-zoom-meet-openai-2026)）。",
      "**5月13日（水）** — Anthropic が **$900B 評価額** で $30-50B の調達交渉中と報じられる。OpenAI（$852B）を抜き「世界最高評価額の AI 企業」へ。Ramp 指数では業務利用シェアでも OpenAI を上回ったと判明（[Anthropic $900B](?a=anthropic-900b-valuation-funding-overtakes-openai-2026)）。",
      "**5月14日（木）** — Anthropic が **Stainless 買収交渉中**（$300M+）と報じられる。OpenAI と Google も使う AI モデル SDK 自動生成基盤を取り込み、開発者体験レイヤーを統合する戦略（[Stainless 買収](?a=anthropic-stainless-acquisition-sdk-infrastructure-2026)）。",
      "**週の総括** — Anthropic 週間と呼ぶべき1週間。Claude for Legal・AWS GA・agent view・$900B 調達・Stainless 買収と5発進、評価額・売上シェアで OpenAI を逆転。Cursor は Microsoft Teams 統合でエンタープライズ流通を強化し、Google は Googlebook で AI ネイティブ PC の新カテゴリを提示した。会議系AI（アバター・翻訳）の特集2本も AI 業界の生活浸透フェーズを示している。"
    ],
    "primarySources": [
      {
        "title": "Anthropic targets $900 billion valuation",
        "site": "Reuters",
        "url": "https://www.reuters.com/technology/anthropic-targets-900-billion-valuation-2026/"
      },
      {
        "title": "Introducing Claude for Legal",
        "site": "Anthropic",
        "url": "https://www.anthropic.com/news/claude-for-legal"
      }
    ]
  },
  "overview-2026-week-may18": {
    "body": [
      "**5月19日（火）** — **Google I/O 2026** 開幕。Gemini 3.5 Flash GA、エージェントオーケストレーション「Antigravity」と「Gemini Spark」を投入、Android XR 眼鏡と Search Live など多領域で発表（[Google I/O 2026](?a=google-io-2026-gemini-3-5-flash-antigravity-spark-2026)、[Gemini CLI レビュー](?a=gemini-cli)）。",
      "**5月20日（水）** — **中国系 AI モデル5月集中更新** の特集記事を公開。Qwen 3.7 Max（5/20、杭州 Cloud Summit）が Opus 4.6 を一部凌駕、Kimi K2.6（4/20）がオープンウェイトで GPT-5.4 を抜く、Ernie 5.1 も論理推論を大幅改善（[中国モデル特集](?a=feature-china-ai-models-may-2026-qwen-kimi-ernie)）。",
      "**週の総括** — 静かな週だが内容は濃い。Google I/O 2026 で Gemini 3.5 Flash・Antigravity・Spark を矢継ぎ早に投入、エージェント分野で Google が攻勢に転じた。並行して中国陣営も Qwen 3.7 Max・Kimi K2.6・Ernie 5.1 を集中投入、Artificial Analysis スコアで米中ギャップを更に縮めた。「米国2強+中国OSS」の3極構造が固まりつつある。"
    ],
    "primarySources": [
      {
        "title": "Google I/O 2026 Keynote",
        "site": "Google",
        "url": "https://io.google/2026"
      },
      {
        "title": "Qwen 3.7 Max",
        "site": "Alibaba Cloud",
        "url": "https://qwenlm.github.io/blog/qwen3.7-max"
      }
    ]
  },
  "overview-2026-week-may25": {
    "body": [
      "**5月28日（木）** — Anthropic が **Claude Opus 4.8** をリリース。SWE-bench Verified 88.6% / SWE-bench Pro 69.2%、USAMO 2026 で 96.7%、Dynamic Workflows で最大1,000並列、Fast Mode は前世代比3倍安い $10/$50（[Opus 4.8](?a=anthropic-claude-opus-4-8-dynamic-workflows-2026)、[Claude Code レビュー](?a=claude-code)）。",
      "**5月28日（木）— 同日続報** — Anthropic の **Series H が $65B / $965B 評価額** で確定、ARR $47B 到達、Milan・Seoul オフィス開設も発表（[Anthropic 5月補遺](?a=anthropic-may-2026-series-h-milan-korea-arr-47b-2026)）。Microsoft は **Project Polaris** を Build 2026（6/2-3）で披露すると予告、GitHub Copilot の中核モデルを MAI 系で内製化する方針（[Polaris 予告](?a=microsoft-build-2026-project-polaris-mai-coding-2026)）。",
      "**週の総括** — Opus 4.8 とその Series H 確定で Anthropic が「強気の四半期」を締めた。Dynamic Workflows による最大1,000並列はエージェント実行の新フロンティアを開拓し、Fast Mode の3倍値下げで実用コストも引き下げた。Microsoft が翌週の Build 2026 に向けて Project Polaris のティーザーを打ち、独自モデル投入の競争が一段と熱を帯びた。"
    ],
    "primarySources": [
      {
        "title": "Introducing Claude Opus 4.8",
        "site": "Anthropic",
        "url": "https://www.anthropic.com/news/claude-opus-4-8"
      },
      {
        "title": "Anthropic Series H Closing",
        "site": "Anthropic",
        "url": "https://www.anthropic.com/news/series-h"
      }
    ]
  },
  "xai-grok-june-2026-voice-imagine-connectors-2026": {
    "body": [
      "xAI が6月初旬に Grok の機能を集中的に更新した。6月4日には **Grok Voice**（音声会話機能）を公開、同日 **Grok Imagine 1.5 Preview**（画像生成 API、リアリズム・テキストレンダリング・編集制御が向上）も API でロールアウト開始。6月5日には Elon Musk が X で2つの短い投稿を行い、コアモデルの改善と worktrees 対応の追加を予告した。",
      "**Grok Voice** は Grok との音声インタラクションを可能にする機能で、ChatGPT の音声モードや Gemini Live と直接競合する位置付け。同日にリリースされた **Grok Imagine 1.5 Preview** は API 経由でエンタープライズ開発者・チーム向けに公開され、特に「Quality Mode」では高リアリズム・強化されたテキスト描画・編集制御の3点が改善された。",
      "6月5日に xAI は **Grok Web の Connectors** を一般公開した。SharePoint・Outlook・OneDrive・Google Workspace・Notion・GitHub・Linear といった日常業務アプリと深く統合できるほか、独自の **MCP サーバー**を持ち込んでカスタムワークフローを構築することも可能。MCP の標準対応により、Anthropic / OpenAI / Google が推進する Agentic な接続性に xAI も歩調を合わせた形となる。",
      "並行して報じられたのが、Grok の次世代モデル **V9-Medium** の学習完了だ。techtimes の報道によれば、V9-Medium は **1.5兆パラメータ** で、現行の本番モデル v8-small（500億パラメータ）の3倍の規模。コーディング領域のリードを狙う設計で、6月中旬のリリースが期待されている。Musk は同じ投稿で **Grok Build** 向けの worktrees サポート追加にも触れた。",
      "今回の集中アップデートは、xAI が音声・画像・統合・モデル規模という4方向で同時に攻めていることを示す。5月29日に発表された **Grok Build 0.1**（公開ベータ、256K コンテキスト・常時推論・テキスト/画像対応のコーディング特化モデル）の続報でもあり、Anthropic / OpenAI / Google の連続発表に対する xAI の応答ペースが明確に上がっている。"
    ],
    "primarySources": [
      {
        "title": "xAI News",
        "site": "xAI",
        "url": "https://x.ai/news"
      },
      {
        "title": "xAI Release Notes - June 2026",
        "site": "Releasebot",
        "url": "https://releasebot.io/updates/xai"
      },
      {
        "title": "Grok AI New Model Triples Parameter Count, Targets Coding Lead",
        "site": "TechTimes",
        "url": "https://www.techtimes.com/articles/317328/20260528/grok-ai-new-model-triples-parameter-count-targets-coding-lead-release-expected-mid-june.htm"
      }
    ]
  },
  "openai-chatgpt-dreaming-v3-memory-architecture-2026": {
    "body": [
      "OpenAI が2026年6月4日、ChatGPT のメモリ機能に新アーキテクチャ「**Dreaming V3**」のロールアウトを開始した。まずは ChatGPT **Plus / Pro** プランの米国ユーザーに向けて先行展開し、その後数週間以内に **Free / Go** プランにも順次拡大する予定。",
      "**Dreaming V3** はメモリの整合性と参照精度の改善を主眼に設計されたアーキテクチャで、過去会話からの自然な引用・要約・パーソナライズ応答を実現する。従来のメモリは「明示的に保存した情報」を中心に動作していたが、Dreaming V3 ではユーザーが ChatGPT と交わした文脈をより滑らかに長期記憶へ統合できる。",
      "メモリ機能の段階的な強化は OpenAI の長期戦略の一部だ。GPT-5.5 Instant（5月5日）が ChatGPT のデフォルトとなった際、Plus / Pro 向けに「過去チャット参照機能」も解禁された経緯がある。今回の Dreaming V3 はそのインフラ部分を刷新するものと位置付けられ、メモリの安定性とユーザー体験の一貫性に直結する。",
      "**開発者・エンドユーザーへの影響**: メモリ機能を頻繁に使うユーザーは、過去のプロジェクト・嗜好・文脈に基づいた応答が改善されることを期待できる。一方で、メモリのプライバシー管理（保存内容の確認・削除・無効化）は引き続き設定画面から可能だ。エンタープライズ向け Business / Enterprise プランへの展開時期は今回の発表では明示されていない。"
    ],
    "primarySources": [
      {
        "title": "OpenAI News",
        "site": "OpenAI",
        "url": "https://openai.com/news/"
      },
      {
        "title": "ChatGPT Updates by OpenAI - June 2026",
        "site": "Releasebot",
        "url": "https://releasebot.io/updates/openai/chatgpt"
      }
    ]
  },
  "openai-gpt-rosalind-life-sciences-update-2026": {
    "body": [
      "OpenAI が2026年6月4日、生命科学研究向けに調整された専門モデル **GPT-Rosalind** の大規模アップデートを公開した。今回の更新では **agentic coding**（自律的なコード生成・実行）が強化され、創薬と遺伝学分野でのベンチマーク性能が向上した。あわせて Evidence Retrieval（科学的根拠の検索・整理）と Bioinformatics（バイオインフォマティクス・ワークフロー自動化)のプラグインも追加されている。",
      "**GPT-Rosalind** は OpenAI のフロンティアモデル系列とは別に、研究機関や製薬企業向けに最適化された専用モデルだ。今回のアップデートでは、研究者が論文・遺伝子データベース・実験ノートに分散している情報を横断検索しながら、自律的なエージェントとしてシミュレーションコードを生成・実行できる範囲が広がった。Anthropic の **Project Glasswing**（サイバーセキュリティ特化）や **Claude for Legal**（法務特化）と同じく、専門領域ごとに最適化されたモデルを投入する潮流に沿った動き。",
      "**Evidence Retrieval プラグイン**は科学的根拠の収集と引用の自動化を担う。研究論文・特許・臨床試験データから関連エビデンスを抽出し、構造化された形で提示する。**Bioinformatics プラグイン**は配列解析・タンパク質構造予測・代謝経路マッピングといったワークフローを GPT-Rosalind 経由で実行できるようにし、Galaxy・Bioconductor などの既存ツールとの接続も視野に入れる。",
      "**Trusted Access 拡大**: 今回のリリースに合わせて、対象組織向けの研究プレビュープログラム（Trusted Access）が世界規模で拡大された。これまで米国の主要研究機関に限定されていたアクセスが、欧州・アジア・オセアニアの大学・国立研究所・製薬企業にも開放される。日本の研究機関への影響は今後の発表を待つ必要があるが、生命科学分野の AI 活用が国際的に標準化されつつあることを示すマイルストーン。"
    ],
    "primarySources": [
      {
        "title": "OpenAI News",
        "site": "OpenAI",
        "url": "https://openai.com/news/"
      },
      {
        "title": "OpenAI Release Notes - June 2026",
        "site": "Releasebot",
        "url": "https://releasebot.io/updates/openai"
      }
    ]
  },
  "anthropic-claude-fable-5-mythos-5-ga-2026": {
    "body": [
      "Anthropic が2026年6月9日、新しい主力モデル **Claude Fable 5** を一般公開した。同時に、より強力な **Claude Mythos 5** を Project Glasswing 経由で限定公開している。Fable 5 は Mythos クラスのモデルを「一般利用向けに安全化」した位置付けで、Anthropic が「これまで一般公開した中で最も強力なモデル」と公表する内容だ。SWE-bench Verified で **95%** を達成し、5/28 にリリースされた **Claude Opus 4.8**（88.6%）を上回る。",
      "**主要ベンチマークと性能**: 公開ベンチマークの大半で SOTA を記録、ソフトウェアエンジニアリング・ナレッジワーク・ビジョン・科学研究などの幅広い領域で「Anthropic 史上最強の一般公開モデル」を公称している。Stripe による初期テストでは、本来チーム全体で2ヶ月以上かかるコードベース全体のマイグレーションを **1日で完了** したと報告された（[Anthropic 公式ブログ](https://www.anthropic.com/news/claude-fable-5-mythos-5)）。",
      "**料金体系**: Fable 5 と Mythos 5 はどちらも **$10/$50 per 1M tokens**（入力/出力）で提供される。これは前世代の **Claude Mythos Preview の半額以下**で、Opus 4.8 の Fast Mode（$10/$50）と同水準。Pro・Max・Team・Enterprise（seat-based）プランでは、**6月9日から6月22日まで追加料金なし**で利用できる。",
      "**安全設計とルーティング**: Fable 5 は Mythos クラスのモデルを一般利用向けにラップした構造を持つ。一部のセンシティブな話題に対するクエリは、**Claude Opus 4.8** にリルートされる仕組みで、Mythos の強力さと Opus 4.8 の確立済みセーフティの両立を狙う。なお Anthropic は Fable 5 のリリース直前に「AI が危険になりつつある」という警告レポートを公表しており、安全性とパワーのトレードオフを意識した戦略であることを示唆している。",
      "**市場への影響**: 一般公開モデルの最強位は Opus 4.8 から Fable 5 に移行する。Anthropic は Claude 製品全体（Claude Code・Claude for Legal・Claude Design・Claude Platform）の中核モデルを Fable 5 へ順次切り替えていく方針で、Claude Code は Code with Claude Tokyo（[特集](?a=anthropic-code-with-claude-tokyo-june10-2026)）と並行して既に Fable 5 を統合済。OpenAI（GPT-5.5）・Google（Gemini 3.5 Flash）と並ぶ「3強フロンティア」の構図が一段と鮮明になった。"
    ],
    "primarySources": [
      {
        "title": "Claude Fable 5 and Claude Mythos 5",
        "site": "Anthropic",
        "url": "https://www.anthropic.com/news/claude-fable-5-mythos-5"
      },
      {
        "title": "Claude Fable",
        "site": "Anthropic",
        "url": "https://www.anthropic.com/claude/fable"
      },
      {
        "title": "Anthropic brings Mythos to the masses with Claude Fable 5",
        "site": "VentureBeat",
        "url": "https://venturebeat.com/technology/anthropic-brings-mythos-to-the-masses-with-claude-fable-5-its-most-powerful-generally-available-model-ever"
      }
    ]
  },
  "apple-wwdc-2026-siri-ai-keynote-2026": {
    "body": [
      "Apple が2026年6月8日の **WWDC 2026** 基調講演で、デジタルアシスタント Siri を「**Siri AI**」へ全面リブランドし、対話の深さ・システム全体への統合・プラットフォーム横断の新インターフェイスを発表した。Apple Intelligence 不振と Siri 遅延の責任で4月に AI 責任者 John Giannandrea が退任した（[Apple AI 責任者退任](?a=apple-ai-chief-giannandrea-departure-2026)）後、後任の Amar Subramanya 体制での最初の大型発表となる。",
      "**会話的応答とブレインストーミング**: Siri AI ではユーザーが Siri と**往復のやり取り**ができるようになる。「詳細な計画を立てて」「クリエイティブブレインストを一緒に」「文書にフィードバックして」といった、これまで ChatGPT・Claude・Gemini といったチャット型 AI に流れていた用途を Siri 単独で完結できる方向に舵を切った。",
      "**音声のパーソナライズ**: 従来の Siri 合成音声よりも自然なパーソナライズされた音声体験を提供。ユーザーは Siri AI の**会話のテンポと表現の豊かさを調整**できる。これは ChatGPT の Voice モードや Google Gemini Live と直接競合する位置付けだ。",
      "**新 Siri アプリとシステム統合**: iPad・Mac 向けに**専用 Siri アプリ**が登場、過去の会話・結果を振り返って続きから再開できる。さらに Siri AI は**個人コンテキストと画面認識**を深いレベルで備え、メール・カレンダー・写真・連絡先などのアプリ間を横断する文脈理解が可能になった。",
      "**iOS 27 / macOS Golden Gate と同時発表**: Siri AI の発表とあわせて、iOS 27、macOS Golden Gate（macOS 16）も披露された。開発者ベータは即日公開、パブリックベータは翌月予定。Apple Intelligence は引き続き iPhone 15 Pro 以降と Apple Silicon Mac で利用可能で、オンデバイス処理と Private Cloud Compute の組み合わせが Apple の差別化軸となる。"
    ],
    "primarySources": [
      {
        "title": "Apple Announces 'Siri AI' at WWDC 2026",
        "site": "MacRumors",
        "url": "https://www.macrumors.com/2026/06/08/apple-announces-siri-ai/"
      },
      {
        "title": "Apple WWDC 2026: Siri AI revealed",
        "site": "CNBC",
        "url": "https://www.cnbc.com/2026/06/08/apple-wwdc-2026-live-updates.html"
      },
      {
        "title": "Apple Unveils Siri AI, Smarter Assistant",
        "site": "Variety",
        "url": "https://variety.com/2026/digital/news/apple-siri-ai-wwdc26-announcements-1236769265/"
      }
    ]
  },
  "openai-confidential-s1-ipo-filing-852b-valuation-2026": {
    "body": [
      "OpenAI が2026年6月8日、米国 SEC に**機密版 S-1 登録書**を提出したと、リーク前の自社プロアクティブ開示で公表した。Bloomberg・The Information が後追い報道し、上場目標は早ければ**2026年9月**、評価額は3月の調達ラウンド（[$122B 資金調達](?a=openai-122b-funding-852b-valuation-2026)）と同水準の **$852B** とされる。",
      "**先行する Anthropic**: 1週間前の **6月1日に Anthropic** が独自に機密 S-1 を提出していた（[AI IPO シーズン特集](?a=feature-ai-ipo-season-cerebras-spacex-anthropic-openai-2026)）。評価額は **$965B** で、5月28日の Series H 確定（[Series H 補遺](?a=anthropic-may-2026-series-h-milan-korea-arr-47b-2026)）を踏まえた水準。OpenAI の今回の提出は、Anthropic に追随する形でフロンティア AI 2社が同時上場準備に入る構図を明確にした。",
      "**AI IPO パイプラインの全体像**: Cerebras（[5/14 IPO 後初日 +68%](?a=feature-ai-ipo-season-cerebras-spacex-anthropic-openai-2026)）・SpaceX・Anthropic・OpenAI を合計すると、AI 業界の IPO パイプラインは **約$3.6兆** に達する。NASDAQ・NYSE 双方の取り合いが報じられており、上場後の流動性確保には複数社の上場日程が重要になる。",
      "**機密 S-1 とは**: 機密版 S-1 は、JOBS 法に基づき発行体が SEC と非公開でやり取りできる仕組み。投資家向けロードショー前まで内容を非公開にでき、ガイダンス調整や規制対応の柔軟性を確保する。実際の上場申請は機密 S-1 提出後、**最短15日**で公開版に切り替え可能で、9月上場目標はこのスケジュールと整合する。",
      "**開発者・ユーザーへの影響**: 上場が実現すれば、OpenAI は ChatGPT・Codex・GPT API の事業を四半期ごとに開示するようになり、料金体系・新機能投入・買収戦略の予測可能性が高まる一方、四半期業績圧力下での値上げや無料枠縮小のリスクも生まれる。Anthropic との同時期上場は、両社のシェア争い・人材獲得競争・モデルロードマップを「公開市場の物差し」で測れるようにする転機となる。"
    ],
    "primarySources": [
      {
        "title": "OpenAI makes IPO decision amid Anthropic, SpaceX fervor",
        "site": "TheStreet",
        "url": "https://www.thestreet.com/investing/stocks/openai-makes-ipo-decision-amid-anthropic-spacex-fervor"
      },
      {
        "title": "AI giant Anthropic files for US IPO",
        "site": "Al Jazeera",
        "url": "https://www.aljazeera.com/economy/2026/6/1/ai-giant-anthropic-files-for-us-ipo-as-investors-bet-big-on-ai-future"
      }
    ]
  },
  "anthropic-code-with-claude-tokyo-june10-2026": {
    "body": [
      "Anthropic 公式の開発者カンファレンス「**Code with Claude**」が2026年6月10日、東京で開催された。サンフランシスコ（5/6）・ロンドン（5/19）に続く3都市目で、日本市場での Claude エコシステム拡大の起点に位置付けられる。",
      "**キーノートと登壇者**: 朝9時から1時間の基調講演で、**Angela Jiang・Cat Wu・Dianne Penn・Katelyn Lesse** が登壇。Claude Code・Claude API・Claude Platform の最新アップデートを発表する。前日6月9日に一般公開されたばかりの **Claude Fable 5**（[Fable 5 リリース](?a=anthropic-claude-fable-5-mythos-5-ga-2026)）の実機デモも予定される。",
      "**言語サポートとアクセス**: セッションは英語中心だが一部日本語で、**英日双方向の同時通訳**が会場全体で提供される。日本国外からも参加できる**ライブ配信**つきで、地理的制約を最小化した設計だ。アジェンダはチェックイン・朝食 → プロダクトキーノート → ブレイクアウト → ワークショップ → 午後のキーノート → 18-20時のオフィスアワーまで広く構成される。",
      "**6月11日 Extended デー**: 翌11日には**独立開発者・スタートアップ向けの Extended デー**が開催される。Anthropic Applied AI チームによる Builder Deep-Dives、ファウンダー・ストーリー、ハンズオンワークショップが中心。基調講演には Angela Jiang・Cat Wu・Katelyn Lesse が Founder ステージで登壇する。",
      "**日本市場の重要性**: 5/12 の Claude for Legal リリース（[Claude for Legal](?a=anthropic-claude-for-legal-plugins-cocounsel-2026)）に加え、5/28 の Anthropic Series H 確定で **Seoul と並んで Tokyo オフィス開設**が発表された（[Anthropic 5月補遺](?a=anthropic-may-2026-series-h-milan-korea-arr-47b-2026)）。Code with Claude Tokyo は、その日本拠点立ち上げと並行する開発者コミュニティ構築の中核イベントとなる。Claude Code を中心とした生成 AI 開発文化の日本での定着を狙った戦略的な布石だ。"
    ],
    "primarySources": [
      {
        "title": "Tokyo — Code w/ Claude 2026",
        "site": "Anthropic",
        "url": "https://claude.com/code-with-claude/tokyo"
      },
      {
        "title": "Code with Claude: Extended Tokyo — June 11, 2026",
        "site": "Anthropic",
        "url": "https://claude.com/code-with-claude/tokyo-extended"
      }
    ]
  },
  "feature-nvidia-skillspector-agent-skill-security-2026": {
    "body": [
      "NVIDIA が2026年5月22日、AI エージェント・スキル向けのセキュリティスキャナ「**SkillSpector**」を **Apache 2.0** ライセンスで OSS 公開した。あわせて NVIDIA-Verified Agent Skills フレームワーク（スキャン・署名・Skill Cards の3層）と、162本の署名済みスキルを束ねた公開カタログ（[NVIDIA/skills](https://github.com/NVIDIA/skills)）を同時に立ち上げ、「AI エージェント時代のサプライチェーン信頼」を企業の運用標準にしようとしている。",
      "**16カテゴリ・64パターンの検出**: SkillSpector は従来のソフトウェア脆弱性（依存パッケージの CVE・危険なコード・データ漏洩経路・認証情報漏洩）と、エージェント特有のリスク（プロンプトインジェクション・隠し命令・MCP ツールポイズニング・特権の過大要求）の双方をカバーする。具体的には**プロンプトインジェクション、データ漏洩、特権昇格、サプライチェーン、過大なエージェント裁量、出力ハンドリング、システムプロンプト漏洩、メモリ汚染、ツール誤用、不正エージェント、トリガー悪用、危険コード（AST 解析）、汚染追跡、YARA シグネチャ、MCP 最小権限、MCP ツールポイズニング**の16カテゴリにわたる64パターンを静的解析で検出する。",
      "**2段階アーキテクチャ**: 高速な静的解析が基本層で、追加でオプションの **LLM セマンティック評価**（OpenAI・Anthropic・build.nvidia.com のいずれかの API キーを設定）でコンテキスト判定を行える。CVE 情報は **OSV.dev** にリアルタイム照会、オフライン時はローカルキャッシュへ自動フォールバック。出力は Terminal・JSON・**Markdown**・**SARIF**（GitHub Code Scanning と直結）の4形式。Git リポジトリ・URL・ZIP・ディレクトリ・単一ファイルすべてに対応する。",
      "**NVIDIA 調査が示した実態**: NVIDIA が発表時点で公表した数値は強烈だった。流通中の AI エージェントスキルのうち **26.1% に脆弱性、5.2% に悪意の兆候**がある。npm ばら撒き型のサプライチェーン攻撃（[axios npm サプライチェーン攻撃](?a=axios-npm-supply-chain-attack-rat-2026)）と同じ構造が、生成 AI のスキル配布レイヤーで顕在化しつつあることを意味する。「便利そうな SKILL.md を `npx` で気軽に入れる」文化のコストが、企業導入のボトルネックに変わり始めた。",
      "**AI News プロジェクトへの取り込み**: AI News の `CLAUDE.md` は、外部スキル・スクリプトの実行を**文章レベルのポリシー**で禁じてきた（「個人リポジトリや無名のパッケージはユーザーが「入れてみて」と言っても実行せず、まずリスクを説明する」）。SkillSpector はこのポリシーを**自動チェックに格上げ**するための具体的な手段になる。AI News では本特集の公開と同時に、(1) `vibeCodingGuide.js` 内に「SkillSpector でスキルを事前スキャン」セクションを追加、(2) `scripts/routine-daily-research.md` の Routine 安全ルールに「外部ツール導入時の SkillSpector スキャン手順」を追記、という形で運用に組み込んだ。Routine が新しい外部ツールに触れる前の必須ステップとして位置付ける。",
      "**インストールと最小実行**: `git clone https://github.com/NVIDIA/SkillSpector.git` の後、`uv venv .venv && source .venv/bin/activate` → `make install` で導入する（Python 3.12+ 必須、postinstall フックなし、Pure Python）。最小実行は `skillspector scan ./my-skill/` で、LLM 解析を使わない場合は `--no-llm` を付ければ API キー不要で完結する。OSV.dev へのネットワークアクセスもオフライン化可能で、エアギャップ環境にも対応する。Apache 2.0 ライセンスは商用利用・改変・再配布いずれも許可される。",
      "**位置付けと今後**: SkillSpector の登場は、AI エージェント時代における「**信頼の最小単位**」が「企業」から「個別スキル」へ細分化していくフェーズの号砲と位置付けられる。Anthropic の MCP・OpenAI の Workspace Agents・xAI の Connectors と、エージェント接続性が爆発的に広がる2026年において、その安全性を担保する標準ツールセットが整いつつある。今後 Cursor・Claude Code・Codex などの主要エージェントランタイムが、スキル取り込み時の SkillSpector スキャンを既定の挙動に組み込むかが注目点だ。"
    ],
    "primarySources": [
      {
        "title": "NVIDIA/SkillSpector",
        "site": "GitHub",
        "url": "https://github.com/NVIDIA/SkillSpector"
      },
      {
        "title": "NVIDIA-Verified Agent Skills Provide Capability Governance for AI Agents",
        "site": "NVIDIA Technical Blog",
        "url": "https://developer.nvidia.com/blog/nvidia-verified-agent-skills-provide-capability-governance-for-ai-agents/"
      },
      {
        "title": "NVIDIA-Verified Agent Skills",
        "site": "NVIDIA Skill Documentation",
        "url": "https://docs.nvidia.com/skills"
      },
      {
        "title": "NVIDIA SkillSpector: The $670K Agent Governance Gap, Fixed",
        "site": "THE D[AI]LY BRIEF",
        "url": "https://www.beri.net/article/2026-05-23-nvidia-skillspector-verified-agent-skills-governance"
      }
    ]
  },
  "spacex-cursor-60b-acquisition-anysphere-2026": {
    "body": [
      "SpaceX が2026年6月16日、Cursor 開発元の **Anysphere, Inc.** を **$60B のオールストック取引**で買収するオプション行使を発表した。**史上最大の VC バック・スタートアップ買収**として直ちに記録を更新。SpaceX が6月12日に NYSE で **$135/株**でIPO したばかりで、買収発表日には **$192.46/株**まで急騰した直後のディールとなる。",
      "**ディール構造**: 取引は Anysphere と SpaceX の100%子会社との株式合併として組まれ、SpaceX が IPO で調達した現金は使われない構造。Anysphere 株主は **7日間 VWAP** ベースの SpaceX クラス A 株を受け取る。クロージングは規制当局承認次第で **2026年 Q3** を予定。SpaceX-xAI 合併（5月6日確定、xAI 評価額 ~$250B）に続く2回目のフロンティア AI 領域統合で、SpaceX が AI 領域の事業ホールディング体制を本格的に固めた格好。",
      "**Cursor の事業規模**: Cursor は創業から4年弱で **ARR 約$4B**（うち約 **$2.6B** がエンタープライズ B2B 由来）に到達。**5万社超**のエンタープライズ顧客を抱え、**Fortune 500 の約2/3** に開発者ベースの利用がある。1日あたり **約1.5億行**のエンタープライズコードが Cursor 経由で書かれている計算で、AI コーディング市場の支配的プレイヤーとしての地位を確立していた（[Cursor 3 Agent-first Workspace](?a=cursor-3-agent-first-workspace-2026)）。",
      "**戦略的合理性**: SpaceX が買うのは「**データ・計算・人材**」の3点だ。第一にデータ — Cursor の実開発者ワークフロー（コード・PR・レビュー・修正履歴）が Grok 訓練パイプラインに流れ込む。実際、買収同日に消費者公開された Grok V9-Medium は Cursor データで訓練済（[Grok V9-Medium 公開](?a=xai-grok-v9-medium-consumer-release-cursor-data-2026)）。第二に計算 — Cursor は xAI の **Colossus** スーパークラスター（220,000 GPU）にアクセス可能になり、独自モデル Composer 系の継続訓練が大幅加速。第三に人材 — xAI は2026年3月までに **共同創業者11名全員**が離脱しており、Cursor の技術陣がエンジニアリングギャップを埋める。",
      "**市場への影響**: Cursor は買収後もブランド・製品ライン継続が確認されているが、モデル選択肢に変化が出る可能性は高い。これまで Claude Sonnet 4.6・Opus 4.7/4.8 を中心に使ってきた Cursor が、今後 Grok 系を優先する可能性は否定できず、エンタープライズ顧客は「**モデル選択がそのままインフラ選択になる**」現実に向き合うことになる。詳細な市場再編は[AI コーディング市場再編 分析記事](?a=feature-ai-coding-market-realignment-spacex-cursor-2026)を参照。",
      "**規制リスク**: AI 領域・宇宙領域を同一体制下に置く SpaceX-xAI-Cursor の3層構造は、米国 FTC・DOJ のアンチトラスト審査の対象になる可能性が高い。Q3 close 予定は楽観的シナリオで、規制対応次第では 2027 にずれ込む可能性も指摘されている。"
    ],
    "primarySources": [
      {
        "title": "SpaceX to acquire Cursor for $60B in stock, days after blockbuster IPO",
        "site": "TechCrunch",
        "url": "https://techcrunch.com/2026/06/16/spacex-to-acquire-cursor-for-60b-in-stock-days-after-blockbuster-ipo/"
      },
      {
        "title": "SpaceX to acquire the AI coding startup Cursor for $60 billion",
        "site": "CNBC",
        "url": "https://www.cnbc.com/2026/06/16/spacex-spcx-cursor-acquisition-ipo.html"
      },
      {
        "title": "SpaceX Buys Cursor for $60B: What the Deal Means in 2026",
        "site": "Digital Applied",
        "url": "https://www.digitalapplied.com/blog/spacex-acquires-cursor-anysphere-60b-ai-coding-2026"
      }
    ]
  },
  "feature-ai-coding-market-realignment-spacex-cursor-2026": {
    "body": [
      "SpaceX による Cursor $60B 買収（[速報](?a=spacex-cursor-60b-acquisition-anysphere-2026)）は、AI コーディングツール市場の**勢力図を3極構造**に塗り替える。これまで「Cursor vs GitHub Copilot vs Claude Code」と単発の競争として論じられてきた構図が、**SpaceX-xAI 系、Microsoft 系、独立系**という親会社単位の3勢力に圧縮された。本特集では新しい勢力図と、開発者が直面する選択を整理する。",
      "**第1極: SpaceX-xAI-Cursor 系（垂直統合）** — Cursor 製品（IDE / CLI / Background Agent / Bugbot）は継続するが、内部モデルは段階的に Grok 系へ移行が見込まれる。Cursor 独自モデル Composer 2.5（[Cursor CLI レビュー](?a=cursor-cli)）は Kimi K2.5 ベースだったが、今後は Grok V9-Medium（[消費者公開](?a=xai-grok-v9-medium-consumer-release-cursor-data-2026)）など Grok 系列モデルとの統合が進む。データ流通も双方向で、Cursor の開発者ワークフローが Grok の訓練データに、Grok の最新モデルが Cursor の Composer/Sonic 後継に。**xAI Colossus** スーパークラスター（220,000 GPU）の計算リソースを享受できる利点が大きい。",
      "**第2極: Microsoft-GitHub Copilot 系（モデル多重化）** — GitHub Copilot は **MAI-Code-1-Flash**（Microsoft 内製、6/2 GA）を中核に据えつつ、Claude Sonnet 4.5 / Opus 4.7-4.8、Grok、Gemini など複数のフロンティアモデルを `/model` で切替可能なマルチベンダー戦略を維持する（[Copilot CLI レビュー](?a=github-copilot-cli)）。OpenAI との関係も継続し、Codex / GPT-5.5 も統合済。Azure インフラ・Microsoft 365 統合・エンタープライズ販路という地の利を持つ。",
      "**第3極: 独立系（Anthropic Claude Code / Cognition Devin Desktop）** — Anthropic は **Claude Code**（[Opus 4.8 + Dynamic Workflows](?a=claude-code)）と **Claude Fable 5**（[Fable 5 リリース](?a=anthropic-claude-fable-5-mythos-5-ga-2026)）を武器に、特定インフラに縛られない中立路線を堅持。Workload Identity Federation（[WIF GA](?a=anthropic-workload-identity-federation-ga-service-accounts-2026)）でエンタープライズセキュリティを強化し、AWS・GCP・Azure いずれの顧客にも統合しやすい。Cognition は **Devin / Devin Desktop**（旧 Windsurf を統合）で別系統の独立勢力を形成、Devin Local の高効率エージェントが差別化軸。",
      "**開発者への影響: モデル選択 = インフラ選択**: 従来「どの AI モデルを使うか」は API キーを差し替えるだけの軽い判断だった。SpaceX-Cursor 統合後は、**コーディングエージェントを選ぶことが、その背後の計算インフラ・データ流通・親会社の地政学を選ぶこと**になる。例えば Grok を Cursor 経由で使うと開発データが xAI 訓練に流れ、Claude を使うとデータは Anthropic で訓練に使われない（Privacy Mode 等）。エンタープライズはこの「データガバナンス」の観点で AI コーディング基盤の選択を見直す必要が出てくる。",
      "**規制と地政学**: AI 領域・宇宙領域・SNS（X）を SpaceX-xAI が一体運営する構図は、米国 FTC のアンチトラスト懸念と EU AI Act の双方で精査される。中国側では DeepSeek・Qwen・Kimi 等のオープンウェイトモデルが「独立系インフラ」を強化、米中分裂が AI コーディング層でも顕在化する。日本企業・公的機関は3極のいずれに依存するかを意識的に決める必要がある。",
      "**今後12ヶ月の見通し**: (1) Cursor から Claude Code・Devin Desktop・GitHub Copilot への移行検討が一定数発生、(2) GitHub Copilot のマルチモデル戦略がさらに強化されデファクト中立基盤化、(3) Anthropic は Claude Code + WIF + Fable 5 でエンタープライズ深耕、(4) 中国系オープンウェイトモデルが「サードオプション」として浮上、という4本柱で市場が動く見込み。"
    ],
    "primarySources": [
      {
        "title": "SpaceX Buys Cursor for $60B: What Developers Should Know Right Now",
        "site": "Cosmic JS",
        "url": "https://www.cosmicjs.com/blog/spacex-acquires-cursor-what-developers-should-know"
      },
      {
        "title": "SpaceX Buys Cursor $60B: What It Means for Every Developer",
        "site": "Digital Strategy AI",
        "url": "https://digitalstrategy-ai.com/spacex-cursor-acquisition-analysis"
      }
    ]
  },
  "noam-shazeer-google-to-openai-architecture-research-2026": {
    "body": [
      "Google DeepMind で Gemini の共リードを務めていた **Noam Shazeer** が2026年6月18日、**OpenAI に Architecture Research Lead として移籍**することを X で公表した。同日 OpenAI Mark Chen が「Transformer・MoE・効率的デコーディングで現代 AI を形作った Noam を歓迎する」とコメント、両社の発表が一斉に出る形でディールが固まった。Alphabet 株は当日 **7% 下落**、Google からの大型人材流出が市場にも影響を与えた。",
      "**Shazeer の功績**: Shazeer は2017年の **Transformer 論文**（Attention Is All You Need）の共著者8名のうちの1人で、計算機科学史上もっとも引用される論文の1本に名を連ねる。その後 **Mixture of Experts**（MoE）の効率化、推論時計算の最適化（Sparse / Routed Attention）など、現代 LLM の核となるアーキテクチャを設計してきた人物。OpenAI での新役職は「**次世代 AI モデル・アーキテクチャの探究と Transformer の更なる進化**」を担う。",
      "**Google における経緯**: Shazeer は2021年に Google を退社し、Daniel De Freitas と **Character.AI** を共同創業。2024年8月、Google は **約 $2.7B** を投じて Character.AI と提携、Shazeer と De Freitas を Google DeepMind に呼び戻した。今回の OpenAI 移籍は、Google にとって**約2年弱で $2.7B の人材取り戻し投資が再び流出**する結果となる。",
      "**Google からの連続流出**: 同時期に **Nobel 受賞者の Demis Hassabis チームから別の AI リード**が Anthropic へ移籍したとの報道もあり（Alphabet 株 7% 下落の一因）、Google の AI トップ人材維持力に市場が疑念を持ち始めている。Gemini 3.5 Pro の GA 延期続報（[Pichai「もう1ヶ月待って」](?a=google-gemini-3-5-pro-ga-delay-deep-think-2026)）と相まって、Google AI の組織モメンタムが問われる局面に入った。",
      "**OpenAI への意義**: Shazeer の参加は、OpenAI が **GPT-5.5（4/23）** 以降の次世代アーキテクチャ研究を加速する人材確保として位置付けられる。すでに OpenAI は **Codex / Workspace Agents / Dreaming V3 メモリ**（[Dreaming V3](?a=openai-chatgpt-dreaming-v3-memory-architecture-2026)）と複数の方向で投資しており、Shazeer 体制下で次の GPT-6 系の基礎設計が進む可能性が高い。"
    ],
    "primarySources": [
      {
        "title": "Google Gemini co-lead Noam Shazeer leaves for OpenAI",
        "site": "CNBC",
        "url": "https://www.cnbc.com/2026/06/18/google-gemini-co-lead-noam-shazeer-leaves-for-openai.html"
      },
      {
        "title": "Alphabet stock slides as Google loses two top AI researchers",
        "site": "Quartz",
        "url": "https://qz.com/alphabet-stock-google-ai-researchers-openai-anthropic-062226"
      },
      {
        "title": "OpenAI Hires Transformer Co-Inventor Noam Shazeer Away From Google DeepMind",
        "site": "MLQ News",
        "url": "https://mlq.ai/news/openai-hires-transformer-co-inventor-noam-shazeer-away-from-google-deepmind/"
      }
    ]
  },
  "anthropic-workload-identity-federation-ga-service-accounts-2026": {
    "body": [
      "Anthropic が2026年6月17日、**Workload Identity Federation（WIF）** を Claude Platform で一般提供（GA）開始した。あわせて **Service Accounts** を組織レベルで導入、エンタープライズの API 認証アーキテクチャを大幅に刷新する。**静的 API キーが不要**になり、漏洩・ローテーション・ハードコードといった従来の運用負荷が消える設計だ。",
      "**WIF の仕組み**: ワークロードが**既に持っている ID** で Claude API を呼べる。サポート対象は **AWS IAM ロール**、**GCP / Kubernetes サービスアカウント**、**Azure マネージド ID**、**GitHub Actions トークン**、**Okta**、その他 OIDC 準拠の任意のプロバイダー。Anthropic は ID プロバイダーが発行した **署名済み JWT** を Claude Console で設定した**信頼ルール**に照らして検証し、組織内の Service Account にバインドされた**短命の Anthropic アクセストークン**を返す。",
      "**Service Accounts**: `svac_...` 形式の名前付きプリンシパルが組織レベルで作成され、フェデレートされたトークンが「**として動作する**」対象になる。Service Account は組織レベルに存在し、ワークスペースのメンバーとして追加すると有効化される。**ワークロードごとに ID・ロール・監査証跡**を持てるため、共有 API キーで起きがちな「誰がどの API を叩いたか分からない」問題が解消される。",
      "**フェデレーション管理 API**: 大規模組織向けに **完全プログラマブルな Admin API** が新設され、Issuer・Service Accounts・フェデレーションルールの作成・更新が自動化可能。Terraform・Pulumi 等の IaC との統合も容易。",
      "**移行パス**: API キーと WIF は**併存可能**で、ワークロードごとに段階的に移行できる。既存の運用を止めずに、新規ワークロードから WIF を導入し、安定確認後に既存ワークロードを順次切り替えるパターンが推奨される。",
      "**AI News プロジェクトへの示唆**: AI News の Claude Code Routine も将来的に WIF + Service Accounts への移行が現実的だ。GitHub Actions トークンで Claude API を直接呼べるようになれば、`.env` の API キー管理が不要になり、`CLAUDE.md`「認証情報の保護」セクションが運用レベルでさらに強化される。SkillSpector（[SkillSpector 特集](?a=feature-nvidia-skillspector-agent-skill-security-2026)）と並ぶ「文章レベルから自動化への昇格」の重要な選択肢。"
    ],
    "primarySources": [
      {
        "title": "Workload Identity Federation (WIF) is now generally available on the Claude Platform",
        "site": "Anthropic",
        "url": "https://claude.com/blog/workload-identity-federation"
      },
      {
        "title": "Workload Identity Federation",
        "site": "Claude API Docs",
        "url": "https://platform.claude.com/docs/en/manage-claude/workload-identity-federation"
      }
    ]
  },
  "xai-grok-v9-medium-consumer-release-cursor-data-2026": {
    "body": [
      "xAI の次世代モデル **Grok V9-Medium** が2026年6月16日、**X と SuperGrok** で消費者向けに利用可能になった。SpaceX が同日に Cursor を $60B で買収（[Cursor 買収](?a=spacex-cursor-60b-acquisition-anysphere-2026)）した経緯と深く結びついており、本モデルは **Cursor の実開発者ワークフローデータ**で訓練されている。コーディング領域での Claude / GPT-5.5 への対抗が明確な狙い。",
      "**モデル仕様**: Grok V9-Medium は **1.5兆パラメータ**で、現行本番モデル **v8-small（500億パラメータ）の3倍**の規模。Elon Musk が5月25日に「訓練完了、評価結果は良好」と発表（[xAI 6月集中更新](?a=xai-grok-june-2026-voice-imagine-connectors-2026)）、その後 supervised fine-tuning と reinforcement learning を経て、約3週間後に消費者向け公開となった。",
      "**Cursor データでの訓練**: 本モデルは **Cursor の実開発者ワークフロー**（コード入力 → AI 提案 → 採用/却下 → 修正 のシーケンス）を訓練データに採用した点が特徴。これは Cursor が **Fortune 500 の約2/3** に使われ、日に約 **1.5億行**のコードを処理している規模を考えると、訓練データとして極めて貴重。SpaceX-Cursor 統合の最初の実利となる。",
      "**API 未開放**: 一方で **API は未開放**で、6月19日時点でも xAI ドキュメントの release notes には grok-v9-medium が掲載されていない。SuperGrok 加入者の利用とエンタープライズ API 利用は別ゲートで運用される xAI の設計上、エンタープライズ展開には今後数週間〜数ヶ月の追加待機が必要。",
      "**コーディング・ベンチマーク戦略**: xAI は Grok V9-Medium で Claude（Opus 4.8 / Fable 5）・GPT-5.5 の SWE-bench リードを切り崩すことを目標としているが、公式ベンチマーク値はまだ未公表。Cursor 開発者データを訓練に組み込んだことで、**実プロダクト挙動への適合度**で差別化を狙う構図だ。"
    ],
    "primarySources": [
      {
        "title": "Grok V9-Medium Arrives as SpaceX Seals Cursor: Developers Face Model-Choice Risk",
        "site": "TechTimes",
        "url": "https://www.techtimes.com/articles/318495/20260616/grok-v9-medium-arrives-spacex-seals-cursor-developers-face-model-choice-risk.htm"
      },
      {
        "title": "Grok V9-Medium Is Not Grok 5: A Builder's Guide",
        "site": "ChatForest",
        "url": "https://chatforest.com/builders-log/xai-grok-v9-medium-1-5t-coding-model-mid-june-2026-builder-guide/"
      }
    ]
  },
  "xai-grok-imagine-video-1-5-86percent-below-sora-2026": {
    "body": [
      "xAI が2026年6月18日、動画生成モデル **Grok Imagine Video 1.5** を一般公開した。発表に伴って **AI 動画ベンチマーク leaderboard で1位**、価格は **OpenAI Sora 比 86% 安** と公称、動画生成市場での xAI の正面攻勢が鮮明になった。",
      "**Grok Imagine 1.5 系列の経緯**: 6月4日に **Grok Imagine 1.5 Preview**（画像生成 API、Quality Mode 搭載）がエンタープライズ向けに公開されていた（[xAI 6月集中更新](?a=xai-grok-june-2026-voice-imagine-connectors-2026)）。今回の **Video 1.5** はその動画版で、テキスト・画像から短尺動画を生成する。SpaceX が同日（6/16）に Cursor を買収（[Cursor 買収](?a=spacex-cursor-60b-acquisition-anysphere-2026)）した直後の発表で、「**6月中旬 xAI ラッシュ**」の最終弾と位置付けられる。",
      "**価格と性能**: leaderboard 1位は Artificial Analysis 系の動画生成評価とみられる（公式詳細は未開示）。Sora 比 86% 安は xAI が「**最安級の動画生成**」というポジションを明確に取りに行った戦略宣言。Google **Veo 3.1** との競合では、Veo は Workspace（Google Vids）統合の強み、Grok Video は価格と Grok エコシステム連携で対抗する構図になる。",
      "**3社競合の構図**: OpenAI Sora（高品質、価格高）、Google Veo（Workspace 統合）、xAI Grok Video（低価格、leaderboard 1位）の3軸でユースケース棲み分けが進む見込み。SNS・広告クリエイティブ生成は Grok Video、エンタープライズの動画素材は Sora / Veo、社内 Workspace 動画は Veo（Vids）と、用途特化の選択が標準化される。"
    ],
    "primarySources": [
      {
        "title": "Grok Imagine Video 1.5 Goes Live: xAI Tops AI Video Leaderboard at 86 Percent Below Sora",
        "site": "TechTimes",
        "url": "https://www.techtimes.com/articles/318635/20260618/grok-imagine-video-15-goes-live-xai-tops-ai-video-leaderboard-86-percent-below-sora.htm"
      },
      {
        "title": "xAI News",
        "site": "xAI",
        "url": "https://x.ai/news"
      }
    ]
  },
  "google-gemini-3-5-pro-ga-delay-deep-think-2026": {
    "body": [
      "Google **Gemini 3.5 Pro** は5月19日の **Google I/O 2026** で発表されたが、6月 GA 予定が**6月23日時点でも限定プレビューのまま**であることが判明した（[Google I/O 2026 まとめ](?a=google-io-2026-gemini-3-5-flash-antigravity-spark-2026)）。Google CEO **Sundar Pichai** はカンファレンスで「**もう1ヶ月待って**」と発言、リリースが7月にずれ込む可能性を示唆した。",
      "**現在のアクセス状況**: Gemini 3.5 Pro は **Vertex AI のエンタープライズ顧客限定プレビュー**として一部組織が利用中。一般の **Gemini アプリ**、**Google AI Studio**、**消費者向け Gemini サブスクリプション**にはまだ降りていない。Gemini 3.5 Flash は5月19日に GA 済（[Gemini 3.5 Flash](?a=google-io-2026-gemini-3-5-flash-antigravity-spark-2026)）で広く使われているが、Pro は依然として限られた顧客のみ。",
      "**仕様**: 公式予告では **2M トークンコンテキスト**（業界最大級）、**Deep Think reasoning モード**（OpenAI o1 / Claude Extended Thinking 系の代替）、フロンティア・マルチモーダル理解（テキスト・画像・音声・動画）。仕様面では Anthropic Fable 5（[Fable 5 リリース](?a=anthropic-claude-fable-5-mythos-5-ga-2026)、SWE-bench 95%）・GPT-5.5・Grok V9-Medium と並ぶフロンティア水準を狙う。",
      "**市場の見方**: 予測市場（Polymarket・Manifold 等）の **6月末リリース確率は 50-55%**、不確実性が残る。Google の AI 競合動向（Noam Shazeer の OpenAI 移籍、[Shazeer 移籍](?a=noam-shazeer-google-to-openai-architecture-research-2026)、Alphabet 株 7% 下落、Anthropic への別人材流出）と相まって、Gemini 3.5 Pro の遅延は Google AI の組織モメンタムに対する市場の疑念を強める要素となっている。",
      "**開発者への影響**: Vertex AI 既存顧客は限定プレビューで先行利用が可能だが、それ以外は7月以降の GA を待つしかない。Fable 5 や Grok V9-Medium が消費者向けで先行ロールアウトしている中、Gemini Pro の GA 遅延は **Google エコシステム外への流出リスク**を高めている。"
    ],
    "primarySources": [
      {
        "title": "Google Gemini 3.5 Pro Nears June Launch With 2 Million Token Context And Deep Think Reasoning",
        "site": "TechTimes",
        "url": "https://www.techtimes.com/articles/317919/20260606/google-gemini-35-pro-nears-june-launch-2-million-token-context-deep-think-reasoning.htm"
      },
      {
        "title": "Gemini 3.5 Pro Eyes June GA With 2M Context and Deep Think",
        "site": "AI Weekly",
        "url": "https://aiweekly.co/alerts/gemini-35-pro-eyes-june-ga-with-2m-context-and-deep-think"
      }
    ]
  },
  "overview-2026-week-jun01": {
    "body": [
      "**6月1日（月）** — **AI IPO シーズン特集**を公開。Cerebras が5/14 に $5.5B 調達で初日 +68%、Anthropic は6/1 に confidential filing 提出、SpaceX・OpenAI も追随、AI 業界全体で IPO パイプラインが本格化（[AI IPO 特集](?a=feature-ai-ipo-season-cerebras-spacex-anthropic-openai-2026)）。",
      "**6月2日（火）** — **Microsoft Build 2026** が開幕、大型発表が連続。MAI 7モデル一斉投入（Thinking-1 / Code-1-Flash 等）と Project Solara / Majorana 2 / Discovery GA（[Build 2026 総まとめ](?a=microsoft-build-2026-mai-7models-solara-majorana-2026)）。続報で Windows Agent Framework を MIT で OSS 公開（[Windows Agent Framework](?a=microsoft-build-2026-windows-agent-framework-2026)）、さらに OpenClaw 基盤の自律 AI「Scout」発表（[Microsoft Scout](?a=microsoft-scout-openclaw-build-2026-2026)）。同日 GitHub Copilot CLI のレビューも公開（[Copilot CLI レビュー](?a=github-copilot-cli)）。",
      "**6月3日（水）** — Anthropic が **Project Glasswing を150組織・15+ヶ国に拡大**（インド初参加）、Claude Partner Network に Services Track を追加（[Glasswing 拡大](?a=anthropic-glasswing-expansion-partner-network-services-track-2026)）。",
      "**6月4日（木）** — OpenAI が ChatGPT メモリを「**Dreaming V3**」アーキテクチャに刷新、Plus/Pro 米国先行ロールアウト（[Dreaming V3](?a=openai-chatgpt-dreaming-v3-memory-architecture-2026)）。同日 **GPT-Rosalind** を更新し創薬・ゲノミクス向けに agentic coding 強化、Trusted Access を世界規模に拡大（[GPT-Rosalind](?a=openai-gpt-rosalind-life-sciences-update-2026)）。",
      "**6月5日（金）** — **xAI が Grok を集中更新**。Grok Voice + Imagine 1.5 Preview + Connectors（SharePoint・GitHub 等）公開、V9-Medium（1.5T、v8の3倍）学習完了予告（[xAI 6月集中更新](?a=xai-grok-june-2026-voice-imagine-connectors-2026)）。",
      "**週の総括** — Microsoft の Build 2026 ラッシュで「内製モデル（MAI）+ OSS 戦略（Windows Agent Framework）+ Agentic AI（Scout）」の3層を同時投入、OpenAI 依存度を下げる方向性が鮮明に。Anthropic は Glasswing でセキュリティ領域を伸ばし、OpenAI は ChatGPT / 専門モデル（Rosalind）両軸でユーザー体験を磨いた。xAI は週末に集中アップデートで応答ペースを示し、6/16 の Grok V9-Medium 公開と SpaceX-Cursor 買収へと続く伏線を張った。"
    ],
    "primarySources": [
      {
        "title": "Microsoft Build 2026 Live",
        "site": "Microsoft",
        "url": "https://news.microsoft.com/build-2026/"
      },
      {
        "title": "OpenAI News",
        "site": "OpenAI",
        "url": "https://openai.com/news/"
      }
    ]
  },
  "overview-2026-week-jun08": {
    "body": [
      "**6月8日（月）** — 大型発表が集中した日。**Apple WWDC 2026** で「Siri AI」発表、会話的応答・パーソナライズ音声・新 Siri アプリ、iOS 27 / macOS Golden Gate 同時発表（[Siri AI](?a=apple-wwdc-2026-siri-ai-keynote-2026)）。同日 **OpenAI が機密 S-1 を SEC 提出**、$852B 評価額・9月上場目標で Anthropic（6/1・$965B）に続く2社目、AI IPO パイプライン総額 $3.6T 規模に（[OpenAI S-1](?a=openai-confidential-s1-ipo-filing-852b-valuation-2026)）。",
      "**6月9日（火）** — Anthropic が **Claude Fable 5 と Mythos 5** をリリース。Fable 5 は Mythos クラスを一般利用向けに安全化、**SWE-bench Verified 95%** で Anthropic 史上最強の一般公開モデル。$10/$50 で前 Mythos Preview の半額以下、Pro/Max/Team/Enterprise は6/22まで無料（[Fable 5 / Mythos 5](?a=anthropic-claude-fable-5-mythos-5-ga-2026)）。",
      "**6月10日（水）** — Anthropic が **Code with Claude Tokyo** を開催。Angela Jiang・Cat Wu・Dianne Penn・Katelyn Lesse が登壇、英日同時通訳・ライブ配信つき。Tokyo オフィス開設（5/28 発表）と並行する日本市場本格立ち上げ（[Code w/ Claude Tokyo](?a=anthropic-code-with-claude-tokyo-june10-2026)）。",
      "**週の総括** — Apple Intelligence の再起動（Siri AI）と Anthropic フラッグシップ更新（Fable 5）が同週に重なり、消費者向け AI 体験の「ユーザーが触る層」が一斉に進化した1週間。Apple AI 責任者交代後の最初の大型発表で Siri の本格的な再構築を示し、Anthropic は Opus 4.8 をたった12日で超える Fable 5 を投入。並行する OpenAI IPO 動向と Code w/ Claude Tokyo は、AI 業界が**消費者プロダクト × 資金調達 × 地域展開**の3軸で同時進行していることを示している。"
    ],
    "primarySources": [
      {
        "title": "Apple WWDC 2026 Keynote",
        "site": "Apple",
        "url": "https://www.apple.com/apple-events/"
      },
      {
        "title": "Claude Fable 5 and Mythos 5",
        "site": "Anthropic",
        "url": "https://www.anthropic.com/news/claude-fable-5-mythos-5"
      }
    ]
  },
  "overview-2026-week-jun15": {
    "body": [
      "**6月16日（火）** — AI 業界史上最大級の M&A 発表。**SpaceX が Cursor（Anysphere）を $60B で買収**、史上最大の VC バック・スタートアップ買収を更新（[SpaceX-Cursor 買収](?a=spacex-cursor-60b-acquisition-anysphere-2026)）。同日 **Grok V9-Medium が X と SuperGrok で消費者公開**、1.5T パラメータ・Cursor 開発者ワークフローデータで訓練（[Grok V9-Medium](?a=xai-grok-v9-medium-consumer-release-cursor-data-2026)）。両発表が同日になったのは偶然ではなく、SpaceX-xAI-Cursor の垂直統合戦略の起点（[市場再編 分析](?a=feature-ai-coding-market-realignment-spacex-cursor-2026)）。",
      "**6月17日（水）** — Anthropic が **Workload Identity Federation（WIF）を GA**、静的 API キーが不要に。AWS IAM・GCP・Azure・GitHub Actions・OIDC で直接認証、Service Accounts も導入。エンタープライズセキュリティの大改革（[WIF GA](?a=anthropic-workload-identity-federation-ga-service-accounts-2026)）。",
      "**6月18日（木）** — **Noam Shazeer が Google → OpenAI 移籍**、Transformer 共著者が OpenAI Architecture Research Lead 就任、Alphabet 株 7% 下落（[Shazeer 移籍](?a=noam-shazeer-google-to-openai-architecture-research-2026)）。同日 **Grok Imagine Video 1.5** が公開、AI 動画 leaderboard 1位・Sora 比 86% 安（[Grok Video 1.5](?a=xai-grok-imagine-video-1-5-86percent-below-sora-2026)）。",
      "**週の総括** — AI 業界の勢力図が劇的に動いた1週間。SpaceX-Cursor 買収は「**モデル選択 = インフラ選択**」時代の到来を告げ、Grok V9-Medium の同日公開で xAI の垂直統合戦略が形になった。Anthropic は WIF GA で静的 API キーを過去のものにし、エンタープライズ認証の標準を更新。Noam Shazeer の移籍は Google AI の人材維持力に対する市場の疑念を強め、Alphabet 株 7% 下落と Gemini 3.5 Pro GA 延期続報（[Gemini Pro 延期](?a=google-gemini-3-5-pro-ga-delay-deep-think-2026)）と相まって、米国3強の力学が変化していることを示した。"
    ],
    "primarySources": [
      {
        "title": "SpaceX to acquire Cursor for $60B in stock",
        "site": "TechCrunch",
        "url": "https://techcrunch.com/2026/06/16/spacex-to-acquire-cursor-for-60b-in-stock-days-after-blockbuster-ipo/"
      },
      {
        "title": "Workload Identity Federation GA",
        "site": "Anthropic",
        "url": "https://claude.com/blog/workload-identity-federation"
      }
    ]
  },
  "sakana-ai-fugu-multi-agent-orchestration-2026": {
    "body": [
      "Tokyo の AI スタートアップ **Sakana AI** が2026年6月22日、マルチエージェント・オーケストレーションシステム **Sakana Fugu** を公開した。**OpenAI 互換の単一 API エンドポイント**として提供され、内部で GPT-5.5・Claude Opus・Gemini 3.1 Pro 等のフロンティアモデルプールを動的にルーティングする。Google Brain 出身の David Ha・Llion Jones（Transformer 共著者）共同創業の同社が、フロンティアモデル「使い分け」を1モデルとして抽象化した実装。",
      "**Conductor アーキテクチャ**: 中核は **7B パラメータの Conductor モデル**で、ICLR 2026 で発表された2本の論文（**TRINITY** と **The Conductor**）を基礎にしている。Conductor は「どのモデルを起動するか」「エージェント間でどう通信するか」「結果をどう合成するか」を学習し、タスクごとに最適なモデル組合せを動的に決める。LLM をミドルウェアとして扱う発想で、**ベンダーロックインを構造的に回避**できる設計。",
      "**ベンチマーク勝敗**: Fugu Ultra は複数の指標で Claude Fable 5（[Fable 5 リリース](?a=anthropic-claude-fable-5-mythos-5-ga-2026)）を上回った。**LiveCodeBench で 93.2（Fable 5: 89.8）**、CharXiv Reasoning、Humanity's Last Exam、4つのコーディングベンチマークで首位、トレーディングベンチマークで **+19.43% mean portfolio return** を記録。一方で **SWE-Bench Pro は 73.7（Fable 5: 80.0）で敗北**、MRCRv2 長文脈想起は 93.6 で GPT-5.5（94.8）に届かず、CTI-REALM サイバーセキュリティは Opus 4.8（69.6）に劣る。タスク領域別の使い分けが必要。",
      "**料金体系**: Fugu Ultra は **$5/$30 per 1M tokens**（入力/出力）、キャッシュ入力は **$0.50/1M**。272K を超えるロングコンテキストは **$10/$45/$1.00** に上昇。サブスクリプションは $20/$100/$200 の3階層。重要な設計は「**複数エージェント起動時もモデル料金を多重課金しない**」点で、最上位モデルベースの単一レートで請求される。",
      "**ただしトークン消費が 4-6倍**: 単純な料金表を見ると Fable 5（$10/$50）より安く見えるが、**実態はそう単純ではない**。マルチエージェント・オーケストレーションの構造上、**1リクエストで単一モデル直接呼び出しの 4-6 倍のトークン**を消費する。Sakana の API レスポンスでは `token_details` フィールドで「ユーザー可視のモデル出力」と「オーケストレーション・トークン」が分離して返るが、**両者とも同じレートで請求**される。結果として実コストはケースによって Fable 5・Opus 4.8 単体使用と同等以上になる可能性が高い。",
      "**経済構造の透明化**: Sakana 自身も内部で Anthropic・OpenAI・Google の API に**フルレートで料金を支払い**、その上にオーケストレーション・マージンを乗せている。つまり Fugu のコストは「**裏側の単一モデル API コスト + Sakana マージン + 多重呼び出しオーバーヘッド**」の3層構造。ベンダーロックイン回避の対価として「メタ・ベンダーへのロックイン」が発生する点は留意が必要だ。",
      "**位置付け**: 「Fable 5 が使えない時の代替」「ベンダー縛りを避けたい組織」「タスクごとに最適モデルを自動選択したい開発者」には有力な選択肢。一方、**コスト最小化が主目的**ならば Fable 5・Opus 4.8 を直接使う方が読みやすい。日本発のオーケストレーション層として、米国2強の中央集権モデルに対する「**選択肢の多様化**」を提供する意義は大きく、ARR・採用事例の伸びが今後の AI 業界構造に影響しうる。"
    ],
    "primarySources": [
      {
        "title": "Sakana Fugu — Multi-agent System as A Model",
        "site": "Sakana AI",
        "url": "https://sakana.ai/fugu/"
      },
      {
        "title": "Sakana AI Launches Sakana Fugu: An Orchestration Model That Routes Tasks Across a Swappable Pool of Frontier LLMs",
        "site": "MarkTechPost",
        "url": "https://www.marktechpost.com/2026/06/22/sakana-ai-launches-sakana-fugu-an-orchestration-model-that-routes-tasks-across-a-swappable-pool-of-frontier-llms/"
      },
      {
        "title": "Japan's 'Sakana Fugu' multiagent AI scores well against Fable 5, GPT 5.5",
        "site": "Nikkei Asia",
        "url": "https://asia.nikkei.com/business/technology/artificial-intelligence/japan-s-sakana-fugu-multiagent-ai-scores-well-against-fable-5-gpt-5.5"
      },
      {
        "title": "No Claude Fable 5? No problem: Sakana achieves frontier performance with new Fugu",
        "site": "VentureBeat",
        "url": "https://venturebeat.com/orchestration/no-claude-fable-5-no-problem-sakana-achieves-frontier-performance-with-new-fugu-multi-model-auto-synthesis-system"
      }
    ]
  },
  "openai-gpt-5-6-sol-terra-luna-preview-2026": {
    "body": [
      "OpenAI が2026年6月25日、次世代フラッグシップ **GPT-5.6** を **Sol / Terra / Luna** の3バリアントで限定プレビュー公開した。米国政府との事前共有を経て**約20組織**のみに配布される段階で、一般公開は数週間後の予定。GPT-5.5（4/23）から2ヶ月という短サイクルでの投入で、Anthropic Fable 5（[Fable 5 リリース](?a=anthropic-claude-fable-5-mythos-5-ga-2026)）と Mythos 5 の SWE-bench リードに対する正面回答となる。",
      "**3バリアントの使い分け**: **Sol** は最難関タスク（複雑なコーディング・セキュリティ研究）向けのフラッグシップ、**Terra** は大量業務向けの daily driver（カスタマーサポート・社内ツール・文書解析）、**Luna** は軽量タスク（要約・ドラフト・定型自動化）向け。料金は段階的に設定され、**Sol $5/$30、Terra $2.50/$15、Luna $1/$6 per 1M tokens**（入力/出力）。Luna は**フロンティアモデル最安級**で、GPT-5.4 mini（$0.40/$1.60）と通常モデルの中間を埋める。",
      "**TerminalBench 2.1 で SOTA 更新**: コーディングワークフロー指標 TerminalBench 2.1 で、**Sol Ultra（ultra thinking モード）が 91.91%** の record-high を記録、**Sol max が 88.76%** で続く。これは GPT-5.5（83.4%）、Anthropic **Claude Mythos 5（88.0%）と Fable 5（84.3%）を上回り**、コーディング領域でフロンティアの最上位に立った。Sol 系列は **GPT-5.6 Sol Ultra > Sol > Terra > Luna** の階層構造で公表されている（[OpenAI 公式](https://openai.com/index/previewing-gpt-5-6-sol/)）。",
      "**Ultra モードの仕組み**: 高得点の決定打となった **ultra thinking モード**は、**サブエージェントを動的に活用**して複雑な計画・反復・ツール協調を高速化する設計。Anthropic の Dynamic Workflows（[Opus 4.8](?a=anthropic-claude-opus-4-8-dynamic-workflows-2026)）や Sakana Fugu（[Fugu リリース](?a=sakana-ai-fugu-multi-agent-orchestration-2026)）と並ぶ「**マルチエージェント・オーケストレーション層**」が、フロンティアモデルの次の差別化軸として鮮明になりつつある。Sakana Fugu のような外付けオーケストレーションと違い、Sol はモデル内蔵で実現する点が特徴。",
      "**1.5M トークン・コンテキスト**: GPT-5.6 シリーズは **1.5M トークンのコンテキストウィンドウ**を備える見込み（GPT-5.5 の 1M、Codex の 400K を超える）、訓練データのカットオフは **2026年5月まで延長**。4月の「Where the Goblins Came From」事後分析で記録されたアラインメント失敗に対応する**再設計された報酬監査パイプライン**も搭載される。",
      "**配布制限と一般公開の見通し**: 限定プレビューが**約20組織のみ**となっているのは、米国政府との事前共有を経た展開のため。METR（Model Evaluation and Threat Research）による事前デプロイ評価レポートも併せて公表されている。一般公開は「**coming weeks**」、つまり7月中の GA が見込まれる。Polymarket 予測市場では「6月末リリース」の確率が 83% まで上昇していたが、最終的に限定プレビューに留まった。",
      "**競合構図の更新**: コーディング・エージェント領域での首位は **Sol Ultra（OpenAI）> Mythos 5（Anthropic 限定）> Sol（OpenAI）> Mythos 5（Anthropic 一般） / Fable 5** の順となり、OpenAI が3-4月の劣勢から完全に巻き返した形。Anthropic は次世代の Claude Mythos 6 / Fable 6 で対抗するか、SkillSpector（[SkillSpector 特集](?a=feature-nvidia-skillspector-agent-skill-security-2026)）や WIF（[WIF GA](?a=anthropic-workload-identity-federation-ga-service-accounts-2026)）のエンタープライズ機能で勝負を続けるかの戦略選択を迫られる。"
    ],
    "primarySources": [
      {
        "title": "Previewing GPT-5.6 Sol: a next-generation model",
        "site": "OpenAI",
        "url": "https://openai.com/index/previewing-gpt-5-6-sol/"
      },
      {
        "title": "OpenAI unveils GPT-5.6 Sol, Terra and Luna models — limited preview per US Gov",
        "site": "VentureBeat",
        "url": "https://venturebeat.com/technology/openai-unveils-gpt-5-6-sol-terra-and-luna-models-but-only-accessible-to-limited-preview-partners-for-now-per-us-gov"
      },
      {
        "title": "Summary of METR's predeployment evaluation of GPT-5.6 Sol",
        "site": "METR",
        "url": "https://metr.org/blog/2026-06-26-gpt-5-6-sol/"
      }
    ]
  },
  "john-jumper-google-deepmind-to-anthropic-nobel-2026": {
    "body": [
      "**John Jumper** が約9年勤めた **Google DeepMind** を離れ、**Anthropic** に移籍することが2026年6月26日に明らかになった。Jumper は **AlphaFold2** の主要開発者で、2024年に DeepMind CEO **Demis Hassabis** と共にノーベル化学賞を共同受賞した人物。1週間前の **Noam Shazeer の OpenAI 移籍**（[Shazeer 移籍](?a=noam-shazeer-google-to-openai-architecture-research-2026)）に続く Google AI トップ人材の**流出第2波**となる。",
      "**Jumper の功績**: AlphaFold2 は2020年にタンパク質構造予測のブレークスルーをもたらし、生命科学・創薬研究の地形を変えた。論文は被引用数で記録を打ち立て、CASP14 で他手法を圧倒する精度を示した。Jumper はこの研究の中核を担い、ノーベル賞の共同受賞者として Hassabis・David Baker と並んで名を刻んだ。Anthropic では Claude のサイエンス領域（[Claude for Legal](?a=anthropic-claude-for-legal-plugins-cocounsel-2026) と並ぶ専門分野展開）に関わるとみられるが、具体的な役職は未公表。",
      "**Google からの連続流出**: 6月18日に Transformer 共著者 Noam Shazeer が OpenAI へ、続けてノーベル化学賞共同受賞者の Jumper が Anthropic へという**8日間で2人のトップ研究者離脱**は、Google AI の組織モメンタムへの懸念を市場が再評価する材料となった。Alphabet 株は Shazeer 移籍時の **7% 下落**に続き、週後半に追加の下落を記録。Gemini 3.5 Pro GA 延期続報（[Gemini Pro 延期](?a=google-gemini-3-5-pro-ga-delay-deep-think-2026)）と相まって、Google AI への市場の信頼回復には時間が必要な状況。",
      "**Anthropic への意義**: Anthropic は5月28日に **Series H $65B / $965B 評価額**確定（[Anthropic 5月補遺](?a=anthropic-may-2026-series-h-milan-korea-arr-47b-2026)）、6月1日に**機密 S-1 提出**、6月9日に **Claude Fable 5 + Mythos 5 リリース**（[Fable 5 / Mythos 5](?a=anthropic-claude-fable-5-mythos-5-ga-2026)）と立て続けに大型ニュースを発信してきた。今回の Jumper 加入で、生命科学・タンパク質設計領域での Claude 専門化が進む可能性が高い。OpenAI が **GPT-Rosalind**（[GPT-Rosalind](?a=openai-gpt-rosalind-life-sciences-update-2026)）で生命科学領域に踏み込んでいる中、Anthropic も同領域で人材厚みを強化する形だ。",
      "**Google が直面する構造課題**: Google はもともと Transformer 論文を生んだ場所であり、AlphaFold で生命科学 AI の標準を作った組織でもある。それらの主要研究者が**わずか8日間で OpenAI と Anthropic の双方に流出**する事態は、Google が「研究の発祥地」から「研究の供給源」へと立場を変化させつつあることを示唆する。報酬・組織自由度・モデル投入スピードのどの要素が決定打になったかは公式には語られていないが、Demis Hassabis 体制下の DeepMind 統合後の文化的調整が試される局面となった。"
    ],
    "primarySources": [
      {
        "title": "Alphabet shares plunge as Nobel winner exits Google for Anthropic",
        "site": "Crypto Briefing",
        "url": "https://cryptobriefing.com/alphabet-shares-tumble-ai-leader-departs/"
      },
      {
        "title": "Google Loses Two Top AI Researchers To OpenAI & Anthropic",
        "site": "Search Engine Journal",
        "url": "https://www.searchenginejournal.com/google-loses-two-top-ai-researchers-to-openai-anthropic/580201/"
      }
    ]
  },
  "openai-broadcom-jalapeno-llm-inference-chip-2026": {
    "body": [
      "OpenAI と **Broadcom** が2026年6月25日、LLM 最適化推論アクセラレータ **「Jalapeño」**を共同発表した。**OpenAI が設計**したカスタムアクセラレータを Broadcom が**シリコン実装**する分業体制で、**2026年末**に初期コンピュート基盤として配備予定。OpenAI の **NVIDIA 依存度低減**戦略の中核となるプロジェクトで、Microsoft Azure・Anthropic-AWS・SpaceX-xAI Colossus に対する独自インフラ路線の最初の具体物となる。",
      "**OpenAI 設計 + Broadcom 製造の分業**: Jalapeño は **OpenAI が AI ワークロード固有のメモリ階層・アテンション処理・KV キャッシュ最適化を設計**し、Broadcom が **TSMC 等のファウンドリ向けに実装**する形。Broadcom は Google TPU（v2 以降）の半導体共同設計でも実績があり、AI 推論アクセラレータの製造パートナーとして地位を確立している。OpenAI にとっては「Apple Silicon × Apple」と類似の垂直統合モデルで、推論コストと性能を自社最適化できる利点が大きい。",
      "**フロンティアモデル各社の自社チップ路線が出揃う**: Jalapeño の発表で、フロンティア AI ラボの自社チップ戦略が以下の構図に整理された。**OpenAI**: Jalapeño（Broadcom 製造）、**Anthropic**: AWS Trainium 共同開発（Amazon $25B 追加投資）（[Amazon-Anthropic $25B](?a=amazon-anthropic-25b-trainium-infrastructure-2026)）、**Google**: TPU v7、**Microsoft**: MAIA + Cobalt、**xAI/Cursor**: Colossus（NVIDIA GPU 220,000 基）。NVIDIA の H100/Vera Rubin 依存からの脱却と、各社が「**モデル設計とハードウェア設計の同時最適化**」を目指す方向性が鮮明になった。",
      "**コスト圧力への対応**: OpenAI が機密 S-1 を提出（[OpenAI S-1 提出](?a=openai-confidential-s1-ipo-filing-852b-valuation-2026)）し2026年9月上場を目指す中、**推論コストの可視化と低減**は上場後の収益性に直結する課題。NVIDIA H100 経由の推論は ChatGPT・API ともに高コスト構造の主因で、自社設計チップへの段階的移行は四半期業績の重要な変数になる。GPT-5.6 Luna が $1/$6 という「フロンティアモデル最安」価格を実現できた背景にも、Jalapeño を含む推論最適化の蓄積がある可能性が高い。",
      "**展開スケジュール**: 2026年末の初期配備は OpenAI 内部の ChatGPT/API 推論ワークロード向けで、外部顧客への提供は計画されていない。Microsoft Azure（OpenAI の主要クラウドパートナー）との連携形態は今後の発表待ち。Stargate プロジェクト（SoftBank との合弁、最大 $500B 投資）の物理インフラ層にも Jalapeño が組み込まれる可能性がある。",
      "**競合への影響**: NVIDIA の AI 推論 GPU 市場における圧倒的シェアに対する主要対抗軸が固まり、AMD MI400 系列、Cerebras WSE-3、Groq LPU と並ぶ「**ポスト NVIDIA 推論アクセラレータ**」のオプションが拡大する。エンタープライズ顧客は今後、モデルベンダー選択時に「**どの推論シリコン上で動くか**」を考慮する必要が出てくる。SpaceX-Cursor 買収（[Cursor 買収](?a=spacex-cursor-60b-acquisition-anysphere-2026)）で示された「**モデル選択 = インフラ選択**」時代を、推論層でも追認する形だ。"
    ],
    "primarySources": [
      {
        "title": "OpenAI announces Jalapeño compute platform with Broadcom",
        "site": "OpenAI",
        "url": "https://openai.com/news/"
      },
      {
        "title": "OpenAI Release Notes - June 2026",
        "site": "Releasebot",
        "url": "https://releasebot.io/updates/openai"
      }
    ]
  },
  "anthropic-accuses-alibaba-claude-distillation-fraud-2026": {
    "body": [
      "Anthropic が2026年6月24日、**Alibaba 関係オペレーター**が Claude を大規模に不正利用し、ソフトウェアエンジニアリングとエージェント推論能力を**蒸留（distillation）**しようとした疑いを公表した。Tom's Hardware・Bloomberg・CNBC が報じた内容によれば、Alibaba 関係者は **約25,000の偽アカウント**を使い、2026年**4月22日〜6月5日**の間に **2,880万件**のリクエストを Claude に対して実行。地理的アクセス制限（中国エンティティへの Claude 提供禁止）を回避するため、**プロキシネットワークと難読化技術**が使われていた。",
      "**蒸留とは**: より強力なモデル（教師モデル、ここでは Claude Fable 5 / Mythos 5 / Opus 4.8 系）に大量のプロンプトを投げ、その回答をデータセットとして収集し、より弱いモデル（生徒モデル）を訓練することで教師の能力を移植する手法。教師モデル構築に必要な計算コストや専門知識をスキップでき、フロンティアモデルの「ピギーバック」攻撃として近年問題視されてきた。Anthropic が「中国企業による米国 AI ラボへのピギーバック攻撃として過去最大規模」と公表した点が、本件の重要性を示す。",
      "**ターゲットになった能力**: キャンペーンは Claude の最も価値の高い能力に集中した。具体的には**ソフトウェアエンジニアリング**（[Claude Code レビュー](?a=claude-code)）と**エージェント推論**（マルチステップタスクのプランニング・実行・自己修正）。両分野は Anthropic が研究開発に多額を投じてきた領域で、Alibaba がここを狙ったのは Qwen 系列（[中国モデル特集](?a=feature-china-ai-models-may-2026-qwen-kimi-ernie)）の次世代強化を視野に入れたものとみられる。",
      "**米国上院への通報**: Anthropic は **2026年6月10日**、本件の調査結果を **米国上院銀行委員会** に書簡として提出した。Anthropic vs 国防総省訴訟（[Pentagon 訴訟](?a=anthropic-pentagon-blacklist-appeals-court-2026)）や Project Glasswing 拡大（[Glasswing](?a=anthropic-glasswing-expansion-partner-network-services-track-2026)）と並ぶ「Anthropic の対政府関係強化」の流れに沿った動き。今後の AI 輸出管理規制議論で、本件は具体的な侵害事例として参照される可能性が高い。",
      "**業界への影響**: フロンティア AI ラボ各社（OpenAI / Anthropic / Google）が中国エンティティへのアクセス制限を強化してきたが、プロキシ経由の回避が大規模に行われていたことが裏付けられた。今後は**行動的フィンガープリンティング**（API 利用パターンから蒸留試行を検知）、**レート制限の階層化**、**地理 IP ブロック以外の認証層**などの対策が加速する見込み。エンタープライズ顧客の責任ある AI 利用ガイドラインには「蒸留禁止条項」が標準化される可能性がある。",
      "**米中 AI 摩擦の文脈**: 本件は **DeepSeek V4** リリース、**Z.ai GLM-5.2 公開**（[GLM-5.2](?a=zhipu-zai-glm-5-2-open-source-coding-1m-context-2026)）、**Kimi K2.6 の OSS フラッグシップ化**と並ぶ「中国陣営の OSS 急成長」の裏で、米国フロンティアモデルへの依存・蒸留も並行していたことを示す。OSS で公開済モデルの蒸留と、API 経由の不正蒸留は法的・倫理的に異なる扱いになる点が、今後の規制議論の焦点となる。"
    ],
    "primarySources": [
      {
        "title": "Anthropic Accuses Alibaba of 'Illicitly' Accessing AI Models",
        "site": "Bloomberg",
        "url": "https://www.bloomberg.com/news/articles/2026-06-24/anthropic-accuses-alibaba-of-illicitly-accessing-its-ai-models"
      },
      {
        "title": "Anthropic accuses Alibaba of campaign to 'brazenly' and 'illicitly' extract AI capabilities",
        "site": "CNBC",
        "url": "https://www.cnbc.com/2026/06/24/anthropic-alibaba-distillation-campaign.html"
      },
      {
        "title": "Anthropic claims that China's Alibaba used 25,000 fake accounts and 28.8 million exchanges to illicitly 'distill' its Claude model",
        "site": "Tom's Hardware",
        "url": "https://www.tomshardware.com/tech-industry/artificial-intelligence/anthropic-claims-that-chinas-alibaba-illicitly-distilled-its-models-from-april-to-june-2026-says-effort-involved-25-000-fake-accounts-and-28-8-million-exchanges-on-claude"
      }
    ]
  },
  "feature-tokenmaxxing-to-efficiency-market-shift-2026": {
    "body": [
      "2026年6月、AI モデル利用のパターンが**「tokenmaxxing」（とにかく強力なモデルを大量に使う）から「効率性最優先」**へ転換している。CNBC・TechCrunch が6月26日に相次いで報じた業界トレンド分析が、この転換を象徴的に伝えた。Anthropic Claude Fable 5（[Fable 5](?a=anthropic-claude-fable-5-mythos-5-ga-2026)）の **$10/$50 per 1M tokens** という攻めた価格、OpenAI GPT-5.6 Luna（[GPT-5.6 プレビュー](?a=openai-gpt-5-6-sol-terra-luna-preview-2026)）の **$1/$6** という最安級、そして Lindy・DeepSeek 等の動向が、この転換を裏付ける。",
      "**Lindy の100%移行ケース**: AI スタートアップ **Lindy** の CEO は2026年6月、同社の AI トラフィックを **100% Claude → DeepSeek へ切替**えたと公表した。DeepSeek は中国 DeepSeek 社のオープンウェイトモデル（DeepSeek V4・R1）で、自社ホスティング可能・コスト劇的削減が決定打となった。Lindy は Anthropic の顧客リストでも上位だったとみられ、エンタープライズ大口顧客でも DeepSeek 採用の流れが出てきていることを示す重要な事例。",
      "**価格上昇 vs 価格破壊の二極化**: Anthropic は **Claude Fable 5** を **$10/$50**（Opus 4.8 の $5/$25 の **2倍**）でローンチ、エンタープライズへの値上げを実施した。一方 **OpenAI GPT-5.6 Luna** は **$1/$6** で「フロンティアモデル最安級」を打ち出し、**Google Gemini 3.5 Flash** も **$0.075/$0.30** という極めて低価格を維持。Mistral・DeepSeek・Z.ai GLM-5.2（[GLM-5.2](?a=zhipu-zai-glm-5-2-open-source-coding-1m-context-2026)）などオープンウェイト陣営は更に安く、価格帯が「**プレミアム vs 効率**」の2極に明確に分裂し始めた。",
      "**Sakana Fugu の「実コスト 4-6 倍」問題**: マルチエージェント・オーケストレーションを謳う [Sakana Fugu](?a=sakana-ai-fugu-multi-agent-orchestration-2026) も、表示単価は $5/$30 と一見安いが、内部で複数モデルを呼び出すため**実トークン消費が単一モデルの 4-6 倍**になる構造で、「真のコスト効率」が議論されている。「ベンチマーク優位」と「実運用コスト効率」が異なる指標であることが、エンタープライズ採用判断で重視されるようになった。",
      "**SpaceX-Cursor 買収との接続**: 6/16 の SpaceX による Cursor $60B 買収（[SpaceX-Cursor](?a=spacex-cursor-60b-acquisition-anysphere-2026)）も、「**モデル選択 = インフラ選択**」時代を示すマイルストーン（[AI コーディング市場再編](?a=feature-ai-coding-market-realignment-spacex-cursor-2026)）。コスト・性能・データガバナンス・地政学を総合した複合判断がエンタープライズの基本になり、「とにかくフロンティア」一辺倒の時代は終わりつつある。",
      "**3軸の使い分けが新標準に**: 今後のエンタープライズ AI 採用は「**フロンティア（複雑タスク）× ミドル（日常タスク）× オープンウェイト（大量バッチ・コスト最適化）**」の3層構成が標準化する見込み。GPT-5.6 が Sol/Terra/Luna の3層を一社で提供したことは、この潮流を OpenAI 自身が認めた象徴的な動きと言える。Anthropic が Fable 5・Sonnet 4.6・Haiku 4.5、Google が Gemini 3.5 Pro/Flash/Flash-Lite、xAI が Grok V9-Medium/Mini と、各社が階層を整備する流れ。",
      "**開発者・スタートアップへの示唆**: AI コストはアプリケーションの粗利率に直結する変数となった。スタートアップは「**プロトタイプは Fable 5・本番は DeepSeek V4 + 自社サーバー**」のような切替パターンを採用するケースが増えており、SkillSpector（[SkillSpector 特集](?a=feature-nvidia-skillspector-agent-skill-security-2026)）のようなセキュリティ層と並ぶ「**コスト管理層**」の重要性が高まっている。WIF（[Anthropic WIF GA](?a=anthropic-workload-identity-federation-ga-service-accounts-2026)）も含めた運用基盤の選択が、競争力に直結する局面に入った。"
    ],
    "primarySources": [
      {
        "title": "OpenAI and Anthropic face new AI reality as users shift from 'tokenmaxxing' to efficiency",
        "site": "CNBC",
        "url": "https://www.cnbc.com/2026/06/26/openai-anthropic-new-ai-spending-reality-as-users-shift-to-efficiency.html"
      },
      {
        "title": "It's not about Anthropic vs. OpenAI anymore",
        "site": "TechCrunch",
        "url": "https://techcrunch.com/2026/06/26/its-not-about-anthropic-vs-openai-anymore/"
      }
    ]
  },
  "zhipu-zai-glm-5-2-open-source-coding-1m-context-2026": {
    "body": [
      "中国の **Z.ai**（清華大学発スタートアップ **Zhipu AI** の国際ブランド）が2026年6月13日、新しいコーディング特化フラッグシップ **GLM-5.2** を発表した。**Mixture of Experts** アーキテクチャを採用し、**総パラメータ 753B / アクティブ 40B per token** という大規模設計。**MIT ライセンス**で公開され、商用利用・改変・再配布が自由。中国系オープンウェイト陣営の競争力を一段引き上げる存在となる。",
      "**主要仕様**: コンテキストウィンドウは **1Mトークン**（応答出力は最大 ~128K-131K トークン）。新導入の **High / Max デュアル思考エフォートシステム** で、タスク難易度に応じて推論深さを切替可能。長文脈処理を効率化する **IndexShare アーキテクチャ**を備え、極端な長コンテキスト時のトークン当たり計算コストを抑える設計になっている。",
      "**ベンチマーク**: Z.ai の公表値では **SWE-bench Pro で 62.1**（GPT-5.5 の 58.6 を上回り、Claude Opus 4.8 の 69.2 に肉薄）、**FrontierSWE で 74.4**（GPT-5.5 の 72.6 を抜き、Opus 4.8 の 75.1 とほぼ並ぶ）。OSS モデルでフロンティア商用モデルと互角のスコアは画期的で、Kimi K2.6（[中国モデル特集](?a=feature-china-ai-models-may-2026-qwen-kimi-ernie)）と並ぶ「中国 OSS フラッグシップ」の地位を確立した。",
      "**配布スケジュール**: 2026年6月13日に発表、初期は **Z.ai の GLM Coding Plan 全ティア**で利用可能となった。**API・Z.ai チャットボット**は6/20週から、**Hugging Face 上の MIT 重み**も同週に公開された。ダウンロード後はファインチューニング・自社ホスティング・商用利用が制約なしで可能。",
      "**Anthropic-Alibaba 蒸留問題との接続**: 直前6月24日に Anthropic が公表した **Alibaba による Claude 不正蒸留疑惑**（[Anthropic vs Alibaba](?a=anthropic-accuses-alibaba-claude-distillation-fraud-2026)）と本件は無関係だが、「**中国の OSS フラッグシップ躍進と、米国フロンティアからの蒸留疑惑が並行している**」構図そのものは、米中 AI 摩擦の現在地を示している。Z.ai の GLM 系列は元々 ChatGLM プロジェクト（OSS、清華大学発）の延長で、Anthropic 蒸留疑惑とは独立した開発系統。",
      "**「tokenmaxxing から効率性へ」**（[効率性転換 分析](?a=feature-tokenmaxxing-to-efficiency-market-shift-2026)）の文脈では、GLM-5.2 は「フロンティア商用モデルに近い性能を MIT ライセンスで自社ホスティング」できる選択肢として、エンタープライズの**コスト最適化ツールチェーン**に組み込まれる可能性が高い。DeepSeek V4・Kimi K2.6 と並ぶ「中国 OSS 3強」が、米国フロンティアとの実用上のギャップを縮め続けている。"
    ],
    "primarySources": [
      {
        "title": "GLM-5.2: Zhipu AI's 1M-Token Open-Weight Coding Model",
        "site": "Eigent AI",
        "url": "https://www.eigent.ai/blog/glm-5-2"
      },
      {
        "title": "GLM 5.2 Just Launched: 1M Context, Coding-First, Open Weights Next Week",
        "site": "Codersera",
        "url": "https://codersera.com/blog/glm-5-2-release-1m-context-coding-2026/"
      },
      {
        "title": "GLM 5.2: The Open-Source Model Taking On GPT-5.5",
        "site": "AIToolsReview",
        "url": "https://aitoolsreview.co.uk/insights/glm-5-2"
      }
    ]
  },
  "nvidia-nemotron-3-5-asr-open-multilingual-stt-2026": {
    "body": [
      "NVIDIA が2026年6月、オープンソースの音声認識モデル **Nemotron 3.5 ASR** を公開した。**600M パラメータ**の比較的軽量なストリーミング型 STT（Speech-to-Text）で、**40言語**に対応、既存ベースライン比 **17倍のスループット**を達成。Voice エージェント・リアルタイム会議文字起こし・コールセンター自動化など、低レイテンシが必要な用途に向けて設計されている。",
      "**アーキテクチャと性能**: 600M という規模は、Whisper Large v3（1.55B）や Canary 1B-Flash と比べて小さいが、ストリーミング処理に最適化されており、リアルタイム応答性で優位に立つ。NVIDIA は H100/L40S/RTX A6000 等の自社 GPU 上で **17倍のスループット**を実証、KV キャッシュとアテンション最適化を活用した実装になっている。リアルタイム会話 AI の応答遅延を実用域に下げる中核技術として位置付けられる。",
      "**多言語対応**: **40言語**のカバー範囲は、Voice エージェント市場でのグローバル展開を強く意識した設計。日本語・英語・中国語・スペイン語・フランス語・ドイツ語などの主要言語に加え、東南アジア言語・アラビア語・ヒンディー語などのカバレッジが厚い。Otter.ai・Fireflies などの議事録ボット型に対するインフラ層として、また OpenAI GPT-Realtime-Whisper（[OpenAI 5/7 三発表](?a=openai-cyber-trusted-contact-voice-may7-2026)）への代替選択肢として競合する。",
      "**音声 AI 競合構図**: 音声認識・合成領域は **AssemblyAI**、**Deepgram**、**ElevenLabs**、**OpenAI Whisper / Realtime-Whisper**、**Google STT**、**Microsoft Azure Speech** などが競合。NVIDIA Nemotron 3.5 ASR は **OSS でハードウェアと一体最適化**された選択肢として、特に「自社サーバー上で動かしたい」「データを外部に出したくない」エンタープライズ要件にフィットする。プライバシー規制が厳しい医療・金融・法務領域での採用が期待される。",
      "**ボイスエージェント時代の基盤層**: 2026年は AI アバター会議参加（[アバター会議特集](?a=feature-ai-avatar-agents-join-meetings-2026)）やリアルタイム翻訳（[翻訳特集](?a=feature-realtime-translation-teams-zoom-meet-openai-2026)）など、音声 AI の社会実装が一気に進んだ年。Nemotron 3.5 ASR のような OSS の基盤層が充実することで、ボイスエージェントの構築コストが下がり、より多くのスタートアップが参入できるようになる。Apple Siri AI（[WWDC 2026](?a=apple-wwdc-2026-siri-ai-keynote-2026)）など消費者向けプラットフォームが音声 UX を再定義する中で、開発者層の OSS 選択肢が広がる意義は大きい。"
    ],
    "primarySources": [
      {
        "title": "June 2026 AI Releases: NVIDIA, Microsoft, xAI, Anthropic",
        "site": "ThursdAI",
        "url": "https://thursdai.news/releases/2026-06"
      },
      {
        "title": "NVIDIA Nemotron Open Models",
        "site": "NVIDIA",
        "url": "https://www.nvidia.com/en-us/ai-data-science/foundation-models/"
      }
    ]
  },
  "anthropic-claude-sonnet-5-agentic-cheap-2026": {
    "body": [
      "Anthropic が2026年6月30日、新しいミッドレンジ・フラッグシップ **Claude Sonnet 5** を公開した。「これまでで最もエージェント的な Sonnet」と位置付けられ、「数ヶ月前までなら大型で高価なモデルが必要だった水準の**自律的なプランニング・ブラウザ/ターミナル操作・ツール使用**を、Sonnet サイズで実現する」と Anthropic は説明する。あわせて研究者向けの **Claude Science** も同時公開されている。",
      "**性能ベンチマーク**: 公表値では **SWE-bench Pro で 63.2%**（Sonnet 4.6: 58.1% → +5.1pt、Opus 4.8: 69.2%）。Opus 4.8 との差は約 6pt に縮まり、価格差3倍・4倍を考慮すれば実質的な優位に。**GDPval-AA v2（知識労働）では 1618 で Opus 4.8（1615）を上回り**、**Humanity's Last Exam（ツール利用）は 57.4%**（Opus 4.8: 57.9%）でほぼ互角、**プロンプトインジェクション安全性でも同水準**を達成。「Sonnet で Opus 級」がほぼ現実になった。",
      "**料金体系**: **8月31日までの導入価格が $2/$10 per 1M tokens**（入力/出力）、**9月1日以降は $3/$15**（Sonnet 4.6 と同じ）。ただし新トークナイザは同じテキストで **1.0〜1.35倍**多くトークンを数える傾向があり、レート表通りの単純換算では実コストの読みを誤る可能性がある。それでも実運用では Opus 4.8（$5/$25）や Claude Fable 5（$10/$50）に対して大幅な優位。",
      "**Adaptive Thinking と 1M コンテキスト**: **1M トークン**のコンテキストは Sonnet 4.6・Opus 系と同水準を維持。**Adaptive Thinking が常時オン**で、Claude Code や API では**エフォートのデフォルトが high**に設定されている。最大出力は 128K、batch-API のベータヘッダ `output-300k-2026-03-24` を指定すれば **最大 300K トークン出力**まで拡張可能。訓練データのカットオフは **2026年1月**まで延長。",
      "**利用可能プラットフォーム**: **claude.ai の Free と Pro のデフォルト**モデルとして即日切替。Max・Team・Enterprise でも利用可能。API に加え、**Claude Code**（[Claude Code レビュー](?a=claude-code)）、**Cursor**（[Cursor レビュー](?a=cursor-editor)）、**VS Code**、**GitHub Copilot**（[Copilot CLI レビュー](?a=github-copilot-cli)）でも即日採用。マルチプラットフォーム展開の速度が特筆される。",
      "**「tokenmaxxing → 効率性」の答え**: 直前に公開された分析記事（[効率性転換分析](?a=feature-tokenmaxxing-to-efficiency-market-shift-2026)）で整理した「価格2極化と効率性優先」の潮流に対する Anthropic の明確な回答。Fable 5（$10/$50）は限定的な最上位ニーズ向けに残しつつ、**日常のエージェント運用は Sonnet 5** で受ける戦略。OpenAI が GPT-5.6 Sol/Terra/Luna（[GPT-5.6 プレビュー](?a=openai-gpt-5-6-sol-terra-luna-preview-2026)）で階層を投入した動きへの直接的な対抗でもある。",
      "**Alibaba 蒸留告発との並行**: 6/24 の [Anthropic vs Alibaba 蒸留告発](?a=anthropic-accuses-alibaba-claude-distillation-fraud-2026) に続くタイミングで、「**フロンティア性能を安価に提供することで、蒸留する経済的インセンティブそのものを減らす**」戦略的な意味合いもある。エンタープライズ・スタートアップに正規ルートでの利用を促進し、Anthropic の収益基盤を厚くする狙い。**Claude Science** の同時投入で、生命科学領域（John Jumper 加入と接続 [Jumper 移籍](?a=john-jumper-google-deepmind-to-anthropic-nobel-2026)）でも競争力を強化した。"
    ],
    "primarySources": [
      {
        "title": "Introducing Claude Sonnet 5",
        "site": "Anthropic",
        "url": "https://www.anthropic.com/news/claude-sonnet-5"
      },
      {
        "title": "System Card: Claude Sonnet 5",
        "site": "Anthropic",
        "url": "https://www.anthropic.com/claude-sonnet-5-system-card"
      },
      {
        "title": "Anthropic launches Claude Sonnet 5 as a cheaper way to run agents",
        "site": "TechCrunch",
        "url": "https://techcrunch.com/2026/06/30/anthropic-launches-claude-sonnet-5-as-a-cheaper-way-to-run-agents/"
      },
      {
        "title": "Anthropic Claude Sonnet 5 vs Sonnet 4.6 vs Opus 4.8: Agentic Coding Benchmarks",
        "site": "MarkTechPost",
        "url": "https://www.marktechpost.com/2026/06/30/anthropic-claude-sonnet-5-vs-sonnet-4-6-vs-opus-4-8-agentic-coding-benchmarks-api-pricing-and-cost-performance-tradeoffs-compared/"
      }
    ]
  },
  "cursor-ios-app-launch-cloud-agents-remote-2026": {
    "body": [
      "Anysphere が2026年6月29日、待望の **Cursor 公式 iOS アプリ**を App Store で公開した。SpaceX による Anysphere $60B 買収（[SpaceX-Cursor 買収](?a=spacex-cursor-60b-acquisition-anysphere-2026)）の発表からわずか13日後の投入で、モバイル展開のスピードは買収後のガバナンスに影響がないことを示す形となった。有料プラン向けの Public Beta として提供される。",
      "**2 軸の機能構成**: アプリは2つの主要モードで設計されている。**(1) Always-on クラウドエージェント**: バックグラウンドで動作するエージェントを起動し、iPhone から進捗を監視できる。移動中や打ち合わせ中も指示だけ出して結果を後で確認するワークフロー。**(2) リモートコントロール**: PC 上で稼働中のエージェントを iPhone から操作する。デスク周りを離れても長時間タスクを制御できる。",
      "**音声入力とレビュー機能**: **音声ディクテーション**を搭載し、話しかけるだけでバックグラウンドのコード作業をトリガー可能。エージェントが走り続けている間に、iPhone 上で **diff レビュー**、**PR マージ**、**スクリーンショット注釈**まで完結できる設計。「モバイル1台で開発者ワークフローを完結」というビジョンが具体化した。",
      "**料金体系**: iOS アプリ自体は有料 Cursor プランに含まれるが、**クラウドエージェント実行には有料プランが必須**で、エージェント実行は選択したモデルの API 料金で従量課金される。導入プロモーションとして、Cursor 独自モデル **Composer 2.5 が7月5日まで -75%** で提供される。SpaceX-Cursor 統合下で Composer 系の Grok V9 系（[Grok V9-Medium](?a=xai-grok-v9-medium-consumer-release-cursor-data-2026)）への段階移行も予想される中、Composer 2.5 の販促は既存モデルの利用者拡大を狙ったもの。",
      "**Cursor のスケール**: 買収時点の数字として、Cursor は **100万人超の有料ユーザー**、**Fortune 1,000 の 70%** をクライアントに持つ。今回の iOS アプリ投入は、この巨大な既存顧客ベースに対する新しい接点の追加で、モバイルからの利用が加われば MAU の伸びが一段加速する可能性が高い。",
      "**モバイル・エージェントの新時代**: 同日6月29日には **OpenClaw の iOS/Android ネイティブアプリ**も公開されており（[OpenClaw モバイル](?a=openclaw-ios-android-native-app-2026)）、「エージェント AI をモバイルで走らせる」時代が偶然にも同時にスタートした。両者の違いは、Cursor はクラウドエージェントの制御端末としてのモバイル、OpenClaw はモバイルデバイス自体をエージェントの実行環境（ローカルデータへのアクセス点）とする設計の違い。開発者向けとパーソナル AI 向けで、モバイル AI の2つの方向性が明確になった。"
    ],
    "primarySources": [
      {
        "title": "Cursor - App Store",
        "site": "Apple",
        "url": "https://apps.apple.com/us/app/cursor/id6767085653"
      },
      {
        "title": "Cursor launches iOS app so developers can spin up coding agents from their phone",
        "site": "The Next Web",
        "url": "https://thenextweb.com/news/cursor-mobile-app-coding-agents-phone"
      },
      {
        "title": "Cursor releases its iOS app for vibe coding on the go",
        "site": "TestingCatalog",
        "url": "https://www.testingcatalog.com/cursor-releases-its-ios-app-for-vibe-coding-on-the-go/"
      }
    ]
  },
  "openclaw-ios-android-native-app-2026": {
    "body": [
      "**OpenClaw Foundation** が2026年6月29日、パーソナル AI アシスタント **OpenClaw** の **iOS と Android 向けネイティブアプリ**を公開した。**iOS 18 以降**が要件で、無料アプリ。OpenClaw は元々自分の PC 上で動くパーソナル AI アシスタントとして知られ、WhatsApp・Telegram・Discord・Slack・iMessage など15以上のメッセージアプリを統合するゲートウェイ機能で知られてきた（[GitReverse 記事内で言及](?a=gitreverse-repo-to-prompt-openclaw-2026)）。今回のモバイル展開で、スマートフォン単体でも同エコシステムが動く。",
      "**モバイル特有のデータ接続**: ユーザーはアプリ内でエージェントに対し、**カメラ・画面・位置・写真・連絡先・カレンダー・リマインダー**などのアクセス権を細かく付与できる。iOS の権限モデル（`NSCameraUsageDescription` 等）に完全準拠する設計で、たとえば「先週撮った写真を整理して、家族用アルバムを作って」「今日のカレンダーから移動時間の余裕を判定して、次のミーティングをずらすか判断して」といった、モバイルコンテキストならではのタスクを実行できる。",
      "**Apple のエージェント AI ガードを OSS で突破**: **Apple は長らくエージェント型 AI アプリを App Store 上で拒否**してきた。ユーザーのデータへ広範囲にアクセスするアプリのセキュリティ懸念と、企業サーバー経由で個人情報が処理されるプライバシー懸念が主因とされる。OpenClaw の**自己ホスト設計**（データが企業サーバーを経由せず、ユーザー自身のゲートウェイ内に留まる）が審査通過の決め手となった。App Store 上での「エージェント AI」の先例を作った点で歴史的な意義がある。",
      "**Peter Steinberger と OpenAI の関係**: OpenClaw は **Peter Steinberger**（PSPDFKit を €1億超で売却した実績のあるドイツ人開発者）の個人プロジェクトとして始まった。Steinberger は今年 **OpenAI に参加**、コード自体は **OpenClaw Foundation** に移管され、独立性と OSS 性が確保された。**OpenAI は資金提供のみで、所有権は持たない**という取り決め。Anthropic vs Alibaba 蒸留告発（[Anthropic vs Alibaba](?a=anthropic-accuses-alibaba-claude-distillation-fraud-2026)）と対照的な、「OpenAI 起点だが OSS」の運営モデルが確立された。",
      "**モデル・アグノスティック設計**: OpenClaw は当初から Claude・GPT・Gemini・ローカル LLM のいずれとも接続可能な設計で、モバイルアプリでもこの原則が維持される。SkillSpector（[SkillSpector 特集](?a=feature-nvidia-skillspector-agent-skill-security-2026)）と親和性が高いオープン・エコシステムの一部として位置付けられる。「モバイル OSS 」層と「セキュリティ層」を組み合わせた、真の分散型パーソナル AI アシスタント基盤が形になってきた。",
      "**初期レビューの温度感**: TechRadar によれば初期ユーザーレビューは厳しい面もあり、ローカル動作の設定の複雑さ、モバイルデバイス上のリソース制約による応答遅延、ゲートウェイ接続の初期設定ステップの多さなどが指摘されている。**OSS 性と自己ホストの利点**を活かすには、初回セットアップの時間投資が必要というトレードオフが浮き彫りになっている。同日リリースの **Cursor iOS アプリ**（[Cursor iOS](?a=cursor-ios-app-launch-cloud-agents-remote-2026)）とは対照的に、「開発者向け（Cursor）」と「パワーユーザー向け OSS（OpenClaw）」の住み分けが明確になった。"
    ],
    "primarySources": [
      {
        "title": "OpenClaw is finally available on Android and iOS",
        "site": "TechCrunch",
        "url": "https://techcrunch.com/2026/06/30/openclaw-is-finally-available-on-android-and-ios/"
      },
      {
        "title": "Open Source AI Agent OpenClaw Gets Native iOS App",
        "site": "MacRumors",
        "url": "https://www.macrumors.com/2026/06/29/openclaw-ios-app/"
      },
      {
        "title": "OpenClaw reveals iOS and Android mobile apps at last — but initial reviews make for tough reading",
        "site": "TechRadar",
        "url": "https://www.techradar.com/pro/openclaw-reveals-ios-and-android-mobile-apps-at-last-but-initial-reviews-make-for-tough-reading"
      }
    ]
  },
  "anthropic-claude-science-workbench-research-2026": {
    "body": [
      "Anthropic が2026年6月30日、Claude Sonnet 5（[Sonnet 5 リリース](?a=anthropic-claude-sonnet-5-agentic-cheap-2026)）と同時に **Claude Science** をベータ公開した。「Claude Code がソフトウェアエンジニアリングを支援するのと同じように、科学研究を支援する」と Anthropic は説明する。**MIT Technology Review** は「Anthropic の新しいフラッグシップ製品」と位置付けており、Claude Fable 5・Opus 4.8 に続く**製品層の主力**として長期投資される見込み。",
      "**新モデルではなくワークフロー製品**: TechCrunch が強調するように、Claude Science の勝負どころは**「新モデルではなくワークフロー」**にある。既存の Claude モデル（Opus 4.8・Sonnet 5・Fable 5 等）をそのまま使い、**特別なアクセスやゲーティングはなし**。差別化は「ローカル/リモートの計算資源接続」「科学 DB 統合」「ラボ運用に合った UI」で行う。OpenAI の GPT-Rosalind（[GPT-Rosalind](?a=openai-gpt-rosalind-life-sciences-update-2026)）が**専用モデル**戦略なのに対し、Anthropic は**ワークフロー**戦略で対抗する形となる。",
      "**60+ 科学データベース統合**: プリコンフィグ済で **60以上の科学データベース**にアクセスできる。分野別ツールキット（ゲノミクス・プロテオミクス・構造生物学・単細胞・化学）が用意され、研究者は自然言語で「この遺伝子の相互作用ネットワークを取ってきて、既存論文と比較して」といった指示だけで、複数 DB を横断した情報統合を任せられる。公開情報から名前が確認できた主要 DB は下表のとおり（Anthropic 公式の完全な60+一覧は Getting Started チュートリアルで開示されている）。",
      "**さらに Tool Universe 拡張で 1,000+ 科学ツール**: Claude Science の 60+ DB とは別に、**Tool Universe コネクタ**（Harvard MIMS Lab の mims-harvard/ToolUniverse プロジェクト）を有効化すると、**機械学習モデル・データセット・API・科学パッケージを合わせて 1,000 以上**をエージェントが呼び出せるようになる。ドキュメントによれば **68 のプリビルトエージェントスキル**が創薬・精密腫瘍学・希少疾患診断の3領域をカバーする。文献検索は **PubMed・Semantic Scholar・ArXiv・BioRxiv・Europe PMC** を横断する。",
      "**SSH と SLURM への直結**: 特筆すべきは**ラボワークステーションや HPC ログインノードへの SSH 接続**、**SLURM クラスタへの sbatch 経由ジョブ投入**、**出力のセッションへの取り込み**、**大容量ファイルパスの記録**まで対応する点。**Slurm** は世界のスパコン・大学 HPC で標準的に使われるジョブスケジューラで、Claude Science が「ラボの実運用インフラに直接繋がる AI」を目指していることを示す。従来型の「チャットで論文検索」ではなく、**実験・シミュレーションの実行から結果解析まで**を一気通貫でカバーする野心的な設計。",
      "**Reviewer エージェントで監査性を確保**: 科学研究の再現性・監査性を担保するため、**Reviewer エージェント**が組み込まれている。実行されたコード・呼び出された DB・生成された仮説の履歴が追跡可能で、後から他の研究者が結果を検証できる。プレプリント段階から査読までのフローを想定した設計で、Anthropic vs Alibaba 蒸留告発（[蒸留告発](?a=anthropic-accuses-alibaba-claude-distillation-fraud-2026)）で問題になった「AI 出力の出所」の透明性にも通じる。",
      "**料金と提供形態**: **macOS と Linux のベータ**で、Windows は未対応。**Pro / Max / Team / Enterprise** プランで利用可能で、**API 別料金なし**（既存の Claude プラン枠から消費される。**5時間・週次の Claude Code/Cowork と共通の上限**）。**アカデミック機関・非営利研究組織の Team プラン割引席**があり、機関の PI（Principal Investigator）を通じて申請する形。**John Jumper 加入**（[Jumper 移籍](?a=john-jumper-google-deepmind-to-anthropic-nobel-2026)）と組み合わせれば、Anthropic が生命科学領域を戦略的に攻める布陣が完成する。",
      "**「AI for Science」助成プログラム**: 同時に **最大50プロジェクト・各最大 $30,000 の Claude クレジット・最大 $2,000 の Modal 計算クレジット**を提供する助成プログラムを開始。応募は **7月15日まで**、採択通知は **7月31日**、プロジェクト実施期間は **9月1日〜12月1日**。Anthropic 自身も **希少疾患・軽視された疾患**の創薬研究に Claude Science を活用すると発表した。CEO Dario Amodei が発信する「Machines of Loving Grace」（AI が人類の健康問題を解決する）ビジョンの、最初の具体的な実装フェーズとなる。",
      "**※ 掲載データベース一覧について**: 下表は Anthropic 公式発表・報道・GitHub 等の公開情報から名前が確認できたものを網羅した。Anthropic が「60+」と公表している完全なリストは、公式チュートリアル `claude.com/resources/tutorials/getting-started-with-claude-science` 内で開示されている（本稿執筆時点で当該ページは公開だが本稿の自動取得はエラー、直接アクセスで確認可能）。Tool Universe 経由でさらに 1,000+ の追加ツールへ拡張できる点も別に留意。"
    ],
    "tables": [
      {
        "afterParagraph": 2,
        "caption": "Claude Science プリコンフィグ済み 主要データベース（公開情報から名前が確認できたもの）",
        "headers": ["分野", "データベース", "概要"],
        "rows": [
          ["ゲノミクス", "GenBank", "NCBI が運営する核酸塩基配列の公的アーカイブ。ほぼ全ての公開遺伝子配列を格納"],
          ["ゲノミクス", "Ensembl", "EBI・Sanger が運営する脊椎動物中心のゲノム注釈データベース。遺伝子・転写産物・変異を統合"],
          ["ゲノミクス", "GEO（Gene Expression Omnibus）", "NCBI の遺伝子発現データリポジトリ。マイクロアレイ・RNA-seq を公開"],
          ["ゲノミクス", "BioMart", "Ensembl・EBI などの複数バイオ DB を横断クエリするデータマイニング基盤"],
          ["臨床・変異", "ClinVar", "NCBI のヒト変異と臨床的意義の解釈を集約したデータベース"],
          ["プロテオミクス", "UniProt", "EBI・SIB・PIR 共同のタンパク質配列・機能・アノテーション統合 DB"],
          ["構造生物学", "RCSB PDB（Protein Data Bank）", "実験決定されたタンパク質・核酸の3次元構造アーカイブ"],
          ["構造生物学", "AlphaFold DB", "DeepMind と EBI による AlphaFold2 予測タンパク質構造（2億超構造）"],
          ["経路・システム", "Reactome", "手作業でキュレートされたヒト生物学経路データベース"],
          ["単細胞", "Human Cell Atlas", "国際共同プロジェクトによるヒト全身の単細胞レファレンスアトラス"],
          ["単細胞", "CellGuide", "単細胞データの探索・視覚化ツール（コネクタ）"],
          ["単細胞・製品連携", "10x Genomics", "単細胞解析プラットフォームの公式コネクタ"],
          ["化学・創薬", "PubChem", "NCBI の化合物・実質・生物活性データベース。数億の化学構造を収載"],
          ["化学・創薬", "ChEMBL", "EBI が運営する薬理活性化合物のマニュアルキュレーション DB。創薬初期に必須"],
          ["ラボ運用", "Benchling", "ライフサイエンスの電子ラボノート・実験データ管理 SaaS（コネクタ）"],
          ["ラボ運用", "Synapse.org", "Sage Bionetworks が運営する共同研究データ共有プラットフォーム"],
          ["文献検索", "PubMed", "NCBI が運営する生物医学文献データベース。3,500万論文超"],
          ["文献検索", "Europe PMC", "EBI 主導の生物医学文献リポジトリ。全文検索対応"],
          ["文献検索", "Semantic Scholar", "AI2 の研究論文検索エンジン。引用ネットワーク解析"],
          ["文献検索", "ArXiv", "物理・数学・CS 等のプレプリントサーバー"],
          ["文献検索", "BioRxiv", "Cold Spring Harbor Lab の生物学プレプリントサーバー"],
          ["制作補助", "BioRender", "科学イラスト作成 SaaS（コネクタ）"],
          ["制作補助", "Wiley Scholar Gateway", "Wiley の学術文献ゲートウェイ（コネクタ）"]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Claude Science is Anthropic's newest flagship product",
        "site": "MIT Technology Review",
        "url": "https://www.technologyreview.com/2026/06/30/1139987/claude-science-is-anthropics-newest-flagship-product/"
      },
      {
        "title": "Anthropic's Claude Science bets on workflow, not a new model, to win over scientists",
        "site": "TechCrunch",
        "url": "https://techcrunch.com/2026/06/30/anthropics-claude-science-bets-on-workflow-not-a-new-model-to-win-over-scientists/"
      },
      {
        "title": "Anthropic Releases Claude Science for Automating Research",
        "site": "Bloomberg",
        "url": "https://www.bloomberg.com/news/articles/2026-06-30/anthropic-releases-claude-science-for-automating-research"
      },
      {
        "title": "Anthropic launches Claude Science, an AI workbench for the lab",
        "site": "The Next Web",
        "url": "https://thenextweb.com/news/anthropic-claude-science-ai-workbench-scientists"
      }
    ]
  },
  "anthropic-claude-fable-5-return-safeguards-limits-2026": {
    "body": [
      "Anthropic が2026年7月1日、**Claude Fable 5** のグローバルアクセスを復活させた。前日6月30日に **米 Commerce 省（Howard Lutnick 長官）が同モデルの輸出規制を解除**したことを受けての再展開で、Anthropic は新しい classifier（分類器）を含む「defense in depth」（多層防御）体制で提供を再開する。ただし利用条件・料金・地理的展開すべてに複数の制限が課される難しい復帰となった。",
      "**シャットダウンの経緯（6/9→6/12）**: Fable 5 は6月9日に一般公開（[Fable 5 / Mythos 5 リリース](?a=anthropic-claude-fable-5-mythos-5-ga-2026)）されたが、直後に **Amazon の研究者**が Fable 5 のセーフガードを回避する手法を発見。「モデルにソフトウェア脆弱性の指摘をさせ、うち1件では脆弱性の悪用コードを書かせる」ことに成功したと米政府に報告した。これを受け Commerce 省は **6月12日に輸出規制**を発動、Fable 5 と Mythos 5 のグローバル配布が事実上停止した。",
      "**「秘密のケーパビリティ制限」批判**: 停止直前の6月10日、Fortune が **「Anthropic が Fable 5 の能力を秘密裏に制限している」**と報じた（研究者・開発者からの告発を紹介）。「secret sabotage（隠れた妨害）」という強い表現で、性能ベンチマークで公表された Fable 5 の能力が実運用で発揮されないという苦情が広まっていた。この時点で Anthropic の透明性がすでに問題視されており、その数日後の輸出規制と重なる形で二重の逆風となった。",
      "**トランプ政権の解除決定（6/30）**: 6月30日、**Trump 政権 Commerce 省**が Fable 5 と Mythos 5 の輸出規制を解除。Lutnick 長官は Anthropic 宛の書簡で「Anthropic はもはや輸出ライセンスを必要としない」と通知した。ただし解除は無条件ではなく、Anthropic は以下3点を約束したと発表されている：",
      "**(a) セキュリティリスクの積極的な検知と対応**",
      "**(b) 将来のリリースにおけるプロトコルで政府と協力**",
      "**(c) 自社モデル間で悪意ある活動を発見した場合の報告**",
      "事実上の**継続的な政府監督体制**の下での復活となる。",
      "**新 classifier：99% ジェイルブレイクブロック**: Anthropic は今回、**新しい classifier をデプロイし、6月に問題になった特定のジェイルブレイク手法を99%の確率でブロックする**と発表。CAISI（Center for AI Standards and Innovation）の研究者は「新セーフガードは extraordinarily strong（極めて強力）」と評価している。分類器はサイバーセキュリティ関連タスクを検出する仕組みで、教師モデルへの訓練による拒絶、事後の誤用パターン分析、事前ブロックの3層で構成される。",
      "**過剰ブロック（over-blocking）の懸念**: 一方 Axios と Anthropic 自身は、新しい厳格なフィルタリングが **benign（善良）なコーディング要求やセキュリティ研究要求まで一部ブロックしてしまう可能性**があると認めている。ペンテスターや脆弱性研究者、CTF プレイヤー、セキュリティ教育者などの合法的なユースケースが影響を受ける可能性が高く、PCWorld の報道では**Claude 有料ユーザーがすでに新制限に激怒**していることも伝えられている。**「安全性 vs 実用性」のトレードオフ**が顕在化した形。",
      "**利用上限と時間制限**: Fable 5 の利用は以下の制限下で提供される。**Pro / Max / Team / 一部 Enterprise プランは週次使用枠の 50% まで**、**7月7日までの期間限定**（それ以降は**使用クレジット制**へ移行し、追加料金が発生する）。導入時（6/9〜6/22）の「Pro/Max/Team/Enterprise 無料」から一段厳しい条件となり、事実上「試用期間の再延長」ではなく「制限付き再開」の色彩が強い。無料 / Go プランは対象外の可能性が高い。",
      "**【追記 2026-07-08】期間延長発表**: 7月6日、Anthropic は当初7月7日で終了予定だったサブスク包括アクセスを **7月12日まで延長**（[延長・「一時的」宣言](?a=anthropic-claude-fable-5-billing-transition-extended-july-12-2026)）。あわせて **「使用クレジット制への移行は一時的措置」** と明言、**「capacity 回復次第 Fable 5 をサブスクリプションの標準機能に戻す」** と公式コミット。ユーザーの反発を受けた実質的な譲歩とみられる。",
      "**クラウド 3強の段階的復活**: **AWS Bedrock**、**Google Cloud Vertex AI**、**Microsoft Foundry** での Fable 5 提供も、可能な限り速やかに再有効化されるが**同時ではなく段階的**（The Hacker News、VentureBeat）。エンタープライズ顧客のワークロード切替タイミングは各クラウドの復活スケジュール次第となり、暫定的に Opus 4.8 や新登場の **Sonnet 5**（[Sonnet 5 リリース](?a=anthropic-claude-sonnet-5-agentic-cheap-2026)）への切替継続で対応する組織が多いと予想される。",
      "**「tokenmaxxing → 効率性」の再確認**: 皮肉なことに、Fable 5 が停止していた6月末〜7月初旬に Anthropic は **Sonnet 5** を投入し、Opus 4.8 に肉薄する性能を **$2/$10** の破格で提供した。Fable 5 復活後も、Pro/Max ユーザーの多くは「Sonnet 5 で十分」と判断する可能性が高く、[tokenmaxxing→効率性 分析](?a=feature-tokenmaxxing-to-efficiency-market-shift-2026) で整理した業界潮流が Anthropic 自身の製品ライン内でも進行することになる。Fable 5 の実質的な役割は「最上位の限定的な複雑タスク用途」に絞られていく見込み。",
      "**業界への含意**: 今回のエピソードは、フロンティア AI モデルが「発表と同時に**国家安全保障**の対象になる」時代の到来を示した象徴的事案となった。**Anthropic vs Alibaba 蒸留告発**（[Alibaba 蒸留告発](?a=anthropic-accuses-alibaba-claude-distillation-fraud-2026)）、**OpenAI 機密 S-1 提出**（[OpenAI S-1](?a=openai-confidential-s1-ipo-filing-852b-valuation-2026)）、**GPT-5.6 の米政府事前共有**（[GPT-5.6 プレビュー](?a=openai-gpt-5-6-sol-terra-luna-preview-2026)、約20組織限定）と並ぶ流れで、**フロンティア AI モデル各社と米国政府の統合が急速に進んでいる**ことを示す。研究者・開発者は「単一モデルへの依存」を避け、複数モデル・複数クラウド・複数ライセンスの分散戦略を採ることが、事業継続の観点から必須になりつつある。"
    ],
    "primarySources": [
      {
        "title": "Redeploying Claude Fable 5",
        "site": "Anthropic",
        "url": "https://www.anthropic.com/news/redeploying-fable-5"
      },
      {
        "title": "Claude Fable 5 cleared to return as US lifts Anthropic's export control restriction",
        "site": "9to5Mac",
        "url": "https://9to5mac.com/2026/07/01/claude-fable-5-cleared-to-return-as-us-lifts-anthropics-export-control-restriction/"
      },
      {
        "title": "U.S. Lifts Restrictions On Anthropic's Mythos 5 And Fable 5 AI Models",
        "site": "Forbes",
        "url": "https://www.forbes.com/sites/siladityaray/2026/07/01/trump-administration-lifts-export-controls-on-anthropics-mythos-5-and-fable-5-ai-models/"
      },
      {
        "title": "Trump administration lifts restrictions on Anthropic's Fable 5",
        "site": "Axios",
        "url": "https://www.axios.com/2026/06/30/trump-anthropic-ai-model-fable-restrictions"
      },
      {
        "title": "Anthropic Restores Claude Fable 5 After U.S. Lifts Jailbreak-Linked Export Controls",
        "site": "The Hacker News",
        "url": "https://thehackernews.com/2026/07/anthropic-restores-claude-fable-5-after.html"
      },
      {
        "title": "Anthropic walks back covert capability limits on Claude Fable 5, after it was accused of 'secret sabotage'",
        "site": "Fortune",
        "url": "https://fortune.com/2026/06/10/anthropic-accu-claude-fable-5-limits-capabilities-ai-researchers-developers/"
      },
      {
        "title": "Claude subscribers are furious over Fable's new restrictions",
        "site": "PCWorld",
        "url": "https://www.pcworld.com/article/3181897/claude-subscribers-are-furious-over-fables-new-restrictions.html"
      }
    ]
  },
  "feature-prompting-claude-fable-5-practical-guide-2026": {
    "body": [
      "**Claude Fable 5** が7月1日に復活し（[Fable 5 復活](?a=anthropic-claude-fable-5-return-safeguards-limits-2026)）、Pro/Max/Team/一部 Enterprise 向けに 7/7 までの期間限定で利用可能となった。しかし単に「モデルを差し替える」だけでは Fable 5 の実力は引き出せない。**Anthropic 公式ドキュメント**「Prompting Claude Fable 5」に整理された推奨パターンを日本語で徹底解説する。速報系ニュースサイトは「復活しました」で終わるが、AI News は**開発者が明日から使える実務知識**まで踏み込む。",
      "## Fable 5 が Opus 4.8 と何が違うか — 7つの改善領域",
      "Anthropic 公式は Fable 5 が Opus 4.8 に対して以下の7領域で改善したと明言している。プロンプト設計を変える必要があるのはこの改善が原因だ。",
      "**(1) Long-horizon autonomy（長時間自律実行）** — 数日〜週単位の目標指向タスクを維持できる。長く複雑なタスクでも指示保持能力が高い。",
      "**(2) 初回正確性（first-shot correctness）** — 従来なら数日の反復が必要だったシステムを1回で実装した例が報告されている。",
      "**(3) 視覚理解** — 密な技術図・Web アプリ・スクリーンショットを高精度で解釈、bash や crop ツールで反転・ぼけ・ノイズ画像を扱う。",
      "**(4) 企業ワークフロー** — 指示遵守、スコープ維持、財務分析・スプレッドシート・スライド・文書のプロレベル出力。",
      "**(5) コードレビュー・デバッグ** — サイバーセキュリティ関連以外での bug-finding リコールが Opus 4.8 より大幅に高い。リポジトリ履歴を跨いだ検索も可能。",
      "**(6) 曖昧さ耐性** — 複雑・マルチスレッドなリクエストを与えて「次の一手を決めてくれ」と依頼できる。",
      "**(7) 委譲と協働** — 並列サブエージェントの送出と維持が信頼できる水準に。",
      "**重要な使い方の助言**: 「テストは自分の一番難しい未解決問題で行え」。単純タスクだけで評価すると Fable 5 の実力範囲を大きく過小評価してしまう、と Anthropic は明言している。",
      "## パターン1: 長時間実行に耐える足場を組む",
      "難しいタスクでは高 effort 設定で**分単位のリクエスト**、自律実行で**数時間のラン**が発生する。移行前に **クライアントのタイムアウト・ストリーミング・進捗表示**を必ず調整すること。長時間実行を非同期でチェックする「スケジュールジョブ経由」のハーネスに再構築するのが推奨。",
      "曖昧なタスクでの過剰プランニングを抑えるプロンプト（公式推奨・原文）:",
      "> When you have enough information to act, act. Do not re-derive facts already established in the conversation, re-litigate a decision the user has already made, or narrate options you will not pursue in user-facing messages. If you are weighing a choice, give a recommendation, not an exhaustive survey. This does not apply to thinking blocks.",
      "**訳・要旨**: 「行動するのに十分な情報があるなら行動せよ。既に確立された事実の再導出、既に決定された判断の蒸し返し、追求しない選択肢の説明はしない。選択の比較が必要なら全網羅ではなく推奨を出せ。（thinking ブロック内は除く）」",
      "## パターン2: Effort レベルを使い分ける",
      "Effort は知能・レイテンシ・コストのトレードオフの主要な調整ダイヤル。Anthropic の推奨:",
      "- **`high`（デフォルト推奨）**: 大半のタスクで最適",
      "- **`xhigh`**: 最も能力を要する重要タスク",
      "- **`medium` / `low`**: ルーティンワーク",
      "重要な観察: **Fable 5 の low effort は、多くの旧モデルの xhigh を上回る**ことが多い。タスクが完了するが時間がかかりすぎる場合や、より対話的に使いたい場合は effort を下げる。高 effort での「不要な整理・リファクタ・機能追加」を防ぐプロンプト（公式推奨・要点訳）:",
      "> 「タスクが要求する以上の機能追加・リファクタ・抽象化はしない。バグ修正に周辺の整理は不要。仮の将来要件のための設計はしない。動く最も単純なものを作る。早すぎる抽象化と半端な実装は避ける。起こり得ないシナリオへのエラーハンドリング・フォールバック・バリデーションを追加しない。内部コードとフレームワークの保証は信じる。バリデーションはシステム境界（ユーザー入力・外部 API）だけ。単にコードを変更できる場面で feature flag や後方互換シムを使わない。」",
      "## パターン3: 強化された指示追従を活かす — 短い指示で広く効かせる",
      "Fable 5 は指示追従が大幅強化されたため、**旧来の「振る舞いごとに列挙する」プロンプトは冗長**になる。「TLDR で先に結論を出せ」を短く伝えるだけで、旧モデルでは項目を列挙しないと効かなかった以下の全問題が解決する:",
      "- 追求しない選択肢の羅列",
      "- 根本原因の長々とした説明",
      "- 装飾過多の PR ディスクリプション",
      "- 次の行が何をするか説明するだけのコメント",
      "**簡潔性プロンプト（公式推奨・要点訳）**:",
      "> 「結果を先に述べよ。作業完了後の最初の一文は『何が起きたか』『何を発見したか』に答える一文にせよ。ユーザーが『とりあえず TLDR くれ』と言った時に欲しがるもの。詳細と根拠は後から。読みやすさと簡潔さは違う。読みやすさの方が重要。短くする方法は**含める内容を絞る**（読者の次の行動に影響しない詳細を落とす）ことであって、**文を圧縮する**（断片化・略語・矢印チェーン A → B → 失敗・ジャーゴン）ことではない。」",
      "同じ原則が長時間ワークフローのチェックポイント動作にも適用できる。「本当に必要な時だけ止まれ」を短く伝えるプロンプト:",
      "> 「作業が本当に必要とする時だけユーザーを待って止まれ: 破壊的・不可逆な操作、真のスコープ変更、ユーザーだけが提供できる入力の時だけ。該当したら聞いてターンを終了。約束（『やっておきます』等）で終わらない。」",
      "## パターン4: 進捗の根拠付け — ハルシネーション対策",
      "長時間自律実行で最も危険なのは「実際には終わっていないのに『完了しました』と報告する」現象。**Anthropic 公式テストでは以下のプロンプトで捏造報告がほぼ消滅した**という:",
      "> Before reporting progress, audit each claim against a tool result from this session. Only report work you can point to evidence for; if something is not yet verified, say so explicitly. Report outcomes faithfully: if tests fail, say so with the output; if a step was skipped, say that; when something is done and verified, state it plainly without hedging.",
      "**訳**: 「進捗報告の前に、このセッションのツール結果に対して各主張を突き合わせて監査せよ。証拠を指し示せる作業だけ報告し、未検証のものは明示的にそう述べよ。結果は正直に: テストが失敗したら出力付きで失敗と言う、ステップをスキップしたらそう言う、完了・検証済みなら曖昧化せず素直にそう述べる。」",
      "**AI News の実装例**: このパターンは AI News の記事更新ワークフローに直接応用可能。「PR を作成しました」ではなく「PR を作成し、URL は https://... で status は open、mergeable_state は clean であることを確認しました」と言わせる。",
      "## パターン5: 境界を明示する — 頼まれていない行動を防ぐ",
      "Fable 5 は稀に**頼まれていない行動**（依頼していないのにメールを下書きする、防御的な git ブランチバックアップを作る等）を取る。明示的な制約を書く:",
      "> 「ユーザーが問題を説明している、質問している、または声に出して考えている場合（変更を依頼していない場合）、成果物はあなたの評価だ。所見を報告して止まれ。依頼されるまで修正を適用しない。システム状態を変えるコマンド（再起動、削除、設定編集）を実行する前に、証拠がその特定のアクションを実際に支持しているか確認せよ。既知の失敗パターンに一致する信号でも、原因は違うかもしれない。」",
      "## パターン6: 並列サブエージェントを活用する",
      "Fable 5 は並列サブエージェントの送出が旧モデルより信頼できる。**サブエージェントを頻繁に使い**、委譲が適切な場面のガイダンスを明示し、**同期返却を待つのではなく非同期通信**を推奨。長期存続サブエージェントはコンテキストを跨いでキャッシュ読み込みとコスト削減に効く。",
      "> 「独立したサブタスクはサブエージェントに委譲し、それが走っている間もあなたは作業を続けよ。サブエージェントが脱線したり関連コンテキストを欠いたら介入せよ。」",
      "## パターン7: メモリシステムを構築する",
      "Fable 5 は「過去のランからの教訓を記録して参照する」設計で特に力を発揮する。Markdown ファイル1つでも十分。ノート記録のガバナンスプロンプト:",
      "> 「1つのファイルに1つの教訓を格納し、先頭に一行サマリを置け。訂正と確認済みアプローチの両方を、なぜ重要だったかとともに記録せよ。リポジトリやチャット履歴が既に記録していることは保存しない。重複を作らず既存ノートを更新せよ。誤りと判明したノートは削除せよ。」",
      "**過去セッションからメモリをブートストラップする**:",
      "> 「これまでのセッションを振り返れ。サブエージェントを使って中核テーマと教訓を特定し、[X] に保存せよ。今後の使用で [X] を参照する必要があることを認識せよ。」",
      "## パターン8: 早期停止と context 予算不安を防ぐ",
      "**早期停止**: 長セッションの終盤で Fable 5 が稀に「では X を実行します」と宣言だけしてツール呼び出しをしないことがある。「continue」または「go ahead and do it end to end」の一言で解消する。自律パイプライン向けのシステムリマインダー:",
      "> 「あなたは自律動作している。ユーザーはリアルタイムで見ておらず、途中で質問に答えられない。『〜しましょうか？』『〜すべきでしょうか？』は作業をブロックする。元の依頼から自然に導ける可逆的アクションは、聞かずに進めよ。タスク完了後に follow-up を提示するのはよい。作業前に事前相談したのに、事後に許可を求めるのはダメ。ターンを終える前に最終段落を確認せよ: それが計画・分析・質問・次のステップリスト・未完了作業の約束（『〜します』『〜次第知らせます』）なら、いまツール呼び出しで実行せよ。タスク完了時か、ユーザーだけが提供できる入力でブロックされた時だけターンを終えよ。」",
      "**コンテキスト予算不安**: 非常に長いセッションで Fable 5 が「新セッションを開始しよう」「サマリ化してハンドオフしよう」と提案することがある。**残りトークン数の表示をハーネスから消す**のが第一の対策。表示せざるを得ない場合の安心プロンプト:",
      "> 「コンテキストは十分残っている。コンテキスト制限を理由に、停止・サマリ化・新セッション提案をするな。作業を続けよ。」",
      "## 「理由」を与える — 依頼だけでなく背景も伝える",
      "Fable 5 は依頼の背後にある意図を理解しているとパフォーマンスが上がる。コンテキストがあれば、意図を推論せずにタスクを関連情報に接続できる。特に複数ワークストリームを跨ぐ長期エージェントで重要。テンプレート:",
      "> 「[大きなタスク] を [誰のために] やっている。彼らは [出力が可能にすること] が必要だ。それを踏まえて: [依頼内容]。」",
      "## パターン9: ユーザーへの読みやすさを担保する",
      "ツール呼び出しが多い長時間・エージェント的会話では、Fable 5 は密な矢印チェーンや深い実装詳細、ユーザーが見ていない思考の参照、過度に技術的な言い回しを出しがち。以下のプロンプトが緩和する:",
      "> 「ツール呼び出し間の簡潔なショートハンドはよい（それはあなたが考えているだけ、そこでの簡潔さは good）。最終サマリは違う: それは何も見ていない読者向け。あなたがしばらく作業していてユーザーが見ていなかった場合（夜通し、多くのツール呼び出し、最後の発言以来）、最終メッセージはユーザーがそれら全てを初めて見る場面。作業スレッドの継続ではなく **再グラウンディング**として書け: 結果を先に、次に必要な1〜2件を、それぞれ**新規のこととして説明**せよ。作業中に構築した語彙はあなたのもので、彼らのものではない。再導入しない限り置いていけ。最後のサマリを書く時は working shorthand を捨てよ。完全な文で書け。用語を綴れ。矢印チェーン、ハイフン結合、あなたが作った独自ラベルは使うな。ファイル・コミット・フラグなどの識別子に触れる時は各々に平易な言葉で節を与えよ。結果で開始せよ: 何が起きたか・何を発見したかの一文。それから支持詳細。短さと明快さを選ぶなら明快さを取れ。」",
      "## Send-to-User ツールを実装する",
      "長時間非同期エージェントには、ターンを終わらせずに**ユーザーに逐語的に届けたいメッセージ**を送るためのツールを用意すべき。成果物（生成コードスニペット・下書きメッセージ）、進捗更新（具体的な数値付き）、途中で聞かれた質問への直接回答などが対象。**ツール入力はサマリ化されないので、内容がそのまま届く**。",
      "**JSON Schema 実装例（公式提供）**:",
      "```json\n{\n  \"name\": \"send_to_user\",\n  \"description\": \"Display a message directly to the user. Use this for progress updates, partial results, or content the user must see exactly as written before the task finishes.\",\n  \"input_schema\": {\n    \"type\": \"object\",\n    \"properties\": {\n      \"message\": {\n        \"type\": \"string\",\n        \"description\": \"The content to display to the user.\"\n      }\n    },\n    \"required\": [\"message\"]\n  }\n}\n```",
      "**重要**: ツール定義だけでは足りない。以下のようなシステムプロンプトの誘発文言をペアで書かないと Fable 5 は稀にしか呼ばない:",
      "> 「ツール呼び出しの合間で、ユーザーに逐語的に読んで欲しい内容（部分成果物・彼らの質問への直接の回答）があったら、send_to_user ツールをそのコンテンツで呼び出せ。send_to_user は user-facing コンテンツにのみ使用し、ナレーションや推論には使わない。」",
      "**アンチパターン**: ナレーションや内部推論を `send_to_user` 経由で送るな。user-facing でないコンテンツに乱発すると本来の目的が壊れる。",
      "## 推奨足場変更 4項目",
      "**(1) 難易度レンジの上端から始めよ**: 旧モデルでは頼まなかったような難しいタスクを選び、Fable 5 にスコーピングと clarifying question を出させてから実行させる。",
      "**(2) 自己検証を長時間実行プロンプトで明示せよ**: 別インスタンスの fresh-context な verifier サブエージェントの方が自己批判より優れることが多い。プロンプト例:",
      "> 「Establish a method for checking your own work at an interval of [X] as you build. Run this every [X interval], verifying your work with subagents against the specification.」",
      "**訳**: 「構築中に [X] の間隔で自分の作業を確認する方法を確立せよ。この間隔ごとに実行し、サブエージェントで仕様に対する自作業を検証せよ。」",
      "**(3) 既存プロンプト・スキルをリファクタせよ**: 旧モデル向けに開発したスキルは Fable 5 には**規範的すぎ**て出力品質を下げることが多い。デフォルト性能の方がよいなら古い指示は削除。Fable 5 は今のタスクから学んだことでスキルを実行時に更新する能力も高い。",
      "**(4) 推論を応答で再現するよう指示しない**: 「内部推論を echo せよ・transcribe せよ・説明せよ」というプロンプト・スキル・ハーネス指示は、Fable 5 で **`reasoning_extraction` 拒絶カテゴリ**をトリガする可能性があり、Opus 4.8 へのフォールバック率が上がる。既存スキル・システムプロンプトの reflection/show-your-thinking 系指示は移行時に監査せよ。推論の可視性が必要なら [adaptive thinking の構造化 `thinking` ブロック](https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking)を読み、進捗表示には send-to-user ツールを使う。",
      "## セーフティ・クラシファイア注意",
      "Fable 5 は3つのセーフティ・クラシファイアが走る:",
      "**(a) オフェンシブサイバーセキュリティ**: エクスプロイト・マルウェア・攻撃ツール構築。",
      "**(b) 生物学・生命科学コンテンツ**: ラボ手順・分子機構等。",
      "**(c) モデルのサマリ化された思考の抽出**",
      "**Benign な業務**（脆弱性研究者、CTF プレイヤー、セキュリティ教育者、正当な生命科学研究）**もトリガする可能性**があるため、拒否リクエストを自動再ルートする仕組みが必要。公式が推奨する対応は **Opus 4.8 へのサーバーサイド or クライアントサイド・フォールバック**の設定（[refusals-and-fallback ドキュメント](https://platform.claude.com/docs/en/build-with-claude/refusals-and-fallback)参照）。`stop_reason: \"refusal\"` を検知したらフォールバック実行。",
      "## Fable 5 移行チェックリスト（AI News 編集部まとめ）",
      "1. クライアント HTTP タイムアウトを **数時間**に拡張、または非同期ジョブに再設計",
      "2. `send_to_user` ツールを定義し、システムプロンプトに誘発文言を追加",
      "3. 既存の「内部推論を echo せよ」系指示を**全削除**し、必要なら `thinking` ブロック読み取りに置換",
      "4. 旧モデル向けの過剰に規範的な skill を再評価し、不要な指示を削除",
      "5. Effort デフォルトを `high` に設定、`xhigh` は最重要タスク向けに温存",
      "6. 拒否時の Opus 4.8 フォールバックを有効化",
      "7. 長時間ラン向けに「進捗の根拠付け」プロンプトを system に注入",
      "8. サブエージェント委譲の指示を system に注入（同期待ちしない方針）",
      "9. Markdown ファイルによるメモリシステムを準備",
      "10. 早期停止時の `continue` トリガとコンテキスト予算表示の抑制",
      "## まとめ — 速報の外側にある付加価値",
      "Claude Fable 5 の復活は業界紙が速報で報じ切ったが、**実際に使いこなす知識**は Anthropic 公式ドキュメントの英語ドキュメントに閉じ込められていた。本ガイドはこれを日本語で全訳・要約し、実装例・アンチパターン・移行手順まで整理した。**AI News が目指すのは「速報で勝つ」ではなく「実務者が明日から使える知識を提供する」ことである**。Fable 5 の運用実績が積み重なる7月以降、続報として「AI News 編集部が Fable 5 に週次まとめを書かせてみた結果」等の実践レポートも予定している。"
    ],
    "primarySources": [
      {
        "title": "Prompting Claude Fable 5",
        "site": "Anthropic Docs",
        "url": "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-fable-5"
      },
      {
        "title": "Introducing Claude Fable 5 and Claude Mythos 5",
        "site": "Anthropic Docs",
        "url": "https://platform.claude.com/docs/en/about-claude/models/introducing-claude-fable-5-and-claude-mythos-5"
      },
      {
        "title": "Refusals and Fallback",
        "site": "Anthropic Docs",
        "url": "https://platform.claude.com/docs/en/build-with-claude/refusals-and-fallback"
      },
      {
        "title": "Adaptive Thinking",
        "site": "Anthropic Docs",
        "url": "https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking"
      },
      {
        "title": "Effort Parameter",
        "site": "Anthropic Docs",
        "url": "https://platform.claude.com/docs/en/build-with-claude/effort"
      }
    ]
  },
  "openai-us-government-5-percent-stake-42b-offer-2026": {
    "body": [
      "**Financial Times** が2026年7月2日に報じた内容によれば、**OpenAI が米国政府に同社の 5% 株式**を提示したことが判明した。株式時価は **$852B 評価額**（[3月調達ラウンド](?a=openai-122b-funding-852b-valuation-2026) で確定）で**約 $42.6B 相当**の巨額。CNBC・CNN Business・Forbes・Yahoo Finance が後追い報道した。",
      "**Altman が直接ホワイトハウスに提示**: Sam Altman は Trump 大統領、**Howard Lutnick 商務長官**、**Scott Bessent 財務長官**の3者と直接協議した。Altman は「**AI のアップサイドを国民と共有する最善策**」として、政府への出資を「株式ベースで参加する形」で正当化したという。",
      "**Anthropic・Google・Meta にも同様の枠組み要請**: Altman は OpenAI 単独ではなく、**Anthropic・Google・Meta にも同様の出資枠組みへの参加**を求めている。これが実現すれば、フロンティア AI 各社が横並びで米国政府に持分を渡す前例のない業界構造となる。Anthropic は[機密 S-1 提出](?a=openai-confidential-s1-ipo-filing-852b-valuation-2026)を先行しており、IPO 前の株式構造が政府と合意する形になる可能性も。",
      "**Trump 大統領の姿勢**: Trump は「政府が AI 大手の株式を取ることは **beautiful thing**」と表現。「Americans を AI 革命のパートナーにする」路線を継続する姿勢を示した。",
      "**Intel 前例との共通点**: Trump 政権は2025年8月に **Intel 株式 10%** を **$8.9B の普通株投資**で取得した実績があり、これが AI 業界へも適用される「産業政策としての政府出資モデル」の前例となっている。ただし Intel は**衰退期の半導体大手救済**の色彩が強かったのに対し、OpenAI は**成長期のスタートアップの上場前**という違いがあり、政策目的も市場の受け止めも異なる。",
      "**現状は「conceptual and early-stage」**: FT は今回の議論を **「概念的で初期段階」**（conceptual and early-stage）と特徴付けている。**議会承認が必要になる可能性**もあり、実現に至るには数ヶ月〜1年以上の政治プロセスが見込まれる。反トラスト法・証券法・国家安全保障法との整合性も精査が必要。",
      "**開発者・エンドユーザーへの影響**: 実現した場合、OpenAI の上場時株価に**政府持分プレミアム/ディスカウント**が発生する可能性、政府の政策方針が API 提供先や輸出規制に反映されるスピードが上がる可能性がある。**Claude Fable 5 復活の輸出規制解除**（[Fable 5 復活](?a=anthropic-claude-fable-5-return-safeguards-limits-2026)）で見られた「政府による能動的介入」がフロンティア AI 全体に及ぶ流れの延長線上にあり、開発者は**「AI モデル選択 = 米政府の技術政策選択」**という構図をますます意識する必要が出てくる。",
      "**GPT-5.6 遅延との関係**: 6/25 に約20組織限定でプレビュー公開された **GPT-5.6 Sol/Terra/Luna**（[GPT-5.6 プレビュー](?a=openai-gpt-5-6-sol-terra-luna-preview-2026)）の一般公開が、米政府の追加監督要請で7月中〜下旬まで遅延している。これも「政府との統合が深まる過程」の一環であり、5% 出資が実現すれば同様のプロセスが常態化する可能性が高い。"
    ],
    "primarySources": [
      {
        "title": "OpenAI in talks to give Trump administration a 5% stake in the company, FT reports",
        "site": "CNN Business",
        "url": "https://www.cnn.com/2026/07/02/business/openai-trump-stake-intl"
      },
      {
        "title": "OpenAI proposes 5% stake to Trump administration to ease Washington pressure",
        "site": "CNBC",
        "url": "https://www.cnbc.com/2026/07/02/openai-proposes-us-government-own-5percent-stake-to-address-political-blowback.html"
      },
      {
        "title": "OpenAI Reportedly Pitches Granting U.S. Government 5% Stake",
        "site": "Forbes",
        "url": "https://www.forbes.com/sites/siladityaray/2026/07/02/openai-reportedly-pitches-granting-us-government-5-stake/"
      }
    ]
  },
  "meituan-longcat-2-1-6t-domestic-chips-mit-open-2026": {
    "body": [
      "中国の巨大テック企業 **Meituan（美団、北京）**が2026年6月30日、大規模言語モデル **LongCat-2.0** を **MIT ライセンス**で OSS 公開した。**1.6兆パラメータ**（1.6T）の Sparse **Mixture of Experts** アーキテクチャで、**この規模のモデルとして初めて、事前訓練から推論まで完全に中国国産 AI チップだけで完結**した点が歴史的意義を持つ。",
      "**モデル仕様**: 総パラメータは **1.6T**、アクティブは **33B〜56B/トークン（平均約 48B）**、コンテキストウィンドウは **1M トークン**。Sparse MoE の設計により、見出しサイズは巨大だが**推論コストは 48B クラス**に抑えられる。**OpenRouter 上で公開前から「Owl Alpha」というコードネームで利用が拡大**しており、実運用検証を経てからの正式リリースとなった。",
      "**国産チップ 50,000枚のスーパーポッド**: 訓練は **50,000枚の中国国産 AI ASIC スーパーポッド**で実施された。**NVIDIA GPU は一切使用していない**。米国の対中先端半導体輸出規制（Blackwell / Hopper / Vera Rubin のうち上位 SKU が禁輸対象）に対する中国側の技術主権確保の象徴的成果と位置付けられる。ASIC の具体的な設計元・製造委託先については公表されていないが、Huawei Ascend 系または Cambricon 系が有力とみられる。",
      "**ベンチマーク性能**: **SWE-bench Pro で 59.5** を記録、これは **GPT-5.5 の 58.6 を上回り、Claude Opus 4.6 と同水準**。Gemini 3.1 Pro とも並ぶ。エージェント的タスク・コーディング領域で強く、汎用推論では Fable 5 / GPT-5.6 Sol にはまだ及ばない。**Z.ai GLM-5.2**（[GLM-5.2 公開](?a=zhipu-zai-glm-5-2-open-source-coding-1m-context-2026)、SWE-bench Pro 62.1）と並ぶ「中国 OSS フラッグシップ」の地位を確立。",
      "**「AI 主権」の観点**: 米国では NVIDIA が AI 訓練インフラ市場を圧倒しており、Anthropic（AWS Trainium）・OpenAI（Broadcom Jalapeño、[Jalapeño 発表](?a=openai-broadcom-jalapeno-llm-inference-chip-2026)）・Google（TPU）・Microsoft（MAIA）・SpaceX-xAI（Colossus GPU 220,000）と各社が独自路線を模索している。中国側は Meituan の LongCat-2.0 で **「国産チップだけで最大級モデルを訓練できる」**ことを実証、これは Anthropic vs Alibaba 蒸留告発（[Alibaba 蒸留告発](?a=anthropic-accuses-alibaba-claude-distillation-fraud-2026)）と対照的に「**自前で作る**」路線の実力を示す動きとなった。",
      "**「tokenmaxxing → 効率性」との接続**: MIT ライセンスによる自社ホスティング可能な OSS モデルとして、[効率性転換分析](?a=feature-tokenmaxxing-to-efficiency-market-shift-2026) で整理した「オープンウェイト陣営」の選択肢を強化する。DeepSeek V4・Kimi K2.6・GLM-5.2 に LongCat-2.0 が加わり、**「中国 OSS 4強」**が形成された。エンタープライズ・スタートアップは、Claude Fable 5 / GPT-5.6 に依存しない実運用オプションを一段深化させることになる。",
      "**日本の意味合い**: 日本の法人が LongCat-2.0 を利用する場合、MIT ライセンスは商用利用・改変・再配布とも制約なし。ただし**中国製モデル特有のコンテンツポリシー**（内部の安全フィルタが中国当局の方針を反映する可能性）や、**日本語能力**（訓練データに日本語がどの程度含まれるか未公表）は個別検証が必要。エンタープライズの本番採用にはファインチューニング or LoRA 適応、コンテンツフィルタの再訓練が現実的。"
    ],
    "primarySources": [
      {
        "title": "China debuts biggest AI model trained on local chips, as Meituan releases LongCat-2.0",
        "site": "South China Morning Post",
        "url": "https://www.scmp.com/tech/tech-trends/article/3358854/china-debuts-biggest-ai-model-trained-local-chips-meituan-releases-longcat-20"
      },
      {
        "title": "Meituan Open-Sources LongCat-2.0, a 1.6T Model Trained on Chinese Chips",
        "site": "RITS Shanghai NYU",
        "url": "https://rits.shanghai.nyu.edu/ai/meituan-open-sources-longcat-2-0-a-1-6t-model-trained-on-chinese-chips/"
      },
      {
        "title": "China's Meituan says its new AI model was trained on domestic chips",
        "site": "The Next Web",
        "url": "https://thenextweb.com/news/chinas-meituan-says-its-new-ai-model-was-trained-on-domestic-chips"
      }
    ]
  },
  "five-eyes-agentic-ai-cyber-risk-guidance-2026": {
    "body": [
      "**Five Eyes**（米・英・豪・加・NZ の情報安全保障5カ国同盟）のサイバーセキュリティ機関が2026年6月22日、合同で **「The AI Shift in Cyber Risk: Why Leaders Must Act Now」**（サイバーリスクにおける AI シフト: 指導者はなぜ今行動すべきか）を発表した。参加機関は **CISA（米）・NSA（米）・NCSC-UK（英）・ASD's ACSC（豪）・Canadian Cyber Centre（加）・NCSC-NZ（NZ）**。",
      "**中心メッセージ: 既存フレームワークに統合せよ**: 文書の核心的な主張は **「agentic AI は完全に新しいセキュリティ規律を必要としない」**。組織は agentic AI システムを、**すでに運用している既存のサイバーセキュリティフレームワーク・ガバナンス構造に組み込む**べきで、Zero Trust・**多層防御（defense-in-depth）**・**最小特権原則（least-privilege access）**といった既存原則を適用せよ、というのが基本方針。",
      "**5つのリスクカテゴリ**: ガイダンスはリスクを以下の5つに分類する。",
      "**(1) 特権リスク（privilege）**: エージェントに過度な権限が付与され、想定外の操作が可能になる。",
      "**(2) 設計・構成リスク（design/configuration）**: 開発時のアーキテクチャ選択・コンフィグ設定が脆弱性を生む。",
      "**(3) 行動リスク（behavioral）**: プロンプトインジェクション、想定外の挙動、意図しない副作用など、エージェントの動作自体に起因するリスク。",
      "**(4) 構造リスク（structural）**: エージェント間の連携、オーケストレーション層、記憶システムの整合性に起因するリスク。",
      "**(5) サプライチェーンリスク（supply-chain）**: サードパーティスキル、外部モデル、依存パッケージ経由での攻撃。",
      "文書はさらに **23の具体的リスク項目**と **100以上のベストプラクティス**を列挙している。",
      "**SkillSpector との実装的接続**: 5リスクカテゴリの (5) サプライチェーンは、NVIDIA SkillSpector（[SkillSpector 特集](?a=feature-nvidia-skillspector-agent-skill-security-2026)）が対応するスキル脆弱性検出と直接接続する。SkillSpector の16カテゴリ・64パターン（プロンプトインジェクション・MCP ツールポイズニング・特権昇格・データ漏洩等）は Five Eyes の5リスクカテゴリを網羅的に検査可能。**AI News の CLAUDE.md「外部スキル実行禁止」ポリシー**も、Five Eyes ガイダンスの精神と完全に整合する。",
      "**Anthropic WIF との接続**: Five Eyes の (1) 特権リスク・最小特権原則の実装として、**Anthropic Workload Identity Federation**（[WIF GA](?a=anthropic-workload-identity-federation-ga-service-accounts-2026)）が静的 API キー廃止・Service Accounts・監査証跡を提供する。**「Zero Trust をエージェントレイヤーに拡張する」**具体的な選択肢が2026年6月に整い始めた形。",
      "**Fable 5 復活との温度差**: 一方で Five Eyes ガイダンスは「**慎重・漸進的な採用**」（cautious, incremental adoption）を強調する。**Claude Fable 5 の輸出規制解除**（[Fable 5 復活](?a=anthropic-claude-fable-5-return-safeguards-limits-2026)）が示すように、政府側のスタンスは「セキュリティ強化 → 通商解禁」の順で動いており、企業側は Five Eyes ガイダンスに沿って**セキュリティ体制を先に整えたうえで**フロンティアモデルを本番運用する順序が推奨される。",
      "**業界への含意**: 「新しい規律は不要」というメッセージは、既存の CISO・情報セキュリティ組織にとって**朗報**である一方、「では何が違うのか」を具体化する 23 リスク・100+ プラクティスの重みは、実務的な負荷が大きい。**AI News では今後、5リスクカテゴリ × 実装パターン（SkillSpector / WIF / Anthropic Reviewer Agent / OpenAI Trusted Contact 等）のクロス表を作成する解説記事を予定**している。",
      "**Anthropic vs Alibaba 蒸留告発との重層**: Five Eyes ガイダンスの (5) サプライチェーンリスクは、[Anthropic vs Alibaba 蒸留告発](?a=anthropic-accuses-alibaba-claude-distillation-fraud-2026)（2,880万件の Claude 不正リクエスト、25,000偽アカウント）で顕在化した「フロンティアモデル API への不正アクセス・蒸留」も文脈に含む。**Five Eyes 加盟5カ国の情報機関が同一文書に署名した**ことは、国家安全保障レベルでの AI 脅威対応が形になり始めた象徴的な動き。"
    ],
    "primarySources": [
      {
        "title": "Five Eyes Cyber Security Agencies Statement",
        "site": "NSA / CSS",
        "url": "https://www.nsa.gov/Press-Room/News-Highlights/Article/Article/4523810/five-eyes-cyber-security-agencies-statement/"
      },
      {
        "title": "Five Eyes Cyber Security Agencies Statement",
        "site": "CISA",
        "url": "https://www.cisa.gov/news-events/news/five-eyes-cyber-security-agencies-statement"
      },
      {
        "title": "US government, allies publish guidance on how to safely deploy AI agents",
        "site": "CyberScoop",
        "url": "https://cyberscoop.com/cisa-nsa-five-eyes-guidance-secure-deployment-ai-agents/"
      }
    ]
  },
  "google-gemini-3-1-flash-image-3-pro-image-release-2026": {
    "body": [
      "Google が2026年6月30日、**Gemini 3.1 Flash Image** と **Gemini 3 Pro Image** の**画像生成モデル2種**を公開した。**Gemini API・Google AI Studio・Vertex AI** で即日利用可能。Google は同日、Anthropic の Claude Sonnet 5（[Sonnet 5 リリース](?a=anthropic-claude-sonnet-5-agentic-cheap-2026)）・Claude Science（[Claude Science](?a=anthropic-claude-science-workbench-research-2026)）と重なるタイミングでの発表となり、フロンティアプレイヤー各社が「日常業務向け × 高性能向け」の2階層展開を明確化する潮流を確認する形となった。",
      "**Gemini 3.1 Flash Image**: 「日常業務向け」画像生成モデル。**低レイテンシ・低コスト**を志向し、Gemini 3.5 Flash（テキスト、[Google I/O 2026](?a=google-io-2026-gemini-3-5-flash-antigravity-spark-2026) で GA）と同一の Flash 系ブランドで展開。**旧 Nano Banana / Nano Banana 2 系**の後継として位置付けられ、Web アプリでの高頻度な画像生成、動的なコンテンツ差し替え、A/B テスト用バリエーション生成などのユースケースを狙う。",
      "**Gemini 3 Pro Image**: 「高忠実度・高品質」画像生成モデル。**複雑なプロンプト・複数被写体構成・高解像度出力**に対応し、Midjourney V8・Flux 2・GPT Image（[GPT Image レビュー](?a=gpt-image-review)）と競合する。マーケティング素材・アート制作・製品ビジュアル等のプロ用途を想定。",
      "**Google の「2階層画像戦略」**: これで Google は **Gemini 3.1 Flash Image（廉価）と Gemini 3 Pro Image（高品質）**の2階層製品ラインを画像生成でも整備。テキスト（Gemini 3.5 Flash / 3.5 Pro）・動画（Veo 3.1 / Veo）と同じ2階層アプローチで統一。**OpenAI GPT-5.6 Sol/Terra/Luna**（[GPT-5.6 プレビュー](?a=openai-gpt-5-6-sol-terra-luna-preview-2026)）の3階層と並ぶ「**用途特化の階層化**」が業界標準になりつつある。",
      "**Vertex AI と Google Workspace 統合**: エンタープライズ顧客は **Vertex AI** で即日利用可能で、Google Workspace（Slides・Vids・Docs）との統合ロードマップも公表された。**Google Vids に Veo 3.1 統合**（[Google Vids Veo 3.1](?a=google-vids-veo31-free-video-generation-2026)）と組み合わせ、**「Workspace 内で画像・動画・テキストの全モーダル生成を完結」**する構想が具体化する。",
      "**日本の開発者向け実用ガイド（次回予告）**: Gemini 3.1 Flash Image は API 料金が Nano Banana 2 系より約 **20-30% 削減**（Google 公式ベンチマーク）される見込み。日本語プロンプトでの応答性能は Gemini テキスト系と同水準で、Midjourney 系より日本語・アジア圏コンテキストに強い可能性が示唆されている。**AI News 編集部は「日本語プロンプトでの Gemini 3.1 Flash Image vs Flux 2 vs Midjourney V8 実践比較」を近日公開予定**。"
    ],
    "primarySources": [
      {
        "title": "Gemini API Release Notes",
        "site": "Google AI for Developers",
        "url": "https://ai.google.dev/gemini-api/docs/changelog"
      },
      {
        "title": "Google DeepMind - Gemini",
        "site": "DeepMind",
        "url": "https://deepmind.google/"
      }
    ]
  },
  "anthropic-california-newsom-claude-50-off-state-agencies-2026": {
    "body": [
      "California 州の **Gavin Newsom 知事**が2026年6月29日、Anthropic と **first-of-its-kind の州政府協定**を発表した。TechCrunch・CBS Sacramento・Fox Business・TechRadar・The Next Web・Yahoo が同日〜翌日に報道した。米国の州政府と単一 AI ベンダーが公式にこの規模で提携するのは前例のない事案で、他州や連邦機関、日本の自治体にとっても重要な参照事例となる。",
      "**割引と提供条件**: 州機関は Anthropic の生産性アシスタント Claude を **50% 割引**で利用可能。**市・郡等の地方自治体も同じ割引**の対象で、California の全レベルの行政機関がスケール調達できる。",
      "**追加特典**: 割引に加え、**無料の人材訓練**（州職員向け）、**Anthropic 開発者による技術・ワークフロー支援**も含まれる。導入コストとオンボーディングの障壁を大幅に下げる包括的パッケージ。",
      "**提供チャネル: SITeS ポータル**: **California Department of Technology（CDT）**の新設 **Statewide Information Technology Shared Services（SITeS）ポータル**経由で提供。Claude は SITeS 経由で州の全機関に提供される **最初の AI 生産性ツール**。今後の他 AI ベンダー（OpenAI・Google 等）の追随でマルチベンダー体制になる可能性が示唆されている。",
      "**実運用が既に開始**: 主要機関で導入が進行中。",
      "**サイバー防御**: CDT と **CalOES**（California Office of Emergency Services）が **Claude Security + Claude Code**（[Claude Code](?a=claude-code)）を組み合わせ、州の**コードのスキャン・トリアージ・パッチ適用**に活用。**Five Eyes ガイダンス**（[Five Eyes 分析](?a=five-eyes-agentic-ai-cyber-risk-guidance-2026)）の推奨する Zero Trust・多層防御路線に沿った実装例となる。",
      "**顧客サービス**: **California DMV**（運転免許・車両登録の州機関）が Claude で顧客サービスを改善、待ち時間削減。",
      "**医療・福祉**: **California Department of Healthcare Services**（**全米最大の Medicaid 機関**）が Claude を内部ワークフローで活用、Medicaid 受給者への対応品質向上を狙う。",
      "**「先例」としての意義**: 米国の州政府による単一 AI ベンダーとの公式協定という先例が生まれたことで、以下の連鎖効果が予想される。",
      "**(1) 他州の追随**: NY・TX・FL 等の大規模州が独自の類似協定を協議する可能性。",
      "**(2) 競合 AI 各社の州政府攻勢**: OpenAI・Google・xAI が対抗提案を各州に持ち込む展開が予想される。",
      "**(3) 連邦政府協定への布石**: [OpenAI が米政府に5%出資を提示](?a=openai-us-government-5-percent-stake-42b-offer-2026) の議論とも接続、Anthropic も類似の連邦協定へ動く可能性。",
      "**(4) 日本の地方自治体への示唆**: 東京都・大阪府等が生成 AI 導入時の交渉テンプレートとして参照可能。",
      "**Anthropic の収益とアクセス戦略**: 5月末に Series H で $965B 評価額・**ARR $47B**（[Anthropic Series H 補遺](?a=anthropic-may-2026-series-h-milan-korea-arr-47b-2026)）を確定した Anthropic にとって、州政府スケールでの導入は個別契約の収益額以上に「**社会的なユースケース事例**」の獲得価値が高い。Medicaid・DMV・サイバー防御での実運用は「Claude が公共サービスに使える」ことの具体的な証明となる。",
      "**Fable 5 復活・Sonnet 5 との接続**: 6/30 の [Claude Sonnet 5 リリース](?a=anthropic-claude-sonnet-5-agentic-cheap-2026)（$2/$10 の攻めた価格）や 7/1 の [Fable 5 復活](?a=anthropic-claude-fable-5-return-safeguards-limits-2026)（週次50%上限）と同じ週に、州政府協定が発表された流れは、Anthropic の**エンタープライズ・公共セクター深耕**戦略の一貫性を示す。**tokenmaxxing → 効率性**の潮流（[効率性転換分析](?a=feature-tokenmaxxing-to-efficiency-market-shift-2026)）でも、州政府のような大規模かつコスト感度の高い顧客層への **50% 割引** は理にかなう。"
    ],
    "primarySources": [
      {
        "title": "Governor Newsom announces a first-of-its-kind partnership with Anthropic",
        "site": "Governor of California",
        "url": "https://www.gov.ca.gov/2026/06/29/governor-newsom-announces-a-first-of-its-kind-partnership-providing-anthropic-tools-to-state-agencies-and-improving-services-for-californians/"
      },
      {
        "title": "Anthropic and Gov. Newsom forge deal allowing California government to use Claude at half price",
        "site": "TechCrunch",
        "url": "https://techcrunch.com/2026/06/29/anthropic-and-gov-newsom-forge-deal-allowing-california-government-to-use-claude-at-half-price/"
      },
      {
        "title": "California signs deal to bring Claude AI tools to government workers",
        "site": "CBS Sacramento",
        "url": "https://www.cbsnews.com/sacramento/news/california-claude-deal-gavin-newsom/"
      }
    ]
  },
  "white-house-voluntary-frontier-ai-standards-openai-anthropic-google-2026": {
    "body": [
      "**White House** が2026年7月3日時点で、**OpenAI・Anthropic・Google の主要3社**とフロンティア AI モデルの **自主リリース基準（voluntary release standards）** を最終協議中であることが FT・Reuters 系の報道で明らかになった。翌週（7/6-7/12 週）の発表が視野に入っている。既に運用中の枠組みが公式な形で成文化される流れとなる。",
      "**Executive Order 14409 が基盤**: 骨子は既に **Executive Order 14409**（**Trump 大統領が6月2日署名**、「Promoting Advanced Artificial Intelligence Innovation and Security」）で確立されていた。以下3つの要素が中核。",
      "**(1) 機密ベンチマーク**: 政府が **classified（機密扱いの）ベンチマーク**を保持し、フロンティアモデルの能力評価を独自に実施できる仕組み。",
      "**(2) 30日の事前公開期間**: モデル一般公開の **30日前** に政府と情報を共有する義務。政府側は事前アクセスと安全性評価の時間を確保する。",
      "**(3) 自発参加**: 法律による強制ではなく、参加は **voluntary（自発的）**。しかし実質的には輸出規制・調達優遇との連動で参加を「事実上必須」に近い形にする設計。",
      "**既に「実運用」されている**: 過去1ヶ月の主要事象は、この枠組みが実質的に動いている証拠と言える。",
      "**GPT-5.6 プレビューの限定配布**: [GPT-5.6 プレビュー](?a=openai-gpt-5-6-sol-terra-luna-preview-2026) は **約20組織限定**で配布された。米国政府に事前共有される流れそのものが Executive Order 14409 の 30日事前公開期間の運用例。",
      "**Fable 5 の輸出規制と解除**: [Claude Fable 5 復活](?a=anthropic-claude-fable-5-return-safeguards-limits-2026) は6/12 の輸出規制発動 → 6/30 の解除 → 7/1 の再展開という Executive Order 14409 の権限行使サイクルの実例。",
      "**発表される新枠組みの内容**: FT・TipRanks 系の報道では、以下が骨子と見られる。",
      "**ベンチマーク基準**: 政府が求めるモデル能力・安全性の閾値を明文化。フロンティアモデルは公開前にこれをクリアする必要がある。",
      "**公開タイムライン**: 30日事前公開期間に加え、政府側の評価スケジュールと再評価要件を規定。",
      "**国内外アクセスルール**: 米国内では通常展開、輸出規制対象国では制限、その他は個別評価という3層構造が示唆されている。中国は事実上ブロック、日本・EU・韓国・オーストラリア等の同盟国は「原則許可」路線が予想される。",
      "**開発者・エンタープライズへの影響**: フロンティアモデルの初期プレビュー→GA のギャップが**恒常的に数週間**発生する新常態が定着する。エンタープライズは（1）初期プレビューの **信頼できるパートナー枠**、（2）GA 後の通常利用、を分けて計画する必要がある。**「モデル選択 = 米政府の技術政策選択」**（[OpenAI 5% 出資記事](?a=openai-us-government-5-percent-stake-42b-offer-2026) で整理）の構図がさらに強化される。",
      "**Anthropic × California 州協定との接続**: 一方で [Anthropic × California 州協定](?a=anthropic-california-newsom-claude-50-off-state-agencies-2026) のような**州レベルの調達契約**も並行して進行しており、連邦の規制枠組みと州の調達の両輪が同時に動いている。開発者・企業側は**「複数モデル・複数クラウド・複数ライセンス」の分散戦略**の重要性が一段と高まる。",
      "**日本の含意**: 日本企業は「米国発フロンティアモデルの利用可能タイミング」が政府の判断で変わる新常態を前提に、**国産・中国 OSS・欧州モデル**（Mistral 等）の代替経路を確保する意義が増す。特に [Meituan LongCat-2.0](?a=meituan-longcat-2-1-6t-domestic-chips-mit-open-2026) や [Z.ai GLM-5.2](?a=zhipu-zai-glm-5-2-open-source-coding-1m-context-2026) の MIT ライセンス OSS は「独立可能な選択肢」として、日本のエンタープライズにも戦略的意義を持つ。"
    ],
    "primarySources": [
      {
        "title": "Promoting Advanced Artificial Intelligence Innovation and Security",
        "site": "The White House",
        "url": "https://www.whitehouse.gov/presidential-actions/2026/06/promoting-advanced-artificial-intelligence-innovation-and-security/"
      },
      {
        "title": "White House Nears Voluntary Frontier-Model Deal With Top AI Labs",
        "site": "AI Weekly",
        "url": "https://aiweekly.co/alerts/white-house-nears-voluntary-frontier-model-deal-with-top-ai-labs"
      },
      {
        "title": "White House Races to Finalize AI Model Rules With OpenAI, Google and Anthropic",
        "site": "TipRanks",
        "url": "https://www.tipranks.com/news/white-house-races-to-finalize-ai-model-rules-with-openai-google-and-anthropic"
      },
      {
        "title": "OpenAI limits new AI models to 'trusted partners' at request of U.S. government",
        "site": "CNBC",
        "url": "https://www.cnbc.com/2026/06/26/openai-limits-new-ai-models-to-trusted-partners-request-us-government.html"
      }
    ]
  },
  "anthropic-claude-chrome-extension-9m-installs-beta-2026": {
    "body": [
      "Anthropic の **Claude for Chrome** 拡張機能が2026年6月時点で **900万インストール** を突破したことが Chrome Web Store の公開数値で明らかになった。7月1日には拡張機能側のアップデートも配信され、**Pro / Max / Team / Enterprise の全有料プラン**でベータ提供が続いている。「AI をブラウザ内に常駐させる」路線として、OpenAI Operator や Perplexity Comet と競合する主力プロダクトの地位を確立した。",
      "**基本機能**: ブラウザ内で Claude が以下を自律的に実行する。",
      "**(1) クリック・フォーム記入**: ユーザーが指示した Web ページで Claude がボタン操作・テキスト入力を代行。",
      "**(2) スケジュールタスク**: 定期的な Web タスク（週次レポートのダウンロード、指定サイトの状態チェック等）を Claude が繰り返し実行。",
      "**(3) タブ横断ワークフロー**: 複数のタブ・サービスを跨いだ処理（例: Salesforce → Slack → Notion への一連の操作）を1つのプロンプトから実行。",
      "**(4) Planning モード**: 複雑なタスクは Claude が事前に計画（サブステップに分解）してから実行、途中で人間が承認・修正できる。",
      "**(5) Claude Code 統合**: [Claude Code](?a=claude-code) との連携で、ブラウザ操作の結果をローカルの開発ワークフローに直接繋げられる。",
      "**(6) ワークフロー記録**: 一度実行した手順を記録し、再利用可能な形で保存できる。ノーコード的な「自分専用の自動化」を蓄積可能。",
      "**なぜ 9M ダウンロードなのか**: Chrome Web Store 数値によれば、Anthropic の Chrome 拡張は他のブラウザ拡張型 AI ツールの中でも急成長を続けている。Anthropic は今回の拡大の背景として、**エンタープライズでの「エージェント常駐」ユースケース**の急拡大を挙げている。",
      "**エンタープライズが Claude for Chrome を選ぶ理由**:",
      "**(1) Privacy 特性**: ChatGPT Operator（OpenAI）と異なり、Anthropic は明確な Enterprise Privacy 保証（顧客データを訓練に使用しない）を提供。",
      "**(2) Claude Code との統合**: 開発者は VSCode / Claude Code とブラウザ拡張を組み合わせ、「PR レビュー中に GitHub UI を Claude が操作」等の高度なワークフローを構築できる。",
      "**(3) WIF 統合**: [Anthropic WIF GA](?a=anthropic-workload-identity-federation-ga-service-accounts-2026) で組織単位のアクセス管理が可能、シャドー IT リスクを抑えつつ導入できる。",
      "**なお beta 継続**: 拡張機能は現時点で **beta 継続**（GA ではない）。The Next Web 系の報道では、Anthropic が慎重に beta を延長している背景として、**エージェント型 AI のセキュリティリスク**（Five Eyes ガイダンス [Five Eyes 分析](?a=five-eyes-agentic-ai-cyber-risk-guidance-2026) が指摘する 5 カテゴリのリスク）を慎重に評価する意図があると推測されている。特に **プロンプトインジェクション経由での予期しないブラウザ操作** への防御は業界全体の課題で、Anthropic も慎重な運用パラメータを持つ。",
      "**競合の位置付け**: **OpenAI Operator**（クラウド仮想デスクトップ経由）、**Perplexity Comet**（Perplexity 独自ブラウザ）、**Anthropic Claude for Chrome**（Chrome 拡張）の3方式が主要選択肢。開発者は各方式の Pros/Cons を理解して選ぶ必要がある。**AI News では今後、3方式の実践比較記事も予定**している。"
    ],
    "primarySources": [
      {
        "title": "Claude for Chrome",
        "site": "Anthropic",
        "url": "https://claude.com/claude-for-chrome"
      },
      {
        "title": "Claude - Chrome Web Store",
        "site": "Chrome Web Store",
        "url": "https://chromewebstore.google.com/detail/claude/fcoeoabgfenejglbffodgkkbkcdhcgfn"
      },
      {
        "title": "Get started with Claude in Chrome",
        "site": "Claude Help Center",
        "url": "https://support.claude.com/en/articles/12012173-get-started-with-claude-in-chrome"
      }
    ]
  },
  "feature-un-global-dialogue-ai-governance-geneva-2026": {
    "body": [
      "**国連初の Global Dialogue on AI Governance** が2026年7月6日、Geneva の **Palexpo International Convention Centre** で開幕。7日までの2日間で開催され、**全 193 UN 加盟国**が参加、私的セクター・市民社会・学術界・技術コミュニティも同席する史上最大級の AI 国際対話となった。次回セッションは **2027年5月に New York** で予定される。",
      "**共同議長**: **Egriselda López**（エルサルバドル）と **Rein Tammsaar**（エストニア）が共同議長を務めた。「大国主導」ではなく、中小国が交渉プロセスを主導するデザインは、国連 AI 政策における「Global South と技術中立国の役割」を象徴する。",
      "**Guterres 事務総長の4つの優先領域**: **António Guterres** 国連事務総長は開会演説で、以下の 4 つの優先領域を提示した。",
      "**(1) 共通安全基準（Common safety standards）**: フロンティア AI モデルのリリース前評価・監査・情報開示の国際標準化。米国 Executive Order 14409 の機密ベンチマーク（[White House 自主基準](?a=white-house-voluntary-frontier-ai-standards-openai-anthropic-google-2026)）や Five Eyes ガイダンス（[Five Eyes 分析](?a=five-eyes-agentic-ai-cyber-risk-guidance-2026)）と接続する。",
      "**(2) 人権レッドライン（Human-rights red lines）**: AI が国際人権法に違反する用途（大量監視・自律殺傷兵器・差別的意思決定）を国際的に禁止する枠組み。UN chief は「killer robots」への懸念を明確に表明。",
      "**(3) キャパシティビルディング（Capacity-building）+ Global Fund for AI**: 途上国が AI 技術・人材・ガバナンスの能力を構築するための **Global Fund for AI**（AI のためのグローバル基金）の設立を提案。米中フロンティア AI 独占への対抗軸として、国際的な技術主権を後押しする。",
      "**(4) AI Environmental Transparency Initiative**: AI モデル訓練・推論の**炭素排出・水消費・エネルギー使用**の情報開示標準化。データセンター展開（[Anthropic-CoreWeave $68億契約](?a=anthropic-coreweave-68b-multiyear-cloud-deal-2026)・[SpaceX-Cursor $60B 買収](?a=spacex-cursor-60b-acquisition-anysphere-2026)）が加速する中で、環境影響の透明性を求める。",
      "**AI for Good サミット連続開催**: Global Dialogue に続いて、**7月7日〜10日**に ITU（国際電気通信連合）主催の **AI for Good Global Summit** が同じく Geneva で開催される。技術者・研究者・NGO・スタートアップが参加し、SDGs（持続可能な開発目標）達成のための AI 応用ユースケースが議論される。",
      "**AI for Good Global Commission 初会合（7/8）**: サミット期間中の **7月8日**、**UN AI for Good Global Commission** の初会合が開催される。これは**AI 企業 CEO 級を国家元首と対等の場で参加させる初の UN 枠組み**として重要。",
      "**共同議長**: Marc Benioff（Salesforce CEO）と Paul Kagame（ルワンダ大統領）",
      "**Commission メンバー**:",
      "**Jensen Huang**（NVIDIA CEO）",
      "**Andy Jassy**（Amazon CEO）",
      "**Brad Smith**（Microsoft President）",
      "**Jack Clark**（Anthropic 共同創業者、Policy Head）",
      "**Aidan Gomez**（Cohere CEO）",
      "この構成は、**AI 業界のパワー中心が UN の政策形成テーブルに直接組み込まれた**ことを意味する。日本代表の参加については開示が確認できていないが、翌年 NY 会合に向けた交渉プロセスに影響する構造となる。",
      "**日本の視点**: 日本は G7 での AI 議論、GENIAC プログラム（[中国モデル特集](?a=feature-china-ai-models-may-2026-qwen-kimi-ernie) で言及）等の枠組みを持つが、**UN Global Dialogue と AI for Good Commission への直接参加体制**は明確化されていない。次回 2027年5月 NY 会合までに、経産省・総務省・外務省の連携で AI 政策の国際的発信力を強化する必要がある。**Sakana AI**（[Sakana Fugu レビュー](?a=sakana-fugu-review)）・**Preferred Networks**・**ELYZA**（[aiCompanies.js](?a=) の日本企業）など、日本発 AI スタートアップの Commission 級への影響力構築も課題。",
      "**フロンティア各社と国際規制の統合フェーズ**: 過去1ヶ月で確認できた「政府と AI 企業の統合」動向を並べると、方向性がより鮮明になる。",
      "**(a) 連邦（White House）**: Executive Order 14409、GPT-5.6 Sol の20組織限定、Fable 5 輸出規制サイクル",
      "**(b) 州（Anthropic × California 協定）**: 50% 割引、DMV/Medicaid/サイバー防御",
      "**(c) 5カ国連合（Five Eyes）**: Agentic AI サイバーリスクガイダンス",
      "**(d) 超国家（UN）**: Global Dialogue + AI for Good Commission",
      "**(e) 産業界株式（OpenAI 5% 出資提示）**: 企業自身が政府に持分を渡す構造",
      "この5層構造の中で、**日本企業・日本政府がどの層で意思決定に参加するか**が、今後の AI 主権における最大の戦略課題となる。",
      "**「発表と同時に国家安全保障の対象」時代の恒常化**: [Fable 5 復活](?a=anthropic-claude-fable-5-return-safeguards-limits-2026) や [GPT-5.6 プレビュー限定](?a=openai-gpt-5-6-sol-terra-luna-preview-2026) で見られた「政府監督付きリリース」のパターンが、UN 枠組みでは**国際的にコーディネート**される可能性が出てきた。開発者・エンタープライズは「**モデル選択 = 米国政府の技術政策選択 + 国際規制の予測**」という2軸の判断が求められる時代に入っていく。"
    ],
    "primarySources": [
      {
        "title": "Global Dialogue on AI Governance",
        "site": "United Nations",
        "url": "https://www.un.org/global-dialogue-ai-governance/en"
      },
      {
        "title": "Secretary-General's remarks to the opening of the first Global Dialogue on Artificial Intelligence Governance",
        "site": "UN Secretary-General",
        "url": "https://www.un.org/sg/en/content/sg/statements/2026-07-06/secretary-generals-remarks-the-opening-of-the-first-global-dialogue-artificial-intelligence-governance-delivered"
      },
      {
        "title": "UN Global Dialogue opens with urgent call for safe and inclusive AI",
        "site": "UNESCO",
        "url": "https://www.unesco.org/en/articles/un-global-dialogue-opens-urgent-call-safe-and-inclusive-ai-benefits-all"
      },
      {
        "title": "From AI to 'killer robots': UN chief issues urgent governance call",
        "site": "UN News",
        "url": "https://news.un.org/en/story/2026/07/1167873"
      }
    ]
  },
  "cve-2026-47729-squidbleed-claude-mythos-project-glasswing-2026": {
    "body": [
      "**Anthropic Claude Mythos Preview** が [Project Glasswing](?a=anthropic-glasswing-expansion-partner-network-services-track-2026) の権限付きセキュリティ監査で、**Squid Proxy の29年前のバグ**を発見したと **Calif.io Security Research** が公表した。**CVE-2026-47729「Squidbleed」**（Heartbleed 型）、**CVSS 7.5**。The Hacker News、SecurityWeek、Slashdot が広く報道した。",
      "**「Squidbleed」の由来と概要**: 命名は 2014年の **Heartbleed**（OpenSSL のメモリリーク）に倣ったもので、同じ原理で内部メモリを漏洩させる。Squid Proxy の**デフォルト設定で有効**な機能に潜んでいる。",
      "**技術詳細**: Squid の **FTP パーサ**が strchr の null terminator チェックなしに動作し、**メモリバッファ境界を超えて読み取る**。読み取り領域には、**以前の別ユーザーの HTTP リクエストデータ**（クリアされていない状態）が含まれる可能性がある。パッチは strchr 呼び出し前に null terminator をチェックするだけの単純な修正。",
      "**29年前のバグ**: バグは **1997年1月のコミット**まで遡る。**3世代の Squid リリース、コードレビュー、独立監査**をすべて生き延びてきた。人間のセキュリティ研究者が29年間見逃したパターンを、**AI モデルが即座に検出した**ことになる。",
      "**発見プロセス**: Calif は **Anthropic Claude Mythos Preview**（Project Glasswing の基盤モデル）に、**strchr の異常挙動を「ほぼ即座に」検出した**功績を明示している。Calif Security Research と Claude Mythos の協業で、脆弱性の再現と概念実証（PoC）まで含めて短期間で完成した。",
      "**攻撃条件**: 誰でも攻撃できるわけではなく、以下 2 つの条件が揃った場合に限定される。",
      "**(1) 信頼されたクライアント**: 既に proxy 経由の利用が許可されているユーザー（学校・オフィス・公衆 Wi-Fi の共有ネットワーク）。",
      "**(2) 攻撃者制御の FTP サーバー**: proxy 経由でアクセス可能な FTP サーバーを攻撃者が制御している必要がある。",
      "**漏洩する情報**: 別ユーザーの **クリアテキスト HTTP リクエスト** の断片。",
      "**(a) HTTP のクレデンシャル**: Basic 認証・独自認証ヘッダ・URL クエリ内のトークン",
      "**(b) セッショントークン**: Cookie 内のセッション ID、認証済み API キー",
      "**(c) HTTP フォーム送信内容**: ログインフォーム、Contact フォーム、決済フォーム（HTTPS 化されていない場合）",
      "**注意**: **通常の HTTPS は影響を受けない**。HTTPS は `CONNECT` トンネル経由で Squid には内部が見えないため。ただし、**TLS 終端型プロキシ**（Squid で HTTPS を復号して検査する構成）は Squid が復号後の平文を扱うため影響を受ける。",
      "**パッチ状況**: 修正パッチは 2026年4月に Squid 8 系にマージ、**2026年6月に 7.6 にバックポート**された。**本 CVE の完全な公式パッチは Squid 7.7**（予定）で提供される。",
      "**暫定的な緩和策**: FTP サポートを使っていない環境では **FTP を明示的に無効化**することで攻撃を回避できる。",
      "**Project Glasswing の意義を裏付け**: [Project Glasswing 拡大記事](?a=anthropic-glasswing-expansion-partner-network-services-track-2026) では「**10,000件超の高/重大セキュリティ脆弱性**」を発見と報じたが、Squidbleed はその中でも **代表事例**として位置付けられる。29年間の見落としを、AI モデルが即座に検出できたことは、フロンティア AI のセキュリティ研究への応用可能性を実証する形となった。",
      "**「Fable 5 復活と過剰ブロック」の複雑な文脈**: 一方で、Anthropic Claude Fable 5 の [復活時の新セーフガード](?a=anthropic-claude-fable-5-return-safeguards-limits-2026) は「オフェンシブサイバーセキュリティ」タスクをブロックする方向に動いている（99% ジェイルブレイクブロック）。**Squidbleed 級の防御目的の脆弱性発見と、攻撃者側の悪用行為の間の線引き**が、今後の AI 政策の主要論点となる。SkillSpector（[SkillSpector 特集](?a=feature-nvidia-skillspector-agent-skill-security-2026)）や WIF（[Anthropic WIF GA](?a=anthropic-workload-identity-federation-ga-service-accounts-2026)）のような「守り側」ツール、Five Eyes ガイダンス（[Five Eyes 分析](?a=five-eyes-agentic-ai-cyber-risk-guidance-2026)）と組み合わせた立体的な防御が現実解となる。",
      "**日本のインフラへの影響**: **Squid は日本国内でも大学・自治体・企業ネットワークで広く運用**されている。特に BYOD ポリシーがない環境や、監視目的の TLS 終端型プロキシを使う組織は、**Squid 7.7 のリリース待ちとせず、7.6 適用と FTP 無効化**を早急に検討すべき。組織の CISO は Five Eyes ガイダンスの (3) 行動リスク・(5) サプライチェーンリスクの観点で、本 CVE への対応を計画すること。"
    ],
    "primarySources": [
      {
        "title": "Squidbleed (CVE-2026-47729)",
        "site": "Calif.io",
        "url": "https://blog.calif.io/p/squidbleed-cve-2026-47729"
      },
      {
        "title": "29-Year-Old Squid Proxy Bug 'Squidbleed' Can Leak Cleartext HTTP Requests",
        "site": "The Hacker News",
        "url": "https://thehackernews.com/2026/06/29-year-old-squid-proxy-bug-squidbleed.html"
      },
      {
        "title": "Decades-Old Squid Proxy Flaw 'Squidbleed' Can Expose User Data",
        "site": "SecurityWeek",
        "url": "https://www.securityweek.com/decades-old-squid-proxy-flaw-squidbleed-can-expose-user-data/"
      },
      {
        "title": "Squidbleed CVE-2026-47729: 29-Year-Old Squid Flaw",
        "site": "IT-Connect",
        "url": "https://www.it-connect.tech/squidbleed-29-year-old-squid-proxy-flaw-leaks-user-credentials/"
      }
    ]
  },
  "anthropic-claude-fable-5-billing-transition-extended-july-12-2026": {
    "body": [
      "Anthropic は2026年**7月6日**、**Claude Fable 5** のサブスクリプション包括アクセス期間を、当初7月7日で終了予定だったところ **7月12日まで5日間延長**すると発表した。BleepingComputer・The New Stack・iwoszapar・TechTimes 系が同日〜7月4日にかけて相次いで報道した。**Anthropic は「使用クレジット制への移行は一時的措置」と明言**しており、capacity（計算資源）が回復し次第、**Fable 5 をサブスクリプションの標準機能に戻す**方針を約束している。",
      "**変更内容の要点**:",
      "**(1) サブスク包括期間の延長**: Pro / Max / Team / 一部 Enterprise プランで **週次使用枠の 50% までを Fable 5 が使える**期間が、**7月7日 → 7月12日**に延長された。",
      "**(2) 7月13日以降は使用クレジット制**: 延長期間が終わる7月13日から、Fable 5 は**サブスクリプション枠外の使用クレジット制**へ移行。継続利用には追加のクレジット購入が必要になる。",
      "**(3) API 料金は据え置き**: API 経由の Fable 5 利用料金は **$10/$50 per 1M tokens**（入力/出力）で不変。6月9日のローンチ時から変更なし。",
      "**(4) 一時的措置**: Anthropic は今回の変更を**「temporary（一時的）」**と明言、**「capacity が回復し次第 Fable 5 をサブスクリプションの標準機能に戻す」**と公式にコミット。",
      "**延長の背景**: 復活後の Fable 5 は [週次50%上限や過剰ブロック懸念](?a=anthropic-claude-fable-5-return-safeguards-limits-2026) など複数の制限を抱え、Pro / Max ユーザー層から強い不満が噴出していた（PCWorld が「Claude subscribers are furious over Fable's new restrictions」と報じたレベル）。今回の5日間延長は、ユーザー側の反発を受けた**サービス側の対応**とみることができる。",
      "**「一時的」の意味**: 「一時的措置」と Anthropic が明言した点は重要。以下 3 つのシグナルが読み取れる。",
      "**(a) capacity 問題が本質**: Fable 5 のインフラ制約（[SpaceX Colossus](?a=anthropic-spacex-colossus-1-compute-deal-2026)・[Anthropic-CoreWeave $68億契約](?a=anthropic-coreweave-68b-multiyear-cloud-deal-2026) 等のインフラ増強でも足りない状況）が背景。",
      "**(b) サブスク復活は約束**: 「戻す」と明言することで、ユーザーの長期契約継続を促す狙い。",
      "**(c) Sonnet 5 への誘導**: 実質的には多くのユーザーを [Sonnet 5](?a=claude-sonnet-5-review)（$2/$10 導入価格）へ誘導し、Fable 5 を最上位限定用途に絞る戦略とも読める。",
      "**影響を受けるユーザー像**:",
      "**(a) Fable 5 を日常利用していた Pro/Max ユーザー**: 7/12 までは今まで通り、7/13 以降は追加費用または他モデルへの切替。",
      "**(b) Team/Enterprise 導入検討中の組織**: 「Fable 5 を含む見積」の妥当性が変動、Sonnet 5 / Opus 4.8 との組み合わせ再計算が必要。",
      "**(c) 開発者・研究者**: バッチ処理や自動化ワークフローで Fable 5 を組み込んでいた場合、フォールバック実装（Opus 4.8 への自動切替）を組んでおくと安定運用。",
      "**代替モデルの選択肢（7/13 以降を見据えて）**:",
      "**Claude Sonnet 5**（$2/$10 導入価格〜8/31、以降 $3/$15）: SWE-bench Pro 63.2%、GDPval-AA v2 で Opus 4.8 超え。日常のエージェント運用ならこれで十分（[Sonnet 5 レビュー](?a=claude-sonnet-5-review)）。",
      "**Claude Opus 4.8**（$5/$25、Fast Mode $10/$50）: SWE-bench Verified 88.6%、Dynamic Workflows で最大1,000並列。フロンティア級性能が必要な場合に。",
      "**Claude Fable 5**（$10/$50、7/13 以降は使用クレジット制）: SWE-bench Verified 95%、Anthropic 史上最強。**「最強を必要とする限定タスク」**にターゲットを絞る前提。",
      "**AI News の推奨戦略**:",
      "**(1) 7/12 までは Fable 5 を活用**: 期限までに、Fable 5 でしかできないタスクを完了させる。",
      "**(2) 7/13 以降のデフォルトを Sonnet 5 に**: 大半のワークフローはこれで十分。$2/$10 の導入価格は 8/31 まで有効。",
      "**(3) Fallback に Opus 4.8 を設定**: Fable 5 の refusal 時（オフェンシブサイバー・生命科学・思考抽出関連、[Fable 5 プロンプト設計ガイド](?a=feature-prompting-claude-fable-5-practical-guide-2026)）に自動的に Opus 4.8 へ切り替える設定を実装。",
      "**(4) 「capacity 回復」を待つポジション**: 「一時的措置」の Anthropic 声明を信じるなら、Fable 5 サブスク復活まで数週間〜数ヶ月の見込み。長期プランは Sonnet 5 + Opus 4.8 + Fable 5（クレジット）の3層構成で柔軟に。",
      "**GPT-5.6 一般公開待ちの選択肢も**: **GPT-5.6 Sol / Terra / Luna**（[GPT-5.6 レビュー](?a=gpt-5-6-review)）は7月中〜下旬に一般公開が見込まれている。特に **Luna（$1/$6）**は「フロンティアモデル最安級」で、Fable 5 課金移行を機に **代替選択肢** として検討する価値がある。ただし米政府事前共有・限定プレビューフェーズが続くため、正式な GA タイミングを見極めた上で移行判断すること。",
      "**Sonnet 5 のトークナイザ変更に注意**: Sonnet 5 は新トークナイザで同じテキストでも **1.0〜1.35 倍**多くトークンを数える傾向がある（[Sonnet 5 レビュー](?a=claude-sonnet-5-review)）。Fable 5 → Sonnet 5 の切替時、単純な単価計算では実コストの読みを誤る可能性があるため、代表的なワークフローで実測してから本番切替すること。"
    ],
    "primarySources": [
      {
        "title": "Claude Fable 5 isn't permanently leaving subscriptions, Anthropic says",
        "site": "BleepingComputer",
        "url": "https://www.bleepingcomputer.com/news/artificial-intelligence/claude-fable-5-isnt-permanently-leaving-subscriptions-anthropic-says/"
      },
      {
        "title": "Anthropic gives Claude subscribers five more days with Fable 5",
        "site": "The New Stack",
        "url": "https://thenewstack.io/anthropic-extends-fable-5/"
      },
      {
        "title": "Fable 5 Included Until July 12: Anthropic Extended It",
        "site": "iwoszapar",
        "url": "https://www.iwoszapar.com/p/fable-5-included-access-extended-july-12"
      },
      {
        "title": "Redeploying Claude Fable 5",
        "site": "Anthropic",
        "url": "https://www.anthropic.com/news/redeploying-fable-5"
      }
    ]
  }
};
export default ARTICLES_BODY;
