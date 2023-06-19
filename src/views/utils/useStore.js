import { onMounted, ref } from "vue";

const coffees = ref([]);

export const useStore = () => {
  const updateCoffeeList = async () => {
    try {
      const response = await fetch("/api/coffees");
      const data = await response.json();

      coffees.value = data;
    } catch (e) {
      console.log(e);
    }
  };

  const switchFavoriteStatus = async (id) => {
    try {
      await fetch(`/api/coffees/${id}/set-favorite`, { method: "POST" });
      await updateCoffeeList();
    } catch (e) {
      console.log(e);
    }
  };

  onMounted(async () => {
    if (!coffees.value.length) {
      await updateCoffeeList();
    }
  });

  return {
    switchFavoriteStatus,
    updateCoffeeList,
    coffees,
  };
};