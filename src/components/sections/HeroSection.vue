<script setup>
import BaseContainer from '@/components/ui/BaseContainer.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import { ArrowRight, CheckCircle2 } from 'lucide-vue-next';

// Dummy Trust Indicators
const clients = ['StartUp Indo', 'Tech Solutions', 'Legal Corp', 'Niaga Hoster'];

// Selling points for hero section
const benefits = ['Proses 100% Online', 'Jaminan Legalitas Resmi', 'Harga Transparan'];
</script>

<template>
  <section class="relative pt-4 pb-2 lg:pt-8 lg:pb-6 overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">

    <BaseContainer>
      <div class="grid lg:grid-cols-2 gap-12 items-center">

        <div class="space-y-8 animate-in slide-in-from-bottom-5 duration-700">

          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Solusi Legalitas No. 1 di Indonesia
          </div>

          <h1 class="text-4xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
            Bangun Bisnis <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Tanpa Cemas</span>
            Masalah Legalitas
          </h1>

          <p class="text-lg text-slate-600 max-w-xl leading-relaxed">
            Solusi Urus Legal Usaha dengan Mudah, Hemat, dan Cepat. <br /> Didukung oleh tim profesional dan berpengalaman, kami siap memastikan legalitas bisnis Anda aman, sah, dan sesuai regulasi yang berlaku.
          </p>

          <ul class="flex flex-col sm:flex-row gap-4 text-slate-700 font-medium">
            <li v-for="item in benefits" :key="item" class="flex items-center gap-2">
              <CheckCircle2 class="text-green-500 w-5 h-5" />
              {{ item }}
            </li>
          </ul>

          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <BaseButton variant="primary" size="lg" to="/contact" class="shadow-xl shadow-blue-500/20">
              Konsultasi Gratis
              <ArrowRight class="w-4 h-4 ml-2" />
            </BaseButton>
            <BaseButton variant="outline" size="lg" to="/layanan">
              Lihat Layanan
            </BaseButton>
          </div>

          <div class="pt-8 border-t border-slate-200/60 mt-8">
            <p class="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-4">Dipercaya oleh 500+ Bisnis</p>
            <div class="flex flex-wrap gap-6 opacity-60 grayscale transition-all duration-500 hover:grayscale-0">
              <span v-for="client in clients" :key="client" class="text-lg font-bold text-slate-400 select-none">
                {{ client }}
              </span>
            </div>
          </div>
        </div>

        <div class="relative hidden lg:block">
          <div class="absolute -top-20 -right-20 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>

          <div class="relative bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              src="@/assets/logo-legaldk.png"
              alt="Logo LegalDK"
              class="rounded-xl object-cover w-full h-[500px]"
            />

            <div class="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-50 flex items-center gap-4 animate-bounce-slow">
              <div class="bg-green-100 p-3 rounded-full text-green-600">
                <CheckCircle2 />
              </div>
              <div>
                <p class="text-sm text-slate-500">Izin Terbit</p>
                <p class="font-bold text-slate-900">1,000+ Dokumen</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </BaseContainer>
  </section>
</template>

<style scoped>
/* Custom animation utility*/
.animate-bounce-slow {
  animation: bounce 3s infinite;
}
@keyframes bounce {
  0%, 100% { transform: translateY(-5%); }
  50% { transform: translateY(5%); }
}
</style>
