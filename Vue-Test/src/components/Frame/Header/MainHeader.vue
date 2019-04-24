<template>
    <div id="MainHead">
        <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">{{ userName }}</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的练习</template>
                <el-submenu index="2-1">
                    <template slot="title">基本练习</template>
                    <el-menu-item index="2-1-1">TodoList</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3" @click="loginOutR()">退出</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
import {
  loginOut,
} from '@/plugins/api/LoginApi/LoginApi.js'; //LoginApi接口

export default {
    name: 'MainHead',
    data() {
      return {
        activeIndex: '1',
        userName: this.$store.getters.getUserData.userAccount,
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      loginOutR(){
        //退出
        loginOut(this.$cookies.get("userInfo").access_token)
        .then((response)=>{
            //退出成功操作
            //删除cookie
            this.$cookies.remove("userInfo")
            this.$router.push({path:"/login"}) //跳转登陆页
            this.$message({
                message: '退出成功',
                type: 'success'
            })
        })
        .catch(err => {
            //退出失败操作
            // reject(err)
            this.$message({
                message: '退出失败',
                type: 'error'
            })
        })
        

      }
    }
}
</script>
