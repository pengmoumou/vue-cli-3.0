<template>
  <div class="cascader-select">
    <div v-for="(item,index) in cascaderList" :key="index" class="select-item">
      <el-select
        v-model="cascaderValue[index]"
        @change="handleItemChange(index)"
        value-key="value"
        :multiple="true"
        @remove-tag="isRemove=true"
      >
        <el-option v-for="(option,id) in item" :key="id" :label="option.label" :value="option"></el-option>
      </el-select>
    </div>
  </div>
</template>
<script>
export default {
  name: "cascader_select",
  data() {
    return {
      cascaderValue: [],
      cascaderList: [[]],
      isRemove: false
    };
  },
  props: {
    value: {
      default: ""
    },
    options: {
      default: []
    }
  },
  computed: {
    selectValue() {
      let selectValue = [];
      selectValue = this.cascaderValue.map(item => {
        if (Array.isArray(item) && item.length > 0) {
          return item.map(theItem => {
            return theItem.value;
          });
        }
      });
      return selectValue.map(item => {
        let result = item;
        if (Array.isArray(item) && item.length > 0) {
          result = item.join(",");
        }
        return result;
      });
    },
    selectName() {
      let selectName = [];
      selectName = this.cascaderValue.map(item => {
        if (Array.isArray(item) && item.length > 0) {
          return item.map(theItem => {
            return theItem.label;
          });
        }
      });
      return selectName.map(item => {
        let result = item;
        if (Array.isArray(item) && item.length > 0) {
          result = item.join(",");
        }
        return result;
      });
    }
  },
  watch: {},
  created() {
    this.getCategoryList(true);
  },
  mounted() {},
  methods: {
    getCategoryList(flag = false, index = 0) {
      //若需要实现多个值决定下一个选择框的选项，需要请求搜索接口
      let resData = [];
      if (flag) {
        this.cascaderList = [];
        resData = this.options;
      } else {
        let item = this.cascaderValue[index];
        // console.log(item);
        resData = item[item.length - 1].children
          ? item[item.length - 1].children
          : [];
        // console.log(resData);
      }
      if (!this.isRemove) {
        if (Array.isArray(resData) && resData.length > 0) {
          this.cascaderList.push(resData);
        }
      } else {
        this.isRemove = false;
      }
      //   console.log(this.cascaderList);
    },
    handleItemChange(index) {
      // console.log(index);
      if (this.cascaderValue.length > index + 1) {
        if (this.cascaderValue.length > index + 2) {
          this.cascaderValue.slice(0, index + 2);
        }
        this.cascaderValue[index + 1] = [];
      }
      this.cascaderList =
        this.cascaderList.length > index + 1
          ? this.cascaderList.slice(0, index + 1)
          : this.cascaderList;
      //   console.log(index);
      //   console.log(this.cascaderValue);
      this.getCategoryList(false, index);
      let data = {
        values: this.selectValue,
        labels: this.selectName
      };
      // console.log(data);
      this.$emit(
        "input",
        Array.isArray(this.selectName) && this.selectName.length > 0
          ? this.selectName.join(",")
          : ""
      );
      this.$emit("change", data);
    }
  }
};
</script>

<style lang="scss">
.cascader-select {
  width: 100%;
  padding: 20px 0 !important;
  position: relative;
  z-index: 100;
  background: #fff;
  border: 1px solid #dcdfe6;
  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12),
    0 0 6px 0 rgba(0, 0, 0, 0.04);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
  display: flex;
  .select-item {
    border: 1px $theme-color solid;
    margin-right: 20px;
    // margin-left: 20px;
    &:first-child {
      margin-left: 20px;
      // margin-left: 0;
    }
  }
}
</style>
