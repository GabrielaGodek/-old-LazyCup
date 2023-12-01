import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import("@/views/HomeView.vue")
const ListingPage = () => import("@/views/ListingPage.vue")
const TransactionsPage = () => import("@/views/TransactionsPage.vue")
const CartPage = () => import("@/views/CartPage.vue")
const FavoritePage = () => import("@/views/FavoritePage.vue")
const SummaryPage = () => import("@/views/SummaryPage.vue")
const ProductPage = () => import("@/views/ProductPage.vue")

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
      path: '/summary/',
      name: 'summary',
      component: SummaryPage,
      props: true
    }
  ]
})

export default router
