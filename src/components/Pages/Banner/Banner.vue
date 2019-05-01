<template>
    <div id="Banner">
        <!-- 首页相关展示 -->
        
            <!-- 走马灯 -->
            <a-carousel autoplay>
                
                <div v-for="item in 4" :key="item">               
                    <h3>😄 {{ msg }} {{ item }} </h3>  
                </div>
                
            </a-carousel>
        
    </div>
</template>

<script>

export default {
    name: 'Banner',
    data () {
        return {
            msg: 'Hello~',
        }
    }
}
</script>

<style lang="less" scoped>
    @Lheight: 420px;
    .ant-carousel {
        text-align: center;
        height: @Lheight;
        line-height: @Lheight;
        background: #364d79;
        overflow: hidden;
        .slick-slide h3 {
            color: #fff;
        }
    }
</style>
