import { createRouter, createWebHistory } from 'vue-router'
import Auth from '@/layot/LayoutAuth.vue'
import Main from '@/layot/LayotMain.vue'
import Dashboard from '@/views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: Dashboard
        }
      ]
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = false
  if (to.name !== 'Auth' && !isAuthenticated) {
    next({ name: 'Auth' })
  } else {
    next()
  }
})
export default router
