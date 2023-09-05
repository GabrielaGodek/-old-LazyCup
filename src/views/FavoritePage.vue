<script>
import { ref } from 'vue'
import { mapStores } from 'pinia'
import ordersTrackStore from '@/store/orders'
import ProductTile from '@/components/productTile.vue'

export default {
  name: 'ListingPage',
  components: {
    ProductTile
  },
  data() {
    return {
      // CoffeesList: [],
      emptyFav: ref(false)
      // CoffeesList: reactive([])
    }
  },
  computed: {
    ...mapStores(ordersTrackStore)
  },
  updated() {
    if (this.ordersTrackStore.coffees.filter((i) => i.isFav == true).length !== 0) {
        this.emptyFav = false
      } else {
        this.emptyFav = true
      }
  }
}
</script>

<template>
  <section class="wrapper listing" :class="{ empty: emptyFav }">
    <!-- <h1>Favorite</h1> -->
    <template v-for="item in this.ordersTrackStore.coffees" :key="item.id">
      <div class="tile_wrapper" v-if="item.isFav && item.isFav === true">
        <product-tile :coffee="item" />
      </div>
    </template>
    <div v-show="emptyFav" class="empty_fav">
      <h2>Oops, looks like you don't have favorite coffees!</h2>
      <p>Click on the heart icon to add coffee to the list</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.wrapper.listing.empty {
  height: calc(100vh - (52px * 2));
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
