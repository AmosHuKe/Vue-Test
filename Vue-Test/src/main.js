import Vue from 'vue'
import App from '@/App.vue'
import axios from 'axios' //axios
import VueCookies from 'vue-cookies'

import ElementUI from 'element-ui'; //Element-UI
import 'element-ui/lib/theme-chalk/index.css'; //Element-UI样式

import '@/lib/PurpleAdmin/css/style.css'; //PurpleAdmin样式

import Common from '@/components/Common/Common.js' //公共文件
import router from "@/router/index.js" //路由
import store from '@/store/index.js' //状态管理

axios.defaults.withCredentials = false
Vue.config.productionTip = false

Vue.use(VueCookies); //使用VueCookies
Vue.use(ElementUI); //使用ElementUI

Vue.prototype.Common = Common; //配置全局使用公共文件

//全局配置axios
import {getUserinfo,post,fetch,patch,put} from "@/plugins/http/axios/axios.js";
Vue.prototype.$axios=axios;
Vue.prototype.$getUserinfo=getUserinfo;
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;


new Vue({
  router, //配置路由
  store, //状态管理
  render: h => h(App),
}).$mount('#app')




