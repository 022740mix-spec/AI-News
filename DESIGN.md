# DESIGN.md — AI News デザインシステム

## 1. Visual Theme & Atmosphere

ダークモードを基調とした「テック・ニュースルーム」の雰囲気。深い紺色の背景に、青とシアンのアクセントが浮かび上がる。情報密度が高くても視覚的に疲れない設計。ライトモードにも完全対応し、白背景に落ち着いたグレーとブルーで構成する。季節ごとにアクセントカラーが変化する遊び心を持つ。

**キーワード**: 情報密度・可読性・テック感・季節感

## 2. Color Palette & Roles

### ダークテーマ（デフォルト）

| Role | Token | Value | 用途 |
|------|-------|-------|------|
| 背景（最深） | `--bg0` | `#050810` | ページ全体の背景 |
| 背景（セカンダリ） | `--bg1` | `#0c1222` | セクション背景 |
| サーフェス | `--surface` | `rgba(17, 24, 39, 0.72)` | ブラー付きパネル |
| カード | `--card` | `rgba(26, 34, 52, 0.85)` | 記事カード |
| テキスト | `--text` | `#f1f5f9` | 本文テキスト |
| テキスト（セカンダリ） | `--text-secondary` | `#cbd5e1` | 補助テキスト |
| ミュート | `--muted` | `#94a3b8` | 無効・日付等 |
| ボーダー | `--border` | `rgba(148, 163, 184, 0.12)` | 区切り線 |
| アクセント | `--accent` | `#3b82f6` | リンク・ボタン・強調 |
| シアン | `--cyan` | `#22d3ee` | グラデーション終点 |
| アクセント（薄） | `--accent-dim` | `rgba(59, 130, 246, 0.18)` | ホバー背景 |

### ライトテーマ

| Role | Token | Value |
|------|-------|-------|
| 背景 | `--bg0` | `#ffffff` |
| 背景（セカンダリ） | `--bg1` | `#fafafa` |
| テキスト | `--text` | `#18181b` |
| テキスト（セカンダリ） | `--text-secondary` | `#3f3f46` |
| アクセント | `--accent` | `#2563eb` |
| ボーダー | `--border` | `rgba(0, 0, 0, 0.08)` |

### 季節アクセントカラー

| 季節 | Primary | Secondary |
|------|---------|-----------|
| 通常（青） | `#3b82f6` | `#22d3ee` |
| 春（桜） | `#ec4899` | `#f472b6` |
| 夏（緑） | `#22c55e` | `#4ade80` |
| 秋（橙） | `#f97316` | `#fb923c` |
| 冬（紫） | `#8b5cf6` | `#a78bfa` |

### セマンティックカラー

| 用途 | Value |
|------|-------|
| 星評価 | `#f59e0b`（アンバー） |
| 成功 | `#1db954`（グリーン） |
| エラー・警告 | `#c0392b`（レッド） |
| Twitter/X | `#1d9bf0` |

## 3. Typography Rules

### フォントファミリー

```
本文: -apple-system, BlinkMacSystemFont, "Segoe UI", "Hiragino Kaku Gothic ProN", "Noto Sans JP", system-ui, sans-serif
コード: "SF Mono", "Cascadia Code", "Fira Code", Consolas, monospace
```

日本語と英語の混在を前提にシステムフォントを使用。カスタムフォントは読み込まない。

### タイプスケール

| Token | Size | 用途 |
|-------|------|------|
| `--text-xs` | 0.65rem | バッジ・微小テキスト |
| `--text-sm` | 0.75rem | キャプション・日付 |
| `--text-base` | 0.875rem | 本文テキスト |
| `--text-md` | 1rem | カード見出し |
| `--text-lg` | 1.15rem | セクション見出し |
| `--text-xl` | 1.35rem | ページ見出し |
| `--text-2xl` | 1.65rem | ヒーロー見出し |
| `--text-3xl` | 2rem | 特大見出し |

### フォントウェイト

- Regular: 400（本文）
- Medium: 500（カード見出し）
- Semibold: 600（セクション見出し）
- Bold: 700（ページタイトル）
- Extrabold: 800（ヒーロー）

### 行間

- タイト: 1.3〜1.45（見出し）
- 標準: 1.55〜1.6（本文）
- ゆったり: 1.7〜1.9（長文記事）

## 4. Component Stylings

### カード（`.card-article`）

```
背景: var(--card)
ボーダー: 1px solid var(--border)
角丸: var(--radius-md) = 12px
パディング: 1rem〜1.5rem
ホバー: translateY(-3px) + shadow-glow
```

### ボタン

```
ベース: border 1px solid var(--border), 角丸 var(--radius-sm) = 8px
プライマリ: 背景 var(--accent), テキスト白
アイコン: 2.75rem × 2.75rem の正方形
トランジション: 0.2s cubic-bezier(0.4, 0, 0.2, 1)
```

### タグ（`.tag-chip`）

```
角丸: 999px（ピル型）
パディング: 0.35rem 0.7rem
最小高さ: 2rem
背景: 半透明アクセント
```

### ナビゲーションタブ（`.filter-tab`）

```
アクティブ: 下ボーダー 2px solid var(--accent)
テキスト色: var(--accent)
非アクティブ: var(--muted)
```

### テーブル

```
ヘッダー背景: color-mix(in srgb, var(--accent) 8%, var(--card-solid))
行ホバー: var(--accent-dim)
ボーダー: collapse
```

### 入力フィールド

```
パディング: 0.65rem 0.85rem 0.65rem 2.5rem（左にアイコンスペース）
フォーカス: border-color var(--accent), box-shadow 0 0 0 3px var(--accent-dim)
```

## 5. Layout Principles

### コンテナ

- 最大幅: 1400px
- パディング: 1rem（デスクトップ）→ 0.5rem（モバイル）

### グリッドシステム

```
記事一覧: grid-template-columns: repeat(auto-fill, minmax(268px, 1fr))
ホームカード: 4列（デスクトップ）→ 2列（タブレット）→ 1列（モバイル）
ナビカード: 5列 → 3列 → 2列
```

### スペーシング（8px ベース）

| Token | Value |
|-------|-------|
| `--space-1` | 0.25rem (4px) |
| `--space-2` | 0.5rem (8px) |
| `--space-3` | 0.75rem (12px) |
| `--space-4` | 1rem (16px) |
| `--space-5` | 1.5rem (24px) |
| `--space-6` | 2rem (32px) |
| `--space-7` | 3rem (48px) |
| `--space-8` | 4rem (64px) |

## 6. Depth & Elevation

| Token | Value | 用途 |
|-------|-------|------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.2)` | 微小な浮き |
| `--shadow-md` | `0 8px 24px rgba(0,0,0,0.35)` | カード・パネル |
| `--shadow-glow` | `0 0 40px rgba(59,130,246,0.12)` | アクセントグロー |

グラスモーフィズムを多用: `backdrop-filter: blur(8px〜14px)` + 半透明背景

## 7. Do's and Don'ts

**Do:**
- CSS カスタムプロパティ（`var(--xxx)`）を必ず使う。ハードコードしない
- ダーク/ライト両テーマで表示を確認する
- 日本語テキストで行間・折り返しを検証する
- ホバー・フォーカスのインタラクションを必ず実装する
- `cubic-bezier(0.4, 0, 0.2, 1)` のイージングを統一して使う

**Don't:**
- カスタムフォントを追加で読み込まない（システムフォントを維持）
- `border-radius` を直接指定しない（`--radius-*` トークンを使う）
- 影を3段階以上重ねない（`shadow-sm` / `shadow-md` / `shadow-glow` で完結）
- ライトモードで `#000000` の純黒テキストを使わない（`--text: #18181b` を使う）
- アニメーションの duration を 0.3s 以上にしない（素早さを維持）

## 8. Responsive Behavior

| ブレークポイント | 変更内容 |
|----------------|----------|
| 1200px 以下 | 装飾要素を非表示 |
| 900px 以下 | サイドバー非表示、グリッド列を削減 |
| 720px 以下 | ヒーローを1カラムに |
| 560px 以下 | 検索バー・ソート非表示、フォント縮小 |
| 400px 以下 | 記事グリッド1カラム |

流体タイポグラフィ: `clamp()` を使用
- サイトタイトル: `clamp(1.1rem, 2vw, 2rem)`
- ヒーロー見出し: `clamp(1.15rem, 2.8vw, 1.65rem)`

## 9. Agent Prompt Guide

AI エージェントがこのデザインシステムに従って UI を生成する際の指針:

- **色**: 必ず `var(--xxx)` トークンを使う。16進値を直書きしない
- **タイポグラフィ**: `--text-*` スケールから選ぶ。中間値を作らない
- **スペーシング**: `--space-*` トークンを使う。任意の margin/padding を避ける
- **カード**: 角丸 `--radius-md`、ボーダー `var(--border)`、ホバーで `translateY(-3px)`
- **ボタン**: アクション系は `--accent` 背景、補助系はボーダーのみ
- **レスポンシブ**: モバイルファーストで書き、900px / 560px で分岐
- **アニメーション**: `transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1)` を標準とする
- **アクセシビリティ**: フォーカス時に `outline: 2px solid var(--accent); outline-offset: 2px`
