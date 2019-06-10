<template>
  <div class="echart-main">
    <div class="box-content box-mt">
      <div id="first-echart" class="chart"></div>
    </div>
    <div class="box-content box-mt">
      <div id="echartA" class="chart"></div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
import { colorList } from '@/script/color.js'
export default {
  name: 'demo_echart',
  data() {
    return {
      optionA: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        legend: {
          data: ['正面', '中性', '负面']
        },
        toolbox: {
          show: true,
          right: '50',
          feature: {
            mark: { show: true },
            saveAsImage: {
              show: true,
              title: 'SAVE AS A PICTURE'
            }
          }
        },
        xAxis: {
          type: 'value',
          axisLabel: {
            show: true,
            interval: 'auto'
          },
          max: 100,
          min: 0,
          show: true
        },
        yAxis: [
          {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        calculable: true,
        series: [
          {
            name: '正面',
            type: 'bar',
            stack: '总量',
            data: [32, 30, 30, 33, 39, 33, 32],
            itemStyle: {
              normal: {
                color: colorList[0]
              }
            }
          },
          {
            name: '中性',
            type: 'bar',
            stack: '总量',
            data: [12, 13, 10, 13, 9, 23, 21],
            itemStyle: {
              normal: {
                color: colorList[1]
              }
            }
          },
          {
            name: '负面',
            type: 'bar',
            stack: '总量',
            data: [22, 18, 19, 23, 29, 33, 31],
            itemStyle: {
              normal: {
                color: colorList[2]
              }
            }
          },
          {
            name: '',
            type: 'bar',
            stack: '总量',
            itemStyle: {
              normal: {
                color: '#fff'
              }
            },
            label: {
              normal: {
                formatter: params => {
                  // console.log(params.data)
                  return params.data * 100 + '%'
                },
                show: true,
                color: '#333',
                position: 'right'
              }
            },
            data: [
              15 / 100,
              22 / 100,
              20 / 100,
              15 / 100,
              19 / 100,
              33 / 100,
              41 / 100
            ]
          }
        ]
      }
    }
  },
  mounted() {
    this.init()
    this.initChart('A')
  },
  methods: {
    init() {
      let myChart = echarts.init(document.getElementById('first-echart'))
      let option = {
        color: ['#f44'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: [
          {
            type: 'category',
            data: [
              '1月',
              '2月',
              '3月',
              '4月',
              '5月',
              '6月',
              '7月',
              '8月',
              '9月',
              '10月',
              '11月',
              '12月'
            ],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '每月花费',
            type: 'bar',
            barWidth: '60%',
            data: [995, 666, 444, 858, 654, 236, 645, 546, 846, 225, 547, 356]
          }
        ]
      }
      myChart.setOption(option)
    },
    initChart(id) {
      let myChart = echarts.init(document.getElementById('echart' + id))
      myChart.setOption(this['option' + id])
      // console.log(this['option' + id])
      //on click
      myChart.on('click', params => {
        // console.log(params);
      })
    }
  }
}
</script>

<style lang="scss">
.echart-main {
  .chart {
    width: 100%;
    height: 500px;
    // margin: 0 auto;
  }
}
</style>
