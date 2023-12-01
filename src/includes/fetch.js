// import { useOrdersStore } from '@/store/orders';
import pinia from '@/store/pinia'
// import { onMounted, ref } from "vue";
// const coffeesData = ref([]);

// export const getCoffees = () => {
export const getCoffees = async (url = '/api/') => {
    let coffeesData = null
    try {
        const response = await fetch('https://nodejs-database.onrender.com/api/v1/coffees/', {
            method: 'GET',
        });
        if (response && !response.ok) {
            const error = response.status;
            const details = await response.text();
            console.error(`HTTP error! Status: ${error}. Details: ${details}`);
            throw new Error(`HTTP error! Status: ${error}. Details: ${details}`);
        }

        coffeesData = (await response.json()).coffees;


    } catch (error) {
        console.error('Fetch error ❌', error);

        throw error;
    }
    // console.log(coffeesData)
    return { coffeesData };
};
// onMounted(async () => {
//     if (!coffeesData.value.length) {
//         await updateList();
//     }
// });
// }

