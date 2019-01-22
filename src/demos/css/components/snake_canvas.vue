<template>
  <div class="snake-main flex-box">
    <canvas id="snake" width="500" height="500">
      <p>{{$t('error.canvas')}}</p>
    </canvas>
    <div class="game-box box-mt">
      <button @click="onGame" class="btn">{{$t(btnVal)}}</button>
      <div class="grade-box box-mt">
        {{$t('text.score')}}:<span class="score">{{gameScore}}</span>
      </div>
      <div class="speed-box box-mt">
        {{$t('text.speed')}}:
        <button @click="changeSpeed(0,200)" class="btn" :class="{'white-btn':speedTab!=0}">{{$t('btn.slowly')}}</button>
        <button @click="changeSpeed(1,100)" class="btn" :class="{'white-btn':speedTab!=1}">{{$t('btn.normal')}}</button>
        <button @click="changeSpeed(2,50)" class="btn" :class="{'white-btn':speedTab!=2}">{{$t('btn.quickly')}}</button>
      </div>
    </div>
  </div>
</template>
<script>
  import Snake from "../js/snake";
  export default {
    name: "snake_canvas",
    data() {
      return {
        snake: new Snake(),
        canvas_snake: null,
        context_snake: null,
        timer: null,
        btnVal: "btn.start",
        speedTab: 1,
        speedVal: 100
      };
    },
    watch: {
      timer() {
        if (!this.timer) {
          console.log("Game Over");
        }
      },
      isOver() {
        if (this.isOver) {
          alert(this.$t("text.end"));
          this.snake = new Snake();
          this.drawSnake();
        }
      }
    },
    computed: {
      isOver() {
        return this.snake.gameOver;
      },
      gameScore() {
        return this.snake.score;
      }
    },
    mounted() {
      this.canvas_snake = document.getElementById("snake");
      this.context_snake = this.canvas_snake.getContext("2d");
      let that = this;
      this.drawSnake();
      //键盘事件，其中的if判定是为了让蛇不能直接掉头
      document.onkeydown = function(e) {
        var ev = e || window.event;
        switch (ev.keyCode) {
          case 37: {
            if (that.snake.direction !== 39) {
              that.snake.direction = 37;
            }
            break;
          }
          case 38: {
            if (that.snake.direction !== 40) {
              that.snake.direction = 38;
            }
            break;
          }
          case 39: {
            if (that.snake.direction !== 37) {
              that.snake.direction = 39;
            }
            break;
          }
          case 40: {
            if (that.snake.direction !== 38) {
              that.snake.direction = 40;
            }
            break;
          }
        }
        if (that.btnVal == "btn.stop") {
          // console.log("btn:" + that.btnVal);
          //将同时阻止页面中所有键盘默认的点击事件
          ev.preventDefault();
        }
      };
    },
    methods: {
      drawSnake() {
        this.context_snake.clearRect(0, 0, 500, 500);
        //画出初始的蛇
        this.snake.draw(this.canvas_snake, this.context_snake);
        this.btnVal = "btn.start";
      },
      onGame() {
        switch (this.btnVal) {
          case "btn.start": {
            this.btnVal = "btn.stop";
            let that = this;
            this.timer = setInterval(function() {
              that.context_snake.clearRect(
                0,
                0,
                that.canvas_snake.width,
                that.canvas_snake.height
              );
              that.snake.move(that.canvas_snake, that.timer);
              that.snake.draw(that.canvas_snake, that.context_snake);
            }, this.speedVal);
            break;
          }
          case "btn.stop": {
            clearInterval(this.timer);
            this.btnVal = "btn.continue";
            break;
          }
          case "btn.continue": {
            this.btnVal = "btn.start";
            this.onGame();
            break;
          }
        }
      },
      changeSpeed(index, value) {
        if (this.btnVal != "btn.stop") {
          this.speedTab = index;
          this.speedVal = value;
          console.log(this.speedVal);
        }
      }
    }
  };
</script>

<style lang="scss">
  .snake-main {
    #snake {
      box-shadow: 0 5px 40px $theme-color;
      background: $white-color;
    }
    .game-box {
      .speed-box {
        margin-left: 50px;
      }
    }
  }
</style>
