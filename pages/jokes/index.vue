<template>
  <div>
    <SearchJoke />
    <div class="jokeWrapper">
      <Joke
        v-for="joke in this.$store.getters['jokes/allJokes']"
        :key="joke.id"
        :joke="joke.joke"
        :id="joke.id"
      />
    </div>
    <Loading v-if="this.$store.getters['jokes/isLoading']" />
  </div>
</template>

<script>
import Joke from "../../components/joke";
import SearchJoke from "../../components/searchJoke";
import Loading from "../../components/Loading";
export default {
  name: "jokes",
  components: {
    Joke,
    SearchJoke,
    Loading,
  },
  async created() {
    console.log("created");
    this.$store.dispatch("jokes/setLoading", true);
    await this.$store.dispatch("jokes/getJokes");
    this.$store.dispatch("jokes/setLoading", false);
    console.log(this.$nuxt.context.store);
  },
  mounted() {
    console.log("mounted");
  },
  beforeCreate() {
    console.log("before created");
  },
  beforeMount() {
    console.log("before mount");
  },
  updated() {
    console.log("updated");
  },
  beforeUpdate() {
    console.log("before update");
  },
  destroyed() {
    console.log("destroy");
  },
  beforeDestroy() {
    console.log("before destroy");
  },
    css: ['~assets/css/index.css'],
};

</script>

<style scoped>

</style>
