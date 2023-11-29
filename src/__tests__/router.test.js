import { it, expect, describe, beforeEach } from 'vitest';
import { nextTick } from 'vue';
import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router'
import { setActivePinia, createPinia } from 'pinia';

import ProductPage from '@/views/ProductPage.vue'
import ListingPage from '@/views/ListingPage.vue'
import ProductTile from '@/components/productTile.vue';


describe('router', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });
    it('should render successfully when navigating to the /coffee route with a valid coffeeId', async () => {
        const router = createRouter({
            history: createWebHistory(),
            routes: [{
                path: '/coffee/:id',
                name: 'coffee',
                component: ProductPage,
            }]
          })

          router.push('/coffee/123')
          await router.isReady()

          const wrapper = mount(ProductPage, {
            global: {
              plugins: [router]
            }
          })

          expect(wrapper.exists()).toBe(true);
    })
})