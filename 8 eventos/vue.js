var app = new Vue({
    el: '#app',
    data: {
        contador: 0,
        x: 0,
        y: 0
    },
    methods: {
        sumarUno: function () {
            this.contador += 1;
        },
        restarUno: function () {
            this.contador -= 1;
        },
        alerta: function (message) {
            alert(message);
        },
        mostrarUbicacion: function (event) {
            /**
             * Si el metodo es llamado por un evento
             * entiendase v-on:evento entonces tengo acceso
             * objeto event (e)
             */
            this.x = event.clientX;
            this.y = event.clientY;
        },
        sumar: function () {
            this.contador++;
        }

    }
})