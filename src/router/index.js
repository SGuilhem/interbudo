import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import DojosPage from '@/pages/DojosPage.vue'
import PhotosPage from '@/pages/PhotosPage.vue'
import PartenairesPage from '@/pages/PartenairesPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/dojos', component: DojosPage },
  { path: '/photos', component: PhotosPage },
  { path: '/partenaires', component: PartenairesPage },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
})

export default router
