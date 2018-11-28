import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import MainPage from '@/components/mainpage/MainPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
