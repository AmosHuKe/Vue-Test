import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'; //Element-UI
import 'element-ui/lib/theme-chalk/index.css'; //Element-UI样式
import Common from './components/Common/Common.js' //公共文件
import router from "./router/index.js" //路由
import axios from 'axios' //axios



axios.defaults.withCredentials = false

Vue.prototype.Common = Common; //配置全局使用公共文件

//全局配置axios
import {post,fetch,patch,put} from "./plugins/http/axios/axios.js";
Vue.prototype.$axios=axios;
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;



Vue.config.productionTip = false


Vue.use(ElementUI); //使用ElementUI

new Vue({
  router, //配置路由
  render: h => h(App),
}).$mount('#app')


