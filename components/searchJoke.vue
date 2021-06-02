<template>
  <form class="form" @submit.prevent="onSubmit">
    <input
      class="searchJoke"
      type="text"
      v-model="text"
      placeholder="Search here..."
    />
    <button class="btn third">Search</button>
  </form>
</template>
<script>

export default {
  name: "SearchJoke",
  methods: {
  },
  data() {
    return {
      text: "",
    };
  },
  methods: {
    async onSubmit() {
    this.$store.dispatch("jokes/setLoading", true);
      await this.$store.dispatch("jokes/searchJoke", this.text);
    this.$store.dispatch("jokes/setLoading", false);
      this.text = "";
    },
  },
};
</script>
<style scoped>
.form {
  text-align: center;
  margin: 20px 0;
}
.btn {
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border: 2px solid #e74c3c;
  border-radius: 0.6em;
  color: #e74c3c;
  cursor: pointer;
  display: flex;
  align-self: center;
  font-size: 13px;
  font-weight: 400;
  line-height: 1;
  margin: 20px;
  padding: 10px 20px;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  margin: 10px auto;
}
.btn:hover,
.btn:focus {
  color: #fff;
  outline: 0;
}

.third {
  border-color: #3498db;
  color: #fff;
  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
  transition: all 150ms ease-in-out;
}
.third:hover {
  color: #222;
  box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
}

.searchJoke {
  border: 1px solid #555;
  border-radius: 5px;
  padding: 8px;
}
.searchJoke[aria-invalid="true"] {
  border-color: red;
}
.searchJoke[aria-invalid="false"] {
  border-color: green;
}
</style>