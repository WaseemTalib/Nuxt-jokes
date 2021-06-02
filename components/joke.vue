<template>
  <nuxt-link :to='"/jokes/" + id'>
    <div class="joke">
      {{ joke }}
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "joke",
  props: ["joke", "id"],
};
</script>

<style scoped>
.joke {
  padding: 1rem;
  border: 1px solid #ccc;
  margin: 1rem 0;
}
a{
    text-decoration: none;
    color: #333;
}
</style>