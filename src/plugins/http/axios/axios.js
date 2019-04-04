import axios from 'axios';
// 引入 Qs是为了把json格式，转为formdata 的数据格式
import Qs from 'qs'

axios.defaults.timeout = 5000; //超时终止请求
axios.defaults.baseURL ='http://192.168.1.6:8080/oauth2service/'; //配置请求地址
axios.defaults.headers['Content-type'] = 'application/x-www-form-urlencoded'; //添加headers
axios.defaults.transformRequest = [function (data) {
  // 对 data 进行任意转换处理
  return Qs.stringify(data);
}]
axios.defaults.headers['Authorization'] = 'Basic Y2xpZW50XzI6JDJhJDEwJHRtUDc4bUJqWEU1cmwxd3NSbFVwRE9tRnJQM1k2OFEvUC9kSUk4L3hxeEJlMlBkM3FFSFdX'; //授权服务器
 
 
// //http request 拦截器
// axios.interceptors.request.use(
//   config => {
//     // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
//     config.data = JSON.stringify(config.data);
//     config.headers = {
//       /*'Content-Type':'application/x-www-form-urlencoded'*/
//       'Content-Type':'application/json;charset=UTF-8'
//     }
//     // if(token){
//     //   config.params = {'token':token}
//     // }
//     return config;
//   },
//   error => {
//     return Promise.reject(err);
//   }
// );
 
 
//http response 拦截器
 
// axios.interceptors.response.use(
//   response => {
//     if(response.data.errCode ==2){
//       router.push({
//         path:"/login",
//         querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
//       })
//     }
//     return response;
//   },
//   error => {
//     Message({
//       Message:error.message,
//       type:'error',
//       duration:5*1000
//     });
//     return Promise.reject(error)
//   }
// )
 
 
 
/**
 * 封装get方法
 * @param url
 * @param params
 * @returns {Promise}
 */
 
export function fetch(url,params={}){
  return new Promise((resolve,reject) => {
    axios.get(url,{  
      params: params 
    })
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
 * @param params
 * @returns {Promise}
 */
 
export function post(url,params = {}){
  return new Promise((resolve,reject) => {
    axios.post(url,{  
      params: params 
    })
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