<template>
  <!-- this component will contain the heading element and 'count' value will get increment after hover -->
  <div>
    <h2 @mouseover="incrementCount">Hovered {{ count }} times</h2>
  </div>
</template>

<script>
import counterMixin from "../mixins/counter";
export default {
  name: "HoverCounter",
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
  mixins: [counterMixin],
};
</script>

<style></style>
