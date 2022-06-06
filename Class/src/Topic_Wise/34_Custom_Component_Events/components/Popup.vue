<template>
  <div>
    <h2>This is a popup</h2>
    <button @click="$emit('close')">Close Popup</button>
    <!-- close Popup button will close the "Popup" component from render -->
    <!-- on click we want to emit an event where we pass and special instance variable called '$emit' and we pass in the name of the event -->
    <!-- so it means that on click of close Popup button we are emitting custom event called close to parent component -->

    <button @click="$emit('close', 'Roman')">Close Popup Wit Name</button>
    <!-- we can pass the data after emitting the event to parent component as second argument -->
  </div>
</template>
<script>
export default {
  name: "PopupVue",
  emits: ["close"],
  //   'emits' is an array of events that the component can emit to the parent component
};
</script>
<style scoped></style>
