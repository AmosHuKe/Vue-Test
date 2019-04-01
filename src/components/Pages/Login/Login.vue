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
        loginDemo() {
            var params = {
                usernam: "233",
                password: "233"
            };
            this.$post("/login.htm",params)
                .then((response)=>{
                alert(JSON.stringify(response))
            })
        }
    }
    
}
</script>