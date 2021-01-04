import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Perfil from '../views/Perfil.vue'
import Aulas from '../views/Aulas.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: Perfil
  },
  {
    path: '/aulas',
    name: 'Aulas',
    component: Aulas
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {notRenderMenu: true}
  }
]

const router = new VueRouter({
  routes
})

export default router
