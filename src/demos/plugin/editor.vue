<template>
  <div class="editor-main">
    <div class="box-content box-mt">
      <vue-quill-editor>
      </vue-quill-editor>
    </div>
  </div>
</template>
<script>
  import VueQuillEditor from "./components/vue_quill_editor";
  export default {
    name: "demo_editor",
    components: {
      VueQuillEditor
    },
    data() {
      return {};
    },
    methods: {}
  };
</script>

<style lang="scss">
  .editor-main {
  }
</style>
