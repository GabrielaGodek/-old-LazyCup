import { it, expect, describe } from "vitest";
import Home from "@/views/HomeView.vue";
import { shallowMount } from "@vue/test-utils";

describe('HomeView.vue', () => {
    it('should render inner text', () => {
        const wrapper = shallowMount(Home);

        expect(wrapper.text()).toContain('Click here to order');
    });
});