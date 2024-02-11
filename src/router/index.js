import { createRouter, createWebHistory } from 'vue-router'
import ConnectView from '../views/ConnectView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'connect',
      component: ConnectView
    }
  ]
})

export default router
