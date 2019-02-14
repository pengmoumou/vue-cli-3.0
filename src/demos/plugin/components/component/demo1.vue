<template>
<!-- demo页面-获取传参/子路由的切换 -->
  <div class="demo1">
      111111111111111111111111111111
  </div>
</template>

<script>
export default {
  data(){
      return {

      }
  }, 
  created(){
    console.log(this.$route.params.id)
  }
}
</script>

<style lang="scss">

</style>