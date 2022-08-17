<template>
  <div class="black-bg" v-if="dataObj.modalFlag">
    <div class="white-bg">
      <div class="close">
        <span class="right" @click="() => {
          dataObj.modalFlag = false
        }"> X </span>
      </div>
      <img :src="dataObj.oneRoomData[dataObj.detailIdNo].image" class="detail_image" />
      <h4>{{ dataObj.oneRoomData[dataObj.detailIdNo].title }}</h4>
      <p>{{ dataObj.oneRoomData[dataObj.detailIdNo].content }}</p>
      <p>{{ dataObj.oneRoomData[dataObj.detailIdNo].price }}원</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AppInfo } from '@/types';

// ※ 주의사항 : props는 read-only 성질을 가져야만 한다. 절대 수정하지 않는다.
const props = defineProps<{
  dataObj :AppInfo // dataObj --> 부모 컴포넌트에서 던진 props의 타입은 AppInfo이다.
}>()

// defineProps 변수 이용방법!
// 1. template : 객체의 key값을 호출하여 사용한다.
// 2. script : props.key 값을 호출하여 사용한다.
</script>

<style scoped>
/* modal 설정 */
.black-bg {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 3%;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 10px;
  /* padding: 20px; */
  padding-top: 20px;
  padding-bottom: 10px;
}
.close {
  text-align: right;
  position: relative;
  right: 25px;
}
.right {
  float: right;
  cursor: pointer;
}
.detail_image {
  width: 40%;
}
</style>