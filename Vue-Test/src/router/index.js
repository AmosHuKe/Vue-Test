import Vue from "vue";
import VueRouter from "vue-router";
import VueCookies from 'vue-cookies';

// 引入组件
import Lgoin from "@/components/Pages/Login/Login.vue" //登陆页
import MainIndex from "@/components/MainIndex.vue" //主要页面，首页
import Banner from "@/components/Pages/Banner/Banner.vue" //轮播首页
import TodoListIndex from "@/components/Pages/TodoList/TodoListIndex.vue" //TodoList 页

// vue 使用 vueRouter
Vue.use(VueRouter);
Vue.use(VueCookies);

// 在main.js 配置路由
// 在App.vue 使用 <router-view></router-view>
// 跳转如 <router-link to="/home">Home</router-link>


export default new VueRouter({
    mode: 'history', //history模式
    routes: [   //路由信息
        {
            path: "/",
            meta: {
                requireAuth: true // 添加该字段，表示进入这个路由是不需要验证是否有权限
            },
            redirect: "/login" //重定向
        },
        {
            path: "/login", //登陆页
            name: "login",
            meta: {
                requireAuth: true // 添加该字段，表示进入这个路由是不需要验证是否有权限
            },
            component: Lgoin
        },
        {
            path: "/main", //后台页
            name: "main",
            component: MainIndex,
            children: [
                {path:'/',redirect:'/main/banner'}, //默认轮播图页
                {path: "todolist",name: "todolist",component: TodoListIndex}, //TodoList
                {path: "banner",name: "banner",component: Banner}, //轮播图页
            ]
                
        }
        
    ]
})
