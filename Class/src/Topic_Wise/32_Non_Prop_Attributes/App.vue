<template>
  <!-- sometimes we might need to pass in regular html attributes like an id attribute -->
  <Article
    id="my-article"
    title="Article Title"
    :likes="50"
    :isPublished="true"
  />
</template>
<script>
import Article from "./components/Article.vue";
export default {
  name: "App",
  components: {
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
