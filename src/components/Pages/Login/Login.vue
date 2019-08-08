<template>
    <div id="Login">
        <div class="container-scroller" id="aplogn">
            <div class="container-fluid page-body-wrapper full-page-wrapper">
                <div class="content-wrapper d-flex align-items-center auth">
                    <div class="row w-100">
                        <div class="col-lg-4 mx-auto" >
                            <!-- Main -->
                            <div class="auth-form-light text-left p-5">
                                <div class="brand-logo display-4">  
                                    {{ tTitle }}
                                </div>
                                <h6 class="font-weight-light"></h6>
                                
                                <!-- 普通登陆 -->
                                <form class="pt-3 userloginf" v-show="loginShow">
                                    <div class="form-group">
                                        <input
                                            type="text"
                                            class="form-control form-control-lg oBorder"
                                            id="mUserName"
                                            v-model="mUserName"
                                            :placeholder="userName_Pla"
                                            :disabled="!submitL">
                                    </div>
                                    <div class="form-group">
                                        <input 
                                            type="password"
                                            class="form-control form-control-lg oBorder"
                                            id="mPassWord"
                                            v-model="mPassWord"
                                            :placeholder="passWord_Pla"
                                            :disabled="!submitL">
                                    </div>

                                    <div class="mt-3">
                                    
                                        <button
                                            type="button"
                                            :class="submitL ? 'btn btn-block btn-gradient-primary btn-lg auth-form-btn buttonBorder' : 'btn btn-block btn-gradient-primary btn-lg auth-form-btn buttonBorder buttonLoading'"
                                            href="javascript:;"
                                            @click="submitLogin($event)">
                                            登 录</button>
                                    
                                    </div>
                                <div class="my-2 d-flex justify-content-between align-items-center">
                                    <div class="form-check">
                                        <!-- <a href="javascript:;" class="auth-link text-black text-primary" @click="showLogin()">短信登陆</a> -->
                                    </div>
                                    </div>
                                </form>
                                <!-- End普通登陆 -->
                                
                                <!-- 短信登陆 -->
                                <form class="pt-3 smsloginf" name="loginf" method="post" action="" v-show="smsShow">
                                    <div class="form-group">
                                        <div class="input-group">
                                            <input 
                                                type="text" 
                                                name="tphone" 
                                                class="form-control form-control-lg oBorder" 
                                                id="tphone" 
                                                v-model="tphone" 
                                                @input="showYzm()" 
                                                placeholder="手机号"
                                                :disabled="!submitL">
                                        </div>
                                    
                                    </div>
                                    <div class="form-group" v-show="yzmShow">
                                        <input 
                                            type="text" 
                                            name="tyzm" 
                                            class="form-control form-control-lg oBorder" 
                                            id="tyzm" 
                                            v-model="yzm" 
                                            placeholder="验证码"
                                            :disabled="submitL">
                                    </div>
                                    <div class="mt-3">
                                        <button
                                            type="button"
                                            :class="submitLsms ? 'btn btn-block btn-gradient-primary btn-lg auth-form-btn buttonBorder' : 'btn btn-block btn-gradient-primary btn-lg auth-form-btn buttonBorder buttonLoading'"
                                            href="javascript:;"
                                            @click="submitLogin($event)">登 录</button>
                                    </div>
                                    <div class="my-2 d-flex justify-content-between align-items-center">
                                        <div class="form-check">
                                            <a href="javascript:;" class="auth-link text-black userlogin text-primary" @click="showLogin()">账号登陆</a>
                                        </div>
                                    </div>
                                    
                                </form>
                                <!-- End短信登陆 -->
                            </div>
                            <!-- Main End-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    getToken,
    getUser,
    getSussce,
} from '@/plugins/api/LoginApi/LoginApi.js'; //LoginApi接口

export default {
    name: 'Login',
    data () {
        return {
            tTitle: 'Vue-Test' //标题

            //普通账号登录
            ,mUserName : '' //账号
            ,userName_Pla : '账号' //账号提示框
            ,mPassWord : '' //密码
            ,passWord_Pla : '密码' //密码提示框
            
            ,submitL : true //登录操作锁
            
            ,loginShow: true //普通登陆是否隐藏
            ,smsShow: false //短信登陆是否隐藏
            ,yzmShow: false //短信验证码是否隐藏
            
            
            //短信登陆
            ,tphone:"" //手机号
            ,yzm:"" //验证码
            ,submitLsms : true //sms登录操作锁
        }
    },
    mounted() {
        this.isCookie()
    },
    methods: {
        isCookie(){
            if(this.$cookies.get("userInfo") != null && this.$cookies.get("userInfo").access_token != ""){
                this.$router.push({path:"/main/banner"}) //如果存在cookie将跳转到后台首页
            }
        }
        ,submitLogin(e) {
            //登录
            var _this = this
            _this.$message.destroy() //销毁全局提示
            if(_this.mUserName == ""){
               _this.$message.warning('填写账号')
                return false
            }
            if(_this.mPassWord == ""){
                _this.$message.warning('填写密码')
                return false
            }
            //简单模拟账号
            if(_this.mUserName!="admin" || _this.mPassWord!="admin"){
                _this.$message.warning('账号或密码不正确，账号密码：admin')
                return false
            }
            if(_this.submitL){
                //判断是否已经点击登录 防止重复请求登录
                _this.loadingLogin(e, true) //开启锁
                if(_this.loginShow){
                    //普通账号登录
                    //console.log("普通账号登录")

                    // 模拟登陆
                    // let cookiesData= {
                    //     "refresh_token" : "123"
                    //     ,"access_token" : "123"
                    //     ,"username" : _this.mUserName
                    //     ,"userAccount" : "233"
                    // }
                    // this.$cookies.set("userInfo",cookiesData) //存入cookie 防止刷新后没有store的值
                    // //this.$store.dispatch("setToken", cookiesData.access_token); //赋值store
                    // _this.$store.dispatch("setUserData",cookiesData) //假数据
                    
                    // setTimeout(() =>{
                    //     _this.$message.success('登录成功')
                    //     _this.loadingLogin(e, false) //关闭锁
                    //     _this.$router.push({path: '/main/banner'}) //跳转到后台 用作测试直接登陆
                    // }, 2000)

                    
                    // 实际情况
                    getToken(_this.mUserName, _this.mPassWord) //登陆接口
                    .then((response)=>{
                        //成功操作
                        console.log(response)
                        if(response.code == "200"){
                            //登陆成功200
                            let cookiesData= {
                                "refresh_token" : response.refresh_token
                                ,"access_token" : response.access_token
                                ,"username" : _this.mUserName
                            }
                            getUser(cookiesData.access_token) //获取用户信息并再次授权服务器
                            .then((response)=>{
                                //获取用户信息成功操作
                                if(response.code == 200){
                                    _this.$store.dispatch("setUserData",response.data)    
                                    _this.$cookies.set("userInfo",cookiesData) //存入cookie 防止刷新后没有store的值
                                    //getSussce(this.$cookies.get("userInfo").access_token)
                                    _this.$message.success('登录成功')
                                    //console.log(getUser().id) //弹出获取的用户
                                    //_this.loadingLogin(e, false) //关闭锁
                                    setTimeout(() =>{
                                        _this.$router.push({path: '/main/banner'}) //跳转到后台
                                    },1000)
                                }else{
                                    _this.$router.push({path: '/'}) //跳转到登陆 
                                    _this.loadingLogin(e, false) //关闭锁 
                                }
                                
            
                            })
                            .catch(err => {
                                //获取用户信息失败操作
                                // reject(err)
                                _this.$message.error('登录失败 '+err)
                                _this.$router.push({path: '/'}) //跳转到登陆 
                                _this.loadingLogin(e, false) //关闭锁 
                            })
                        }else{
                            //登陆失败其他代码如10000
                            _this.$message.error(response.message)
                            _this.$router.push({path: '/'}) //跳转到登陆 
                            _this.loadingLogin(e, false) //关闭锁 
                        }
                        
    
                    })
                    .catch(err => {
                        //失败操作
                        // reject(err)
                        _this.$message.error('登录失败 '+err)    
                        _this.loadingLogin(e, false) //关闭锁 
                    })
                    
                }else {
                    //短信登录
                    //console.log("短信登录")
                    getToken(_this.mUserName, _this.mPassWord)
                    .then((response)=>{
                        //console.log(response)
                        //将Token 存入cookies
                        this.$cookies.set("access_token",response.access_token)
                        _this.$message.success('登录成功')
                        _this.loadingLogin(e, false) //关闭锁
                    })
                    .catch(err => {
                        // reject(err)
                        _this.$message.error('登录失败 '+err)
                        _this.loadingLogin(e, false) //关闭锁
                    })
                }
                
            }
            
            
                
        },
        loadingLogin(e, c){
            /**
             * 登录loading 动画
             * @param   e 点击对象
             * @param   c true:开启动画 false:关闭动画
             */
            var _this = this
            if(_this.loginShow){
                if(c && _this.submitL){
                    _this.submitL = false; //loading锁
                    let loadingT = '<i class="anticon anticon-loading"><svg viewBox="0 0 1024 1024" data-icon="loading" width="1em" height="1em" fill="currentColor" aria-hidden="true" class="anticon-spin"><path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path></svg></i>';
                    e.srcElement.innerHTML = loadingT;
                }else if(!c){
                    _this.submitL = true; //loading锁
                    e.srcElement.innerHTML = "登 录";
                }
            }else if(_this.smsShow){
                //短信登陆
                if(c && _this.submitLsms){
                    _this.submitLsms = false //loading锁
                    let loadingT = '<i class="anticon anticon-loading"><svg viewBox="0 0 1024 1024" data-icon="loading" width="1em" height="1em" fill="currentColor" aria-hidden="true" class="anticon-spin"><path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path></svg></i>'
                    e.srcElement.innerHTML = loadingT
                }else if(!c){
                    _this.submitLsms = true //loading锁
                    e.srcElement.innerHTML = "登 录"

                }
            }
        },
        showLogin() {
            //普通账户和短信登录切换
            this.loginShow = !this.loginShow
            this.smsShow = !this.smsShow
        },
        showYzm() {
            //是否显示短信验证码
            this.yzmShow = true
        }
    }
    
}
</script>

<style scoped>
    /* 登录样式 */
    @import url("./css/Login.css"); 
</style>
