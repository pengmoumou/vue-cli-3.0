<template>
  <div class="swiper-main">
    <div class="box-content box-mt flex-box">
      <div class="swiper-box">
        <div class="swiper-container" id="swiper1">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in imgArr" :key="index">
              <img :src="item">
            </div>
          </div>
          <div class="swiper-pagination" v-if="imgArr.length>1"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
      <div class="swiper-box">
        {{activeIndex}}
        <div class="swiper-container" id="swiper3">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in imgArr" :key="index">
              <img :src="item">
            </div>
          </div>
          <div class="swiper-pagination" v-if="imgArr.length>1"></div>
        </div>
      </div>
      <div class="swiper-box">
        <ul class="tabs flex-box">
          <li class="tab" v-for="(item,index) in tabArr" :class="activeIndex1==index?'active':''"
            :key="index" @click="chooseTab(index)">{{item}}</li>
        </ul>
        <div class="swiper-container" id="swiper4">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in tabArr" :key="index"
              ref="slide">
              {{item}}
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-box">
        <div class="swiper-container" id="swiper5">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in tabArr" :key="index">
              {{item}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box-content box-mt flex-box">
      <div class="swiper-box">
        <div class="swiper-container" id="swiper2">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in imgArr" :key="index">
              <img :src="item">
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-box">
        <div class="swiper-container" id="swiper6">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in imgArr" :key="index">
              <img :src="item">
            </div>
          </div>
          <div class="swiper-pagination" v-if="imgArr.length>1"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from "swiper";
  export default {
    name: "plugin_swiper",
    data() {
      return {
        activeIndex: 0,
        activeIndex1: 0,
        imgArr: [
          require("@a/duck.png"),
          require("@a/duck.png"),
          require("@a/duck.png")
        ],
        tabArr: ["A", "B", "C", "D", "E", "F"],
        mySwiper1: null
      };
    },
    mounted() {
      new Swiper("#swiper1", {
        direction: "horizontal",
        loop: this.imgArr.length > 1 ? true : false,
        autoplay: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        autoHeight: true
      });
      new Swiper("#swiper2", {
        direction: "vertical",
        loop: this.imgArr.length > 1 ? true : false,
        autoplay: true,
        autoHeight: true
      });
      let that = this;
      let mySwiper = new Swiper("#swiper3", {
        direction: "horizontal",
        autoHeight: true,
        on: {
          slideChangeTransitionEnd() {
            that.activeIndex = mySwiper.activeIndex;
            // console.log(mySwiper.activeIndex)
          }
        },
        pagination: {
          el: ".swiper-pagination"
        }
      });
      this.mySwiper1 = new Swiper("#swiper4", {
        direction: "horizontal",
        autoHeight: true,
        on: {
          slideChangeTransitionEnd() {
            that.activeIndex1 = that.mySwiper1.activeIndex;
            // console.log(mySwiper1.activeIndex)
          }
        }
      });
      new Swiper("#swiper5", {
        direction: "horizontal",
        autoHeight: true,
        slidesPerView: "auto"
      });
      new Swiper("#swiper6", {
        direction: "vertical",
        autoHeight: true,
        slidesPerView: 1,
        spaceBetween: 10,
        keyboard: {
          enabled: true
        },
        mousewheel: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      });
      // console.log(this.$ref['slide'])
    },
    methods: {
      chooseTab(index) {
        this.activeIndex1 = index;
        this.mySwiper1.slideToLoop(index, 1000, false);
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~swiper/dist/css/swiper.css";
  .swiper-main {
    .swiper-box {
      border: 1px $theme-color solid;
      width: 200px;
      margin: 20px;
      #swiper1 {
        &.swiper-container {
          width: 100%;
          min-height: 100px;
          .swiper-slide {
            width: 80%;
            img {
              width: 100%;
            }
          }
          /deep/ .swiper-pagination-bullet {
            width: 20px;
            height: 2px;
            background: $theme-color;
            border-radius: 0;
          }
          /deep/ .swiper-pagination-bullet-active {
            width: 20px;
            height: 3px;
          }
        }
      }
      #swiper2,
      #swiper3,
      #swiper6 {
        &.swiper-container {
          height: 200px;
          // margin:10px;
          .swiper-slide {
            img {
              width: 200px;
            }
          }
        }
      }
      #swiper4 {
        padding-top: 50px;
        text-align: center;
      }
      #swiper5 {
        &.swiper-container {
          width: 100%;
          min-height: 100px;
          .swiper-slide {
            width: 50%;
            border: 1px $theme-color solid;
            position: relative;
          }
        }
      }

      .tabs {
        justify-content: space-between;
        .tab {
          padding: 5px 10px;
          border-radius: 3px;
          background: rgba($light-color, 0.7);
          box-shadow: 1px 1px 2px $theme-color;
        }
        .tab.active {
          color: $theme-color;
        }
      }

      #swiper6 {
        /deep/ .swiper-pagination-bullet {
          width: 5px;
          height: 5px;
          background: $theme-color;
          border-radius: 50%;
        }
        /deep/ .swiper-pagination-bullet-active {
          width: 6px;
          height: 6px;
        }
      }
    }
  }
</style>
