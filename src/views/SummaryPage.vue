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
      if (this.ordersStore.orders.length > 0) {
        this.ordersData = this.ordersStore.orders

        let totalPrice = 0
        this.ordersData.forEach((i) => {
          let QRvalue = `${i.name} - ${i.amount} x ${i.salePrice ? i.salePrice : i.price}; `
          this.summary += QRvalue
          totalPrice += (i.salePrice < i.price ? i.salePrice : i.price) * i.amount
        })
        this.summary += ` Total: ${totalPrice} zł`
        this.ordersStore.orders = []
      }
    }
  },
  mounted() {
    this.createOrder()
  }
}
</script>

<style scoped lang="scss">
.qr_code {
  width: 100%;
  // width: 294px;
  height: calc(100vh - (52px * 2));
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  p {
    width: 294px;
  }
}
</style>
