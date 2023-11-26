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
   async getSpecCoffee(array, id) {
      try {
        let item = await array.find(element => element.id === id)
        this.coffeeData = item
        
      } catch (error) {
        console.error('Error fetching coffee data from Pinia:', error)
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
          salePrice: cartItem.salePrice || cartItem.price,
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
    const id = router.currentRoute.value.params.id
    this.getSpecCoffee(this.ordersStore.coffees, id)
  }
}

</script>

<template>
  <section class="wrapper product_page">
    <template v-if="coffeeData && coffeeData.hasOwnProperty('name')">
      <productTile :coffee="coffeeData" />
      <div class="add_to_cart">
        <back :btn-text="backText" />
        <buttonItem :btn-text="btnText" @click="addToCart(coffeeData)" />
      </div>
    </template>
    <template v-else>
      There is some problem with fetching data, please reload.
    </template>
  </section>
</template>
