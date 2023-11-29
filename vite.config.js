import { fileURLToPath, URL } from 'node:url'
import { createProxy } from 'http-proxy-middleware';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  css: {
    scss: {
      additionalData: `@import "~@/variables.scss";`
    },
    sourceMap: true,
    loaderOptions: {
      css: {
        modules: {
          auto: () => true
        }
      }
    }
  },
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
      '^/api/.*': {
        target: 'https://nodejs-database.onrender.com/api/v1/coffees/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})
