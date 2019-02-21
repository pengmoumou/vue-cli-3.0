<template>
  <div class="closure-main">
    <div class="box-content box-mt demo-box">
      <p>{{go('l')}}</p>
      <p>{{go()('l')}}</p>
      <p>{{go()()('l')}}</p>
      <p>{{go()()('d')}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: "arithmetic_closure",
    data() {
      return {};
    },
    methods: {
      go(chars) {
        let str = "go";
        let func = function(chars) {
          //   if (chars === "l") {
          //     str += "l";
          //     return str;
          if (chars) {
            str += chars;
            return str;
          } else {
            str += "o";
            return func;
          }
          //   return str;
        };
        // if (chars === "l") {
        //   return str;
        // } else {
        //   return func;
        // }
        // if (chars === "l") {
        //   str += "l";
        //   return str;
        // } else {
        //   str += "o";
        //   return func;
        // }
        return func(chars);
      }
    }
  };
</script>

<style lang="scss">
  .closure-main {
  }
</style>
