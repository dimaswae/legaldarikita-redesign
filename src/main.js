import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue'

import App from './App.vue'
import router from './router'
import '@/styles/main.css'

const app = createApp(App)
const head = createHead()

app.use(createPinia())
app.use(router)
app.use(head)

app.mount('#app')

/**
 * Developed by Dimas Rizqia Hidayat
 * Internship Project - PT ICommits Karya Solusi
 * UIN Sunan Gunung Djati Bandung
 */
