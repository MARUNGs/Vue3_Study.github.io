<template>
    <div class="todoDiv">
        <button @click="testFn"> axios </button>
        <button @click="beautyFn"> beauty </button>
        <div>

        </div>
        <br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
</template>

<script setup lang="ts">
// ********** import **********
import axios from 'axios'


const list = ['테스트1', '테스트2', '테스트3']


// ********** Lifecycle hooks **********


// ********** function **********
function testFn() :void {
    // 해결 1. express에서 cors 설정 반드시 필요
    // 해결 2. vite.config.ts 파일에서 proxy 설정
    axios.get('/api/memos')
    .then((res) => {
        console.log(res.data)
    })
    .catch(() => {
        console.log('Error ...')
    })
}

function beautyFn() :void {
    axios.get('/api/beauty')
    .then((res) => {
        alert(res.data)
    })
    .catch(() => {
        console.log('Error ...')
    })
}
</script>

<style scoped>
</style>