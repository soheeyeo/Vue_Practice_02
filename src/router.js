import { createWebHistory, createRouter } from "vue-router";
import BlogList from './components/List.vue';
import HomeContents from './components/Home.vue';
import DetailContents from './components/Detail.vue';
import AuthorPage from './components/Author.vue';
import CommentPage from './components/Comment.vue';

const routes = [
    {
        path: "/detail/:id",
        component: DetailContents,
        children: [
            {
                path: 'author',
                component: AuthorPage,
            },
            {
                path: 'comment',
                component: CommentPage,
            },
        ]
    },
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