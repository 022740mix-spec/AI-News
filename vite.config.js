import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    // SVG などを data: URL に埋め込まずファイル出力する（img の data: ブロック環境・キャッシュ調査の回避）
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: {
          "data-articles-meta": ["./src/data/articlesMeta.js"],
          // 本文は掲載月ごとの articlesBody-YYYY-MM.js を loadArticleBody.js が
          // 動的に読み込む。manualChunks に入れると1チャンクに束ね直されて
          // 分割が無効になるため、ここには列挙しない。
          "data-guide": ["./src/data/vibeCodingGuide.js"],
        },
      },
    },
  },
})
