import Vue from 'vue'
import App from './App.vue'

Vue.directive('decorar', {
  bind(el, binding, vnode) {
    el.style.fontFamily = binding.value.familia;
    el.style.color = binding.value.color;
    console.log(binding);
    if (binding.arg == 'grande') {
      el.style.fontSize = '25px';
    };
    if (binding.arg == 'pequeno') {
      el.style.fontSize = '10px';
    };
    if (binding.modifiers['negrita']) {
      el.style.fontWeight = 'bold';
    };
    if (binding.modifiers['italico']) {
      el.style.fontStyle = 'italic';
    };
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
