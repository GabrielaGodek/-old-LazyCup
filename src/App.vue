<script>
import HeaderItem from "@/components/headerItem.vue";
import FooterNav from "@/components/footerItem.vue";


export default {
  name: "App",
  components: {
    HeaderItem,
    FooterNav
  },

}
</script>

<template>
  <header>
      <header-item />
  </header>
  <div class="relative_header"></div>
  <main>
    <router-view />
  </main>
  <footer>
    <footer-nav/>
  </footer>
</template>
