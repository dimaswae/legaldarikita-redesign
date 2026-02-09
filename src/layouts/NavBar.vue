<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { Menu, X } from 'lucide-vue-next';
import BaseContainer from '@/components/ui/BaseContainer.vue';
import BaseButton from '@/components/ui/BaseButton.vue';

const isScrolled = ref(false);
const isMenuOpen = ref(false);
const route = useRoute();

// --- Sliding Line Logic ---
const navRefs = ref([]); // Simpan DOM elements
const indicatorStyle = ref({
  left: '0px',
  width: '0px',
  opacity: 0
});

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Tentang Kami', path: '/tentang-kami' },
  { name: 'Layanan', path: '/layanan' },
  { name: 'Artikel', path: '/artikel' },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Function untuk mengupdate posisi dan lebar indikator
const updateIndicator = async () => {
  await nextTick(); // Wait for DOM

  // Mencari index link yang aktif
  const activeIndex = navLinks.findIndex(link => link.path === route.path);

  // Jika ada link aktif, update posisi dan lebar indikator
  if (activeIndex !== -1 && navRefs.value[activeIndex]) {
    const el = navRefs.value[activeIndex];

    indicatorStyle.value = {
      left: `${el.offsetLeft}px`,
      width: `${el.offsetWidth}px`,
      opacity: 1
    };
  } else {
    // Jika tidak ada link aktif, sembunyikan indikator
    indicatorStyle.value = { ...indicatorStyle.value, opacity: 0 };
  }
};

// Watch untuk route changes
watch(() => route.path, () => {
  updateIndicator();
  isMenuOpen.value = false; // Auto close mobile menu on navigation
});

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  // menghitung posisi awal indikator
  updateIndicator();
  // mengupdate indikator saat resize
  window.addEventListener('resize', updateIndicator);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', updateIndicator);
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

        <div class="hidden md:flex items-center gap-8 relative">

          <RouterLink
            v-for="(link, index) in navLinks"
            :key="link.path"
            :to="link.path"
            :ref="(el) => { if(el) navRefs[index] = el.$el }"
            class="text-sm font-medium transition-colors hover:text-secondary py-2"
            :class="route.path === link.path ? 'text-secondary font-bold' : 'text-slate-600'"
          >
            {{ link.name }}
          </RouterLink>

          <div
            class="absolute bottom-0 h-[3px] bg-secondary rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]"
            :style="indicatorStyle"
          ></div>

          <BaseButton variant="primary" size="sm" to="/contact" class="ml-4">
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
