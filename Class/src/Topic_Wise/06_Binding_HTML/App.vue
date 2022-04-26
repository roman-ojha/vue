<template>
  <h1>{{ greet }} {{ name }}</h1>
  <!-- to bind html we can use 'v-html' directive -->
  <div v-html="msg"></div>
  <!-- NOTE|Warning: when you use 'v-html' directive it is very important to keep in mind that you should only render the content that you trust, if you are using 3rd party api it is very risky 'v-html' directive because it might lead to cross side scripting attacks making you application vulnerable to security threats -->
  <div v-html="hack"></div>
</template>

<script>
export default {
  data() {
    return {
      greet: "Hello",
      name: "Roman",
      msg: "<b>My name is Roman Ojha</b>",
      // now in 'msg' we are passing string but added bold tag
      hack: `<a href="#" onclick="alert('you have been hacked!')">Win a prize!</a>`,
    };
  },
};
</script>

<style></style>
