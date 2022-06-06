<template>
  <!-- <Greet name="Bruce" heroName="Batman" />
  <Greet name="Clark" heroName="Superman" />
  <Greet name="Diana" heroName="Wonder women" />
  <Greet :name="name" :heroName="channel" /> -->
  <Article title="Article Title" :likes="50" :isPublished="true" />
  <!-- here we can see that 'likes' is of type number so to send likes as number we have to use v-bind directive -->
</template>
<script>
// import Greet from "./components/Greet.vue";
import Article from "./components/Article.vue";
export default {
  name: "App",
  components: {
    // Greet,
    Article,
  },
  data() {
    return {
      name: "Roman",
      channel: "NaN",
    };
  },
  methods: {},
  computed: {},
  watch: {},
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
</style>
