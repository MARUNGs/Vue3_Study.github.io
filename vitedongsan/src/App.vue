<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>

    <!-- HTML 안에서 반복문 : v-for -->
    <div>
      <a></a>
    </div>

    <div>
      <h4 class="red" :style=style>{{ roomName }} 원룸</h4>
      <p>50 만원</p>
    </div>
    <div>
      <h4>{{ products[0] }}</h4>
      <p>10마넌</p>
    </div>
  </div>
</template>

<!-- Vue 3버전 -->
<script setup lang="ts">
import { reactive, ref } from "@vue/reactivity";

let roomName = ref<string>('허위매물')
let style    = ref<string>('color: skyblue')
let products = ref<string[]>(['역삼동 원룸', '천호동 원룸', '마포구 원룸'])

console.log(roomName.value) // ref는 .value로 접근해야 값을 얻을 수 있다.

// class | style 같은 값들도 선언할 수 있다.
</script>



<!-- Vue 2버전 -->
<!-- 
<script>
export default {
  name: 'App',
  data() {
    return {
      style: 'color: blue',
      products: ['역삼동 원룸', '천호동 원룸', '마포구 원룸']
    }
  },
  components: {

  }
}
</script> 
-->





























<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
