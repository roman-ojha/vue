<template>
  <!-- Using Data property -->
  <h2>FullName - {{ firstName }} {{ lastName }}</h2>

  <!-- Using Computed property -->
  <h2>Computed FullName - {{ fullName }}</h2>

  <h2>
    Total - {{ items.reduce((total, curr) => (total = total + curr.price), 0) }}
    <!-- to render the total price of all items -->
    <!-- but if we have to display this result in multiple places that we might need to use computed property -->
  </h2>

  <h2>Computed Total - {{ totalPrice }}</h2>

  <!-- and also computed properties is that they are automatically recalculated if their dependencies changed -->
  <!-- this button will push another items into the array -->
  <button @click="items.push({ id: 4, title: 'keyboard', price: 50 })">
    Add item
  </button>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      firstName: "Razz",
      lastName: "Roman",
      items: [
        {
          id: 1,
          title: "TV",
          price: 100,
        },
        {
          id: 2,
          title: "Phone",
          price: 200,
        },
        {
          id: 3,
          title: "Laptop",
          price: 300,
        },
      ],
    };
  },
  methods: {},
  // same as 'data' & 'methods' we can define 'computed' properties which can be specify as function
  computed: {
    fullName() {
      // here 'fullName' is the property
      return `${this.firstName} ${this.lastName}`;
      // here we can see computed property is the property that is composed from two data property
    },
    // so, if property need to be render in multiple places that we might need to create computed property
    totalPrice() {
      return this.items.reduce(
        (total, curr) => (total = total + curr.price),
        0
      );
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
