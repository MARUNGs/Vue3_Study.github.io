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
        /* 이거보다 Vuex를 권장한다. (상태관리) */
        /* 글로벌 변수보관함, 글로벌 변수는 사용을 지양하도록 한다. */
app.config.globalProperties.emitter = emitter


app.mount('#app')
