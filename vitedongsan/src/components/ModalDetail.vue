<template>
  <div class="black-bg" v-if="dataObj.modalFlag">
    <div class="white-bg">
      <div class="close">
        <span class="right" @click="$emit('closeModal');"> X </span>
      </div>
      <img :src="dataObj.oneRoomData[dataObj.detailIdNo].image" class="detail_image" />
      <h4>{{ dataObj.oneRoomData[dataObj.detailIdNo].title }}</h4>
      <p>{{ dataObj.oneRoomData[dataObj.detailIdNo].content }}</p>
      <!-- (2) 버전 3.2 setup 문법일 경우 -->
      <input @input="emitEvent" />
      <p> {{ inputData.month }}개월 : {{ inputData.monthyPrice }}원</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// ********** import **********
import { AppInfo, InputSaveInfo } from '@/types';
import { onBeforeUpdate, reactive, watch } from 'vue';

// ********** props | emit **********
/** props */
const props = defineProps<{
  dataObj :AppInfo
}>()

/** emit */
const emit = defineEmits<{
  (e: 'emitEvent') :void
}>()

// ********** object **********
/** 사용자 입력 값 */
const inputData = reactive<InputSaveInfo>({
  month: '1',
  monthyPrice: props.dataObj.oneRoomData[props.dataObj.detailIdNo].price
})

// ********** lifecycle hooks **********
/** input 값이 변경될때마다 알림창 띄우기 : watch와 비슷함 */
onBeforeUpdate(() => {
  if(inputData.month.indexOf('2') > -1) {
    console.log('2 를 입력하셨군요?')
    inputData.month = '3'
  }
})

// ********** functions **********
/** 데이터를 감시하는 도구 : watch */
watch(
  () => inputData.month, // 감시할 대상
  (afterInput :string, beforeInput :string) => { // 입력값이 파라미터 n으로 들어옴
    if(Number(afterInput) > 13) {
      alert('13보다 큰 숫자를 입력할 수 없습니다.')
      inputData.month = beforeInput
    }
  }
)


/** 개월 수 * 금액 계산 */
function calculationPrice(detailIdNo :number, e :InputEvent) :void {
  let price = props.dataObj.oneRoomData[detailIdNo].price
  
  // if(Number(param) > 12) {
  //   alert('최대 12개월까지만 입력 가능합니다.')
  // } else {
  //   if(param !== null && !isNaN(Number(param)) && price !== null) {
  //     inputData.monthyPrice = price * Number(param)
  //     inputData.month = param
  //   } else {
  //     alert('문자는 입력할 수 없습니다.')
  //   }
  // }
}

/** DOM 이벤트는 이렇게 쓰는 거란다. */
function emitEvent(e: Event) :void {
  // typescript 잡기 위해 as 문법 이용
  const target = e.target as HTMLInputElement;
  // interface로 type을 잡았으나 확실히 잡기 위해 한번 더 type 설정함
  const value :string = target.value;
  
  // inputData.month = value
  if(!isNaN(Number(value))) {
    inputData.monthyPrice = props.dataObj.oneRoomData[props.dataObj.detailIdNo].price * Number(value)
    inputData.month = value
  } else {
    alert('문자는 입력할 수 없습니다.')
    inputData.month = '1'
  }
}
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