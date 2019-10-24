<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <titulo 
        :titulo="titulo"
        :numTareas="numTareas"></titulo>
      <nueva-tarea 
        :tareas="tareas"
        :actualizarContador="actualizarContador"
        @incrementarContador="numTareas += $event" ></nueva-tarea>
      <listado-de-tareas :tareas="tareas"></listado-de-tareas>
    </div>
  </div>
</template>

<script>
import Titulo from './TituloComponent.vue';
import NuevaTarea from './NuevaTareaComponent.vue';
import ListadoDeTareas from './ListaTareaComponent.vue';
export default {
  components: {
    Titulo,
    NuevaTarea,
    ListadoDeTareas
  },
  data() {
    return {
      titulo: "Mi listado de Tareas",
      numTareas: 3,
      tareas: [
          {
              texto: 'Aprender Vue.js',
              terminada: false
          },
          {
              texto: 'Aprender Angular 2',
              terminada: false
          },
          {
              texto: 'Aprender Ionic 2',
              terminada: false
          }
      ],
    };
  },
  methods: {
    actualizarContador(){
      this.numTareas++;
    }
  }
};
</script>

<style lang="scss">
</style>
