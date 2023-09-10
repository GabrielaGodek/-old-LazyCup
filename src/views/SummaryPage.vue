<template>
  <section class="qr_code">
    <qr-codeItem :summary="summary"></qr-codeItem>
  </section>
</template>

<script>
import qrCodeItem from '../components/qrItem.vue'

import { reactive } from 'vue'
// import { useRouter } from 'vue-router'
import { mapStores } from 'pinia'
import { useOrdersStore } from '@/store/orders'

export default {
  name: 'SummaryPage',
  data() {
    return {
      summary: '',
      ordersData: reactive([]),
      orderedCoffee: reactive([])
    }
  },
  components: {
    qrCodeItem
  },
  computed: {
    ...mapStores(useOrdersStore)
  },
  methods: {
    createOrder() {
      console.log(this.ordersStore.orders)
      if (this.ordersStore.orders.length > 0) {
        this.ordersData = this.ordersStore.orders

        let totalPrice = 0
        this.ordersData.forEach((i) => {
          let QRvalue = `${i.name} - ${i.amount} x ${i.salePrice ? i.salePrice : i.price}; `
          this.summary += QRvalue
          totalPrice += (i.salePrice < i.price ? i.salePrice : i.price) * i.amount
        })
        this.summary += ` Total: ${totalPrice} zł`
        console.log(this.summary)
        this.ordersStore.orders = []
      }
    }
  },
  mounted() {
    this.createOrder()
  }
}
</script>

<style scoped>
.qr_code {
  display: block;
  margin: 0 auto;
  }
</style>