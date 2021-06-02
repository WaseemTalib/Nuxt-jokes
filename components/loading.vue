<template lang="html">
   <section class="loadingSection">
      <div id="outline">
        <div class="circle"></div>
      </div>
    </section>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style scoped>
.loadingSection {
  display: block;
  width: 200px;
  height: 200px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  position: relative;
  margin: 0 auto;
}

#outline {
  width: 70px;
  height: 70px;
  margin: 55px auto;
}
.circle {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border-top: 3px solid rgba(124, 124, 124, 0.8);
  border-right: 3px solid rgba(124, 124, 124, 0.8);
  border-bottom: 3px solid rgba(124, 124, 124, 0.8);
  border-left: 6px solid #333;
  -webkit-animation: circle 2s infinite linear;
  animation: circle 2s infinite linear;
}

@-webkit-keyframes circle {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes circle {
  100% {
    transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>