<template>
  <div class="pdf-main">
    <div class="box-content">
      <canvas v-for="page in pages" :id="'the-canvas'+page" :key="page"></canvas>
    </div>
  </div>
</template>

<script>
import PDFJS from "pdfjs-dist";
const Base64 = require("js-base64").Base64;
export default {
  name: "plugin_pdf",
  data() {
    return {
      pdfDoc: null,
      pages: 0,
      url:
        "http://47.105.46.230/zhongrui/htmlToPdf/insurancePdf/lun?id=OJcL3YMH2W%2BDwaPSrCkvvgvN9hjEaK3e9A19SxZDh9yFQoqP0pWtrhiQFhPADrmt8md%2BmHEmR%2FcbVYsehRiDC7N18GRj0y1HSUSfWS3L9CQwVrRy4mdrBhi7WZHhLY6dbXAG9oJco85NafrN9DLfWFpKucF766XsOLwJIgkV95w%3D&&storeId=juDt8gWYclILZTRxoBL583FZqW16rJVaaTZj4eNyY9rn8g0mZjBWlNno7ja8J5NzqXkDAxQhljie0PuksjuUD53MiEvdCsZBIwmAHvQBf4fOGFA5ymLJxCncA5MbMMMb%2BzS0IBUanTuxboDKrDWwJ2%2F8lMJKYqhZ2BKKblozqbc%3D&&userId=226"
    };
  },
  created() {},
  mounted() {
    //在通过路由传参时需先转换成base64
    let url = Base64.encode(this.url);
    //解码
    url = Base64.decode(url);
    this._loadFile(url);
  },
  methods: {
    //谷歌浏览器手机调试模式可正常渲染pdf，放大后像素不佳
    //苹果手机7打开该页面，没有渲染pdf
    _renderPage(num) {
      this.pdfDoc.getPage(num).then(page => {
        let canvas = document.getElementById("the-canvas" + num);
        let ctx = canvas.getContext("2d");
        let dpr = window.devicePixelRatio || 1;
        let bsr =
          ctx.webkitBackingStorePixelRatio ||
          ctx.mozBackingStorePixelRatio ||
          ctx.msBackingStorePixelRatio ||
          ctx.oBackingStorePixelRatio ||
          ctx.backingStorePixelRatio ||
          1;
        let ratio = dpr / bsr;
        let viewport = page.getViewport(
          screen.availWidth / page.getViewport(1).width
        );
        canvas.width = viewport.width * ratio;
        canvas.height = viewport.height * ratio;
        canvas.style.width = viewport.width + "px";
        canvas.style.height = viewport.height + "px";
        ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
        let renderContext = {
          canvasContext: ctx,
          viewport: viewport
        };
        page.render(renderContext);
        if (this.pages > num) {
          this._renderPage(num + 1);
        }
      });
    },
    _loadFile(url) {
      PDFJS.getDocument(url).then(pdf => {
        this.pdfDoc = pdf;
        this.pages = this.pdfDoc.numPages;
        this.$nextTick(() => {
          this._renderPage(1);
        });
      });
    }
  }
};
</script>

<style lang="scss">
.pdf-main {
  canvas {
    display: block;
    // border-bottom: 1px solid black;
  }
}
</style>