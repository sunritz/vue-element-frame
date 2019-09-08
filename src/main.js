// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import Menu from '@/components/menu'
import Head from '@/components/header'
import Main from '@/components/main'
import Test from '@/components/test'

Vue.component('app-menu', Menu)
Vue.component('app-main', Main)
Vue.component('app-head', Head)
Vue.component('app-test', Test)

import  VueResource  from 'vue-resource'
Vue.use(VueResource)


Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
