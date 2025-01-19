<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '../stores/counter.ts'; // Import Pinia store

export default defineComponent({
  name: 'Cart_comp',
  data() {
    const cartStore = useCartStore();
    return {
      cartStore,
    };
  },
  computed: {
    cartItems() {
      return this.cartStore.items;
    },
    totalPrice() {
      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
  methods: {
    incrementItem(item: { id: number; price: number }) {
      this.cartStore.incrementItem(item);
    },
    decrementItem(item: { id: number; price: number }) {
      this.cartStore.decrementItem(item);
    },
  },
});
</script>

<template>
  <br><br>
  <div class="cart-container p-6 bg-gray-900 text-white rounded-lg shadow-md">
    <h1 class="text-3xl font-semibold mb-6 text-center">
      Shopping Cart &nbsp; <i class="fa fa-credit-card" aria-hidden="true"></i>
    </h1>
    <ul v-if="cartItems.length > 0" class="space-y-4">
      <li
          v-for="item in cartItems"
          :key="item.id"
          class="cart-item flex justify-between items-center p-4 bg-gray-800 rounded-lg shadow-md"
      >
        <div
            class="card-img rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <img
              :src="`/img/${item.image}`"
              :alt="item.name"
              class="w-full h-56 object-cover"
          />
        </div>
        <div class="flex items-center space-x-4">
          <span class="text-lg font-medium">{{ item.name }}</span>
          <span class="text-sm text-gray-400">{{ item.price.toFixed(2) }} €</span>
        </div>
        <div class="quantity-controls flex items-center space-x-2">
          <button @click="incrementItem(item)" class="btn btn-primary">+</button>
          <button @click="decrementItem(item)" class="btn btn-danger">-</button>
          <span class="text-sm font-medium">Quantity: {{ item.quantity }}</span>
        </div>
      </li>
    </ul>
    <p v-else class="text-center text-xl text-gray-400">Your cart is empty.</p>
    <div class="total-price mt-6 text-center">
      <p class="text-xl font-semibold">
        Total: &nbsp; <span class="text-yellow-400">{{ totalPrice.toFixed(2) }} €</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.cart-container {
  max-width: 900px;
  margin: 0 auto;
}

.cart-item-info {
  display: flex;
  align-items: center;
}

.cart-item-img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
}

.quantity-controls {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

button {
  margin-left: 1rem;
  border-radius: 50px;
  padding: 0.5rem 0.7rem;
  background-color: white;
  color: #333;
  border: none;
  cursor: pointer;
}

.remove-button {
  margin-right: 1.5rem;
  border-radius: 1rem;
  padding: 0.5rem 0.85rem;
  color: #333;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #777;
}

p {
  font-size: 1.2rem;
  margin-top: 2rem;
  text-align: center;
}
</style>
