<template>
    <div id="MainHead">
        <template :style="{ background: '#fff'}" >
          
          
          <a-menu
            v-model="current"
            theme="light"
            mode="horizontal"
            class="headerMenu"
          >
            <a-menu-item key="collapsed">
              <a-icon
                class="trigger"
                :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                @click="setCollapsed()"
              />
              
            </a-menu-item >

            <a-sub-menu class="f-right">
              <span slot="title" class="submenu-title-wrapper"><a-icon type="user" />{{ userName }}</span>
              <a-menu-item-group title="我的">
                <a-menu-item key="user:1">个人资料</a-menu-item>
                <a-menu-item key="user:2">信息</a-menu-item>
              </a-menu-item-group>
              <a-menu-item-group title="系统">
                <a-menu-item key="user:3" @click="loginOutR">退出</a-menu-item>
              </a-menu-item-group>
            </a-sub-menu>
            
          </a-menu>

        </template>
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
        current: ['collapsed'],
        userName: this.$store.getters.getUserData.userAccount,
        collapsed: this.$store.getters.getCollapsed, //是否收缩 
      };
    },
    methods: {
      setCollapsed() {
        this.$store.dispatch("setCollapsed",(!this.$store.getters.getCollapsed)) //改变收缩
        this.collapsed = this.$store.getters.getCollapsed 
      },
      loginOutR(){
        //退出
        const _this= this
        _this.$confirm({
          title: '确定退出？',
          content: '',
          maskClosable: true,
          okText: '确定',
          okType: 'default',
          cancelText: '取消',
          onOk() {
            //确定退出
            loginOut(_this.$cookies.get("userInfo").access_token)
            .then((response)=>{
                //退出成功操作
                //删除cookie
                //console.log(response);
                _this.$cookies.remove("userInfo")
                _this.$router.push({path:"/"}) //跳转登陆页
                _this.$message.success('退出成功')
            })
            .catch(err => {
                //退出失败操作
                // reject(err)
                _this.$message.error('退出失败')
            })
          },
          onCancel() {},
        });
        
        

      }
    }
}
</script>
<style scoped>
.ant-menu-submenu{
  line-height: 64px;
}
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}
.trigger:hover {
  color: #1890ff;
}
.f-right{
  float: right;
}
</style>

