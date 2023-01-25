<template>
    <div>
        <h1 class="vueStyle">Class and Style</h1>
        <h1 v-bind:style="{ color: colorName }"> Style Bindings</h1>
        <h1 v-bind:class="{ display: show }"> Class with Object</h1>
        <h1 v-bind:class="[show ? 'display' : '', 'vueStyle']"> Class with Array</h1>
    </div>
</template>

<script>
import sizeMixin from './sizeMixin'

/**
 * The Class and Style usage examples in Vue
 * @displayName Class Styles
 */
export default {
    name: "ClassAndStyle",
    mixins: [sizeMixin],
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

<docs lang="md">
This Class component is amazing, use it responsibly.

## Examples

Example 1:

```vue
<template>
<div class="wrapper">
<ClassAndStyle />
</div>
</template>

<script>
import ClassAndStyle from './ClassAndStyle.vue';

export default {
components: {
    ClassAndStyle
},
}
</script>
```
<ClassAndStyle />
```

Example 2:

```vue
<HomeVue data="Hey I am harsh" msg="How may I help you"/>
```

</docs>
