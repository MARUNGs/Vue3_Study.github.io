<template>
  <!-- 
    * props를 전송하는 다양한 방법
    1. 작명 = "string자료"
    2. :작명 = "number자료"
    3. v-bind="object" :name="object.name" :age="object.age"
  -->

  <ModalDetail :dataObj="dataObj" />
  <Menu :menus="dataObj.menus" />
  <Discount />
  <Card v-for="(data, i) in dataObj.oneRoomData" :oneRoomData="dataObj.oneRoomData[i]" :style="dataObj.style" />
</template>

<!-- ------------------------------------------------------------------------------------------------------------------ -->

<!-- Vue 3 -->
<script setup lang="ts">
// ********** import **********
import {ref, reactive} from "@vue/reactivity"
import {AppInfo, Data} from "@/types" // 외부 타입스크립트 객체를 불러와야한다.

// ********** Components **********
import Discount from "@/components/Discount.vue" // 외부 컴포넌트 import만 하면 자동으로 등록된다.
import ModalDetail from "@/components/ModalDetail.vue"
import Menu from "@/components/Menu.vue"
import Card from "@/components/Card.vue"

// ********** Object **********
const dataObj = reactive<AppInfo>({
  style: 'color: skyblue; cursor: pointer;',
  products: [{ id: 0, name: '역삼동 원룸' }, { id: 1, name: '천호동 원룸' }, { id: 2, name: '마포구 원룸' }],
  menus: ['Home', 'shop', 'about'],
  countList: [{ id: 0, count: 0 }, { id: 1, count: 0 }, { id: 2, count: 0 }],
  modalFlag: false,
  oneRoomData: Data,
  detailIdNo: 0,
  object :{name: 'Yoo', age: 20}
})

// ********** Functions **********
// 신고 수 증가
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
</script>

<style scoped>
/* 기본 설정 */
body {
  margin: 0;
}
div {
  box-sizing: border-box;
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
</style>
