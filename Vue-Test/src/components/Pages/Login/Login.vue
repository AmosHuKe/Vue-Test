<template>
    <div id="Login">
        <div class="container-scroller" id="aplogn">
            <div class="container-fluid page-body-wrapper full-page-wrapper">
                <div class="content-wrapper d-flex align-items-center auth">
                    <div class="row w-100">
                        <div class="col-lg-4 mx-auto">
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
                                        <a href="javascript:;" class="auth-link text-black text-primary" @click="showLogin()">短信登陆</a>
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
    getUser
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
    methods: {
        submitLogin(e) {
            //登录
            var _this = this
            if(_this.mUserName == ""){
                _this.$message({
                    message: '填写账号',
                    type: 'warning'
                })
                return false
            }
            if(_this.mPassWord == ""){
                _this.$message({
                    message: '填写密码',
                    type: 'warning'
                })
                return false
            }
            if(_this.submitL){
                //判断是否已经点击登录 防止重复请求登录
                _this.loadingLogin(e, true) //开启锁
                if(_this.loginShow){
                    //普通账号登录
                    //console.log("普通账号登录")

                    // 模拟登陆
                    let cookiesData= {
                        "access_token" : "233666"
                        ,"username" : _this.mUserName
                    }
                    this.$cookies.set("userInfo",cookiesData) //存入cookie 防止刷新后没有store的值
                    this.$store.commit("set_Token", cookiesData.access_token); //赋值store
                    _this.$message({
                        message: '登录成功',
                        type: 'success'
                    })
                    setTimeout(() =>{
                        _this.loadingLogin(e, false) //关闭锁
                        _this.$router.push({path: '/main/banner'}) //跳转到后台 用作测试直接登陆
                    }, 2000)

                    // 实际情况
                    // getToken(_this.mUserName, _this.mPassWord) //登陆接口
                    // .then((response)=>{
                    //     //成功操作
                    //     //console.log(response)
                    //     let cookiesData= {
                    //         "access_token" : response.access_token
                    //         ,"username" : _this.mUserName
                    //     }
                    //     this.$cookies.set("userInfo",cookiesData) //存入cookie 防止刷新后没有store的值
                    //     this.$store.dispatch("setToken", cookiesData.access_token); //赋值store
                    //     _this.$message({
                    //         message: '登录成功',
                    //         type: 'success'
                    //     })
                    //     console.log((getUser())) //弹出获取的用户
                    //     _this.loadingLogin(e, false) //关闭锁
                    //     this.$router.push({path: '/main/banner'}) //跳转到后台
                    // })
                    // .catch(err => {
                    //     //失败操作
                    //     // reject(err)
                    //     this.$message.error('登录失败 '+err)    
                    //     _this.loadingLogin(e, false) //关闭锁 
                    // })
                    
                }else {
                    //短信登录
                    //console.log("短信登录")
                    getToken(_this.mUserName, _this.mPassWord)
                    .then((response)=>{
                        //console.log(response)
                        //将Token 存入cookies
                        this.$cookies.set("access_token",response.access_token)
                        _this.$message({
                            message: '登录成功',
                            type: 'success'
                        })
                        _this.loadingLogin(e, false) //关闭锁
                    })
                    .catch(err => {
                        // reject(err)
                        this.$message.error('登录失败 '+err)
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
                    let loadingT = '<i class="el-icon-loading"></i>';
                    e.srcElement.innerHTML = loadingT;
                }else if(!c){
                    _this.submitL = true; //loading锁
                    e.srcElement.innerHTML = "登 录";
                }
            }else if(_this.smsShow){
                //短信登陆
                if(c && _this.submitLsms){
                    _this.submitLsms = false //loading锁
                    let loadingT = '<i class="el-icon-loading"></i>'
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
