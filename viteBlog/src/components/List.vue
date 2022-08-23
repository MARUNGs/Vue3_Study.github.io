<template>
    <div v-for="(data, i) in blogData">
        <!-- 글 제목 누르면 detail 페이지 이동하는 다이나믹한 방법! -->
        <h5 class="clickTitle" @click="$router.push('/detail/' + data.number)">{{ data.title }}</h5>
        <p>{{ data.content }}</p>
    </div>
</template>

<script setup lang="ts">
/********** import **********/
import {BlogType, blogData} from '@/types'

/********** props | emit **********/
const props = defineProps<{
    blogData: BlogType
}>()
</script>

<style scoped>
.clickTitle {
    cursor: pointer;
}
.clickTitle::hover {
    background-color: grey;
}
</style>