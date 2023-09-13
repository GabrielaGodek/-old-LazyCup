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
    // ...mapActions(useOrdersStore, { addToCart: 'addItemToOrder' }),
    getSpecCoffee(id) {
      const url =
        'https://my-json-server.typicode.com/GabrielaGodek/CoffeeShop-Database/coffees/' + id
      fetch(url)
        .then((res) => res.json())
        .then((data) => (this.coffeeData = data))
        .catch()
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
          image: cartItem.image
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
    this.getSpecCoffee(id)
  }
}
</script>

<template>
  <div class="product_page">
    <productTile :coffee="coffeeData" />
    <div class="add_to_cart">
      <back :btn-text="backText" />
      <buttonItem :btn-text="btnText" @click="addToCart(coffeeData)" />
    </div>
  </div>
</template>
