<script setup>
import productTile from "../components/productTile.vue"
import buttonItem from "../components/buttonItem.vue"
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const btnText = ref("Add To Cart")
</script>
<script>

export default {
    props: ['id'],
    data (){
        return {
            coffee: [],
            // Coffee: reactive([])
        }
    },
    methods: {
        getSpecCoffee(id) {
            const url = 'https://my-json-server.typicode.com/GabrielaGodek/CoffeeShop-Database/coffees/' + id
            fetch(url)
            .then(res =>  res.json())
            .then(data => this.coffee = data)
        },
        addToCart(coffee) {
            const item = ref(coffee)
            const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
            cartItems.push(item.value);
            localStorage.setItem("cartItems", JSON.stringify(cartItems));

        }
    },
    mounted() {
        const router = useRouter();
        const id = router.currentRoute.value.params.id;
        this.getSpecCoffee(id)
    }
}

</script>

<template>
    <div class="product_page">
        <productTile :coffee="coffee"/>
        <div class="add_to_cart">
            <div class="current_price" v-if="coffee.salePrice">{{ coffee.salePrice }} zł</div>
            <div class="current_price" v-else>{{ coffee.price }} zł</div>
            <router-link :to="{ name: 'cart' }" @click="addToCart(coffee)">
                <buttonItem :btn-text="btnText"/>
            </router-link>
        </div>
    </div>
</template>