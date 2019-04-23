//Aside数据
const state = {
    urlList:[ //菜单配置
        {
            menuId:"0",
            menuName: "首页", //父名
            menuUrl: "/main/banner", //父URL
            menuIcon: "el-icon-location-outline", //Icon
            
        },
        {
            menuId:"1",
            menuName: "练习", //父名
            menuUrl: "", //父URL
            menuIcon: "el-icon-time", //Icon
            children: [
                {
                    menuId:"1.1",
                    menuName: "TodoList", //子名
                    menuUrl: "/main/todolist", //子URL
                    menuIcon: "el-icon-time", //Icon
                }
            ]
        },
    ], 
}
const mutations = {
    set_UrlList(state,urlList) {
        //赋值菜单
        state.token = urlList;
    },

} 


const actions = {
    setUrlList ({commit},urlList) {
        //赋值菜单
        commit("set_UrlList", urlList);
    }
}
const getters = {
    getUrlList(state){
        return state.urlList;
    }

}

//暴露出去
export default {
    state,
    mutations,
    actions,
    getters
}