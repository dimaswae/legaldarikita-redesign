<script setup>
import { computed } from 'vue';
import { useMainStore } from '@/stores/mainStore';
import { MessageCircle } from 'lucide-vue-next';

const store = useMainStore();

// Dynamic WA Link logic
const waLink = computed(() => {
  // Akses nomor dari store
  const rawPhone = store.contact?.phone || store.contact?.phone || '628129998888';
  const phone = rawPhone.replace(/\D/g, ''); // Remove non-digits

  const text = encodeURIComponent("Halo LegalDK, saya tertarik untuk konsultasi legalitas bisnis.");

  return `https://wa.me/${phone}?text=${text}`;
});
</script>

<template>
  <a
    :href="waLink"
    target="_blank"
    class="fixed bottom-6 right-6 z-[60] group flex items-center justify-center bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl hover:bg-[#20bd5a] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
    aria-label="Chat via WhatsApp"
  >
    <span class="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-200 opacity-75"></span>
      <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-white"></span>
    </span>

    <MessageCircle :size="28" fill="white" class="text-green-600" />

    <div class="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out">
      <span class="pl-3 pr-2 font-bold whitespace-nowrap">Chat Konsultan</span>
    </div>
  </a>
</template>
