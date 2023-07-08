<script setup>
import ProductTile from '../components/productTile.vue';
import buttonItem from '../components/buttonItem.vue';
import { ref } from 'vue';

const btnText = ref("Checkout")

const orderItems = ref([]);
const storedOrderItems = localStorage.getItem("cartItems");
console.log(storedOrderItems)
    if (storedOrderItems) {
    orderItems.value = JSON.parse(storedOrderItems);
    }

</script>
<!-- <script>
    import { useCounterStore } from './store/counters.js'
    
    export default {
      setup() {
        const counterStore = useCounterStore()
    
        return {
          counterStore
        }
      }
    }
</script> -->



<template>
    <div class="cart_page">
        <div class="orders">
            <div class="single_order" v-for="item in orderItems" :key="item.id">
                <ProductTile :coffee="item" />
            </div>
        </div>
        <div class="summary">
            <h2>Order Details</h2>
            <div class="discount row">

                <h3 class="text">Discount</h3>
                <span class="amount" v-for="item in orderItems" :key="item.id"> 
                    {{ item.price - item.salePrice }} zł</span>
            </div>
            <div class="sum">
                <div class="total_price">20 zł</div>
                <router-link :to="{ name: 'cart' }">
                    <buttonItem :btn-text="btnText"/>
                </router-link>
            </div>
        </div>
    </div>
</template>
