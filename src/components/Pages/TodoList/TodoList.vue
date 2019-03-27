<template>
    <div id="TodoList">
        <!-- 输入框 -->
        <el-input type="text" v-model="inputText">
            <el-tooltip class="item" slot="append" effect="dark" content="提交你的内容生成 TodoList" placement="top-end">
                <el-button type="primary" @click="buttonSubmit()">
                    提交 <el-badge class="mark" :value="dataList.length" />
                </el-button>
            </el-tooltip>
            <el-tooltip class="item" slot="append" effect="dark" content="撤回最近一次删除的内容" placement="top-end">
                <el-button type="primary" @click="handleReturn()">
                    撤回
                </el-button>
            </el-tooltip>
        </el-input>
        <!-- List框 -->
        
        <el-table
            class="list-table"
            :data="dataList">
            <el-table-column
                label="日期"
                width="200px">
                <template slot-scope="dataList">
                    <el-tag size="medium">
                        <i class="el-icon-time"></i>
                        {{ dataList.row.todoTime }}
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column
                label="内容"
                width="auto">
                <template slot-scope="dataList">
                    {{ dataList.row.todoText }}
                </template>
            </el-table-column>
            <el-table-column 
                label="操作"
                width="160px">
                <template slot-scope="dataList">
                    <el-button
                    size="mini"
                    @click="handleEdit(dataList.$index, dataList.row)">编辑</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(dataList.$index, dataList.row)">删除</el-button>
                </template>
            </el-table-column>

        </el-table>
        
        
    </div>
</template>

<script>
export default {
    name: 'TodoList',
    data () {
        return {
            inputText: '', //文本框内容
            dataList:[], //List todoText  todoTime
            oldList:{}, //需要撤回的List
            oldListIndex: '', //需要撤回的List坐标
        }
    },
    methods: {
        buttonSubmit () {
            //提交文本
            var _this = this
            let dateTime = _this.Common.getNowTime()//时间
            if(_this.inputText == ""){
                return false
            }
            _this.oldList = "" //清空
            _this.oldListIndex = ""
            //加入数据
            _this.dataList.push({
                todoText: _this.inputText,
                todoTime: dateTime
            })

            _this.inputText = "" //清空
        },
        handleEdit(index,row) {
            //编辑
            console.log(index,row)
        },
        handleDelete(index,row) {
            //删除
            this.oldList = row //存入需要撤回的数组
            this.oldListIndex = index //存入需要撤回的坐标
            this.dataList.splice(index,1) //删除数组
            this.openVn('删除成功','success') //弹出提示

        },
        handleReturn() {
            //撤回
            var _this = this
            if(_this.oldListIndex != ""){
                _this.dataList.splice(this.oldListIndex,0,this.oldList) //撤回数组
                _this.oldList = "" //清空
                _this.oldListIndex = ""
                _this.openVn('撤回成功','success') //弹出提示
            }else if(_this.oldListIndex == '0'){
                
                _this.dataList.splice(-1,0,this.oldList)//撤回数组
                _this.oldList = "" //清空
                _this.oldListIndex = ""
                _this.openVn('撤回成功','success') //弹出提示
            }
            
        },
        openVn(nr,setType) {
            //提示框
            this.$message({
                type: setType,
                center: true,
                dangerouslyUseHTMLString: true,
                message: nr
            })
        }
    }
}
</script>

<style scoped>
    .list-table{
        width: 100%;
        margin-top: 24px;
    }
</style>
