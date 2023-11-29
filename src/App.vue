<script>
import { ref, onMounted } from "vue";
import HeaderItem from "@/components/headerItem.vue";
import FooterNav from "@/components/footerItem.vue";

export default {
  name: "App",
  components: {
    HeaderItem,
    FooterNav,
  },
  setup() {
    const target = ref();
    const isScroll = ref(false);
    const observer = new IntersectionObserver(
      ([entry]) => {
          isScroll.value = !entry.isIntersecting
      },
      { threshold: 0.0 }
    );
    onMounted(() => {
      observer.observe(target.value);
    });
    return {
      target,
      isScroll,
    };
  },
};
</script>

<template>
  <header ref="target">
    <header-item />
  </header>
  <!-- <div class="relative_element"></div> -->
  <main>
    <router-view />
  </main>
  <!-- <div class="relative_element"></div> -->
  <footer :class="{ 'scroll': isScroll }">
    <footer-nav />
  </footer>
</template>
