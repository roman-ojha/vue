<template>
  <ComputedVue />
</template>

<script>
import ComputedVue from "./components/Computed.vue";
export default {
  name: "App",
  components: {
    ComputedVue,
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
