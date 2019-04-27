<template>
    <div id="MainAside">
        <!-- 侧边栏 -->
        <a-layout-sider
            breakpoint="lg"
            collapsedWidth="0"
            v-model="collapsed"
        >
            <div class="logo" >
                <div v-if="!collapsed">{{ mainTitle }}</div>
                <div v-else>{{ mainTitlemini }}</div>
            </div>
            <!-- 侧边栏组件 -->
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
            mainTitlemini: "Vue", //后台标题mini
            urlList: this.$store.getters.getUrlList, //菜单配置
            collapsed: this.$store.getters.getCollapsed, //是否收缩
        }
    },
    computed: {
        getCollapsed() {
            return this.$store.getters.getCollapsed; //计算改变收缩
        }
    },
    watch: {
        getCollapsed(val) {
            this.collapsed = val; //监听改变赋值收缩
        }
    },
}
</script>

<style lang="less" scoped>
.ant-layout-sider{
    height: 100%;
}
.logo{
    height: 32px;
    background: rgba(255,255,255,.0);
    margin: 16px;
    div{
        font-size: 24px;
        text-Align: center;
        line-height: 32px;
        color: #FFFFFF;
    }
}
</style>
