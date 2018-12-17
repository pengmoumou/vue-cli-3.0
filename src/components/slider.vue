<template>
  <div class="slider-main" @mousemove="mousemove($event)">
    <div class="line">
      <div class="mask" :style="'width:'+maskWidth+'px'"></div>
      <div class="slider" :style="'left:'+maskWidth+'px'">
        <div class="tip">
          <slot name="default"></slot>
        </div>
        <div class="bar" @mousedown="mousedown($event)"></div>
      </div>
    </div>
    <div class="slot-box">
      <slot name="left"></slot>
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
  var isMouseDown = false;
  document.addEventListener("mouseup", function() {
    isMouseDown = false;
    // console.log("up");
  });
  export default {
    name: "slider",
    props: ["min", "max", "value"],
    data() {
      return {
        // isMouseDown: false,
        offsetX: 0,
        maskWidth: 0
      };
    },
    created() {
      this.maskWidth = this.unitVal * this.preVal;
    },
    mounted() {},
    computed: {
      unitVal() {
        return 200 / (this.max - this.min);
      },
      preVal() {
        return this.value - this.min;
      }
    },
    watch: {
      maskWidth() {
        if (this.maskWidth <= 0) {
          this.maskWidth = 0;
        }
        if (this.maskWidth >= 200) {
          this.maskWidth = 200;
        }
        let value = Math.ceil(this.maskWidth / this.unitVal + this.min);
        this.$emit("input", value);
      }
    },
    methods: {
      mouseup() {
        isMouseDown = false;
        // console.log("up");
      },
      mousedown(event) {
        isMouseDown = true;
        this.offsetX = event.x;
        // console.log("down");
        // console.log("downX" + event.x);
      },
      mousemove(event) {
        if (isMouseDown && this.maskWidth <= 200 && this.maskWidth >= 0) {
          let changX = event.x - this.offsetX;
          this.offsetX = event.x;
          // console.log("preWidth:" + this.maskWidth);
          // console.log("changX:" + changX);
          this.maskWidth = this.maskWidth + changX;
        }
      }
    }
  };
</script>

<style lang="scss">
  .slider-main {
    // position: relative;
    .line {
      height: 5px;
      width: 200px;
      margin: 10px;
      background: $light-color;
      position: relative;
      border-radius: 3px;
      .mask {
        width: 0;
        height: 5px;
        position: absolute;
        left: 0;
        top: 0;
        background: $theme-color;
      }
      .slider {
        width: 100%;
        color: $theme-color;
        position: absolute;
        left: 0;
        top: -2.5px;
        cursor: pointer;
        .tip {
          width: 100%;
          position: absolute;
          top: -17.5px;
        }
        .bar {
          width: 5px;
          height: 10px;
          background: $theme-color;
        }
      }
    }
    .slot-box {
      // position: absolute;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: $theme-color;
    }
  }
</style>
