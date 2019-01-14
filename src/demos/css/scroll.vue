<template>
  <div class="scroll-main">
      <div class="box-content box-mt scroll-box">
      </div>
  </div>
</template>
<script>
  export default {
    name: "demo_scroll",
    mounted () {//给window添加一个滚动滚动监听事件
        window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {//离开该页面需要移除这个监听的事件
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll () { //改变元素#searchBar的top值
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if(scrollTop<=200){
                console.log(true);
            }else{
                console.log(false);
            }
        },
    },
  };
</script>

<style lang="scss">
    .scroll-main{
        .scroll-box{
            height: 2000px;
        }
    }
        
</style>

