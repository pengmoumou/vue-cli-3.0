<template>
  <div class="arithmetic-main">
    <div class="box-content box-mt">
      <ul class="demo-list-ul">
        <li class="demo-list-li" v-for="(item,index) in arithmeticLinks" :key="index"
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
    name: "demo_arithmetic",
    data() {
      return {
        arithmeticLinks: [
          {
            label: "arithmetic.sort",
            img: require("@a/duck.png"),
            router: "/arithmetic/sort"
          },
          {
            label: "arithmetic.closure",
            img: require("@a/duck.png"),
            router: "/arithmetic/closure"
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
  .arithmetic-main {
  }
</style>
