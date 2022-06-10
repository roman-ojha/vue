<template>
  <!-- 
    -> for changed of lifeCycle hook in composition API please refer the image provide in this folder
 -->
  <LifeCycleO />
  <LifeCycleC />
</template>

<script>
import LifeCycleO from "./components/LifeCycleO.vue";
import LifeCycleC from "./components/LifeCycleC.vue";
export default {
  name: "App",
  setup() {},
  components: {
    LifeCycleC,
    LifeCycleO,
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
