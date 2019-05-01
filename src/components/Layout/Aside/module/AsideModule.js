//Aside数据
const state = {
    urlList:[ //菜单配置
        {
            menuId:"0",
            menuName: "首页", //父名
            menuUrl: "/main/banner", //父URL
            menuIcon: "home", //Icon
            
        },
        {
            menuId:"1",
            menuName: "练习", //父名
            menuUrl: "", //父URL
            menuIcon: "code", //Icon
            children: [
                {
                    menuId:"1.1",
                    menuName: "TodoList", //子名
                    menuUrl: "/main/todolist", //子URL
                    menuIcon: "ordered-list", //Icon
                }
            ]
        },
    ], 
    collapsed: false, //侧边菜单是否收缩
}
const mutations = {
    set_UrlList(state,urlList) {
        //赋值菜单
        state.urlList = urlList;
    },
    set_Collapsed(state,collapsed) {
        //赋值侧边菜单是否收缩
        state.collapsed = collapsed;
    },

} 


const actions = {
    setUrlList ({commit},urlList) {
        //赋值菜单
        commit("set_UrlList", urlList);
    },
    setCollapsed ({commit},collapsed) {
        //赋值菜单
        commit("set_Collapsed", collapsed);
    },
}
const getters = {
    getUrlList(state){
        return state.urlList;
    },
    getCollapsed(state){
        return state.collapsed;
    },

}

//暴露出去
export default {
    state,
    mutations,
    actions,
    getters
}