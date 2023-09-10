<template>
  <section class="wrapper transactions">
    <h1>Last transactions</h1>
    <ul class="tile_wrapper" v-for="item in transactions" :key="item.id">
      <li class="tile" @click="restoreLastTransaction(item)">
        <h1>{{ item.name }}</h1>
        <div class="details">
          <span class="amount">{{ item.amount }}</span> x
          <span class="price">{{ item.salePrice ? item.salePrice : item.price }}</span>
        </div>
      </li>
      <!-- <product-tile :coffee="item" /> -->
    </ul>
  </section>
</template>

<script>
import { reactive } from 'vue'
// import ProductTile from '@/components/productTile.vue'
export default {
  name: 'transactionPage',
  components: {
    // ProductTile
  },
  data() {
    return {
      transactions: reactive([])
    }
  },
  methods: {
    transactionsList() {
      let list = JSON.parse(localStorage.getItem('orderedItems'))
      console.log(list)
      this.transactions = list
    },
    restoreLastTransaction(item) {
      console.log(item.id)
      this.$router.push({ name: 'summary', params: { id: item.id } })
    },
    openSum() {
      this.$router.push({ name: 'summary' })
    }
  },
  mounted() {
    this.transactionsList()
  }
}
</script>

<style></style>
