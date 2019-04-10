import { getAccess_Token,post } from '../../../plugins/http/axios/axios.js' //引入axios封装方法

/**
 * 登陆获取Token
 * @param url 请求接口
 * @param username 账号
 * @param password 密码
 * @returns {Promise}
 */
export function getToken(username,password){
    let datas = {
        username: username,
        password:  password,
        grant_type: 'password',
        // client_id: 'client_2',
        // client_secret: 'secret',
        //access_token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiKiJdLCJ1c2VyX25hbWUiOiJhZG1pbiIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJleHAiOjE1NTQxOTkzNjEsImF1dGhvcml0aWVzIjpbIlJPTEVfQURNSU4iXSwianRpIjoiZDgwZjYxMzMtYWUzZS00N2M4LTk3ZGYtYjhlMTVmOTc5ODYyIiwiY2xpZW50X2lkIjoiY2xpZW50XzIifQ.IfF9WsfPArWN3AbibV9a1sF3cTKDvacOauKaA5ceieU"
    }
    let e = post("/oauth/token",datas);
    return e;
}

/**
 * 获取登陆后的用户
 * @param url 请求接口
 * @returns {Promise}
 */
export function getUser(){
    let access_token = getAccess_Token()
    let datas = {
        access_token: access_token
    }
    let e = post("/oauth/token",datas);
    return e;
}


