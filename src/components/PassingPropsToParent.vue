<template>
    <button v-on:click="passTitle"> Click to pass props to parent</button>
</template>

<script>
export default {
    name: 'PassingPropsToParent',
    methods: {
        passTitle() {
            this.$emit('updateTitle', 'I came from a child to Parent');
        }
    }
}
</script>