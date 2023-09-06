
<script>
import { mapStores } from "pinia";
import { useOrdersStore } from '@/store/orders'

export default {
    name: 'ActionButton',
    props: {
        btnText: {
            type: String,
            default: "Add to cart"
        }
    },
    computed: {
        ...mapStores(useOrdersStore)
    },
}
</script>

<template>
    <button class="buy" >
        {{ btnText }} <img src="/arrow.svg" alt="add coffee to cart">
    </button>
</template>
