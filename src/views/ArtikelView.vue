<script setup>
import { ref, computed } from 'vue';
import { useMainStore } from '@/stores/mainStore';
import BaseContainer from '@/components/ui/BaseContainer.vue';
import PageHeader from '@/components/ui/PageHeader.vue';
import ArticleCard from '@/components/ui/ArticleCard.vue';

const store = useMainStore();
const selectedCategory = ref('Semua');

// Extract Unique Categories
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
</script>

<template>
  <div class="min-h-screen bg-surface">
    <PageHeader
      title="Wawasan & Edukasi"
      subtitle="Panduan lengkap, tips bisnis, dan update regulasi terbaru seputar legalitas usaha."
    />

    <section class="py-16 pb-32">
      <BaseContainer>

        <div class="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="selectedCategory = cat"
            class="px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:-translate-y-0.5"
            :class="selectedCategory === cat
              ? 'bg-primary text-white shadow-lg shadow-blue-900/20 ring-2 ring-primary ring-offset-2'
              : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 hover:border-slate-300 shadow-sm'"
          >
            {{ cat }}
          </button>
        </div>

        <div v-if="filteredArticles.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ArticleCard
            v-for="article in filteredArticles"
            :key="article.id"
            :article="article"
          />
        </div>

        <div v-else class="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-200">
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
