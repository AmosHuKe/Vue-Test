import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'; //Element-UI
import 'element-ui/lib/theme-chalk/index.css'; //Element-UI样式
import Common from './components/Common/Common.js' //公共文件
import router from "./router/index.js" //路由

Vue.config.productionTip = false

Vue.prototype.Common = Common; //配置全局使用公共文件
Vue.use(ElementUI); //使用ElementUI

new Vue({
  router, //配置路由
  render: h => h(App),
}).$mount('#app')
