import { fileURLToPath, URL } from 'node:url'
import { createProxy } from 'http-proxy-middleware';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    global: true,
    environment: "jsdom",
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://nodejs-database.onrender.com',
        changeOrigin: true,
        pathRewrite: { '^/api': '/api/v1' }
      }
    }
  }
})
