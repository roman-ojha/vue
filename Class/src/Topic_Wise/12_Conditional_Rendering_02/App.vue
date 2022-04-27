<template>
  <h2 v-show="num === 5">Using v-show</h2>
  <!-- NOTE 'v-show' element will be present every time if the express is false/true -->
  <!-- if express is true then display the element -->
  <!-- if express is false then display:none but present in the dom -->
  <!-- Some time this way is needed because mounting and unmounting element is expensive -->

  <h2 v-if="num === 5">Using v-if</h2>
</template>
<script>
export default {
  data() {
    return {
      num: 5,
      display: true,
      showElement: true,
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
