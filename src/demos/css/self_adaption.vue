<template>
  <div class="self_adaption-main">
    <div class="box-content box-mt demo-box box-a">
      <div class="left">a column-count: 2;</div>
      <div class="right">width:calc(100vw - 100px);</div>
    </div>
    <div class="box-content box-mt demo-box box-b">
      <div class="left">b column-count: 2</div>
      <div class="right">width:calc(100% - 100px);</div>
    </div>
    <div class="box-content box-mt demo-box flex-box">
      <div class="left">flex</div>
      <div class="right">未定义宽度</div>
    </div>
    <div class="box-content box-mt demo-box box-c">
      <div class="left">c justify-content: space-between;</div>
      <div class="right">width:100%;</div>
    </div>
    <div class="box-content box-mt demo-box box-d">
      <div class="left">d justify-content: space-between;</div>
      <div class="right">width:calc(100vw - 100px);</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "css_self_adaption",
    data() {
      return {};
    },
    mounted() {},
    methods: {}
  };
</script>

<style lang="scss">
  .self_adaption-main {
    .left {
      background: $light-color;
      width: 100px;
    }
    .right {
      background: $theme-color;
    }
    .box-a,
    .box-b {
      column-count: 2;
    }
    .box-a .right,
    .box-d .right {
      width: calc(100vw - 100px);
    }
    .box-b .right {
      width: calc(100% - 100px);
    }
    .box-c,
    .box-d {
      display: flex;
      justify-content: space-between;
    }
    .box-c .right {
      width: 100%;
    }
  }
</style>
