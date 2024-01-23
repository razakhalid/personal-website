import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/pages/HomePage.vue";
import WorkPage from "@/pages/WorkPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/work',
      component: WorkPage
    }
  ]
})

export default router
