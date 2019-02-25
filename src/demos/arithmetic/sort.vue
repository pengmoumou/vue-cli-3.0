<template>
  <div class="sort-main">
    <div class="box-content box-mt demo-box">
      <div class="init-arr">{{initArr}}</div>
      <div class="sort-btns"><button class="btn" v-for="(item,index) in sortBtns"
          :key="index" @click="sort(item.type,item.serial)">{{$t(item.label)}}
          {{item.serial}}</button></div>
      <div class="result-arr">{{$t('text.result')}}: {{resultArr}}<button
          class="btn" @click="resultArr=[]">{{$t('btn.clear')}}</button>
        {{time}}
        ms</div>
    </div>
    <div class="box-content box-mt demo-box">
    </div>
  </div>
</template>
<script>
  export default {
    name: "arithmetic_sort",
    data() {
      return {
        initArr: [1, 5, 2, 8, 6, 9, 3, 7],
        resultArr: [],
        sortBtns: [
          { label: "arithmetic.bubble", serial: "", type: "bubble" },
          { label: "arithmetic.insert", serial: "A", type: "insert" },
          { label: "arithmetic.insert", serial: "B", type: "insert" },
          { label: "arithmetic.insert", serial: "C", type: "insert" },
          { label: "arithmetic.select", serial: "", type: "select" },
          { label: "arithmetic.merge", serial: "", type: "merge" },
          { label: "arithmetic.quick", serial: "", type: "quick" },
          { label: "arithmetic.heap", serial: "", type: "heap" }
        ],
        time: 0
      };
    },
    created() {},
    methods: {
      sort(type, serial) {
        let start = new Date().getTime();
        // console.log(start);
        let arr = [...this.initArr];
        switch (type) {
          case "bubble": {
            for (let i = 0; i < arr.length; i++) {
              for (let j = 0; j < arr.length - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                  this.swap(arr, j, j + 1);
                }
              }
            }
            break;
          }
          case "insert": {
            switch (serial) {
              case "A": {
                for (let i = 0; i < arr.length; i++) {
                  let num = arr[i];
                  let j = i;
                  for (; j > 0; j--) {
                    if (num < arr[j - 1]) {
                      arr[j] = arr[j - 1];
                    } else {
                      break;
                    }
                  }
                  arr[j] = num;
                }
                break;
              }
              case "B": {
                for (let i = 1; i < arr.length; i++) {
                  let num = arr[i];
                  let j = i;
                  while (j > 0 && arr[j - 1] > num) {
                    arr[j] = arr[j - 1];
                    j--;
                  }
                  arr[j] = num;
                }
                break;
              }
              case "C": {
                let arrC = [];
                for (let i = 0; i < arr.length; i++) {
                  for (let j = 0; j < i; j++) {
                    if (arr[i] < arrC[j]) {
                      arrC.splice(j, 0, arr[i]);
                      break;
                    }
                  }
                  if (!arrC[i]) {
                    arrC[i] = arr[i];
                  }
                }
                arr = arrC;
                break;
              }
            }
            break;
          }
          case "select": {
            for (let i = 0; i < arr.length; i++) {
              let min = i;
              for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[min]) {
                  min = j;
                }
              }
              if (i != min) {
                this.swap(arr, min, i);
              }
            }
            break;
          }
          case "merge": {
            let that = this;
            arr = (function mergeSortRec(array) {
              if (array.length == 1) {
                return array;
              }
              let mid = Math.floor(array.length / 2);
              let left = array.slice(0, mid);
              let right = array.slice(mid, array.length);
              return that.merge(mergeSortRec(left), mergeSortRec(right));
            })(arr);
            break;
          }
          case "quick": {
            let that = this;
            arr = (function quick(array, left, right) {
              if (array.length > 1) {
                let index = that.partition(array, left, right);
                // console.log(index);
                if (left < index - 1) {
                  // console.log('left' + left);
                  quick(array, left, index - 1);
                }
                if (index < right) {
                  // console.log('right' + right);
                  quick(array, index, right);
                }
                return array;
              }
            })(arr, 0, arr.length - 1);
            break;
          }
          case "heap": {
            let heapSize = arr.length;
            this.buildHeap(arr);
            while (heapSize > 1) {
              heapSize--;
              this.swap(arr, 0, heapSize);
              this.heapify(arr, heapSize, 0);
            }
            break;
          }
        }
        this.resultArr = arr;
        let end = new Date().getTime();
        // console.log(end);
        this.time = end - start;
        // console.log(end - start);
      },
      swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        // let val = arr[i];
        // arr[i] = arr[j];
        // arr[j] = val;
      },
      merge(left, right) {
        let result = [],
          il = 0,
          ir = 0;
        while (il < left.length && ir < right.length) {
          if (left[il] < right[ir]) {
            result.push(left[il++]);
          } else {
            result.push(right[ir++]);
          }
        }
        while (il < left.length) {
          result.push(left[il++]);
        }
        while (ir < right.length) {
          result.push(right[ir++]);
        }
        return result;
      },
      partition(array, left, right) {
        let pivot = array[Math.floor((right + left) / 2)],
          i = left,
          j = right;
        while (i <= j) {
          while (array[i] < pivot) {
            i++;
          }
          while (array[j] > pivot) {
            j--;
          }
          if (i <= j) {
            this.swap(array, i, j);
            i++;
            j--;
          }
        }
        return i;
      },
      buildHeap(array) {
        let heapSize = array.length;
        for (let i = Math.floor(array.length / 2); i >= 0; i--) {
          this.heapify(array, heapSize, i);
        }
      },
      heapify(array, heapSize, i) {
        let left = i * 2 + 1,
          right = i * 2 + 2,
          largest = i;
        if (left < heapSize && array[left] > array[largest]) {
          largest = left;
        }
        if (right < heapSize && array[right] > array[largest]) {
          largest = right;
        }
        if (largest !== i) {
          this.swap(array, i, largest);
          this.heapify(array, heapSize, largest);
        }
      }
    }
  };
</script>

<style lang="scss">
  .sort-main {
    .init-arr,
    .result-arr {
      padding: 20px;
    }
    .sort-btns {
      padding: 20px 0;
      border: $theme-color 1px solid;
    }
  }
</style>
