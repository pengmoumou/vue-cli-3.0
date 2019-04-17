<template>
  <div class="pageination-two-main flex-box" v-show="show">
    <button class="btn" v-show="efont&&currentPage>=1" @click="changePage(1)"
      :class="{active:currentPage==1}">1</button>
    <span class="ellipsis" v-show="efont&&currentPage > 2">...</span>
    <select v-model="selectPage">
      <option v-for="(option,index) in options" :key="index" :value="option"
        :label="option"></option>
    </select>
    <span class="ellipsis" v-show="efont&&currentPage<totalPage-1">...</span>
    <button class="btn" v-show="efont&&currentPage<=totalPage" @click="changePage(totalPage)"
      :class="{active:currentPage==totalPage}">{{totalPage}}</button>

  </div>
</template>
<script>
  export default {
    name: "pageination_two",
    props: {
      value: { defalut: 1 }, //当前页
      totalPage: { defalut: 0 } //总页数
    },
    data() {
      return {
        selectPage: this.currentPage
      };
    },
    computed: {
      currentPage() {
        this.selectPage = this.value;
        return this.value;
      },
      show() {
        return this.totalPage && this.totalPage != 1;
      },
      efont() {
        if (this.totalPage < 3) return false;
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
      },
      options() {
        let arr = [];
        for (let i = 1; i <= this.totalPage; i++) {
          arr.push(i);
        }
        return arr;
      }
    },
    watch: {
      selectPage(page) {
        this.changePage(page);
      }
    },
    methods: {
      changePage(page) {
        console.log(page);
        if (page !== this.currentPage) {
          this.$emit("input", page);
          this.$emit("changePage", page);
        }
      }
    }
  };
</script>

<style lang="scss">
  .pageination-two-main {
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
