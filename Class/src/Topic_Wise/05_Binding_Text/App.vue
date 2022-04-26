<template>
  <!-- now here we will bind the data that is coming from the script to the 'template' bloc -->
  <!-- to do that we use mustache syntax in vue-->
  <!-- this method of binding text using the mustache syntax is called as text interpolation -->
  <h1>{{ greet }} {{ name }}</h1>
  <!-- there is also second way to bind text -->
  <!-- that is using directive -->
  <!-- a directive is a special html attribute -->
  <!-- and in vue each directive have a 'v-' prefix -->
  <!-- the directive for binding text 'v-text' -->
  <div v-text="msg"></div>
  <!-- v-text="<data_property>" -->
  <!-- we don'have to use value inside the element because 'v-text' directive replaces the data property value as the inner text of the html element -->
  <!-- Drawback of the 'v-text' directive is it replaces the entire text content of the html element with the data property value -->
  <!-- NOTE: if you want to dynamically update the property value the recommended way is to use the mustache syntax as it evaluate slightly faster compare to the 'v-text' directive -->
</template>

<script>
export default {
  data() {
    return {
      greet: "Hello",
      name: "Roman",
      msg: "My name is Roman Ojha",
    };
  },
};
</script>

<style></style>
