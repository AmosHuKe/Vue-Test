<template>
    <div id="MainAside">
            <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-time"></i>
                    <span slot="title">我的练习</span>
                </template>
                <el-menu-item-group>
                    <span slot="title">基础练习</span>
                    <el-menu-item index="1-1-1">TodoList</el-menu-item>
                </el-menu-item-group>
                
            </el-submenu>
            
        </el-menu>
    </div>
</template>

<script>
export default {
    name: 'MainAside',
    data() {
        return {
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