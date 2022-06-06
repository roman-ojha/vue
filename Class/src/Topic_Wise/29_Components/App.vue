<template>
  <h1></h1>
  <!-- to include custom component we have to specify the component as custom html tag in template block-->
  <Greet />
</template>
<script>
import Greet from "./components/Greet.vue";
export default {
  name: "App",
  // for this component to get recognize the custom component we have to specify the property called 'components'
  components: {
    // to recognize custom component we have to include the component here
    // where it take:
    // key: value
    Greet: Greet,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  watch: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
