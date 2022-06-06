<template>
  <h2>FullName - {{ firstName }} {{ lastName }}</h2>

  <h2>Computed FullName - {{ fullName }}</h2>

  <h2>
    Total - {{ items.reduce((total, curr) => (total = total + curr.price), 0) }}
  </h2>

  <h2>Computed Total - {{ totalPrice }}</h2>

  <h2>Method Total - {{ getTotalPrice() }}</h2>
  <!-- here the different of computed property then method is that computed property are cached, it means that the the independent of computed property changes on the page and the UI is rerendered the cached result is returned and the computed property will not be recalculated -->

  <button @click="items.push({ id: 4, title: 'keyboard', price: 50 })">
    Add item
  </button>

  <!-- Example of above explanation -->
  <h2>Country - {{ country }}</h2>
  <input type="text" v-model="country" />
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
      country: "",
    };
  },
  methods: {
    // let us default the same purpose to return the total price of all items
    getTotalPrice() {
      console.log("method");
      // here every time ui get rerender computed property will get call
      return this.items.reduce(
        (total, curr) => (total = total + curr.price),
        0
      );
    },
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    totalPrice() {
      console.log("computed property");
      // now the dependencies of this computed property are changing then this function will not get called again
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
