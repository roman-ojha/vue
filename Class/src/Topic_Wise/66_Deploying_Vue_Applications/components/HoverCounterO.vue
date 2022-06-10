<template>
  <div>
    <h2 @mouseover="incrementCount">Hover {{ count }} times</h2>
  </div>
</template>

<script>
import CounterMixin from "../mixins/counter.js";
export default {
  name: "HoverCounterO",
  mixins: [CounterMixin],
};
</script>

<style scoped></style>
