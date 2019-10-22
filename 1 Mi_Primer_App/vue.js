//make a instace of vue class
var app = new Vue({
    //componente asociado en el dom
    el: '#app',
    //propiedades del componente
    data: {
        mensaje: 'Aprendiendo vue',
        src: 'http://placehold.it/500'
    },
    //methods of this component
    methods: {
        mostrarMensaje: function () {
            /**
             * las propiedades del 
             * componente deben ser
             * llamadas con this.valor
             */
            return this.mensaje;
        }
    }
})