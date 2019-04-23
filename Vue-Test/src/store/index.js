import Vue from 'vue'
import Vuex from 'vuex'

//modules
import LoginModule from '@/components/Pages/Login/module/LoginModule.js' //登陆及token
import AsideModule from '@/components/Frame/Aside/module/AsideModule.js' //侧边菜单
import TodoListModule from '@/components/Pages/TodoList/module/TodoListModule.js' //TodoList

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    modules:{
        Login: LoginModule ,
        Aside: AsideModule ,
        TodoList: TodoListModule ,
    }

})