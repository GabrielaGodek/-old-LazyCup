<template>
    
  <section class="qr_code">
    <figure class="qrcode">
    <QRCode
        :value="summary"
        level="H"
        :QRSize="294"
        QRBackgroundColor="white"
        :logoSize="70"
        logoBackgroundColor="white"
      />
    <img
      class="qrcode__image"
      src="@/assets/cup.svg"
      alt="LazyCup"
    />
  </figure>

      <p>To collect order scan the code at the counter</p>  
</section>


</template>

<script>
  import QRCode from "vue-qrcode-dynamic"

  import { mapStores } from 'pinia'
  import { useOrdersStore } from '@/store/orders'

  export default {
    name: 'summaryPage',
    props: {
      orderValue: {
        type: Object
      }
    },
    data() {
      return {
        summary: '',
        // totalPrice: 0
      }
    },
    components: {
      QRCode
    },
    computed: {
        ...mapStores(useOrdersStore)
    },
    methods: {
        createOrder(){
          
            let totalPrice
            this.useOrdersStore.orders.forEach(i => {
                let QRvalue = `${i.name} - ${i.amount} x ${i.salePrice ? i.salePrice : i.price}; `
                this.summary += QRvalue

                totalPrice += (i.salePrice ? i.salePrice : i.price) * i.amount
            })
            this.summary += `Total: ${totalPrice}`
        },
    },
    mounted() {
        this.createOrder()
    }

  }
</script>

<style scoped lang="scss">
.qr_code {
  width: 100%;
  height: calc(100vh - (52px * 2));
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    width: 294px;
  }
}
.qrcode {
background-color: #fff;
padding: 10px;
  display: inline-block;
  font-size: 0;
  margin-bottom: 0;
  position: relative;
}

.qrcode__image {
  background-color: #fff;
  border: 0.25rem solid #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);
  left: 50%;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  height: 30%;
}
</style>