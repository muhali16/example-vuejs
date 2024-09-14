import {createRouter, createWebHistory} from 'vue-router';
import HomeView from "../views/HomeViews.vue";
import JobView from "../views/JobViews.vue";
import NotFoundViews from "@/views/NotFoundViews.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: NotFoundViews,
    }
  ]
})

export default router;