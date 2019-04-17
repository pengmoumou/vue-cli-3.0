<template>
  <div class="pageination-one-main flex-box" v-show="show">
    <button class="btn" v-show="efont&&currentPage>2" @click="changePage(1)">1</button>
    <span class="ellipsis" v-show="efont&&currentPage > 2" @click="selectPage(1)">...</span>
    <button class="btn" v-for="(num,index) in indexs" :key="index" :class="{active:currentPage==num}"
      @click="changePage(num)">{{num}}</button>
    <span class="ellipsis" v-show="efont&&currentPage<totalPage-1" @click="selectPage(2)">...</span>
    <button class="btn" v-show="efont&&currentPage<totalPage-1" @click="changePage(totalPage)">{{totalPage}}</button>
    <ul v-if="isShow">
      <li v-for="(option,index) in options" :key="index" @click="handleSelect(option)">第{{option}}页</li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: "pageination_one",
    props: {
      value: { defalut: 1 }, //当前页
      totalPage: { defalut: 0 } //总页数
    },
    data() {
      return {
        isShow: false,
        options: []
      };
    },
    computed: {
      currentPage() {
        return this.value;
      },
      show() {
        return this.totalPage && this.totalPage != 1;
      },
      efont() {
        if (this.totalPage < 4) return false;
        return true;
      },
      indexs() {
        let left = 1,
          right = this.totalPage,
          arr = [];
        if (this.totalPage >= 4) {
          if (this.currentPage > 2 && this.currentPage < this.totalPage - 1) {
            left = Number(this.currentPage);
            right = Number(this.currentPage);
          } else {
            if (this.currentPage <= 2) {
              left = 1;
              right = 2;
            } else {
              right = this.totalPage;
              left = this.totalPage - 1;
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
        if (page !== this.currentPage) {
          this.$emit("input", page);
          this.$emit("changePage", page);
        }
      },
      selectPage(type) {
        let arr = [];
        switch (type) {
          case 1: {
            for (let i = 2; i < this.currentPage; i++) {
              arr.push(i);
            }
            break;
          }
          case 2: {
            for (let i = this.totalPage - 1; i > this.currentPage; i--) {
              arr.push(i);
            }
            break;
          }
        }
        this.options = arr;
        this.isShow = true;
      },
      handleSelect(page) {
        this.changePage(Number(page));
        this.isShow = false;
      }
    }
  };
</script>

<style lang="scss">
  .pageination-one-main {
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
