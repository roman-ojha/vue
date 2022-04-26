<template>
  <!--
   There is two way to bind inline style attribute:
    a) Object syntax
    b) Array syntax
   -->
  <!-- Object syntax -->
  <h2
    v-bind:style="{
      // dynamic value
      color: highlightColor,
      'font-size': headerSize + 'px',
      fontSize: headerSize + 'px',

      // static value
      padding: '20px',
    }"
  >
    Inline Style
  </h2>
  <!-- Bind Style Object -->
  <h2 v-bind:style="headerStyleObject">Style Object</h2>

  <!-- Array syntax -->
  <div v-bind:style="[baseStyleObject, successStyleObject]">Success Style</div>
  <div v-bind:style="[baseStyleObject, dangerStyleObject]">Danger Style</div>
</template>

<script>
export default {
  data() {
    return {
      highlightColor: "orange",
      headerSize: 50,
      headerStyleObject: {
        color: "orange",
        fontSize: "50px",
        padding: "20px",
      },
      baseStyleObject: {
        fontsize: "50px",
        padding: "10px",
      },
      successStyleObject: {
        color: "green",
        backgroundColor: "lightgreen",
        border: "1px solid green",
      },
      dangerStyleObject: {
        color: "darkred",
        backgroundColor: "red",
        border: "1px solid darkred",
      },
    };
  },
};
</script>

<style>
.underline {
  text-decoration: underline;
}

.promoted {
  font-style: italic;
}

.new {
  color: olivedrab;
}

.sold-out {
  color: red;
}
</style>
