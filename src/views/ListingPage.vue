<script setup>
import ProductTile from "../components/productTile.vue";
</script>
<script>
// import { reactive } from "vue";
export default {
    data (){
        return {
            CoffeesList: []
            // CoffeesList: reactive([])
        }
    },
    methods: {
        getCoffees() {
            fetch('https://my-json-server.typicode.com/GabrielaGodek/CoffeeShop-Database/coffees/')
            .then(res =>  res.json())
            // .then(data => console.log(data))
            .then(data => this.CoffeesList = data)
            
        }
    },
    mounted() {
        this.getCoffees()
    }
}

</script>

<template>
<div class="wrapper listing">
    <div class="tile_wrapper" v-for="item in CoffeesList" :key="item.id">
        <ProductTile :coffee="item"/>
    </div>
    
</div>
  
</template>

