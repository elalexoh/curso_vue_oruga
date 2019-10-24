<template>
  <div>
    <h1>{{tituloMayusculas()}}</h1>
    <h2>Tareas que hacer: {{numTareas}}</h2>
  </div>
  
</template>

<script>
import { bus } from './main.js';
export default {
  props: ['titulo'],
  data(){
    return {
      numTareas: 0
    }
  },
  //comunicacion entre hijos, a traves del prop
  //props: ['titulo', 'numTareas'],

  //Validaciones para props
  /*props: {
    titulo: {
      //validaciones para este prop
      type: String,
      default: 'Tareas',
      required: true
    }
  },*/
  methods: {
    tituloMayusculas(){
      return this.titulo.toUpperCase();
    }
  },
  created(){
    bus.$on('actualizarContador', (numTareas, data)=>{      
      console.log(data);
      this.numTareas = numTareas;
    })
  }
};
</script>

<style lang="scss">
</style>
