<template>
  <h3 v-for="name in names" :key="name.firstName">
    <!-- {{ name.firstName }} {{ name.lastName }} -->
    <!-- So if sometimes we just want to display fist name and sometimes we want to display full name it means that we want parent component to control how the child component render the content in this kind of case we can user slots -->

    <!-- to send data to parent component we will add to props on slot tag by using v-bind directive -->
    <slot :firstName="name.firstName" :lastName="name.lastName"></slot>
  </h3>
</template>

<script>
export default {
  name: "NameList",
  data() {
    return {
      names: [
        {
          firstName: "Bruce",
          lastName: "Wayne",
        },
        {
          firstName: "Clark",
          lastName: "Kent",
        },
        {
          firstName: "Princess",
          lastName: "Diana",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
