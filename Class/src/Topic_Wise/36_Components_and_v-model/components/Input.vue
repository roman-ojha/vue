<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
  <!-- now here we have to bind that modelValue to value attribute -->
  <!-- but we still need to handle the input from the user, when we use v-model directive on a custom component it automatically listen to an event called 'update:modelValue' we have to do is to emit that event with input value -->
</template>

<script>
export default {
  name: "InputVue",
  props: {
    modelValue: String,
    // here we can see that we got the 'v-model' directive as prop
  },
};
</script>

<style>
input[type="text"] {
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.4;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
