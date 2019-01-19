<template>
  <div class="foot-demo">
    <div class="bottom-text">Copyright © 2019 All Rights Reserved Powered by
      Pengmoumou</div>
  </div>
</template>
<script>
  export default {
    name: "foot_demo",
    mounted() {
      this.getHeight();
      window.addEventListener("resize", this.getHeight);
    },
    beforeDestroy() {
      window.removeEventListener("resize", this.getHeight);
    },
    // mounted() {
    //   //使用nextTick为了保证dom元素都已经渲染完毕
    //   this.$nextTick(() => {
    //     //向父组件传值
    //     this.$emit("eventGetHeight", this.$el.offsetHeight);
    //   });
    //   const that = this;
    //   //窗口宽度发生变化后，有可能改变底部组件的高度
    //   window.onresize = function windowResize() {
    //     console.log("footerHeight " + that.$el.offsetHeight);
    //     that.$emit("eventGetHeight", that.$el.offsetHeight);
    //   };
    // }
    methods: {
      getHeight() {
        // console.log("footerHeight " + this.$el.offsetHeight);
        this.$emit("eventGetHeight", this.$el.offsetHeight);
      }
    }
  };
</script>

<style lang="scss">
  .foot-demo {
    width: 100%;
    background: $white-color;
    .bottom-text {
      text-align: center;
      color: $theme-color;
      padding: 10px 0;
      font-size: 0.8em;
    }
  }
</style>
