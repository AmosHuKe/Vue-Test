<template>
    <div id="MainAside">
        <!-- 侧边栏 -->
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <h3>{{ mainTitle }}</h3>
            <AsideMenu :menuList="this.urlList"></AsideMenu>
            
        </el-menu>
    </div>
</template>

<script>
import AsideMenu from '@/components/Frame/Aside/AsideMenu.vue'; //引进菜单模板

export default {
    name: 'MainAside',
    components: {
        AsideMenu
    },
    data() {
        return {
            mainTitle: "Vue-Test", //后台标题
            urlList: this.$store.getters.getUrlList, //菜单配置
            isCollapse: false //是否收缩 
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