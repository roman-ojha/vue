<template>
  <h2>Volume Tracker (0-20)</h2>
  <h3>Current volume - {{ volume }}</h3>

  <div>
    <button @click="volume += 2">Increase</button>
    <button @click="volume -= 2">Decrease</button>
  </div>

  <!-- now we want to add a functionality where if the user increase volume above 16 then we want to alert user for that watcher helps us with this requirement -->
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      volume: 0,
    };
  },
  methods: {},
  computed: {},
  // now here this object can contain 'watch' property as well
  watch: {
    // the keys in this object correspond to tha data or computed properties that you want to watch in value
    // in our example we want to watch 'volume' property
    volume(newValue, previousValue) {
      // this function will get called whenever the 'volume' property value get changed
      // this function automatically get the updated value and previous value as and argument
      if (newValue === 16 && newValue > previousValue) {
        // here we only want to alert user if user is increase volume not while user is decreasing volume
        alert(
          "Listening ro a high volume for a long time may damage you hearing"
        );
      }
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
