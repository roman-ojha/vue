<template>
  <!-- <div class="card">{{ content }}</div> -->
  <div class="card">
    <h2>{{ content }}</h2>
    <slot>
      Default Content
      <!-- now here we can add default content if parent hadn't pass andy slot content -->
    </slot>
  </div>
</template>

<script>
export default {
  name: "CardVue",
  props: ["content"],
};
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgb(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 16px;
  margin-bottom: 20px;
  width: 200px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgb(0, 0, 0, 0.2);
}
</style>
