<template>
  <Input v-model="name" />
  <!-- now here we can see that we have 'Input' custom component which contain input filed and we are trying to bind the 'name' data property using v-model but by default it would not going to work -->
  <!-- so when we use v-model directive on a custom component it automatically received a prop called 'modelValue' in custom child component -->
</template>

<script>
import Input from "./components/Input.vue";
export default {
  name: "App",
  data() {
    return {
      name: "",
    };
  },
  components: {
    Input,
  },
};
</script>

<style></style>
