<template>
  <div class="transform-main">
    <!-- <ul>
      <li v-for="(item,index) in transformBoxs" :key="index">
        <transform-box :transformBox="item"></transform-box>
      </li>
    </ul> -->
    <div class="box-content box-mt transform-box">
      <p class="box-title">
        {{$t('transform.rotate')}}
      </p>
      <div class="flex-box">
        <div class="flex-box">
          <p class="box-title">
            2D
          </p>
          <div class="slider-line">
            <p>rotate</p>
            <slider :min="0" :max="360" v-model="aDeg">
              {{aDeg}} deg
              <span slot="left">0 deg</span>
              <span slot="right">360 deg</span>
            </slider>
          </div>
          <div class="square-box">
            <div class="square" :style="'transform:rotate('+aDeg+'deg)'">
              A
            </div>
          </div>
        </div>
        <div class="flex-box">
          <p class="box-title">
            3D
          </p>
          <div class="line-box">
            <div class="slider-line">
              <p>rotate</p>
              <slider :min="0" :max="360" v-model="fDeg">
                {{fDeg}} deg
                <span slot="left">0 deg</span>
                <span slot="right">360 deg</span>
              </slider>
            </div>
            <div class="slider-line">
              <p>X</p>
              <slider :max="1" v-model="fX" :decimals="2">
                {{fX}}
                <span slot="left">0</span>
                <span slot="right">1</span>
              </slider>
            </div>
            <div class="slider-line">
              <p>Y</p>
              <slider :max="1" v-model="fY" :decimals="2">
                {{fY}}
                <span slot="left">0</span>
                <span slot="right">1</span>
              </slider>
            </div>
            <div class="slider-line">
              <p>Z</p>
              <slider :max="1" v-model="fZ" :decimals="2">
                {{fZ}}
                <span slot="left">0</span>
                <span slot="right">1</span>
              </slider>
            </div>
          </div>
          <div class="square-box">
            <div class="square" :style="'transform:rotate3d('+fX+','+fY+','+fZ+','+fDeg+'deg)'">
              F
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="box-content box-mt transform-box">
      <p class="box-title">
        {{$t('demo.instance')}}
      </p>
      <div class="cir-box">
        <div class="cir" :style="'transform:rotate('+cirDeg+'deg)'">
        </div>
        <div class="cir-content">
          <div class="hover-title">技术优势</div>
          <div class="cir-hover" v-for="(item,index) in hoverArr" :key="index"
            @mouseover="overShow(index+1)">{{item}}</div>
        </div>
      </div>
      <div class="rotate-box">
        <ul>
          <li></li>
          <li><span></span></li>
          <li><span></span></li>
          <li><span></span></li>
          <li><span></span></li>
          <li><span></span></li>
          <li><span></span></li>
          <li><span></span></li>
          <li><span></span></li>
          <li><span></span></li>
        </ul>
      </div>
    </div>
    <div class="box-content box-mt transform-box">
      <p class="box-title">
        {{$t('transform.translate')}}
      </p>
      <div class="flex-box">
        <div class="flex-box">
          <p class="box-title">
            2D
          </p>
          <div class="line-box">
            <div class="slider-line">
              <p>X</p>
              <slider v-model="bX">
                {{bX}}px
                <span slot="left">0px</span>
                <span slot="right">100px</span>
              </slider>
            </div>
            <div class="slider-line">
              <p>Y</p>
              <slider v-model="bY">
                {{bY}}px
                <span slot="left">0px</span>
                <span slot="right">100px</span>
              </slider>
            </div>
          </div>
          <div class="square-box">
            <div class="square" :style="'transform:translate('+bX+'px,'+bY+'px)'">
              B
            </div>
          </div>
        </div>
        <div class="flex-box">
          <p class="box-title">
            3D
          </p>
          <div class="line-box">
            <div class="slider-line">
              <p>X</p>
              <slider v-model="cX">
                {{cX}}px
                <span slot="left">0px</span>
                <span slot="right">100px</span>
              </slider>
            </div>
            <div class="slider-line">
              <p>Y</p>
              <slider v-model="cY">
                {{cY}}px
                <span slot="left">0px</span>
                <span slot="right">100px</span>
              </slider>
            </div>
            <div class="slider-line">
              <p>Z</p>
              <slider v-model="cZ">
                {{cZ}}px
                <span slot="left">0px</span>
                <span slot="right">100px</span>
              </slider>
            </div>
          </div>
          <div class="square-box">
            <div class="square" :style="'transform:translate3d('+cX+'px,'+cY+'px,'+cZ+'px)'">
              C
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box-content box-mt transform-box">
      <p class="box-title">
        {{$t('transform.scale')}}
      </p>
      <div class="flex-box">
        <div class="flex-box">
          <p class="box-title">
            2D
          </p>
          <div class="line-box">
            <div class="slider-line">
              <p>X</p>
              <slider :max="2" v-model="dX" :decimals="2">
                {{dX}}
                <span slot="left">0</span>
                <span slot="right">2</span>
              </slider>
            </div>
            <div class="slider-line">
              <p>Y</p>
              <slider :max="2" v-model="dY" :decimals="2">
                {{dY}}
                <span slot="left">0</span>
                <span slot="right">2</span>
              </slider>
            </div>
          </div>
          <div class="square-box">
            <div class="square" :style="'transform:scale('+dX+','+dY+')'">
              D
            </div>
          </div>
        </div>
        <div class="flex-box">
          <p class="box-title">
            3D
          </p>
          <div class="line-box">
            <div class="slider-line">
              <p>X</p>
              <slider :max="2" v-model="eX" :decimals="2">
                {{eX}}
                <span slot="left">0</span>
                <span slot="right">2</span>
              </slider>
            </div>
            <div class="slider-line">
              <p>Y</p>
              <slider :max="2" v-model="eY" :decimals="2">
                {{eY}}
                <span slot="left">0</span>
                <span slot="right">2</span>
              </slider>
            </div>
            <div class="slider-line">
              <p>Z</p>
              <slider :max="10" v-model="eZ" :decimals="2">
                {{eZ}}
                <span slot="left">0</span>
                <span slot="right">10</span>
              </slider>
            </div>
            <div class="slider-line">
              <p>rotateX</p>
              <slider :min="0" :max="360" v-model="eXDeg">
                {{eXDeg}} deg
                <span slot="left">0 deg</span>
                <span slot="right">360 deg</span>
              </slider>
            </div>
            <div class="slider-line">
              <p>rotateY</p>
              <slider :min="0" :max="360" v-model="eYDeg">
                {{eYDeg}} deg
                <span slot="left">0 deg</span>
                <span slot="right">360 deg</span>
              </slider>
            </div>
          </div>
          <div class="square-box">
            <div class="square" :style="'transform:scale3d('+eX+','+eY+','+eZ+') rotateX('+eXDeg+'deg) rotateY('+eYDeg+'deg)' ">
              E
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box-content box-mt transform-box">
      <p class="box-title">
        {{$t('transform.skew')}}
      </p>
      <div class="flex-box">
        <div class="line-box">
          <div class="slider-line">
            <p>X</p>
            <slider :min="0" :max="360" v-model="gXDeg">
              {{gXDeg}} deg
              <span slot="left">0 deg</span>
              <span slot="right">360 deg</span>
            </slider>
          </div>
          <div class="slider-line">
            <p>Y</p>
            <slider :min="0" :max="360" v-model="gYDeg">
              {{gYDeg}} deg
              <span slot="left">0 deg</span>
              <span slot="right">360 deg</span>
            </slider>
          </div>
        </div>
        <div class="square-box">
          <div class="square" :style="'transform:skew('+gXDeg+'deg,'+gYDeg+'deg)' ">
            G
          </div>
        </div>
      </div>
    </div>
    <div class="box-content box-mt transform-box">
      <p class="box-title">
        {{$t('transform.matrix')}}
      </p>
      <div class="flex-box">
        <div class="flex-box">
          <p class="box-title">
            2D
          </p>
        </div>
        <div class="flex-box">
          <p class="box-title">
            3D
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Slider from "@c/slider";
  // import TransformBox from "@c/transform_box";
  export default {
    name: "css_transform",
    components: {
      Slider
      // TransformBox
    },
    data() {
      return {
        // transformBoxs: [],
        aDeg: 180,
        eXDeg: 0,
        eYDeg: 0,
        fDeg: 0,
        gXDeg: 0,
        gYDeg: 0,
        bX: 0,
        bY: 0,
        cX: 0,
        cY: 0,
        cZ: 0,
        dX: 1,
        dY: 1,
        eX: 1,
        eY: 1,
        eZ: 1,
        fX: 0,
        fY: 0,
        fZ: 0,
        cirDeg: 0,
        preCirDeg: 0,
        hoverArr: [
          "智能合约",
          "AI+VR技术",
          "价值互联网",
          "通证激励体系",
          "共识机制-POW",
          "跨链交易",
          "多链交互"
        ]
      };
    },
    computed: {},
    created() {},
    mounted() {},

    methods: {
      overShow(val) {
        this.preCirDeg = this.cirDeg;
        this.cirDeg = val * (360 / this.hoverArr.length);
      }
    }
  };
</script>

<style lang="scss">
  .transform-main {
    padding-bottom: 50px;
    .transform-box {
      min-height: 100px;
      padding: 0 20px;
      .box-title {
        text-align: center;
        font-size: 18px;
        padding: 15px 0;
        border-bottom: solid 1px $light-color;
      }
      .slider-line {
        margin: 30px;
        align-self: center;
        display: flex;
      }
      .flex-box {
        justify-content: space-around;
      }
      .square-box {
        margin: 25px;
        width: 200px;
        height: 200px;
        border: solid 1px $light-color;
        transform-style: preserve-3d;
        perspective: 500;
        perspective-origin: 50% 50%;
      }
      .square {
        margin: 25px;
        width: 50px;
        height: 50px;
        background: $theme-color;
      }
    }
    .rotate-box {
      background: $dark_color;
      ul {
        width: 610px;
        height: 610px;
        // margin: 40px auto;
        margin: 0 auto;
        padding: 20px 0;
        list-style: none;
        overflow: hidden;
        /*background: #ccc;*/
        position: relative;
      }
      ul li {
        border: 2px solid #394057;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        /*animation: change 3s linear infinite;*/
        animation-name: change;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      }
      ul li:nth-child(1) {
        width: 60px;
        height: 60px;
        box-shadow: 0px 0px 50px #c90;
        background: #c90;
        border: none;
        animation-duration: 1.2s;
      }
      ul li:nth-child(2) {
        width: 120px;
        height: 120px;
        animation-duration: 3.2s;
      }
      ul li:nth-child(3) {
        width: 180px;
        height: 180px;
        animation-duration: 9.2s;
      }
      ul li:nth-child(4) {
        width: 240px;
        height: 240px;
        animation-duration: 4.2s;
      }
      ul li:nth-child(5) {
        width: 300px;
        height: 300px;
        animation-duration: 2.2s;
      }
      ul li:nth-child(6) {
        width: 360px;
        height: 360px;
        animation-duration: 8.2s;
      }
      ul li:nth-child(7) {
        width: 420px;
        height: 420px;
        animation-duration: 10.2s;
      }
      ul li:nth-child(8) {
        width: 480px;
        height: 480px;
        animation-duration: 15.2s;
      }
      ul li:nth-child(9) {
        width: 540px;
        height: 540px;
        animation-duration: 6.2s;
      }
      ul li:nth-child(10) {
        width: 600px;
        height: 600px;
        animation-duration: 7.2s;
      }
      ul li span {
        width: 12px;
        height: 12px;
        position: absolute;
        top: -6px;
        left: 50%;
        background: green;
        border-radius: 50%;
      }
      @keyframes change {
        0% {
          transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
          transform: translate(-50%, -50%) rotate(360deg);
        }
      }
    }
    .cir-box {
      background: $dark_color;
      color: $white-color;
      position: relative;
      .cir {
        width: 100%;
        height: 500px;
        background: url("~@a/css/cir_rotate.png") center no-repeat;
        background-size: 500px 500px;
        transition: 0.5s ease-in-out;
      }
      .cir-content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 500px;
        .hover-title {
          width: 100%;
          position: absolute;
          text-align: center;
          line-height: 500px;
          // top: 290px;
          // left: 570px;
          font-size: 18px;
        }
        .cir-hover:nth-child(1) {
        }
      }
    }
  }
</style>
