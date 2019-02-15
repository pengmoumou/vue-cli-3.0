<template>
  <div class="sort-box">
    <transition-group v-if="isMobile&&options.length>0" class="mobile-box"
      name="trans-list" tag="div">
      <div v-for="(item,index) in options" :key="index+item" class="options">
        <div><span class="num-icon" :class="{active:activeVal===index||activeVal===true}">{{index+1}}</span>{{item}}</div>
        <div class="move-icon" @mousedown="mousedown(index)" @mouseup="mouseup"><span
            class="line"></span><span class="line"></span><span class="line"></span></div>
      </div>
    </transition-group>
    <div v-else class="pc-box">
      <p class="tip-text">请用手机访问，或者模拟手机模式</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: "sort_comp",
    data() {
      return {
        isMobile: false,
        options: ["选项A", "选项B", "选项C", "选项D"],
        activeVal: -1
      };
    },
    created() {
      this.judgeEquip();
    },
    mounted() {},
    methods: {
      judgeEquip() {
        // console.log(navigator.userAgent);
        if (/Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent)) {
          this.isMobile = true;
        } else {
          this.isMobile = false;
        }
        // console.log(this.isMobile);
      },
      mousedown(index) {
        let dom = document.getElementsByClassName("options")[index];
        this.activeVal = index;
        let event = window.event; //兼容ie浏览器
        let diffX = event.clientX - dom.offsetLeft; //鼠标点击物体那一刻相对于物体左侧边框的距离=点击时的位置相对于浏览器最左边的距离-物体左边框相对于浏览器最左边的距离
        let diffY = event.clientY - dom.offsetTop;
        /*低版本ie bug:物体被拖出浏览器可是窗口外部时，还会出现滚动条，                                                                                                                                           限制超过的功能就失效了。用这个方法，即可解决这个问题。注：这两个方法用于onmousedown和onmouseup中*/
        if (typeof dom.setCapture != "undefined") {
          dom.setCapture();
        }
        document.onmousemove = function(e) {
          this.options = ["选项A", "选项B", "选项D", "选项C"];
          console.log(this.options);
          let en = e || window.event; //兼容ie浏览器
          let left = en.clientX - diffX;
          let top = en.clientY - diffY;
          //控制拖拽物体的范围只能在浏览器视窗内，不允许出现滚动条
          if (left < 0) {
            left = 0;
          } else if (left > window.innerWidth - dom.offsetWidth) {
            left = window.innerWidth - dom.offsetWidth;
          }
          if (top < 0) {
            top = 0;
          } else if (top > window.innerHeight - dom.offsetHeight) {
            top = window.innerHeight - dom.offsetHeight;
          }
          //移动时重新得到物体的距离，解决拖动时出现晃动的现象
          dom.style.left = left + "px";
          dom.style.top = top + "px";
        };
      },
      mouseup() {
        this.activeVal = true;
        //当鼠标弹起来的时候不再移动
        this.onmousemove = null;
        this.onmouseup = null; //预防鼠标弹起来后还会循环（即预防鼠标放上去的时候还会移动）
      }
    }
  };
</script>

<style lang="scss">
  .sort-box {
    position: absolute;
    width: 100%;
    cursor: move;
    font-size: 0.16rem;
    .tip-text {
      text-align: center;
      font-size: 24px;
    }
    .options {
      display: flex;
      justify-content: space-between;
      line-height: 0.24rem;
      padding: 0.15rem 0.2rem 0.15rem 0;
      margin-left: 0.2rem;
      border-bottom: solid 1px #f2f7f9;
      .num-icon {
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        border-radius: 50%;
        background-color: #d2d2d2;
        color: #fff;
        margin-right: 0.1rem;
        text-align: center;
      }
      .active {
        background-color: #2863f3;
        color: #efefef;
      }
      .move-icon {
        .line {
          display: block;
          width: 0.2rem;
          height: 2px;
          background: #d2d2d2;
          margin-top: 3px;
        }
      }
    }
    .trans-list-move {
      transition: transform 500ms;
    }
  }
</style>
