<template>
  <NameList>
    <!-- we know that the data property of name list contain in the 'NameList' component not in the 'App' component to get the data that is present in child component we need to send data from child to parent for that we use slot props, it is similar to props but we are applying those data in slots within a component -->

    <!-- now after passing data as slot props we can access here -->
    <template v-slot:default="slotProps">
      <!-- we need to indicate to vue that this template belongs to the slot in our 'NameList' component for that we need to specify the slot name: default -->
      <!-- and on the right hand side of this directive will give us access to the slot props send from the child component -->
      <!-- 'slotProps' content all the props that is send from the child -->
      {{ slotProps.lastName }}
    </template>
  </NameList>

  <NameList>
    <template v-slot:default="slotProps">
      {{ slotProps.lastName }} {{ slotProps.firstName }}
    </template>
  </NameList>

  <NameList>
    <template v-slot:default="slotProps">
      {{ slotProps.firstName }} {{ slotProps.lastName }}
    </template>
  </NameList>
</template>

<script>
import NameList from "./components/NameList.vue";
export default {
  name: "App",
  components: {
    NameList,
  },
};
</script>

<style></style>
