<script setup>
import { onMounted, nextTick } from 'vue';
import { useMainStore } from '@/stores/mainStore';
import BaseContainer from '@/components/ui/BaseContainer.vue';
import BaseCard from '@/components/ui/BaseCard.vue';
import {
  ArrowRight, Building, Building2, User, Globe, Briefcase,
  BriefcaseBusiness, HeartHandshake, Scale, Users, Sprout
} from 'lucide-vue-next';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const store = useMainStore();

// Reuse the Icon Map
const iconMap = {
  'User': User,
  'Building2': Building2,
  'Building': Building,
  'Globe': Globe,
  'Briefcase': Briefcase,
  'BriefcaseBusiness': BriefcaseBusiness,
  'HeartHandshake': HeartHandshake,
  'Scale': Scale,
  'Users': Users,
  'Sprout': Sprout
};

onMounted(async () => {
  await nextTick();

  // --- Header Animation ---
  const tl = gsap.timeline();

  tl.from('.layanan-hero-bg', {
    scale: 1.1,
    duration: 1.5,
    ease: 'power1.out'
  })
  .from('.layanan-hero-title', {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  }, '-=1')
  .from('.layanan-hero-subtitle', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.6');

  // --- Service Grid Animation ---
  gsap.fromTo('.layanan-card-anim',
    {
      y: 60,
      autoAlpha: 0
    },
    {
      scrollTrigger: {
        trigger: '.layanan-section-trigger',
        start: 'top 85%',
      },
      y: 0,
      autoAlpha: 1,
      duration: 0.8,
      stagger: 0.1, // Ripple effect
      ease: 'power2.out'
    }
  );
});
</script>

<template>
  <div>

    <section class="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Skyscrapers Business"
          class="layanan-hero-bg w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-slate-900/80"></div>
      </div>

      <BaseContainer class="relative z-10 text-center text-white">
        <h1 class="layanan-hero-title text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          Semua Layanan
        </h1>
        <p class="layanan-hero-subtitle text-lg md:text-xl text-blue-100 max-w-2xl mx-auto font-light">
          Daftar lengkap solusi legalitas untuk kebutuhan bisnis Anda.
        </p>
      </BaseContainer>
    </section>

    <section class="layanan-section-trigger py-20 bg-surface">
      <BaseContainer>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <BaseCard
            v-for="service in store.services"
            :key="service.id"
            class="layanan-card-anim group relative p-8 h-full flex flex-col justify-between hover:shadow-xl transition-all duration-300"
          >
            <div>
              <div class="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                 <component :is="iconMap[service.icon] || Building" class="w-7 h-7" />
              </div>

              <h3 class="text-xl font-bold text-primary mb-3">{{ service.title }}</h3>
              <p class="text-slate-600 mb-6 leading-relaxed">
                {{ service.description }}
              </p>
            </div>

            <div class="pt-6 border-t border-slate-100 flex items-center justify-between mt-auto">
              <span class="font-bold text-secondary">{{ service.price }}</span>

              <router-link
                :to="`/layanan/${service.slug}`"
                class="inline-flex items-center text-sm font-semibold text-slate-400 group-hover:text-primary transition-colors"
              >
                Detail
                <ArrowRight class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </router-link>
            </div>
          </BaseCard>

        </div>
      </BaseContainer>
    </section>
  </div>
</template>
