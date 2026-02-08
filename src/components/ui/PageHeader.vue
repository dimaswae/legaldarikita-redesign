<script setup>
import BaseContainer from '@/components/ui/BaseContainer.vue';

defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div class="bg-primary pt-32 pb-16 text-center">
    <BaseContainer>
      <h1 class="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
        {{ title }}
      </h1>
      <p v-if="subtitle" class="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
        {{ subtitle }}
      </p>
    </BaseContainer>
  </div>
</template>
