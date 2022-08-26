<template>
    <div class="header">
        <ul class="header-button-left">
        <li>Cancel</li>
        </ul>
        <ul class="header-button-right">
        <li>Next</li>
        </ul>
        <img src="./assets/logo.png" class="logo" />
    </div>

    <Container :Data="refData" 
               :step="step"
               :blob="blob as string" />
    <button type="button" class="btn btn-primary" 
            @click="pushData"> 더보기
    </button>

    <div class="footer">
        <ul class="footer-button-plus">
            <input @change="upload" type="file" id="file" class="inputfile" />
            <label for="file" class="input-plus">+</label>
        </ul>

        <button v-for="(v, i) in new Array(3)"
                @click="step = i">메뉴 {{ i }}</button>
    </div>
</template>

<script setup lang="ts">
import Container from '@/components/Container.vue'
import {Data} from '@/types'
import axios from 'axios'
import { reactive, ref } from 'vue';

// ********** Type & Interface **********


// ********** Object **********


// ********** Variable **********
let cnt :number = 0;
let step = ref<number>(0);
const refData = reactive(Data)
// let blob :string
const blob = ref<string>()


// ********** function **********
/** 더보기 클릭 */
function pushData() :void {
    if(cnt < 2) {
        axios.get('https://codingapple1.github.io/vue/more' + (cnt) + '.json')
        .then((response) => {
            refData.push(response.data)
        })

        ++cnt
    } else {
        alert('더 이상 게시물이 존재하지 않습니다.')
    }
}

/** 파일 업로드 */
function upload(e :Event) :void {
    const uploadFile = e.target as HTMLInputElement

    if(uploadFile) {
        // ref 데이터 삽입 시 .value 이용
        blob.value = URL.createObjectURL(uploadFile.files![0]) as string // 파일 여러개
        step.value = 1
    }
    // blob ? 0과 1로 이루어진 데이터를 blob 객체에 넣어서 반환시켜주어 이미지 조작이 가능해짐
}
</script>

<style scoped>
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: #ffbdbd;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: rgb(150, 44, 44);
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
}
.header-button-right {
  color: rgb(150, 44, 44);
  float: right;
  width: 50px;
  cursor: pointer;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: #ffbdbd;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
</style>
