import "@babel/polyfill";
import Vue from "vue";
import store from "./store/index";
import filters from "./filters";
import "./plugins/element.js";
import Myplugin from './common/utils';
import "@/components/base";
import App from "./App.vue";
Vue.config.productionTip = false;

Vue.use(Myplugin)
//全局过滤器
Object.keys(filters).forEach(filterName => {
  Vue.filter(filterName, filters[filterName]);
});

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
