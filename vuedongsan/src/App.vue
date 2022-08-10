<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <h4>XX 원룸</h4>
      <p>{{  }}</p>
    </div>
  </div>
</template>

<script lang="ts">
// 일반 Vue3 환경

import { Options, Vue } from 'vue-class-component';

let 이름:string = 'kim' // ts: 변수 자료형 지정 가능

@Options({
  data() {
    return {
      // 데이터 담기
      price1: 60,
      name: 이름
    }
  },
  components: {
    
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
