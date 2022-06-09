<template>
  <!-- Options API -->
  <div>
    <input type="text" placeholder="Name" v-model="name" />
  </div>

  <!-- Composition API -->
  <!-- ref -->
  <div>
    <input type="text" placeholder="First Name" v-model="firstName" />
    <input type="text" placeholder="Last Name" v-model="lastName" />
  </div>
</template>

<script>
import { ref, watch } from "vue";
export default {
  name: "WatchVue",
  setup() {
    const firstName = ref("");
    const lastName = ref("Wayne");

    // now in composition API we have 'watch' function
    watch(firstName, (newValue, oldValue) => {
      console.log("Old value ", oldValue);
      console.log("New value ", newValue);
    });
    // watch(<data_source>,<function_same_as_watch_data_property>)

    // now you might come across a situation where you want same function to be run for different/more data source as well like:
    watch(
      [firstName, lastName],
      (newValues, oldValues) => {
        // watch and run function if one or two of these data source change it's value
        console.log("firstName Old value ", oldValues[0]);
        console.log("firstName New value ", newValues[0]);
        console.log("lastName Old value ", oldValues[1]);
        console.log("lastName New value ", newValues[1]);
      },
      {
        immediate: true,
        // For Watch Immediately
      }
    );

    return {
      firstName,
      lastName,
    };
  },
  data() {
    return {
      name: "",
    };
  },
  watch: {
    name(newValue, oldValue) {
      console.log("Old value ", oldValue);
      console.log("New value ", newValue);
    },
  },
};
</script>

<style scoped></style>
