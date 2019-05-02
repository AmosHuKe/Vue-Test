import Vue from 'vue'
import Vuex from 'vuex'

//modules
import LoginModule from '@/store/module/Login/LoginModule.js' //登陆及token
import AsideModule from '@/store/module/Aside/AsideModule.js' //侧边菜单
import TodoListModule from '@/store/module/TodoList/TodoListModule.js' //TodoList

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    modules:{
        Login: LoginModule ,
        Aside: AsideModule ,
        TodoList: TodoListModule ,
    }

})