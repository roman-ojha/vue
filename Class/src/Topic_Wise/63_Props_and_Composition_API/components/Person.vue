<template>
  <div>
    <input type="text" placeholder="First Name" v-model="firstName" />
    <input type="text" placeholder="Last Name" v-model="lastName" />
  </div>

  <!-- On child component we will pass reactive value as props -->
  <PersonGreeting :firstName="firstName" :lastName="lastName" />
</template>

<script>
import { ref } from "vue";
import PersonGreeting from "./PersonGreeting.vue";
export default {
  name: "PersonVue",
  components: {
    PersonGreeting,
  },
  setup() {
    const firstName = ref("");
    const lastName = ref("");

    return {
      firstName,
      lastName,
    };
  },
};
</script>

<style scoped></style>
