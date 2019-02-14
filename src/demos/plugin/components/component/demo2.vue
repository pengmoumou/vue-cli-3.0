<template>
<!-- demo页面-获取传参/子路由的切换 -->
  <div class="demo2">
      2222222222222222222222222222
  </div>
</template>

<script>
export default {
  data(){
      return {

      }
  }, 
  created(){
    console.log(this.$route.query.id)
  }
}
</script>

<style lang="scss">

</style>