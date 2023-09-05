<script setup>
</script>
<script>
import { ref } from "vue";
import { mapStores } from 'pinia'
import ProductTile from "@/components/productTile.vue";
import ordersTrackStore from "@/store/orders";

export default {
    name: "ListingPage",
    components:{
        ProductTile
    },
    data (){
        return {
            // CoffeesList: [],
            badReq: ref(false)
            // CoffeesList: reactive([])
        }
    },
    computed: {
        ...mapStores(ordersTrackStore)
    },
    methods: {
        getCoffees() {
            fetch('https://my-json-server.typicode.com/GabrielaGodek/CoffeeShop-Database/coffees/')
            .then(res =>  {
                if(res.ok){
                    return res.json()
                } else {
                    const error = res.status
                    return Promise.reject(error)
                }
            })
            .then(data => {
                this.ordersTrackStore.coffees = data
                // console.log(this.ordersTrackStore.coffees)
                // localStorage.setItem("CoffeeResponse", JSON.stringify(this.ordersTrackStore.coffees))
                this.badReq = false
            })
            .catch(error => {
                // console.log(localStorage.getItem("CoffeeResponse"))
                if(localStorage.getItem("ordersTrack")){
                    this.ordersTrackStore.coffees = JSON.parse(localStorage.getItem("ordersTrack").coffees)
                } else {
                    console.error(error)
                    this.badReq = true
                }
                     
            })

        }
    },
    mounted() {
        // console.log(this.ordersTrackStore.coffees.length)
        if(this.ordersTrackStore.coffees.length === 0){
            this.getCoffees()
        }
    }
}

</script>

<template>
<div class="wrapper listing">
    <template v-if="this.badReq === false">
        <div class="tile_wrapper" v-for="item in this.ordersTrackStore.coffees" :key="item.id">
            <ProductTile :coffee="item"/>
        </div>
    </template>
    <template v-else>
        <div class="empty_res">
            <h2>404</h2>
            <p>Ups..., we have a problem!</p>
            <p>Try refresh the page or order your coffee at the counter</p>
        </div>
    </template>
</div>
</template>

<style scoped lang="scss">
.wrapper.listing:has(.empty_res) {
    display: block;
    text-align: center;
    .empty_res {
    width: 100%;
    height: 100%;
    h2 {
        font-size: clamp(22px, 28px, 30px);
    }
}
}
</style>

