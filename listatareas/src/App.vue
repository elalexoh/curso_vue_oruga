<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <titulo :titulo="titulo"></titulo>
      <nueva-tarea :tareas="tareas"></nueva-tarea>
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
  }
};
</script>

<style lang="scss">
</style>
