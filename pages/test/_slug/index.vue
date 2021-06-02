<template>
  <div class="container">
    <div>I am id {{ id }}</div>
    <div>I am slug {{ slug }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: "",
      slug: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.slug = this.$route.params.slug;
  },
};
</script>