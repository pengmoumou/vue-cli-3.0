<template>
  <div class="vue-quill-editor">
    <!-- bidirectional data binding（双向数据绑定） -->
    <quill-editor v-model="content" ref="myQuillEditor" :options="editorOption"
      @blur="onEditorBlur($event)" @focus="onEditorFocus($event)" @ready="onEditorReady($event)">
    </quill-editor>
    <!-- Or manually control the data synchronization（或手动控制数据流） -->
    <!-- <quill-editor :content="content" :options="editorOption" @change="onEditorChange($event)">
    </quill-editor> -->
  </div>
</template>
<script>
  import "quill/dist/quill.core.css";
  import "quill/dist/quill.snow.css";
  import "quill/dist/quill.bubble.css";
  import { quillEditor } from "vue-quill-editor";
  export default {
    name: "vue_quill_editor",
    components: {
      quillEditor
    },
    data() {
      return {
        content: "",
        editorOption: {
          // some quill options
        }
      };
    },
    methods: {
      onEditorBlur(editor) {
        console.log("editor blur!", editor);
      },
      onEditorFocus(editor) {
        console.log("editor focus!", editor);
      },
      onEditorReady(editor) {
        console.log("editor ready!", editor);
      },
      onEditorChange({ editor, html, text }) {
        console.log("editor change!", editor, html, text);
        this.content = html;
      }
    }
  };
</script>

<style lang="scss">
  .vue-quill-editor {
  }
</style>
