<template>
  <h2 v-for="(name, index) in names" :key="index">{{ index }} {{ name }}</h2>
  <h2 v-for="(nameObj, index) in fullNames" :key="index">
    {{ nameObj.first }} {{ nameObj.last }}
  </h2>
  <div v-for="actor in actors" :key="actor.name">
    <h1>Name: {{ actor.name }}</h1>
    <h2>Movies</h2>
    <h2 v-for="movie in actor.movies" :key="movie">{{ movie }}</h2>
  </div>
  <h2 v-for="value in myInfo" :key="value">{{ value }}</h2>
  <h2 v-for="(value, key, index) in myInfo" :key="value">
    {{ index }} {{ key }} {{ value }}
  </h2>
</template>
<script>
export default {
  data() {
    return {
      names: ["Bruce", "Clark", "Diana"],
      fullNames: [
        { first: "Bruce", last: "Wayne" },
        { first: "Clark", last: "Kent" },
        { first: "Princess", last: "Diana" },
      ],
      actors: [
        {
          name: "Christian Bale",
          movies: ["Batman", "The Prestige"],
        },
        {
          name: "Di Caprio",
          movies: ["Titanic", "Inception"],
        },
      ],
      myInfo: {
        name: "Vishwas",
        channel: "CodeVolution",
        course: "Vue 3",
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
