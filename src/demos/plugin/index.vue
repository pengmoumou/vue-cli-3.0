<template>
  <div class="plugin-main">
    <div class="box-content box-mt">
      <ul class="demo-list-ul">
        <li class="demo-list-li" v-for="(item,index) in pluginLinks" :key="index"
          @click="pushRouter(item.router)">
          <div class="li-label">{{item.label}}</div>
          <div><img :src="item.img" class="li-img"></div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: "demo_plugin",
    data() {
      return {
        pluginLinks: [
          {
            label: "Swiper",
            img: require("@a/plugin/swiper_img.png"),
            router: "/plugin/swiper"
          },
          {
            label: "AOS",
            img: require("@a/plugin/aos_img.jpg"),
            router: "/plugin/aos"
          },
          {
            label: "Editor",
            img: require("@a/duck.png"),
            router: "/plugin/editor"
          },
          {
            label: "axios",
            img: require("@a/duck.png"),
            router: "/plugin/axios"
          },
          {
            label: "route",
            img: require("@a/duck.png"),
            router: "/plugin/route"
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
  .plugin-main {
  }
</style>
