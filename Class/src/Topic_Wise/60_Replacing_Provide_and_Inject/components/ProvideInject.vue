<template>
  <h3>Parent component {{ name }}</h3>
  <h3>Parent component {{ count }}</h3>
  <h3>Parent component {{ firstName }}</h3>
  <h3>Parent component {{ lastName }}</h3>
  <button @click="incrementCount">Increment Count</button>
  <ChildA />
</template>

<script>
import { provide, ref, reactive, toRefs } from "vue";
import ChildA from "./ChildA.vue";
export default {
  name: "ProvideInject",
  //   Provide Using Composition API
  setup() {
    provide("c_userName", "Roman");
    //   provide(<label>,<value>)

    // Provide ref/reactive function
    const count = ref(0);
    const state = reactive({
      firstName: "Bruce",
      lastName: "Wayne",
    });
    provide("c_count", count);
    provide("c_hero", state);

    // NOTE: recommended way to change value is from parent rather then from child
    const incrementCount = () => {
      count.value++;
    };
    // and this provide that handler/functions
    provide("incrementCount", incrementCount);

    return {
      count,
      ...toRefs(state),
      incrementCount,
    };
  },
  components: {
    ChildA,
  },
  data() {
    return {
      name: "Roman",
    };
  },
  provide() {
    return {
      userName: this.name,
    };
  },
};
</script>

<style scoped></style>
