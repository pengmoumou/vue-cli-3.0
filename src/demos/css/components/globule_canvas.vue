<template>
  <div class="globule-main">
    <canvas id="globule">
      <p>{{$t('error.canvas')}}</p>
    </canvas>
  </div>
</template>
<script>
  export default {
    name: "globule_canvas",
    data() {
      return {
        globule_canvas: null,
        globule_content: null,
        circleArr: [],
        w: null,
        h: null
      };
    },
    mounted() {
      let that = this;
      that.globule_canvas = document.getElementById("globule");
      that.globule_content = that.globule_canvas.getContext("2d");
      that.w = that.globule_canvas.width = that.globule_canvas.offsetWidth;
      that.h = that.globule_canvas.height = that.globule_canvas.offsetHeight;
      //   console.log("width" + that.w + "height" + that.h);
      //圆形类
      function Circle(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        // 颜色的取值范围
        this.color =
          "rgb(" +
          (parseInt(Math.random() * 240) + 9) +
          "," +
          (parseInt(Math.random() * 220) + 18) +
          ",203)";
        //随机方向
        this.dx = Math.random() * 12 - 7;
        this.dy = Math.random() * 12 - 7;
        //往数组中push自己
        that.circleArr.push(this);
      }
      //渲染
      Circle.prototype.render = function(ctx) {
        //新建一条路径
        ctx.beginPath();
        //创建一个圆
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        //设置样式颜色
        ctx.fillStyle = this.color;
        //通过填充路径的内容区域生成实心的图形
        ctx.fill();
      };
      //更新
      Circle.prototype.update = function() {
        this.x += this.dx;
        this.y += this.dy;
        this.r--;
        if (this.r < 0) {
          for (var i = 0; i < that.circleArr.length; i++) {
            if (that.circleArr[i] === this) {
              that.circleArr.splice(i, 1);
            }
          }
          return false;
        }
        return true;
      };
      //鼠标移动事件
      that.globule_canvas.onmousemove = function(event) {
        // console.log(event);
        new Circle(event.offsetX, event.offsetY, 30, "orange");
      };
      //设置定时器每20毫秒更新和渲染
      setInterval(function() {
        that.globule_content.clearRect(0, 0, that.w, that.h);
        for (var i = 0; i < that.circleArr.length; i++) {
          that.circleArr[i].update() &&
            that.circleArr[i].render(that.globule_content);
        }
      }, 20);
    },
    methods: {}
  };
</script>

<style lang="scss">
  .globule-main {
    canvas {
      display: block;
      width: 100%;
      height: 600px;
    }
  }
</style>
