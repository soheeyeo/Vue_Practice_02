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
