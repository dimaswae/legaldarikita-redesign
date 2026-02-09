<script setup>
import BaseContainer from '@/components/ui/BaseContainer.vue';

import {
  Instagram,
  Linkedin,
  Facebook,
  MapPin,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-vue-next';

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/legaldarikita' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/legaldarikita' },
  { icon: Facebook, href: 'https://www.facebook.com/legaldarikita' }
];

const quickLinks = [
  { name: 'Home', to: '/' },
  { name: 'Tentang Kami', to: '/tentang-kami' },
  { name: 'Layanan', to: '/layanan' },
  { name: 'Artikel', to: '/artikel' },
  { name: 'Kontak', to: '/contact' }
];

const popularServices = [
  { name: 'Pendirian PT', to: '/layanan/pt-premium' },
  { name: 'PT Perorangan', to: '/layanan/pt-perorangan' },
  { name: 'Pendirian CV', to: '/layanan/cv-premium' },
  { name: 'Pendirian Yayasan', to: '/layanan/yayasan' }
];
</script>

<template>
  <footer class="bg-slate-900 text-slate-300 font-sans border-t border-slate-800">
    <div class="pt-16 pb-12">
      <BaseContainer>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          <div class="space-y-6">
            <div class="flex items-center gap-2 text-white">
              <img
                src="@/assets/logo-legaldk-logoonly-removed.png"
                alt="LegalDK Logo"
                class="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span class="font-bold text-xl tracking-tight">
                Legal<span class="text-blue-500">DK</span>
              </span>
            </div>

            <p class="text-sm leading-relaxed text-slate-400">
              Mitra legalitas terpercaya untuk bisnis masa depan. Kami membantu UMKM dan perusahaan rintisan mengurus izin resmi dengan cepat dan transparan.
            </p>

            <div class="flex gap-4">
              <a
                v-for="(social, index) in socialLinks"
                :key="index"
                :href="social.href"
                class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
                target="_blank"
              >
                <component :is="social.icon" :size="20" />
              </a>
            </div>
          </div>

          <div>
            <h3 class="text-white font-bold text-lg mb-6">Navigasi</h3>
            <ul class="space-y-3">
              <li v-for="link in quickLinks" :key="link.name">
                <router-link
                  :to="link.to"
                  class="text-sm hover:text-blue-400 transition-colors inline-flex items-center group"
                >
                  <ArrowRight :size="14" class="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  {{ link.name }}
                </router-link>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-white font-bold text-lg mb-6">Layanan Populer</h3>
            <ul class="space-y-3">
              <li v-for="service in popularServices" :key="service.name">
                <router-link
                  :to="service.to"
                  class="text-sm hover:text-blue-400 transition-colors"
                >
                  {{ service.name }}
                </router-link>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-white font-bold text-lg mb-6">Hubungi Kami</h3>
            <ul class="space-y-4 text-sm">
              <li class="flex items-start gap-3">
                <MapPin :size="20" class="text-blue-500 shrink-0 mt-0.5" />
                <span class="leading-relaxed">
                  Jl. Riung Purna I No.17, <br /> Cisaranten Kidul, Kec. Gedebage, Kota Bandung, Jawa Barat 40295.
                </span>
              </li>
              <li class="flex items-center gap-3">
                <Phone :size="20" class="text-blue-500 shrink-0" />
                <a href="tel:+6285520912043" class="hover:text-white transition-colors">
                  +62 855-2091-2043
                </a>
              </li>
              <li class="flex items-center gap-3">
                <Mail :size="20" class="text-blue-500 shrink-0" />
                <a href="mailto:info@legaldarikita.com" class="hover:text-white transition-colors">
                  info@legaldarikita.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </BaseContainer>
    </div>

    <div class="border-t border-slate-800 bg-slate-950 py-6">
      <BaseContainer>
        <div class="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; 2026 LegaLDK Indonesia. All rights reserved.</p>
          <div class="flex gap-6">
            <!-- Privasi dan Term Belum ada -->
            <router-link to="/privacy" class="hover:text-slate-300">Privacy Policy</router-link>
            <router-link to="/terms" class="hover:text-slate-300">Terms of Service</router-link>
          </div>
        </div>
      </BaseContainer>
    </div>
  </footer>
</template>
