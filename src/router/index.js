import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import DojosMapsPage from '@/pages/DojosMapsPage.vue'
import PhotosPage from '@/pages/PhotosPage.vue'
import PartenairesPage from '@/pages/PartenairesPage.vue'
import StaffPage from '@/pages/StaffPage.vue'
import HorairesPage from '@/pages/HorairesPage.vue'
import TarifsPage from '@/pages/TarifsPage.vue'
import InscriptionsPage from '@/pages/InscriptionsPage.vue'
import DocumentsPage from '@/pages/DocumentsPage.vue'
import ArticlesPage from '@/pages/ArticlesPage.vue'

const routes = [
  { path: '/',           component: HomePage },
  { path: '/dojosmaps',  component: DojosMapsPage },
  { path: '/photos',     component: PhotosPage },
  { path: '/galerie/:slug', component: () => import('@/pages/GalerieCategoriePage.vue'), props: true },
  { path: '/partenaires',component: PartenairesPage },
  { path: '/staff',      component: StaffPage },
  { path: '/horaires',   component: HorairesPage },
  { path: '/tarifs',     component: TarifsPage },
  { path: '/inscriptions', component: InscriptionsPage },
  { path: '/documents',  component: DocumentsPage },
  { path: '/articles',   component: ArticlesPage },

  // Redirections pour ne pas casser d'anciens liens
  { path: '/dirigeants',      redirect: '/staff' },
  { path: '/professeurs',     redirect: '/staff' },
  { path: '/calendriers',     redirect: '/documents' },
  { path: '/textesofficiels', redirect: '/documents' },
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
