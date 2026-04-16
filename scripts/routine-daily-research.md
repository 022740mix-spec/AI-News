# Claude Code Routine: AI-News デイリー調査（半自動）

## 目的

毎日の AI ニュース候補を自動で収集し、`reports/` にマークダウンレポートとして保存する。
**記事データファイル（articlesMeta.js / articlesBody.js）は一切編集しない。**
記事の実際の作成はユーザーが対話セッションで行う。

## Routine プロンプト（以下をそのままコピーして使用）

```
あなたは AI-News（https://github.com/022740mix-spec/AI-News）の調査担当AIです。
CLAUDE.md の指示に従い、本日のニュース候補を調査して reports/ にレポートを保存してください。

### 絶対に守ること（安全ルール）
- src/data/ 配下のファイルは **絶対に編集しない**（Read のみ許可）
- Write / Edit ツールで触れるのは reports/ ディレクトリ内のファイルのみ
- npm install 等のパッケージ操作は行わない
- git push は reports/ の変更のみ

### 手順

#### Step 1: 調査クエリの生成
```bash
node scripts/generate-research-queries.mjs --format=markdown --priority=high
```
このスクリプトの出力から Tier 1 のクエリを取得する。

#### Step 2: 既存記事の確認
articlesMeta.js を Read で読み、直近20件の記事ID・タイトル・newsDate を取得する。
これらと重複するニュースは候補から除外する。

#### Step 3: Web 検索
Tier 1 企業・プロダクトの検索クエリを WebSearch で実行する。
特に以下を重点的に調べる:
- 新モデルリリース、バージョンアップ
- プロダクトアップデート、料金変更
- 重要な提携・買収・資金調達
- GitHub Trending の AI 関連プロジェクト
- Hacker News の AI 関連トップストーリー

#### Step 4: ニュース候補リストの作成
以下の形式で候補を整理する:

| # | 日付 | タイトル案 | 企業/プロジェクト | 軸（速報/発掘/分析） | 一次ソースURL |
|---|------|-----------|------------------|---------------------|-------------|

3軸バランスを確認する:
- 速報（主要プレイヤー）: 2本目標
- 発掘（新興・OSS）: 2本目標
- 分析（社会的インパクト）: 1本目標

#### Step 5: レポートの保存
以下のパスに保存する:
`reports/daily-candidates-YYYY-MM-DD.md`

レポートには以下を含める:
1. 調査日時
2. 調査した検索クエリ数
3. 候補一覧テーブル（上記形式）
4. 各候補の概要（3〜5行）と一次ソースURL
5. 既存記事との重複チェック結果
6. 3軸バランスの自己評価

#### Step 6: コミット＆プッシュ
```bash
git add reports/daily-candidates-YYYY-MM-DD.md
git commit -m "research: YYYY-MM-DD のニュース候補（N件）"
git push
```
```

## セットアップ手順

1. https://claude.ai/code/routines にアクセス
2. 「New Routine」をクリック
3. 上記プロンプトを貼り付け
4. リポジトリ: `022740mix-spec/AI-News` を接続
5. トリガー: Scheduled → 毎日 9:00 JST（UTC 0:00）
6. モデル: Claude Sonnet 4.6（コスト効率重視）または Opus 4.6（品質重視）
7. 保存

## 運用フロー

```
[毎朝 9:00] Routine が自動実行
    ↓
[reports/daily-candidates-YYYY-MM-DD.md] が生成・プッシュ
    ↓
[ユーザーがレポートを確認] 候補を選択・修正
    ↓
[対話セッション] 「今日の候補から記事を作って」で記事化
```
