<template>
  <div class="home">
    {{repeat}}
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
  // computed: {
  //   repeat() {
  //     return this.num + 1;
  //   }
  // },
})
export default class Home extends Vue {
  protected num: number = 12;
}
</script>
