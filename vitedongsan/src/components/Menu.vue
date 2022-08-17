<template>
  <div>
    <div class="menu">
      <a v-for="(menu, i) in menus">{{ menu }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  menus :string[]
}>()
</script>

<style scoped>
/* 내비게이션 설정 */
.menu {
  background: rgb(146, 109, 146);
  padding:15px;
  width: 100%;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
</style>