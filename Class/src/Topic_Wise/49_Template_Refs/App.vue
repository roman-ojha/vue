<template>
  <!-- 
  -> refs make is possible to access dom nodes directly within vue
 -->
  <!-- Example for tutorial: if we have a login form on page load  we want username input field to be focused -->
  <TemplateRefVue />
</template>

<script>
import TemplateRefVue from "./components/TemplateRef.vue";
export default {
  name: "App",
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
