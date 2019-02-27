<template>
  <div class="gobang-main">
    <canvas id="gobang" width="500" height="500">
      <p>{{$t('error.canvas')}}</p>
    </canvas>
  </div>
</template>
<script>
  import "../js/gobang.js";
  export default {
    name: "gobang_canvas",
    data() {
      return {};
    },
    mounted() {},
    methods: {}
  };
</script>

<style lang="scss">
  .gobang-main {
    background: #ccc;
    canvas {
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -225px 0 0 -225px;
      background: #fff;
      box-shadow: 5px 5px 100px #aaa;
    }
  }
</style>