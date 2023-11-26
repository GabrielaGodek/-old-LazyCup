<script>
import { ref, onMounted } from "vue";
import { mapStores } from "pinia";
import ProductTile from "@/components/productTile.vue";
import { useOrdersStore } from "@/store/orders";
import { getCoffees } from "@/util/fetch";

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

  onMounted(async () => {
    try {
      const fetchedCoffees = await getCoffees();
      coffees.value = fetchedCoffees.coffees;
    } catch (error) {
      console.error("Failed to fetch coffee data.", error);
      badReq.value = true;
    } finally {
      loading.value = false;
    }
  });

  return {
    loading,
    badReq,
    coffees: ordersStore.coffees,
  };
},

};
</script>

<template>
  <section class="wrapper listing">
    <h1>Coffees</h1>
    <template v-if="!badReq && coffees.length > 0">
      <div class="tile_wrapper" v-for="item in coffees" :key="item._id">
        <ProductTile :coffee="item" />
      </div>
    </template>
    <div v-else>
      <p v-if="badReq">Failed to fetch coffee data.</p>
      <p v-else>No coffees available.</p>
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
