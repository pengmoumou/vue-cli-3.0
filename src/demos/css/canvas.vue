<template>
  <div class="canvas-main">
    <div class="box-content box-mt">
      <snake-canvas></snake-canvas>
    </div>
    <div class="box-content box-mt">
      <circle-mouse></circle-mouse>
    </div>
    <div class="box-content box-mt demo-box">
      <canvas id="rect" width="500" height="500">
        <p>{{$t('error.canvas')}}</p>
      </canvas>
    </div>
  </div>
</template>
<script>
  import SnakeCanvas from "./components/snake_canvas";
  import CircleMouse from "./components/circle_mouse_canvas";
  export default {
    name: "demo_canvas",
    data() {
      return {};
    },
    components: {
      SnakeCanvas,
      CircleMouse
    },
    mounted() {},
    methods: {}
  };
</script>

<style lang="scss">
  .canvas-main {
  }
</style>
