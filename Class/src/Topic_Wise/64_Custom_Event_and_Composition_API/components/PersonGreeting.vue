<template>
  <div>Hello {{ fullName }}</div>
  <button @click="sendEvent">Call Heroes</button>
</template>

<script>
import { computed } from "vue";
export default {
  name: "PersonGreeting",

  // defining the props which will receive by the child component
  props: ["firstName", "lastName"],

  // adding emitted event
  emits: ["callHeroes"],
  setup(props, context) {
    // In setup method to access event we have to use 'context'
    // context object exposes 3 property
    // 1. emit
    // 2. slots
    // 3. attrs
    // NOTE: Learn by you self

    console.log(context);

    const fullName = computed(() => {
      return `${props.firstName} ${props.lastName}`;
    });

    function sendEvent() {
      context.emit("callHeroes", fullName.value);
      // context.emit("<custom_event_name>","<value_to_send_back_to_Parent>")
    }

    return {
      fullName,
      sendEvent,
    };
  },
};
</script>

<style scoped></style>
