<template>
  <div class="canvas-main">
    <div class="box-content box-mt">
      <snake-canvas></snake-canvas>
    </div>
    <div class="box-content box-mt">
      <circle-mouse></circle-mouse>
    </div>
    <div class="box-content box-mt">
      <globule-canvas></globule-canvas>
    </div>
    <div class="box-content box-mt">
      <brush-canvas></brush-canvas>
    </div>
    <div class="box-content box-mt demo-box">
      <gobang-canvas></gobang-canvas>
    </div>
    <div class="box-content box-mt demo-box">
      <pac-man-canvas></pac-man-canvas>
    </div>
  </div>
</template>
<script>
  import SnakeCanvas from "./components/snake_canvas";
  import CircleMouse from "./components/circle_mouse_canvas";
  import GlobuleCanvas from "./components/globule_canvas";
  import BrushCanvas from "./components/brush_canvas";
  import GobangCanvas from "./components/gobang_canvas";
  import PacManCanvas from "./components/pac_man_canvas";
  export default {
    name: "css_canvas",
    data() {
      return {};
    },
    components: {
      SnakeCanvas,
      CircleMouse,
      GlobuleCanvas,
      BrushCanvas,
      GobangCanvas,
      PacManCanvas
    },
    mounted() {},
    methods: {}
  };
</script>

<style lang="scss">
  .canvas-main {
  }
</style>
