import { createRouter, createWebHistory } from 'vue-router';

// Lazy load components for performance
const Home = () => import('../views/HomeView.vue');
const Layanan = () => import('../views/LayananView.vue');
const TentangKami = () => import('../views/TentangKamiView.vue');
const DetailLayanan = () => import('../views/DetailLayananView.vue');
const Artikel = () => import('../views/ArtikelView.vue');
const DetailArtikel = () => import('../views/DetailArtikelView.vue');
const Contact = () => import('../views/ContactView.vue');

// Testing Page
// const App = () => import('../views/TestAppView.vue');

const routes = [
  { path: '/',
    name: 'Home',
    component: Home
  },
  { path: '/tentang-kami',
    name: 'TentangKami',
    component: TentangKami
  },
  { path: '/layanan',
    name: 'Layanan',
    component: Layanan,
    meta: { scrollToTop: true }
  },
  {
    path: '/layanan/:slug',
    name: 'service-detail',
    component: DetailLayanan,
    props: true
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/artikel',
    name: 'Artikel',
    component: Artikel
  },
  {
    path: '/artikel/:slug',
    name: 'artikel-detail',
    component: DetailArtikel,
    props: true
  },
  // Catch-all for 404
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue'),
    meta: { title: '404 - Halaman Tidak Ditemukan' }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // CRITICAL TASK F-03 IMPLEMENTATION:
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // If back button pressed, go to previous spot
    } else {
      return { top: 0, behavior: 'smooth' }; // Always scroll to top
    }
  }
});

export default router;
