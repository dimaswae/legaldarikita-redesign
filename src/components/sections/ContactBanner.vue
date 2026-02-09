<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BaseContainer from '@/components/ui/BaseContainer.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import { MessageCircle } from 'lucide-vue-next';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.contact-banner-trigger',
      start: 'top 85%',
    }
  });

  // Background Parallax
  gsap.fromTo('.banner-bg-parallax',
    { yPercent: -10 },
    {
      yPercent: 10,
      ease: 'none',
      scrollTrigger: {
        trigger: '.contact-banner-trigger',
        scrub: true, // Smooth parallax effect
        start: 'top bottom',
        end: 'bottom top',
      }
    }
  );

  // Text Animation (Slide Up)
  tl.fromTo('.banner-text-anim',
    { y: 40, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out' }
  )
  // Button Animation (Slide from Right + Bounce)
  .fromTo('.banner-btn-anim',
    { x: 50, autoAlpha: 0 },
    { x: 0, autoAlpha: 1, duration: 0.8, ease: 'back.out(1.5)' },
    '-=0.6' // Overlap
  );
});
</script>

<template>
  <section class="contact-banner-trigger relative py-20 overflow-hidden">

    <div class="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        alt="Office Background"
        class="banner-bg-parallax w-full h-[120%] object-cover opacity-30"
      />
      <div class="absolute inset-0 bg-slate-900/90 mix-blend-multiply"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-slate-900/80"></div>
    </div>

    <div class="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl z-0"></div>

    <BaseContainer class="relative z-10">
      <div class="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">

        <div class="banner-text-anim max-w-2xl">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Masih bingung jenis legalitas yang cocok?
          </h2>
          <p class="text-blue-100 text-lg md:text-xl font-light">
            Konsultasikan kebutuhan bisnis Anda dengan ahli kami. <br class="hidden md:block" />
            Gratis dan tanpa komitmen.
          </p>
        </div>

        <div class="banner-btn-anim flex flex-col sm:flex-row gap-4 shrink-0">
          <BaseButton
            variant="secondary"
            size="lg"
            :href="'https://wa.me/6285520912043?text=' + encodeURIComponent('Halo LegalDK, saya tertarik untuk konsultasi legalitas bisnis.')"
            target="_blank"
            class="shadow-xl shadow-blue-900/50 group"
          >
            <MessageCircle class="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Hubungi via WhatsApp
          </BaseButton>
        </div>

      </div>
    </BaseContainer>
  </section>
</template>
