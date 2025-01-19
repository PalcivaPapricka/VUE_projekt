<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useCartStore } from '../stores/counter.ts';

export default defineComponent({
  name: 'HeaderComponent',
  components: {},
  data() {
    return {
      mobileMenuOpen: false,
      links: {
        Home: ['home'],
        About: ['about'],
        Shop: ['shop'],
        Cart: ['cart']
      },
    }
  },
  setup() {
    const cartStore = useCartStore();

    const totalPrice = computed(() => {
      return cartStore.items.reduce((total, item) => total + item.price * item.quantity, 0);
    });

    return {
      totalPrice
    }
  }
})
</script>


<template>
  <header
      class="fixed top-0 left-0 w-full z-50 flex flex-row items-center px-6 py-6 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900"
  >
    <div class="font-bold text-2xl text-yellow-500 dark:text-yellow-400">
      Printify
    </div>

    <div class="flex-1 flex justify-center">
      <nav
          class="fixed top-16 left-0 z-50 flex-col w-full px-6 py-4 mt-4 font-semibold rounded-lg shadow-md md:relative md:top-0 md:flex md:flex-row md:space-x-6 md:w-auto md:rounded-none md:bg-transparent text-center"
          :class="mobileMenuOpen ? 'flex bg-gray-100 dark:bg-gray-900' : 'hidden'"
      >
        <RouterLink
            v-for="(icon, title) in links"
            :key="title"
            :to="{ name: title.toLowerCase() }"
            @click="mobileMenuOpen = false"
        >
          <a class="flex justify-center items-center space-x-2">
            <span>{{ title }}</span>
            <span v-if="title === 'Cart'" class="text-yellow-400 ml-2">
              {{ totalPrice.toFixed(2) }} €
            </span>
          </a>
        </RouterLink>
      </nav>
    </div>

    <button
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="self-center inline-block w-8 h-8 p-1 text-gray-600 bg-gray-200 focus:outline-none md:hidden dark:bg-gray-800 dark:text-gray-400 hover:text-gray-500"
        aria-label="Open Mobile Menu"
    >
      <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  </header>
</template>


<style scoped>
a {
  @apply text-gray-800 dark:text-gray-200 hover:text-yellow-400;
}

.router-link-active a {
  @apply text-yellow-500 hover:text-yellow-600;
}

.text-yellow-400 {
  font-weight: bold;
}
</style>