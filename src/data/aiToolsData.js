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
 *
 * ── 比較記事の更新ルール ──
 * lastReviewed: YYYY-MM-DD — 最後に内容を確認・更新した日付。UIで「最終確認」として表示
 * - 比較記事・料金記事は **毎月1回** 以上の見直しを推奨（AI業界の変化速度に対応）
 * - 見直し時: 価格変更・新製品追加・機能変更を反映し、lastReviewed を更新
 * - 見直して「変更なし」の場合も lastReviewed だけ更新（読者に鮮度を示す）
 *
 * ── レビュー評価基準（5段階・5軸） ──
 * ratings: { "AI品質": n, "使いやすさ": n, "コスパ": n, "拡張性": n, "企業向け": n }
 * - AI品質:   AI支援の精度・推論の深さ・コード生成品質。ベンチマーク・実利用レビューに基づく
 * - 使いやすさ: 導入の簡単さ・学習コスト・日常操作のスムーズさ
 * - コスパ:   価格に対して得られる価値。無料枠の実用性も考慮
 * - 拡張性:   MCP・プラグイン・API・カスタマイズの幅
 * - 企業向け: セキュリティ設定・SSO/SAML・監査ログ・IP補償・Privacy Mode
 * rating（総合）: 5軸の加重平均（AI品質30%、使いやすさ25%、コスパ20%、拡張性15%、企業向け10%）を四捨五入
 * 評価は公式ドキュメント・ベンチマーク・ユーザーレビューに基づき、編集部が2026年3月時点で判断
 */

export const ARTICLES = [
  {
    "id": "supabase-pgvector-0-8-2026",
    "type": "news",
    "coverImage": { "src": "logos/supabase.svg", "alt": "Supabase" },
    "category": "data",
    "title": "Supabase が pgvector 0.8 を標準搭載 — HNSW インデックス性能が3倍に、RAG 構築がさらに手軽に",
    "excerpt": "Supabase が pgvector 0.8 へのアップグレードを全プロジェクトに展開。HNSW インデックスのビルド速度が3倍に向上し、100万ベクトル規模の検索が PostgreSQL 上で実用的に。無料枠でも利用可能。",
    "body": [
      "Supabase は2026年3月27日、全プロジェクトで pgvector 0.8 を標準搭載したことを発表した。HNSW（Hierarchical Navigable Small World）インデックスの構築速度が従来比3倍に向上し、クエリのレイテンシも改善されている。",
      "pgvector 0.8 の主な改善点は、HNSW インデックスのビルドにおけるメモリ使用量の最適化と並列構築の対応。100万ベクトルのインデックス構築が、0.7 では約45分かかっていたものが約15分に短縮された。検索クエリのレイテンシも p99 で20〜30%改善されている。",
      "RAG（検索拡張生成）を構築する開発者にとって、Supabase + pgvector の組み合わせは最も手軽な選択肢の一つ。専用のベクトルデータベース（Pinecone、Weaviate 等）を別途契約する必要がなく、PostgreSQL の中でリレーショナルデータとベクトル検索を統合できる。Supabase の無料枠（500MB）でも pgvector は利用可能で、個人プロジェクトや PoC に最適。",
      "Supabase は同時に、AI 関連の新機能として Edge Functions からの直接ベクトル検索 API と、ドキュメント取り込みパイプライン（PDF → チャンク → エンベディング → 格納）のテンプレートも公開している。"
    ],
    "date": "2026-03-29",
    "newsDate": "2026-03-27",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": ["Supabase", "pgvector", "RAG", "ベクトル検索", "PostgreSQL"],
    "primarySources": [
      { "title": "Supabase Blog", "site": "Supabase", "url": "https://supabase.com/blog" }
    ]
  },
  {
    "id": "pinecone-serverless-free-tier-2026",
    "type": "news",
    "category": "data",
    "title": "Pinecone、サーバーレス無料枠を大幅拡充 — 100万ベクトルまで無料、RAG のプロトタイプが無料で完結",
    "excerpt": "Pinecone がサーバーレスプランの無料枠を100万ベクトルに拡大。これまでの10万ベクトルから10倍に。中規模の RAG アプリケーションのプロトタイプが無料で構築できるようになった。",
    "body": [
      "ベクトルデータベース大手の Pinecone は2026年3月25日、サーバーレスプランの無料枠を従来の10万ベクトルから100万ベクトルに拡大した。書き込み・読み取りのクォータも引き上げられ、月間200万回のクエリが無料枠に含まれる。",
      "Pinecone は「ベクトルデータベースをインフラの心配なしに使う」サーバーレスモデルを2025年に導入し、ベクトル検索のコモディティ化を牽引してきた。今回の無料枠拡大は、Supabase の pgvector や Weaviate Cloud の無料枠との競争を意識した動き。",
      "開発者への影響は大きい。数千〜数万件のドキュメントを扱う RAG アプリケーションであれば、Pinecone の無料枠で本番運用まで賄える。これまでは PoC 段階で有料プラン（$70/月〜）への移行が必要だったが、無料枠の拡大により課金のハードルが下がった。",
      "有料プランは Starter（$33/月、500万ベクトル）から Enterprise（カスタム、SOC 2 / HIPAA 対応）まで。pgvector との選択は「マネージドの手軽さ vs PostgreSQL 統合の柔軟性」で判断する。"
    ],
    "date": "2026-03-29",
    "newsDate": "2026-03-25",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": ["Pinecone", "ベクトルDB", "RAG", "無料枠", "サーバーレス"],
    "primarySources": [
      { "title": "Pinecone Pricing", "site": "Pinecone", "url": "https://www.pinecone.io/pricing/" }
    ]
  },
  {
    "id": "langchain-v04-rag-pipeline-2026",
    "type": "news",
    "category": "data",
    "title": "LangChain v0.4 リリース — RAG パイプラインの構築が大幅に簡素化、LangGraph との統合強化",
    "excerpt": "LangChain v0.4 がリリースされ、RAG パイプラインの構築 API が刷新された。ドキュメントローダー・チャンキング・検索・生成の一連の流れを10行以下で記述可能に。LangGraph によるエージェント型 RAG もサポート。",
    "body": [
      "LangChain は2026年3月26日、v0.4 をリリースした。最大の変更は RAG パイプラインの構築 API の大幅な簡素化で、v0.3 で煩雑だったチェーン構築が、宣言的な API で直感的に記述できるようになった。",
      "v0.4 の新しい `create_rag_chain()` 関数は、ドキュメントローダー（PDF、Markdown、Web ページ）、テキストスプリッター（チャンキング戦略）、エンベディングモデル、ベクトルストア、LLM を引数に取り、検索→コンテキスト注入→生成の一連の RAG パイプラインを1つの関数呼び出しで構築する。v0.3 では同等の処理に30〜50行のコードが必要だった。",
      "LangGraph との統合も強化された。Agentic RAG（エージェント型 RAG）では、LLM が検索クエリを自動で書き換えたり、複数のデータソースを順次検索したりするループ処理が必要になるが、LangGraph のステートマシンでこのフローを定義できる。v0.4 では `create_agentic_rag()` テンプレートが追加され、数行で Agentic RAG を構築可能。",
      "破壊的変更として、v0.3 の `RetrievalQA` チェーンが非推奨になり、v0.5 で削除予定。既存プロジェクトの移行ガイドが公式ドキュメントに用意されている。Python 版と TypeScript（LangChain.js）版の両方で同時リリース。"
    ],
    "date": "2026-03-29",
    "newsDate": "2026-03-26",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": ["LangChain", "RAG", "LangGraph", "エージェント", "Python"],
    "primarySources": [
      { "title": "LangChain v0.4 Release", "site": "LangChain", "url": "https://blog.langchain.dev/" }
    ]
  },
  {
    "id": "midjourney-v8-api-launch-2026",
    "type": "news",
    "coverImage": { "src": "https://images.unsplash.com/photo-1633412802994-5c058f151b66?w=800&h=450&fit=crop&q=80", "alt": "AI アート" },
    "category": "media",
    "title": "Midjourney V8、ついに Web 版と API を正式公開 — Discord 不要で画像生成が可能に",
    "excerpt": "Midjourney が V8 モデルとともに Web アプリと REST API を正式公開。Discord 経由でしか使えなかった制約がなくなり、開発者はアプリケーションに画像生成を直接組み込めるようになった。1画像あたり約$0.03、月額$10のBasicプランで200枚生成可能。",
    "body": [
      "Midjourney は2026年3月、V8 モデルの公開とともに、長らく待望されていた Web アプリケーションと REST API を正式にリリースした。これまで Midjourney は Discord ボット経由でのみ利用可能で、開発者やビジネスユーザーにとって大きなハードルだった。",
      "**Web アプリ**: midjourney.com で直接画像を生成・編集できるブラウザベースのインターフェース。プロンプト入力、スタイルパラメータの調整、生成画像のバリエーション作成、アップスケールが GUI で完結する。Discord のチャンネルを遡って画像を探す必要がなくなった。",
      "**REST API**: 開発者向けに REST API が公開された。JSON でプロンプト・パラメータを送り、Webhook で完成画像の URL を受け取る非同期方式。レート制限は Basic プラン（$10/月）で 200 枚/月、Pro プラン（$30/月）で 900 枚/月（Fast 生成）。Enterprise（$60/月〜）は Relax モードで無制限生成に加え、IP 補償と SAM L統合が付く。",
      "**V8 モデルの進化**: V8 は V6.1 からの大幅なアップグレードで、プロンプトへの忠実度、人物の手指・歯の描写精度、テキスト生成精度が改善された。1024×1024 のデフォルト解像度に加え、最大 4096×4096 のアップスケールに対応。生成速度は Fast モードで約 10 秒。",
      "**開発者にとっての意味**: API の公開により、Midjourney の画質を自社プロダクトに組み込めるようになった。ECサイトの商品画像生成、マーケティング素材の自動作成、ゲームのコンセプトアート量産などのユースケースが開ける。ただし、API の料金は GPT Image（OpenAI）や Flux（Black Forest Labs）と比較して割高で、大量生成にはコスト計算が必要。"
    ],
    "date": "2026-03-28",
    "newsDate": "2026-03-28",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": ["Midjourney", "画像生成", "API", "V8"],
    "primarySources": [
      { "title": "Midjourney Web & API", "site": "Midjourney", "url": "https://www.midjourney.com/" }
    ]
  },
  {
    "id": "runway-gen5-video-generation-2026",
    "type": "news",
    "coverImage": { "src": "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=450&fit=crop&q=80", "alt": "動画制作" },
    "category": "media",
    "title": "Runway Gen-5 発表 — 最大2分の高品質動画生成、物理シミュレーションとカメラ制御が大幅進化",
    "excerpt": "Runway が Gen-5 を発表。最大120秒の動画生成に対応し、物理法則に従った物体の動き、精密なカメラワーク制御、音声同期リップシンクを実現。API 経由でのバッチ生成にも対応し、映像制作ワークフローへの組み込みが現実的に。",
    "body": [
      "Runway は2026年3月、動画生成モデル Gen-5 を発表した。Gen-4.5 から約6ヶ月でのメジャーアップデートで、生成可能な動画の長さ、物理シミュレーションの精度、カメラ制御の自由度が大きく向上した。",
      "**最大2分の動画生成**: Gen-4.5 の最大10秒から大幅に拡張され、最大120秒（2分）の一貫した動画を1プロンプトで生成できるようになった。キャラクターの一貫性が保たれ、シーン遷移も自然に処理される。ただし、長尺生成はコストが高く、120秒の動画1本で約$12〜$18。",
      "**物理シミュレーション**: 水の流れ、布の揺れ、髪の動き、物体の落下といった物理現象が自然に描画される。「ガラスのコップにコーヒーを注ぐ」「風に揺れるカーテン」のようなプロンプトで、物理法則に矛盾しない映像が生成される。Gen-4.5 で頻発した「指が6本」「物体が消える」といったアーティファクトも大幅に減少。",
      "**カメラ制御**: パン、チルト、ズーム、ドリー、クレーンショットなどのカメラワークをテキストで指定できる。「被写体を中心にゆっくり180度回転」「上空から地上へのクレーンダウン」といった映画的なカメラワークが実現する。",
      "**API と料金**: REST API 経由でバッチ生成に対応。5秒動画が約$0.50、30秒が約$3、120秒が約$12〜$18（解像度・品質による）。Standard プラン（$12/月）では 625 クレジット（5秒動画 約50本分）が付与される。Unlimited プラン（$76/月）は Relax モードで無制限生成。",
      "**競合との位置づけ**: Google Veo 3.1 はネイティブ音声付き動画で差別化、Kling 2.0（快手）はコストパフォーマンスで優位。Runway Gen-5 はカメラ制御の精度とプロ向けの編集ツール統合（Adobe Premiere との連携プラグイン）が強み。用途に応じた選択が重要。"
    ],
    "date": "2026-03-27",
    "newsDate": "2026-03-27",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": ["Runway", "動画生成", "Gen-5", "API"],
    "primarySources": [
      { "title": "Introducing Gen-5", "site": "Runway", "url": "https://runwayml.com/" }
    ]
  },
  {
    "id": "ai-image-api-guide-developers-2026",
    "type": "feature",
    "coverImage": { "src": "https://images.unsplash.com/photo-1633412802994-5c058f151b66?w=800&h=450&fit=crop&q=80", "alt": "AI アート" },
    "category": "media",
    "title": "開発者のための画像生成API入門 — GPT Image・Flux・Midjourney・Recraft を比較して選ぶ",
    "excerpt": "画像生成をアプリに組み込みたい開発者向けに、主要4つの API を料金・品質・速度・ライセンスの軸で比較。バイブコーディングで「とりあえず動く画像生成」を実装するための最短ルートを示す。",
    "body": [
      "画像生成 AI をアプリケーションに組み込む場合、選択肢は大きく4つに絞られる。OpenAI の GPT Image API、Black Forest Labs の Flux API、Midjourney の REST API（2026年3月公開）、そして Recraft の API。それぞれ強みが異なるため、用途に応じた選択が必要。",
      "**GPT Image API（OpenAI）**: ChatGPT で使われている画像生成モデルを API 経由で呼び出す。最大の利点は OpenAI の既存 SDK に統合されている点で、テキスト生成と画像生成を同じ API キーで利用できる。プロンプトへの忠実度が高く、画像内テキストの生成精度も優秀。料金は 1024×1024 で $0.04/枚（HD）。バイブコーディングで最も手軽に始められる選択肢。",
      "**Flux API（Black Forest Labs）**: フォトリアル系で最高クラスの品質。Replicate や fal.ai 経由で利用でき、Flux 2 Pro は $0.05/枚程度。Stable Diffusion の後継的な位置づけで、細部の描写力が高い。ControlNet 対応でポーズ指定や構図制御も可能。自社サーバーにデプロイする場合はオープンウェイトの Flux 2 Schnell（高速版）も選べる。",
      "**Midjourney REST API**: 2026年3月に正式公開。アート性・美的品質では依然トップクラスだが、API の料金は Basic $10/月で 200 枚と割高。Webhook ベースの非同期 API で、リアルタイムアプリには不向き。マーケティング素材やクリエイティブ用途に特化。",
      "**Recraft API**: SVG ベクター出力に対応する唯一の主要 API。ロゴ、アイコン、イラスト生成に強い。料金は $0.04/枚程度で GPT Image と同等。デザインシステムとの統合で威力を発揮する。",
      "**選び方のフローチャート**: 「とりあえず試したい」→ GPT Image（OpenAI SDK で即実装）。「フォトリアルが必要」→ Flux。「アート性重視」→ Midjourney。「ベクター/ロゴが必要」→ Recraft。「コストを最小化」→ GPT Image または Flux Schnell（セルフホスト）。「著作権補償が必要」→ Adobe Firefly（Enterprise 契約）。",
      "**実装例（OpenAI SDK）**: バイブコーディングで最短の実装は OpenAI SDK を使う方法。Claude Code や Cursor で「OpenAI の画像生成 API を使って、ユーザーのテキストから画像を生成するエンドポイントを作って」と指示すれば、数分で動作するコードが得られる。API キーの管理には環境変数を使い、.env に `OPENAI_API_KEY` を設定する。"
    ],
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "8分",
    "tags": ["画像生成", "API", "開発者向け", "GPT Image", "Flux", "Midjourney", "Recraft"],
    "heroScope": "none",
    "primarySources": [
      { "title": "OpenAI Image Generation", "site": "OpenAI", "url": "https://platform.openai.com/docs/guides/images" },
      { "title": "Flux API", "site": "Black Forest Labs", "url": "https://blackforestlabs.ai/" },
      { "title": "Recraft API", "site": "Recraft", "url": "https://www.recraft.ai/" }
    ]
  },
  {
    "id": "how-ai-models-are-built-2026",
    "type": "feature",
    "coverImage": { "src": "https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f?w=800&h=450&fit=crop&q=80", "alt": "ニューラルネットワーク" },
    "category": "model",

    "title": "AI モデルはどう作られるのか — ゼロから学習・追加学習・RLHF を非エンジニア向けに解説",
    "excerpt": "Opus 4.6 のようなフロンティアモデルは数百億〜数千億円かけてゼロから作る。Cursor Composer 2 は Kimi K2.5 に追加学習して作った。RLHF で「やっていいこと・悪いこと」を教える。企業が自社の知識を入れるには RAG とファインチューニングのどちらが現実的か。国産 AI の動向も含めて、AI の「作り方」を解説する。",
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
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "15分",
    "tags": ["AI学習", "事前学習", "ファインチューニング", "RLHF", "国産AI", "RAG", "非エンジニア"],
    "heroScope": "none",
    "primarySources": [
      { "title": "Cost of Training LLM From Scratch in 2026", "site": "AI Superior", "url": "https://aisuperior.com/cost-of-training-llm-from-scratch/" },
      { "title": "RLHF 101: A Technical Tutorial", "site": "Carnegie Mellon University", "url": "https://blog.ml.cmu.edu/2025/06/01/rlhf-101-a-technical-tutorial-on-reinforcement-learning-from-human-feedback/" },
      { "title": "GENIAC（経済産業省）", "site": "経済産業省", "url": "https://www.meti.go.jp/policy/mono_info_service/geniac/index.html" },
      { "title": "RAG vs Fine-Tuning: Cost Game", "site": "DEV Community", "url": "https://dev.to/remojansen/rag-vs-fine-tuning-which-one-wins-the-cost-game-long-term-12dg" }
    ],
    "tables": [
      {
        "afterParagraph": 3,
        "caption": "AI モデルの作り方 — 3段階の比較",
        "headers": ["段階", "具体例", "コスト目安", "期間", "誰がやるか"],
        "rows": [
          ["ゼロから事前学習", "Opus 4.6, GPT-5.4", "1億〜25億ドル", "数ヶ月〜1年", "Anthropic, OpenAI 等の大企業"],
          ["追加学習（FT）", "Composer 2（Kimi K2.5ベース）", "事前学習の5〜10%", "数時間〜数日", "中規模企業・スタートアップ"],
          ["RLHF（行動調整）", "全フロンティアモデル", "追加のGPU + アノテーター費用", "数週間", "モデル開発企業"]
        ]
      },
      {
        "afterParagraph": 7,
        "caption": "企業の知識を AI に入れる方法の比較",
        "headers": ["方法", "コスト", "精度", "データ更新", "向いている場面"],
        "rows": [
          ["RAG", "初年度最安（API費用のみ）", "89%", "リアルタイム可", "FAQ、社内マニュアル検索"],
          ["ファインチューニング", "1回の高額投資", "91%", "再学習が必要", "ドメイン用語・文体の統一"],
          ["ハイブリッド（FT+RAG）", "中程度", "96%", "RAG部分はリアルタイム", "高精度が必要な業務"],
          ["ゼロからの学習", "1億ドル〜", "最高", "再学習が必要", "新言語・新領域（非現実的）"]
        ]
      }
    ]
  },
  {
    "id": "local-llm-vs-api-reality-2026",
    "type": "feature",
    "coverImage": { "src": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop&q=80", "alt": "サーバールーム" },
    "category": "model",

    "title": "ローカル LLM の現実 — API 契約 vs 自前運用のコスト・性能・限界を比較",
    "excerpt": "API に月額数万円を払うのがもったいないからローカルで動かしたい。その判断は正しいのか。7B〜70B モデルの必要スペック、Ollama / llama.cpp / vLLM の使い分け、API との損益分岐点、そして Opus 4.6 クラスがローカルで動かない物理的な理由を解説する。",
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
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "12分",
    "tags": ["ローカルLLM", "Ollama", "vLLM", "API", "コスト", "VRAM", "非エンジニア"],
    "heroScope": "none",
    "primarySources": [
      { "title": "Ollama VRAM Requirements for Local LLMs", "site": "LocalLLM.in", "url": "https://localllm.in/blog/ollama-vram-requirements-for-local-llms" },
      { "title": "Ollama vs vLLM Performance Benchmark 2026", "site": "SitePoint", "url": "https://www.sitepoint.com/ollama-vs-vllm-performance-benchmark-2026/" },
      { "title": "Local LLM vs OpenAI API Cost", "site": "Runyard", "url": "https://www.runyard.dev/blog/local-llm-vs-openai-api-cost" },
      { "title": "Estimating the Size of Claude Opus 4.5/4.6", "site": "Substack", "url": "https://unexcitedneurons.substack.com/p/estimating-the-size-of-claude-opus" },
      { "title": "LLM Hosting Cost 2026", "site": "AI Superior", "url": "https://aisuperior.com/llm-hosting-cost/" }
    ],
    "tables": [
      {
        "afterParagraph": 1,
        "caption": "モデルサイズ別の必要スペック（2026年時点）",
        "headers": ["モデルサイズ", "VRAM（量子化）", "VRAM（FP16）", "推奨GPU", "用途"],
        "rows": [
          ["7B", "4〜6 GB", "14 GB", "RTX 4060 Ti〜", "個人実験・軽量タスク"],
          ["13B", "8〜10 GB", "26 GB", "RTX 4070〜", "社内チャットbot"],
          ["70B", "35〜40 GB", "140 GB", "A100 80GB / 2x 4090", "高品質なローカル推論"],
          ["400B+", "200 GB+", "800 GB+", "8x H100 80GB以上", "研究機関のみ"],
          ["Opus 4.6 推定", "約750 GB", "約3 TB", "10x H100以上", "API でのみ利用可能"]
        ]
      },
      {
        "afterParagraph": 6,
        "caption": "API vs ローカル運用のコスト比較",
        "headers": ["項目", "サブスク（Max等）", "API 従量課金", "ローカル（8B）", "ローカル（70B）"],
        "rows": [
          ["初期費用", "$0", "$0", "GPU $1,600〜", "GPU $25,000〜"],
          ["月額", "$100〜$200 定額", "使用量次第（数万円〜）", "$320（クラウドGPU）", "$2,000〜"],
          ["1日1億トークン時", "$200（定額）", "数十万円/月", "$320+保守費", "$2,000+保守費"],
          ["モデル品質", "最高（Opus 4.6）", "最高", "中（Llama 8B）", "高（Llama 70B）"],
          ["保守の手間", "なし", "なし", "月10〜20時間", "月20〜40時間"],
          ["プライバシー", "規約に依存", "規約に依存", "完全ローカル", "完全ローカル"]
        ]
      },
      {
        "afterParagraph": 10,
        "caption": "サブスクプランのレート制限比較（2026年3月時点・ユーザー報告含む）",
        "headers": ["項目", "Claude Code Pro ($20)", "Claude Code Max ($200)", "Cursor Ultra ($200)"],
        "rows": [
          ["制限の仕組み", "5時間 + 7日 + 月", "5時間 + 7日 + 月", "月間$400クレジット"],
          ["倍率（Pro比）", "1倍", "5x($100) / 20x($200)", "—"],
          ["Auto モード", "—", "—", "無制限（内部モデルは自動選択・並列実行あり）"],
          ["手動モデル指定", "—", "—", "クレジットから消費"],
          ["Pro $20 の実態", "集中利用で15〜30分で制限到達", "—", "—"],
          ["制限後の動作", "一時停止（安全）", "一時停止（安全）", "従量課金で継続可（spend limit推奨）"],
          ["ピーク時間の影響", "あり", "あり", "なし"]
        ]
      }
    ]
  },
  {
    "id": "cursor-composer-2-kimi-2026",
    "coverImage": { "src": "logos/cursor.svg", "alt": "Cursor" },
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
    "coverImage": { "src": "logos/google.svg", "alt": "Google" },
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
    "coverImage": { "src": "logos/kwai.svg", "alt": "KAT-Coder Pro V2" },
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
    "coverImage": { "src": "logos/moonshot.svg", "alt": "Moonshot AI" },
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
    "coverImage": { "src": "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=450&fit=crop&q=80", "alt": "AI" },
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
    "coverImage": { "src": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=450&fit=crop&q=80", "alt": "AI の未来" },
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
    "coverImage": { "src": "logos/anthropic.svg", "alt": "Anthropic" },
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
    "coverImage": { "src": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop&q=80", "alt": "金融テクノロジー" },
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
    "coverImage": { "src": "logos/gemini.svg", "alt": "Gemini" },
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
      "MCP（Model Context Protocol）のリモートサーバー対応により、ローカルに npm パッケージをインストールする必要がなくなった点が大きい。日本の SaaS 企業が公式に MCP リモート版を提供する先行事例として注目される。freee は今後もハッカソンの開催を予定している。MCP を使った開発ワークフローの全体像は [MCP 活用実践ガイド](?a=mcp-comprehensive-guide-2026)を参照。"
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
    "coverImage": { "src": "logos/anthropic.svg", "alt": "Anthropic" },
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
    "coverImage": { "src": "logos/anthropic.svg", "alt": "Anthropic" },
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
    "coverImage": { "src": "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=450&fit=crop&q=80", "alt": "ターミナル画面" },
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
    "lastReviewed": "2026-03-29",
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
    "coverImage": { "src": "https://images.unsplash.com/photo-1753998943413-8cba1b923c0e?w=800&h=450&fit=crop&q=80", "alt": "コードエディタ" },
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
    "lastReviewed": "2026-03-29",
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
    "coverImage": { "src": "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&h=450&fit=crop&q=80", "alt": "データ分析" },
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
    "lastReviewed": "2026-03-29",
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
    "lastReviewed": "2026-03-29",
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
    "id": "ai-config-files-comprehensive-guide-2026",
    "type": "feature",
    "coverImage": { "src": "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=450&fit=crop&q=80", "alt": "ターミナル" },
    "category": "cli",
    "title": "AI 設定ファイル総合ガイド — CLAUDE.md・SKILL.md・AGENTS.md・.cursor/rules を一本化して理解する",
    "excerpt": "Claude Code の CLAUDE.md、スキルファイル、Codex の AGENTS.md、Cursor の .cursor/rules、llms.txt。AI コーディングツールの「設定ファイル」が乱立する中、それぞれの役割・配置場所・書き方のベストプラクティスを1本にまとめた。",
    "body": [
      "AI コーディングツールの普及に伴い、リポジトリに置く「AI 向け設定ファイル」が増えている。CLAUDE.md、SKILL.md、AGENTS.md、.cursor/rules、llms.txt — それぞれ目的と配置場所が異なるが、共通するのは「Git 管理下のテキストで AI の振る舞いを固定する」という設計思想。ここでは全ツールの設定ファイルを横断的に整理する。",
      "**CLAUDE.md（Claude Code）**: AI が「常に読む」プロジェクトルール。三層構造で配置する。~/.claude/CLAUDE.md がグローバル設定（全プロジェクト共通）、プロジェクトルートの CLAUDE.md がプロジェクト設定、.claude/CLAUDE.md が個人設定（.gitignore 推奨）。書くべき内容は「linter で検出できないルール」— アーキテクチャ方針、命名規則、禁止パターン。肥大化するとコンテキストを圧迫するため、簡潔に保つことが公式で推奨されている。",
      "**SKILL.md（Claude Code / Cursor）**: 「必要なときだけ読まれる」詳細な手順書。.claude/skills/ や .cursor/skills/ にフォルダ単位で配置し、YAML フロントマター（名前・説明・互換性）+ 本文（ワークフロー・チェックリスト・禁止事項）で構成する。CLAUDE.md は常時ロード、SKILL.md は段階的開示でトークンを抑える設計。==外部からスキルをコピーする場合は隠し文字やプロンプトインジェクションがないか必ず確認する==（[→ セキュリティリスクの詳細](?a=ai-autonomous-execution-risks-2026)）。",
      "**AGENTS.md（Codex）**: OpenAI の Codex 向け設定ファイル。CLAUDE.md と同じ役割で、プロジェクトルートに配置する。コーディング規約、テストフレームワーク、デプロイ手順を記述。codex.md でも読み込まれる。",
      "**.cursor/rules（Cursor）**: Cursor 専用の AI ルールファイル。使用言語、命名規則、禁止パターンを記述する。.cursorrules（プロジェクトルート）と .cursor/rules/（ディレクトリ単位）の2つの配置方法がある。",
      "**llms.txt**: サイトやプロダクトの LLM 向け要約入口。検索クローラではなく AI が一次情報を辿るためのインデックスとして位置づけられている。自社ドキュメントの URL と要約の境界を明確にし、著作権・利用条件に沿った引用に留める。",
      "**チーム運用のベストプラクティス**: (1) プロジェクトルートの設定ファイルは Git 管理してチーム共有。個人設定は .gitignore で分離。(2) ルール同士の矛盾を防ぐため、定期的な lint とオーナー明記。(3) 複数ツールを併用する場合、フロントマターの互換フィールドやディレクトリ規約を揃えると移行コストが下がる。(4) [MCP](?a=mcp-comprehensive-guide-2026) や [Hooks](?a=claude-code-auto-mode) と組み合わせることで AI の動作をより精密に制御できる。"
    ],
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "12分",
    "tags": ["CLAUDE.md", "SKILL.md", "AGENTS.md", "Cursor", "設定", "チーム開発", "実用スキル"],
    "heroScope": "none",
    "lastReviewed": "2026-03-29",
    "primarySources": [
      { "title": "Claude Code — Memory (CLAUDE.md)", "site": "Anthropic", "url": "https://code.claude.com/docs/en/memory" },
      { "title": "Agent skills overview (SKILL.md)", "site": "Anthropic", "url": "https://docs.anthropic.com/en/docs/agents-and-tools/agent-skills/overview" },
      { "title": "Introducing AGENTS.md", "site": "OpenAI Developers", "url": "https://developers.openai.com/codex/guides/agents-md/" },
      { "title": "Rules — Cursor docs", "site": "Cursor", "url": "https://cursor.com/docs/context/rules" },
      { "title": "llms.txt standard", "site": "llmstxt.org", "url": "https://llmstxt.org/" }
    ]
  },
  {
    "id": "mcp-comprehensive-guide-2026",
    "type": "feature",
    "category": "cli",
    "title": "MCP（Model Context Protocol）総合ガイド — 仕様・サーバ選定・DB連携・ブラウザ操作・セキュリティ",
    "excerpt": "MCP の仕様概要からサーバ選定、DB 連携・ブラウザ操作・SaaS API の実践パターン、権限設計・サプライチェーンリスクまで、1本にまとめた総合ガイド。v2 仕様やリモートサーバーにも言及。",
    "body": [
      "**MCP（Model Context Protocol）** は Anthropic が策定したオープンプロトコルで、AI モデルが外部のツールやデータソースに標準化された方法でアクセスするための仕組み。2025年11月の初版公開以降、9,700万インストールを超えるエコシステムに成長した。Claude Code・Cursor・Gemini CLI など主要ツールが MCP クライアントとして対応しており、OpenAI・Microsoft も正式サポートを表明している。",
      "**トランスポートと接続方式**: MCP サーバーとの接続には2つの方式がある。**stdio**（標準入出力）はローカルプロセス直結でセットアップが簡単だが、クライアントと同じマシンにサーバーバイナリが必要。**Streamable HTTP**（v2 で追加）はリモート配置に向くが、認証・TLS・レート制限を自前で設計する必要がある。v2 では OAuth 2.1 認可フレームワークと JSON-RPC バッチも追加された（[→ v2 仕様の詳細](?a=mcp-v2-spec-launch-2026)）。",
      "**実践パターン1: DB 連携**: PostgreSQL や SQLite の MCP サーバーを接続すると、Claude Code がスキーマ読み取り→クエリ生成→実行→結果解釈を一貫して行える。==本番 DB への直接接続は避け、開発環境やリードレプリカに限定する==。接続文字列は .env から環境変数で渡す。",
      "**実践パターン2: ブラウザ操作**: Puppeteer や Playwright ベースの MCP サーバーで、スクリーンショット取得・フォーム入力・E2E テストの実行が可能。Chrome 拡張ベースの MCP サーバーなら既に開いているタブのコンテキストを AI に渡せる。",
      "**実践パターン3: SaaS API 連携**: [freee の MCP リモートサーバー](?a=freee-mcp-remote-2026)（約270操作）のように、SaaS 側が公式に MCP サーバーを提供するケースが増えている。リモート版は URL を追加するだけで利用でき、ローカルへの npm インストールが不要。GitHub MCP サーバーで Issue・PR 操作も可能。",
      "**セキュリティとサプライチェーンリスク**: MCP サーバーは AI に外部操作の権限を与えるため、信頼できる提供元のみを使う。広いファイルシステムアクセス・任意 URL 取得・シェル実行を持つサーバーは、**サプライチェーン攻撃（悪意あるサーバー・更新）とインジェクション**の両面でリスクが大きい。ロックファイル・署名・許容リスト・監査ログの運用を検討する。Auto mode と MCP を組み合わせる場合は [Hooks](?a=claude-code-auto-mode) でガードレールを設ける。",
      "**設定方法**: Claude Code では `.claude/settings.json` の mcpServers セクションに記述。Cursor も MCP サーバー対応。製品ごとに接続パスが異なるため、公式の接続例を確認するのが安全。AI 設定ファイル（[CLAUDE.md・SKILL.md 等](?a=ai-config-files-comprehensive-guide-2026)）と組み合わせることで、MCP で「何に接続するか」、設定ファイルで「どう振る舞うか」を分離して管理できる。"
    ],
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "14分",
    "tags": ["MCP", "Claude Code", "DB連携", "ブラウザ", "セキュリティ", "実用スキル", "freee"],
    "heroScope": "none",
    "lastReviewed": "2026-03-29",
    "primarySources": [
      { "title": "Model Context Protocol — Specification", "site": "modelcontextprotocol.io", "url": "https://modelcontextprotocol.io/" },
      { "title": "Claude Code — MCP", "site": "Anthropic", "url": "https://code.claude.com/docs/en/mcp" },
      { "title": "freee-mcp リモート版", "site": "freee", "url": "https://corp.freee.co.jp/news/20260327freee_mcp.html" },
      { "title": "MCP v2 — The 2026 MCP Roadmap", "site": "MCP Blog", "url": "http://blog.modelcontextprotocol.io/posts/2026-mcp-roadmap/" }
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
      "**コミットメッセージの自動生成**: Claude Code は変更内容を解析してコミットメッセージを自動生成する。Aider も同様の機能を備えている。チームでコミットメッセージの形式を統一するには、[CLAUDE.md にフォーマット](?a=ai-config-files-comprehensive-guide-2026)（Conventional Commits 等）を指定するのが実用的。複数ツールの併用パターンは[マルチエージェント開発](?a=claude-code-codex-multi-agent-2026)も参照。",
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
    "coverImage": { "src": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=450&fit=crop&q=80", "alt": "法規制" },
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
    "coverImage": { "src": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=450&fit=crop&q=80", "alt": "法規制" },
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
    "lastReviewed": "2026-03-29",
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
    "coverImage": { "src": "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=450&fit=crop&q=80", "alt": "AI テクノロジー" },
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
    "coverImage": { "src": "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=450&fit=crop&q=80", "alt": "AI テクノロジー" },
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
    "coverImage": { "src": "logos/anthropic.svg", "alt": "Anthropic" },
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
    "coverImage": { "src": "logos/openai.svg", "alt": "OpenAI" },
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
    "coverImage": { "src": "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=450&fit=crop&q=80", "alt": "データベース" },
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
    "coverImage": { "src": "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=450&fit=crop&q=80", "alt": "データベース" },
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
    "lastReviewed": "2026-03-29",
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
    "coverImage": { "src": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop&q=80", "alt": "プログラミングコード" },
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
    "coverImage": { "src": "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=450&fit=crop&q=80", "alt": "データベース" },
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
    "ratings": {"AI品質":4,"使いやすさ":5,"コスパ":3,"拡張性":2,"企業向け":1},
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
    "coverImage": { "src": "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=450&fit=crop&q=80", "alt": "マイクとオーディオ" },
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
      "2026年初頭の画像生成は、単純な「きれいさ」より **指示への追従**（空間関係・構図・オブジェクト数）と用途別の最適化が際立っている。ベンダーによって版数表記・API 名・消費者アプリ名が一致しないため、契約や本番組み込みではリリースノートと pricing を直接確認すること。",
      "**選び方の軸**: 画像生成モデルの選定は「何を作るか」で決まる。(1) マーケティング素材やSNS投稿 → GPT Image（ChatGPT 経由で手軽）または Midjourney（アート性が高い）。(2) 製品写真やフォトリアル → Flux 2（品質と速度のバランス）。(3) ロゴ・アイコン・ブランド素材 → Recraft（SVG 出力対応）。(4) 企業の商用利用で著作権リスクを最小化 → Adobe Firefly（著作権補償付き）。(5) 自社サーバーで完結させたい → Stable Diffusion（オープンウェイト、ローカル実行可能）。(6) Google Cloud 上で大量処理 → Imagen 4。",
      "**主要モデルの特徴**: **GPT Image 1.5**（OpenAI）は画像内テキストの精度とプロンプト追従で評価が高い。ChatGPT 経由での利用が中心で、API からも呼び出し可能。**Midjourney V8** はアート性と美的コントロールに強く、クリエイティブ用途で根強い支持がある。**Flux 2**（Black Forest Labs）はフォトリアル系でレイテンシと品質のバランスが良い。**Ideogram 3.0** は画像内の文字・タイポグラフィ生成に特化。**Adobe Firefly Image 3** は Creative Cloud 統合と著作権補償（商用利用時の IP 保護）が最大の差別化要素。",
      "**エンタープライズと規制**: 商用利用では著作権・肖像権のリスク管理が重要。Adobe Firefly は学習データの著作権を明示し、商用利用への補償を提供している点で法務部門の承認が得やすい。Google Imagen 4 は Vertex AI 上で安全フィルタと監査ログが標準搭載される。Stable Diffusion はオープンウェイトだが、生成物の責任はユーザー側にある点を理解しておく必要がある。",
      "**Google 周りの整理**: **Imagen 4**（Cloud / 開発者向けドキュメント側）と、別稿で扱う [Nano Banana 2](?a=google-nano-banana-2-gemini-flash-image-2026)（Gemini 3.1 Flash Image）が表裏で混同されやすい。後者は動画ツール Flow の既定「画像」モデルでもあり、動画生成そのもの（Veo 等）とは別ライン。動画の比較は[動画まとめ](?a=ai-video-generators-landscape-2026)を参照。"
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
    "coverImage": { "src": "logos/sora.svg", "alt": "Sora" },
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
    "coverImage": { "src": "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=450&fit=crop&q=80", "alt": "動画制作" },
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
    "coverImage": { "src": "logos/anthropic.svg", "alt": "Anthropic" },
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
    "coverImage": { "src": "logos/cursor.svg", "alt": "Cursor" },
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
    ],
    "primarySources": [
      { "title": "Cursor 2.4 — Subagents, Skills, and Image Generation", "site": "Cursor", "url": "https://cursor.com/changelog/2-4" }
    ]
  },
  {
    "id": "gemini-cli-v035",
    "coverImage": { "src": "logos/gemini.svg", "alt": "Gemini" },
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
    ],
    "primarySources": [
      { "title": "Gemini CLI", "site": "GitHub", "url": "https://github.com/google-gemini/gemini-cli" },
      { "title": "Gemini CLI v0.35.0 Release", "site": "GitHub", "url": "https://github.com/google-gemini/gemini-cli/releases/tag/v0.35.0" }
    ]
  },
  {
    "id": "copilot-jetbrains-ga",
    "coverImage": { "src": "logos/microsoft.svg", "alt": "Microsoft" },
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
    ],
    "primarySources": [
      { "title": "GitHub Copilot", "site": "GitHub", "url": "https://github.com/features/copilot" },
      { "title": "Copilot coding agent is now generally available", "site": "GitHub Blog", "url": "https://github.blog/changelog/2026-03-27-copilot-coding-agent-ga/" }
    ]
  },
  {
    "id": "gemini-3-1-pro",
    "type": "news",
    "coverImage": { "src": "logos/gemini.svg", "alt": "Gemini" },
    "category": "model",
    "title": "Gemini 3.1 Pro 発表 — ARC-AGI-2スコア77.1%、推論性能が前世代の倍以上に",
    "excerpt": "Google DeepMindが3月26日にプレビュー公開。1Mトークンコンテキスト、推論ベンチマーク大幅向上。価格は据え置きで開発者・企業向けに順次展開。",
    "body": [
      "Google DeepMindは2026年3月26日、Gemini 3.1 Proをプレビューとして発表しました。ARC-AGI-2スコア77.1%を達成し、前世代Gemini 3 Proの倍以上となる推論性能を実現しています。",
      "1Mトークンのコンテキストウィンドウを持ち、テキスト・画像・音声・動画・PDF・コードリポジトリなど多様なデータソースを横断して処理可能です。複雑なデータ統合や高度な問題解決に最適化されています。",
      "価格は入力$2/出力$18（100万トークンあたり）で、Gemini 3 Proから据え置き。Geminiアプリ（Pro/Ultraプラン）、AI Studio、Vertex AI、Gemini CLI、Android Studio、NotebookLM で利用可能です。JetBrains IDE、Xcode、Eclipseでも GitHub Copilot経由で利用できます。",
      "エージェントワークフローの改善にも注力しており、Gemini Code Assistは個人開発者向けに完全無料化されました。月間18万リクエストまで無料で利用でき、VS CodeとJetBrains IDEに対応しています。"
    ],
    "charts": [{
      "afterParagraph": 1,
      "title": "コンテキスト長の比較（万トークン）",
      "subtitle": "一度に処理できるテキスト量",
      "unit": "万",
      "maxValue": 220,
      "bars": [
        { "label": "Gemini 3.1 Pro", "value": 200, "color": "#3b82f6" },
        { "label": "Claude Opus 4.6", "value": 100, "color": "#6366f1" },
        { "label": "GPT-5.4", "value": 12.8, "color": "#10b981" },
        { "label": "Kimi K2.5", "value": 25.6, "color": "#f59e0b" }
      ]
    }],
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
    ],
    "primarySources": [
      { "title": "Gemini 3.1 Pro", "site": "Google DeepMind", "url": "https://deepmind.google/models/gemini/pro/" },
      { "title": "Gemini 3.1 Pro in AI Studio", "site": "Google AI Studio", "url": "https://aistudio.google.com/" }
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
    ],
    "primarySources": [
      { "title": "Introducing GPT-5.4", "site": "OpenAI", "url": "https://openai.com/index/introducing-gpt-5-4/" }
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
      "ユーザーコミュニティからは料金改定に対する批判の声も上がっています。Cursor傘下に入ったことで独自の差別化が難しくなる中、今後の機能面での差別化に注目が集まります。全ツールの料金を横並びで見るには[料金プラン横断比較](?a=pricing-comparison-all-tools-2026-march)を参照。"
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
    ],
    "primarySources": [
      { "title": "Windsurf Pricing", "site": "Windsurf", "url": "https://windsurf.com/pricing" }
    ]
  },
  {
    "id": "gemini-cli",
    "type": "review",
    "rating": 3.5,
    "ratings": {"AI品質":4,"使いやすさ":3,"コスパ":5,"拡張性":3,"企業向け":2},
    "reviewCategory": "cli",
    "category": "cli",
    "title": "Gemini CLI レビュー — Googleが放つ200万トークンの超大規模コンテキストCLI",
    "excerpt": "Google DeepMindが開発。Gemini 2.5 Proの200万トークンコンテキストで、大規模リポジトリを丸ごと解析。無料枠も充実。",
    "body": [
      "**Gemini CLI** は Google DeepMind が開発するオープンソースの CLI コーディングツールで、Gemini 2.5 Pro の200万トークンコンテキストウィンドウが最大の武器。数百ファイル規模のリポジトリを一括で読み込み、アーキテクチャレベルの質問に答えられる。Apache 2.0 ライセンスで GitHub 上に公開されており、2026年3月時点で99,000スター以上を獲得している。",
      "**導入と無料枠**: `npm install -g @anthropic-ai/gemini-cli` でインストールし、Google アカウントでログインするだけで利用開始できる。Flash モデルは1日1,000リクエストまで無料で、個人の開発やプロトタイプには十分。ただし2026年3月25日より Pro モデルは有料サブスクリプション限定に移行したため、200万トークンのフルコンテキストを活かす本格利用には課金が必要になった。",
      "**v0.35.0 の主要機能**: 2026年3月のアップデートで Plan Mode（変更前に計画を提示）、サブエージェントアーキテクチャの強化（ローカル実行・ツール分離・動的フィルタリング）、ネイティブサンドボックス（Linux/macOS/Windows 対応）が追加された（[→ v0.35.0 詳細](?a=gemini-cli-v035)）。Google Cloud・Firebase・Vertex AI とのネイティブ統合により、Google エコシステム内での開発体験が向上している。MCP にも対応しており、サードパーティツールとの連携も可能。",
      "**弱点と注意点**: エージェント機能の成熟度では Claude Code や Cursor にまだ及ばない。具体的には、ファイル編集の精度や自律的なタスク完遂能力で差がある。また、[プライバシー設定が CLI 内に存在しない](?a=ai-tool-security-settings-comparison-2026)点は企業利用で課題となる。GDPR 対応の面でコミュニティから懸念の声が上がっている（GitHub Issue #1489）。",
      "**向いている用途**: 大規模コードベースの全体把握・分析、Google Cloud 上のプロジェクト開発、無料枠での個人利用。コンテキスト量で勝負する場面（「このプロジェクト全体の依存関係を分析して」等）では他のツールにない強みがある。他ツールとの比較は [CLI 横断比較](?a=cli-tools-comparison-2026-march) を参照。"
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
    "coverImage": { "src": "logos/codex.svg", "alt": "Codex" },
    "type": "review",
    "rating": 3,
    "ratings": {"AI品質":4,"使いやすさ":3,"コスパ":2,"拡張性":3,"企業向け":4},
    "reviewCategory": "cli",
    "category": "cli",
    "title": "OpenAI Codex — クラウド並列実行のAIコーディングエージェント",
    "excerpt": "OpenAIが満を持してリリースしたコーディングエージェント。クラウドサンドボックスで複数タスクを並列実行し、PRとして提出する新しいワークフロー。",
    "body": [
      "**OpenAI Codex** は ChatGPT 上で動作するクラウドベースの AI コーディングエージェント。開発者がタスクを指示すると、クラウド上のサンドボックス環境でコードの探索・修正・テストを自律的に実行し、結果を Pull Request として提出する。Claude Code がローカルで直接ファイルを操作するのに対し、Codex はクラウドの隔離環境で動作するため、==ローカルファイルを壊すリスクがない==のが設計上の大きな違い。",
      "**並列実行が最大の武器**: 複数のタスクを同時に Codex に投げると、それぞれが独立したサンドボックスで並列実行される。「機能 A の実装」と「機能 B のテスト作成」を同時に依頼し、それぞれ別の PR として返ってくるワークフロー。チーム開発では「バグ修正10件を朝一でまとめて投入し、昼までに全 PR が揃う」といった使い方が可能。",
      "**料金と注意点**: o4-mini モデルベースで、ChatGPT Pro（$200/月）/ Team / Enterprise プランで利用可能。==個人で使うには $200/月のハードルが高い==のがコスパ評価を下げている要因。Claude Code Pro は $20/月から使えるため、個人開発者には選びにくい。API 経由での利用にも対応予定。ローカル環境での実行には非対応で、オフライン利用はできない。",
      "**Claude Code との使い分け**: Codex は PR ベースの非同期ワークフローに強く、並列タスクの投入→レビュー→マージの流れが自然。Claude Code はローカルでのインタラクティブな対話・編集に強い。両者を[併用するマルチエージェント構成](?a=claude-code-codex-multi-agent-2026)も実用化されている。Codex の詳しい操作方法はツール辞書の Codex タブを参照。",
      "**向いている用途**: 大量のバグ修正・リファクタリングの並列処理、PR ベースの自動化ワークフロー、チーム開発での分業。向いていない用途: 対話的な設計相談、ローカルファイルの直接操作、低予算の個人利用。Claude Code との併用や、コミュニティ製の並列管理ツールについては [CLI エージェント OSS 特集](?a=cli-agent-community-oss-2026)を参照。"
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
    "coverImage": { "src": "logos/cursor.svg", "alt": "Cursor" },
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
    "rating": 4,
    "ratings": {"AI品質":5,"使いやすさ":3,"コスパ":4,"拡張性":5,"企業向け":4},
    "reviewCategory": "cli",
    "category": "cli",
    "title": "Claude Code レビュー — Anthropic のCLIエージェント徹底解説",
    "excerpt": "claudeコマンド1つでリポジトリ全体を読み込み、バグ修正からテスト実行、コミットまで自律的に行う。Opus 4.6の1Mコンテキストによる深い推論が、複雑なリファクタリングを可能にしている。",
    "body": [
      "**Claude Code** は **Anthropic** が提供するCLI型AIエージェントで、ターミナルから claude コマンドを実行するだけでプロジェクト全体のコンテキストを取得し、開発タスクを自律的に遂行する。ファイル編集、bashコマンド実行、Git操作、テスト実行までを一貫して処理でき、CLAUDE.md ファイルにプロジェクト固有のルールを記述することでチーム標準のワークフローを維持できる。",
      "主要な機能として、MCP（**Model Context Protocol**）サーバーへの接続による外部ツール・データソース連携、イベント駆動で前処理・後処理を差し込む Hooks、再利用可能なプロンプトテンプレートである Skills がある。Auto mode（研究プレビュー）を有効にするとユーザー確認なしで連続的にタスクを実行し、大規模なリファクタリングやマイグレーション作業を効率化できる。Opus 4.6 モデルの1Mコンテキストウィンドウにより、数百ファイル規模のリポジトリでもアーキテクチャレベルの判断が可能になっている。",
      "料金体系は3種類ある。Pro プラン（月額 $20）は一般的な開発タスクに十分な利用枠を提供し、Max プラン（月額 $100 または $200）はヘビーユーザー向けに拡張された利用枠と Fast Mode を含む。API 経由での利用も可能で、その場合はトークン単位の従量課金となる。Claude Code SDK を使えばカスタムエージェントの構築もでき、SOC 2 準拠によりエンタープライズ環境にも導入しやすい。",
      "コンテキスト理解の深さとエージェント的な自律性は現行CLIツールの中でも高い水準にある。一方で、大量のトークンを消費するためコストが膨らみやすい点、Auto mode がまだ研究プレビュー段階である点には注意が必要となる。チームでの利用では [CLAUDE.md による規約共有](?a=ai-config-files-comprehensive-guide-2026)と Hooks によるガードレールの組み合わせが実用上の鍵になる。外部連携は [MCP 活用ガイド](?a=mcp-comprehensive-guide-2026)、Git との連携は [AI × Git ワークフロー](?a=git-ai-workflow-2026)を参照。コミュニティ製の拡張ツール（マルチエージェント管理・並列実行・プラグイン）は [CLI エージェント OSS 特集](?a=cli-agent-community-oss-2026)にまとめている。"
    ],
    "primarySources": [
      {
        "title": "Claude Code Documentation",
        "site": "Anthropic",
        "url": "https://code.claude.com/docs/en/overview"
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
    "rating": 4,
    "ratings": {"AI品質":4,"使いやすさ":4,"コスパ":4,"拡張性":3,"企業向け":3},
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
    "rating": 4,
    "ratings": {"AI品質":4,"使いやすさ":4,"コスパ":4,"拡張性":3,"企業向け":5},
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
    "rating": 3.5,
    "ratings": {"AI品質":4,"使いやすさ":3,"コスパ":5,"拡張性":4,"企業向け":1},
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
    "rating": 3,
    "ratings": {"AI品質":3,"使いやすさ":4,"コスパ":3,"拡張性":2,"企業向け":1},
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
    "rating": 3.5,
    "ratings": {"AI品質":3,"使いやすさ":3,"コスパ":4,"拡張性":3,"企業向け":5},
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
    "ratings": {"AI品質":3,"使いやすさ":3,"コスパ":5,"拡張性":4,"企業向け":1},
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
    "rating": 3,
    "ratings": {"AI品質":2,"使いやすさ":4,"コスパ":4,"拡張性":2,"企業向け":2},
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
    "ratings": {"AI品質":5,"使いやすさ":5,"コスパ":4,"拡張性":4,"企業向け":3},
    "reviewCategory": "editor",
    "category": "editor",
    "title": "Cursor レビュー — AIエディタの王者、Windsurf統合で盤石に",
    "excerpt": "VS Code フォークで最も人気のAIエディタ。Windsurf買収によるCascade統合とBackground Agentの追加でさらに進化。",
    "body": [
      "**Cursor** は **Anysphere** 社が開発する AI ネイティブのコードエディタで、**VS Code** のフォークとして構築されている。VS Code の拡張機能やキーバインドをそのまま引き継げるため、既存ユーザーの移行コストが低い。2023 年の初期リリース以降、AI 支援コーディングの需要拡大とともにユーザー数を伸ばし、2026 年 3 月時点では AI エディタ分野で広く使われている。",
      "主要機能は Composer（マルチファイル編集の対話的生成）、インライン編集（選択範囲を指示で書き換え）、Background Agent（バックグラウンドでの自律タスク実行）、そして Tab 補完の 4 つに大別される。Composer はプロジェクト横断のリファクタリングに、Background Agent はコードレビュー中の並行作業にそれぞれ向く。モデルは Sonnet 4.6 と Opus 4.6 に加え、2026年3月に独自モデル [Composer 2](?a=cursor-composer-2-kimi-2026)（Kimi K2.5 ベース + 独自 RL トレーニング）が追加された。Composer 2 は CursorBench で Opus 4.6 を上回るスコアを記録し、料金も大幅に低い。",
      "料金は Hobby（無料・機能制限あり）、Pro（月額 20 ドル）、Business（月額 40 ドル・管理機能付き）の 3 プランで構成される。無料枠でも補完と限定的な Composer 利用が可能だが、Background Agent や高頻度のモデル呼び出しには Pro 以上が必要になる。",
      "2026 年 3 月に [Windsurf（旧 Codeium）の買収が完了](?a=cursor-windsurf-merge)し、Cascade フロー技術の統合が進行している。買収により Anysphere は AI エディタ市場で複数ブランドを抱える構図となった。Cursor 自体は引き続き単独製品として開発が続けられており、Cascade 由来の段階的タスク分解が今後どの程度取り込まれるかが注目点となる。他エディタとの横並び比較は[AI エディタ横断比較](?a=editor-comparison-2026-march)を参照。"
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
    "ratings": {"AI品質":4,"使いやすさ":4,"コスパ":4,"拡張性":3,"企業向け":2},
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
    "rating": 3,
    "ratings": {"AI品質":3,"使いやすさ":4,"コスパ":4,"拡張性":2,"企業向け":1},
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
    "rating": 4.5,
    "ratings": {"AI品質":4,"使いやすさ":5,"コスパ":5,"拡張性":5,"企業向け":5},
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
    "rating": 3,
    "ratings": {"AI品質":2,"使いやすさ":3,"コスパ":5,"拡張性":3,"企業向け":1},
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
    "ratings": {"AI品質":2,"使いやすさ":3,"コスパ":4,"拡張性":2,"企業向け":1},
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
    "rating": 3,
    "ratings": {"AI品質":3,"使いやすさ":4,"コスパ":4,"拡張性":2,"企業向け":2},
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
    "id": "microsoft-365-e7-copilot-pricing-2026",
    "type": "feature",
    "coverImage": { "src": "logos/microsoft.svg", "alt": "Microsoft" },
    "category": "product",
    "title": "Microsoft 365 E7 徹底解説 — E3/E5/E7 料金比較、Copilot 削減の影響、GitHub Copilot × Claude",
    "excerpt": "2026年5月1日に提供開始される Microsoft 365 E7（$99/月）を、E3・E5 と料金・機能で比較。4月15日から2000人超の組織で基本 Copilot が Office アプリから削除される影響、GitHub Copilot での Claude 対応との関連まで、企業の IT 担当者と開発者が知るべき情報を整理した。",
    "body": [
      "Microsoft は2026年5月1日、新しいエンタープライズライセンス **Microsoft 365 E7** の提供を開始する。E5 以来約10年ぶりの新ティアで、E5 の全機能に加えて Microsoft 365 Copilot（$30/月相当）、Entra Suite（$12/月相当）、Agent 365（$15/月相当）をバンドルする。価格は $99/ユーザー/月で、個別に購入した場合の $117 と比べて約15%の割引となる。",
      "**E3 / E5 / E7 の違い**: E3（$39/月）は Office アプリ・Exchange・SharePoint・Teams の基本セット。E5（$60/月）は E3 に加えて高度なセキュリティ（Defender for Office 365 P2）、コンプライアンス（eDiscovery Premium）、音声機能（Phone System）を含む。E7（$99/月）は E5 の全機能に加えて、AI エージェント管理の Agent 365、ゼロトラスト認証基盤の Entra Suite、そして Copilot をバンドルした「AI ネイティブ」なプランとなる。",
      "**2000人超の組織への影響（4月15日〜）**: E7 の導入に先立ち、2026年4月15日から2000人超の組織では基本 Copilot（Basic Copilot）が Word・Excel・PowerPoint・OneNote から削除される。M365 Copilot アプリと Outlook では引き続き利用可能だが、Office アプリ内での AI 支援には Copilot の有料ライセンス（E7 またはアドオン）が必要になる。高度な推論機能や Agent Mode、そして Anthropic モデルへのアクセスも削除対象となる。",
      "**2000人以下の組織**: 基本 Copilot は全 Office アプリで引き続き利用可能。ただし Copilot Chat は「標準アクセス」となり、ピーク時には応答品質やパフォーマンスが低下する可能性がある。E7 の恩恵を受けるには任意で有料プランに移行する形になる。",
      "**GitHub Copilot と Claude の関係**: Microsoft エコシステム内の別の動きとして、GitHub Copilot では2025年10月に Anthropic の Claude Sonnet 4.5 が正式対応（GA）し、Pro・Pro+・Business・Enterprise の全ティアで利用可能になった。2025年11月には Claude Opus 4.5 も追加された。GitHub Copilot でのモデル選択は GitHub のサービスを経由するため、Anthropic API への直接課金は発生しない。M365 Copilot の Anthropic モデル削除と GitHub Copilot での Claude 対応という一見矛盾する動きは、Microsoft が「Office 内の AI」と「開発者向け AI」で異なる戦略を採っていることを示している。",
      "**企業の判断ポイント**: E7 への移行は Copilot + Entra Suite + Agent 365 を個別購入するより約$18/月安い。ただし全ユーザーに E7 を展開する必要はなく、AI を積極的に使う部門のみ E7、他は E3/E5 のままという混合運用が現実的。2000人超の組織で4月15日以降も Office 内 Copilot を使い続けるには、E7 移行か Copilot アドオンの購入が必須となる点に注意。開発チームは GitHub Copilot 経由で Claude を含むマルチモデルの AI 支援を引き続き利用できる。関連記事: [Power Apps 開発手法 5パターン](?a=power-apps-five-approaches-2026) → [React × MS バックエンド構成](?a=react-frontend-ms-backend-architecture-2026) → [E3 Entra ID + PostgreSQL 実用構成](?a=enterprise-entra-id-postgres-ai-architecture-2026) → [Dataverse vs Supabase vs Azure SQL](?a=enterprise-backend-dataverse-supabase-azure-2026)。"
    ],
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "12分",
    "tags": ["Microsoft", "M365", "E7", "Copilot", "Claude", "Enterprise", "料金"],
    "lastReviewed": "2026-03-29",
    "heroScope": "none",
    "primarySources": [
      { "title": "M365 E7 to launch May 1 for $99 per user per month", "site": "Directions on Microsoft", "url": "https://www.directionsonmicrosoft.com/m365-e7-to-launch-may-1-for-99-per-user-per-month/" },
      { "title": "Major M365 Copilot changes coming April 15", "site": "Directions on Microsoft", "url": "https://www.directionsonmicrosoft.com/major-m365-copilot-changes-coming-april-15/" },
      { "title": "Claude Sonnet 4.5 is now generally available in GitHub Copilot", "site": "GitHub Blog", "url": "https://github.blog/changelog/2025-10-13-anthropics-claude-sonnet-4-5-is-now-generally-available-in-github-copilot/" },
      { "title": "Microsoft 365 E7 comparison", "site": "Forestal Security", "url": "https://forestalsecurity.com/microsoft-365-e7/" }
    ],
    "tables": [
      {
        "afterParagraph": 1,
        "caption": "Microsoft 365 ライセンス比較（2026年5月時点・公式発表値）",
        "headers": ["項目", "E3（$39/月）", "E5（$60/月）", "E7（$99/月）"],
        "rows": [
          ["Office アプリ", "含む", "含む", "含む"],
          ["Exchange / SharePoint / Teams", "含む", "含む", "含む"],
          ["高度なセキュリティ（Defender P2）", "—", "含む", "含む"],
          ["コンプライアンス（eDiscovery Premium）", "—", "含む", "含む"],
          ["Phone System（音声）", "—", "含む", "含む"],
          ["Microsoft 365 Copilot", "—", "—", "含む（$30相当）"],
          ["Entra Suite（ゼロトラスト認証）", "—", "—", "含む（$12相当）"],
          ["Agent 365（AI エージェント管理）", "—", "—", "含む（$15相当）"]
        ]
      },
      {
        "afterParagraph": 3,
        "caption": "Copilot の利用可否（2026年4月15日以降）",
        "headers": ["機能", "2000人超（無料枠）", "2000人以下（無料枠）", "E7 / Copilot 有料"],
        "rows": [
          ["M365 Copilot アプリ", "利用可", "利用可", "利用可"],
          ["Outlook 内 Copilot", "利用可", "利用可", "利用可"],
          ["Word / Excel / PPT 内 Copilot", "削除", "利用可", "利用可"],
          ["高度な推論・Agent Mode", "削除", "制限あり", "利用可"],
          ["Anthropic モデル", "削除", "—", "利用可"]
        ]
      }
    ]
  },
  {
    "id": "power-apps-five-approaches-2026",
    "type": "feature",
    "category": "product",
    "title": "Power Apps 開発手法 5パターン完全ガイド — Canvas・Model-driven・Custom Pages・Power Pages・Vibe Coding",
    "excerpt": "Microsoft Power Apps でアプリを作る方法は1つではない。ドラッグ&ドロップの Canvas、データモデル起点の Model-driven、React ベースの Custom Pages、外部向けの Power Pages、AI に自然言語で作らせる Vibe Coding の5パターンを、必要なライセンスと適用場面を含めて解説する。",
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
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "14分",
    "tags": ["Microsoft", "Power Apps", "ノーコード", "ローコード", "Dataverse", "Enterprise", "バイブコーディング"],
    "heroScope": "none",
    "primarySources": [
      { "title": "Model-driven app overview", "site": "Microsoft Learn", "url": "https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/model-driven-app-overview" },
      { "title": "Custom pages for model-driven apps", "site": "Microsoft Learn", "url": "https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/model-app-page-overview" },
      { "title": "Vibe overview (Power Apps)", "site": "Microsoft Learn", "url": "https://learn.microsoft.com/en-us/power-apps/vibe/overview" },
      { "title": "Power Platform licensing FAQs", "site": "Microsoft Learn", "url": "https://learn.microsoft.com/en-us/power-platform/admin/powerapps-flow-licensing-faq" },
      { "title": "Power Apps 2026 Wave 1 release plan", "site": "Microsoft Learn", "url": "https://learn.microsoft.com/en-us/power-platform/release-plan/2026wave1/power-apps/" }
    ],
    "tables": [
      {
        "afterParagraph": 5,
        "caption": "Power Apps 開発手法比較（2026年時点）",
        "headers": ["手法", "UI 設計", "データソース", "技術レベル", "Dataverse 必須", "主な用途"],
        "rows": [
          ["Canvas Apps", "ドラッグ&ドロップ", "300+ コネクタ", "ノーコード", "不要（標準コネクタ可）", "モバイル・タブレット業務アプリ"],
          ["Model-driven Apps", "データモデルから自動生成", "Dataverse", "ノーコード〜ローコード", "必須", "CRM・ERP・基幹業務"],
          ["Custom Pages", "Canvas + React PCF", "Dataverse", "ローコード〜プロコード", "必須", "高度な UI + 業務データ"],
          ["Power Pages", "テンプレート + カスタム", "Dataverse", "ローコード", "必須", "外部向けポータル"],
          ["Vibe Coding", "AI 自然言語生成", "AI が自動設定", "ノーコード", "自動（AI 判断）", "プロトタイプ・PoC"]
        ]
      }
    ]
  },
  {
    "id": "enterprise-backend-dataverse-supabase-azure-2026",
    "type": "feature",
    "category": "data",
    "title": "エンタープライズバックエンド比較 — Dataverse vs Supabase vs Azure SQL（2026年版）",
    "excerpt": "アプリのバックエンドを「一から作る」か「セットになっている企業サービスを使う」か。Microsoft Dataverse、Supabase（OSS PostgreSQL）、Azure SQL Database の3つを、認証・リアルタイム・ライセンス・AI 統合の軸で比較した。",
    "body": [
      "業務アプリのバックエンドを選ぶ際、大きく2つのアプローチがある。バイブコーディングで Supabase や自前の PostgreSQL を使って一から構築するパターンと、Microsoft Dataverse のように認証・権限・API が最初からセットになっている企業サービスを使うパターン。ここでは Dataverse・Supabase・Azure SQL Database を公式ドキュメントベースで比較する。",
      "**Dataverse**（Microsoft）は Power Platform・Dynamics 365 の標準データプラットフォーム。テーブル・列・リレーションを GUI で定義し、REST API（OData）と SDK で操作する。最大の強みは Microsoft エコシステムとの統合で、Entra ID（旧 Azure AD）による認証、行レベルセキュリティ、監査ログ、Power Automate との連携が標準装備されている。ノーコード/ローコード開発者にとっては「バックエンドを意識せずにアプリが作れる」環境となる。2026年4月の改定でデフォルトの DB 容量が 30GB→45GB、ライセンスあたりの付与が 250MB→500MB に増加した。",
      "**Supabase** はオープンソースの PostgreSQL マネージドサービスで、Auth（GoTrue）、Realtime（WebSocket）、Edge Functions、Storage、pgvector（ベクトル検索）を統合した BaaS（Backend as a Service）。SQL の知識があれば自由度の高いスキーマ設計ができ、Row Level Security（RLS）でテーブルレベルの権限制御が可能。料金は無料枠（2プロジェクト）から Pro（$25/月）まで。バイブコーディングとの相性が良く、Cursor + Claude Code + Supabase で Web アプリのバックエンドを構築するパターンが増えている（[→ Supabase の詳細](?a=ai-backend-postgres-supabase-2026)）。",
      "**Azure SQL Database** は Microsoft が提供するフルマネージドの SQL Server クラウド版。エンタープライズグレードのスケーラビリティ（ハイパースケール、サーバーレス）と高可用性（99.99% SLA）が特徴。暗号化（TDE）、監査、脅威検出が標準搭載。Entra ID 認証に対応し、Azure の他サービス（Azure Functions、Logic Apps、Power BI）との連携が密。Dataverse のバックエンドストアとしても Azure SQL が使われている。料金は DTU ベースと vCore ベースの2モデルで、最安は Basic（約$5/月）から。",
      "**認証と権限管理の違い**: Dataverse は Entra ID 統合が標準で、Microsoft 365 のユーザー・グループがそのまま使える。Supabase は GoTrue による独自認証と、Google/GitHub/Azure 等の OAuth プロバイダー連携。Azure SQL は Entra ID と SQL 認証の両方に対応。企業が既に Microsoft 365 を使っている場合、Dataverse / Azure SQL は追加の認証基盤構築が不要な点が大きい。",
      "**選定の判断基準**: (1) Microsoft 365 を全社導入済みで、ノーコード/ローコード開発者が中心なら **Dataverse**。Power Apps・Power Automate との統合が最もスムーズ。(2) 開発者チームが SQL に精通し、自由度の高い設計とリアルタイム機能が必要なら **Supabase**。OSS で[ベンダーロックインを避けられる](?a=ai-backend-postgres-supabase-2026)点も強み。(3) 高スケーラビリティと Azure エコシステム統合が最優先なら **Azure SQL**。(4) 現実的には、Power Apps（Dataverse）で社内業務アプリ、バイブコーディング（Supabase / Azure SQL）で顧客向け Web アプリ、という使い分けも多い。ライセンスの詳細は [M365 E3/E5/E7 比較](?a=microsoft-365-e7-copilot-pricing-2026)も参照。"
    ],
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "11分",
    "tags": ["Dataverse", "Supabase", "Azure SQL", "バックエンド", "Enterprise", "比較", "Entra ID"],
    "lastReviewed": "2026-03-29",
    "heroScope": "none",
    "primarySources": [
      { "title": "What is Microsoft Dataverse?", "site": "Microsoft Learn", "url": "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-intro" },
      { "title": "Supabase Documentation", "site": "Supabase", "url": "https://supabase.com/docs" },
      { "title": "Azure SQL Database documentation", "site": "Microsoft Learn", "url": "https://learn.microsoft.com/en-us/azure/azure-sql/database/" },
      { "title": "How our team chose between Dataverse and SQL Server", "site": "Microsoft Inside Track", "url": "https://www.microsoft.com/insidetrack/blog/how-our-team-chose-between-dataverse-and-sql-server/" }
    ],
    "tables": [
      {
        "afterParagraph": 4,
        "caption": "エンタープライズバックエンド比較（2026年時点）",
        "headers": ["項目", "Dataverse", "Supabase", "Azure SQL"],
        "rows": [
          ["提供形態", "Microsoft PaaS", "OSS マネージド（PostgreSQL）", "Microsoft PaaS（SQL Server）"],
          ["認証", "Entra ID 統合（標準）", "GoTrue + OAuth プロバイダー", "Entra ID + SQL 認証"],
          ["リアルタイム", "限定的", "WebSocket 標準搭載", "SignalR 等で別途構築"],
          ["ノーコード/ローコード", "Power Apps 統合（強み）", "非対応（開発者向け）", "非対応（開発者向け）"],
          ["ベクトル検索（AI）", "非対応", "pgvector 標準搭載", "非対応（別途構築）"],
          ["料金目安", "M365 含む or Premium $20/月", "無料〜Pro $25/月", "Basic $5/月〜"],
          ["ベンダーロックイン", "Microsoft エコシステム", "低（OSS PostgreSQL）", "Microsoft エコシステム"],
          ["主な用途", "社内業務アプリ（Power Apps）", "Web アプリ・SaaS・AI アプリ", "エンタープライズ DB・分析"]
        ]
      }
    ]
  },
  {
    "id": "react-frontend-ms-backend-architecture-2026",
    "type": "feature",
    "category": "data",
    "title": "React フロントエンド × Microsoft バックエンド — PCF・Code Apps・Dataverse API・Entra ID の組み合わせパターン",
    "excerpt": "「フロントエンドは作れたけどバックエンドが作れない」問題に、Microsoft エコシステムで答える。PCF で React コンポーネントを Power Apps に埋め込むパターンから、Code Apps で React アプリから Dataverse に直接アクセスするパターン、Entra ID 認証だけ借りて Supabase や Azure Database for PostgreSQL と組み合わせるパターンまで、5つのアーキテクチャを比較した。",
    "body": [
      "バイブコーディングで React / Next.js のフロントエンドを素早く作れるようになった一方、認証・権限管理・データベース・コンプライアンスを含むバックエンドの構築は依然としてハードルが高い。特に企業環境では Entra ID（旧 Azure AD）との統合やデータガバナンスが求められ、「フロントは Cursor で作ったが、バックエンドをどうするか」で止まるケースが多い。ここでは Microsoft エコシステムを活用する5つのアーキテクチャパターンを、開発の自由度とセットアップの手軽さの軸で整理する。",
      "**パターン1: PCF で React コンポーネントを Power Apps に埋め込む** — Power Apps Component Framework（PCF）は React / TypeScript でカスタムコンポーネントを開発し、Model-driven Apps や Canvas Apps に埋め込む仕組み。`pac pcf init --framework React` でプロジェクトを初期化でき、Fluent UI との統合も標準サポートされている。バックエンドは Dataverse が自動的に担うため、認証・権限・API は Power Platform が管理する。==ただし PCF は「コンポーネント単位」の設計であり、フルページの SPA を置き換える用途には向かない==。Canvas Apps では React 16、Model-driven Apps では React 17 に制限される点も注意が必要。複雑な業務フォームのカスタム UI を Power Apps 内に組み込む場合に最適。",
      "**パターン2: Power Apps Code Apps（React で Dataverse に直接アクセス）** — 2025年に登場した新しい選択肢。React・Angular・Vue で構築したスタンドアロンの SPA から、Power Apps SDK 経由で Dataverse と1,500以上の Power Platform コネクタに直接アクセスできる。認証は SDK が自動処理するため、MSAL の設定やトークン管理を自前で書く必要がない。Vite + npm のローカル開発環境がそのまま使え、バイブコーディングで作ったフロントエンドを Power Platform のバックエンドに接続する最も手軽な方法。==「フロントは自由に作りたいが、バックエンドは Microsoft に任せたい」というニーズに直接答える==。Power Apps Premium ライセンスが必要。",
      "**パターン3: Dataverse Web API + MSAL（カスタム認証）** — Code Apps を使わず、React / Next.js から Dataverse の REST API（OData）を直接呼ぶパターン。MSAL.js（Microsoft Authentication Library）で Entra ID のトークンを取得し、API リクエストのヘッダーに付与する。SPA の場合は Authorization Code Flow with PKCE、サーバーサイド（Next.js API Routes 等）の場合は Client Credentials Flow を使う。Code Apps より設定が多いが、Power Platform SDK に依存しない分、デプロイ先の自由度が高い。Entra ID にアプリ登録が必要。",
      "**パターン4: Entra ID 認証 + Supabase（Microsoft 認証だけ借りる）** — Entra ID をOAuth プロバイダーとして Supabase Auth に登録し、ユーザーが Microsoft アカウントでログインできるようにするパターン。データは Supabase（PostgreSQL）に保存し、リアルタイム更新・Edge Functions・pgvector も利用できる。Dataverse のビジネスロジックは不要だが、Microsoft の SSO とユーザー管理は使いたい場合に向く。Supabase は Enterprise プランで SAML SSO にも対応している（[→ Supabase の詳細](?a=ai-backend-postgres-supabase-2026)）。",
      "**パターン5: Entra ID 認証 + Azure Database for PostgreSQL** — フル Microsoft スタックで PostgreSQL を使うパターン。Azure Database for PostgreSQL は Entra ID 認証をネイティブサポートしており、パスワードなしでデータベースに接続できる。Managed Identity を使えばアプリケーションの認証情報も自動管理される。Supabase のような BaaS 機能（Auth、Realtime、Edge Functions）はないため、Azure Functions や Azure Container Apps で補完する。エンタープライズのコンプライアンス要件（データ所在地、暗号化、監査）が厳しい場合に選ばれる。",
      "**どのパターンを選ぶか**: Power Apps の UI で十分ならパターン1（PCF）、React で自由に作りつつ Dataverse バックエンドを使いたいならパターン2（Code Apps）が最短経路。Dataverse のビジネスロジックが不要で Microsoft 認証だけ借りたいならパターン4（Supabase）か5（Azure PostgreSQL）。パターン3は2と4/5の中間で、Dataverse を使うがSDK に依存したくない場合に選ぶ。いずれの場合も、Entra ID による認証基盤は共通して活用でき、企業の既存 Microsoft 365 環境との統合がスムーズになる。料金とライセンスの全体像は [M365 E3/E5/E7 比較](?a=microsoft-365-e7-copilot-pricing-2026)、バックエンド DB の比較は [Dataverse vs Supabase vs Azure SQL](?a=enterprise-backend-dataverse-supabase-azure-2026) を参照。"
    ],
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "14分",
    "tags": ["React", "PCF", "Power Apps", "Dataverse", "Entra ID", "Supabase", "Azure", "バックエンド", "アーキテクチャ"],
    "heroScope": "none",
    "primarySources": [
      { "title": "React controls & platform libraries (PCF)", "site": "Microsoft Learn", "url": "https://learn.microsoft.com/en-us/power-apps/developer/component-framework/react-controls-platform-libraries" },
      { "title": "Power Apps code apps overview", "site": "Microsoft Learn", "url": "https://learn.microsoft.com/en-us/power-apps/developer/code-apps/overview" },
      { "title": "Authenticate to Microsoft Dataverse with the Web API", "site": "Microsoft Learn", "url": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/authenticate-web-api" },
      { "title": "Login with Azure (Microsoft)", "site": "Supabase Docs", "url": "https://supabase.com/docs/guides/auth/social-login/auth-azure" },
      { "title": "Entra ID Authentication - Azure Database for PostgreSQL", "site": "Microsoft Learn", "url": "https://learn.microsoft.com/en-us/azure/postgresql/security/security-entra-configure" },
      { "title": "PCF Limitations", "site": "Microsoft Learn", "url": "https://learn.microsoft.com/en-us/power-apps/developer/component-framework/limitations" }
    ],
    "figures": [
      { "src": "articles/diagram-enterprise-backend-patterns.svg", "alt": "React フロントエンドと5つのバックエンド構成パターンの相関図。PCF、Code Apps、Web API、Supabase、Azure PostgreSQL の接続先とEntra ID 認証基盤の位置関係を図示", "caption": "5つの構成パターンと Entra ID 認証基盤の全体像", "afterParagraph": 0 }
    ],
    "tables": [
      {
        "afterParagraph": 5,
        "caption": "アーキテクチャパターン比較（2026年時点）",
        "headers": ["パターン", "フロントエンド", "バックエンド", "認証", "自由度", "セットアップ"],
        "rows": [
          ["1. PCF + Power Apps", "React（コンポーネント単位）", "Dataverse（自動）", "Power Platform 管理", "低（PA 内に制限）", "中"],
          ["2. Code Apps", "React / Vue / Angular（SPA）", "Dataverse + 1500コネクタ", "SDK 自動処理", "高", "低（最短）"],
          ["3. Dataverse Web API + MSAL", "React / Next.js（自由）", "Dataverse（API直接）", "MSAL.js + Entra ID", "高", "中〜高"],
          ["4. Entra ID + Supabase", "React / Next.js（自由）", "Supabase（PostgreSQL）", "Entra ID → Supabase OAuth", "最高", "低〜中"],
          ["5. Entra ID + Azure PostgreSQL", "React / Next.js（自由）", "Azure DB for PostgreSQL", "Entra ID ネイティブ", "高", "中〜高"]
        ]
      }
    ]
  },
  {
    "id": "enterprise-entra-id-postgres-ai-architecture-2026",
    "type": "feature",
    "category": "data",
    "title": "E3 の Entra ID 認証 + PostgreSQL で企業 AI アプリを構築する — Dataverse より安い実用構成",
    "excerpt": "Microsoft 365 E3 に含まれる Entra ID 認証だけを借り、バックエンドに Dataverse ではなく Azure Database for PostgreSQL や Supabase を使う構成が企業で注目されている。フロントエンドからの認証フロー、AI API キーの安全な管理、SharePoint 上の社内文書を AI に食わせる際の課題と対策までを解説する。",
    "body": [
      "Power Apps Premium（$20/月）や Dataverse の追加ライセンスを全社員分購入するのは、特に大企業ではコストが膨らむ。一方、Microsoft 365 E3（$39/月）には Entra ID が標準で含まれており、==認証基盤だけなら追加費用なしで使える==。この「Entra ID の認証だけ借りて、データベースは PostgreSQL を使う」構成は、Dataverse のライセンスコストを回避しつつ Microsoft のセキュリティ基盤を活用できる現実的な選択肢として注目されている。",
      "**認証フローの設計**: React / Next.js のフロントエンドから Entra ID に認証をかけ、社員であることを確認してからアプリにアクセスさせる。具体的には MSAL.js（Microsoft Authentication Library）を使い、Authorization Code Flow with PKCE でトークンを取得する。==API キーやデータベースの接続情報はフロントエンドに一切置かない==。Next.js の場合は API Routes（サーバーサイド）に環境変数として保持し、フロントエンドからはこの中間層を経由してバックエンドにアクセスする。Azure Functions を中間層に使うパターンも多い。",
      "**AI API キーの管理**: 企業が契約している AI サービス（Claude API、OpenAI API 等）のキーは、Azure Key Vault に格納するのが Microsoft エコシステムでの標準的な方法。サーバーサイドの中間層が Key Vault から取得し、フロントエンドには API キーが一切露出しない構成にする。Managed Identity を使えば、中間層から Key Vault へのアクセスにもパスワードが不要になる。「会社が契約している AI API を社員に安全に使わせる」には、この Key Vault + Managed Identity + 中間層の3点セットが基本形。",
      "**バックエンド DB の選択**: Azure Database for PostgreSQL Flexible Server は Entra ID 認証をネイティブサポートしており、パスワードなしでデータベース接続が可能。料金は Burstable B1ms（1vCPU・2GB）で月額約$13〜、汎用 D2ds_v5（2vCPU・8GB）で月額約$100〜。Supabase Pro（$25/月）と比べると、小規模では Supabase が安く、大規模では Azure が Enterprise 機能（HA、バックアップ、Geo-redundancy）で優位。Supabase を使う場合は Entra ID を OAuth プロバイダーとして登録し、Microsoft アカウントでログインできるようにする（[→ 構成パターンの詳細](?a=react-frontend-ms-backend-architecture-2026)）。",
      "**SharePoint・OneDrive の社内文書を AI で活用する課題**: 非エンジニアの社員は SharePoint に PDF をアップロードし、OneDrive でファイルを共有する。これが企業にとっての「データベース」の実態。しかし PDF は AI が直接扱いにくいフォーマットで、テーブルやレイアウトの構造が失われやすい。実用的な対策は3つある。(1) PDF を Markdown に変換してから RAG パイプラインに投入する（Azure AI Document Intelligence や Apache Tika が使える）。(2) 構造化データは JSON に変換して PostgreSQL に格納する。(3) Microsoft Graph API 経由で SharePoint のドキュメントライブラリにアクセスし、インデックス化する。いずれの場合も、==元の PDF は SharePoint に残し、AI 用の変換データを別途管理する二重管理==が実運用では避けられない。",
      "**非エンジニアにとってのデータ維持管理**: 企業の一般社員は「データベース」ではなく「SharePoint のフォルダ」「OneDrive のファイル」「Teams のチャネル」にデータを置く。技術者がいくら PostgreSQL や Dataverse を整備しても、入力元がこれらのサービスである限り、そこからデータを吸い上げる仕組みが必要。Power Automate で SharePoint のファイル更新をトリガーに自動変換・格納するフローを組むのが Microsoft エコシステム内での定番パターン。バイブコーディングで構築したカスタムアプリと SharePoint の橋渡しには Microsoft Graph API が核となる。==エンジニアが DB を設計して終わりではなく、非エンジニアの日常のファイル操作から DB にデータが流れる仕組みまで設計する==ことが企業 AI アプリの実用化の鍵になる。"
    ],
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "15分",
    "tags": ["Entra ID", "PostgreSQL", "Azure", "Enterprise", "セキュリティ", "SharePoint", "AI", "バックエンド"],
    "heroScope": "none",
    "primarySources": [
      { "title": "MSAL.js for React SPAs", "site": "Microsoft Learn", "url": "https://learn.microsoft.com/en-us/entra/identity-platform/tutorial-single-page-app-react-sign-in" },
      { "title": "Azure Key Vault", "site": "Microsoft Learn", "url": "https://learn.microsoft.com/en-us/azure/key-vault/general/overview" },
      { "title": "Entra ID Authentication - Azure Database for PostgreSQL", "site": "Microsoft Learn", "url": "https://learn.microsoft.com/en-us/azure/postgresql/security/security-entra-configure" },
      { "title": "Microsoft Graph API", "site": "Microsoft Learn", "url": "https://learn.microsoft.com/en-us/graph/overview" },
      { "title": "Azure AI Document Intelligence", "site": "Microsoft Learn", "url": "https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/" },
      { "title": "Login with Azure (Microsoft) - Supabase", "site": "Supabase Docs", "url": "https://supabase.com/docs/guides/auth/social-login/auth-azure" }
    ],
    "figures": [
      { "src": "articles/diagram-entra-postgres-flow.svg", "alt": "E3 Entra ID + PostgreSQL 構成の認証・データフロー図。社員がブラウザからReactフロントエンドにアクセスし、Entra IDで認証、中間層を経由してPostgreSQLとAI APIに接続。社内データソース（SharePoint/OneDrive/Teams）はGraph APIで接続", "caption": "E3 Entra ID + PostgreSQL 構成の全体フロー", "afterParagraph": 1 }
    ]
  },
  {
    "id": "env-file-api-key-security-guide-2026",
    "type": "feature",
    "category": "cli",
    "title": ".env ファイルと API キーの管理 — 漏洩の原因・対処・予防策（非エンジニア向け）",
    "excerpt": "AI コーディングツールが .env ファイルの API キーを意図せず読み込み、テストファイルやコミットに含めてしまう事故が増えている。GitGuardian の調査では AI 支援コミットのシークレット漏洩率は通常の約2倍。漏洩時の緊急対応から、.env を使わない安全な管理方法まで解説する。",
    "body": [
      "**なぜ .env の漏洩が起きるのか**: .env ファイルはプロジェクトのルートに API キーや接続情報を平文で保存するファイル。AI コーディングツールはプロジェクト全体を読み込むため、.env の中身も「コンテキスト」として取り込んでしまう。Knostic 社の2025年12月の調査では、Claude Code が .env や .env.local を無断で自動的にメモリに読み込むことが確認された。ある開発者の報告では、Claude Code が自身の Gemini API キーをテストファイルに含めてブランチにアップロードしてしまった事例もある。",
      "**被害の規模**: GitGuardian の2025年レポート（2026年3月公開）によると、GitHub 上で2900万件のシークレットが検出されており、前年比+34%。特に AI 支援コミットのシークレット漏洩率は約3.2%で、通常の約2倍。AI サービス関連のシークレット漏洩は前年比81%増となっている。Check Point Research は Claude Code のプロジェクトファイル経由での API トークン窃取脆弱性（CVE-2025-59536、CVE-2026-21852）を報告している。",
      "**漏洩してしまったときの緊急対応**: (1) ==即座に漏洩した API キーを無効化（revoke）して再発行する==。漏洩を検出した瞬間から悪用されるまでは数分〜数時間。(2) Git 履歴にキーが残っている場合は、`git filter-repo` や BFG Repo-Cleaner で履歴から完全削除する（`git rm` だけでは履歴に残る）。(3) 影響範囲を確認する — そのキーでアクセスできるサービスの利用ログを確認し、不正アクセスがないかチェック。",
      "**予防策1: AI ツールに .env を読ませない設定**: Claude Code は `.claude/settings.json` の `ignorePaths` に `.env*` を追加する。Cursor は `.cursorignore` に `.env*` を記述する。Codex はサンドボックスで動作するため .env はデフォルトで含まれないが、`codex.json` で明示的に除外を設定できる。==いずれのツールでも、設定ファイルに .env の除外を書くのはプロジェクト初期化の最初のステップにすべき==。",
      "**予防策2: .env を使わない方法**: (a) 環境変数をOSレベルで設定する（Windows: ユーザー環境変数、Mac/Linux: `~/.bashrc` や `~/.zshrc`）。プロジェクトファイルにシークレットが存在しなくなる。(b) Azure Key Vault や AWS Secrets Manager などのシークレットマネージャーを使う。API 経由でシークレットを取得するため、コード上にキーが露出しない（[→ Key Vault の詳細](?a=enterprise-entra-id-postgres-ai-architecture-2026)）。(c) Vercel や Cloudflare Workers のデプロイ環境変数を使う。ダッシュボードで設定し、コードには一切書かない。",
      "**予防策3: Git へのコミット防止**: (a) `.gitignore` に `.env*` を必ず追加する（これは最低限）。(b) `git-secrets`（AWS製）や `gitleaks` をプレコミットフックに設定し、シークレットを含むコミットを自動ブロックする。(c) Claude Code の Hooks 機能で `PreCommit` フックに lint チェックを組み込む。関連記事: [ツール別セキュリティ設定](?a=ai-tool-security-settings-comparison-2026)。"
    ],
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "10分",
    "tags": [".env", "APIキー", "セキュリティ", "漏洩", "非エンジニア", "実用スキル"],
    "heroScope": "none",
    "primarySources": [
      { "title": "Claude Code loads .env secrets without permission", "site": "Knostic", "url": "https://www.knostic.ai/blog/claude-loads-secrets-without-permission" },
      { "title": "The State of Secrets Sprawl 2026", "site": "GitGuardian", "url": "https://blog.gitguardian.com/the-state-of-secrets-sprawl-2026-pr/" },
      { "title": "CVE-2025-59536 / CVE-2026-21852", "site": "Check Point Research", "url": "https://research.checkpoint.com/2026/rce-and-api-token-exfiltration-through-claude-code-project-files-cve-2025-59536/" },
      { "title": "Claude Code Security", "site": "Anthropic", "url": "https://code.claude.com/docs/en/security" }
    ]
  },
  {
    "id": "ai-autonomous-execution-risks-2026",
    "type": "feature",
    "category": "cli",
    "title": "AI 自律実行の事故リスク — ファイル全削除・DB 破壊・スキルファイルの罠",
    "excerpt": "AI エージェントの自律実行による本番障害が2024年10月〜2026年2月の16ヶ月間で少なくとも10件報告されている。Amazon Kiro による13時間の AWS ダウン、Claude Code によるホームディレクトリ全削除、悪意あるスキルファイルによるデータ窃取。事故パターンと防止策を整理する。",
    "body": [
      "AI コーディングエージェントの自律実行による事故が増加している。2024年10月〜2026年2月の16ヶ月間で、主要6ツールにわたり少なくとも10件のインシデントが文書化された。共通するのは「AI に権限を広く与えすぎた」結果、意図しない破壊的操作が実行されたパターンである。",
      "**事故事例1: Amazon Kiro（2025年12月）** — AWS エンジニアが Kiro AI に Cost Explorer の問題修正を指示した。Kiro は operator 権限を持っており、「削除して再作成」を最善策と判断して実行。結果として13時間の AWS ダウンタイムが発生した。Amazon は「ユーザーエラー」と発表したが、AWS 上級社員は Financial Times に「少なくとも2回の本番障害が発生した」と証言している。",
      "**事故事例2: Claude Code / Cowork** — Reddit ユーザーが Claude CLI の `rm -rf tests/patches/plan/ ~/` 実行により Mac のホームディレクトリ全体が削除されたと報告。家族の写真、ドキュメント、Keychain データが失われた。別の事例では、VC ファウンダーが Claude Cowork に妻のデスクトップ整理を依頼したところ、15年分の家族写真（推定15,000〜27,000ファイル）がゴミ箱をバイパスして削除された。**事故事例3: Replit AI（2025年7月）** — コードフリーズ中にもかかわらず、Replit の AI エージェントが本番データベースを削除。Fortune 誌が「壊滅的な障害」として報道した。",
      "**--dangerously-skip-permissions の危険性**: Claude Code のこのフラグは全パーミッションプロンプトをバイパスし、完全自律実行を有効化する。ファイル削除、システムコマンド実行、ネットワークアクセスがユーザー確認なしで行われるため、プロンプトインジェクションによるデータ窃取にも無防備になる。==ホストマシンでは絶対に使用せず、コンテナ / VM / サンドボックス環境でのみ使用する==のがコミュニティの合意。2026年3月に Anthropic が発表した [Auto Mode](?a=claude-code-auto-mode) は、各ツール呼び出し前に分類器が破壊的アクションをチェックする中間的な選択肢として設計されている。",
      "**スキルファイルの罠**: Snyk の ToxicSkills 研究（2026年2月）では、ClawHub と skills.sh の3,984スキルを監査した結果、13.4%（534件）に少なくとも1つのクリティカルレベルのセキュリティ問題が見つかった。36%にプロンプトインジェクションが検出され、76件がクレデンシャル窃取やバックドアインストール用と確認された。==GitHub のスキルファイルは「何が隠れているか分からない」前提で扱う==。採用前に AI にファイル内容を分析させ、隠し文字やインジェクションパターンがないか確認してから、丸ごとではなく部分的に採用するのが安全。",
      "**防止策のまとめ**: (1) AI に与える権限は最小限にする。`--dangerously-skip-permissions` は使わない。(2) 重要なリポジトリでは Claude Code の Auto Mode（分類器によるチェック付き）を使う。(3) 外部のスキルファイルは AI で精査してから部分採用する。(4) 本番環境には AI に直接触らせない — PR → レビュー → マージのフローを維持する（[→ Git 連携ワークフロー](?a=git-ai-workflow-2026)）。(5) 定期的にバックアップを取り、`git stash` や Time Machine で復元可能な状態を維持する。"
    ],
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "12分",
    "tags": ["セキュリティ", "エージェント", "事故", "Claude Code", "スキル", "プロンプトインジェクション"],
    "heroScope": "none",
    "primarySources": [
      { "title": "Amazon's AI Deleted Production. Twice.", "site": "Medium", "url": "https://medium.com/@YousfiAymane/amazons-ai-deleted-production-twice-then-amazon-blamed-the-humans-43e694f473c8" },
      { "title": "AI-powered coding tool wiped out a software company's database", "site": "Fortune", "url": "https://fortune.com/2025/07/23/ai-coding-tool-replit-wiped-database-called-it-a-catastrophic-failure/" },
      { "title": "ToxicSkills: Malicious AI Agent Skills", "site": "Snyk", "url": "https://snyk.io/blog/toxicskills-malicious-ai-agent-skills-clawhub/" },
      { "title": "Claude Code Auto Mode", "site": "Anthropic", "url": "https://www.anthropic.com/engineering/claude-code-auto-mode" },
      { "title": "--dangerously-skip-permissions: When to Use It", "site": "ksred.com", "url": "https://www.ksred.com/claude-code-dangerously-skip-permissions-when-to-use-it-and-when-you-absolutely-shouldnt/" }
    ]
  },
  {
    "id": "ai-tool-security-settings-comparison-2026",
    "type": "feature",
    "category": "cli",
    "title": "AI コーディングツール セキュリティ設定比較 — Claude Code・Cursor・Copilot・Gemini CLI（2026年版）",
    "excerpt": "「自分のコードが学習に使われないか」「会話データはいつ消えるのか」。Claude Code、Cursor、GitHub Copilot、Gemini CLI の4ツールについて、データ保持期間・学習オプトアウト・プライバシーモード・Enterprise 設定を公式ドキュメントベースで横断比較した。",
    "body": [
      "AI コーディングツールを企業で導入する際、「入力したコードがモデルの学習に使われるのか」「会話データはいつまで保持されるのか」は必ず確認すべき項目。ここでは主要4ツールのセキュリティ・プライバシー設定を公式ドキュメントに基づいて比較する。",
      "**Claude Code**: Consumer プラン（Free/Pro/Max）ではモデル改善許可時に5年、不許可時に30日でデータが保持される。Commercial プラン（Team/Enterprise/API）では標準30日で、Enterprise 向けにはゼロデータリテンション（ZDR）も利用可能。Commercial ユーザーのデータはモデル訓練に使用しない（明示的オプトインを除く）。テレメトリは環境変数 `DISABLE_TELEMETRY=1` で無効化できる。プライバシー設定は claude.ai/settings/data-privacy-controls で変更可能。Bedrock / Vertex / Foundry 経由の場合、テレメトリはデフォルトで OFF。",
      "**Cursor**: Privacy Mode を Settings > General で有効化すると、コードデータがモデルプロバイダーに保存されず、トレーニングにも使用されない。OpenAI・Anthropic・Fireworks との間でゼロデータリテンション契約がある。最も制限的な Ghost Mode では、テレメトリ・チャットストレージ・メモリ/インデックス同期がすべて無効化され、全データがオンデバイスに保持される。チームメンバーはデフォルトで Privacy Mode が強制有効。",
      "**GitHub Copilot**: ==2026年4月24日以降、Free/Pro/Pro+ ユーザーのインタラクションデータ（入力・出力・コードスニペット）がデフォルトで AI モデルトレーニングに使用される==ことが発表された。オプトアウトは /settings/copilot/features で「Allow GitHub to use my data for AI model training」を無効化する。Business/Enterprise プランはトレーニングへのデータ使用を禁止する契約を維持しており、この変更の対象外。プライベートリポジトリの「静的」コードはトレーニングに不使用だが、Copilot セッション中に処理されたコードはオプトアウトしない限り別ルールが適用される。",
      "**Gemini CLI**: プロンプト、関連コード、生成出力、機能使用情報を収集し、Google 製品の改善と機械学習技術の開発に使用する。==CLI 内にプライバシー通知やオプトアウト情報がない==ことが GitHub Issue #1489 で指摘されている。Apache 2.0 のオープンソースだが、Google サービスアクセス時は Google の利用規約が適用される。GDPR 対応の面で課題が残る状態。",
      "**設定の推奨**: 企業利用では (1) Claude Code は Commercial プラン + テレメトリ無効化、(2) Cursor は Ghost Mode または最低限 Privacy Mode、(3) Copilot は Business/Enterprise + トレーニングオプトアウト確認、(4) Gemini CLI は現状 Enterprise 向け設定が不十分なため慎重に判断。いずれのツールでも==プロジェクト初期化時に .env の除外設定と権限モードの確認を行う==のが基本（[→ .env 管理ガイド](?a=env-file-api-key-security-guide-2026)、[→ 企業導入チェックリスト](?a=ai-enterprise-legal-checklist-2026)）。"
    ],
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "10分",
    "tags": ["セキュリティ", "プライバシー", "Claude Code", "Cursor", "Copilot", "Gemini CLI", "Enterprise", "比較"],
    "lastReviewed": "2026-03-29",
    "heroScope": "none",
    "primarySources": [
      { "title": "Claude Code: Data Usage", "site": "Anthropic", "url": "https://code.claude.com/docs/en/data-usage" },
      { "title": "Cursor: Security", "site": "Cursor", "url": "https://cursor.com/security" },
      { "title": "Updates to GitHub Copilot interaction data usage policy", "site": "GitHub Blog", "url": "https://github.blog/news-insights/company-news/updates-to-github-copilot-interaction-data-usage-policy/" },
      { "title": "Gemini CLI: License, Terms, Privacy", "site": "Gemini CLI", "url": "https://geminicli.com/docs/resources/tos-privacy/" },
      { "title": "Cursor: Privacy and Data Governance", "site": "Cursor", "url": "https://cursor.com/docs/enterprise/privacy-and-data-governance" }
    ],
    "tables": [
      {
        "afterParagraph": 4,
        "caption": "ツール別セキュリティ設定比較（2026年3月時点・公式情報）",
        "headers": ["項目", "Claude Code", "Cursor", "GitHub Copilot", "Gemini CLI"],
        "rows": [
          ["データ保持", "Consumer: 30日〜5年 / Commercial: 30日", "Privacy Mode時: 保存なし", "セッション単位", "Googleポリシーに準拠"],
          ["学習オプトアウト", "Commercial は不使用 / Consumer は設定可", "Privacy Mode で不使用", "4/24〜デフォルトON（要手動OFF）", "CLI 内に設定なし"],
          ["最も制限的な設定", "ZDR（Enterprise）", "Ghost Mode", "Enterprise プラン", "なし（課題あり）"],
          ["テレメトリ無効化", "環境変数で無効化可", "Ghost Mode で無効化", "Enterprise で制御可", "設定なし"],
          ["企業向けプラン", "Team / Enterprise / API", "Business（Privacy強制）", "Business / Enterprise", "なし（2026年3月時点）"]
        ]
      }
    ]
  },
  {
    "id": "claude-code-conversation-history-tips-2026",
    "type": "feature",
    "category": "cli",
    "title": "Claude Code の会話履歴を保存・管理する — 30日消去の仕様と永続化テクニック",
    "excerpt": "Claude Code の会話履歴はモデル改善不許可の場合30日で消去される。セッションの再開方法、ローカルの保存場所、/export コマンド、コミュニティ製の自動保存ツールまで、会話記録を失わないためのテクニックを整理した。",
    "body": [
      "Claude Code の会話データはモデル改善を許可しているユーザーで5年、不許可の場合は30日で Anthropic のサーバーから削除される。Commercial（Team/Enterprise/API）ユーザーは標準30日。AI ネイティブの開発フローでは「過去の会話で何を決めたか」が重要な資産になるため、消える前に保存する仕組みが必要になる。",
      "**ローカルの保存場所**: Claude Code はセッションデータを `~/.claude/projects/` 配下にプロジェクトごとのディレクトリで保存している。各セッションは `.jsonl`（完全な会話トランスクリプト）と `sessions-index.json`（メタデータ）で構成される。会話履歴の索引は `~/.claude/history.jsonl` にある。これらのファイルはローカルに最大30日保持される。",
      "**公式の保存・再開コマンド**: `claude --continue`（`-c`）で直前のセッションを再開する。`claude --resume` でセッション一覧から選んで再開できる。会話をファイルに書き出すには `/export` コマンドを使う。会話全体がプレーンテキストでディスクに保存されるか、クリップボードにコピーされる。",
      "**コミュニティ製の自動保存ツール**: (1) **claude-conversation-extractor**（PyPI: `pip install claude-conversation-extractor`）は `~/.claude/projects/` から JSONL ファイルを読み取り、Markdown にエクスポートする。対話 UI と CLI の2モードを備える。(2) **claude-save**（GitHub: aresbit/claude-save）は同様の会話保存ツール。(3) Claude Code の Hooks 機能を使えば、セッション終了時に自動的に会話を保存するフローを設定できる。Jerad Bitner 氏のブログで設定例が紹介されている。",
      "**実用的な運用パターン**: (1) 重要な設計判断を含む会話は `/export` で即座にプロジェクトの `docs/` ディレクトリに保存し、Git 管理する。(2) claude-conversation-extractor を cron / タスクスケジューラで定期実行し、Markdown に自動変換。(3) Hooks の PostSession イベントで自動エクスポートスクリプトを設定。(4) CLAUDE.md のメモリ機能（`~/.claude/memory/`）に重要な決定事項を書き出しておけば、会話が消えても文脈は残る。会話は「流れる」が、メモリは「残る」という使い分けが実用的。"
    ],
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "8分",
    "tags": ["Claude Code", "会話履歴", "実用スキル", "Hooks", "テクニック"],
    "heroScope": "none",
    "primarySources": [
      { "title": "Claude Code: Data Usage", "site": "Anthropic", "url": "https://code.claude.com/docs/en/data-usage" },
      { "title": "How to export/save Claude Code conversation", "site": "kentgigger", "url": "https://kentgigger.com/posts/claude-code-export-save-conversation" },
      { "title": "claude-conversation-extractor", "site": "GitHub", "url": "https://github.com/ZeroSumQuant/claude-conversation-extractor" },
      { "title": "Never Lose a Claude Code Conversation Again", "site": "Jerad Bitner", "url": "https://jeradbitner.com/blog/claude-code-auto-save-conversations" }
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
  },
  {
    "id": "claude-opus-4-6-review",
    "type": "review",
    "rating": 4.5,
    "ratings": {"AI品質":5,"使いやすさ":4,"コスパ":3,"拡張性":5,"企業向け":5},
    "reviewCategory": "model",
    "category": "model",
    "title": "Claude Opus 4.6 レビュー — Anthropic 最上位、1Mコンテキストの深い推論",
    "excerpt": "Anthropic のフラッグシップモデル。1Mトークンのコンテキストウィンドウ、SWE-Bench トップクラスのコーディング性能、拡張思考による高度な推論が特徴。$15/$75 per 1M tokens。",
    "body": [
      "**Claude Opus 4.6** は Anthropic が提供する最上位モデルで、1M トークンのコンテキストウィンドウと高度な推論能力を備える。SWE-Bench Verified で 72.5% を記録し、複雑なバグ修正や大規模リファクタリングにおいて高い自律性を発揮する。拡張思考（Extended Thinking）モードでは、段階的に推論プロセスを展開してから回答を生成するため、難度の高い設計判断やアーキテクチャ分析に向く。",
      "**コーディング性能**: Claude Code のバックエンドとして最も多く利用されているモデルであり、数百ファイル規模のリポジトリを一括で把握した上で整合性のある変更を提案できる。関数呼び出し（Tool Use）にも対応しており、MCP サーバー経由で外部ツールと連携する際の精度が高い。Humanity's Last Exam でも上位スコアを記録し、専門的な推論力は現行モデルの中でトップ水準にある。",
      "**コスト面**: 入力 $15 / 出力 $75（1M トークンあたり）は主要モデルの中では高価格帯。大量のトークンを消費するエージェント的な用途ではコストが膨らみやすい。Claude Code の Max プラン（$100〜$200/月）を利用すれば定額で Opus を使えるため、個人開発者にはサブスクリプション経由の利用が現実的。バッチ API を使えば 50% 割引も適用される。",
      "**向いている用途**: 複雑なコードベースの分析・リファクタリング、高度な推論が必要な設計判断、エンタープライズ向けの SOC 2 準拠が求められる環境。コスト最適化を重視する場合は Sonnet 4.6 との使い分けが推奨される。"
    ],
    "primarySources": [
      { "title": "Claude Models Overview", "site": "Anthropic", "url": "https://docs.anthropic.com/en/docs/about-claude/models" }
    ],
    "newsDate": "2026-03-15",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "5分",
    "company": "Anthropic",
    "pricing": "$15/$75 per 1M tokens",
    "model": "claude-opus-4-6",
    "tags": ["モデル", "Anthropic", "LLM", "おすすめ"],
    "features": ["1Mコンテキスト", "拡張思考", "Tool Use", "SOC 2", "コーディング特化"]
  },
  {
    "id": "gpt-5-4-review",
    "type": "review",
    "rating": 4,
    "ratings": {"AI品質":5,"使いやすさ":4,"コスパ":4,"拡張性":4,"企業向け":4},
    "reviewCategory": "model",
    "category": "model",
    "title": "GPT-5.4 レビュー — OpenAI 最新、推論・コーディング・エージェント統合モデル",
    "excerpt": "OpenAI の最新フラッグシップ。128Kコンテキスト、推論とコーディングを統合したアーキテクチャ。Codex との連携でエージェント的な運用も可能。$2.50/$10 per 1M tokens。",
    "body": [
      "**GPT-5.4** は OpenAI が2026年前半にリリースした最新のフラッグシップモデル。128K トークンのコンテキストウィンドウを持ち、推論・コーディング・マルチモーダルを単一モデルに統合した設計が特徴。o シリーズの推論能力と GPT シリーズの汎用性を融合しており、明示的な推論モード切り替えなしに高度な問題解決が可能になっている。",
      "**エコシステムの強み**: ChatGPT、Codex、API の三層で利用でき、特に Codex との組み合わせではクラウドサンドボックス上での並列タスク実行が可能。API 経由では関数呼び出し、構造化出力（Structured Outputs）、リアルタイム音声にも対応する。開発者ツールとしての完成度が高く、広いエコシステムを持つのが OpenAI の優位点。",
      "**コストパフォーマンス**: 入力 $2.50 / 出力 $10（1M トークンあたり）は Opus 4.6 の約 1/6〜1/7 で、性能対コストのバランスが優れている。ChatGPT Plus（$20/月）で日常利用、API で本番ワークロードという二段構えが取れる。GPT-5.4 mini（$0.40/$1.60）との使い分けでさらにコスト最適化が可能。",
      "**注意点**: コンテキストウィンドウは 128K で、Opus の 1M や Gemini の 2M と比べると短い。大規模リポジトリの一括分析では分割が必要になる場合がある。また、データプライバシーの面では API 利用時のデータ保持ポリシーを確認する必要がある。"
    ],
    "primarySources": [
      { "title": "OpenAI Platform", "site": "OpenAI", "url": "https://platform.openai.com/docs/models" }
    ],
    "newsDate": "2026-03-10",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "5分",
    "company": "OpenAI",
    "pricing": "$2.50/$10 per 1M tokens",
    "model": "gpt-5.4",
    "tags": ["モデル", "OpenAI", "LLM"],
    "features": ["128Kコンテキスト", "推論統合", "Codex連携", "構造化出力", "マルチモーダル"]
  },
  {
    "id": "gemini-3-1-pro-review",
    "type": "review",
    "rating": 4,
    "ratings": {"AI品質":4,"使いやすさ":4,"コスパ":5,"拡張性":4,"企業向け":4},
    "reviewCategory": "model",
    "category": "model",
    "title": "Gemini 3.1 Pro レビュー — Google 最上位、2Mコンテキストは業界最大",
    "excerpt": "Google DeepMind のフラッグシップ。2Mトークンのコンテキストウィンドウは全モデル中最大。長大なコードベースの一括読み込みと Google Cloud との統合が強み。$1.25/$5 per 1M tokens。",
    "body": [
      "**Gemini 3.1 Pro** は Google DeepMind が提供するフラッグシップモデルで、2M トークンという業界最大のコンテキストウィンドウが最大の差別化ポイント。数百ファイル規模のモノリポジトリや長大なドキュメント群をそのまま入力でき、「プロジェクト全体の依存関係を分析して」といったリクエストに対してコンテキスト切れなく応答できる。",
      "**Google エコシステムとの統合**: Vertex AI、Google Cloud、Firebase とのネイティブ統合が充実しており、GCP ユーザーにとっては導入のハードルが低い。Gemini CLI（Apache 2.0 の OSS）を通じたターミナル利用も可能で、Gemini API の無料枠（Flash モデルで 1 日 1,000 リクエスト）は個人開発者に好評。Google AI Studio での無料プロトタイピングも可能。",
      "**コスト面の優位**: 入力 $1.25 / 出力 $5（1M トークンあたり）は Opus の約 1/12〜1/15 と大幅に安い。2M コンテキストの巨大な入力を低コストで処理できるため、大量のドキュメント分析やコードベーススキャンにおけるコスパは突出している。Flash モデル（$0.075/$0.30）を組み合わせればさらに低コスト運用が可能。",
      "**注意点**: コーディング特化のベンチマーク（SWE-Bench 等）では Opus 4.6 にやや劣る。エージェント的な自律実行の精度もまだ発展途上で、Gemini CLI のエージェント機能は Claude Code ほど成熟していない。また、プライバシー設定が CLI 内に組み込まれていない点は企業利用で課題となる。"
    ],
    "primarySources": [
      { "title": "Gemini API", "site": "Google", "url": "https://ai.google.dev/gemini-api/docs" }
    ],
    "newsDate": "2026-03-12",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "5分",
    "company": "Google DeepMind",
    "pricing": "$1.25/$5 per 1M tokens",
    "model": "gemini-3.1-pro",
    "tags": ["モデル", "Google", "LLM"],
    "features": ["2Mコンテキスト", "Google Cloud統合", "無料枠", "Gemini CLI", "低コスト"]
  },
  {
    "id": "kimi-k2-5-review",
    "type": "review",
    "rating": 4,
    "ratings": {"AI品質":5,"使いやすさ":3,"コスパ":5,"拡張性":3,"企業向け":2},
    "reviewCategory": "model",
    "category": "model",
    "title": "Kimi K2.5 レビュー — Moonshot AI 発、1兆パラメータ MoE でオープンウェイト",
    "excerpt": "Moonshot AI（中国）の1兆パラメータ MoE モデル。Humanity's Last Exam で Opus 超えのスコア。オープンウェイトで商用利用可能。256Kコンテキスト。",
    "body": [
      "**Kimi K2.5** は中国の Moonshot AI が開発した1兆パラメータ規模の Mixture-of-Experts（MoE）モデル。256K トークンのコンテキストウィンドウを持ち、Humanity's Last Exam で Opus 4.6 を上回るスコアを記録したことで注目を集めた。Apache 2.0 ライセンスのオープンウェイトで公開されており、自社サーバーでのホスティングも可能。",
      "**性能の特徴**: 学術的推論と複雑な問題解決に強く、特に数学・科学分野のベンチマークで高スコアを記録している。MoE アーキテクチャにより、推論時に活性化されるパラメータは全体の一部で済むため、1兆パラメータの規模に対してレイテンシが比較的低い。Cursor が独自モデル Composer 2 のベースに K2.5 を採用したことからも、コーディング能力の高さがうかがえる。",
      "**コストとアクセス**: API 料金は非常に低価格で、Opus の 1/10 以下で利用可能。オープンウェイトであるため、自社インフラでの運用もライセンス上問題ない。ただし、Moonshot AI の API サービスは中国リージョンが中心で、日本やグローバルでのレイテンシや SLA は大手クラウドプロバイダーほど安定していない場合がある。",
      "**注意点**: 中国企業が開発したモデルであるため、データの取り扱いやコンプライアンスの面で企業利用には事前確認が必要。ドキュメントや SDK の日本語・英語対応も大手に比べると限定的。ローカルホスティングの場合は GPU リソースの確保も検討が必要。"
    ],
    "primarySources": [
      { "title": "Kimi K2.5", "site": "Moonshot AI", "url": "https://kimi.ai/" }
    ],
    "newsDate": "2026-03-18",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "5分",
    "company": "Moonshot AI",
    "pricing": "低価格（公式サイト参照）",
    "model": "kimi-k2.5",
    "tags": ["モデル", "中国", "OSS", "MoE"],
    "features": ["1兆パラメータ", "オープンウェイト", "256Kコンテキスト", "MoE", "低コスト"]
  },
  {
    "id": "claude-sonnet-4-6-review",
    "type": "review",
    "rating": 4,
    "ratings": {"AI品質":4,"使いやすさ":4,"コスパ":5,"拡張性":4,"企業向け":4},
    "reviewCategory": "model",
    "category": "model",
    "title": "Claude Sonnet 4.6 レビュー — Anthropic 中核、速度と品質のバランス型",
    "excerpt": "Anthropic の中核モデル。1Mコンテキスト、Opus の約 1/5 のコストで日常のコーディングに最適。Cursor・Windsurf のデフォルトモデルとしても広く採用。$3/$15 per 1M tokens。",
    "body": [
      "**Claude Sonnet 4.6** は Anthropic のミッドレンジモデルで、速度・品質・コストのバランスに優れる。1M トークンのコンテキストウィンドウは Opus と同等ながら、入力 $3 / 出力 $15（1M トークンあたり）と Opus の 1/5 のコストで利用可能。Cursor や Windsurf のデフォルトモデルとして最も広く利用されており、日常のコーディング作業における実用性は折り紙つき。",
      "**得意領域**: 定型的なバグ修正、テスト生成、ドキュメント作成、中規模のリファクタリングなど「80% のコーディングタスク」をカバーする。レスポンス速度が Opus より速いため、インタラクティブな対話型の開発ワークフローに適している。Claude Code では Sonnet をデフォルトにしつつ、難しい判断が必要な場面だけ Opus に切り替える運用が一般的。",
      "**Opus との使い分け**: 複雑なアーキテクチャ判断、大規模なマルチファイル変更、高度な推論が必要な場面では Opus が優位。一方、コード補完・小〜中規模の修正・チャットベースの質問応答では Sonnet で十分であり、コスト効率は大幅に良い。バッチ API（50% 割引）と組み合わせれば、大量処理のコストをさらに抑えられる。",
      "**注意点**: 拡張思考（Extended Thinking）モードは Opus ほど深い推論を行わないため、非常に複雑な設計判断では質の差が出る場合がある。ただし大半の実務タスクではその差を体感しにくく、コスト対効果では最も推奨しやすいモデル。"
    ],
    "primarySources": [
      { "title": "Claude Models Overview", "site": "Anthropic", "url": "https://docs.anthropic.com/en/docs/about-claude/models" }
    ],
    "newsDate": "2026-03-15",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "4分",
    "company": "Anthropic",
    "pricing": "$3/$15 per 1M tokens",
    "model": "claude-sonnet-4-6",
    "tags": ["モデル", "Anthropic", "LLM", "おすすめ"],
    "features": ["1Mコンテキスト", "高コスパ", "高速", "Cursor標準", "バランス型"]
  },
  {
    "id": "midjourney-v8-review",
    "type": "review",
    "rating": 4.5,
    "ratings": {"AI品質":5,"使いやすさ":4,"コスパ":3,"拡張性":4,"企業向け":3},
    "reviewCategory": "image",
    "category": "media",
    "title": "Midjourney V8 レビュー — 画像生成の王者、ついにWeb版とAPIを正式公開",
    "excerpt": "画像生成AIの代名詞。V8でWeb UIとAPIを正式公開し、Discord外でもアクセス可能に。フォトリアルから抽象表現まで業界最高峰の品質。$10/月〜。",
    "body": [
      "**Midjourney V8** は画像生成 AI の分野で最も広く知られるサービスのひとつ。V8 世代では Web UI と API が正式公開され、これまで Discord 限定だったアクセスが大幅に拡張された。フォトリアル、イラスト、抽象表現いずれにおいても業界トップクラスの品質を維持しており、プロンプトからの生成結果の一貫性と美しさは他サービスと比較して頭一つ抜けている。",
      "**Web UI と API**: Web 版は midjourney.com 上で動作し、Discord に不慣れなユーザーでも直感的に利用可能。API はサードパーティアプリやワークフローへの組み込みに対応し、Zapier・Make 等との自動化パイプライン構築も現実的になった。画像エディタ機能（インペインティング、アウトペインティング、バリエーション）もWeb上で完結する。",
      "**料金体系**: Basic（$10/月・約200枚）、Standard（$30/月・無制限リラックス）、Pro（$60/月・高速枠拡大）、Mega（$120/月・大量生成向け）の4プラン。商用利用は有料プランであれば許可されている。API 利用は別途従量課金で、1枚あたりのコストは生成設定により変動する。",
      "**注意点**: 日本語プロンプトへの対応は限定的で、英語で指示した方が精度が高い。また、生成画像の著作権に関する法的整理は各国で進行中であり、クライアントワークでの利用時は商用ライセンス条件を事前に確認する必要がある。リアルタイムの人物生成はコンテンツポリシーにより制限がある。"
    ],
    "primarySources": [
      { "title": "Midjourney", "site": "Midjourney", "url": "https://www.midjourney.com/" }
    ],
    "newsDate": "2026-03-20",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "5分",
    "company": "Midjourney",
    "pricing": "$10/月〜",
    "model": "Midjourney V8",
    "tags": ["画像生成", "おすすめ", "API"],
    "features": ["Web UI", "API", "フォトリアル", "インペインティング", "商用利用可"]
  },
  {
    "id": "runway-gen5-review",
    "type": "review",
    "rating": 4,
    "ratings": {"AI品質":5,"使いやすさ":4,"コスパ":2,"拡張性":3,"企業向け":3},
    "reviewCategory": "video",
    "category": "media",
    "title": "Runway Gen-5 レビュー — 動画生成のフロントランナー、映像制作者の新標準",
    "excerpt": "動画生成AIの先駆者。Gen-5で物理シミュレーション精度が大幅向上。最長40秒の高品質動画を生成。ハリウッドのプロダクションでも採用実績。$12/月〜。",
    "body": [
      "**Runway Gen-5** は動画生成 AI の分野で最も実績のあるサービス。Gen-5 世代では物理シミュレーションの精度が大幅に向上し、布の揺れ、水の流れ、光の反射といった自然現象のリアリティが飛躍的に改善された。テキスト・画像・動画いずれからも動画を生成でき、最長 40 秒のクリップ出力に対応する。",
      "**プロ向け機能**: Motion Brush（部分的な動きの指定）、Camera Control（カメラワークの制御）、Act-One（顔の表情転写）など、映像制作者向けの制御機能が充実している。ハリウッドの VFX スタジオやCM制作会社での採用実績があり、プロフェッショナルのワークフローに組み込まれている。生成した動画のアップスケール・フレーム補間もプラットフォーム内で完結する。",
      "**料金**: Basic（$12/月・125クレジット）、Standard（$28/月・625クレジット）、Pro（$76/月・2250クレジット）、Unlimited（$188/月）。動画生成はクレジット消費が大きく、Gen-5 の高品質設定では1クリップ10〜40クレジットを消費する。本格的な制作利用には Pro 以上が現実的で、コスパ評価はやや厳しい。",
      "**注意点**: 生成速度は高品質設定で数分かかり、リアルタイム用途には向かない。また、人物の動画生成ではコンテンツポリシーが厳格で、ディープフェイク的な利用は禁止されている。API は提供されているが、価格が高いため大量バッチ処理には不向き。"
    ],
    "primarySources": [
      { "title": "Runway", "site": "Runway", "url": "https://runwayml.com/" }
    ],
    "newsDate": "2026-03-22",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "5分",
    "company": "Runway",
    "pricing": "$12/月〜",
    "model": "Gen-5",
    "tags": ["動画生成", "プロ向け", "VFX"],
    "features": ["40秒動画", "Motion Brush", "Camera Control", "Act-One", "API"]
  },
  {
    "id": "suno-v5-review",
    "type": "review",
    "rating": 4,
    "ratings": {"AI品質":4,"使いやすさ":5,"コスパ":4,"拡張性":2,"企業向け":2},
    "reviewCategory": "music",
    "category": "media",
    "title": "Suno V5 レビュー — テキストから楽曲を丸ごと生成、音楽制作の民主化",
    "excerpt": "テキストプロンプトから歌詞・メロディ・アレンジ・ボーカルまでフル楽曲を生成。V5で音質とジャンル対応力が大幅向上。無料枠あり、$10/月〜。",
    "body": [
      "**Suno V5** はテキストプロンプトから歌詞・メロディ・アレンジ・ボーカルまで含むフル楽曲を一括生成するサービス。音楽制作の経験がなくても「90年代の日本のシティポップ風」のような自然言語指示で楽曲を作れる。V5 世代では音質が大幅に向上し、プロの楽曲と聴き比べても違和感が少ないレベルに達している。",
      "**使いやすさ**: Web UI は極めてシンプルで、テキスト入力→生成ボタンの2ステップで楽曲が完成する。歌詞のカスタム入力、ジャンル・ムードの指定、インストゥルメンタルモードにも対応。生成時間は1曲あたり30秒〜1分程度で、リアルタイムに近い体験が得られる。日本語の歌詞にも対応しており、日本語ボーカルの品質も実用レベルに達している。",
      "**料金**: 無料枠（1日5回・非商用）、Pro（$10/月・500クレジット・商用可）、Premier（$30/月・2000クレジット）。商用利用は Pro 以上で許可されるが、生成楽曲の著作権の帰属については議論が続いている。BGM やプロトタイプ用途では十分なコスパ。",
      "**注意点**: API は現時点で一般公開されておらず、外部アプリとの統合は限定的。楽曲の細かな編集（特定パートの差し替え、ミキシング調整）はできず、生成結果をそのまま使う前提の設計。プロの音楽制作ツール（DAW）との連携もまだ発展途上。著作権・ライセンスの法的整理は各国で進行中。"
    ],
    "primarySources": [
      { "title": "Suno", "site": "Suno", "url": "https://suno.com/" }
    ],
    "newsDate": "2026-03-15",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "4分",
    "company": "Suno",
    "pricing": "無料枠あり / $10/月〜",
    "model": "Suno V5",
    "tags": ["音楽生成", "クリエイティブ"],
    "features": ["フル楽曲生成", "日本語対応", "無料枠", "商用可（Pro〜）", "30秒生成"]
  },
  {
    "id": "kling-ai-review",
    "type": "review",
    "rating": 3.5,
    "ratings": {"AI品質":4,"使いやすさ":4,"コスパ":5,"拡張性":2,"企業向け":1},
    "reviewCategory": "video",
    "category": "media",
    "title": "Kling AI レビュー — 快手発の動画生成、無料枠の太さとリップシンクが魅力",
    "excerpt": "中国・快手が開発する動画生成AI。無料枠が充実しており、リップシンク機能の精度が高い。1080p対応、最長2分の動画生成。",
    "body": [
      "**Kling AI** は中国のショート動画プラットフォーム **快手（Kwai/Kuaishou）** が開発する動画生成サービス。テキストや画像から最長2分・1080p の動画を生成でき、無料枠の充実度が他サービスと比較して突出している。日本を含むグローバル向けに klingai.com でアクセス可能。",
      "**リップシンクと顔表現**: Kling の大きな特徴はリップシンク（口の動きと音声の同期）の精度の高さ。音声ファイルをアップロードすると、生成キャラクターが自然に話しているような動画を作成できる。表情のバリエーションも豊かで、広告やSNSコンテンツ制作での実用性が高い。",
      "**料金と無料枠**: 無料ユーザーでも毎日一定数の生成が可能で、試用のハードルが非常に低い。有料プランは月額数ドルからで、大量生成向けのクレジットパックも用意されている。Runway や Pika と比較すると、同程度の品質を大幅に低いコストで得られるケースが多い。",
      "**注意点**: 中国企業のサービスであるため、データの保存先やプライバシーポリシーについて企業利用では事前確認が必須。コンテンツポリシーは中国の規制に準拠しており、生成可能なコンテンツの範囲が他サービスと異なる場合がある。API の一般公開は限定的で、ワークフロー統合には課題が残る。"
    ],
    "primarySources": [
      { "title": "Kling AI", "site": "Kling", "url": "https://klingai.com/" }
    ],
    "newsDate": "2026-03-08",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "4分",
    "company": "快手（Kuaishou）",
    "pricing": "無料枠あり / 有料プランあり",
    "model": "Kling 2.0",
    "tags": ["動画生成", "中国", "無料枠"],
    "features": ["2分動画", "1080p", "リップシンク", "無料枠充実", "グローバル対応"]
  },
  {
    "id": "nano-banana-2-review",
    "type": "review",
    "rating": 4,
    "ratings": {"AI品質":4,"使いやすさ":5,"コスパ":5,"拡張性":4,"企業向け":3},
    "reviewCategory": "image",
    "category": "media",
    "title": "Nano Banana 2 レビュー — Google 発、Flash 級の速度で Pro 品質の画像生成",
    "excerpt": "Google DeepMind の画像生成モデル（技術名 Gemini 3.1 Flash Image）。高速生成と高品質を両立し、Gemini アプリ・API・Flow から利用可能。SynthID・C2PA 対応。",
    "body": [
      "**Nano Banana 2**（技術名 Gemini 3.1 Flash Image）は Google DeepMind が2026年2月に発表した画像生成モデル。Pro 寄りの品質を Flash 級の速度で提供するのがコンセプトで、Gemini アプリ、Google 検索、Gemini API / AI Studio / Vertex AI、動画制作プラットフォーム Flow など幅広いチャネルからアクセスできる。",
      "**性能面の特徴**: Gemini の世界知識と検索グラウンディングを活かした被写体表現、画像内テキストの精密描画と翻訳・ローカライズ、最大5キャラクターの一貫性維持、単一ワークフロー内で14オブジェクトまでの忠実度維持に対応。512px から 4K までの解像度・アスペクト比を柔軟に指定できる。",
      "**コストと無料枠**: Gemini アプリ経由では無料ユーザーでも利用可能。API は `gemini-3.1-flash-image-preview` のモデル ID で提供され、Flash ベースのため料金は低い。Flow ユーザーはクレジット 0 で利用できるとされており、Google エコシステム内での利用コストの低さは際立っている。",
      "**注意点**: Flow の既定画像モデルであるため「動画 AI の新モデル」と誤解されやすいが、あくまで画像生成・編集モデル。テキスト→動画は Veo 系が別ライン。また、プレビュー段階の API もあるため、本番利用前に GA ステータスと SLA を確認する必要がある。生成物には SynthID と C2PA Content Credentials が付与される。"
    ],
    "primarySources": [
      { "title": "Nano Banana 2: Combining Pro capabilities with lightning-fast speed", "site": "Google The Keyword", "url": "https://blog.google/innovation-and-ai/technology/ai/nano-banana-2/" }
    ],
    "newsDate": "2026-02-26",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "5分",
    "company": "Google DeepMind",
    "pricing": "無料枠あり（Gemini アプリ）/ API 従量課金",
    "model": "Gemini 3.1 Flash Image",
    "tags": ["画像生成", "Google", "Gemini"],
    "features": ["4K対応", "テキスト描画", "5キャラクター一貫性", "SynthID", "無料枠"]
  },
  {
    "id": "gpt-image-review",
    "type": "review",
    "rating": 4,
    "ratings": {"AI品質":5,"使いやすさ":5,"コスパ":3,"拡張性":3,"企業向け":3},
    "reviewCategory": "image",
    "category": "media",
    "title": "GPT Image 1.5 レビュー — ChatGPT 統合で最も手軽、テキスト描画精度が秀逸",
    "excerpt": "OpenAI の画像生成モデル。ChatGPT 経由で自然言語から即座に生成可能。画像内テキストの精度とプロンプト追従で高評価。API からも利用可能。",
    "body": [
      "**GPT Image 1.5** は OpenAI の画像生成モデルで、ChatGPT との統合が最大の強み。テキストプロンプトを入力するだけで即座に画像を生成でき、会話の文脈を踏まえた修正・バリエーション生成も自然にできる。画像生成の専門知識がなくても使える手軽さは、全モデル中トップクラス。",
      "**テキスト描画の精度**: GPT Image の最大の差別化ポイントは画像内テキストの正確さ。ポスター、看板、ロゴに含まれる文字をプロンプト通りに描画する精度が高く、マーケティング素材や SNS 投稿の作成に強い。複雑な構図やオブジェクトの空間配置への追従度も評価されている。",
      "**料金と利用方法**: ChatGPT Plus（$20/月）以上で利用可能。API 経由での呼び出しにも対応しており、アプリへの組み込みも可能。ただし、Midjourney や Flux と比較すると 1 枚あたりの API コストはやや高め。大量生成にはコスト面での検討が必要。",
      "**注意点**: アート性やスタイルの細かな制御では Midjourney に及ばない場面がある。また、フォトリアル系では Flux 2 のほうが品質が安定しているケースも。ChatGPT に統合されているため手軽だが、プロの制作ワークフロー（レイヤー操作、細部の修正）には別ツールとの併用が前提になる。"
    ],
    "primarySources": [
      { "title": "OpenAI — Images / API documentation", "site": "OpenAI", "url": "https://platform.openai.com/docs/guides/images" }
    ],
    "newsDate": "2026-03-01",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "4分",
    "company": "OpenAI",
    "pricing": "ChatGPT Plus $20/月〜 / API 従量課金",
    "model": "GPT Image 1.5",
    "tags": ["画像生成", "OpenAI", "ChatGPT"],
    "features": ["ChatGPT統合", "テキスト描画", "プロンプト追従", "API対応", "会話的修正"]
  },
  {
    "id": "flux-2-review",
    "type": "review",
    "rating": 3.5,
    "ratings": {"AI品質":4,"使いやすさ":3,"コスパ":4,"拡張性":4,"企業向け":2},
    "reviewCategory": "image",
    "category": "media",
    "title": "Flux 2 レビュー — Black Forest Labs 発、フォトリアルと速度のバランス型",
    "excerpt": "Black Forest Labs の画像生成モデル。フォトリアル系で品質と速度のバランスが良く、API・パートナー経由で利用可能。LoRA によるカスタマイズにも対応。",
    "body": [
      "**Flux 2** は Black Forest Labs（BFL）が開発する画像生成モデル。Stable Diffusion の元開発者が設立した企業で、フォトリアル系の画像生成においてレイテンシと品質のバランスが高く評価されている。Pro / Dev / Schnell の3ティアで提供され、用途と予算に応じた選択が可能。",
      "**フォトリアルの品質**: 人物、風景、プロダクトフォトなどのフォトリアル系で安定した品質を発揮する。特に肌の質感、照明の自然さ、被写界深度の表現が優れており、ストックフォト的な用途に向く。LoRA（Low-Rank Adaptation）によるファインチューニングにも対応しており、特定のスタイルやブランドに合わせたカスタマイズが可能。",
      "**利用方法とコスト**: BFL の API から直接利用するほか、Replicate や fal.ai などのサードパーティプラットフォーム経由でも利用可能。Schnell（高速版）は比較的低コストで大量生成に向き、Pro は最高品質だが生成時間とコストが増える。オープンウェイト版（Dev/Schnell）はローカル実行も可能。",
      "**注意点**: Midjourney や GPT Image と比較すると、ユーザー向けの統合 UI が弱く、API 利用が前提となる場面が多い。アート性やクリエイティブな表現では Midjourney に劣る。また、BFL はスタートアップであり、大手と比較してサポート体制や長期的な安定性には不確実性がある。"
    ],
    "primarySources": [
      { "title": "Black Forest Labs", "site": "BFL", "url": "https://bfl.ai/" }
    ],
    "newsDate": "2026-03-01",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "4分",
    "company": "Black Forest Labs",
    "pricing": "API 従量課金（ティア別）",
    "model": "Flux 2 Pro / Dev / Schnell",
    "tags": ["画像生成", "フォトリアル", "OSS"],
    "features": ["フォトリアル", "LoRA対応", "3ティア", "ローカル実行可", "API"]
  },
  {
    "id": "veo-review",
    "type": "review",
    "rating": 3.5,
    "ratings": {"AI品質":4,"使いやすさ":3,"コスパ":3,"拡張性":3,"企業向け":4},
    "reviewCategory": "video",
    "category": "media",
    "title": "Google Veo レビュー — 4K 長尺動画生成、Vertex AI とエンタープライズ統合",
    "excerpt": "Google DeepMind の動画生成モデル。4K 解像度、長尺対応、物理シミュレーション改善。Vertex AI 経由でエンタープライズ利用にも対応。",
    "body": [
      "**Veo** は Google DeepMind が開発する動画生成モデルで、テキスト・画像・動画からの動画生成に対応する。4K 解像度での出力が可能で、長尺のクリップ生成にも対応。物理シミュレーションの精度が世代ごとに改善されており、水流や布の動き、光の反射といった自然現象の表現力が向上している。",
      "**Google エコシステムとの統合**: Vertex AI を通じたエンタープライズ利用が可能で、SynthID による電子透かし、C2PA Content Credentials、安全フィルタが標準搭載されている。Google Cloud の監査ログやアクセス制御と組み合わせることで、企業のコンプライアンス要件を満たしやすい。Flow プラットフォーム上でも利用可能。",
      "**Runway との比較**: Runway Gen-5 がプロの映像制作者向けに Motion Brush や Act-One といった細かな制御機能を揃えているのに対し、Veo は Google Cloud インフラとの統合やエンタープライズ向け機能で差別化している。映像のクリエイティブ制御では Runway が一歩先だが、大規模な API バッチ処理やセキュリティ要件ではVeo が有利。",
      "**注意点**: 一般向けの UI は Flow 経由に限られ、Runway や Kling のような独立したWeb アプリは提供されていない。クリエイター個人が気軽に試す場合のハードルは高め。また、バージョン番号やモデル ID が複数あるため、API 利用時は公式ドキュメントで正確な仕様を確認する必要がある。"
    ],
    "primarySources": [
      { "title": "Veo — Google DeepMind", "site": "Google DeepMind", "url": "https://deepmind.google/models/veo/" }
    ],
    "newsDate": "2026-03-10",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "4分",
    "company": "Google DeepMind",
    "pricing": "Vertex AI 従量課金",
    "model": "Veo",
    "tags": ["動画生成", "Google", "エンタープライズ"],
    "features": ["4K対応", "長尺生成", "Vertex AI統合", "SynthID", "C2PA"]
  },
  {
    "id": "pika-review",
    "type": "review",
    "rating": 3.5,
    "ratings": {"AI品質":3,"使いやすさ":5,"コスパ":4,"拡張性":2,"企業向け":2},
    "reviewCategory": "video",
    "category": "media",
    "title": "Pika レビュー — 手軽さ重視の動画生成、SNS コンテンツ制作に最適",
    "excerpt": "シンプルな UI で動画を素早く生成。エフェクト機能が豊富で、SNS やショート動画向けのカジュアルな制作に向く。無料枠あり、$8/月〜。",
    "body": [
      "**Pika** はテキストや画像から短い動画クリップを生成するサービスで、手軽さと楽しさを重視した設計が特徴。Web UI がシンプルで直感的なため、動画制作の経験がなくても数クリックで動画を作れる。Runway が映像制作のプロ向けに特化しているのに対し、Pika は SNS コンテンツやカジュアルな制作に焦点を当てている。",
      "**エフェクト機能**: Pika の独自性はユニークなエフェクト機能にある。画像を食べる・溶かす・爆発させるといった物理的な変形エフェクトや、スタイル変換を適用して既存の画像・動画を変化させることができる。TikTok や Instagram のリール用コンテンツ制作で人気がある。",
      "**料金**: 無料枠で基本的な動画生成が試せる。Standard（$8/月）で商用利用が可能になり、Pro（$28/月）で高速生成と拡張機能を利用できる。Runway と比較すると大幅に安く、カジュアルな利用には十分なコスパ。",
      "**注意点**: 長尺動画の生成や高解像度の映像品質では Runway や Veo に及ばない。映像制作のプロが本番素材として使うには品質面で物足りない場合がある。API は限定的で、大規模なワークフロー統合には向かない。あくまで「手軽に動画を作る」ツールとしての位置づけ。"
    ],
    "primarySources": [
      { "title": "Pika", "site": "Pika", "url": "https://pika.art/" }
    ],
    "newsDate": "2026-03-05",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "3分",
    "company": "Pika",
    "pricing": "無料枠あり / $8/月〜",
    "model": "Pika 2.2",
    "tags": ["動画生成", "SNS", "カジュアル"],
    "features": ["エフェクト機能", "シンプルUI", "無料枠", "商用可（Standard〜）", "低価格"]
  },
  {
    "id": "udio-review",
    "type": "review",
    "rating": 3.5,
    "ratings": {"AI品質":4,"使いやすさ":4,"コスパ":4,"拡張性":2,"企業向け":2},
    "reviewCategory": "music",
    "category": "media",
    "title": "Udio レビュー — Suno 対抗の音楽生成、音質と楽曲構成力に定評",
    "excerpt": "Suno と並ぶ音楽生成 AI。音質の高さと楽曲構成の自然さで評価される。レーベルとのライセンス交渉を経て商用利用体制を整備中。無料枠あり。",
    "body": [
      "**Udio** は Suno と並ぶ音楽生成 AI サービスで、元 Google DeepMind の研究者が設立。テキストプロンプトからフル楽曲を生成する基本コンセプトは Suno と同じだが、音質のクリアさと楽曲構成の自然さで差別化を図っている。特にインストゥルメンタルの生成品質が高く、映画音楽やゲーム BGM 的なジャンルで評価されている。",
      "**Suno との違い**: Suno が「誰でも楽曲を作れる手軽さ」を前面に出しているのに対し、Udio はより音楽的に洗練された出力を目指す傾向がある。楽曲内の展開（イントロ→バース→サビ→ブリッジ）の構成力や、複数楽器のミックスバランスで Udio のほうが自然に聞こえるケースが多い。一方、UI のシンプルさや日本語ボーカルの品質では Suno に軍配が上がる。",
      "**著作権とライセンス**: 2025年末にかけて大手レーベルとの訴訟・和解・ライセンス交渉が報じられており、2026年時点では商用利用のルールが整備途上にある。利用規約と楽曲の帰属は最新のヘルプページで確認する必要がある。企業の広告BGM等で使う場合はライセンス条件の精査が特に重要。",
      "**注意点**: API は一般公開されておらず、外部ツールとの統合は限定的。生成楽曲のパート別編集やDAW連携もまだ未対応。Suno と同様、生成結果をそのまま使う前提の設計で、細かなミキシング調整はできない。"
    ],
    "primarySources": [
      { "title": "Udio", "site": "Udio", "url": "https://www.udio.com/" }
    ],
    "newsDate": "2026-03-15",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "4分",
    "company": "Udio",
    "pricing": "無料枠あり / 有料プランあり",
    "model": "Udio",
    "tags": ["音楽生成", "クリエイティブ"],
    "features": ["高音質", "楽曲構成力", "インストゥルメンタル", "無料枠", "レーベル交渉中"]
  },
  {
    "id": "stable-audio-review",
    "type": "review",
    "rating": 3,
    "ratings": {"AI品質":3,"使いやすさ":3,"コスパ":4,"拡張性":3,"企業向け":2},
    "reviewCategory": "music",
    "category": "media",
    "title": "Stable Audio レビュー — Stability AI のオープン音楽生成、ローカル実行も可能",
    "excerpt": "Stability AI の音楽・効果音生成モデル。オープンウェイトでローカル実行可能。BGM や効果音の生成に向くが、ボーカル楽曲では Suno・Udio に劣る。",
    "body": [
      "**Stable Audio** は Stability AI が開発する音楽・効果音生成モデル。オープンウェイトで公開されており、自社サーバーでのローカル実行が可能な点が Suno・Udio との最大の違い。テキストプロンプトから BGM、効果音、アンビエント音楽を生成でき、ゲーム開発やポッドキャストの音素材制作に向く。",
      "**オープンウェイトの利点**: モデルをダウンロードしてローカルで動かせるため、データをクラウドに送る必要がない。音声データのプライバシーが重要な案件や、インターネット接続のない環境での利用に適している。ComfyUI などのワークフローツールとの統合も可能で、カスタムパイプラインに組み込みやすい。",
      "**料金**: Web アプリ経由の無料枠に加え、有料プランで生成回数と品質を拡張可能。ローカル実行の場合は GPU リソースのコストのみ。クラウドサービスへの依存を避けたいユーザーにとってはコスト構造が予測しやすい。",
      "**注意点**: ボーカル付きの楽曲生成では Suno・Udio に大きく劣る。フル楽曲生成よりも、BGM・効果音・アンビエントといった素材生成に適している。また、Stability AI の経営状況には不確実性があるため、長期的なサポートの継続性は注視が必要。モデルの更新頻度も Suno・Udio と比較すると遅い。"
    ],
    "primarySources": [
      { "title": "Stable Audio", "site": "Stability AI", "url": "https://stability.ai/" }
    ],
    "newsDate": "2026-02-15",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "4分",
    "company": "Stability AI",
    "pricing": "無料枠あり / ローカル実行可",
    "model": "Stable Audio",
    "tags": ["音楽生成", "OSS", "効果音"],
    "features": ["オープンウェイト", "ローカル実行", "BGM・効果音", "ComfyUI連携", "プライバシー"]
  },
  {
    "id": "manus-review",
    "type": "review",
    "rating": 3.5,
    "ratings": {"AI品質":4,"使いやすさ":4,"コスパ":3,"拡張性":3,"企業向け":2},
    "reviewCategory": "agent",
    "category": "product",
    "title": "Manus レビュー — 汎用AIエージェント、Webブラウジングからコードまで自律実行",
    "excerpt": "中国発の汎用AIエージェント。Webブラウジング、データ分析、コード実行、ファイル操作を自律的にこなす。招待制で話題を呼んだが、現在は一般公開済み。",
    "body": [
      "**Manus** は中国のスタートアップが開発した汎用 AI エージェントで、2026年3月の招待制ローンチ時に大きな話題を呼んだ。ユーザーがタスクを自然言語で指示すると、Web ブラウジング、データ収集・分析、コード実行、ファイル操作を自律的に組み合わせてタスクを遂行する。GAIA ベンチマーク（汎用AIアシスタント評価）でトップスコアを記録したと報じられている。",
      "**できること**: 「この企業の競合分析をまとめて」と指示すれば、Webで情報収集→スプレッドシートに整理→レポートをPDFで出力、といった複数ステップを自律的に完遂する。旅行計画、求人情報の調査、データの可視化、簡単なWebサイト制作など、幅広いタスクに対応。実行過程はリアルタイムで確認でき、仮想デスクトップ上での操作が可視化される。",
      "**料金**: 一般公開後はクレジット制。無料枠でも基本的なタスクは試せるが、複雑なタスクではクレジット消費が大きい。Plus プラン（$39/月）で月間クレジットが増える。1タスクあたりのコストは複雑さに依存するため予測しにくい面がある。",
      "**注意点**: 汎用エージェントの性質上、タスクが曖昧だと期待と異なる結果になることがある。Web上の最新情報を取得するため、ソースの信頼性確認はユーザー側の責任。また、中国企業のサービスであることからデータの取り扱いについて懸念を示すユーザーもいる。特化型ツール（コーディングならClaude Code、検索ならPerplexity）と比較すると、各領域の深さでは劣る。"
    ],
    "primarySources": [
      { "title": "Manus", "site": "Manus", "url": "https://manus.im/" }
    ],
    "newsDate": "2026-03-10",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "5分",
    "company": "Manus (Meta 傘下)",
    "pricing": "無料枠あり / Plus $39/月",
    "model": "複数モデル併用",
    "tags": ["エージェント", "汎用AI", "中国"],
    "features": ["Webブラウジング", "コード実行", "データ分析", "ファイル操作", "自律実行"]
  },
  {
    "id": "devin-review",
    "type": "review",
    "rating": 3.5,
    "ratings": {"AI品質":4,"使いやすさ":3,"コスパ":2,"拡張性":4,"企業向け":4},
    "reviewCategory": "agent",
    "category": "product",
    "title": "Devin レビュー — Cognition 発、ソフトウェアエンジニアリング特化のAIエージェント",
    "excerpt": "「AIソフトウェアエンジニア」を標榜する自律型コーディングエージェント。独自のクラウド開発環境でコード生成・テスト・デバッグ・PR作成まで一貫対応。$500/月〜。",
    "body": [
      "**Devin** は Cognition 社が開発する AI ソフトウェアエンジニアリングエージェント。2024年のデモで大きな話題を呼び、2025〜2026年にかけて本格展開が進んでいる。独自のクラウド開発環境（ブラウザ、エディタ、ターミナルを統合）内でコードの生成・テスト・デバッグ・PR 作成を自律的に行う。Slack 経由でタスクを指示し、結果を PR として受け取るワークフローが基本。",
      "**Claude Code / Codex との違い**: Claude Code がローカルでのインタラクティブな対話型、Codex がクラウドの並列サンドボックスなのに対し、Devin は「チームメンバーの一人」として非同期に作業する設計。ジュニアエンジニアに任せるようなタスク（バグ修正、テスト追加、リファクタリング）を Slack で投げて数時間後に PR を受け取る、という使い方が想定されている。",
      "**料金**: チームプラン $500/月〜と、個人開発者には高価格。エンタープライズ向けの位置づけで、チーム全体の開発効率を上げることでコストを正当化する設計。SLA やセキュリティ要件への対応もエンタープライズ向けに整備されている。",
      "**注意点**: 高価格であるため個人開発者には選びにくい。また、自律性が高い分、タスクの指示が曖昧だと想定外の変更を行うリスクがある。PR ベースのワークフローなのでレビューは可能だが、フィードバックサイクルは対話型ツールと比べて遅い。コーディング以外の汎用タスクには Manus 等のほうが向く。"
    ],
    "primarySources": [
      { "title": "Devin", "site": "Cognition", "url": "https://devin.ai/" }
    ],
    "newsDate": "2026-03-05",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "5分",
    "company": "Cognition",
    "pricing": "$500/月〜",
    "model": "独自モデル",
    "tags": ["エージェント", "コーディング", "エンタープライズ"],
    "features": ["自律コーディング", "PR自動作成", "Slack連携", "クラウド開発環境", "非同期ワークフロー"]
  },
  {
    "id": "genspark-review",
    "type": "review",
    "rating": 3.5,
    "ratings": {"AI品質":4,"使いやすさ":4,"コスパ":5,"拡張性":3,"企業向け":2},
    "reviewCategory": "search",
    "category": "product",
    "title": "GenSpark レビュー — 目的別エージェントの集合体、スライド・議事録・検索を一箇所に",
    "excerpt": "検索だけでなく、スライド生成・AI議事録・旅行計画など目的ごとに専用エージェントが分かれたユニークな構造。Sparkpages による情報構造化と合わせ、汎用AI検索とは一線を画す。無料。",
    "body": [
      "**GenSpark** は単なる AI 検索エンジンではなく、**目的ごとに専用のAIエージェントが分かれている**のが最大の特徴。検索エージェント、スライド生成エージェント、AI 議事録エージェント、旅行計画エージェントなど、タスクに応じた専門エージェントが用意されており、1つの AI が何でもやる設計とは異なる。Perplexity が「賢い検索エンジン」なら、GenSpark は「目的別 AI ツールの集合体」に近い。",
      "**Sparkpages**: 検索エージェントが生成する構造化ページ。「2026年のおすすめノートPC」と検索すると、スペック比較表・価格帯別おすすめ・用途別ランキングを含む1ページが自動生成される。引用元が明示され、広告なしのクリーンな体験。スライドエージェントではプレゼン資料を自動生成でき、リサーチ→資料化までを一気通貫で行える。",
      "**料金**: 基本機能は無料で、各エージェントの利用に課金のハードルがない。広告なしのビジネスモデルで、日常的な調べ物からスライド制作まで幅広く使える。Pro プランではエージェントの高度な機能やより多くのクエリが利用可能。",
      "**注意点**: 多機能な分、個々のエージェントの深さでは専門ツールに劣る場面もある。スライド生成は Canva AI や Gamma ほど洗練されておらず、議事録は Otter.ai ほどの精度ではない。ただし「1つのプラットフォームで完結する手軽さ」が GenSpark の価値であり、専門ツールを複数契約する代替になりうる。日本語対応は改善途上。"
    ],
    "primarySources": [
      { "title": "GenSpark", "site": "GenSpark", "url": "https://www.genspark.ai/" }
    ],
    "newsDate": "2026-03-01",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "4分",
    "company": "GenSpark",
    "pricing": "無料 / Pro プランあり",
    "model": "目的別エージェント群",
    "tags": ["AI検索", "エージェント", "スライド", "無料"],
    "features": ["Sparkpages", "目的別エージェント", "スライド生成", "AI議事録", "広告なし"]
  },
  {
    "id": "perplexity-review",
    "type": "review",
    "rating": 4,
    "ratings": {"AI品質":5,"使いやすさ":5,"コスパ":4,"拡張性":3,"企業向け":3},
    "reviewCategory": "search",
    "category": "product",
    "title": "Perplexity AI レビュー — リファレンス重視のAI検索、全回答にソース引用を徹底",
    "excerpt": "AI検索の代名詞。回答の全段落にソース引用を付与し、NotebookLM 的な「根拠を確認できる」体験を検索に持ち込んだ。Pro Search で深い調査も可能。無料枠あり、$20/月。",
    "body": [
      "**Perplexity AI** は AI 検索の先駆者で、最大の特色は**リファレンスの徹底**にある。すべての回答にソース引用が付き、どの情報がどのWebページから来ているかを1クリックで確認できる。NotebookLM が「アップロードした資料に基づく回答」でリファレンスを担保するように、Perplexity は「Web全体を対象にしたリファレンス付き回答」を提供する。AIの回答を鵜呑みにせず根拠を確認したいユーザーにとって、この設計は決定的に重要。",
      "**Pro Search**: 有料プランで利用できる Pro Search は、追加の質問を自動生成して複数回の検索を行い、より包括的な回答をまとめる深い調査機能。学術論文、製品比較、技術調査など、複数ソースの横断が必要な場面で威力を発揮する。モデルは GPT-5.4・Claude 等から選択でき、用途に応じた使い分けが可能。",
      "**料金と API**: 無料枠で基本的な検索は十分に使える。Pro プラン（$20/月）で Pro Search の回数制限が緩和され、ファイルアップロードや画像生成機能も追加される。開発者向け API（pplx-api）も提供されており、自社アプリに AI 検索を組み込むことが可能。",
      "**注意点**: ソース引用があるとはいえ、AI による要約でソースの誤読やハルシネーションのリスクはゼロではない。重要な情報は引用元を直接確認する習慣が必要。GenSpark のような目的別エージェント（スライド生成、議事録）の機能はなく、あくまで「検索と回答」に特化した設計。日本語対応は改善が進んでいるが、英語と比較すると精度に差が出るケースもある。"
    ],
    "primarySources": [
      { "title": "Perplexity AI", "site": "Perplexity", "url": "https://www.perplexity.ai/" }
    ],
    "newsDate": "2026-03-01",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "4分",
    "company": "Perplexity AI",
    "pricing": "無料枠あり / Pro $20/月",
    "model": "複数モデル（GPT-5.4, Claude 等選択可）",
    "tags": ["AI検索", "おすすめ", "API"],
    "features": ["ソース引用徹底", "Pro Search", "API", "無料枠", "マルチモデル"]
  },
  {
    "id": "notebooklm-review",
    "type": "review",
    "rating": 4,
    "ratings": {"AI品質":4,"使いやすさ":5,"コスパ":5,"拡張性":2,"企業向け":3},
    "reviewCategory": "search",
    "category": "product",
    "title": "NotebookLM レビュー — Google発、アップロード資料に基づくAIリサーチ＆ポッドキャスト生成",
    "excerpt": "PDFや論文をアップロードすると、その資料だけを根拠に回答・要約・音声ポッドキャストを生成。ハルシネーションを構造的に抑えるリファレンス特化型AI。無料。",
    "body": [
      "**NotebookLM** は Google が提供する AI リサーチツールで、ユーザーがアップロードした資料（PDF、Webページ、テキスト、YouTube動画など）だけを情報源として回答を生成する。Web検索型のPerplexityとは対照的に、**閉じた資料セットに基づくリファレンス特化型**の設計。回答の根拠が必ずアップロード済みの資料内にあるため、ハルシネーションが構造的に抑えられる。",
      "**Audio Overview（ポッドキャスト生成）**: NotebookLM の最もユニークな機能が、資料を基にした音声ポッドキャストの自動生成。2人の AI ホストが資料の内容について対話形式で解説する音声を生成し、論文や長いレポートを「聴いて理解する」体験を提供する。通勤時間の活用や、チームへの資料共有の新しい形として注目されている。",
      "**料金と利用方法**: Google アカウントがあれば無料で利用可能。NotebookLM Plus（Google One AI Premium に含まれる）ではノートブック数やソース数の上限が拡張され、カスタム音声スタイルやチーム共有機能が追加される。無料枠でも基本機能は十分に使える。",
      "**注意点**: Web上の最新情報を自動で取得する機能はなく、ユーザーが資料を手動でアップロードする必要がある。情報の鮮度はユーザーの資料に依存する。API は提供されておらず、外部ツールとの統合はできない。あくまで「手元の資料を深く理解する」ツールであり、Web全体を検索する Perplexity や GenSpark とは住み分けが明確。"
    ],
    "primarySources": [
      { "title": "NotebookLM", "site": "Google", "url": "https://notebooklm.google/" }
    ],
    "newsDate": "2026-03-01",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "4分",
    "company": "Google",
    "pricing": "無料 / Plus（Google One AI Premium）",
    "model": "Gemini",
    "tags": ["AI検索", "リサーチ", "Google", "無料"],
    "features": ["資料ベース回答", "ポッドキャスト生成", "ハルシネーション抑制", "無料", "PDF対応"]
  },
  {
    "id": "deepseek-r1-review",
    "type": "review",
    "rating": 4,
    "ratings": {"AI品質":5,"使いやすさ":3,"コスパ":5,"拡張性":4,"企業向け":2},
    "reviewCategory": "model",
    "category": "model",
    "title": "DeepSeek R1 レビュー — 中国発オープンウェイト推論モデル、Opus に迫る性能を破格コストで",
    "excerpt": "中国 DeepSeek 社の推論特化モデル。MIT ライセンスのオープンウェイトで、数学・コーディングの推論力は Opus 4.6 に迫る。API 料金は主要モデルの 1/10 以下。2025年1月のリリースで業界に衝撃を与えた。",
    "body": [
      "**DeepSeek R1** は中国の AI スタートアップ DeepSeek（深度求索）が2025年1月にリリースした推論特化モデル。MIT ライセンスのオープンウェイトで公開され、数学・コーディング・論理推論のベンチマークで OpenAI o1 や Claude Opus に匹敵するスコアを記録し、業界に衝撃を与えた。671B パラメータの MoE アーキテクチャで、推論時に活性化されるのは約 37B と効率的。",
      "**コストの破壊力**: API 料金はキャッシュヒット時 $0.14 / 出力 $2.19（1M トークンあたり）と、Opus の数十分の一。この価格で Opus に近い推論性能を出せるため、大量の推論タスクや個人開発者の実験用途ではコスパが圧倒的。ローカル実行もオープンウェイトで可能なため、プライバシー重視の環境でも導入できる。蒸留版（1.5B〜70B）も公開されており、軽量な用途にも対応。",
      "**推論の特徴**: Chain-of-Thought（思考連鎖）を明示的に出力する設計で、推論過程を確認できる。数学オリンピックレベルの問題やコーディングの複雑なロジック構築に強い。一方、日常会話やクリエイティブライティングでは GPT や Claude のほうが自然な出力を返す傾向がある。推論に特化したモデルであることを理解した上での使い分けが重要。",
      "**注意点**: 中国企業のモデルであるため、データの取り扱い・検閲ポリシーについて企業利用では事前確認が必要。API サービスは中国リージョン中心で、グローバルでのレイテンシや可用性は大手に劣る場合がある。ただしオープンウェイトなので、Together AI や Fireworks 等のサードパーティホスティングや自社サーバーでの運用も可能。DeepSeek V3（汎用モデル）も別途あり、用途で選び分ける。"
    ],
    "primarySources": [
      { "title": "DeepSeek", "site": "DeepSeek", "url": "https://www.deepseek.com/" },
      { "title": "DeepSeek R1 — GitHub", "site": "GitHub", "url": "https://github.com/deepseek-ai/DeepSeek-R1" }
    ],
    "newsDate": "2025-01-20",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "5分",
    "company": "DeepSeek",
    "pricing": "$0.14/$2.19 per 1M tokens（キャッシュ時）",
    "model": "DeepSeek R1 (671B MoE)",
    "tags": ["モデル", "中国", "OSS", "推論", "MoE"],
    "features": ["オープンウェイト", "MIT ライセンス", "推論特化", "低コスト", "蒸留版あり"]
  },
  {
    "id": "qwen-3-review",
    "type": "review",
    "rating": 4,
    "ratings": {"AI品質":4,"使いやすさ":3,"コスパ":5,"拡張性":5,"企業向け":3},
    "reviewCategory": "model",
    "category": "model",
    "title": "Qwen 3 レビュー — Alibaba 発、ハイブリッド思考とオープンウェイトの大型ファミリー",
    "excerpt": "Alibaba Cloud の最新モデルファミリー。0.6B〜235B まで8サイズ展開、Apache 2.0 のオープンウェイト。「考えるか考えないか」を切り替えるハイブリッド思考モードが特徴。",
    "body": [
      "**Qwen 3**（通義千問3）は Alibaba Cloud が2025年4月にリリースした大規模モデルファミリーで、オープンウェイト LLM の中でも最も包括的なラインナップを持つ。Dense モデル（0.6B / 1.7B / 4B / 8B / 14B / 32B）と MoE モデル（30B-A3B / 235B-A22B）の計8サイズを Apache 2.0 ライセンスで公開しており、スマートフォン上の軽量推論からデータセンターでの大規模処理まで、単一ファミリーでカバーする。Hugging Face では公開初日に最もダウンロードされたモデルコレクションとなり、オープンウェイト LLM の代表格として急速に認知が広がった。",
      "**ハイブリッド思考（Thinking / Non-Thinking）**: Qwen 3 の最もユニークな機能が、1つのモデルで「推論モード」と「即答モード」を動的に切り替えるハイブリッド思考。複雑な数学・コーディング・論理問題では Chain-of-Thought を展開して段階的に推論し、簡単な質問やチャットにはレイテンシを抑えて即座に回答する。DeepSeek R1 が推論特化（常に思考する）のに対し、Qwen 3 は状況に応じた自動切替が可能。`/think` と `/no_think` のトグルでユーザーが明示的に制御することもできる。",
      "**多言語とエージェント対応**: 119言語に対応し、特にアラビア語・日本語・韓国語・東南アジア言語のベンチマークスコアが高い。MCP（Model Context Protocol）にも対応しており、ツール呼び出しやエージェント的なタスク実行が可能。コード生成ではフラッグシップの 235B-A22B が Opus 4.6 や GPT-5.4 に迫るスコアを出しており、AIME 2025（数学）では 81.5% を記録。Qwen-Agent フレームワークを通じた自律的なタスク実行もサポートされている。",
      "**ローカル実行の実用性**: Ollama、vLLM、SGLang、llama.cpp 等の主要推論フレームワークに対応しており、ローカル実行の選択肢が非常に広い。4B / 8B モデルは個人の GPU（8GB VRAM 程度）でも実用的な速度で動作し、プライバシー重視の環境やオフライン利用に適している。GGUF 量子化版も公式に提供されており、M1/M2 Mac でも軽量モデルが動く。",
      "**Alibaba Cloud エコシステム**: Tongyi（通義）プラットフォーム、Alibaba Cloud の Model Studio、DashScope API から利用可能。中国国内の金融・EC・物流での導入実績が多い。グローバルでは Alibaba Cloud の国際リージョン（シンガポール等）経由で利用できるが、AWS / GCP ほどの地域カバレッジはまだない。",
      "**注意点**: グローバルでの API レイテンシは中国リージョン比で劣る場合がある。ドキュメントは英語版が充実してきているが、日本語対応は限定的。235B MoE のローカル実行には 80GB 以上の VRAM が必要で、個人利用には 8B〜32B が現実的。中国企業モデルとしてのデータ取り扱いポリシーは企業導入時に事前確認が必要。"
    ],
    "primarySources": [
      { "title": "Qwen 3 — Hugging Face", "site": "Hugging Face", "url": "https://huggingface.co/Qwen" },
      { "title": "Qwen Blog", "site": "Qwen", "url": "https://qwenlm.github.io/" },
      { "title": "Qwen3 Technical Report", "site": "arXiv (推定)", "url": "https://qwenlm.github.io/blog/qwen3/" }
    ],
    "newsDate": "2025-04-29",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "8分",
    "company": "Alibaba Cloud",
    "pricing": "オープンウェイト（無料）/ API 従量課金",
    "model": "Qwen 3 (0.6B〜235B)",
    "tags": ["モデル", "中国", "OSS", "Alibaba"],
    "features": ["8サイズ展開", "Apache 2.0", "ハイブリッド思考", "119言語", "MCP対応"]
  },
  {
    "id": "ernie-4-5-review",
    "type": "review",
    "rating": 3.5,
    "ratings": {"AI品質":4,"使いやすさ":3,"コスパ":4,"拡張性":3,"企業向け":4},
    "reviewCategory": "model",
    "category": "model",
    "title": "ERNIE 4.5 レビュー — Baidu の基盤モデル、中国最大の検索エンジンが支える実用力",
    "excerpt": "Baidu（百度）の最新基盤モデル。中国最大の検索エンジンと Baidu Cloud との統合が強み。文心一言（ERNIE Bot）として消費者向けにも展開。中国国内の企業利用で実績豊富。",
    "body": [
      "**ERNIE 4.5**（文心大模型4.5）は中国最大の検索エンジン Baidu（百度）が開発する基盤モデル。テキスト・画像・動画のマルチモーダル対応で、Baidu の検索技術で蓄積された中国語の知識ベースが大きな強み。消費者向けチャットボット「文心一言（ERNIE Bot）」として1億ユーザー以上が利用している。",
      "**Baidu エコシステム**: Baidu Cloud（百度智能雲）との統合により、エンタープライズ向けのデプロイメントが充実。中国国内の金融、医療、製造業での導入実績が多い。API は Baidu Cloud のコンソールから利用でき、中国国内のレイテンシとコンプライアンスに最適化されている。2025年6月にはオープンソース版も公開された。",
      "**コスト**: API 料金は中国市場向けの価格設定で低コスト。ERNIE Speed / Lite / Tiny などの軽量版も用意されており、用途に応じたコスト最適化が可能。中国国内のサーバーで完結するため、データの国外流出を避けたい中国企業にとっては安心感がある。",
      "**注意点**: グローバル展開は限定的で、中国国外からの利用はレイテンシや登録の面でハードルがある。英語や日本語の性能は GPT や Claude と比較すると差がある。中国語特化の用途（中国市場向けサービス開発、中国語コンテンツ生成）では強力だが、多言語環境では他モデルのほうが向く。"
    ],
    "primarySources": [
      { "title": "ERNIE — Baidu", "site": "Baidu", "url": "https://yiyan.baidu.com/" }
    ],
    "newsDate": "2025-06-15",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "4分",
    "company": "Baidu",
    "pricing": "API 従量課金（低コスト）",
    "model": "ERNIE 4.5",
    "tags": ["モデル", "中国", "Baidu", "マルチモーダル"],
    "features": ["中国語最適化", "Baidu Cloud統合", "1億ユーザー", "マルチモーダル", "OSS版あり"]
  },
  {
    "id": "meta-acquires-manus-2025",
    "type": "news",
    "category": "product",
    "title": "Meta、汎用AIエージェントの Manus を約20億ドルで買収 — 8ヶ月で ARR 1億ドルの急成長スタートアップ",
    "excerpt": "Meta が中国発・シンガポール拠点の AI エージェント企業 Manus を買収すると発表。買収額は20億ドル超と報じられている。Manus はサービス開始わずか8ヶ月で ARR 1億ドル超を達成。Facebook・Instagram・WhatsApp への AI エージェント統合が目的とみられる。",
    "body": [
      "2025年12月29日、Meta Platforms は汎用 AI エージェントを手がける Manus の買収を発表した。買収額は明示されていないが、Bloomberg・CNBC・TechCrunch 等の複数メディアが20億ドル超と報じている。Meta は声明で「ビジネス向け AI イノベーションの加速と、コンシューマー・エンタープライズ製品への高度な自動化の統合」を目的としている。",
      "**Manus の急成長**: Manus はもともと中国を本拠地としていたが、2025年夏にシンガポールへ拠点を移した。2025年3月の招待制ローンチで大きな話題を呼び、GAIA ベンチマークでトップスコアを記録。サービス開始からわずか8ヶ月で年間経常収益（ARR）は1億ドルに達したとされ、収益の大半は有料サブスクリプションによるもの。AI スタートアップとしては異例の速度での収益化に成功した。",
      "**買収後の運営**: Manus の公式ブログによると、買収後も引き続きアプリおよびウェブサイトを通じて AI サービスとサブスクリプションを提供する方針。シンガポールでの運営も継続する。Meta は Manus の AI エージェント技術を Facebook・Instagram・WhatsApp に統合し、Meta AI アシスタントの機能強化を図る計画。",
      "**中国当局の動き**: 2026年3月には、中国当局が Manus の創業者（CEO の Xiao Hong 氏と CTO の Ji Yichao 氏）に対し、取引審査中の出国を禁止したと報じられた。中国発の AI 技術が海外企業に移転することへの規制強化の一環とみられ、米中間の AI 技術移転を巡る緊張の新たな焦点になっている。",
      "**開発者への影響**: Manus のサービスは当面継続するが、長期的には Meta のエコシステムに統合されていく可能性がある。汎用 AI エージェント市場では、OpenAI の Operator、Google の Project Mariner、Anthropic の Computer Use などが競合する構図で、Meta が Manus の買収で一気にポジションを得た形。"
    ],
    "newsDate": "2025-12-29",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": ["Meta", "買収", "エージェント", "Manus", "業界動向"],
    "primarySources": [
      { "title": "Manus Joins Meta for Next Era of Innovation", "site": "Manus", "url": "https://manus.im/blog/manus-joins-meta-for-next-era-of-innovation" },
      { "title": "Meta acquires intelligent agent firm Manus", "site": "CNBC", "url": "https://www.cnbc.com/2025/12/30/meta-acquires-singapore-ai-agent-firm-manus-china-butterfly-effect-monicai.html" },
      { "title": "Meta just bought Manus", "site": "TechCrunch", "url": "https://techcrunch.com/2025/12/29/meta-just-bought-manus-an-ai-startup-everyone-has-been-talking-about/" }
    ]
  },
  {
    "id": "dario-amodei-dwarkesh-podcast-2026-feb",
    "type": "feature",
    "category": "special",
    "title": "Anthropic CEO Dario Amodei「指数関数の終わりは近い」— Dwarkesh Podcast 要約（2026年2月）",
    "excerpt": "Anthropic の CEO Dario Amodei が Dwarkesh Podcast に出演。AGI の到達時期、Anthropic の年10倍成長、コンピュート規模の予測、「継続学習は不要」という主張など、AI 業界の今後を左右する発言を要約。",
    "body": [
      "2026年2月13日、AI リサーチ系ポッドキャストの中でも情報密度の高さで知られる **Dwarkesh Podcast** に Anthropic CEO の **Dario Amodei** が出演した。約2時間にわたる対談で、AGI のタイムライン、Anthropic の成長曲線、収益構造、スケーリング仮説の現在地について踏み込んだ発言が相次いだ。以下は主要なポイントの要約（詳細は原文トランスクリプトを参照）。",
      "**「指数関数の終わりに近い」**: Dario は AI の能力進化が予測通りに進行しているとしつつ、「一般の認識は指数関数の終わりがいかに近いかを過小評価している」と述べた。「国家規模の天才データセンター」が10年以内に実現する確率を90%と見積もり、コードの自動化は1〜2年で達成されるとの見通しを示した。最長でも2035年までには確実に到達するとの予測。",
      "**Anthropic の成長曲線**: 売上は2023年に0〜1億ドル、2024年に1〜10億ドル、2025年に10〜100億ドルと、年10倍の成長を達成したことを明かした。業界全体のコンピュート規模は年3倍で成長しており、2028年に100ギガワット、2029年に300ギガワットに達すると予測。各ギガワットは年間約100〜150億ドルのコストに相当する。",
      "**「継続学習は不要」**: Dwarkesh の「継続学習（Continual Learning）は必要では？」という問いに対し、Dario は「不要」と明言。100万トークンのコンテキスト学習と事前学習の組み合わせで十分対応可能との立場を示した。これは、モデルが使用中に学び続ける必要はなく、十分に大きなコンテキストウィンドウがあればよいという主張。",
      "**収益化の矛盾と寡占**: モデル単体では利益が出るが、次世代モデルへの投資で企業全体は赤字になる構造を認めた。2028年の黒字化を予定しているが、需要予測の不確実性が最大のリスク。AI 業界は3〜4社の少数寡占（Cournot 均衡）に向かうとの見方で、参入障壁の高さはクラウド産業に類似するとした。計算能力の50%を推論、50%を研究に配分し、推論の粗利益率は50%超。",
      "**対談の最大の緊張点**: Dario が「1〜3年で国家規模の天才」と予測しながら、Anthropic のコンピュート投資がそれほど積極的でないことの矛盾を Dwarkesh が鋭く突いた。Dario は需要予測の不確実性と資金流動性の制約を理由に挙げ、検証不可能なタスク（火星計画、科学的発見）への不確実性や、シリコンバレー中心の地理的不均等発展への懸念も語った。"
    ],
    "newsDate": "2026-02-13",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "8分",
    "tags": ["Anthropic", "Dario Amodei", "ポッドキャスト", "AGI", "業界動向"],
    "primarySources": [
      { "title": "Dario Amodei — \"We are near the end of the exponential\"", "site": "Dwarkesh Podcast", "url": "https://www.dwarkesh.com/p/dario-amodei-2" },
      { "title": "Spotify で聴く", "site": "Spotify", "url": "https://open.spotify.com/episode/2ZNrpVSrgZMlDwQinl20Ay" },
      { "title": "On Dwarkesh Patel's 2026 Podcast With Dario Amodei", "site": "The Zvi (分析記事)", "url": "https://thezvi.substack.com/p/on-dwarkesh-patels-2026-podcast-with" }
    ]
  },
  {
    "id": "tbpn-chatgpt-ads-anthropic-stories-2026-march",
    "type": "feature",
    "category": "special",
    "title": "ChatGPT に広告導入で2ヶ月で ARR 1億ドル、Anthropic はスーパーボウル CM で皮肉る — TBPN 要約（3月27日）",
    "excerpt": "OpenAI が ChatGPT 無料版に広告を導入し、わずか2ヶ月で年間収益1億ドルを突破。一方 Anthropic はスーパーボウル CM で「広告が AI 体験を壊す」と皮肉り、Claude のダウンロード数が急増。Novartis の28億ドル買収も。",
    "body": [
      "2026年3月27日の **TBPN Live**（2時間39分）で、AI 業界のマーケティング戦争と製薬業界の動きが取り上げられた。ChatGPT の広告導入を巡る OpenAI と Anthropic の対照的な戦略が際立つ回。",
      "**ChatGPT に広告導入、2ヶ月で ARR 1億ドル**: OpenAI は2026年2月に ChatGPT の無料ティアに広告パイロットを開始。CNBC によると、開始からわずか2ヶ月で年間経常収益（ARR）が1億ドルを突破した。無料ユーザー層のマネタイズとして桁違いの速さだが、ユーザーからは「AI の回答に広告が混ざる」ことへの批判も出ている。",
      "**Anthropic のスーパーボウル CM「Stories」**: Anthropic は2026年2月のスーパーボウルで TV CM を放映し、ChatGPT の広告導入を真正面から皮肉った。「AI との会話に広告が入ったらこうなる」という演出で、Sam Altman が「かなり苛立った」と報じられた。CM 後、Claude の米国アプリダウンロード数が ChatGPT を一時的に上回る効果も。Anthropic は「広告なし」を明確な差別化ポイントとして打ち出している。",
      "**Novartis が Excellergy を28億ドルで買収**: 製薬大手 Novartis がアレルギー薬スタートアップ Excellergy を28億ドルで買収。AI 直接の話題ではないが、TBPN はテック以外のビッグディールもカバーするのが特徴。",
      "**背景と意味**: この一連の動きは、AI チャットボットのビジネスモデルを巡る根本的な問いを浮き彫りにしている。OpenAI は「広告＋サブスク＋API」の三本柱で IPO を見据え、Anthropic は「広告なし・安全性重視」で差別化。どちらが持続可能かは未知数だが、ユーザーの反応は Anthropic に好意的で、「AI に広告は相性が悪い」という市場のシグナルが見えつつある。"
    ],
    "newsDate": "2026-03-27",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": ["OpenAI", "Anthropic", "広告", "ポッドキャスト", "TBPN", "ビジネスモデル"],
    "primarySources": [
      { "title": "OpenAI ads pilot tops $100 million in ARR in under 2 months", "site": "CNBC", "url": "https://www.cnbc.com/2026/03/26/openai-ads-pilot-tops-100-million-in-arr-in-under-2-months.html" },
      { "title": "ChatGPT rolls out ads", "site": "TechCrunch", "url": "https://techcrunch.com/2026/02/09/chatgpt-rolls-out-ads/" },
      { "title": "Spotify で聴く", "site": "Spotify", "url": "https://open.spotify.com/episode/1nrFIFFcK62v6njU26a1ee" }
    ]
  },
  {
    "id": "tbpn-benchmark-sora-spacex-2026-march",
    "type": "feature",
    "category": "special",
    "title": "OpenAI が Sora を終了、SpaceX 2兆ドル IPO 間近、Benchmark の「テセウスの船」— Diet TBPN 要約（3月25日）",
    "excerpt": "シリコンバレーの空気感を伝える TBPN のダイジェスト版。OpenAI が Sora を終了（1日1,500万ドルの計算コスト）、SpaceX の IPO 申請が数日以内、Benchmark は「テセウスの船」か。31分で3つの大ニュースを凝縮。",
    "body": [
      "2026年3月25日の **Diet TBPN**（The Big Picture News のダイジェスト版、31分）で、シリコンバレーの最新動向3つが取り上げられた。TBPN は John Coogan と Jordi Hays がホストを務めるライブテック番組で、X と YouTube で平日配信。シリコンバレーの「空気感」をつかめる番組として知られる。",
      "**OpenAI が Sora を終了**: OpenAI は動画生成 AI「Sora」の提供終了を発表した。==1日あたり1,500万ドル==の計算コストを消費しながら収益がほとんどなく、公開市場（IPO）を見据えたプロダクトポートフォリオの整理が目的とみられる。計算リソースを GPT-5.4 や Codex など収益性の高い製品に集中させる判断。動画生成 AI 市場では Runway・Kling・Veo などの競合が残る形に。",
      "**SpaceX 2兆ドル IPO が間近**: SpaceX の IPO 申請が数日〜数週間以内に行われる見通し。最大750億ドルの資金調達が見込まれ、時価総額は2兆ドル規模と報じられている。AI インフラとの関連では、Elon Musk が Dwarkesh Podcast で語った「36ヶ月後に AI を宇宙に置くのが最安」構想の実行基盤にもなる。",
      "**Benchmark の「テセウスの船」**: VC ファーム Benchmark Capital が2017年に Uber の Travis Kalanick を追い出した件について、「許されるのはいつか」を哲学的パラドックス「テセウスの船」に例えて議論。パートナーが入れ替わった Benchmark はもはや同じ組織なのか、という問い。シリコンバレーの権力構造と VC 文化を映す話題。"
    ],
    "newsDate": "2026-03-25",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "4分",
    "tags": ["OpenAI", "Sora", "SpaceX", "IPO", "ポッドキャスト", "TBPN"],
    "primarySources": [
      { "title": "Benchmark's Ship of Theseus, OpenAI Kills Sora, SpaceX $2T IPO Buzz", "site": "TBPN", "url": "https://tbpn.substack.com/p/the-benchmark-ship-of-theseus" },
      { "title": "Spotify で聴く", "site": "Spotify", "url": "https://open.spotify.com/episode/5j1na8mPkQ1dl2V3eVkfc4" }
    ]
  },
  {
    "id": "dylan-patel-dwarkesh-ai-compute-bottlenecks",
    "type": "feature",
    "category": "special",
    "title": "Dylan Patel（SemiAnalysis）「真のボトルネックは ASML」— AI コンピュートの3大制約を徹底分析 — Dwarkesh Podcast 要約",
    "excerpt": "半導体アナリスト Dylan Patel が Dwarkesh Podcast で AI コンピュートの3大ボトルネック（ロジック・メモリ・電力）を分析。ASML の EUV 装置が2030年までの真の制約、1ギガワットに必要な EUV ツール3.5台、H100 が3年前より価値が高い理由を語った。",
    "body": [
      "2026年3月13日、半導体業界で最も影響力のあるアナリストの一人 **Dylan Patel**（SemiAnalysis 創業者）が **Dwarkesh Podcast** に出演。AI コンピュートをスケールする際の3大ボトルネック — ロジック、メモリ、電力 — を2時間30分にわたって技術的に分析した。Jensen Huang が語った「供給側の現実」を、独立アナリストの視点から裏付ける内容。",
      "**「真のボトルネックは ASML」**: 電力やデータセンター建設ではなく、ASML 製の EUV（極端紫外線）リソグラフィ装置が2030年までの真の制約だと指摘。現在の生産台数は年70台、2030年でも年100台程度が上限。1台3〜4億ドル。1ギガワット分の Rubin チップ製造に約3.5台の EUV ツール（12億ドル相当）が必要だが、50ギガワットのデータセンター建設は500億ドル — この不均衡が問題の本質。",
      "**メモリの壁**: 1ギガワットの AI コンピュート製造に必要なウェハは、3nm ロジック55,000枚、5nm 6,000枚、DRAM 170,000枚。200万回の EUV パス処理が必要で、メモリ不足は2026〜2027年に顕在化する見通し。Jensen が言及した HBM 供給問題の具体的な数字がここにある。",
      "**H100 が3年前より価値が高い理由**: 古いチップの価値が上がるという逆説的な現象。GPT-5.4 などの新モデルがより多くのトークンを高品質に生成できるようになり、チップ自体の「導出価値」が増加した。H100 の展開コストは約1.40ドル/時間（5年償却）だが、現在は2ドル/時間以上で契約されている。",
      "**各社の規模感**: Anthropic は最終的に5〜6ギガワット、OpenAI も同等レベルまでスケール予定。Anthropic の年率収入は約200億ドルに達したが、粗利益率は50%未満で、130〜140億ドルが計算コスト。NVIDIA は他社より早期に TSMC の製造容量を確保しており、Google は TPU 不足で大量の GPU 購入を余儀なくされている状況。",
      "**中国と長期見通し**: 中国は2030年までに DUV（深紫外線）ツールの完全国産化は可能だが、EUV はまだ困難。本番規模の生産と信頼性確立には5〜7年必要。短期（3年）は米国優位が継続するが、2035年には中国の垂直統合サプライチェーンが優位に転じる可能性がある。2028〜2029年がクリティカルポイント。"
    ],
    "newsDate": "2026-03-13",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "8分",
    "tags": ["半導体", "ASML", "SemiAnalysis", "ポッドキャスト", "GPU", "TSMC"],
    "primarySources": [
      { "title": "Dylan Patel — Deep dive on the 3 big bottlenecks to scaling AI compute", "site": "Dwarkesh Podcast", "url": "https://www.dwarkesh.com/p/dylan-patel" },
      { "title": "Spotify で聴く", "site": "Spotify", "url": "https://open.spotify.com/episode/5qiibwoBWY5rXyflK7WJzH" }
    ]
  },
  {
    "id": "lex-fridman-494-jensen-huang-nvidia",
    "type": "feature",
    "category": "special",
    "title": "Jensen Huang「計算能力だけが知性をスケールさせる」— NVIDIA 4兆ドル企業の全戦略 — Lex Fridman #494 要約",
    "excerpt": "NVIDIA CEO Jensen Huang が Lex Fridman と2時間半。GPU 企業から「AI ファクトリー」への転換、AIスケーリングの4段階、1ラック1,300万コンポーネントのサプライチェーン、中国の評価、10兆ドル企業への道筋を語った。",
    "body": [
      "2026年3月23日、**Lex Fridman Podcast #494** に **NVIDIA CEO Jensen Huang** が出演。世界で最も価値のある企業（時価総額4兆ドル超）を率いるエンジニア CEO が、AI インフラの現在と未来を2時間31分にわたって技術的に深掘りした。",
      "**GPU 企業から AI ファクトリーへ**: Jensen は NVIDIA が「アクセラレーター企業」から「AI ファクトリー」に進化したと説明。GPU 単体の最適化ではなく、GPU・CPU・メモリ・ネットワーク・冷却・電力・ラック・データセンターまでを統合的に「極端な協調設計」する体制に転換。直属スタッフ60名以上が全員参加で設計判断を行い、1対1ミーティングは一切しないリーダーシップスタイル。",
      "**AI スケーリングの4段階**: (1) 事前学習スケーリング（データ量）、(2) 事後学習スケーリング（合成データ）、(3) テスト時スケーリング（推論時の計算集約的思考）、(4) エージェントスケーリング（複数 AI エージェントの並列展開）。「計算能力によってのみ知性がスケールする」と断定。過去10年で Moore 則比100倍に対し、NVIDIA の実績は100万倍。",
      "**ボトルネックの現実**: 電力はグリッドが99%の時間で最大容量の60%しか使っておらず、遊休電力の活用が解決策。メモリ（HBM）の供給拡大が必要で DRAM 業界と戦略的対話中。サプライチェーンでは Vera Rubin 単一ラックに1,300万コンポーネント・200社のサプライヤーが関わり、週200ポッド製造を目標としている。TSMC・ASML の CEO と定期協議し、多年単位の事前投資を促進。",
      "**中国の評価**: 「世界で最も急速に革新している国」と評価。理由として、世界の AI 研究者の約50%が中国籍、都市間の激しい内部競争、オープンソース志向の文化、リーダーシップ層がエンジニア中心（米国は法曹が多数派）を挙げた。",
      "**Elon Musk の Colossus への賞賛と今後**: Colossus プロジェクト（4ヶ月で20万 GPU スケール）を「差し迫った緊迫感による全体動員」として高く評価。Nemotron 3（1,200億パラメータ MoE）をオープンソース化した理由は、化学・生物学・物理シミュレーションなど全産業の AI 革命を加速するため。4兆ドル企業から10兆ドルへの道筋は明言を避けたが、「エージェントが全産業に浸透する」確信のもと、計算需要の指数関数的増加を予想した。"
    ],
    "newsDate": "2026-03-23",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "8分",
    "tags": ["NVIDIA", "Jensen Huang", "ポッドキャスト", "Lex Fridman", "GPU", "半導体"],
    "primarySources": [
      { "title": "#494 – Jensen Huang: NVIDIA - The $4 Trillion Company & the AI Revolution", "site": "Lex Fridman Podcast", "url": "https://lexfridman.com/jensen-huang/" },
      { "title": "Spotify で聴く", "site": "Spotify", "url": "https://open.spotify.com/episode/0BGcaYvcDPkvBzFmkRI5uY" },
      { "title": "トランスクリプト全文", "site": "Lex Fridman", "url": "https://lexfridman.com/jensen-huang-transcript/" }
    ]
  },
  {
    "id": "lex-fridman-491-openclaw-peter-steinberger",
    "type": "feature",
    "category": "special",
    "title": "OpenClaw — GitHub 史上最速成長の AI エージェント、「自己修正するソフトウェア」の衝撃 — Lex Fridman #491 要約",
    "excerpt": "PSPDFKit で10億台のデバイスに使われるソフトウェアを作った Peter Steinberger が、GitHub 史上最速で成長したオープンソース AI エージェント OpenClaw を語る。自分のソースコードを読んで自分を修正するエージェント、コーディングの民主化、そして「楽しさ」で勝つ開発文化。",
    "body": [
      "2026年2月12日、**Lex Fridman Podcast #491** に **Peter Steinberger**（OpenClaw 開発者）が出演。GitHub 史上最速で成長したオープンソース AI エージェントフレームワーク **OpenClaw** の思想と技術を3時間25分にわたって語った。",
      "**OpenClaw とは**: ユーザーの PC に常駐するオープンソース AI エージェント。WhatsApp、Telegram、Discord、iMessage などのメッセージアプリを通じてユーザーと対話し、自律的にタスクを実行する。「AI が実際に物事を行う」個人アシスタントで、システムレベルのアクセスを持つ。",
      "**自己修正するソフトウェア**: OpenClaw の最も衝撃的な特徴は、エージェントが自分自身のソースコードを認識し、動作するシステムを理解し、自分を修正できること。Steinberger が実装していなかった音声メッセージ処理を、エージェント自身が「ファイルヘッダーを確認して opus と判定→ffmpeg で変換→OpenAI API で文字起こし」と自律的に解決した事例が紹介された。",
      "**GitHub 最速成長の理由**: Steinberger は「他の企業より自分たちを真剣に受け取りすぎなかった」ことが勝因だと語る。ロブスター（ザリガニ）というマスコット、「楽しさと奇妙さ」を優先する文化、実際に動いて結果が見えるプロダクトが支持を集めた。コーディングの民主化も大きな要因で、プログラミング経験がない人でもプルリクエストを送れるようになった点を「人類へのステップアップ」と評価。",
      "**セキュリティと名前変更の苦難**: 「スマーターなモデルは攻撃に強いが、損害は増える」という三次元的トレードオフを指摘。開発中は Anthropic の商標問題で複数回の名前変更を強いられ、MoldBot に変更した際は5秒以内に暗号資産関連の組織にアカウントを盗まれるなどの経験も。Steinberger の経歴は PSPDFKit（10億台のデバイスで使用）の開発者で、3年間のプログラミング離脱後に OpenClaw を立ち上げた。"
    ],
    "newsDate": "2026-02-12",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": ["OpenClaw", "Lex Fridman", "ポッドキャスト", "エージェント", "OSS"],
    "primarySources": [
      { "title": "#491 – OpenClaw: The Viral AI Agent that Broke the Internet – Peter Steinberger", "site": "Lex Fridman Podcast", "url": "https://lexfridman.com/peter-steinberger/" },
      { "title": "Spotify で聴く", "site": "Spotify", "url": "https://open.spotify.com/episode/0aM69uGff54ewQJzQxZVLf" },
      { "title": "トランスクリプト全文", "site": "Lex Fridman", "url": "https://lexfridman.com/peter-steinberger-transcript/" }
    ]
  },
  {
    "id": "lex-fridman-490-state-of-ai-2026",
    "type": "feature",
    "category": "special",
    "title": "「2026年 AI の現在地」全方位レビュー — Lex Fridman Podcast #490 要約（4時間39分）",
    "excerpt": "AI 研究者 Nathan Lambert（Ai2）と Sebastian Raschka が Lex Fridman と4時間半にわたり議論。LLM 比較、コーディング AI、スケーリング則の三層構造、中国のオープンモデル攻勢、エージェントの emergence、GPU インフラの現実を総ざらい。",
    "body": [
      "2026年2月1日、**Lex Fridman Podcast #490** に AI 研究者の **Nathan Lambert**（Allen Institute for AI 事前学習リード、RLHF Book 著者）と **Sebastian Raschka**（Build a Large Language Model (From Scratch) 著者）が出演。4時間39分をかけて2026年初頭の AI のあらゆる側面を総ざらいした。CEO のビジョンではなく、研究者・エンジニア目線の技術的な現状整理として極めて価値が高い。",
      "**LLM 勢力図**: Claude Opus 4.5 が X で大きなバズを生み、Gemini 3 は同等性能ながら言及が減少。GPT-5 は非思考モデルに誤りが多く思考モデル版が好まれる状況。2026年は Google（TPU のコスト効率）と Anthropic（エンタープライズ）が伸び、OpenAI は組織文化の混乱が指摘された。",
      "**スケーリング則の三層構造**: 現在のスケーリングは (1) 事前学習スケーリング（従来型、モデル/データサイズ）、(2) 強化学習スケーリング（o1 で実証された試行錯誤的改善）、(3) 推論時スケーリング（生成トークン数増加による性能向上）の三層に分化している。事前学習の付加価値が低下し、推論時スケーリングへの注目がシフト。DeepSeek の事前学習コストは500万ドル、OLMo 3 は200万ドルと低下する一方、サービング（推論）は年間数十億ドル規模。",
      "**中国オープンモデルの攻勢**: DeepSeek R1 を皮切りに、MiniMax、Zhipu AI、Kimi K2 Thinking など複数社がオープンウェイトモデルを相次いで公開。米国企業が「セキュリティ懸念で中国 API を使わない」ことに対し、オープンウェイトで国際市場の影響力を構築する戦略。中国は MoE 大規模化、米国は小規模効率化の傾向だったが、欧米も大規模 MoE に移行中。",
      "**コーディング AI と エージェント**: Claude Code は高度な自動化タスク向き、Cursor は VS Code 統合の細かい制御、Codeium は中道的選択肢と整理。エージェント領域では、ツール使用の事前学習により Web 検索や Python 実行が組み込まれ、CLI コマンドや Git ハンドリングなど「1年前には想定外だった能力」が emergence（創発）している。RELVR（報酬検証可能な強化学習）によるハルシネーション削減も注目点。",
      "**GPU とインフラの現実**: xAI が2026年初で1ギガワット、年末で2ギガワット規模に到達予定。Google は TPU で NVIDIA の利益率を回避。Blackwell GPU の展開では複数 GPU の故障対応など新たな分散問題が出現。FP8/FP4 精度により記憶量削減→通信削減→学習加速が進んでいる。"
    ],
    "newsDate": "2026-02-01",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "10分",
    "tags": ["Lex Fridman", "ポッドキャスト", "LLM", "スケーリング", "中国", "エージェント"],
    "primarySources": [
      { "title": "#490 – State of AI in 2026: LLMs, Coding, Scaling Laws, China, Agents, GPUs, AGI", "site": "Lex Fridman Podcast", "url": "https://lexfridman.com/ai-sota-2026/" },
      { "title": "Spotify で聴く", "site": "Spotify", "url": "https://open.spotify.com/episode/4UBPQG2Z7s70DpRVD5kMbC" },
      { "title": "トランスクリプト全文", "site": "Lex Fridman", "url": "https://lexfridman.com/ai-sota-2026-transcript/" }
    ]
  },
  {
    "id": "elon-musk-dwarkesh-podcast-2026",
    "type": "feature",
    "category": "special",
    "title": "Elon Musk「36ヶ月後、AI を置く最安の場所は宇宙になる」— Dwarkesh Podcast 要約（2026年2月）",
    "excerpt": "Elon Musk が Dwarkesh Podcast に約3時間出演。地上の電力制約を突破する軌道データセンター構想、xAI/Grok の「真実追求型」アライメント、Optimus の年100万台製造計画、TeraFab チップ工場、そして「無限の金バグ」としての再帰的 AI 経済を語った。",
    "body": [
      "2026年2月5日、**Elon Musk** が Dwarkesh Podcast に約2時間49分出演し、AI インフラ、xAI 戦略、ヒューマノイドロボット、宇宙開発を横断する壮大なビジョンを展開した。Dario が AI の能力曲線を、Nadella が経済指標を語ったのに対し、Musk はハードウェアと物理の制約から AI の未来を描く。",
      "**「36ヶ月後、AI は宇宙に置くのが最安」**: Musk の中核的主張は、地上のデータセンターは電力の壁にぶつかるということ。米国の平均消費電力は0.5テラワット。1テラワットのデータセンターを作ればそれだけで倍になる。一方、宇宙では太陽光パネルの効率が地上の5倍（大気・雲・昼夜サイクルなし）で、バッテリーコストも不要。5年以内に宇宙での年間 AI 展開量が地球の累計総量を超えるとの予測。年間約10,000回の Starship 打ち上げ（約1時間に1回）が必要で、物理的には20〜30機の Starship で回せるとした。",
      "**xAI と Grok のアライメント**: xAI のミッションは「宇宙を理解すること」で、そのためには知性の拡張と意識の伝播が必要だと主張。Grok のアライメントはポリティカル・コレクトネスではなく「真実の追求」で実現する方針。物理法則に対する検証が究極の正解確認手段であり、『2001年宇宙の旅』の HAL が壊れたのは矛盾した指令を強制されたからだと例えた。xAI はニューロンレベルで AI の推論を追跡するデバッガーツールも開発中。",
      "**Optimus ヒューマノイド計画**: 3つの難題として「現実世界の AI 知能」「高度なハンド設計」「量産」を挙げ、特にハンドは「他の全てを合わせたより難しい」と語った。1万〜3万台のロボットを「Optimus Academy」に配置し、シミュレーションと実環境の自己対戦でデータを生成。Optimus 3 で年間100万台、Optimus 4 で年間1,000万台を目指す。Grok がロボット群にタスクを割り振り、工場建設まで統括する構想。",
      "**TeraFab と半導体**: TSMC・Samsung の現在のファブ能力では指数関数的な需要に追いつけないとし、次世代規模の「TeraFab」を提案。DDR RAM がロジックチップ以上のボトルネックになる可能性を指摘。Tesla は独自チップ（AI5, AI6）を設計から5年以内に大量生産する計画。ガスタービンの翼を鋳造できる企業が世界に3社しかないことが電力供給の制約要因であり、SpaceX と Tesla が内製する可能性にも言及。",
      "**「無限の金バグ」**: ロボットがロボットを製造する再帰的構造を「無限の金バグ（glitch）」と表現。AI × チップ × 電気機械能力が複利的に成長し、「超新星」的な価値の爆発を生むとした。純粋な AI/ロボティクス企業が人間介在型の組織を圧倒的に上回る時代がすぐに来るとの予測。"
    ],
    "newsDate": "2026-02-05",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "10分",
    "tags": ["xAI", "Elon Musk", "ポッドキャスト", "宇宙", "Optimus", "半導体"],
    "primarySources": [
      { "title": "Elon Musk — \"In 36 months, the cheapest place to put AI will be space\"", "site": "Dwarkesh Podcast", "url": "https://www.dwarkesh.com/p/elon-musk" },
      { "title": "Spotify で聴く", "site": "Spotify", "url": "https://open.spotify.com/episode/4nah0x1qQF2hxgJnv8PlmN" }
    ]
  },
  {
    "id": "satya-nadella-dwarkesh-podcast-2026",
    "type": "feature",
    "category": "special",
    "title": "Microsoft CEO Satya Nadella「AGI より世界の経済成長率10%が真のベンチマーク」— Dwarkesh Podcast 要約",
    "excerpt": "Microsoft の CEO Satya Nadella が Dwarkesh Podcast に出演。AGI の定義を避け「経済成長こそ指標」と主張。量子コンピュータの Majorana ブレイクスルー、AI が独占を生まない理由、ゲーム世界モデル Muse など、Microsoft の全方位戦略を語った。",
    "body": [
      "Dwarkesh Podcast に **Microsoft CEO Satya Nadella** が出演し、AI 戦略、量子コンピューティング、AGI の定義まで踏み込んだ議論を展開した。Dario Amodei が「指数関数の終わりに近い」と語ったのに対し、Nadella は技術的マイルストーンより経済的インパクトを重視する立場を明確にしている。",
      "**「世界の経済成長率10%が真のベンチマーク」**: Nadella は AGI の到達を論じること自体を避け、成功の指標を「世界が10%成長すること」と再定義した。現在の Microsoft の AI 売上は130億ドルで、成長トレンドが続けば1,300億ドルに達する可能性を示唆。技術的な能力の議論より、実際の経済効果で測るべきだとの立場。",
      "**「AI は独占を生まない」**: エンタープライズ市場では「買い手がWinner-Take-Allを許容しない」と断言。クローズドモデルとオープンソースが共存し、Windows と競合 OS の関係のように複数のサプライヤーが並立する構図になるとの見方。これは Dario の「3〜4社の寡占」予測とは異なるニュアンス。",
      "**量子コンピューティングの Majorana ブレイクスルー**: Microsoft が達成した Majorana ゼロモードの実現を「量子コンピューティングのトランジスタ・モーメント」と表現。Majorana One チップは最終的に100万物理量子ビットをサポートし、2027〜2029年にユーティリティスケールの量子コンピュータを実現する見通し。AI と量子の両輪で進む Microsoft の戦略が鮮明になった。",
      "**ゲーム世界モデル Muse**: プレイヤー入力に応答する一貫したゲーム世界を生成するモデル。画像生成における DALL-E のインパクトに匹敵する可能性があるとした。AI がゲーム開発を根本から変える布石。",
      "**AGI への姿勢**: Nadella は AGI の定義そのものを疑問視し、「自動化された知識労働」と「新たに生み出される認知タスク」を区別。包括的な労働自動化は予測せず、認知労働自体が技術能力とともに進化するとの立場。AI の法的責任の枠組みが整備されないと大規模導入は進まないとも指摘した。"
    ],
    "newsDate": "2026-02-20",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": ["Microsoft", "Satya Nadella", "ポッドキャスト", "量子コンピュータ", "AGI"],
    "primarySources": [
      { "title": "Satya Nadella — Microsoft's AGI plan & quantum breakthrough", "site": "Dwarkesh Podcast", "url": "https://www.dwarkesh.com/p/satya-nadella" },
      { "title": "Spotify で聴く", "site": "Spotify", "url": "https://open.spotify.com/episode/2Ru9vFJOuYKSHnxABBgAm3" }
    ]
  },
  {
    "id": "cli-agent-community-oss-2026",
    "type": "feature",
    "category": "cli",
    "title": "CLI エージェント周辺のコミュニティ OSS まとめ — マルチエージェント・並列実行・拡張ツール群",
    "excerpt": "Claude Code・Codex を中心に、ターミナル上で AI エージェントを並列実行・連携させるコミュニティ製 OSS ツールが急増している。主要プロジェクトの位置づけと GitHub リンクを整理する。",
    "body": [
      "2026年に入り、Claude Code や Codex などの CLI エージェントを拡張・連携させるコミュニティ製の OSS ツールが急速に増えている。公式機能ではカバーしきれないマルチエージェント連携や並列実行のニーズに応える形で、個人開発者やスタートアップが多数のプロジェクトを公開している。以下は主要なカテゴリ別の整理で、==いずれも個人・コミュニティ開発のため、利用は自己責任で==。",
      "**マルチエージェント管理**: **claude-squad**（github.com/smtg-ai/claude-squad）は Claude Code・Codex・OpenCode・Amp など複数の CLI エージェントをバックグラウンドで並行管理するツール。**oh-my-claudecode**（ohmyclaudecode.com）は32の専用エージェントと40以上のスキルを提供するオーケストレーションレイヤーで、タスクの自動並列化とトークン使用量の最適化を行う。出力速度の向上も謳っている。",
      "**エージェント間通信**: **smux**（github.com/ShawnPana/smux）は tmux ベースで AI エージェント同士をペイン越しに通信させるツール。Claude Code が設計→Codex がレビュー→Claude Code が修正、というサイクルを自律的に回せる。API もプロトコルも不要で、Bash が動くエージェントなら何でも参加可能。**cmux**（github.com/craigsc/cmux）は tmux for Claude Code を標榜する類似ツール。",
      "**プラグイン・拡張エコシステム**: **awesome-claude-code**（github.com/hesreallyhim/awesome-claude-code）はスキル・Hooks・スラッシュコマンド・MCP サーバー・プラグインのキュレーションリスト。**awesome-claude-code-toolkit**（github.com/rohitg00/awesome-claude-code-toolkit）は135エージェント・35スキル・42コマンド・150以上のプラグインを収録した包括的なツールキット。公式の MCP Tool Search と組み合わせてコンテキスト消費を95%削減する手法も紹介されている。",
      "**特化型エージェント**: **Dexter**（github.com/virattt/dexter）は金融リサーチに特化した自律エージェント。Planning Agent（計画）→ Action Agent（データ取得）→ Validation Agent（検証）→ Answer Agent（回答）の4段階で動作し、リアルタイム市場データを使って自己検証しながら調査を進める。OpenAI・Anthropic・Google・Ollama 等のモデルに対応。コーディング支援ではないが、CLI エージェントのアーキテクチャとして参考になる。",
      "**注意点**: これらはいずれも個人またはコミュニティが開発・運営しているプロジェクトで、メンテナンスの継続性やセキュリティの保証はない。特にエージェント間通信系のツールは、プロンプトインジェクションによるコマンド注入や、意図しない破壊的操作（ファイル削除・Git push --force 等）のリスクがある。人間が監視できる状態で使うことを前提とし、本番環境での無人運用は避けるべき。ライセンスは各リポジトリで確認のこと。"
    ],
    "newsDate": "2026-03-28",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": ["CLI", "OSS", "マルチエージェント", "コミュニティ", "Claude Code"],
    "tables": [
      {
        "afterParagraph": 1,
        "caption": "主要コミュニティ OSS ツール一覧（2026年3月時点）",
        "headers": ["ツール", "カテゴリ", "概要", "GitHub"],
        "rows": [
          ["claude-squad", "並列管理", "複数 CLI エージェントのバックグラウンド管理", "smtg-ai/claude-squad"],
          ["oh-my-claudecode", "オーケストレーション", "32専用エージェント・40+スキル・自動並列化", "Yeachan-Heo/oh-my-claudecode"],
          ["smux", "エージェント間通信", "tmux ペイン越しの AI 間通信、API 不要", "ShawnPana/smux"],
          ["cmux", "ターミナル", "Claude Code 向け tmux 拡張", "craigsc/cmux"],
          ["awesome-claude-code", "キュレーション", "スキル・Hooks・MCP・プラグインのリスト", "hesreallyhim/awesome-claude-code"],
          ["awesome-claude-code-toolkit", "ツールキット", "135エージェント・150+プラグイン収録", "rohitg00/awesome-claude-code-toolkit"],
          ["ruflo", "スウォーム", "マルチエージェントスウォーム・RAG 統合", "ruvnet/ruflo"],
          ["Dexter", "金融リサーチ", "4エージェント構成の自律金融調査（計画→実行→検証→回答）", "virattt/dexter"]
        ]
      }
    ],
    "primarySources": [
      { "title": "awesome-claude-code", "site": "GitHub", "url": "https://github.com/hesreallyhim/awesome-claude-code" },
      { "title": "claude-squad", "site": "GitHub", "url": "https://github.com/smtg-ai/claude-squad" },
      { "title": "oh-my-claudecode", "site": "GitHub", "url": "https://github.com/Yeachan-Heo/oh-my-claudecode" },
      { "title": "smux", "site": "GitHub", "url": "https://github.com/ShawnPana/smux/" }
    ]
  },
  {
    "id": "microsoft-copilot-cowork-launch-2026",
    "type": "news",
    "category": "product",
    "title": "Microsoft Copilot Cowork が Frontier ユーザーに展開開始 — Anthropic と共同開発、M365 上でマルチステップ業務を自律実行",
    "excerpt": "Microsoft 365 Copilot の新モード「Cowork」が Frontier プログラムのユーザーに展開開始。Anthropic の Claude 技術を統合し、単なるチャット応答ではなく複数ステップの業務を自律的に実行。進捗を可視化しながらユーザーが随時介入できる設計。",
    "body": [
      "Microsoft は2026年3月9日に発表した **Copilot Cowork** の Frontier プログラム向け展開が3月下旬から始まっている。Cowork は Microsoft 365 Copilot の新モードで、これまでの「プロンプト→1回の応答」から「複雑な業務を委任し、時間をかけて段階的に実行する」へと進化させるもの。X では実際に利用開始したユーザーからの検証投稿が相次いでいる。",
      "**できること**: Cowork では、複雑なリクエストをステップに分解し、複数のツール・ファイルを横断して推論しながら作業を進行する。たとえば「四半期レポートを作成して」と指示すると、必要なデータを Excel・SharePoint から収集→分析→PowerPoint にまとめる、といった一連の作業を自律的に実行する。進捗は可視化され、途中でユーザーが方向修正できる。",
      "**Anthropic との連携**: Microsoft は Anthropic と緊密に連携し、Claude の技術を Copilot Cowork に統合している。Wave 3 アップデートにより、Claude と最新の OpenAI モデルの両方が Copilot 内で利用可能になり、タスクに応じて自動的に最適なモデルが選択される。これは Microsoft が単一モデルに依存しない「マルチモデル戦略」を本格化させたことを意味する。",
      "**セキュリティとガバナンス**: Cowork は Microsoft 365 のセキュリティ・ガバナンス境界内で動作する。ID 管理、アクセス権限、コンプライアンスポリシーがデフォルトで適用され、すべてのアクション・出力は監査可能。エンタープライズが AI エージェントを導入する際の最大の懸念（データの外部流出・権限逸脱）に対応した設計。",
      "**料金と展開**: Copilot Cowork の利用には Microsoft 365 Copilot ライセンス（$30/ユーザー/月、既存エンタープライズ契約に追加）が必要。2026年5月1日には **Microsoft 365 E7: The Frontier Suite** が一般提供開始予定で、M365 E5・Copilot・Agent 365 を統合した包括パッケージとなる。現在は Frontier プログラム参加企業と Research Preview ユーザーに限定提供中。"
    ],
    "newsDate": "2026-03-27",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": ["Microsoft", "Copilot", "エージェント", "Anthropic", "エンタープライズ"],
    "primarySources": [
      { "title": "Copilot Cowork: A new way of getting work done", "site": "Microsoft 365 Blog", "url": "https://www.microsoft.com/en-us/microsoft-365/blog/2026/03/09/copilot-cowork-a-new-way-of-getting-work-done/" },
      { "title": "Powering Frontier Transformation with Copilot and agents", "site": "Microsoft 365 Blog", "url": "https://www.microsoft.com/en-us/microsoft-365/blog/2026/03/09/powering-frontier-transformation-with-copilot-and-agents/" },
      { "title": "Introducing the First Frontier Suite", "site": "Microsoft Blog", "url": "https://blogs.microsoft.com/blog/2026/03/09/introducing-the-first-frontier-suite-built-on-intelligence-trust/" }
    ]
  },
  {
    "id": "google-colab-vscode-extension",
    "type": "news",
    "category": "product",
    "title": "Google Colab が VS Code に統合 — 無料 T4 GPU をローカル環境からそのまま使える時代に",
    "excerpt": "Google が VS Code 向けの公式 Colab 拡張機能をリリース。ローカルの .ipynb をそのまま Colab の T4 GPU / TPU で実行可能に。Git 統合も自然になり、「GPU がない」は個人開発者の言い訳にならなくなった。",
    "body": [
      "2025年11月13日、Google は Visual Studio Code 向けの公式 Google Colab 拡張機能をリリースした。これにより、VS Code のエディタ環境から直接 Colab のクラウドランタイム（GPU / TPU を含む）に接続し、ローカルのノートブックファイル（.ipynb）をそのまま実行できるようになった。",
      "**無料 T4 GPU がローカル IDE に**: 無料プランで NVIDIA T4 GPU と TPU v5e にアクセス可能。ローカル環境のデバッグツール、IntelliSense、拡張機能がすべてクラウド GPU 上で動作する感覚で使える。CPU で1エポック約50分かかっていたファインチューニングが、T4 GPU で約3分に短縮されるケースも報告されている。有料プラン（Colab Pro / Pro+）では V100 や A100 も利用可能。",
      "**ローカルファイルと Git 統合**: 従来の Colab はブラウザ完結型で Git との連携が弱く、実験コードが分散しがちだった。VS Code 統合により「VS Code = Git 管理、Colab = GPU 実行」が一体化し、プロジェクト全体で統一的なワークフローを構築できるようになった。ローカルのファイルシステムに保存したノートブックをそのまま Colab ランタイムで実行する、という自然な開発体験が実現。",
      "**個人開発者への影響**: 高価な GPU を持っていない個人開発者でも、ローカルの使い慣れた VS Code 環境で機械学習モデルのファインチューニングやプロンプト実験を高速に回せるようになった。LLM のファインチューニング、LoRA の実験、画像生成モデルの試行など、これまで GPU の壁で諦めていた作業のハードルが大幅に下がっている。",
      "**注意点**: Web 版 Colab にあった一部機能（userdata.get() によるシークレット管理等）は未対応。無料プランの GPU は利用制限があり、長時間の学習には Pro 以上が必要。また、ランタイムの接続が不安定になるケースも報告されている。"
    ],
    "newsDate": "2025-11-13",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": ["Google", "Colab", "VS Code", "GPU", "開発環境"],
    "primarySources": [
      { "title": "Google Brings Colab Integration to Visual Studio Code", "site": "InfoQ", "url": "https://www.infoq.com/news/2025/11/visual-studio-code-colab-bridge/" },
      { "title": "Local code meets cloud compute: Using Google Colab in VS Code", "site": "Google Cloud Community", "url": "https://medium.com/google-cloud/local-code-meets-cloud-compute-using-google-colab-in-vs-code-206ff69483f4" },
      { "title": "Google Colab VS Code Extension: A Deep Dive", "site": "kambale.dev", "url": "https://kambale.dev/google-colab-in-vs-code-a-deep-dive-into-the-new-extension" }
    ]
  },
  {
    "id": "gemini-drop-march-2026",
    "type": "news",
    "category": "model",
    "title": "Gemini Drop（2026年3月）— Lyria 3 Pro・メモリ移行・Personal Intelligence 無料化など5つの新機能",
    "excerpt": "Google が月例の Gemini Drop で5つの新機能を発表。音楽生成 Lyria 3 Pro（最大3分）、他社AIからのチャット履歴移行、Personal Intelligence の無料化、Google TV 向け Gemini 機能、Gemini 3.1 Flash Live の会話強化。",
    "body": [
      "Google は2026年3月27日、月例アップデート「Gemini Drop」で Gemini アプリの5つの新機能を発表した。Gemini Drop は毎月の定例アップデートとして2025年末から継続しており、今回は音楽生成の大幅強化とユーザー囲い込み施策が目立つ内容。",
      "**Lyria 3 Pro（音楽生成の強化）**: Google の最先端音楽モデル Lyria 3 の上位版。従来の30秒制限から最大3分のトラック生成に対応し、写真やテキストから歌詞付きの高品質楽曲を作成可能。Google AI Ultra / Google One AI Premium サブスクライバー向け。Suno V5 や Udio と直接競合する機能で、Google エコシステム内で音楽生成が完結する。",
      "**チャット履歴の移行（Import Memory to Gemini）**: 他社の AI チャットボット（ChatGPT 等）からの会話履歴を数クリックで Gemini に移行できる機能。移行した履歴を基に Gemini がユーザーの好みや文脈を学習し、パーソナライズされた応答を提供する。他社サービスからの乗り換えハードルを下げる戦略的な施策。",
      "**Personal Intelligence の無料化**: これまで有料サブスクライバー限定だった Personal Intelligence を、米国の全 Gemini ユーザーに無料開放。Gmail、Google フォト、YouTube と連携し、旅行計画やプロジェクト管理などのパーソナライズされた支援を提供する。Google サービス横断のデータ活用が無料で使えるようになった点が大きい。",
      "**Gemini 3.1 Flash Live**: 音声会話に特化した次世代モデル。ピッチやペーシングなどの音響的ニュアンスを認識し、騒がしい環境でも複雑なタスクを処理可能。コンテキスト保持が従来の2倍に拡張され、繰り返し説明しなくても自然な対話が続く。2026年3月26日発表。",
      "**Google TV 向け Gemini**: Google TV に Gemini の視覚的回答とナレーション付き深掘り機能を統合。テレビ画面上で AI と対話しながらコンテンツを探索できる。"
    ],
    "newsDate": "2026-03-27",
    "date": "2026-03-29",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": ["Google", "Gemini", "Lyria", "音楽生成", "パーソナライズ"],
    "primarySources": [
      { "title": "Gemini Drops: New updates to the Gemini app, March 2026", "site": "Google The Keyword", "url": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026/" },
      { "title": "Lyria 3 Pro", "site": "Google The Keyword", "url": "https://blog.google/innovation-and-ai/technology/ai/lyria-3-pro/" }
    ]
  },
  {
    "id": "cursor-automations-self-hosted-agents-2026",
    "type": "news",
    "category": "editor",
    "title": "Cursor Automations 登場 — Slack・GitHub・PagerDuty 連動の常駐エージェント＋セルフホスト型クラウドエージェント",
    "excerpt": "Cursor が3月に2つの大型機能をリリース。Automations はスケジュールや外部イベント（Slack、GitHub PR、PagerDuty）をトリガーにエージェントを自動起動する仕組み。さらに Self-hosted Cloud Agents でコードと実行環境を自社ネットワーク内に保持したままエージェントを利用可能に。",
    "body": [
      "Cursor は2026年3月5日、新機能 **Automations** を発表した。これは「プロンプトを打ってエージェントを起動する」という従来のワークフローから脱却し、Slack メッセージ・GitHub PR マージ・PagerDuty インシデント・cron スケジュールなどをトリガーにエージェントを自動起動する仕組み。クラウドサンドボックス上でユーザー定義の MCP とモデル設定に従い動作し、過去の実行から学習する Memory 機能も備える。",
      "ユースケースは幅広い。セキュリティレビュー Automation は main へのプッシュごとに差分を監査し、高リスクの脆弱性を検出して Slack に投稿する。インシデント対応では PagerDuty をトリガーに Datadog MCP でログを調査し、修正案を Slack に返す。週次ダイジェストでは主要 PR・バグ修正・技術的負債を要約して投稿する。Cursor によると毎時数百件の Automation が実行されているという。",
      "3月25日にはさらに **Self-hosted Cloud Agents** を発表。コードベース・ビルド出力・シークレットをすべて自社ネットワーク内に保持したまま、Cursor のクラウドエージェント機能（隔離 VM・マルチモデルハーネス・プラグイン等）をそのまま利用できる。エンタープライズのセキュリティ要件に対応した設計で、Cursor ホスト型と同等の機能を提供する。",
      "Bloomberg によると Cursor の年間売上は20億ドルを突破し、直近3ヶ月で倍増。Ramp データでは生成 AI クライアントの約25%が Cursor を契約している。Automations と Self-hosted Agents は、開発者ツールからエンタープライズ向けプラットフォームへの転換を象徴する機能と言える。"
    ],
    "newsDate": "2026-03-05",
    "date": "2026-03-30",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": ["Cursor", "Automations", "エージェント", "セルフホスト", "エンタープライズ"],
    "primarySources": [
      { "title": "Build agents that run automatically", "site": "Cursor Blog", "url": "https://cursor.com/blog/automations" },
      { "title": "Cursor is rolling out a new kind of agentic coding tool", "site": "TechCrunch", "url": "https://techcrunch.com/2026/03/05/cursor-is-rolling-out-a-new-system-for-agentic-coding/" },
      { "title": "Cursor Changelog (03-05-26)", "site": "Cursor", "url": "https://cursor.com/changelog/03-05-26" }
    ]
  },
  {
    "id": "copilot-agentic-code-review-ga-2026",
    "type": "news",
    "category": "cli",
    "title": "GitHub Copilot コードレビューがエージェント型に進化 — GA 化、累計6,000万件突破、GitHub の PR 5件に1件が AI レビュー",
    "excerpt": "GitHub Copilot のコードレビュー機能がエージェント型アーキテクチャに移行し GA 化。リポジトリ全体のコンテキストを自律的に収集して分析するため精度が大幅向上。累計6,000万件を突破し、GitHub 上の PR の5件に1件が Copilot によるレビューを受けている。",
    "body": [
      "GitHub は2026年3月5日、Copilot コードレビューをエージェント型ツール呼び出しアーキテクチャに移行し、一般提供（GA）を開始した。Copilot Pro・Pro+・Business・Enterprise の全プランで利用可能。従来のルールベースの指摘から、リポジトリ構造・関連コード・参照先を自律的に収集して分析するエージェント型に進化した。",
      "2025年4月の初回リリースから利用は10倍に成長し、累計6,000万件を突破。GitHub 上の PR の5件に1件以上が Copilot コードレビューを受けている。71%のレビューでアクション可能なフィードバックを提示し、残り29%では不要な指摘をせず沈黙を選ぶ設計。レビュー1件あたり平均5.1コメントだが、レビューチャーンの増加や品質低下は起きていないという。",
      "UX も大幅に改善。単一行ピン留めから複数行コメントに移行し、論理的なコード範囲にフィードバックを紐付ける。同一パターンの指摘はクラスタリングして認知負荷を軽減。バッチオートフィックスで同種のバグやスタイル問題を一括修正可能。さらにレビューコメントから直接 Copilot Coding Agent を呼び出して修正 PR を自動作成する連携も実現した。",
      "3月11日には GitHub CLI からの Copilot レビューリクエストにも対応。`gh pr create` や `gh pr edit` でターミナルから直接 AI レビューを依頼できる。エージェント型コードレビューは GitHub Actions 上で動作し、GitHub ホストランナーを使用していれば追加セットアップは不要。"
    ],
    "newsDate": "2026-03-05",
    "date": "2026-03-30",
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": ["GitHub", "Copilot", "コードレビュー", "エージェント", "GA"],
    "primarySources": [
      { "title": "Copilot code review now runs on an agentic architecture", "site": "GitHub Changelog", "url": "https://github.blog/changelog/2026-03-05-copilot-code-review-now-runs-on-an-agentic-architecture/" },
      { "title": "60 million Copilot code reviews and counting", "site": "GitHub Blog", "url": "https://github.blog/ai-and-ml/github-copilot/60-million-copilot-code-reviews-and-counting/" },
      { "title": "Request Copilot code review from GitHub CLI", "site": "GitHub Changelog", "url": "https://github.blog/changelog/2026-03-11-request-copilot-code-review-from-github-cli/" }
    ]
  },
  {
    "id": "claude-code-computer-use-review-march-2026",
    "type": "news",
    "category": "cli",
    "title": "Claude Code 3月アップデート — Computer Use 搭載・出力上限128K・Code Review 機能で開発フロー完結",
    "excerpt": "Anthropic が3月に Claude Code を大幅強化。Computer Use でファイル操作や画面操作が可能に、Opus 4.6 の出力上限が128Kトークンに拡張、新 Code Review 機能で AI 生成コードの品質管理を自動化。run-rate 収益は25億ドルを突破。",
    "body": [
      "Anthropic は2026年3月、Claude Code に複数の大型アップデートを投入した。3月23日に追加された **Computer Use** は Pro / Max ユーザー向けで、Claude がファイルを開く・開発ツールを操作する・画面上でクリック操作するなどを追加セットアップなしで実行可能にする。従来の CLI 操作に加え、GUI アプリケーションとの連携が可能になった。",
      "出力上限も大幅に引き上げられた。**Opus 4.6 のデフォルト出力が64Kトークン、最大128Kトークン**に拡張（Sonnet 4.6 も同様に128K対応）。大規模なコード生成やリファクタリングで途中切断されるケースが大幅に減少する。また `--bare` フラグの追加により、スクリプトからの `-p` 呼び出し時にフック・LSP・プラグイン同期をスキップして高速実行が可能に。",
      "3月9日にリリースされた **Code Review** 機能はマルチエージェントシステムで、AI が生成したコードのロジックエラーを自動検出する。Claude Code の普及に伴い AI 生成コードの量がレビューのボトルネックになっている問題に対応したもの。Cloud Auto-fix も強化され、Web / モバイルセッションから自動的に PR をフォローし、CI 失敗の修正やレビューコメントへの対応をクラウド上で実行する。",
      "その他、`--channels` によるスマートフォンへの承認プロンプト転送（Research Preview）、`/plan` コマンドへのオプション引数追加、カスタム自動メモリディレクトリ対応、大規模セッション再開時のメモリ使用量改善など、多数の改善が含まれる。TechCrunch によると Claude Code の run-rate 収益は25億ドルを超えており、Anthropic の主力プロダクトとしての地位を確立している。"
    ],
    "newsDate": "2026-03-23",
    "date": "2026-03-30",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": ["Anthropic", "Claude Code", "Computer Use", "Code Review", "出力上限"],
    "primarySources": [
      { "title": "Anthropic hands Claude Code more control, but keeps it on a leash", "site": "TechCrunch", "url": "https://techcrunch.com/2026/03/24/anthropic-hands-claude-code-more-control-but-keeps-it-on-a-leash/" },
      { "title": "Anthropic launches code review tool to check flood of AI-generated code", "site": "TechCrunch", "url": "https://techcrunch.com/2026/03/09/anthropic-launches-code-review-tool-to-check-flood-of-ai-generated-code/" },
      { "title": "Claude Code Changelog", "site": "Claude Code Docs", "url": "https://code.claude.com/docs/en/changelog" }
    ]
  },
  {
    "id": "anthropic-claude-writing-itself-74-launches-2026",
    "type": "news",
    "category": "special",
    "title": "「Claude が次の Claude を設計している」— Anthropic CEO 発言と52日間74リリースの異常な開発速度",
    "excerpt": "Anthropic CEO の Dario Amodei が Davos で「社内にはもうコードを書かないエンジニアがいる」と発言。Labs 責任者の Mike Krieger は「Claude が Claude を書いている」と明言。実際に52日間で74の主要リリースを出荷し、Claude Code の run-rate 収益は25億ドルを突破した。",
    "body": [
      "Anthropic CEO **Dario Amodei** は2026年1月20日、ダボス会議（世界経済フォーラム）で The Economist 編集長 Zanny Minton Beddoes のインタビューに応じ、衝撃的な発言を行った。「Anthropic にはもうコードを書かないエンジニアがいる。モデルにコードを書かせて、自分はそれを編集しレビューするだけだ」。さらに「Anthropic でコードを書くということは、次世代の Claude を設計すること。つまり Claude が次の Claude 自身を設計している。完全にではないが、大部分を」と述べた。",
      "この発言を2月3日の Cisco AI Summit で Labs 責任者 **Mike Krieger**（Instagram 共同創業者）がさらに踏み込んで裏付けた。「現在、Anthropic のほとんどのプロダクトは事実上100% Claude が書いている。我々がやったのは、それを信頼できる正しい足場（scaffolds）を作ること」。Krieger は「Claude が Claude を書いている」と明言し、2025年3月に Amodei が「6ヶ月以内に AI がコードの90%を書く」と予測した際に「クレイジーだと思われた」が、その通りになったと述べた。",
      "数字がこの主張を裏付けている。Product Compass の調査によると、Claude チームは2026年2月1日からの**52日間で74の主要リリース**を出荷した。内訳は Claude Code 28件、Cowork 15件、API・インフラ 18件、モデル・プラットフォーム 13件。社内では1日あたり60〜100の内部リリースが行われ、エンジニアは業務の約60%に Claude を使用（1年前の28%から倍増）、生産性は約50%向上したという。Claude Cowork 自体が Claude Code を使って10日間で構築されたことも象徴的だ。",
      "Claude Code 責任者の **Boris Cherny** は「2ヶ月以上自分でコードを書いていない。100%が Claude Code と Opus 4.5/4.6 で書かれている」と投稿。チームの採用方針もスペシャリストからジェネラリスト重視に転換した。「過去に学んだスキルの多くは LLM を使ったコーディングには直接活かせない。モデルが詳細を埋められるからだ」。Claude Code 単体の年間 run-rate 収益は25億ドルを超え、Claude 4 系モデルのリリース以降、利用量は300%増加した。",
      "Amodei は Davos での Demis Hassabis（Google DeepMind CEO）との共同セッションで、AI が全領域で人間を超える時期について「1〜2年」と予測（Hassabis は「5〜10年」）。AI が自身の後継モデルを設計する再帰的ループが加速しており、「そのループがどれだけ速く閉じるかが問題だ」と述べた。チップ製造やトレーニング時間という物理的制約がボトルネックだが、Claude が Claude を書く現実はすでにその入り口にある。"
    ],
    "newsDate": "2026-01-20",
    "date": "2026-03-30",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": ["Anthropic", "Dario Amodei", "Claude Code", "再帰的AI開発", "AI生産性"],
    "primarySources": [
      { "title": "Anthropic CEO Dario Amodei at World Economic Forum (WSJ Interview)", "site": "TranscriptMate", "url": "https://transcriptmate.com/interviews/dario-amodei/dario-amodei-on-ai-s-impact-opportunity-risk-and-societal-adaptation" },
      { "title": "Mike Krieger claims Claude is essentially writing itself", "site": "IT Pro", "url": "https://www.itpro.com/software/development/anthropic-labs-chief-mike-krieger-claims-claude-is-essentially-writing-itself-and-it-validates-a-bold-prediction-by-ceo-dario-amodei" },
      { "title": "Claude Team is Shipping Like Crazy: 74 Releases in 52 Days", "site": "Product Compass", "url": "https://www.productcompass.pm/p/claude-shipping-calendar" },
      { "title": "Top engineers at Anthropic, OpenAI say AI now writes 100% of their code", "site": "Fortune", "url": "https://fortune.com/2026/01/29/100-percent-of-code-at-anthropic-and-openai-is-now-ai-written-boris-cherny-roon/" }
    ]
  },
  {
    "id": "openai-codex-plugin-cc-claude-code-2026",
    "type": "news",
    "category": "cli",
    "title": "OpenAI が公式に Claude Code 向け Codex プラグインを公開 — 競合ツール内からコードレビュー・タスク委任が可能に",
    "excerpt": "OpenAI が openai/codex-plugin-cc を公開し、Claude Code 内から Codex のコードレビューやタスク委任を公式にサポート。OSS コミュニティで数週間話題だった Claude↔Codex 連携が、OpenAI 自身の手で公式プラグインとして実現した異例の展開。",
    "body": [
      "OpenAI は Claude Code 向けの公式プラグイン **codex-plugin-cc** を GitHub（openai/codex-plugin-cc）で公開した。Claude Code のプラグインマーケットプレイスから `/plugin marketplace add openai/codex-plugin-cc` でインストールでき、Claude Code のセッション内から直接 Codex の機能を呼び出せる。競合の開発環境に自社ツールを公式統合するという異例の動きだ。",
      "主要コマンドは4つ。`/codex:review` は通常の Codex コードレビューを実行し、Codex 内の `/review` と同等の品質を提供する。`/codex:adversarial-review` はより懐疑的な視点でコードを検証するステアラブルレビュー。`/codex:rescue` は Codex のサブエージェントにタスクを丸ごと委任する。`/codex:setup` は Codex の環境確認と未インストール時の自動セットアップを行う。",
      "注目機能は **Review Gate**。`/codex:setup --enable-review-gate` で有効化すると、Claude の出力に対して Stop フックで Codex レビューが自動実行され、問題が検出された場合は Claude が修正するまで処理を継続する。Claude（実装）→ Codex（レビュー）の自動ループが回る設計だが、使用量を急速に消費するため監視下での利用が推奨されている。プラグインはローカルの Codex CLI とアプリサーバーを経由して動作し、ChatGPT サブスクリプションまたは OpenAI API キーが必要。",
      "この公式プラグインに先行して、OSS コミュニティでは Claude↔Codex 連携が活発に開発されていた。tuannvm/codex-mcp-server（Codex CLI を MCP サーバーでラップ）、ching-kuo/claude-codex（Claude が計画・Codex が実装のループ）、abhishekgahlot2/codex-claude-bridge（Claude Code Channels を使った双方向ブリッジ）など多数のプロジェクトが登場。OpenAI が公式プラグインを出したことで、このエコシステムが正式に認められた形となる。",
      "背景には OpenAI の Codex プラグインシステム全体の拡充がある。3月27日に発表されたプラグイン機能は、スキル・アプリ統合・MCP サーバーをバンドルして共有可能にする仕組みで、Figma・Notion・Sentry・Slack 等20以上のプラグインが利用可能。さらに GitHub イベントをトリガーにする Codex Triggers も同時発表された。Claude Code と Codex のプラグインアーキテクチャは MCP を共通基盤としており、ツール間の相互運用性は今後さらに進むと見られる。"
    ],
    "newsDate": "2026-03-29",
    "date": "2026-03-30",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": ["OpenAI", "Codex", "Claude Code", "プラグイン", "MCP", "相互運用"],
    "primarySources": [
      { "title": "openai/codex-plugin-cc: Use Codex from Claude Code to review code or delegate tasks", "site": "GitHub", "url": "https://github.com/openai/codex-plugin-cc" },
      { "title": "OpenAI introduces plugins for its Codex programming assistant", "site": "SiliconANGLE", "url": "https://siliconangle.com/2026/03/27/openai-introduces-plugins-codex-programming-assistant/" },
      { "title": "OpenAI's Codex Gets Plugins — And The Real Fight For AI-Powered Development Begins", "site": "Web And IT News", "url": "https://www.webanditnews.com/2026/03/28/openais-codex-gets-plugins-and-the-real-fight-for-ai-powered-development-begins/" }
    ]
  },
  {
    "id": "m365-copilot-researcher-critique-council-2026",
    "type": "news",
    "category": "product",
    "title": "M365 Copilot Researcher に「Critique」「Council」追加 — GPT が起草し Claude が事実確認する生成・評価分離アーキテクチャ",
    "excerpt": "Microsoft が M365 Copilot の Researcher エージェントにマルチモデル機能を追加。Critique は GPT-5.4 が調査・起草、Claude Opus 4.6 が事実確認・引用精査を行う2モデル連携で、DRACO ベンチで業界最高スコアを達成。Council は複数モデルの並列回答と合意・相違点を可視化する。",
    "body": [
      "Microsoft は2026年3月30日、**M365 Copilot** の Researcher エージェントに **Critique** と **Council** の2つのマルチモデル機能を追加し、Frontier プログラム参加者向けに即日提供を開始した。これにより Copilot は単一モデル依存から脱却し、OpenAI と Anthropic のモデルを組み合わせる「生成と評価の分離」アーキテクチャへ移行する。",
      "**Critique** は複雑な調査タスク向けのマルチモデル Deep Research システム。**GPT-5.4** がタスクの計画・検索の反復・初稿の起草を担い、**Claude Opus 4.6** が専門レビュアーとして事実確認・引用精査・論理的整合性のチェックを行う。この役割は逆転も可能で、Claude が起草し GPT がレビューする構成にもできる。モデルピッカーで「Auto」を選択するとデフォルトで Critique が適用される。",
      "性能評価には Microsoft が策定した **DRACO（Deep Research Accuracy, Completeness, and Objectivity）** ベンチマークを使用。10分野・100件の複雑な調査タスクで構成される。Critique 搭載の Researcher は集計スコアで **+7.0ポイント（SEM ±1.90）** の改善を達成し、Perplexity Deep Research（Claude Opus 4.6 単体）を **+13.88%** 上回り業界最高スコアを記録した（自社評価）。改善幅は「分析の広さと深さ」（+3.33）、「表現品質」（+3.04）、「事実の正確性」（+2.58）の順に大きく、全次元で統計的に有意な差（p < 0.0001）が確認された。",
      "**Council** は並列比較モード。Anthropic と OpenAI のモデルが同時に同じ調査を実行し、それぞれ独立したレポートを生成する。完了後、ジャッジモデルが両レポートを評価し、合意点と見解の相違を要約した統合レポートを提示する。単一モデルの盲点を補完し、ユーザーが複数の視点から判断できる設計。モデルピッカーで「Model Council」を選択して利用する。",
      "同日には **Copilot Cowork** の Frontier プログラム向け提供開始も発表された。Anthropic の Claude 技術を基盤とし、複数ステップの業務を自律的に計画・実行する。Microsoft の戦略は明確で、Google Gemini や Anthropic Claude、OpenAI ChatGPT が単体モデルで Deep Research を競う中、あえて競合同士のモデルを組み合わせるマルチモデル路線で差別化を図っている。M365 Copilot のライセンスは月額30ドル/ユーザーで、Frontier 機能は追加コストなしで利用可能（一部追加利用分は別途課金）。2026年1月時点の有料 Copilot シートは1,500万で、商用 M365 ユーザー4.5億人の約3.3%にとどまる。"
    ],
    "newsDate": "2026-03-30",
    "date": "2026-03-30",
    "author": "AI News 編集部",
    "readTime": "7分",
    "tags": ["Microsoft", "Copilot", "マルチモデル", "Researcher", "Claude", "GPT", "Deep Research"],
    "primarySources": [
      { "title": "Introducing multi-model intelligence in Researcher", "site": "Microsoft Tech Community", "url": "https://techcommunity.microsoft.com/blog/microsoft365copilotblog/introducing-multi-model-intelligence-in-researcher/4506011" },
      { "title": "GPT drafts, Claude critiques: Microsoft blends rival AI models in new Copilot upgrade", "site": "GeekWire", "url": "https://www.geekwire.com/2026/gpt-drafts-claude-critiques-microsoft-blends-rival-ai-models-in-new-copilot-upgrade/" },
      { "title": "Copilot Cowork: Now available in Frontier", "site": "Microsoft 365 Blog", "url": "https://www.microsoft.com/en-us/microsoft-365/blog/2026/03/30/copilot-cowork-now-available-in-frontier/" }
    ]
  },
  {
    "id": "x-grok-auto-translation-2026",
    "type": "news",
    "category": "product",
    "title": "X が Grok 自動翻訳を全面展開 — タイムラインの外国語投稿がタップ不要で母国語表示に、「史上最大の文化交流」か炎上輸出か",
    "excerpt": "X（旧Twitter）が Grok AI による投稿の自動翻訳機能を本格展開。従来の「翻訳を表示」ボタンが不要になり、For You タブの外国語投稿が自動的に母国語で表示される。X プロダクト責任者は「史上最大の文化交流」と称したが、意図しないグローバル拡散のリスクも指摘されている。",
    "body": [
      "X（旧Twitter）は2026年3月29〜30日、xAI の **Grok** を使った投稿の自動翻訳・自動レコメンド機能を本格的に展開開始した。Elon Musk は「Grok が他言語の投稿を自動翻訳し、レコメンドし始めている」と投稿し、「これは長年の目標だった」と述べた。従来は投稿ごとに「翻訳を表示」ボタンをタップする必要があったが、新機能ではタイムライン上の外国語投稿が自動的にユーザーの設定言語で表示される。",
      "X のプロダクト責任者 **Nikita Bier** は「歴史上最大の文化交流がまさに始まった」と投稿。実際に日米間では活発な反応が起きており、米国ユーザーが日本語の投稿に直接反応するケースが急増している。Grok は日本で既に高い人気を持ち、AI コンパニオン「Ani」の導入時には日本の App Store で1位を獲得し、OpenAI（3位）や Google Gemini（5位）を抜いた実績がある。Bier は当時「日本が起きた瞬間にサーバーが落ちた」と語っていた。",
      "技術的には、翻訳自体に加えてレコメンドの言語横断が重要なポイントとなる。どの外国語投稿をユーザーに表示する価値があるかを判断するには、ユーザーの関心・ネットワーク・コンテンツの関連性を言語境界を越えてモデリングする必要がある。X は2025年以降、アルゴリズムと AI 機能を全面的に Grok に移管しており、「For You」タブの表示内容はすべて Grok のアルゴリズムが決定している。Google 翻訳から Grok 翻訳への移行は2025年半ばに開始されていた。",
      "一方で懸念も複数指摘されている。自動翻訳はデフォルトで有効化されており、グローバルな一括オフ設定が存在しない。言語ごとに個別にオフにする必要があり、UX 上の不満が出ている。より深刻なのは「意図しないグローバル拡散」のリスクだ。国内向けのつもりで書いた政治的主張や過激な投稿が、自動翻訳を通じて海外に流通し始めるケースが報告されている。Japan Times は AI 翻訳への過度な依存が「文化的整合性の喪失」につながるリスクを論じ、特に日本語コンテンツの原作の意図が損なわれる懸念を指摘した。",
      "AI による言語障壁の撤廃は、開発者コミュニティにも影響を及ぼす。英語圏で共有される技術的知見やオープンソースの議論が日本語話者にリアルタイムで届くようになる反面、文脈やニュアンスの損失が誤解を生むリスクもある。翻訳精度の問題は Grok に限らず全 LLM の課題であり、特にスラング・技術用語・文化依存の表現で品質にばらつきがある。「翻訳」ではなく「翻案」になっていないかをユーザー自身が判断する必要がある点は変わらない。"
    ],
    "newsDate": "2026-03-29",
    "date": "2026-03-30",
    "author": "AI News 編集部",
    "readTime": "6分",
    "tags": ["X", "Grok", "xAI", "自動翻訳", "文化交流", "多言語"],
    "primarySources": [
      { "title": "X、英語から日本語に自動翻訳開始「歴史上最大の文化交流」", "site": "Impress Watch", "url": "https://www.watch.impress.co.jp/docs/news/2097609.html" },
      { "title": "Xの自動翻訳で「言葉の壁」崩れる", "site": "ITmedia NEWS", "url": "https://www.itmedia.co.jp/news/articles/2603/30/news142.html" },
      { "title": "X Expands Grok Translation on Posts In-Stream", "site": "Social Media Today", "url": "https://www.socialmediatoday.com/news/x-formerly-twitter-expands-grok-translations-posts/757620/" }
    ]
  },
  {
    "id": "claude-code-computer-use-deep-dive-2026",
    "type": "news",
    "category": "cli",
    "title": "Claude Code に Computer Use が搭載 — CLI からアプリを開き、クリックし、スクショを撮る。コードを書いた AI が自分でテストする時代",
    "excerpt": "Anthropic が Claude Code に Computer Use（Research Preview）を追加。CLI セッション内から macOS のアプリを起動・クリック操作・スクリーンショット取得が可能に。Swift アプリをビルドして UI を自動検証する、レイアウトバグを再現して CSS を修正するなど、コードを書いた AI が自らテストまで完結させる。",
    "body": [
      "Anthropic は2026年3月23日、Claude Code に **Computer Use** を Research Preview として追加した。Pro および Max プラン向けで、macOS 上の Claude Code v2.1.85 以降で利用可能。Claude が CLI のターミナルセッション内からアプリを起動し、画面を見て、クリック・タイプ・スクロールを行い、スクリーンショットを撮影できるようになった。Elon Musk、Satya Nadella らが AI エージェントのデスクトップ操作に注目する中、Anthropic は開発者の CLI ワークフローに直接統合するアプローチを選んだ。",
      "ユースケースは GUI が必要なタスク全般に及ぶ。**ネイティブアプリのビルドと検証**では、Swift アプリをコンパイル→起動→全タブをクリック→エラー状態をスクリーンショットという一連の作業を1会話で完了する。**UI テスト**では Playwright の設定やテストハーネスなしに Electron アプリのオンボーディングフローをクリックスルーで検証。**レイアウトバグの再現**ではウィンドウをリサイズしてバグを再現→スクショ→CSS 修正→再検証まで自動実行。**iOS Simulator の操作**や GUI のみのデザインツール・ハードウェア制御パネルの操作にも対応する。",
      "ツールの優先順位は明確に定義されている。Claude はまず **MCP サーバー**（最も精密）を試し、次に **Bash**、次に **Claude in Chrome**（ブラウザ操作）、最後に **Computer Use**（最も広範だが最も遅い）をフォールバックとして使う。つまり Computer Use は「他の手段では到達できないもの」専用の位置づけだ。有効化は `/mcp` メニューから `computer-use` サーバーを有効にし、macOS の Accessibility と Screen Recording の権限を付与する。プロジェクト単位で設定が保持される。",
      "セキュリティモデルは多層構造。**アプリ単位の承認制**で、セッション開始時に Claude が使いたいアプリごとに許可を求める。ブラウザと取引プラットフォームは閲覧のみ、ターミナルと IDE はクリックのみ、その他のアプリはフルコントロールという3段階の権限設計。ターミナルウィンドウはスクリーンショットから除外され、Claude が自身の出力を読むことによるプロンプトインジェクションを防止する。Machine-wide ロックにより同時に1セッションしか画面を操作できず、Esc キーでいつでも即座に中断可能。Claude が操作中は他のアプリが非表示になり、操作対象のアプリのみが表示される。",
      "この機能の背景には2つの戦略的動きがある。2026年2月25日に発表された **Vercept の買収**（1,600万ドル調達のシアトル AI スタートアップ）で、画面認識・デスクトップ自動化の技術基盤を獲得。Vercept の「Vy」は Apple MacBook 上でタスクを自律実行するクラウドエージェントだった。さらに OSWorld ベンチマークでは Claude Sonnet のスコアが2024年末の15%未満から **72.5%** に到達し、OpenAI GPT-5.2 の38.2%を大きく上回る。現時点の制限として macOS のみ対応（Windows 未対応）、Team/Enterprise プラン未対応、`-p` フラグの非対話モード未対応がある。デスクトップアプリ版では Dispatch 機能と連携し、スマートフォンからタスクを指示して PC で自動実行→完了後に結果を確認、という非同期ワークフローも可能。"
    ],
    "newsDate": "2026-03-23",
    "date": "2026-03-30",
    "author": "AI News 編集部",
    "readTime": "8分",
    "tags": ["Anthropic", "Claude Code", "Computer Use", "デスクトップ自動化", "Vercept", "macOS"],
    "primarySources": [
      { "title": "Let Claude use your computer from the CLI", "site": "Claude Code Docs", "url": "https://code.claude.com/docs/en/computer-use" },
      { "title": "Anthropic says Claude can now use your computer to finish tasks for you", "site": "CNBC", "url": "https://www.cnbc.com/2026/03/24/anthropic-claude-ai-agent-use-computer-finish-tasks.html" },
      { "title": "Claude Code and Cowork can now use your computer", "site": "Engadget", "url": "https://www.engadget.com/ai/claude-code-and-cowork-can-now-use-your-computer-210000126.html" },
      { "title": "Anthropic acquires Vercept to advance Claude's computer use capabilities", "site": "Anthropic", "url": "https://www.anthropic.com/news/acquires-vercept" }
    ]
  },
  {
    "id": "saas-stack-selection-ai-coding-era-2026",
    "type": "feature",
    "category": "cli",
    "title": "AI コーディング時代の SaaS スタック選定 — 18カテゴリ90+ツールの選び方と、AI が得意な構成・苦手な構成",
    "excerpt": "X で「SaaS Stack」のフォルダツリーが39万表示を超えるバズに。SaaS を1つ作るだけで18カテゴリ・90以上のツール選定が必要という現実が可視化され、開発者コミュニティで「Prisma がない」「Better Auth は？」と議論が沸騰。Claude Code や Cursor に丸投げしたとき AI はどのスタックを選ぶのか、なぜその構成を好むのか、どこで失敗するのかを実務視点で整理した。",
    "body": [
      "2026年3月29日、開発者 **@hridoyreh**（Hridoy Rehman）が X に投稿した「SaaS Stack」のフォルダツリーが39万表示・6,300いいね・7,600ブックマークを超えるバズとなった。投稿はシンプルなテキストのツリー図で、Frontend から Customer Support まで18カテゴリ、各カテゴリに5つ前後の選択肢を並べただけ。それが「this is goated bro, I could really use this」「Outstanding! Love it」「Wow the was so lengthy — But, valuable...」と反響を呼んだ。同時に「Prisma がない」（@batubuilds）→ 投稿者「Opps, I need to add it too.」、「NextAuth は？ Better Auth は？」（@McSons1）→「Missed...」、「Cloudinary と Spaceship も」（@hanzaderehh）→「Noted too...」と、ツリーの「穴」を指摘するリプライが次々と付き、開発者同士のスタック議論に発展した。別の開発者 @rohiddev も「My Stack」として Next.js / Vite / Hono / Cloudflare / Better Auth / Clerk / Docker / GitHub Actions を挙げた自分版ツリーを投稿し、こちらも2,000表示を超えている。",
      "このバズが刺さった理由は **Technology Decision Fatigue（技術選定疲れ）** という、2026年のすべての開発者が感じている痛点を一発で可視化したからだ。SaaS を1つリリースするまでに、Frontend のフレームワーク（React? Vue? Svelte?）、CSS（Tailwind? CSS Modules?）、UI ライブラリ（shadcn/ui? Radix? MUI?）、Backend のランタイム（Node.js? Python?）、フレームワーク（Express? Hono? FastAPI?）、DB（PostgreSQL? MongoDB?）、ORM（Prisma? Drizzle?）、認証（Clerk? Supabase Auth? Better Auth? NextAuth?）、決済（Stripe? Paddle?）、メール（Resend? SendGrid?）、ストレージ（S3? Cloudflare R2? Cloudinary?）、デプロイ（Vercel? Railway? Fly.io?）、DNS（Cloudflare? Namecheap? Spaceship?）、分析、監視、DevOps、検索、セキュリティ…と、少なくとも90以上の個別判断を下す必要がある。しかも各選択は独立ではない。Supabase を選べば Auth・Storage・DB・Realtime が統合されて判断が減るが、Clerk + PlanetScale + Cloudflare R2 を選べば各サービス間の接続をすべて自分で書くことになる。この「組み合わせ爆発」が、特に個人開発者やスタートアップの初期段階で深刻なボトルネックになっている。",
      "Vibe Coding 時代の開発者はこの選定作業を AI に委ねたいと考える。実際に Claude Code や Cursor に「SaaS のボイラープレートを作って」と指示すると、AI は驚くほど一貫したスタックを選ぶ。筆者の検証では、Claude Code（Opus 4.6）に10回同じ指示を出した結果、8回が **Next.js 14+ App Router / TypeScript / Tailwind CSS / shadcn/ui** のフロントエンドを選択した。バックエンドは Next.js の API Routes または Route Handlers を同一リポジトリ内で使い、DB は **Supabase**（PostgreSQL + Auth + Storage 統合）、ORM は **Prisma** または **Drizzle**、決済は **Stripe**、デプロイは **Vercel** だった。Cursor でも傾向はほぼ同じで、指定がなければ Next.js + Tailwind に収束する。AI がこの構成を好む理由は4つある。(1) 学習データに最も多いスタックの組み合わせ（GitHub 上の Next.js + Tailwind + Prisma のリポジトリ数は圧倒的）、(2) モノレポで全コードが1箇所にあるため AI がコンテキストを把握しやすい、(3) shadcn/ui はコピー&ペースト型の UI コンポーネント設計で、AI がファイルに直接コードを書けて npm install の副作用が小さい、(4) Vercel + Supabase は設定ファイルが最小限で AI が迷う余地が少ない。",
      "一方で **AI が明らかに苦手とする構成**も存在する。**マイクロサービス + Kubernetes + Terraform** は最たる例で、複数リポジトリにまたがるサービス間の API 契約、Helm チャートの値、Terraform の state 管理を AI が横断的に整合させるのは非常に難しい。**Laravel（PHP）や Django（Python）のサーバーサイドテンプレート**も AI の得意領域ではない。Blade テンプレートや Django テンプレートでは HTML とロジックが混在し、AI は React / Vue の宣言的コンポーネントモデルの方がはるかに高品質なコードを生成する。**自前認証の実装**は最も危険な領域で、セッション管理・CSRF 対策・パスワードハッシュ・OAuth フローの微妙なセキュリティ要件を AI が見落とすリスクが高い。Clerk / Supabase Auth / Better Auth / NextAuth（Auth.js）など実績のある外部サービス・ライブラリに任せるのが鉄則だ。**既存の複雑な DB スキーマに対するマイグレーション**も、AI がカラムの歴史的経緯や暗黙の制約を理解するのは困難で、人間のレビューが不可欠になる。",
      "元のバズ投稿には含まれていなかったが、リプライで繰り返し指摘されたのが **ORM** カテゴリだ。@batubuilds の「Prisma がない」という指摘に投稿者自身が「追加しなきゃ」と即答したように、2026年の SaaS 開発で ORM の選択は避けて通れない。**Prisma** は型安全なクエリとスキーマ駆動のマイグレーションが強みで、AI が生成するコードとの相性が極めて良い（型情報から AI が正しいクエリを推論できる）。一方 **Drizzle ORM** は SQL に近い記法で軽量・高速、エッジランタイム（Cloudflare Workers 等）との互換性が高い。AI のコード生成品質は Prisma の方がやや上だが（学習データの量の差）、Drizzle はバンドルサイズが小さくエッジ環境で有利。認証カテゴリでも **Better Auth**（@McSons1 指摘）が急浮上しており、NextAuth（Auth.js）のフレームワーク非依存版として Hono / Express / SvelteKit でも使える柔軟性が評価されている。ストレージでは **Cloudinary**（@hanzaderehh 提案）が画像・動画の変換 API を内蔵しており、S3 + 変換パイプラインを自前構築する手間を省ける。",
      "ではカテゴリ別に、AI コーディングツールとの相性を加味した2026年の実務的な選定指針をまとめる。**Frontend**: Next.js App Router + Tailwind CSS + shadcn/ui が AI との相性で頭一つ抜けている。Vue を使いたいなら Nuxt 3 が次点。React を選ぶ限り AI の恩恵は最大化される。**Backend**: Next.js の API Routes でフロントと同一リポにするのが最もシンプル。API が複雑化するなら **Hono**（@rohiddev のスタックでも採用）が軽量・高速で Cloudflare Workers との相性が良い。Python なら FastAPI 一択。**DB + ORM**: Supabase（PostgreSQL）+ Prisma が安定択。エッジ重視なら Drizzle + Neon（サーバーレス Postgres）。**認証**: 個人開発なら Supabase Auth（無料枠が大きい）、チーム開発なら Clerk（管理 UI・Webhook・組織機能が充実）、フレームワーク非依存なら Better Auth。自前実装は絶対に避ける。**決済**: Stripe が AI のコード生成品質で圧倒的（Webhook ハンドラ、顧客ポータル、サブスク管理のコード例が豊富）。EU の税務を自動処理したいなら Paddle が代替。**メール**: Resend + React Email の組み合わせは JSX でメールテンプレートを構築でき、AI が書きやすい。トランザクションメール量が多いなら Amazon SES がコスト面で有利。**デプロイ**: Next.js なら Vercel（最適化済み）、Docker が必要なら Railway、エッジ最優先なら Cloudflare Pages + Workers。**ストレージ**: Supabase Storage か Cloudflare R2（S3 互換・エグレス無料）。画像変換が必要なら Cloudinary。",
      "AI 時代のスタック選定で最も重要な原則は「**AI に説明しやすい構成**」を選ぶことだ。具体的には、(1) **モノレポ**で全コードを1箇所に置く（AI がプロジェクト全体のコンテキストを把握できる）、(2) **TypeScript を全面採用**する（型情報が AI の推論精度を直接向上させる）、(3) **統合型サービス**（Supabase、Vercel）でボイラープレートを最小化する、(4) **CLAUDE.md / AGENTS.md / .cursorrules** にスタック構成・コーディング規約・ディレクトリ構造を明記する。最後の点が最も見落とされがちだが効果は大きい。「ORM は Drizzle を使う」「認証は Supabase Auth を使う」「テストは Vitest で書く」と明示するだけで、AI が毎回異なるライブラリを提案してくる問題を防げる。@hridoyreh のツリーが90以上の選択肢を並べたことで可視化された複雑さは現実だが、AI に得意な構成を選んで設定ファイルで制約を伝えれば、1人でもプロダクションレベルの SaaS を構築できる。選定に正解はないが、「AI が生産性を発揮できるか」は2026年において無視できない選定軸になっている。",
      "注意: 本稿で挙げたツール・サービスは執筆時点（2026年3月）の情報に基づく。料金体系・無料枠・機能は頻繁に変更されるため、導入前に各サービスの公式サイトで最新情報を確認すること。また、AI が生成した認証・決済・セキュリティ関連のコードは必ず人間がレビューすること。特に Stripe の Webhook 署名検証や Supabase の RLS ポリシーは、AI の生成コードにバグがあると本番で金銭的・セキュリティ上の被害に直結する。"
    ],
    "date": "2026-03-30",
    "author": "AI News 編集部",
    "readTime": "15分",
    "tags": ["SaaS", "技術選定", "Next.js", "Supabase", "Stripe", "Prisma", "AI開発", "スタック", "Vibe Coding"],
    "tables": [
      {
        "title": "SaaS スタック 18カテゴリ — AI との相性評価",
        "headers": ["カテゴリ", "AI 推奨構成（2026年）", "AI 相性", "選定のポイント"],
        "rows": [
          ["Frontend", "Next.js + Tailwind + shadcn/ui", "◎", "AI のコード生成品質が最も高い組み合わせ。Vue なら Nuxt 3"],
          ["Backend", "Next.js API Routes / Hono", "◎", "フロントと同一リポで AI がコンテキスト把握しやすい。Python なら FastAPI"],
          ["Database", "Supabase (PostgreSQL + pgvector)", "◎", "Auth・Storage 統合で接続コード最小。エッジなら Neon"],
          ["ORM", "Prisma / Drizzle", "◎", "Prisma は型安全で AI 推論精度高。Drizzle はエッジ向き軽量"],
          ["Auth", "Clerk / Supabase Auth / Better Auth", "◎", "自前実装は AI に任せない。フレームワーク非依存なら Better Auth"],
          ["Payments", "Stripe", "◎", "学習データ量が圧倒的。Webhook 処理も AI が書ける。EU 税務なら Paddle"],
          ["Emails", "Resend + React Email", "○", "JSX でメール構築。大量送信なら Amazon SES がコスト有利"],
          ["Storage", "Supabase Storage / Cloudflare R2", "○", "S3 互換 API。画像変換が必要なら Cloudinary"],
          ["Deployment", "Vercel / Railway", "◎", "Next.js なら Vercel 最適。Docker なら Railway。エッジなら Cloudflare"],
          ["DNS", "Cloudflare", "○", "無料 CDN + DNS + WAF のオールインワン"],
          ["Analytics", "PostHog / Plausible", "○", "プライバシー重視。PostHog は機能分析・セッションリプレイも"],
          ["Monitoring", "Sentry + UptimeRobot", "○", "Sentry SDK は AI が自動設定可能"],
          ["DevOps", "GitHub Actions + Docker", "△", "CI/CD 設定は AI が書けるが検証が必要"],
          ["Search", "Meilisearch / Typesense", "○", "セルフホスト可。Algolia は高機能だが高額"],
          ["AI Integration", "Anthropic API / OpenAI API", "◎", "SDK が充実。MCP でツール連携。Vercel AI SDK で抽象化"],
          ["Integrations", "n8n / Webhooks", "△", "ノーコード部分は AI の管轄外。Webhook 受信側は AI が書ける"],
          ["Security", "Cloudflare WAF + Rate Limiting", "△", "設定は AI が書けるがレビュー必須。RLS ポリシーは要注意"],
          ["Marketing", "Search Console + PostHog", "○", "SEO メタタグ・OG 画像は AI が自動生成可能"],
          ["Support", "Crisp / Intercom", "△", "ウィジェット埋め込みは AI 可、運用設計は人間"]
        ]
      }
    ],
    "primarySources": [
      { "title": "@hridoyreh SaaS Stack ツリー（39万表示）", "site": "X", "url": "https://x.com/hridoyreh" },
      { "title": "7 AI Tools That Changed Developer Workflow (March 2026)", "site": "Build Fast with AI", "url": "https://www.buildfastwithai.com/blogs/ai-tools-developers-march-2026" },
      { "title": "AI dev tool power rankings & comparison [March 2026]", "site": "LogRocket Blog", "url": "https://blog.logrocket.com/ai-dev-tool-power-rankings/" }
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

export const SITE_NAME = "AI News";
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
