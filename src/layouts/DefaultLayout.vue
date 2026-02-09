<script setup>
import { RouterView, useRoute } from 'vue-router';
import Navbar from '@/layouts/NavBar.vue';
import Footer from '@/layouts/FooterLayout.vue';
import WhatsAppButton from '@/components/ui/WhatsappButton.vue';
import ScrollToTop from '@/components/ui/ScrollToTop.vue';

const route = useRoute();
</script>

<template>
  <div class="flex flex-col min-h-screen font-sans text-slate-900 bg-surface">
    <Navbar />

    <main class="flex-grow">
      <router-view :key="route.fullPath" />
    </main>

    <Footer />

    <ScrollToTop />
    <WhatsAppButton />
  </div>
</template>
