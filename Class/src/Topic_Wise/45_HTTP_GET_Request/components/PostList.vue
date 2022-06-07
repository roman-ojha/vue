<template>
  <div>
    <button @click="getPosts">Load Posts</button>
    <h3 v-if="errorMsg">{{ errorMsg }}</h3>
    <div v-for="post in posts" :key="post.id">
      <h3>{{ post.id }} {{ post.title }}</h3>
      <p>{{ post.body }}</p>
      <hr />
    </div>
  </div>
</template>

<script>
import axios from "axios";
// first we need to import axios
export default {
  name: "PostList",
  data() {
    //   second we need to create data property which will store fetched data
    return {
      posts: [],
      errorMsg: "",
    };
  },
  methods: {
    //   third we will create method which will get called after clicking button
    getPosts() {
      axios({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/posts",
      })
        .then((res) => {
          this.posts = res.data;
          // after getting data we will assign that data to data property
        })
        .catch(() => {
          // console.log(err);
          this.errorMsg = "Error while retrieving data";
        });
    },
  },
};
</script>

<style scoped></style>
