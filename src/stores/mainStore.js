import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

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

  const contact = ref({
    address: 'Jl. Riung Purna I No.17, Cisaranten Kidul, Kec. Gedebage, Kota Bandung, Jawa Barat 40295.',
    phone: '+62 85520912043',
    email: 'info@legaldarikita.com',
    workingHours: 'Senin - Jumat, 09:00 - 17:00 WIB',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1027.52055235525!2d107.68481479115852!3d-6.946524355921228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7e4b5dc7c15%3A0x579f78c01b2a8266!2sIcommits%20IT%20Consultant%20Indonesia%20-%20AKMI%20Karya%20Global!5e1!3m2!1sid!2sid!4v1770534151488!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  });

  const team = ref([
    {
      id: 1,
      name: 'Rezha Ranmark',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400'
    }
    // {
    //   id: 2,
    //   name: 'Sarah Amalia',
    //   role: 'Head of Legal',
    //   image: 'https://images.unsplash.com/photo-1573496359-0cf7429f6da3?auto=format&fit=crop&q=80&w=400'
    // },
    // {
    //   id: 3,
    //   name: 'Budi Santoso',
    //   role: 'Senior Consultant',
    //   image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
    // },
    // {
    //   id: 4,
    //   name: 'Reza Rahardian',
    //   role: 'Tech Lead',
    //   image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400'
    // }
  ]);

  const services = ref([
  {
    id: 1,
    slug: 'pt-perorangan',
    title: 'PT Perorangan',
    description: 'Pendirian PT Perorangan untuk pelaku usaha individu.',
    price: 'Rp 750.000',
    icon: 'User',
    longDesc: 'Solusi legalitas revolusioner untuk UMK (Usaha Mikro Kecil). PT Perorangan memungkinkan Anda mendirikan badan hukum hanya dengan 1 orang pendiri tanpa perlu Akta Notaris. Ini adalah cara termudah dan termurah untuk memisahkan harta pribadi dan bisnis.',
    benefits: [
      'Cukup 1 Orang Pendiri',
      'Tanpa Akta Notaris (SK Kemenkumham)',
      'Sudah Termasuk NIB (Nomor Induk Berusaha)',
      'Bisa Buka Rekening Bank Perusahaan',
      'Pajak Final UMKM 0.5%'
    ],
    requirements: [
      'KTP Pendiri (Wajib E-KTP)',
      'NPWP Pendiri',
      'Alamat Usaha (Boleh alamat rumah)',
      'Email & No HP Aktif'
    ]
  },
  {
    id: 2,
    slug: 'pt-standar',
    title: 'PT Standar',
    description: 'Paket pendirian & perubahan PT standar (Umum).',
    price: 'Rp 4.000.000',
    icon: 'Building2',
    longDesc: 'Perseroan Terbatas (PT) Persekutuan Modal adalah standar emas badan usaha di Indonesia. Didirikan oleh minimal 2 orang, PT memberikan perlindungan aset pribadi secara maksimal dan kredibilitas tinggi di mata vendor, bank, dan investor.',
    benefits: [
      'Akta Notaris & SK Kemenkumham',
      'NPWP Badan Perusahaan',
      'NIB (Nomor Induk Berusaha)',
      'Izin Lokasi & Usaha Dasar',
      'Perlindungan Harta Pribadi'
    ],
    requirements: [
      'Scan KTP & NPWP min. 2 Pendiri',
      'Pas Foto Direktur',
      'Surat Keterangan Domisili',
      'Struktur Pemegang Saham'
    ]
  },
  {
    id: 3,
    slug: 'pt-premium',
    title: 'PT Premium + Virtual Office',
    description: 'Layanan PT premium dengan fasilitas kantor virtual.',
    price: 'Rp 5.500.000',
    icon: 'Building',
    longDesc: 'Paket All-in-One bagi Anda yang ingin mendirikan PT namun belum memiliki kantor fisik. Kami menyediakan alamat bisnis prestisius di Jakarta/Bandung, lengkap dengan layanan resepsionis dan penanganan surat-menyurat.',
    benefits: [
      'Semua Fasilitas PT Standar',
      'Sewa Virtual Office 1 Tahun',
      'Alamat Bisnis di Zona Komersial',
      'Layanan Resepsionis & Handling Surat',
      'Bebas Konsultasi Pajak 1 Bulan'
    ],
    requirements: [
      'Dokumen PT Standar',
      'KTP Penanggung Jawab'
    ]
  },
  {
    id: 4,
    slug: 'pt-pma',
    title: 'PT PMA (Asing)',
    description: 'Pendirian PT Penanaman Modal Asing.',
    price: 'Rp 8.000.000',
    icon: 'Globe',
    longDesc: 'PT Penanaman Modal Asing (PMA) adalah satu-satunya cara bagi investor asing untuk memiliki bisnis di Indonesia secara legal. Kami membantu navigasi aturan BKPM, pemenuhan modal disetor (Rp 10 Miliar), dan izin prinsip.',
    benefits: [
      'Kepemilikan Asing hingga 100% (Sesuai Sektor)',
      'Izin Prinsip & NIB OSS RBA',
      'Fasilitas Keimigrasian (Sponsor Visa)',
      'Hak Repatriasi Modal',
      'Konsultasi Laporan LKPM'
    ],
    requirements: [
      'Paspor Pendiri Asing',
      'Articles of Association (Jika pemegang saham Badan Hukum Asing)',
      'Bukti Setor Modal (Investment Plan)',
      'Surat Domisili Usaha'
    ]
  },
  {
    id: 5,
    slug: 'cv-standar',
    title: 'CV Standar',
    description: 'Paket pendirian CV standar untuk UMKM.',
    price: 'Rp 2.750.000',
    icon: 'Briefcase',
    longDesc: 'Commanditaire Vennootschap (CV) adalah pilihan populer bagi bisnis keluarga atau kemitraan skala menengah. Tanpa syarat modal minimal yang ketat seperti PT, CV menawarkan fleksibilitas dan biaya pendirian yang lebih terjangkau.',
    benefits: [
      'Akta Notaris & Pendaftaran Pengadilan',
      'NIB & NPWP Badan',
      'Tidak Ada Modal Minimal',
      'Biaya Pendirian Lebih Hemat',
      'Cocok untuk Supplier/Kontraktor Menengah'
    ],
    requirements: [
      'KTP & NPWP 2 Orang (Sekutu Aktif & Pasif)',
      'Nama CV (Pengecekan Ketersediaan)',
      'Alamat Usaha'
    ]
  },
  {
    id: 6,
    slug: 'cv-premium',
    title: 'CV Premium + PKP',
    description: 'Paket CV premium dengan layanan PKP & Perpajakan.',
    price: 'Rp 4.000.000',
    icon: 'BriefcaseBusiness',
    longDesc: 'Paket lengkap pendirian CV termasuk pengurusan Pengusaha Kena Pajak (PKP). Cocok bagi Anda yang berencana mengikuti tender pemerintah atau bertransaksi dengan perusahaan besar yang membutuhkan Faktur Pajak.',
    benefits: [
      'Semua Fasilitas CV Standar',
      'Pengukuhan PKP (Pengusaha Kena Pajak)',
      'E-Faktur & Sertifikat Elektronik',
      'Bonus Stempel Perusahaan',
      'Konsultasi Laporan Pajak Bulanan'
    ],
    requirements: [
      'Dokumen CV Standar',
      'Foto Lokasi Usaha (Survei Lapangan)',
      'Denah Lokasi'
    ]
  },
  {
    id: 7,
    slug: 'yayasan',
    title: 'Pendirian Yayasan',
    description: 'Badan hukum untuk kegiatan sosial, agama, & kemanusiaan.',
    price: 'Rp 3.000.000',
    icon: 'HeartHandshake',
    longDesc: 'Yayasan adalah badan hukum yang dikhususkan untuk tujuan sosial, keagamaan, dan kemanusiaan. Aset yayasan terpisah dari pendiri. Kami membantu penyusunan Anggaran Dasar yang sesuai dengan UU Yayasan.',
    benefits: [
      'Akta Notaris & SK Kemenkumham',
      'NPWP Yayasan',
      'Legalitas Menerima Hibah/Bantuan',
      'Struktur Pembina, Pengurus, Pengawas',
      'Izin Kegiatan Sosial'
    ],
    requirements: [
      'KTP & NPWP Pendiri',
      'Susunan Pengurus (Ketua, Sekretaris, Bendahara)',
      'Aset Awal Yayasan (Dipisahkan)',
      'Program Kerja Singkat'
    ]
  },
  {
    id: 8,
    slug: 'firma-persekutuan',
    title: 'Firma & Persekutuan Perdata',
    description: 'Solusi legalitas untuk profesional (Lawyer, Akuntan, dll).',
    price: 'Rp 2.750.000',
    icon: 'Scale',
    longDesc: 'Badan usaha khusus untuk tenaga profesional yang menjalankan profesi di bawah satu nama bersama (Firma) atau kerjasama profesi (Persekutuan Perdata). Tanggung jawab renteng antar sekutu menjamin kepercayaan klien.',
    benefits: [
      'Akta Pendirian Resmi',
      'Pendaftaran Kemenkumham',
      'Branding Profesional Bersama',
      'NIB (Jika ada kegiatan usaha dagang)',
      'NPWP Badan'
    ],
    requirements: [
      'KTP & NPWP Para Sekutu',
      'Izin Profesi / Sertifikasi Keahlian',
      'Kesepakatan Nama Bersama'
    ]
  },
  {
    id: 9,
    slug: 'perkumpulan',
    title: 'Perkumpulan / Komunitas',
    description: 'Badan hukum untuk komunitas dan organisasi anggota.',
    price: 'Rp 3.000.000',
    icon: 'Users',
    longDesc: 'Berbeda dengan Yayasan, Perkumpulan berbasis pada anggota. Cocok untuk komunitas hobi, asosiasi profesi, atau klub olahraga yang ingin memiliki rekening bank atas nama organisasi dan legalitas formal.',
    benefits: [
      'Akta Notaris & SK Kemenkumham',
      'NPWP Perkumpulan',
      'Rekening Bank Organisasi',
      'Perlindungan Nama Organisasi',
      'Struktur Keanggotaan Formal'
    ],
    requirements: [
      'KTP & NPWP Pendiri',
      'Daftar Anggota Awal',
      'AD/ART (Anggaran Dasar & Rumah Tangga)',
      'Berita Acara Rapat Pendirian'
    ]
  },
  {
    id: 10,
    slug: 'koperasi',
    title: 'Pendirian Koperasi',
    description: 'Badan usaha berbasis anggota dan asas kekeluargaan.',
    price: 'Rp 4.000.000',
    icon: 'Sprout',
    longDesc: 'Bangun ekonomi bersama dengan Koperasi. Kami membantu pendirian Koperasi Primer (min 9 orang) hingga Sekunder. Legalitas lengkap termasuk penyuluhan dinas terkait jika diperlukan.',
    benefits: [
      'Akta Pendirian & SK Kemenkumham',
      'NIB & Izin Usaha Simpan Pinjam (Jika ada)',
      'Buku Anggaran Dasar',
      'Akses ke Hibah/Program Pemerintah',
      'Sistem SHU (Sisa Hasil Usaha)'
    ],
    requirements: [
      'KTP Minimal 9 Orang Pendiri (Koperasi Primer)',
      'Berita Acara Penyuluhan',
      'Susunan Pengawas & Pengurus',
      'Bukti Setor Simpanan Pokok'
    ]
  }
]);

// ---------------------------------------------------------

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

  function getServiceBySlug(slug) {
    return services.value.find(service => service.slug === slug)
  }

  function getArticleBySlug(slug) {
    return articles.value.find(article => article.slug === slug)
  }

// Return Components
  return {
    companyProfile,
    contact,
    team,
    services,
    articles,
    latestArticles,
    getServiceById,
    getServiceBySlug,
    getArticleBySlug
  }
})
