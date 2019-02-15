<template>
  <div class="waterfall-box">
    <div class="waterfull-item" v-for="(item,index) in imgArr" :key="index">
      <!-- <img :src="item"> -->
      {{item}}
    </div>
  </div>
</template>
<script>
  export default {
    name: "waterfall",
    props: {
      imgArr: {
        default: []
      }
    },
    methods: {}
  };
</script>

<style lang="scss">
  .waterfall-box {
    column-count: 2;
    .waterfull-item {
      break-inside: avoid;
    }
  }
</style>
