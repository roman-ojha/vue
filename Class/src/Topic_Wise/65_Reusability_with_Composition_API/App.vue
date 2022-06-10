<template>
  <!-- Increment value Using Options API mixins -->
  <h2>Increment value Using Options API mixins</h2>
  <ClickCounterO />
  <HoverCounterO />
  <!-- 
    -> the way Option API handle mixing work fine but it have some issues 
    -> and that is mixins are conflict prone
    -> since property from each component are merge into the component, you have to know about every option in the mixin to insure you component doesn't any naming conflict
    -> we also would not know by looking at component property where they are coming from
    -> and also reusability is present but limited, we can't pass any parameter to mixins to change it's logic which reduces it's flexibility in terms of logic abstraction
    -> In this case composition API will solve this kind of limitation that Options API mixins have
  -->
  <!-- Increment Value Using Composition API mixins -->
  <h2>Increment Value Using Composition API mixins</h2>
  <ClickCounterC />
  <HoverCounterC />
  <!-- to create reusability functionality create folder called 'composables' -->
  <!-- the convention for file is to use 'use<Functionality>' -->
</template>

<script>
import ClickCounterO from "./components/ClickCounterO.vue";
import HoverCounterO from "./components/HoverCounterO.vue";
import ClickCounterC from "./components/ClickCounterC.vue";
import HoverCounterC from "./components/HoverCounterC.vue";
export default {
  name: "App",
  setup() {},
  components: {
    ClickCounterO,
    HoverCounterO,
    ClickCounterC,
    HoverCounterC,
  },
  data() {
    return {};
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
