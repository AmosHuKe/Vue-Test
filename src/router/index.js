import Vue from "vue";
import VueRouter from "vue-router";
import VueCookies from 'vue-cookies';
import store from '@/store/index.js' //状态管理
import NProgress from 'nprogress'; //动画
import 'nprogress/nprogress.css'; //动画css

// 引入组件
import {
    getUser,
} from '@/plugins/api/LoginApi/LoginApi.js'; //LoginApi接口

// vue 使用 vueRouter
Vue.use(VueRouter);
Vue.use(VueCookies);

// 在main.js 配置路由
// 在App.vue 使用 <router-view></router-view>
// 跳转如 <router-link to="/home">Home</router-link>


const router = new VueRouter ({
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
                ,index: 0 // 判断动画 值小为父 
            },
            component: () => import("@/components/Pages/Login/Login.vue")
        },
        {
            path: "/main", //后台页
            meta: {
                index: 1 // 判断动画 值小为父 
            },
            component: () => import("@/components/MainIndex.vue"), //后台框架
            children: [
                {path:'/',redirect:'/main/banner'}, //默认轮播图页
                {path: "todolist",name: "todolist",component: () => import("@/components/Pages/TodoList/TodoListIndex.vue")}, //TodoList
                {path: "banner",name: "banner",component: () => import("@/components/Pages/Banner/Banner.vue")}, //轮播图页
                {path: "recruit",name: "recruit",component: () => import("@/components/Pages/Recruit/RecruitList")}, //招聘页
                {path: "recruitData/:id",name: "recruitData",component: () => import("@/components/Pages/Recruit/RecruitData")}, //招聘详情
            ]
                
        },
        {
            path: "*", //404
            name: "404",
            meta:{
                requireAuth: true // 添加该字段，表示进入这个路由是不需要验证是否有权限
            },
            component: () => import("@/components/Pages/404/404.vue")
        }
        
    ]
})

//路由守卫（拦截）
router.beforeEach((to, from, next) => {
    NProgress.start(); //动画加载

    let refresh_token=""; //refresh_token
    if(VueCookies.get("userInfo") != null && VueCookies.get("userInfo").refresh_token != ""){
        refresh_token = VueCookies.get("userInfo").refresh_token; //获取Cookie 值
    }
    //console.log(store) //后台打印store
    //console.log(store.getters.getToken) //后台打印store.state.token
    if (!to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (refresh_token != "" && refresh_token != null) {  // 获取当前的token是否存在
            if(store.getters.getUserData.userAccount == "" || store.getters.getUserData.userAccount == null){ //查看缓存中是否有用户信息，没有的话重新请求，否则重新登陆
                getUser(VueCookies.get("userInfo").access_token) //获取用户信息并再次授权服务器
                .then((response)=>{
                    //获取用户信息成功操作
                    if(response.code == 200){
                        store.dispatch("setUserData",response.data) //存入store
                        next(); //继续跳转
                    }else{
                        next({
                            path: '/',
                            query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
                        })
                    }
                })
                .catch(err => {
                    //获取用户信息失败操作
                    // reject(err)
                    next({
                        path: '/',
                        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
                    })
                })
            }else {
                next();
            }
        } else {
            next({
                path: '/',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }else {
        next();
    }
})

router.afterEach((to, from) => {
    NProgress.done(); //路由加载完成停止动画
})

export default router;