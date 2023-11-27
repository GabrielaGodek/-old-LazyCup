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
      openTransactionIndex: 0,
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
        this.transactions.reverse()
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
    },
    openLastTransaction(){
      let list =  JSON.parse(localStorage.getItem('orderedItems')) || null
      console.log(list)
       this.summary = `${list[0][0].name} - ${list[0][0].amount} x ${list[0][0].salePrice ? list[0][0].salePrice : list[0][0].price}; `
      let totalPrice = (list[0][0].salePrice < list[0][0].price ? list[0][0].salePrice : list[0][0].price) * list[0][0].amount

      this.summary += ` Total: ${totalPrice} zł`
    }
  },
  mounted() {
    this.transactionsList()
    if(!this.emptyTransactions) {
      this.openLastTransaction()
    }
  }
}
</script>

<template>
  <section class="wrapper listing transactions" v-show="!emptyTransactions">
    <h1>Last transactions</h1>
    <div
      class="single_transaction"
      v-for="(transaction, index) in transactions"
      :key="transaction.id"
      :class="{ open_qr: index === openTransactionIndex }"
      @click.prevent="restoreLastTransaction(transaction, index)"
    >
      <div class="accordion_header">
        <h2>{{ transaction[0].date }}</h2>
      </div>
      <qr-item v-if="index === openTransactionIndex" :summary="summary" />
    </div>
  </section>

  <section class="empty" v-show="emptyTransactions">
      <h2>Oops, looks like you don't have any transactions!</h2>
      <p>Have some difficulties? Remember, you can always order yor fav coffee at the counter :)</p>
    </section>
</template>
