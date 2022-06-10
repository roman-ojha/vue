<template>
  <PersonVue />
  <!-- In this tutorial we will learn how to send custom Event from child component to the parent component we will send event from 'PersonGreeting.veu' to 'Person.vue' -->
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
