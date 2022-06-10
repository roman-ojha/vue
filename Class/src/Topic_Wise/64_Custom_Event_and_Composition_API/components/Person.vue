<template>
  <div>
    <input type="text" placeholder="First Name" v-model="firstName" />
    <input type="text" placeholder="Last Name" v-model="lastName" />
  </div>

  <!-- now here we have to listen to the custom event that is emit by child component in this case 'callHeroes' and assign a handler -->
  <PersonGreeting
    :firstName="firstName"
    :lastName="lastName"
    @callHeroes="callHeroes"
  />
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

    // Emitted event handler function
    function callHeroes(hero) {
      // this function receive the value that is emitted value the event
      alert(`Calling ${hero}`);
    }

    return {
      firstName,
      lastName,
      callHeroes,
    };
  },
};
</script>

<style scoped></style>
