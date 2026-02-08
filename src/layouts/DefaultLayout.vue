<script setup>
import { RouterView } from 'vue-router';
import Navbar from '@/layouts/NavBar.vue';
import Footer from '@/layouts/FooterLayout.vue';
import WhatsAppButton from '@/components/ui/WhatsappButton.vue';
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

    <footer>
      <Footer />
    </footer>

    <WhatsAppButton />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
