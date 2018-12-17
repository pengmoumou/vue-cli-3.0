<template>
  <div class="animation-main">
    <div class="box-content box-mt animation-box">
      <div class="moving-box"></div>
    </div>
    <div class="box-content box-mt animation-box">

    </div>
  </div>
</template>
<script>
  export default {
    name: "demo_animation",
    data() {
      return {
        isShow: 0
      };
    }
  };
</script>

<style lang="scss">
  .animation-main {
    .animation-box {
      min-height: 100px;
      padding: 20px;
      display: flex;
      .moving-box {
        width: 50px;
        height: 50px;
        background: $theme-color;
        animation: mbox 5s ease 0s infinite alternate;
      }
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
