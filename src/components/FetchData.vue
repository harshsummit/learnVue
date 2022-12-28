<template>
    <div>
        <h1>Fetch Data from an API</h1>
    </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios)

export default {
    name: 'FetchData',
    mounted() {
        Vue.axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
            .then((response) => {
                console.warn(response.data)
            })
    }
}
</script>