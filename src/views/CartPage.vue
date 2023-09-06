<script>
// import ProductTile from '@/components/productTile.vue'
import buttonItem from '@/components/buttonItem.vue'
import backItem from '@/components/backItem.vue'
import { ref } from 'vue'
import { mapStores, mapActions } from 'pinia'
import { useOrdersStore } from '@/store/orders'

export default {
  name: 'CartPage',
  components: {
    // ProductTile,
    buttonItem,
    backItem
  },
  data() {
    return {
      btnText: ref('Checkout'),
      ordersItems: [],
      // storedOrdersItems: localStorage.getItem("cartItems")
    }
  },
  computed: {
    ...mapStores(useOrdersStore),
    totalPrice() {
      return this.ordersItems.reduce(
        (total, item) =>
          total + (item.salePrice < item.price ? item.salePrice : item.price) * item.amount,
        0
      )
    },
    totalDiscount() {
      return this.ordersItems.reduce(
        (total, item) =>
          total + (item.salePrice < item.price ? item.price - item.salePrice : 0) * item.amount,
        0
      )
    }
  },
  methods: {
    ...mapActions(useOrdersStore, ['addItem', 'removeItem']),
    updateOrder() {
      this.ordersStore.orders.forEach((order) => {
        this.ordersItems.push(order)
      })
      localStorage.setItem('ordersItems', JSON.stringify(this.ordersItems))
      // console.log(typeof this.ordersStore)
    },
    addProducts(item) {
      // console.log(item)
      this.addItem(item)
    },
    removeProduct(item) {
      // console.log(item)
      this.removeItem(item)
    }
  },
  mounted() {
    this.updateOrder()
    // this.total()
  },
  updated() {}
}
</script>

<template>
  <!-- {{ this.orderItems }} -->
  <div class="cart_page">
    <section class="orders">
      <div class="single_order" v-for="item in ordersItems" :key="item.id">
        <!-- <div class="product_tile"> -->
        <div class="tile">
          <div class="action">
            <div class="fav"><img src="@/assets/favorite_icon.svg" alt="" /></div>
          </div>
          <div class="image" :id="item.id">
            <img :src="item.image" :alt="item.name" />
          </div>

          <div class="description" :id="item.id">
            <h1 class="title">
              {{ item.name }}
            </h1>
            <div class="price_container">
              <h2 class="price" v-if="item.salePrice && item.salePrice !== item.price">
                {{ item.salePrice * item.amount }} zł
              </h2>
              <h2 class="price" v-else>{{ item.price * item.amount }} zł</h2>
            </div>
            <div class="counter">
              <input
                type="button"
                value="+"
                @click.prevent="addProducts(item)"
                :disabled="item.amount == 10"
              />
              <input type="number" name="coffee_amount" id="" :value="item.amount" />
              <input type="button" value="-" @click.prevent="removeProduct(item)" />
            </div>
          </div>
        </div>
        <!-- </div> -->

        <!-- <ProductTile :coffee="item" /> -->
      </div>
    </section>

    <section class="summary">
      <h2>Order Details</h2>
      <div class="discount row">
        <h3 class="text">Discount</h3>
        <span class="amount"> {{ totalDiscount }} zł </span>
      </div>
      <div class="total row">
        <h3 class="text">Total</h3>
        <span class="amount"> {{ totalPrice }} zł </span>
      </div>
      <div class="sum">
        <router-link :to="{ name: 'summary' }">
          <buttonItem :btn-text="btnText" />
        </router-link>
        <router-link :to="{ name: 'products' }">
          <backItem :btn-text="'Back'" />
        </router-link>
      </div>
    </section>
  </div>
</template>
<style scoped>
.action .fav {
  display: none;
}
</style>
