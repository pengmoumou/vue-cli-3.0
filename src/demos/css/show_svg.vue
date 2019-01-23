<template>
  <div class="svg-main">
    <div class="box-content box-mt flex-box">
      <!-- background -->
      <div class="svg-box svg-box1"></div>
      <div class="svg-box svg-box2"></div>
      <div class="svg-box svg-box3"></div>
      <div class="svg-box svg-box4"></div>
    </div>
    <div class="box-content box-mt flex-box">
      <!-- img -->
      <img src="@a/css/demo.svg">
      <img src="@a/css/AIWEDO LOGO.svg">
      <img src="@a/css/logo_ball.svg">
      <img src="@a/css/logo_ball.1.svg">
    </div>
  </div>
</template>
<script>
  export default {
    name: "css_svg",
    data() {
      return {};
    },
    methods: {}
  };
</script>

<style lang="scss">
  .svg-main {
    .svg-box,
    img {
      width: 200px;
      height: 200px;
      border: $theme-color 1px solid;
      display: block;
    }
    .svg-box1 {
      //svg中的小球不显示，由于小球是用div画的，不是svg中的标签
      background: url("~@a/css/demo.svg") no-repeat center;
    }
    .svg-box2 {
      //logo图像
      background: url("~@a/css/AIWEDO LOGO.svg") no-repeat center;
    }
    .svg-box3 {
      //svg中的小球不显示，由于小球是用div画的，不是svg中的标签
      background: url("~@a/css/logo_ball.svg") no-repeat center;
    }
    .svg-box4 {
      background: url("~@a/css/logo_ball.1.svg") no-repeat center;
    }
  }
</style>
