import { createWebHistory, createRouter } from "vue-router";
import BlogList from './components/List.vue';
import HomeContents from './components/Home.vue';
import DetailContents from './components/Detail.vue';

const routes = [
    {
        path: "/list",
        component: BlogList,
    },
    {
        path: "/home",
        component: HomeContents,
    },
    {
        path: "/detail/:id",
        component: DetailContents,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 