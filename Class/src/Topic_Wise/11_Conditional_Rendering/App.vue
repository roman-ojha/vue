<template>
  <!-- this directive accept the javascript expression -->
  <h2 v-if="num === 0">The number is zero</h2>
  <h2 v-else-if="num < 0">The number is Negative</h2>
  <h2 v-else-if="num > 0">The number is Positive</h2>
  <!-- so now if the v-if expression would false then the bellow element will execute -->
  <!-- NOTE that 'v-else' directive need's to be below of 'v-if' directive or 'v-else-if' -->
  <h2 v-else>Not a Number</h2>

  <!-- Display Multiple Element -->
  <!-- We can Wrap with div tag -->
  <div v-if="display">
    <h2>Roman</h2>
    <h2>RazzRoman</h2>
    <h2>Vue</h2>
  </div>
  <!-- But it will render div tag into the dom -->
  <!-- to handle this problem vue provide the template tag which serve as an invisible wrapper -->
  <template v-if="display">
    <h2>Roman</h2>
    <h2>RazzRoman</h2>
    <h2>Vue</h2>
  </template>
</template>

<script>
export default {
  data() {
    return {
      num: 5,
      display: true,
    };
  },
};
</script>

<style>
.underline {
  text-decoration: underline;
}

.promoted {
  font-style: italic;
}

.new {
  color: olivedrab;
}

.sold-out {
  color: red;
}
</style>
