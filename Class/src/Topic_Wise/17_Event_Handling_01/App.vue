<template>
  <!-- InLine Event Handlers ===================================-->
  <h2>{{ name }}</h2>
  <div>
    <!-- By clicking Button we want to change the name -->
    <button v-on:click="name = 'Razz'">Change name on Click</button>
    <br />
    <button v-on:mouseover="name = 'Batman'">Change name on over</button>
  </div>

  <!-- Increment and Decrement Counter -->
  <h2>{{ count }}</h2>
  <div>
    <button v-on:click="count++">Increment</button>
    <button v-on:click="count--">Decrement</button>
  </div>

  <!-- Using Method for complex logic =============================== -->
  <h2>{{ num }}</h2>
  <div>
    <button v-on:click="inc">Increment</button>
    <button v-on:click="dec">Decrement</button>
  </div>

  <h2>{{ num }}</h2>
  <div>
    <button v-on:click="increment(5)">Increment</button>
    <button v-on:click="decrement(5)">Decrement</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "Roman",
      count: 0,
      num: 0,
    };
  },
  methods: {
    inc() {
      this.num++;
    },
    dec() {
      this.num--;
    },
    increment(payload) {
      this.num += payload;
    },
    decrement(payload) {
      this.num -= payload;
    },
  },
};
</script>

<style></style>
