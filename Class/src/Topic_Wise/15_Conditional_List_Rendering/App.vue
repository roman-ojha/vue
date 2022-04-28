<template>
  <!-- to conditionally render list we can use: Computed property -->
  <!-- but we will learn about it after so another solution is to use template tab -->
  <!-- NOTE that you can use v-for and v-if directive in the same element tag -->
  <template v-for="name in names" :key="name">
    <!-- render element only if name === Bruce -->
    <h2 v-if="name === 'Bruce'">{{ name }}</h2>
  </template>
</template>
<script>
export default {
  data() {
    return {
      names: ["Bruce", "Clark", "Diana"],
    };
  },
};
</script>

<style></style>
