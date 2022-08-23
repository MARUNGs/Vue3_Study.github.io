import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

/** router 추가1 : import router.ts */
import router from '@/router'

/** npm 설치시 아래 추가 */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

/** router 추가2 use(routerName)*/
createApp(App).use(router).mount('#app')