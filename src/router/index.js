// import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ListingPage from '@/views/ListingPage.vue'
import TransactionsPage from '@/views/TransactionsPage.vue'
import ProductPage from '@/views/ProductPage.vue'
import CartPage from '@/views/CartPage.vue'
import FavoritePage from '@/views/FavoritePage.vue'
import SummaryPage from '@/views/SummaryPage.vue'
// // import ProductTile from '@/components/productTile.vue'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView
//     },
//     {
//       path: '/products',
//       name: 'products',
//       component: ListingPage
//     },
//     {
//       path: '/coffee/:id',
//       name: 'coffee',
//       component: ProductPage,
//       props: true
//     },
//     {
//       path: '/transactions',
//       name: 'transactions',
//       component: TransactionsPage
//     },
//     {
//       path: '/cart',
//       name: 'cart',
//       component: CartPage
//     },
//     {
//       path: '/favorite',
//       name: 'favorite',
//       component: FavoritePage
//     },
//     {
//       path: '/summary/',
//       name: 'summary',
//       component: SummaryPage,
//       props: true
//     }
//   ]
// })

// export default router

// import Vue from 'vue'
// import Router from 'vue-router'
// import App from './App.vue'
// import { routes } from './routes.js'

// Vue.use(Router);
// const router = new Router({
//     mode: 'history',
//     base: import.meta.env.BASE_URL,
//     routes,
// });

// new Vue({ router, render: h => h(App) }).$mount('#app');

// import VueRouter from 'vue-router'

// export const router = VueRouter({
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView
//     },
//     {
//       path: '/products',
//       name: 'products',
//       component: ListingPage
//     },
//     {
//       path: '/coffee/:id',
//       name: 'coffee',
//       component: ProductPage,
//       props: true
//     },
//     {
//       path: '/transactions',
//       name: 'transactions',
//       component: TransactionsPage
//     },
//     {
//       path: '/cart',
//       name: 'cart',
//       component: CartPage
//     },
//     {
//       path: '/favorite',
//       name: 'favorite',
//       component: FavoritePage
//     },
//     {
//       path: '/summary/',
//       name: 'summary',
//       component: SummaryPage,
//       props: true
//     }
//   ]
// })

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: ListingPage
  },
  {
    path: '/coffee/:id',
    name: 'coffee',
    component: ProductPage,
    props: true
  },
  {
    path: '/transactions',
    name: 'transactions',
    component: TransactionsPage
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage
  },
  {
    path: '/favorite',
    name: 'favorite',
    component: FavoritePage
  },
  {
    path: '/summary/',
    name: 'summary',
    component: SummaryPage,
    props: true
  }
  // Dodaj inne trasy
]

const router = new VueRouter({
  mode: 'history', // lub 'hash' zależnie od preferencji
  routes
})

export default router
