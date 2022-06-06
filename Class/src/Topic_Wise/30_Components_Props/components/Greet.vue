<template>
  <h2>Hello {{ name }} a.k.a {{ heroName }}</h2>
  <!-- now the props that we have pass from the parent component can be able to access -->
</template>

<script>
export default {
  name: "GreetComponent",
  // we will specify a props on a default export of the greet component
  props: ["name", "heroName"],
  // the prop that this component accept is 'name' component
};
</script>

<style scoped></style>
