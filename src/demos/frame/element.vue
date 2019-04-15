<template>
  <div class="element-main">
    <div class="box-content box-mt demo-box">
      <multi-select :list="selectList"></multi-select>
    </div>
    <div class="box-content box-mt demo-box">
      <multi-cascader :options="cascaderList" v-model="cascaderValue"></multi-cascader>
    </div>
  </div>
</template>
<script>
import MultiSelect from "./components/multi_select";
import MultiCascader from "./components/multi_cascader";
export default {
  name: "frame_element",
  components: {
    MultiSelect,
    MultiCascader
  },
  data() {
    return {
      selectList: [],
      cascaderValue: [],
      cascaderList: []
    };
  },
  created() {
    this.selectList = [1, 2, 3];
    this.cascaderList = [
      {
        label: 1,
        value: 1,
        children: [{ label: 11, value: 11 }, { label: 12, value: 12 }]
      },
      {
        label: 2,
        value: 2,
        children: [{ label: 21, value: 21 }, { label: 22, value: 22 }]
      },
      { label: 3, value: 3, children: [] },
      { label: 4, value: 4 }
    ];
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
@import "~element-ui/lib/theme-chalk/index.css";
.element-main {
}
</style>
