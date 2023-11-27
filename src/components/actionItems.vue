<template>
  <div class="action">
    <div class="cart"><img src="/cart_icon.svg" alt="yours basket" @click="click"/></div>
    <div class="fav"><img src="/favorite_icon.svg" alt="yours favorites" /></div>
  </div>
</template>

<script>
export default {
    name: 'actionItems',
    methods: {
        click(){
            console.log('click')
        }
    }
}
</script>

<style></style>
