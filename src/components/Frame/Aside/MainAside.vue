<template>
    <div id="MainAside">
        <!-- 侧边栏 -->
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <AsideMenu :menuList="this.urlList"></AsideMenu>
            
        </el-menu>
    </div>
</template>

<script>
import AsideMenu from './AsideMenu.vue'; //引进菜单模板

export default {
    name: 'MainAside',
    components: {
        AsideMenu
    },
    data() {
        return {
            urlList: [
                {
                    menuId:"0",
                    menuName: "首页", //父名
                    menuUrl: "/Banner", //父URL
                    menuIcon: "el-icon-location-outline", //Icon
                    
                },
                {
                    menuId:"1",
                    menuName: "练习", //父名
                    menuUrl: "", //父URL
                    menuIcon: "el-icon-time", //Icon
                    children: [
                        {
                            menuId:"1.1",
                            menuName: "TodoList", //子名
                            menuUrl: "/todolist", //子URL
                            menuIcon: "el-icon-time", //Icon
                        }
                    ]
                },
            ], //菜单配置
            isCollapse: false
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>