<template>
  <div class="route-main">
    <div class="box-content box-mt demo-box">
      <button class="btn" @click="jumpRouter(0)">path带参跳转路由</button>
      <button class="btn" @click="jumpRouter(1)">name带参跳转路由</button>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "plugin_route",
    data() {
      return {};
    },
    created() {},
    methods: {
      jumpRouter(val) {
        switch (val) {
          case 0: {
            //路径显示传参，获取传参：this.$route.query.id
            this.$router.push({
              path: "/route/demo2",
              query: {
                id: 123
              }
            });
            break;
          }
          case 1: {
            //路径不显示传参，获取传参：this.$route.params.id
            this.$router.push({
              name: "route_demo1",
              params: {
                id: 123
              }
            });
            break;
          }
        }
      }
    }
  };
</script>

<style lang="scss">
  .route-main {
  }
</style>