<template>
  <TemplateRefVue />
</template>

<script>
import TemplateRefVue from "./components/TemplateRef.vue";
export default {
  name: "App",
  setup() {},
  components: {
    TemplateRefVue,
  },
  data() {
    return {};
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
