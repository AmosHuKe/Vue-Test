
import axios from 'axios';
// 引入 Qs是为了把json格式，转为formdata 的数据格式
import Qs from 'qs'
//import store from '@/store/index.js' //状态管理
import router from "@/router/index.js" //路由
import VueCookies from 'vue-cookies'
import { Message } from 'ant-design-vue' //ant-design

axios.defaults.timeout = 5000; //超时终止请求
axios.defaults.baseURL ='http://192.168.1.6:8080/oauth2service/'; //配置请求地址 http://192.168.1.5:8080/oauth2service/
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';//添加headers
axios.defaults.transformRequest = [function (data) {
  // 对 data 进行任意转换处理
  // console.log(data)
  return Qs.stringify(data);
}]
axios.defaults.headers['Authorization'] = 'Basic Y2xpZW50XzI6JDJhJDEwJHRtUDc4bUJqWEU1cmwxd3NSbFVwRE9tRnJQM1k2OFEvUC9kSUk4L3hxeEJlMlBkM3FFSFdX'; //授权服务器
 
 
// //http request 请求拦截器
axios.interceptors.request.use(
  config => {
    let access_token = "" //取值refresh_token
    if(VueCookies.get("userInfo") != null && VueCookies.get("userInfo").access_token != ""){
      access_token = VueCookies.get("userInfo").access_token; //获取Cookie 值
    }
    //console.log(refresh_token);
    //config.data = JSON.stringify(config.data);
    // config.headers = {
    //   'Content-Type':'application/x-www-form-urlencoded'
    //   // 'Content-Type':'application/json;charset=UTF-8'
    // }
    if(access_token != null && access_token != ""){
      //如果有token,将默认传入每次请求的数据中
      //console.log(config)
      /**
       * 多服务器解决方案（不是特别好）
       * 判断参数中 ServiceBaseUrl 的值进行服务器地址赋值
       */
      const ServiceBaseUrl = config.data.ServiceBaseUrl; //判断服务器地址
      if(ServiceBaseUrl == "S1"){
        config.baseURL= 'http://192.168.1.6:8080/oauth2service/'
      }else if(ServiceBaseUrl == "S2"){
        config.baseURL= 'http://192.168.1.6:8081/'
      }
      
      config.headers.access_token = access_token
    }else{
      //没有token 跳转到首页
      router.push({name: 'login'}) //跳转到登陆
    }
    return config;
  },
  error => {
    //错误跳转到首页
    router.push({name: 'login'}) //跳转到登陆
    return Promise.reject(error);
  }
);
 
 
// //http response 响应拦截器
axios.interceptors.response.use(
  response => {
    //console.log(response)
    // if(response.status != 200){
    //   router.push({
    //     path:"/",
    //     querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
    //   })
    // }
    return response;
  },
  error => {
    //删除cookie
    VueCookies.remove("userInfo") //防止服务器token过期时的无限请求失败
    router.push({
      path:"/",
      querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
    })
    Message.error('无权访问，请重新登陆')
    return Promise.reject(error)
  }
)
 
/**
 * 获取登陆后的基本信息方法
 * @returns 
 */
export function getUserinfo(){
  let Userinfo = VueCookies.get("userInfo");
  return Userinfo;
}
 
/**
 * 封装get方法
 * @param url
 * @param params
 * @returns {Promise}
 */
 
export function fetch(url,params={}){
  return new Promise((resolve,reject) => {
    axios.get(url,
      {
        params: params
      }
    )
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      reject(err)
    })
  })
}
 
/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.post(url,data)
    .then(response => {
      resolve(response.data);
    },err => {
      reject(err)
    })
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */
 
export function patch(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.patch(url,data)
      .then(response => {
        resolve(response.data);
      },err => {
        reject(err)
      })
  })
}
 
/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */
 
export function put(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.put(url,data)
      .then(response => {
        resolve(response.data);
      },err => {
        reject(err)
      })
  })
}