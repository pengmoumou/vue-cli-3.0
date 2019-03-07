<template>
  <div class="pageination-main flex-box" v-show="show">
    <button class="btn" v-show="currentPage>1" @click="changePage(currentPage-1)">上一页</button>
    <button class="btn" v-show="efont&&currentPage>3" @click="changePage(1)">1</button>
    <span class="ellipsis" v-show="efont&&currentPage > 3">...</span>
    <button class="btn" v-for="(num,index) in indexs" :key="index" :class="{active:currentPage==num}"
      @click="changePage(num)">{{num}}</button>
    <span class="ellipsis" v-show="efont&&currentPage<totalPage-2">...</span>
    <button class="btn" v-show="efont&&currentPage<totalPage-2" @click="changePage(totalPage)">{{totalPage}}</button>
    <button class="btn" @click="changePage(currentPage+1)" v-show="currentPage<totalPage">下一页</button>
  </div>
</template>
<script>
  export default {
    name: "pageination",
    props: {
      value: { defalut: 1 }, //当前页
      totalPage: { defalut: 0 } //总页数
    },
    computed: {
      currentPage() {
        return this.value;
      },
      show() {
        return this.totalPage && this.totalPage != 1;
      },
      efont() {
        if (this.totalPage <= 5) return false;
        return true;
      },
      indexs() {
        let left = 1,
          right = this.totalPage,
          arr = [];
        if (this.totalPage >= 5) {
          if (this.currentPage > 3 && this.currentPage < this.totalPage - 2) {
            left = Number(this.currentPage) - 1;
            right = Number(this.currentPage) + 1;
          } else {
            if (this.currentPage <= 3) {
              left = 1;
              right = 4;
            } else {
              right = this.totalPage;
              left = this.totalPage - 3;
            }
          }
        }
        while (left <= right) {
          arr.push(left);
          left++;
        }
        // console.log(arr);
        return arr;
      }
    },
    methods: {
      changePage(page) {
        // console.log(page);
        this.$emit("input", page);
        this.$emit("changePage", page);
      }
    }
  };
</script>

<style lang="scss">
  .pageination-main {
    padding: 20px 0 50px 0;
    justify-content: center !important;
    .btn {
      &:hover,
      &.active {
        background: $theme-color;
        color: $white-color;
      }
    }
    .ellipsis {
      padding: 0px 8px;
    }
  }
</style>
