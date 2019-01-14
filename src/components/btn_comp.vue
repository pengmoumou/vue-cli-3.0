<template>
  <div class="btn-box" :style="'{width:'+size*10+'%;}'">
    <button class="btn" @click="onClick">{{value}}</button>
  </div>
</template>
<script>
  export default {
    name: "btn_comp",
    props: ["value", "bg-color", "color", "size"],
    methods: {
      onClick() {
        this.$emit("onClick");
      }
    }
  };
</script>

<style lang="scss">
  .btn-box {
    .btn {
      width: 100%;
      font-size: 2em;
    }
  }
</style>
