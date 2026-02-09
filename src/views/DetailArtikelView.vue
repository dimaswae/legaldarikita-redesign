<script setup>
import { computed,onMounted , watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useMainStore } from '@/stores/mainStore';
import { useHead } from '@vueuse/head';
import BaseContainer from '@/components/ui/BaseContainer.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import { Calendar, User, ArrowLeft, Share2, Facebook, Linkedin, Twitter } from 'lucide-vue-next';

const route = useRoute();
const router = useRouter();
const store = useMainStore();

// Find Article by Slug
const article = computed(() => {
  return store.articles.find(a => a.slug === route.params.slug);
});

// Simple Share Mockup
const shareArticle = () => {
  if (navigator.share) {
    navigator.share({
      title: article.value.title,
      url: window.location.href
    });
  } else {
    alert('Link artikel telah disalin ke clipboard!');
  }
};

// 3. Redirect if service not found
onMounted(() => {
  if (!article.value) {
    router.push('/artikel');
  }
});

// --- SEO Logic ---
watchEffect(() => {
  if (article.value) {
    useHead({
      title: article.value.title,
      meta: [
        { name: 'description', content: article.value.excerpt },
        { name: 'author', content: 'LegaLDK Editorial Team' },

        // Social Media Image
        { property: 'og:title', content: article.value.title },
        { property: 'og:description', content: article.value.excerpt },
        { property: 'og:image', content: article.value.thumbnail }, // Shows the blog image on WhatsApp
        { name: 'twitter:image', content: article.value.thumbnail },
      ]
    })
  }
})
</script>

<template>
  <div v-if="article" class="bg-white min-h-screen pb-24">

    <div class="h-64 bg-primary relative overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
    </div>

    <BaseContainer class="relative -mt-40 max-w-4xl">

      <router-link to="/artikel" class="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors font-medium">
        <ArrowLeft :size="20" class="mr-2" /> Kembali ke Artikel
      </router-link>

      <div class="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">

        <div class="aspect-video w-full relative">
          <img
            :src="article.thumbnail"
            :alt="article.title"
            class="w-full h-full object-cover"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>

          <span class="absolute top-6 left-6 px-4 py-1.5 bg-secondary text-white rounded-full text-xs font-bold uppercase tracking-wide shadow-md">
            {{ article.category }}
          </span>
        </div>

        <div class="px-6 py-10 md:px-12 md:py-12">

          <div class="flex flex-wrap items-center gap-6 text-slate-500 text-sm mb-8 border-b border-slate-100 pb-8">
            <div class="flex items-center gap-2">
              <User :size="18" class="text-secondary" />
              <span class="font-medium text-slate-700">Admin LegaLDK</span>
            </div>
            <div class="flex items-center gap-2">
              <Calendar :size="18" class="text-secondary" />
              <span>{{ article.date }}</span>
            </div>
          </div>

          <h1 class="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-8">
            {{ article.title }}
          </h1>

          <div
            class="article-content text-lg text-slate-600 leading-relaxed"
            v-html="article.content || '<p>Konten artikel sedang dimuat...</p>'"
          ></div>

          <div class="mt-16 pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <p class="text-slate-500 font-medium">Bagikan wawasan ini:</p>
            <div class="flex gap-3">
              <button @click="shareArticle" class="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all">
                <Share2 :size="18" />
              </button>
              <button class="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-[#1877F2] hover:text-white transition-all">
                <Facebook :size="18" />
              </button>
              <button class="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-[#0A66C2] hover:text-white transition-all">
                <Linkedin :size="18" />
              </button>
              <button class="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-black hover:text-white transition-all">
                <Twitter :size="18" />
              </button>
            </div>
          </div>

        </div>
      </div>

    </BaseContainer>
  </div>

  <div v-else class="min-h-screen flex flex-col items-center justify-center bg-slate-50">
    <div class="text-center">
      <h1 class="text-3xl font-bold text-slate-300 mb-4">Artikel Tidak Ditemukan</h1>
      <BaseButton to="/artikel" variant="outline">Kembali ke Daftar Artikel</BaseButton>
    </div>
  </div>
</template>

<style scoped>
/* Custom Typography Styling for v-html content */
.article-content :deep(p) {
  margin-bottom: 1.75rem;
}

.article-content :deep(h2) {
  font-size: 1.75rem;
  font-weight: 800;
  color: #1e293b; /* Slate 800 */
  margin-top: 3rem;
  margin-bottom: 1.25rem;
  letter-spacing: -0.025em;
}

.article-content :deep(h3) {
  font-size: 1.4rem;
  font-weight: 700;
  color: #334155; /* Slate 700 */
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.article-content :deep(ul) {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 1.75rem;
}

.article-content :deep(li) {
  margin-bottom: 0.5rem;
  padding-left: 0.5rem;
}

.article-content :deep(strong) {
  color: #0f172a; /* Slate 900 */
  font-weight: 700;
}

.article-content :deep(a) {
  color: #3b82f6; /* Blue 500 */
  text-decoration: underline;
  text-underline-offset: 4px;
}
</style>
