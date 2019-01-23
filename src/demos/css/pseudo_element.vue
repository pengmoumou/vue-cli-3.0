<template>
  <div class="pseudo-element-main">
    <div class="box-content box-mt flex-box demo-box">
      <div class="box-mt">
        <p class="p-before">::before/:before</p>
        <p class="p-after">::after/:after</p>
      </div>
      <div class="box-mt">
        <p class="p-first-letter">::first-letter/:first-letter</p>
        <p class="p-first-line">::first-line/:first-line<br>next-line</p>
      </div>
      <div class="box-mt">
        <p class="p-grammar-error">::gRammar-error ???</p>
        <p class="p-spelling-error">::spelling-error ???</p>
      </div>
      <div class="box-mt">
        <p class="input-placeholder"><input type="text" placeholder="::placeholder"></p>
        <p class="p-selection">::selection</p>
      </div>
      <div class="box-mt">
        <div class="li-marker">
          <ul>
            <li>
              <p> ::marker ???</p>
            </li>
          </ul>
        </div>
        <my-slot class="slot-slotted">
          <p slot="mySlot">::slotted() ???</p>
        </my-slot>
      </div>
      <div class="box-mt">
        <p class="p-backdrop">::backdrop ???</p>
        <p class="p-cue">::cue/:cue ???</p>
      </div>
    </div>
    <div class="box-content box-mt demo-box">

    </div>
  </div>
</template>
<script>
  import MySlot from "./components/mySlot.vue";
  export default {
    name: "css_pseudo_element",
    components: {
      MySlot
    },
    data() {
      return {};
    }
  };
</script>

<style lang="scss">
  .pseudo-element-main {
    p {
      padding: 10px;
    }
    .p-before::before {
      content: "^o^";
      color: $theme-color;
    }
    .p-after::after {
      content: "^o^";
      color: $theme-color;
    }
    .p-first-letter::first-letter {
      color: $theme-color;
    }
    .p-first-line::first-line {
      color: $theme-color;
    }
    .p-grammar-error::grammar-error {
      color: $error-color;
      text-decoration-line: grammar-error;
    }
    .p-spelling-error::spelling-error {
      color: $error-color;
      text-decoration-line: grammar-error;
    }
    .input-placeholder input::placeholder {
      color: $theme-color;
    }
    .p-selection {
      user-select: all;
    }
    .p-selection::selection {
      color: $white-color;
      background: $theme-color;
    }
    .li-marker ul li::marker {
      color: $theme-color;
    }

    &::backdrop {
    }
  }
</style>
