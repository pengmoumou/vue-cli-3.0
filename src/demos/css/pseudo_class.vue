<template>
  <div class="pseudo-class-main">
    <div class="box-content box-mt demo-box flex-box">
      <div class="box-mt">
        <p class="p-hover">:hover</p>
        <p class="p-active">:active</p>
      </div>
    </div>
    <div class="box-content box-mt demo-box">
      <p class="box-title">
        {{$t('demo.instance')}}
      </p>
      <div class="instance-box">
        <div class="banner">
          <img src="@a/pseudo_class/penguin_title.png">
        </div>
        <div class="game-box">
          <div class="flex-box">
            <div class="grade-box">
              {{$t('text.score')}}:<span class="score">{{gameScore}}</span>
            </div>
            <button @click="restart" class="btn">{{$t('btn.restart')}}</button>
          </div>
          <div class="flex-box">
            <div class="penguin-box penguin1" @click="onClick(0)"></div>
            <div class="penguin-box penguin2" @click="onClick(1)"></div>
            <div class="penguin-box penguin3" @click="onClick(2)"></div>
          </div>
          <div class="flex-box">
            <div class="penguin-box penguin4" @click="onClick(3)"></div>
            <div class="penguin-box penguin5" @click="onClick(4)"></div>
            <div class="penguin-box penguin6" @click="onClick(5)"></div>
          </div>
          <div class="flex-box">
            <div class="penguin-box penguin7" @click="onClick(6)"></div>
            <div class="penguin-box penguin8" @click="onClick(7)"></div>
            <div class="penguin-box penguin9" @click="onClick(8)"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "demo_pseudo_class",
    data() {
      return {
        gameScore: 0,
        penguinArr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        gameState: true,
        clickArr: []
      };
    },
    methods: {
      restart() {
        for (let item of this.clickArr) {
          let className = "active" + item;
          let classList = document.getElementsByClassName(className);
          if (classList.length > 0) {
            // console.log(document.getElementsByClassName(className));
            classList[0].classList.remove("active" + item);
          }
        }
        this.gameScore = 0;
        this.penguinArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.clickArr = [];
        this.gameState = true;
      },
      onClick(index) {
        if (!this.gameState) {
          alert(this.$t("text.restart"));
          return;
        }
        var n = Math.floor(Math.random() * this.penguinArr.length + 1) - 1;
        let itemValue = this.penguinArr[n];
        // console.log(index + "=>" + itemValue);
        let className = "active" + itemValue;

        document
          .getElementsByClassName("penguin-box") // eslint-disable-next-line
          [index].classList.add(className);
        this.clickArr.push(itemValue);
        if (itemValue == 9) {
          alert(this.$t("text.end"));
          this.gameState = false;
          return;
        }
        this.penguinArr.splice(n, 1);
        // console.log(this.penguinArr);
        if (this.penguinArr.length <= 1) {
          alert(this.$t("text.congratulation"));
          this.gameState = false;
          return;
        }
        this.gameScore++;
      }
    }
  };
</script>

<style lang="scss">
  .pseudo-class-main {
    p {
      padding: 10px;
    }
    .p-hover:hover {
      color: $theme-color;
    }
    .p-active:active {
      color: $theme-color;
    }
    .instance-box {
      background: #ccf6f5;
      .banner {
        img {
          margin: 0 auto;
          display: block;
        }
      }
      .flex-box {
        justify-content: center;
      }
      .game-box {
        .grade-box {
          padding: 5px 10px;
          border: 1px solid $theme-color;
          .score {
            color: $theme-color;
            padding-left: 20px;
          }
        }
        .penguin-box {
          width: 200px;
          height: 200px;
        }
        .penguin1 {
          background: url("~@a/pseudo_class/mound_1.png") no-repeat center;
          background-size: 100%;
        }
        .penguin1:hover {
          background: url("~@a/pseudo_class/mound_1_hover.png") no-repeat center;
        }
        .penguin2 {
          background: url("~@a/pseudo_class/mound_2.png") no-repeat center;
          background-size: 100%;
        }
        .penguin2:hover {
          background: url("~@a/pseudo_class/mound_2_hover.png") no-repeat center;
        }
        .penguin3 {
          background: url("~@a/pseudo_class/mound_3.png") no-repeat center;
          background-size: 100%;
        }
        .penguin3:hover {
          background: url("~@a/pseudo_class/mound_3_hover.png") no-repeat center;
        }
        .penguin4 {
          background: url("~@a/pseudo_class/mound_4.png") no-repeat center;
          background-size: 100%;
        }
        .penguin4:hover {
          background: url("~@a/pseudo_class/mound_4_hover.png") no-repeat center;
        }
        .penguin5 {
          background: url("~@a/pseudo_class/mound_5.png") no-repeat center;
          background-size: 100%;
        }
        .penguin5:hover {
          background: url("~@a/pseudo_class/mound_5_hover.png") no-repeat center;
        }
        .penguin6 {
          background: url("~@a/pseudo_class/mound_6.png") no-repeat center;
          background-size: 100%;
        }
        .penguin6:hover {
          background: url("~@a/pseudo_class/mound_6_hover.png") no-repeat center;
        }
        .penguin7 {
          background: url("~@a/pseudo_class/mound_7.png") no-repeat center;
          background-size: 100%;
        }
        .penguin7:hover {
          background: url("~@a/pseudo_class/mound_7_hover.png") no-repeat center;
        }
        .penguin8 {
          background: url("~@a/pseudo_class/mound_8.png") no-repeat center;
          background-size: 100%;
        }
        .penguin8:hover {
          background: url("~@a/pseudo_class/mound_8_hover.png") no-repeat center;
        }
        .penguin9 {
          background: url("~@a/pseudo_class/mound_9.png") no-repeat center;
          background-size: 100%;
        }
        .penguin9:hover {
          background: url("~@a/pseudo_class/mound_9_hover.png") no-repeat center;
        }
        .active1 {
          background: url("~@a/pseudo_class/penguin_1.png") no-repeat center !important;
        }
        .active2 {
          background: url("~@a/pseudo_class/penguin_2.png") no-repeat center !important;
        }
        .active3 {
          background: url("~@a/pseudo_class/penguin_3.png") no-repeat center !important;
        }
        .active4 {
          background: url("~@a/pseudo_class/penguin_4.png") no-repeat center !important;
        }
        .active5 {
          background: url("~@a/pseudo_class/penguin_5.png") no-repeat center !important;
        }
        .active6 {
          background: url("~@a/pseudo_class/penguin_6.png") no-repeat center !important;
        }
        .active7 {
          background: url("~@a/pseudo_class/penguin_7.png") no-repeat center !important;
        }
        .active8 {
          background: url("~@a/pseudo_class/penguin_8.png") no-repeat center !important;
        }
        .active9 {
          background: url("~@a/pseudo_class/yeti.png") no-repeat center !important;
        }
      }
    }
  }
</style>
