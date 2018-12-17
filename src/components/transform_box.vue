<template>
  <div class="box-content box-mt transform-box">
    <p class="box-title">
      {{$t(transformBox.title)}}
    </p>
    <ul class="flex-box">
      <li class="flex-box" v-for="(item,index) in transformBox.boxs" :key="index">
        <p class="box-title">
          {{item.title}}
        </p>
        <ul class="line-box">
          <li class="slider-line" v-for="(line,index) in item.lineBox" :key="index">
            <p>{{line.lable}}</p>
            <slider :min="line.min||0" :max="line.max||100" v-model="line.value"
              :decimals="line.decimals||0">
              <span v-if="line.showTips">{{line.value||0}} {{line.unit||''}}</span>
              <span slot="left" v-if="line.showSlot">{{line.min||0}}
                {{line.unit||''}}</span>
              <span slot="right" v-if="line.showSlot">{{line.max||0}}
                {{line.unit||''}}</span>
            </slider>
          </li>
        </ul>
        <div class="square-box">
          <div class="square" :style="item.style">
            {{item.square}}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import Slider from "@/components/slider";
  export default {
    name: "transform_box",
    components: {
      Slider
    },
    props: {
      transformBox: {
        defualt: {
          title: "",
          boxs: []
        }
      }
    },
    data() {
      return {};
    },
    methods: {}
  };
</script>

<style lang="scss">
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
      display: flex;
      // justify-content: space-around;
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
</style>
