<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline', 'ghost', 'white'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  to: {
    type: String,
    default: null
  },
  block: Boolean
});

// Tailwind Classes Logic
const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed";

const variantClasses = {
  primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
  secondary: "bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary shadow-lg shadow-blue-500/30",
  outline: "border-2 border-primary text-primary hover:bg-primary/5",
  ghost: "text-gray-600 hover:text-primary hover:bg-gray-100",
  white: "bg-white text-primary hover:bg-gray-50 shadow-sm" // Good for Hero over dark images
};

const sizeClasses = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-8 py-3.5 text-lg"
};

const classes = computed(() => {
  return [
    baseClasses,
    variantClasses[props.variant],
    sizeClasses[props.size],
    props.block ? 'w-full' : ''
  ].join(' ');
});

// Determine tag type (RouterLink or Button)
const tag = computed(() => props.to ? 'router-link' : 'button');
</script>

<template>
  <component :is="tag" :to="to" :class="classes">
    <slot />
  </component>
</template>
