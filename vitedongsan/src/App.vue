<template>
    <!-- UI 생성법 : 미리 만들어두고 조건이 맞으면 보여주는 것! 
        1. UI의 현재 상태를 데이터로 저장
        2. 데이터에 따라 UI 보이기 설정
    -->
    <div class="black-bg" v-if="dataObj.modalFlag">
      <div class="white-bg">
        <span class="right" @click="() => {
          dataObj.modalFlag = false
        }"> X </span>
        <!-- <b-button variant="outline-primary" class="right" @click="() => { dataObj.modalFlag = false }"> X </b-button> -->
        <h4>상세페이지 title</h4>
        <p>상세페이지 content</p>
      </div>
    </div>

  <div>
    <div class="menu">
      <a v-for="(menu, i) in dataObj.menus" :key="i">{{ menu }}</a>
    </div>
  </div>

  <div v-for="(data, i) in dataObj.oneRoomData" class="content">
    <img :src="data.image" class="room-img" />
    <h4 :style=dataObj.style @click="modalOpen()">{{ data.title }}</h4>
    <p>{{ data.content }}</p>
    <p>{{ data.price }}원</p>
    <!-- <button @click="increase(i)">허위매물 신고바람!</button>
    <span>신고 수 : {{ dataObj.countList[i].count  }}</span> -->
  </div>
</template>

<!-- ------------------------------------------------------------------------------------------------------------------ -->

<!-- Vue 3 -->
<script setup lang="ts">
import {ref, reactive} from "@vue/reactivity";
// 외부 타입스크립트 객체를 불러와야한다.
import {AppInfo, Data} from "@/types"

// 2. 객체형 외부 타입스크립트
const dataObj = reactive<AppInfo>({
  style: 'color: skyblue; cursor: pointer;',
  products: [{ id: 0, name: '역삼동 원룸' }, { id: 1, name: '천호동 원룸' }, { id: 2, name: '마포구 원룸' }],
  menus: ['Home', 'shop', 'about'],
  countList: [{ id: 0, count: 0 }, { id: 1, count: 0 }, { id: 2, count: 0 }],
  modalFlag: false,
  oneRoomData: Data
})

// 함수 생성
function increase(i :number) :void {
  let products = dataObj.products
  let countList = dataObj.countList

  if(products && countList) {
    if(products[i].id === countList[i].id) {
      ++countList[i].count
    } else {
      console.log('id가 없드')
    }
  } else {
    console.log('객체가 없드')
  }
}

// 모달창 오픈
function modalOpen() :void {
  let flag = dataObj.modalFlag

  if(!flag) {
    dataObj.modalFlag = true
  } else {
    dataObj.modalFlag = false
  }
}

// 1. 단순 자료형 타입스크립트
// let roomName = ref<string>('허위매물')
// let style    = ref<string>('color: skyblue')

// let products = ref<string[]>(['역삼동 원룸', '천호동 원룸', '마포구 원룸'])
// let menus    = ref<string[]>(['Home', 'shop', 'abount'])
// let count    = ref<number>(0)

// console.log(roomName.value) // ref는 .value로 접근해야 값을 얻을 수 있다.
</script>


<!-- -------------------------------------------------------------------------------------------------------------- -->


<!-- Vue 2 -->

<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      style: 'color: blue',
      products: ['역삼동 원룸', '천호동 원룸', '마포구 원룸'],
      menus: ['Home', 'shop', 'about'],
      count: 0,
      modalFlag: false // 모달 상태값 <<<--- state 라고 부름. 상태값 취급!
    }
  },
  methods: { // 함수 정의 공간
    increase() { // 함수 안에서 데이터 사용 시 this 이용.
      ++this.count;
    }
  },
  components: {

  }
}
</script>  -->


<style scoped>
/* 기본 설정 */
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}

/* 내비게이션 설정 */
.menu {
  background: darkmagenta;
  padding:15px;
  width: 100%;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}

/* logo 설정 */
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

/* v-for */
.content {
  width: 33%;
  float: left;
}
.room-img {
  width: 100%;
  margin-top: 40px;
}

/* modal 설정 */
.black-bg {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 10px;
  padding: 20px;
}
.right {
  float: right;
  cursor: pointer;
}
</style>
