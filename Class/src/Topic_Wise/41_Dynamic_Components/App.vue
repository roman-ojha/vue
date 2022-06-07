<template>
  <!-- Example: as show in 'Example' image we want to display 'Tab A' content after clicking on 'Tab A' button and same as for other Tabs as well -->
  <button @click="activeTab = 'TabAVue'">Tab A</button>
  <button @click="activeTab = 'TabBVue'">Tab B</button>
  <button @click="activeTab = 'TabCVue'">Tab C</button>

  <TabAVue v-if="activeTab === 'TabAVue'" />
  <TabBVue v-if="activeTab === 'TabBVue'" />
  <TabCVue v-if="activeTab === 'TabCVue'" />
  <!-- here this way is fine if you want 3-4 number of tab/component  -->
  <!-- but if there is a lot more then that then this method might not be good way to go -->
  <!-- for that reason vue provide us the Dynamic component -->

  <!-- Dynamic Component -->
  <button @click="activeTab = 'TabAVue'">Tab A</button>
  <button @click="activeTab = 'TabBVue'">Tab B</button>
  <button @click="activeTab = 'TabCVue'">Tab C</button>
  <!-- here we will include vue specific html tab called component -->
  <!-- the role of this tag is to render vue component -->
  <!-- and the way we inform this tag what component to render is through 'is' attribute -->
  <!-- in this 'is' attribute we will bind the name of the registered component -->
  <component :is="activeTab" />
  <!-- on the right hand side we will assign the 'activeTab' property because it represent the name of individual tab when the button is clicked -->
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
