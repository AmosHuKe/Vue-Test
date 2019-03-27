<template>
    <div id="MainIndex">
        <el-row type="flex" justify="center">
            <el-col class="text-align" :xs="24" :sm="20" :md="16" :lg="12">
                <h1>TodoList</h1>
                <TodoList></TodoList>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import TodoList from './page/TodoList/TodoList.vue'

export default {
    name: 'MainIndex',
    components: {
        TodoList //TodoList组件
    },
    data () {
        return {

        }
    }
}
</script>

<style scoped>
    .text-align{
        text-align: center;
    }
</style>
