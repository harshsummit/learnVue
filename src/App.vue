<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1> {{ headText }}</h1>
    <hr v-bind:style="{ marginBottom: '80px' }" />
    <BootstrapVue />
    <hr v-bind:style="{ marginBottom: '80px' }" />
    <FetchData />
    <hr v-bind:style="{ marginBottom: '80px' }" />
    <FilterVue />
    <hr v-bind:style="{ marginBottom: '80px' }" />
    <FormValidation />
    <hr v-bind:style="{ marginBottom: '80px' }" />
    <FormCheckboxRadio />
    <hr v-bind:style="{ marginBottom: '80px' }" />
    <FormLogin />
    <hr v-bind:style="{ marginTop: '80px' }" />
    <LifeCycle />
    <PassingPropsToParent v-on:updateTitle="updateHeading($event)" />
    <DataBinding />
    <ClassAndStyle />
    <TemplateVue />
    <ForLoop />
    <ConditionalRendering />
    <HomeVue data="Harsh is here" msg="I am at Internship" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import BootstrapVue from './components/BootstrapVue.vue';
import ClassAndStyle from './components/ClassAndStyle.vue';
import ConditionalRendering from './components/ConditionalRendering.vue';
import DataBinding from './components/DataBinding.vue';
import FetchData from './components/FetchData.vue';
import FilterVue from './components/FilterVue.vue';
import ForLoop from './components/ForLoop.vue';
import FormCheckboxRadio from './components/FormCheckboxRadio.vue';
import FormLogin from './components/FormLogin.vue';
import FormValidation from './components/FormValidation.vue';
import HomeVue from './components/HomeVue.vue';
import LifeCycle from './components/LifeCycle.vue';
import PassingPropsToParent from './components/PassingPropsToParent.vue';
import TemplateVue from './components/TemplateVue.vue';
export default {
  name: 'App',
  components: {
    // HelloWorld,
    HomeVue,
    ConditionalRendering,
    ForLoop,
    TemplateVue,
    ClassAndStyle,
    DataBinding,
    PassingPropsToParent,
    LifeCycle,
    FormLogin,
    FormCheckboxRadio,
    FormValidation,
    FilterVue,
    FetchData,
    BootstrapVue
  },
  data() {
    return {
      headText: "Hello Everyone"
    }
  },
  methods: {
    updateHeading(heading) {
      this.headText = heading
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
