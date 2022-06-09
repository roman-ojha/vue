<template>
  <div>
    <h2>{{ name }}</h2>
    <h3>{{ gender }}</h3>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "DemoOne",
  setup() {
    let name = "Roman";
    // here firstly we have create the normal variable and try to pass that value so that template can use it

    const gender = ref("Male");

    setTimeout(() => {
      name = "Razz";
      //   here after 2s we had changed that value but after changing that value we would not see that changes in dom
      console.log(name);
      //   if we will console this value then yes value had been changed but UI is not recognizing that change
      //   because of this Vue 'ref' and 'reactive' come

      gender.value = "Female";
      //   but here we had use 'ref' so Vue is reacting to change that is happening in gender value and updating the dom
    }, 2000);
    return {
      name,
      gender,
    };
  },
};
</script>

<style></style>
