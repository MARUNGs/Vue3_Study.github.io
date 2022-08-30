import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

/** npm 설치시 아래 추가 */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

/** 라이브러리 import 문법 : 경로없음 '/' */
import mitt from 'mitt' 
let emitter = mitt()
let app = createApp(App)
        /* 글로벌 변수보관함 */
app.config.globalProperties.emitter = emitter


createApp(App).mount('#app')
