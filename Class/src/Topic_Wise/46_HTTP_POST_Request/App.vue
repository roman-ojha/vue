<template>
  <div>
    <CreatePostVue />
  </div>
</template>

<script>
import CreatePostVue from "./components/CreatePost.vue";
export default {
  name: "App",
  components: {
    CreatePostVue,
  },
  data() {
    return {};
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
