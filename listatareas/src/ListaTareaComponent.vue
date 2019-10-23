<template>
    <ul class="list-group">
        <li v-bind:class=" {terminada: tarea.terminada} "
            class="list-group-item d-flex justify-content-around align-items-center"
            v-for="(tarea, index) in tareas">
            {{tarea.texto}}
            <span class="ml-auto">
                <button v-on:click="tarea.terminada = !tarea.terminada" type="button"
                    class="btn btn-success btn-xs">
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
    props: ['tareas'],
    methods: {
       dropTask(index) {
            this.tareas.splice(index, 1);
        }
    }
}
</script>
<style lang="scss" scoped>
    .terminada {
        color: gray;
        text-decoration: line-throught;
    }
</style>