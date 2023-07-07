# Vue_Practice_02

## vue-router
#### vue-router 설치
```
npm install vue-router@4
```

#### router.js 파일 작성 
path, component 부분 설정하기. 

```tsx
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/경로",
    component: import해온 컴포넌트,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
```

#### main.js 수정
main.js에 router 사용한다고 선언. 

```tsx
import router from './router'
createApp(App).use(router).mount('#app')
```

#### `<router-view></router-view>` 추가
라우터로 구분된 페이지 보여줄 위치에 `<router-view>`추가. <br>
데이터 전송 시 props로 전송. 

```tsx
// (App.vue)

<template>
  <div>
    <router-view :blog="blog"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      blog : blogData,
    }
  },
}
</script>
```

#### 페이지 이동 링크
`<router-link>`로 다른 페이지 이동 링크 설정. <br>
`to=""` 안에 경로 설정. 

```tsx
<router-link to="/list">이동하기</router-link>
```

## URL 파라미터
`:파라미터명`을 추가하여 동적 URL 파라미터 만들기. <br>

```tsx
const routes = [
  {
    path: '/detail/:id',
    component: Detail,
  },
];
```

`$route.params.id`로 url에 있는 파라미터 가져오기<br>
```tsx
<h5>{{ blog[$route.params.id].title }}</h5>
<p>{{ blog[$route.params.id].content }}</p>
```

## Nested routes
#### nested routes
특정 페이지 내에서 또 라우트를 나누는 것. <br>
children이라는 항목 개설 후 route 추가.<br>

```tsx
import Author from './components/Author.vue';
import Comment from './components/Comment.vue';

const routes = [
  {
    path : '/detail/:id',
    component : Detail,
    children : [
      {
        path : 'author',
        component : Author
      },
      {
        path : 'comment',
        component : Comment
      },
    ]
  }
]
```

#### push 함수
`$router.push('이동할 페이지')`로 페이지 이동 가능.<br>

```tsx
<div>
  <h5 @click="$router.push('/detail/0')">{{ blog[0].title }}</h5>
</div>
```