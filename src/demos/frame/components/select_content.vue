<template>
  <div class="select-content">
    <div class="box-content box-mt demo-box">
      <el-select v-model="value" :multiple="true">
        <el-option v-for="item in options" :key="item" :label="item" :value="item"></el-option>
      </el-select>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Select, Option } from "element-ui";
Vue.use(Select);
Vue.use(Option);
export default {
  name: "select_content",
  props: {
    options: {
      default: []
    }
  },
  data() {
    return {
      value: ""
    };
  },
  created() {
    // console.log(this.options);
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
.select-content {
}
</style>
