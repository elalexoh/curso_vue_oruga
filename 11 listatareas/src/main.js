import Vue from 'vue'
import App from './App.vue'

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
