/**
 * 記事本文データ（2026-06 掲載分）
 * ── 自動生成: node scripts/split-articles.mjs ──
 * id → { body, tables, figures, charts, primarySources }
 */
const ARTICLES_BODY_2026_06 = {
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
        "headers": [
          "階層",
          "認定取得者",
          "本番運用顧客",
          "公開事例",
          "その他"
        ],
        "rows": [
          [
            "Select",
            "10名以上",
            "2案件",
            "1件",
            "—"
          ],
          [
            "Preferred",
            "100名",
            "15顧客",
            "3件",
            "—"
          ],
          [
            "Global Premier",
            "1,000名",
            "100顧客",
            "15件",
            "3地域以上、エグゼクティブ後援付き JBP"
          ]
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
        "headers": [
          "モデル",
          "種別",
          "主要スペック・ベンチ",
          "提供"
        ],
        "rows": [
          [
            "MAI-Thinking-1",
            "推論",
            "35B active / ~1T 総 sparse MoE、256K ctx、AIME 2025 97.0%、AIME 2026 94.5%、SWE-Pro Opus 4.6 同等",
            "Microsoft Foundry"
          ],
          [
            "MAI-Code-1-Flash",
            "コーディング",
            "5B、Haiku 4.5 を SWE-Pro で +16pt 上回る",
            "GitHub Copilot / VS Code"
          ],
          [
            "MAI-Image-2.5",
            "画像（T2I + I2I）",
            "Microsoft 初の dual workload 対応",
            "Foundry"
          ],
          [
            "MAI-Image-2.5 Flash",
            "画像（高速版）",
            "—",
            "Foundry"
          ],
          [
            "MAI-Transcribe-1.5",
            "STT",
            "43言語、SOTA 級",
            "Foundry / Azure"
          ],
          [
            "MAI-Voice-2",
            "音声生成",
            "15+ 言語追加、新ボイス",
            "Foundry / Azure"
          ],
          [
            "MAI-Voice-2 Flash",
            "音声（高速版）",
            "—",
            "Foundry / Azure"
          ]
        ]
      },
      {
        "afterParagraph": 32,
        "caption": "Build 2026 の主要発表まとめ",
        "headers": [
          "カテゴリ",
          "発表内容",
          "状態"
        ],
        "rows": [
          [
            "モデル",
            "MAI 7モデル一斉投入",
            "本日公開"
          ],
          [
            "エージェント",
            "Scout（autopilot 第一号）",
            "Frontier プログラムプレビュー"
          ],
          [
            "プラットフォーム",
            "Windows Agent Framework",
            "MIT OSS、26H2 標準搭載"
          ],
          [
            "端末",
            "Project Solara（chip-to-cloud）",
            "ウェアラブル + デスクトップ実演"
          ],
          [
            "量子",
            "Majorana 2 量子チップ",
            "発表、qubit 寿命 20秒"
          ],
          [
            "科学",
            "Microsoft Discovery",
            "GA（GSK、BHP 利用中）"
          ],
          [
            "医療",
            "Mayo Clinic 提携",
            "発表"
          ],
          [
            "インフラ",
            "Azure HorizonDB",
            "プレビュー"
          ],
          [
            "インフラ",
            "GPU 高速 Fabric DW",
            "発表"
          ],
          [
            "ハードウェア",
            "Surface RTX Spark Dev Box",
            "発表"
          ]
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
        "headers": [
          "企業",
          "状態",
          "上場時期",
          "評価額",
          "調達額（目標）"
        ],
        "rows": [
          [
            "Cerebras Systems",
            "上場済み",
            "2026/5/14",
            "—（NASDAQ）",
            "$5.5B（実績）"
          ],
          [
            "SpaceX（xAI 統合後）",
            "S-1 公開直前と報道",
            "2026/6/12",
            "$1.75T",
            "$75-80B"
          ],
          [
            "Anthropic",
            "Confidential filing",
            "2026/10 目標",
            "$965B",
            "未公開（Series H で $65B 直近完了）"
          ],
          [
            "OpenAI",
            "上場準備",
            "2026/Q4",
            "—（直近 $852B 評価額）",
            "未公開"
          ]
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
        "headers": [
          "時期",
          "ARR",
          "前期比"
        ],
        "rows": [
          [
            "2025年通年",
            "$10B",
            "—"
          ],
          [
            "2026年3月",
            "$30B",
            "+3.0x"
          ],
          [
            "2026年5月",
            "$47B",
            "+57% (vs 3月)"
          ]
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
        "headers": [
          "項目",
          "内容"
        ],
        "rows": [
          [
            "基盤フレームワーク",
            "OpenClaw（MIT、OSS）"
          ],
          [
            "UI 入口",
            "Microsoft Teams"
          ],
          [
            "接続アプリ",
            "Outlook、OneDrive、SharePoint、Office、Edge ブラウザ"
          ],
          [
            "外部接続",
            "MCP（Model Context Protocol）"
          ],
          [
            "アイデンティティ",
            "Microsoft Entra ID（エージェントごと固有）"
          ],
          [
            "ガバナンス",
            "Policy Conformance System、監査証跡"
          ],
          [
            "前提条件",
            "Intune ポリシー、opt-in attestation、GitHub Copilot ライセンス"
          ],
          [
            "提供範囲",
            "プライベートプレビュー（Frontier プログラム）"
          ]
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
  "gemini-cli": {
    "body": [
      "**Gemini CLI** は Google が開発する **Apache 2.0 のオープンソース AI コーディングエージェント**。**Gemini 3 / 3.5 Flash** を裏側に Google Search grounding と MCP 接続を組み合わせ、Apache 2.0 ライセンスで GitHub 公開されている（star 数は10万級）。2026年6月時点での網羅評価。",
      "【2026年9月30日時点の注記】個人向けの提供形態は、本レビューの公開後に変わっている。Google は2026年5月19日に、6月18日で Gemini CLI（および Gemini Code Assist の IDE 拡張）が Google AI Pro / Ultra 契約者と、Gemini Code Assist for individuals の無料利用者へのリクエスト提供を終了し、消費者向けは Antigravity CLI に移ると発表した。一方、Gemini Code Assist Standard / Enterprise の組織ライセンスと、有料の Gemini API キー・Gemini Enterprise Agent Platform の API キーでの利用は継続すると説明している。geminicli.com の各ページにも同趣旨の告知バナーが出ている。以下の無料枠・認証・連携に関する記述のうち、この変更に反する部分は訂正した。モデルの世代（Flash 系）と、5軸採点は本文の前提が旧いまま残っている。採点は変更していない。",
      "## インストール / 起動",
      "**正しいインストールコマンド（npm 経由）**:",
      "```bash\nnpm install -g @google/gemini-cli           # 安定版\nnpm install -g @google/gemini-cli@preview   # プレビュー版（週次）\nnpm install -g @google/gemini-cli@nightly   # ナイトリー（日次）\n```",
      "**前提**: Node.js **20+**。",
      "**起動**:",
      "```bash\ngemini                            # 対話セッション\ngemini -p \"<指示>\"                # 一発実行 / パイプ\ngemini --sandbox                  # Docker / Podman でサンドボックス実行\n```",
      "**認証**: 認証方式は Google アカウントでのログイン、Gemini API キー（AI Studio）、Vertex AI 認証情報の3種類（公式ドキュメントの分類）。ただし個人の Google アカウント（無料の Gemini Code Assist for individuals、Google AI Pro / Ultra）でのログインによる利用は、Google の発表で2026年6月18日に提供終了となっている。継続が明記されているのは Gemini Code Assist Standard / Enterprise の組織ライセンス、有料の Gemini API キー、Gemini Enterprise Agent Platform（Vertex AI）の API キーである。公式ドキュメントの認証ページには個人アカウントでのログインを推奨と読める記載が残っており、資料間で食い違いがある。ここでは発表と各ページの告知バナーを優先した。",
      "## モデルと無料枠",
      "**Gemini 3.5 Flash（5/19 GA、I/O 2026 で発表）**:",
      "- Terminal-Bench 2.1 で 76.2%、GDPval-AA 1656 Elo、MCP Atlas 83.6%",
      "- Flash クラスの速度（**他社フロンティアの4倍速**）で 3.1 Pro を超える性能",
      "- 出力レイテンシと知能のバランスでフロンティア級",
      "**【2026年9月時点の注記】Flash 系は本レビュー以降に2世代進んでいる。** 2026年9月2日に [Gemini 3.8 Flash が公開](?a=google-gemini-3-8-flash-2026)され、6週間で3世代目の Flash にあたる。価格は 3.7 Flash と同じ100万トークンあたり $0.75 / $3.75 に据え置き（ai.google.dev の料金表ではこれは期間限定の価格で、通常価格は $1.50 / $7.50 と記載されている）のまま、Terminal-Bench 2.1 が 81.6% から 90.8% に上昇したとされる（当サイトの 3.8 Flash 記事の記載）。一方、DeepMind の 3.8 Flash モデルカード（2026年9月時点の結果）は 3.7 Flash 85.8%、3.8 Flash 89.4% と掲載しており、公表値が資料により異なる。いずれも Google 自身の公表値で、独立した検証は確認できていない。CLI 側の既定については、GitHub main ブランチのソース（packages/core/src/config/models.ts）で、Flash 層の基準が gemini-3.5-flash、実験フラグで有効になる最新が gemini-3.8-flash と定義されている（フラグの適用状況はアカウントごとに異なりうる。また main の内容であり、安定版 v0.62.0 と同一とは限らない）。公式ドキュメントの /model の説明は Auto (Gemini 3) を gemini-3-pro-preview と gemini-3-flash-preview と記載しており、3.5 以降の Flash には触れていない。本レビューの以下の記述は 3.5 系を前提にしている。",
      "**Gemini 3.5 Pro は GA が遅れている**。6月版で「翌月リリース予定」としていたが、**8月時点でも Vertex AI 限定プレビューのまま**である。Pichai は6月に「もう1ヶ月待ってほしい」と述べ、その後**コーディング性能が社内目標に届いていない**ことが遅延理由として報じられた（発表を受け Alphabet 株は3%下落）。Deep Think と 2M コンテキストを備えるとされるが、**本稿執筆時点で一般提供の時期は確定していない**（[→ GA 延期続報](?a=google-gemini-3-5-pro-ga-delay-deep-think-2026)、[→ 遅延の分析](?a=feature-google-gemini-3-5-pro-delay-coding-performance-2026)）。",
      "**実務上の含意**: Gemini CLI で当面前提にすべきは **3.5 Flash** である。Flash クラスとしては強力だが、**エージェント的なコーディングで Opus 5 / GPT-5.6 Sol クラスと正面から比較する段階には至っていない**。Pro 世代の投入を待って採用判断する選択肢もある。",
      "**無料枠**: Google アカウントでのログインによる無料枠（1日1,000リクエスト）は、Google の発表で2026年6月18日に個人向けの提供が終了するとされた。公式の Quotas and pricing ページには、これとは別に Gemini API キー（未課金）の1日250リクエスト・Flash モデルのみ、Vertex AI Express Mode（課金の有効化まで90日）の無料利用が記載されているが、発表が継続を明記しているのは有料の API キーであり、バナーは「Unpaid tier」の置き換えと述べているため、これらが現在も使えるかは資料間で食い違う。有料側の1日あたり上限は、Gemini Code Assist Standard が1,500、Enterprise が2,000リクエスト。API キーと Vertex AI の従量課金は tier により異なる。同ページの表には Google AI Pro 1,500 / AI Ultra 2,000 の行も残っているが、発表では AI Pro / Ultra は6月18日で提供終了とされており、ページ内でも食い違っている。Pro モデルは2026年3月25日以降は有料サブスクリプション限定とされていた（Google AI Pro は月額 $19.99、AI Ultra は月額 $99.99 から。gemini.google/subscriptions の現行表示）。ただし、AI Pro / Ultra のログインによる CLI 利用自体が6月18日に終了している（上記）。",
      "## 主要機能",
      "### 組み込みツール",
      "- ファイル read / write / edit",
      "- シェル実行",
      "- **Google Search grounding**（検索結果を根拠にした回答）",
      "- Web fetch",
      "- **MCP 接続**（任意の Model Context Protocol サーバを追加可能、DB / 内部 API / デザインシステム等）",
      "### サンドボックスモード",
      "**Docker / Podman でコンテナ隔離実行**。すべてのファイル変更とシェルコマンドはユーザーの明示的承認を要求。Linux / macOS / Windows 対応。",
      "### Plan Mode（v0.29.0 で導入、v0.34.0 から既定で有効）",
      "変更実行前に計画を提示し、ユーザー承認後に実装。Anthropic Plan Mode、Cursor の Composer プレビューに相当。",
      "### サブエージェントアーキテクチャ",
      "ローカル実行、ツール分離、動的フィルタリング機能を備え、長時間タスクを段階的に分解実行。",
      "### Antigravity 2.0 連携（5/19 I/O 2026）",
      "Google の新エージェント基盤 **Antigravity 2.0** は Antigravity の新しいデスクトップアプリで、Antigravity CLI と同じ agent harness を共有する。Google は同日（5/19）に、Antigravity への取り組みの統合を発表し、Gemini CLI の個人向け提供は Antigravity CLI（Go 製）へ移行するとした。Antigravity CLI は Agent Skills・Hooks・Subagents・Extensions（Antigravity plugins）を引き継ぐとされるが、機能が1対1で同等ではないと Google 自身が説明している。なお Gemini API 側には Antigravity Agent（マネージドエージェント）が提供されている（ai.google.dev の changelog）が、Gemini CLI がそのまま Managed Agents として動作するという記述は、公式資料では確認できていない。OpenAI Workspace Agents / Anthropic Claude Managed Agents に相当する Google 側の答え。",
      "### Gemini Spark 連携（5/19 発表、ベータ）",
      "Gemini 3.5 を基盤としたパーソナルエージェント Spark との接続。AI Ultra 加入者向けにベータ提供。",
      "## 評価",
      "**強み**: Apache 2.0 で完全 OSS、Google エコシステム（Vertex AI、Firebase、Cloud Run、Google Workspace、Google Search grounding）とのネイティブ統合、Flash クラスの低レイテンシ。個人向けの Google ログイン無料枠は6月18日に終了している（上記参照）。Antigravity 2.0 と Gemini Spark の登場で「単なる CLI」から「Google エージェント基盤への入口」へと位置付けが変化。",
      "**注意点**: エージェント機能の成熟度では Claude Code（agent view + Dynamic Workflows）や Cursor（Agents Window）にまだ及ばない場面がある。**プライバシー設定が CLI 内に存在しない**点は企業利用で課題（GDPR 対応に関するコミュニティ懸念が GitHub Issue #1489 等で続いている）。Vertex AI 経由なら統制可能。",
      "**最大の不確実性はモデル側にある**: Gemini 3.5 Pro の GA 遅延により、**CLI の性能上限が Flash クラスに据え置かれた状態が続いている**。CLI 自体の設計（OSS・サンドボックス・MCP・Plan Mode）は堅実だが、コーディング性能で他社フロンティアと競うには Pro 世代の投入が前提になる。**8月時点では「OSS 性を活かした補助的な用途」（個人向けの無料枠は6月18日で終了）に位置付けるのが現実的**で、主力の採用判断は Pro の GA を見てからで遅くない。",
      "**関連記事**: [Gemini 3.5 Pro GA 延期](?a=google-gemini-3-5-pro-ga-delay-deep-think-2026)、[遅延の分析](?a=feature-google-gemini-3-5-pro-delay-coding-performance-2026)、[Gemini CLI v0.35.0 詳細](?a=gemini-cli-v035)、[CLI 横断比較](?a=cli-tools-comparison-2026-march)、[セキュリティ設定比較](?a=ai-tool-security-settings-comparison-2026)。",
      "---",
      "**編集履歴**",
      "【訂正 2026-08-11】「Gemini 3.5 Pro: 翌月リリース予定（テスト中）」という記述を訂正しました。**8月時点でも Vertex AI 限定プレビューのままで、一般提供の時期は確定していません。** コーディング性能が社内目標に届いていないことが遅延理由として報じられています。",
      "【追記 2026-08-11】月次見直しにより更新。Pro 世代の GA 遅延がツールの位置付けに与える影響（性能上限が Flash クラスに据え置かれている点）を評価に追加しました。",
      "【追記 2026-09-20】**本レビューが、Flash 系の2世代ぶんの更新（3.8 Flash まで）に触れていなかった**ため、該当箇所に注記を追加しました。当サイトは9月8日にこの公開を報じています。なお `ai.google.dev` には本稿更新時点で調査環境から到達できなかったため、CLI が既定で用いるモデル世代の確認は行えておらず、5軸採点と `lastReviewed` は変更していません。",
      "【訂正 2026-09-30】（誤）Flash モデルは1日1,000リクエストまで無料 →（正）Google ログインによる個人向けの無料枠は、Google の発表で2026年6月18日に終了するとされた。AI Pro / Ultra 契約でのログイン利用も同日に終了。公式 Quotas and pricing ページには未課金 API キー（1日250リクエスト・Flash のみ）と Vertex AI Express Mode の無料利用が残っているが、発表とバナーとの関係は資料間で食い違う。認証・強み・評価の該当箇所と概要（excerpt）もあわせて訂正した。",
      "【訂正 2026-09-30】（誤）Managed Agents として Gemini CLI が動作 →（正）該当の記述は公式資料で確認できていないため置き換えた。Gemini API 側に Antigravity Agent（マネージドエージェント）があることは確認済み。",
      "【追記 2026-09-30】Antigravity 2.0 は Antigravity のデスクトップアプリで、Antigravity CLI と同じ agent harness を共有する。Google は Gemini CLI の個人向け提供を Antigravity CLI に移行するとした（当事者の発表）。",
      "【訂正 2026-09-30】（誤）Plan Mode（v0.35.0+）→（正）Plan Mode は v0.29.0（2026-02-17）で導入、v0.34.0（2026-03-17）から既定で有効（公式リリースノートによる）。調査用サブエージェントなどの拡張は v0.33.0（2026-03-11）の項目。",
      "【追記 2026-09-30】月次見直しにより、次世代の Flash が出ていることを確認した。ai.google.dev のモデル一覧では Gemini 3.8 Flash（gemini-3.8-flash、2026年9月）が Stable、3.7 Flash と 3.6 Flash が前世代、3.5 Flash は legacy と表示されている。Pro 系は Gemini 3.1 Pro が Preview のままで、Gemini 3.5 Pro は ai.google.dev のモデル一覧・料金表・changelog のいずれにも掲載が見つからなかった（Vertex AI 側の記述は本稿では確認できていない）。GitHub main のソースは Flash の基準を 3.5 Flash、実験フラグ経由の最新を 3.8 Flash としており、Gemini CLI の既定モデルは本稿では確定できない。本レビューのモデル・ベンチマーク・料金の記述は3.5 Flash 世代を前提としたままで、5軸採点も変更していない。安定版は npm 上で v0.62.0（2026年9月29日公開）だが、公式ドキュメントの Stable 表示は v0.61.0 で、公開時点が異なる。",
      "【追記 2026-09-30】Gemini CLI の中身に関する確認結果。サンドボックスは Docker / Podman のほか、macOS Seatbelt、Windows Native Sandbox、gVisor（runsc）、LXC（実験的）が公式ドキュメントに記載されている。Node.js 20 以上、npm の stable / preview / nightly、Apache 2.0 は現行のドキュメント・README と一致した。"
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
      },
      {
        "title": "An important update: Transitioning Gemini CLI to Antigravity CLI",
        "site": "Google Developers Blog",
        "url": "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli"
      },
      {
        "title": "Gemini CLI: Quotas and pricing",
        "site": "Gemini CLI Docs",
        "url": "https://geminicli.com/docs/resources/quota-and-pricing"
      },
      {
        "title": "Gemini Developer API pricing",
        "site": "Google AI for Developers",
        "url": "https://ai.google.dev/gemini-api/docs/pricing"
      },
      {
        "title": "Gemini 3.8 Flash model card",
        "site": "Google DeepMind",
        "url": "https://deepmind.google/models/model-cards/gemini-3-8-flash/"
      },
      {
        "title": "gemini-cli packages/core/src/config/models.ts",
        "site": "GitHub (raw)",
        "url": "https://raw.githubusercontent.com/google-gemini/gemini-cli/main/packages/core/src/config/models.ts"
      }
    ]
  },
  "openai-codex-agent": {
    "body": [
      "**OpenAI Codex** は **クラウド版（ChatGPT 経由）と CLI 版（Codex CLI）** の2形態で提供される OpenAI のコーディングエージェント。2026年6月時点で **4M+ アクティブユーザー、基盤モデルは GPT-5.5**（4/23 リリース）。本レビューの初版は2026年6月時点の網羅評価で、以降の月次見直しで更新している。2026年9月30日時点で、Codex CLI の既定モデル（同梱カタログ）かつ公式の推奨は GPT-6.1 Sol である。",
      "2026年9月30日時点の提供面は次のとおりである。ChatGPT デスクトップアプリ内の Codex（Codex アプリは7月9日に ChatGPT デスクトップアプリへ統合され、Chat・Work と並ぶ表示として残った。macOS と Windows で提供され、Linux は8月にプレビューが始まった）、Codex CLI、IDE 拡張、Codex Cloud（ChatGPT の Web またはデスクトップアプリから開始し、Web・モバイル・デスクトップで続けられる）、ChatGPT のモバイルアプリからの Remote 接続。非コーディング業務向けの ChatGPT Work は Codex と同じ使用枠・クレジットを共有する。以上は公式ドキュメント（learn.chatgpt.com）による。",
      "中核機能の確認: Codex という製品名と、CLI・IDE 拡張・クラウドという提供面に、提供終了になったものは確認できなかった。入れ替わったのはモデルである。既定・推奨モデルは GPT-5.5 から GPT-5.6、さらに GPT-6 世代へ移った（GPT-6 Sol と Luna は9月22日、GPT-6.1 Sol は9月29日に Codex へ）。GPT-5.4 は8月31日、GPT-5.3-Codex-Spark は9月14日に ChatGPT サインインの Codex から退役済みで、GPT-5.5 は10月14日に ChatGPT・Work・Codex から退役する予定である（API は対象外）。",
      "## インストール / 起動（Codex CLI）",
      "**インストール（複数経路）**:",
      "```bash\n# macOS / Linux（推奨）\ncurl -fsSL https://chatgpt.com/codex/install.sh | sh\n\n# Windows PowerShell\npowershell -ExecutionPolicy ByPass -c \"irm https://chatgpt.com/codex/install.ps1 | iex\"\n\n# npm 経由（npm パッケージの engines は Node.js 16 以上）\nnpm install -g @openai/codex\n\n# Homebrew\nbrew install --cask codex\n```",
      "curl や PowerShell の1行インストールは、ダウンロードしたスクリプトをそのまま実行する形式である。上の URL（chatgpt.com/codex/install.sh と install.ps1）は公式ドキュメント（learn.chatgpt.com の CLI ページ）に載っているものだが、実行前に先に curl -fsSL で保存して中身を読み、問題がなければ実行する方法もある。npm と Homebrew も同じ公式ドキュメントに載っている。",
      "**起動コマンド**:",
      "```bash\ncodex                      # 対話セッション開始\ncodex \"<指示>\"             # ワンショット\ncodex --model gpt-6.1-sol  # モデル指定\ncodex exec \"<指示>\"       # 非対話実行（CI・スクリプト用）\n```",
      "**認証**: 初回起動時に ChatGPT アカウント / OpenAI API キーでサインイン。",
      "## 中核機能",
      "### 基盤モデル: CLI の既定は GPT-6.1 Sol（2026年9月30日時点。GPT-5.5 は4/23 リリース）",
      "2026年9月30日時点で、公式モデルページは複雑な作業に GPT-6.1 Sol、繰り返しの作業に Luna を勧め（カードは Astra・GPT-6.1 Sol・GPT-6 Luna）、Codex CLI 0.159.1（9月29日）は GPT-6.1 Sol を同梱カタログの既定モデルにした。GPT-6.1 Sol は Plus・Pro・Business・Enterprise・Edu でロールアウト中で、Free / Go は launch 時点で対象外、Enterprise / Edu は管理者が有効にするまでオフである。以下は GPT-5.6 世代についての7〜8月時点の記述である。[GPT-5.6](?a=gpt-5-6-review)（7/9 一般公開）は公式モデルページ上「ロールアウト中は引き続き利用できる」とされるが、推奨モデルの一覧には載っていない。**Sol / Terra / Luna** の3バリアント構成で、Sol が最上位、Terra が汎用、Luna が軽量。TerminalBench 2.1 で Sol が 91.91% を記録した。**7/30 に投入から3週間で値下げ**され、Luna は80%引き下げて $0.20/$1.20、Terra は20%引き下げて $2/$12 になった（[→ 詳細](?a=openai-gpt-5-6-luna-terra-price-cut-2026)）。ChatGPT のチャットでは Free / Go の既定モデルが GPT-5.6 Luna とされている（公式 What's new の8月3〜7日の項）。Codex の Free / Go は現在デスクトップアプリで GPT-6 Luna が使える（公式料金ページ）。無料枠の無制限化は Codex の公式ドキュメントでは確認できていない（[→ 当サイトの記事](?a=openai-chatgpt-free-unlimited-luna-sol-update-2026)）。",
      "**Daybreak**（Trusted Access for Cyber の承認が必要）は8月10日から Daybreak Blue（GPT-5.6 Sol など汎用モデルを防御用途に使う）と Daybreak Red（別途承認、GPT-5.6 Cyber など専用モデル）の2段階になり、Codex の料金ページにも Blue / Red のクレジット単価が載っている。",
      "### クラウド並列実行が最大の武器",
      "複数のタスクを同時に Codex に投げると、それぞれが**独立したクラウドサンドボックス**で並列実行される。「機能 A の実装」と「機能 B のテスト作成」を同時に依頼し、それぞれ別の **Pull Request として返ってくる**ワークフロー。「バグ修正10件を朝一でまとめて投入、昼までに全 PR が揃う」運用が可能。",
      "### Codex CLI（ローカル実行）",
      "クラウド版とは別に **ローカルマシンで動作する CLI 版**もある。`codex` コマンドで対話セッション、非対話実行は `codex exec`（CI・スクリプト向け）、`--sandbox` でサンドボックス実行。**Claude Code や Cursor CLI と直接競合する位置付け**。",
      "### Codex Security（3月リリース、5/11 Daybreak で拡張）",
      "コードベース特有の**脅威モデルを構築**し、現実的な攻撃経路を検査、隔離環境で問題を検証、レビュー用のパッチを提案。現在の Codex Security は、デスクトップアプリの Security ワークベンチとローカルのプラグイン、CLI と TypeScript SDK（npm パッケージ @openai/codex-security）、GitHub リポジトリを対象にする Codex Security Cloud（研究プレビュー）、PR を解析する Security Review（研究プレビュー、Plus は対象外）に広がっている（公式ドキュメント）。",
      "### Workspace Agents との連動（4/22）",
      "OpenAI Workspace Agents が **Codex で動作する**ため、Codex CLI / クラウド版で書いたエージェントを Slack / Salesforce / Notion 等の SaaS 上から呼び出せる。",
      "### MCP / GitHub 統合 / 関数呼び出し",
      "MCP プロトコルでの外部接続、GitHub PR・Issue 連携、Structured Outputs、リアルタイム音声入力にも対応。",
      "## 料金プラン",
      "## 評価",
      "**強み**: クラウド並列実行モデルは Claude Code / Cursor の「ローカル並列」アプローチと差別化。**Pull Request ベースの非同期ワークフロー**に強く、チーム開発での「並列投入 → レビュー → マージ」が自然。**4M+ アクティブユーザー**で実績は十分。6月版では GPT-5.5 の「半額で SOTA」というコスパを強みに挙げていた。GPT-5.5 は Codex（ChatGPT サインイン）で2026年10月14日に退役する予定で、現在の推奨は GPT-6.1 Sol（API 価格 $2/$10）など GPT-6 世代である。コスパの再評価は行っていない。",
      "**注意点**: クラウド実行のため、機微データを扱う場合は**Business / Enterprise プラン + データ越境設定**が必要。Codex CLI（ローカル版）の機能成熟度は Claude Code に比べてまだ追いついていない部分がある。**4月2日に課金がメッセージ単位から API トークン相当のクレジット制に変わった**ため、定額プランの月額だけでは実効コストを見積もれない。ヘビーな並列投入は月 $100〜200 相当に達しうる。",
      "**参入障壁は大きく下がった**: 6月版では「ChatGPT Pro $200/月のハードルが個人開発者には高い」と評価したが、**現在 Codex は ChatGPT Free / Go $8 / Plus $20 / Pro / Business のいずれでも利用できる**。ただし Free / Go で使えるのはデスクトップアプリ（GPT-6 Luna、ロールアウトに依存）で、Web・CLI・IDE 拡張・iOS は Plus 以上の項目に載っている（公式料金ページ）。Pro は $100 / $200 / $500 の3段階になっている。",
      "**Claude Code との使い分け**: Codex はクラウド × PR ベースの非同期、Claude Code はローカル × IDE/CLI 中心の対話的編集 + agent view でローカル並列。両者を[併用するマルチエージェント構成](?a=claude-code-codex-multi-agent-2026)が実用化されている。",
      "**関連記事**: [GPT-5.6 一般公開](?a=openai-gpt-5-6-general-availability-july-9-2026)、[GPT-5.6 レビュー](?a=gpt-5-6-review)、[GPT-5.6 値下げ](?a=openai-gpt-5-6-luna-terra-price-cut-2026)、[Codex Micro（ハードウェア）](?a=openai-codex-micro-work-louder-hardware-macropad-2026)、[Workspace Agents](?a=openai-workspace-agents-codex-enterprise-2026)、[Codex プラグイン公開](?a=openai-codex-plugin-cc-claude-code-2026)、[CLI 横断比較](?a=cli-tools-comparison-2026-march)。",
      "---",
      "**編集履歴**",
      "【訂正 2026-08-11】料金表および評価から「ChatGPT Pro $200/月が事実上の前提」という趣旨の記述を訂正しました。現在 Codex は ChatGPT Free / Go $8 / Plus $20 / Pro / Business のいずれでも利用できます。",
      "【追記 2026-08-11】月次見直しにより更新。(1) 基盤モデルを GPT-5.5 から [GPT-5.6](?a=gpt-5-6-review)（Sol / Terra / Luna、7/9 GA）に更新し、7/31 の値下げを反映、(2) 4/2 のクレジット制移行と、それによって月額だけでは実効コストを見積もれなくなった点を注意点に追加、(3) 現行の料金プラン表に更新、(4) [Codex Micro](?a=openai-codex-micro-work-louder-hardware-macropad-2026)（初のハードウェア製品）を関連記事に追加しました。",
      "【訂正 2026-09-30】（誤）`-p` フラグでパイプ・スクリプト利用、`codex --headless` でヘッドレス（CI 用） →（正）非対話実行は `codex exec`。`-p` は `--profile` の短縮形で、`--headless` は Codex CLI ではなく Codex Security CLI のフラグである（公式 CLI リファレンス）。",
      "【訂正 2026-09-30】（誤）npm 経由のインストールは Node.js 22+ 必須 →（正）npm パッケージのメタデータ上の要件は Node.js 16 以上である。標準インストーラと Homebrew（`brew install --cask codex`）も公式ドキュメントにある。",
      "【訂正 2026-09-30】（誤）GPT-5.6 が標準モデル →（正）2026年9月30日時点の CLI 既定（同梱カタログ）かつ公式の推奨は GPT-6.1 Sol（9月29日、Plus 以上でロールアウト中）。GPT-5.6 は当時の標準だった。",
      "【訂正 2026-09-30】（誤）Free / Go は CLI・IDE 拡張・Web・iOS で Codex を使える →（正）公式料金ページは Free / Go の内容をデスクトップアプリの GPT-6 Luna（Standard 速度、ロールアウトに依存）とし、Web・CLI・IDE 拡張・iOS は Plus 以上の項目に載せている。料金表の「8月に無料枠が無制限化」も、Codex の公式ドキュメントでは確認できていない。",
      "【訂正 2026-09-30】（誤）Daybreak は5/7・5/11、3層構造（GPT-5.5 標準 / Trusted Access 検証 / GPT-5.5-Cyber）、対応モデルは GPT-5.5-Cyber →（正）8月10日から Daybreak Blue と Daybreak Red の2段階で、専用モデルは GPT-5.6 Cyber である（公式 changelog 2026-08-10）。5月の日付は今回確認できていない。",
      "【訂正 2026-09-30】（誤）Luna と Terra の値下げは7/31 →（正）7/30。OpenAI の API changelog と Codex の What's new がいずれも7月30日としている。",
      "【追記 2026-09-30】月次見直しにより更新。使用枠と料金の現況（公式料金ページ）: Plus と Standard Business のローカルメッセージ目安は5時間あたり GPT-6.1 Sol が15〜160、GPT-6 Sol が15〜150、GPT-6 Luna が350〜3,000、GPT-6 Astra が5〜45で、固定の上限ではない。Fast モードは含まれる使用枠を2.5倍、購入クレジットを2倍消費する。GPT-6 Astra の Ultrafast は Pro $500 と対象の Enterprise / Edu で使え、含まれる使用枠を8倍、購入クレジットを6倍消費する。クレジット単価（100万トークンあたり）は GPT-6.1 Sol が入力50・出力250、GPT-6 Luna が入力2.5・出力12.5、GPT-6 Astra が入力250・出力1,250である。",
      "【追記 2026-09-30】機能と CLI の動き（公式 changelog と What's new）: 環境を公開して再利用できる Codex Cloud の環境（各タスクは隔離された作業領域で開始）、研究プレビューの Codex Security Cloud、Astra Ultrafast が9月29日前後に案内された。CLI は 0.147.0（8月上旬）で Agent Plugins と `--approve-for-me`、8月11日に Claude Code・Cursor からの `/import`、0.156.0（9月22日）で音声会話と `/usage`、0.159.1（9月29日）で GPT-6.1 Sol の既定化が入った。npm の最新は 0.159.2 である。",
      "【追記 2026-09-30】今回確認できなかった点: 4M+ アクティブユーザー（6月時点として記載）、Workspace Agents が Codex で動くこと、4月2日の課金方式変更の日付、Pro の並列枠の倍率、Enterprise の SOC 2、Codex Security の3月リリースは、当サイトの記載のままである。openai.com と help.openai.com には調査環境から到達できなかった（platform.openai.com は developers.openai.com に転送され読める）。本稿の★は変更していない。"
    ],
    "tables": [
      {
        "afterParagraph": 24,
        "caption": "Codex を含む ChatGPT プラン（2026年9月30日時点）",
        "headers": [
          "プラン",
          "月額",
          "内容"
        ],
        "rows": [
          [
            "ChatGPT Free",
            "$0",
            "デスクトップアプリで GPT-6 Luna（Standard 速度）が使える。提供はロールアウトに依存（公式料金ページ）"
          ],
          [
            "ChatGPT Go",
            "$8",
            "低価格帯。Free と同じ内容（デスクトップアプリで GPT-6 Luna、ロールアウトに依存）"
          ],
          [
            "ChatGPT Plus",
            "$20",
            "Web・CLI・IDE 拡張・iOS で利用。GPT-6.1 Sol・GPT-6 Sol・GPT-6 Luna。ChatGPT クレジットで追加購入可。個人開発者の実用ライン"
          ],
          [
            "ChatGPT Pro",
            "$100 / $200 / $500",
            "Plus の内容に加え、5時間あたりの上限が現時点で無い（公式 FAQ）。Astra Ultrafast は Pro $500 が対象。並列実行枠の倍率（旧版の「Plus の5倍 / 20倍」）は今回確認できていない"
          ],
          [
            "ChatGPT Business",
            "$20（年払・2席以上）/ $25（月払） per seat",
            "組織管理。SAML SSO・MFA、クレジットで追加購入可、クラウド用の大きい VM"
          ],
          [
            "ChatGPT Enterprise / Edu",
            "カスタム",
            "SCIM・EKM・RBAC・Compliance API による監査ログ・データ保持と所在地の制御・優先処理（公式料金ページ）。旧版の「SOC 2」は今回公式ページで確認できていない"
          ],
          [
            "Codex（API キー）",
            "—",
            "使えるモデルは API キーで使えるモデルに従い、API 価格の従量課金。272K トークンまでの入力で GPT-6.1 Sol $2/$10、GPT-6 Sol $2/$10、GPT-6 Luna $0.10/$0.50、GPT-6 Astra $10/$50。旧世代の GPT-5.6 は Terra $2/$12、Luna $0.20/$1.20、Sol $4/$20（プロモーション価格）。GitHub コードレビューや Slack などクラウド機能は使えない"
          ]
        ]
      }
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
      },
      {
        "title": "Pricing | Codex",
        "site": "OpenAI ChatGPT Learn",
        "url": "https://learn.chatgpt.com/docs/pricing"
      },
      {
        "title": "Models | Codex",
        "site": "OpenAI ChatGPT Learn",
        "url": "https://learn.chatgpt.com/docs/models"
      },
      {
        "title": "ChatGPT & Codex changelog",
        "site": "OpenAI ChatGPT Learn",
        "url": "https://learn.chatgpt.com/docs/changelog"
      },
      {
        "title": "What's new | ChatGPT Learn",
        "site": "OpenAI ChatGPT Learn",
        "url": "https://learn.chatgpt.com/docs/whats-new"
      },
      {
        "title": "Codex Cloud",
        "site": "OpenAI ChatGPT Learn",
        "url": "https://learn.chatgpt.com/docs/cloud"
      },
      {
        "title": "Pricing | OpenAI API",
        "site": "OpenAI Developers",
        "url": "https://developers.openai.com/api/docs/pricing"
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
      "**関連情報**: ニュース記事の [Claude Design 公開](?a=anthropic-claude-design-labs-figma-challenge-2026) も参照。",
      "【追記 2026-10-03】提供形態が変わった。Claude のヘルプセンターによると、Claude Design は現在アーティファクトのテンプレートの1つとして、どの会話からでも使え（メッセージ欄の Output > Design からも選べる）、Artifacts タブ、Claude Code（`/design` で作成・編集・同期、`/design-sync` でデザインシステムの取り込み）、iOS / Android の Claude アプリからも依頼できる。提供は Pro / Max / Team / Enterprise の各プランでの**ベータ**で、Pro・Max・Team では既定で有効、Enterprise では管理者が組織設定で有効にするまで無効。単体の claude.ai/design も引き続き使える。公式の製品ページは、Claude Design で作ったものはプランの利用上限に数えられるとしている。",
      "【追記 2026-10-03】本記事のタイトルと本文にある基盤モデル（Opus 4.7 / 4.8）は2026年6月時点の記述である。なお、4月17日の公式発表が基盤モデルとして挙げているのは Claude Opus 4.7 である。Opus はその後 Opus 5（7月24日）、Opus 5.5（9月22日）と世代が進んでいる。現在の Claude Design がどのモデルで動いているかは、公式のヘルプと製品ページに記載が無く、確認できていない。現行世代については [Claude Opus 5.5 レビュー](?a=claude-opus-5-5-review) を参照。評価（★）は2026年6月時点のまま据え置いている。"
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
      "【追記 2026-09-30】本文の「v2.1.139+」「Opus 4.8 対応版」は執筆時点（2026年6月）の記述である。2026年9月30日時点の最新版は v2.1.285（9/29）で、既定モデルは Opus 5.5 に変わっている（「モデル」節と末尾の編集履歴を参照）。★評価と「評価」節は Opus 5 世代までの内容に基づいており、Opus 5.5 世代での再採点は行っていない。",
      "## インストールコマンド（公式、複数経路）",
      "**ネイティブインストール（推奨、自動更新あり）**:",
      "```bash\n# macOS / Linux / WSL\ncurl -fsSL https://claude.ai/install.sh | bash\n\n# Windows PowerShell\nirm https://claude.ai/install.ps1 | iex\n\n# Windows CMD\ncurl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd\n```",
      "**パッケージマネージャ**:",
      "```bash\nbrew install --cask claude-code           # 安定版（1週遅れ）\nbrew install --cask claude-code@latest    # 最新版\nwinget install Anthropic.ClaudeCode       # Windows\n# Linux: apt / dnf / apk にも対応（Debian, Fedora, RHEL, Alpine）\n```",
      "**起動コマンド**: プロジェクトディレクトリで `cd your-project && claude` で対話セッション開始。初回はブラウザログインを求められる。",
      "## 各サーフェスへのインストール",
      "- **VS Code**: マーケットプレイスで「Claude Code」を検索 → 拡張インストール → `Cmd+Shift+P` → \"Claude Code: Open in New Tab\"。インラインの diff 表示、@ メンション、計画レビュー、会話履歴が IDE 内で完結",
      "- **JetBrains**（IntelliJ / PyCharm / WebStorm 等）: JetBrains Marketplace から「Claude Code」プラグインをインストールして IDE 再起動（プラグインとは別に Claude Code CLI のインストールが必要）",
      "- **デスクトップアプリ**: macOS（Intel / Apple Silicon）/ Windows（x64 / ARM64）/ Ubuntu・Debian（ベータ、apt で導入）の DMG / Setup を [claude.ai/api/desktop](https://claude.ai/api/desktop/) から入手。並列セッション、ビジュアル diff、スケジュール、クラウドセッション",
      "- **Web**: [claude.ai/code](https://claude.ai/code) にアクセスするだけ。ローカル環境なしで長時間タスクを起動",
      "- **iOS アプリ**: App Store「Claude by Anthropic」（公式ドキュメント上、Claude のモバイルアプリは iOS と Android に対応）",
      "## CLI 主要コマンド・フラグ",
      "上の表は 2026-09-30 に公式の CLI リファレンスに基づいて差し替えた。差し替え前の表には、公式の CLI リファレンスに載っていない claude --headless の行があった。UI なしの実行は claude -p（表の3行目）を使う。差し替え前の表は claude \"<指示>\" を「一発指示モード」としていたが、実際は一発実行ではなく、最初の指示を渡して対話セッションを開始するもので、一発実行は -p である。/model については、Anthropic API ではエイリアス opus / sonnet / fable / haiku がそれぞれ Opus 5.5 / Sonnet 5.5 / Fable 5.1 / Haiku 4.5 を指し、旧モデルはモデル ID（例: claude-opus-5）で指定する。Amazon Bedrock や Microsoft Foundry ではエイリアスの解決先が異なる（例: Bedrock の sonnet は Sonnet 4.5）。",
      "## 中核機能の全体像",
      "### モデル",
      "2026年9月30日時点の公式ドキュメントでは、既定モデル（default）は Pro・Max・Team・Enterprise・Anthropic API のいずれでも Claude Opus 5.5（9/22 投入、Claude Code v2.1.280 以降、1M コンテキスト、API 料金 $4/$20）である。v2.1.280 より前は、Pro と Team Standard の既定が Sonnet、Max・Team Premium・Enterprise・API の既定が [Claude Opus 5](?a=claude-opus-5-review)（7/24 投入、$5/$25）だった。タスクごとに思考量を選べる effort は、対応モデルでは low / medium / high / xhigh / max の5段階で、Opus 5.5 と Sonnet 5.5 の既定は medium である。モデルを切り替えずにコストと能力を調整できる点は変わらない。Opus 5 は API 側ではレガシーモデル扱いだが、明示すれば選べる。Fable は現行が Fable 5.1（$10/$50。[Claude Fable 5](?a=claude-fable-5-mythos-5-review) と同額）で、どのプランでも既定ではなく /model fable などで明示的に選ぶ。Sonnet は Sonnet 5.5（9/28 投入、v2.1.284 以降）と Sonnet 5 がいずれも $2/$10 で、[Claude Sonnet 5](?a=claude-sonnet-5-review) の $3/$15 への値上げは実施されず $2/$10 が標準価格になった。Haiku 4.5 への切替も可能。",
      "### agent view（5/12 研究プレビュー）",
      "`claude agents` で全画面のセッション一覧テーブルとディスパッチ入力を表示。各セッションの状態（**入力待ち（Needs input）・作業中（Working）・完了（Completed）**）を一覧化し、Enter/→ でアタッチ。コードレビュー中に別タスクを並行で進める運用が可能に。",
      "### Dynamic Workflows（5/28 研究プレビュー）",
      "Opus 4.8 と同時投入の**最大の機能拡張**。Claude 自身がオーケストレーションスクリプトを書き、**1回の実行あたり合計で最大1,000のサブエージェント（同時実行は既定で最大16）**を起動し、繰り返し検証しながら作業を進める。**resumable state** で中断・再開も可能。現在は全有料プランで利用でき（Pro は /config の Dynamic workflows で有効化）、Anthropic API、Amazon Bedrock、Google Cloud の Agent Platform、Microsoft Foundry でも提供される。プロンプトにキーワード ultracode を含めるか /effort ultracode で起動を自動化できる（v2.1.160 で workflow から改名）。",
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
      "- **Hooks**: シェルコマンドを Claude Code のアクション前後で実行（PreToolUse、PostToolUse など）。`hookSpecificOutput.updatedToolOutput` で全ツールの出力差し替えも可能",
      "- **Skills**: 再利用可能なプロンプトテンプレート（`/review-pr`、`/deploy-staging` など）。チーム共有も可",
      "- **CLAUDE.md**: プロジェクトルートに置く markdown ファイル。すべてのセッション開始時に Claude が読む。コーディング規約・アーキテクチャ判断・優先ライブラリ・レビューチェックリスト等を記述",
      "- **Auto memory**: ビルドコマンド・デバッグ知見など、Claude が作業中に学んだことを自動保存（手動記述不要）",
      "### Remote Control / Channels / Dispatch / Slack 統合",
      "- **Remote Control**: 席を離れて電話やブラウザから作業継続",
      "- **Channels**: Telegram / Discord / iMessage / 独自 Webhook からセッションにイベント投入",
      "- **Dispatch**: スマホからタスクをメッセージ送信、デスクトップアプリでセッション化",
      "- **Slack**: チャネルで `@Claude` メンションでバグ報告 → 返ってくるのは PR。公式ドキュメントによると、Team・Enterprise 向けにはこの旧来の Claude Code in Slack が Claude Tag に置き換えられつつあり（切替日は Anthropic のアカウント担当に確認）、Pro・Max では従来のセットアップが引き続き案内されている",
      "### GitHub Actions / GitLab CI/CD / GitHub Code Review",
      "PR レビュー・Issue トリアージの CI 自動化。**GitHub Code Review** で全 PR に自動レビュー付与。",
      "### Chrome 連携",
      "ライブ Web アプリケーションのデバッグを Claude 経由で実行。",
      "## 料金体系（Fast Mode は標準料金の2倍で最大2.5倍速）",
      "上の表は 2026-09-30 時点の公式情報に基づいて差し替えた。補足: API 従量の現行料金は、Opus 5.5 が $4/$20、Opus 5 が $5/$25、Fable 5.1 と Fable 5 が $10/$50、Sonnet 5.5 と Sonnet 5 が $2/$10 で、Sonnet 5 の $3/$15 への値上げは実施されなかった。Fast Mode は Pro・Max・Team・Enterprise のすべてが対象で、利用クレジット（usage credits）を有効にした場合のみ使え、サブスクリプションの利用枠には含まれない（Team・Enterprise は管理者による有効化も必要）。差し替え前の表は Max 行に「2.5倍速」を置いていたが、これは Max 固有ではなく、全プラン共通の Fast Mode の性能（最大）である。料金は標準料金の2倍で、Opus 5.5 が $8/$40、Opus 5 と Opus 4.8 が $10/$50。Team は席料金が公開されており、Standard 席が年払い $20・月払い $25、Premium 席が年払い $100・月払い $125（いずれも席あたり月額）。Enterprise は席あたり月額 $20（年払い）に API 料金での従量課金が加わる形で公開されている（営業経由の契約は個別）。差し替え前の表の Enterprise 行にあった「SOC 2 準拠」について、Anthropic は SOC 2 Type I / Type II の報告書を取得している（Anthropic Trust Center。code.claude.com/docs/en/security）。これは Anthropic 全体の認証であり、Enterprise プラン固有の特長ではない。Enterprise 固有の機能は SCIM、監査ログ、Compliance API、支出上限などである（claude.com/pricing）。",
      "## 6月以降の主な変化（8月時点）",
      "- **7/24 [Claude Opus 5](?a=claude-opus-5-review) が標準モデルに**。effort トグル（low / medium / high）でタスクごとに思考量を選べるようになった。料金は前世代 Opus 4.8 と同額の $5/$25 に据え置き",
      "- **7/13 [Claude Cowork](?a=feature-chatgpt-work-vs-claude-cowork-simultaneous-launch-2026) 公開**。非エンジニアを含む業務ワークフローに Claude Code の実行基盤が広がった",
      "- **7/24 [Record a Skill](?a=anthropic-claude-cowork-record-a-skill-2026)** — 画面録画1回から Claude が skill を生成する。Codex・Microsoft も同種機能を出しており、[3社の設計思想の比較](?a=feature-record-to-skill-three-vendors-comparison-2026)を別記事で整理した",
      "- **7/24 [Voice Mode の大幅アップグレード](?a=anthropic-claude-voice-mode-opus-sonnet-connectors-2026)** — Opus / Sonnet の選択、テキストチャットからのモデル継承、Gmail / Slack / Canva コネクタ",
      "- **6/24 [Workload Identity Federation GA](?a=anthropic-workload-identity-federation-ga-service-accounts-2026)** — 静的 API キーなしで AWS / GCP / Azure / GitHub Actions から認証できるようになり、企業導入の鍵管理負荷が下がった",
      "- **7/7 [Claude Chrome 拡張が 9M インストール](?a=anthropic-claude-chrome-extension-9m-installs-beta-2026)** に到達、Claude Code 統合・複数タブ横断の自動化に対応",
      "- **8月の廃止**: 旧 Workbench（legacy Workbench）と prompt tools API が 8/17 終了（Workbench は playground として続いている。なお Opus 4.7 の Fast mode の終了は8月ではなく7/24）（[→ 移行ガイド](?a=august-2026-ai-deprecations-migration-guide-2026)）",
      "- **Agent SDK** でカスタムエージェント構築。Web 版を **モバイルの Claude アプリ（iOS / Android）**から起動可能（`claude --teleport` で端末に取り戻し）",
      "## 第三者プロバイダ対応",
      "Terminal CLI と VS Code 拡張は **third-party providers**（Bedrock、Vertex AI、Foundry 等）に対応。**自社の AWS / GCP / Azure 契約経由**で Claude を利用できる。Anthropic API 直接以外の経路でも全機能が使える設計。",
      "## 評価",
      "コンテキスト理解、長時間自律実行、サーフェスの広さ（CLI / IDE / Desktop / Web / Mobile / Slack / CI）が**現行 AI コーディングツールの中で最高水準**。agent view と Dynamic Workflows で「1人 = 1セッション」だった運用が「1人 = 数十セッションのオーケストレーター」に進化した。Opus 5 の effort トグルが加わったことで、**同一モデル内でコストと品質を調整できる**ようになり、モデルを使い分けて調整していた運用が単純化した。",
      "**注意点**: agent view と Dynamic Workflows はいずれも**研究プレビュー**段階で、本番ワークロードでの利用は規模・コスト・失敗時挙動の確認を経てからが推奨。**自律 PR 作成**を許可する場合は CLAUDE.md と Hooks のガードレールが必須。Channels / Slack 連携時はサードパーティ経由のメッセージインジェクション対策を運用ポリシーで担保すべき。**effort: high では出力トークンが大きく増える**ため、単価だけでの月次コスト見積もりは実態と乖離する。",
      "**長時間自律実行のリスクは実例が出ている。** Anthropic は8月、**CTF 評価中に Claude 3モデルが実企業3社の本番環境へ不正アクセスした**ことを自主開示した（原因は評価パートナーとの認識齟齬、141,006 実行を全数監査）。[→ 詳細](?a=anthropic-claude-models-breached-three-companies-ctf-eval-2026)。自律エージェントに広い権限を渡す運用では、**サンドボックスの境界と到達可能なネットワーク範囲を明示的に設計する**必要がある。",
      "**関連情報**: 外部連携は [MCP 活用ガイド](?a=mcp-comprehensive-guide-2026)、Git 連携は [AI × Git ワークフロー](?a=git-ai-workflow-2026)、コミュニティ製拡張ツールは [CLI エージェント OSS 特集](?a=cli-agent-community-oss-2026)、Codex CLI との比較は [Codex プラグイン公開](?a=openai-codex-plugin-cc-claude-code-2026)、agent view の詳細は [Anthropic 5/12 発表記事](?a=anthropic-claude-platform-aws-ga-agent-view-2026)、CLI 横断比較は [CLI ツール横断比較](?a=cli-tools-comparison-2026-march) を参照。",
      "---",
      "**編集履歴**",
      "【追記 2026-08-11】月次見直しにより更新。(1) 標準モデルを Opus 4.8 から [Opus 5](?a=claude-opus-5-review) に更新し、effort トグルを追記、(2) 6月以降の変化（Cowork 公開、Record a Skill、Voice Mode 刷新、WIF GA、8月の廃止予定）を反映、(3) API 料金表を Opus 5 の $5/$25 に更新、(4) 評価に長時間自律実行のリスク実例（CTF 評価中の不正アクセス自主開示）を追記しました。",
      "【訂正 2026-08-11】総合評価を **5 → 4.5** に修正しました。当サイトは「5つの軸（AI品質・使いやすさ・コスパ・拡張性・企業向け）を加重平均して総合スコアを算出する」と公表していますが、本記事の公表値はその計算結果（4.55）と乖離していました。各軸の評価そのものは変更しておらず、**公表している算出方法どおりに総合スコアを計算し直した**ものです。",
      "【訂正 2026-09-30】（誤）effort は low / medium / high の3段階 →（正）Claude Opus 5 も low / medium / high / xhigh / max の5段階に対応し、Opus 5 の既定は high（Opus 5.5 と Sonnet 5.5 の Claude Code での既定は medium）。",
      "【訂正 2026-09-30】（誤）Sonnet 5 は $3/$15 →（正）Sonnet 5 は $2/$10。$3/$15 への値上げは実施されず、$2/$10 が標準価格になった。",
      "【訂正 2026-09-30】（誤）Dynamic Workflows は1セッションで最大1,000の並列サブエージェント →（正）1回の実行あたり合計で最大1,000、同時実行は既定で最大16。",
      "【訂正 2026-09-30】（誤）claude --headless（UI なしモード）→（正）公式 CLI リファレンスに該当フラグはない。UI なしの実行は claude -p。（誤）claude \"<指示>\" は一発指示モード →（正）最初の指示を渡して対話セッションを開始する。（誤）Hooks は PostToolUse、Pre-commit など →（正）PreToolUse、PostToolUse など（Pre-commit はイベント名ではない）。",
      "【訂正 2026-09-30】（誤）Claude Code SDK →（正）Agent SDK。（誤）agent view の状態「待機中・作業中・完了」→（正）入力待ち（Needs input）・作業中・完了。（誤）Opus 4.7 の Fast mode 終了を8月の廃止に分類 →（正）7/24 に終了。（誤）Workbench が 8/17 終了 →（正）終了したのは旧 Workbench で、Workbench は playground として続いている。「Fast Mode が3倍安い」（見出し）は現行の公式文書に根拠がなく、現在の Fast Mode は標準料金の2倍で最大2.5倍速のため、見出しを事実に合わせた。",
      "【追記 2026-09-30】その後の変更: 既定モデルは 9/22 の v2.1.280 で Opus 5.5 に変わった。これにより Pro・Max・Team・Enterprise・API のいずれも既定は Opus 5.5 になった（それ以前は Pro と Team Standard が Sonnet、Max などが Opus 5 だった。Max の既定が Opus 5 だったのは v2.1.219 以降で、執筆時点では正しい記述だった）。Opus 5.5（9/22、$4/$20）、Fable 5.1（9/1、$10/$50）、Sonnet 5.5（9/28、$2/$10）が現行世代で、本記事の★評価と「評価」節は Opus 5 世代までを前提としており、Opus 5.5 世代での再採点は行っていない。",
      "【追記 2026-09-30】その後の変更: Dynamic Workflows は現在、全有料プランで利用できる（Pro は /config で有効化）。本文の Max / Team / Enterprise（管理者有効化必要）という提供範囲は、その後拡大した。起動キーワードは v2.1.160 で workflow から ultracode に変わった。Fast Mode は現在 Pro を含む全有料プランが利用クレジットで使える。Team・Enterprise は席料金が公開されている。あわせて、デスクトップアプリの Ubuntu・Debian ベータ、モバイルアプリの Android 対応、Slack 連携の Claude Tag への移行を追記した。",
      "【追記 2026-09-30】claude.ai のサブスクリプションでログインした対話セッションでは、利用上限に達すると上限のリセット後に作業を自動で再開する（v2.1.234 以降、既定で有効、/config で無効化できる）。Dynamic Workflows も上限到達時は一時停止してリセット後に再開する（v2.1.271 以降）。",
      "【訂正 2026-09-30】caption を持たない2つの表を差し替えた。（誤）コマンド表の claude --headless、claude \"<指示>\" を「一発指示モード」としていた記述、/model の旧選択肢 →（正）公式の CLI リファレンスに基づく現行のコマンド表。（誤）料金表の Pro の Fast Mode「—」、Max 行の「2.5倍速」、Team・Enterprise の「カスタム」、Enterprise の「SOC 2 準拠」、API の Opus 5 $5/$25 と Sonnet 5 $3/$15 →（正）Pro を含む全プランが利用クレジットで Fast Mode を利用でき（サブスクの枠外）、2.5倍速は全プラン共通の性能で、Team と Enterprise の料金は公開されており、SOC 2 は Anthropic 全体の認証で、API の現行単価は Opus 5.5 $4/$20、Sonnet 5 $2/$10。"
    ],
    "tables": [
      {
        "afterParagraph": 14,
        "caption": "Claude Code の主なコマンドとフラグ（2026年9月30日時点。公式の CLI リファレンスとコマンド一覧に基づく）",
        "headers": [
          "コマンド / フラグ",
          "機能"
        ],
        "rows": [
          [
            "`claude`",
            "対話セッションを開始する"
          ],
          [
            "`claude \"<指示>\"`",
            "最初の指示を渡して対話セッションを開始する"
          ],
          [
            "`claude -p \"<prompt>\"`",
            "非対話モード。応答を出力して終了する（CI・cron・パイプ向け。UI なしで実行したいときはこれを使う）"
          ],
          [
            "`claude agents`",
            "agent view を開き、並列のバックグラウンドセッションを監視・投入する"
          ],
          [
            "`claude --bg [task]`",
            "バックグラウンドエージェントとして起動し、すぐにターミナルへ戻る"
          ],
          [
            "`claude --teleport`",
            "クラウドセッション（Web やモバイルアプリから起動したもの）をローカルのターミナルで再開する"
          ],
          [
            "`/background`（別名 `/bg`）",
            "対話中のセッションをバックグラウンドエージェントとして切り離す"
          ],
          [
            "`/desktop`（別名 `/app`）",
            "現在のセッションをデスクトップアプリで続ける（macOS / x64 Windows、サブスクリプションが必要）"
          ],
          [
            "`/schedule`",
            "Routines（クラウドで動く定期実行）を作成・更新・一覧・実行する"
          ],
          [
            "`/loop`",
            "セッションが開いている間、同じプロンプトを繰り返し実行する（間隔を省くと Claude が間隔を決める）"
          ],
          [
            "`/model`",
            "モデルを切り替える。Anthropic API では、エイリアス opus / sonnet / fable / haiku が指すのは Opus 5.5 / Sonnet 5.5 / Fable 5.1 / Haiku 4.5。旧モデルはモデル ID（例: claude-opus-5）で指定する"
          ],
          [
            "`/effort`",
            "思考量を low / medium / high / xhigh / max から選ぶ（段階はモデルによる）。`/effort ultracode` で動的ワークフローを使う設定になる"
          ],
          [
            "`/fast`",
            "Fast Mode を切り替える（Opus 5.5 / Opus 5 / Opus 4.8）"
          ]
        ]
      },
      {
        "afterParagraph": 46,
        "caption": "Claude Code を使えるプランと料金（2026年9月30日時点。claude.com/pricing と公式ドキュメントに基づく。価格は税抜）",
        "headers": [
          "プラン",
          "月額",
          "利用枠",
          "Fast Mode",
          "主な用途・特長"
        ],
        "rows": [
          [
            "Pro",
            "$20（月払い）/ $17（年払い）",
            "標準",
            "利用クレジットで利用（サブスクの枠外）",
            "個人開発"
          ],
          [
            "Max",
            "$100（Max 5x）/ $200（Max 20x）",
            "Pro の5倍 / 20倍",
            "利用クレジットで利用（サブスクの枠外）",
            "ヘビーユーザー"
          ],
          [
            "Team",
            "Standard 席 $25（月払い）/ $20（年払い）、Premium 席 $125 / $100（いずれも席あたり月額）",
            "Standard 席は Pro より多く、Premium 席はその5倍",
            "Owner が有効化したうえで、組織の利用クレジットで利用",
            "2〜150人のチーム"
          ],
          [
            "Enterprise",
            "席あたり $20（年払い）＋ API 料金での従量",
            "利用量に応じて課金",
            "Owner が有効化したうえで、組織の利用クレジットで利用",
            "SCIM、監査ログ、Compliance API、支出上限など"
          ],
          [
            "API（従量）",
            "—",
            "Opus 5.5: $4 / $20 per 1M（Opus 5: $5 / $25）",
            "Opus 5.5 $8 / $40、Opus 5・Opus 4.8 $10 / $50（Claude API のみ）",
            "Fable 5.1・Fable 5 $10 / $50、Sonnet 5.5・Sonnet 5 $2 / $10、Haiku 4.5 $1 / $5"
          ]
        ]
      }
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
      },
      {
        "title": "Claude Code changelog",
        "site": "Claude Code Docs",
        "url": "https://code.claude.com/docs/en/changelog"
      },
      {
        "title": "Model configuration",
        "site": "Claude Code Docs",
        "url": "https://code.claude.com/docs/en/model-config"
      },
      {
        "title": "Speed up responses with fast mode",
        "site": "Claude Code Docs",
        "url": "https://code.claude.com/docs/en/fast-mode"
      },
      {
        "title": "Orchestrate subagents at scale with dynamic workflows",
        "site": "Claude Code Docs",
        "url": "https://code.claude.com/docs/en/workflows"
      },
      {
        "title": "CLI reference",
        "site": "Claude Code Docs",
        "url": "https://code.claude.com/docs/en/cli-reference"
      },
      {
        "title": "Claude Code in Slack",
        "site": "Claude Code Docs",
        "url": "https://code.claude.com/docs/en/slack"
      },
      {
        "title": "Pricing",
        "site": "Claude Platform Docs",
        "url": "https://platform.claude.com/docs/en/about-claude/pricing"
      },
      {
        "title": "Models overview",
        "site": "Claude Platform Docs",
        "url": "https://platform.claude.com/docs/en/about-claude/models/overview"
      },
      {
        "title": "Claude plans and pricing",
        "site": "Claude",
        "url": "https://claude.com/pricing"
      },
      {
        "title": "Security",
        "site": "Claude Code Docs",
        "url": "https://code.claude.com/docs/en/security"
      }
    ]
  },
  "cursor-cli": {
    "body": [
      "**Cursor CLI** は **Anysphere** が提供する Cursor の独立 CLI ツール。**IDE を起動せずにターミナルだけで Composer / Background Agent を使える**ようになり、Claude Code や GitHub Copilot CLI の直接競合に位置付けられた。2026年6月時点での網羅評価。",
      "## インストール / 起動",
      "**インストール**:",
      "```bash\ncurl https://cursor.com/install -fsS | bash   # 公式インストールスクリプト（macOS / Linux / WSL）\nirm 'https://cursor.com/install?win32=true' | iex   # Windows（PowerShell）\nagent login                      # ブラウザでサインイン（スクリプトでは CURSOR_API_KEY も利用可）\n```",
      "**起動コマンド**:",
      "```bash\nagent                             # 対話セッション\nagent -p \"<指示>\"                # 非対話の print モード（CI、cron 用。ファイル変更は --force 併用）\n& <指示>                          # 会話中に先頭へ & を付けると Cloud Agent へ引き継ぐ\n```",
      "インストールは公式のインストールスクリプト経由で、更新は `agent update` で行う。スクリプトを実行する前に、`curl -fsS https://cursor.com/install` の出力を先に読んで内容を確認することを勧める。",
      "## 主要機能",
      "### Composer / Agent loop（multi-file）",
      "プロジェクト全体をインデックスし、自然言語の指示から関連ファイルを自動特定して複数ファイル横断の変更を一括生成。Claude Code 同等の自律エージェント動作。",
      "### Cloud Agents（クラウドサンドボックス。本記事の旧表記は Background Agent）",
      "**Anysphere 管理のクラウド VM 上で動く非同期エージェント**。GitHub Issue や Slack メッセージを起点に作業を進め、**PR ドラフトを返す**まで自律実行。ローカル環境を閉じても継続。",
      "### モデル: Composer 2.5 / Sonic / 主要フロンティア",
      "- **Composer 2.5**: Cursor 独自モデル（Kimi K2.5 ベース + 独自 RL）。なお、CursorBench で Opus 4.6 を上回るという比較は、Cursor 公式ブログ（Composer 2.5）の本文では確認できていない",
      "- **Sonic**: 低レイテンシ編集に特化した内製モデル",
      "- **[Claude Opus 5](?a=claude-opus-5-review)、Fable 5、[GPT-5.6](?a=gpt-5-6-review)、Gemini 3.x** など主要フロンティアモデルも切替可能",
      "### MCP / Rules / Skills",
      "Claude Code と同様、MCP プロトコルで外部接続、`.cursor/rules` 配下のルールファイルでプロジェクト規約共有、Skills でテンプレート再利用。",
      "### Microsoft Teams / Slack / GitHub / PagerDuty 統合",
      "3月の **Cursor Automations** で Slack / GitHub PR / PagerDuty トリガー、5/11 で **Microsoft Teams 統合**（`@Cursor` メンション）。CLI から起動したジョブも統合管理可能。",
      "## 料金プラン",
      "**Bugbot 課金**: 2026年5月から seat-based → usage-based に移行、1 PR レビュー平均 **$1.00-$1.50**、effort level（high で時間と料金が増える代わりにバグ発見率向上）も調整可能。",
      "## 評価",
      "**強み**: IDE 統合と CLI が同じ Composer / Background Agent を共有するため、**作業環境を選ばずに同じワークフロー**を回せる。独自モデル（Composer 2.5 / Sonic）により低レイテンシ・低コストでフロンティア性能を実現。Microsoft Teams / Slack 統合でチャットアプリ起点のエージェント運用にも対応。",
      "**注意点**: Claude Code が Anthropic 純正の CLI として Anthropic Console / Bedrock / Vertex / Foundry を経由できるのに対し、Cursor CLI は Anysphere 経由でモデルを利用する形態（クレジット消費型）。**規制業界での運用は Cursor の Privacy Mode + Self-hosted Cloud Agents の組み合わせが必要**。",
      "**資本関係の変化を織り込む必要がある**: 2026年6月16日に発表された **SpaceX による Anysphere の $60B（全株式交換）買収は、2026年8月14日に効力が発生して完了した**（[→ 詳細](?a=spacex-closes-cursor-anysphere-acquisition-2026)）。Anysphere は SpaceX の完全子会社となった。SpaceXAI 部門への配置は、SpaceX の8-K・Cursor 公式ブログでは確認できていない（[→ 速報](?a=spacex-cursor-60b-acquisition-anysphere-2026)）。Cursor 公式ドキュメント（Models & Pricing）では、現行の Cursor Models の利用枠に Grok 4.7 / 4.6 / 4.5 が Composer 2.5 と並んで含まれている。Cursor は公式ブログ（2026年7月8日）で、SpaceXAI と共同で訓練した Grok 4.5 の訓練に、数兆トークンの Cursor データ（利用者とコードベース・ツールのやりとり、開発者とエージェントのやりとりを含む）が含まれたと説明している（[詳細](?a=xai-grok-4-5-public-launch-opus-class-july-9-2026)）。この訓練は4月の提携の下で、買収完了（8月14日）より前に行われた。当事者の説明で、独立した検証は確認できておらず、Cursor のどの利用者のデータが対象か（Privacy Mode の利用者が除外されるか等）は確認できていない。開発データの取り扱い方針が変わりうるため、企業導入では Privacy Mode の設定とデータ利用条項を継続的に確認することを勧める（[→ 市場再編の分析](?a=feature-ai-coding-market-realignment-spacex-cursor-2026)）。",
      "**関連記事**: [Cursor 3 / Agents Window](?a=cursor-3-agent-first-workspace-2026)、[Composer 2 / Kimi K2.5](?a=cursor-composer-2-kimi-2026)、[Microsoft Teams 統合](?a=cursor-microsoft-teams-integration-2026)、[Cursor iOS アプリ](?a=cursor-ios-app-launch-cloud-agents-remote-2026)、[CLI 横断比較](?a=cli-tools-comparison-2026-march)。",
      "---",
      "**編集履歴**",
      "【追記 2026-08-11】月次見直しにより更新。(1) 切替可能モデルを現行世代（Opus 5 / Fable 5 / GPT-5.6）に更新、(2) SpaceX による Anysphere 買収の発表（6/16）と、それに伴うモデル・データ方針の変化リスクを注意点に追加、(3) iOS アプリ公開（6/30）を関連記事に追加しました。",
      "【訂正 2026-08-11】総合評価を **5 → 4.5** に修正しました。当サイトは「5つの軸（AI品質・使いやすさ・コスパ・拡張性・企業向け）を加重平均して総合スコアを算出する」と公表していますが、本記事の公表値はその計算結果（4.25）と乖離していました。各軸の評価そのものは変更しておらず、**公表している算出方法どおりに総合スコアを計算し直した**ものです。",
      "【追記 2026-09-20】SpaceX による Anysphere 買収の**完了**を反映しました。本文は「Q3 2026 のクローズが予定されている」のままでしたが、合併の効力は**2026年8月14日**に発生しており、当サイトも9月12日に報じています。記事間で食い違っていたため、該当箇所を更新しました。なお料金・切替可能モデルの現行確認は行っていないため、`lastReviewed` は据え置いています。",
      "【訂正 2026-09-30】（誤）インストールは `npm install -g @cursor/cli`、サインインは `cursor auth`、起動は `cursor` / `cursor --headless` / `cursor --bg`、Node.js 20+ 必須 →（正）Cursor 公式ドキュメント（cursor.com/docs/cli）の手順は `curl https://cursor.com/install -fsS | bash`（Windows は PowerShell の `irm 'https://cursor.com/install?win32=true' | iex`）で、コマンドは `agent`、サインインは `agent login`、非対話実行は `-p, --print`（ファイル変更は `--force` 併用）、クラウドへの引き継ぎは会話の先頭に `&` を付ける方式である。`--headless` と `--bg` は公式のパラメータ一覧に載っておらず、Node.js の要件も公式ドキュメントでは確認できなかった。また、2026-09-30 時点で npm レジストリに `@cursor/cli` というパッケージは存在しない（レジストリの応答は Not found）。存在しない名前は第三者に先に取得されるおそれがあるため、この名前を `npm install` しないこと。",
      "【訂正 2026-09-30】（誤）「Background Agent」という名称 →（正）現行の公式ドキュメントでは Cloud Agents と表記されている。`.cursorrules` の記述は、現行ドキュメントが説明している `.cursor/rules` 配下のルールファイルに改めた（`.cursorrules` への言及は現行ドキュメントには見当たらない）。",
      "【訂正 2026-09-30】料金表の「Business / Enterprise」を、公式ドキュメントの区分（Teams と Enterprise の2つの法人向けプラン）に合わせて「Enterprise」に改め、Teams の SSO 表記を公式の SAML/OIDC SSO に合わせた。インド向けの Start プラン（₹649/月・税込）を追記した。（誤）Pro+「Pro の5倍 Agent 上限」→（正）Cursor 公式料金ページ（Pro+ / Ultra の切替表示）では Pro+ は「3x Pro limits on Agent」、Ultra は「20x Pro limits on Agent」。Enterprise 行の「SOC 2」は料金ページ下部の会社全体の認証表示でありプランの機能ではないため外し、Enterprise 列に記載のある「優先サポートとアカウント管理」に差し替えた。",
      "【追記 2026-09-30】Cursor 公式ドキュメントでの現行の確認結果。(1) SpaceX による買収は、Cursor 公式ブログ（2026年8月14日「Cursor is now a part of SpaceX」）が「SpaceX に正式に買収された。4月に発表した SpaceXAI との提携から始まった手続きの完了」と述べている。本文中の取引額・株式交換の形態・完全子会社化・SpaceXAI 部門への配置は、当サイトの別記事に依っており、この公式ブログには書かれていない。(2) Models & Pricing の Cursor Models 利用枠は Grok 4.7 / 4.6 / 4.5 と Composer 2.5、第三者モデルは別枠（API 価格で課金）で、Sonic の記載は見当たらない。第三者モデルの名称は Claude Fable 5.1 / Opus 5.5 / Sonnet 5.5、GPT-5.6（Luna / Sol / Terra）、Gemini 3.1 Pro / 3.8 Flash などが並んでおり、本文の切替可能モデルの記述（Opus 5、Fable 5、GPT-5.6、Gemini 3.x）は世代の細かい版が古い前提のまま残している。(3) Auto は Cursor Router（2026年7月22日）で動く。CLI は 2026年8月11日のリリースで実行中ターンへの割り込み誘導が、8月26日のリリースで `agent persist` による永続セッションが加わった（自己ホスト型ワーカーは 2026年3月以前から CLI にあり、8月のリリースはその拡張）。(4) Bugbot は 2026年6月10日の公式 changelog で、Composer 2.5 が動力になり、平均レビュー時間が約90秒、1回あたりの費用が約22%減と説明されている。これは Cursor 自身の説明であり、独立した検証は確認できていない。本文の「1 PR 平均 $1.00-$1.50」は、この変更以前の値かどうかを含め、公式ページでは確認できていない。",
      "【訂正 2026-09-30】上記の追記（1）の「取引額・株式交換の形態・完全子会社化は当サイトの別記事に依り、公式ブログには書かれていない」のうち、取引額（$60B）・株式対価・完全子会社としての存続・8月14日の効力発生は、SpaceX の8-K（6月16日・8月14日）に記載がある。SpaceXAI 部門への配置は8-K にも Cursor ブログにも記載がない。「Grok V9-Medium が Cursor のデータで訓練された点は Cursor の公式発表では確認できていない」→（正）Cursor は7月8日の公式ブログで Grok 4.5 の訓練に Cursor データが含まれたと説明している。"
    ],
    "tables": [
      {
        "afterParagraph": 20,
        "headers": [
          "プラン",
          "月額",
          "主な内容"
        ],
        "rows": [
          [
            "Free",
            "$0",
            "制限付き利用"
          ],
          [
            "Pro",
            "$20",
            "標準 Agent 利用枠"
          ],
          [
            "Pro+",
            "$60",
            "Pro の3倍の Agent 上限"
          ],
          [
            "Ultra",
            "$200",
            "Pro の20倍の Agent 上限"
          ],
          [
            "Start（インド限定）",
            "₹649/月（税込）",
            "Cursor Models（Grok・Composer）と Cloud Agents を含む。第三者モデルの利用枠は含まれない"
          ],
          [
            "Teams Standard",
            "$40/seat/月",
            "組織管理、SAML/OIDC SSO、チーム全体の Privacy Mode"
          ],
          [
            "Teams Premium",
            "$120/seat/月",
            "Standard の5倍 Agent 上限"
          ],
          [
            "Enterprise",
            "カスタム",
            "プール利用、請求書払い、SCIM、監査ログ、優先サポートとアカウント管理"
          ]
        ]
      }
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
        "title": "Cursor CLI — Installation",
        "site": "Cursor Docs",
        "url": "https://cursor.com/docs/cli/installation"
      },
      {
        "title": "Cursor CLI — Parameters",
        "site": "Cursor Docs",
        "url": "https://cursor.com/docs/cli/reference/parameters"
      },
      {
        "title": "Cursor CLI — Changelog",
        "site": "Cursor Docs",
        "url": "https://cursor.com/docs/cli/changelog"
      },
      {
        "title": "Models & Pricing",
        "site": "Cursor Docs",
        "url": "https://cursor.com/docs/models-and-pricing"
      },
      {
        "title": "Pricing",
        "site": "Cursor",
        "url": "https://cursor.com/pricing"
      },
      {
        "title": "Cursor is now a part of SpaceX",
        "site": "Cursor Blog",
        "url": "https://cursor.com/blog/joining-spacex"
      },
      {
        "title": "Introducing Grok 4.5 (2026-07-08)",
        "site": "Cursor",
        "url": "https://cursor.com/blog/grok-4-5"
      }
    ]
  },
  "github-copilot-cli": {
    "body": [
      "**GitHub Copilot CLI** は **GitHub**（**Microsoft** 傘下）が提供する Copilot coding agent のターミナル版。`copilot` コマンドで対話セッション、`/fleet` でサブエージェント並列実行、`/model` でモデル切替が可能な、本格的な CLI コーディングエージェント。2026年6月時点の網羅評価。",
      "## インストール / 起動",
      "**インストール（複数経路）**:",
      "```bash\nnpm install -g @github/copilot                     # npm 経由（Node.js 22+ 必須）\nbrew install --cask copilot-cli                            # Homebrew（macOS / Linux）\nwinget install GitHub.Copilot                       # Windows WinGet\ncurl -fsSL https://gh.io/copilot-install | bash    # Linux / WSL 等の汎用\ngh copilot                                          # GitHub CLI からの初回起動・インストール\n```",
      "**起動コマンド**:",
      "```bash\ncopilot                  # 対話セッション\ncopilot \"<指示>\"         # ワンショット\ngh copilot suggest       # シェルコマンド提案（既存サブコマンド）\ngh copilot explain       # コマンド解説（既存サブコマンド）\n```",
      "## 中核機能",
      "### 既定モデルと `/model` 切替",
      "**既定モデル: 現行の既定モデル名は公式ドキュメントで確認できていない（以前の既定だった Claude Sonnet 4.5 は 2026年9月1日に提供終了）**。`/model` コマンドで切替可能（`auto` を選ぶと Copilot が自動で選ぶ。公式プラン表は Free / Student を Auto 選択のみとするが、CLI の changelog には 1.0.56（2026-05-29）で Auto 以外を選べるようになったとあり、公式資料どうしで食い違っている）。ラインナップの例:",
      "- Claude **[Opus 5](?a=claude-opus-5-review) / Fable 5**（公式の対応モデル表には Opus 5.5・Fable 5.1 も載っている。GA 後 24時間以内に Copilot へ展開されるのが通例）",
      "- **[GPT-5.6](?a=gpt-5-6-review)**（OpenAI、7/9 一般公開。公式の対応モデル表には GPT-6 Astra / Sol / Luna と GPT-6.1 Sol も載っている）",
      "- **Project Polaris / MAI-Code-1-Flash**（2026年9月10日に提供終了、後継は MAI-Code-1.1-Flash。Microsoft 自社製、Build 2026 で発表、Copilot Pro+/Business/Enterprise に順次展開）",
      "- GPT-5.5-Cyber（Trusted Access for Cyber プログラム経由）",
      "**Copilot CLI v1.0.35〜1.0.36**（4/23〜4/24）では HTTP hook サポート、subcommand picker 改善、複数 Copilot ライセンス時のエラーメッセージ改善も実装。",
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
      "**2026年6月1日から従量課金へ移行した。** 各プランに月次の **AI Credits** 枠（1クレジット = $0.01）が含まれ、超過分はトークン消費に応じて課金される。5/28 報道時点で予告されていた「Starter / Pro / Enterprise の3階層への再編」は行われず、**Free / Pro / Pro+ / Business / Enterprise の構成が維持されたまま課金方式だけが変わった**形になる。既存の Business / Enterprise 顧客には移行措置として2026年8月まで通常より多いクレジット枠が付与されるとされていたが、その期間は過ぎている。2026年9月30日時点の公式プラン表では、Business が1ユーザー月1,900、Enterprise が月3,900の AI Credits と記載されている。",
      "## 評価",
      "**強み**: GitHub エコシステム（Issues / PR / Actions / Codespaces / Code Search）とのネイティブ統合は他ツール追随不可。**モデル選択の自由度**（Claude / GPT / MAI / Gemini）が増し、ベンダーロックインを避けつつ Copilot を継続利用できる。`/fleet` で並列エージェント運用に対応、Autopilot で完全自律実行も可能。",
      "**注意点**: Anthropic Claude Code（agent view + Dynamic Workflows）や Cursor（Agents Window）と比べると、**マルチセッション UI** の成熟度ではまだ差がある場面も。GitHub 外のプラットフォーム（GitLab / Bitbucket）での利用は限定的。**Project Polaris / MAI-Code-1-Flash** が中核モデル化していくにつれて、フロンティアモデルから Microsoft 自社モデルへの誘導が強まる可能性がある（料金面では有利だが、性能は実利用での検証が必要）。",
      "**スキル生成が加わった**: 2026年8月、Microsoft は **[skill-recorder](?a=microsoft-skill-recorder-oss-windows-2026)** を OSS 公開した。画面録画1回から Copilot CLI が実行可能なスキルを生成する仕組みで、**Windows ネイティブで動作**する点が Codex・Claude の同種機能との差になる。3社の設計思想の違いは[別記事](?a=feature-record-to-skill-three-vendors-comparison-2026)で整理した。",
      "**関連記事**: [GitHub Copilot Autopilot + MCP CLI](?a=github-copilot-autopilot-mcp-cli-vscode-2026)、[Microsoft skill-recorder](?a=microsoft-skill-recorder-oss-windows-2026)、[Project Polaris 報道](?a=microsoft-build-2026-project-polaris-mai-coding-2026)、[CLI 横断比較](?a=cli-tools-comparison-2026-march)。",
      "---",
      "**編集履歴**",
      "【追記 2026-08-11】月次見直しにより更新。(1) 6/1 の従量課金（AI Credits、1クレジット $0.01）移行を反映し、「Starter / Pro / Enterprise の3階層再編は行われなかった」ことを明記、(2) `/model` の切替対象を現行世代（Opus 5 / Fable 5 / GPT-5.6）に更新、(3) 8月に OSS 公開された [skill-recorder](?a=microsoft-skill-recorder-oss-windows-2026) を追記、(4) 料金表を現行プラン（Free / Pro $10 / Pro+ $39 / Business $19 / Enterprise $39）に更新しました。",
      "【訂正 2026-09-30】（誤）`brew install copilot-cli`（macOS のみ） →（正）`brew install --cask copilot-cli`（macOS / Linux。公式インストール手順の表記）",
      "【訂正 2026-09-30】（誤）既定モデルは Claude Sonnet 4.5 →（正）Claude Sonnet 4.5 は 2026年9月1日に提供終了しており、現行の既定モデル名は公式ドキュメントで確認できていない。CLI には `auto`（自動選択）がある。Free / Student のモデル選択は、公式プラン表では Auto のみだが CLI の changelog（1.0.56）には Auto 以外を選べるとあり、資料間で食い違っている",
      "【訂正 2026-09-30】（誤）Project Polaris / MAI-Code-1-Flash が `/model` の切替対象 →（正）MAI-Code-1-Flash は 2026年9月10日に提供終了し、後継は MAI-Code-1.1-Flash（公式の対応モデル表）",
      "【訂正 2026-09-30】（誤）HTTP hook 等は v1.0.36 以降（5/6） →（正）公式 changelog では HTTP hook が v1.0.35（2026-04-23）、subcommand picker 改善と複数ライセンス時のエラーメッセージ改善が v1.0.36（2026-04-24）",
      "【訂正 2026-09-30】（誤）Business / Enterprise に2026年8月まで多めのクレジット枠 →（正）期間は過ぎており、現行の公式プラン表は Business 月1,900・Enterprise 月3,900クレジット。料金表に Student（無償）と Max（$100）の行を追加し、Free・Pro・Pro+ の内容欄を公式プラン表の記載に合わせた。Business の SAML SSO と Enterprise の IP インデムニティ・ファインチューニングは旧版の記載で、現行の公式プラン表では確認できていないため、その旨を表に注記した",
      "【追記 2026-09-30】月次見直しで、以下の変更を公式ドキュメントと changelog で確認した。個人向けに Copilot Max（月額 $100、月20,000クレジット）が加わり、Copilot Student（無償）も公式プラン表に載っている。Copilot CLI は `/autopilot [目的]` と `--autopilot` を CLI 自体が持ち、クレジット消費の上限を指定して、到達すると一時停止させることもできる（VS Code 拡張の Autopilot に限らない）。`/fleet` は CLI の公式リファレンスに載っている。モデル選択には Auto の routing tier（efficiency / balance / intelligence）があり、`/model auto TIER` で指定できる。2026年9月28日公開の v1.0.89 では claude-opus-5.5 と、利用可能な場合の GPT-6 Sol / GPT-6 Luna がモデルピッカーに加わった。",
      "【追記 2026-09-30】この記事の本文は、2026年6月〜8月時点の世代（Opus 5 / Fable 5 / GPT-5.6）を前提にしている。公式の対応モデル表には Claude Opus 5.5、Fable 5.1、Sonnet 5 / 5.5、GPT-6 Astra / Sol / Luna、GPT-6.1 Sol、Gemini 3.8 Flash、Kimi K3、Grok 4.7 なども載っており、新世代が出ている。ただし新世代を前提にした評価（★や料金判断）は、採点材料を確認できていないため書き換えていない。なお次の記述は、今回の確認で公式の記載を見つけられておらず、確認できていない。C++ コード理解の統合（5/6 プレビュー）、GPT-5.5-Cyber の提供、Fable・Opus が GA 後24時間以内に展開されるという通例、`gh copilot suggest` / `explain` の現行の扱い、/fleet を GitHub.com やスマートフォンから監視・マージできること、6/1 からの従量課金の開始日。"
    ],
    "tables": [
      {
        "afterParagraph": 24,
        "caption": "GitHub Copilot 料金プラン（2026年9月30日時点の公式プラン表。AI Credits による従量課金を併用、1クレジット = $0.01）",
        "headers": [
          "プラン",
          "月額",
          "内容"
        ],
        "rows": [
          [
            "Copilot Free",
            "$0",
            "AI Credits の枠あり。公式プラン表ではモデルは Auto 選択のみ（CLI changelog 1.0.56 には Auto 以外を選べるとあり食い違う）。インライン補完は月2,000回まで"
          ],
          [
            "Copilot Student",
            "$0",
            "認証済み学生向け。AI Credits の枠あり。公式プラン表ではモデルは Auto 選択のみ（CLI changelog 1.0.56 には Auto 以外を選べるとあり食い違う）。サードパーティ製エージェントは対象外"
          ],
          [
            "Pro",
            "$10",
            "月1,500クレジット（基本1,000 + Flex 500）。モデルは一部から選択"
          ],
          [
            "Pro+",
            "$39",
            "月7,000クレジット（基本3,900 + Flex 3,100）。プレミアムモデルを利用可"
          ],
          [
            "Max",
            "$100",
            "月20,000クレジット（基本10,000 + Flex 10,000）。個人向けで最大のクレジット枠。プレミアムモデルを優先利用"
          ],
          [
            "Business",
            "$19 per seat",
            "1ユーザー月1,900クレジット（$19 相当）。組織管理、SAML SSO（旧版の記載で、現行の公式プラン表では確認できていない）"
          ],
          [
            "Enterprise",
            "$39 per seat",
            "1ユーザー月3,900クレジット（$39 相当）。監査ログ、IP インデムニティ、ファインチューニング（旧版の記載で、現行の公式プラン表ではプランごとの可否を確認できていない）"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "GitHub Copilot",
        "site": "GitHub",
        "url": "https://github.com/features/copilot"
      },
      {
        "title": "Plans for GitHub Copilot",
        "site": "GitHub Docs",
        "url": "https://docs.github.com/en/copilot/get-started/plans"
      },
      {
        "title": "Supported AI models in GitHub Copilot",
        "site": "GitHub Docs",
        "url": "https://docs.github.com/en/copilot/reference/ai-models/supported-models"
      },
      {
        "title": "Installing GitHub Copilot CLI",
        "site": "GitHub Docs",
        "url": "https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli"
      },
      {
        "title": "Copilot CLI command reference",
        "site": "GitHub Docs",
        "url": "https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference"
      },
      {
        "title": "github/copilot-cli changelog",
        "site": "GitHub (raw.githubusercontent.com)",
        "url": "https://raw.githubusercontent.com/github/copilot-cli/main/changelog.md"
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
      "### Cloud Agents（本記事の旧表記は Background Agent）",
      "**クラウドサンドボックス VM** で稼働する非同期エージェント。**GitHub Issue や Slack メッセージを起点に PR ドラフトまで作成**する。ローカルマシンを閉じても継続実行。",
      "### Microsoft Teams 統合（5/11 GA）",
      "Teams チャネルで **`@Cursor` メンション**でクラウドエージェントにタスク委任。スレッド全体を文脈として読み、リポジトリ・モデルを自動選択し、PR を作成して返す。3月の Slack/GitHub/PagerDuty トリガー（Cursor Automations）に続く第2の主要チャットアプリ統合。",
      "### Composer + Tab v2 + Sonic",
      "- **Composer**: 自然言語の指示から関連ファイルを自動特定し、複数ファイル横断の変更を生成",
      "- **Composer 2 / 2.5**: Cursor 独自モデル（Kimi K2.5 ベース + 独自 RL）。なお、CursorBench で Opus 4.6 を上回るという比較は、Cursor 公式ブログ（Composer 2.5）の本文では確認できていない",
      "- **Tab v2**: 高速インライン補完",
      "- **Sonic**: 低レイテンシ編集に特化した内製モデル",
      "### Cmd+K インライン編集",
      "選択範囲を指示で書き換え。小さな修正に最適。",
      "### MCP / Skills / Rules",
      "- **MCP**: 外部ツール・データソース接続",
      "- **Skills**: 再利用可能なプロンプトテンプレート",
      "- **Rules**: `.cursor/rules` 配下のルールファイルでプロジェクト固有の規約を渡す（Claude Code の CLAUDE.md に相当）",
      "### Bugbot（5月以降は従量課金）",
      "PR レビュー専用エージェント。**2026年5月から seat-based から usage-based 課金に移行**、1 PR レビュー当たり平均 $1.00-$1.50。effort level（high で時間と料金が増える代わりにバグ発見率向上）も調整可能に。",
      "### Self-hosted Cloud Agents（3月、エンタープライズ向け）",
      "コードと実行環境を自社ネットワーク内に保持したままクラウドエージェントを利用。規制業界向け。",
      "## 料金プラン",
      "Pro / Pro+ / Ultra には Cursor Models（Grok 4.7 / 4.6 / 4.5、Composer 2.5）と Other Models（第三者モデル。API 価格で課金）の2つの利用枠が含まれ、枠を超えた分はオンデマンドで課金される。インド向けの Start は Cursor Models の枠のみで、Other Models の枠とオンデマンドは含まれない。Teams では第三者モデルに Cursor Token Rate（100万トークンあたり $0.25）が加わる（Cursor 公式ドキュメント）。",
      "## 5月以降の動向",
      "- **5/11 Microsoft Teams 統合 GA**（`@Cursor` メンション）",
      "- **5月 Bugbot 課金モデルが usage-based に移行**",
      "- **SpaceX による Anysphere 買収が完了**（$60B・全株式交換。6/16 発表、**2026年8月14日に合併の効力が発生**し、Anysphere は SpaceX の完全子会社として存続（SpaceXAI 部門への配置は公式資料では未確認））",
      "- **6/30 [iOS アプリを公開](?a=cursor-ios-app-launch-cloud-agents-remote-2026)** — Always-on クラウドエージェントに加え、PC 上で動いているエージェントをスマホからリモート操作できる。音声入力にも対応",
      "- **Cursor 3.x** 系列で Agents Window が正式機能化",
      "## 評価",
      "**強み**: IDE と AI エージェントが一体化したエクスペリエンス。VS Code 互換で拡張機能がそのまま動く。Agents Window でマルチセッション運用が UI レベルで自然に。Composer 2.5 + Sonic の独自モデルでコストパフォーマンス・低レイテンシを両立。iOS アプリの追加で、**席を離れてもエージェントの進行を確認・介入できる**ようになった。",
      "**注意点**: Claude Code が CLI 中心で多サーフェス展開なのに対し、Cursor は IDE 中心。**ターミナル単体での運用には向かない**。Bugbot の usage-based 移行で PR 数の多いプロジェクトは月額予算が読みにくくなった。Pro+ / Ultra プランの追加で価格帯が広がり、適切なプラン選択が難しくなった面もある。",
      "**資本関係が選定要因になった**: 買収は2026年8月14日にクローズ済みで、Cursor は既に SpaceX の完全子会社である（[→ 詳細](?a=spacex-closes-cursor-anysphere-acquisition-2026)）。Cursor 公式ドキュメント（Models & Pricing）では、現行の Cursor Models の利用枠に Grok 4.7 / 4.6 / 4.5 が Composer 2.5 と並んで含まれている。Cursor は公式ブログ（2026年7月8日）で、SpaceXAI と共同で訓練した Grok 4.5 の訓練に、数兆トークンの Cursor データ（利用者とコードベース・ツールのやりとり、開発者とエージェントのやりとりを含む）が含まれたと説明している（[詳細](?a=xai-grok-4-5-public-launch-opus-class-july-9-2026)）。この訓練は4月の提携の下で、買収完了（8月14日）より前に行われた。当事者の説明で、独立した検証は確認できておらず、Cursor のどの利用者のデータが対象か（Privacy Mode の利用者が除外されるか等）は確認できていない。機能・価格の比較に加え、**開発データの流れと親会社の事業判断**を評価に含める段階に入った（[→ 市場再編の分析](?a=feature-ai-coding-market-realignment-spacex-cursor-2026)）。企業導入では Privacy Mode の設定とデータ利用条項を継続的に確認してほしい。",
      "**関連記事**: [Cursor Composer 2](?a=cursor-composer-2-kimi-2026)、[Cursor 3 / Agents Window](?a=cursor-3-agent-first-workspace-2026)、[Microsoft Teams 統合](?a=cursor-microsoft-teams-integration-2026)、[SpaceX による $60B 買収](?a=spacex-cursor-60b-acquisition-anysphere-2026)、[AI エディタ横断比較](?a=editor-comparison-2026-march)。",
      "---",
      "**編集履歴**",
      "【訂正 2026-08-11】「Windsurf 買収（3月）後の Cascade 統合は継続中」および関連リンクを削除しました。Anysphere による Windsurf 買収は事実ではありません（Windsurf の買収元は Cognition、2025年7月発表）。当該箇所を SpaceX による Anysphere 買収の記述に差し替えました。",
      "【追記 2026-08-11】月次見直しにより更新。iOS アプリの公開（6/30）、および SpaceX 買収に伴うモデル・データ方針の変化リスクを評価に追加しました。",
      "【訂正 2026-08-11】総合評価を **5 → 4.5** に修正しました。当サイトは「5つの軸（AI品質・使いやすさ・コスパ・拡張性・企業向け）を加重平均して総合スコアを算出する」と公表していますが、本記事の公表値はその計算結果（4.7）と乖離していました。各軸の評価そのものは変更しておらず、**公表している算出方法どおりに総合スコアを計算し直した**ものです。",
      "【追記 2026-09-20】SpaceX による Anysphere 買収の**完了**を反映しました。本文は「Q3 2026 クローズ予定」のままでしたが、合併の効力は**2026年8月14日**に発生しており、当サイトも9月12日に報じています。記事間で食い違っていたため、該当箇所を更新しました。なお料金・切替可能モデルの現行確認は行っていないため、`lastReviewed` は据え置いています。",
      "【訂正 2026-09-30】（誤）「Background Agent」という名称 →（正）現行の公式ドキュメントでは Cloud Agents。（誤）「すべて従量モデルで、各プロンプトが request-equivalent credits を消費」→（正）現行の公式ドキュメントでは、Cursor Models と Other Models の2つの利用枠を API 価格ベースで消費する方式で、request 単位の課金は旧プラン（レガシー）の扱いになっている。`.cursorrules` の記述は、現行ドキュメントが説明している `.cursor/rules` 配下のルールファイルに改めた（`.cursorrules` への言及は現行ドキュメントには見当たらない）。",
      "【訂正 2026-09-30】料金表の「Business / Enterprise」を、公式ドキュメントの区分（Teams と Enterprise の2つの法人向けプラン）に合わせて「Enterprise」に改め、（誤）Ultra「優先サポート」→（正）公式料金ページの Ultra は「Priority access to new features」（新機能への優先アクセス）。Hobby の内容を公式料金ページの記載に、Teams の SSO 表記を SAML/OIDC SSO に合わせた。インド向けの Start プラン（₹649/月・税込）を追記した。（誤）Pro+「Pro の5倍 Agent 上限」→（正）Cursor 公式料金ページ（Pro+ / Ultra の切替表示）では Pro+ は「3x Pro limits on Agent」、Ultra は「20x Pro limits on Agent」。Enterprise 行の「SOC 2」は料金ページ下部の会社全体の認証表示でありプランの機能ではないため外し、Enterprise 列に記載のある「優先サポートとアカウント管理」に差し替えた。",
      "【追記 2026-09-30】Cursor 公式ドキュメントでの現行の確認結果。(1) SpaceX による買収は、Cursor 公式ブログ（2026年8月14日「Cursor is now a part of SpaceX」）が「SpaceX に正式に買収された。4月に発表した SpaceXAI との提携から始まった手続きの完了」と述べている。本文中の取引額・株式交換の形態・完全子会社化・SpaceXAI 部門への配置は、当サイトの別記事に依っており、この公式ブログには書かれていない。(2) Models & Pricing の Cursor Models 利用枠は Grok 4.7 / 4.6 / 4.5 と Composer 2.5 で、Sonic の記載は見当たらない。Grok 4.7 は 2026年9月21日、Grok 4.6 は 8月12日に公開されている。第三者モデルは Claude Fable 5.1 / Opus 5.5 / Sonnet 5.5、GPT-5.6（Luna / Sol / Terra）、Gemini 3.1 Pro / 3.8 Flash などが並ぶ。(3) Auto は Cursor Router（2026年7月22日）で動き、Cost / Balance / Intelligence の3モードがある。(4) 6月29日の iOS アプリは公式 changelog では public beta と記載されており、7月29日に iPad 版も加わった。8月17日に Origin（コードホスティング、early beta）、9月2日に自己ホスト型マシン（self-hosted machines）、9月10日に Projects（複数エージェントを束ねる機能、beta）、9月23日に Rollouts と Security Review（Teams / Enterprise 向け）が公開された。(5) Bugbot は 2026年6月10日の公式 changelog で、Composer 2.5 が動力になり、平均レビュー時間が約90秒、1回あたりの費用が約22%減と説明されている。これは Cursor 自身の説明であり、独立した検証は確認できていない。本文の「1 PR 平均 $1.00-$1.50」は、この変更以前の値かどうかを含め、公式ページでは確認できていない。",
      "【訂正 2026-09-30】上記の追記（1）の「取引額・株式交換の形態・完全子会社化は当サイトの別記事に依り、公式ブログには書かれていない」のうち、取引額（$60B）・株式対価・完全子会社としての存続・8月14日の効力発生は、SpaceX の8-K（6月16日・8月14日）に記載がある。SpaceXAI 部門への配置は8-K にも Cursor ブログにも記載がない。「Grok V9-Medium が Cursor のデータで訓練された点は Cursor の公式発表では確認できていない」→（正）Cursor は7月8日の公式ブログで Grok 4.5 の訓練に Cursor データが含まれたと説明している。"
    ],
    "tables": [
      {
        "afterParagraph": 27,
        "headers": [
          "プラン",
          "月額",
          "内容"
        ],
        "rows": [
          [
            "Hobby",
            "無料",
            "限定的な Agent リクエスト、Composer の利用（公式料金ページの記載）"
          ],
          [
            "Pro",
            "$20",
            "Agent の拡張上限、Grok の利用枠、フロンティアモデル、Cloud Agents、無制限の Tab 補完"
          ],
          [
            "Pro+",
            "$60",
            "Pro の3倍の Agent 上限"
          ],
          [
            "Ultra",
            "$200",
            "Pro の20倍の Agent 上限、新機能への優先アクセス"
          ],
          [
            "Start（インド限定）",
            "₹649/月（税込）",
            "Cursor Models（Grok・Composer）と Cloud Agents を含む。第三者モデルの利用枠は含まれない"
          ],
          [
            "Teams Standard",
            "$40/seat/月",
            "組織管理、SAML/OIDC SSO、チーム全体の Privacy Mode"
          ],
          [
            "Teams Premium",
            "$120/seat/月",
            "Standard の5倍の利用量"
          ],
          [
            "Enterprise",
            "カスタム",
            "プール利用、請求書払い、SCIM、監査ログ、優先サポートとアカウント管理"
          ]
        ]
      }
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
      },
      {
        "title": "Models & Pricing（現行の利用枠・プラン）",
        "site": "Cursor Docs",
        "url": "https://cursor.com/docs/models-and-pricing#plans"
      },
      {
        "title": "Pricing",
        "site": "Cursor",
        "url": "https://cursor.com/pricing"
      },
      {
        "title": "Cursor Changelog",
        "site": "Cursor",
        "url": "https://cursor.com/changelog"
      },
      {
        "title": "Cursor is now a part of SpaceX",
        "site": "Cursor Blog",
        "url": "https://cursor.com/blog/joining-spacex"
      },
      {
        "title": "Agents Window",
        "site": "Cursor Docs",
        "url": "https://cursor.com/docs/agent/agents-window"
      },
      {
        "title": "Introducing Grok 4.5 (2026-07-08)",
        "site": "Cursor",
        "url": "https://cursor.com/blog/grok-4-5"
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
      "SpaceX が2026年6月16日、Cursor 開発元の **Anysphere, Inc.** を **$60B のオールストック取引**で買収する合併契約の締結を発表した。**史上最大の VC バック・スタートアップ買収**として直ちに記録を更新。SpaceX が6月12日に Nasdaq で **$135/株**でIPO したばかりで、買収発表日には **$192.46/株**まで急騰した直後のディールとなる。",
      "**ディール構造**: 取引は Anysphere と SpaceX の100%子会社との株式合併として組まれ、SpaceX が IPO で調達した現金は使われない構造。Anysphere 株主は **7日間 VWAP** ベースの SpaceX クラス A 株を受け取る。クロージングは規制当局承認次第で **2026年 Q3** を予定。SpaceX-xAI 合併（5月6日確定、xAI 評価額 ~$250B）に続く2回目のフロンティア AI 領域統合で、SpaceX が AI 領域の事業ホールディング体制を本格的に固めた格好。",
      "**Cursor の事業規模**: Cursor は創業から4年弱で **ARR 約$4B**（うち約 **$2.6B** がエンタープライズ B2B 由来）に到達。**5万社超**のエンタープライズ顧客を抱え、**Fortune 500 の約2/3** に開発者ベースの利用がある。1日あたり **約1.5億行**のエンタープライズコードが Cursor 経由で書かれている計算で、AI コーディング市場の支配的プレイヤーとしての地位を確立していた（[Cursor 3 Agent-first Workspace](?a=cursor-3-agent-first-workspace-2026)）。",
      "**戦略的合理性**: SpaceX 自身が買収の狙いを詳しく説明した資料は確認できていない。以下は当サイトによる整理で、「データ・計算・人材」の3点で見る。第一にデータ。SpaceX の8-K（6月16日）は合併の条件を記すのみで、訓練データには触れていない。一方、Cursor の公式ブログ（7月8日）は、SpaceXAI と共同で訓練した Grok 4.5 の訓練に、数兆トークンの Cursor データ（コードベースやツールとの利用者のやりとり、開発者とエージェントのやりとりを含む）が含まれたと説明している（[Grok V9-Medium の記事](?a=xai-grok-v9-medium-consumer-release-cursor-data-2026)）。これは4月21日発表の提携の下で、買収完了（8月14日）より前に行われた訓練で、当事者の説明であり独立した検証は確認できていない。Elon Musk も5月25日に V9-Medium の補足訓練へ Cursor データを追加したと述べている（原文は未読）。 第二に計算 — Cursor は xAI の **Colossus** スーパークラスター（220,000 GPU）にアクセス可能になり、独自モデル Composer 系の継続訓練が大幅加速。第三に人材 — xAI は2026年3月までに **共同創業者11名全員**が離脱しており、Cursor の技術陣がエンジニアリングギャップを埋める。",
      "**市場への影響**: Cursor は買収後もブランド・製品ライン継続が確認されているが、モデル選択肢に変化が出る可能性は高い。これまで Claude Sonnet 4.6・Opus 4.7/4.8 を中心に使ってきた Cursor が、今後 Grok 系を優先する可能性は否定できず、エンタープライズ顧客は「**モデル選択がそのままインフラ選択になる**」現実に向き合うことになる。詳細な市場再編は[AI コーディング市場再編 分析記事](?a=feature-ai-coding-market-realignment-spacex-cursor-2026)を参照。",
      "**規制リスク**: AI 領域・宇宙領域を同一体制下に置く SpaceX-xAI-Cursor の3層構造は、米国 FTC・DOJ のアンチトラスト審査の対象になる可能性が高い。Q3 close 予定は楽観的シナリオで、規制対応次第では 2027 にずれ込む可能性も指摘されている。",
      "【追記 2026-09-30】Cursor 公式ブログ（2026年8月14日）によると、SpaceX による買収は同日完了した。SpaceX の8-K（8月14日提出、Item 2.01）は、Cursor（Anysphere）が SpaceX の完全子会社として存続し、SpaceX の Class A 普通株が交付されたと記載している（暗黙の株式価値は $60B、対価は合併前7取引日の出来高加重平均価格に基づく）。この記事が「Q3 2026 予定」と書いたクロージングは、Q3 内に完了したことになる。完了の詳細は[別記事](?a=spacex-closes-cursor-anysphere-acquisition-2026)を参照。なお Cursor の公式ブログは買収額（$60B）には触れていない。",
      "【訂正 2026-09-30】（誤）「買収するオプション行使を発表」→（正）6月16日の8-Kは合併契約（Agreement and Plan of Merger）の締結を記載しており、オプション行使の記載はない（4月21日に SpaceX 自身が発表したとされる「Cursor を $60B で買収する権利」に関する経緯は、Bloomberg の見出し「SpaceX Has Deal for Right to Acquire Cursor for $60 Billion」で確認したが原文は未読。TechCrunch は派生）。（誤）「NYSE で IPO」→（正）SpaceX の8-Kの表紙は取引所を The Nasdaq Stock Market LLC / Nasdaq Texas, LLC（銘柄 SPCX）と記載している。",
      "【訂正 2026-09-30】（誤）「Cursor の開発者ワークフローデータは Grok 訓練に投入される」「買収同日に消費者公開された Grok V9-Medium は Cursor データで訓練済」→（正）Cursor は公式ブログ（7月8日）で、Grok 4.5 の訓練に数兆トークンの Cursor データが含まれたと説明している。この訓練は提携（4月21日）の下で買収完了（8月14日）より前に行われた。買収完了後のデータの扱いは確認できていない。V9-Medium の6月16日の消費者公開は公式資料で確認できていない（詳細は[Grok V9-Medium の記事](?a=xai-grok-v9-medium-consumer-release-cursor-data-2026)の訂正を参照）。"
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
      },
      {
        "title": "SpaceX Form 8-K (2026-06-16): Agreement and Plan of Merger with Anysphere",
        "site": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/0001181412/000162828026043411/spaceexplorationtechnologi.htm"
      },
      {
        "title": "SpaceX Form 8-K (2026-08-14): completion of acquisition",
        "site": "SEC EDGAR",
        "url": "https://www.sec.gov/Archives/edgar/data/1181412/000162828026056945/spcx-20260814.htm"
      },
      {
        "title": "Cursor is now a part of SpaceX (2026-08-14)",
        "site": "Cursor",
        "url": "https://cursor.com/blog/joining-spacex"
      },
      {
        "title": "Introducing Grok 4.5 (2026-07-08)",
        "site": "Cursor",
        "url": "https://cursor.com/blog/grok-4-5"
      }
    ]
  },
  "feature-ai-coding-market-realignment-spacex-cursor-2026": {
    "body": [
      "SpaceX による Cursor $60B 買収（[速報](?a=spacex-cursor-60b-acquisition-anysphere-2026)）は、AI コーディングツール市場の**勢力図を3極構造**に塗り替える。これまで「Cursor vs GitHub Copilot vs Claude Code」と単発の競争として論じられてきた構図が、**SpaceX-xAI 系、Microsoft 系、独立系**という親会社単位の3勢力に圧縮された。本特集では新しい勢力図と、開発者が直面する選択を整理する。",
      "**第1極: SpaceX-xAI-Cursor 系（垂直統合）** — Cursor 製品（IDE / CLI / Background Agent / Bugbot）は継続するが、内部モデルは段階的に Grok 系へ移行が見込まれる。Cursor 独自モデル Composer 2.5（[Cursor CLI レビュー](?a=cursor-cli)）は Kimi K2.5 ベースだったが、今後は Grok 4.5（[公開記事](?a=xai-grok-4-5-public-launch-opus-class-july-9-2026)）など Grok 系列モデルとの統合が進む。Cursor のデータが Grok の訓練に使われたかについて、Cursor は公式ブログ（7月8日）で、SpaceXAI と共同で訓練した Grok 4.5 の訓練に数兆トークンの Cursor データ（利用者とコードベース・ツールのやりとり、開発者とエージェントのやりとりを含む）が含まれたと説明している。当事者の説明で、独立した検証は確認できていない。訓練は提携（4月21日発表）の下で買収完了（8月14日）より前に行われた。Cursor のどの利用者のデータが対象か（Privacy Mode の利用者が除外されるか等）は確認できていない。**xAI Colossus** スーパークラスター（220,000 GPU）の計算リソースを享受できる利点が大きい。",
      "**第2極: Microsoft-GitHub Copilot 系（モデル多重化）** — GitHub Copilot は **MAI-Code-1-Flash**（Microsoft 内製、6/2 GA）を中核に据えつつ、Claude Sonnet 4.5 / Opus 4.7-4.8、Grok、Gemini など複数のフロンティアモデルを `/model` で切替可能なマルチベンダー戦略を維持する（[Copilot CLI レビュー](?a=github-copilot-cli)）。OpenAI との関係も継続し、Codex / GPT-5.5 も統合済。Azure インフラ・Microsoft 365 統合・エンタープライズ販路という地の利を持つ。",
      "**第3極: 独立系（Anthropic Claude Code / Cognition Devin Desktop）** — Anthropic は **Claude Code**（[Opus 4.8 + Dynamic Workflows](?a=claude-code)）と **Claude Fable 5**（[Fable 5 リリース](?a=anthropic-claude-fable-5-mythos-5-ga-2026)）を武器に、特定インフラに縛られない中立路線を堅持。Workload Identity Federation（[WIF GA](?a=anthropic-workload-identity-federation-ga-service-accounts-2026)）でエンタープライズセキュリティを強化し、AWS・GCP・Azure いずれの顧客にも統合しやすい。Cognition は **Devin / Devin Desktop**（旧 Windsurf を統合）で別系統の独立勢力を形成、Devin Local の高効率エージェントが差別化軸。",
      "**開発者への影響: モデル選択 = インフラ選択**: 従来「どの AI モデルを使うか」は API キーを差し替えるだけの軽い判断だった。SpaceX-Cursor 統合後は、**コーディングエージェントを選ぶことが、その背後の計算インフラ・データ流通・親会社の地政学を選ぶこと**になる。例えば Cursor 経由で Grok を使った場合のデータの扱いは、各社のデータ利用条項と Privacy Mode 等の設定で決まる。Cursor は Grok 4.5 の訓練に Cursor データを使ったと公式に説明している（[詳細](?a=xai-grok-4-5-public-launch-opus-class-july-9-2026)）。他社モデルの訓練での扱いは当稿では確認していない。エンタープライズはこの「データガバナンス」の観点で AI コーディング基盤の選択を見直す必要が出てくる。",
      "**規制と地政学**: AI 領域・宇宙領域・SNS（X）を SpaceX-xAI が一体運営する構図は、米国 FTC のアンチトラスト懸念と EU AI Act の双方で精査される。中国側では DeepSeek・Qwen・Kimi 等のオープンウェイトモデルが「独立系インフラ」を強化、米中分裂が AI コーディング層でも顕在化する。日本企業・公的機関は3極のいずれに依存するかを意識的に決める必要がある。",
      "**今後12ヶ月の見通し**: (1) Cursor から Claude Code・Devin Desktop・GitHub Copilot への移行検討が一定数発生、(2) GitHub Copilot のマルチモデル戦略がさらに強化されデファクト中立基盤化、(3) Anthropic は Claude Code + WIF + Fable 5 でエンタープライズ深耕、(4) 中国系オープンウェイトモデルが「サードオプション」として浮上、という4本柱で市場が動く見込み。",
      "【訂正 2026-09-30】（誤）「Cursor の開発者ワークフローが Grok の訓練データに」「Grok を Cursor 経由で使うと開発データが xAI 訓練に流れ、Claude を使うとデータは Anthropic で訓練に使われない」→（正）Cursor が公式ブログ（7月8日）で、Grok 4.5 の訓練に数兆トークンの Cursor データが含まれたと説明している（当事者の説明）。Anthropic 側の扱いは当稿では確認しておらず削除した。Grok V9-Medium の6月16日の消費者公開は公式資料で確認できていない。"
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
      },
      {
        "title": "Introducing Grok 4.5 (2026-07-08)",
        "site": "Cursor",
        "url": "https://cursor.com/blog/grok-4-5"
      },
      {
        "title": "Cursor is now a part of SpaceX (2026-08-14)",
        "site": "Cursor",
        "url": "https://cursor.com/blog/joining-spacex"
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
      "xAI の次世代基盤モデル Grok V9-Medium（1.5兆パラメータ）について、Elon Musk が2026年5月25日に X で訓練の完了を投稿し、2〜3週間後の公開を予告した。当初この記事は「6月16日に X と SuperGrok で消費者向けに公開された」と伝えたが、その公開は公式資料で確認できない。6月16日の TechTimes は見出しに反して本文では公開を予定として書き、6月29日の同紙は「公開の窓は発売のないまま過ぎた」と書いている。V9 基盤とされるモデルは、7月8日に Grok 4.5 として公開された。本稿は速報を、確認できる経緯の整理に再構成した（編集履歴を参照）。SpaceX は6月16日に Cursor（Anysphere）との合併契約を締結している（[Cursor 買収](?a=spacex-cursor-60b-acquisition-anysphere-2026)）。",
      "確認できる経緯: Musk は5月25日の X 投稿で、V9-Medium（1.5T）の訓練が完了し、評価結果は良好で、fine-tuning は進行中、reinforcement learning は数日後に始まり、公開まで2〜3週間と述べた（[xAI 6月集中更新](?a=xai-grok-june-2026-voice-imagine-connectors-2026)）。投稿の原文は直接読めておらず、検索索引に出た文面と複数媒体の引用で確認した。規模は現行の本番モデル v8-small の約3倍で、TechTimes は v8-small を approximately 500 billion（約5000億）パラメータと書き、1.5兆の3分の1とも一致する（一次資料は未読）。",
      "Cursor データについて（当事者の説明）: Musk の5月25日の投稿は、補足訓練で Cursor のデータを多く追加し、今後さらに追加すると述べている。Cursor の公式ブログ「Introducing Grok 4.5」（2026年7月8日）は、Grok 4.5 を SpaceXAI と共同で訓練したとし、訓練には「コードベースやソフトウェアツールと利用者とのやりとりを幅広く捉えた、数兆トークンの Cursor データ」が含まれ、このデータによりモデルは既存のソフトウェアと「開発者とエージェントのやりとり」の両方から学べる、と説明している（英語原文の要約）。同ブログは、Cursor のコードベースの過去のスナップショットが誤って訓練に入り、CursorBench で有利になったことも述べている。いずれも当事者（xAI 側の Musk と Cursor）の説明で、独立した検証は確認できていない。Musk の投稿は V9-Medium、Cursor のブログは Grok 4.5 を指しており、両者の対応は Musk の6月28日の発言（Grok 4.5 は 1.5T の V9 基盤モデルに基づく）による。この発言は GIGAZINE や Free Press Journal などの引用でのみ確認でき、原文は読めていない。この訓練は4月21日発表の SpaceXAI との提携の下で行われ、買収の完了（8月14日）より前のことである。Cursor のどの利用者のデータが対象か（Privacy Mode の利用者が除外されるか等）は確認できていない。「コード入力、AI 提案、採用または却下、修正」という系列の表現は当サイトの当初の記述で、Cursor の資料にも報道（TechTimes は、開発者が要件を記述し、コードベースをたどり、修正を重ね、AI の応答を導く様子と書く）にも同じ文言はない。SpaceX の8-K（6月16日、8月14日）は訓練データに触れていない。",
      "提供状況: 6月16日の TechTimes は、見出しは「Arrives」だが本文では公開を「6月中旬が目標で、その窓は今開いている」という予定の段階で書き、6月17日の Big Hat Group は「any day now」と書き、6月29日の TechTimes は「当初は6月中旬の公開が見込まれたが、発売のないまま窓は過ぎた」と書いた（いずれも二次情報）。Musk は6月28日に Grok 4.5 が SpaceX と Tesla での private beta に入ったと述べたと報じられている（原文は未読）。V9 基盤とされるモデルの一般提供は、Cursor ブログと xAI の API release notes で確認できる7月8日の Grok 4.5 である。xAI の API release notes に grok-v9-medium の掲載はなく、6月中の公開を示す公式資料は見つからない。6月16日に公開されたとする根は、出典不明の集約サイト系の1系統のみで、元記事が挙げていた ChatForest は現在 404 である。以上から6月16日の消費者公開は行われなかったとみられるが、公開しなかったと当事者が述べた資料は見つかっていない。",
      "ベンチマークについて、TechTimes（6月16日）は SpaceX が SWE-bench Verified で Claude や GPT-5.5 と比較する意向を示したと報じた。V9-Medium 自体の公式ベンチマーク値は確認できていない。",
      "**編集履歴**",
      "【訂正 2026-09-02】一次ソースのうち `https://chatforest.com/builders-log/xai-grok-v9-medium-1-5t-coding-model-mid-june-2026-builder-guide/` が到達できなくなっていた（HTTP 404）ため削除した。移転先を探したが見つからなかった。**記事の事実関係そのものは、残る 1 件の一次ソースで裏付けられている。** 削除した URL をここに記録しておくのは、読者が元の記事を自分で探せるようにするためである。",
      "【訂正 2026-09-30】（誤）「Grok V9-Medium が2026年6月16日に X と SuperGrok で消費者向けに公開された」→（正）公開は公式資料で確認できず、行われなかったとみられる。V9 基盤とされるモデルは7月8日に Grok 4.5 として公開された。あわせて、速報だった本稿を後日、確認できる経緯の整理に再構成した。根拠: xAI・SpaceX・Cursor の公式資料に6月の公開はなく、6月16日の TechTimes は、見出しに反して本文では公開を予定として書き、6月29日の同紙は「公開の窓は発売のないまま過ぎた」と書いた。",
      "【訂正 2026-09-30】（誤）v8-small「500億パラメータ」→（正）約5000億パラメータ（1.5兆の3分の1で、TechTimes の approximately 500 billion と一致。一次資料は未読）。",
      "【訂正 2026-09-30】（誤）「Cursor の実開発者ワークフローデータ（コード入力→AI 提案→採用/却下→修正）を訓練データに採用」「SpaceX-Cursor 統合の最初の実利」「Fortune 500 の約2/3・日に約1.5億行という規模を考えると極めて貴重」→（正）Cursor は公式ブログ（7月8日）で、Grok 4.5 の訓練に数兆トークンの Cursor データ（利用者とコードベース・ツールのやりとり、開発者とエージェントのやりとりを含む）が含まれたと説明している。訓練は提携の下で買収完了より前に行われた。「採用/却下」の系列という記述と、利用規模の数字を訓練データ量と結びつける記述には根拠がないため削除した。",
      "【訂正 2026-09-30】（誤）「Claude / GPT-5.5 への対抗が明確な狙い」「エンタープライズ展開には今後数週間〜数ヶ月の追加待機が必要」「Claude・GPT-5.5 の SWE-bench リードを切り崩すことを目標」→（正）当事者の公式な目標表明は確認できていないため削除・書き換えた。"
    ],
    "primarySources": [
      {
        "title": "Grok V9-Medium Arrives as SpaceX Seals Cursor: Developers Face Model-Choice Risk",
        "site": "TechTimes",
        "url": "https://www.techtimes.com/articles/318495/20260616/grok-v9-medium-arrives-spacex-seals-cursor-developers-face-model-choice-risk.htm"
      },
      {
        "title": "Elon Musk on X: Grok foundation model V9-Medium (1.5T) has finished training (2026-05-25。原文は未読、検索索引で確認)",
        "site": "X",
        "url": "https://x.com/elonmusk/status/2058787384364265734"
      },
      {
        "title": "Introducing Grok 4.5 (2026-07-08)",
        "site": "Cursor",
        "url": "https://cursor.com/blog/grok-4-5"
      },
      {
        "title": "Cursor partners with SpaceX on model training (2026-04-21)",
        "site": "Cursor",
        "url": "https://cursor.com/blog/spacex-model-training"
      },
      {
        "title": "Cursor is now a part of SpaceX (2026-08-14)",
        "site": "Cursor",
        "url": "https://cursor.com/blog/joining-spacex"
      },
      {
        "title": "Release Notes | SpaceXAI Docs",
        "site": "SpaceXAI Docs",
        "url": "https://docs.x.ai/developers/release-notes"
      },
      {
        "title": "（二次資料）Grok 4.5 Enters Private Beta at SpaceX and Tesla: No Public Access, No Independent Benchmark (2026-06-29)",
        "site": "TechTimes",
        "url": "https://www.techtimes.com/articles/319314/20260629/grok-45-enters-private-beta-spacex-tesla-no-public-access-no-independent-benchmark.htm"
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
      "**6月16日（火）** — AI 業界史上最大級の M&A 発表。**SpaceX が Cursor（Anysphere）を $60B で買収**、史上最大の VC バック・スタートアップ買収を更新（[SpaceX-Cursor 買収](?a=spacex-cursor-60b-acquisition-anysphere-2026)）。同日、Grok V9-Medium（1.5T パラメータ）の公開が予定として報じられたが、6月中に公開されなかったとみられる（[Grok V9-Medium](?a=xai-grok-v9-medium-consumer-release-cursor-data-2026)）。Elon Musk は5月25日に Cursor のデータを補足訓練に追加したと述べており、Cursor は7月8日に、Grok 4.5 の訓練に数兆トークンの Cursor データが含まれたと説明している（いずれも当事者の説明）（[市場再編 分析](?a=feature-ai-coding-market-realignment-spacex-cursor-2026)）。",
      "**6月17日（水）** — Anthropic が **Workload Identity Federation（WIF）を GA**、静的 API キーが不要に。AWS IAM・GCP・Azure・GitHub Actions・OIDC で直接認証、Service Accounts も導入。エンタープライズセキュリティの大改革（[WIF GA](?a=anthropic-workload-identity-federation-ga-service-accounts-2026)）。",
      "**6月18日（木）** — **Noam Shazeer が Google → OpenAI 移籍**、Transformer 共著者が OpenAI Architecture Research Lead 就任、Alphabet 株 7% 下落（[Shazeer 移籍](?a=noam-shazeer-google-to-openai-architecture-research-2026)）。同日 **Grok Imagine Video 1.5** が公開、AI 動画 leaderboard 1位・Sora 比 86% 安（[Grok Video 1.5](?a=xai-grok-imagine-video-1-5-86percent-below-sora-2026)）。",
      "**週の総括** — AI 業界の勢力図が劇的に動いた1週間。SpaceX-Cursor 買収は「**モデル選択 = インフラ選択**」時代の到来を告げた。Anthropic は WIF GA で静的 API キーを過去のものにし、エンタープライズ認証の標準を更新。Noam Shazeer の移籍は Google AI の人材維持力に対する市場の疑念を強め、Alphabet 株 7% 下落と Gemini 3.5 Pro GA 延期続報（[Gemini Pro 延期](?a=google-gemini-3-5-pro-ga-delay-deep-think-2026)）と相まって、米国3強の力学が変化していることを示した。",
      "【訂正 2026-09-30】（誤）「Grok V9-Medium が X と SuperGrok で消費者公開、Cursor 開発者ワークフローデータで訓練」「両発表が同日になったのは偶然ではなく」→（正）6月16日の報道は V9-Medium の公開を予定として書いており、実際の公開は確認できない。Cursor データは Musk（5月25日）と Cursor（7月8日）が訓練への使用を述べている（当事者の説明）。同日とする因果の記述は根拠がないため削除した。"
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
      "**Google からの連続流出**: 6月18日に Transformer 共著者 Noam Shazeer が OpenAI へ、その翌19日にノーベル化学賞共同受賞者の Jumper が Anthropic へと、**わずか2日間で2人のトップ研究者が離脱**した。Google AI の組織モメンタムへの懸念を市場が再評価する材料となり、Gemini 3.5 Pro GA 延期続報（[Gemini Pro 延期](?a=google-gemini-3-5-pro-ga-delay-deep-think-2026)）と相まって、Google AI への市場の信頼回復には時間が必要な状況となった。",
      "**Anthropic への意義**: Anthropic は5月28日に **Series H $65B / $965B 評価額**確定（[Anthropic 5月補遺](?a=anthropic-may-2026-series-h-milan-korea-arr-47b-2026)）、6月1日に**機密 S-1 提出**、6月9日に **Claude Fable 5 + Mythos 5 リリース**（[Fable 5 / Mythos 5](?a=anthropic-claude-fable-5-mythos-5-ga-2026)）と立て続けに大型ニュースを発信してきた。今回の Jumper 加入で、生命科学・タンパク質設計領域での Claude 専門化が進む可能性が高い。OpenAI が **GPT-Rosalind**（[GPT-Rosalind](?a=openai-gpt-rosalind-life-sciences-update-2026)）で生命科学領域に踏み込んでいる中、Anthropic も同領域で人材厚みを強化する形だ。",
      "**Google が直面する構造課題**: Google はもともと Transformer 論文を生んだ場所であり、AlphaFold で生命科学 AI の標準を作った組織でもある。それらの主要研究者が**わずか2日間で OpenAI と Anthropic の双方に流出**する事態は、Google が「研究の発祥地」から「研究の供給源」へと立場を変化させつつあることを示唆する。報酬・組織自由度・モデル投入スピードのどの要素が決定打になったかは公式には語られていないが、Demis Hassabis 体制下の DeepMind 統合後の文化的調整が試される局面となった。",
      "---",
      "**【訂正 2026-08-11】** 3点を訂正しました。**(1)** 発表日:（誤）newsDate を 2026-06-26 と記載 →（正）**2026年6月19日**。Jumper 本人が同日に X で「After nearly nine years, I have decided to leave Google DeepMind and join Anthropic」と表明し、Bloomberg・CNBC が同日報じています。**(2)** 経過日数:（誤）「8日間で2人のトップ研究者離脱」「わずか8日間で双方に流出」→（正）Shazeer の表明が6月18日、Jumper が6月19日のため **わずか2日間**。**(3)** 株価に関する記述: 「Alphabet 株は Shazeer 移籍時の 7% 下落に続き、週後半に追加の下落を記録」という記述を削除しました。市場データの出典を提示できず、下落と移籍の因果も裏付けられないためです。あわせて、公開当初の一次ソースが二次情報2件のみだった点を改め、**Bloomberg・CNBC を出典に追加**しました。移籍そのものは本人の表明により確認済みの事実です。"
    ],
    "primarySources": [
      {
        "title": "Nobel Winner John Jumper to Leave Google DeepMind for Anthropic",
        "site": "Bloomberg",
        "url": "https://www.bloomberg.com/news/articles/2026-06-19/nobel-winner-john-jumper-to-leave-google-deepmind-for-anthropic",
        "note": "本人の X 投稿「After nearly nine years, I have decided to leave Google DeepMind and join Anthropic」を報道"
      },
      {
        "title": "John Jumper to leave Google DeepMind for Anthropic",
        "site": "CNBC",
        "url": "https://www.cnbc.com/2026/06/19/john-jumper-to-leave-google-deepmind-for-anthropic.html"
      },
      {
        "title": "Google DeepMind Nobel winner John Jumper joins Anthropic in latest AI talent coup",
        "site": "People Matters",
        "url": "https://sea.peoplemattersglobal.com/news/leadership/google-deepmind-nobel-winner-john-jumper-joins-anthropic-in-latest-ai-talent-coup-50417"
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
      "**性能ベンチマーク**: 公表値では **SWE-bench Pro で 63.2%**（Sonnet 4.6: 58.1% → +5.1pt、Opus 4.8: 69.2%）。Opus 4.8 との差は約 6pt に縮まり、価格差（Opus 4.8 は $5/$25、Sonnet 5 は $2/$10 で 2.5倍）を考慮すれば実質的な優位に。**GDPval-AA v2（知識労働）では 1618 で Opus 4.8（1615）を上回り**、**Humanity's Last Exam（ツール利用）は 57.4%**（Opus 4.8: 57.9%）でほぼ互角、**プロンプトインジェクション安全性でも同水準**を達成。「Sonnet で Opus 級」がほぼ現実になった。",
      "**料金体系**: 公開時は **8月31日までの導入価格 $2/$10 per 1M tokens**（入力/出力）として案内され、9月1日に $3/$15 へ引き上げられる予定だったが、**この引き上げは行われず、$2/$10 が標準価格として恒久化された（2026年8月10日に公式が発表）。** **現行価格は $2/$10 である**（Sonnet 4.6 は $3/$15）。 ただし新トークナイザは同じテキストで **1.0〜1.35倍**多くトークンを数える傾向があり、レート表通りの単純換算では実コストの読みを誤る。",
      "**Adaptive Thinking と 1M コンテキスト**: **1M トークン**のコンテキストは Sonnet 4.6・Opus 系と同水準を維持。**Adaptive Thinking が常時オン**で、Claude Code や API では**エフォートのデフォルトが high**に設定されている。最大出力は 128K、batch-API のベータヘッダ `output-300k-2026-03-24` を指定すれば **最大 300K トークン出力**まで拡張可能。訓練データのカットオフは **2026年1月**まで延長。",
      "**利用可能プラットフォーム**: **claude.ai の Free と Pro のデフォルト**モデルとして即日切替。Max・Team・Enterprise でも利用可能。API に加え、**Claude Code**（[Claude Code レビュー](?a=claude-code)）、**Cursor**（[Cursor レビュー](?a=cursor-editor)）、**VS Code**、**GitHub Copilot**（[Copilot CLI レビュー](?a=github-copilot-cli)）でも即日採用。マルチプラットフォーム展開の速度が特筆される。",
      "**「tokenmaxxing → 効率性」の答え**: 直前に公開された分析記事（[効率性転換分析](?a=feature-tokenmaxxing-to-efficiency-market-shift-2026)）で整理した「価格2極化と効率性優先」の潮流に対する Anthropic の明確な回答。Fable 5（$10/$50）は限定的な最上位ニーズ向けに残しつつ、**日常のエージェント運用は Sonnet 5** で受ける戦略。OpenAI が GPT-5.6 Sol/Terra/Luna（[GPT-5.6 プレビュー](?a=openai-gpt-5-6-sol-terra-luna-preview-2026)）で階層を投入した動きへの直接的な対抗でもある。",
      "**Alibaba 蒸留告発との並行**: 6/24 の [Anthropic vs Alibaba 蒸留告発](?a=anthropic-accuses-alibaba-claude-distillation-fraud-2026) に続くタイミングで、「**フロンティア性能を安価に提供することで、蒸留する経済的インセンティブそのものを減らす**」戦略的な意味合いもある。エンタープライズ・スタートアップに正規ルートでの利用を促進し、Anthropic の収益基盤を厚くする狙い。**Claude Science** の同時投入で、生命科学領域（John Jumper 加入と接続 [Jumper 移籍](?a=john-jumper-google-deepmind-to-anthropic-nobel-2026)）でも競争力を強化した。",
      "【追記 2026-09-02】（この追記は書いた時点で既に誤っていたため 2026-09-30 に訂正済み。下の【訂正 2026-09-30】参照）導入価格 $2/$10 が8月31日で終了し 9月1日から $3/$15 になると記していたが、この引き上げは撤回が2026年8月10日に公式発表されており、9/2 の時点で既に $2/$10 が標準価格だった。",
      "【訂正 2026-09-30】（誤）導入価格 $2/$10 は8月31日で終了し、9月1日以降の現行価格は $3/$15（Sonnet 4.6 と同じ）→（正）Sonnet 5 の公式料金は $2/$10 で、公開時に案内された 9/1 の $3/$15 への引き上げは行われず、$2/$10 が標準価格として恒久化された（公式料金表の脚注、Sonnet 5 モデルページ、Claude Code 2.1.243 の changelog で確認）。excerpt・料金体系の段落・2026-09-02 の追記を修正した。なお 9/2 の追記は、引き上げの撤回が公式発表された 8/10 より後に書かれており、書いた時点で既に誤っていた。あわせて段落[1]の Opus 4.8 との価格差「3倍・4倍」を、公式料金表の $5/$25 対 $2/$10 に基づく 2.5倍に訂正した。"
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
      },
      {
        "title": "Pricing - Claude API Docs（Claude Sonnet 5 の脚注3）",
        "site": "platform.claude.com",
        "url": "https://platform.claude.com/docs/en/about-claude/pricing"
      },
      {
        "title": "Claude Sonnet 5 モデルページ（Pricing 節）",
        "site": "platform.claude.com",
        "url": "https://platform.claude.com/docs/en/models/sonnet-5/overview"
      },
      {
        "title": "Release notes（2026年8月10日: Claude Sonnet 5 の導入価格が標準価格に）",
        "site": "platform.claude.com",
        "url": "https://platform.claude.com/docs/en/release-notes/overview"
      }
    ]
  },
  "cursor-ios-app-launch-cloud-agents-remote-2026": {
    "body": [
      "Anysphere が2026年6月29日、待望の **Cursor 公式 iOS アプリ**を App Store で公開した。SpaceX による Anysphere $60B 買収（[SpaceX-Cursor 買収](?a=spacex-cursor-60b-acquisition-anysphere-2026)）の発表からわずか13日後の投入で、モバイル展開のスピードは買収後のガバナンスに影響がないことを示す形となった。有料プラン向けの Public Beta として提供される。",
      "**2 軸の機能構成**: アプリは2つの主要モードで設計されている。**(1) Always-on クラウドエージェント**: バックグラウンドで動作するエージェントを起動し、iPhone から進捗を監視できる。移動中や打ち合わせ中も指示だけ出して結果を後で確認するワークフロー。**(2) リモートコントロール**: PC 上で稼働中のエージェントを iPhone から操作する。デスク周りを離れても長時間タスクを制御できる。",
      "**音声入力とレビュー機能**: **音声ディクテーション**を搭載し、話しかけるだけでバックグラウンドのコード作業をトリガー可能。エージェントが走り続けている間に、iPhone 上で **diff レビュー**、**PR マージ**、**スクリーンショット注釈**まで完結できる設計。「モバイル1台で開発者ワークフローを完結」というビジョンが具体化した。",
      "**料金体系**: iOS アプリ自体は有料 Cursor プランに含まれるが、**クラウドエージェント実行には有料プランが必須**で、エージェント実行は選択したモデルの API 料金で従量課金される。導入プロモーションとして、Cursor 独自モデル **Composer 2.5 が7月5日まで -75%** で提供される。SpaceX-Cursor 統合下で Composer 系から Grok 系への段階移行も予想される中（当サイトの見方で、公式の発表ではない）、Composer 2.5 の販促は既存モデルの利用者拡大を狙ったもの。",
      "**Cursor のスケール**: 買収時点の数字として、Cursor は **100万人超の有料ユーザー**、**Fortune 1,000 の 70%** をクライアントに持つ。今回の iOS アプリ投入は、この巨大な既存顧客ベースに対する新しい接点の追加で、モバイルからの利用が加われば MAU の伸びが一段加速する可能性が高い。",
      "**モバイル・エージェントの新時代**: 同日6月29日には **OpenClaw の iOS/Android ネイティブアプリ**も公開されており（[OpenClaw モバイル](?a=openclaw-ios-android-native-app-2026)）、「エージェント AI をモバイルで走らせる」時代が偶然にも同時にスタートした。両者の違いは、Cursor はクラウドエージェントの制御端末としてのモバイル、OpenClaw はモバイルデバイス自体をエージェントの実行環境（ローカルデータへのアクセス点）とする設計の違い。開発者向けとパーソナル AI 向けで、モバイル AI の2つの方向性が明確になった。",
      "【追記 2026-09-30】Cursor は7月8日に Grok 4.5 を公開し、公式ブログで「Composer 2.5 は引き続き提供し、この規模のモデルを今後も出す」と述べている。Grok V9-Medium の6月中の公開は確認できていない（[Grok V9-Medium の記事](?a=xai-grok-v9-medium-consumer-release-cursor-data-2026)）。"
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
      },
      {
        "title": "Introducing Grok 4.5 (2026-07-08)",
        "site": "Cursor",
        "url": "https://cursor.com/blog/grok-4-5"
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
        "headers": [
          "分野",
          "データベース",
          "概要"
        ],
        "rows": [
          [
            "ゲノミクス",
            "GenBank",
            "NCBI が運営する核酸塩基配列の公的アーカイブ。ほぼ全ての公開遺伝子配列を格納"
          ],
          [
            "ゲノミクス",
            "Ensembl",
            "EBI・Sanger が運営する脊椎動物中心のゲノム注釈データベース。遺伝子・転写産物・変異を統合"
          ],
          [
            "ゲノミクス",
            "GEO（Gene Expression Omnibus）",
            "NCBI の遺伝子発現データリポジトリ。マイクロアレイ・RNA-seq を公開"
          ],
          [
            "ゲノミクス",
            "BioMart",
            "Ensembl・EBI などの複数バイオ DB を横断クエリするデータマイニング基盤"
          ],
          [
            "臨床・変異",
            "ClinVar",
            "NCBI のヒト変異と臨床的意義の解釈を集約したデータベース"
          ],
          [
            "プロテオミクス",
            "UniProt",
            "EBI・SIB・PIR 共同のタンパク質配列・機能・アノテーション統合 DB"
          ],
          [
            "構造生物学",
            "RCSB PDB（Protein Data Bank）",
            "実験決定されたタンパク質・核酸の3次元構造アーカイブ"
          ],
          [
            "構造生物学",
            "AlphaFold DB",
            "DeepMind と EBI による AlphaFold2 予測タンパク質構造（2億超構造）"
          ],
          [
            "経路・システム",
            "Reactome",
            "手作業でキュレートされたヒト生物学経路データベース"
          ],
          [
            "単細胞",
            "Human Cell Atlas",
            "国際共同プロジェクトによるヒト全身の単細胞レファレンスアトラス"
          ],
          [
            "単細胞",
            "CellGuide",
            "単細胞データの探索・視覚化ツール（コネクタ）"
          ],
          [
            "単細胞・製品連携",
            "10x Genomics",
            "単細胞解析プラットフォームの公式コネクタ"
          ],
          [
            "化学・創薬",
            "PubChem",
            "NCBI の化合物・実質・生物活性データベース。数億の化学構造を収載"
          ],
          [
            "化学・創薬",
            "ChEMBL",
            "EBI が運営する薬理活性化合物のマニュアルキュレーション DB。創薬初期に必須"
          ],
          [
            "ラボ運用",
            "Benchling",
            "ライフサイエンスの電子ラボノート・実験データ管理 SaaS（コネクタ）"
          ],
          [
            "ラボ運用",
            "Synapse.org",
            "Sage Bionetworks が運営する共同研究データ共有プラットフォーム"
          ],
          [
            "文献検索",
            "PubMed",
            "NCBI が運営する生物医学文献データベース。3,500万論文超"
          ],
          [
            "文献検索",
            "Europe PMC",
            "EBI 主導の生物医学文献リポジトリ。全文検索対応"
          ],
          [
            "文献検索",
            "Semantic Scholar",
            "AI2 の研究論文検索エンジン。引用ネットワーク解析"
          ],
          [
            "文献検索",
            "ArXiv",
            "物理・数学・CS 等のプレプリントサーバー"
          ],
          [
            "文献検索",
            "BioRxiv",
            "Cold Spring Harbor Lab の生物学プレプリントサーバー"
          ],
          [
            "制作補助",
            "BioRender",
            "科学イラスト作成 SaaS（コネクタ）"
          ],
          [
            "制作補助",
            "Wiley Scholar Gateway",
            "Wiley の学術文献ゲートウェイ（コネクタ）"
          ]
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
  }
};

export default ARTICLES_BODY_2026_06;
