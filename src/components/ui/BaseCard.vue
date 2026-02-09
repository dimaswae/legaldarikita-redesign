<script setup>
import { ref } from 'vue';
import { gsap } from 'gsap';

const cardRef = ref(null);

const onEnter = () => {
  gsap.to(cardRef.value, {
    y: -8, // Lift up   8px
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', // Tailwind 'shadow-xl' equivalent
    duration: 0.3,
    ease: 'power2.out'
  });
};

const onLeave = () => {
  gsap.to(cardRef.value, {
    y: 0, // Reset
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // Tailwind 'shadow-sm' equivalent
    duration: 0.3,
    ease: 'power2.out'
  });
};
</script>

<template>
  <div
    ref="cardRef"
    @mouseenter="onEnter"
    @mouseleave="onLeave"
    class="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm cursor-pointer"
  >
    <slot />
  </div>
</template>
