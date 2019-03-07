<template>
  <div class="gobang-main">
    <canvas id="gobang" width="500" height="500" @click="onclick">
      <p>{{$t('error.canvas')}}</p>
    </canvas>
    <button class="btn" @click="restart">{{$t("btn.restart")}}</button>
  </div>
</template>
<script>
  export default {
    name: "gobang_canvas",
    data() {
      return {
        canvas_gobang: null,
        context_gobang: null,
        has: [],
        me: true,
        allwins: [],
        count: 0,
        mythiswin: [],
        pcthiswin: [],
        over: false
      };
    },
    mounted() {
      this.canvas_gobang = document.getElementById("gobang");
      this.context_gobang = this.canvas_gobang.getContext("2d");
      this.init();
    },
    methods: {
      init() {
        this.DrawChessBoard(this.context_gobang);
        this.hasChess();
        this.CountallWins();
      },
      DrawChessBoard(ctx) {
        ctx.beginPath();
        for (let i = 0; i < 15; i++) {
          ctx.moveTo(15, 15 + 30 * i);
          ctx.lineTo(435, 15 + 30 * i);

          ctx.moveTo(15 + 30 * i, 15);
          ctx.lineTo(15 + 30 * i, 435);
        }
        ctx.strokeStyle = "#666";
        ctx.stroke();
        ctx.closePath();

        // sign
        ctx.beginPath();
        ctx.moveTo(215, 225);
        ctx.lineTo(235, 225);
        ctx.moveTo(225, 215);
        ctx.lineTo(225, 235);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#000";
        ctx.stroke();
        ctx.closePath();
      },
      hasChess() {
        for (let i = 0; i < 15; i++) {
          this.has[i] = [];
          for (let j = 0; j < 15; j++) {
            this.has[i][j] = 0;
          }
        }
      },
      CountallWins() {
        for (let i = 0; i < 15; i++) {
          this.allwins[i] = [];
          for (let j = 0; j < 15; j++) {
            this.allwins[i][j] = [];
          }
        }

        // 横
        for (let i = 0; i < 15; i++) {
          for (let j = 0; j < 11; j++) {
            for (let k = 0; k < 5; k++) {
              this.allwins[i][j + k][this.count] = true;
            }
            this.count++;
          }
        }

        // 竖
        for (let i = 0; i < 15; i++) {
          for (let j = 0; j < 11; j++) {
            for (let k = 0; k < 5; k++) {
              this.allwins[j + k][i][this.count] = true;
            }
            this.count++;
          }
        }

        // 斜
        for (let i = 0; i < 11; i++) {
          for (let j = 0; j < 11; j++) {
            for (let k = 0; k < 5; k++) {
              this.allwins[i + k][j + k][this.count] = true;
            }
            this.count++;
          }
        }

        // 反斜
        for (let i = 14; i > 3; i--) {
          for (let j = 0; j < 11; j++) {
            for (let k = 0; k < 5; k++) {
              this.allwins[i - k][j + k][this.count] = true;
            }
            this.count++;
          }
        }

        // 一共572种赢法
        // console.log(this.count);

        for (let i = 0; i <= this.count; i++) {
          // 在每种赢法上的初始值为0
          this.mythiswin[i] = 0;
          this.pcthiswin[i] = 0;
        }
      },
      oneStep(ctx, i, j, me) {
        ctx.beginPath();
        ctx.arc(30 * i + 15, 30 * j + 15, 13, 0, Math.PI * 2);
        let gradient = ctx.createRadialGradient(
          30 * i + 15,
          30 * j + 15,
          13,
          30 * i + 15,
          30 * j + 15,
          0
        );
        if (me) {
          gradient.addColorStop(0, "#0a0a0a");
          gradient.addColorStop(1, "#636766");
        } else {
          gradient.addColorStop(0, "#b1b1b1");
          gradient.addColorStop(1, "#f9f9f9");
        }
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.closePath();
      },
      onclick(e) {
        if (this.over) {
          return;
        }
        if (!this.me) {
          return;
        }
        let x = e.offsetX;
        let y = e.offsetY;
        let i = Math.floor(x / 30);
        let j = Math.floor(y / 30);
        if (this.has[i][j] == 0) {
          this.oneStep(this.context_gobang, i, j, true);
          this.has[i][j] = 1;
          // console.log("落子坐标  " + i + "," + j);

          for (let k = 0; k <= this.count; k++) {
            if (this.allwins[i][j][k]) {
              this.mythiswin[k]++;
              this.pcthiswin[k] = 50;
              if (this.mythiswin[k] == 5) {
                alert("恭喜你，你赢了！");
                this.over = true;
              }
            }
          }
          if (!this.over) {
            this.me = !this.me;
            this.AI();
          }
        }
      },
      AI() {
        // 在每个位置落子的价值
        let myScore = [];
        let pcScore = [];
        let max = 0;
        let u = 0;
        let v = 0;
        for (let i = 0; i < 15; i++) {
          myScore[i] = [];
          pcScore[i] = [];
          for (let j = 0; j < 15; j++) {
            // 初始为0
            myScore[i][j] = 0;
            pcScore[i][j] = 0;
          }
        }

        for (let i = 0; i < 15; i++) {
          for (let j = 0; j < 15; j++) {
            if (this.has[i][j] == 0) {
              for (let k = 0; k <= this.count; k++) {
                if (this.allwins[i][j][k]) {
                  if (this.mythiswin[k] == 1) {
                    myScore[i][j] += 200;
                  } else if (this.mythiswin[k] == 2) {
                    myScore[i][j] += 400;
                  } else if (this.mythiswin[k] == 3) {
                    myScore[i][j] += 1000;
                  } else if (this.mythiswin[k] == 4) {
                    myScore[i][j] += 10000;
                  }

                  if (this.pcthiswin[k] == 1) {
                    pcScore[i][j] += 220;
                  } else if (this.pcthiswin[k] == 2) {
                    pcScore[i][j] += 420;
                  } else if (this.pcthiswin[k] == 3) {
                    pcScore[i][j] += 1100;
                  } else if (this.pcthiswin[k] == 4) {
                    pcScore[i][j] += 20000;
                  }
                }
              }

              if (myScore[i][j] > max) {
                max = myScore[i][j];
                u = i;
                v = j;
              } else if (myScore[i][j] == max) {
                if (pcScore[i][j] > pcScore[u][v]) {
                  u = i;
                  v = j;
                }
              }

              if (pcScore[i][j] > max) {
                max = pcScore[i][j];
                u = i;
                v = j;
              } else if (pcScore[i][j] == max) {
                if (myScore[i][j] > myScore[u][v]) {
                  u = i;
                  v = j;
                }
              }
            }
          }
        }

        this.oneStep(this.context_gobang, u, v, false);
        this.has[u][v] = 2;
        // console.log("机器落子坐标  " + u + "," + v);
        for (let k = 0; k <= this.count; k++) {
          if (this.allwins[u][v][k]) {
            this.pcthiswin[k]++;
            this.mythiswin[k] = 60;
            if (this.pcthiswin[k] == 5) {
              this.over = true;
              alert("很遗憾，电脑赢！");
            }
          }
        }

        if (!this.over) {
          this.me = !this.me;
        }
      },
      restart() {
        this.has = [];
        this.me = true;
        this.allwins = [];
        this.mythiswin = [];
        this.pcthiswin = [];
        this.count = 0;
        this.over = false;
        //重置画布
        this.canvas_gobang.height = this.canvas_gobang.height;
        this.init();
      }
    }
  };
</script>

<style lang="scss">
  .gobang-main {
  }
</style>