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
    // now just call the functionality that we had defined
    // this function returns an object with count and incrementCount function which we can destructure
    const { count, incrementCount } = useCounter();
    // Now because of using composition API we know what are the parameter this component is using

    //    now return it so that template can use it
    return {
      count,
      incrementCount,
    };
  },
};
</script>

<style scoped></style>
