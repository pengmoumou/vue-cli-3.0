<template>
  <div class="index-main">
    <div class="box-content box-mt">
      <ul class="demo-list-ul">
        <li class="demo-list-li" v-for="(item,index) in demoLinks" :key="index"
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
        demoLinks: [
          {
            label: "demo.transition",
            img: require("@/assets/transition_img.jpg"),
            router: "/demo/transition"
          },
          {
            label: "demo.transform",
            img: require("@/assets/transform_img.png"),
            router: "/demo/transform"
          },
          {
            label: "demo.animation",
            img: require("@/assets/animation_img.jpg"),
            router: "/demo/animation"
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
  .index-main {
    color: $theme-color;
    .demo-list-ul {
      padding: 0 10px;
      .demo-list-li {
        display: flex;
        justify-content: space-between;
        border-bottom: $light-color solid 1px;
        cursor: pointer;
        .li-label {
          padding: 0 30px;
          align-self: center;
        }
        .li-img {
          // width:100px;
          height: 100px;
        }
      }
      .demo-list-li:last-child {
        border-bottom: none;
      }
    }
  }
</style>
