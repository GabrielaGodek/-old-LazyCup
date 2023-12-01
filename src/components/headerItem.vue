<script>
import cupSvg from "@/assets/cup.svg";
export default {
  data() {
    return {
      image: cupSvg,
    };
  },
};
</script>
<template>
  <div class="header" @click="this.$router.push({ name: 'products' })">
    <div class="cup">
      <img width="18" height="28" :src="image" alt="LazyCup's logo" />
    </div>
    <h1 class="name">LazyCup</h1>
  </div>
</template>
