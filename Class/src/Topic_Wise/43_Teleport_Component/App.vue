<template>
  <!-- Teleport allow us to move element from one place to another -->
  <!-- It allow you to define component in one place and render it in a different position in the dom tree even outside the scope of the vue application -->
  <!-- ex: we know that all the tree component will get compile and placed inside #app id element which is defined in public/index.html file -->
  <!-- but using teleport component we can break out of this dom tree -->

  <!-- Steps 1: firstly we have to add a dom node falls outside of the root element "#app" -->
  <!-- element: <div id="" portal-root></div> -->
  <!-- Step 2: create child component "Portal" -->
  <!-- Step 3: we will wrap 'PortalVue' component to 'Teleport' component -->
  <teleport to="#portal-root">
    <!-- now here in 'to' attribute we have to specify in which id named element we want to place the given content -->
    <PortalVue />
  </teleport>
  <!-- Why we need teleport component:
        -> https://youtu.be/KOmQ8a2EOFA?list=PLC3y8-rFHvwgeQIfSDtEGVvvSEPDkL_1f&t=281
        -> https://codesandbox.io/s/vishwas-vue-teleport-4z93t?file=/src/App.vue
  -->
</template>

<script>
import PortalVue from "./components/Portal.vue";
export default {
  name: "App",
  components: {
    PortalVue,
  },
  data() {
    return {
      activeTab: "TabAVue",
    };
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
