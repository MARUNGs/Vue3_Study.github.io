import { defineStore } from "pinia";
import { Data } from "./types";

// Pinia 상태관리 라이브러리 설정
export const strePinia = defineStore({
    id: 'store', // Pinia 에서는 id가 필수.
    state: () => ({
        // 데이터 정의
        data: Data
    }),
    getters: { // 무조건 return
        functionName: (state) => {
            // state 접근
            return state.data
        }
    },
    actions: {
        query(param :any) :void {
            console.log(param) // 해당 함수에서 마무리할때 그냥 대충 쓴다
        }
    }
})