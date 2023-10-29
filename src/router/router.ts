import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component:  () => import('@/views/pages/Home.vue'),
    },
    {
        path: '/about',
        component: () => import('@/views/pages/InProgress.vue'),
    },
    {
        path: '/blogs',
        component: () => import('@/views/pages/InProgress.vue'),
    },
]

export default createRouter(
    {
        history: createWebHistory(),
        routes: routes
    }
);
