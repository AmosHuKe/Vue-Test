<template>
    <div id="MainAside">
        <!-- 侧边栏 -->
        <a-layout-sider
            breakpoint="lg"
            collapsedWidth="0"
            @collapse="onCollapse"
            @breakpoint="onBreakpoint"
        >
            <div class="logo" />
            <AsideMenu :menuList="this.urlList"></AsideMenu>
        </a-layout-sider>
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
        onCollapse(collapsed, type) {
            console.log(collapsed, type);
        },
        onBreakpoint(broken) {
            console.log(broken);
        }
    }
}
</script>