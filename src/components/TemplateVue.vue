<template>
    <div>
        <p v-html="header"></p>
        <p> {{ name }}</p>
        <button v-bind:disabled="btnDisabled" v-on:click="hello"> Click Me</button>
    </div>
</template>

<script>
export default {
    name: "TemplateVue",
    data() {
        return {
            name: "Harsh",
            header: "<h1>Template in VUE js</h1>",
            btnDisabled: true
        }
    },
    methods: {
        hello() {
            console.log("Hello from button")
        }
    }
}
</script>