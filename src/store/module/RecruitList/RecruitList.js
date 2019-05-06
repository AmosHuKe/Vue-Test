//招聘数据
const state = {
    // token:"", //token
    listData: [], //招聘信息列表
}
const mutations = {
    // set_Token(state,access_token) {
    //     //赋值token
    //     state.token = access_token;
    // },
    set_ListData(state,ListData) {
        //赋值招聘信息列表
        state.listData = ListData;
    },

} 


const actions = {
    // setToken ({commit},access_token) {
    //     //赋值token
    //     commit("set_Token", access_token);
    // },
    setListData ({commit},ListData) {
        //赋值招聘信息列表
        commit("set_ListData", ListData);
    },
}
const getters = {
    // getToken(state){
    //     //获取Token
    //     return state.token;
    // },
    getUserData(state){
        //获取用户信息
        return state.userData;
    }

}

//暴露出去
export default {
    state,
    mutations,
    actions,
    getters
}