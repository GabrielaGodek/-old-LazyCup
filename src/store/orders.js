import { defineStore } from 'pinia'

export const useOrdersStore = defineStore('orders', {
  state: () => ({
    /** @type {{ id: Number, amount: Number, name: String, price: Number, salePrice: Number, image: String, }[]} */
    orders: [],
    coffees: []
  }),
  actions: {
    addItem(cartItem) {
      // console.log(this.orders)
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
      console.log(this.orders)

      let duplicateCoff = this.orders.find((el) => el.id === cartItem.id)
      console.log(duplicateCoff)
      if(duplicateCoff) {
        let i = this.orders.indexOf(duplicateCoff)
        console.log(i)
        console.log(this.orders[i])
        if(this.orders[i].amount != 0) {
          this.orders[i].amount--
        } else {
          this.orders.splice(i, 1)
        }
      }
    }
  },
  // persist: true
})
