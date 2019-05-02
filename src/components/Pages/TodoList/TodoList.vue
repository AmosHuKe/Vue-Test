<template>
    <div id="TodoList">

        <!-- 输入框 -->
        <a-badge :count="dataList.length">
            <a-input size="large" placeholder="输入内容"   v-model="inputText" >
                <a-tooltip slot="suffix" placement="topRight" title="提交内容生成TodoList">
                    <a href="javascript:;"><a-icon type="plus-circle" @click="buttonSubmit()" /></a>
                </a-tooltip>
            </a-input>
        </a-badge>

        <!-- <a-tooltip placement="topLeft" title="撤回最近一次删除的内容">
            <a-button size="large" @click="handleReturn()">撤回</a-button>
        </a-tooltip> -->

        <!-- Table框 -->
        <a-table class="list-table" :columns="columns" :dataSource="dataList" size="small">
            <span slot="todoTimeTitle"><a-icon type="clock-circle" /> 时间</span>
            <span slot="todoTime" slot-scope="todoTime"><a-tag color="blue">{{todoTime}}</a-tag></span>
            <span slot="action">
                <!-- 编辑 -->
                <!-- <a-tag color="blue" @click="handleEdit(record.key, record.col)"> 编辑</a-tag> -->
                <!-- 确定是否删除 -->

                <!-- 删除还有问题 有时间改-->
                <a-popconfirm title="确定删除吗？" @confirm="handleDelete($event)" okText="确定" cancelText="取消">
                     <a-tag color="red" ><a-icon type="delete" /></a-tag>
                </a-popconfirm>
                    
            </span>
        </a-table>

    </div>
</template>

<script>
const columns = [
    { 
      width: 200, 
      dataIndex: 'todoTime', 
      fixed: 'left', 
      slots: { title: 'todoTimeTitle' },
      scopedSlots: { customRender: 'todoTime' },
    },
    { 
        title: '内容', 
        dataIndex: 'todoText', 
        fixed: 'left',
        scopedSlots: { customRender: 'todoText' },
    },
    {
        title: '操作',
        fixed: 'right',
        width: 80,
        scopedSlots: { customRender: 'action' },
    },
];

export default {
    name: 'TodoList',
    data () {
        return {
            columns: columns, //表标题
            inputText: '', //文本框内容
            dataList: this.$store.getters.getDataList, //todolist数据
            oldList:{}, //需要撤回的List
            oldListIndex: '', //需要撤回的List坐标
        }
    },
    methods: {
        buttonSubmit (value) {
            //提交文本
            var _this = this
            let dateTime = _this.Common.getNowTime()//时间
            if(_this.inputText == ""){
                return false
            }
            _this.oldList = "" //清空
            _this.oldListIndex = ""
            //加入数据
            _this.$store.dispatch('setDataList',{
                todoText: _this.inputText,
                todoTime: dateTime,
                showDel: false, //确定删除是否显示
            })

            _this.inputText = "" //清空
        },
        handleEdit(index,row,value) {
            //编辑
            console.log(index,row,value)

            this.$set(this.dataList[index], 'todoText', value)
            this.$message.success('修改成功') //弹出提示
            
        },
        handleDelete(index) {
            //删除
            console.log(index)
            this.oldList = row //存入需要撤回的数组
            this.oldListIndex = index //存入需要撤回的坐标
            this.dataList.splice(index,1) //删除数组
            this.$message.success('删除成功') //弹出提示

        },
        handleReturn() {
            //撤回
            var _this = this
            if(_this.oldListIndex != ""){
                _this.dataList.splice(this.oldListIndex,0,this.oldList) //撤回数组
                _this.oldList = "" //清空
                _this.oldListIndex = ""
                _this.$message.success('撤回成功') //弹出提示
            }else if(_this.oldListIndex == '0'){
                
                _this.dataList.splice(-1,0,this.oldList)//撤回数组
                _this.oldList = "" //清空
                _this.oldListIndex = ""
                _this.$message.success('撤回成功') //弹出提示
            }
            
        }
    }
}
</script>

<style scoped>
    .list-table{
        width: 100%;
        margin-top: 24px;
    }
    .ant-badge{
        position: relative;
        display: block;
    }
</style>
