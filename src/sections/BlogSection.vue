<script setup>
</script>

<template>
  <div class="h-screen flex flex-col items-center justify-center bg-gray-800" id="blog">
    <div class="text-center text-5xl font-semibold mb-5 text-white">
      <h1>Blog</h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Blog Card 1 -->
      <div class="max-w-sm rounded-lg shadow-lg bg-white overflow-hidden">
        <img src="../assets/LINE_ALBUM_งาน_240602_1.jpg" alt="Blog 1" class="w-full h-48 object-cover">
        <div class="p-6">
          <h2 class="text-xl font-semibold mb-2">Blog Title 1</h2>
          <p class="text-gray-700 mb-4">This is a short description of the blog post. It gives a brief overview of the content.</p>
          <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded transform transition-transform duration-200 hover:scale-110">
            Read More
          </button>
        </div>
      </div>
      <!-- Blog Card 2 -->
      <div class="max-w-sm rounded-lg shadow-lg bg-white overflow-hidden">
        <img src="../assets/LINE_ALBUM_งาน_240602_2.jpg" alt="Blog 2" class="w-full h-48 object-cover">
        <div class="p-6">
          <h2 class="text-xl font-semibold mb-2">Blog Title 2</h2>
          <p class="text-gray-700 mb-4">This is a short description of the blog post. It gives a brief overview of the content.</p>
          <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded transform transition-transform duration-200 hover:scale-110">
            Read More
          </button>
        </div>
      </div>
      <!-- Blog Card 3 -->
      <div class="max-w-sm rounded-lg shadow-lg bg-white overflow-hidden">
        <img src="../assets/LINE_ALBUM_งาน_240602_3.jpg" alt="Blog 3" class="w-full h-48 object-cover">
        <div class="p-6">
          <h2 class="text-xl font-semibold mb-2">Blog Title 3</h2>
          <p class="text-gray-700 mb-4">This is a short description of the blog post. It gives a brief overview of the content.</p>
          <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded transform transition-transform duration-200 hover:scale-110">
            Read More
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Additional styles can go here if needed */
</style>
