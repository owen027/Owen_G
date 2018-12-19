<template>
  <div class="home">
    <h3>{{name}}</h3>
    <HelloWorld :title.sync="name" msg="传入的prop值禁止在子组件中修改如需改变父组件中的数据要用$emit"/>
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
  // computed: {
  //   repeat() {
  //     return this.num + 1;
  //   }
  // },
})
export default class Home extends Vue {
  protected num: number = 12;
  protected name: string = 'title';
}
</script>
