<template>
  <div>
    <!-- <h2>{{ state.firstName }} {{ state.lastName }}</h2> -->

    <h2>{{ fName }} {{ lName }}</h2>

    <h2>{{ rFirstName }} {{ rLastName }}</h2>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  name: "DemoTwo",
  setup() {
    // const state = reactive({
    //   firstName: "Bruce",
    //   lastName: "Wayne",
    // });

    const rState = reactive({
      rFirstName: "Bruce",
      rLastName: "Wayne",
    });

    setTimeout(() => {
      rState.rFirstName = "Clark";
      rState.rLastName = "Kent";
      console.log(rState);
      //   now here we are changing the reactive value but because we had return 'rState' value as :
      //   rFirstName: rState.rFirstName,
      //   rLastName: rState.rLastName,
      //   Vue will not update the DOM after we change value
      //   When we return individual Property value from the 'rState' object Vue doesn't know it has to react to changes in the individual property values
    }, 2000);

    // return {
    //   state,

    //   // while accessing data property we are just accessing by it's property but in case of reactive function we are accessing it by 'state.' but we can replace that and access directly as well like this:
    //     rFirstName: rState.rFirstName,
    //     rLastName: rState.rLastName,
    //   //   not Recommended Way as explained above
    // };
    //   to solve this issues Vue provide another function called 'toRefs' function
    //  the two ref function preserve the reactivity for the individual properties in 'rState' object

    return toRefs(rState);
  },
  data() {
    return {
      fName: "Bruce",
      lName: "Wayne",
    };
  },
};
</script>

<style></style>
