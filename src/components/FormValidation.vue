<template>
    <div>
        <p v-if="error.length">
            <b>Please correct the following errors</b>
        <ul>
            <li v-for="e in error" v-bind:key="e.id" v-bind:style="{ color: 'red' }">{{ e }}</li>
        </ul>
        </p>
        <form @submit="login">
            <input type="text" placeholder="Enter Username" v-model="username" /><br /> <br />
            <input type="password" placeholder="Enter Password" v-model="password" /><br /> <br />
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'FormValidation',
    data() {
        return {
            error: [],
            username: null,
            password: null,
        }
    },
    methods: {
        login(e) {
            if (this.username && this.password) {
                console.log("Login Function has been called")
            }
            this.error = [];
            if (!this.username) {
                this.error.push("Enter username!")
            }
            if (!this.password) {
                this.error.push("Enter password!")
            }
            console.warn("errors", this.error)
            e.preventDefault();
        }
    }
}
</script>