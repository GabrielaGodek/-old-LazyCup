<script>
// import { $router } from "vue-router"
export default {
    name: 'backBtn',
    props: {
        btnText: {
            type: String
        }
    }
}
</script>

<template>
    <a class="back" aria-label="Go back" @click="this.$router.go(-1)"
    >{{ btnText }}</a>
</template>
