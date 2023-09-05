<script>
// import ProductTile from '@/components/productTile.vue'
import buttonItem from '@/components/buttonItem.vue'
import backItem from '@/components/backItem.vue'
import { ref, reactive } from 'vue'
import { mapStores } from 'pinia'
import ordersTrackStore from '@/store/orders'

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
      orderItems: reactive([]),
      totalDiscount: ref(0),
      totalPrice: ref(0)
      // storedOrderItems: localStorage.getItem("cartItems")
    }
  },
  computed: {
    ...mapStores(ordersTrackStore)
  },
  methods: {
    updateOrder() {
      this.ordersTrackStore.orders.forEach((order) => {
        this.orderItems.push(order)
      })
      localStorage.setItem('orderItems', JSON.stringify(this.orderItems))
      // console.log(typeof this.ordersTrackStore)
    },
    addProducts(item){
      console.log(item)
    }
  },
  mounted() {
    this.updateOrder()
  },
  updated() {
  }
}
</script>

<template>
  <!-- {{ this.orderItems }} -->
  <div class="cart_page">
    <section class="orders">
      <div class="single_order" v-for="item in orderItems" :key="item.id">
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
              <input
                type="button"
                value="-"
                @click.prevent=""
                :disabled="item.amount == 0"
              />
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
        <span class="amount"> {{ this.totalDiscount }} zł </span>
      </div>
      <div class="total row">
        <h3 class="text">Total</h3>
        <span class="amount"> {{ this.totalPrice }} zł </span>
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
