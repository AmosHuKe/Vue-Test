//Login数据
const state = {
    token:"", //token
}
const mutations = {
    set_Token(state,access_token) {
        //赋值token
        state.token = access_token;
    },

} 


const actions = {
    setToken ({commit},access_token) {
        //赋值token
        commit("set_Token", access_token);
    }
}
const getters = {
    getToken(state){
        return state.token;
    }

}

//暴露出去
export default {
    state,
    mutations,
    actions,
    getters
}