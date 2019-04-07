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
                                            :placeholder="userName_Pla">
                                    </div>
                                    <div class="form-group">
                                        <input 
                                            type="password"
                                            class="form-control form-control-lg oBorder"
                                            id="mPassWord"
                                            v-model="mPassWord"
                                            :placeholder="passWord_Pla">
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
                                                placeholder="手机号">
                                        </div>
                                    
                                    </div>
                                    <div class="form-group" v-show="yzmShow">
                                        <input 
                                            type="text" 
                                            name="tyzm" 
                                            class="form-control form-control-lg oBorder" 
                                            id="tyzm" 
                                            v-model="yzm" 
                                            placeholder="验证码">
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
} from '../../../plugins/api/LoginApi/LoginApi.js'; //LoginApi接口

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
        submitLogin() {
            //登录
            var _this = this
            if(_this.loginShow){
                //普通账号登录
                console.log("普通账号登录")
                getToken(_this.mUserName, _this.mPassWord)
                .then((response)=>{
                    alert(JSON.stringify(response))
                })
            }else {
                //短信登录
                console.log("短信登录")
                getToken(_this.mUserName, _this.mPassWord)
                .then((response)=>{
                    alert(JSON.stringify(response))
                })
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
