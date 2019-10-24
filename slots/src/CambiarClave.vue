<template>
  <div class="container">
    <div class="jumbotron">
      <LoginForm>
        <div slot="titulo">
          <h3>Cambiar Contraseña</h3>
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
        </div>
        <div slot="boton">
          <button class="btn btn-primary">Cambiar Contraseña</button>
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
  }
};
</script>

<style lang="scss" scoped>
</style>
