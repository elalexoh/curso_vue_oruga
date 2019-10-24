<template>
    <div class="input-group">
        <input 
            type="text" 
            placeholder="Escribe una nueva tarea" 
            class="form-control" 
            v-model="nuevaTarea"
            @keyup.enter="addTask()">
        <div class="input-group-btn">
            <button class="btn btn-primary" v-on:click="addTask()">
                añadir tarea
            </button>
        </div>
    </div>
</template>
<script>
import { bus } from './main.js';
export default {
    data(){
        return {
            nuevaTarea: ''
        }
    },
    props: ['tareas', 'actualizarContador'],
    methods: {
        addTask(){
            //trim elimina los espacios
            var texto = this.nuevaTarea.trim();
            if (texto) {
                this.tareas.push({
                    texto: texto,
                    terminada: false
                })
                //comunicando hijos a traves del prop
                //this.actualizarContador();

                //comunicando hijos a traves de emit
                //this.$emit('incrementarContador', 1);

                //comunicando hijos a traves de bus (Service)
                bus.actualizarContador(this.tareas.length);
            }
            //reinicio el atributo
            this.nuevaTarea = '';
        }
    },
    created(){
        bus.actualizarContador(this.tareas.length);
    }
}
</script>