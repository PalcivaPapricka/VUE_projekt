<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '../stores/counter.ts';
import Filaments from "@/components/Filaments_comp.vue";

export default defineComponent({
  name: 'ShopView',
  components: {
    Filaments,
  },
  data() {
    const cartStore = useCartStore();
    return {
      cartStore,
    };
  },
  methods: {
    handleAddToCart(filament: { id: number; name: string; price: number; image: string }) {
      this.cartStore.addItem(filament);
    },
  },
});
</script>

<template>
  <div class="shop-view">
    <h1 class="shop-title">Shop 3D Filaments</h1>
    <Filaments @add-to-cart="handleAddToCart" />
  </div>
</template>

<style scoped>
.shop-view {
  padding: 2rem;
  text-align: center;
}

.shop-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 2rem;
}
</style>
