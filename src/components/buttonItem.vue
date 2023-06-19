<script setup>
import { defineProps } from "vue"

const props = defineProps({
    btnText: String // definiujemy atrybut i jego typ
})
</script>

<template>
    <button class="buy">
        {{ props.btnText }} <img src="../../public/arrow.svg" alt="add coffee to cart">
    </button>
</template>
