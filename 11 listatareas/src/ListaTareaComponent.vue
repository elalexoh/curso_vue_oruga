<template>
  <ul class="list-group">
    <li
      v-bind:class=" {terminada: tarea.terminada} "
      class="list-group-item d-flex justify-content-around align-items-center"
      v-for="(tarea, index) in tareas"
      :key="index"
    >
      {{tarea.texto}}
      <span class="ml-auto">
        <button v-on:click="estado(index)" type="button" class="btn btn-success btn-xs">
          <i class="fas fa-check"></i>
        </button>
        <button v-on:click="dropTask(index)" type="button" class="btn btn-danger btn-xs">
          <i class="fas fa-times"></i>
        </button>
      </span>
    </li>
  </ul>
</template>
<script>
export default {
  props: ["tareas"],
  methods: {
    estado(index) {
      let terminada = (this.tareas[index].terminada = !this.tareas[index]
        .terminada);
      let id = this.tareas[index].id;

      this.$http
        .patch("tareas/" + id + ".json", {
          terminada: terminada
        })
        .then(respuesta => {
          console.log(respuesta);
        });
    },
    dropTask(index) {
      let id = this.tareas[index].id;
      this.tareas.splice(index, 1);
      this.$http.delete("tareas/" + id + ".json").then(respuesta => {
        console.log(respuesta);
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.terminada {
  color: gray;
  text-decoration: line-throught;
}
</style>