import { createRouter, createWebHistory } from 'vue-router'

import HomeSection from '../components/sections/HomeSection.vue'
import AboutSection from '../components/sections/AboutSection.vue'
import ProjectSection from '../components/sections/ProjectSection.vue'
import ContactSection from '../components/sections/ContactSection.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: HomeSection
  },
  {
    path: '/about',
    component: AboutSection
  },
  {
    path: '/projects',
    component: ProjectSection
  },
  {
    path: '/contact',
    component: ContactSection
  },
  {
    path: '/:notFound(.*)',
    redirect: '/home'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
