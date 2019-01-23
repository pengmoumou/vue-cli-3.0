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
    name: "demo_index",
    data() {
      return {
        demoLinks: [
          {
            label: "demo.css",
            img: require("@a/duck.png"),
            router: "/css"
          },
          {
            label: "demo.plugin",
            img: require("@a/duck.png"),
            router: "/plugin"
          },
          {
            label: "demo.frame",
            img: require("@a/duck.png"),
            router: "/frame"
          },
          {
            label: "demo.comps",
            img: require("@a/duck.png"),
            router: "/comps"
          },
          {
            label: "demo.arithmetic",
            img: require("@a/duck.png"),
            router: "/arithmetic"
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
  }
</style>
