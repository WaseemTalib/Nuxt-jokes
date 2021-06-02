<template>
  <div class="nav">
    <h2>Vue</h2>
    <div class="navLinks">
      <nuxt-link class="navLink" to="/">Home</nuxt-link>
      <nuxt-link class="navLink" to="/jokes">Jokes</nuxt-link>
      <nuxt-link class="navLink" to="/contact">Contact</nuxt-link>
      <nuxt-link class="navLink" to="/loading">Loading</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.nav {
  display: flex;
  align-content: center;
  align-items: center;
  padding: 10px 50px;
  border-bottom: 2px dotted lightblue;
  /* background-color: cadetblue; */
}
.nav > h2 {
  color: #666;
  font-size: 40px;
}
.navLinks {
  margin-left: auto;
}
.navLink {
  padding: 0 20px;
  color: #888;
  font-size: 20px;
  text-decoration: none;
  transition: all 0.5s;
}
.navLink:hover {
  color: #000;
  font-size: 21px;
}
</style>