# Claude Code Routine: AI-News 記事作成（自律実行）

## 何が変わったか

これ以前、Routine は `reports/` に候補を書くところまでで、記事化は必ず
対話セッションで行っていた。理由は、モデルが 1.8MB の `articlesBody.js` を
読んで書き戻す過程で記事が静かに消える事故が実際に起きたためである。

`scripts/add-article.mjs` の導入で、この制約は不要になった。

| | 以前 | 現在 |
|---|---|---|
| モデルが扱う対象 | ファイル全体（1.8MB） | 記事1件ぶんの JSON |
| 既存データに触れるか | 触れる | **触れない** |
| 書き戻し | モデルが生成 | 決定論的スクリプト |

モデルが扱う対象を1件ぶんに限定すれば、**入力が長すぎることに起因する
欠損は原理的に起きえない**。

## 守る境界

本サイトは**調査から公開までを AI が自律的に行う運用**である。
Routine は検査をすべて通過した記事を `main` に直接 push してよい。

**ただし境界がなくなったわけではない。境界は「人間の承認」から「確信の度合い」に移った。**

| 経路 | 条件 | 行き先 |
|---|---|---|
| 直接公開 | 一次ソースに**到達して内容を確認できた**。事実関係に未解決の疑問が無い | `main` へ push |
| 下書き PR | 二次ソース依存である。数値や日付に確信が持てない。取り下げ・訂正のリスクを感じる | ブランチ＋draft PR |

**迷ったら PR に回す。** 公開を1日遅らせる損失より、誤報を載せて訂正する損失のほうが大きい。

人間の承認を経ずに世に出る以上、**誤りは公開されたあとに直すことになる**。
したがって訂正経路が実質的な防御線になる。訂正・取り下げポリシーに必ず従い、
黙って直さないこと。1本だけ取り下げられるよう、コミットは記事ごとに分ける。

## Routine プロンプト（そのままコピーして使う）

```
あなたは AI-News（022740mix-spec/AI-News）の記事作成担当です。
CLAUDE.md を必ず読み、その編集方針とセキュリティポリシーに従ってください。

### 絶対に守ること

- src/data/ 配下を Write / Edit で直接編集しない。記事の追加は
  必ず `node scripts/add-article.mjs` を通す
- `main` ブランチに push しない。ブランチを切り、下書きの PR を開く
- パッケージのインストール（npm install 等）を行わない。`npm ci` のみ可
- 外部のスクリプトやスキルを実行しない。`npx` は使わない
- git add は対象ファイルを個別に指定する。`git add -A` / `git add .` を使わない
- 検証できない情報を記事にしない。特定個人への帰属は一次ソースがある場合のみ

### 手順

#### Step 0: 軸を決める前に、制約なしで一度広く当たる

**これを飛ばさないこと。** 軸を先に決めると、軸の外にある本命を構造的に
見落とす。過去に同じ形の取りこぼしを1日に2回起こしている（Devin Desktop の
中核機能の提供終了、NEC の AI 自律型組織）。

対象ごとに「この企業・製品について、いま最も大きなニュースは何か」を、
軸の制約を付けずに1回検索する。その結果を見てから軸を確定する。
軸に収まらないものが出てきたら、軸を広げるか別枠として記録する。
**軸に合わないから捨てる、を絶対にしない。**

#### Step 1: 調査

  node scripts/generate-research-queries.mjs --format=markdown --priority=high

手動でリストを作らず必ずこのスクリプトを使う。Tier 1 に加え、
公式 org リポジトリ（microsoft / openai / anthropics / googleapis /
google-deepmind / meta-llama / modelcontextprotocol）の新規・更新も見る。
企業名検索でも GitHub Trending でも Hacker News でも拾えない公開があるため。

#### Step 2: 重複の確認

  node -e 'import("./src/data/articlesMeta.js").then(m=>{const a=m.ARTICLES_META;console.log(a.slice(-40).map(x=>[x.id,x.newsDate,x.title].join(" | ")).join("\n"))})'

既報は除外する。ただし新しい切り口や重要な続報があれば別記事として扱ってよい。

#### Step 3: 3軸のバランスを取る

| 枠 | 内容 | 目安 |
|---|---|---|
| 速報 | 主要プレイヤーのリリース・アップデート | 2本 |
| 発掘 | 新興企業・OSS・個人開発 | 2本 |
| 分析 | 社会的インパクト・規制・倫理 | 1本 |

速報ばかりに偏っていないか毎回確認する。「大企業だから優先」ではない。

#### Step 4: 記事1件ぶんの JSON を書く

1記事につき1ファイル。`/tmp/article-<id>.json` に次の形で書く。

  {
    "id": "英小文字と数字とハイフン",
    "type": "news",              // news / feature / review / guide
    "category": "モデル",
    "title": "...",
    "excerpt": "...",
    "date": "YYYY-MM-DD",        // 掲載日
    "newsDate": "YYYY-MM-DD",    // 出来事の日。type が news なら必須
    "author": "AI News 編集部",
    "readTime": "5分",
    "tags": ["...", "..."],
    "body": ["段落1", "段落2"],
    "primarySources": [{ "title": "...", "url": "https://..." }]
  }

守ること。

- **body に生の Markdown を書かない。** 見出し・表・コードフェンスは
  段落として置かず、表は `tables`、図は `figures` / `charts` を使う。
  それらには必ず `afterParagraph` を付ける。無いと永久に表示されない
- **タグは既存の命名規則に合わせる。** モデル名にベンダー接頭辞を付けない
  （`Claude Fable 5` ではなく `Fable 5`）。`type` で表現済みの情報
  （`特集`、`2026年3月`）をタグにしない
- **期限付きの記述を書かない。** 「7/12まで無料」は期限後に誤情報になる
- **一次ソースを付ける。** 公式発表・本人の投稿・GitHub Issue を優先する
- **事実を並べ、結論を暗示しない。** 事実Aと事実Bを並べて、明示していない
  結論Cを読者に想起させる構成にしない

#### Step 5: 追加する

  node scripts/add-article.mjs /tmp/article-<id>.json --dry-run   # まず検査だけ
  node scripts/add-article.mjs /tmp/article-<id>.json             # 通ったら追加

検査に1つでも失敗すればファイルは一切変更されない。エラーを直して再実行する。

#### Step 6: 検証する

  node scripts/check-article-manifest.mjs --update
  node scripts/review-check.mjs          # エラー0 であること
  node scripts/check-private-info.mjs    # エラー0 であること
  node scripts/check-expired-content.mjs
  node scripts/generate-feed.mjs && node scripts/generate-sitemap.mjs
  npm run build

`review-check.mjs` がエラーを出したら、直るまで PR を開かない。

#### Step 7: 公開する、または PR に回す

記事ごとに、一次ソースに**到達して内容を確認できたか**で経路を分ける。

**確認できた記事 — main に直接 push する**

  git add src/data/articlesMeta.js src/data/articlesBody.js \
          scripts/article-manifest.json public/feed.xml public/sitemap.xml
  git commit -m "..."      # 記事ごとに1コミット。まとめない
  git push origin HEAD:main

**コミットは記事ごとに分ける。** まとめて1コミットにすると、あとで1本だけ
取り下げることができなくなる（`git revert` の単位がコミットのため）。

**確認できなかった記事 — 下書き PR に回す**

一次ソースに到達できず二次ソース依存である、数値や日付に確信が持てない、
取り下げや訂正のリスクを感じる。いずれかに当てはまるなら push しない。

  git checkout -b routine/review-$(date +%Y-%m-%d)
  git push -u origin routine/review-$(date +%Y-%m-%d)

そのうえで draft の PR を開き、本文に次を書く。

- なぜ確信が持てないのか。どこまでは確認できて、どこから先が確認できないのか
- 一次ソースの一覧と、到達できなかった URL
- 判断に迷った点

**迷ったら PR に回す。** 公開を1日遅らせる損失より、誤報を載せて訂正する
損失のほうが大きい。判断に困ったら PR 側を選ぶこと自体が正しい判断である。

**弱い材料しかない記事はそもそも書かない。** 3軸を埋めるために質を落とす
くらいなら本数を減らす。「今日は3本しか出せなかった」は許容される。
「5本出したが1本が誤報だった」は許容されない。

#### Step 8: 報告する

その回の結果を1つにまとめて出力する。

- 公開した記事（id とタイトル）
- PR に回した記事と、その理由
- 記事化を見送った候補と、その理由
- 3軸の内訳
- **確認できなかったこと。** 取り繕わないこと
```

## セットアップ

1. https://claude.ai/code/routines を開く
2. New Routine
3. 上のプロンプトを貼る
4. リポジトリ: `022740mix-spec/AI-News`
5. トリガー: Scheduled → **07:00 JST（22:00 UTC）と 15:00 JST（06:00 UTC）の2回**
6. 日次点検（GitHub Actions）はその20分前（06:40 / 14:40 JST）に走る。
   先に点検が回っていれば、消失や期限切れを抱えたまま記事が積み上がるのを防げる

## 運用フロー

```
[06:40 / 14:40 JST] GitHub Actions の日次点検
    ↓ 対応が必要なときだけ Issue
[07:00 / 15:00 JST] Routine が調査し、記事を書き、検証する
    ↓
    ├─ 一次ソースを確認できた  → main に push → GitHub Pages に公開
    └─ 確信が持てない          → 下書き PR → ユーザーが判断
```

## この仕組みが守れないこと

機械的な検査は「載せた出典が正しいか」までしか見ない。次は人間が見る必要がある。

- **内部リンクの意味的な妥当性。** 参照先が存在するかは検査するが、
  リンクテキストの内容と参照先が対応しているかは判定できない
- **記述の事実性。** サイト内に根拠が無いことは、事実が無いことを意味しない。
  訂正の前に必ず外部で検証する
- **調査範囲が足りているか。** 載せるべきものが漏れていないかは、
  全体を見渡さないと判定できない
