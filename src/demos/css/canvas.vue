<template>
  <div class="canvas-main">
    <div class="box-content box-mt demo-box">
      <canvas id="rect" width="500" height="500">
        <p>{{$t('error.canvas')}}</p>
      </canvas>
    </div>
    <div class="box-content box-mt demo-box">

    </div>
  </div>
</template>
<script>
  export default {
    name: "demo_canvas",
    data() {
      return {};
    }
  };
</script>

<style lang="scss">
  .canvas-main {
  }
</style>
