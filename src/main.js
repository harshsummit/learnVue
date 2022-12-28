import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('UCase', function (val) {
  return val.toUpperCase();
})

Vue.filter('Percentage', function (val) {
  return val * 100;
})

new Vue({
  render: h => h(App),
}).$mount('#app')
