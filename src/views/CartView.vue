<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useCartStore } from '../stores/counter.ts';
export default defineComponent({
  name: 'CartView',
  setup() {
    const cartStore = useCartStore();

    const cartItems = computed(() => cartStore.items);
    const totalPrice = computed(() =>
        cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0)
    );

    const incrementItem = (item: { id: number; name: string }) => {
      cartStore.incrementItem(item);
    };

    const decrementItem = (item: { id: number; name: string }) => {
      cartStore.decrementItem(item);
    };

    return {
      cartItems,
      totalPrice,
      incrementItem,
      decrementItem,
    };
  },
});
</script>

<template>
  <div class="cart-container p-6 bg-gray-900 text-white rounded-lg shadow-md">
    <br /><br />
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
          <span class="text-sm text-gray-400">${{ item.price.toFixed(2) }}</span>
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
    <div class="checkout-btn mt-6 text-center">
      <button
          class="btn btn-success py-2 px-6 rounded-lg text-white font-semibold hover:bg-green-700 transition duration-300 ease-in-out"
      >
        Proceed to Checkout
      </button>
    </div>
  </div>
</template>

<style scoped>
.btn {
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-primary {
  background-color: #4caf50; /* Green */
}

.btn-danger {
  background-color: #e74c3c; /* Red */
}

.btn-success {
  background-color: #2ecc71; /* Green */
}

.btn:hover {
  opacity: 0.8;
}

.cart-container {
  max-width: 900px;
  margin: 0 auto;
}
</style>
