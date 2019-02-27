 <template>
  <div class="select-main">
    <select v-model="value">
      <option value="10">10</option>
      <option value="25">25</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
  </div>
</template>

<script>
  export default {
    name: "select_comp",
    data() {
      return {
        value: "25"
      };
    },
    watch: {
      //监听选择框的选择操作，将选择的值传给父组件
      value(val) {
        this.$emit("clickChoose", Number(val));
      }
    },
    methods: {}
  };
</script>

<style lang="scss">
  .choose-shownum {
  }
</style>
