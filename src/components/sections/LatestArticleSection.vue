<script setup>
import { onMounted, nextTick } from 'vue';
import { useMainStore } from '@/stores/mainStore';
import BaseContainer from '@/components/ui/BaseContainer.vue';
import SectionHeader from '@/components/ui/SectionHeader.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import ArticleCard from '@/components/ui/ArticleCard.vue';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const store = useMainStore();

onMounted(async () => {
  await nextTick(); // Wait DOM

  gsap.fromTo('.article-card-anim',
    {
      y: 60,
      autoAlpha: 0
    },
    {
      scrollTrigger: {
        trigger: '.article-section-trigger',
        start: 'top 85%',
      },
      y: 0,
      autoAlpha: 1,
      duration: 0.8,
      stagger: 0.15, 
      ease: 'power2.out'
    }
  );
});
</script>

<template>
  <section class="article-section-trigger bg-white py-24">
    <BaseContainer>

      <div class="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeader
          title="Wawasan & Berita"
          subtitle="Update terbaru seputar hukum, bisnis, dan legalitas di Indonesia."
          align="left"
          class="mb-0 max-w-2xl"
        />

        <div class="hidden pb-4 md:block">
          <BaseButton variant="outline" to="/artikel"> Lihat Semua Artikel </BaseButton>
        </div>
      </div>

      <div class="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

        <div
          v-for="article in store.latestArticles"
          :key="article.id"
          class="article-card-anim h-full"
        >
          <ArticleCard :article="article" />
        </div>

      </div>

      <div class="flex justify-center md:hidden">
        <BaseButton variant="outline" to="/artikel" class="w-full">
          Lihat Semua Artikel
        </BaseButton>
      </div>

    </BaseContainer>
  </section>
</template>
