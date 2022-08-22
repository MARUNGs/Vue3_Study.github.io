<!-- 할인 베너 컴포넌트 -->
<template>
  <div class="discount">
    <h4>지금 결제하면 {{ dataObj.discountPer }}% 할인 !!</h4>
  </div>
</template>

<script setup lang="ts">
import { AppInfo } from '@/types';
import { onMounted } from 'vue';

const props = defineProps<{
  dataObj :AppInfo
}>()

// ********** hooks **********
onMounted(() => {
  setInterval(() => {
    if(props.dataObj.discountPer > 0) {
      props.dataObj.discountPer = props.dataObj.discountPer - 1
    }
  }, 1000)
})
</script>

<style scoped>
/* 베너 설정 */
.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>