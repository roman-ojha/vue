<template>
  <!-- addition of two number -->
  <h2>{{ 2 + 3 + 5 }}</h2>
  <h2>{{ 5 + 10 + 15 }}</h2>
  <!-- not following the DRY principle -->

  <!-- Using Methods -->
  <h2>Add Method - {{ add(10, 12, 13) }}</h2>
  <h2>Multiple method - {{ multiply(baseValue) }}</h2>
</template>
<script>
export default {
  data() {
    return {
      baseMultiplier: 5,
      baseValue: 2,
    };
  },
  methods: {
    // NOTE: not use arrow function for methods
    // to use method vue provide 'methods' property
    add(a, b, c) {
      return a + b + c;
    },
    multiply(num) {
      return num * this.baseMultiplier;
      // because 'baseMultiplier' is a data property we access it using 'this' keyword
    },
  },
};
</script>

<style></style>
