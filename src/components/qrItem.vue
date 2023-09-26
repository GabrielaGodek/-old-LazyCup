<template>
  <figure class="qrcode">
    <QRCode
      :value="summary"
      level="H"
      :QRSize="190"
      QRBackgroundColor="white"
      :logoSize="70"
      logoBackgroundColor="white"
    />
    <img width="294" height="294" class="qrcode__image" src="/public/cup.svg" alt="LazyCup" />
  </figure>

  <p>To collect order scan this code at the counter</p>
</template>

<script>
import QRCode from 'vue-qrcode-dynamic'
import { reactive } from 'vue'
export default {
  name: 'qrItem',
  components: {
    QRCode
  },
  data() {
    return {
      ordersData: reactive([])
    }
  },
  props: {
    summary: {
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
.qrcode {
  background-color: #fff;
  padding: 5px;
  display: inline-block;
  font-size: 0;
  margin: 0;
  position: relative;
}

.qrcode__image {
  background-color: #fff;
  border: 0.25rem solid #fff;
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
