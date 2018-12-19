<template>
  <div class="hello">
    <button @click="propChange">改变prop->title</button>
    <h1>{{ msg }}</h1>
    <div>
      <input v-model="msg" type="text">
      <div>使用v-model可以改变prop值,虽然可行,但不建议使用vue会报错 建议使用$emit方法
        <p>.sync修饰符实际上是利用$emit方法给父组件传值并赋值</p>
        <p>子组件: this.$emit('update:xxx', (this.name = xxx));</p>
      </div>
    </div>
    <p>
      <textarea style="display:block" v-bind="{a:12}" name="sss" cols="30" rows="5"></textarea>
      <span>没有参数的v-bind需要对象或数组值 一般用在自定义组件上</span>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop(String) private msg!: string;
  @Prop([String, Number]) private title!: string | number;
  private name = this.title;
  propChange() {
    this.$emit('update:title', (this.name = 'newSync'));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
