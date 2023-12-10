import { it, describe, expect } from 'vitest'
import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import productTile from '@/components/productTile.vue'

describe('snapshot productTile.vue', () => {
    it('renders correctly', () => {
        const coffee = {
            _id: '651964f924f0811dee90bfed',
            name: 'Espresso',
            description: 'A rich and flavorful coffee.',
            price: 12,
            salePrice: 10,
            image: 'Espresso.svg',
        };

        const wrapper = shallowMount(productTile, {
            props: {
                coffee: coffee,
            },
            global: {
                components: {
                    'router-link': RouterLinkStub
                }
            }
        })

        expect(wrapper.element).toMatchSnapshot()
    })
})
