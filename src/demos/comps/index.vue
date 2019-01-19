<template>
  <div class="comps-main" @click="hideMenu">
    <div class="box-content box-mt">
      <head-demo :isShowMenu="isShowMenu" @showMenu="showMenu" v-model="activeRouter"></head-demo>
    </div>
    <div class="box-content box-mt demo-box">

    </div>
    <div class="box-content box-mt demo-box">

    </div>
    <foot-demo :class="{fixed:isFixed}" class="box-mt" @eventGetHeight="getFooterHeight"></foot-demo>
  </div>
</template>
<script>
  import HeadDemo from "./components/head_demo";
  import FootDemo from "./components/foot_demo";
  export default {
    name: "demo_comps",
    components: {
      HeadDemo,
      FootDemo
    },
    data() {
      return {
        isFixed: true,
        footerHeight: 0,
        isShowMenu: true,
        activeRouter: "/"
      };
    },
    mounted() {
      this.isOver();
      window.addEventListener("resize", this.isOver);
    },
    beforeDestroy() {
      window.removeEventListener("resize", this.isOver);
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
        var bodyHeight = 0;
        if (this.isFixed) {
          bodyHeight = Number(this.$el.offsetHeight) + this.footerHeight;
        } else {
          bodyHeight = Number(this.$el.offsetHeight);
        }
        // console.log("bodyHeight " + bodyHeight + "footer " + this.footerHeight);
        var winHeight = window.innerHeight;
        // console.log("winHeight " + winHeight);
        if (bodyHeight > winHeight) {
          // console.log("scroll");
          this.isFixed = false;
        } else {
          // console.log("fixed");
          this.isFixed = true;
        }
      },
      getFooterHeight(val) {
        this.footerHeight = Number(val);
        // console.log("footer " + val);
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
    .fixed {
      position: fixed;
      bottom: 0;
    }
  }
</style>
