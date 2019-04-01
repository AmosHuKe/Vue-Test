<template>
    <div id="Banner">
        <!-- 首页相关展示 -->
        <el-row type="flex" justify="center">
            <el-col class="text-align" :xs="24" :sm="24" :md="24" :lg="24">
                <!-- 走马灯 -->
                <el-carousel :height="carouselHeightL" :interval="5000" arrow="click">
                    <el-carousel-item v-for="item in 4" :key="item">
                    <h3>😄 {{ msg }} {{ item }} </h3>
                    </el-carousel-item>
                </el-carousel>
                
            </el-col>
        </el-row>
    </div>
</template>

<script>

export default {
    name: 'Banner',
    data () {
        return {
            msg: 'Hello~',
            carouselHeightL: '500px', //走马灯高度
        }
    }
}
</script>

<style scoped>
    .text-align{
        text-align: center;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 500px;
        margin: 0;
    }
    
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>
