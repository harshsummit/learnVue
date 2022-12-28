<template>
    <div>
        <h1>Data Binding</h1>
        <p> {{ message }}</p>
        <input type="text" v-model="message" />
    </div>
</template>

<script>
export default {
    name: 'DataBinding',
    data() {
        return {
            message: "Hi"
        }
    }
}
</script>