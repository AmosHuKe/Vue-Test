<template>
    <div id="AsideMenu">
        <!-- 侧边栏组件 -->
        <template v-for="list in this.menuList" >  <!-- 循环数据；数据menuList通过props传递 -->
            <router-link :to="list.menuUrl" :key="list.menuId"> <!-- 路由 -->
                <el-submenu v-if="list.children" :key="list.menuId" :index="list.menuId"  > <!-- 判断是否有子菜单 -->
                    <template slot="title"  style="padding-left:10px" >
                        <i :class="list.menuIcon"></i>
                        <span slot="title">{{ list.menuName}}</span>
                    </template>
                    <AsideMenu :menuList="list.children"></AsideMenu> <!-- 当有子菜单再次使用这个模板，:menuList通过props传递 -->
                </el-submenu>
                    <el-menu-item v-else :index="list.menuId"  :key="list.menuId" style="padding-left: 20px;"> <!-- 没有子菜单就只用一次 -->
                        <i :class="list.menuIcon"></i>
                        <span slot="title">{{ list.menuName}}</span>
                    </el-menu-item>
            </router-link>
        </template>
    </div>
</template>

<script>
export default {
    name: 'AsideMenu',
    props:['menuList']
}
</script>