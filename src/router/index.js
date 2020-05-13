import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    props: true,
    component: () => import('@/views/HomePage')
  },
  {
    path: '/create',
    name: 'CreatePage',
    props: true,
    component: () => import('@/views/CreatePage')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
