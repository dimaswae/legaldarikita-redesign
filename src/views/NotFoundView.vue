<script setup>
import BaseContainer from '@/components/ui/BaseContainer.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import { FileQuestion, Home, MessageCircle } from 'lucide-vue-next';
</script>

<template>
  <div class="relative flex items-center justify-center min-h-[70vh] bg-surface overflow-hidden">

    <h1 class="absolute text-[12rem] md:text-[20rem] font-black text-slate-200/40 select-none z-0 pointer-events-none transform -translate-y-12">
      404
    </h1>

    <BaseContainer class="relative z-10 text-center">
      <div class="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8 text-blue-600 animate-bounce shadow-lg shadow-blue-200/50">
        <FileQuestion :size="48" stroke-width="1.5" />
      </div>

      <h2 class="text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
        Halaman Tidak Ditemukan
      </h2>

      <p class="text-slate-500 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
        Maaf, sepertinya Anda tersesat. Halaman yang Anda tuju mungkin sudah dihapus, dipindahkan, atau link yang Anda masukkan salah.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <BaseButton to="/" variant="primary" size="lg" class="shadow-xl shadow-blue-500/20 w-full sm:w-auto">
          <Home :size="20" class="mr-2" />
          Kembali ke Beranda
        </BaseButton>

        <BaseButton to="/contact" variant="outline" size="lg" class="w-full sm:w-auto">
          <MessageCircle :size="20" class="mr-2" />
          Lapor Masalah
        </BaseButton>
      </div>
    </BaseContainer>
  </div>
</template>
