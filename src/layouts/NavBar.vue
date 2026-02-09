<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { Menu, X} from 'lucide-vue-next'; // Ensure you installed lucide-vue-next
import BaseContainer from '@/components/ui/BaseContainer.vue';
import BaseButton from '@/components/ui/BaseButton.vue';

const isScrolled = ref(false);
const isMenuOpen = ref(false);
const route = useRoute();

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Tentang Kami', path: '/tentang-kami' },
  { name: 'Layanan', path: '/layanan' },
  { name: 'Artikel', path: '/artikel' },
];

// Handle Scroll Effect
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
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
      isScrolled || isMenuOpen
        ? 'bg-white/30 backdrop-blur-md shadow-sm py-4'
        : 'bg-white/90 backdrop-blur-md py-4'
    ]"
  >
    <BaseContainer>
      <div class="flex items-center justify-between">

        <RouterLink to="/" class="flex items-center gap-2 group z-50 relative">
        <img
          src="@/assets/logo-legaldk-logoonly-removed.png"
          alt="LegalDK Logo"
          class="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />

        <span
          class="font-bold text-xl tracking-tight transition-colors"
          :class="(isScrolled || isMenuOpen) ? 'text-primary' : 'text-primary'"
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

        <button
          @click="toggleMenu"
          class="md:hidden text-primary focus:outline-none z-50 relative"
          aria-label="Toggle Menu"
        >
          <X v-if="isMenuOpen" :size="28" />
          <Menu v-else :size="28" />
        </button>
      </div>
    </BaseContainer>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMenuOpen"
        class="absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 p-6 flex flex-col gap-4 md:hidden"
      >
        <router-link
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          @click="isMenuOpen = false"
          class="text-lg font-medium text-slate-600 py-3 border-b border-slate-50 hover:text-primary hover:pl-2 transition-all"
          :class="route.path === link.path ? 'text-primary font-bold pl-2 border-l-4 border-l-secondary' : ''"
        >
          {{ link.name }}
        </router-link>

        <div class="pt-4">
          <BaseButton
            to="/contact"
            class="w-full justify-center shadow-lg shadow-blue-500/20"
            @click="isMenuOpen = false"
          >
            Konsultasi Sekarang
          </BaseButton>
        </div>
      </div>
    </transition>

  </nav>
</template>
