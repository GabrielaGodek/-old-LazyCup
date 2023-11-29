import { it, expect, describe } from 'vitest';
import ProductTile from '@/components/productTile.vue';
import vueRouter, { useRouter } from 'vue-router'
import { shallowMount, mount, createLocalVue } from '@vue/test-utils'

describe('ProductTile.vue', () => {
    const coffee = {
        _id: '651964f924f0811dee90bfed',
        name: 'Espresso',
        description: 'A rich and flavorful coffee.',
        price: 12,
        salePrice: 10,
        image: 'Espresso.svg',
    };

    it('should render coffee name in the title element', () => {
        const wrapper = shallowMount(ProductTile, {
            props: {
                coffee
            }
        });
        const locationToRender = wrapper.find('h1.title');

        expect(locationToRender.text()).toBe(coffee.name);
    });

    it('should render component with the correct ID attribute based on the coffee prop', () => { 
        const wrapper = mount(ProductTile, {
            props: {
                coffee
            }
        });
        const attributes = wrapper.attributes().id;

        expect(attributes).toBe(coffee._id);
    });

    it('should render product details correctly', () => {
        const wrapper = mount(ProductTile, {
            props: { coffee },
        });
    
        expect(wrapper.find('.title').text()).toBe(coffee.name);
        expect(wrapper.find('.details').text()).toBe(coffee.description);
        expect(wrapper.find('.new_price').text()).toBe(`${coffee.salePrice} zł`);
        expect(wrapper.find('.old_price').text()).toBe(`${coffee.price} zł`);
    });

});