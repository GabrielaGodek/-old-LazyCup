<script>
import productTile from '@/components/productTile.vue'
import buttonItem from '@/components/buttonItem.vue'
import back from '@/components/backItem.vue'

import { mapStores, mapActions } from 'pinia'
import { useOrdersStore } from '@/store/orders'

import { useRouter } from 'vue-router'
import { ref, reactive } from 'vue'

export default {
  name: 'ProductPage',
  components: {
    productTile,
    buttonItem,
    back
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      coffeeData: reactive([]),
      btnText: ref('Add'),
      btnBuy: ref('Go to cart'),
      backText: ref('Back'),
      isAdded: false
    }
  },
  computed: {
    ...mapStores(useOrdersStore)
  },
  methods: {
    ...mapActions(useOrdersStore, ['addItem']),
    async getSpecCoffee(id) {

      try {
        const response = await fetch(
          `https://nodejs-database.onrender.com/api/v1/coffees${id}`
        )

        if (response.ok) {
          const data = await response.json()
          this.coffeeData = data
        } else {
          const error = response
          throw error
        }
      } catch (error) {
        console.error(error)
      }
    },
    addToCart(cartItem) {
      if (this.isAdded) {
        this.$router.push({ name: 'cart' })
      } else {
        let coffeeConfig = {
          id: cartItem.id,
          amount: 1,
          name: cartItem.name,
          price: cartItem.price,
          salePrice: cartItem.salePrice ? cartItem.salePrice : cartItem.price,
          image: cartItem.image,
          date: new Date().toJSON().slice(0, 10).replace(/-/g, '/')
        }
        this.addItem(coffeeConfig)
        this.isAdded = true
        this.btnText = this.btnBuy
      }
    }
  },

  beforeMount() {
    const router = useRouter()
    const id = Number(router.currentRoute.value.params.id)
    this.getSpecCoffee(id)
  }
}
</script>

<template>
  <section class="wrapper product_page">
    <productTile :coffee="coffeeData" />
    <div class="add_to_cart">
      <back :btn-text="backText" />
      <buttonItem :btn-text="btnText" @click="addToCart(coffeeData)" />
    </div>
  </section>
</template>
