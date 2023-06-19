<script setup>
import HeaderItem from "./components/headerItem.vue";
</script>

<template>
  <header>
      <HeaderItem />
  </header>
  <div class="relative_header"></div>
  <main>
    <router-view />
  </main>
</template>
