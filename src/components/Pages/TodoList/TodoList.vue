<template>
    <div id="TodoList">

        <!-- 输入框 -->
        <a-badge :count="dataList.length">
            <a-input size="large" class="todoInput" placeholder="输入内容" v-model="inputText" >
                <a-tooltip slot="suffix" placement="topRight" title="提交内容生成TodoList">
                    <a href="javascript:;"><a-icon type="plus-circle" @click="buttonSubmit()" /></a>
                </a-tooltip>
            </a-input>
        </a-badge>

        <!-- Table框 -->
        <a-table class="list-table" :columns="columns" :dataSource="dataList" size="small" rowKey>
            <span slot="todoTimeTitle"><a-icon type="clock-circle" /> 时间 </span>

            <span slot="todoTextTitle">
                内容 
                <a-tooltip slot="suffix" v-if="oldListIndex!=''" class="redoI" placement="topRight" title="撤回最近一次删除的内容">
                    <a href="javascript:;"><a-icon type="redo" @click="handleReturn()"></a-icon></a>
                </a-tooltip>
            </span>

            <span slot="todoTime" slot-scope="todoTime"><a-tag color="blue">{{todoTime}}</a-tag></span>
            <span slot="action" slot-scope="record">
                <!-- 编辑 -->
                <a-modal
                    :title="record.todoTime"
                    :visible="editVisible === record.id"
                    @ok="handleEdit(record.id)"
                    @cancel="handleEditCancel"
                >
                    <a-input :value="editText" v-model="editText"/>
                </a-modal>
                <a-tag color="blue" @click="showEditModal(record)"> 编辑</a-tag>
                <!-- 确定是否删除 -->
                <a-popconfirm title="确定删除吗？" @confirm="handleDelete(record.id,record)" okText="确定" cancelText="取消">
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
        dataIndex: 'todoText', 
        fixed: 'left',
        slots: { title: 'todoTextTitle' },
        scopedSlots: { customRender: 'todoText' },
    },
    {
        title: '操作',
        fixed: 'right',
        width: 100,
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
            editVisible: false, //是否显示编辑拟态框
            editText:"", //编辑的文字
        }
    },
    methods: {
        showEditModal(data) {
            //显示编辑框
            this.editVisible = data.id
            this.editText=data.todoText //编辑的文字
        },
        handleEditCancel(){
            //隐藏编辑框
            this.editVisible = false
            this.editText="" //编辑的文字
        },
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
                id: this.$store.getters.getDataListCount,
                todoText: _this.inputText,
                todoTime: dateTime,
                showDel: false, //确定删除是否显示
            })

            _this.inputText = "" //清空
        },
        handleEdit(index) {
            //编辑
            console.log(index)
            let reId = this.reForId(index) //获取下标
            this.$set(this.dataList[reId], 'todoText', this.editText)
            this.$message.success('修改成功') //弹出提示
            this.handleEditCancel()
            
        },
        handleDelete(index,row) {
            //删除
            //console.log(index)
            let reId = this.reForId(index) //获取下标
            this.oldList = row //存入需要撤回的数组
            this.oldListIndex = reId //存入需要撤回的坐标
            this.dataList.splice(reId,1) //删除
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
            
        },
        reForId(id){
            //通过id 取得下标
            let res;
            this.dataList.forEach((item,i)=>{
                item.id == id ? res = i : "";
            })
            return res;

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
    .todoInput{
        margin-bottom: 12px;
    }
    .redoI{
        margin-left:4px;
    }
</style>
