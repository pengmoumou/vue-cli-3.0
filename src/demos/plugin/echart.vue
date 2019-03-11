<template>
  <div class="echart-main">
    <div class="box-content box-mt">
      <div id="first-echart"></div>
    </div>
  </div>
</template>
<script>
  import echarts from "echarts";
  export default {
    name: "demo_echart",
    data() {
      return {};
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        let myChart = echarts.init(document.getElementById("first-echart"));
        let option = {
          color: ["#f44"],
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow"
            }
          },
          xAxis: [
            {
              type: "category",
              data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
              ],
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis: [
            {
              type: "value"
            }
          ],
          series: [
            {
              name: "每月花费",
              type: "bar",
              barWidth: "60%",
              data: [995, 666, 444, 858, 654, 236, 645, 546, 846, 225, 547, 356]
            }
          ]
        };
        myChart.setOption(option);
      }
    }
  };
</script>

<style lang="scss">
  .echart-main {
    #first-echart {
      width: 500px;
      height: 500px;
    }
  }
</style>
