<template>
  <CardVue>
    <!-- here to place specific content on specific slot in child component we have to use 'template' tag -->
    <template v-slot:header>
      <!-- to specify the name of the slot where we want to placed content we will use 'v-slot' directive -->
      <h3>Header</h3>
    </template>
    <template v-slot:default>
      <!-- default slot -->
      <img src="https://picsum.photos/200" />
    </template>
    <template v-slot:footer>
      <button>View Details</button>
    </template>
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
