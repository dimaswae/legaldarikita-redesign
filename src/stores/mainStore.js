import { defineStore } from 'pinia'
import { ref, computed } from 'vue' // Don't forget to import computed!

export const useMainStore = defineStore('legal', () => {
  // STATE (Data Stored)
  const companyInfo = ref({
    name: 'LegalDK',
    description: 'Consulting services for business legality and licensing.',
    phone: '+62 812-3456-7890',
    email: 'info@legaldarikita.com'
  })

  const services = ref([
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
  ])

  const articles = ref([
    {
      id: 101,
      title: 'Cara Mudah Daftar PT Perorangan 2026',
      slug: 'cara-mudah-daftar-pt-perorangan',
      thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
      content: 'Full content here...',
      excerpt: 'Mendirikan PT Perorangan kini semakin mudah dengan adanya UU Cipta Kerja. Simak panduan lengkap langkah demi langkah di sini.',
      date: '20 Feb 2026',
      category: 'Panduan'
    },
    {
      id: 102,
      title: 'Pentingnya NIB bagi UMKM',
      slug: 'pentingnya-nib-umkm',
      thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800',
      content: 'Full content here...',
      excerpt: 'NIB bukan sekedar identitas, tapi juga kunci akses permodalan KUR dan legalitas operasional yang sah di mata hukum.',
      date: '18 Feb 2026',
      category: 'Bisnis'
    },
    {
      id: 103,
      title: 'Perbedaan PT dan CV: Mana yang Cocok?',
      slug: 'perbedaan-pt-dan-cv',
      thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
      content: 'Full content here...',
      excerpt: 'Bingung memilih badan usaha? Pelajari perbedaan mendasar antara PT dan CV dari segi modal, tanggung jawab, dan pajak.',
      date: '15 Feb 2026',
      category: 'Edukasi'
    },
    {
      id: 104,
      title: 'Panduan Pajak untuk Startup Baru',
      slug: 'panduan-pajak-startup',
      thumbnail: 'https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?auto=format&fit=crop&q=80&w=800',
      content: '...',
      excerpt: 'Kewajiban pajak sering terlupakan oleh founder. Jangan sampai terkena denda, pahami kewajiban pajak Anda.',
      date: '10 Feb 2026',
      category: 'Pajak'
    }
  ])
  // ---------------------------------------------------------
  const latestArticles = computed(() => {
    return articles.value.slice(0, 3)
  })
  // ---------------------------------------------------------
  function getServiceById(id) {
    return services.value.find(service => service.id === id)
  }

  function getArticleBySlug(slug) {
    return articles.value.find(article => article.slug === slug)
  }

// Return Components
  return {
    companyInfo,
    services,
    articles,
    latestArticles,
    getServiceById,
    getArticleBySlug
  }
})
