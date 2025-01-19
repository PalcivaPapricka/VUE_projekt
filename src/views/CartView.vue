<script lang="ts">
import { defineComponent } from 'vue';
import ShopingCart from "@/components/Cart_comp.vue";
export default defineComponent({
  name: 'CartView',
  components: {
    ShopingCart,
  },
});
</script>
<template>
  <div class="cart-container p-6 bg-gray-900 text-white rounded-lg shadow-md">
    <br /><br />

    <ShopingCart />

    <div class="checkout-btn mt-6 text-center">
      <button class="btn btn-success py-2 px-6 rounded-lg text-white font-semibold hover:bg-green-700 transition duration-300 ease-in-out">
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
