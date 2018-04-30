// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import Cookie from 'js-cookie'
import MD5 from 'blueimp-md5'
import './../static/reset.css'

router.beforeEach((to, from, next) => {
  if (to.meta.Auth) {
    const user = Cookie.get('user')
    if (!user) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

Vue.config.productionTip = false
Vue
  .use(ElementUI)

Vue.prototype.Cookie = Cookie
Vue.prototype.$md5 = MD5

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
