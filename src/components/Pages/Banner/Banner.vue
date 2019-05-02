<template>
    <div id="Banner">
        <!-- 首页相关展示 -->
        
            <!-- 走马灯 -->
            <a-carousel arrows autoplay>
                <div
                    slot="prevArrow"
                    class="custom-slick-arrow"
                    style="left: 10px;zIndex: 1"
                >
                    <a-icon type="left-circle" />
                </div>
                <div
                    slot="nextArrow" 
                    class="custom-slick-arrow"
                    style="right: 10px"
                >
                    <a-icon type="right-circle" />
                </div>

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
    @iconSize: 24px;
    .ant-carousel {
        text-align: center;
        height: @Lheight;
        line-height: @Lheight;
        background: #364d79;
        overflow: hidden;
        .slick-slide{
            h3 {color: #fff;}      
        }
        .custom-slick-arrow {
            width: @iconSize;
            height: @iconSize;
            font-size: @iconSize;
            color: #fff;
            background-color: rgba(31,45,61,.11);
            opacity: 0.3;

            &:hover {opacity: 0.5;}
            &:before {display: none;}
        }

    }
</style>
