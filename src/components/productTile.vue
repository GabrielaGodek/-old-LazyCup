<script setup>
// import { defineProps } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  coffee: {
    type: Object,
    required: true,
  },
  
});
const router = useRouter();
const openProductPage = () => {
  router.push({
    name: "coffee",
    params: { 
        id: props.coffee.id 
    },
  })
  console.log(props.coffee.id)
}

</script>


<template>
    <div class="product_tile" :id="props.coffee.id">
        <div class="tile">
            <div class="image">
                <picture>
                    <source media="(min-width: 800px)" srcset="">
                    <img :src="props.coffee.image" :alt="props.coffee.name">
                </picture>
            </div>
            <div class="description" @click="openProductPage()">
                <h1 class="title">
                    {{ props.coffee.name }}
                </h1>
                <div class="details">
                    {{ props.coffee.description }}
                </div>
                <div class="price_container">
                    <span class="new_price" v-if="props.coffee.salePrice"> {{ props.coffee.salePrice }} zł</span>
                    <span class="old_price" > {{ props.coffee.price }} zł</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.listing .product_tile .details {
    display: none;
}
</style>