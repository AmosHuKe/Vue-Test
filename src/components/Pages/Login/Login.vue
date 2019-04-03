<template>
    <div id="Login">
        <h2 @click="loginDemo()">{{ titleT }}</h2>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data () {
        return {
            titleT: '登陆',
        }
    },
    methods: {
        //登陆测试
        loginDemo() {
            var params = {
                username: 'admin',
                password:  'admin',
                grant_type: 'password',
                // client_id: 'client_2',
                // client_secret: 'secret',
                //access_token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiKiJdLCJ1c2VyX25hbWUiOiJhZG1pbiIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJleHAiOjE1NTQxOTkzNjEsImF1dGhvcml0aWVzIjpbIlJPTEVfQURNSU4iXSwianRpIjoiZDgwZjYxMzMtYWUzZS00N2M4LTk3ZGYtYjhlMTVmOTc5ODYyIiwiY2xpZW50X2lkIjoiY2xpZW50XzIifQ.IfF9WsfPArWN3AbibV9a1sF3cTKDvacOauKaA5ceieU"
            };
            this.$post("/oauth/token",params)
                .then((response)=>{
                alert(JSON.stringify(response))
            })
        }
    }
    
}
</script>