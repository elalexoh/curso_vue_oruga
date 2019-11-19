<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <titulo :titulo="titulo" :numTareas="numTareas"></titulo>
      <nueva-tarea
        :tareas="tareas"
        :actualizarContador="actualizarContador"
        @incrementarContador="numTareas += $event"
      ></nueva-tarea>
      <listado-de-tareas :tareas="tareas"></listado-de-tareas>
    </div>
  </div>
</template>

<script>
import Titulo from "./TituloComponent.vue";
import NuevaTarea from "./NuevaTareaComponent.vue";
import ListadoDeTareas from "./ListaTareaComponent.vue";
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
      tareas: []
    };
  },
  methods: {
    actualizarContador() {
      this.numTareas++;
    }
  },
  created() {
    this.$http
      .get("tareas.json")
      .then(respuesta => {
        return respuesta.json();
      })
      .then(respuestaJson => {
        for (let id in respuestaJson) {
          let tarea = {
            id: id,
            texto: respuestaJson[id].texto,
            terminada: respuestaJson[id].terminada
          };
          this.tareas.push(tarea);
        }
      });
  }
};
</script>

<style lang="scss">
</style>
