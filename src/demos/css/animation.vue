<template>
  <div class="animation-main">
    <div class="box-content box-mt demo-box">
      <div class="moving-box"></div>
    </div>
    <div class="box-content box-mt demo-box">

    </div>
  </div>
</template>
<script>
  export default {
    name: "demo_animation",
    data() {
      return {

      };
    }
  };
</script>

<style lang="scss">
  .animation-main {
    .moving-box {
      width: 50px;
      height: 50px;
      background: $theme-color;
      animation: mbox 5s ease 0s infinite alternate;
    }
  }
  @keyframes mbox {
    0% {
      margin-left: 0;
      margin-top: 0;
    }
    25% {
      margin-left: 100px;
      margin-top: 0;
    }
    50% {
      margin-left: 100px;
      margin-top: 50px;
    }
    75% {
      margin-left: 0;
      margin-top: 50px;
    }
    100% {
      margin-left: 0;
      margin-top: 0;
    }
    // from {
    //   margin-left: 0;
    // }
    // to {
    //   margin-left: 100px;
    // }
  }
</style>
