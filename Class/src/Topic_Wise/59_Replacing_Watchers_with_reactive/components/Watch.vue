<template>
  <!-- Options API -->
  <div>
    <input type="text" placeholder="Name" v-model="name" />
  </div>

  <!-- Composition API -->
  <!-- reactive -->
  <input type="text" placeholder="First Name" v-model="fName" />
  <input type="text" placeholder="Last Name" v-model="lName" />
  <input type="text" placeholder="Hero Name" v-model="options.heroName" />
</template>

<script>
import { reactive, watch, toRefs } from "vue";
import _ from "lodash";
export default {
  name: "WatchVue",
  setup() {
    const state = reactive({
      fName: "",
      lName: "",
      options: {
        heroName: "",
      },
    });

    // Watcher for reactive reference
    watch(state, (newValue, oldValue) => {
      // when we pass in and reactive object as a data source the old and new values will be the same by default
      console.log("firstName Old value ", oldValue.fName);
      console.log("firstName New value ", newValue.fName);
      console.log("lastName Old value ", oldValue.lName);
      console.log("lastName New value ", newValue.lName);
    });
    // so to get the old and new value from reactive object new need to do this
    watch(
      () => {
        // we nee a getter function
        return {
          ...state,
        };
      },
      (newValue, oldValue) => {
        // when we pass in and reactive object as a data source the old and new values will be the same by default
        console.log("firstName Old value ", oldValue.fName);
        console.log("firstName New value ", newValue.fName);
        console.log("lastName Old value ", oldValue.lName);
        console.log("lastName New value ", newValue.lName);
      }
    );

    // watcher for individual property
    watch(
      () => state.fName,
      (newValue, oldValue) => {
        console.log("firstName Old value ", oldValue);
        console.log("firstName New value ", newValue);
      }
    );

    // Deep Watcher: to watch individual nested property
    watch(
      () => state.options,
      (newValue, oldValue) => {
        console.log("firstName Old value ", oldValue);
        console.log("firstName New value ", newValue);
        // by default you will get the same value as old and new value as previous to fix that we have to make a deep copy of the options object for that we can use 'lodash' utility library
        // yarn add lodash
      },
      {
        deep: true,
      }
    );
    // Fixes Using Lodash:
    watch(
      () => _.cloneDeep(state.options),
      (newValue, oldValue) => {
        console.log("firstName Old value ", oldValue);
        console.log("firstName New value ", newValue);
      },
      {
        deep: true,
      }
    );

    return toRefs(state);
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
