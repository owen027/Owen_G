<template>
  <div class="container">
    {{overloaded}}
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
export default class DOM extends Vue {
  protected overloaded: string = '  函数没用重载的概念，定义同名的函数 后面的函数会覆盖之前的函数';

}

</script>
<style lang='less' scoped>

</style>

