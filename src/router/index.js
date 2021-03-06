import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/messages',
    name: 'Messages',
    component: () => import( '../views/Messages.vue')
  },
  {
    path: '/notification',
    name: 'Notification',
    component: () => import( '../views/Notification.vue')
  },
  {
    path: '/myProfile',
    name: 'MyProfile',
    component: () => import( '../views/MyProfile.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import( '../views/Register.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
