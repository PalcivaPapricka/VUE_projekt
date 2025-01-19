<script lang="ts">
import { defineComponent } from 'vue'
import Carousell from "@/components/Carousell_comp.vue";
export default defineComponent({
  name: 'HomeView',
  components: {Carousell},

  methods: {
    goToShop() {
      this.$router.push('/shop');
    }
  }
})
</script>

<template>
  <div class="space-y-12">

    <section class="bg-gradient-to-b from-blue-500 to-blue-800 text-white py-16 text-center">
      <h1 class="text-4xl font-bold mb-4">Printify3D</h1>
      <p class="text-xl mb-8">Bringing Your Ideas to Life with Premium 3D Printers, Materials, and Accessories</p>
      <button class="bg-yellow-500 text-gray-800 font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300" @click="goToShop" >
        Shop Now
      </button>
    </section>

    <section class="px-6">
      <h2 class="text-3xl font-semibold text-center mb-12">Featured Products</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <img src="/img/ender.webp" alt="3D Printer" class="w-full h-56 object-cover rounded-md mb-4">
          <h3 class="text-xl font-bold text-gray-900">XYZ 3D Printer</h3>
          <p class="text-gray-600 mt-2">High quality 3D printing for personal or professional use.</p>
          <div class="mt-4 flex justify-between items-center">
            <span class="text-xl text-gray-600 font-semibold">$799.99</span>
          </div>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <img src="/img/white.webp" alt="Filament" class="w-full h-56 object-cover rounded-md mb-4">
          <h3 class="text-xl font-bold text-gray-900">PLA Filament - 1kg</h3>
          <p class="text-gray-600 mt-2">High-quality filament for smooth and durable prints.</p>
          <div class="mt-4 flex justify-between items-center">
            <span class="text-xl text-gray-600 font-semibold">$29.99</span>
          </div>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <img src="/img/stepper.webp" alt="3D Printer Accessories" class="w-full h-56 object-cover rounded-md mb-4">
          <h3 class="text-xl font-bold text-gray-900">3D Printer Accessory Kit</h3>
          <p class="text-gray-600 mt-2">Essential tools and accessories for your 3D printing needs.</p>
          <div class="mt-4 flex justify-between items-center">
            <span class="text-xl text-gray-600 font-semibold">$49.99</span>
          </div>
        </div>
      </div>
    </section>

    <carousell />

    <section class="bg-blue-800 text-white py-12 text-center">
      <h2 class="text-3xl font-bold mb-4">Start Creating Today with Printify3D</h2>
      <p class="text-lg mb-8">Get the best 3D printers, filaments, and accessories all in one place. Take your projects to the next level.</p>
      <button class="bg-yellow-500 text-gray-800 font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300" @click="goToShop">
        Explore Our Products
      </button>
    </section>

  </div>
</template>

<style scoped>
</style>
