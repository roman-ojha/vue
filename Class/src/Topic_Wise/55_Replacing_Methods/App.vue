<template>
  <MethodsVue />
</template>

<script>
import MethodsVue from "./components/Methods.vue";
export default {
  name: "App",
  components: {
    MethodsVue,
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
