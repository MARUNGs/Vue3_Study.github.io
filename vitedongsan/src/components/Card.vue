<template>
  <div class="content">
    <img :src="oneRoomData.image" class="room-img" />
    <h4 :style=style> {{ oneRoomData.title }} </h4>
        <!-- @click="modalOpen();
                dataObj.detailIdNo = data.id" -->
    <p>{{ oneRoomData.content }}</p>
    <p>{{ oneRoomData.price }}원</p>
    <!-- <button @click="increase(i)">허위매물 신고바람!</button>
    <span>신고 수 : {{ dataObj.countList[i].count  }}</span> -->
  </div>
</template>

<script setup lang="ts">
import { AppInfo } from '@/types';

const props = defineProps<{
  oneRoomData :{
    id :number,
    title :string,
    image :string,
    content :string,
    price :number
  },
  style? :string
}>()
</script>

<style scoped>
/* v-for */
.content {
  width: 33%;
  float: left;
}
.room-img {
  width: 100%;
  margin-top: 40px;
}
</style>