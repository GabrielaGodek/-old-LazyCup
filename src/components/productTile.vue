<script>
import { mapStores, mapWritableState, mapActions } from 'pinia'
import { useOrdersStore } from '@/store/orders'

export default {
  name: 'productTile',
  props: {
    coffee: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapWritableState(useOrdersStore, ['coffees']),
    ...mapStores(useOrdersStore)
  },
  methods: {
    ...mapActions(useOrdersStore, ['addItem']),
    addToFav(coffee) {
      let item = this.ordersStore.coffees[coffee.id - 1]
      item.isFav ? (item.isFav = false) : (item.isFav = true)
    },
    basketShort(cartItem) {
      this.addItem({
        id: cartItem.id,
        amount: 1,
        name: cartItem.name,
        price: cartItem.price,
        salePrice: cartItem.salePrice,
        image: cartItem.image,
        date: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
      })
      // console.log(this.ordersStore.orders)
      this.$router.push({ name: 'cart' })
    }
  }
}
</script>

<template>
  <div class="product_tile">
    <div class="tile">
      <div class="action">
        <div class="cart">
          <font-awesome-icon icon="fa-solid fa-cart-shopping" size="lg" style="color: #252525;" @click="basketShort(coffee)"/>
        </div>
        <div class="fav" @click="addToFav(coffee)">
          <template v-if="coffee.isFav && coffee.isFav === true">
            <font-awesome-icon icon="fa-solid fa-heart" size="lg" style="color: #252525;" />
          </template>
          <template v-else>
            <font-awesome-icon icon="fa-regular fa-heart" size="lg" style="color: #252525;" />
          </template>
        </div>
      </div>
      <div class="image" :id="coffee.id" @click="this.$router.push({ name: 'coffee', params: { id: coffee.id } })">
        <img :src="coffee.image" :alt="coffee.name" />
      </div>
      <div
        class="description"
        @click="this.$router.push({ name: 'coffee', params: { id: coffee.id } })"
        :id="coffee.id"
      >
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
</style>
