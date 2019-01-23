<template>
  <div class="aos-main">
    <div class="box-content box-mt aos-box">
      <div class="item item--primary" data-aos="fade-left" data-aos-anchor="#trigger-right">
        RIGHT
      </div>
      <div class="item item--secondary" data-aos="fade-right" data-aos-anchor="#trigger-left">
        LEFT
      </div>
      <div class="flex-box">
        <div class="item" data-aos="fade" :data-aos-delay="item" v-for="(item,index) in delayBtns"
          :key="index">
          <span>fade</span>
          <button class="btn">delay{{item}}</button>
        </div>
      </div>
      <div class="flex-box">
        <div class="item" data-aos="fade-up" :data-aos-duration="item" v-for="(item,index) in durationBtns"
          :key="index">
          <span>fade-up</span>
          <button class="btn">duration{{item}}</button>
        </div>
      </div>
      <div class="flex-box">
        <div class="item" data-aos="fade-down" :data-aos-offset="item" v-for="(item,index) in offsetBtns"
          :key="index">
          <span>fade-down</span>
          <button class="btn">offset{{item}}</button>
        </div>
      </div>
      <div class="flex-box">
        <div class="item" data-aos="fade-up-left" :data-aos-anchor-placement="item"
          v-for="(item,index) in placementBtns1" :key="index">
          <span>fade-up-left</span>
          <button class="btn">{{item}}</button>
        </div>
      </div>
      <div class="flex-box">
        <div class="item" data-aos="fade-up-right" :data-aos-anchor-placement="item"
          v-for="(item,index) in placementBtns2" :key="index">
          <span>fade-up-right</span>
          <button class="btn">{{item}}</button>
        </div>
      </div>
      <div class="item" id="trigger-left"><span>trigger left</span></div>
      <div class="flex-box">
        <div class="item" data-aos="fade-down-left" :data-aos-easing="item"
          v-for="(item,index) in easingBtns1" :key="index">
          <span>fade-down-left</span>
          <button class="btn">{{item}}</button>
        </div>
      </div>
      <div class="flex-box">
        <div class="item" data-aos="fade-down-right" :data-aos-easing="item"
          v-for="(item,index) in easingBtns2" :key="index">
          <span>fade-down-right</span>
          <button class="btn">{{item}}</button>
        </div>
      </div>
      <div class="item" id="trigger-right"><span>trigger right</span></div>
      <div class="flex-box">
        <div class="item" data-aos="flip-up"><span>flip-up</span></div>
        <div class="item" data-aos="flip-down"><span>flip-down</span></div>
        <div class="item" data-aos="flip-left"><span>flip-left</span></div>
        <div class="item" data-aos="flip-right"><span>flip-right</span></div>
      </div>
      <div class="flex-box">
        <div class="item" data-aos="slide-up"><span>slide-up</span></div>
        <div class="item" data-aos="slide-down"><span>slide-down</span></div>
        <div class="item" data-aos="slide-left"><span>slide-left</span></div>
        <div class="item" data-aos="slide-right"><span>slide-right</span></div>
      </div>
      <div class="flex-box">
        <div class="item" data-aos="zoom-in"><span>zoom-in</span></div>
        <div class="item" data-aos="zoom-in-up"><span>zoom-in-up</span></div>
        <div class="item" data-aos="zoom-in-down"><span>zoom-in-down</span></div>
        <div class="item" data-aos="zoom-in-left"><span>zoom-in-left</span></div>
        <div class="item" data-aos="zoom-in-right"><span>zoom-in-right</span></div>
      </div>
      <div class="flex-box">
        <div class="item" data-aos="zoom-out"><span>zoom-out</span></div>
        <div class="item" data-aos="zoom-out-up"><span>zoom-out-up</span></div>
        <div class="item" data-aos="zoom-out-down"><span>zoom-out-down</span></div>
        <div class="item" data-aos="zoom-out-left"><span>zoom-out-left</span></div>
        <div class="item" data-aos="zoom-out-right"><span>zoom-out-right</span></div>
      </div>
    </div>
  </div>
</template>
<script>
  import AOS from "aos";
  import "aos/dist/aos.css";
  export default {
    name: "plugin_aos",
    data() {
      return {
        delayBtns: [100, 200, 300, 400, 500],
        durationBtns: [1000, 2000, 3000, 4000, 5000],
        offsetBtns: [100, 200, 300, 400, 500],
        placementBtns1: [
          "top-top",
          "top-center",
          "top-bottom",
          "center-top",
          "center-center"
        ],
        placementBtns2: [
          "center-bottom",
          "bottom-top",
          "bottom-center",
          "bottom-bottom"
        ],
        easingBtns1: ["linear", "ease", "ease-in", "ease-out", "ease-in-out"],
        easingBtns2: [
          "ease-in-out-back",
          "ease-in-out-sine",
          "ease-in-out-quad",
          "ease-in-out-cubic",
          "ease-in-out-quart"
        ]
      };
    },
    mounted() {
      AOS.init({ duration: 1200 });
      //给window添加一个滚动滚动监听事件
      //   window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
      //离开该页面需要移除这个监听的事件
      //   window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        var scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        if (scrollTop <= 200) {
          console.log(true);
        } else {
          console.log(false);
        }
      }
    }
  };
</script>

<style lang="scss">
  .aos-main {
    .aos-box {
      @mixin center-v() {
        position: fixed;
        top: 0;
        bottom: 0;
        margin: auto;
      }
      .item {
        width: 200px;
        height: 200px;
        margin: 50px auto;
        padding-top: 75px;
        background: $gray-color;
        text-align: center;
        color: $white-color;
        font-size: 3em;
        span {
          display: block;
          font-size: 1rem;
        }
        &--primary {
          @include center-v;
          right: 20px;
          background: green;
        }
        &--secondary {
          @include center-v;
          left: 20px;
          background: red;
        }
      }
    }
  }
</style>

