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
    </div>
    <div class="box-content box-mt flex-box">
        <div class="swiper-box">
            <div class="swiper-container" id="swiper2">
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
  import Swiper from 'swiper';
  export default {
    name: "demo_swiper",
    data() {
      return {
          activeIndex:0,
          imgArr:[require('@a/duck.png'),require('@a/duck.png'),require('@a/duck.png')]
      };
    },
    mounted(){
        new Swiper ('#swiper1', {
            direction: 'horizontal',
            loop: this.imgArr.length>1?true:false,
            autoplay: true,
            slidesPerView:'auto',
            centeredSlides:true,
            spaceBetween: 10,
            pagination: {
                el: '.swiper-pagination',
            },
            autoHeight: true, 
        });
        new Swiper ('#swiper2', {
            direction: 'vertical',
            loop: this.imgArr.length>1?true:false,
            autoplay: true,
            autoHeight: true,
        });
        var mySwiper=new Swiper ('#swiper3', {
            direction: 'horizontal',
            autoHeight: true, 
            on:{
                slideChangeTransitionEnd(){
                    this.activeIndex=mySwiper.activeIndex;
                    console.log(mySwiper.activeIndex)
                }
            },
            pagination: {
                el: '.swiper-pagination',
            },
        })        
    }
  };
</script>

<style lang="scss" scoped>
    @import '~swiper/dist/css/swiper.css';
  .swiper-main {
    .swiper-box{
         border:1px $theme-color solid;
         width:200px;
         margin:20px; 
        #swiper2,#swiper3{
            &.swiper-container {
                height: 200px;
                // margin:10px;
                .swiper-slide{
                    img{
                        width:200px;
                    } 
                }
            }
        }
        #swiper1{
            &.swiper-container {
                width: 100%;
                min-height: 100px;
                .swiper-slide{
                    width:80%;
                    img{
                        width: 100%;
                    } 
                }
                /deep/ .swiper-pagination-bullet{
                    width:20px; 
                    height: 2px; 
                    background:$theme-color;
                    border-radius: 0;
                }
                /deep/ .swiper-pagination-bullet-active{
                    width: 20px; 
                    height: 3px; 
                }
            }
        }
    }
  }
</style>
