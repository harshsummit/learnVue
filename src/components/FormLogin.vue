<template>
    <div>
        <input type="text" v-model="loginForm.username" placeholder="Enter Username" /><br /> <br />
        <input type="password" v-model="loginForm.password" placeholder="Enter Password" /><br /> <br />
        <button v-on:click="getLogin"> Login </button>
    </div>
</template>

<script>
export default {
    name: 'FormLogin',
    data() {
        return {
            loginForm: {
                username: null,
                password: null,
            }
        }
    },
    methods: {
        getLogin() {
            console.log('getLogin has been called', this.loginForm);
        }
    }
}
</script>