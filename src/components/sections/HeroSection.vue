<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import BaseContainer from '@/components/ui/BaseContainer.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import { ArrowRight, CheckCircle2 } from 'lucide-vue-next';

const clients = ['StartUp Indo', 'Tech Solutions', 'Legal Corp', 'Niaga Hoster'];
const benefits = ['Proses 100% Online', 'Jaminan Legalitas Resmi', 'Harga Transparan'];

// --- Mouse Parallax ---
const handleMouseMove = (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  gsap.to('.hero-image-parallax', {
    x: x,
    y: y,
    duration: 1,
    ease: 'power2.out'
  });

  gsap.to('.hero-shape-parallax', {
    x: -x * 1.5,
    y: -y * 1.5,
    duration: 1.2,
    ease: 'power2.out'
  });
};

// --- Cinematic Entrance ---
onMounted(() => {
  const tl = gsap.timeline();

  // Badge - Drop down
  tl.from('.hero-badge', {
    y: -20,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  })
  // Headline - Slide Up
  .from('.hero-title', {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  }, '-=0.6')
  // Description - Fade In
  .from('.hero-desc', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.8')
  // Checklist
  .from('.hero-benefit', {
    x: -20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power2.out'
  }, '-=0.6')
  // Buttons
  .from('.hero-btn', {
    y: 20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: 'back.out(1.7)'
  }, '-=0.4')
  // Trust Logos
  .from('.hero-trust', {
    opacity: 0,
    y: 10,
    duration: 1
  }, '-=0.2');

  // Visuals - Independent Timing
  gsap.from('.hero-visual', {
    x: 100,
    opacity: 0,
    duration: 1.5,
    delay: 0.2,
    ease: 'power3.out'
  });

  // Floating Card
  gsap.from('.hero-float-card', {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 1,
    ease: 'back.out(1.5)'
  });
});
</script>

<template>
  <section
    @mousemove="handleMouseMove"
    class="relative pt-16 pb-8 lg:pt-24 lg:pb-16 overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50"
    style="background-image: url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80');"
  >
  <div class="absolute inset-0 bg-white/90 sm:bg-white/75 sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>
    <BaseContainer class="relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 items-center">

        <div class="space-y-8">

          <div class="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Solusi Legalitas No. 1 di Indonesia
          </div>

          <h1 class="hero-title text-4xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
            Bangun Bisnis <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Tanpa Cemas</span>
            Masalah Legalitas
          </h1>

          <p class="hero-desc text-lg text-slate-600 max-w-xl leading-relaxed">
            Fokus pada pengembangan bisnis Anda, biarkan kami yang mengurus izin PT, CV, dan HAKI. Cepat, resmi, dan terpercaya.
          </p>

          <ul class="flex flex-col sm:flex-row gap-4 text-slate-700 font-medium">
            <li v-for="item in benefits" :key="item" class="hero-benefit flex items-center gap-2">
              <CheckCircle2 class="text-green-500 w-5 h-5" />
              {{ item }}
            </li>
          </ul>

          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <div class="hero-btn"> <BaseButton variant="primary" size="lg" to="/contact" class="shadow-xl shadow-blue-500/20 w-full sm:w-auto">
                Konsultasi Gratis
                <ArrowRight class="w-4 h-4 ml-2" />
              </BaseButton>
            </div>
            <div class="hero-btn"> <BaseButton variant="outline" size="lg" to="/layanan" class="w-full sm:w-auto">
                Lihat Layanan
              </BaseButton>
            </div>
          </div>

          <div class="hero-trust pt-8 border-t border-slate-200/60 mt-8">
            <p class="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-4">Dipercaya oleh 500+ Bisnis</p>
            <div class="flex flex-wrap gap-6 opacity-60 grayscale transition-all duration-500 hover:grayscale-0">
              <span v-for="client in clients" :key="client" class="text-lg font-bold text-slate-400 select-none">
                {{ client }}
              </span>
            </div>
          </div>
        </div>

        <div class="hero-visual relative hidden lg:block hero-image-parallax">

          <div class="hero-shape-parallax absolute -top-20 -right-20 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>

          <div class="relative bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              src="@/assets/logo-legaldk.png"
              alt="Logo LegalDK"
              class="rounded-xl object-cover w-full h-[500px]"
            />

            <div class="hero-float-card absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-50 flex items-center gap-4">
              <div class="bg-green-100 p-3 rounded-full text-green-600">
                <CheckCircle2 />
              </div>
              <div>
                <p class="text-sm text-slate-500">Izin Terbit</p>
                <p class="font-bold text-slate-900">1,200+ Dokumen</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </BaseContainer>
  </section>
</template>
