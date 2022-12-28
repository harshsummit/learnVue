<template>
    <h1> LifeCycle Methods</h1>
</template>

<script>
export default {
    name: 'LifeCycle',
    methods: {

    },
    data() {

    },

    beforeCreate: function () {
        console.warn('beforeCreate')
    },
    created: function () {
        console.warn('created')
    },
    beforeMount: function () {
        console.warn('beforeMount')
    },
    mounted: function () {
        console.warn('mounted')
    },
}
</script>