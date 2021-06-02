<template>
  <div>
    <Header />
    <div class="singleJokeContainer">
    <nuxt-link to="/jokes">Back to Jokes</nuxt-link>
    <h3>{{ this.joke }}</h3>
    <hr/>
    <p><small><b>Joke ID: </b></small>{{ $route.params.id }}</p>
  </div>
  </div>
</template>

<script>
import Header from "../../../components/header";
import axios from "axios";

export default {
  components: {
    Header,
  },
  data() {
    return {
      joke: "",
    };
  },
  async created() {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    try {
        const res = await axios.get(`https://icanhazdadjoke.com/j/${this.$route.params.id}`, config);
        this.joke = res.data.joke;
        
    } catch (err) {
        console.log(err)
    }
  },
};
</script>

<style scoped>
a{
    text-decoration: none;
}
.singleJokeContainer{
    padding: 10px 20px;
}
</style>
