<script lang="ts">
import { defineComponent} from 'vue'
import filamentsData from '../filaments.json'
import printersData from '../printers.json'
import accessoriesData from '../accesories.json'

export default defineComponent({
  data() {
    return {
      filaments: filamentsData,
      printers: printersData,
      accesorries: accessoriesData,
    }
  },
  emits: ['add-to-cart'],
  methods: {
    addToCart(item) {
      this.$emit('add-to-cart', item)
    },
  },
})

</script>

<template>
  <div>
    <div class="text-center my-8">
      <h1 class="text-4xl font-bold text-white-800">Filaments</h1>
      <p class="text-lg text-white-600 mt-2">Explore our wide selection of filaments for your 3D printing projects.</p>
    </div>

    <div class="flex justify-center mt-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        <div class="card" v-for="filament in filaments" :key="filament.id">
          <div class="card-img rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img :src="`/img/${filament.image}`" :alt="filament.name" class="w-full h-48 object-cover" />
          </div>
          <div class="card-info mt-4 p-4">
            <p class="text-xl font-semibold text-blue-600">{{ filament.name }}</p>
            <p class="text-sm text-gray-600 mt-2">{{ filament.description }}</p>
          </div>
          <div class="card-footer mt-4 p-4 flex justify-between items-center border-t border-gray-300">
            <span class="text-xl font-semibold text-blue-600">{{ filament.price.toFixed(2) }} €</span>
            <button
                class="card-button flex items-center justify-center text-white bg-green-500 hover:bg-green-600 p-2 rounded-full transition duration-300"
                @click="addToCart(filament)">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center my-8">
      <h1 class="text-4xl font-bold text-white-800">3D Printers</h1>
      <p class="text-lg text-white-600 mt-2">Browse through our selection of high-quality 3D printers.</p>
    </div>

    <div class="flex justify-center mt-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        <div class="card" v-for="printer in printers" :key="printer.id">
          <div class="card-img rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img :src="`/img/${printer.image}`" :alt="printer.name" class="w-full h-64 object-cover" />
          </div>
          <div class="card-info mt-4 p-4">
            <p class="text-xl font-semibold text-blue-600">{{ printer.name }}</p>
            <p class="text-sm text-gray-600 mt-2">{{ printer.description }}</p>
          </div>
          <div class="card-footer mt-4 p-4 flex justify-between items-center border-t border-gray-300">
            <span class="text-xl font-semibold text-blue-600">{{ printer.price.toFixed(2) }} €</span>
            <button
                class="card-button flex items-center justify-center text-white bg-green-500 hover:bg-green-600 p-2 rounded-full transition duration-300"
                @click="addToCart(printer)">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>



    <div class="text-center my-8">
      <h1 class="text-4xl font-bold text-white-800">3D Accesories</h1>
      <p class="text-lg text-white-600 mt-2">Browse through our selection of high-quality 3D printer accesories.</p>
    </div>

    <div class="flex justify-center mt-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        <div class="card" v-for="accesory in accesorries" :key="accesory.id">
          <div class="card-img rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img :src="`/img/${accesory.image}`" :alt="accesory.name" class="w-full h-64 object-cover" />
          </div>
          <div class="card-info mt-4 p-4">
            <p class="text-xl font-semibold text-blue-600">{{ accesory.name }}</p>
            <p class="text-sm text-gray-600 mt-2">{{ accesory.description }}</p>
          </div>
          <div class="card-footer mt-4 p-4 flex justify-between items-center border-t border-gray-300">
            <span class="text-xl font-semibold text-blue-600">{{ accesory.price.toFixed(2) }} €</span>
            <button
                class="card-button flex items-center justify-center text-white bg-green-500 hover:bg-green-600 p-2 rounded-full transition duration-300"
                @click="addToCart(accesory)">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
</style>
