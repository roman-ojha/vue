<template>
  <div>
    <h4>ChildStyles component text</h4>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ChildStyles",
};
</script>

<style scoped>
/* in order to insure the component styles apply only to it's template we need to add 'scoped' attribute on styled tag */
h4 {
  color: olivedrab;
}
</style>
