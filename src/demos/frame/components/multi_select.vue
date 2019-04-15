<template>
  <div class="multi-select">
    <div class="box-content box-mt demo-box">
      <popover v-model="visible">
        <select-content :options="list"></select-content>
      </popover>
    </div>
  </div>
</template>
<script>
import { Popover } from "element-ui";
import SelectContent from "./select_content";
export default {
  name: "multi_select",
  components: {
    SelectContent,
    Popover
  },
  props: {
    list: {
      default: []
    }
  },
  data() {
    return {
      visible: true
    };
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
.multi-select {
}
</style>
