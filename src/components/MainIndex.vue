<template>
    <div id="MainIndex">
        <a-layout id="components-layout-demo-responsive">
            <!-- 侧边栏 -->
            <MainAside ></MainAside>
            <a-layout>
                <!-- 顶部 -->
                <MainHeader></MainHeader>
                 <!-- 主要 -->
                <a-layout-content :style="{ margin: '24px 16px 0' }">
                    <div :style="{ padding: '24px', background: '#fff', minHeight: '800px' }">
                        <router-view></router-view> <!-- 路由 -->
                    </div>
                </a-layout-content>
                <a-layout-footer>
                    <!-- 底部 -->
                    <MainFooter></MainFooter>
                </a-layout-footer>
            </a-layout>
        </a-layout>
    </div>
</template>

<script>
import MainHeader from '@/components/Layout/Header/MainHeader.vue' //顶部
import MainAside from '@/components/Layout/Aside/MainAside.vue' //侧边栏
import MainFooter from '@/components/Layout/Footer/MainFooter' //底部

export default {
    name: 'MainIndex',
    components: {
        MainHeader, //顶部
        MainAside, //侧边
        MainFooter, //底部
    }
}
</script>

<style>

a {
    text-decoration:none !important;
}
a:hover{
    text-decoration:none !important;
}
</style>
