<script setup>
import { RouterView } from 'vue-router';
import Navbar from '@/layouts/NavBar.vue';
// import Footer from '@/components/layout/Footer.vue'; // Uncomment when created
</script>

<template>
  <div class="min-h-screen flex flex-col bg-surface">

    <header class="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div class="container mx-auto px-4 h-16 flex items-center justify-between">
        <Navbar />
      </div>
    </header>

    <main class="grow">
      <slot>
        <RouterView />
      </slot>
    </main>

    <footer class="bg-primary text-white py-8 mt-12">
      <div class="container mx-auto px-4 text-center">
        <p class="text-sm opacity-80">&copy; 2026 LegalDK. All rights reserved.</p>
      </div>
    </footer>

  </div>
</template>
