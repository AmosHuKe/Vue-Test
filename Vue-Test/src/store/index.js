import Vue from 'vue'
import Vuex from 'vuex'

//modules
import LoginModules from '@/components/Pages/Login/module/Login.js' //登陆及token
import AsideModules from '@/components/Frame/Aside/module/Aside.js' //侧边菜单

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    modules:{
        Login: LoginModules ,
        Aside: AsideModules
    }

})