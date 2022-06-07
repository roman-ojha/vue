<template>
  <button @click="activeTab = 'TabAVue'">Tab A</button>
  <button @click="activeTab = 'TabBVue'">Tab B</button>
  <button @click="activeTab = 'TabCVue'">Tab C</button>
  <!-- so now if we will press the button 'TabC' and go to 'TabCVue' component where we had added the input filed child is assign to the data property 'name' if we will write some value on that input file and tab to other Tabs and again goes to 'TabC' the value that we have previously enter will no longer existed -->
  <!-- this is because each time you switch to a new tab vue creates a new instance of the active tab component -->
  <!-- so 'TabCVue' component will get recreated -->
  <!-- But sometimes we want component instance to be cached once they are created -->
  <!-- for that purpose we use another vue specific element called 'keep-alive' -->
  <keep-alive>
    <component :is="activeTab" />
  </keep-alive>
</template>

<script>
import TabAVue from "./components/TabA.vue";
import TabBVue from "./components/TabB.vue";
import TabCVue from "./components/TabC.vue";
export default {
  name: "App",
  components: {
    TabAVue,
    TabBVue,
    TabCVue,
  },
  data() {
    return {
      activeTab: "TabAVue",
    };
  },
};
</script>

<style scoped>
h4 {
  color: orange;
}
</style>
