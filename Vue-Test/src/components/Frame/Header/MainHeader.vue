<template>
    <div id="MainHead">
        <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">Amos</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的练习</template>
                <el-submenu index="2-1">
                    <template slot="title">基本练习</template>
                    <el-menu-item index="2-1-1">TodoList</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3" @click="loginOut()">退出</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: 'MainHead',
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      loginOut(){
        //退出
        //删除cookie
        this.$cookies.remove("userInfo");
        this.$store.dispatch("setToken","");
        this.$router.push({path:"/login"}) //跳转登陆页

      }
    }
}
</script>
