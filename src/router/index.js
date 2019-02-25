import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import FirstPage from '@/components/FirstPage'

Vue.use(Router)

export default new Router({
  routes: [
   {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/first',
      name: 'FirstPage',
      component: FirstPage
    }

  ]
})
