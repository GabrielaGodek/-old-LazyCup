import { useOrdersStore } from '@/store/orders';
import pinia from '@/store/pinia'

const getCoffees = async () => {
    const ordersStore = useOrdersStore(pinia);

    try {
        const response = await fetch('/api/v1/coffees/', { mode: 'no-cors' });
        // const response = await fetch('https://nodejs-database.onrender.com/api/v1/coffees/', { mode: 'no-cors' });
        if (!response.ok) {
            const error = response.status;
            const details = await response.text(); // Get the response body for more details
            console.error(`HTTP error! Status: ${error}. Details: ${details}`);
            throw new Error(`HTTP error! Status: ${error}. Details: ${details}`);
        }

        const coffeesData = await response.json();
        
        if (ordersStore) {
            ordersStore.coffees = coffeesData.coffees;
        } else {
            console.error('Orders store is not available.');
        }

        return coffeesData.coffees;
    } catch (error) {
        console.error('Fetch error ❌', error);

        throw error;
    }
};

export { getCoffees };
