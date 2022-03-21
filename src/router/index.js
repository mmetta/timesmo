import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EgoInfo from '../views/egotest/EgoInfo.vue'
import EgoQuestoes from '../views/egotest/EgoQuestoes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/egoinfo',
    name: 'EgoInfo',
    component: EgoInfo
  },
  {
    path: '/egoquestoes',
    name: 'EgoQuestoes',
    component: EgoQuestoes
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
