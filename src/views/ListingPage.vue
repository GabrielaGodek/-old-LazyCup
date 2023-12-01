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

    onBeforeMount(async () => {
      const data = (await getCoffees()).coffeesData;
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
    <div v-else>
      <p>Loading...</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
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
