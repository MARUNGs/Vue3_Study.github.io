<template>
    <div v-if="step === 0">
        <Post v-for="(d, i) in Data"
                :i="i"
                :d="d"
                :filterNm="d.filter"
        />
    </div>

    <!-- 필터선택페이지 -->
    <div v-if="step === 1">
        <div :class="filterNm" class="upload-image" :style="{'background-image': `url(${blob})`}"></div>
        <div class="filters">
            <FilterBox v-for="(filter, i) in FilterNames"
                       :blob="blob"
                       :filter="filter">
                    {{ filter }}
            </FilterBox>

        </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step === 2">
        <div :class="filterNm" class="upload-image" :style="{'background-image': `url(${blob})`}"></div>
        <div class="write">
            <!-- JS 버전 -->
            <!-- <textarea class="write-box" id="text" @input="write($event)">write!</textarea> -->
            <!-- TS 버전 -->
            <textarea class="write-box" id="text" @input="$emit('write', $event)">write!</textarea>
        </div>
    </div>

    <!-- 마이페이지 -->
    <div v-if="step === 3">
        <MyPage />
    </div>

    <!-- TodoList -->
    <div v-if="step === 4">
        <TodoList />
    </div>
</template> 

<script setup lang="ts">
import Post from '@/components/Post.vue'
import { PostInterface, FilterNames } from '@/types'
import FilterBox from '@/components/FilterBox.vue'
import { ComponentInternalInstance, getCurrentInstance } from 'vue'
import MyPage from './MyPage.vue'
import TodoList from './TodoList.vue'

/********** props, emit **********/
/** props */
const props = defineProps<{ 
    Data :PostInterface[],
    step :number,
    blob :string,
    filterNm : string
}>()

/** emits */
// const emitsBefore = defineEmits(['write'])






// ********** variable **********
const instance = getCurrentInstance() as ComponentInternalInstance
const emitter = instance.appContext.config.globalProperties.emitter


// ********** function **********
// $emit 인라인 함수로 변경처리함 ... 
/** 글 발행 - JS 버전 */
// function write(param :Event) {
//     let target = param.target as HTMLInputElement
//     let value = target.value as string
//     emitsBefore('write', value) // parameter를 부모 컴포넌트로 전송
// }

/** 글 발행 - TS 버전 */
// const emit = defineEmits<{
//     (e :'writeTest', param :any) :void
// }>()
</script>

<style scoped>
.upload-image{
width: 100%;
height: 450px;
/* background: cornflowerblue; */
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
    border: none;
    width: 90%;
    height: 100px;
    padding: 15px;
    margin: auto;
    display: block;
    outline: none;
    
    color: #f1f1f1;
    background-color: rgb(23, 23, 23);
}
</style>