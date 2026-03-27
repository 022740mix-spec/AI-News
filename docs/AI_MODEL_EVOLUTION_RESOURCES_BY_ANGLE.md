# AIモデル「進化・比較」参照リスト（切り口別）

> **本ドキュメントの位置づけ**  
> **サイト掲載済み**: AI Tool News 記事 ID `ai-model-research-resources-by-angle-2026`（特集・編集カテゴリ）。本ファイルは編集用の同期コピーです。  
> 記事にさらに短く載せる場合は本一覧から **3〜8 件**に絞り、本記事へ誘導すると読みやすくなります。

**最終更新**: 2026-03-28（リンク先の更新は利用時に再確認すること）

---

## 使い方クイックガイド

| やりたいこと | 主に見る切り口（下記セクション） |
|--------------|----------------------------------|
| いつ何が出たか整理したい | 1, 11 |
| 今どれが速い・安い・強いか | 2 |
| 学習規模・計算量で語りたい | 3 |
| OSS・派生・ライセンス | 4 |
| 中国勢だけ追う | 5 |
| ローカル（Ollama 等） | 6 |
| 画像・音声・動画 | 7 |
| 推論特化・エージェント | 8 |
| 産業・政策の文脈 | 9 |
| ベンチの意味を確認 | 10 |

---

## 1. 時系列・系譜（「進化」のストーリー軸）

| リソース | URL | メモ |
|----------|-----|------|
| LifeArchitect.ai — Timeline | https://lifearchitect.ai/timeline/ | LLM 中心の長い年表。別ページに大規模なモデル表あり。 |
| Epoch AI — AI models データ | https://epoch.ai/data/ai-models/ | 規模・計算量などデータ志向。ライセンス CC 系で再利用しやすい。 |
| SPAITIAL — Models timeline | https://spaitial.space/models/ | ビジュアル寄りのタイムライン。 |
| AI History Project（参考） | https://aihistoryproject.org/ | イベント年表系。二次整理として。 |

**一次確認の原則**: 年表サイトは便利だが、**製品名・日付の確定は各社公式の発表・API changelog・モデルカード**で行う。

---

## 2. 実用比較（遅延・価格・品質の横並び）

| リソース | URL | メモ |
|----------|-----|------|
| Artificial Analysis | https://artificialanalysis.ai/ | API/フロンティア比較で参照されやすい。 |
| LMSYS — Chatbot Arena | https://chat.lmsys.org/ | 対戦・投票ベース。**条件・母集団・解釈**に注意。 |

---

## 3. 学習規模・計算量・データ規模（「物量」での進化）

| リソース | URL | メモ |
|----------|-----|------|
| Epoch AI（トップ + インサイト） | https://epoch.ai/ | コンテキスト長トレンド等の短い考察記事もあり。 |
| 各モデル技術レポート | arXiv / 企業 PDF | パラメータ数・トークン数・FLOPs は**定義ゆれ**あり。 |

---

## 4. オープンウェイト・コミュニティ・派生モデル

| リソース | URL | メモ |
|----------|-----|------|
| Hugging Face — Models | https://huggingface.co/models | 权重み・派生の宝庫。 |
| Papers with Code | https://paperswithcode.com/ | 論文・実装・SOTA テーブルの対応付け。 |
| Meta — Llama ブログ | https://ai.meta.com/blog/ | Llama 世代サイクル。 |
| Mistral — News | https://mistral.ai/news/ | 7B / Mixtral 以降の欧州 OSS ストーリー。 |
| Qwen — Blog | https://qwenlm.github.io/blog/ | Qwen2 / 2.5 / 3 系の公式説明。 |

---

## 5. 中国勢（API・OSS＋国内プロダクト混在）

| リソース | URL | メモ |
|----------|-----|------|
| DeepSeek — API ドキュメント | https://api-docs.deepseek.com/ | 価格・ニュース欄でアップデート把握。 |
| Qwen（上記ブログ） | https://qwenlm.github.io/blog/ | 多言語・Coder/Math など枝分かれ。 |
| ModelScope | https://modelscope.cn/ | 国内ホスティング・モデル一覧（アクセス環境に注意）。 |
| Moonshot / Kimi（技術・GitHub） | https://github.com/MoonshotAI | リポジトリ単位で追うのが扱いやすい場合あり。 |
| Z.AI / 智谱（開発者向け） | https://docs.z.ai/ | GLM 系のリリースノート。 |
| ByteDance Seed（ブログ） | https://seed.bytedance.com/en/blog | Seed / 豆包 系の公式ナラティブ。 |

**執筆メモ**: データ所在地・規約・利用制限は**企業読者**では重要。1文でも触れると信頼度が上がる。

---

## 6. ローカル実行・Ollama 周辺（「配布」と「本体進化」は別軸）

| リソース | URL | メモ |
|----------|-----|------|
| Ollama — Model library | https://ollama.com/library | **ランタイム＋パッケージ**。API 最新版と必ずしも一致しない。 |
| llama.cpp | https://github.com/ggerganov/llama.cpp | ローカル推論の実装デファクトの一つ。 |
| vLLM | https://github.com/vllm-project/vllm | サーバ運用・スループット軸。 |
| LM Studio | https://lmstudio.ai/ | GUI でのローカル利用。 |
| MLX（Apple Silicon） | https://github.com/ml-explore/mlx | Apple 向けローカル最適化。 |

**図解のコツ**: 「モデル進化（研究・企業）」と「Ollama＝配布・推論の接着剤」を**二層**で書くと誤解が減る。

---

## 7. マルチモーダル（画像・音声・動画・文書）

| リソース | URL | メモ |
|----------|-----|------|
| Google — Gemini API ドキュメント | https://ai.google.dev/gemini-api/docs | マルチモーダル入力の製品仕様確認に。 |
| OpenAI — Vision / Audio 等ドキュメント | https://platform.openai.com/docs | モデルごとに対応範囲が異なる。 |
| Papers with Code — SOTA | https://paperswithcode.com/sota | タスク別の指標確認。 |

---

## 8. 推論特化・エージェント・ツール呼び出し

| リソース | URL | メモ |
|----------|-----|------|
| OpenAI — Cookbook | https://cookbook.openai.com/ | 関数呼び出し・パターン例。 |
| Anthropic — API ドキュメント | https://docs.anthropic.com/ | ツール利用・プロンプト設計。 |
| Qwen — Agent / tool 言及 | 公式ブログ・GitHub Qwen-Agent | オープン系でのエージェント例。 |

---

## 9. 産業・投資・政策（マクロ）

| リソース | URL | メモ |
|----------|-----|------|
| Stanford — AI Index | https://aiindex.stanford.edu/ | 年次レポート。個別モデルより産業全体。 |

---

## 10. ベンチマークの意味を押さえる（比較記事の作法）

| リソース | URL | メモ |
|----------|-----|------|
| 各ベンチ公式 / リーダーボード | （タスクごとに検索） | MMLU / HumanEval / SWE-bench 等は**条件が命**。 |
| Epoch / Artificial Analysis | 上記 | メソッド・データ出所の説明ページを読む。 |

**鉄則**: 「SOTA」と書くなら **ベンチ名・日付・分割（val/test）・モデル版**のどれかを添える。

---

## 11. 各社・公式 changelog（事実の最終確認用）

記事の日付・モデル ID は、以下を**優先して確認**する。

| 組織 | 参照先（例） |
|------|----------------|
| OpenAI | https://help.openai.com/ （Model release notes） / https://openai.com/news/ |
| Anthropic | https://www.anthropic.com/news |
| Google | https://ai.google.dev/gemini-api/docs/changelog |
| Meta | https://ai.meta.com/blog/ |
| Mistral | https://mistral.ai/news/ |
| DeepSeek | https://api-docs.deepseek.com/ |
| Alibaba Qwen | https://qwenlm.github.io/blog/ |

---

## 記事への載せ方（テンプレ）

**記事末尾（短縮版・8 行以内の例）**

> **さらに調べる（切り口別）**  
> 時系列: LifeArchitect.ai / Epoch AI。  
> 実用比較: Artificial Analysis、Chatbot Arena（解釈注意）。  
> OSS: Hugging Face、Papers with Code。  
> 中国勢: DeepSeek / Qwen / 各社開発者ドキュメント。  
> ローカル: Ollama（配布チャネルである点に注意）。  
> **全カテゴリのリンク一覧**は当サイト付録（本リポジトリ `docs/AI_MODEL_EVOLUTION_RESOURCES_BY_ANGLE.md`）を参照。

---

## ライセンス・再掲載

本ファイルは AI Tool News プロジェクト内の**編集用付録**です。外部公開する場合は、各リンク先の利用規約に従ってください。Epoch 等、データを転載する場合は**元データのライセンス表記**を確認すること。
