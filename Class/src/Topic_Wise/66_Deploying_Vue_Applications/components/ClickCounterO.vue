<template>
  <div>
    <button @click="incrementCount">Click {{ count }} times</button>
  </div>
</template>

<script>
import CounterMixin from "../mixins/counter.js";
export default {
  name: "ClickCounterO",
  mixins: [CounterMixin],
};
</script>

<style scoped></style>
