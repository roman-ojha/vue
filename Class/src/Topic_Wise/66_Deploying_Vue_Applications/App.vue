<template>
  <!-- 
  -> For deploying Vue application we will use GitHub and netlify
 -->
  <h2>Increment value Using Options API mixins</h2>
  <ClickCounterO />
  <HoverCounterO />
  <h2>Increment Value Using Composition API mixins</h2>
  <ClickCounterC />
  <HoverCounterC />
</template>

<script>
import ClickCounterO from "./components/ClickCounterO.vue";
import HoverCounterO from "./components/HoverCounterO.vue";
import ClickCounterC from "./components/ClickCounterC.vue";
import HoverCounterC from "./components/HoverCounterC.vue";
export default {
  name: "App",
  setup() {},
  components: {
    ClickCounterO,
    HoverCounterO,
    ClickCounterC,
    HoverCounterC,
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
