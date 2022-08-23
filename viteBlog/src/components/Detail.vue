<template>
    <div>
        <h4>상세페이지</h4>
        <h5>{{ blogData[$route.params.id as any].title }}</h5>
        <p>{{ blogData[$route.params.id as any].content }}</p>

        <router-view />
    </div>
</template>

<script setup lang="ts">
/********** import **********/
import {BlogType} from '@/types'

/********** props / emit **********/
const props = defineProps<{
    blogData :BlogType
}>()

/********** variable **********/


</script>

<style scoped>

</style>