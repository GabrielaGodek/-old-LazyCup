import { it, expect, describe } from 'vitest';
import ProductTile from '@/components/ProductTile.vue';
import { shallowMount } from '@vue/test-utils';

describe('ProductTile.vue', () => {
    it('should return the rendered props from API', () => {
        const coffee = {
            name: 'Espresso'
        };
        
        const wrapper = shallowMount(ProductTile, {
            props: {
                coffee
            }
        });
        const locationToRender = wrapper.find('h1.title');

        expect(locationToRender.text()).toBe(coffee.name);
    });
});