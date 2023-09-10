<script>
// import SummaryPage from '@/views/SummaryPage.vue'
// import buttonItem from '@/components/buttonItem.vue'
import backItem from '@/components/backItem.vue'
import { ref, reactive } from 'vue'
import { mapStores, mapActions } from 'pinia'
import { useOrdersStore } from '@/store/orders'

export default {
  name: 'CartPage',
  components: {
    backItem
  },
  data() {
    return {
      btnText: ref('Checkout'),
      orderedItems: reactive([])
    }
  },
  computed: {
    ...mapStores(useOrdersStore),
    // ...mapWritableState(useOrdersStore),
    totalPrice() {
      return this.ordersStore.orders.reduce(
        (total, item) =>
          total + (item.salePrice < item.price ? item.salePrice : item.price) * item.amount,
        0
      )
    },
    totalDiscount() {
      return this.ordersStore.orders.reduce(
        (total, item) =>
          total + (item.salePrice < item.price ? item.price - item.salePrice : 0) * item.amount,
        0
      )
    },
    emptyBasket() {
      return this.ordersStore.orders.length === 0 ? true : false
    },
    updateBasket() {
      return this.ordersStore.orders.some((item) => item.amount === 0) ? true : false
    }
  },
  methods: {
    ...mapActions(useOrdersStore, ['addItem', 'removeItem']),
    makeTransactionsList() {
      console.log('elo')
      this.orderedItems.push(this.ordersStore.orders)
      // console.log(this.orderedItems)
      // localStorage.setItem('orderedItems', JSON.stringify(this.orderedItems))
      // clear basket
      this.$router.push({
        name: 'summary',
      })
    },
    addProducts(item) {
      this.addItem(item)
    },
    removeProduct(item) {
      this.removeItem(item)
    }
  },
  mounted() {
    // this.makeList()
  }
}
</script>

<template>
  <div class="cart_page">
    <section class="orders">
      <div class="single_order" v-for="item in this.ordersStore.orders" :key="item.id">
        <div class="tile">
          <div class="image" :id="item.id">
            <img :src="item.image" :alt="item.name" />
          </div>
          <div class="description" :id="item.id">
            <h1 class="title">
              {{ item.name }}
            </h1>
            <div class="price_container">
              <h2 class="price" v-if="item.salePrice && item.salePrice !== item.price">
                {{ item.salePrice }} zł
              </h2>
              <h2 class="price" v-else>{{ item.price }} zł</h2>
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
      </div>
    </section>

    <section class="empty" v-show="emptyBasket">
      <h2>Oops, looks like you don't have any coffee in your basket!</h2>
      <!-- <p>Change that by clicking on the cart icon or order via button "buy"</p> -->
      <p>Have some difficulties? Remember, you can always order yor fav coffee at the counter :)</p>
    </section>

    <section class="summary" v-show="!emptyBasket">
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
        <!-- {{ this.ordersStore.orders }} -->
        <!-- <router-link :to="{ name: 'summary', state: { this.ordersStore.orders } }"> -->

        <button type="button" class="checkout" @click="makeTransactionsList">
          {{ btnText }}
        </button>
        <!-- </router-link> -->
        <backItem :btn-text="'Back'" />
      </div>
    </section>
  </div>
</template>
<style scoped>
.action .fav {
  display: none;
}
</style>
