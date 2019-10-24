<template>
  <div class="container">
    <div class="jumbotron">
      <span
        v-decorar:grande.italico.negrita="{
          familia: 'times new roman',
          color: 'tomato'
          }"
      >Directivas Personalizadas Globales</span>
      <hr />
      <span
        v-decorar:grande.negrita="{
          familia: 'serif',
          color: 'teal'
          }"
      >Directivas Personalizadas Locales</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      argumento: "pequeno"
    };
  },
  directives: {
    "decorar-local": {
      bind(el, binding, vnode) {
        el.style.fontFamily = binding.value.familia;
        el.style.color = binding.value.color;
        console.log(binding);
        if (binding.arg == "grande") {
          el.style.fontSize = "25px";
        }
        if (binding.arg == "pequeno") {
          el.style.fontSize = "10px";
        }
        if (binding.modifiers["negrita"]) {
          el.style.fontWeight = "bold";
        }
        if (binding.modifiers["italico"]) {
          el.style.fontStyle = "italic";
        }
      }
    }
  }
};
</script>

<style lang="scss">
</style>
