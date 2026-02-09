<script setup>
import { ref, computed, onMounted, nextTick, watch } from 'vue';
import { useMainStore } from '@/stores/mainStore';
import BaseContainer from '@/components/ui/BaseContainer.vue';
import ArticleCard from '@/components/ui/ArticleCard.vue';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const store = useMainStore();
const selectedCategory = ref('Semua');

const categories = computed(() => {
  const uniqueCats = new Set(store.articles.map(a => a.category));
  return ['Semua', ...Array.from(uniqueCats)];
});

// Filter Logic
const filteredArticles = computed(() => {
  if (selectedCategory.value === 'Semua') {
    return store.articles;
  }
  return store.articles.filter(article => article.category === selectedCategory.value);
});

// --- GSAP Animations ---

const animateGrid = () => {
  gsap.fromTo('.article-card-anim',
    { y: 30, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
  );
};

watch(selectedCategory, async () => {
  await nextTick();
  animateGrid();
});

onMounted(async () => {
  await nextTick();

  // Hero Animation
  const tl = gsap.timeline();

  tl.fromTo('.article-hero-bg',
    { scale: 1.1 },
    { scale: 1, duration: 1.5, ease: 'power1.out' }
  )
  .fromTo('.article-hero-title',
    { y: 30, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, duration: 1, ease: 'power3.out' },
    '-=1'
  )
  .fromTo('.article-hero-subtitle',
    { y: 20, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out' },
    '-=0.6'
  );

  // Filter Buttons Animation
  gsap.fromTo('.filter-btn-anim',
    { y: -15, autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.6,
      stagger: 0.05,
      ease: 'back.out(1.5)',
      delay: 0.5
    }
  );

  // Initial Grid Animation
  animateGrid();
});
</script>

<template>
  <div class="min-h-screen bg-surface">

    <section class="relative h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Books and Learning"
          class="article-hero-bg w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      </div>

      <BaseContainer class="relative z-10 text-center text-white">
        <h1 class="article-hero-title text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          Wawasan & Edukasi
        </h1>
        <p class="article-hero-subtitle text-lg md:text-xl text-blue-100 max-w-2xl mx-auto font-light">
          Panduan lengkap, tips bisnis, dan update regulasi terbaru seputar legalitas usaha.
        </p>
      </BaseContainer>
    </section>

    <section class="py-16 pb-32">
      <BaseContainer>

        <div class="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="selectedCategory = cat"
            class="filter-btn-anim px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:-translate-y-0.5"
            :class="selectedCategory === cat
              ? 'bg-primary text-white shadow-lg shadow-blue-900/20 ring-2 ring-primary ring-offset-2'
              : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 hover:border-slate-300 shadow-sm'"
          >
            {{ cat }}
          </button>
        </div>

        <div v-if="filteredArticles.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div
            v-for="article in filteredArticles"
            :key="article.id"
            class="article-card-anim h-full"
          >
            <ArticleCard :article="article" />
          </div>

        </div>

        <div v-else class="article-card-anim text-center py-20 bg-white rounded-2xl border border-dashed border-slate-200">
          <div class="text-6xl mb-4">📂</div>
          <h3 class="text-xl font-bold text-slate-700 mb-2">Belum ada artikel</h3>
          <p class="text-slate-500">
            Maaf, belum ada artikel untuk kategori <strong>{{ selectedCategory }}</strong> saat ini.
          </p>
          <button
            @click="selectedCategory = 'Semua'"
            class="mt-6 text-secondary font-medium hover:underline"
          >
            Lihat semua artikel
          </button>
        </div>

      </BaseContainer>
    </section>
  </div>
</template>
