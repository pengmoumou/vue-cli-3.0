<template>
  <div class="transform-main">
    <div class="box-content box-mt transform-box">
      <p class="box-title">
        {{$t('transform.rotate')}}
      </p>
      <div class="rotate-box">
        <div class="deg-line">
          <p>{{$t("transform.change_deg")}}</p>
          <slider :min="0" :max="360" v-model="rotateDeg">
            {{rotateDeg}} deg
            <span slot="left">0 deg</span>
            <span slot="right">360 deg</span>
          </slider>
        </div>
        <div class="rotate-square" :style="'transform:rotate('+rotateDeg+'deg)'">
          A
        </div>
      </div>
    </div>
    <div class="box-content box-mt transform-box">

    </div>
  </div>
</template>
<script>
  import Slider from "@/components/slider";
  export default {
    name: "demo_transform",
    components: {
      Slider
    },
    data() {
      return {
        rotateDeg: 180
      };
    },
    computed: {},
    created() {
      // this.changeRotateDeg(30);
    },
    mounted() {},
    methods: {}
  };
</script>

<style lang="scss">
  .transform-main {
    .transform-box {
      min-height: 100px;
      padding: 20px;
      .box-title {
        text-align: center;
        font-size: 18px;
      }
      .rotate-box {
        display: flex;
        // justify-content: space-around;
        .deg-line {
          align-self: center;
          display: flex;
        }
        .rotate-square {
          margin: 50px;
          width: 50px;
          height: 50px;
          background: $theme-color;
          // transform: rotate(0deg);
        }
      }
    }
  }
</style>
