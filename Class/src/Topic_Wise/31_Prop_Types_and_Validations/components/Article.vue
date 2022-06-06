<template>
  <h2>Article component</h2>
  <h2>{{ title }}</h2>
  <h2>Likes - {{ likes }}</h2>
  <h2>Published - {{ isPublished ? "Yes" : "No" }}</h2>
</template>

<script>
export default {
  name: "ArticleComponent",
  // previously we have see how we can accept props using array but in that case we would not know the type of that props that might not be the best practice for you bigger project so rather then using array vue allow us to specify props as and object
  props: {
    //   <prop_name> : <prop_type>
    title: String,
    // we can also specify does props is required or not for that we have to change <prop_type> to object
    likes: {
      type: Number,
      required: true,
    },
    // in props you can set default value as well
    isPublished: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
};
</script>

<style scoped></style>
