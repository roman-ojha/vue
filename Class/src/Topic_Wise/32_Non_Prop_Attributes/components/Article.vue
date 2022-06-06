<template>
  <div>
    <!-- the id attribute in default will be added to the root element of 'Article' which is in this case 'div' but if root element doesn't exist on custom components then id will not get apply on any element-->
    <h2>Article component</h2>
    <h2 v-bind="$attrs">{{ title }}</h2>
    <!-- but that is the default behavior of vue but sometimes you don't want vue to automatically apply a non prop attribute on a root dom node instead you would want them to be apply on a different element inside root node -->
    <!-- in that case we are using v-bind directive to apply non prop attribute that we have passed -->
    <h2>Likes - {{ likes }}</h2>
    <h2>Published - {{ isPublished ? "Yes" : "No" }}</h2>
  </div>
</template>

<script>
export default {
  name: "ArticleComponent",
  props: {
    title: String,
    likes: {
      type: Number,
      required: true,
    },
    isPublished: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  // if we want to pass non prop attribute on child element in this case 'h2' tag of title but not of root element in this case 'div' then we have to pass
  inheritAttrs: false,
};
</script>

<style scoped></style>
