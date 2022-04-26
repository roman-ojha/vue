<template>
  <h1>{{ greet }} {{ name }}</h1>
  <div v-html="msg"></div>
  <div v-html="hack"></div>
  <!-- in Vue we can bind data to html html attribute ex: id, class, style or bool etc.. -->
  <!--  -->
  <h2 v-bind:id="headingId">Heading</h2>
  <!-- Now here we can see that we are binding 'headingId' string to the id attribute -->
  <button v-bind:disabled="isDisabled">Bind</button>
  <!-- now here we are binding 'bool' to the disabled attribute -->
</template>

<script>
export default {
  data() {
    return {
      greet: "Hello",
      name: "Roman",
      msg: "<b>My name is Roman Ojha</b>",
      hack: `<a href="#" onclick="alert('you have been hacked!')">Win a prize!</a>`,
      headingId: "heading",
      isDisabled: true,
    };
  },
};
</script>

<style></style>
