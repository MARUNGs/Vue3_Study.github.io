// $store 타입을 재정의 하기 위해 설정
// 상태관리용 저장관리
import { InjectionKey, State } from 'vue';
import {createStore, Store} from 'vuex'
import { PostInterface } from './types';

declare module '@vue/runtime-core' {
    interface State {
        data :PostInterface[]
        name :string
        age :number
        likes :number
    }

    interface ComponentCustomProperties {
        $store :Store<State>
    }
}

export const key :InjectionKey<Store<State>> = Symbol()