<template>
  <div class="three-main">
    <div class="box-content box-mt demo-box">
      <three-int></three-int>
    </div>
    <div class="box-content box-mt demo-box">
      <three-one></three-one>
    </div>
  </div>
</template>
<script>
  import ThreeInt from "./components/three_int";
  import ThreeOne from "./components/three_one";
  export default {
    name: "frame_three",
    data() {
      return {};
    },
    components: {
      ThreeInt,
      ThreeOne
    },
    mounted() {},
    methods: {}
  };
</script>

<style lang="scss">
  .three-main {
  }
</style>
