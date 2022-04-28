<template>
  <!-- Using Short hand Syntax =================== -->
  <h2>{{ name }}</h2>
  <div>
    <button @click="changeName">Change name on Click</button>
  </div>
  <h2>{{ count }}</h2>
  <div>
    <button @click="increment(5, $event)">Increment</button>
    <!-- In user passed argument Vue doesn't pass event in default we have to pass '$event' to pass the event -->
    <button @click="decrement(5)">Decrement</button>
  </div>

  <!-- Call Multiple Function on Event -->
  <button @click="changeName($event), increment(10, $event)">
    <!-- In this case in 'changeName' Vue will not pass event as argument by default -->
    Change name and Increment
  </button>
</template>
<script>
export default {
  data() {
    return {
      name: "Roman",
      count: 0,
    };
  },
  methods: {
    changeName(e) {
      // We can also be able to access event of event
      console.log(e);
      this.name = "batman";
    },
    increment(payload, event) {
      console.log(event);
      this.count += payload;
    },
    decrement(payload) {
      this.count -= payload;
    },
  },
};
</script>

<style></style>
