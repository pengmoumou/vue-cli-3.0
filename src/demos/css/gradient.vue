<template>
  <div class="gradient-main">
    <div class="box-content box-mt flex-box">
      <div class="gradient-box">
        <img src="@a/css/spongeBob.png">
      </div>
    </div>
    <div class="box-content box-mt demo-box">

    </div>
  </div>
</template>
<script>
  export default {
    name: "css_gradient",
    data() {
      return {};
    }
  };
</script>

<style lang="scss">
  .gradient-main {
    .gradient-box {
      margin: 20px;
      width: 200px;
      height: 200px;
      background: linear-gradient(
        45deg,
        #151e7e,
        #0b40a0,
        #0575c2,
        #0f9bbf,
        #5bcab2,
        #78d4a1
      );
      img {
        width: 100px;
        height: 100px;
        margin: 50px;
      }
    }
  }
</style>
