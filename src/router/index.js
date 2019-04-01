import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import Lgoin from "../components/Pages/Login/Login.vue" //登陆页
import MainIndex from "../components/MainIndex.vue" //主要页面，首页
import Banner from "../components/Pages/Banner/Banner.vue" //轮播首页
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
            path: "/",
            redirect: "/login" //重定向
        },
        {
            path: "/login",
            name: "login",
            component: Lgoin
        },
        {
            path: "/todolist",
            name: "todolist",
            component: TodoListIndex
        },
        {
            path: "/Banner",
            name: "Banner",
            component: Banner
        },
        {
            path:"/mainindex",
            name: "mainindex",
            component: MainIndex
        },
    ]
})