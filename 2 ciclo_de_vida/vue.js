var app = new Vue({
    el: '#app',
    data: {
        mensaje: 'Este es el mensaje'
    },
    beforeCreate: function () {
        console.log('Llamando beforeCreate');
    },
    created: function () {
        console.log('llamando Created');
    },
    beforeMount: function () {
        console.log('llamando beforeMount');
    },
    mounted: function () {
        console.log('llamando mounted');
    },
    beforeUpdate: function () {
        console.log('llamando beforeUpdate');
    },
    updated: function () {
        console.log('llamando updated');
    },
    beforeDestroy: function () {
        console.log('llamando beforeDestroy');
    },
    destroyed: function () {
        console.log('llamando destroyed');
    },
    methods: {
        destruir: function () {
            // $<- metodo reservado
            this.$destroy();
        }
    }
})