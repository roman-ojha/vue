<template>
  <PersonVue />
</template>

<script>
import PersonVue from "./components/Person.vue";
export default {
  name: "App",
  setup() {},
  components: {
    PersonVue,
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
