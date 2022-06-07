<template>
  <div>
    <h2>This is a popup</h2>
    <input type="text" v-model="name" />
    <button @click="$emit('close', name)">Close Popup</button>
    <!-- now here we will take the input from the user to send that data to the parent component -->
  </div>
</template>
<script>
export default {
  name: "PopupVue",
  emits: {
    // for validation we will change 'emits' as object instead of an array
    close: (name) => {
      // now this close function is the event which receive the argument specify when emitting the event
      if (!name) return false;
      else return true;
      // now here we will validate that inputted name and return bool.
    },
  },
  data() {
    return {
      name: "",
    };
  },
};
</script>
<style scoped></style>
