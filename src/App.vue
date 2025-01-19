<script setup lang="ts">
import Header from '@/components/Header_comp.vue'
import Footer from '@/components/Footer_comp.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-grow">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

main {
  flex-grow: 1;
}
</style>
