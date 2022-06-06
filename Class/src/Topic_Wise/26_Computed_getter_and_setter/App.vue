<template>
  <!-- so far our computed properties are read only that is they provide the different representation already existence data which we can bind to the template -->
  <!-- sometimes you might also need to set value using computed property -->
  <h2>FullName - {{ firstName }} {{ lastName }}</h2>

  <h2>Computed FullName - {{ fullName }}</h2>

  <!-- this button will change the 'fullName' computed property -->
  <button @click="changeFullName">SetFullName</button>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      firstName: "Razz",
      lastName: "Roman",
    };
  },
  methods: {
    changeFullName() {
      // now in this method we are setting computed property value
      this.fullName = "Roman Ojha";
    },
  },
  computed: {
    // here rather we will change 'fullName' as object instead of a function
    fullName: {
      get() {
        // this function will get called whenever we want to read computed property value
        return `${this.firstName} ${this.lastName}`;
      },
      set(value) {
        // this function will get called when you assign a new value to the computed property
        // set function will take the argument that we set
        const names = value.split(" ");
        this.firstName = names[0];
        this.lastName = names[1];
      },
    },
  },
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
