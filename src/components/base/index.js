import Vue from 'vue';
import ImgUpload from './img-upload';
var MyPlugin={}
MyPlugin.install=function(Vue){
  if(this.installed) return;
  Vue.component(ImgUpload.name,ImgUpload)
}
// auto install
if (typeof window !== 'undefined' && window.Vue) {
	MyPlugin.install(window.Vue);
}
Vue.use(MyPlugin)

export default MyPlugin