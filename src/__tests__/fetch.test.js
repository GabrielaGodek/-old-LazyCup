// import { it, expect, describe, vi } from 'vitest';
// import { shallowMount } from '@vue/test-utils';
// import fetch from 'node-fetch';
// import Listing from '@/views/ListingPage.vue';
// import ProductTile from '@/components/ProductTile.vue';
// import { getCoffees } from '@/util/fetch';

// describe('fetch data', () => {
//   it('should render a list of elements from API', async () => {

//     vi.mock('node-fetch');
//     fetch.mockReturnValue(Promise.resolve({
//       json: () => Promise.resolve([]), 
//     }));

//     const coffees = await getCoffees();

//     const component = shallowMount(Listing, {
//       data() {
//         return {
//             coffees
//         };
//       },
//     });

//     const items = component.findAllComponents(ProductTile);

//     items.wrappers.forEach((item, index) => {
//       expect(item.props().coffee).toEqual(coffees[index]);
//     });
//   });
// });
