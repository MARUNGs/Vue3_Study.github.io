<template>
  <div>
    <!-- HTML 안에서 반복문 : v-for -->
    <!-- 연습 필요 ... -->
    <!-- <div class="menu" v-for="(data, i) in dataObj" :key="i">
      {
        (data)  
      }
      <a v-for="(menus, j) in data" :key="j"> {{ }}</a>
      <a>1</a>
      <a>2</a>
      <a>3</a>
    </div> -->

    <div class="menu">
      <a v-for="(menu, i) in menus" :key="i">{{ menu }}</a>
    </div>

    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>

    <div v-for="(product, i) in products" :key="product">
      <h4>{{ product }}</h4>
      <p>{{ 100 + i }}원</p>
      <button v-on:click="++count">허위매물 신고  <span>신고 수 : {{ count }}</span> </button>
    </div>
  </div>
</template>

<!-- ------------------------------------------------------------------------------------------------------------------ -->

<!-- Vue 3버전 -->
<script setup lang="ts">
import {ref, reactive} from "@vue/reactivity";
// 외부 타입스크립트 객체를 불러와야한다.
import {AppInfo} from "@/types"

// 객체형 외부 타입스크립트
// const obj = reactive<{알수없음?: number, roomName: string, menus: string[], count: number}>({
const dataObj = reactive<AppInfo>({
  roomName: '가나다라',
  style: 'color: skyblue',
  products: ['역삼동 원룸', '천호동 원룸', '마포구 원룸'],
  menus: ['Home', 'shop', 'abount'],
  count: 0
})

// console.log(dataObj.menus)
// console.log(Object.keys(dataObj))

// 단순 자료형 타입스크립트
// let roomName = ref<string>('허위매물')
// let style    = ref<string>('color: skyblue')
let products = ref<string[]>(['역삼동 원룸', '천호동 원룸', '마포구 원룸'])
let menus    = ref<string[]>(['Home', 'shop', 'abount'])
let count    = ref<number>(0)
// console.log(roomName.value) // ref는 .value로 접근해야 값을 얻을 수 있다.
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
.menu {
  background: darkmagenta;
  padding:15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
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
