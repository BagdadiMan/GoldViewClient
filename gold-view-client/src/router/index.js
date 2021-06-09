import Vue from 'vue'
import VueRouter from 'vue-router'
import Hospital from '../views/Hospital.vue'
import Home from '../views/Home.vue'
import Department from '../views/Department.vue'
import Room from '../views/Room.vue'
import DataView from '../views/DataView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {

    path: '/hospital/:id',
    name: 'Hospital',
    component: Hospital
  },
  {
    path: '/hospital/:id/department/:dept',
    name: 'Department',
    component: Department
  },
  {
    path: '/hospital/:id/department/:dept/room/:room',
    name: 'Room',
    component: Room
  },
    path: '/dataView',
    name: 'dataView',
    component: DataView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
