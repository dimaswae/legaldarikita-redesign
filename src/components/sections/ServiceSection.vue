<script setup>
import { onMounted } from 'vue';
import { useMainStore } from '@/stores/mainStore'; // Access the store
import BaseContainer from '@/components/ui/BaseContainer.vue';
import SectionHeader from '@/components/ui/SectionHeader.vue';
import BaseCard from '@/components/ui/BaseCard.vue';
import {
  ArrowRight,
  Building,
  Building2,
  User,
  Globe,
  Briefcase,
  BriefcaseBusiness,
  HeartHandshake,
  Scale,
  Users,
  Sprout
} from 'lucide-vue-next';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const store = useMainStore();

// Map string icon names from JSON to actual components
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

onMounted(() => {
    gsap.fromTo('.service-card-anim',
    {
      y: 60,
      opacity: 0
    },
    {
      scrollTrigger: {
        trigger: '#layanan',
        start: 'top 85%', // Trigger slightly earlier for better UX
      },
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1, // 100ms delay between each card
      ease: 'power2.out'
    }
  );
});
</script>

<template>
  <section class="py-20 bg-white" id="layanan">
    <BaseContainer>

      <SectionHeader
        title="Layanan Unggulan"
        subtitle="Pilih solusi legalitas yang sesuai dengan kebutuhan bisnis Anda. Proses cepat, transparan, dan resmi."
        align="center"
      />

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        <BaseCard
          v-for="service in store.services"
          :key="service.id"
          class="service-card-anim group relative p-6 h-full flex flex-col justify-between border-t-4 border-t-transparent hover:border-t-secondary"
        >
          <div>
            <div class="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-secondary mb-4 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
              <component
                :is="iconMap[service.icon] || Building"
                class="w-6 h-6"
              />
            </div>

            <h3 class="text-xl font-bold text-primary mb-2">{{ service.title }}</h3>
            <p class="text-sm text-slate-600 mb-4 leading-relaxed">
              {{ service.description }}
            </p>
          </div>

          <div class="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span class="text-sm font-semibold text-primary opacity-80">{{ service.price }}</span>

            <router-link
              :to="`/layanan/${service.slug }`"
              class="inline-flex items-center text-sm font-medium text-secondary hover:text-blue-700 transition-colors"
            >
              Detail
              <ArrowRight class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </router-link>
          </div>

        </BaseCard>
      </div>

    </BaseContainer>
  </section>
</template>
