<template>
  <!-- this component will contain the button and 'count' value will get increment after clicked -->
  <div>
    <button @click="incrementCount">Clicked {{ count }} times</button>
  </div>
</template>

<script>
// Step 1:
// import mixing where you want it
import counterMixin from "../mixins/counter";
export default {
  name: "ClickCounter",
  //   Step 2:
  //   Delete the functionality from this component
  //   data() {
  //     return {
  //       count: 0,
  //     };
  //   },
  //   methods: {
  //     incrementCount() {
  //       this.count += 1;
  //     },
  //   },

  // Step 3:
  // we mix in the counter functionality using mixins
  mixins: [counterMixin],
};
</script>

<style></style>
