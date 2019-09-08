import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Test from '@/components/test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base:'/',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Main
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
