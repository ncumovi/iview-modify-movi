// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import iView from '../static/movi.min'
import iView from '../static/iview.min'
// import '../static/iview.css'

import Scrollspy from 'vue2-scrollspy';
Vue.use(Scrollspy);

import Scrollactive from 'vue-scrollactive'
Vue.use(Scrollactive);



Vue.config.productionTip = false
Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
