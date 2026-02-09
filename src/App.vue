<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useHead } from '@vueuse/head';
import DefaultLayout from '@/layouts/DefaultLayout.vue'

// Global SEO
useHead({
  title: 'LegaLDK - Jasa Legalitas & Perizinan Bisnis Terpercaya',
  titleTemplate: (title) => title.includes('LegaLDK') ? title : `${title} | LegaLDK`, // Auto-append brand name
  meta: [
    { name: 'description', content: 'Urus izin PT, CV, NIB, dan Legalitas lainnya dengan mudah melalui LegaLDK. Solusi cepat, aman, dan terpercaya untuk kebutuhan legalitas bisnis Anda.' },
    { name: 'keywords', content: 'izin PT, izin CV, NIB, legalitas bisnis, jasa legalitas, perizinan bisnis' },
    { name: 'author', content: 'LegaLDK' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'robots', content: 'index, follow' },
    { name: 'theme-color', content: '#4A90E2' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Legaldarikita' },
    { property: 'og:locale', content: 'id_ID' },
    { property: 'og:title', content: 'LegaLDK - Jasa Legalitas & Perizinan Bisnis Terpercaya' },
    { property: 'og:description', content: 'Urus izin PT, CV, NIB, dan Legalitas lainnya dengan mudah melalui LegaLDK. Solusi cepat, aman, dan terpercaya untuk kebutuhan legalitas bisnis Anda.' },
    { property: 'og:url', content: 'https://legaldarikita.com' },
    { property: 'og:image', content: 'https://legaldarikita.com/og-image.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@Legaldarikita' },
  ],
})
</script>

<template>
  <DefaultLayout>
    <RouterView />
  </DefaultLayout>
</template>
