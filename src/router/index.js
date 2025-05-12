import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Estudios from '../views/Estudios.vue'
import Conocimientos from '../views/Conocimientos.vue'
import ExperienciaLaboral from '../views/ExperienciaLaboral.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/estudios',
    name: 'Estudios',
    component: Estudios
  },
  {
    path: '/conocimientos',
    name: 'Conocimientos',
    component: Conocimientos
  },
  {
    path: '/experiencia',
    name: 'ExperienciaLaboral',
    component: ExperienciaLaboral
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router