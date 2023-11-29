import { it, expect, describe } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useOrdersStore } from '@/store/orders';

describe('stores', () => {
    const coffeeToManipulate = {
        id: '123',
        amount: 1,
        name: 'Espresso',
        price: 12,
        salePrice: 10,
        image: 'Espresso.svg',
        date: new Date().toJSON().slice(0, 10).replace(/-/g, '/')
    }
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('should add item to the store', () => {
        const store = useOrdersStore();
        
        store.addItem(coffeeToManipulate)

        expect(store.orders).toContainEqual(coffeeToManipulate)
    });
    
    it('should remove item from the store', () => {
        const store = useOrdersStore();
        
        store.addItem(coffeeToManipulate)
        store.removeItem(coffeeToManipulate)

        expect(store.orders).not.toContainEqual(coffeeToManipulate)
    });
});