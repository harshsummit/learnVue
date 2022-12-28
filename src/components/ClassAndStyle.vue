<template>
    <div>
        <h1 class="vueStyle">Class and Style</h1>
        <h1 v-bind:style="{ color: colorName }"> Style Bindings</h1>
        <h1 v-bind:class="{ display: show }"> Class with Object</h1>
        <h1 v-bind:class="[show ? 'display' : '', 'vueStyle']"> Class with Array</h1>
    </div>
</template>

<script>
export default {
    name: "ClassAndStyle",
    data() {
        return {
            colorName: 'skyblue',
            show: true,
        }
    }
}
</script>

<style scoped>
.vueStyle {
    color: orange;
}

.display {
    background-color: aliceblue;
    padding: 3px;
}
</style>