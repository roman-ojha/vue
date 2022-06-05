<template>
  <div>
    <pre>
      {{ JSON.stringify(formValues, null, 2) }}
      <!-- here now we will display the data property that we will put in form -->
    </pre>
  </div>
  <form @submit="submitForm">
    <!-- when submit button get clicked emit the submit event which we can listen to using event binding called "@submit" -->

    <!-- Single checkbox form control -->
    <div>
      <input
        type="checkbox"
        id="remoteWork"
        v-model="formValues.remoteWorkBool"
      />
      <label for="remoteWork">Open to remote work? - bool value</label>
    </div>
    <!-- for 'yes' and 'no' -->
    <div>
      <input
        type="checkbox"
        id="remoteWork"
        v-model="formValues.remoteWorkString"
        true-value="yes"
        false-value="no"
      />
      <label for="remoteWork">Open to remote work? - string value</label>
    </div>

    <!-- Group checkbox form control -->
    <div>
      <label>Skill set</label>
      <input
        type="checkbox"
        id="html"
        value="html"
        v-model="formValues.skillSet"
      />
      <label for="html">HTML</label>
      <input
        type="checkbox"
        id="css"
        value="css"
        v-model="formValues.skillSet"
      />
      <label for="css">CSS</label>
      <input
        type="checkbox"
        id="javascript"
        value="javascript"
        v-model="formValues.skillSet"
      />
      <label for="javascript">Javascript</label>
    </div>

    <!-- Radio group -->
    <div>
      <label>Years of Experience</label>
      <input
        type="radio"
        id="0-2"
        value="0-2"
        v-model="formValues.yearsOfExperience"
      />
      <label for="0-2">0-2</label>
      <input
        type="radio"
        id="3-5"
        value="3-5"
        v-model="formValues.yearsOfExperience"
      />
      <label for="3-5">3-5</label>
      <input
        type="radio"
        id="6-10"
        value="6-10"
        v-model="formValues.yearsOfExperience"
      />
      <label for="6-10">6-10</label>
    </div>

    <div>
      <!-- Submit form data -->
      <button>Submit</button>
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
        remoteWorkBool: false,
        remoteWorkString: "no",
        skillSet: [],
        yearsOfExperience: "",
      },
      submittedValue: {},
    };
  },
  methods: {
    submitForm(event) {
      // this function runs when form get submitted
      event.preventDefault();
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
