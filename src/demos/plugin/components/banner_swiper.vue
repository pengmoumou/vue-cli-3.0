<template>
  <div class="banner-swiper">
    <div class="swiper-container" id="swiper-banner">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="first-banner flex-box container-box">
            <div class="img-box">
              <div class="banner-img">
                <img src="../assets/image/selogan.png">
              </div>
              <div class="big-btn">
                <button class="btn">more</button>
              </div>
            </div>
            <div class="img-box">
              <img src="../assets/image/selogan.png">
            </div>

          </div>
        </div>
        <!-- <div class="swiper-slide">

        </div>
        <div class="swiper-slide">

        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper";
  export default {
    name: "banner_swiper",
    data() {
      return {};
    },
    mounted() {
      new Swiper("#swiper-banner", {
        direction: "horizontal",
        // loop: true,
        // autoplay: true,
        autoHeight: true
      });
    },
    methods: {}
  };
</script>
<style lang="scss">
  @import "~swiper/dist/css/swiper.css";
  .banner-swiper {
    .swiper-container {
      .swiper-slide {
        background: $theme-color;
        width: 100%;
        height: 100%;
        .banner-img {
          text-align: right;
          background: url("../assets/image/seloganbackground.png") no-repeat
            center;
          background-size: 80%;
          position: relative;
          padding: 20%;
          img {
            width: 50%;
            position: absolute;
            left: 20%;
            top: 30%;
          }
        }
        .big-btn {
          width: 50%;
        }
      }
    }
  }
</style>

