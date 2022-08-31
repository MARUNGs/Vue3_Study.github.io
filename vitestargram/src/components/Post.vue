<template>
    <div class="post">
        <div class="post-header">
        <div class="profile"></div>
        <span class="profile-name">{{ d.name }}</span>
        </div>
        <div :class="filterNm" 
             class="post-body" 
             :style="{ 'background-image': `url(${ d.postImage })` }"
             @click="clickLike"></div>
        <div class="post-content">
        <p>{{ d.likes }} Likes</p>
        <p><strong>{{ d.name }}</strong> {{ d.content }}</p>
        <p class="date">{{ d.date }}</p>
        </div>
    </div> 
</template>

<script setup lang="ts">
import { PostInterface } from '@/types'
import { ref } from 'vue'
import { useStore } from 'vuex'


/********** Type **********/



/********** props, emit **********/
/** props */
const props = defineProps<{ 
    i :number,
    d :PostInterface,
    filterNm :string
}>()


// ********** Vuex - store **********
// store 내의 state를 호출할 땐 {state}
// const store = useStore(); console.log(store.state.state데이터명)
const store = useStore()
// const {state} = useStore() << 이렇게도 사용 가능 !!


/********** Variable **********/
const imgClick = ref<number>(0)


/********** function **********/
/** 좋아요 기능 */
function clickLike() :void {
    ++imgClick.value

    if(imgClick.value === 1) { // 1번 누르면 좋아요 개수 1 증가
        store.commit('plusLikes', props.i)
    } else if(imgClick.value === 2) { // 2번 누르면 좋아요 개수 1 차감
        store.commit('minusLikes', props.i)
        imgClick.value = 0
    } else {
        console.log('여기로는 들어올 수 없어!')
    }
}

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