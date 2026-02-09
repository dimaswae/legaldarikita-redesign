<script setup>
import { onMounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import BaseContainer from '@/components/ui/BaseContainer.vue';
import SectionHeader from '@/components/ui/SectionHeader.vue';
import { BadgeCheck, Zap, Users, ShieldCheck } from 'lucide-vue-next';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'Anti-Ribet & Minim Revisi',
    desc: 'Kami memastikan KBLI sesuai kegiatan usaha sejak awal agar dokumen tidak bolak-balik ditolak di sistem OSS.',
    icon: BadgeCheck,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50'
  },
  {
    title: 'Selesai dalam 3-6 Hari',
    desc: 'Waktu Anda berharga. Kami memberikan estimasi waktu yang jelas dan mengeksekusi pengurusan izin seefisien mungkin.',
    icon: Zap,
    color: 'text-amber-600',
    bg: 'bg-amber-50'
  },
  {
    title: 'Konsultasi Personal',
    desc: 'Bukan sekadar admin. Kami menganalisis kondisi bisnis Anda untuk memberikan solusi legalitas yang paling tepat.',
    icon: Users,
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    title: '100% Data Aman',
    desc: 'Dokumen dan data usaha Anda terjamin kerahasiaannya. Hanya digunakan untuk kepentingan legalitas, tidak lebih.',
    icon: ShieldCheck,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50'
  }
];

onMounted(async () => {
  await nextTick(); // Wait DOM

  const cards = gsap.utils.toArray('.why-card-anim');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.why-us-trigger',
      start: 'top 85%',
    }
  });

  // Header Animation
  tl.fromTo('.why-header-anim',
    { y: 30, autoAlpha: 0 }, // Start State
    { y: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out' } // End State
  )

  // Cards Animation
  .fromTo(cards,
    { y: 50, autoAlpha: 0 }, // Start State
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'back.out(1.2)'
    },
    '-=0.4' // Overlap
  );
});
</script>

<template>
  <section class="why-us-trigger py-24 bg-surface relative overflow-hidden">
    <BaseContainer>

      <SectionHeader
        title="Mengapa Memilih LegaLDK?"
        subtitle="Jangan biarkan masalah administrasi menghambat pertumbuhan bisnis Anda."
        align="center"
        class="why-header-anim mb-16"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        <div
          v-for="(feature, index) in features"
          :key="index"
          class="why-card-anim bg-white rounded-2xl p-6 shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          <div
            class="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors"
            :class="[feature.bg, feature.color]"
          >
            <component :is="feature.icon" :size="28" stroke-width="1.5" />
          </div>

          <h3 class="text-xl font-bold text-slate-900 mb-3">
            {{ feature.title }}
          </h3>
          <p class="text-sm text-slate-600 leading-relaxed">
            {{ feature.desc }}
          </p>
        </div>

      </div>

    </BaseContainer>
  </section>
</template>
