<script setup>
defineProps({
  title: String,
  subtitle: String,
  align: {
    type: String,
    default: 'center', // 'left', 'center', 'right'
  }
});

const alignmentClasses = {
  left: 'text-left',
  center: 'text-center mx-auto',
  right: 'text-right ml-auto'
};
</script>

<template>
  <div class="mb-12 max-w-3xl" :class="alignmentClasses[align]">
    <h2 v-if="title" class="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="text-lg text-gray-600 leading-relaxed">
      {{ subtitle }}
    </p>
  </div>
</template>
