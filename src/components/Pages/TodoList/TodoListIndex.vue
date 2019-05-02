<template>
    <div id="TodoListIndex">
        <a-row type="flex" justify="center">
            <a-col :xs="24" :sm="20" :md="16" :lg="12">
                <h1>TodoList</h1>
                <TodoList></TodoList>
            </a-col>
        </a-row>
    </div>
</template>

<script>
import TodoList from '@/components/Pages/TodoList/TodoList.vue'

export default {
    name: 'TodoListIndex',
    components: {
        TodoList //TodoList组件  
    },
    data () {
        return {
            
        }
    },
    
}
</script>