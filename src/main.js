import '@/scss/style.css'
// import '@/scss/style.css.map'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { sitemapMiddleware } from 'sitemapMiddleware'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"


import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia();

pinia.use(piniaPluginPersistedState)

app.use(pinia)
app.use(router)

app.mount('#app')

// app.get('/sitemap.xml', sitemapMiddleware())
