<template>
  <input type="movie" v-model="movie" />

  <div>
    <input type="text" v-model="movieInfo.title" placeholder="Movie title" />
    <input type="text" v-model="movieInfo.actor" placeholder="Movie actor" />
  </div>

  <div>
    <button @click="movieList.push('Wonder Woman')">Add movie</button>
    <!-- here we are pushing new value into data property -->
  </div>

  <div>
    <button @click="movieList = movieList.concat('Wonder Woman')">
      Add movie
    </button>
    <!-- but here we are assigning new value to 'movieList' it means that new instance of 'movieList' will get created in that case we don't have to put 'deep : true'-->
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      movie: "Batman",
      movieInfo: {
        title: "",
        actor: "",
      },
      movieList: ["Batman", "Superman"],
    };
  },
  methods: {},
  computed: {},
  watch: {
    // watcher will not watcher the first value when it get render at the first time
    // it means that default value 'Batman' will not get watched by the watcher
    // we can use watch the property for the first time as well using immediate watcher
    movie: {
      handler(newValue) {
        console.log(`Calling API with movie name = ${newValue}`);
      },
      immediate: true,
      // now after we says immediate to true only after that watcher will watch the property when page is render initially as well
    },
    movieInfo: {
      handler(newValue) {
        // here 'movieInfo' is the object now single value it means that watcher will not watcher the change of deeply nested property by default
        console.log(
          `Calling API with movie title =${newValue.title} and actor = ${newValue.actor}`
        );
      },
      // to ask the vue to monitor the property of an object on the watcher we will specify the property deep to true
      deep: true,
    },
    movieList: {
      // now here 'movieList' is an array where the value are deeply nested
      handler(newValue) {
        console.log(`Undated list ${newValue}`);
      },
      deep: true,
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
</style>
