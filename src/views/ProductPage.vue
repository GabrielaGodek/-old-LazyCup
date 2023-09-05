
<script>
import productTile from '@/components/productTile.vue'
import buttonItem from '@/components/buttonItem.vue'
import back from '@/components/backItem.vue'

import { mapStores } from 'pinia'
import ordersTrackStore from '@/store/orders'

import { useRouter } from 'vue-router'
import { ref } from 'vue'

export default {
  name: "ProductPage",
  components: {
    productTile,
    buttonItem,
    back
  },
  props: {
    id: {
      type: Number,
      required: true,
    }
  },
  data() {
    return {
      coffee: [],
      btnText: ref('Buy'),
      backText: ref('Back')
    }
  },
  computed: {
    ...mapStores(ordersTrackStore)
  },
  methods: {
    getSpecCoffee(id) {
      const url =
        'https://my-json-server.typicode.com/GabrielaGodek/CoffeeShop-Database/coffees/' + id
      fetch(url)
        .then((res) => res.json())
        .then((data) => (this.coffee = data))
    },
    addToCart(coffee) {
        console.log(coffee.name)
        let coffeeConfig = {
          image: coffee.image,
          name: coffee.name,
          price: coffee.price,
          salePrice: coffee.salePrice,
          amount: 1,
        }
      this.ordersTrackStore.orders.push(coffeeConfig)
      console.log(this.ordersTrackStore.orders)
    }
  },

  mounted() {
    const router = useRouter()
    const id = router.currentRoute.value.params.id
    this.getSpecCoffee(id)
  }
}
</script>

<template>
  <div class="product_page">
    <productTile :coffee="coffee" />
    <div class="add_to_cart">
      <!-- <div class="current_price" v-if="coffee.salePrice">{{ coffee.salePrice }} zł</div> -->
      <!-- <div class="current_price" v-else>{{ coffee.price }} zł</div> -->
      <back :btn-text="backText" />
      <router-link :to="{ name: 'cart' }" @click.prevent="addToCart(coffee)">
        <buttonItem :btn-text="btnText" />
      </router-link>
    </div>
  </div>
</template>
