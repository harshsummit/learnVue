<template>
    <div>
        <h1>Hello from Home component</h1>
        <h1>{{ data }}</h1>
        <h2>{{ msg }}</h2>
        <button v-on:mouseover="hello('test')">Click Here</button>
    </div>
</template>

<script>
export default {
    name: 'HomeVue',
    props: {
        data: String,
        msg: String,
    },
    methods: {
        hello(item) {
            // alert("Hello function is called");
            console.log(`Button ${item} was clicked`)
        }
    }
}
</script>