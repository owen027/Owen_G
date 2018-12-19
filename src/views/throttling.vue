<template>
  <div class="content">
    <div class="content" v-on="onScroll" >
      <p>One: indexOf方法去重: {{repeat}}</p>
      <p>Two: 哈希算法去重: {{has}} --- 会发生隐试转换</p>
      <ul>
        <!-- <li v-for="item in 15 " :key="item"   @scroll.native="event">
          <p> 
            <input type="text"> - - -
            <span>- - {{ item }}</span>
          </p>
          <p>{{i}}</p>
        </li>-->
        <li>
          <div>
            <input type="text" placeholder="失去焦点" @blur="event">
            <p>onblur -- {{i}}</p>
          </div>
        </li>
        <li>
          <div>
            <button @click="event">点击</button>
            <p>onclick-- {{i}}</p>
          </div>
        </li>
        <li>
          <div>
            <input type="text" @change="event">
            <p>onchange -- {{i}} 失效 用v-module 代替</p>
          </div>
        </li>
        <li>
          <div>
            <button @dblclick="event">
              <span>双击</span>
            </button>
            <p>ondblclick -- {{i}}</p>
          </div>
        </li>
        <li>
          <div>
            <input type="text" placeholder="获取焦点" @focus="event">
            <p>onfocus __ {{i}}</p>
          </div>
        </li>
        <li>
          <div>
            <input type="range" @mousedown="event">
            <p>onmousedown -- {{i}}</p>
          </div>
        </li>
        <li>
          <div>
            <span @mousemove="event">鼠标移动触发</span>
            <p>onmousemove -- {{i}}</p>
          </div>
        </li>
        <li>
          <div>
            <span @mouseout="event">-----------------------------</span>
            <p>onmouseout -- {{i}}</p>
          </div>
        </li>
        <li>
          <div>
            <input type="reset" @reset.native="event">
            <p>onreset -- 失效 {{i}}</p>
          </div>
        </li>
        <li>
          <div>
            <iframe
              @resize.native="event"
              name="baidu"
              id="show-iframe"
              width="100%"
              height="100%"
              frameborder="0"
              src="http://www.baidu.com"
            ></iframe>
            <p>onresize -- 失效 {{i}}</p>
          </div>
        </li>
        <li>
           <li>
          <div>
            <textarea
              @resize.native="event"
              name="baidu"
              id="show-textarea"
            ></textarea>
            <p>onresize -- 失效 {{i}}</p>
          </div>
        </li>
        <li>
          <div>
            <span @mouseup="event">111111</span>
            <p>onmouseup -- {{i}}</p>
          </div>
        </li>
        <li>
          <div>
            <form @submit.prevent="event">onsubmit 失效</form>
            <p>onsubmit -- {{i}}</p>
          </div>
        </li>
        <li>
          <div>
            <input @input.prevent="event">
            <p>oninput-- {{i}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Throttling extends Vue {
  private i: number = 0;
  private msg: Array<object | string | number> = [
    { a: 1 },
    {},
    { a: 1 },
    2,
    3,
    4,
    NaN,
    5,
    '3',
    NaN,
    3,
    '3',
    2,
    2,
    1,
    '6',
    3,
    1
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
    const obj: any = {};
    const arr: any = [];
    const len: any = this.msg.length;
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
  get onScroll() {
      var vm = this
      console.log(this.$listeners);
      
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign({},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          scroll: function (event) {
            // vm.$emit('input', event.target.value)
            console.log(123)
          }
        }
      )
  }
  event(): void {
    ++this.i;
    console.log(`blur - - ${this.i}`);
  }
}
</script>

<style scoped lang="less">
.content {
  height: 300%;
}
</style>