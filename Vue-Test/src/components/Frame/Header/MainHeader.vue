<template>
    <div id="MainHead">
        <a-layout-header :style="{ background: '#fff', padding: 0 }" />
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
            //console.log(response);
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
