<template>
  <div class="transition-main">
    <div class="box-content box-mt demo-box flex-box">
      <p class="showNum">isShow:{{isShow}}</p>
      <transition-group v-if="transList.length > 0" name="trans-list" tag="ul" class="button-ul">
        <li class="button-li" v-for="item in transList" :key="item.value">
          <button @click="isShow==item.value?isShow=0:isShow=item.value">{{item.text}}</button>
        </li>
      </transition-group>
      <ul class="show-ul">
        <li class="show-li" v-for="(item,index) in transList" :key="index">
          <transition :name="item.name">
            <p v-if="isShow==item.value">{{item.name}}</p>
          </transition>
        </li>
      </ul>
    </div>
    <div class="box-content box-mt demo-box">
      <div class="angle-box" @click="toSort(sort)">
          点击这里排序
          <i class="angle_top" :class="sort=='asc'?'sort-color':'default-color'"></i>
          <i class="angle_bottom" :class="sort=='desc'?'sort-color':'default-color'"></i>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "demo_transition",
    data() {
      return {
        isShow: 0,
        sort:'',
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
    },
    methods:{
      toSort(val){
        console.log(val)
        if(val==''){
          val='asc';
        }        
        if(val=='asc'){
          this.transList.sort(function (a, b){
            return a.value - b.value;
          })
          this.sort='desc';
        }else if(val=='desc'){
          this.transList.sort(function (a, b){
            return b.value - a.value;
          })
          this.sort='asc';
        }  
      }
    }
  };
</script>

<style lang="scss">
  .transition-main {
    .button-ul {
      margin: 20px;
      display: flex;
      .button-li button {
        cursor: pointer;
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
    .slide-fade-enter, .slide-fade-leave-to /* .slide-fade-leave-active for below version 2.1.8 */ {
      transform: translateX(10px);
      opacity: 0;
    }
    .angle-box{
      border:1px solid $theme-color;
      border-radius: 5px;
      width:100px;
      position: relative;
      cursor: pointer;
      .angle_top {
        content: '';
        width: 0;
        height: 0;
        display: block;
        border-style: solid;
        border-width: 0 6px 6px;
        position: absolute;
        transform: rotate(180deg);
        bottom: 2px;
        right: -5px;
      }
      .angle_bottom {
        content: '';
        width: 0;
        height: 0;
        display: block;
        border-style: solid;
        border-width: 0 6px 6px;
        position: absolute;
        top: 2px;
        right: -5px;
      }
      .sort-color{
        border-color: transparent transparent #0cba71;
      }
      .default-color{
        border-color: transparent transparent #5e5e5e;
      }
    }
    .trans-list-move{
      transition:transform 500ms;
    }
  }
</style>
