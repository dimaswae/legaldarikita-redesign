<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { ArrowUp } from 'lucide-vue-next';

const isVisible = ref(false);

const checkScroll = () => {
  isVisible.value = window.scrollY > 400;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>

<template>
  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <button
      v-show="isVisible"
      @click="scrollToTop"
      class="fixed bottom-24 right-6 z-40 p-3 rounded-full bg-white text-slate-800 shadow-xl border border-slate-100 hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300 group"
      aria-label="Scroll to top"
    >
      <ArrowUp :size="20" class="group-hover:text-primary transition-colors" />
    </button>
  </transition>
</template>
