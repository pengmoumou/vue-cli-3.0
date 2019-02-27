<template>
  <div class="comps-main" @click="hideMenu">
    <div class="box-content box-mt">
      <head-demo :isShowMenu="isShowMenu" @showMenu="showMenu" v-model="activeRouter"></head-demo>
    </div>
    <div class="box-content box-mt sort-comp-box" id="home" name="home">
      home
      sort_comp
      <sort-comp></sort-comp>
    </div>
    <div class="box-content box-mt demo-box" id="products" name="products">
      products pageination
      <pageination :totalPage="10" v-model="currentPage" @changePage="changePage"></pageination>
    </div>
    <div class="box-content box-mt demo-box" id="alliance" name="alliance">
      alliance select
      <select-comp></select-comp>
    </div>
    <div class="box-content box-mt demo-box">
      Waterfall
      <waterfall :imgArr="imgArr"></waterfall>
    </div>
    <div class="box-content box-mt demo-box" id="news" name="news">
      5<span>news</span>
    </div>
    <div class="box-content box-mt demo-box">
      6
    </div>
    <div class="box-content box-mt demo-box">
      7
    </div>
    <div class="box-content box-mt demo-box">
      8<span id="about" name="about">about</span>
    </div>
    <foot-demo :class="{fixed:isFixed}" class="box-mt" @eventGetHeight="getFooterHeight"></foot-demo>
  </div>
</template>
<script>
  import HeadDemo from "./components/head_demo";
  import FootDemo from "./components/foot_demo";
  import Waterfall from "./components/waterfall";
  import SortComp from "./components/sort_comp";
  import Pageination from "./components/pageination";
  import SelectComp from "./components/select_comp";
  export default {
    name: "demo_comps",
    components: {
      HeadDemo,
      FootDemo,
      Waterfall,
      SortComp,
      Pageination,
      SelectComp
    },
    data() {
      return {
        isFixed: true,
        footerHeight: 0,
        isShowMenu: true,
        activeRouter: "/",
        imgArr: [],
        currentPage: 1
      };
    },
    mounted() {
      this.init();
      this.isOver();
      window.addEventListener("resize", this.isOver);
    },
    beforeDestroy() {
      window.removeEventListener("resize", this.isOver);
    },
    methods: {
      init() {
        for (let i = 0; i < 20; i++) {
          this.imgArr.push(i);
          // this.imgArr.push(require("@a/duck.png"));
        }
      },
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
      },
      changePage(page) {
        console.log(page);
      }
    }
  };
</script>

<style lang="scss">
  .comps-main {
    .sort-comp-box {
      height: 500px;
    }
    .fixed {
      position: fixed;
      bottom: 0;
    }
  }
</style>
