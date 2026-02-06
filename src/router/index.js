import { createRouter, createWebHistory } from 'vue-router';

// Lazy load components for performance
const Home = () => import('../views/HomeView.vue');
const Layanan = () => import('../views/LayananView.vue');
const TentangKami = () => import('../views/TentangKamiView.vue');

// Testing Page
// const App = () => import('../views/TestAppView.vue');

const routes = [
  { path: '/',
    name: 'Home',
    component: Home },
  { path: '/tentang-kami',
    name: 'TentangKami',
    component: TentangKami },
  { path: '/layanan',
    name: 'Layanan',
    component: Layanan },
  // Catch-all for 404
  { path: '/:pathMatch(.*)*', redirect: '/' }
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
