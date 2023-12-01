<script>
import { ref, onMounted, onBeforeMount } from "vue";
// import { beforeRouteEnter } from "vue-router";
import ProductTile from "@/components/productTile.vue";
import { useOrdersStore } from "@/store/orders";
import { getCoffees } from "@/includes/fetch";

export default {
  name: "ListingPage",
  components: {
    ProductTile,
  },
  setup() {
    const ordersStore = useOrdersStore();
    const loading = ref(true);
    const target = ref(0)
    const coffees = ref([]);

    // const fetchData = async () => {
    //   try {
    //     const fetchedData = await getCoffees();
    //     coffees.value = ordersStore.coffees.length > 0 ? ordersStore.coffees : fetchedData;
    //     loading.value = coffees.value.length > 0;
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };
    // onBeforeMount(fetchData)
    onBeforeMount(async () => {
      const fetchedData = await getCoffees();
      if (ordersStore.coffees.length > 0) {
        coffees.value = ordersStore.coffees;
      } else if(fetchedData.length > 0) {
        coffees.value = fetchedData;
      } else {
        target.value +1
      }
      coffees.value.length > 0
        ? (loading.value = false)
        : (loading.value = true);
    });

    return {
      loading,
      coffees,
      target
    };
  },
};
</script>

<template>
  <section class="wrapper listing" :key="target">
    <h1>Coffees</h1>
    <template v-if="!loading">
      <div class="tile_wrapper" v-for="item in coffees" :key="item._id">
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
