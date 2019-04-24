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


//路由拦截器
import {
  getUser,
} from '@/plugins/api/LoginApi/LoginApi.js'; //LoginApi接口
// if(refresh_token != null && refresh_token != ""){
//     store.dispatch("setToken", refresh_token); //赋值token 刷新后取Cookie的值
// }
router.beforeEach((to, from, next) => {
  let refresh_token=""; //refresh_token
  if(VueCookies.get("userInfo") != null && VueCookies.get("userInfo").refresh_token != ""){
    refresh_token = VueCookies.get("userInfo").refresh_token; //获取Cookie 值
  }
  //console.log(store) //后台打印store
  //console.log(store.getters.getToken) //后台打印store.state.token
  if (!to.meta.requireAuth) {  // 判断该路由是否需要登录权限
      if (refresh_token != "" && refresh_token != null) {  // 获取当前的token是否存在
          if(store.getters.getUserData.userAccount == "" || store.getters.getUserData.userAccount == null){ //查看缓存中是否有用户信息，没有的话重新请求，否则重新登陆
            getUser(VueCookies.get("userInfo").access_token) //获取用户信息并再次授权服务器
            .then((response)=>{
                //获取用户信息成功操作
                if(response.code == 200){
                  store.dispatch("setUserData",response.data) //存入store
                  console.log(response)
                  next(); //继续跳转
                }else{
                  next({
                    path: '/',
                    query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
                  })
                }
            })
            .catch(err => {
                //获取用户信息失败操作
                // reject(err)
                next({
                  path: '/',
                  query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
                })
            })
          }else {
            next();
          }
      } else {
          next({
              path: '/',
              query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
          })
      }
  }else {
    if (refresh_token != "" && refresh_token != null) {  // 获取当前的token是否存在
      next({ path: '/main/banner' }) //获取成功就跳转到后台首页   
    }else{
      next();
    }
      
  }
});


new Vue({
  router, //配置路由
  store, //状态管理
  render: h => h(App),
}).$mount('#app')




