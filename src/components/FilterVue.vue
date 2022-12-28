<template>
    <div>
        <h1>Filter in Vue js</h1>
        <p> {{ name | UCase }}</p>
        <p>{{ probability | Percentage }}</p>
    </div>
</template>

<script>
export default {
    name: 'FilterVue',
    data() {
        return {
            name: 'Harsh',
            probability: 0.83,
        }
    }
}
</script>