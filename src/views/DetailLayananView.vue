<script setup>
import { computed, onMounted, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useMainStore } from '@/stores/mainStore';
import { useHead } from '@vueuse/head';

import BaseContainer from '@/components/ui/BaseContainer.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import { CheckCircle2, FileText, ArrowLeft, MessageCircle, ShieldCheck } from 'lucide-vue-next';

const route = useRoute();
const router = useRouter();
const store = useMainStore();

// 1. Fetch Service by Slug
const service = computed(() => {
  return store.services.find(s => s.slug === route.params.slug);
});

// 2. WhatsApp Logic
const waLink = computed(() => {
  if (!service.value) return '#';
  const phone = store.companyInfo?.phone ? store.companyInfo.phone.replace(/\D/g, '') : '6281234567890';

  const text = encodeURIComponent(`Halo LegalDK, saya tertarik dengan layanan ${service.value.title}. Bisa dibantu infonya?`);

  return `https://wa.me/${phone}?text=${text}`;
});

// 3. Redirect if service not found
onMounted(() => {
  if (!service.value) {
    router.push('/layanan');
  }
});

// --- SEO Logic ---
watchEffect(() => {
  // Only run if service data is found
  if (service.value) {
    useHead({
      title: service.value.title,
      meta: [
        { name: 'description', content: service.value.description },
        // Open Graph
        { property: 'og:title', content: `Biaya & Syarat ${service.value.title}` },
        { property: 'og:description', content: service.value.longDesc ? service.value.longDesc.substring(0, 150) + '...' : service.value.description },
      ]
    })
  }
})
</script>

<template>
  <div v-if="service" class="min-h-screen bg-slate-50 pb-20">

    <div class="bg-primary pt-32 pb-20 text-white relative overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <BaseContainer class="relative z-10">
        <router-link to="/layanan" class="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors font-medium">
          <ArrowLeft :size="20" class="mr-2" /> Kembali ke Layanan
        </router-link>
        <h1 class="text-3xl md:text-5xl font-bold mb-4">{{ service.title }}</h1>
        <p class="text-xl text-blue-100 max-w-2xl">{{ service.description }}</p>
      </BaseContainer>
    </div>

    <BaseContainer class="-mt-10 relative z-20">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

        <div class="lg:col-span-2 space-y-8">

          <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 class="text-2xl font-bold text-slate-800 mb-4">Deskripsi Lengkap</h2>
            <p class="text-slate-600 leading-relaxed text-lg">
              {{ service.longDesc || "Deskripsi lengkap belum tersedia untuk layanan ini. Hubungi kami untuk informasi lebih lanjut." }}
            </p>
          </div>

          <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 class="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <CheckCircle2 class="text-secondary" /> Keuntungan Layanan Ini
            </h3>
            <div class="grid gap-4">
              <template v-if="service.benefits">
                <div
                  v-for="(benefit, index) in service.benefits"
                  :key="index"
                  class="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100"
                >
                  <div class="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 :size="14" stroke-width="3" />
                  </div>
                  <span class="text-slate-700 font-medium">{{ benefit }}</span>
                </div>
              </template>
              <p v-else class="text-slate-500 italic">Data keuntungan belum tersedia.</p>
            </div>
          </div>

          <div class="bg-blue-50/80 p-8 rounded-2xl border border-blue-100">
            <h3 class="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <FileText class="text-blue-600" /> Syarat Dokumen
            </h3>
            <ul class="space-y-4">
               <template v-if="service.requirements">
                <li
                  v-for="(req, index) in service.requirements"
                  :key="index"
                  class="flex items-center gap-4 bg-white p-3 rounded-lg border border-blue-100/50 shadow-sm"
                >
                  <div class="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold text-sm shadow-md">
                    {{ index + 1 }}
                  </div>
                  <span class="text-slate-700 font-medium">{{ req }}</span>
                </li>
               </template>
               <p v-else class="text-slate-500 italic">Hubungi admin untuk detail syarat.</p>
            </ul>
          </div>

        </div>

        <div class="lg:col-span-1">
          <div class="bg-white p-6 lg:p-8 rounded-2xl shadow-xl border border-slate-100 sticky top-24">
            <p class="text-slate-500 font-medium mb-1 text-sm uppercase tracking-wide">Mulai dari</p>
            <h2 class="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 tracking-tight">{{ service.price }}</h2>

            <div class="space-y-4">
              <a
                :href="waLink"
                target="_blank"
                class="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-green-500/20 hover:shadow-green-500/30 hover:-translate-y-1"
              >
                <MessageCircle :size="20" />
                Konsultasi Sekarang
              </a>

              <p class="text-xs text-center text-slate-400 leading-relaxed px-4">
                Tim kami akan membalas pesan Anda dalam waktu kurang dari 15 menit pada jam kerja.
              </p>
            </div>

            <div class="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-2 text-slate-500 text-xs font-semibold uppercase tracking-wide">
              <ShieldCheck class="text-emerald-500" :size="16" />
              Data 100% Aman & Terjamin
            </div>
          </div>
        </div>

      </div>
    </BaseContainer>
  </div>

  <div v-else class="min-h-screen flex flex-col items-center justify-center text-center p-8 bg-slate-50">
    <div class="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
      <h1 class="text-2xl font-bold text-slate-800 mb-2">Layanan Tidak Ditemukan</h1>
      <p class="text-slate-500 mb-6">Maaf, layanan yang Anda cari tidak tersedia atau URL salah.</p>
      <BaseButton to="/layanan" variant="primary" block>Kembali ke Daftar Layanan</BaseButton>
    </div>
  </div>
</template>
