<template>
  <div class="frame-main">
    <div class="box-content box-mt">
      <ul class="demo-list-ul">
        <li class="demo-list-li" v-for="(item,index) in frameLinks" :key="index"
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
    name: "demo_frame",
    data() {
      return {
        frameLinks: [
          {
            label: "Vuetify",
            img: require("@a/duck.png"),
            router: "/frame/vuetify"
          },
          {
            label: "Three.js",
            img: require("@a/duck.png"),
            router: "/frame/three"
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
  .frame-main {
  }
</style>
