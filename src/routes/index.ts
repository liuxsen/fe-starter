import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import Index from '../pages/Index/index.vue'

const routes: RouteRecordRaw [] = [
  {
    path: '/',
    component: Index
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router