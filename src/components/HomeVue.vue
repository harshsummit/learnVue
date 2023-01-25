<template>
    <div>
        <h1>Hello from Home component</h1>
        <h1>{{ data }}</h1>
        <h2>{{ msg }}</h2>
        <button v-on:mouseover="hello('test')">Click Here</button>
    </div>
</template>

<script>
/**
 * write a component's description
 */
/**
 * This is a description about the Home Component
 */
export default {
    name: 'HomeVue',
    props: {
        /**A
         * Data passed into Home component
         */
        data: String,
        /**
         * Message passed into Home Component
         */
        msg: String,
    },
    methods: {

        /**
         * @description
         * @param {any} item
         */
        hello(item) {
            console.log(`Button ${item} was clicked`)
        }
    },
    computed: {
        /**
         * @description
         * @returns {any}
         */
        userID2() {
            console.log(this.$route)
            return this.$route;
        }
    }

}
</script>

<docs lang="md">
This Home component is amazing, use it responsibly.

## Examples

Example 1:

```vue
<HomeVue data="Harsh is here" msg="I am at Internship" />
```
</docs>
