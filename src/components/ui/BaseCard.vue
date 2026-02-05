<script setup>
defineProps({
  hoverEffect: {
    type: Boolean,
    default: true
  }
});
</script>

<template>
  <div
    class="bg-white rounded-xl border border-gray-100 overflow-hidden"
    :class="hoverEffect ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : 'shadow-sm'"
  >
    <slot />
  </div>
</template>
