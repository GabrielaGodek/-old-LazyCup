import { defineStore } from 'pinia'

export const useOrdersStore = defineStore('orders', {
  state: () => ({
    /** @type {{ id: Number, amount: Number, name: String, price: Number, salePrice: Number, image: String, }[]} */
    orders: [],
    coffees: []
  }),
  actions: {
    addItem(cartItem) {
      if (!this.orders.some((el) => el.id === cartItem.id)) {
        this.orders.push({
          id: cartItem.id,
          amount: 1,
          name: cartItem.name,
          price: cartItem.price,
          salePrice: cartItem.salePrice,
          image: cartItem.image
        })
      } else {
        let duplicateCoff = this.orders.find((el) => el.id === cartItem.id)
        let i = this.orders.indexOf(duplicateCoff)
        this.orders[i].amount++
      }
    },
    removeItem(cartItem) {
      let i = this.orders.indexOf(cartItem)
      if (this.orders[i].amount != 1) {
        this.orders[i].amount--
      } else {
        this.orders = this.orders.filter((item) => {
          return item.id != cartItem.id
        })
      }
    }
  },
  persist: true
})
