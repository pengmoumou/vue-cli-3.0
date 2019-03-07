<template>
  <div class="circle-mouse-main">
    <canvas id="circle-mouse">
      <p>{{$t('error.canvas')}}</p>
    </canvas>
    <div class="game-box">
      {{$t('text.circle_num')}}<input v-model="circle_num" type="text"
        :placeholder="$t('placeholder.circle_num')">
      <button class="btn" @click="init">{{$t('btn.restart')}}</button>
    </div>
  </div>
</template>
<script>
  import Circle from "../js/circle.js";
  export default {
    name: "circle_mouse_canvas",
    data() {
      return {
        canvas_circle: null,
        content_circle: null,
        circles: [],
        w: null,
        h: null,
        current_circle: null,
        circle_num: 10
      };
    },
    mounted() {
      //更新页面用requestAnimationFrame替代setTimeout
      window.requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;
      let that = this;
      that.canvas_circle = document.getElementById("circle-mouse");
      that.content_circle = that.canvas_circle.getContext("2d");
      that.w = that.canvas_circle.width = that.canvas_circle.offsetWidth;
      that.h = that.canvas_circle.height = that.canvas_circle.offsetHeight;
      that.current_circle = new Circle(0, 0);
      // console.log(that.current_circle);
      window.addEventListener("load", that.init());
      // window.onmousemove = function(e) {
      that.canvas_circle.onmousemove = function(e) {
        e = e || window.event;
        // console.log(e);
        that.current_circle.x = e.offsetX;
        that.current_circle.y = e.offsetY;
      };
      // window.onmouseout = function() {
      that.canvas_circle.onmouseout = function() {
        that.current_circle.x = null;
        that.current_circle.y = null;
      };
    },
    methods: {
      init() {
        if (
          !Number(this.circle_num) ||
          Number(this.circle_num) > 100 ||
          Number(this.circle_num < 1)
        ) {
          this.circle_num = "";
          alert(this.$t("placeholder.circle_num"));
          console.log("Restart failure");
          return;
        }
        this.circles = [];
        for (let i = 0; i < Number(this.circle_num); i++) {
          this.circles.push(
            new Circle(Math.random() * this.w, Math.random() * this.h)
          );
        }
        this.draw();
      },
      draw() {
        this.content_circle.clearRect(0, 0, this.w, this.h);
        for (let i = 0; i < this.circles.length; i++) {
          this.circles[i].move(this.w, this.h);
          this.circles[i].drawCircle(this.content_circle);
          for (let j = i + 1; j < this.circles.length; j++) {
            this.circles[i].drawLine(this.content_circle, this.circles[j]);
          }
        }
        if (this.current_circle.x) {
          this.drawMouse(this.content_circle);
          for (let k = 1; k < this.circles.length; k++) {
            this.current_circle.drawLine(this.content_circle, this.circles[k]);
          }
        }
        //告诉浏览器您希望执行动画并请求浏览器在下一次重绘之前调用指定的回调函数来更新动画
        requestAnimationFrame(this.draw);
      },
      drawMouse(ctx) {
        ctx.beginPath();
        //注释内容为鼠标焦点的地方圆圈半径变化
        //this.current_circle.r = (this.current_circle.r < 14 && this.r > 1) ? this.current_circle.r + (Math.random() * 2 - 1) : 2;
        this.current_circle.r = 8;
        ctx.arc(
          this.current_circle.x,
          this.current_circle.y,
          this.current_circle.r,
          0,
          360
        );
        ctx.closePath();
        //ctx.fillStyle = 'rgba(0,0,0,' + (parseInt(Math.random() * 100) / 100) + ')'
        ctx.fillStyle = "rgba(255, 77, 54, 0.6)";
        ctx.fill();
      }
    }
  };
</script>

<style lang="scss">
  .circle-mouse-main {
    canvas {
      display: block;
      width: 100%;
      height: 600px;
    }
    .game-box {
      text-align: center;
      padding: 50px 0;
      input {
        outline: none;
        margin-left: 50px;
        border: solid 1px $theme-color;
        padding: 5px 20px;
        width: 200px;
      }
    }
  }
</style>
