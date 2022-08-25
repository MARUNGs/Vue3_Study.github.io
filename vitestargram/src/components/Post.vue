<template>
    <div class="post">
        <div class="post-header">
        <div class="profile"></div>
        <span class="profile-name">{{ Data[i].name }}</span>
        </div>
        <div class="post-body" :style="{ 'background-image': `url(${ Data[i].postImage })` }"></div>
        <div class="post-content">
        <p>{{ Data[i].likes }} Likes</p>
        <p><strong>{{ Data[i].name }}</strong> {{ Data[i].content }}</p>
        <p class="date">{{ Data[i].date }}</p>
        </div>
    </div> 
</template>

<script setup lang="ts">
import { PostInterface } from '@/types'


/********** Type **********/
type StringType = string


/********** props, emit **********/
/** props */
const props = defineProps<{ 
    i :number,
    Data :PostInterface[]
}>()


/********** Variable **********/
let postImgStr :StringType = ''


/********** function **********/

console.log(props.Data[props.i].postImage)
</script>

<style scoped>
.post {
  width: 100%;
}
.profile {
  background-image: url("https://placeimg.com/100/100/arch");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 60px;
  padding: 20px;
}
.post-body {
  background-image: url("https://placeimg.com/640/480/animals");
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
} 
</style>