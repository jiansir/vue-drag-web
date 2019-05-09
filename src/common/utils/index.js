import Vue from 'vue'
import * as util from './util'
;('use strict')
let Myplugin = {}
Myplugin.install = function(Vue) {
  if (Vue) {
    Vue.prototype.$util = util
  }
}
export default Myplugin
