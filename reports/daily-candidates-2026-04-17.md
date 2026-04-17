# デイリーニュース候補 — 2026-04-17

調査対象期間: 2026-04-15 〜 2026-04-17（既存記事は4/14分までカバー済み）

## 既存記事との重複チェック結果

以下のトピックは既に記事化済みのため除外:
- Stanford AI Index 2026（4/13、id: `stanford-hai-ai-index-2026-china-transparency-2026`）
- Claude 性能低下バックラッシュ（4/13、id: `anthropic-claude-performance-decline-effort-backlash-2026`）
- GPT-5.4-Cyber（4/14、id: `openai-gpt-54-cyber-tac-cybersecurity-2026`）
- Claude Code デスクトップ刷新・Routines（4/14、id: `anthropic-claude-code-desktop-redesign-routines-2026`）
- Gemini Personal Intelligence グローバル展開（4/14、id: `google-gemini-personal-intelligence-global-2026`）
- Claude 画面を見てもらう4つの方法（4/14、id: `claude-screen-viewing-4-methods-comparison-2026`）
- 週刊まとめ 4/6〜4/12（id: `overview-2026-week-apr06`）

## 新規候補（未記事化）

### 軸1: 速報（主要プレイヤー）

#### 1. 【最優先】Anthropic が Claude Opus 4.7 を正式リリース（4/16）
- **type**: `news` / category: `model`
- **要点**: Anthropic の最も高性能な一般提供モデル。Claude Platform、Amazon Bedrock、Google Cloud Vertex AI、Microsoft Foundry で同時提供
- **ベンチマーク**: SWE-bench Verified 87.6%（80.8%→）、CursorBench 70%（58%→）、GPQA Diamond 94.2%
- **新機能**:
  - 高解像度ビジョン（2576px / 3.75MP、従来 1568px / 1.15MP）
  - 1M トークンコンテキスト
  - 新トークナイザ（1.0〜1.35倍のトークン消費）
  - Task budgets（エージェント実行の予算制御）
  - 新しい「xhigh」effort レベル
- **価格**: $5/$25 per M tokens（据え置き）
- **ソース**: [AWS Blog](https://aws.amazon.com/blogs/aws/introducing-anthropics-claude-opus-4-7-model-in-amazon-bedrock/), [Claude API Docs](https://platform.claude.com/docs/en/about-claude/models/whats-new-claude-4-7), [Anthropic 公式](https://www.anthropic.com/news)
- **社会的文脈**: 4/13 に報じられた「Claude 性能低下バックラッシュ」（既存記事）の直後のメジャーアップデート。effort 設定の議論と合わせて読むと、Anthropic が品質面のプレッシャーに応えた形

#### 2. OpenAI が Agents SDK を大幅アップデート（4月中旬）
- **type**: `news` / category: `product`
- **要点**: モデルネイティブハーネス + ネイティブサンドボックス実行。設定可能なメモリ、標準化された統合、ポータブルワークスペース、組み込みスナップショット
- **焦点**: エージェント実行の安全性と再現性に特化。Claude Code Routines の対抗軸
- **ソース**: 現在調査中（OpenAI 公式ブログ・Release Notes を要精査）
- **推奨**: 速報として軽めの扱い、または Routines 記事との比較セクションに追記も検討

#### 3. Google Skills in Chrome（4/14）
- **type**: `news` / category: `product`
- **要点**: Gemini in Chrome に「Skills」機能を導入。`/` コマンドでプロンプトをワンクリック呼び出し
- **特徴**:
  - ブラウザのタブコンテキストで動作
  - プリビルド Skills ライブラリ
  - カレンダー追加・メール送信などは確認ダイアログ
- **対象**: Mac/Windows/ChromeOS、英語-US
- **ソース**: [Google Blog](https://blog.google/products-and-platforms/products/chrome/skills-in-chrome/), [9to5Google](https://9to5google.com/2026/04/14/gemini-in-chrome-skills/), [TechCrunch](https://techcrunch.com/2026/04/14/google-adds-ai-skills-to-chrome-to-help-you-save-favorite-workflows/)
- **備考**: 4/14 の発表だが、既存記事でカバーされていない。Claude Agent Skills との対比も面白い

### 軸2: 発掘（新興・OSS・個人開発）

#### 4. Mozilla が Thunderbolt を発表 — 自己ホスト型オープンソース AI クライアント（4/16）
- **type**: `news` / category: `product`
- **要点**: Microsoft Copilot / ChatGPT Enterprise / Claude Enterprise への対抗。データ主権型エンタープライズ AI
- **特徴**:
  - オープンソース、自己ホスト可能
  - マルチプラットフォーム: Web・Linux・macOS・Windows・iOS・Android
  - 任意のモデル選択（商用・OSS・ローカル）
  - deepset Haystack エージェントフレームワークを統合
  - 同梱モデル: Mozilla-M7（13B、Llama 3 ベース、GPQA 92%）
- **ソース**: [Phoronix](https://www.phoronix.com/news/Mozilla-Thunderbolt), [The Register](https://www.theregister.com/2026/04/16/mozilla_thunderbolt_enterprise_ai_client/), [OMG! Ubuntu](https://www.omgubuntu.co.uk/2026/04/mozilla-thunderbolt-ai-client)
- **社会的文脈**: EU の個人情報保護強化とも親和性の高い「データ主権」路線。日本の個人情報保護法改正（既存記事）と対比すると興味深い

#### 5. Resolve AI — インシデント対応エージェント、$190M 調達（4/16）
- **type**: `news` / category: `product`
- **要点**: ソフトウェア「オペレーション」特化のエージェント。ログ・メトリクス・トレース・変更履歴を横断してインシデント調査
- **顧客**: Coinbase、DoorDash、MSCI、Salesforce、Zscaler
- **ステータス**: ステルス脱出18か月で $190M 調達
- **ソース**: [Tech Startups](https://techstartups.com/2026/04/16/top-startup-and-tech-funding-news-april-16-2025/)
- **備考**: 「バイブコーディング時代の基幹システム」特集（既存記事）の "午前3時問題" に直接対応するプロダクト。分析記事の続編素材としても有用

### 軸3: 分析（社会的インパクト）

#### 6. Nature: 最高性能の AI エージェントも博士号保有者に半分しか勝てない（4/13 Nature 掲載）
- **type**: `feature` / category: `research` or `regulation`
- **要点**: Stanford HAI の AI Index 2026 の中核調査。AI エージェントの複雑タスクでの実力が「期待より遥かに低い」
- **含意**: エージェントブームへの冷水。科学研究での AI 採用は進むが、生産性向上のエビデンスは乏しい
- **ソース**: [Nature](https://www.nature.com/articles/d41586-026-01199-z), [CSNSF](https://csnsf.org/human-scientists-trounce-the-best-ai-agents-on-complex-tasks/)
- **既存記事との関係**: Stanford AI Index 2026 記事（既存）で触れられている可能性が高い。重複を避け、エージェント限界論として独立記事化するなら「エージェント幻想」視点で掘り下げる必要あり
- **推奨**: 既存記事を読み直し、エージェント関連の切り口が不足していれば独立記事化、カバー済みなら見送り

#### 7. American Express が Hyper を買収（4/16）
- **type**: `news` / category: `product`（軽め）
- **要点**: Sam Altman 出資の経費管理 AI スタートアップを AmEx が買収
- **含意**: 金融大手 × AI スタートアップの M&A 加速
- **ソース**: [Quiver Quantitative](https://www.quiverquant.com/news/American+Express+Acquires+AI+Startup+Hyper+Backed+by+OpenAI+CEO+Sam+Altman)
- **推奨**: 独立記事化するほどの新規性は薄い。週刊まとめに入れる候補

### その他（優先度低）

- ASML 2026 売上見通し上方修正（AI 投資が牽引） — マクロ経済ニュースのため見送り
- Manycore 香港 IPO（ロボット訓練データ事業へピボット） — 中国市場特化で AI News 読者層への訴求弱め
- Allbirds の AI ピボットで株価 +582% — バブル的材料で本質的 AI ニュースではない

## 3軸バランス案

1日5記事を目標にする場合の推奨構成:

| 枠 | 候補 | 優先度 |
|---|---|---|
| 速報1 | **Claude Opus 4.7 リリース**（#1） | 最優先 |
| 速報2 | **Google Skills in Chrome**（#3） | 高 |
| 発掘1 | **Mozilla Thunderbolt**（#4） | 高 |
| 発掘2 | **Resolve AI $190M 調達**（#5） | 中 |
| 分析 | **エージェントの実力と Nature 論文**（#6、ただし既存記事要確認） | 中 |

代替案:
- #2（OpenAI Agents SDK）を速報枠に入れる場合、Claude Code Routines との比較記事として #3 と統合
- #7（AmEx × Hyper）は単独記事化せず、次週のまとめに含める

## 次のステップ

1. ユーザーに本候補リストを提示し、記事化対象を選定してもらう
2. 選定後、対話セッションで各記事を執筆（Routine では articlesMeta.js / articlesBody.js への編集は禁止）
3. 執筆後、`scripts/daily-update-prompt.md` の Step 3〜5 に従って校閲・コミット
