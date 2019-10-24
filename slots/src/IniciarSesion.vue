<template>
  <div class="container">
    <div class="jumbotron">
      <LoginForm>
        <div slot="titulo">
          <h3>Iniciar Sesion</h3>
        </div>
        <div slot="elementos">
          <div class="form-group">
            <label for="correo">Correo Electronico</label>
            <input
              type="email"
              name
              class="form-control"
              id="correo"
              placeholder="Escribe tu correo electronico"
            />
          </div>
          <div class="form-group">
            <label for="clave">Contraseña</label>
            <input
              type="password"
              name
              class="form-control"
              id="clave"
              placeholder="Escribe tu Contraseña"
            />
          </div>
        </div>
        <div slot="boton">
          <button class="btn btn-primary">Iniciar sesión</button>
        </div>
      </LoginForm>
    </div>
  </div>
</template>

<script>
import MostrarFormulario from "./mostrarFormulario.vue";
export default {
  components: {
    //Alias: ImportName
    LoginForm: MostrarFormulario
  },
  data() {
    return {};
  },
  destroyed() {
    console.log("El componente fue Destruido");
  },
  //ganchos para componentes dinamicos
  activated() {
    console.log("El componente fue activado");
  },
  deactivated() {
    console.log("El componente fue desactivado");
  }
};
</script>

<style lang="scss" scoped>
</style>
