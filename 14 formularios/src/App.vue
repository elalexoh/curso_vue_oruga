<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-6">
        <h1>Formularios</h1>
        <form action>
          <div class="form-group">
            <label for="nombre">Nombre</label>
            <input
              type="text"
              name="nombre"
              id
              class="form-control"
              placeholder="Nombre"
              v-model.trim="usuario.nombre"
            />
          </div>
          <div class="form-group">
            <label for="correo">Correo Electronico</label>
            <input
              type="email"
              name="correo"
              id
              class="form-control"
              placeholder="Correo Electronico"
              v-model.lazy="usuario.correo"
            />
          </div>
          <div class="form-group">
            <label for="clave">Contraseña</label>
            <input
              type="password"
              name="clave"
              id
              class="form-control"
              placeholder="Contraseña"
              v-model="usuario.clave"
            />
          </div>
          <div class="form-group">
            <label for="edad">Edad</label>
            <input
              type="text"
              name="edad"
              id
              class="form-control"
              placeholder="Edad"
              v-model.number="usuario.edad"
            />
          </div>
          <div class="form-group">
            <label for="pais">Pais</label>
            <select class="form-control" v-model="usuario.pais">
              <option v-for="pais in paises">{{pais}}</option>
            </select>
          </div>
          <div class="form-group">
            <label for="mensaje">Mensaje</label>
            <textarea class="form-control" rows="3" name="mensaje" v-model="usuario.mensaje"></textarea>
          </div>
          <fieldset class="form-group">
            <legend>Genero</legend>
            <div class="form-check">
              <div class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="optionRadios"
                  value="hombre"
                  checked
                  v-model="usuario.genero"
                />
                Hombre
              </div>
            </div>
            <div class="form-check">
              <div class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="optionRadios"
                  value="mujer"
                  v-model="usuario.genero"
                />
                Mujer
              </div>
            </div>
          </fieldset>
          <div class="form-check">
            <label class="form-check-label">
              <input
                type="checkbox"
                class="form-check-input"
                v-model="usuario.condiciones"
                value="acepto"
              />
              Acepto las condiciones
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input
                type="checkbox"
                class="form-check-input"
                v-model="usuario.condiciones"
                value="newslatter"
              />
              Acepto la Newslatter
            </label>
          </div>
          <button type="submit" class="btn btn-primary" @click.prevent="enviarFormulario()">Enviar</button>
        </form>
      </div>
      <div class="resultados col-6" v-if="mostrar">
        <h1>Resultados:</h1>
        <p>
          <strong>Nombre:</strong>
          {{usuario.nombre}} - {{usuario.nombre.length}}
        </p>
        <p>
          <strong>Correo Electronico:</strong>
          {{usuario.correo}}
        </p>
        <p>
          <strong>Contraseña:</strong>
          {{usuario.clave}}
        </p>
        <p>
          <strong>Edad:</strong>
          {{usuario.edad}} - {{typeof usuario.edad}}
        </p>
        <p>
          <strong>Pais:</strong>
          {{usuario.pais}}
        </p>
        <p class="mensaje">
          <strong>Mensaje:</strong>
          {{usuario.mensaje}}
        </p>
        <p>
          <strong>Genero:</strong>
          {{usuario.genero}}
        </p>
        <p>
          <strong>Condiciones:</strong>
          {{usuario.condiciones}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: {
        nombre: "Frederick",
        correo: "deeply@deeply.com",
        clave: "miclave",
        edad: 24,
        pais: "Venezuela",
        mensaje: "Este es el mensaje",
        genero: "hombre",
        condiciones: []
      },
      mostrar: false,
      paises: ["Venezuela", "Argentina", "Panama"]
    };
  },
  methods: {
    enviarFormulario() {
      this.mostrar = true;
      console.log("Hiciste click en el boton");
    }
  }
};
</script>

<style lang="scss">
.mensaje {
  white-space: pre;
}
</style>
