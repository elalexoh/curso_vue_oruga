import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.http.options.root = 'https://tareas-4458e.firebaseio.com';

export var bus = new Vue({
  data: {
    default: 'Default Data'
  },
  methods: {
    actualizarContador(numTareas) {
      this.$emit('actualizarContador', numTareas, this.default);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
