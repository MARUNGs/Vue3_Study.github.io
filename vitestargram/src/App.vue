<!-- 카카오채널 search id : wise_counseling -->
<template>
    <div id="minWidth">
        <div class="header">
            <ul class="header-button-left">
                <li v-if="step >= 1" class="btn-two mini red" @click="cancelFn">Cancel</li>
                <li v-if="step === 0" class="btn-two mini blue" @click="moveStep"> MyPage </li>
            </ul>

            <!-- 클릭시 다음 화면으로 전환 -->
            <ul class="header-button-right">
                <li v-if="step === 1" class="btn-two mini green" @click="++step"> Next</li>
                <li v-if="step === 2" class="btn-two mini blue" @click="publish">발행</li>
                <li v-if="step === 3" class="btn-two mini blue" @click="showTodoList"> Todo </li>
            </ul>
            <img src="./assets/logo.png" class="logo" />
        </div>

        <!--
            Data : 게시물들 -> Store로 수정
            step : Header에 사용되며 취소/등록을 담당
            blob : 이미지 데이터
            filterNm : 사진필터명(class binding)
                
        -->
        <Container 
                :Data="store.state.data"
                :step="step"
                :blob="(blob as any)"
                :filterNm="filterNm"
                @write="write"
        />
        
        <div class="footer">
            <ul class="footer-button-plus">
                <input @change="upload" type="file" id="file" class="inputfile" />
                <label for="file" class="input-plus btn-two mini red">+</label>
            </ul>
        </div>

        <!-- <h4>{{ $store.state.name + '(' + $store.state.age + ')' }}</h4> -->
        <!-- store 사용법 : $store.commit('함수명', data) -->
        <!-- <button class="btn-two mini blue" @click="$store.commit('changeName')">hey</button> -->
        <!-- <button class="btn-two mini blue" @click="$store.commit('addAge', 10)">add Age</button> -->


        <!-- <button type="button" class="btn-two mini blue" 
                @click="pushData"> 피드 더보기
        </button> -->
    </div>
    <button class="btn-help mini btn-jittery">?</button>
</template>

<script setup lang="ts">
// ********** import **********
import Container from '@/components/Container.vue'
import {Data, PostInterface} from '@/types'
// import axios from 'axios'
import { ComponentInternalInstance, getCurrentInstance, onMounted, reactive, ref } from 'vue';
import { useStore } from 'vuex' // Vuex


// ********** Type & Interface **********


// ********** Object **********


// ********** Variable **********
let cnt :number = 0
let step = ref<number>(0)

// const refData = reactive(Data) // types.ts
const store = useStore() // store.ts - 일반 데이터를 state 데이터로 관리하도록 함. (자동으로 반응형 처리됨)

const blob = ref<string>()
let writeText :string = ''
const instance = getCurrentInstance() as ComponentInternalInstance
const emitter = instance.appContext.config.globalProperties.emitter
let postReactive
let filterNm = ref<string>('')

// const a = computed(() => {
//     return {
//         ...mapState(['data'])
//     }
// })



// ********** lifecycle hooks **********
onMounted(() => {
    // 결론 : emitter보다 props를 이용하도록 하자.
    emitter.on('fire', (filterParam :string) => {
        let list = document.querySelector('.upload-image') as Element

        // 초기화
        let deleteClassStr = list.classList.value.split('upload-image')[1]

        if(deleteClassStr.length > 0) {
            list.classList.remove(deleteClassStr.trim()) // classOrigin을 제외한 나머지 클래스 삭제
            list.classList.add(filterParam) // 새 클래스 추가
        } else {
            list.classList.add(filterParam)
        }

        filterNm.value = filterParam
    })
})


// ********** function **********
/** 취소하기 기능 */
function cancelFn() :void {
    step.value = 0
    filterNm.value = ''
}

/** 더보기 클릭 -> Vuex 이용 */
function pushData() :void {
    if(cnt < 2) {
        // store의 actions 함수를 호출할 때는 dispatch 이용
        store.dispatch('getData', cnt)
        ++cnt
        

        // axios.get('https://codingapple1.github.io/vue/more' + (cnt) + '.json')
        // .then((response) => {
        //     // refData.push(response.data) // 기존 list 삽입
        //     store.commit('pushData', response.data) // Vuex -> data list 변경
        // })

        // ++cnt
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

/** 발행 객체 생성 */
function write(param :Event) :void {
    let target = param.target as HTMLInputElement
    let value = target.value as string
    
    writeText = value
}

/** 발행기능 */
function publish() :void {
    let myPost :PostInterface = {
        name: '가나다',
        userImage: 'https://placeimg.com/100/100/arch',
        postImage: blob.value as string,
        likes: 0,
        date: 'July 18',
        liked: false,
        content: writeText,
        filter: filterNm.value
    }

    postReactive = reactive(myPost)
    // refData.unshift(postReactive) // 기존 data list에 추가
    store.commit('pushUnshift', postReactive) // Vuex -> state data list에 추가
    step.value = 0    
}

/** 마이페이지로 이동 */
function moveStep() :void {
    step.value = 3
}

/** 나의 todo list로 이동 */
function showTodoList() :void {
    step.value = 4
}
</script>

<style scoped>
#minWidth {
    box-sizing: border-box;
    font-family: "consolas";
    margin-top: 60px;
    width: 100%;
    /* max-width: 460px; */
    margin: auto;
    position: relative;
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;
}

ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 35px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 8px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: rgb(23, 23, 23);
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: rgb(150, 44, 44);
  float: left;
  width: 50px;
  /* padding-left: 20px; */
  cursor: pointer;
}
.header-button-right {
  color: rgb(150, 44, 44);
  float: right;
  /* width: 50px; */
  cursor: pointer;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: rgb(23, 23, 23);
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

/* dev-header 설정 */
.btn-two {
    text-decoration: none;
}
.btn-two.mini {
    padding: 4px 12px;
    font-size: 12px;
}
.btn-two {
  color: white; 
  padding: 15px 25px;
  display: inline-block;
  border: 1px solid rgba(0,0,0,0.21);
  border-bottom-color: rgba(0,0,0,0.34);
  text-shadow:0 1px 0 rgba(0,0,0,0.15);
  box-shadow: 0 1px 0 rgba(255,255,255,0.34) inset, 
              0 2px 0 -1px rgba(0,0,0,0.13), 
              0 3px 0 -1px rgba(0,0,0,0.08), 
              0 3px 13px -1px rgba(0,0,0,0.21);
}
.btn-two:active {
  top: 1px;
  border-color: rgba(0,0,0,0.34) rgba(0,0,0,0.21) rgba(0,0,0,0.21);
  box-shadow: 0 1px 0 rgba(255,255,255,0.89),0 1px rgba(0,0,0,0.05) inset;
  position: relative;
}
.btn-two.green { background-color: #9abf7f; }
.btn-two.green:active { box-shadow: 0 0 #87a86f; background-color: #87a86f; }

.btn-two.blue     {background-color: #7fb1bf;}
.btn-two.blue:active {box-shadow: 0 0 #74a3b0; background-color: #709CA8;}






/* 도움말 버튼 설정 */
/* 도움! 버튼 - 우측하단 고정 */
.btn-help {
    text-decoration: none;
    padding: 4px 12px;
    font-size: 20px;
    color: white; 
    display: inline-block;
    border: 1px solid rgba(0,0,0,0.21);
    border-bottom-color: rgba(0,0,0,0.34);
    text-shadow:0 1px 0 rgba(0,0,0,0.15);
    box-shadow: 0 1px 0 rgba(255,255,255,0.34) inset, 
                0 2px 0 -1px rgba(0,0,0,0.13), 
                0 3px 0 -1px rgba(0,0,0,0.08), 
                0 3px 13px -1px rgba(0,0,0,0.21);
    
    background-color: #7fb1bf;
}
.btn-help:active {
    box-shadow: 0 0 #74a3b0; background-color: #709CA8;
}



.btn-jittery {
    position: fixed;
    width: 40px;
    height: 40px;
    right: 30px;
    bottom: 30px;
    border-radius: 50%;
}

.btn-two.red       {background-color: #fa5a5a;}
.btn-two.red:active {box-shadow: 0 0 #ff4c4b; background-color: #ff4c4b;}



</style>
