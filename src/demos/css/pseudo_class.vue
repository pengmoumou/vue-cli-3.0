<template>
  <div class="pseudo-class-main">
    <div class="box-content box-mt demo-box flex-box">
      <div class="box-mt">
        <p class="p-hover">:hover</p>
        <p class="p-active">:active</p>
      </div>
    </div>
    <div class="box-content box-mt demo-box">

    </div>
  </div>
</template>
<script>
  export default {
    name: "demo_pseudo_class",
    data() {
      return {};
    }
  };
</script>

<style lang="scss">
  .pseudo-class-main {
    p{
          padding:10px;
      }
    .p-hover:hover{
      color:$theme-color;
    }
    .p-active:active{
      color:$theme-color;
    }
  }
</style>
