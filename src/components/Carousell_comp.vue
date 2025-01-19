<script lang="ts">
import { defineComponent } from 'vue'
import reviewsData from '../reviews.json'
export default defineComponent({
  name: 'Carousell_comp',
  data() {
    return {
      reviews: reviewsData.reviews,
      currentIndex: 0,
      reviewsPerPage: 4
    };
  },
  computed: {
    visibleReviews() {
      return this.reviews.slice(this.currentIndex, this.currentIndex + this.reviewsPerPage).concat(
          this.reviews.slice(0, Math.max(0, this.currentIndex + this.reviewsPerPage - this.reviews.length))
      );
    }
  },
  methods: {
    next() {
      this.currentIndex = (this.currentIndex + this.reviewsPerPage) % this.reviews.length;
    },
    prev() {
      this.currentIndex = (this.currentIndex - this.reviewsPerPage + this.reviews.length) % this.reviews.length;
    }
  }
})
</script>

<template>
  <div class="flex items-center justify-center relative w-full overflow-hidden">
    <button @click="prev" class="absolute left-4 text-2xl p-1 bg-yellow-500 border-none cursor-pointer select-none text-black">
      &#10094;
    </button>
    <div class="flex gap-4 transition-transform ease-in-out duration-500">
      <div class="w-1/3 p-5 bg-gray-100 border border-gray-300 rounded-lg text-center text-black" v-for="(review, index) in visibleReviews" :key="index">
        <h3 class="text-lg font-bold">{{ review.username }}</h3>
        <p class="text-sm">Rating: {{ review.rating }} / 5</p>
        <p class="text-base">{{ review.comment }}</p>
      </div>
    </div>
    <button @click="next" class="absolute right-4 text-2xl p-1 bg-yellow-500 border-none cursor-pointer select-none text-black">
      &#10095;
    </button>
  </div>
</template>



<style scoped>
</style>
