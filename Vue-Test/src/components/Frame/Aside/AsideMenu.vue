<template>
    <div id="AsideMenu">
        <a-menu 
            theme="dark" 
            mode="inline"
        >
            <template v-for="list in this.menuList" >  <!-- 循环数据 -->
                <template v-if="list.children" >
                    <a-sub-menu :key="list.menuId" ><!-- 判断是否有子菜单 -->
                        <span slot="title">
                            <a-icon :type="list.menuIcon" />
                            <span>{{ list.menuName}}</span>
                        </span>
                        <!-- <AsideMenu :menuList="list.children"></AsideMenu> -->
                        <template v-for="listchildren in list.children">
                            <a-menu-item :key="listchildren.menuId"> <!-- 没有子菜单就只用一次 -->
                                <router-link :to="listchildren.menuUrl" :key="listchildren.menuId"> <!-- 路由 -->
                                    <a-icon :type="listchildren.menuIcon" />
                                    <span>{{ listchildren.menuName}}</span>
                                </router-link>
                            </a-menu-item>
                        </template>      
                    </a-sub-menu>
                </template>
                <template v-else>
                    <a-menu-item :key="list.menuId"> <!-- 没有子菜单就只用一次 -->
                        <router-link :to="list.menuUrl" :key="list.menuId"> <!-- 路由 -->
                            <a-icon :type="list.menuIcon" />
                            <span>{{ list.menuName}}</span>
                        </router-link>
                    </a-menu-item>     
                </template>  
            </template>
        </a-menu>
    </div>
</template>

<script>
export default {
    name: 'AsideMenu',
    props: ['menuList'],
    data() {
        return {
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

<style>

</style>
