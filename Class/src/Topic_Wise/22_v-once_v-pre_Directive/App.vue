<template>
  <h2 v-once>{{ name }}</h2>
  <!-- if we will write 'v-once' on the element that that element only get render one type, it means that if we change the value it would change but would not get reflect on the dom element -->
  <button @click="name = 'Batman'">Change Name</button>

  <h2 v-pre>{{ name }}</h2>
  <!-- so if we use 'v-pre' directive then in that case vue would now compile that element and show as it is in this case the value of the 'h2' element would be '{{ name }}' -->
  <!-- NOTE: if you have a lot of element on dom and do not have any vue directive then you might want to add v-pre directive so vue will ignore that element for compilation and result would be better performance -->
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      name: "Roman",
    };
  },
  methods: {},
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
