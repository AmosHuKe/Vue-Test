<template>
  <div id="App">
    <transition :name="transitionName">
      <router-view></router-view> <!-- 路由 -->   
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      transitionName: "" //动画
    }
  },
  watch: {
    '$route' (to, from) {
      //判断动画
      //console.log(to)
      //let toName = to.name
      const toIndex = to.meta.index
      const fromIndex = from.meta.index
      this.transitionName = toIndex < fromIndex ? 'el-fade-in-linear' : 'el-fade-in'
    }
  }
}
</script>

<style scope>
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
