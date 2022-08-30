<template>
    <div :class="[filter !== null ? filter : null]" class="filter-item" :style="`background-image: url(${blob})`"></div>
    <button @click="fire">BTN</button>
</template>

<script setup lang="ts">
const props = defineProps<{
    blob :string,
    filter :string
}>()

// ********** function **********
/** emitter 사용하기 */
function fire() {
    
}
</script>

<style scoped>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>