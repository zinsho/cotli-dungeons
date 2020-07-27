import Vue from 'vue'
import VueRouter from 'vue-router'
import CotliDungeons from '../views/CotliDungeons.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Dungeon Calculator',
    component: CotliDungeons
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
