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
          "data-articles-body": ["./src/data/articlesBody.js"],
          "data-articles-compat": ["./src/data/aiToolsData.js"],
          "data-guide": ["./src/data/vibeCodingGuide.js"],
        },
      },
    },
  },
})
