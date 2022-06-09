<template>
  <DemoOneVue />
  <DemoTwoVue />
</template>

<script>
import DemoOneVue from "./components/DemoOne.vue";
import DemoTwoVue from "./components/DemoTwo.vue";
export default {
  name: "App",
  components: {
    DemoOneVue,
    DemoTwoVue,
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
