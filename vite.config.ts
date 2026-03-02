import {
  fileURLToPath,
  URL,
} from 'node:url'

import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url))
    }
  },
  server: {
    port: 8080,
    strictPort: false,
    open: true
  },
  build: {
    target: 'es2020',
    minify: true,
    reportCompressedSize: true,
    outDir: 'dist'
  }
})
