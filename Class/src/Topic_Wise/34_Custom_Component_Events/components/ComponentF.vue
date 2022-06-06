<template>
  <h2>Component F Username - {{ username }}</h2>
  <!-- now here we can access the data that had been pass from parent component using mustache syntax-->
</template>

<script>
export default {
  name: "ComponentF",
  // now here to access that data that parent component had pass we have to specify inject
  inject: ["username"],
};
</script>

<style scoped></style>
