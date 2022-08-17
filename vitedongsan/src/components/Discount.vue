<!-- 할인 베너 컴포넌트 -->
<template>
  <div class="discount">
    <h4>지금 결제 시 20% 할인</h4>
  </div>
</template>

<script setup lang="ts">
// Vue 3 버전 이후부터는 export default { name : Discount } 가 이미 내장되어 있기 때문에
// 생략할 수 있다. (더이상 설정할 것이 없다면 이게 끝이라는 얘기다.)
// ※숙지 : 컴포넌트.vue 파일명은 2단어 이상으로 작명해야 에러나지 않는다.
//          이게 실으면 package.json 파일에서 rules 속성에 {"vue/multi-word-component-names": "off"}를 추가한다.
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