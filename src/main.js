import '@babel/polyfill'
import Vue from 'vue'
import store from './store'
import filters from './filters'
import './plugins/element.js'

import App from './App.vue'
Vue.config.productionTip = false

//全局过滤器
Object.keys(filters).forEach(filterName => {
  Vue.filter(filterName, filters[filterName])
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
