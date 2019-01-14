<template>
  <div class="animation-main">
    <div class="box-content box-mt demo-box">
      <div class="moving-box"></div>
    </div>
    <div class="box-content box-mt ball-box">
      <div class="cir">
        <div class="ballA">A</div>
        <div class="ballB">B</div>
      </div>
    </div>
    <div class="box-content box-mt ball-box">
      <div class="cir">
        <div class="ballA">A</div>
        <div class="ballB">B</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "demo_animation",
    data() {
      return {};
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        let scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        let docBox = document.getElementsByClassName("ball-box")[1];
        if (scrollTop >= docBox.offsetTop) {
          console.log("ffff");
        }
      }
    }
  };
</script>

<style lang="scss">
  .animation-main {
    .moving-box {
      width: 50px;
      height: 50px;
      background: $theme-color;
      animation: mbox 5s ease 0s infinite alternate;
    }
    .ball-box {
      position: relative;
      height: 200px;
      .cir {
        width: 200px;
        height: 200px;
        border: 2px solid #999;
        border-radius: 50%;
        position: absolute;
        .ballA {
          text-align: center;
          width: 20px;
          height: 20px;
          background-color: $theme-color;
          border-radius: 50%;
          position: absolute;
          animation: animXA 1s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite
              alternate,
            animYA 1s cubic-bezier(0.36, 0, 0.64, 1) 0.5s infinite alternate;
        }
        .ballB {
          text-align: center;
          width: 20px;
          height: 20px;
          background-color: $theme-color;
          border-radius: 50%;
          position: absolute;
          animation: animXB 1s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite
              alternate,
            animYB 1s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate;
        }
      }
    }
  }
  @keyframes animXA {
    0% {
      left: -10px;
    }
    100% {
      left: 190px;
    }
  }
  @keyframes animYA {
    0% {
      top: -10px;
    }
    100% {
      top: 190px;
    }
  }
  @keyframes animXB {
    0% {
      left: 100px;
    }
    33% {
      left: 0px;
    }
    67% {
      left: 90px;
    }
    100% {
      left: 100px;
    }
  }
  @keyframes animYB {
    0% {
      top: 90px;
    }
    33% {
      top: 40px;
    }
    67% {
      top: -10px;
    }
    100% {
      top: 90px;
    }
  }
  @keyframes mbox {
    0% {
      margin-left: 0;
      margin-top: 0;
    }
    25% {
      margin-left: 100px;
      margin-top: 0;
    }
    50% {
      margin-left: 100px;
      margin-top: 50px;
    }
    75% {
      margin-left: 0;
      margin-top: 50px;
    }
    100% {
      margin-left: 0;
      margin-top: 0;
    }
    // from {
    //   margin-left: 0;
    // }
    // to {
    //   margin-left: 100px;
    // }
  }
</style>
