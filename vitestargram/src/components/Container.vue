<template>
    <Post v-for="(d, i) in Data"
            :i="i"
            :Data="Data"
    />
</template> 

<script setup lang="ts">
import Post from '@/components/Post.vue'
import { PostInterface } from '@/types';

/********** props, emit **********/
/** props */
const props = defineProps<{ 
    Data: PostInterface[]
}>()
</script>