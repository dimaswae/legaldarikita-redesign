<script setup>
import BaseContainer from '@/components/ui/BaseContainer.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
// import { WhatsappLogo } from 'lucide-vue-next'; // Hypothetical icon, or use MessageCircle
</script>

<template>
  <section class="py-16 bg-primary relative overflow-hidden">
    <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

    <BaseContainer>
      <div class="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">

        <div class="max-w-2xl">
          <h2 class="text-3xl font-bold text-white mb-4">
            Masih bingung jenis legalitas yang cocok?
          </h2>
          <p class="text-blue-100 text-lg">
            Konsultasikan kebutuhan bisnis Anda dengan ahli kami. Gratis dan tanpa komitmen.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 shrink-0">
          <BaseButton
            variant="secondary"
            size="lg"
            :href="'https://wa.me/6285520912043?text=' + encodeURIComponent('Halo LegalDK, saya tertarik untuk konsultasi legalitas bisnis.')"
            target="_blank"
            class="shadow-xl"
          >
            Hubungi via WhatsApp
          </BaseButton>

          <BaseButton
            variant="outline-white"
            size="lg"
            to="/contact"
          >
            Isi Formulir
          </BaseButton>
        </div>

      </div>
    </BaseContainer>
  </section>
</template>
