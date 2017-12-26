import Vue from 'vue'
import App from './App.vue'

//GLOBAL FILTER
Vue.filter('to-lowercase', function(value) {
    return value.toLowerCase();
});

Vue.filter('print-length', function(value) {
  return value + " (" + value.length + ")";
});

Vue.mixin({
  created(){
    console.log("Global Mixin – Created")
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
