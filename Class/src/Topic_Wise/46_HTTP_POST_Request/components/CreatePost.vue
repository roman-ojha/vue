<template>
  <div>
    <form @submit.prevent="createPost">
      <!-- Step 1: Create the input field to get the form data to send to api -->
      <div>
        <label for="userId"> Post User Id </label>
        <input type="text" id="userId" v-model="formData.userId" />
      </div>
      <div>
        <label for="title"> Post Title </label>
        <input type="text" id="title" v-model="formData.title" />
      </div>
      <div>
        <label for="body"> Post Body </label>
        <input type="text" id="body" v-model="formData.body" />
      </div>
      <button>Create Post</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CreatePost",
  data() {
    return {
      formData: {
        // step 2: bind/tie the data property to input field using 'v-model'
        userId: "",
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      // step 3: Make a POST request using api
      axios
        .post("https://jsonplaceholder.typicode.com/posts", this.formData)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
