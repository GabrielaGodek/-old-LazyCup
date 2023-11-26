import { it, expect, describe } from 'vitest';
import HomeView from '@/views/HomeView.vue'
import { mount } from '@vue/test-utils';

describe('HomeView.vue', async () => {
    it('should renders the expected text', () => {
        const text = 'Click here to order';
        
        const wrapper = mount(HomeView);

        expect(wrapper.text()).toContain(text);
    });
});