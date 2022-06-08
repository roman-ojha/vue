<template>
  <div>
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
export default {
  name: "PostList",
  data() {
    return {
      posts: [],
      errorMsg: "",
    };
  },
  // now rather then calling function to fetched data from api endpoint on click rather we will fetch data after page get load
  created() {
    this.getPosts();
    // now here we will call the method that we had previously defined
    // NOTE: it is important to user traditional function for created method and not an arrow function because arrow function does't provide keyword binding and the component will through an error
  },
  methods: {
    getPosts() {
      axios({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/posts",
      })
        .then((res) => {
          this.posts = res.data;
        })
        .catch(() => {
          this.errorMsg = "Error while retrieving data";
        });
    },
  },
};
</script>

<style scoped></style>
