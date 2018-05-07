import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Qution from '@/pages/qution/qution'
import Wenti from '@/pages/qution/wenti'
import Login from '@/pages/login/login'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index,
    meta: {
      Auth: true
    }
  },
  {
    path: '/index',
    name: 'login',
    component: Index,
    meta: {
      Auth: true
    },
    children: [{
      path: '/index/qution',
      component: Qution,
      meta: {
        Auth: true
      }
    }, {
      path: '/index/wenti',
      component: Wenti,
      meta: {
        Auth: true
      }
    }]

  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
  ]
})
