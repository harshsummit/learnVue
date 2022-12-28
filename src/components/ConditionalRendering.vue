<template>
    <div>
        <h1 v-if="show">Conditonal Rendering 1</h1>
        <h1 v-else>Conditonal Rendering 2</h1>
        <button v-on:click="toggleShow"> Toggle</button>
    </div>
</template>

<script>
export default {
    name: 'ConditionalRendering',
    props: {
    },
    data() {
        return {
            show: false
        }
    },
    methods: {
        toggleShow() {
            this.show = !this.show
        }
    }
}
</script>