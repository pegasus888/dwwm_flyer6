import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import ReadPostView from '../views/posts/ReadPostView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import StudentsView from '../views/students/StudentsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/students',
      name: 'Students',
      component: StudentsView
    },
    {
      path: '/readpost',
      name: 'ReadPost',
      component: ReadPostView
    },
    // Redirect
    {
      path: '/dwwm-students',
      redirect: '/students',
    },
    // catchall 404: Will catch any others routes that does not match these above
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFoundView
    }
  ]
})

export default router

