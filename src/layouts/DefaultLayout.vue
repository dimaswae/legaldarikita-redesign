<script setup>
import { RouterView } from 'vue-router';
import Navbar from '@/layouts/NavBar.vue';
import Footer from '@/layouts/FooterLayout.vue';
import WhatsAppButton from '@/components/ui/WhatsappButton.vue';
import ScrollToTop from '@/components/ui/ScrollToTop.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen font-sans text-slate-900 bg-surface">
    <Navbar />

    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <Footer />

    <ScrollToTop />
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
