<template>
  <div class="pseudo-class-main">
    <div class="box-content box-mt demo-box flex-box">
      <div class="box-mt">
        <p class="p-hover">:hover</p>
        <p class="p-active">:active</p>
      </div>
    </div>
    <div class="box-content box-mt demo-box">
      <p class="box-title">
        {{$t('demo.instance')}}
      </p>
      <penguin-instance></penguin-instance>
    </div>
  </div>
</template>
<script>
  import PenguinInstance from "./components/penguin_instance";
  export default {
    name: "css_pseudo_class",
    data() {
      return {};
    },
    components: {
      PenguinInstance
    },
    methods: {}
  };
</script>

<style lang="scss">
  .pseudo-class-main {
    p {
      padding: 10px;
    }
    .p-hover:hover {
      color: $theme-color;
    }
    .p-active:active {
      color: $theme-color;
    }
  }
</style>
