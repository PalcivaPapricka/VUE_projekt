<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutView',
})
</script>

<template>
  <div class="space-y-12">
    <section class="bg-gradient-to-b from-blue-500 to-blue-800 text-white py-16 text-center">
      <h1 class="text-4xl font-bold mb-4">About Printify3D</h1>
      <p class="text-xl mb-8">
        Bringing Your Ideas to Life with Premium 3D Printers, Materials, and Accessories.
      </p>
      <p class="text-lg">
        At Printify3D, we are dedicated to providing high-quality 3D printing solutions to makers, businesses, and hobbyists worldwide.
      </p>
    </section>

    <section class="px-6">
      <h2 class="text-3xl font-semibold text-center mb-12">Our Mission</h2>
      <div class="text-center max-w-2xl mx-auto">
        <p class="text-lg text-gray-700 mb-8">
          Our mission is simple: to empower creators, engineers, designers, and innovators by providing them with the best tools, materials, and resources available in the world of 3D printing. Whether you are a beginner or an expert, Printify3D is here to help you bring your ideas to life.
        </p>
        <p class="text-lg text-gray-700">
          With a range of 3D printers, filaments, accessories, and educational resources, we strive to deliver products that are not only high-quality but also affordable. Our customer service team is always ready to assist you, ensuring a smooth and seamless shopping experience.
        </p>
      </div>
    </section>

    <section class="bg-gray-100 py-16">
      <h2 class="text-3xl font-semibold text-center mb-12">Our Values</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
        <div class="bg-white p-8 rounded-lg shadow-lg text-center">
          <h3 class="text-xl font-bold text-blue-800 mb-4">Quality</h3>
          <p class="text-lg text-gray-700">
            We believe in delivering only the highest-quality products that will help you achieve outstanding results with every print.
          </p>
        </div>
        <div class="bg-white p-8 rounded-lg shadow-lg text-center">
          <h3 class="text-xl font-bold text-blue-800 mb-4">Innovation</h3>
          <p class="text-lg text-gray-700">
            We embrace new technologies and innovations in the 3D printing industry, ensuring that our customers have access to the latest tools and advancements.
          </p>
        </div>
        <div class="bg-white p-8 rounded-lg shadow-lg text-center">
          <h3 class="text-xl font-bold text-blue-800 mb-4">Customer Service</h3>
          <p class="text-lg text-gray-700">
            Our team is dedicated to providing exceptional customer support, ensuring you have everything you need to succeed with your 3D printing projects.
          </p>
        </div>
      </div>
    </section>

    <section class="px-6 py-16 text-center">
      <h2 class="text-3xl font-semibold mb-12">Meet Our Team</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <img src="https://via.placeholder.com/150" alt="Team Member" class="w-32 h-32 mx-auto mb-4 rounded-full">
          <h3 class="text-xl font-bold text-gray-900">John Doe</h3>
          <p class="text-gray-600">Founder & CEO</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <img src="https://via.placeholder.com/150" alt="Team Member" class="w-32 h-32 mx-auto mb-4 rounded-full">
          <h3 class="text-xl font-bold text-gray-900">Jane Smith</h3>
          <p class="text-gray-600">Head of Product</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <img src="https://via.placeholder.com/150" alt="Team Member" class="w-32 h-32 mx-auto mb-4 rounded-full">
          <h3 class="text-xl font-bold text-gray-900">Tom Brown</h3>
          <p class="text-gray-600">Customer Support Lead</p>
        </div>
      </div>
    </section>

    <section class="bg-blue-800 text-white py-12 text-center">
      <h2 class="text-3xl font-bold mb-4">Get in Touch with Us</h2>
      <p class="text-lg mb-8">Have questions or want to learn more? We're here to help!</p>
      <button class="bg-yellow-500 text-gray-800 font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300">
        Contact Us
      </button>
    </section>
  </div>
</template>

<style scoped>
</style>
