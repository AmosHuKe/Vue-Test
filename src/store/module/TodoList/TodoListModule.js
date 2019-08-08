
//TodoList数据
const state = {
    /**
     * 具体Todolist数据
    [{
        id:0,
        todoText: _this.inputText,
        todoTime: dateTime,
        showDel: false, //确定删除是否显示
    }]
     */
    dataList: [],
    dataListCount: 0, //计数
        
}
const mutations = {
    set_DataList(state,dataList) {
        //赋值
        state.dataList.push(dataList);
        state.dataListCount++;
    },
    // set_Updatedata(state,dataListArray){
    //     //修改内容
    //     state.dataListArray[dataListIndex].splice('todoText',dataListArray[dataListValue])
    // }

} 


const actions = {
    setDataList ({commit},dataList) {
        //赋值
        commit("set_DataList", dataList);
    },
    // setUpdatedata ({commit},dataListArray) {
    //     //修改内容
    //     console.log(dataListArray)
    //     commit("set_Updatedata", dataListArray);
    // }
}
const getters = {
    getDataList(state){
        //取值
        return state.dataList;
    },
    getDataListCount(state){
        //取值
        return state.dataListCount;
    }
}

//暴露出去
export default {
    state,
    mutations,
    actions,
    getters
}