import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import MainIndex from "../components/MainIndex.vue" //主要页面，首页
import TodoListIndex from "../components/Pages/TodoList/TodoListIndex.vue" //TodoList 页

// vue 使用 vueRouter
Vue.use(VueRouter);

// 在main.js 配置路由
// 在App.vue 使用 <router-view></router-view>
// 跳转如 <router-link to="/home">Home</router-link>

export default new VueRouter({
    //mode: 'history', //history模式
    routes: [   //路由信息
        {
            path:"/",
            redirect: '/mainindex'  //重定向
        },
        {
            path: "/todolist",
            name: "todolist",
            component: TodoListIndex
        },
        {
            path:"/mainindex",
            name: "mainindex",
            component: MainIndex
        },
    ]
})