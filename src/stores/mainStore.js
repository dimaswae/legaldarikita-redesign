import { defineStore } from 'pinia'
import { ref, computed } from 'vue' // Don't forget to import computed!

export const useMainStore = defineStore('legal', () => {
  // STATE (Data Stored)
  const companyProfile = ref({
    name: 'LegaLDK',
    tagline: 'Mitra Legalitas Terpercaya.',
    description: 'LegaLDK adalah konsultan legalitas yang berdedikasi membantu pengusaha Indonesia, mulai dari UMKM hingga korporasi, untuk mendapatkan kepastian hukum dalam berbisnis.',
    story: 'Didirikan pada tahun 2023, kami bermula dari sebuah inisiatif kecil untuk menyederhanakan birokrasi bagi teman-teman UMKM. Kini, kami telah membantu lebih dari 500 badan usaha mendapatkan izin resmi.',
    vision: 'Menjadi platform layanan legalitas digital nomor 1 di Indonesia yang paling transparan dan mudah diakses.',
    mission: [
      'Menyederhanakan proses birokrasi yang rumit.',
      'Memberikan edukasi hukum yang mudah dipahami.',
      'Menawarkan biaya yang transparan tanpa pungutan liar.'
    ],
    stats: [
        { label: 'Klien Terbantu', value: '500+' },
        { label: 'Izin Terbit', value: '1,200+' },
        { label: 'Tahun Pengalaman', value: '3+' },
      ]
  });

  const contactInfo = ref({
    address: 'Jl. Jendral Sudirman No. Kav 52, Jakarta Selatan, DKI Jakarta',
    phone: '+62 812-3456-7890',
    email: 'info@legaldarikita.com',
    whatsappUrl: 'https://wa.me/6281234567890',
    googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.29798263597!2d106.808779314769!3d-6.223287995493976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14d796c827d%3A0x2d1702e5c8c5f59c!2sSudirman%20Central%20Business%20District!5e0!3m2!1sen!2sid!4v1622606677890!5m2!1sen!2sid'
  });

  const team = ref([
    {
      id: 1,
      name: 'Dimas Rizqia',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 2,
      name: 'Sarah Amalia',
      role: 'Head of Legal',
      image: 'https://images.unsplash.com/photo-1573496359-0cf7429f6da3?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 3,
      name: 'Budi Santoso',
      role: 'Senior Consultant',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 4,
      name: 'Reza Rahardian',
      role: 'Tech Lead',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400'
    }
  ]);

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
  ]);

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
    companyProfile,
    contactInfo,
    team,
    services,
    articles,
    latestArticles,
    getServiceById,
    getArticleBySlug
  }
})
