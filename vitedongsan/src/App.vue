<template>
  <transition name="fade">
    <ModalDetail :dataObj="dataObj"
                  @closeModal="dataObj.modalFlag = false;" />
  </transition>
  <Menu :menus="dataObj.menus" />

  <Discount :dataObj="dataObj" />

  <div>
    <button @click="priceSortAsc">가격낮은순</button>
    <button @click="priceSortDesc">가격높은순</button>
    <button @click="productNameAsc">가나다순</button>
    <button @click="sortBack">되돌리기</button>
  </div>

  <Card v-for="(data, i) in dataObj.oneRoomData" 
        :oneRoomData="dataObj.oneRoomData[i]" 
        :style="dataObj.style"
        :modalFlag="dataObj.modalFlag"
        @modalOpen="
            dataObj.modalFlag  = true; 
            dataObj.detailIdNo = $event"
  />
</template>

<!-- ------------------------------------------------------------------------------------------------------------------ -->

<!-- Vue 3 -->
<script setup lang="ts">
// ********** import **********
import {ref, reactive} from "@vue/reactivity"
import {AppInfo, Data} from "@/types"

// ********** Components **********
import Discount from "@/components/Discount.vue" // 외부 컴포넌트 import만 하면 자동으로 등록된다.
import ModalDetail from "@/components/ModalDetail.vue"
import Menu from "@/components/Menu.vue"
import Card from "@/components/Card.vue"
import { onMounted } from "vue"

// ********** Object **********
const dataObj = reactive<AppInfo>({
  style: 'color: skyblue; cursor: pointer;',
  products: [{ id: 0, name: '역삼동 원룸' }, { id: 1, name: '천호동 원룸' }, { id: 2, name: '마포구 원룸' }],
  menus: ['Home', 'shop', 'about'],
  countList: [{ id: 0, count: 0 }, { id: 1, count: 0 }, { id: 2, count: 0 }],
  modalFlag: false,
  oneRoomData: Data,
  originalData: [...Data],
  detailIdNo: 0,
  object :{name: 'Yoo', age: 20},
  showDiscount: true,
  discountPer: 30
})

// ********** LifeCycle Hooks **********
// onMounted(() => {
//   setTimeout(() => {
//     dataObj.showDiscount = false
//   }, 2000)
// })

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

/** 가격 낮은 순 */
function priceSortAsc() :void {
  dataObj.oneRoomData.sort((a, b) => {
    return a.price - b.price
  })
}

/** 가격 높은 순 */
function priceSortDesc() :void {
  dataObj.oneRoomData.sort((a, b) => {
    return b.price - a.price
  })
}

/** 상품명 가나다 순 */
function productNameAsc() :void {
  dataObj.oneRoomData.sort((a, b) => {
    let aTitle = a.title.toUpperCase()
    let bTitle = b.title.toUpperCase()

    if(aTitle < bTitle) {
      return -1
    } else if(aTitle > bTitle) {
      return 1
    } else {
      return 0
    }
  })
}

/** 되돌리기 */
function sortBack() {
  // 주의 : array 값을 등호(=)로 삽입시, 값 공유를 의미한다.
  dataObj.oneRoomData = [...dataObj.originalData]
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

/* 모달창 애니메이션 설정 */
.start {
  opacity: 0;
  transition: all 1s;
}
.end {
  opacity: 1;
}

/* transition 태그 내장 class 설정 ---> .작명-enter-from ... */
.fade-enter-from { /* 시작 애니메이션 */
  opacity: 0;
}
.fade-enter-active { /* 애니메이션 진행하는 동안 */
  transition: all 0.2s;
}
.fade-enter-to { /* 종료 애니메이션 */
  opacity: 1;
}

/* 퇴장 애니메이션 */
.fade-leave-from {
  opacity: 1;
}
.fade-leave-action {
  transition: all 1s;
}
.fade-leave-to {
  opacity: 0;
}
</style>
