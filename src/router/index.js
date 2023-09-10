import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ListingPage from '@/views/ListingPage.vue'
import TransactionsPage from '@/views/TransactionsPage.vue'
import ProductPage from '@/views/ProductPage.vue'
import CartPage from '@/views/CartPage.vue'
import FavoritePage from '@/views/FavoritePage.vue'
import SummaryPage from '@/views/SummaryPage.vue'
// import ProductTile from '@/components/productTile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: '/summary',
      name: 'summary',
      component: SummaryPage,
      props: true
    }
  ]
})

export default router
