import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TecnologyView from '@/views/TecnologyView.vue'
import CatalogsView from '@/views/CatalogsView.vue'
import TechInfoView from '@/views/TechInfoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/tecnology',
      component: TecnologyView,
    },
    {
      path: '/catalogs',
      component: CatalogsView,
    },
    {
      path: '/tech-info',
      component: TechInfoView,
    }
  ],
})

export default router