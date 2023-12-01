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
    const badReq = ref(false);
    const coffees = ref([]);

    onBeforeMount(async () => {
      const fetchedData = await getCoffees();
      if (ordersStore.coffees.length > 0) {
        coffees.value = ordersStore.coffees;
      } else {
        coffees.value = fetchedData;
      }
      coffees.value.length > 0
        ? (loading.value = false)
        : (loading.value = true);
    });

    return {
      loading,
      badReq,
      coffees,
    };
  },
};
</script>

<template>
  <section class="wrapper listing">
    <h1>Coffees</h1>
    <template v-if="!loading">
      <div class="tile_wrapper" v-for="item in coffees" :key="item._id">
        <ProductTile :coffee="item" />
      </div>
    </template>
    <div v-else>
      <p v-if="badReq">Failed to fetch coffee data.</p>
      <p v-else>Loading...</p>
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
