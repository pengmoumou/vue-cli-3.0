<template>
  <div class="myslot">
      <slot name="mySlot"></slot>
  </div>
</template>
<script>
  export default {
    name: "k_line"
  };
</script>

<style lang="scss">
    .myslot::slotted(*){
        color:$theme-color;
    }
</style>
