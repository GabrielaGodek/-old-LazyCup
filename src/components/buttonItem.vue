
<script>
import { mapStores } from "pinia";
import ordersTrackStore from '@/store/orders'

export default {
    name: 'ActionButton',
    props: {
        btnText: {
            type: String,
            default: "Add to cart"
        }
    },
    computed: {
        ...mapStores(ordersTrackStore)
    },
}
</script>

<template>
    <button class="buy" @click="this.ordersTrackStore.orders = []">
        {{ btnText }} <img src="/arrow.svg" alt="add coffee to cart">
    </button>
</template>
