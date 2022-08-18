<template>
  <div class="black-bg" v-if="dataObj.modalFlag">
    <div class="white-bg">
      <div class="close">
        <span class="right" @click="$emit('closeModal', dataObj.modalFlag)"> X </span>
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

const props = defineProps<{
  dataObj :AppInfo
}>()
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