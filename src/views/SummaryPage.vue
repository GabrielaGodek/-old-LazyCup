<template>
  <section class="qr_code">
    <font-awesome-icon icon="fa-solid fa-circle-check" size="2xl" class="slide" />
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
  height: calc(100vh - (52px + 40px));
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  p {
    width: 190px;
  }
}
.slide {
  // z-index: -1;
  transform: translateY(60px);
  -webkit-animation: slide 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) both;
  animation: slide 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) both;
}

@-webkit-keyframes slide {
  0% {
    -webkit-transform: translateY(60px);
    transform: translateY(60px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes slide {
  0% {
    -webkit-transform: translateY(60px);
    transform: translateY(60px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
</style>
