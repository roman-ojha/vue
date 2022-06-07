<template>
  <!-- Props -->
  <CardVue content="Card content 1" />
  <CardVue content="Card content 2" />
  <!-- here we can se we are passing prop to the 'CardVue' component which is and string but what if we want to pass and element like 'h2' tag or some img in that case we user slots -->

  <!-- Slots -->
  <CardVue>
    <!-- now for slot we have to add the component with closing tag and in between opening and closing tags we will specify content we want to and it will replace the slot tag from child component -->
    Card Content
  </CardVue>
  <CardVue>
    <h2>Card Content</h2>
  </CardVue>
  <CardVue>
    <img src="https://picsum.photos/200" />
  </CardVue>
</template>

<script>
import CardVue from "./components/Card.vue";
export default {
  name: "App",
  components: {
    CardVue,
  },
};
</script>

<style></style>
