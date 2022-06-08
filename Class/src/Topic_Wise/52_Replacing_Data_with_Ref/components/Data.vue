<template>
  <h2>Options - {{ o_firstName }}</h2>
  <h2>Composition - {{ c_firstName }}</h2>
  <h2>Composition - {{ greet }}</h2>
</template>

<script>
import { ref } from "vue";
export default {
  name: "DataVue",
  setup() {
    // 'setup' methods is the entry point for composition API
    // to create the equivalent of the 'o_firstName' data property we use a function from Vue and the function is called 'ref'
    // 'ref' function return the reactive reference to a value
    const c_firstName = ref("Clark");
    //    now here we can create the ref and pass the initial value
    // after that we have to expose this value to the template for that we have to return an object from the setup method and specify the property we want to expose

    // Ref Definition: Ref is a function which return a reactive and mutable object that serves as a reactive reference to the internal value it is holding
    console.log(c_firstName);
    // it means that we can assign a new value to ref like this:
    c_firstName.value = "Roman";

    const greet = `Hello ${c_firstName.value}`;
    // so here to access the value of ref we have to access using '.value'
    return {
      c_firstName,
      greet,
    };
  },
  data() {
    return {
      o_firstName: "Bruce",
    };
  },
};
</script>

<style></style>
