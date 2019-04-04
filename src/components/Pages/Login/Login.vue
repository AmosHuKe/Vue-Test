<template>
    <div id="Login">
        <h2 @click="loginDemo()">{{ titleT }}</h2>
    </div>
</template>

<script>
import {
    getToken,
} from '../../../plugins/api/LoginApi/LoginApi.js'; //LoginApi接口

export default {
    name: 'Login',
    data () {
        return {
            titleT: '登陆',
            username: 'admin',
            password:  'admin',
        }
    },
    methods: {
        //登陆测试
        loginDemo() {
            getToken(this.username, this.password)
            .then((response)=>{
                alert(JSON.stringify(response))
            })
                
        }
    }
    
}
</script>