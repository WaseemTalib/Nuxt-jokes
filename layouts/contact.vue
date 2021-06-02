<template >
  <div>
    <Header />
    <Nuxt />
    <h3>This page is on a different layout</h3>
  </div>
</template>
<script>
import Header from "../components/header";
export default {
  components: {
    Header,
  },
};
</script>