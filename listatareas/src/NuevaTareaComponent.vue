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
export default {
    data(){
        return {
            nuevaTarea: ''
        }
    },
    props: ['tareas'],
    methods: {
        addTask(){
            //trim elimina los espacios
            var texto = this.nuevaTarea.trim();
            if (texto) {
                this.tareas.push({
                    texto: texto,
                    terminada: false
                })
            }
            //reinicio el atributo
            this.nuevaTarea = '';
        }
    }
}
</script>