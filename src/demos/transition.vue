<template>
  <div class="transition-main">
    <div class="box-content box-mt transition-box">
      <p class="showNum">isShow:{{isShow}}</p>
      <ul class="button-ul">
        <li class="button-li" v-for="(item,index) in transList" :key="index"><button
            @click="isShow==item.value?isShow=0:isShow=item.value">{{item.text}}</button></li>
      </ul>
      <ul class="show-ul">
        <li class="show-li" v-for="(item,index) in transList" :key="index">
          <transition :name="item.name">
            <p v-if="isShow==item.value">{{item.name}}</p>
          </transition>
        </li>
      </ul>
    </div>
    <div class="box-content box-mt transition-box">

    </div>
  </div>
</template>
<script>
  export default {
    name: "demo_transition",
    data() {
      return {
        isShow: 0,
        transList: [
          {
            value: 1,
            text: "Fade",
            name: "fade"
          },
          {
            value: 2,
            text: "Slice-Fade",
            name: "slide-fade"
          }
        ]
      };
    }
  };
</script>

<style lang="scss">
  .transition-main {
    .transition-box {
      min-height: 100px;
      padding: 20px;
      display: flex;
      .button-ul {
        margin: 20px;
        display: flex;
        .button-li button {
          margin-right: 20px;
          padding: 5px 10px;
          border-radius: 3px;
          background: rgba($light-color, 0.7);
          color: $dark-color;
          // border:solid $theme-color 1px;
          border: none;
          box-shadow: 1px 1px 2px $theme-color;
        }
      }
      .show-ul {
        width: 100px;
        height: 100px;
        border: solid $theme-color 1px;
        display: flex;
        .show-li {
          align-self: center;
          p {
            width: 100px;
            text-align: center;
          }
        }
      }
    }
    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }
    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .slide-fade-enter-active {
      transition: all 0.3s ease;
    }
    .slide-fade-leave-active {
      transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }
    .slide-fade-enter, .slide-fade-leave-to                                                                                         /* .slide-fade-leave-active for below version 2.1.8 */ {
      transform: translateX(10px);
      opacity: 0;
    }
  }
</style>
