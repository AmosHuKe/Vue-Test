//Login数据
const state = {
    // token:"", //token
    userData: [], //用户信息
}
const mutations = {
    // set_Token(state,access_token) {
    //     //赋值token
    //     state.token = access_token;
    // },
    set_UserData(state,UserData) {
        //赋值用户信息
        state.userData = UserData;
    },

} 


const actions = {
    // setToken ({commit},access_token) {
    //     //赋值token
    //     commit("set_Token", access_token);
    // },
    setUserData ({commit},UserData) {
        //赋值用户信息
        commit("set_UserData", UserData);
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