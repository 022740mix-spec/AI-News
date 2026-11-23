/**
 * 記事本文データ（2026-05 掲載分）
 * ── 自動生成: node scripts/split-articles.mjs ──
 * id → { body, tables, figures, charts, primarySources }
 */
const ARTICLES_BODY_2026_05 = {
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
        "headers": [
          "モデル",
          "種別",
          "公開時期",
          "備考"
        ],
        "rows": [
          [
            "MAI-Voice-1",
            "音声生成",
            "2025年8月",
            "1秒の演算で60秒音声"
          ],
          [
            "MAI-Transcribe-1",
            "STT",
            "2026年4月",
            "25言語対応"
          ],
          [
            "MAI-Image-2",
            "画像生成",
            "2026年4月",
            "Arena.ai Top 3"
          ],
          [
            "Project Polaris（仮名）",
            "コーディング",
            "2026年6月（Build 2026）",
            "GitHub Copilot 中核へ"
          ]
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
      "ByteDance は動画生成モデルを **Seedance 2.0** にアップグレード。**高精細の実写人物動画生成、インテリジェントシーン切替、ワンクリックでのテキスト→動画**生成に対応。ショート動画制作・ライブ配信素材生成で実用フェーズに入った。Sora 2、Runway Gen-4.5、Veo に対する中国側の対抗軸として位置付けられる。",
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
      "Anthropic Opus 4.8（5/28）、Google I/O 2026（5/19〜、Gemini 3.5 Flash / Antigravity / Spark）、そして本特集の中国系5モデル更新を並べると、**米国フロンティアモデル × エージェント基盤** と **中国フロンティアモデル × オープンウェイト × 価格破壊** が、5月という同じ月にほぼ同期して動いた構図が浮かび上がる。**フロンティア競争はもはや3軸（米クローズド・米オープン寄り・中オープン寄り）になりつつある**——というのが、5月末時点の見立てだ。",
      "**編集履歴**",
      "【訂正 2026-09-02】一次ソースのうち `https://aiscopehub.com/latest-domestic-ai-updates-in-may-2026-large-model-upgrades-new-ai-tools/` が到達できなくなっていた（HTTP 404）ため削除した。移転先を探したが見つからなかった。**記事の事実関係そのものは、残る 5 件の一次ソースで裏付けられている。** 削除した URL をここに記録しておくのは、読者が元の記事を自分で探せるようにするためである。",
      "【訂正 2026-10-03】（誤）Sora 2、Runway Gen5、Veo に対する中国側の対抗軸 →（正）Sora 2、Runway Gen-4.5、Veo に対する中国側の対抗軸 「Runway Gen-5」は、Runway の公式資料と独立した報道のいずれでも存在を確認できなかったため訂正した（Gen-5 を扱った2本の記事は同日に取り下げた）。"
    ],
    "tables": [
      {
        "afterParagraph": 22,
        "caption": "中国系フロンティアモデルの主要スペック比較（公式値）",
        "headers": [
          "モデル",
          "リリース",
          "ベンチ要点",
          "コンテキスト",
          "価格・ライセンス"
        ],
        "rows": [
          [
            "Qwen 3.7 Max",
            "5/20",
            "SWE-Pro 60.6、Terminal-Bench 69.7、GPQA 92.4",
            "1M トークン",
            "$2.50/$7.50 per M（クローズド）"
          ],
          [
            "Kimi K2.6",
            "4/20",
            "SWE-Verified 80.2、SWE-Pro 58.6",
            "ネイティブ MM",
            "Modified MIT（オープンウェイト、1T params）"
          ],
          [
            "DeepSeek V4 Pro",
            "4/24 プレビュー",
            "詳細未開示（公式 GA 延期）",
            "1M トークン",
            "オープンソース（1.6T MoE / 49B active）"
          ],
          [
            "Ernie 5.1",
            "5月",
            "推論・数学・MM 改善（公式詳細値非公開）",
            "未公開",
            "クローズド（中国 B2B 中心）"
          ],
          [
            "GLM 更新",
            "5月",
            "コード・論理・専門 QA 改善",
            "未公開",
            "オープンソース（個人無償）"
          ],
          [
            "Seedance 2.0",
            "5月",
            "高精細実写動画生成",
            "—（動画生成）",
            "ByteDance 提供"
          ]
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
        "headers": [
          "カテゴリ",
          "発表内容",
          "提供時期"
        ],
        "rows": [
          [
            "フロンティアモデル",
            "Gemini 3.5 Flash GA",
            "即日"
          ],
          [
            "フロンティアモデル",
            "Gemini 3.5 Pro",
            "翌月リリース予定"
          ],
          [
            "エージェント基盤",
            "Antigravity 2.0 デスクトップアプリ",
            "即日（全世界）"
          ],
          [
            "パーソナルエージェント",
            "Gemini Spark（Beta）",
            "来週（AI Ultra 加入者・米国先行）"
          ],
          [
            "マルチモーダル",
            "Gemini Omni",
            "Gemini アプリ・Flow・YouTube Shorts で稼働中"
          ],
          [
            "OS 統合",
            "Gemini Intelligence（Android/ChromeOS/Wear/Auto）",
            "順次展開"
          ],
          [
            "ハードウェア",
            "Samsung Android XR グラス",
            "公開"
          ],
          [
            "ハードウェア",
            "Android XR オーディオグラス（iPhone 対応）",
            "今秋"
          ],
          [
            "クリエイティブ",
            "Flow / Flow Music モバイルアプリ",
            "Flow=Android Beta、Music=iOS"
          ],
          [
            "料金",
            "AI Ultra プラン",
            "$100/月"
          ]
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
        "headers": [
          "ベンチマーク",
          "Opus 4.8",
          "Opus 4.7",
          "差分"
        ],
        "rows": [
          [
            "SWE-bench Verified",
            "88.6%",
            "87.6%",
            "+1.0pt"
          ],
          [
            "SWE-bench Pro",
            "69.2%",
            "64.3%",
            "+4.9pt"
          ],
          [
            "USAMO 2026（数学）",
            "96.7%",
            "69.3%",
            "+27.4pt"
          ],
          [
            "GraphWalks F1（1M コンテキスト）",
            "68.1%",
            "40.3%",
            "+27.8pt"
          ],
          [
            "エージェント・コンピュータ使用",
            "83.4%",
            "82.8%",
            "+0.6pt"
          ],
          [
            "知識作業スコア",
            "1890",
            "1753",
            "+137"
          ]
        ]
      },
      {
        "afterParagraph": 12,
        "caption": "Opus 4.8 価格体系",
        "headers": [
          "モード",
          "入力 / Mトークン",
          "出力 / Mトークン",
          "備考"
        ],
        "rows": [
          [
            "Standard",
            "$5",
            "$25",
            "Opus 4.7 据え置き"
          ],
          [
            "Fast Mode",
            "$10",
            "$50",
            "2.5倍高速、前世代 Fast 比3倍安い"
          ]
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
        "headers": [
          "項目",
          "内容"
        ],
        "rows": [
          [
            "所在",
            "ニューヨーク"
          ],
          [
            "創業",
            "2022年（約4年前）"
          ],
          [
            "前回評価額",
            "$150M（2024年12月、Series A）"
          ],
          [
            "買収交渉額",
            "$300M 以上（2倍以上のプレミアム）"
          ],
          [
            "主要クライアント",
            "OpenAI、Anthropic、Google、Meta、Cloudflare 等"
          ],
          [
            "提供価値",
            "API スキーマから多言語 SDK を AI で自動生成・更新"
          ]
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
      "5月13日時点で、**Anthropic 自身は今回のラウンドを公式に確認していない**。Bloomberg は「複数の関係者からの情報」、New York Times は Mike Isaac の記事として伝えている。クローズまでの最終的な条件・引受先・実際の評価額は今後の正式発表を待つ必要がある。本記事は両社の報道に基づく時点情報として位置付ける。",
      "**編集履歴**",
      "【訂正 2026-09-02】一次ソースのうち `https://ramp.com/leading-indicators/ai-index-may-2026` が到達できなくなっていた（HTTP 404）ため削除した。移転先を探したが見つからなかった。**記事の事実関係そのものは、残る 4 件の一次ソースで裏付けられている。** 削除した URL をここに記録しておくのは、読者が元の記事を自分で探せるようにするためである。"
    ],
    "tables": [
      {
        "afterParagraph": 7,
        "caption": "Anthropic の主要資金調達・コンピュート契約（2026年4-5月）",
        "headers": [
          "日付",
          "内容",
          "規模",
          "評価額・条件"
        ],
        "rows": [
          [
            "4/20",
            "Amazon が追加投資（即時 $5B + 条件付き $20B）",
            "最大 $25B",
            "評価額 $380B（即時分）"
          ],
          [
            "4/24",
            "Google が投資（即時 $10B + 業績達成で $30B）",
            "最大 $40B",
            "評価額 $350B（即時分）"
          ],
          [
            "5/6",
            "SpaceX Colossus 1 借り上げ",
            "220K GPU / 300+ MW",
            "コンピュート契約（評価額には関与せず）"
          ],
          [
            "5/12-5/13",
            "$30-50B ラウンド交渉中（複数報道）",
            "$30-50B",
            "評価額 $900-950B"
          ]
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
        "headers": [
          "プロダクト",
          "形態",
          "応答レイテンシ",
          "代表的な利用形態"
        ],
        "rows": [
          [
            "HeyGen Interactive Avatar",
            "Zoom App、OpenAI Realtime Voice 統合",
            "—（OpenAI 依存）",
            "本人代理で複数会議に同時参加"
          ],
          [
            "Tavus（Phoenix-4 / Raven-0 / Sparrow-0）",
            "API（CVI）",
            "サブ1秒",
            "他社プロダクトのバックエンド"
          ],
          [
            "Beyond Presence（Genesis）",
            "API + ノーコード",
            "100ms 未満",
            "他社プロダクト・カスタマー応対"
          ],
          [
            "Zoom AI Companion 3.0 アバター",
            "Zoom Workplace 標準",
            "—（カメラ表示用）",
            "本人の表情ミラー（代理会話ではない）"
          ],
          [
            "Read AI Digital Twin",
            "メール／カレンダー",
            "—（テキスト中心）",
            "メール返信・スケジュール調整"
          ],
          [
            "Kaltura Agentic Avatar",
            "エンタープライズ",
            "—",
            "CEO・経営層の代理コミュニケーション"
          ]
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
        "headers": [
          "項目",
          "Microsoft Teams",
          "Zoom",
          "Google Meet",
          "OpenAI API（5/7発表）"
        ],
        "rows": [
          [
            "トランスクリプト（音声→テキスト）",
            "ライブキャプション（標準）",
            "AI Companion トランスクリプト",
            "ライブキャプション + Note Taker",
            "GPT-Realtime-Whisper（$0.017/分）"
          ],
          [
            "翻訳キャプション言語数",
            "Premium で展開",
            "46言語",
            "約70言語",
            "Realtime-Translate: 70+ 入力 → 13 出力"
          ],
          [
            "自動音声翻訳",
            "Interpreter（9言語、本人の声色）",
            "AI Companion 3.0（2025/12〜）",
            "Speech Translation（5ペア、Gemini、声色保持）",
            "GPT-Realtime-Translate（$0.034/分）"
          ],
          [
            "音声翻訳 GA 時期",
            "2025年初頭〜",
            "2025年12月",
            "2026/1/27",
            "2026/5/7（API）"
          ],
          [
            "代表的なライセンス",
            "Teams Premium $10/user/月 または M365 Copilot",
            "有料 Zoom Workplace 等",
            "Google AI Pro / Ultra、Workspace 上位",
            "従量課金"
          ],
          [
            "人間通訳併設",
            "16言語ペアまで",
            "サードパーティ統合可",
            "サードパーティ拡張",
            "—"
          ]
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
      "- **生成動画の品質向上**: Sora 2、Runway（Gen-4.5）、Pika 等の生成動画が長尺・高解像度・キャラクター一貫性で実用水準に達しつつあり、コンテンツ流通量が拡大",
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
      "Anthropic の Project Glasswing（4/7）、OpenAI の Trusted Access for Cyber（5/7）と並んで、**「AI 技術の能力 × 利用範囲の制限」**が同時並行で進む構図が鮮明になってきた。**フロンティアモデル各社の技術競争**と、**業界・規制当局・国家による利用境界の線引き**は別物として進行する。クリエイティブ産業は「業界自治」で先んじ、サイバー・規制業界は「ホスト型 API による許可制配布」で対応している——本記事はその対比として読まれるべき。",
      "【訂正 2026-10-03】（誤）Sora 2、Runway Gen5、Pika 等の生成動画 →（正）Sora 2、Runway（Gen-4.5）、Pika 等の生成動画 「Runway Gen-5」は、Runway の公式資料と独立した報道のいずれでも存在を確認できなかったため訂正した（Gen-5 を扱った2本の記事は同日に取り下げた）。"
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
        "headers": [
          "項目",
          "数値・内容"
        ],
        "rows": [
          [
            "所在地",
            "Memphis（テネシー州）"
          ],
          [
            "GPU 数",
            "220,000 基超（H100 / H200 / GB200）"
          ],
          [
            "新規電力容量",
            "300 MW 超"
          ],
          [
            "稼働開始",
            "2026年5月中"
          ],
          [
            "Claude Code 5時間レート上限",
            "全有料プランで 2倍"
          ],
          [
            "ピーク時間帯の上限低減",
            "Pro / Max で撤廃"
          ],
          [
            "軌道データセンター",
            "ギガワット級を共同検討（研究フェーズ）"
          ]
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
        "headers": [
          "指標",
          "GPT-5.3 Instant → GPT-5.5 Instant"
        ],
        "rows": [
          [
            "高ステークスでの事実誤認",
            "−52.5%"
          ],
          [
            "フラグ付き難会話での事実誤認",
            "−37.3%"
          ],
          [
            "応答単語数",
            "−30.2%"
          ],
          [
            "応答行数",
            "−29.2%"
          ],
          [
            "旧モデルの利用可否",
            "有料ユーザーは3ヶ月間設定で残存"
          ]
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
        "headers": [
          "企業",
          "売上",
          "前年比",
          "AI 関連ハイライト"
        ],
        "rows": [
          [
            "Microsoft（FY Q3）",
            "$829億",
            "+18%",
            "AI 事業 ARR $370億（+123%）、Azure +40%"
          ],
          [
            "Alphabet",
            "—（+22%）",
            "+22%",
            "Google Cloud 四半期売上 $200億 初突破"
          ],
          [
            "Meta",
            "$470億",
            "+33%",
            "CapEx 2026 ガイダンスを $1,250〜1,450億へ上方修正（株価 -6%）"
          ],
          [
            "Amazon",
            "$1,590億",
            "+13%",
            "AWS $304億（+22%）、15四半期で最高の伸び"
          ],
          [
            "Apple（FY Q2）",
            "$1,112億",
            "+17%",
            "サービス収益 $309.8億 過去最高"
          ]
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
  "claude-opus-4-7-review": {
    "body": [
      "**Claude Opus 4.7** は Anthropic が2026年4月16日に一般提供（GA）開始したフラッグシップモデル。**SWE-bench Verified 87.6%**（公式値、Opus 4.6 は 80.8%）、**Terminal-Bench 2.0 69.4%**（同 65.4%）、**GPQA Diamond 94.2%**（同 91.3%）、**Finance Agent 64.4%**（同 60.7%）と、Anthropic 公表ベンチマークで Opus 4.6 を全方位で上回る。",
      "**新機能 task budgets**: エージェント実行全体（思考・ツール呼び出し・ツール結果・最終出力）のトークン消費目安をモデルに伝える助言的な仕組み。最小予算 20,000 トークン。`max_tokens`（ハードキャップ）とは別物で、モデルが残り予算を見ながら計画し、予算が尽きる際は要約と進捗報告で「やり切って」終わる挙動になる。",
      "**新 effort level「xhigh」**: 既存の `high` と `max` の間に位置する新しい推論深度。難度の高い問題で**推論深度と応答速度のトレードオフをより細かく**調整できる。デフォルトの挙動も「ツール呼び出しを減らし、推論をより活用」する方向に調整されている。",
      "**画像入力の解像度拡大**: Claude シリーズで初めて高解像度をネイティブにサポート。最大解像度は **2576px / 3.75MP**（従来 1568px / 1.15MP の約2.5倍）。UI 要素・図表テキスト・コード画像の読み取りで実用性が増した。",
      "**価格**: 入力 **$5 / Mトークン**、出力 **$25 / Mトークン**（Opus 4.6 据え置き、公式値）。",
      "**提供チャネル**: Anthropic API、Amazon Bedrock、Google Cloud Vertex AI、Microsoft Foundry、GitHub Copilot で同日 GA。",
      "**注意点**: 公開可能版モデルであり、より能力の高い **Claude Mythos Preview** は Project Glasswing（限定50組織）でのみ利用可能。「常時最高性能」を求める場合は配布形態を確認する必要がある。",
      "【追記 2026-10-03】提供状況の更新。Claude API では Opus 4.7（`claude-opus-4-7`）は2026年10月3日時点でも Active で、廃止予定日は「2027年4月16日より前にはしない」とされ、料金も入力 $5 / 出力 $25 のままである。一方、GitHub Copilot は Opus 4.7 の提供を2026年10月2日に終了した（GitHub Docs のモデル退役履歴。代替は「最新の Claude Opus モデル」）。Fast mode は Opus 4.7 では使えない（料金ページに、`speed: \"fast\"` を指定するとエラーになると明記）。本文の注意点に挙げた Claude Mythos Preview は、2026年6月9日に非推奨（Deprecated）となり、廃止日は未定とされている。Anthropic の現行の Opus は Opus 5.5（入力 $4 / 出力 $20）で、[Claude Opus 5.5 レビュー](?a=claude-opus-5-5-review)で扱っている。Mythos 系の現行世代は [Claude Fable 5.1 / Mythos 5.1 レビュー](?a=claude-fable-5-1-mythos-5-1-review)を参照。"
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
        "title": "Model deprecations",
        "site": "Claude API Docs",
        "url": "https://platform.claude.com/docs/en/about-claude/model-deprecations"
      },
      {
        "title": "Pricing",
        "site": "Claude API Docs",
        "url": "https://platform.claude.com/docs/en/about-claude/pricing"
      },
      {
        "title": "Supported AI models in GitHub Copilot（Model retirement history）",
        "site": "GitHub Docs",
        "url": "https://docs.github.com/en/copilot/reference/ai-models/supported-models"
      }
    ]
  },
  "gpt-5-5-review": {
    "body": [
      "**GPT-5.5** は OpenAI が2026年4月23日にリリースしたフラッグシップモデル。GPT-5.4 から約6週間という極めて短いサイクルでの世代交代で、エージェント型タスク（計画 → ツール使用 → 自己検証 → 完了）に最適化されている。OpenAI 公式は **Artificial Analysis の Coding Index で SOTA を「競合フロンティアモデルの半額」で達成**と公称。",
      "**事実精度**: 個別の主張が事実として正しい確率は **+23%**、応答中の事実誤認は **−3%**（OpenAI 公式値）。GPT-5.4 と同等のレイテンシを維持しながら知能水準を引き上げた、と説明されている。",
      "**マルチモーダル統合**: テキスト・画像・音声・動画を **単一のアーキテクチャ**で処理する。曖昧・多段階の指示でも計画 → ツール選択 → 進捗チェック → 軌道修正までを自走できる。",
      "**GPT-5.5 Instant（5月5日デフォルト切替）**: 同系列の高速軽量版が ChatGPT のデフォルトに昇格。**高ステークスの領域（医療・法律・金融）でのハルシネーションが GPT-5.3 Instant 比 −52.5%**、フラグ付き難会話で **−37.3%**。応答の**単語数は約 −30.2%**、行数は約 −29.2% と簡潔化（OpenAI 公式評価）。",
      "**提供範囲**: ChatGPT の Plus / Pro / Business / Enterprise、Codex、API（`gpt-5.5` と `gpt-5.5-pro` として4/24〜）、GitHub Copilot の Pro+ / Business / Enterprise に展開。",
      "**移行注意**: 有料ユーザー向けに GPT-5.3 Instant は3か月間設定で残存。応答スタイルが変わるため、既存のプロンプトテンプレートで挙動差が出る可能性がある。",
      "【編集履歴】",
      "・【訂正 2026-10-03】（誤）API（`chat-latest` 等として4/24〜）→（正）API（`gpt-5.5` と `gpt-5.5-pro` として4/24〜）。OpenAI API の changelog（4月24日）は、GPT-5.5 を Chat Completions と Responses API に、GPT-5.5 Pro を Responses API に公開したと記している。`chat-latest` は ChatGPT で使われている Instant モデルを指す別のスナップショットで、changelog は本番の API 利用には GPT-5.5 を勧めている。",
      "・【追記 2026-10-03】提供状況の更新。GPT-5.5 は2026年10月14日に ChatGPT、ChatGPT Work、Codex から退役する（個人向け・Business・Enterprise・Edu のすべてのプランが対象）。OpenAI API には退役は適用されないと公式ドキュメントは明記しており、API のモデルページでは2026年10月3日時点で入力 $5 / 出力 $30（1M トークンあたり）、コンテキスト 1,050,000 トークン、最大出力 128,000 トークンである。同ページの対応モダリティは、入力がテキストと画像、出力がテキストで、音声と動画は「Not supported」とされている。API から使う場合は、本文のマルチモーダル統合の記述よりこの対応表が基準になる。GitHub Copilot では2026年10月3日時点で GA のまま提供されている。退役の詳細と移行先は [GPT-5.5 の退役の記事](?a=openai-gpt-5-5-retirement-oct-14-codex-chatgpt-2026)、現行世代は [GPT-6 Astra / GPT-6.1 Sol / Sol / Luna レビュー](?a=gpt-6-review)を参照。"
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
      },
      {
        "title": "GPT-5.5（モデルページ）",
        "site": "OpenAI API Docs",
        "url": "https://developers.openai.com/api/docs/models/gpt-5.5"
      },
      {
        "title": "Changelog",
        "site": "OpenAI API Docs",
        "url": "https://developers.openai.com/api/docs/changelog"
      },
      {
        "title": "Models（GPT-5.5 retirement）",
        "site": "ChatGPT & Codex docs",
        "url": "https://learn.chatgpt.com/docs/models"
      },
      {
        "title": "Supported AI models in GitHub Copilot",
        "site": "GitHub Docs",
        "url": "https://docs.github.com/en/copilot/reference/ai-models/supported-models"
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
      "**提供形態**: プレビュー。DeepSeek は GA 時期を明示していない。Bloomberg は4月26日に「**正式版の発表は中国製チップへの統合を優先するため延期される**」と CCTV 関連情報を引用して続報を出している。",
      "【追記 2026-10-03】プレビュー以降の経過を、DeepSeek API の公式変更履歴と料金ページから補う。7月31日に V4-Flash の正式版（DeepSeek-V4-Flash-0731。プレビュー版と同じアーキテクチャ・規模で、事後学習のみやり直したもの）が API でパブリックベータとして公開され、8月13日に V4-Pro の GA 版が APP・Web・API に展開された。料金はピーク／オフピーク制になり、8月16日 16:00（UTC）から適用されている。オフピークはピーク時の半額で、ピークは平日の 01:00〜04:00 と 06:00〜10:00（UTC）である。",
      "9月10日には新アーキテクチャ系列で最小のモデル DeepSeek-V4.1-Flash（画像理解をネイティブに備える） が公開され、V4 Flash と V4 Flash Vision Exp は退役した（旧モデル名 `deepseek-v4-flash` と `deepseek-v4-flash-vision-exp` は当面 V4.1 Flash に転送され、Flash の料金で課金される）。V4 Pro については、DeepSeek は利用者の要望を受けて9月14日以降も API の提供を続け、課金方式も変えないと告知している。2026年10月3日時点の料金表（1M トークンあたり）は、`deepseek-flash`（V4.1 Flash）がオフピークで入力 $0.15（キャッシュヒット $0.003）／出力 $0.60、`deepseek-v4-pro`（DeepSeek-V4-Pro-0813）がオフピークで入力 $0.66（キャッシュヒット $0.022）／出力 $1.98 で、ピーク時はいずれも倍額。コンテキスト 1M、最大出力 384K は変わらない。画像入力に対応するのは V4.1 Flash だけで、V4 Pro は「Not supported」とされている。V4.1 Flash の詳細は [DeepSeek V4.1 Flash の記事](?a=deepseek-v4-1-flash-vision-pro-retirement-2026)を参照（同記事の「V4 Pro は V4.1 Flash に自動で置き換わる」という点は、その後の上記の告知で変わっている）。"
    ],
    "primarySources": [
      {
        "title": "DeepSeek V4 Preview Release",
        "site": "DeepSeek API Docs",
        "url": "https://api-docs.deepseek.com/news/news260424"
      },
      {
        "title": "Change Log",
        "site": "DeepSeek API Docs",
        "url": "https://api-docs.deepseek.com/updates"
      },
      {
        "title": "Models & Pricing",
        "site": "DeepSeek API Docs",
        "url": "https://api-docs.deepseek.com/quick_start/pricing"
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
        "title": "Microsoft Agent 365, now generally available, expands capabilities and integrations",
        "site": "Microsoft Security Blog",
        "url": "https://www.microsoft.com/en-us/security/blog/2026/05/01/microsoft-agent-365-now-generally-available-expands-capabilities-and-integrations/"
      }
    ]
  },
  "overview-2026-week-may04": {
    "body": [
      "**5月5日（火）** — OpenAI が **GPT-5.5 Instant** を ChatGPT のデフォルトに昇格。ハルシネーション 52.5% 減・出力が30%短く、Plus/Pro 向けに過去チャット参照機能も解禁（[GPT-5.5 Instant](?a=openai-gpt-5-5-instant-default-chatgpt-2026)）。",
      "**5月6日（水）** — Anthropic が **SpaceX の Colossus 1** を全量借り上げ。220,000 NVIDIA GPU・300+ MW のコンピュート基盤を確保し、Claude Code レート上限を即日2倍に。AWS Trainium と並行する「クラウド多重化」戦略（[Anthropic-SpaceX](?a=anthropic-spacex-colossus-1-compute-deal-2026)）。",
      "**5月7日（木）** — OpenAI が **3つの大型発表**。GPT-5.5-Cyber「Trusted Access」プログラム、ChatGPT「Trusted Contact」自傷防止機能、新音声 API（GPT-Realtime-2 / Translate / Whisper）。会議・翻訳・安全領域を一気に拡張（[5/7 3発表](?a=openai-cyber-trusted-contact-voice-may7-2026)）。OpenAI Codex のレビューも公開、GPT-5.5 + Daybreak + Workspace Agents 統合の最新版を整理（[Codex レビュー](?a=openai-codex-agent)）。",
      "**週の総括** — OpenAI と Anthropic の「軍拡」が一段と加速。OpenAI は ChatGPT デフォルトを更新し信頼性で攻め、5/7 の3発表でセキュリティ・安全・音声に同時投資。Anthropic は SpaceX Colossus 1 という異色のインフラ調達で計算リソースを確保した。プラットフォーム戦略の差が鮮明になりつつある。",
      "**編集履歴**",
      "【訂正 2026-09-02】一次ソースとして挙げていた `https://www.anthropic.com/news/spacex-colossus-1` は **実在しない URL だった**。当初は「移転先が見つからなかった」として削除したが、改めて調査したところ、この URL には被リンクも検索インデックスも一件も存在せず、**発表内容を要約したそれらしい slug が最初から誤って記録されていた**と判断した。発表そのものは実在するため、**正しい公式発表を出典として追加した**。発表の表題は Colossus 1 ではなく利用上限の引き上げが主で、その中で SpaceX との契約が説明されている。 **実在しない出典を掲げていたことは、記事内容の正誤とは別の問題である。**"
    ],
    "primarySources": [
      {
        "title": "Higher usage limits for Claude and a compute deal with SpaceX",
        "url": "https://www.anthropic.com/news/higher-limits-spacex"
      },
      {
        "title": "GPT-5.5 Instant: smarter, clearer, and more personalized",
        "site": "OpenAI",
        "url": "https://openai.com/index/gpt-5-5-instant/"
      }
    ]
  },
  "overview-2026-week-may11": {
    "body": [
      "**5月11日（月）** — **Cursor が Microsoft Teams 統合** を公開。`@Cursor` メンションでクラウドエージェントにタスク委任、リポジトリ・モデル自動選択で PR まで作成（[Cursor-Teams](?a=cursor-microsoft-teams-integration-2026)、[Cursor CLI レビュー](?a=cursor-cli)、[Cursor Editor レビュー](?a=cursor-editor)）。",
      "**5月12日（火）** — 1日で5本の大型発表。Anthropic が **Claude for Legal** を公開、12分野の実務プラグイン＋20超 MCP コネクタ、Thomson Reuters CoCounsel と提携（[Claude for Legal](?a=anthropic-claude-for-legal-plugins-cocounsel-2026)）。Google が **Googlebook** と **Gemini Intelligence** を発表、Chromebook 後継の AI ネイティブ・ノート PC（[Googlebook](?a=google-googlebook-gemini-intelligence-android-show-2026)）。Anthropic は **Claude Platform on AWS** GA と Claude Code の「agent view」も同日発表（[Anthropic 5/12](?a=anthropic-claude-platform-aws-ga-agent-view-2026)）。会議系特集2本も同時公開（[アバター会議特集](?a=feature-ai-avatar-agents-join-meetings-2026)、[リアルタイム翻訳特集](?a=feature-realtime-translation-teams-zoom-meet-openai-2026)）。",
      "**5月13日（水）** — Anthropic が **$900B 評価額** で $30-50B の調達交渉中と報じられる。OpenAI（$852B）を抜き「世界最高評価額の AI 企業」へ。Ramp 指数では業務利用シェアでも OpenAI を上回ったと判明（[Anthropic $900B](?a=anthropic-900b-valuation-funding-overtakes-openai-2026)）。",
      "**5月14日（木）** — Anthropic が **Stainless 買収交渉中**（$300M+）と報じられる。OpenAI と Google も使う AI モデル SDK 自動生成基盤を取り込み、開発者体験レイヤーを統合する戦略（[Stainless 買収](?a=anthropic-stainless-acquisition-sdk-infrastructure-2026)）。",
      "**週の総括** — Anthropic 週間と呼ぶべき1週間。Claude for Legal・AWS GA・agent view・$900B 調達・Stainless 買収と5発進、評価額・売上シェアで OpenAI を逆転。Cursor は Microsoft Teams 統合でエンタープライズ流通を強化し、Google は Googlebook で AI ネイティブ PC の新カテゴリを提示した。会議系AI（アバター・翻訳）の特集2本も AI 業界の生活浸透フェーズを示している。",
      "**編集履歴**",
      "【訂正 2026-09-02】一次ソースとして挙げていた `https://www.anthropic.com/news/claude-for-legal` は **実在しない URL だった**。当初は「移転先が見つからなかった」として削除したが、改めて調査したところ、この URL には被リンクも検索インデックスも一件も存在せず、**発表内容を要約したそれらしい slug が最初から誤って記録されていた**と判断した。発表そのものは実在するため、**正しい公式発表を出典として追加した**。Anthropic は製品系の発表を claude.com/blog に置いている。あわせて公式 GitHub リポジトリ（Apache-2.0、12プラグインと CoCounsel 連携を含む）を出典に加えた。 **実在しない出典を掲げていたことは、記事内容の正誤とは別の問題である。**"
    ],
    "primarySources": [
      {
        "title": "Anthropic targets $900 billion valuation",
        "site": "Reuters",
        "url": "https://www.reuters.com/technology/anthropic-targets-900-billion-valuation-2026/"
      },
      {
        "title": "Claude for the legal industry — Claude by Anthropic",
        "url": "https://claude.com/blog/claude-for-the-legal-industry"
      },
      {
        "title": "anthropics/claude-for-legal (GitHub)",
        "url": "https://github.com/anthropics/claude-for-legal"
      }
    ]
  },
  "overview-2026-week-may18": {
    "body": [
      "**5月19日（火）** — **Google I/O 2026** 開幕。Gemini 3.5 Flash GA、エージェントオーケストレーション「Antigravity」と「Gemini Spark」を投入、Android XR 眼鏡と Search Live など多領域で発表（[Google I/O 2026](?a=google-io-2026-gemini-3-5-flash-antigravity-spark-2026)、[Gemini CLI レビュー](?a=gemini-cli)）。",
      "**5月20日（水）** — **中国系 AI モデル5月集中更新** の特集記事を公開。Qwen 3.7 Max（5/20、杭州 Cloud Summit）が Opus 4.6 を一部凌駕、Kimi K2.6（4/20）がオープンウェイトで GPT-5.4 を抜く、Ernie 5.1 も論理推論を大幅改善（[中国モデル特集](?a=feature-china-ai-models-may-2026-qwen-kimi-ernie)）。",
      "**週の総括** — 静かな週だが内容は濃い。Google I/O 2026 で Gemini 3.5 Flash・Antigravity・Spark を矢継ぎ早に投入、エージェント分野で Google が攻勢に転じた。並行して中国陣営も Qwen 3.7 Max・Kimi K2.6・Ernie 5.1 を集中投入、Artificial Analysis スコアで米中ギャップを更に縮めた。「米国2強+中国OSS」の3極構造が固まりつつある。",
      "**編集履歴**",
      "【訂正 2026-09-02】一次ソースのうち `https://qwenlm.github.io/blog/qwen3.7-max` が到達できなくなっていた（HTTP 404）ため削除した。移転先を探したが見つからなかった。**記事の事実関係そのものは、残る 1 件の一次ソースで裏付けられている。** 削除した URL をここに記録しておくのは、読者が元の記事を自分で探せるようにするためである。"
    ],
    "primarySources": [
      {
        "title": "Google I/O 2026 Keynote",
        "site": "Google",
        "url": "https://io.google/2026"
      }
    ]
  }
};

export default ARTICLES_BODY_2026_05;
