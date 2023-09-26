<script>
// import { ref } from 'vue'
import { mapStores } from 'pinia'
import { useOrdersStore } from '@/store/orders'
import ProductTile from '@/components/productTile.vue'

export default {
  name: 'ListingPage',
  components: {
    ProductTile
  },
  computed: {
    ...mapStores(useOrdersStore),
    emptyFav() {
      return (this.ordersStore.coffees.filter((i) => i.isFav === true).length === 0)
    }
  },
  updated() {
  }
}
</script>

<template>
  <section class="wrapper listing" :class="{ empty: emptyFav }">
    <h1>Favorite</h1>
    <template v-for="item in this.ordersStore.coffees" :key="item.id">
      <div class="tile_wrapper" v-if="item.isFav && item.isFav === true">
        <product-tile :coffee="item" />
      </div>
    </template>
    <div v-show="emptyFav" class="empty">
      <h2>Oops, looks like you don't have favorite coffees!</h2>
      <p>Click on the heart icon to add coffee to the list</p>
    </div>
  </section>
</template>

