<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { useMainStore } from '@/stores/mainStore';
import BaseContainer from '@/components/ui/BaseContainer.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-vue-next';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const store = useMainStore();

// Form State
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);

const handleSubmit = () => {
  isSubmitting.value = true;
  setTimeout(() => {
    alert(`Terima kasih, ${form.value.name}! Pesan Anda telah terkirim.`);
    isSubmitting.value = false;
    form.value = { name: '', email: '', subject: '', message: '' };
  }, 1000);
};

// Data
const contactDetails = [
  { icon: MapPin, label: 'Alamat Kantor', value: store.contact.address },
  { icon: Phone, label: 'Telepon / WhatsApp', value: store.contact.phone, isLink: true, href: `tel:${store.contact.phone}` },
  { icon: Mail, label: 'Email', value: store.contact.email, isLink: true, href: `mailto:${store.contact.email}` },
  { icon: Clock, label: 'Jam Operasional', value: store.contact.workingHours }
];

// --- GSAP Animation ---
onMounted(async () => {
  await nextTick();

  // Timeline
  const tl = gsap.timeline();

  tl.fromTo('.contact-hero-bg',
    { scale: 1.1 },
    { scale: 1, duration: 1.5, ease: 'power1.out' }
  )
  .fromTo('.contact-hero-title',
    { y: 30, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, duration: 1, ease: 'power3.out' },
    '-=1'
  )
  .fromTo('.contact-hero-subtitle',
    { y: 20, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out' },
    '-=0.6'
  );

  // Contact Cards
  gsap.fromTo('.contact-card-anim',
    { x: -30, autoAlpha: 0 },
    {
      scrollTrigger: { trigger: '.contact-section-trigger', start: 'top 85%' },
      x: 0,
      autoAlpha: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out'
    }
  );

  // Map
  gsap.fromTo('.contact-map-anim',
    { scale: 0.95, autoAlpha: 0 },
    {
      scrollTrigger: { trigger: '.contact-map-anim', start: 'top 90%' },
      scale: 1,
      autoAlpha: 1,
      duration: 1,
      ease: 'power2.out'
    }
  );

  // Form Container
  gsap.fromTo('.contact-form-container-anim',
    { x: 30, autoAlpha: 0 },
    {
      scrollTrigger: { trigger: '.contact-section-trigger', start: 'top 85%' },
      x: 0,
      autoAlpha: 1,
      duration: 1,
      ease: 'power3.out'
    }
  );

  // Form Inputs
  gsap.fromTo('.form-input-anim',
    { y: 20, autoAlpha: 0 },
    {
      scrollTrigger: { trigger: '.contact-section-trigger', start: 'top 80%' },
      y: 0,
      autoAlpha: 1,
      duration: 0.6,
      stagger: 0.1,
      delay: 0.3, 
      ease: 'back.out(1.2)'
    }
  );
});
</script>

<template>
  <div>

    <section class="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Contact Support"
          class="contact-hero-bg w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-slate-900/80"></div>
      </div>

      <BaseContainer class="relative z-10 text-center text-white">
        <h1 class="contact-hero-title text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          Hubungi Kami
        </h1>
        <p class="contact-hero-subtitle text-lg md:text-xl text-blue-100 max-w-2xl mx-auto font-light">
          Siap membantu legalitas bisnis Anda. Konsultasikan kebutuhan Anda sekarang.
        </p>
      </BaseContainer>
    </section>

    <section class="contact-section-trigger py-20 bg-surface">
      <BaseContainer>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          <div class="space-y-8">
            <h2 class="contact-card-anim text-2xl font-bold text-primary mb-6">Informasi Kontak</h2>

            <div class="space-y-6">
              <div
                v-for="(item, index) in contactDetails"
                :key="index"
                class="contact-card-anim flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div class="bg-blue-50 p-3 rounded-lg text-secondary shrink-0">
                  <component :is="item.icon" :size="24" />
                </div>
                <div>
                  <h3 class="text-sm font-semibold text-slate-500 mb-1">{{ item.label }}</h3>

                  <a v-if="item.isLink" :href="item.href" class="text-lg font-medium text-primary hover:text-secondary transition-colors">
                    {{ item.value }}
                  </a>
                  <p v-else class="text-lg font-medium text-primary">
                    {{ item.value }}
                  </p>
                </div>
              </div>
            </div>

            <div class="mt-8">
              <h3 class="contact-map-anim text-lg font-bold text-primary mb-4">Lokasi Kami</h3>
              <iframe
                :src="store.contact.mapUrl"
                class="contact-map-anim w-full h-80 rounded-2xl shadow-md border border-slate-200"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div class="contact-form-container-anim bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100 h-fit sticky top-24">
            <h2 class="text-2xl font-bold text-primary mb-2">Kirim Pesan</h2>
            <p class="text-slate-500 mb-8">Isi formulir di bawah ini dan tim kami akan segera menghubungi Anda.</p>

            <form @submit.prevent="handleSubmit" class="flex flex-col gap-6">

              <div class="form-input-anim">
                <label class="block text-sm font-semibold text-slate-700 mb-2">Nama Lengkap</label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="Masukkan nama Anda"
                  class="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              <div class="form-input-anim">
                <label class="block text-sm font-semibold text-slate-700 mb-2">Alamat Email</label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="contoh@email.com"
                  class="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              <div class="form-input-anim">
                <label class="block text-sm font-semibold text-slate-700 mb-2">Subjek</label>
                <select
                  v-model="form.subject"
                  class="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                >
                  <option value="" disabled selected>Pilih Layanan</option>
                  <option value="Pendirian PT">Pendirian PT</option>
                  <option value="Pendirian CV">Pendirian CV</option>
                  <option value="Pendirian PT Perorangan">Pendirian PT Perorangan</option>
                  <option value="Konsultasi Legalitas">Konsultasi Legalitas</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              <div class="form-input-anim">
                <label class="block text-sm font-semibold text-slate-700 mb-2">Pesan</label>
                <textarea
                  v-model="form.message"
                  required
                  rows="4"
                  placeholder="Jelaskan kebutuhan legalitas Anda..."
                  class="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400 resize-none"
                ></textarea>
              </div>

              <div class="form-input-anim">
                <BaseButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  class="w-full mt-2"
                  :disabled="isSubmitting"
                >
                  <span v-if="!isSubmitting" class="flex items-center justify-center gap-2">
                    Kirim Pesan <Send :size="18" />
                  </span>
                  <span v-else>Mengirim...</span>
                </BaseButton>
              </div>

            </form>
          </div>

        </div>
      </BaseContainer>
    </section>
  </div>
</template>
