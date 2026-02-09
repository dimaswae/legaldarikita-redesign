<script setup>
import { useMainStore } from '@/stores/mainStore'
import { onMounted, nextTick } from 'vue';
import BaseContainer from '@/components/ui/BaseContainer.vue'
import { CheckCircle2, Quote } from 'lucide-vue-next'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const store = useMainStore()

onMounted(async () => {
  await nextTick();

  // --- Header Animation ---
  const tl = gsap.timeline();

  tl.from('.about-hero-bg', {
    scale: 1.1,
    duration: 1.5,
    ease: 'power1.out'
  })
  .from('.about-hero-title', {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  }, '-=1')
  .from('.about-hero-subtitle', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.6');


  // --- Story Section Animation ---
  gsap.from('.story-img-anim', {
    scrollTrigger: {
      trigger: '.story-section-trigger',
      start: 'top 80%',
    },
    x: -50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  });

  gsap.from('.story-text-anim', {
    scrollTrigger: {
      trigger: '.story-section-trigger',
      start: 'top 80%',
    },
    x: 50,
    opacity: 0,
    duration: 1,
    delay: 0.2, // Wait slightly for image
    ease: 'power3.out'
  });


  // --- Counter Animation ---
  const statElements = gsap.utils.toArray('.stat-counter-anim');
  statElements.forEach((el) => {
    // Safety check for empty data
    if (!el.innerText) return;

    const endValue = parseInt(el.innerText.replace(/,/g, '').replace(/\+/g, ''), 10);
    const proxy = { val: 0 };

    gsap.to(proxy, {
      val: endValue,
      duration: 2.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      onUpdate: () => {
        el.innerText = Math.ceil(proxy.val).toLocaleString('en-US') + '+';
      }
    });
  });


  // --- Vision & Mission Animation ---
  gsap.from('.vision-card-anim', {
    scrollTrigger: {
      trigger: '.vision-section-trigger',
      start: 'top 80%',
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: 'back.out(1.2)'
  });

  gsap.from('.mission-list-anim li', {
    scrollTrigger: {
      trigger: '.vision-section-trigger',
      start: 'top 80%',
    },
    x: 20,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out'
  });


  // --- Team Animation ---
  gsap.from('.team-member-anim', {
    scrollTrigger: {
      trigger: '.team-section-trigger',
      start: 'top 85%',
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power2.out'
  });
});
</script>

<template>
  <div>

    <section class="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Office Background"
          class="about-hero-bg w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-slate-900/80"></div>
      </div>

      <BaseContainer class="relative z-10 text-center text-white">
        <h1 class="about-hero-title text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          Tentang Kami
        </h1>
        <p class="about-hero-subtitle text-lg md:text-xl text-blue-100 max-w-2xl mx-auto font-light">
          Mengenal lebih dekat tim profesional di balik keamanan dan legalitas bisnis Anda.
        </p>
      </BaseContainer>
    </section>


    <section class="story-section-trigger bg-white py-20 overflow-hidden">
      <BaseContainer>
        <div class="grid items-center gap-12 md:grid-cols-2">

          <div class="story-img-anim group relative">
            <div
              class="absolute inset-0 rotate-3 rounded-2xl bg-blue-600 opacity-10 transition-transform group-hover:rotate-1"
            ></div>
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
              alt="Office Activity"
              class="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
            />
          </div>

          <div class="story-text-anim">
            <h2 class="text-primary mb-6 text-3xl font-bold">Cerita Perjalanan Kami</h2>
            <div class="prose prose-lg space-y-4 leading-relaxed text-slate-600">
              <p>
                {{ store.companyProfile?.story || "Loading..." }}
              </p>
              <p>
                Kami memahami bahwa birokrasi seringkali menjadi penghalang bagi inovasi.
                Oleh karena itu, kami hadir untuk memangkas kerumitan tersebut.
              </p>
            </div>

            <div class="grid grid-cols-3 gap-4 mt-10 border-t border-slate-100 pt-8">
              <div v-for="(stat, index) in store.companyProfile?.stats" :key="index" class="text-center">
                <div class="stat-counter-anim text-2xl md:text-3xl font-bold text-secondary mb-1">
                   {{ stat.value }}
                </div>
                <div class="text-xs md:text-sm text-slate-500 font-medium uppercase tracking-wider">
                  {{ stat.label }}
                </div>
              </div>
            </div>
          </div>

        </div>
      </BaseContainer>
    </section>


    <section class="vision-section-trigger bg-surface py-20">
      <BaseContainer>
        <div class="grid gap-16 md:grid-cols-2">

          <div class="vision-card-anim flex flex-col justify-center">
            <div class="relative rounded-2xl border border-slate-100 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <Quote class="absolute top-6 left-6 -z-0 h-12 w-12 text-blue-100" />
              <h3 class="text-secondary relative z-10 mb-2 text-lg font-bold">Visi Kami</h3>
              <p class="text-primary relative z-10 font-serif text-2xl leading-normal italic">
                "{{ store.companyProfile?.vision }}"
              </p>
            </div>
          </div>

          <div>
            <h3 class="text-primary mb-6 text-2xl font-bold">Misi Kami</h3>
            <ul class="mission-list-anim space-y-4">
              <li
                v-for="(item, index) in store.companyProfile?.mission"
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


    <section class="team-section-trigger bg-white py-20">
      <BaseContainer>
        <div class="mx-auto mb-16 max-w-2xl text-center">
          <h2 class="text-primary mb-4 text-3xl font-bold">Tim Profesional Kami</h2>
          <p class="text-slate-600">
            Dikelola oleh praktisi hukum dan konsultan bisnis yang berpengalaman di bidangnya.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div
            v-for="member in store.team"
            :key="member.id"
            class="team-member-anim group text-center"
          >
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
