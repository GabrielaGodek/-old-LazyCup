<script>
import { ref, onMounted, onBeforeMount, watch } from "vue";
import { useOrdersStore } from '@/store/orders';
import ProductTile from "@/components/productTile.vue";
import { getCoffees } from "@/includes/fetch";

export default {
  name: "ListingPage",
  components: {
    ProductTile,
  },
  setup() {
    const useStore = useOrdersStore()
    const loading = ref(true);
    const target = ref(0);
    const coffees = ref([]);
    const url = ref('https://nodejs-database.onrender.com/api/v1/coffees/')

    onBeforeMount(async () => {
      const data = (await getCoffees(url.value));
      coffees.value = data;
      useStore.coffees = data
    });

    watch(coffees, () => {
      loading.value = coffees.value.length > 0 ? false : true;
    });

    return {
      loading,
      data: coffees,
      target,
    };
  },
};
</script>

<template>
  <section class="wrapper listing" :key="target">
    <h1>Coffees</h1>
    <template v-if="!loading">
      <div class="tile_wrapper" v-for="item in data" :key="item._id">
        <ProductTile :coffee="item" />
      </div>
    </template>
    <div class="loading_wrapper" v-else>
      <div class="loader"></div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.loader, .loader:before, .loader:after {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  animation-fill-mode: both;
  animation: bblFadInOut 1.8s infinite ease-in-out;
}
.loader {
  color: #4f483e;
  font-size: 7px;
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  content: '';
  position: absolute;
  top: 0;
}
.loader:before {
  left: -3.5em;
  animation-delay: -0.32s;
}
.loader:after {
  left: 3.5em;
}

@keyframes bblFadInOut {
  0%, 80%, 100% { box-shadow: 0 2.5em 0 -1.3em }
  40% { box-shadow: 0 2.5em 0 0 }
}
    
.wrapper.listing:has(.empty_res) {
  display: block;
  text-align: center;
  .empty_res {
    width: 100%;
    height: 100%;
    h2 {
      font-size: clamp(22px, 28px, 30px);
    }
  }
}
</style>
