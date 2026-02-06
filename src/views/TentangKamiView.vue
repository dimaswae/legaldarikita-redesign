<script setup>
import { useMainStore } from '@/stores/mainStore'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import PageHeader from '@/components/ui/PageHeader.vue'
import { CheckCircle2, Quote } from 'lucide-vue-next'

const store = useMainStore()
</script>

<template>
  <div>
    <PageHeader
      title="Tentang Kami"
      subtitle="Mengenal lebih dekat tim di balik solusi legalitas bisnis Anda."
    />

    <section class="bg-white py-20">
      <BaseContainer>
        <div class="grid items-center gap-12 md:grid-cols-2">
          <div class="group relative">
            <div
              class="absolute inset-0 rotate-3 rounded-2xl bg-blue-600 opacity-10 transition-transform group-hover:rotate-1"
            ></div>
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
              alt="Office Activity"
              class="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
            />
          </div>

          <div>
            <h2 class="text-primary mb-6 text-3xl font-bold">Cerita Perjalanan Kami</h2>
            <div class="prose prose-lg space-y-4 leading-relaxed text-slate-600">
              <p>
                {{ store.companyProfile.story }}
              </p>
              <p>
                Kami memahami bahwa birokrasi seringkali menjadi penghalang bagi inovasi. Oleh
                karena itu, kami hadir untuk memangkas kerumitan tersebut.
              </p>
            </div>

            <div class="mt-10 grid grid-cols-3 gap-4 border-t border-slate-100 pt-8">
              <div v-for="(stat, index) in store.companyProfile.stats" :key="index" class="text-center">
                <div class="text-secondary mb-1 text-2xl font-bold md:text-3xl">
                  {{ stat.value }}
                </div>
                <div class="text-xs font-medium tracking-wider text-slate-500 uppercase md:text-sm">
                  {{ stat.label }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseContainer>
    </section>

    <section class="bg-surface py-20">
      <BaseContainer>
        <div class="grid gap-16 md:grid-cols-2">
          <div class="flex flex-col justify-center">
            <div class="relative rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
              <Quote class="absolute top-6 left-6 -z-0 h-12 w-12 text-blue-100" />
              <h3 class="text-secondary relative z-10 mb-2 text-lg font-bold">Visi Kami</h3>
              <p class="text-primary relative z-10 font-serif text-2xl leading-normal italic">
                "{{ store.companyProfile.vision }}"
              </p>
            </div>
          </div>

          <div>
            <h3 class="text-primary mb-6 text-2xl font-bold">Misi Kami</h3>
            <ul class="space-y-4">
              <li
                v-for="(item, index) in store.companyProfile.mission"
                :key="index"
                class="flex items-start gap-4"
              >
                <CheckCircle2 class="mt-0.5 h-6 w-6 shrink-0 text-green-500" />
                <span class="text-lg text-slate-700">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </BaseContainer>
    </section>

    <section class="bg-white py-20">
      <BaseContainer>
        <div class="mx-auto mb-16 max-w-2xl text-center">
          <h2 class="text-primary mb-4 text-3xl font-bold">Tim Profesional Kami</h2>
          <p class="text-slate-600">
            Dikelola oleh praktisi hukum dan konsultan bisnis yang berpengalaman di bidangnya.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div v-for="member in store.team" :key="member.id" class="group text-center">
            <div
              class="relative mx-auto mb-4 aspect-square max-w-[200px] overflow-hidden rounded-xl"
            >
              <img
                :src="member.image"
                :alt="member.name"
                class="h-full w-full object-cover grayscale transition-transform duration-500 group-hover:scale-110 group-hover:grayscale-0"
              />
            </div>
            <h3 class="text-primary text-lg font-bold">{{ member.name }}</h3>
            <p class="text-secondary text-sm font-medium">{{ member.role }}</p>
          </div>
        </div>
      </BaseContainer>
    </section>
  </div>
</template>
