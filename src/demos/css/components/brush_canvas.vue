<template>
  <div class="brush-main">
    <canvas id="brush" width="500" height="500">
      <p>{{$t('error.canvas')}}</p>
    </canvas>
    <button class="btn" @click="onClear">清空</button>
  </div>
</template>
<script>
  import WriteFont from "../js/writefont";
  export default {
    name: "brush_canvas",
    data() {
      return {
        writeCanvas: null
      };
    },
    mounted() {
      this.writeCanvas = new WriteFont("brush", {
        borderWidth: 10,
        borderColor: "#ff6666"
      });
    },
    methods: {
      onClear() {
        this.writeCanvas.option.control.clearCanvas();
      }
    }
  };
</script>

<style lang="scss">
  .brush-main {
  }
</style>
