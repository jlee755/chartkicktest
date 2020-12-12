// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.config.productionTip = false
Vue.use(Chartkick.use(Chart))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
