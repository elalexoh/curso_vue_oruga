<template>
  <div class="container">
    <div class="jumbotron">
      <span>{{mensaje | mayusculas}}</span>
      <hr />
      <span>{{mensaje | suspensivos}}</span>
      <hr />
      <span>{{mensaje | suspensivos | mayusculas}}</span>
      <hr />
      <span>{{temperatura | aFahrenheit}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mensaje: "Hey deeply, te gusta con vue.js?",
      temperatura: 30
    };
  },
  filters: {
    //filtros locales
    mayusculas(mensaje) {
      return mensaje.toUpperCase();
    },
    aFahrenheit(temperatura) {
      return (9 / 5) * temperatura + 32 + " F";
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
