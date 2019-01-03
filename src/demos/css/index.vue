<template>
  <div class="css-main">
    <div class="box-content box-mt">
      <ul class="demo-list-ul">
        <li class="demo-list-li" v-for="(item,index) in cssLinks" :key="index"
          @click="pushRouter(item.router)">
          <div class="li-label">{{$t(item.label)}}</div>
          <div><img :src="item.img" class="li-img"></div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        cssLinks: [
          {
            label: "css.transition",
            img: require("@a/css/transition_img.jpg"),
            router: "/css/transition"
          },
          {
            label: "css.transform",
            img: require("@a/css/transform_img.png"),
            router: "/css/transform"
          },
          {
            label: "css.animation",
            img: require("@a/css/animation_img.jpg"),
            router: "/css/animation"
          },
          {
            label: "css.canvas",
            img: require("@a/css/animation_img.jpg"),
            router: "/css/canvas"
          },
          {
            label: "css.gradient",
            img: require("@a/css/gradient_img.jpg"),
            router: "/css/gradient"
          }
        ]
      };
    },
    methods: {
      pushRouter(routerVal) {
        this.$router.push({ path: routerVal });
      }
    }
  };
</script>

<style lang="scss">
  .css-main {
  }
</style>
