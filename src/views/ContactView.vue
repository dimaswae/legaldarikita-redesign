<script setup>
import { ref } from 'vue';
import { useMainStore } from '@/stores/mainStore';
import BaseContainer from '@/components/ui/BaseContainer.vue';
import PageHeader from '@/components/ui/PageHeader.vue'; // Using your existing component
import BaseButton from '@/components/ui/BaseButton.vue';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-vue-next';

const store = useMainStore();

// Form State
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);

// Demo Submit Handler
const handleSubmit = () => {
  isSubmitting.value = true;

  // Simulate API delay
  setTimeout(() => {
    alert(`Terima kasih, ${form.value.name}! Pesan Anda telah terkirim.`);
    isSubmitting.value = false;
    // Reset form
    form.value = { name: '', email: '', subject: '', message: '' };
  }, 1000);
};

// Icon mapping for loop
const contactDetails = [
  { icon: MapPin, label: 'Alamat Kantor', value: store.contact.address },
  { icon: Phone, label: 'Telepon / WhatsApp', value: store.contact.phone, isLink: true, href: `tel:${store.contact.phone}` },
  { icon: Mail, label: 'Email', value: store.contact.email, isLink: true, href: `mailto:${store.contact.email}` },
  { icon: Clock, label: 'Jam Operasional', value: store.contact.workingHours }
];
</script>

<template>
  <div>
    <PageHeader
      title="Hubungi Kami"
      subtitle="Siap membantu legalitas bisnis Anda. Konsultasikan kebutuhan Anda sekarang."
    />

    <section class="py-20 bg-surface">
      <BaseContainer>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          <div class="space-y-8">
            <h2 class="text-2xl font-bold text-primary mb-6">Informasi Kontak</h2>

            <div class="space-y-6">
              <div
                v-for="(item, index) in contactDetails"
                :key="index"
                class="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
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
              <h3 class="text-lg font-bold text-primary mb-4">Lokasi Kami</h3>
              <iframe
                :src="store.contact.mapUrl"
                class="w-full h-80 rounded-2xl shadow-md border border-slate-200"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div class="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100 h-fit sticky top-24">
            <h2 class="text-2xl font-bold text-primary mb-2">Kirim Pesan</h2>
            <p class="text-slate-500 mb-8">Isi formulir di bawah ini dan tim kami akan segera menghubungi Anda.</p>

            <form @submit.prevent="handleSubmit" class="flex flex-col gap-6">

              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-2">Nama Lengkap</label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="Masukkan nama Anda"
                  class="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-2">Alamat Email</label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="contoh@email.com"
                  class="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              <div>
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

              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-2">Pesan</label>
                <textarea
                  v-model="form.message"
                  required
                  rows="4"
                  placeholder="Jelaskan kebutuhan legalitas Anda..."
                  class="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400 resize-none"
                ></textarea>
              </div>

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

            </form>
          </div>

        </div>
      </BaseContainer>
    </section>
  </div>
</template>
