<template>
  <h4>App component text</h4>
  <ChildStyles />
  <ChildStyles>
    <h4>ChildStyles Component using Slots</h4>
    <!-- now here we are using slot to place 'h4' tag into child component but because we had added 'h4' element into 'App' component the style apply to this element will be same style that other 'App' component template will applied of means 'color: orange' will get applied on this slot element as well -->
  </ChildStyles>
</template>

<script>
import ChildStyles from "./components/ChildStyles.vue";
export default {
  name: "App",
  components: {
    ChildStyles,
  },
};
</script>

<style scoped>
h4 {
  /* by styling element without using 'scoped' that style will get apply to global element(global style) */
  color: orange;
  /* but if we will add 'scoped' attribute on style tag then the color that we apply on h4 element will only get apply to the 'App.vue' 'h4' tag element on not on any other child element */
}
</style>
