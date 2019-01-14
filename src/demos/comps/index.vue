<template>
  <div class="comps-main" @click="hideMenu">
    <div class="box-content box-mt">
      <head-demo :isShowMenu="isShowMenu" @showMenu="showMenu" v-model="activeRouter"></head-demo>
    </div>
    <div class="box-content box-mt demo-box">
    </div>
  </div>
</template>
<script>
  import HeadDemo from "@c/head_demo";
  export default {
    name: "demo_comps",
    components: {
      HeadDemo
    },
    data() {
      return {
        isShowMenu: true,
        activeRouter: "/"
      };
    },
    created() {
      this.isOver();
    },
    mounted() {
      let that = this;
      window.onresize = function windowResize() {
        that.isOver();
      };
    },
    methods: {
      isOver() {
        var result = window.matchMedia("(max-width: 750px)");
        if (result.matches) {
          this.isShowMenu = false;
        } else {
          this.isShowMenu = true;
        }
        // console.log(this.isShowMenu);
      },
      showMenu() {
        this.isShowMenu = !this.isShowMenu;
      },
      hideMenu() {
        var result = window.matchMedia("(max-width:1200px)");
        if (this.isShowMenu && result.matches) {
          this.isShowMenu = false;
        }
      }
    }
  };
</script>

<style lang="scss">
  .comps-main {
  }
</style>
