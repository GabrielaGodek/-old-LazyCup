import { defineStore } from 'pinia'

export const useOrdersStore = defineStore('orders', {
  state: () => ({
    orders: [],
    coffees: []
  }),
  actions: {
    addItem(cartItem) {
      if (!this.orders.some((el) => el.id === cartItem.id)) {
        this.orders.push({
          id: cartItem.id,
          amount: cartItem.amount,
          name: cartItem.name,
          price: cartItem.price,
          salePrice: cartItem.salePrice,
          image: cartItem.image,
          date: cartItem.date
        })
      } else {
        const index = this.orders.findIndex((el) => el.id === cartItem.id)
        if (index !== -1) {
          this.orders[index].amount++
        }
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
