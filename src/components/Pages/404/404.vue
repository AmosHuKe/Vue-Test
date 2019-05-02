<template>
    <div id="error">
        <div class="container-scroller">
            <div class="container-fluid page-body-wrapper full-page-wrapper">
            <div class="content-wrapper d-flex align-items-center text-center error-page bg-primary">
                <div class="row flex-grow">
                <div class="col-lg-7 mx-auto text-white">
                    <div class="row align-items-center d-flex flex-row">
                    <div class="col-lg-6 text-lg-right pr-lg-4">
                        <h1 class="display-1 mb-0">404</h1>
                    </div>
                    <div class="col-lg-6 error-page-divider text-lg-left pl-lg-4">
                        <h2>哦豁!</h2>
                        <h3 class="font-weight-light">网页被吃掉啦</h3>
                    </div>
                    </div>
                    <div class="row mt-5">
                    <div class="col-12 text-center mt-xl-2">
                        <router-link to="/login">
                            <a class="text-white font-weight-medium" href="javascript:;">回到首页</a>
                        </router-link>
                    </div>
                    </div>
                    <div class="row mt-5">
                    <div class="col-12 mt-xl-2">
                        <p class="text-white font-weight-medium text-center">
                            <MainFooter></MainFooter>
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <!-- content-wrapper ends -->
            </div>
            <!-- page-body-wrapper ends -->
        </div>
        <!-- container-scroller -->
    </div>
</template>

<script>
import MainFooter from '@/components/Layout/Footer/MainFooter.vue'

export default {
    name: 'error',
    components:{
        MainFooter
    },
    data(){
        return {

        }
    }
}
</script>

<style scoped>
h1, h2, h3, h4{
    color: aliceblue !important;
}
</style>
