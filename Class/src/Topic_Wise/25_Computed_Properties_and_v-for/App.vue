<template>
  <!-- now here we will only display expensive item -->
  <!-- Conditional rendering -->
  <template v-for="item in items" :key="item.id">
    <h2 v-if="item.price > 100">{{ item.title }} {{ item.price }}</h2>
  </template>

  <!-- Rather we will use computed property for conditional rendering-->
  <template v-for="item in expensiveItems" :key="item.id">
    <!-- looks like both approach works file but compute property have one advantage and that is computed property are cached -->
    <!-- the practical uses of computed property is when sorting and filtering data in a table -->
    <h2>{{ item.title }} {{ item.price }}</h2>
  </template>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
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
  computed: {
    expensiveItems() {
      return this.items.filter((item) => item.price > 100);
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
