<script>
import { mapWritableState } from 'pinia'
import { mapStores } from 'pinia'
import { useOrdersStore } from '@/store/orders'

export default {
  name: 'productTile',
  props: {
    coffee: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      // fav: [],                   
     
    }
  },
  components: {
    // actionItems
  },
  computed: {
    ...mapWritableState(useOrdersStore, ['coffees']),
    ...mapStores(useOrdersStore)
  },
  methods: {
    addToFav(coffee) {
      let item = this.ordersStore.coffees[coffee.id - 1]
      item.isFav ? item.isFav = false : item.isFav = true
    },
    basketShort(coffee) {
      console.log(coffee.name)
        let coffeeConfig = {
          image: coffee.image,
          name: coffee.name,
          price: coffee.price,
          salePrice: coffee.salePrice,
          amount: 1,
        }
      this.ordersStore.orders.push(coffeeConfig)
      this.$router.push({name: 'cart'})
    }
   }
}
</script>

<template>
  <div class="product_tile">
    <div class="tile">
      <div class="action">
        <div class="cart">
          <img src="@/assets/cart_icon.svg" alt="Add to your basket" @click="basketShort(coffee)" />
        </div>
        <div class="fav">
                <img v-if="coffee.isFav && coffee.isFav === true" src="../assets/fav_check1.svg" alt="Add to your favorites" @click="addToFav(coffee)" />
                <img v-else src="../assets/favorite_icon.svg" alt="Add to your favorites" @click="addToFav(coffee)" />
        </div>
      </div>
      <div class="image" :id="coffee.id" @click="this.$router.push(`/coffee/${coffee.id}`)">
        <!-- <picture> -->
        <!-- <source media="(min-width: 800px)" srcset=""> -->
        <img :src="coffee.image" :alt="coffee.name" />
        <!-- </picture> -->
      </div>
      <div class="description" @click="this.$router.push(`/coffee/${coffee.id}`)" :id="coffee.id">
        <h1 class="title">
          {{ coffee.name }}
        </h1>
        <p class="details">
          {{ coffee.description }}
        </p>
        <div class="price_container">
          <h2 class="new_price" v-if="coffee.salePrice">{{ coffee.salePrice }} zł</h2>
          <span class="old_price"> {{ coffee.price }} zł</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.listing .product_tile .details {
  display: none;
}
.listing .product_tile .action .fav img[src$='fav_check1.svg']{
    transform: scale(1.4);
}
</style>
