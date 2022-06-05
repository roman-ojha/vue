<template>
  <div>
    <pre>
      {{ JSON.stringify(formValues, null, 2) }}
    </pre>
  </div>
  <!-- Prevent Modifier -->
  <!-- Prevent Modifier work same like 'event.preventDefault()' for preventing default behavior of form -->
  <form @submit.prevent="submitForm">
    <!-- Trim modifier -->
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model.trim="formValues.name" />
      <!-- Trim modifier will help to trim white space from the string -->
    </div>

    <!-- Number Modifier -->
    <div>
      <label for="age">Age</label>
      <input type="number" id="age" v-model.number="formValues.age" />
      <!-- number modifier will help to store value in term of number because javascript store form value as string but using number modifier we can solve that issue -->
    </div>

    <!-- Lazy Modifier -->
    <!-- So every time we type some value in input field it get updated on data property, this is good when we have to display these value live but most of the time you only have to bind the data when change event occurs in that case we can use of lazy modifier -->
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model.trim.lazy="formValues.name" />
    </div>

    <!-- Key Modifier -->
    <!-- If you want a method that should called whenever some particular key get pressed -->
    <div>
      <label for="age">Age</label>
      <!-- so in here we want to submit the form when we press enter on age input field -->
      <input
        @keyup.enter="submitForm"
        type="number"
        id="age"
        v-model.number="formValues.age"
      />
    </div>
  </form>

  <h2>Submitter Values</h2>
  <div>
    <pre>
      {{ JSON.stringify(submittedValue, null, 2) }}
    </pre>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      formValues: {
        name: "",
        age: null,
      },
      submittedValue: {},
    };
  },
  methods: {
    submitForm() {
      this.submittedValue = this.formValues;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
label {
  font-weight: bold;
  display: flex;
  margin-bottom: 5px;
}
input + label {
  font-weight: bold;
  display: inline-flex;
  margin-right: 20px;
}
input[type="text"],
textarea,
select {
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
