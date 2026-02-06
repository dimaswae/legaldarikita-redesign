<script setup>
import { Calendar, ArrowRight } from 'lucide-vue-next';

defineProps({
  article: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <router-link
    :to="`/artikel/${article.slug}`"
    class="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
  >
    <div class="relative overflow-hidden aspect-video">
      <img
        :src="article.thumbnail"
        :alt="article.title"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm uppercase tracking-wide">
        {{ article.category }}
      </div>
    </div>

    <div class="p-6 flex flex-col flex-grow">

      <div class="flex items-center gap-2 text-slate-500 text-xs mb-3 font-medium">
        <Calendar :size="14" />
        <span>{{ article.date }}</span>
      </div>

      <h3 class="text-xl font-bold text-primary mb-3 leading-snug group-hover:text-secondary transition-colors line-clamp-2">
        {{ article.title }}
      </h3>

      <p class="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
        {{ article.excerpt }}
      </p>

      <div class="flex items-center text-secondary font-semibold text-sm mt-auto">
        Baca Selengkapnya
        <ArrowRight :size="16" class="ml-2 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  </router-link>
</template>
