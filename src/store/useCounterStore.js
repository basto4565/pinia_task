import { defineStore } from 'pinia';

export const useStore = defineStore({
  id: 'store',
  state: () => ({
    products: [],
    
  }),
  actions: {
    addProduct(product) {
      this.products.push(product);
    },
    deleteProduct(index) {
      this.products.splice(index, 1);
    },
  },
});