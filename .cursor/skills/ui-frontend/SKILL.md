---
name: ui-frontend
description: UI/フロント担当ロール。カバー画像・図表配置・CSS調整・レスポンシブ対応を担当する。記事の視覚面とサイトのデザイン品質を管理する。
---

# UI/フロント担当 — ビジュアル・レイアウトスキル

## 役割の定義

記事の**視覚的な要素**（画像・図表・レイアウト）と、サイト全体の**CSS・レスポンシブ対応・テーマ**を管理する。

---

## 担当領域

### 1. 記事のビジュアル要素

#### coverImage（カバー画像）

```javascript
coverImage: {
  src: "articles/example.webp",  // public/articles/ に配置
  alt: "画像の説明（アクセシビリティ）",
  caption: "出典: ..."           // 任意
}
```

**画像ルール**:
- フォーマット: WebP 推奨（JPEG/PNG も可）
- サイズ: 幅 1200px 以上、16:9 または 2:1 のアスペクト比
- ファイル名: `articles/{article-id}.webp`（記事IDと対応）
- 権利: 公式素材・CC ライセンス・自作のみ使用可
- `alt` は必須（スクリーンリーダー対応）

#### figures（図表）

```javascript
figures: [
  {
    src: "articles/diagram-example.svg",
    alt: "図の説明",
    caption: "キャプション（任意）",
    afterParagraph: 2  // body[2] の直後に配置（0始まり）
  }
]
```

**配置ルール**:
- `afterParagraph` は参照先の段落のすぐ後に配置
- SVG 推奨（拡大縮小に強い）
- 1記事あたり最大3枚が目安

#### tables（表）

```javascript
tables: [
  {
    afterParagraph: 1,
    caption: "主要モデルの比較",
    headers: ["モデル", "パラメータ", "コンテキスト長", "価格"],
    rows: [
      ["GPT-5.4 mini", "非公開", "128K", "$0.40/1M tokens"],
      ["Claude Opus 4.6", "非公開", "1M", "$15/1M tokens"]
    ]
  }
]
```

### 1.5. 企業ロゴ

`aiCompanies.js` の各企業に `logo` フィールドを追加できる。CompanyCard で企業名の横に表示される。

```javascript
// aiCompanies.js
{
  id: "anthropic",
  logo: "logos/anthropic.svg",  // public/logos/ に配置
  // ...
}
```

ロゴのルール:
- フォーマット: SVG 推奨（32x32px で表示、retina 対応）
- 配置先: `public/logos/{company-id}.svg`
- 権利: 公式プレスキット・ブランドガイドラインで配布されているもののみ使用
- 権利が不明な場合は使わない（ロゴなしでも問題なく表示される）
- ダークモードで見えなくなるロゴ（白背景前提等）は避けるか、CSS で対応

### 2. サイト全体のデザイン

#### デザイントークン（index.css）

変更時は以下のトークンを基準にする:

```css
/* 触ってよいトークン */
--font, --radius-sm/md/lg, --transition

/* テーマ切替 */
[data-theme="light"] { ... }
[data-theme="dark"] { ... }
```

#### レスポンシブ対応

- モバイルファースト（min-width でブレークポイント）
- 画像は `max-width: 100%` で縮小
- テーブルは横スクロール対応（`overflow-x: auto`）

### 3. OG 画像・ソーシャル

- `og.svg`（`public/`）がデフォルトの OG 画像
- 記事固有の OG 画像は `coverImage.src` を使用
- Twitter Card: `summary_large_image`

---

## ワークフロー

1. **構成編集から依頼を受ける**（図表追加の提案、画像の必要性）
2. **素材を準備**（画像作成/取得、SVG 図の作成）
3. **配置を決定**（`afterParagraph`、`coverImage`）
4. **レスポンシブ確認**（`npm run dev` でモバイル/デスクトップ両方確認）
5. **ダークモード確認**（両テーマで視認性を検証）

---

## UI担当の権限と制限

**できること**:
- 画像・図表の作成と配置
- CSS の調整（デザイントークン範囲内）
- レスポンシブ・アクセシビリティの改善
- `coverImage` / `figures` / `tables` フィールドの設定

**できないこと**:
- 本文の書き換え → 構成編集（Editor）
- 記事メタデータの変更 → デスク（Managing Editor）
- `App.jsx` のロジック変更 → 開発タスクとして別途判断

---

## チェックリスト

- [ ] 画像に `alt` テキストがあるか
- [ ] 画像の権利がクリアか
- [ ] ダークモードで画像・図が見えるか
- [ ] モバイル表示で崩れていないか
- [ ] テーブルが横スクロール可能か（データが多い場合）
- [ ] `npm run build` でアセットが正しくバンドルされるか
- [ ] `afterParagraph` の値が本文の段落数以内か
