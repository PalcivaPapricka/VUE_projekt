import { defineStore } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as Array<{
      id: number;
      name: string;
      price: number;
      quantity: number;
      image: string;
    }>,
  }),
  actions: {
    addItem(item: { id: number; name: string; price: number; image: string }) {
      const existingItem = this.items.find((i) => i.name === item.name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...item, quantity: 1 });
      }
    },
    incrementItem(item: { id: number; name: string; quantity: number }) {
      const cartItem = this.items.find((i) => i.name === item.name);
      if (cartItem) cartItem.quantity++;
    },
    decrementItem(item: { id: number; name: string; quantity: number }) {
      const cartItem = this.items.find((i) => i.name === item.name);
      if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity--;
      } else {
        this.removeFromCart(item);
      }
    },
    removeFromCart(item: { id: number; name: string }) {
      this.items = this.items.filter((i) => i.name !== item.name);
    },
  },
  persist: true,
});


