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
                <a-layout-footer style="textAlign: center">
                    ©2018 AmosHuKe
                </a-layout-footer>
            </a-layout>
        </a-layout>
    </div>
</template>

<script>
import MainHeader from '@/components/Frame/Header/MainHeader.vue' //顶部
import MainAside from '@/components/Frame/Aside/MainAside.vue' //侧边栏

export default {
    name: 'MainIndex',
    components: {
        MainHeader, //顶部
        MainAside, //侧边
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
