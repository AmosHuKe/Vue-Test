<template>
  <div id="App">
    <router-view></router-view> <!-- 路由 -->   
  </div>
</template>

<script>

export default {
  name: 'App'
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
