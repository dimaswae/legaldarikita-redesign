import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useMainStore = defineStore('legal', {
  state: () => ({
    companyInfo: ref({
      name: 'LegalDK',
      description: 'Consulting services for business legality and licensing.',
      phone: '+62 812-3456-7890',
      email: 'info@legaldarikita.com'
    }),
    services: ref([
      {
        id: 'pt-perorangan',
        title: 'PT Perorangan',
        description: 'Pendirian PT Perorangan untuk pelaku usaha individu.',
        price: 'Rp 750.000',
        icon: 'User'
      },
      {
        id: 'pt-standar',
        title: 'PT Standar',
        description: 'Paket pendirian & perubahan PT standar.',
        price: 'Rp 4.000.000',
        icon: 'Building2'
      },
      {
        id: 'pt-premium',
        title: 'PT Premium',
        description: 'Layanan PT premium dengan fasilitas lengkap.',
        price: 'Rp 5.500.000',
        icon: 'Building'
      },
      {
        id: 'pt-pma',
        title: 'PT PMA',
        description: 'Pendirian PT Penanaman Modal Asing.',
        price: 'Rp 8.000.000',
        icon: 'Globe'
      },
      {
        id: 'cv-standar',
        title: 'CV Standar',
        description: 'Paket pendirian CV standar.',
        price: 'Rp 2.750.000',
        icon: 'Briefcase'
      },
      {
        id: 'cv-premium',
        title: 'CV Premium',
        description: 'Paket CV premium dengan layanan tambahan.',
        price: 'Rp 4.000.000',
        icon: 'BriefcaseBusiness'
      },
      {
        id: 'yayasan',
        title: 'Yayasan',
        description: 'Pendirian & perubahan yayasan.',
        price: 'Rp 3.000.000',
        icon: 'HeartHandshake'
      },
      {
        id: 'firma-persekutuan',
        title: 'Firma & Persekutuan',
        description: 'Pendirian firma & persekutuan perdata.',
        price: 'Rp 2.750.000',
        icon: 'Scale'
      },
      {
        id: 'perkumpulan',
        title: 'Perkumpulan',
        description: 'Pendirian & perubahan perkumpulan.',
        price: 'Rp 3.000.000',
        icon: 'Users'
      },
      {
        id: 'koperasi',
        title: 'Koperasi',
        description: 'Pendirian & perubahan koperasi.',
        price: 'Rp 4.000.000',
        icon: 'Sprout'
      }
    ]),
    articles: ref([
    {
      id: 101,
      title: 'Cara Mudah Daftar PT Perorangan 2026',
      slug: 'cara-mudah-daftar-pt',
      image: 'https://placehold.co/600x400?text=PT+Perorangan', // Placeholder
      content: 'Mendirikan PT Perorangan kini semakin mudah dengan adanya UU Cipta Kerja...',
      date: '20 Feb 2026',
      category: 'Panduan'
    },
    {
      id: 102,
      title: 'Pentingnya NIB bagi UMKM',
      slug: 'pentingnya-nib-umkm',
      image: 'https://placehold.co/600x400?text=NIB+UMKM',
      content: 'NIB bukan sekedar identitas, tapi juga kunci akses permodalan KUR...',
      date: '18 Feb 2026',
      category: 'Bisnis'
    }
  ]),
  }),
  actions: {
    getServiceById(id) {
      return this.services.find(service => service.id === id);
    },
    getArticleBySlug(slug) {
      return this.articles.find(article => article.slug === slug);
    }
  }
});
