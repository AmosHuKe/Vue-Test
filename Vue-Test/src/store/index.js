import Vue from 'vue'
import Vuex from 'vuex'

//modules
import LoginModules from '@/components/Pages/Login/module/Login.js' 

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    modules:{
        Login: LoginModules
    }

})