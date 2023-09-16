
<script>
import { ref } from 'vue'
import { mapStores } from 'pinia'
import ProductTile from '@/components/productTile.vue'
import { useOrdersStore } from '@/store/orders'

export default {
  name: 'ListingPage',
  components: {
    ProductTile
  },
  data() {
    return {
      // CoffeesList: [],
      badReq: ref(false)
      // CoffeesList: reactive([])
    }
  },
  computed: {
    // ordersStore
    ...mapStores(useOrdersStore)
  },
  methods: {
    getCoffees() {
      fetch('https://my-json-server.typicode.com/GabrielaGodek/CoffeeShop-Database/coffees/')
        .then((res) => {
          if (res.ok) {
            return res.json()
          } else {
            const error = res.status
            return Promise.reject(error)
          }
        })
        .then((data) => {
          this.ordersStore.coffees = data
          console.log(data)
          this.badReq = false
        })
        .catch((error) => {
          // console.log(localStorage.getItem("CoffeeResponse"))
          // if(localStorage.getItem("ordersTrack")){
          // this.useOrdersStore.coffees = JSON.parse(localStorage.getItem("ordersTrack").coffees)
          // } else {
          console.error(error)
          // this.badReq = true
          // }
        })
    }
  },
  mounted() {
    // console.log(this.ordersStore.coffees)
    if (this.ordersStore.coffees.length === 0) {
      this.getCoffees()
    }
  }
}
</script>
Ŕ
<template>
  <section class="wrapper listing">
    <h1>Coffees</h1>
    <template v-if="this.badReq === false">
      <div class="tile_wrapper" v-for="item in this.ordersStore.coffees" :key="item.id">
        <ProductTile :coffee="item" />
      </div>
    </template>
  </section>
</template>

<style scoped lang="scss">
.wrapper.listing:has(.empty_res) {
  display: block;
  text-align: center;
  .empty_res {
    width: 100%;
    height: 100%;
    h2 {
      font-size: clamp(22px, 28px, 30px);
    }
  }
}
</style>
