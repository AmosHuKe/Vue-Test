<template>
    <div id="RecruitList">
        <p>招聘 {{ nt }}</p>
        <div class="container-fluid page-body-wrapper">
            <div class="content-wrapper">

                <!-- 搜索 -->
                <div class="row search_main">
                    <div class="col-12 grid-margin">

                        <div class="form-group">
                            <!-- 搜索框-->
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="input-group search_input">
                                        <input type="text" id="rec_ss" class="form-control form-control-lg"
                                            placeholder="职位 或 地址 或 薪资">
                                        <div class="input-group-append">
                                            <button class="btn btn-sm btn-gradient-dark rec_ok" type="button"><i
                                                    class="p-2 mdi mdi-magnify"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <!--  描述 -->
                                <div class="col-md-6">
                                        <span class="d-flex align-items-center purchase-popup search_text">
                                            <p class="text-dark">主播招募！期待你的加入，我们将给你最优质的平台！</p>
                                            <i class="Icon-md mdi mdi mdi-bell-ring text-primary"></i>
                                        </span>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <!-- 搜索end -->

                <div class="recruit_zp">
                    <!-- 招聘内容模块 -->
                    <!--<div class="row layui-anim layui-anim-fadein" id="rec">
                        <div class="col-12 grid-margin recruit_mod">
                            <a href="recruit_data.html">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title">
                                            <i class="text-primary mdi mdi-account-box"></i>
                                            &lt;!&ndash; 职位名 &ndash;&gt;
                                            游戏主播
                                        </h4>
                                        <div class="table-responsive">
                                            <table class="table">
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        &lt;!&ndash; 薪资 &ndash;&gt;
                                                        ￥10000 - 20000
                                                    </td>
                                                    <td>
                                                        <i class="text-primary mdi mdi-map-marker"></i>
                                                        &lt;!&ndash; 工作地址 &ndash;&gt;
                                                        重庆市渝北区
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>-->
                    <!-- 招聘内容模块end -->
                    <!-- 招聘内容模块 -->
                    <div class="row layui-anim layui-anim-fadein" id="rec">
                        <div class="col-12 grid-margin recruit_mod">
                            <a href="recruit_data.html">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title">
                                            <i class="text-primary mdi mdi-account-box"></i>
                                            <!-- 职位名 -->
                                            游戏主播
                                        </h4>
                                        <div class="table-responsive">
                                            <table class="table">
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <!-- 薪资 -->
                                                        ￥10000 - 20000
                                                    </td>
                                                    <td>
                                                        <i class="text-primary mdi mdi-map-marker"></i>
                                                        <!-- 工作地址 -->
                                                        重庆市渝北区
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <!-- 招聘内容模块end -->
                    
                </div>
                <!-- 下拉加载提示 -->
                <div id="rec_load" style="text-align: center; width: 100%; height: 48px; font-size: 24px;"></div>


            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RecruitList',
    data() {
        return {
            nt: "",
        }
    },
    created(){
        this.getRecruit()
    },
    methods: {
        getRecruit() {
            //
            this.$router.push({path:"/main/recruit?name="+this.$store.getters.getUserData.userAccount})
            this.nt = this.$route.query.name
        }
    }

}
</script>

<style scoped>
    @import url("./css/RecruitList.css");
</style>
