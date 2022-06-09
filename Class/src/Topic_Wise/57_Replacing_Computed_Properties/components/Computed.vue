<template>
  <div>
    <!-- Options API -->
    <input type="text" placeholder="First Name" v-model="fName" />
    <input type="text" placeholder="Last Name" v-model="lName" />
    <h2>Options fullName is {{ fullName }}</h2>

    <!-- Composition API -->

    <!-- ref -->
    <input type="text" placeholder="First Name" v-model="refFirstName" />
    <input type="text" placeholder="Last Name" v-model="refLastName" />
    <h2>ref fullName is {{ refFullName }}</h2>

    <!-- reactive -->
    <input type="text" placeholder="First Name" v-model="reactiveFirstName" />
    <input type="text" placeholder="Last Name" v-model="reactiveLastName" />
    <h2>reactive fullName is {{ reactiveFullName }}</h2>
  </div>
</template>

<script>
import { ref, reactive, toRefs, computed } from "vue";
export default {
  name: "ComputedVue",
  setup() {
    const refFirstName = ref("");
    const refLastName = ref("");
    const state = reactive({
      reactiveFirstName: "",
      reactiveLastName: "",
    });

    const refFullName = computed(function () {
      // for replacing computed of optional API we have 'computed' function which take function we argument and will return the computed value
      return `${refFirstName.value} ${refLastName.value}`;
    });
    // now 'refFullName' will contain the computed value as computed property using Composition API

    const reactiveFullName = computed(function () {
      return `${state.reactiveFirstName} ${state.reactiveLastName}`;
    });

    return {
      refFirstName,
      refLastName,
      refFullName,
      ...toRefs(state),
      reactiveFullName,
    };
  },
  data() {
    return {
      fName: "",
      lName: "",
    };
  },
  computed: {
    fullName() {
      return `${this.fName} ${this.lName}`;
    },
  },
};
</script>

<style scoped></style>
