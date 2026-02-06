<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    type: String,
    default: ''
  }
});
</script>
<template>
  <div class="bg-primary pt-32 pb-16 relative overflow-hidden">
    <div class="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

    <BaseContainer class="relative z-10 text-center">
      <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">{{ title }}</h1>
      <p v-if="subtitle" class="text-blue-100 text-lg max-w-2xl mx-auto">{{ subtitle }}</p>
    </BaseContainer>
  </div>
</template>
