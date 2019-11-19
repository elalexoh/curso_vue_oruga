import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import { rutas } from './rutas.js'

Vue.use(VueRouter);
Vue.use(VueResource);

const enrutador = new VueRouter({
  routes: rutas,
  mode: 'history'
});

new Vue({
  el: '#app',
  router: enrutador,
  render: h => h(App)
})
