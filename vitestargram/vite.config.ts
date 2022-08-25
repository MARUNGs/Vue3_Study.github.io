import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path' // 외부 라이브러리 설치 : npm install --save @types/node

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
        '@/': path.resolve(__dirname, './src') + '/'
    }
  }
})
