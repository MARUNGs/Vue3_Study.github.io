// 상태관리용 저장관리
import axios from 'axios'
import { State } from 'vue'
import {createStore} from 'vuex'
import { Data, PostInterface } from './types'

// Vue 3 기본 문법
// const store = createStore({
//     state() {
//         return {
//             // state 보관 시 여기에 설정할 것.
//             name: 'Yoo',
//             count: 10
//         }
//     }, mutations() {
// 
//      }
// })


export const store = createStore<State>({
    // state의 타입 설정파일 : vuex.d.ts
    state: {
        // state 데이터 정의
        data: [...Data],
        name: 'Yoo',
        age: 20,
        likes: 0
    },
    mutations: { // commit
        // *** state 데이터 변경 정의 *** //
        /** example 1. 이름 변경 */
        changeName(state :State) :void {
            state.name = 'pack'
        },
        /** example 2. payload만큼 나이 증가 */
        addAge(state :State, payload :number) :void {
            state.age += payload
        },
        /** 더보기 클릭 - data list에 객체 삽입 */
        pushData(state :State, payload :PostInterface) :void {
            state.data.push(payload)
        },
        pushUnshift(state :State, payload :PostInterface) :void {
            state.data.unshift(payload)
        },
        /** 좋아요 수 증가 */
        plusLikes(state :State, payload :number) :void {
            ++state.data[payload].likes
        },
        /** 좋아요 수 증가 */
        minusLikes(state :State, payload :number) :void {
            --state.data[payload].likes
        }
    },
    actions: { // dispatch
        // *** ajax 작업 공간 || 오래 걸리는 작업 공간 *** //
        getData(context :any, payload :number) :void {
            axios.get('https://codingapple1.github.io/vue/more' + (payload) + '.json')
            .then((response) => {
                // context = store
                context.commit('pushData', response.data)
            })
        }
    }
})

export default store;

// export function useData() {
//     return baseUseStore(key);
// }