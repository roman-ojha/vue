<template>
  <h1>Name - {{ name }}</h1>
  <button @click="showPopup = true">Show Popup</button>
  <!-- so when we will click button the below 'PopupVue' component will get render -->
  <PopupVue
    v-show="showPopup"
    @close="
      showPopup = false;
      name = 'NaN';
    "
  />
  <!-- now in parent component we have to listen the event that is emitting by child component for that we use event binding and in this case we are binding custom event called 'close' -->
  <!-- so at close event we want to assign 'showPopup' to false -->

  <PopupVue v-show="showPopup" @close="closePopup" />
  <!-- but we will call the method whenever 'close' event will get emit -->
</template>

<script>
import PopupVue from "./components/Popup.vue";
export default {
  name: "App",
  components: {
    PopupVue,
  },
  data() {
    return {
      name: "NaN",
      showPopup: false,
      // render 'PopupVue' component only when 'showPopup' is true
    };
  },
  methods: {
    closePopup(name) {
      // and this function automatically receive the data that is send by the child component after emitting the event
      this.showPopup = false;
      this.name = name;
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
