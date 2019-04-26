<template>
    <div id="AsideMenu">
        <!-- 侧边栏组件 -->
        <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
            <template v-for="list in this.menuList" >  <!-- 循环数据；数据menuList通过props传递 -->
                
                    <a-sub-menu 
                        v-if="list.children" 
                        :key="list.menuId" 
                        :index="list.menuId" 
                    ><!-- 判断是否有子菜单 -->
                        <a-icon :type="list.menuIcon" />
                        <span slot="title">{{ list.menuName}}</span>
                        <AsideMenu :menuList="list.children"></AsideMenu> <!-- 当有子菜单再次使用这个模板，:menuList通过props传递 -->
                    </a-sub-menu>
                    <a-menu-item v-else :index="list.menuId" :key="list.menuId"> <!-- 没有子菜单就只用一次 -->
                        <a-icon :type="list.menuIcon" />
                        <span>{{ list.menuName}}</span>
                    </a-menu-item>
                
            </template>
        </a-menu>
    </div>
</template>

<script>

export default {
    name: 'AsideMenu',
    props:['menuList']
}
</script>