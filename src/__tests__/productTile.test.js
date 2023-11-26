import { it, expect, describe } from 'vitest';
import ProductTile from '@/components/productTile.vue';
import vueRouter, { useRouter } from 'vue-router'
import { shallowMount, mount, createLocalVue } from '@vue/test-utils';

// const localVue = createLocalVue();
// localVue.use(vueRouter);
// const router = new vueRouter();

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

    // it('should navigate to coffee details page on image/description click', async () => {
    //     const wrapper = mount(ProductTile, {
    //         localVue,
    //         router,
    //         props: { coffee },
    //     });

    //     // const router = useRouter()
    //     console.log(wrapper.vm.$route);
    //     // const id = router.currentRoute.value.params.id
    //     // await wrapper.vm.$nextTick();
        
    //     // await wrapper.find('.image').trigger('click');
        
    //     // await wrapper.vm.$nextTick();

    //     // expect(wrapper.vm.$route.params.id).toBe(coffee._id);
    //     // expect(wrapper.vm.$route.params.id).toBe(coffee._id);

    //     // expect(router.currentRoute.value.params.id).toBe(coffee._id);
    
    //     // Simulate click on description.
    //     // wrapper.find('.description').trigger('click');
    //     // expect(router.currentRoute.value).toBe('coffee');
    //     // expect(router.currentRoute.value.params.id).toBe(coffee._id);
    // });
});