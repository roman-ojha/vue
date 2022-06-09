<template>
  <!-- Options API To Change Value -->
  <div>
    <h2>
      {{ name }}
    </h2>
    <button @click="setName">Change Name</button>
  </div>
  <!-- Composition API to Change Value -->
  <!-- Using 'ref' -->
  <div>
    <h2>{{ count }}</h2>
    <button @click="incrementCount">Increment</button>
  </div>
  <!-- Using 'reactive' function -->
  <div>
    <h2>{{ first }} {{ last }}</h2>
    <button @click="changeName">Change Name</button>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
export default {
  name: "MethodsVue",
  setup() {
    const count = ref(0);

    function incrementCount() {
      //   to increment the value using function we just have to define the normal function
      count.value++;
    }

    const state = reactive({
      first: "Bruce",
      last: "Wayne",
    });

    function changeName() {
      state.first = "Clark";
      state.last = "Kent";
    }

    return {
      count,

      //   return function
      incrementCount,

      ...toRefs(state),
      //   we can return 'toRefs' in by using spread operator as well

      //   return function
      changeName,
    };
  },
  data() {
    return {
      name: "Roman",
    };
  },
  methods: {
    setName() {
      this.name = "Razz";
    },
  },
};
</script>

<style scoped></style>
