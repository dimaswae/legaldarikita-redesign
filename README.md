# LegaLDK - Jasa Legalitas & Perizinan Bisnis Terpercaya

Selamat datang di repositori **legaldarikita-redesign**! Ini adalah website modern untuk layanan legalitas dan perizinan bisnis yang dirancang dengan teknologi terkini untuk memberikan pengalaman pengguna yang optimal.

---

## 📋 Daftar Isi

- [Tentang Proyek](#tentang-proyek)
- [Fitur Utama](#fitur-utama)
- [Stack Teknologi](#stack-teknologi)
- [Prasyarat](#prasyarat)
- [Instalasi](#instalasi)
- [Pengembangan](#pengembangan)
- [Produksi](#produksi)
- [Struktur Proyek](#struktur-proyek)
- [Perintah Tersedia](#perintah-tersedia)
- [Konfigurasi](#konfigurasi)
- [Kontribusi](#kontribusi)
- [Lisensi](#lisensi)

---

## 🎯 Tentang Proyek

**LegaLDK** adalah platform digital yang menyediakan layanan jasa legalitas dan perizinan bisnis dengan pendekatan yang mudah, aman, dan terpercaya. Kami membantu bisnis Anda mengurus:

- Perizinan Perseroan Terbatas (PT)
- Perizinan Commanditaire Vennootschap (CV)
- Nomor Induk Berusaha (NIB)
- Legalitas dan Sertifikasi Bisnis lainnya

Proyek redesign ini adalah versi modern dari website kami yang dibangun dengan Vue 3 dan Vite untuk performa maksimal.

---

## ✨ Fitur Utama

- 🏠 **Halaman Utama** - Hero section menarik dengan call-to-action
- 📋 **Layanan** - Daftar lengkap layanan legalitas bisnis
- 📰 **Artikel** - Blog informatif tentang perizinan dan legalitas
- 📞 **Kontak** - Formulir kontak dan informasi komunikasi
- 👥 **Tentang Kami** - Informasi perusahaan dan kredibilitas
- 🎨 **Desain Responsif** - Optimal di semua ukuran perangkat
- 🚀 **Performa Cepat** - Built dengan Vite untuk loading ultra-cepat
- 🔍 **SEO Optimized** - Meta tags dan struktur semantic yang baik
- 🎯 **Routing Modern** - Navigation berbasis Vue Router v5
- 🏪 **State Management** - Pinia untuk manajemen state yang efisien

---

## 🛠️ Stack Teknologi

### Frontend Framework

- **Vue.js 3.5+** - Progressive JavaScript framework
- **Vue Router 5.0+** - Routing untuk single-page application
- **Pinia 3.0+** - State management store

### Build & Development

- **Vite 7.3+** - Next generation frontend tooling
- **Tailwind CSS 4.1+** - Utility-first CSS framework
- **JavaScript ES Modules** - Modern module system

### UI & Animation

- **Lucide Vue Next** - Icon library yang komprehensif
- **Radix Vue** - Unstyled, accessible components
- **GSAP 3.14+** - Library animasi profesional
- **@vueuse/head** - Document head meta management

### Development Tools

- **ESLint 9.39+** - Code linting dan quality
- **Prettier 3.8+** - Code formatter
- **OxLint 1.42+** - Fast and powerful linter
- **Tailwind CSS Prettier Plugin** - Auto-format Tailwind classes

### Node.js

- **Runtime:** Node.js 20.19.0+ atau >=22.12.0

---

## 📦 Prasyarat

Sebelum memulai, pastikan Anda telah menginstal:

- **Node.js** versi 20.19.0 atau lebih tinggi (atau versi 22.12.0+)
  - Download dari: https://nodejs.org/
- **npm** (biasanya sudah included dengan Node.js)
- **Git** (opsional, untuk cloning repository)

### Verifikasi Instalasi

```bash
node --version      # Harus v20.19.0+
npm --version       # Harus v10.0.0+
```

---

## 💻 Instalasi

### 1. Clone Repository

```bash
git clone <repository-url>
cd legaldarikita-redesign
```

### 2. Install Dependencies

```bash
npm install
```

Perintah ini akan menginstal semua package yang diperlukan berdasarkan `package.json`.

### 3. Verifikasi Instalasi

```bash
npm run lint
```

Jika tidak ada error, instalasi berhasil! ✅

---

## 🚀 Pengembangan

### Menjalankan Development Server

```bash
npm run dev
```

Setelah perintah dijalankan:

- Server akan berjalan di `http://localhost:5173` (atau port lain jika 5173 sudah terpakai)
- **Hot Module Replacement (HMR)** aktif - perubahan file akan langsung terlihat tanpa reload manual
- Buka browser dan kunjungi URL yang ditampilkan

### Fitur Development

- 📝 Auto reload on file changes
- 🛠️ Vue DevTools integration
- 🐛 Better error messages in browser console

---

## 🏗️ Produksi

### Build untuk Produksi

```bash
npm run build
```

Proses build akan:

1. Mengkompilasi Vue components menjadi JavaScript yang dioptimalkan
2. Minifying dan bundling assets
3. Menghasilkan folder `dist/` dengan file production-ready
4. Output dapat langsung di-deploy ke web server

### Preview Build Lokal

```bash
npm run preview
```

Perintah ini akan menjalankan server local untuk me-preview hasil build sebelum deployment.

---

## 📁 Struktur Proyek

```
legaldarikita-redesign/
├── src/
│   ├── components/              # Reusable Vue components
│   │   ├── layout/              # Layout components (Header, Footer, Navbar)
│   │   ├── sections/            # Section components (Hero, Services, dll)
│   │   └── ui/                  # UI components (Button, Card, dll)
│   ├── layouts/                 # Page layout structures
│   │   ├── DefaultLayout.vue
│   │   ├── FooterLayout.vue
│   │   └── NavBar.vue
│   ├── views/                   # Page components (full page views)
│   │   ├── HomeView.vue
│   │   ├── LayananView.vue
│   │   ├── ArtikelView.vue
│   │   ├── DetailArtikelView.vue
│   │   ├── ContactView.vue
│   │   ├── DetailLayananView.vue
│   │   ├── TentangKamiView.vue
│   │   └── NotFoundView.vue
│   ├── router/                  # Vue Router configuration
│   │   └── index.js
│   ├── stores/                  # Pinia stores (state management)
│   │   └── mainStore.js
│   ├── styles/                  # Global styles
│   │   └── main.css
│   ├── assets/                  # Static assets
│   │   └── webcontent.md
│   ├── App.vue                  # Root component
│   └── main.js                  # Application entry point
├── public/                      # Static public assets
├── package.json                 # Dependencies & scripts
├── vite.config.js              # Vite configuration
├── README.md                    # Dokumentasi proyek
├── index.html                   # HTML entry point
└── eslint.config.js            # ESLint configuration
```

### Penjelasan Direktori

| Direktori         | Fungsi                                  |
| ----------------- | --------------------------------------- |
| `src/`            | Source code utama aplikasi              |
| `src/components/` | Vue components yang reusable            |
| `src/views/`      | Full-page components untuk setiap route |
| `src/layouts/`    | Template layout untuk halaman           |
| `src/router/`     | Konfigurasi Vue Router                  |
| `src/stores/`     | Pinia stores untuk state management     |
| `src/styles/`     | CSS global dan utilities                |
| `public/`         | Assets static yang tidak di-process     |
| `dist/`           | Output production build (generated)     |

---

## 📜 Perintah Tersedia

### Development & Testing

```bash
npm run dev          # Jalankan development server dengan HMR
npm run build        # Build untuk production
npm run preview      # Preview production build secara lokal
npm run lint         # Jalankan semua linter (oxlint + eslint)
```

### Linting & Formatting

```bash
npm run lint:oxlint   # Jalankan OxLint (linter cepat)
npm run lint:eslint   # Jalankan ESLint (linter JavaScript)
npm run format        # Format code dengan Prettier
```

### Kombinasi Commands

```bash
# Instal dependencies
npm install

# Development workflow
npm run dev
npm run lint
npm run format

# Production workflow
npm run lint
npm run build
npm run preview
```

---

## ⚙️ Konfigurasi

### Vite Configuration

Konfigurasi Vite dapat disesuaikan di file `vite.config.js`:

- Vue plugin
- Tailwind CSS
- Asset handling
- Development server settings

Dokumentasi lengkap: https://vite.dev/config/

### ESLint & Prettier

- **ESLint Config:** `eslint.config.js`
  - Aturan linting untuk Vue, JavaScript, dan best practices
  - Auto-fix dengan `npm run lint:eslint -- --fix`

- **Prettier Config:** Integrated dalam package.json
  - Automatic code formatting
  - Tailwind CSS class sorting

### Tailwind CSS

- **Version:** 4.1.18+
- **File:** Configured dalam `vite.config.js`
- **Styling:** Gunakan utility classes di templates

---

## 🤝 Kontribusi

Kami menerima kontribusi dari komunitas! Untuk berkontribusi:

### Langkah-Langkah

1. **Fork repository**

   ```bash
   git clone <your-fork-url>
   ```

2. **Buat feature branch**

   ```bash
   git checkout -b feature/nama-fitur
   ```

3. **Buat perubahan & commit**

   ```bash
   git add .
   git commit -m "feat: deskripsi perubahan"
   ```

4. **Push ke fork Anda**

   ```bash
   git push origin feature/nama-fitur
   ```

5. **Buat Pull Request**
   - Jelaskan apa yang Anda ubah
   - Reference issue jika ada
   - Tunggu review dari maintainer

### Commit Message Convention

Gunakan Conventional Commits:

- `feat: ` - Fitur baru
- `fix: ` - Perbaikan bug
- `docs: ` - Dokumentasi
- `style: ` - Formatting code
- `refactor: ` - Refactoring code
- `test: ` - Testing
- `chore: ` - Maintenance, dependencies

---

## 📄 Lisensi

Proyek ini dilindungi oleh lisensi [Masukkan Jenis Lisensi]. Untuk detail lebih lanjut, lihat file `LICENSE`.

---

## 📞 Dukungan & Kontak

Jika Anda memiliki pertanyaan atau saran:

- 📧 Email: [email-support]
- 🌐 Website: https://legaldarikita.com
- 📱 WhatsApp: [nomor-whatsapp]
- 🐛 Report Bug: Buka issue di GitHub

---

## 🎓 Resources & Referensi

- [Vue.js 3 Documentation](https://vuejs.org/)
- [Vue Router Documentation](https://router.vuejs.org/)
- [Pinia Documentation](https://pinia.vuejs.org/)
- [Vite Documentation](https://vite.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

---

## 🎉 Kata Penutup

Terima kasih telah menggunakan LegaLDK! Kami berkomitmen untuk terus meningkatkan layanan dan platform kami.

**Happy coding!** 🚀

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
