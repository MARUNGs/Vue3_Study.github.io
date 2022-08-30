<template>
    <div :class="[filter !== null ? filter : null]"
         class="filter-item" 
         :style="`background-image: url(${blob})`">
        <br />
        <button class="btn-gradient red mini" @click="fire"><slot></slot></button>
    </div>
</template>

<script setup lang="ts">
// ********** import **********
import { ComponentInternalInstance, getCurrentInstance, onMounted } from 'vue';


// ********** props **********
const props = defineProps<{
    blob :string,
    filter :string
}>()


// ********** variable **********
const instance = getCurrentInstance() as ComponentInternalInstance
const emitter = instance.appContext.config.globalProperties.emitter


// ********** lifecycle hooks **********
// emitter 예시 ...
/*
onMounted(() => {
    // 2. on() 으로 데이터 전달받기
    // 해당 함수명('fire')을 실행하면 함수 내 코드를 실행할 것
    emitter.on('fire', () => {
        console.log('ㅎㅎ!!')
    })
})
*/

// ********** function **********
/** emitter 사용하기 */
function fire() :boolean {
    // 1. emit() 으로 전송
    emitter.emit('fire', props.filter)

    return false
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

/* 버튼 설정 */
.mini {
    width: 80px;
    height:40px;
    font-size: 12px;
}
.btn-gradient {
	text-decoration: none;
	color: white;
	display: inline-block;
	position: relative;
	border: 1px solid rgba(0,0,0,0.21);
	border-bottom: 4px solid rgba(0,0,0,0.21);
	border-radius: 4px;
	text-shadow: 0 1px 0 rgba(0,0,0,0.15);
}
.btn-gradient.red{ 
	background: rgba(250,90,90,1);
	background: -webkit-gradient(linear, 0 0, 0 100%, from(rgba(250,90,90,1)), to(rgba(232,81,81,1)));
	background: -webkit-linear-gradient(rgba(250,90,90,1) 0%, rgba(232,81,81,1) 100%);
	background: -moz-linear-gradient(rgba(250,90,90,1) 0%, rgba(232,81,81,1) 100%);
	background: -o-linear-gradient(rgba(250,90,90,1) 0%, rgba(232,81,81,1) 100%);
	background: linear-gradient(rgba(250,90,90,1) 0%, rgba(232,81,81,1) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fa5a5a', endColorstr='#e85151', GradientType=0 );
}
.btn-gradient.red:active {
    background: #E35252;
}
</style>