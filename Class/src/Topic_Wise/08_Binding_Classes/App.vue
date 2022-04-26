<template>
  <h2 v-bind:id="headingId">Heading</h2>
  <button v-bind:disabled="isDisabled">Bind</button>
  <h2 class="underline">UnderLine Text</h2>

  <h2 v-bind:class="status" class="underline">Status</h2>
  <!-- now here we are binding class to the 'status' data -->
  <!-- We can also add the html normal class as well for the default class -->
  <!-- You can bind class when we want to modified something dynamically -->

  <h2 v-bind:class="isPromoted && 'promoted'">Promoted Movie</h2>
  <!-- now here we can also use && operator  -->
  <!-- so if 'isPromoted' is true then 'promoted' class will get apply -->
  <!-- else if 'isPromoted' is false then 'promoted' class will note get apply -->

  <h2 v-bind:class="isSoldOut ? 'sold-out' : 'new'">SoldOut? movie</h2>
  <!-- now here we can see that we can use ternary operator to change the class name dynamically -->

  <!-- bind multiple classes -->
  <h2 v-bind:class="['new', 'promoted']">Newly promoted movie</h2>
  <h2 v-bind:class="[isPromoted && 'promoted', isSoldOut ? 'sold-out' : 'new']">
    Array conditional movie
  </h2>

  <h2
    v-bind:class="{
      // {<the_class_that_you_want_to_apply>:<condition_for_the_class_to_be_applied}
      promoted: isPromoted,
      new: !isSoldOut,
      'sold-out': isSoldOut,
    }"
  >
    Object conditional Movie
  </h2>
</template>

<script>
export default {
  data() {
    return {
      headingId: "heading",
      isDisabled: true,
      status: "danger",
      isPromoted: false,
      isSoldOut: true,
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
