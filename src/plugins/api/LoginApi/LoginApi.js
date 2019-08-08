import { post } from '@/plugins/http/axios/axios.js' //引入axios封装方法
/**
 * 数据请求接口
 * S1 正式服务器
 * S2 mock模拟
 */
const ServiceBaseUrl1 = "S2"; 
const ServiceBaseUrl2 = "S2"; 

/**
 * 登陆获取Token
 * @param username 账号
 * @param password 密码
 * @returns {Promise}
 */
export function getToken(username,password){
    let datas = {
        ServiceBaseUrl: ServiceBaseUrl1, //使用服务器
        username: username,
        password:  password,
        grant_type: 'password',
        // client_id: 'client_2',
        // client_secret: 'secret',
        //access_token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiKiJdLCJ1c2VyX25hbWUiOiJhZG1pbiIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJleHAiOjE1NTQxOTkzNjEsImF1dGhvcml0aWVzIjpbIlJPTEVfQURNSU4iXSwianRpIjoiZDgwZjYxMzMtYWUzZS00N2M4LTk3ZGYtYjhlMTVmOTc5ODYyIiwiY2xpZW50X2lkIjoiY2xpZW50XzIifQ.IfF9WsfPArWN3AbibV9a1sF3cTKDvacOauKaA5ceieU"
    }
    
    let e = post("oauth/token",datas);
    return e;
}

/**
 * 获取登陆后的用户信息  登陆后得到access_token和refresh_token再次授权服务器
 * @returns {Promise}
 */
export function getUser(access_token){
    let datas = {
        ServiceBaseUrl: ServiceBaseUrl1, //使用服务器
        access_token: access_token,
    }
    let e = post("users/CurrentUser",datas);
    return e;
}

/**
 * 退出登陆
 */
export function loginOut(access_token){
    let datas = {
        ServiceBaseUrl: ServiceBaseUrl1, //使用服务器
        access_token: access_token,
    }
    let e = fetch("oauth/logout",datas);
    return e;
}

/**
 * 测试 返回字符串
 */
export function getSussce(access_token){
    let datas = {
        ServiceBaseUrl: ServiceBaseUrl2, //使用服务器
        access_token: access_token,
    }
    let e = post("/success",datas);
    return e;
}


