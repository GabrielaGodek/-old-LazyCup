import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListingPage from '../views/ListingPage.vue'
import ProductPage from '../views/ProductPage.vue'
import CartPage from '../views/CartPage.vue'
// import ProductTile from '../components/productTile.vue'

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
      component: ProductPage
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartPage
    },

  ]
})

export default router
