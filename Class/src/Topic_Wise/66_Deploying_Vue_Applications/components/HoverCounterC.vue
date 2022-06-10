<template>
  <div>
    <h2 @mouseover="incrementCount">Hover {{ count }} times</h2>
  </div>
</template>

<script>
import useCounter from "../composables/useCounter";
export default {
  name: "HoverCounterO",
  setup() {
    const { count, incrementCount } = useCounter();
    return {
      count,
      incrementCount,
    };
  },
};
</script>

<style scoped></style>
