<template>
  <div id="App">
    <router-view></router-view> <!-- 路由 -->
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      transitionName: "" //动画
    }
  }
}
</script>

<style scope>
a {
  text-decoration:none !important;
}
a:hover{
  text-decoration:none !important;
}
</style>
