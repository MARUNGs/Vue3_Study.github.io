import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path' // 외부 라이브러리 설치 : npm install --save @types/node

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
        '/api': {
            target: 'http://localhost:5000',  // /api 앞의 origin 도메인을 target으로 바꾸겠다
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ''),
            secure: false,
            ws: true
        }
    }
  },
  resolve: {
    alias: {
        '@/': path.resolve(__dirname, './src') + '/'
    }
  }
})
