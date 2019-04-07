<template>
  <div id="App">
    <el-container>
      <!-- 顶部 -->
      <el-header>
        <MainHeader></MainHeader>
      </el-header>
      <el-container>
        <!-- 侧边栏 -->
        <el-aside class="main-aside">
          <MainAside></MainAside>
        </el-aside>
        <el-container>
          <!-- 主要 -->
          <el-main>
            <router-view></router-view> <!-- 路由 -->
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
//import MainIndex from './components/MainIndex.vue' //主要
import MainHeader from './components/Frame/Header/MainHeader.vue' //顶部
import MainAside from './components/Frame/Aside/MainAside.vue' //侧边栏

export default {
  name: 'App',
  components: {
    //MainIndex, //主要
    MainHeader, //顶部
    MainAside, //侧边
  }
}
</script>

<style>
#App {
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
.main-aside{
  width: 200px !important;
  padding-top: 40px;
}
a {
  text-decoration:none !important;
}
a:hover{
  text-decoration:none !important;
}
</style>
