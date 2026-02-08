<script setup>
import { useMainStore } from '@/stores/mainStore';
import BaseContainer from '@/components/ui/BaseContainer.vue';
import PageHeader from '@/components/ui/PageHeader.vue';
import BaseCard from '@/components/ui/BaseCard.vue';
import {
  ArrowRight, Building, Building2, User, Globe, Briefcase,
  BriefcaseBusiness, HeartHandshake, Scale, Users, Sprout
} from 'lucide-vue-next';

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
</script>

<template>
  <div>
    <PageHeader
      title="Semua Layanan"
      subtitle="Daftar lengkap solusi legalitas untuk kebutuhan bisnis Anda."
    />

    <section class="py-20 bg-surface">
      <BaseContainer>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <BaseCard
            v-for="service in store.services"
            :key="service.id"
            class="group relative p-8 h-full flex flex-col justify-between hover:shadow-xl transition-all duration-300"
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
