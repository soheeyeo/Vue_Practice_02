import { createWebHistory, createRouter } from "vue-router";
import BlogList from'./components/List.vue';

const routes = [
    {
        path: "/list",
        component: BlogList,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 