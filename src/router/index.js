import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import DojosMapsPage from '@/pages/DojosMapsPage.vue'
import PhotosPage from '@/pages/PhotosPage.vue'
import PartenairesPage from '@/pages/PartenairesPage.vue'
import DirigeantsPage from '@/pages/DirigeantsPage.vue'
import ProfsPage from '@/pages/ProfsPage.vue'
import HorairesPage from '@/pages/HorairesPage.vue'
import TarifsPage from '@/pages/TarifsPage.vue'
import InscriptionsPage from '@/pages/InscriptionsPage.vue'
import CalendriersPage from '@/pages/CalendriersPage.vue'
import TextesOfficielsPage from '@/pages/TextesOfficielsPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/dojosmaps', component: DojosMapsPage },
  { path: '/photos', component: PhotosPage },
  { path: '/partenaires', component: PartenairesPage },
  { path: '/dirigeants', component: DirigeantsPage },
  { path: '/professeurs', component: ProfsPage },
  { path: '/horaires', component: HorairesPage },
  { path: '/tarifs', component: TarifsPage },
  { path: '/inscriptions', component: InscriptionsPage },
  { path: '/calendriers', component: CalendriersPage },
  { path: '/textesofficiels', component: TextesOfficielsPage },
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
