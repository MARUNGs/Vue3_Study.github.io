<template>
    <div v-if="step === 0">
        <Post v-for="(d, i) in Data"
                :i="i"
                :d="d"
        />
    </div>

    <!-- 필터선택페이지 -->
    <div v-if="step === 1">
        <div class="upload-image" :style="{'background-image': `url(${blob})`}"></div>
        <div class="filters">
            <FilterBox v-for="(filter, i) in FilterNames"
                       :blob="blob"
                       :filter="filter">
            </FilterBox>

        </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step === 2">
        <div class="upload-image" :style="{'background-image': `url(${blob})`}"></div>
        <div class="write">
            <!-- JS 버전 -->
            <!-- <textarea class="write-box" id="text" @input="write($event)">write!</textarea> -->
            <!-- TS 버전 -->
            <textarea class="write-box" id="text" @input="$emit('write', $event)">write!</textarea>
        </div>
    </div>
</template> 

<script setup lang="ts">
import Post from '@/components/Post.vue'
import { PostInterface, FilterNames } from '@/types'
import FilterBox from '@/components/FilterBox.vue'

/********** props, emit **********/
/** props */
const props = defineProps<{ 
    Data :PostInterface[],
    step :number,
    blob :string
}>()

/** emits */
const emitsBefore = defineEmits(['write'])

// ********** function **********
/** 글 발행 - JS 버전 */
function write(param :Event) {
    let target = param.target as HTMLInputElement
    let value = target.value as string
    emitsBefore('write', value) // parameter를 부모 컴포넌트로 전송
}

/** 글 발행 - TS 버전 */
const emit = defineEmits<{
    (e :'write', param :any) :void
}>()
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
}
</style>