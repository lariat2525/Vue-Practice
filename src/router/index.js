import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue' // added
import Router from 'vue-router'
import home from '@/components/pages/home'
import test1 from '@/components/pages/test1'
import test2 from '@/components/pages/test2'
import test3 from '@/components/pages/test3'

Vue.use(Router)
Vue.use(BootstrapVue) // added

import 'bootstrap/dist/css/bootstrap.css' // added
import 'bootstrap-vue/dist/bootstrap-vue.css' // added

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/test1',
      name: 'test1',
      component: test1
    },
    {
      path: '/test2',
      name: 'test2',
      component: test2
    },
    {
      path: '/test3',
      name: 'test3',
      component: test3
    }
  ]
})