import { createWebHistory, createRouter } from "vue-router";
import BlogList from './components/List.vue';
import HomeContents from './components/Home.vue';

const routes = [
    {
        path: "/list",
        component: BlogList,
    },
    {
        path: "/home",
        component: HomeContents,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 