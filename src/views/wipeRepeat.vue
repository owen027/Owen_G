<template>
  <div class="content">
    <p>One: indexOf方法去重: {{repeat}}</p>
    <p>Two: 哈希算法去重: {{has}} --- 会发生隐试转换</p>
    <p>Tree: 嵌套循环对比: {{loop}}</p>
    <p>Four: es6 拓展运算符: {{operator}}</p>
    <p>Five: es6 Set特性: {{set}}</p>
    <p>Six: 利用空对象来记录: {{objFlag}} --- 会发生隐试转换</p>
    <p>Seven: 下标去重: {{index}} --- 直接将重复的元素去除一个不留</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {
  private msg: Array<object | string | number> = [
    { a: 1 },
    {},
    { a: 1 },
    2,
    3,
    4,
    NaN,
    5,
    "3",
    NaN,
    3,
    "3",
    2,
    2,
    1,
    "6",
    3,
    1,
  ];

  get repeat() {
    const arr: Array<object | string | number> = [];
    for (let i = 0; i < this.msg.length; i++) {
      if (arr.indexOf(this.msg[i]) === -1) {
        arr.push(this.msg[i]);
      }
    }
    return arr;
    // 利用indexOf方法 判断筛选元素在新数组中是否存在,不存在则将筛选元素添加到新数组中
  }
  get has() {
    const obj: any = {},
      arr: any = [],
      len: any = this.msg.length;
    for (let i = 0; i < len; i++) {
      // 如果hash表中没有当前项
      if (!obj[len[i]]) {
        // 存入hash表
        obj[len[i]] = true;
        // 把当前数组的当前项push到临时数组里面
        arr.push(this.msg[i]);
      }
    }
    return arr;
  }
  get loop() {
    const len: any = this.msg;
    const arr: any = [];
    for (let i = 0; i < len.length; i++) {
      for (let j = i + 1; j < len.length; j++) {
        if (len[i] === len[j]) {
          ++i;
        }
      }
      arr.push(len[i]);
    }
    return arr;
  }
  get objFlag() {
    const obj: any = {},
      arr: any = [];
    const len: any = this.msg;
    for (let i = 0; i < len.length; i++) {
      if (!obj[len[i]]) {
        obj[len[i]] = true;
        arr.push(len[i]);
      }
    }
    return arr;
  }
  get index() {
    const arr: any = [];
    const len: any = this.msg;
    for (let i = 0; i < len.length; i++) {
      if (len.indexOf(len[i]) === len.lastIndexOf(len[i])) {
        arr.push(len[i]);
      }
    }
    return arr;
  }
  get set() {
    return Array.from(new Set(this.msg));
  }
  get operator() {
    return [...new Set(this.msg)]; // 内部使用for...of循环
  }
}
</script>

<style scoped lang="less">
</style>