<template>
  <div class="head-main">
    <div class="logo-box" @click="toHome">
      <img src="@a/duck.png" class="logo-img">
    </div>
    <div class="lang-box" @click="changelang">
      <img :src="langImg" class="icon">
    </div>
  </div>
</template>
<script>
  import zhIcon from "@a/zh.png";
  import enIcon from "@a/en.png";
  export default {
    name: "head_comp",
    data() {
      return {
        lang: this.$i18n.locale
      };
    },
    computed: {
      langImg() {
        if (this.lang == "zh") {
          return zhIcon;
        } else {
          return enIcon;
        }
      }
    },
    methods: {
      toHome() {
        this.$router.push({ path: "/" });
      },
      changelang() {
        if (this.lang == "zh") {
          this.lang = "en";
        } else {
          this.lang = "zh";
        }
        this.$i18n.locale = this.lang;
        localStorage.setItem("vue_language", this.lang);
      }
    }
  };
</script>

<style lang="scss">
  .head-main {
    color: $theme-color;
    width: 1200px;
    margin: 0 auto;
    @media screen and (max-width: $mobile) {
      width: 100%;
      margin: 0;
    }
    background: #fff;
    display: flex;
    justify-content: space-between;
    .lang-box {
      padding: 20px;
    }
  }
</style>
