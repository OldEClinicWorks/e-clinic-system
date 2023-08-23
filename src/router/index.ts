import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Base from '../views/Main.vue';
import test from '../views/layout/test.vue';
import SideNavigationBar from '../views/layout/XBaseSideBarNav.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Base

  },
  {
    path: '/test',
    name: 'test',
    component: test

  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
