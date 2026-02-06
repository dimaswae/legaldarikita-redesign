<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { Menu, X, Scale } from 'lucide-vue-next'; // Ensure you installed lucide-vue-next
import BaseContainer from '@/components/ui/BaseContainer.vue';
import BaseButton from '@/components/ui/BaseButton.vue';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const route = useRoute();

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/tentang-kami' },
  { name: 'Layanan', path: '/layanan' },
  { name: 'Artikel', path: '/artikel' },
];

// Handle Scroll Effect
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    ]"
  >
    <BaseContainer>
      <div class="flex items-center justify-between">

        <RouterLink to="/" class="flex items-center gap-2 group">
          <div class="bg-primary text-white p-2 rounded-lg group-hover:bg-secondary transition-colors">
            <Scale :size="24" />
          </div>
          <span
            class="font-bold text-xl tracking-tight"
            :class="isScrolled ? 'text-primary' : 'text-primary'"
          >
            Legal<span class="text-secondary">DK</span>
          </span>
        </RouterLink>

        <div class="hidden md:flex items-center gap-8">
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="text-sm font-medium transition-colors hover:text-secondary"
            :class="route.path === link.path ? 'text-secondary font-semibold' : 'text-slate-600'"
          >
            {{ link.name }}
          </RouterLink>

          <BaseButton variant="primary" size="sm" to="/contact">
            Konsultasi Gratis
          </BaseButton>
        </div>

        <button class="md:hidden text-slate-700" @click="isMobileMenuOpen = !isMobileMenuOpen">
          <X v-if="isMobileMenuOpen" />
          <Menu v-else />
        </button>
      </div>

      <div v-if="isMobileMenuOpen" class="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col p-4 gap-4 animate-in slide-in-from-top-2">
        <RouterLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="text-base font-medium text-slate-700 py-2 border-b border-slate-100"
          @click="isMobileMenuOpen = false"
        >
          {{ link.name }}
        </RouterLink>
        <BaseButton variant="primary" block to="/contact" @click="isMobileMenuOpen = false">
          Konsultasi Gratis
        </BaseButton>
      </div>

    </BaseContainer>
  </nav>
</template>
