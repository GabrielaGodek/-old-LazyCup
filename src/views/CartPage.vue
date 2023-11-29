<script>
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
      return this.ordersStore.orders.length === 0
    },
    updateBasket() {
      return this.ordersStore.orders.some((item) => item.amount === 0)
    }
  },
  methods: {
    ...mapActions(useOrdersStore, ['addItem', 'removeItem']),
    makeTransactionsList() {
      this.orderedItems.push(this.ordersStore.orders)

      let tmp = JSON.parse(localStorage.getItem('orderedItems')) || []
      if (localStorage.getItem('orderedItems') !== null) {
        tmp.push(Array.from(...this.orderedItems))
        localStorage.setItem('orderedItems', JSON.stringify(tmp))
      } else {
        tmp.push(this.orderedItems)
        localStorage.setItem('orderedItems', JSON.stringify(this.orderedItems))
      }
      this.$router.push({
        name: 'summary'
      })
    },
    addProducts(item) {
      this.addItem(item)
    },
    removeProduct(item) {
      this.removeItem(item)
    }
  },
}
</script>

<template>
  <section class="cart_page">
    <div class="orders" v-show="!emptyBasket">
      <div class="single_order" v-for="item in this.ordersStore.orders" :key="item.id">
        <div class="tile">
          <div class="image" :id="item.id">
            <img width="96" height="96" :src="'/coffees_icons/' + item.image" :alt="item.name" />
          </div>
          <div class="description" :id="item.id">
            <h1 class="title">
              {{ item.name }}
            </h1>
            <div class="action_container">
              <div class="price_container">
                <h2 class="price" v-if="item.salePrice && item.salePrice !== item.price">
                  Price: {{ item.salePrice }} zł
                </h2>
                <h2 class="price" v-else>Price: {{ item.price }} zł</h2>
              </div>
              <div class="counter">
                <input type="button" value="-" @click.prevent="removeProduct(item)" />
                <input type="number" name="coffee_amount" id="" :value="item.amount" readonly/>
                <input
                  type="button"
                  value="+"
                  @click.prevent="addProducts(item)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

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
        <button type="button" class="checkout" @click="makeTransactionsList">
          {{ btnText }}
        </button>
        <backItem :btn-text="'Back'" />
      </div>
    </section>
  </section>
</template>
<style scoped>
.action .fav {
  display: none;
}
</style>
