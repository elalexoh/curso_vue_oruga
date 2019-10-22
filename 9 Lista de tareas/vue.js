var data = {
    nuevaTarea: '',
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
    ]
}
Vue.component('titulo', {
    template: '<h2> {{titulo}} </h2>',
    data: function () {
        return { titulo: '-Lista de tareas-' }
    }
}),
    Vue.component('nueva-tarea', {
        template: `
        <div class="input-group">
            <input type="text" placeholder="Escribe una nueva tarea" class="form-control" v-model="nuevaTarea"
                @keyup.enter="addTask()">
            <div class="input-group-btn">
                <button class="btn btn-primary" v-on:click="addTask()">
                    añadir tarea
                </button>
            </div>
        </div>`,
        data: function () {
            return data;
        },
        methods: {
            addTask: function () {
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
    }),
    Vue.component('lista-de-tareas', {
        template: `
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
        `,
        data: function () {
            return data;
        },
        methods: {
            dropTask: function (index) {
                this.tareas.splice(index, 1);
            }
        }
    })
var app = new Vue({
    el: '#app',
    data: data,
})