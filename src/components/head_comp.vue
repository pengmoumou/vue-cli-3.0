<template>
  <div class="head-main">
    <div class="logo-box">
        <img src="@/assets/duck.png" class="logo-img">
    </div>
  </div>
</template>
<script>
export default {
    name:"head_comp"
}
</script>

<style lang="scss">
    .head-main{
        color:$theme-color;
        width:1200px;
        margin:0 auto;
        background: #fff;
        .logo-img{
            width:80px;
            height: 80px;
        }
    }
</style>
