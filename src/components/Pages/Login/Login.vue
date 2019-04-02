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
                // username: 'admin',
                // password:  'admin1',
                // grant_type: 'password',
                // client_id: 'client_2',
                // client_secret: 'secret',
                access_token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiKiJdLCJ1c2VyX25hbWUiOiJhZG1pbiIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJleHAiOjE1NTQxOTcyNDMsImF1dGhvcml0aWVzIjpbIlJPTEVfQURNSU4iXSwianRpIjoiNGU1ODgwYjAtZmUwNS00MzQwLWI3NWMtYTI0MjJhNWNlM2Q4IiwiY2xpZW50X2lkIjoiY2xpZW50XzIifQ.Rqe9n1HgoT1OOVYdmkxpqvP0sbATYXB7aPlVTfPAcYI"
            };
            this.$fetch("/users/list",params)
                .then((response)=>{
                alert(JSON.stringify(response))
            })
        }
    }
    
}
</script>