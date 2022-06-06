<template>
  <!-- props are custom attribute you can register on a component which allow the component content to be dynamic -->
  <Greet name="Bruce" heroName="Batman" />
  <!-- by passing 'name' like this we will pass props to that component -->
  <Greet name="Clark" heroName="Superman" />
  <Greet name="Diana" heroName="Wonder women" />

  <!-- we can alow also assign dynamic value to props using v-bind directive,i.e: we can bind data property and computed properties on component -->
  <Greet :name="name" :heroName="channel" />
</template>
<script>
import Greet from "./components/Greet.vue";
export default {
  name: "App",
  components: {
    Greet,
  },
  data() {
    return {
      name: "Roman",
      channel: "NaN",
    };
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
