<template>
  <!-- Step 1: add special attribute called 'ref' -->
  <!-- ref is an attribute in vue which is use to register a reference to and html element -->
  <input type="text" placeholder="username" ref="inputRef" />
  <!-- if ref attribute is used in html element then reference will be that element  -->
  <!-- and if the ref attribute is user on a child component then the reference will be that component instance -->
  <PostListVue ref="postListRef" />
</template>

<script>
import PostListVue from "./PostList.vue";
export default {
  name: "TemplateRef",
  // Step 2: On Lifecycle method, focus element using ref
  mounted() {
    console.log(this.$refs.postListRef);
    this.$refs.inputRef.focus();
    // like this we can access the reference element
  },
  components: {
    PostListVue,
  },
};
</script>

<style></style>
