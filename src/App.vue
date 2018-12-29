<template>
  <div id="app">
    <head-comp></head-comp>
    <router-view class="container-box"></router-view>
  </div>
</template>

<script>
  import HeadComp from "@c/head_comp";
  export default {
    name: "app",
    components: {
      HeadComp
    }
  };
</script>

<style lang="scss">
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
