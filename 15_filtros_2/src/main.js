import Vue from 'vue'
import App from './App.vue'

//filtros globales 
Vue.filter('suspensivos', function (texto) {
  return texto.substring(0, 10) + '...';
})

new Vue({
  el: '#app',
  render: h => h(App)
})
