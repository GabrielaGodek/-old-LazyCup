<template>
  <section class="wrapper transactions" v-show="!emptyTransactions">
    <h1>Last transactions</h1>
    <div
      class="single_transaction"
      v-for="(transaction, index) in transactions"
      :key="transaction.id"
      :class="{ open_qr: index === openTransactionIndex }"
      @click.prevent="restoreLastTransaction(transaction, index)"
    >
      <div class="accordion_header">
        <template v-for="item in transaction" :key="item.id">
            <h2>{{ item.name }}</h2>
        </template>
      </div>
      <qr-item v-if="index === openTransactionIndex" :summary="summary" />
    </div>
  </section>

  <section class="empty" v-show="emptyTransactions">
      <h2>Oops, looks like you don't have any transactions!</h2>
     
      <p>Have some difficulties? Remember, you can always order yor fav coffee at the counter :)</p>
    </section>
</template>

<script>
import { reactive } from 'vue'

import QrItem from '../components/qrItem.vue'
export default {
  name: 'transactionPage',
  components: {
    QrItem
  },
  data() {
    return {
      transactions: reactive([]),
      summary: '',
      lastTransaction: false,
      openTransactionIndex: null,
      emptyTransactions: true
    }
  },
  methods: {
    transactionsList() {
      let list = JSON.parse(localStorage.getItem('orderedItems'))
      if(list && list.length > 0){
        list.forEach((i) => {
          this.transactions.push(i)
        })
        this.emptyTransactions = false 
      } else {
        this.emptyTransactions = true 
      }
    },
    restoreLastTransaction(item, index) {
      let totalPrice = 0
      this.summary = ''
      item.forEach((i) => {
        this.summary += `${i.name} - ${i.amount} x ${i.salePrice ? i.salePrice : i.price}; `
        totalPrice += (i.salePrice < i.price ? i.salePrice : i.price) * i.amount
      })
      this.summary += ` Total: ${totalPrice} zł`
      if (this.openTransactionIndex === index) {
        this.openTransactionIndex = null
      } else {
        this.openTransactionIndex = index
      }
    }
  },
  mounted() {
    this.transactionsList()
  }
}
</script>
