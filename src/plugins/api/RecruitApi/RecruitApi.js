import { post } from '@/plugins/http/axios/axios.js' //引入axios封装方法

/**
 * 数据请求接口
 * S1 正式服务器
 * S2 mock模拟
 */
const ServiceBaseUrl1 = "S2"; 

/**
 * 获取招聘列表
 * @returns {Promise}
 */
export function getRecruitList(){
    let datas = {
        ServiceBaseUrl: ServiceBaseUrl1, //使用服务器
    }
    let e = post("/getRecruitList",datas);
    return e;
}