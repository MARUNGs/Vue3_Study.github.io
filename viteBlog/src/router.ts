import { createWebHistory, createRouter } from "vue-router";
import List from '@/components/List.vue';
import Home from '@/components/Home.vue';
import Detail from '@/components/Detail.vue'
import Author from '@/components/Author.vue'
import Comment from '@/components/Comment.vue'

// routing 작업
const routes :any = [{
    path: "/list",
    component: List,
  }, {
    path: '/',
    component: Home
  }, {
    path: '/detail/:id', // :id -> 파라미터 : 아무문자 매칭가능
                         // :id(정규식 작성 가능)
    component: Detail,
    children: [{
        path: 'author', // children 안의 경로는 상대경로로 작성해야 한다.
        component: Author
    }, {
        path: 'comment',
        component: Comment
    }]
  }
];

// router 설정(버전에 맞게 사용할 것.)
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 