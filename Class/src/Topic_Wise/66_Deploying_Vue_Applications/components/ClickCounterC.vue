<template>
  <div>
    <button @click="incrementCount">Click {{ count }} times</button>
  </div>
</template>

<script>
import useCounter from "../composables/useCounter";
export default {
  name: "ClickCounterO",
  setup() {
    const { count, incrementCount } = useCounter(100, 10);
    return {
      count,
      incrementCount,
    };
  },
};
</script>

<style scoped></style>
