<template>
  <!-- The template bloc is responsible for the markup and the script bloc is responsible for the logic of the UI -->
  <!-- Working with .Vue file is wiring up the logic to the markup -->
  <!-- That is, connecting data present in the script bloc to the HTML present in the template block -->
  <!-- Declarative programming approach -->
  <!-- Let Vue know how you want to bind you data to the HTL and Vue will take care of the rest -->
  <h1>Hello world</h1>
</template>

<script>
// inside the script bloc the data and the logic is maintain
export default {
  data() {
    //   here data is the function which return and object
    // the object represent the data that can be use by the template bloc
    return {
      name: "Roman",
    };
  },
};
</script>

<style></style>
