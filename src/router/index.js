import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Group from "@/views/Group";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/group/:id',
    name: 'Group',
    component: Group
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
