<template>
  <div>
    <pre>
      {{ JSON.stringify(formValues, null, 2) }}
      <!-- here now we will display the data property that we will put in form -->
    </pre>
  </div>
  <form>
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model="formValues.name" />
      <!-- now here that data property that we had created bellow will going to bind in v-model directive -->
      <!-- so 'v-model' is equal to data property -->
    </div>
    <div>
      <label for="profile">Profile Summary</label>
      <textarea
        name=""
        id="profile"
        cols="30"
        rows="10"
        v-model="formValues.profileSummary"
      ></textarea>
    </div>
    <div>
      <!-- For select tag -->
      <label for="country">Country</label>
      <select id="country" v-model="formValues.country">
        <option value="">Select a country</option>
        <option value="india">India</option>
        <option value="vietnam">Vietnam</option>
        <option value="singapore">Singapore</option>
      </select>
    </div>
    <div>
      <!-- Multi select form value -->
      <label for="job-location">Job Location</label>
      <select id="job-location" multiple v-model="formValues.jobLocation">
        <option value="india">India</option>
        <option value="vietnam">Vietnam</option>
        <option value="singapore">Singapore</option>
      </select>
    </div>
  </form>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      formValues: {
        // we are creating the data property that will going to keep track of the form control
        name: "",
        profileSummary: "",
        country: "",
        jobLocation: [],
      },
    };
  },
  methods: {},
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
/* .underline {
  text-decoration: underline;
}
.promoted {
  font-style: italic;
}
.new {
  color: olivedrab;
}
.sold-out {
  color: red;
} */
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
