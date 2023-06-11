<script setup>
import HeaderItem from "./components/headerItem.vue";
</script>

<template>
  <header>
      <HeaderItem />
  </header>
  <div class="relative_header"></div>
  <router-view />
</template>
