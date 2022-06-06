<template>
  <h3>AppComponent Username - {{ name }}</h3>
  <!-- NOTE that we can't bind the property that we have pass in 'provide' we have to create data property and then pass that data property on 'provide' and that access that data property on template -->
  <ComponentC />
</template>
<script>
import ComponentC from "./components/ComponentC.vue";
export default {
  name: "App",
  components: {
    ComponentC,
  },
  data() {
    return {
      name: "Roman",
    };
  },

  // provide: {
  //   // to pass data from 'App' component we have provide 'provide'
  //   // here we define the properties that we want child component to consume without having to passed in as a prop
  //   username: "Roman",
  //   // now for this tutorial we will access that data that we provide from 'App' component to 'ComponentF'
  // },

  provide() {
    // to assign data property in 'provide' we have to default 'provide' as a function
    return {
      username: this.name,
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
