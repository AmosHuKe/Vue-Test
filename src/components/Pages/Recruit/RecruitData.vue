<template>
    <div id="RecruitData">
        <div class="container-fluid page-body-wrapper">
            <div class="content-wrapper">
                <!-- 标题信息 -->
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">

                                    <div class="row">
                                        <div class="col-12">
                                            <a-skeleton :loading="reLoading" active :paragraph="{rows: 0}" >
                                                <!-- 职位名 -->
                                                <span id="rec_jobTitle">
                                                    {{ rData.title }}
                                                </span>
                                                <small class="text-muted" id="rec_requirement">
                                                    <!-- 招聘人数 -->
                                                    {{ rData.requirement }} 人
                                                </small>
                                            </a-skeleton>
                                        </div>

                                    </div>
                                    <h6>
                                        <div class="row">
                                            <div class="col-6 text-danger">
                                                <!-- 薪资 -->
                                                <span id="rec_salary">
                                                    <a-skeleton :loading="reLoading" active :paragraph="{rows: 0}" >
                                                        {{ rData.money | FormatMoney }}
                                                    </a-skeleton>
                                                </span>
                                            </div>
                                            <div class="col-6">
                                                 <!-- <a-icon :type="rData.gender | iconSex" /> 性别icon变换  -->
                                                <!-- 性别  年龄-->
                                                <span id="rec_genderAge">
                                                    <a-skeleton :loading="reLoading" active :paragraph="{rows: 0}" >
                                                        {{ rData.gender }}
                                                    </a-skeleton>
                                                </span>
                                            </div>
                                        </div>
                                    </h6>
                                    <!-- 福利 -->
                                    <h6>
                                        <div class="row">
                                            <div class="col-12">
                                                <!-- 福利Mod-->
                                                <div id="rec_welfare">
                                                    <a-skeleton :loading="reLoading" active :paragraph="{rows: 0}" v-for="welfareList in rWelfare" :key="welfareList" >
                                                        <label class='badge text-white bg-primary'>{{ welfareList }}</label>
                                                    </a-skeleton>
                                                </div>

                                            </div>
                                        </div>
                                    </h6>

                                </h4>


                            </div>
                        </div>
                    </div>
                </div>

                <!-- 工作地址-->
                <div class="row recruit_msg">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">
                                    <a-icon type="environment" theme="twoTone" />
                                    工作地址
                                </h4>
                                <div class="d-flex align-items-center purchase-popup search_text">
                                    <p class="text-dark">
                                        <a-skeleton :loading="reLoading" active :paragraph="{rows: 0}" style="width:240px;">
                                            {{ rData.addr }}
                                        </a-skeleton>
                                    </p>

                                </div>
                                <!-- 联系人信息 -->
                                <div class="d-flex align-items-center purchase-popup search_text" style="margin-top: 10px;">
                                    <div class="row">
                                        <div class="col-4">
                                            <!-- 联系人姓名 -->
                                            <div id="rec_contacts">
                                                <a-skeleton :loading="reLoading" active :paragraph="{rows: 0}" >
                                                    {{ rData.contacts }}
                                                </a-skeleton>
                                            </div>
                                        </div>
                                        <div class="col-8">
                                            <!-- 联系人电话 -->
                                            <div id="rec_contactsPhone">
                                                <a-skeleton :loading="reLoading" active :paragraph="{rows: 0}" >
                                                    {{ rData.contactsPhone }}
                                                </a-skeleton>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div id="rec_contactsEmailTest">
                                               <a-skeleton :loading="reLoading" active :paragraph="{rows: 0}" >
                                                    邮箱
                                                </a-skeleton>
                                            </div>
                                        </div>
                                        <div class="col-8">
                                            <!-- 联系人邮箱 -->
                                            <div id="rec_contactsEmail">
                                                <a-skeleton :loading="reLoading" active :paragraph="{rows: 0}" >
                                                    {{ rData.contactsEmailTest }}
                                                </a-skeleton>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <!-- 职位描述-->
                <div class="row recruit_msg">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">
                                    <a-icon type="eye" theme="twoTone" /> 
                                    职位描述
                                </h4>
                                <div class="msg_text">
                                    <!-- 描述内容 -->
                                    <div id="rec_content">
                                        <a-skeleton :loading="reLoading" active :paragraph="{rows: 4}">
                                            <span v-html="rData.content"></span>
                                        </a-skeleton>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    
    </div>
</template>

<script>
import {
    getRecruitData,
} from '@/plugins/api/RecruitApi/RecruitApi.js'; //RecruitApi接口

export default {
    name: "RecruitData",
    data(){
        return {
            rData: [], //招聘信息
            rWelfare: {}, //福利列表
            reLoading: true, //占位符是否开启
        }
    },
    mounted() {
        this.getData()
    },
    methods:{
        getData(){
            //获取招聘信息数据
            var _this = this
            getRecruitData(_this.$route.params.rid)
            .then((response)=>{
                //获取用户信息成功操作
                console.log(response)       
                _this.rData = response

                _this.rWelfare = response.welfare.split(",")
                console.log( _this.rWelfare)
                _this.reLoading = false
            })
            .catch(err => {
                //失败操作 
                _this.$message.error('获取招聘信息失败#1')
            })
        }
    }
}
</script>

<style>
    @import url("./css/RecruitData.css");
</style>
