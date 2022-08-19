<template>
  <div class="black-bg" v-if="dataObj.modalFlag">
    <div class="white-bg">
      <div class="close">
        <span class="right" @click="$emit('closeModal')"> X </span>
      </div>
      <img :src="dataObj.oneRoomData[dataObj.detailIdNo].image" class="detail_image" />
      <h4>{{ dataObj.oneRoomData[dataObj.detailIdNo].title }}</h4>
      <p>{{ dataObj.oneRoomData[dataObj.detailIdNo].content }}</p>
      <!-- 유저가 input에 입력한 값을 데이터로 저장하기
           $event : javascript의 이벤트리스너와 동일한 역할임 
           input 관련된 태그는 모두 v-model 이용 가능  -->
      <!-- v-model은? @input="inputData.month = $event.target.value"의 축약버전이다. -->
      <!-- 참고 : input은 숫자로 작성해도 문자 취급한다. typescript 타입 선언을 string형으로 설정해야 한다. -->

      <!-- v.model.number : string 값을 number 값으로 변환시켜주세요 -->
      <!-- <input @input="calculationPrice(dataObj.detailIdNo, $event.target.value)"> -->
      <!-- <input @input="inputData.month = ($event.target!.value) as string"> -->
      <input @input="inputHandler(($event as InputEvent))">

      <!-- @이벤트를 사용하려면 typescript 환경일 경우엔 Narrowing 작업이 필요하다.
           안 그럼 다 에러남. -->
      <!-- <input @input="inputData.month = $event?.target.value" /> -->

      <!-- <textarea v-model="inputData.month"></textarea> -->

      <!-- select 태그는 v-model 선언시 강제로 값이 세팅됨 -->
      <!-- <select v-model="inputData.month">
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select> -->

      <!-- 체크박스는 true/false를 자동적으로 반환해준다. -->
      <!-- <input type="checkbox" v-model="inputData.month"/> -->
      <p> {{ inputData.month }}개월 : {{ inputData.monthyPrice }}원</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// ********** import **********
import { AppInfo, InputSaveInfo } from '@/types';
import { reactive } from 'vue';

// ********** props **********
/** props */
const props = defineProps<{
  dataObj :AppInfo
}>()

// ********** object **********
/** 사용자 입력 값 */
const inputData = reactive<InputSaveInfo>({
  month: '1',
  monthyPrice: props.dataObj.oneRoomData[props.dataObj.detailIdNo].price
})

// ********** functions **********
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
function inputHandler(e: InputEvent) {
  // typescript 잡기 위해 as 문법 이용
  const target = e.target as HTMLInputElement;
  // interface로 type을 잡았으나 확실히 잡기 위해 한번 더 type 설정함
  const value :string = target.value;
  
  // inputData.month = value
  if(!isNaN(Number(value))) {
    inputData.monthyPrice = props.dataObj.oneRoomData[props.dataObj.detailIdNo].price * Number(value)
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