<template>
  <div class="canvas-main">
    <div class="box-content box-mt demo-box">
      <canvas id="snake" width="500" height="500">
        <p>{{$t('error.canvas')}}</p>
      </canvas>
      <button @click="onGame" class="btn">{{$t(btnVal)}}</button>
    </div>
    <div class="box-content box-mt demo-box">
      <canvas id="rect" width="500" height="500">
        <p>{{$t('error.canvas')}}</p>
      </canvas>
    </div>
  </div>
</template>
<script>
  import Snake from './js/snake'
  export default {
    name: "demo_canvas",
    data() {
      return {
        snake:new Snake(),
        canvas_snake:null,
        context_snake:null,
        timer:null,
        btnVal:'canvas.start',
      };
    },
    watch:{
      timer(){
        if(!this.timer)
        {
          console.log('Game Over')
        }
      },
      isOver(){
        if(this.isOver)
        {
          alert(this.$t('canvas.end'));
          this.snake=new Snake();
          this.drawSnake(); 
        }
      }
    },
    computed:{
      isOver(){
        return this.snake.gameOver;
      }
    },
    mounted(){
      this.canvas_snake=document.getElementById('snake');
      this.context_snake=this.canvas_snake.getContext('2d');
      let that=this;
      this.drawSnake();
      //键盘事件，其中的if判定是为了让蛇不能直接掉头
      document.onkeydown = function(e) {
          var ev = e || window.event;
          switch (ev.keyCode) {
              case 37:
                  {
                      if (that.snake.direction !== 39) {
                          that.snake.direction = 37;
                      }
                      break;
                  }
              case 38:
                  {
                      if (that.snake.direction !== 40) {
                          that.snake.direction = 38;
                      }
                      break;
                  }
              case 39:
                  {
                      if (that.snake.direction !== 37) {
                          that.snake.direction = 39;
                      }
                      break;
                  }
              case 40:
                  {
                      if (that.snake.direction !== 38) {
                          that.snake.direction = 40;
                      }
                      break;
                  }
          }
          ev.preventDefault();
      }
    },
    methods:{
      drawSnake(){
        this.context_snake.clearRect(0,0,500,500);
        //画出初始的蛇
        this.snake.draw(this.canvas_snake,this.context_snake);
        this.btnVal='canvas.start';
      },
      onGame(){
        switch(this.btnVal){
          case 'canvas.start':{
            this.btnVal='canvas.stop';
            let that=this;
            this.timer=setInterval(function() {
                that.context_snake.clearRect(0, 0, that.canvas_snake.width, that.canvas_snake.height);
                that.snake.move(that.canvas_snake,that.timer);
                that.snake.draw(that.canvas_snake,that.context_snake);
            }, 100)
            break;
          }
          case 'canvas.stop':{
            clearInterval(this.timer);
            this.btnVal='canvas.continue';
            break;
          }
          case 'canvas.continue':{
            this.btnVal='canvas.start';
            this.onGame();
            break;
          }
        }
      }
    }
  };
</script>

<style lang="scss">
  .canvas-main {
    #snake{
      box-shadow: 0 5px 40px $theme-color;
      background: #fff;
    }
    .btn{
        cursor: pointer;
        margin-left: 50px;
        padding: 5px 10px;
        border-radius: 3px;
        background: rgba($light-color, 0.7);
        color: $theme-color;
        // border:solid $theme-color 1px;
        border: none;
        box-shadow: 1px 1px 2px $theme-color;
    }
  }
</style>
