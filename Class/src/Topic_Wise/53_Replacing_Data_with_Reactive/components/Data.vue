<template>
  <h2>Options - {{ o_firstName }}</h2>
  <h2>Options - {{ o_firstName }} {{ o_lastName }} a.k.a {{ o_heroName }}</h2>
  <h2>Composition - {{ c_firstName }}</h2>
  <h2>Composition - {{ greet }}</h2>
  <h2>
    Composition - {{ c_firstName }} {{ c_lastName }} a.k.a {{ c_heroName }}
  </h2>
  <h2>Composition - {{ greetHero }}</h2>
  <h2>
    Reactive Composition - {{ state.firstName }} {{ state.lastName }} a.k.a
    {{ state.heroName }}
  </h2>
  <h2>Reactive Composition - {{ reactiveGreetHero }}</h2>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "DataVue",
  setup() {
    const c_firstName = ref("Clark");
    const c_lastName = ref("Kent");
    const c_heroName = ref("Superman");

    console.log(c_firstName);
    const greet = `Hello ${c_firstName.value}`;
    const greetHero = `Hello ${c_firstName.value} ${c_lastName.value} a.k.a ${c_heroName.value}`;

    // Reactive function:
    // reactive function takes an object we can define the property inside the object
    const state = reactive({
      firstName: "Princes",
      lastName: "Diana",
      heroName: "Wonder Woman",
    });
    // similar to ref, reactive returns reference which we can store
    // it is kind of a conversion to call that reference as 'state'

    const reactiveGreetHero = `Hello ${state.firstName} ${state.lastName} a.k.a ${state.heroName}`;

    // When to use What?
    // -> 1. use ref function when dealing with primitive type like 'String', 'boolean', number and so on as reactive only accept an object
    // -> 2. when we have lot of primitive types but they all seem logically related the you can use reactive

    return {
      c_firstName,
      c_lastName,
      c_heroName,
      greet,
      greetHero,
      // and we will return that reactive reference
      state,
      reactiveGreetHero,
    };
  },
  data() {
    return {
      // NOTE: data option internally uses reactive function
      o_firstName: "Bruce",
      o_lastName: "Wayne",
      o_heroName: "Batman",
    };
  },
};
</script>

<style></style>
