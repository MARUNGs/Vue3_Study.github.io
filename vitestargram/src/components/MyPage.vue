<template>
    <ul>
        <li>
            <div style="padding : 10px" class="myPage">
                <h4>팔로워</h4>
                <input placeholder="🔍 검색" @input="search($event)" />
                <div class="post-header" v-for="(person, i) in follower">
                    <div class="profile" :style="`background-image: url(${person.image})`"></div>
                    <span class="profile-name">{{ person.name }}</span>
                </div>
            </div>
        </li>
        <li>
            <TodoSummary />
        </li>
    </ul>
    
</template>

<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'
import TodoSummary from '@/components/TodoSummary.vue'


// Composition API 방식 : 여태동안 내가 한거임 ㅋㅋ setup()
let follower :any = ref([])



// ********** Lifecycle hooks **********
onMounted(() => {
    axios.get('/follower.json').then((response) => {
        follower.value = response.data
    })
})


function search(e :Event) :void {
    let target = e.target as HTMLInputElement
    let value = target.value as string

    follower.value.forEach((data :any, i :number) => {
        console.log(data.name.indexOf(value))
        if(data.name.indexOf(value) === -1) {
            console.log(follower.value.splice(i, i+1))
        }
    });
}
</script>

<style scoped>
.profile {
  background-image: url("https://placeimg.com/100/100/arch");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.post-header {
  height: 60px;
  padding: 20px;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
ul li {
    list-style-type: none; 
    display: inline-flex;
}
li {
    margin: 0 10px;
}
</style>