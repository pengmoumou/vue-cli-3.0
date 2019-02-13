<template>
  <div class="head-demo">
    <div class="logo-box" @click="pushRouter('/')">
      <img src="@a/duck.png" class="logo-img">
    </div>
    <div class="menu-box">
      <div class="menu-icon" @click.stop="showMenu">icon</div>
      <transition name="menu-anim">
        <ul class="menu-ul" v-if="isShowMenu">
          <li @click="pushRouter('/')" :class="{active:value=='/'}"><a href="#home">首页</a></li>
          <li @click="pushRouter('/products')" :class="{active:value=='/products'}"><a
              href="#products">产品中心</a></li>
          <li @click="pushRouter('/alliance')" :class="{active:value=='/alliance'}"><a
              href="#alliance">生态共建</a></li>
          <li @click="pushRouter('/about')" :class="{active:value=='/about'}"><a
              href="#about">关于我们</a></li>
          <li @click="pushRouter('/news')" :class="{active:value=='/news'}"><a
              href="#news">新闻资讯</a></li>
        </ul>
      </transition>
    </div>
  </div>
</template>
<script>
  export default {
    name: "head_demo",
    props: {
      isShowMenu: {},
      value: { default: "/" }
    },
    data() {
      return {};
    },
    methods: {
      showMenu() {
        this.$emit("showMenu");
      },
      pushRouter(path) {
        this.$emit("input", path);
        // this.$router.push({ path });
      }
    }
  };
</script>

<style lang="scss">
  .head-demo {
    width: 100%;
    background: $white-color;
    display: flex;
    justify-content: space-between;
    .menu-box {
      li {
        margin: 0 5px;
        padding: 5px 0;
      }
      li.active,
      li:hover {
        color: $theme-color;
        border-bottom: 2px solid $theme-color;
      }
    }
  }
</style>
