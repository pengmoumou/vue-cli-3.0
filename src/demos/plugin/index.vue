<template>
  <div class="plugin-main">
    <div class="box-content box-mt">
      <ul class="demo-list-ul">
        <li class="demo-list-li" v-for="(item,index) in pluginLinks" :key="index"
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
        pluginLinks: [
          {
            label: "swiper",
            img: require("@a/plugin/swiper_img.png"),
            router: "/plugin/swiper"
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
