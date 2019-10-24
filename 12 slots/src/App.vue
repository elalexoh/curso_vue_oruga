<template>
  <div class="container">
    <div class="jumbotron">
      <!-- componentes dinamicos -->
      <keep-alive>
        <component :is="componenteSeleccionado"></component>
      </keep-alive>
      <button
        class="btn btn-primary"
        @click="componenteSeleccionado = 'IniciarSesion'"
      >Iniciar Sesión</button>
      <button class="btn btn-primary" @click="componenteSeleccionado = 'CambiarClave'">Cambiar Clave</button>
    </div>
  </div>
</template>

<script>
import MostrarFormulario from "./mostrarFormulario.vue";
import CambiarClave from "./CambiarClave.vue";
import IniciarSesion from "./IniciarSesion.vue";
export default {
  components: {
    //Alias: ImportName
    LoginForm: MostrarFormulario,
    CambiarClave: CambiarClave,
    IniciarSesion: IniciarSesion
  },
  data() {
    return {
      componenteSeleccionado: "IniciarSesion"
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
