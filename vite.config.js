import { fileURLToPath, URL } from 'node:url'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import visualizer from 'rollup-plugin-visualizer';
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  // assetsInclude: ['**/*.ttf'],
  
  test: {
    global: true,
    environment: "jsdom",
  },
  plugins: [
    vue(), 
    ViteImageOptimizer(), 
    // visualizer({open: true}), 
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      manifest: {
        theme_color: "#e3d3c4",
        icons: [
          {
            src: '/mstile-144x144.png',
            sizes: '144x144',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg}']
      }
  })],
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
