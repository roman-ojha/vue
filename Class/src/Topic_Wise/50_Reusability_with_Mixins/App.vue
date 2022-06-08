<template>
  <ClickCounterVue />
  <HoverCounterVue />
  <!-- here in both 'ClickCountVue' and 'HoverCounterVue' component have the same counter functionality -->
  <!-- rather then writing same functionality code every time we have 'mixins' -->
  <!-- Mixins allow us to share functionality across components -->
  <!-- for that we will create counter.js file in 'mixins/' folder NOTE that this file s javascript file not vue file -->

  <!-- 
    1. we can mixin data property, computed property, methods, watchers and even lifecycle hooks
    2. when we have the same option in mixin as well as in the component by default the component get the higher priority
  -->
</template>

<script>
import ClickCounterVue from "./components/ClickCounter.vue";
import HoverCounterVue from "./components/HoverCounter.vue";
export default {
  name: "App",
  components: {
    ClickCounterVue,
    HoverCounterVue,
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
