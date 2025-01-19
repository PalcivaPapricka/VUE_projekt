<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FooterComponent',
  data() {
    return {
      linkGroups: {
        'Shop': {
          '3D Printers': '/shop',
          'Filaments': '/shop',
          'Accessories': '/shop',
        },
        'Support': {
          'Contact Us': '/about',
          'Shipping Information': '/about',
          'Warranty & Returns': '/about',
        },
        'Resources': {
          '3D Printing Guides': '/about',
          'Blog': '/about',
          'Community Forum': '/about',
        },
        'Company': {
          'About Us': '/about',
          'Careers': '/about',
          'Privacy Policy': '/about',
          'Terms of Service': '/about',
        },
      },
    }
  },
  computed: {
    aktualnyRok(): number {
      return new Date().getFullYear()
    },
  },
})
</script>

<template>
  <footer class="w-full py-12 mt-24 text-gray-500 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 xl:pb-24">
    <div class="grid max-w-screen-xl grid-cols-2 md:grid-cols-4 mx-auto">
      <div v-for="(link, group) in linkGroups" :key="group" class="mx-auto text-center">
        <h1 class="text-xl font-bold text-yellow-500">{{ group }}</h1>
        <nav class="mt-4">
          <ul class="space-y-2">
            <li v-for="(href, title) in link" :key="href">
              <a :href="href">{{ title }}</a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="col-span-2 md:col-span-4 text-center mt-16 lg:mt-20 space-y-4">
        <p class="italic">
          Printify3D — Bringing your ideas to life with premium 3D printers, materials, and accessories.
        </p>
        <p class="text-sm mt-2">
          Copyright &copy; 2021 ‐ <span>{{ aktualnyRok }}</span> Printify3D. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>


<style scoped>
a[href] {
  @apply text-gray-900 dark:text-gray-100;
}
</style>
