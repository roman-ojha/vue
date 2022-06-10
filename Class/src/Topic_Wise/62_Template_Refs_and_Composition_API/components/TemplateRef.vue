<template>
  <div>
    <input type="text" ref="inputRef" />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  name: "TemplateRef",
  // template ref Using Composition API
  setup() {
    const inputRef = ref(null);
    // ref(<initial_value>)

    onMounted(() => {
      inputRef.value.focus();
      // we know that on when we deal with setup method 'ref' we always access the value using '.value'
    });
    return {
      inputRef,
    };
  },
  // Template ref Using Options API
  mounted() {
    // this.$refs.inputRef.focus();
  },
};
</script>

<style scoped></style>
