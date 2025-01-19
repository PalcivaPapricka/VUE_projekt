<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useCartStore } from '../stores/counter.ts'; // Import Pinia store

export default defineComponent({
  name: 'Cart_comp',
  setup() {
    const cartStore = useCartStore();

    const cartItems = computed(() => cartStore.items);

    const totalPrice = computed(() =>
        cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0)
    );

    const incrementItem = (item: { id: number; price: number }) => {
      cartStore.incrementItem(item);
    };

    const decrementItem = (item: { id: number; price: number }) => {
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
  <div class="cart-container">
    <h1>Shopping Cart &nbsp; <i class="fa fa-credit-card" aria-hidden="true"></i></h1>
    <ul v-if="cartItems.length > 0">
      <li v-for="item in cartItems" :key="item.id" class="cart-item">
        <div class="cart-item-info">
          <img :src="`/img/${item.image}`" :alt="item.name" class="cart-item-img" />
          <span>{{ item.name }} - ${{ item.price.toFixed(2) }}</span>
        </div>
        <div class="quantity-controls">
          <button @click="incrementItem(item)">+</button>
          <button @click="decrementItem(item)" class="remove-button">-</button>
          <span>Quantity: {{ item.quantity }}</span>
        </div>
      </li>
    </ul>
    <p v-else>Your cart is empty.</p>
    <p>Total: &nbsp; {{ totalPrice.toFixed(2) }} €</p>
  </div>
</template>


<style scoped>
h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: white;
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li.cart-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 0.5rem;
  background-color: #222;
  border-radius: 0.5rem;
  padding: 0.5rem;
  align-items: center;
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

span {
  display: flex;
  align-items: center;
  width: fit-content;
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

.cart-container {
  margin-top: 2rem;
  margin-bottom: 6rem;
  color: white;
  height: fit-content;
  background-color: #1a1a1a;
  padding: 2em;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
}
</style>
