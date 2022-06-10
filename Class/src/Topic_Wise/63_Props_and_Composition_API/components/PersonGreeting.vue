<template>
  <div>Hello {{ fullName }}</div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "PersonGreeting",

  props: ["firstName", "lastName"],
  setup(props) {
    //   setup method receive an props as argument

    //   Computed Using composition API
    const fullName = computed(() => {
      return `${props.firstName} ${props.lastName}`;

      //     return `${this.firstName} ${this.lastName}`
      //   NOTE: we can't access props value using 'this.firstName' & 'this.lastName' because the setup method is called very early in component life cycle
    });

    return {
      fullName,
    };
  },
  //   Computed Using Options APi
  // computed: {
  //   fullName() {
  //     return `${this.firstName} ${this.lastName}`
  //   },
  // },
};
</script>

<style scoped></style>
